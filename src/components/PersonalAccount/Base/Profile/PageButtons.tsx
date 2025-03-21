"use client";
import { Dispatch, SetStateAction } from "react";
import styles from "@styles/PersonalAccount/Base/Profile/PageButtons.module.scss";

interface PageButtonsProps {
	activeButton: string;
	setActiveButton: Dispatch<SetStateAction<string>>;
	buttons: { key: string; label: string }[];
}

const PageButtons: React.FC<PageButtonsProps> = ({
	activeButton,
	setActiveButton,
	buttons,
}) => {
	return (
		<div className={styles.container}>
			{buttons.map((button) => (
				<div
					key={button.key}
					className={`${styles.button} ${
						activeButton === button.key ? styles.active : ""
					}`}
					onClick={() => setActiveButton(button.key)}
				>
					<span>{button.label}</span>
				</div>
			))}
		</div>
	);
};

export default PageButtons;
