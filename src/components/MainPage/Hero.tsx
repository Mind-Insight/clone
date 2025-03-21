import Image from "next/image";
import React from "react";

import styles from "@styles/MainPage/Hero/Hero.module.scss";
import Link from "next/link";

const Hero = () => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.hero_container}>
					<div className={styles.hero}>
						<div className={styles.main_text_container}>
							<div className={styles.main_text}>
								<span>
									Сервис для волонтёров
									и тех, кто нуждается<br />
									в помощи
								</span>
								<Image
									style={{ pointerEvents: "none" }}
									className={styles.hero_arrow}
									src="/Hero/hero_arrow.svg"
									alt="arrow"
									width="105"
									height="30"
								></Image>
							</div>
							<Image
								className={styles.hero_image}
								src="/Hero/hero_star.svg"
								alt="hero star"
								width="78"
								height="78"
							></Image>
						</div>
						<div className={styles.sub_text}>
							Мы объединяем усилия благотворительных
							и некоммерческих организаций, волонтёров и всех,
							кто хочет делать мир лучше.
						</div>
						<div className={styles.doubled_btn}>
							<Link href="/needy-quiz/info/">
								<div className={styles.need_help_btn}>
									<p>Нужна помощь</p>
									<Image
										className={styles.hero_small_arrow}
										src="/Hero/hero_small_arrow.svg"
										alt="small-arrow"
										width="24"
										height="24"
									></Image>
								</div>
							</Link>
							<Link href="/volunteer-quiz/info/">
								<div className={styles.become_volunteer_btn}>
									<p>Стать волонтером</p>
									<Image
										className={styles.hero_small_arrow}
										src="/Hero/hero_small_arrow.svg"
										alt="small-arrow"
										width="24"
										height="24"
									></Image>
								</div>
							</Link>
						</div>
					</div>
					<div className={styles.image_container}>
						<Image
							style={{ pointerEvents: "none" }}
							className={styles.people_image}
							src="/Hero/hero.svg"
							alt="hero"
							width="632"
							height="617"
						></Image>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
