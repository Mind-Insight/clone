import Image from "next/image";
import styles from "@styles/PersonalAccount/Base/Profile/Card.module.scss";

interface CardProps {
	image?: string;
    height: number;
    width: number;
}

const Card: React.FC<CardProps> = ({ image, height, width }) => {
	return (
		<div className={styles.container}>
			<div className={styles.image_wrapper}>
				<div className={styles.tags_container}>
					<div className={styles.tag_block}>
						<Image
							className={styles.tag}
							src="/Tags/card_tags/dog_card_tag.svg"
							width="16"
							height="16"
							alt="card tag"
						/>
					</div>
					<div className={styles.tag_block}>
						<div className={styles.tag}>+1</div>
					</div>
				</div>

				<Image
					className={styles.card_image}
					src={
						image ||
						"/PersonalAccount/profile/images/card_image.svg"
					}
					width={width}
					height={height}
					alt="card image"
				/>
			</div>
		</div>
	);
};

export default Card;
