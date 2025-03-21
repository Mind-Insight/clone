"use client"
import { useState } from "react";
import AccountInfoContainer from "../Base/AccountInfoContainer";
import ProfileInfoBlocks from "../Base/ProfileInfoBlocks";
import ProfilePhotoBlock from "../Base/ProfilePhotoBlock";
import styles from "@styles/PersonalAccount/Base/AccountInfoContainer.module.scss";

const VolunteerAccountInfo = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		city: "",
	});

	const handleSave = async () => {
		const token = localStorage.getItem("accessToken");
		if (!token) {
			alert("Вы не авторизованы!");
			return;
		}

		try {
			const response = await fetch("http://37.143.11.199:3030/user/update", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				alert("Данные успешно обновлены!");
			} else {
				alert("Ошибка при обновлении данных");
			}
		} catch (error) {
			console.error("Ошибка сети:", error);
			alert("Ошибка сети при обновлении данных");
		}
	};

	return (
		<AccountInfoContainer
			name="Иван Иванов"
			birthDate="20.01.2000"
			age={24}
			location="Москва"
			status="Частный волонтер"
			rating={{ siteRank: 162, regionRank: 20 }}
			helpLink="#"
			helpText="Нужна помощь"
			person_photo="/PersonalAccount/account/profile_photos/person_logo.svg"
		>
			<div className={styles.profile_title}>Профиль</div>
			<ProfilePhotoBlock />
			<ProfileInfoBlocks
				showLanguages={true}
				isPhotos={false}
				onChange={setFormData}
			/>
			<button className={styles.save_btn} onClick={handleSave}>
				Сохранить
			</button>
		</AccountInfoContainer>
	);
};

export default VolunteerAccountInfo;
