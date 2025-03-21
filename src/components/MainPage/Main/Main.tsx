"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Main/Main.module.scss";
import MainCard from "./MainCard";
import Tag from "./Tag";
import { borderStyles, colors } from "@/utils/colors";
import { useTagColors } from "@/hooks/useTagColors";

interface SelectedColors {
	[key: string]: string;
}

const Main = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [visibleCards, setVisibleCards] = useState(6);

	const handleScroll = (direction: number) => {
		if (scrollRef.current) {
			const scrollAmount = 300;
			scrollRef.current.scrollBy({
				left: direction * scrollAmount,
				behavior: "smooth",
			});
		}
	};

	const { selectedColors, handleTagClick } = useTagColors();

	const tagsData = [
		{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
		{ image: "/Main/icons/icon_granddad.svg", info: "Пенсионеры" },
		{ image: "/Main/icons/icon_family.svg", info: "Многодетные семьи" },
		{ image: "/Main/icons/icon_disabled.svg", info: "Инвалиды" },
		{ image: "/Main/icons/icon_pregnant.svg", info: "Беременные" },
		{
			image: "/Main/icons/icon_backpack.svg",
			info: "Беженец или вынужденный переселенец",
		},
		{
			image: "/Main/icons/icon_heart.svg",
			info: "Лицо, пострадавшее от насилия",
		},
		{ image: "/Main/icons/icon_sun.svg", info: "Особый ребенок" },
	];

	const cardsData = [
		{
			image: "/Main/images/first.svg",
			title: "Помощь с собакой бабушке на постоянной основе",
			address_info: "Москва",
			time_info: "12.10.2024 - 16.10.2024",
			tags: [
				{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
				{ image: "/Main/icons/icon_sun.svg", info: "Книги" },
				{ image: "/Main/icons/icon_heart.svg", info: "Еда" },
				{ image: "/Main/icons/icon_backpack.svg", info: "Игрушки" },
			],
		},
		{
			image: "/Main/images/second.svg",
			title: "Помощь с выгулом собаки бабушке",
			address_info: "Москва",
			time_info: "12.10.2024 - 16.10.2024",
			tags: [
				{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
				{ image: "/Main/icons/icon_sun.svg", info: "Книги" },
				{ image: "/Main/icons/icon_heart.svg", info: "Еда" },
				{ image: "/Main/icons/icon_backpack.svg", info: "Игрушки" },
			],
		},
		{
			image: "/Main/images/third.svg",
			title: "Помощь с собакой бабушке на постоянной основе",
			address_info: "Москва",
			time_info: "12.10.2024 - 16.10.2024",
			tags: [
				{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
				{ image: "/Main/icons/icon_sun.svg", info: "Книги" },
				{ image: "/Main/icons/icon_heart.svg", info: "Еда" },
				{ image: "/Main/icons/icon_backpack.svg", info: "Игрушки" },
			],
		},
		{
			image: "/Main/images/fourth.svg",
			title: "Помощь с собакой бабушке на постоянной основе",
			address_info: "Москва",
			time_info: "12.10.2024 - 16.10.2024",
			tags: [
				{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
				{ image: "/Main/icons/icon_sun.svg", info: "Книги" },
				{ image: "/Main/icons/icon_heart.svg", info: "Еда" },
				{ image: "/Main/icons/icon_backpack.svg", info: "Игрушки" },
			],
		},
		{
			image: "/Main/images/fifth.svg",
			title: "Помощь с собакой бабушке на постоянной основе",
			address_info: "Москва",
			time_info: "12.10.2024 - 16.10.2024",
			tags: [
				{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
				{ image: "/Main/icons/icon_sun.svg", info: "Книги" },
				{ image: "/Main/icons/icon_heart.svg", info: "Еда" },
				{ image: "/Main/icons/icon_backpack.svg", info: "Игрушки" },
			],
		},
		{
			image: "/Main/images/sixth.svg",
			title: "Помощь с собакой бабушке на постоянной основе",
			address_info: "Москва",
			time_info: "12.10.2024 - 16.10.2024",
			tags: [
				{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
				{ image: "/Main/icons/icon_sun.svg", info: "Книги" },
				{ image: "/Main/icons/icon_heart.svg", info: "Еда" },
				{ image: "/Main/icons/icon_backpack.svg", info: "Игрушки" },
			],
		},
		{
			image: "/Main/images/first.svg",
			title: "Помощь с собакой бабушке на постоянной основе",
			address_info: "Москва",
			time_info: "12.10.2024 - 16.10.2024",
			tags: [
				{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
				{ image: "/Main/icons/icon_sun.svg", info: "Книги" },
				{ image: "/Main/icons/icon_heart.svg", info: "Еда" },
				{ image: "/Main/icons/icon_backpack.svg", info: "Игрушки" },
			],
		},
		{
			image: "/Main/images/second.svg",
			title: "Помощь с собакой бабушке на постоянной основе",
			address_info: "Москва",
			time_info: "12.10.2024 - 16.10.2024",
			tags: [
				{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
				{ image: "/Main/icons/icon_sun.svg", info: "Книги" },
				{ image: "/Main/icons/icon_heart.svg", info: "Еда" },
				{ image: "/Main/icons/icon_backpack.svg", info: "Игрушки" },
			],
		},
		{
			image: "/Main/images/third.svg",
			title: "Помощь с собакой бабушке на постоянной основе",
			address_info: "Москва",
			time_info: "12.10.2024 - 16.10.2024",
			tags: [
				{ image: "/Main/icons/icon_hanger.svg", info: "Одежда и вещи" },
				{ image: "/Main/icons/icon_sun.svg", info: "Книги" },
				{ image: "/Main/icons/icon_heart.svg", info: "Еда" },
				{ image: "/Main/icons/icon_backpack.svg", info: "Игрушки" },
			],
		},
	];

	const handleSeeMore = () => {
		setVisibleCards(cardsData.length);
	};

	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<div className={styles.title}>Помогаем друг другу вместе!</div>
				<div className={styles.filter_section}>
					<div
						className={styles.filter_arrow}
						onClick={() => handleScroll(-1)}
					>
						<Image
							src="/Fonds/fonds_left_arrow.svg"
							alt="left_arrow"
							width="48"
							height="48"
						/>
					</div>
					<div className={styles.filter_block} ref={scrollRef}>
						{tagsData.map(({ image, info }) => (
							<Tag
								key={info}
								image={image}
								info={info}
								color={selectedColors[info]}
								border={
									selectedColors[info]
										? borderStyles[selectedColors[info]]
										: "2px solid white"
								}
								onClick={() => handleTagClick(info)}
							/>
						))}
					</div>
					<div
						className={styles.filter_arrow}
						onClick={() => handleScroll(1)}
					>
						<Image
							src="/Fonds/fonds_right_arrow.svg"
							alt="right_arrow"
							width="48"
							height="48"
						/>
					</div>
				</div>

				<div className={styles.content_block}>
					<div className={styles.cards}>
						{cardsData.slice(0, visibleCards).map((card, index) => (
							<MainCard
								key={index}
								image={card.image}
								title={card.title}
								address_info={card.address_info}
								time_info={card.time_info}
								tags={card.tags}
							/>
						))}
					</div>

					{visibleCards < cardsData.length && (
						<div className={styles.see_more_block}>
							<div
								className={styles.see_more_btn}
								onClick={handleSeeMore}
							>
								<p>Смотреть все</p>
							</div>
							<div className={styles.see_more_info}>
								Еще {cardsData.length - visibleCards}{" "}
								предложения
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Main;
