import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss"
import Container from "../Volunteer_quiz/Base/Container";
import BaseTitle from "../Volunteer_quiz/Base/BaseTitle";
import BaseButtons from "../Volunteer_quiz/Base/BaseButtons";
import BaseMainBlocks from "../Volunteer_quiz/BaseMainBlocks";
import { helpToIcons } from "@/utils/tags";


const NeedyProblem = () => {
	return (
		<Container padding="80px">
			<div className={styles.base_title_container}>
				<BaseTitle
					image="/Volunteer_quiz/Base/second.svg"
					title="Какая у вас ситуация?"
				></BaseTitle>

				<BaseMainBlocks
					background_color="#F6F6F6"
                    default_color="#F6F6F6"
                    border_default="#F6F6F6"
					blocks={helpToIcons}
				></BaseMainBlocks>
			</div>

			<BaseButtons
				back_link="/needy-quiz/info"
				forward_link="/needy-quiz/solution/"
			></BaseButtons>
		</Container>
	);
};

export default NeedyProblem;
