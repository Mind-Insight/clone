import { useState } from "react";
import Image from "next/image";
import styles from "@styles/PersonalAccount/Base/Profile/Modal.module.scss";
import Link from "next/link";

interface HelpModalProps {
	onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleRating = (value: number) => {
		setRating(value);
	};

	const handleSubmit = () => {
		if (rating > 0) {
			setSubmitted(true);
		}
	};

	// if (submitted) {
	// 	// Окно благодарности
	// 	return (
	// 		<div className={styles.container}>
	// 			<div className={styles.modal}>
	// 				<Image
	// 					className={styles.cross}
	// 					src="/PersonalAccount/profile/cross_modal.svg"
	// 					width="21"
	// 					height="21"
	// 					alt="cross"
	// 					onClick={onClose}
	// 				/>
	// 				<div className={styles.thank_you}>
	// 					<div className={styles.thank_you_text}>
	// 						Спасибо за отзыв!
	// 					</div>
	// 					<Image
    //                         className={styles.thank_you_image}
	// 						src="/PersonalAccount/profile/images/review_image.svg"
	// 						width="471"
	// 						height="471"
	// 						alt="thank you"
	// 					/>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				<Image
					className={styles.cross}
					src="/PersonalAccount/profile/cross_modal.svg"
					width="21"
					height="21"
					alt="cross"
					onClick={onClose}
				/>
				<div className={styles.title}>
					<div className={styles.title_text}>Как прошла помощь?</div>
					<div className={styles.text}>
						Оцените и оставьте отзыв - это поможет другим.
					</div>

					<div className={styles.stars}>
						{[1, 2, 3, 4, 5].map((star) => (
							<span
								key={star}
								className={
									rating >= star
										? styles.active_star
										: styles.star
								}
								onClick={() => handleRating(star)}
							>
								<Image
									src={
										rating >= star
											? "/PersonalAccount/profile/active_star.svg"
											: "/PersonalAccount/profile/inactive_star.svg"
									}
									width="54"
									height="51"
									alt="star"
								/>
							</span>
						))}
					</div>
				</div>

				<div className={styles.comment}>
					<div className={styles.comment_title}>
						Комментарий к отзыву
					</div>
					<input
						className={styles.comment_input}
						placeholder="Напишите комментарий"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
				</div>

				<Link href="#" className={styles.btn} onClick={onClose}>
					Оставить отзыв
				</Link>
			</div>
		</div>
	);
};

export default HelpModal;
