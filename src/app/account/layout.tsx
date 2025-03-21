import Footer from "@/components/MainPage/Footer";
import Header from "@/components/MainPage/Header";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div style={{backgroundColor: "#f6f6f6"}}>
			<Header></Header>
			{children}
			<Footer></Footer>
		</div>
	);
}
