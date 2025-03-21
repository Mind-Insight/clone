import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@styles/Admin/Base/ChangeBlock.module.scss";

interface ChangeBlockProps {
	icons?: boolean;
}

const ChangeBlock: React.FC<ChangeBlockProps> = ({ icons = true }) => {
	return (
		<div className={styles.container}>
			{icons && (
				<>
					<Link href="#" className={styles.block}>
						<Image
							src="/Admin/block.svg"
							width="16"
							height="16"
							alt="block"
						></Image>
					</Link>

					<Link href="#" className={styles.delete}>
						<Image
							src="/Admin/delete.svg"
							width="16"
							height="16"
							alt="delete"
						></Image>
					</Link>
				</>
			)}
		</div>
	);
};

export default ChangeBlock;
