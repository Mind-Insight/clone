import React from "react";
import Container from "./Base/Container";

import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss";
import BaseTitle from "./Base/BaseTitle";
import BaseMainBlocks from "./BaseMainBlocks";
import BaseButtons from "./Base/BaseButtons";
import { helpToIcons } from "@/utils/tags";

const HelpTo = () => {
	return (
		<Container>
			<div className={styles.base_title_container}>
				<BaseTitle
					image="/Volunteer_quiz/Base/second.svg"
					title="Кому вы хотели бы помогать?"
				></BaseTitle>
				<BaseMainBlocks
					background_color="#F6F6F6"
                    default_color="#F6F6F6"
                    border_default="#F6F6F6"
					blocks={helpToIcons}
				></BaseMainBlocks>
			</div>

			<BaseButtons
				back_link="/volunteer-quiz/info/"
				forward_link="/volunteer-quiz/kind-help/"
			></BaseButtons>
		</Container>
	);
};

export default HelpTo;
