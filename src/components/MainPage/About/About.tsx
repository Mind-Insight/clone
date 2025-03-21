"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@styles/MainPage/About/About.module.scss";
import AboutCard from "./AboutCard";

const About = () => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardWidth, setCardWidth] = useState(638);
	const totalCards = 4;

	useEffect(() => {
		const updateCardWidth = () => {
			setCardWidth(window.innerWidth <= 450 ? 420 : 638);
		};

		updateCardWidth();
		window.addEventListener("resize", updateCardWidth);

		return () => {
			window.removeEventListener("resize", updateCardWidth);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (!carouselRef.current) return;

			const scrollPos = carouselRef.current.scrollLeft;
			const newIndex = Math.round(scrollPos / cardWidth);
			setCurrentIndex(newIndex);
		};

		const carousel = carouselRef.current;
		if (carousel) {
			carousel.addEventListener("scroll", handleScroll);
		}

		handleScroll();

		return () => {
			if (carousel) {
				carousel.removeEventListener("scroll", handleScroll);
			}
		};
	}, [cardWidth]);

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!carouselRef.current) return;

		isDragging.current = true;
		startX.current = e.pageX - carouselRef.current.offsetLeft;
		scrollLeft.current = carouselRef.current.scrollLeft;

		carouselRef.current.style.scrollBehavior = "auto";
		carouselRef.current.style.cursor = "grabbing";
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDragging.current || !carouselRef.current) return;

		const x = e.pageX - carouselRef.current.offsetLeft;
		const distance = x - startX.current;
		carouselRef.current.scrollLeft = scrollLeft.current - distance;
	};

	const handleMouseUp = () => {
		if (!carouselRef.current) return;

		isDragging.current = false;
		carouselRef.current.style.cursor = "grab";

		const scrollPos = carouselRef.current.scrollLeft;
		const closestCard = Math.round(scrollPos / cardWidth) * cardWidth;

		carouselRef.current.style.scrollBehavior = "smooth";
		carouselRef.current.scrollTo({ left: closestCard });
	};

	const handleMouseLeave = () => {
		if (isDragging.current) handleMouseUp();
	};

	const cardsData = [
		{
			main_text:
				"“Участвуя в проектах, я смогла помочь людям в сложных ситуациях и увидеть их искреннюю благодарность. Платформа очень удобная, а команда всегда поддерживает и предлагает интересные проекты”",
			sender_logo: "/About/logos/first.svg",
			sender_name: "Анастасия Борисенко",
			sender_info: "Откликнулась на 10 просьб",
		},
		{
			main_text:
				"“Участвуя в проектах, я смогла помочь людям в сложных ситуациях и увидеть их искреннюю благодарность. Платформа очень удобная, а команда всегда поддерживает и предлагает интересные проекты”",
			sender_logo: "/About/logos/first.svg",
			sender_name: "Анастасия Борисенко",
			sender_info: "Откликнулась на 10 просьб",
		},
		{
			main_text:
				"“Участвуя в проектах, я смогла помочь людям в сложных ситуациях и увидеть их искреннюю благодарность. Платформа очень удобная, а команда всегда поддерживает и предлагает интересные проекты”",
			sender_logo: "/About/logos/first.svg",
			sender_name: "Анастасия Борисенко",
			sender_info: "Откликнулась на 10 просьб",
		},
		{
			main_text:
				"“Участвуя в проектах, я смогла помочь людям в сложных ситуациях и увидеть их искреннюю благодарность. Платформа очень удобная, а команда всегда поддерживает и предлагает интересные проекты”",
			sender_logo: "/About/logos/first.svg",
			sender_name: "Анастасия Борисенко",
			sender_info: "Откликнулась на 10 просьб",
		},
		{
			main_text:
				"“Участвуя в проектах, я смогла помочь людям в сложных ситуациях и увидеть их искреннюю благодарность. Платформа очень удобная, а команда всегда поддерживает и предлагает интересные проекты”",
			sender_logo: "/About/logos/first.svg",
			sender_name: "Анастасия Борисенко",
			sender_info: "Откликнулась на 10 просьб",
		},
		{
			main_text:
				"“Участвуя в проектах, я смогла помочь людям в сложных ситуациях и увидеть их искреннюю благодарность. Платформа очень удобная, а команда всегда поддерживает и предлагает интересные проекты”",
			sender_logo: "/About/logos/first.svg",
			sender_name: "Анастасия Борисенко",
			sender_info: "Откликнулась на 10 просьб",
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.about_container}>
				<div className={styles.title_container}>
					<div className={styles.title}>Что о нас говорят?</div>
				</div>

				<div
					className={styles.carousel_container}
					ref={carouselRef}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseLeave}
				>
					{cardsData.map((card, index) => (
						<div
							key={index}
							style={{
								opacity: index === currentIndex + 1 ? 1 : 0.5,
								transition: "opacity 0.3s",
								width: "638px",
							}}
						>
							<AboutCard
								main_text={card.main_text}
								sender_logo={card.sender_logo}
								sender_name={card.sender_name}
								sender_info={card.sender_info}
							/>
						</div>
					))}
				</div>

				<div className={styles.pages}>
					{Array.from({ length: totalCards }, (_, index) => (
						<div
							key={index}
							className={`${styles.circle} ${
								index === currentIndex ? styles.active : ""
							}`}
							style={{
								transform:
									index === currentIndex
										? "scale(1.2)"
										: "scale(1)",
								transition: "transform 0.3s",
							}}
						></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
