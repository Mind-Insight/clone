import React from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Help/Help.module.scss";
import HelpCard from "./HelpCard";

const Help = () => {
	return (
		<div className={styles.container}>
			<div className={styles.help_container}>
				<div className={styles.help_text_container}>
					<div className={styles.help_text}>
						<span>Кому мы помогаем</span>
						<Image
                            className={styles.underscore}
							src="/Help/help_underscore.svg"
							alt="underscore"
							width="356"
							height="11"
						></Image>
					</div>
				</div>
				<div className={styles.help_card_container}>
					<HelpCard index={0} image="/Help/help_first.svg">
						Социально
						 незащищённым
						 гражданам
					</HelpCard>
					<HelpCard index={1} image="/Help/help_second.svg">
						Инвалидам и детям
						 с особенностями
						 развития
					</HelpCard>
					<HelpCard index={2} image="/Help/help_third.svg">
						Люди в трудной
						 жизненной
						 ситуации
					</HelpCard>
					<HelpCard index={3} image="/Help/help_fourth.svg">
						Приютам
						 для бездомных
						 животных
					</HelpCard>
				</div>
			</div>
		</div>
	);
};

export default Help;
