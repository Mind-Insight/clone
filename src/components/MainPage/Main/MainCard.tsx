import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import styles from "@styles/MainPage/Main/MainCard.module.scss";
import Tag from "./Tag";

interface TagData {
    image: string;
    info: string;
}

interface MainCardProps {
    image: string;
    title: string;
    address_info: string;
    time_info: string;
    tags: TagData[];
}

const MainCard: React.FC<MainCardProps> = ({
    image,
    title,
    address_info,
    time_info,
    tags,
}) => {
    const [showAllTags, setShowAllTags] = useState(false);
    const [visibleTagsCount, setVisibleTagsCount] = useState(0);
    const tagsContainerRef = useRef<HTMLDivElement>(null);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        const calculateVisibleTags = () => {
            if (tagsContainerRef.current) {
                const containerWidth = tagsContainerRef.current.offsetWidth;
                const tagWidth = 120;
                setVisibleTagsCount(Math.floor(containerWidth / tagWidth));
            }
        };

        calculateVisibleTags();
        window.addEventListener("resize", calculateVisibleTags);
        return () => window.removeEventListener("resize", calculateVisibleTags);
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (tagsContainerRef.current) {
            isDragging.current = true;
            startX.current = e.pageX - tagsContainerRef.current.offsetLeft;
            scrollLeft.current = tagsContainerRef.current.scrollLeft;
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current || !tagsContainerRef.current) return;
        const x = e.pageX - tagsContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        tagsContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const visibleTags = showAllTags ? tags : tags.slice(0, visibleTagsCount);
    const hiddenTagsCount = tags.length - visibleTags.length;

    return (
        <div className={styles.card_container}>
            <div className={styles.card}>
                <div
                    className={styles.tags}
                    ref={tagsContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{
                        cursor: isDragging.current ? "grabbing" : "grab",
                    }}
                >
                    {visibleTags.map((tag, index) => (
                        <Tag
                            key={index}
                            image={tag.image}
                            info={tag.info}
                            border="1px solid rgb(216, 216, 216, 0.6)"
                            size="small"
                        />
                    ))}
                    {!showAllTags && hiddenTagsCount > 0 && (
                        <button
                            className={styles.show_more_button}
                            onClick={() => setShowAllTags(true)}
                        >
                            Еще +{hiddenTagsCount}
                        </button>
                    )}
                </div>

                <div className={styles.content}>
                    {/* <div className={styles.image_container}> */}
                        <Image
                            className={styles.image}
                            src={image}
                            alt="image"
                            width="349"
                            height="349"
                            style={{ pointerEvents: "none" }}
                        />
                    {/* </div> */}

                    <div className={styles.info}>
                        <div className={styles.main_info}>{title}</div>
                        <div className={styles.sub_info}>
                            <div className={styles.address_container}>
                                <Icon
                                    className={styles.address_icon}
                                    icon="tdesign:location"
                                    width="22"
                                    height="22"
                                />
                                <div className={styles.address}>
                                    {address_info}
                                </div>
                            </div>
                            <div className={styles.time_container}>
                                <Icon
                                    className={styles.time_icon}
                                    icon="mingcute:time-line"
                                    width="22"
                                    height="22"
                                />
                                <div className={styles.time}>{time_info}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCard;
