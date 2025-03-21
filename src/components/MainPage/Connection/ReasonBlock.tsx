import React from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Connection/ReasonBlock.module.scss";

interface ReasonBlockProps {
	main_text: string;
    children: React.ReactNode;
}

const ReasonBlock: React.FC<ReasonBlockProps> = ({ main_text, children }) => {
	return (
		<div className={styles.card}>
			<Image
				className={styles.card_image}
				src="/Connection/connection_star.svg"
				alt="star"
				width="52"
				height="52"
			></Image>
			<div className={styles.text_info}>
				<div className={styles.main_text}>{main_text}</div>
				<div className={styles.sub_text}>{children}</div>
			</div>
		</div>
	);
};

export default ReasonBlock;
