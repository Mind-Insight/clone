import Toggle from "@/components/Base/Toggle";
import styles from "@styles/QuizPages/Volunteer_quiz/Coop.module.scss";
import BaseCoopBlock from "./BaseCoopBlock";

interface BaseMainCoopProps {
	coop_info?: string;
	is_bottom?: boolean;
}

const BaseMainCoop: React.FC<BaseMainCoopProps> = ({
	coop_info,
	is_bottom,
}) => {
	return (
		<div className={styles.coop_container}>
			<BaseCoopBlock
				top_title="Частный волонтёр"
				bottom_title="После модерации вам будет доступен раздел обращений за помощью"
			>
				{coop_info && (
					<>
						<div className={styles.contacts}>
							<div className={styles.top_contacts}>
								<div className={styles.top_contacts_text}>
									Скрыть мои контакты
								</div>
								<Toggle></Toggle>
							</div>
							<div className={styles.bottom_contacts}>
								Другие волонтёры не будут их видеть
							</div>
						</div>

						<div className={styles.consult}>
							<div className={styles.top_consult}>
								<div className={styles.top_contacts_text}>
									Нужна консультация специалиста
								</div>
								<Toggle></Toggle>
							</div>
							<div className={styles.bottom_consult}>
								Наш специалист обязательно свяжется с вами
								и ответит на все вопросы
							</div>
						</div>
					</>
				)}
			</BaseCoopBlock>
			<BaseCoopBlock
				top_title="Волонтёр при фонде"
				{...(is_bottom && {
					bottom_title:
						"Специалист из фонда по вашему профилю подскажет, как лучше общаться",
				})}
			>
				<p className={styles.text}>
					На следующем шаге будут показаны фонды, объединения и другие
					организации, помогающие людям, которым требуются волонтёры.
					Возможно, именно вы.
				</p>
			</BaseCoopBlock>
		</div>
	);
};

export default BaseMainCoop;
