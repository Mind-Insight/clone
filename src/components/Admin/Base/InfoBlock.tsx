"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/Admin/Base/InfoBlock.module.scss";
import { useUser } from "@/hooks/useUser";
import AdminBlock from "../Pages/Admins/AdminBlock";
import ChangeBlock from "./ChangeBlock";

interface InfoBlockProps {
	title_up_text: string;
	title: string;
	endpoint: string;
}

const renderConfig: Record<string, { key: string; label: string }[]> = {
	admins: [
		{ key: "id", label: "ID" },
		{ key: "email", label: "Электронная почта" },
		{ key: "updatedAt", label: "Дата изменения" },
		{ key: "createdAt", label: "Дата регистрации" },
	],
	users: [
		{ key: "firstName", label: "Имя" },
		{ key: "lastName", label: "Фамилия" },
		{ key: "thirdName", label: "Отчество" },
		{ key: "email", label: "Электронная почта" },
		{ key: "gender", label: "Пол" },
	],
	things: [
		{ key: "thingId", label: "ID вещи" },
		{ key: "name", label: "Название" },
		{ key: "category", label: "Категория" },
		{ key: "owner", label: "Владелец" },
	],
};

const InfoBlock: React.FC<InfoBlockProps> = ({
	title_up_text,
	title,
	endpoint,
}) => {
	const { user, loading } = useUser();
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`http://37.143.11.199:3030/user/${endpoint}`
			);
			const result = await response.json();
			setData(result);
		};

		fetchData();
	}, [endpoint]);

	if (loading) {
		return <div>Загрузка...</div>;
	}

	const columns = renderConfig[endpoint] || [];

	return (
		<div className={styles.container}>
			<div className={styles.title_up_container}>
				<div className={styles.title_up}>
					<Image
						className={styles.title_up_image}
						src="/Admin/Base/icons/title_upinfo_icon.svg"
						width="11"
						height="15"
						alt="title icon"
					/>
					<div className={styles.stroke}>/</div>
					<div className={styles.title_up_text}>{title_up_text}</div>
				</div>
				<div className={styles.admin_info}>
					<Image
						className={styles.avatar}
						src="/Admin/admin_avatar.svg"
						width="32"
						height="32"
						alt="avatar"
					/>
					<div className={styles.admin_info_text}>
						{user ? user.phone : "undefined"}
					</div>
				</div>
			</div>

			<div className={styles.title}>{title}</div>

			<div className={styles.search_block}>
				<div className={styles.input_block}>
					<div className={styles.search_icon_container}>
						<Image
							className={styles.search_icon}
							src="/Admin/Base/icons/search_icon.svg"
							width="20"
							height="20"
							alt="search icon"
						/>
					</div>
					<input
						className={styles.search_input}
						type="text"
						placeholder="Поиск по данным"
					/>
				</div>
			</div>

			<div className={styles.main_container}>
				<div className={styles.info_blocks}>
					<div
						className={styles.line_block}
						style={{ color: "rgba(48, 48, 47, 0.60)" }}
					>
						{columns.map((col) => (
							<AdminBlock key={col.key} info={col.label} />
						))}
						<ChangeBlock icons={false} />
					</div>

					{data.map((item, index) => {
						const itemId = item.id || item.thingId;
						const profileLink = `/admin/users/${itemId}`;

						return (
							<div
								key={itemId}
								className={styles.line_block}
								style={{
									backgroundColor:
										index % 2 === 0
											? "rgba(48, 48, 47, 0.05)"
											: "white",
								}}
							>
								{columns.map((col, colIndex) =>
									colIndex === 0 ? (
										<AdminBlock
											key={col.key}
											link={profileLink}
											info={item[col.key] || "-"}
										/>
									) : (
										<AdminBlock
											key={col.key}
											info={item[col.key] || "-"}
										/>
									)
								)}
								<ChangeBlock />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default InfoBlock;
