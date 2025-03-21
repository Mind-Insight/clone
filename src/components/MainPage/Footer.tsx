"use client";
import React, { useState } from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Footer/Footer.module.scss";

const Footer = () => {
	const [activeIcon, setActiveIcon] = useState<string | null>(null);
	return (
		<div className={styles.container}>
			<div className={styles.footer_container}>
				<div className={styles.inner_footer_container}>
					<div className={styles.top_block}>
						<div className={styles.left_block}>
							<Image
								className={styles.logo}
								src="/logo.svg"
								alt="logo"
								width="197"
								height="44"
							></Image>
							<div className={styles.left_block_text}>
								ЯПОМОГУ - Независимый социальный проект.
								Мы объединяем усилия благотворительных и
								некоммерческих
								организаций, волонтёров и всех, кто хочет делать
								мир лучше.
							</div>
						</div>

						<div className={styles.right_block}>
							<div className={styles.right_block_text}>
								Подпишись на новостную рассылку!
							</div>
							{/* <div className={styles.email_btn_container}> */}
							<div className={styles.email_btn}>
								<div className={styles.inner_email_btn}>
									<input
										type="email"
										placeholder="Ваша электронная почта"
										className={styles.inner_email_btn}
										required
									/>
								</div>
								<div className={styles.inner_send_btn}>
									<a href="#">Отправить</a>
									<Image
										className={styles.small_arrow}
										src="/Hero/hero_small_arrow.svg"
										alt="arrow"
										width={24}
										height={24}
									></Image>
								</div>
							</div>
							{/* </div> */}
						</div>
					</div>

					<div className={styles.bottom_block}>
						<div className={styles.main_info}>
							<div className={styles.sub_info}>
								<div className={styles.sub_info_nav}>
									<div className={styles.sub_info_main_text}>
										Навигация
									</div>
									<div className={styles.sub_info_sub_block}>
										<div
											className={
												styles.sub_info_left_block
											}
										>
											<div
												className={
													styles.sub_info_left_top_text
												}
											>
												Главная
											</div>
											<div
												className={
													styles.sub_info_left_bottom_text
												}
											>
												Волонтёры
											</div>
										</div>
										<div
											className={
												styles.sub_info_right_block
											}
										>
											<div
												className={
													styles.sub_info_right_top_text
												}
											>
												Организации
											</div>
											<div
												className={
													styles.sub_info_right_top_text
												}
											>
												Связаться с нами
											</div>
										</div>
									</div>
								</div>
								<div className={styles.sub_info_documents}>
									<div className={styles.documents_main_text}>
										Документы
									</div>
									<div className={styles.documents_sub_text}>
										<span>Публичная оферта</span>
										<span>Политика конфиденциальности</span>
										<span>Пользовательское соглашение</span>
									</div>
								</div>
							</div>

							<div className={styles.social}>
								<div className={styles.social_links}>
									<a
										href="#"
										onMouseEnter={() => setActiveIcon("vk")}
										onMouseLeave={() => setActiveIcon(null)}
									>
										<Image
											src={
												activeIcon === "vk"
													? "/Footer/active_vk.svg"
													: "/Footer/vk.svg"
											}
											alt="vk"
											width="28"
											height="28"
										/>
									</a>
									<a
										href="#"
										onMouseEnter={() =>
											setActiveIcon("telegram")
										}
										onMouseLeave={() => setActiveIcon(null)}
									>
										<Image
											src={
												activeIcon === "telegram"
													? "/Footer/active_telegram.svg"
													: "/Footer/telegram.svg"
											}
											alt="telegram"
											width="28"
											height="28"
										/>
									</a>
								</div>
							</div>
						</div>

						<div className={styles.politics}>
							<div className={styles.politics_info}>
								Сайт предоставляет исключительно информационные
								услуги, не является
								<br /> благотворительной организацией или СМИ
							</div>
							<div className={styles.politics_email}>
								yapomogu@mail.ru
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
