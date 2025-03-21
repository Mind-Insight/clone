import styles from "@styles/PersonalAccount/Base/Profile/EducationProfileBlock.module.scss";
import EducationBlock from "./EducationBlock";

const EducationProfileBlock = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title_block}>
				<div className={styles.title}>Обучение</div>

				<div className={styles.see_more}>Посмотреть все</div>
			</div>

			<div className={styles.education_blocks_container}>
				<EducationBlock
					title="Основы волонтерства для начинающих"
					text="Что такое волонтерство? Как устроен этот мир изнутри? Вы узнаете, как работают волонтеры, как они взаимодействуют с организациями и тд."
				></EducationBlock>

				<EducationBlock
					title="Интеллектуальное волонтерство"
					text="Что такое волонтерство? Как устроен этот мир изнутри? Вы узнаете, как работают волонтеры, как они взаимодействуют с организациями и тд."
				></EducationBlock>
			</div>
		</div>
	);
};

export default EducationProfileBlock;
