"use client";
import React, { useEffect, useState } from "react";
import styles from "@styles/PersonalAccount/Base/ProfileInfoBlocks.module.scss";
import TagForInput from "./TagForInput";
import BaseMainInput from "@/components/Quiz/Volunteer_quiz/Base/BaseMainInput";
import PhotoBlocks from "./Profile/PhotoBlocks";
import { useUser } from "@/hooks/useUser";

interface ProfileInfoBlocksProps {
  showLanguages?: boolean;
  isPhotos?: boolean;
  onChange?: (data: any) => void;
}

const ProfileInfoBlocks: React.FC<ProfileInfoBlocksProps> = ({
  showLanguages = true,
  isPhotos = true,
  onChange,
}) => {
  const { user, loading } = useUser();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
  });
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]); // Выбранные языки
  const [isLanguageListOpen, setIsLanguageListOpen] = useState(false); // Видимость списка языков

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phone: user.phone || "",
        email: user.email || "",
        gender: user.gender || "",
      });
    }
  }, [user]);

  const handleInputChange = (name: string, value: string) => {
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onChange?.(updatedData);
  };

  const handleLanguageSelect = (language: string) => {
    if (!selectedLanguages.includes(language)) {
      setSelectedLanguages((prev) => [...prev, language]);
    }
    setIsLanguageListOpen(false); // Закрываем список после выбора
  };

  const handleRemoveLanguage = (language: string) => {
    setSelectedLanguages((prev) => prev.filter((lang) => lang !== language));
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className={styles.info_blocks_container}>
      <div className={styles.required_inputs_container}>
        <BaseMainInput
          title_text="Имя"
          input_text="Введите имя"
          input_type="text"
          value={formData.firstName}
          onChange={(value) => handleInputChange("firstName", value)}
        />
        <BaseMainInput
          title_text="Фамилия"
          input_text="Введите фамилию"
          input_type="text"
          value={formData.lastName}
          onChange={(value) => handleInputChange("lastName", value)}
        />
        <BaseMainInput
          title_text="Дата рождения"
          input_text="ДД.ММ.ГГГГ"
          input_type="text"
        />
        <BaseMainInput
          title_text="Номер телефона"
          input_text="+7 (___) ___-__-__"
          input_type="text"
          value={formData.phone}
          onChange={(value) => handleInputChange("phone", value)}
        />
        <BaseMainInput
          title_text="Email"
          input_text="Введите email"
          input_type="text"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <BaseMainInput
          title_text="Пол"
          input_text="Введите ваш пол"
          input_type="text"
          value={formData.gender}
          onChange={(value) => handleInputChange("gender", value)}
        />
        <BaseMainInput
          title_text="Отчество"
          input_text="Введите отчество"
          input_type="text"
        />
        <BaseMainInput
          title_text="Способ связи"
          input_text="Введите способ связи"
          input_type="text"
        />
        <BaseMainInput
          title_text="Населенный пункт"
          input_text="Введите населенный пункт"
          input_type="text"
          icon="/Volunteer_quiz/open_arrow.svg"
        />
      </div>

      <div className={styles.inputs_with_tags}>
        {showLanguages && (
          <div className={styles.input_with_tag_block}>
            <BaseMainInput
              title_text="Знание языков"
              input_text="Выберите языки"
              input_type="text"
              icon="/Volunteer_quiz/open_arrow.svg"
              mark={false}
              onIconClick={() => setIsLanguageListOpen(!isLanguageListOpen)}
            />
            <div className={styles.tags_container}>
              {selectedLanguages.map((language) => (
                <TagForInput
                  key={language}
                  text={language}
                  onRemove={() => handleRemoveLanguage(language)}
                />
              ))}
            </div>
            {isLanguageListOpen && (
              <div className={styles.language_list}>
                {["Английский", "Русский", "Казахский", "Французский", "Немецкий"].map(
                  (language) => (
                    <div
                      key={language}
                      className={styles.language_item}
                      onClick={() => handleLanguageSelect(language)}
                    >
                      {language}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        )}
        <div className={styles.input_with_tag_block}>
          <BaseMainInput
            title_text="Кому я хочу помогать"
            input_text="Выберите категории"
            input_type="text"
            icon="/Volunteer_quiz/open_arrow.svg"
            mark={false}
          />
          <div className={styles.tags_container}>
            <TagForInput
              icon="/Tags/help_to_icons/icon_pet.svg"
              text="Нужна опека"
            />
            <TagForInput
              icon="/Tags/help_to_icons/icon_granddad.svg"
              text="Пенсионер"
            />
            <TagForInput
              icon="/Tags/help_to_icons/icon_disabled.svg"
              text="Человек с ОВЗ"
            />
          </div>
        </div>

        <div className={styles.input_with_tag_block}>
          <BaseMainInput
            title_text="Как я могу помочь"
            input_text="Выберите категории"
            input_type="text"
            icon="/Volunteer_quiz/open_arrow.svg"
            mark={false}
          />
          <div className={styles.tags_container}>
            <TagForInput
              icon="/Tags/help_kind_icons/icon_home.svg"
              text="Помощь по дому"
              background="rgba(254, 222, 255, 0.30)"
              border="1px solid rgba(174, 85, 177, 0.22)"
              color="#AE55B1"
            />
            <TagForInput
              icon="/Tags/help_kind_icons/icon_food.svg"
              text="Еда"
            />
            <TagForInput
              icon="/Tags/help_kind_icons/icon_pill.svg"
              text="Помощь в лечении"
            />
          </div>
        </div>
      </div>

      <div className={styles.about_block}>
        <div className={styles.about_title}>О себе</div>
        <div className={styles.about_input}>
          <textarea placeholder="Добавьте более детальное описание, как вы можете помочь. Укажите кому вы готовы помогать, как и в каком количестве" />
        </div>
      </div>

      {isPhotos && <PhotoBlocks />}

      <div className={styles.social_block}>
        <div className={styles.social_title}>Социальные сети</div>
        <div className={styles.social_inputs}>
          <BaseMainInput
            title_text="Вконтакте"
            input_text="Вконтакте"
            input_type="text"
            mark={false}
          />
          <BaseMainInput
            title_text="Телеграм"
            input_text="Телеграм"
            input_type="text"
            mark={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoBlocks;