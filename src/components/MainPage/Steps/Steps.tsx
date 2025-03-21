import React from "react";

import styles from "@styles/MainPage/Steps/Steps.module.scss";
import StepsBlock from "./StepsBlock";

const Steps = () => {
	return (
		<div className={styles.container}>
			<div className={styles.steps_container}>
				<div className={styles.top_block}>
					<div className={styles.top_block_text}>
						Как это работает?
					</div>
					<div className={styles.top_block_btn_container}>
						<div className={styles.top_block_btn}>
							<div className={styles.inner_volunteer_btn}>
								<p>Волонтёр</p>
							</div>
							<div className={styles.inner_needy_btn}>
								<p>Нуждающийся</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.bottom_block}>
					<StepsBlock
						image="/Steps/01.svg"
						className={styles.first_step}
					>
						<div className={styles.main_text}>
							Зарегистрируйтесь
						</div>
						<div className={styles.sub_text}>
							и пройдите модерацию
						</div>
					</StepsBlock>
					<StepsBlock image="/Steps/02.svg">
						<div className={styles.main_text}>Пройдите опрос</div>
						<div className={styles.sub_text}>
							выберите опцию «Волонтёр
							<br /> при фонде» или «Частный волонтёр»
						</div>
					</StepsBlock>
					<StepsBlock image="/Steps/03.svg">
						<div className={styles.main_text}>Начните помогать</div>
						<div className={styles.sub_text}>
							получи подтверждение от фонда
							<br /> или откликайся адресно на заявки
						</div>
					</StepsBlock>
					<StepsBlock image="/Steps/04.svg">
						<div className={styles.main_text}>
							Выполняйте задание
						</div>
						<div className={styles.sub_text}>
							получи бонусный балл и обменяй
							<br /> его на подарки от партнёра
						</div>
					</StepsBlock>
				</div>
			</div>
		</div>
	);
};
export default Steps;