import React, { useState } from "react";
import Image from "next/image";

interface CheckboxProps {
	enabledSrc: string;
	disabledSrc: string;
	onChange: (checked: boolean) => void;
	size?: number;
}

const Checkbox: React.FC<CheckboxProps> = ({
	enabledSrc,
	disabledSrc,
	onChange,
	size = 24,
}) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleClick = () => {
		const newChecked = !isChecked;
		setIsChecked(newChecked);
		onChange(newChecked)
	};

	return (
		<div
			onClick={handleClick}
			style={{
				width: size,
				height: size,
				cursor: "pointer",
				transition: "transform 0.2s ease-in-out",
				transform: isChecked ? "scale(1.05)" : "scale(1)",
			}}
		>
			<Image
				src={isChecked ? enabledSrc : disabledSrc}
				alt="Checkbox"
				width={size}
				height={size}
				style={{
					transition: "opacity 0.5s ease-in-out",
					opacity: isChecked ? 1 : 0.8,
				}}
			/>
		</div>
	);
};

export default Checkbox;
