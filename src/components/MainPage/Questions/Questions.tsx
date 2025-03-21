import React from "react";
import Image from "next/image";

import styles from "@styles/MainPage/Questions/Questions.module.scss";
import QuestionBlock from "./QuestionBlock";

const Questions = () => {
    return (
        <div className={styles.container}>
            <div className={styles.questions_container}>
                <div className={styles.title_container}>
                    <div className={styles.title_block}>
                        <div className={styles.title_text}>
                            Отвечаем на вопросы
                        </div>
                        <Image
                            className={styles.image}
                            src="/Questions/questions_spiral.svg"
                            alt="spiral"
                            width="160"
                            height="36"
                        />
                    </div>
                </div>

                <div className={styles.questions}>
                    <QuestionBlock text="Что именно вы делали?" />
                    <QuestionBlock text="Я представитель НКО. Как мне подключиться к программе?" />
                    <QuestionBlock text="Почему нужно помогать фондам?" />
                    <QuestionBlock text="Как именно я могу помочь?" />
                    <QuestionBlock text="Почему вы не принимаете пожертвования?" />
                </div>
            </div>
        </div>
    );
};

export default Questions;
