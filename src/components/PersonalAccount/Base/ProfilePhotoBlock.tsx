import React from "react";
import Image from "next/image";
import styles from "@styles/PersonalAccount/Base/ProfilePhotoBlock.module.scss";

interface ProfilePhotoBlockProps {
	photoSrc?: string;
	altText?: string;
}

const ProfilePhotoBlock: React.FC<ProfilePhotoBlockProps> = ({
	photoSrc = "/PersonalAccount/account/profile_photos/base_photo.svg",
	altText = "profile image",
}) => {
	return (
		<div className={styles.profile_photo_container}>
			<Image
				className={styles.profile_image}
				src={photoSrc}
				width={120}
				height={120}
				alt={altText}
			/>
			<div className={styles.profile_image_info}>
				<div className={styles.image_title}>Фото профиля</div>
				<div className={styles.image_subtitle}>
					Загрузите ваше фото (хорошее качество, лицо крупным планом)
					<br /> Профили без фото удаляются
					<br />
					Минимальный размер фото 180х180 px
				</div>
			</div>
		</div>
	);
};

export default ProfilePhotoBlock;
