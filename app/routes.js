import App from './App';
import SuggestReader from './components/Suggests/SuggestReader';

export const routes = {
	path: '/',
	component: App,
	indexRoute: {
		component: SuggestReader
	}
	/*childRoutes: [
		{
			path: 'training',
			component: Training
		}
	]*/
};

export const navLis = [
	{
		href: '/',
		caption: 'Рекомендации'
	},
	{
		href: '/mySuggests',
		caption: 'Мои рекомендации'
	},
	{
		href: '/profile',
		caption: 'Мой профиль'
	}
];