import Image from "next/image";
import styles from "@styles/Admin/Base/NavigationBlock.module.scss";
import { motion } from "framer-motion";

interface NavigationBlockProps {
    icon: string;
    text: string;
    isActive: boolean;
    onClick: () => void;
}

const NavigationBlock: React.FC<NavigationBlockProps> = ({ icon, text, isActive, onClick }) => {
    return (
        <div className={`${styles.container} ${isActive ? styles.active : ""}`} onClick={onClick}>
            {isActive && (
                <motion.div
                    className={styles.indicator}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 3, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            )}
            <Image className={styles.icon} src={icon} width="14" height="14" alt="nav icon" />
            <div className={styles.text}>{text}</div>
        </div>
    );
};

export default NavigationBlock;
