"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/PersonalAccount/Base/PublicInfoBlock.module.scss";
import { useEffect, useState } from "react";

interface PublicInfoBlockProps {
	name: string;
	birthDate: string;
	age: number;
	location: string;
	status: string;
	hideRating?: boolean;
	rating?: {
		siteRank: number;
		regionRank: number;
	};
	helpLink: string;
	helpText: string;
	person_photo?: string;
	isProfile?: boolean;
	children?: React.ReactNode;
}

const PublicInfoBlock: React.FC<PublicInfoBlockProps> = ({
	name,
	birthDate,
	age,
	location,
	status,
	hideRating = false,
	rating,
	helpLink,
	helpText,
	person_photo = "/PersonalAccount/account/profile_photos/base_photo.svg",
	isProfile,
	children,
}) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 910);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div className={styles.outer_public_container}>
			<div className={styles.public_info_container}>
				<div className={styles.public_info}>
					{children}
					<div className={styles.inner_public_info}>
						{!isProfile ? (
							<div className={styles.public_title}>
								<Image
									className={styles.title_logo}
									src={person_photo}
									width={64}
									height={64}
									alt="person logo"
								/>
								<div className={styles.title_text}>{name}</div>
							</div>
						) : (
							<div
								style={{
									display: isMobile ? "none" : "flex",
									justifyContent: "center",
								}}
								className={styles.public_title}
							>
								<Image
									className={styles.title_logo}
									src={person_photo}
									width={180}
									height={180}
									alt="person logo"
								/>
							</div>
						)}

						{!hideRating && rating && (
							<div className={styles.public_rating}>
								<div className={styles.rating_title}>
									Место в рейтинге:
								</div>
								<div className={styles.rating_info}>
									<div className={styles.site_info}>
										<div
											className={styles.site_info_counter}
										>
											#{rating.siteRank}
										</div>
										<div className={styles.site_info_text}>
											На сайте
										</div>
									</div>
									<div className={styles.region_info}>
										<div
											className={
												styles.region_info_counter
											}
										>
											#{rating.regionRank}
										</div>
										<div
											className={styles.region_info_text}
										>
											В регионе
										</div>
									</div>
								</div>
							</div>
						)}

						<div className={styles.public_subinfo_container}>
							<div className={styles.public_subinfo}>
								<div className={styles.subinfo_age}>
									<Image
										className={styles.subinfo_icon}
										src="/PersonalAccount/Volunteer/icons/person.svg"
										width={22}
										height={22}
										alt="person icon"
									/>
									<div className={styles.subinfo_text}>
										{birthDate} ({age} лет)
									</div>
								</div>

								<div className={styles.subinfo_location}>
									<Image
										className={styles.subinfo_icon}
										src="/PersonalAccount/Volunteer/icons/geo.svg"
										width={22}
										height={22}
										alt="location icon"
									/>
									<div className={styles.subinfo_text}>
										{location}
									</div>
								</div>

								<div className={styles.subinfo_status}>
									<Image
										className={styles.subinfo_icon}
										src={
											status.includes("@")
												? "/PersonalAccount/Volunteer/icons/icon_email.svg"
												: "/PersonalAccount/Volunteer/icons/star.svg"
										}
										width={22}
										height={22}
										alt="status icon"
									/>
									<div className={styles.subinfo_text}>
										{status}
									</div>
								</div>
							</div>

							{isProfile && (
								<div className={styles.public_social}>
									<div className={styles.social_title}>
										Социальные сети
									</div>
									<div className={styles.social_links}>
										<Image
											className={styles.social_image}
											src="/Footer/active_vk.svg"
											width="28"
											height="28"
											alt="vk"
										></Image>
										<Image
											className={styles.social_image}
											src="/Footer/active_telegram.svg"
											width="28"
											height="28"
											alt="telegram"
										></Image>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			<Link href={helpLink} className={styles.help_btn}>
				{helpText}
			</Link>
		</div>
	);
};

export default PublicInfoBlock;
