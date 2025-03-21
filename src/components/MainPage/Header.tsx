"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "@styles/MainPage/Header/Header.module.scss";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
}

const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        if (isTokenExpired(token)) {
          localStorage.removeItem("accessToken");
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      } else {
        setIsLoggedIn(false);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setIsUserMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                className={styles.logo_image}
                width={197}
                height={44}
              />
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/">Главная</Link>
            <Link href="/volunteers">Волонтеры</Link>
            <Link href="/organizations">Организации</Link>
          </nav>

          <div className={styles.enter_container}>
            {!isLoggedIn ? (
              <div className={styles.enter}>
                <Link href="/auth/login/" className={styles.enter_btn}>
                  Войти
                </Link>
              </div>
            ) : (
              <div className={styles.user_container}>
                <Image
                  src="/bell.svg"
                  width="32"
                  height="32"
                  alt="bell"
                />
                <div className={styles.user_info}>
                  <Image
                    src="/PersonalAccount/account/profile_photos/person_logo.svg"
                    width="44"
                    height="44"
                    alt="person"
                  />
                  <Image
                    src="/arrow.svg"
                    width="16"
                    height="16"
                    alt="arrow"
                    onClick={toggleUserMenu}
                  />
                </div>
                {isUserMenuOpen && (
                  <div className={styles.user_menu}>
                    <div className={styles.user_title}>
                      <Image
                        src="/PersonalAccount/profile/cross_modal.svg"
                        alt="cross"
                        className={styles.user_cross}
                        width="12"
                        height="12"
                        onClick={() => setIsUserMenuOpen(false)}
                      />
                      <Image
                        className={styles.user_profile_image}
                        src="/PersonalAccount/account/profile_photos/person_logo.svg"
                        height="56"
                        width="56"
                        alt="user"
                      />
                      <div className={styles.username}>Иван Иванов</div>
                    </div>

                    <div className={styles.user_links}>
                      <Link
                        href="/account/volunteer/profile"
                        className={styles.user_link}
                      >
                        <Image
                          src="/PersonalAccount/profile/person_opacity.svg"
                          width="14"
                          height="14"
                          alt="person"
                        />
                        <div className={styles.user_link_text}>
                          Перейти в профиль
                        </div>
                      </Link>
                      <Link
                        href="/account/volunteer/"
                        className={styles.user_link}
                      >
                        <Image
                          src="/PersonalAccount/profile/settings.svg"
                          width="14"
                          height="14"
                          alt="person"
                        />
                        <div className={styles.user_link_text}>
                          Настройки
                        </div>
                      </Link>
                      <hr />
                      <div
                        className={styles.user_link}
                        onClick={handleLogout}
                      >
                        <Image
                          src="/PersonalAccount/profile/exit.svg"
                          width="14"
                          height="14"
                          alt="person"
                        />
                        <div className={styles.user_link_text}>Выйти</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className={styles.menu_icon} onClick={toggleMenu}>
            <Icon icon="mynaui:menu" />
          </div>

          <div
            className={`${styles.popup_menu} ${
              isMenuOpen ? styles.active : ""
            }`}
          >
            <Link href="/">Главная</Link>
            <Link href="/volunteers">Волонтеры</Link>
            <Link href="/organizations">Организации</Link>
            {!isLoggedIn ? (
              <Link href="/auth/login/" className={styles.enter_btn}>
                Войти
              </Link>
            ) : (
              <>
                <Link
                  href="/account/volunteer/profile"
                  className={styles.popup_menu_link}
                >
                  Личный кабинет
                </Link>
                <div
                  className={styles.popup_menu_link}
                  onClick={handleLogout}
                >
                  Выйти
                </div>
              </>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;