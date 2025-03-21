import styles from "@styles/PersonalAccount/Base/AccountInfoContainer.module.scss";
import Image from "next/image";

interface TagForInputProps {
  text: string;
  icon?: string;
  color?: string;
  background?: string;
  border?: string;
  onRemove?: () => void;
}

const TagForInput: React.FC<TagForInputProps> = ({
  text,
  icon,
  color = "rgba(37, 37, 37, 0.70)",
  background = "#fff",
  border = "1px solid rgba(37, 37, 37, 0.15)",
  onRemove,
}) => {
  return (
    <div
      className={styles.tag_container}
      style={{ color, background, border }}
    >
      {icon && (
        <Image
          className={styles.tag_image}
          src={icon}
          width="14"
          height="14"
          alt="tag icon"
        />
      )}
      <div className={styles.tag_text}>{text}</div>
      <Image
        className={styles.tag_cross}
        src="/PersonalAccount/Volunteer/icons/tag_cross_icon.svg"
        width="14"
        height="14"
        alt="tag cross icon"
        onClick={onRemove}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default TagForInput;