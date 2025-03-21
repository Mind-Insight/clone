"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@styles/ListPages/Filter.module.scss";

const FilterBlock = () => {
  const [activeButton, setActiveButton] = useState("all");
  const [activeDistance, setActiveDistance] = useState("near");
  const handleDistanceClick = (distance) => {
    setActiveDistance(distance);
  };
  const [selectedCategories, setSelectedCategories] = useState({
    animals: false,
    children: false,
    elderly: false,
    adults: false,
  });

  const [selectedTypes, setSelectedTypes] = useState({
    material: false,
    event: false,
    physical: false,
    intellectual: false,
    other: false,
  });

  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleTypeClick = (type) => {
    setSelectedTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.title_top}>
          <div className={styles.title_top_text}>Фильтры</div>
          <div className={styles.clear}>
            <Image
              src="/ListPages/filter/filter_clear.svg"
              width="16"
              height="16"
              alt="clear"
            />
            <div className={styles.clear_text}>Очистить</div>
          </div>
        </div>
        <div className={styles.title_search}>
          <Image
            src="/ListPages/filter/filter_search.svg"
            width="16"
            height="16"
            alt="search"
          />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>

      <div className={styles.status}>
        <div className={styles.status_title}>
          <div className={styles.status_text}>Статус</div>
          <Image
            src="/ListPages/filter/filter_arrow.svg"
            width="16"
            height="16"
            alt="arrow down"
          />
        </div>
        <div className={styles.status_buttons}>
          <div
            className={`${styles.btn} ${
              activeButton === "active" ? styles.active : ""
            }`}
            onClick={() => setActiveButton("active")}
          >
            <Image
              className={styles.choice}
              src={
                activeButton === "active"
                  ? "/ListPages/filter/filter_choice_active.svg"
                  : "/ListPages/filter/filter_choice_inactive.svg"
              }
              width="14"
              height="16"
              alt="choice"
            />
            <div className={styles.btn_text}>Активные</div>
          </div>
          <div
            className={`${styles.btn} ${
              activeButton === "all" ? styles.active : ""
            }`}
            onClick={() => setActiveButton("all")}
          >
            <Image
              className={styles.choice}
              src={
                activeButton === "all"
                  ? "/ListPages/filter/filter_choice_active.svg"
                  : "/ListPages/filter/filter_choice_inactive.svg"
              }
              width="14"
              height="16"
              alt="choice"
            />
            <div className={styles.btn_text}>Все</div>
          </div>
        </div>
      </div>

      <div className={styles.status}>
        <div className={styles.status_title}>
          <div className={styles.status_text}>Расстояние</div>
          <Image
            src="/ListPages/filter/filter_arrow.svg"
            width="16"
            height="16"
            alt="arrow down"
          />
        </div>
        <div className={styles.distances}>
          <div
            className={`${styles.distance_block} ${
              activeDistance === "near" ? styles.active : ""
            }`}
            onClick={() => handleDistanceClick("near")}
          >
            <Image
              src="/ListPages/filter/filter_location.svg"
              width="14"
              height="14"
              alt="location"
            />
            <div className={styles.distance_text}>Рядом со мной</div>
          </div>
          <div
            className={`${styles.distance_block} ${
              activeDistance === "5km" ? styles.active : ""
            }`}
            onClick={() => handleDistanceClick("5km")}
          >
            <div className={styles.distance_text}>до 5 км</div>
          </div>
          <div
            className={`${styles.distance_block} ${
              activeDistance === "10km" ? styles.active : ""
            }`}
            onClick={() => handleDistanceClick("10km")}
          >
            <div className={styles.distance_text}>до 10 км</div>
          </div>
          <div
            className={`${styles.distance_block} ${
              activeDistance === "50km" ? styles.active : ""
            }`}
            onClick={() => handleDistanceClick("50km")}
          >
            <div className={styles.distance_text}>до 50 км</div>
          </div>
          <div
            className={`${styles.distance_block} ${
              activeDistance === "100km" ? styles.active : ""
            }`}
            onClick={() => handleDistanceClick("100km")}
          >
            <div className={styles.distance_text}>до 100 км</div>
          </div>
        </div>
      </div>

      <div className={styles.status}>
        <div className={styles.status_title}>
          <div className={styles.status_text}>Категории помощи</div>
          <Image
            src="/ListPages/filter/filter_arrow.svg"
            width="16"
            height="16"
            alt="arrow down"
          />
        </div>
        <div className={styles.choices}>
          <div
            className={styles.choice}
            onClick={() => handleCategoryClick("animals")}
          >
            <Image
              src={
                selectedCategories.animals
                  ? "/ListPages/filter/filter_checkbox_active.svg"
                  : "/ListPages/filter/filter_checkbox_inactive.svg"
              }
              width="16"
              height="16"
              alt="checkbox"
            />
            <div className={styles.choice_text}>Животным</div>
          </div>
          <div
            className={styles.choice}
            onClick={() => handleCategoryClick("children")}
          >
            <Image
              src={
                selectedCategories.children
                  ? "/ListPages/filter/filter_checkbox_active.svg"
                  : "/ListPages/filter/filter_checkbox_inactive.svg"
              }
              width="16"
              height="16"
              alt="checkbox"
            />
            <div className={styles.choice_text}>Детям</div>
          </div>
          <div
            className={styles.choice}
            onClick={() => handleCategoryClick("elderly")}
          >
            <Image
              src={
                selectedCategories.elderly
                  ? "/ListPages/filter/filter_checkbox_active.svg"
                  : "/ListPages/filter/filter_checkbox_inactive.svg"
              }
              width="16"
              height="16"
              alt="checkbox"
            />
            <div className={styles.choice_text}>Пожилым / Инвалидам</div>
          </div>
          <div
            className={styles.choice}
            onClick={() => handleCategoryClick("adults")}
          >
            <Image
              src={
                selectedCategories.adults
                  ? "/ListPages/filter/filter_checkbox_active.svg"
                  : "/ListPages/filter/filter_checkbox_inactive.svg"
              }
              width="16"
              height="16"
              alt="checkbox"
            />
            <div className={styles.choice_text}>Взрослым</div>
          </div>
        </div>
      </div>

      <div className={styles.status}>
        <div className={styles.status_title}>
          <div className={styles.status_text}>Тип помощи</div>
          <Image
            src="/ListPages/filter/filter_arrow.svg"
            width="16"
            height="16"
            alt="arrow down"
          />
        </div>
        <div className={styles.choices}>
          <div
            className={styles.choice}
            onClick={() => handleTypeClick("material")}
          >
            <Image
              src={
                selectedTypes.material
                  ? "/ListPages/filter/filter_checkbox_active.svg"
                  : "/ListPages/filter/filter_checkbox_inactive.svg"
              }
              width="16"
              height="16"
              alt="checkbox"
            />
            <div className={styles.choice_text}>Материальная помощь</div>
          </div>
          <div
            className={styles.choice}
            onClick={() => handleTypeClick("event")}
          >
            <Image
              src={
                selectedTypes.event
                  ? "/ListPages/filter/filter_checkbox_active.svg"
                  : "/ListPages/filter/filter_checkbox_inactive.svg"
              }
              width="16"
              height="16"
              alt="checkbox"
            />
            <div className={styles.choice_text}>Мероприятие</div>
          </div>
          <div
            className={styles.choice}
            onClick={() => handleTypeClick("physical")}
          >
            <Image
              src={
                selectedTypes.physical
                  ? "/ListPages/filter/filter_checkbox_active.svg"
                  : "/ListPages/filter/filter_checkbox_inactive.svg"
              }
              width="16"
              height="16"
              alt="checkbox"
            />
            <div className={styles.choice_text}>Физическая помощь</div>
          </div>
          <div
            className={styles.choice}
            onClick={() => handleTypeClick("intellectual")}
          >
            <Image
              src={
                selectedTypes.intellectual
                  ? "/ListPages/filter/filter_checkbox_active.svg"
                  : "/ListPages/filter/filter_checkbox_inactive.svg"
              }
              width="16"
              height="16"
              alt="checkbox"
            />
            <div className={styles.choice_text}>Интеллектуальная помощь</div>
          </div>
          <div
            className={styles.choice}
            onClick={() => handleTypeClick("other")}
          >
            <Image
              src={
                selectedTypes.other
                  ? "/ListPages/filter/filter_checkbox_active.svg"
                  : "/ListPages/filter/filter_checkbox_inactive.svg"
              }
              width="16"
              height="16"
              alt="checkbox"
            />
            <div className={styles.choice_text}>Другое</div>
          </div>
        </div>
      </div>

      <button className={styles.submit_btn}>Применить</button>
    </div>
  );
};

export default FilterBlock;