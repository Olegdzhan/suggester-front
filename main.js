import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Router } from 'react-router';
import { routes } from './app/routes';

import store, { history } from './app/store';

import css from './public/styles/styles.styl';

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>,
	document.getElementById('App')
);