import React from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Connection/ConnectionBlock.module.scss";
import ReasonBlock from "./ReasonBlock";

const ConnectionBlock = () => {
	return (
		<div className={styles.container}>
			<div className={styles.connection_container}>
				<div className={styles.main_block}>
					<div className={styles.title_block}>
						{/* <div className={styles.title}> */}
							<span>
								Почему стоит<br />
								присоединиться к
							</span>
						{/* </div> */}
						<Image
							className={styles.title_image}
							src="/Connection/connection_logo.svg"
							alt="logo"
							width="255"
							height="82"
						></Image>
					</div>

					<div className={styles.reasons}>
						<ReasonBlock main_text="Возможность помогать другим">
							Каждый из нас может столкнуться
							<br /> с трудностями. Помощь другим —<br /> это
							способ сделать мир лучше
							<br /> и внести свой вклад в сообщество.
							<br /> Ваша поддержка может изменить жизнь человека
							и принести радость!
						</ReasonBlock>
						<ReasonBlock main_text="Новые знакомства и развития навыков">
							В нашем сообществе вы встретите единомышленников и
							людей, вместе<br /> с которыми вы смодете развивать
							свои навыки и таланты. Каждый проект —<br /> это
							шанс научиться чему-то новому!
						</ReasonBlock>
						<ReasonBlock main_text="Общирная база человеческих ресурсов">
							Мы предлагаем помощь
							<br /> в различных сферах, таких
							<br />
							как продуктовая поддержка,
							<br />
							образование, медицинская
							<br /> помощь и многое другое.
						</ReasonBlock>
					</div>

					<div className={styles.counters}>
						<div className={styles.left_counter}>
							<div className={styles.left_counter_top}>
								<div className={styles.number}>256+</div>
								<div className={styles.text}>
									участников в сервисе
								</div>
							</div>
							<div className={styles.left_counter_bottom}>
								<div className={styles.number}>640</div>
								<div className={styles.text}>
									выполненных волонтерами просьб
								</div>
							</div>
						</div>
						<div className={styles.right_counter}>
							<div className={styles.right_counter_top}>
								<div className={styles.number}>121</div>
								<div className={styles.text}>
									просьб ждут твоей помощи
								</div>
							</div>
							<div className={styles.right_counter_bottom}>
								<div className={styles.number}>5 000+</div>
								<div className={styles.text}>часов помощи</div>
							</div>
						</div>
					</div>

                    <div className={styles.image_container}>
					<Image
                        className={styles.image}
						src="/Connection/connection_people.svg"
						alt="people"
						width="547"
						height="504"
					></Image>
				</div>
				</div>
			</div>
		</div>
	);
};

export default ConnectionBlock;
