"use client";
import React, { useState } from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Questions/QuestionBlock.module.scss";

interface QuestionBlockParams {
	text: string;
}

const QuestionBlock: React.FC<QuestionBlockParams> = ({ text }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleInfo = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.outer_container}>
			<div className={styles.card}>
				<div className={styles.inner_card}>
					<div className={styles.card_text}>{text}</div>
					<button
						onClick={toggleInfo}
						className={styles.toggleButton}
					>
						<Image
							src={
								isOpen
									? "/Questions/questions_cross.svg"
									: "/Questions/questions_plus.svg"
							}
							alt={isOpen ? "cross" : "plus"}
                            className={styles.more_image}
							width="48"
							height="48"
						/>
					</button>
				</div>
			</div>
			<div
				className={`${styles.info_block} ${isOpen ? styles.open : ""}`}
			>
				{isOpen && (
					<div className={styles.info_content}>
						<p>
							Сайт ЯПомогу является исключительно информационным
							ресурсом и не представляет собой благотворительную
							организацию или СМИ. Наша основная задача —
							предоставлять платформу для обмена информацией и
							возможностями помощи. Мы сосредоточены на поддержке
							волонтерства и непосредственного взаимодействия
							между людьми, которые хотят помочь и теми, кто в
							этом нуждается.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default QuestionBlock;
