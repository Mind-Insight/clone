"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/Admin/Base/Navigation.module.scss";
import NavigationBlock from "./NavigationBlock";

interface NavigationProps {
	activeBlock: string;
	setActiveBlock: (blockId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
	activeBlock,
	setActiveBlock,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.top_container}>
				<div className={styles.title_container}>
					<div className={styles.title}>
						<Image
							src="/Admin/Base/logo.svg"
							width="32"
							height="32"
							alt="logo"
						/>
						<div className={styles.title_text}>
							<div className={styles.top_title_text}>
								<div className={styles.top_text}>ЯПОМОГУ</div>
								<Image
									src="/Admin/Base/up_down.svg"
									width="18"
									height="18"
									alt="up down arrows"
								/>
							</div>
							<div className={styles.bottom_title_text}>
								Платформа добрых дел
							</div>
						</div>
					</div>
					<hr />
				</div>

				<div className={styles.nav_container}>
					<div className={styles.nav_title}>Главная</div>
					<div className={styles.nav_blocks}>
						<NavigationBlock
							icon="/Admin/Base/icons/admins.svg"
							text="Администраторы"
							isActive={activeBlock === "admins"}
							onClick={() => setActiveBlock("admins")}
						/>
						<NavigationBlock
							icon="/Admin/Base/icons/users.svg"
							text="Пользователи"
							isActive={activeBlock === "users"}
							onClick={() => setActiveBlock("users")}
						/>
						<NavigationBlock
							icon="/Admin/Base/icons/things.svg"
							text="Дела"
							isActive={activeBlock === "things"}
							onClick={() => setActiveBlock("things")}
						/>
						<NavigationBlock
							icon="/Admin/Base/icons/organizations.svg"
							text="Организации"
							isActive={activeBlock === "organizations"}
							onClick={() => setActiveBlock("organizations")}
						/>
						<NavigationBlock
							icon="/Admin/Base/icons/organizations.svg"
							text="Отзывы"
							isActive={activeBlock === "reviews"}
							onClick={() => setActiveBlock("reviews")}
						/>
						<NavigationBlock
							icon="/Admin/Base/icons/courses.svg"
							text="Курсы"
							isActive={activeBlock === "courses"}
							onClick={() => setActiveBlock("courses")}
						/>
						<NavigationBlock
							icon="/Admin/Base/icons/form.svg"
							text="Анкета"
							isActive={activeBlock === "form"}
							onClick={() => setActiveBlock("form")}
						/>
						<NavigationBlock
							icon="/Admin/Base/icons/moderation.svg"
							text="Модерация"
							isActive={activeBlock === "moderation"}
							onClick={() => setActiveBlock("moderation")}
						/>
						<NavigationBlock
							icon="/Admin/Base/icons/support.svg"
							text="Поддержка"
							isActive={activeBlock === "support"}
							onClick={() => setActiveBlock("support")}
						/>
						<NavigationBlock
							icon="/Admin/Base/icons/mails.svg"
							text="Рассылки"
							isActive={activeBlock === "mails"}
							onClick={() => setActiveBlock("mails")}
						/>
					</div>
				</div>
			</div>

			<Link href="/" className={styles.exit_container}>
				<div className={styles.exit_image_container}>
					<Image
						className={styles.exit_image}
						src="/Admin/Base/icons/exit.svg"
						width="16"
						height="16"
						alt="exit"
					/>
				</div>
				<div className={styles.exit_text}>Выход</div>
			</Link>
		</div>
	);
};

export default Navigation;
