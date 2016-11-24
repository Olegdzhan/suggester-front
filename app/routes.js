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