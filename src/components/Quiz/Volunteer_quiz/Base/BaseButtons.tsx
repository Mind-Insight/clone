import React from "react";

import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss";
import Link from "next/link";

interface BaseButtonsProps {
	back_link: string;
	forward_link: string;
}

const BaseButtons: React.FC<BaseButtonsProps> = ({
	back_link,
	forward_link,
}) => {
	return (
		<div className={styles.buttons_container}>
			<Link href={back_link}>
				<div className={styles.back_button}>Назад</div>
			</Link>
			<Link href={forward_link}>
				<div className={styles.next_button}>Далее</div>
			</Link>
		</div>
	);
};

export default BaseButtons;
