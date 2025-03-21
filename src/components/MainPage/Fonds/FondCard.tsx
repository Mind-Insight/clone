"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@styles/MainPage/Fonds/FondCard.module.scss";

interface FondCardProps {
	image: string;
	width: string;
	height: string;
}

const FondCard: React.FC<FondCardProps> = ({ image, width, height }) => {
	const activeImage = image.replace("/fonds_list/", "/active_fonds/active_");

	const [isActive, setIsActive] = useState(false);

	const handleMouseEnter = () => {
		setIsActive(true);
	};

	const handleMouseLeave = () => {
		setIsActive(false);
	};

	return (
		<div
			className={styles.card}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className={styles.image_wrapper}>
				<Image
					src={image}
					alt="fond"
					width={width}
					height={height}
					className={`${styles.image} ${
						!isActive ? styles.visible : ""
					}`}
				/>
				<Image
					src={activeImage}
					alt="fond active"
					width={width}
					height={height}
					className={`${styles.image} ${
						isActive ? styles.visible : ""
					} ${styles.active}`}
				/>
			</div>
		</div>
	);
};

export default FondCard;
