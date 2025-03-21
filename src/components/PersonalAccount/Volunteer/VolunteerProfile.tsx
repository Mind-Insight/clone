"use client";
import React, { useEffect, useState } from "react";
import AccountInfoContainer from "../Base/AccountInfoContainer";
import EducationProfileBlock from "../Base/Profile/EducationProfileBlock";
import ProfileTitle from "../Base/Profile/ProfileTitle";
import RequestCard from "../Base/Profile/RequestCard";
import PageButtons from "../Base/Profile/PageButtons";

const VolunteerProfile = () => {
	const [activeButton, setActiveButton] = useState<string>("requests");
	const [isMobile, setIsMobile] = useState(false);
	const [justifyContent, setJustifyContent] = useState("flex-start");

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 910);
			setJustifyContent(window.innerWidth <= 680 ? "center" : "flex-start");
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div>
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
				isProfile={true}
				marginBottom="92px"
			>
				{!isMobile && (
					<ProfileTitle
						account_name="Кузнецов Иван Иванович"
						link="/account/volunteer/"
					/>
				)}
				<EducationProfileBlock />
				<div style={{ display: "flex", justifyContent }}>
					<PageButtons
						activeButton={activeButton}
						setActiveButton={setActiveButton}
						buttons={[
							{ key: "requests", label: "Запросы" },
							{ key: "help", label: "Помогаю" },
							{ key: "alreadyHelped", label: "Оказанная помощь" },
						]}
					/>
				</div>
				<RequestCard
					title="Кормим собачек в приюте"
					text="Нужно купить 10 кг корма и привезти к нам. После этого собачек можно будет погладить"
					organisation="НКО “Хвосты”"
					email="a@mail.ru"
					location="Москва"
					date="12.10.2024 - 16.10.2024"
					activeButton={activeButton}
				/>
			</AccountInfoContainer>
		</div>
	);
};

export default VolunteerProfile;
