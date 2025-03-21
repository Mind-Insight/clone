"use client"
import { useState } from "react";
import { colors } from "@/utils/colors";

interface SelectedColors {
	[key: string]: string;
}

export const useTagColors = (initialColors: SelectedColors = {}) => {
	const [selectedColors, setSelectedColors] = useState<SelectedColors>(initialColors);

	const handleTagClick = (info: string) => {
		setSelectedColors((prevColors) => {
			if (prevColors[info]) {
				const { [info]: _, ...rest } = prevColors;
				return rest;
			} else {
				const randomColor =
					colors[Math.floor(Math.random() * colors.length)];
				return { ...prevColors, [info]: randomColor };
			}
		});
	};

	return { selectedColors, handleTagClick };
};
