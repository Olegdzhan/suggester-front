import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { suggests } from './suggests';
import { comments } from './comments';

const rootReducer = combineReducers({
	suggests,
	comments,
	routing: routerReducer
});

export default rootReducer;