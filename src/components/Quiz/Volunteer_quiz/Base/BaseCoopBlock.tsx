"use client";
import React, { useState } from "react";

import Checkbox from "@/components/Base/Checkbox";
import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss";

interface BaseCoopBlockProps {
	top_title: string;
	bottom_title?: string;
	children: React.ReactNode;
}

const BaseCoopBlock: React.FC<BaseCoopBlockProps> = ({
	top_title,
	bottom_title,
	children,
}) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleCheckboxChange = (checked: boolean) => {
		setIsSelected(checked);
		console.log("Чекбокс выбран:", checked);
	};
	return (
		<div className={styles.block_container}>
			<div className={styles.title_block}>
				<div className={styles.top_title}>
					<Checkbox
						size={24}
						enabledSrc="/Volunteer_quiz/enabled_checkbox.svg"
						disabledSrc="/Volunteer_quiz/disabled_checkbox.svg"
						onChange={handleCheckboxChange}
					></Checkbox>
					<div className={styles.top_title_text}>{top_title}</div>
				</div>
				{bottom_title && <div className={styles.bottom_title}>{bottom_title}</div>}
			</div>
            <div className={styles.bottom_container}>
                {children}
            </div>
		</div>
	);
};

export default BaseCoopBlock;
