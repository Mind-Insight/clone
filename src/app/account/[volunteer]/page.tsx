import Footer from "@/components/MainPage/Footer";
import Header from "@/components/MainPage/Header";
import VolunteerAccountInfo from "@/components/PersonalAccount/Volunteer/VolunteerAccountInfo";
import React from "react";

interface VolunteerPageProps {
    params: {
        volunteer: string;
    }
}

const VolunteerPage: React.FC<VolunteerPageProps> = ({ params }) => {
	return <VolunteerAccountInfo></VolunteerAccountInfo>;
};

export default VolunteerPage;
