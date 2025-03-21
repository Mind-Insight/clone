import React from 'react'
import styles from "@styles/Admin/Pages/Admins/AdminBlock.module.scss"
import Link from 'next/link';

interface AdminBlockProps {
    info: string;
    link?: string;
}

const AdminBlock: React.FC<AdminBlockProps> = ({ info, link }) => {
  return (
    <div className={styles.container}>
        {link ? <Link href={link} style={{textDecoration: "underline"}}>{info}</Link> : <p>{info}</p>}
    </div>
  )
}

export default AdminBlock
