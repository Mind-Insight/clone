import React from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Help/HelpCard.module.scss";

interface HelpCardProps {
	image: string;
	children: React.ReactNode;
	index: number;
}

const HelpCard: React.FC<HelpCardProps> = ({ image, children, index }) => {
	return (
		<div className={styles.card_container}>
			<div className={styles.card}>
				<div className={styles.help_text}>
					<span>{children}</span>
				</div>
				<div className={styles.image_container}>
					<Image
						className={styles.card_image}
						style={{
							left: index === 2 ? "35px" : "50px",
							bottom:
								index === 1 || index === 3 ? "25px" : "32px",
						}}
						src={image}
						alt="first"
						width="220"
						height="176"
					></Image>
				</div>
			</div>
		</div>
	);
};

export default HelpCard;
