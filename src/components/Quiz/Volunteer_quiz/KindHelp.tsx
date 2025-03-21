import React from "react";

import styles from "@styles/QuizPages/Volunteer_quiz/HelpTo.module.scss";
import Container from "./Base/Container";
import BaseTitle from "./Base/BaseTitle";
import BaseMainBlocks from "./BaseMainBlocks";
import BaseButtons from "./Base/BaseButtons";
import { helpKindIcons } from "@/utils/tags";


const KindHelp = () => {
	return (
		<Container>
			<div className={styles.container}>
				<BaseTitle
					image="/Volunteer_quiz/Base/third.svg"
					title="Чем вы готовы помочь?"
				></BaseTitle>
				<BaseMainBlocks blocks={helpKindIcons}></BaseMainBlocks>
			</div>

			<BaseButtons
				back_link="/volunteer-quiz/help"
				forward_link="/volunteer-quiz/coop/"
			></BaseButtons>
		</Container>
	);
};

export default KindHelp;
