import styles from "@styles/Admin/Base/Container.module.scss"
import type React from "react"

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default Container
