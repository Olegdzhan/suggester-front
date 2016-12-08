import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { suggests } from './suggests/';

const rootReducer = combineReducers({
	suggests,
	routing: routerReducer,
	form: formReducer
});

export default rootReducer;