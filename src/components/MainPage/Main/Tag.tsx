import React from "react";
import Image from "next/image";
import styles from "@styles/MainPage/Main/Tag.module.scss";

interface TagProps {
	image: string;
	info: string;
	size?: "small" | "large" | "very_large";
	className?: string;
	color?: string;
	border?: string;
    default_color?: string;
	onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({
	image,
	info,
	size = "large",
	className,
	color,
	border,
	onClick,
    default_color = "white"
}) => {
	const tagClass = {
        small: styles.small,
        large: styles.large,
        very_large: styles.very_large
    }[size];

	return (
		<div
			className={`${styles.tag} ${tagClass} ${className || ""}`}
			style={{
				backgroundColor: color || default_color,
				border: border || "none",
			}}
			onClick={onClick}
		>
			<div className={`${styles.inner_tag} ${tagClass}`}>
				<Image
					className={`${styles.icon} ${tagClass}`}
					src={image}
					alt="icon"
					width="22"
					height="22"
				/>
				<div className={`${styles.info} ${tagClass}`}>{info}</div>
			</div>
		</div>
	);
};

export default Tag;
