import App from './App';
import SuggestReader from './components/Suggests/SuggestReader';
import SingleSuggest from './containers/SingleSuggest';

export const routes = {
	path: '/',
	component: App,
	indexRoute: {
		component: SuggestReader
	},
	childRoutes: [
		{
			path: 'suggest/:id',
			component: SingleSuggest
		}
	]
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