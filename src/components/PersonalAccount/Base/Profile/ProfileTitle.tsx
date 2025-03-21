import Image from "next/image";
import Link from "next/link";
import type React from "react";
import styles from "@styles/PersonalAccount/Base/Profile/ProfileTitle.module.scss";
import { useEffect, useState } from "react";

interface ProfileTitleProps {
	account_name: string;
	link?: string;
}

const ProfileTitle: React.FC<ProfileTitleProps> = ({
	account_name,
	link = "#",
}) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 910);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div className={styles.container}>
			<div className={styles.account_name_container}>
				<Image
					src="/PersonalAccount/profile/profile_status.svg"
					width="24"
					height="24"
					alt="status"
				></Image>
				{isMobile && (
					<Image
						src="/PersonalAccount/account/profile_photos/person_logo.svg"
						width="48"
						height="48"
						alt="logo"
					></Image>
				)}
				<div className={styles.name}>{account_name}</div>
			</div>
			<Link href={link} className={styles.link_container}>
				<Image
                    className={styles.image_link}
					src="/PersonalAccount/profile/profile_settings.svg"
					width="24"
					height="24"
					alt="settings"
				></Image>
			</Link>
		</div>
	);
};

export default ProfileTitle;
