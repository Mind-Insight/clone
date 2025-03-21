import Container from "../Volunteer_quiz/Base/Container";
import BaseTitle from "../Volunteer_quiz/Base/BaseTitle";
import BaseButtons from "../Volunteer_quiz/Base/BaseButtons";
import BaseMain from "../Volunteer_quiz/Base/BaseMain";
import styles from "@styles/QuizPages/Volunteer_quiz/Container.module.scss";

const NeedyPersonalInfo = () => {
	return (
		<>
			<div className={styles.container}>
				<div
					className={styles.personal_info_container}
					style={{
						paddingTop: "71px",
						paddingBottom: "65px",
					}}
				>
					<div className={styles.inner_container}>
						<BaseTitle
							image="/Volunteer_quiz/Base/first.svg"
							title="Личная информация"
						></BaseTitle>

						<BaseMain></BaseMain>

						<BaseButtons
							back_link="/"
							forward_link="/needy-quiz/problem/"
						></BaseButtons>
					</div>
				</div>
				<div className={styles.quiz_footer}>
					Сайт предоставляет исключительно информационные услуги,
					не является благотворительной организацией или СМИ
				</div>
			</div>
		</>
	);
};

export default NeedyPersonalInfo;
