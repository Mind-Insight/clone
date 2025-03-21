import Link from "next/link";
import styles from "@styles/PersonalAccount/Base/Profile/EducationProfileBlock.module.scss";

interface EducationBlockProps {
	title: string;
	text: string;
	link?: string;
}

const EducationBlock: React.FC<EducationBlockProps> = ({
	title,
	text,
	link = "#",
}) => {
	return (
		<div className={styles.education_block_container}>
			<div className={styles.education_title_container}>
				<div className={styles.education_title}>{title}</div>
                <div className={styles.education_text}>{text}</div>
			</div>

            <Link className={styles.course_btn} href={link}>Пройти курс</Link>
		</div>
	);
};

export default EducationBlock;
