import React from "react";
import Image from "next/image";

import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss";

interface BaseTitleProps {
	image: string;
	title: string;
}

const BaseTitle: React.FC<BaseTitleProps> = ({ image, title }) => {
	return (
		<div className={styles.title_container}>
			<Image
				className={styles.title_image}
				src={image}
				alt="number"
				width={58}
				height={58}
			></Image>
			<div className={styles.title_text}>{title}</div>
		</div>
	);
};

export default BaseTitle;
