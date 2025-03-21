import CommonPage from "./Common";

const volunteers = [
	{
		id: 1,
		imageSrc: "/ListPages/volunteers/first.svg",
		type: "Волонтёр",
		title: "Олег Александров",
		description:
			"Я здесь, чтобы помочь вам справиться с любыми трудностями. Свяжитесь со мной, и мы найдём решение вместе",
		location: "г Калиниград",
	},
    {
		id: 2,
		imageSrc: "/ListPages/volunteers/second.svg",
		type: "Волонтёр",
		title: "Евгений Пирсенков",
		description:
			"Если вам нужна поддержка или помощь в сложной ситуации, обращайтесь. Сделаю все возможное, чтобы помочь вам быстро и качественно",
		location: "г Калиниград",
	},
    {
		id: 3,
		imageSrc: "/ListPages/volunteers/third.svg",
		type: "Волонтёр",
		title: "Игорь Воркутов",
		description:
			"Помогу всем, кому нужна поддержка, независимо от ситуации. Пишите — оперативность и искреннее желание помочь обеспечены.",
		location: "г Калиниград",
	},
    {
		id: 4,
		imageSrc: "/ListPages/volunteers/fourth.svg",
		type: "Волонтёр",
		title: "Максим Сидоров",
		description:
			"Я здесь, чтобы помочь вам справиться с любыми трудностями. Свяжитесь со мной, и мы найдём решение вместе",
		location: "г Калиниград",
	},
    {
		id: 5,
		imageSrc: "/ListPages/volunteers/fifth.svg",
		type: "Волонтёр",
		title: "Артем Федоров",
		description:
			"Я здесь, чтобы помочь вам справиться с любыми трудностями. Свяжитесь со мной, и мы найдём решение вместе",
		location: "г Калиниград",
	},
    {
		id: 6,
		imageSrc: "/ListPages/volunteers/sixth.svg",
		type: "Волонтёр",
		title: "Павель Вольтов",
		description:
			"Я здесь, чтобы помочь вам справиться с любыми трудностями. Свяжитесь со мной, и мы найдём решение вместе",
		location: "г Калиниград",
	},
];

export default function Volunteers() {
	return (
		<CommonPage
			title="Волонтёры"
			showMap={false}
            dataType="volunteers"
			data={volunteers}
		/>
	);
}
