import CommonPage from "./Common";

const organizations = [
	{
		id: 1,
		imageSrc: "/ListPages/main/first.svg",
		type: "Благотворительный фонд",
		title: "Рука Помощи",
		phone: "+7 (4012) 33-75-75, +7 (967) 353-51-69",
		website: "bereg-nadejdy.ru",
		email: "fond@bereg-nadejdy.ru",
		location: "г Калиниград, пр-т Мира, д 26",
	},
	{
		id: 2,
		imageSrc: "/ListPages/main/second.svg",
		type: "Благотворительный фонд",
		title: "Здоровое поколение",
		phone: "+7 (4012) 33-75-75, +7 (967) 353-51-69",
		website: "bereg-nadejdy.ru",
		email: "fond@bereg-nadejdy.ru",
		location: "г Калиниград, пр-т Мира, д 26",
	},
	{
		id: 3,
		imageSrc: "/ListPages/main/third.svg",
		type: "Благотворительный фонд",
		title: "Созидая жизнь",
		phone: "+7 (4012) 33-75-75, +7 (967) 353-51-69",
		website: "bereg-nadejdy.ru",
		email: "fond@bereg-nadejdy.ru",
		location: "г Калиниград, пр-т Мира, д 26",
	},
	{
		id: 4,
		imageSrc: "/ListPages/main/fourth.svg",
		type: "Благотворительный фонд",
		title: "Зеленая комната",
		phone: "+7 (4012) 33-75-75, +7 (967) 353-51-69",
		website: "bereg-nadejdy.ru",
		email: "fond@bereg-nadejdy.ru",
		location: "г Калиниград, пр-т Мира, д 26",
	},
	{
		id: 5,
		imageSrc: "/ListPages/main/fifth.svg",
		type: "Благотворительный фонд",
		title: "Звезда милосердия",
		phone: "+7 (4012) 33-75-75, +7 (967) 353-51-69",
		website: "bereg-nadejdy.ru",
		email: "fond@bereg-nadejdy.ru",
		location: "г Калиниград, пр-т Мира, д 26",
	},
];

export default function Organizations() {
	return (
		<CommonPage
			title="Организации"
			showMap={true}
            dataType="organizations"
			data={organizations}
		/>
	);
}
