import Image from "next/image";
import styles from "@styles/ListPages/Cards.module.scss";
import Link from "next/link";

interface CardProps {
	imageSrc: string;
	type: string;
	title: string;
	phone?: string;
	website?: string;
	email?: string;
	location: string;
	description?: string;
	isVolunteer?: boolean;
}

const Card: React.FC<CardProps> = ({
	imageSrc,
	type,
	title,
	phone,
	website,
	email,
	location,
	description,
	isVolunteer = false,
}) => {
	return (
		<div
			className={styles.container}
			style={{ maxHeight: isVolunteer ? "452px" : "516px" }}
		>
			<Image className={styles.img} src={imageSrc} alt="card" width={403} height={260} style={{"pointerEvents": "none"}} />

			<div className={styles.info}>
				<div className={styles.main_info}>
					<div className={styles.what}>{type}</div>
					<div className={styles.title}>{title}</div>
				</div>

				<div className={styles.subinfo}>
					{phone && (
						<div className={styles.phone}>
							<Image
								src="/ListPages/main/icons/main_phone.svg"
								width={22}
								height={22}
								alt="phone"
							/>
							<div className={styles.text}>{phone}</div>
						</div>
					)}

					{website && (
						<Link href="#" className={styles.web}>
							<Image
								src="/ListPages/main/icons/main_web.svg"
								width={22}
								height={22}
								alt="web"
							/>
							<div className={`${styles.text} ${styles.link}`}>
								{website}
							</div>
						</Link>
					)}

					{email && (
						<Link href="#" className={styles.email}>
							<Image
								src="/ListPages/main/icons/main_mail.svg"
								width={22}
								height={22}
								alt="mail"
							/>
							<div className={`${styles.text} ${styles.link}`}>
								{email}
							</div>
						</Link>
					)}

					{description && (
						<div className={styles.description}>
							<div className={styles.text}>{description}</div>
						</div>
					)}

					<div className={styles.location}>
						<Image
							src="/ListPages/main/icons/main_location.svg"
							width={22}
							height={22}
							alt="location"
						/>
						<div className={styles.text}>{location}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
