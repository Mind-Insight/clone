"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	return (
		<div style={{ backgroundColor: "#f6f6f6" }}>
			<AnimatePresence mode="sync">
				<motion.div
					key={pathname}
					initial={{ opacity: 0, scale: 0.9, y: 30 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: -20 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					style={{ width: "100%", height: "100%" }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
