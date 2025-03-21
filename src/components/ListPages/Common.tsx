"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "@styles/ListPages/Organizations.module.scss";
import FilterBlock from "./FilterBlock";
import Card from "./OrganizationCard";

interface Organization {
	id: number;
	imageSrc: string;
	type: string;
	title: string;
	phone?: string;
	website?: string;
	email?: string;
	location: string;
}

interface Volunteer {
	id: number;
	imageSrc: string;
	type: string;
	title: string;
	description: string;
	location: string;
}

interface CommonPageProps {
	title: string;
	showMap?: boolean;
	dataType: "organizations" | "volunteers";
	data: Organization[] | Volunteer[];
}

const MapComponent = dynamic(() => import("./MapComponent"), {
	ssr: false,
});

export default function CommonPage({
	title,
	showMap = false,
	dataType,
	data,
}: CommonPageProps) {
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const [isMapVisible, setIsMapVisible] = useState(true);
	const [isMapButtonActive, setIsMapButtonActive] = useState(false);

	const handleLocationSelect = (location) => {
		setSelectedLocation(location);
		console.log("Selected Location:", location);
	};

	const toggleFilterModal = () => {
		setIsFilterModalOpen((prev) => !prev);
	};

	const toggleMapVisibility = () => {
		setIsMapVisible((prev) => !prev);
		setIsMapButtonActive((prev) => !prev);
	};

	return (
		<div className={styles.container}>
			<div className={styles.top_content}>
				<div className={styles.title}>{title}</div>

				{showMap && (
					<div
						className={`${styles.map_container} ${
							isMapVisible ? styles.visible : styles.hidden
						}`}
					>
						<MapComponent onLocationSelect={handleLocationSelect} />
						{selectedLocation && (
							<div
								style={{
									textAlign: "center",
									marginTop: "20px",
								}}
							>
								<h2>Выбранная локация:</h2>
								<p>Широта: {selectedLocation.lat}</p>
								<p>Долгота: {selectedLocation.lng}</p>
							</div>
						)}
					</div>
				)}
			</div>

			<div className={styles.main}>
				<div className={styles.top}>
					<div className={styles.top_input}>
						<Image
							src="/ListPages/filter/filter_search.svg"
							width="14"
							height="14"
							alt="search"
						/>
						<input type="text" placeholder="Поиск" />
					</div>
					<div className={styles.toggle_btns}>
						<button
							className={`${styles.map_toggle_btn} ${
								isMapButtonActive ? styles.active : ""
							}`}
							onClick={toggleMapVisibility}
						>
							<Image
								className={styles.map_filter_btn}
								src="/ListPages/filter/map_filter.svg"
								width="17"
								height="17"
								alt="map"
							/>
						</button>
						<button
							className={styles.filter_toggle_btn}
							onClick={toggleFilterModal}
						>
							<Image
								className={styles.open_filter_btn}
								src="/ListPages/filter/adaptive_sort.svg"
								width="20"
								height="20"
								alt="filter"
							/>
						</button>
					</div>
				</div>

				<div
					className={`${styles.filter_modal} ${
						isFilterModalOpen ? styles.open : ""
					}`}
					onClick={toggleFilterModal}
				>
					<div
						className={styles.filter_modal_content}
						onClick={(e) => e.stopPropagation()}
					>
						<FilterBlock />
					</div>
				</div>

				<div className={styles.filter_block}>
					<FilterBlock />
				</div>

				<div className={styles.cards}>
					{data.map((item) => (
						<Card
							key={item.id}
							imageSrc={item.imageSrc}
							type={item.type}
							title={item.title}
							phone={item.phone}
							website={item.website}
							email={item.email}
							location={item.location}
							description={item.description}
							isVolunteer={dataType === "volunteers"}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
