"use client";
import React, { useState } from "react";
import AccountInfoContainer from "../Base/AccountInfoContainer";
import EducationProfileBlock from "../Base/Profile/EducationProfileBlock";
import ProfileTitle from "../Base/Profile/ProfileTitle";
import RequestCard from "../Base/Profile/RequestCard";
import PageButtons from "../Base/Profile/PageButtons";

const NeedyProfile = () => {
	const [activeButton, setActiveButton] = useState<string>("requests");

	return (
		<div>
			<AccountInfoContainer
				name="Александров Александр"
				birthDate="20.01.2000"
				age={24}
				location="Москва"
				status="a@mail.ru"
				helpLink="#"
				helpText="Хочу помогать"
				person_photo="/PersonalAccount/account/profile_photos/needy_photo.svg"
				isProfile={true}
				marginBottom="92px"
			>
				<ProfileTitle
					account_name="Александров Александр"
					link="/account/volunteer/"
				></ProfileTitle>
				<EducationProfileBlock></EducationProfileBlock>
				<div style={{ display: "flex" }}>
					<PageButtons
						activeButton={activeButton}
						setActiveButton={setActiveButton}
						buttons={[
							{ key: "requests", label: "Заявки" },
							{ key: "alreadyHelped", label: "Оказанная помощь" },
						]}
					/>
				</div>
				{activeButton === "requests" ? (
					<RequestCard
						title="Помощь с собакой дедушке"
                        text="Нужно забрать к себе собаку на время пока дедушка в больнице"
						organisation="НКО “Хвосты”"
						email="a@mail.ru"
						location="Москва"
						date="12.10.2024 - 16.10.2024"
						image="/PersonalAccount/profile/images/card_image_2.svg"
                        cardType="needy"
                        cardImageHeight={160}
                        cardImageWidth={160}
					/>
				) : (
					<RequestCard
						title="Помощь слепому"
						organisation="НКО “Хвосты”"
						email="a@mail.ru"
						location="Москва"
						date="12.10.2024 - 16.10.2024"
						activeButton={activeButton}
						image="/PersonalAccount/profile/images/card_image_2.svg"
					/>
				)}
			</AccountInfoContainer>
		</div>
	);
};

export default NeedyProfile;
