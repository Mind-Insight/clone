"use client"
import React from "react";
import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss";
import Tag from "@/components/MainPage/Main/Tag";
import { useTagColors } from "@/hooks/useTagColors";
import { borderStyles } from "@/utils/colors";

interface Block {
	image: string;
	title: string;
}

interface BaseMainBlocksProps {
	blocks: Block[];
	background_color?: string;
    default_color?: string;
	border_default?: string;
}

const BaseMainBlocks: React.FC<BaseMainBlocksProps> = ({
	blocks,
	background_color,
	default_color = "white",
    border_default = "2p solid rgba(216, 216, 216, 0.6)"
}) => {
    const initialColors = blocks.reduce((acc, block) => {
        if (background_color) {
            acc[block.title] = background_color;
        }
        return acc;
    }, {} as Record<string, string>);

    const { selectedColors, handleTagClick } = useTagColors();

	return (
		<div className={styles.main_blocks_container}>
			{blocks.map((block, index) => (
				<Tag
					key={index}
					image={block.image}
					info={block.title}
                    size="very_large"
					color={selectedColors[block.title]}
                    default_color={default_color}
					border={
						selectedColors[block.title]
							? borderStyles[selectedColors[block.title]]
							: "2px solid rgba(216, 216, 216, 0.6)"
					}
					onClick={() => handleTagClick(block.title)}
				/>
			))}
		</div>
	);
};

export default BaseMainBlocks;
