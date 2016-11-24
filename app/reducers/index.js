import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { suggests } from './suggests';

const rootReducer = combineReducers({
	suggests,
	routing: routerReducer
});

export default rootReducer;