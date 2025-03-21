import React from "react";
import Image from "next/image";

import styles from "@styles/Auth/Register.module.scss";
import Link from "next/link";
import BaseMainInput from "../Quiz/Volunteer_quiz/Base/BaseMainInput";

const RecoveryPassword = () => {
	return (
		<div className={styles.container}>
			<div className={styles.register_container}>
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
									Восстановление пароля
								</div>

								<div className={styles.sub_title}>
									Придумайте новый пароль для вашего аккаунта
								</div>
							</div>

							<div className={styles.info_block}>
								<BaseMainInput
									input_text="Введите пароль"
									title_text="Новый пароль"
									input_type="password"
									icon="/Auth/icon_closed_eye.svg"
								></BaseMainInput>
								<BaseMainInput
									input_text="Введите пароль"
									title_text="Повторите пароль"
									input_type="password"
									icon="/Auth/icon_closed_eye.svg"
								></BaseMainInput>
							</div>

							<div className={styles.enter_button}>
								<button>Сохранить пароль</button>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.right_block}>
					<Image
						className={styles.image}
						src="/Auth/auth_register_image.svg"
						alt="auth image"
						width="812"
						height="509"
					></Image>
				</div>
			</div>
		</div>
	);
};

export default RecoveryPassword;
