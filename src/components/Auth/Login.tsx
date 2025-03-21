"use client";
import React, { useState } from "react";
import Image from "next/image";

import styles from "@styles/Auth/Register.module.scss";
import Link from "next/link";
import BaseMainInput from "../Quiz/Volunteer_quiz/Base/BaseMainInput";
import { useRouter } from "next/navigation";

const Login = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		phone: "",
		password: "",
	});

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const payload = {
			phone: formData.phone,
			password: formData.password,
		};

		try {
			const response = await fetch("http://37.143.11.199:3030/auth/login/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const data = await response.json();
			console.log("Ответ сервера:", data);

			if (response.ok) {
				localStorage.setItem(
					"accessToken",
					data.backendTokens.accessToken
				);
				router.push("/account/volunteer");
			} else {
				alert(data.message || "Ошибка входа");
			}
		} catch (error) {
			console.error("Ошибка при входе:", error);
			alert("Ошибка сети");
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.register_container}>
				<div className={styles.left_block}>
					<div className={styles.inner_container}>
						<div className={styles.logo}>
							<Link href="/">
								<Image
									src="/Auth/auth_logo.svg"
									alt="logo"
									width="143"
									height="32"
								></Image>
							</Link>
						</div>

						<div className={styles.main_content}>
							<div className={styles.title_container}>
								<div className={styles.title}>
									Войти в аккаунт
								</div>
							</div>

							<div className={styles.info_block}>
								<BaseMainInput
									input_text="+7 (___) ___ __ __"
									title_text="Номер телефона"
									input_type="tel"
									value={formData.phone}
									onChange={(value) =>
										handleChange("phone", value)
									}
								></BaseMainInput>
								<BaseMainInput
									input_text="Введите ваш пароль"
									title_text="Пароль"
									input_type="password"
									icon="/Auth/icon_closed_eye.svg"
									value={formData.password}
									onChange={(value) =>
										handleChange("password", value)
									}
								></BaseMainInput>
								<div className={styles.forgot}>
									<Link
										href="/auth/recovery-password/"
										className={styles.forgot_password}
									>
										Забыли пароль?
									</Link>
								</div>
							</div>

							<div className={styles.enter_button}>
								<button type="submit">Войти</button>
							</div>

							<div className={styles.sub_enter_info}>
								<span>Нет аккаунта? </span>
								<Link href="/auth/register/">
									Зарегистрироваться
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.right_block}>
						<Image
							className={styles.image}
							src="/Auth/auth_login_image.svg"
							alt="auth image"
							width="812"
							height="509"
						></Image>
					</div>
					<div className={styles.organization}>
						<button className={styles.organization_btn}>
							Регистрация организатора
						</button>
					</div>
				</div>

				{/* <div className={styles.right_block}>
					<Image
						className={styles.image}
						src="/Auth/auth_login_image.svg"
						alt="auth image"
						width="812"
						height="509"
					></Image>
				</div> */}
			</form>
		</div>
	);
};

export default Login;
