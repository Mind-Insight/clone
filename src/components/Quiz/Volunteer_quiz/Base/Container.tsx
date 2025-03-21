import React from "react";
import styles from "@styles/QuizPages/Volunteer_quiz/Container.module.scss";
interface ContainerProps {
	children: React.ReactNode;
	padding?: string;
}

const Container: React.FC<ContainerProps> = ({
	children,
	padding = "66px",
}) => {
	return (
		<div className={styles.container}>
			<div
				className={styles.info_container}
				style={{
					paddingTop: `${padding}`,
					paddingBottom: "61px",
				}}
			>
                {children}
			</div>
			<div className={styles.quiz_footer}>
				Сайт предоставляет исключительно информационные услуги,
				не является благотворительной организацией или СМИ
			</div>
		</div>
	);
};

export default Container;
