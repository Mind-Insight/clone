import BaseTitle from "./Base/BaseTitle";
import BaseMain from "./Base/BaseMain";
import Container from "./Base/Container";
import BaseButtons from "./Base/BaseButtons";

const PersonalInfo = () => {
	return (
		<Container>
			<BaseTitle
				image="/Volunteer_quiz/Base/first.svg"
				title="Личная информация"
			></BaseTitle>

			<BaseMain></BaseMain>

			<BaseButtons
				back_link="/"
				forward_link="/volunteer-quiz/help/"
			></BaseButtons>
		</Container>
	);
};

export default PersonalInfo;
