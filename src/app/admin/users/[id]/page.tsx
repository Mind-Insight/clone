"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Container from "@/components/Admin/Base/Container";
import Navigation from "@/components/Admin/Base/Navigation";

const UserDetails = () => {
	const params = useParams();
	const { id } = params;
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					`http://37.143.11.199:3030/user/users/${id}`
				);
				const data = await response.json();
				setUser(data);
			} catch (error) {
				console.error("Ошибка загрузки данных:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, [id]);

	if (loading) return <div>Загрузка...</div>;
	if (!user) return <div>Пользователь не найден</div>;

	return (
		<Container>
            {/* <Navigation activeBlock="admins"></Navigation> */}


        </Container>
	);
};

export default UserDetails;
