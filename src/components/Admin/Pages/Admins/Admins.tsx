import React from "react";
import Container from "../../Base/Container";
import Navigation from "../../Base/Navigation";
import styles from "@styles/Admin/Pages/Admins/Admins.module.scss";
import InfoBlock from "../../Base/InfoBlock";

const Admins = () => {
	return (
		<InfoBlock
			title_up_text="Администраторы"
			title="Администраторы"
			endpoint="admins"
		></InfoBlock>
	);
};

export default Admins;
