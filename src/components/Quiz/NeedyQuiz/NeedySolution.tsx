import React from "react";

import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss"
import Container from "../Volunteer_quiz/Base/Container";
import BaseTitle from "../Volunteer_quiz/Base/BaseTitle";
import BaseButtons from "../Volunteer_quiz/Base/BaseButtons";
import BaseMainBlocks from "../Volunteer_quiz/BaseMainBlocks";
import { helpKindIcons } from "@/utils/tags";


const NeedySolution = () => {
	return (
		<Container padding="80px">
			<div className={styles.base_title_container}>
				<BaseTitle
					image="/Volunteer_quiz/Base/third.svg"
					title="Какая вам нужна помощь?"
				></BaseTitle>
				<BaseMainBlocks
					blocks={helpKindIcons}
				></BaseMainBlocks>
			</div>

			<BaseButtons
				back_link="/needy-quiz/problem/"
				forward_link="/needy-quiz/helper/"
			></BaseButtons>
		</Container>
	);
};

export default NeedySolution;
