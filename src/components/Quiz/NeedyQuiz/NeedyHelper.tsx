import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss"
import Container from "../Volunteer_quiz/Base/Container";
import BaseTitle from "../Volunteer_quiz/Base/BaseTitle";
import BaseMainCoop from "../Volunteer_quiz/Base/BaseMainCoop";
import BaseButtons from "../Volunteer_quiz/Base/BaseButtons";


const NeedyHelper = () => {
	return (
		<Container padding="80px">
			<div className={styles.base_title_container}>
				<BaseTitle
					image="/Volunteer_quiz/Base/fourth.svg"
					title="Кто может вам помочь?"
				></BaseTitle>
				<BaseMainCoop></BaseMainCoop>
			</div>

			<BaseButtons
				back_link="/needy-quiz/solution/"
				forward_link="/"
			></BaseButtons>
		</Container>
	);
};

export default NeedyHelper;
