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
		href: '/notifications',
		src:  '/public/img/app/heart.svg',
		alt: 'Уведомления'
	},
	{
		href: '/profile',
		src: '/public/img/app/user.svg',
		alt: 'Профиль'
	},
	{
		href: '/settings',
		src: '/public/img/app/settings.svg',
		alt: 'Настройки'
	}

];