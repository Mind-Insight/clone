import React from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Steps/StepsCard.module.scss";

interface StepsBlockProps {
	image: string;
	children: React.ReactNode;
	className?: string;
}

const StepsBlock: React.FC<React.PropsWithChildren<StepsBlockProps>> = ({
	image,
	children,
	className,
}) => {
	return (
		<div className={`${className ? styles.first_step : styles.step}`}>
			<div className={`${ className ? styles.first_image : styles.image_container}`}>
				<Image
					className={styles.step_image}
					src={image}
					alt="step"
					layout="responsive"
					width={20}
					height={20}
				></Image>
			</div>
			<div className={styles.step_text}>{children}</div>
		</div>
	);
};

export default StepsBlock;
