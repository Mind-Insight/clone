"use client"
import React, { useState } from "react";
import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss";
import BaseMainInput from "./BaseMainInput";

const BaseMain = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		middleName: "",
		birthDate: "",
		email: "",
		phone: "",
		city: "",
	});

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div className={styles.main_container}>
			<div className={styles.main_top_block}>
				<BaseMainInput
					title_text="Имя"
					input_text="Введите ваше имя"
					input_type="text"
					value={formData.firstName}
					onChange={(value) => handleChange("firstName", value)}
				/>
				<BaseMainInput
					title_text="Фамилия"
					input_text="Введите вашу фамилию"
					input_type="text"
					value={formData.lastName}
					onChange={(value) => handleChange("lastName", value)}
				/>
				<BaseMainInput
					title_text="Отчество"
					input_text="Введите ваше отчество"
					input_type="text"
					value={formData.middleName}
					onChange={(value) => handleChange("middleName", value)}
				/>
				<BaseMainInput
					title_text="Дата рождения"
					input_text="Введите дату рождения"
					icon="/Volunteer_quiz/calendar.svg"
					input_type="date"
					value={formData.birthDate}
					onChange={(value) => handleChange("birthDate", value)}
				/>
				<BaseMainInput
					title_text="Почта"
					input_text="Введите вашу почту"
					input_type="email"
					value={formData.email}
					onChange={(value) => handleChange("email", value)}
				/>
				<BaseMainInput
					title_text="Телефон"
					input_text="+7 (___) ___ __ __"
					input_type="tel"
					value={formData.phone}
					onChange={(value) => handleChange("phone", value)}
				/>
			</div>

			<div className={styles.main_bottom_block}>
				<BaseMainInput
					title_text="Населенный пункт"
					input_text="Введите ваш адрес"
					icon="/Volunteer_quiz/open_arrow.svg"
					input_type="text"
					class_name="full_width_input"
					value={formData.city}
					onChange={(value) => handleChange("city", value)}
				/>
			</div>
		</div>
	);
};

export default BaseMain;
