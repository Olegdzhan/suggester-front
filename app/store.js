import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers';

const preloadedState = {
	suggests: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	preloadedState, 
	composeEnhancers(applyMiddleware(thunk))
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;