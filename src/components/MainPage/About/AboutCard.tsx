import React from "react";
import Image from "next/image";

import styles from "@styles/MainPage/About/AboutCard.module.scss";

interface AboutCardProps {
	main_text: string;
	sender_logo: string;
	sender_name: string;
	sender_info: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
	main_text,
	sender_logo,
	sender_name,
	sender_info,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.inner_card}>
				<div className={styles.main_text}>{main_text}</div>
				<div className={styles.info}>
					<Image
						src={sender_logo}
						alt="logo"
						width="42"
						height="42"
					/>
                    <div className={styles.text_info}>
                        <div className={styles.name}>{sender_name}</div>
                        <div className={styles.sub_info}>{sender_info}</div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default AboutCard;
