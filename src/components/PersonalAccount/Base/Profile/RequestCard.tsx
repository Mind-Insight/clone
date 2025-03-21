"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/PersonalAccount/Base/Profile/RequestCard.module.scss";
import Card from "./Card";
import { useState } from "react";
import Modal from "./HelpModal";
import HelpModal from "./HelpModal";

interface RequestCardProps {
	title: string;
	text?: string;
	organisation: string;
	email: string;
	location: string;
	date: string;
	image?: string;
	activeButton: string;
	cardType?: string;
	cardImageHeight?: number;
	cardImageWidth?: number;
}

const RequestCard: React.FC<RequestCardProps> = ({
	title,
	text,
	organisation,
	email,
	location,
	date,
	image,
	activeButton,
	cardType = "volunteer",
	cardImageHeight = 251,
	cardImageWidth = 251,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

	return (
        <>
		<div className={styles.container}>
			<Card
				image={image}
				height={cardImageHeight}
				width={cardImageWidth}
			/>

			<div className={styles.bottom_container}>
				<div className={styles.info_block}>
					<div className={styles.top_info}>
						{!activeButton && cardType === "needy" && (
							<div className={styles.checking}>
								На рассмотрении
							</div>
						)}
						{activeButton === "help" && (
							<div className={styles.status_container}>
								<span className={styles.approved_status}>
									Одобрено
								</span>
								<div className={styles.phone}>
									<Image
										src="/PersonalAccount/profile/icon_phone.svg"
										width="16"
										height="16"
										alt="phone"
									></Image>
									<div className={styles.text_phone}>
										+7 (900) 000 00 00
									</div>
								</div>
							</div>
						)}
						{activeButton === "alreadyHelped" && (
							<div
								className={styles.status_container}
								style={{ justifyContent: "end" }}
							>
								<div className={styles.phone}>
									<Image
										src="/PersonalAccount/profile/icon_phone.svg"
										width="16"
										height="16"
										alt="phone"
									></Image>
									<div className={styles.text_phone}>
										+7 (900) 000 00 00
									</div>
								</div>
							</div>
						)}
						<div className={styles.title}>{title}</div>
						<div className={styles.text}>{text}</div>
					</div>

					{cardType !== "needy" && (
						<div className={styles.info}>
							<div className={styles.left_container}>
								<div className={styles.small_info}>
									<Image
										src="/PersonalAccount/Volunteer/icons/person.svg"
										width="18"
										height="18"
										alt="person"
									/>
									<div className={styles.small_info_text}>
										{organisation}
									</div>
								</div>
								<div className={styles.small_info}>
									<Image
										src="/PersonalAccount/Volunteer/icons/icon_email.svg"
										width="18"
										height="18"
										alt="email"
									/>
									<div className={styles.small_info_text}>
										{email}
									</div>
								</div>
							</div>

							<div className={styles.right_container}>
								<div className={styles.small_info}>
									<Image
										src="/PersonalAccount/Volunteer/icons/geo.svg"
										width="18"
										height="18"
										alt="location"
									/>
									<div className={styles.small_info_text}>
										{location}
									</div>
								</div>
								<div className={styles.small_info}>
									<Image
										src="/PersonalAccount/Volunteer/icons/icon_time.svg"
										width="18"
										height="18"
										alt="time"
									/>
									<div className={styles.small_info_text}>
										{date}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className={styles.buttons}>
					{cardType === "needy" && !activeButton && (
						<div className={styles.needy_btn_container}>
							<button className={styles.help_btn}onClick={() => setIsModalOpen(true)}>
								<span>Мне помогли</span>
							</button>
							<Link href="#" className={styles.complain_btn}>
								<span>Пожаловаться</span>
							</Link>
						</div>
					)}
					{activeButton === "requests" && (
						<>
							<Link href="#" className={styles.help_btn}>
								<span>Помочь</span>
							</Link>
							<Link href="#" className={styles.regret_btn}>
								<span>Отказаться</span>
							</Link>
							<Link href="#" className={styles.complain_btn}>
								<span>Пожаловаться</span>
							</Link>
						</>
					)}

					{activeButton === "help" && (
						<>
							<Link href="#" className={styles.regret_btn}>
								<span>Отказаться</span>
							</Link>
							<Link href="#" className={styles.complain_btn}>
								<span>Пожаловаться</span>
							</Link>
						</>
					)}

					{activeButton === "alreadyHelped" && (
						<Link href="#" className={styles.complain_btn}>
							<span>Пожаловаться</span>
						</Link>
					)}
				</div>
			</div>
		</div>
        {isModalOpen && <HelpModal onClose={() => setIsModalOpen(false)} />}
        </>
	);
};

export default RequestCard;
