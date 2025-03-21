"use client";
import Container from "@/components/Admin/Base/Container";
import InfoBlock from "@/components/Admin/Base/InfoBlock";
import Navigation from "@/components/Admin/Base/Navigation";
import Admins from "@/components/Admin/Pages/Admins/Admins";
import Things from "@/components/Admin/Pages/Things";
import Users from "@/components/Admin/Pages/Users";
import React, { useState } from "react";

const AdminDashboard = () => {
	const [activeBlock, setActiveBlock] = useState<string>("admins");

	const renderContent = () => {
		switch (activeBlock) {
			case "admins":
				return <Admins></Admins>;
			case "users":
				return <Users></Users>;
			default:
				return <div>Выберите раздел</div>;
		}
	};

	return (
		<Container>
			<Navigation
				activeBlock={activeBlock}
				setActiveBlock={setActiveBlock}
			/>
			{renderContent()}
		</Container>
	);
};

export default AdminDashboard;
