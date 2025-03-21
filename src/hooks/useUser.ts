import { useEffect, useState } from "react";

export const useUser = () => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			const token = localStorage.getItem("accessToken");
			if (!token) {
				setUser(null);
				setLoading(false);
				return;
			}

			try {
				const response = await fetch("http://37.143.11.199:3030/user/me", {
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				});
				if (response.ok) {
					const data = await response.json();
					setUser(data);
				} else {
					setUser(null);
					console.error("Ошибка получения данных о пользователе");
				}
			} catch (error) {
				setUser(null);
				console.error("Ошибка сети:", error);
			}

			setLoading(false);
		};

		fetchUser();
	}, []);
	return { user, loading };
};
