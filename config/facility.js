export const FACILITY = {
	name: 'Basen Delfin',
	logo: require('../assets/logo.png'),
	address: 'ul. Sportowa 12, Gdańsk',
	scheduleIframeUrl:
		'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFYVrVUELnEb6zy2J2jXBJvXDyLWZLNkR-PuhiBmEU64axQhPNZ16MdqYwRfdxBj4ve32B5ATxnc07/pubhtml?gid=352435655&amp;single=true&amp;widget=true&headers=false',
	priceList: [
		{ label: 'Bilet normalny', price: '12 zł' },
		{ label: 'Bilet ulgowy', price: '8 zł' },
		{ label: 'Karnet 10 wejść', price: '100 zł' },
	],
	contact: {
		phone: '123 456 789',
		email: 'kontakt@basendelfin.pl',
		openingHours: [
			{ days: 'Pon–Pt', hours: '7:00–21:00' },
			{ days: 'Sob–Nd', hours: '9:00–19:00' },
		],
	},
	alertInfo: 'Basen nieczynny w święta.',
}
