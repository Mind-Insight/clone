"use client";
import styles from "@styles/PersonalAccount/Base/AccountInfoContainer.module.scss";
import PublicInfoBlock from "./PublicInfoBlock";
import { useEffect, useState } from "react";
import ProfileTitle from "./Profile/ProfileTitle";

interface AccountInfoContainerProps {
	name: string;
	birthDate: string;
	age: number;
	location: string;
	status: string;
	rating?: { siteRank: number; regionRank: number };
	helpLink: string;
	helpText: string;
	children: React.ReactNode;
	person_photo?: string;
	isProfile?: boolean;
	marginBottom?: string;
}

const AccountInfoContainer: React.FC<AccountInfoContainerProps> = ({
	name,
	birthDate,
	age,
	location,
	status,
	rating,
	helpLink,
	helpText,
	children,
	person_photo,
	isProfile = false,
	marginBottom = "238px",
}) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 910);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={styles.container} style={{ marginBottom }}>
			<PublicInfoBlock
				name={name}
				birthDate={birthDate}
				age={age}
				location={location}
				status={status}
				rating={rating}
				helpLink={helpLink}
				helpText={helpText}
				person_photo={person_photo}
				isProfile={isProfile}
			>
				{isMobile && (
					<ProfileTitle
						account_name={name}
						link="/account/volunteer/"
					/>
				)}
			</PublicInfoBlock>

			<div className={styles.profile_container}>
				<div className={styles.profile}>{children}</div>
			</div>
		</div>
	);
};

export default AccountInfoContainer;
