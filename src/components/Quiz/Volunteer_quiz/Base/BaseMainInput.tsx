"use client";
import React, { useState } from "react";
import styles from "@styles/QuizPages/Volunteer_quiz/Base.module.scss";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface BaseMainInputProps {
  title_text: string;
  input_text: string;
  input_type: string;
  class_name?: string;
  icon?: string;
  value?: string;
  onChange?: (value: string) => void;
  mark?: boolean;
  onIconClick?: () => void; // Новый пропс
}

const BaseMainInput: React.FC<BaseMainInputProps> = ({
  title_text,
  input_text,
  input_type,
  class_name,
  icon,
  value,
  onChange,
  mark = true,
  onIconClick,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isDateInput = input_type === "date";
  const isPhoneInput = input_type === "tel";
  const isPasswordInput = input_type === "password";

  const handleIconClick = () => {
    if (isDateInput) {
      setIsOpen(!isOpen);
    } else if (isPasswordInput) {
      setShowPassword((prev) => !prev);
    } else if (onIconClick) {
      onIconClick(); // Вызов переданного обработчика
    }
  };

  return (
    <div className={styles.input_container}>
      <div className={styles.input_text}>
        {title_text}
        {mark && <span className={styles.required_mark}>*</span>}
      </div>
      <div
        className={`${class_name ? styles.full_width_input : ""} ${
          styles.input_area
        } ${isPhoneInput ? styles.overflow_hidden : ""}`}
      >
        {isDateInput ? (
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date) => {
              setSelectedDate(date);
              onChange?.(date ? date.toISOString() : "");
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={input_text}
            className={styles.date_input}
            open={isOpen}
            onClickOutside={() => setIsOpen(false)}
          />
        ) : isPhoneInput ? (
          <PhoneInput
            value={value}
            onChange={onChange}
            placeholder={input_text}
            inputClass={styles.tel}
          />
        ) : (
          <input
            className={styles.input}
            type={isPasswordInput && !showPassword ? "password" : "text"}
            placeholder={input_text}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        )}

        {icon && !isPasswordInput && (
          <Image
            src={icon}
            alt="icon"
            width="24"
            height="24"
            onClick={handleIconClick}
            className={styles.clickable_icon}
          />
        )}
        {isPasswordInput && (
          <Image
            src={
              showPassword
                ? "/Auth/auth_open_eye.svg"
                : "/Auth/icon_closed_eye.svg"
            }
            alt="toggle password visibility"
            width="24"
            height="24"
            onClick={handleIconClick}
            className={styles.clickable_icon}
          />
        )}
      </div>
    </div>
  );
};

export default BaseMainInput;