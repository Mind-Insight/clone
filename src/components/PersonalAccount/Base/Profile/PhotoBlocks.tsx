import Image from "next/image";
import styles from "@styles/PersonalAccount/Base/Profile/PhotoBlocks.module.scss";

const PhotoBlocks = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<div className={styles.text}>Фото</div>
				<Image
					src="/PersonalAccount/profile/question_mark.svg"
					width="22"
					height="22"
					alt="question"
				></Image>
			</div>

			<div className={styles.photos}>
				<div className={styles.photo_block}>
					<Image
						src="/PersonalAccount/profile/camera.svg"
						height="36"
						width="36"
						alt="camera"
					></Image>
				</div>
				<div className={styles.photo_block}>
					<Image
						src="/PersonalAccount/profile/camera.svg"
						height="36"
						width="36"
						alt="camera"
					></Image>
				</div>
				<div className={styles.photo_block}>
					<Image
						src="/PersonalAccount/profile/camera.svg"
						height="36"
						width="36"
						alt="camera"
					></Image>
				</div>
			</div>
		</div>
	);
};

export default PhotoBlocks;
