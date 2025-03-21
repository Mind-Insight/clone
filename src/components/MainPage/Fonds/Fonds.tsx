import React from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Fonds/Fonds.module.scss";
import FondCard from "./FondCard";

const Fonds = () => {
	return (
		<div className={styles.container}>
			<div className={styles.fonds_container}>
				{/* <div className={styles.main_title_container}> */}
				<div className={styles.title_container}>
					<div className={styles.title}>
						Фонды, которые нам помогают
					</div>
					<div className={styles.subtitle}>
						Сейчас мы сотрудничаем с 40 фондами. Это проверенные
						организации с прозрачной финансовой отчетностью
					</div>
					<Image
						className={styles.image}
						src="/Fonds/fonds_spiral.svg"
						alt="spiral"
						width="487"
						height="27"
					></Image>
				</div>
				{/* </div> */}
				<div className={styles.fonds}>
					{/* <a href="#">
						<Image
							src="/Fonds/fonds_left_arrow.svg"
							alt="left_arrow"
							width="48"
							height="48"
						></Image>
					</a> */}
					<div className={styles.inner_fonds}>
						<FondCard
							width="181"
							height="48"
							image="/Fonds/fonds_list/first_fond.svg"
						></FondCard>
						<FondCard
							width="96"
							height="48"
							image="/Fonds/fonds_list/second_fond.svg"
						></FondCard>
						<FondCard
							width="174"
							height="48"
							image="/Fonds/fonds_list/third_fond.svg"
						></FondCard>
						<FondCard
							width="120"
							height="48"
							image="/Fonds/fonds_list/fourth_fond.svg"
						></FondCard>
						<FondCard
							width="92"
							height="80"
							image="/Fonds/fonds_list/fifth_fond.svg"
						></FondCard>
						<FondCard
							width="156"
							height="48"
							image="/Fonds/fonds_list/sixth_fond.svg"
						></FondCard>
						<FondCard
							width="86"
							height="80"
							image="/Fonds/fonds_list/seventh_fond.svg"
						></FondCard>
						<FondCard
							width="174"
							height="23"
							image="/Fonds/fonds_list/eighth_fond.svg"
						></FondCard>
					</div>
					{/* <a href="#">
						<Image
							src="/Fonds/fonds_right_arrow.svg"
							alt="right_arrow"
							width="48"
							height="48"
						></Image>
					</a> */}
				</div>
			</div>
		</div>
	);
};

export default Fonds;
