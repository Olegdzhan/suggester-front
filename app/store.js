import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const defaultState = {
	suggests: [],
	muSuggests: [],
	profile: {}
};

const store = createStore(()=>{}, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;