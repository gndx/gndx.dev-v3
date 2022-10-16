const coursesData = [
	{
		title: "Curso de Bots con Facebook Messenger",
		url: "https://platzi.com/conoceme/gndx/cursos/bots-fb/",
		badge:
			"https://static.platzi.com/media/achievements/1355-571dc94e-6f15-4e83-b558-71edeb7b9153.png",
		stars: 5,
		reviews: 119,
	},
	{
		title: "Curso de JavaScript Testing con Jest 2019",
		url: "https://platzi.com/conoceme/gndx/cursos/js-jest-2019/",
		badge:
			"https://static.platzi.com/media/achievements/1357-a959540b-9de5-4dd4-af7b-73adaf44433f.png",
		stars: 5,
		reviews: 492,
	},
	{
		title: "Curso Práctico de React JS 2019",
		url: "https://platzi.com/conoceme/gndx/cursos/react-ejs-2019/",
		badge:
			"https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png",
		stars: 5,
		reviews: 2903,
	},
	{
		title: "Curso de React Router y Redux 2019",
		url: "https://platzi.com/conoceme/gndx/cursos/react-router-redux/",
		badge:
			"https://static.platzi.com/media/achievements/badge-react-redux-2ca3c0a5-fc53-437f-bfba-69e9ddd5a803.png",
		stars: 5,
		reviews: 1546,
	},
	{
		title: "Curso de Gestión de Dependencias y Paquetes con NPM",
		url: "https://platzi.com/conoceme/gndx/cursos/npm/",
		badge:
			"https://static.platzi.com/media/achievements/badge-gestion-dependencias-paquetes-npm-f02e4608-c688-4d99-aa6d-293ea6c0be8d.png",
		stars: 5,
		reviews: 2183,
	},
	{
		title: "Curso de Unit Testing con Jest en React",
		url: "https://platzi.com/conoceme/gndx/cursos/jest/",
		badge:
			"https://static.platzi.com/media/achievements/badge-unit-testing-jest-react-bb2bcb68-aeb7-4ff3-886e-f04816dfe0a0.png",
		stars: 5,
		reviews: 532,
	},
	{
		title: "Curso de Asincronismo con JavaScript",
		url: "https://platzi.com/conoceme/gndx/cursos/asincronismo-js/",
		badge:
			"https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png",
		stars: 5,
		reviews: 5299,
	},
	{
		title: "Curso de ECMAScript 6+",
		url: "https://platzi.com/conoceme/gndx/cursos/ecmascript-6/",
		badge:
			"https://static.platzi.com/media/achievements/badge-ecmascript-6-d48e7bb7-a7a4-416d-a3b4-e11f0b13a229.png",
		stars: 5,
		reviews: 6379,
	},
	{
		title: "Curso de Closures y Scope en JavaScript",
		url: "https://platzi.com/conoceme/gndx/cursos/scope/",
		badge:
			"https://static.platzi.com/media/achievements/badge-_closures-scope-javascript-3848a8e7-cf6f-47c5-a824-df5fc0c14d41.png",
		stars: 5,
		reviews: 2985,
	},
	{
		title: "Curso de Single Page Application con JavaScript Vanilla",
		url: "https://platzi.com/conoceme/gndx/cursos/spa-javascript/",
		badge:
			"https://static.platzi.com/media/achievements/badge-spa-javascript-vanilla-71b296fc-7041-4084-9f94-0ed5e1b53d18.png",
		stars: 5,
		reviews: 1036,
	},
	{
		title: "Curso de Travis CI",
		url: "https://platzi.com/conoceme/gndx/cursos/travis/",
		badge:
			"https://static.platzi.com/media/achievements/badge-travis-ci2--7ddee2a2-9343-492f-8461-32f6c7f2edeb.png",
		stars: 5,
		reviews: 205,
	},
	{
		title: "Curso de Svelte",
		url: "https://platzi.com/conoceme/gndx/cursos/svelte/",
		badge:
			"https://static.platzi.com/media/achievements/badge-svelte-8cbb6b4b-8d22-4c31-8d74-64377c516ab8.png",
		stars: 5,
		reviews: 306,
	},
	{
		title: "Curso de Integración de Backend y Frontend 2020",
		url: "https://platzi.com/conoceme/gndx/cursos/bff/",
		badge:
			"https://static.platzi.com/media/achievements/badge-integracion-backend-frontend-04987dfb-dc9f-4578-8ecb-e7489956c3e5.png",
		stars: 5,
		reviews: 257,
	},
	{
		title: "Curso de Sapper",
		url: "https://platzi.com/conoceme/gndx/cursos/sapper/",
		badge:
			"https://static.platzi.com/media/achievements/badge-sapper-4f1700c9-e581-42e8-800d-92cc46700666.png",
		stars: 5,
		reviews: 95,
	},
	{
		title: "Curso de Desarrollo Web con Svelte y Sapper",
		url: "https://platzi.com/conoceme/gndx/cursos/svelte-sapper-practico/",
		badge:
			"https://static.platzi.com/media/achievements/sveltebadge-7c1b29ec-f5ad-4908-af0c-3e634b0ab070.png",
		stars: 5,
		reviews: 53,
	},
	{
		title: "Curso Profesional de React Hooks",
		url: "https://platzi.com/conoceme/gndx/cursos/react-hooks/",
		badge:
			"https://static.platzi.com/media/achievements/badge-profesional-react-hooks-6b35d829-af8e-47e6-aef6-e4504db32bc4.png",
		stars: 5,
		reviews: 427,
	},
	{
		title: "Curso de Webpack",
		url: "https://platzi.com/conoceme/gndx/cursos/webpack/",
		badge:
			"https://static.platzi.com/media/achievements/badge-webpack-3e3867f2-5bcf-4a7e-9af2-cf735850a791.png",
		stars: 5,
		reviews: 801,
	},
	{
		title: "Curso Práctico de Webpack",
		url: "https://platzi.com/conoceme/gndx/cursos/webpack-practico/",
		badge:
			"https://static.platzi.com/media/achievements/badge-practico-webpack-c2fc6357-3fa1-45da-bfd8-ef276b3197c4.png",
		stars: 5,
		reviews: 29,
	},
	{
		title: "Curso de Introducción a Jamstack",
		url: "https://platzi.com/conoceme/gndx/cursos/jamstack/",
		badge:
			"https://static.platzi.com/media/achievements/introduccion-a-jamstack_badge-6e3bcd21-8276-48f5-b314-835aebd65856.png",
		stars: 5,
		reviews: 20,
	},
	{
		title: "Platzi CONF 2021",
		url: "https://platzi.com/conoceme/gndx/cursos/platziconf2021/",
		badge:
			"https://static.platzi.com/media/achievements/artboard-95-2-17a5ae61-f866-4123-91ba-0f986a8421e5.png",
		stars: 5,
		reviews: 134,
	},
	{
		title: "Curso Práctico de React.js",
		url: "https://platzi.com/conoceme/gndx/cursos/react-practico/",
		badge:
			"https://static.platzi.com/media/achievements/piezas-reactjs-badge-1-52e950ac-c75c-40f5-94e0-8b6cab392ed2.png",
		stars: 5,
		reviews: 9,
	},
];

export default coursesData;
