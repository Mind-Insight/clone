"use client";
import React, { useState } from "react";
import styles from "@styles/Base.module.scss";

const Toggle = () => {
	const [isOn, setIsOn] = useState(false);

	const handleToggle = () => {
		setIsOn((prev) => !prev);
	};

	return (
		<div
			className={`${styles.toggle_switch} ${
				isOn ? styles.switch_on : ""
			}`}
			onClick={handleToggle}
		></div>
	);
};

export default Toggle;
