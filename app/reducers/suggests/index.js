import { combineReducers } from 'redux';

import types from '../../actions/types';
import { likes } from './likes';
import { comments } from './comments';

import Decomposer from '../../utils/Decomposer';

export const suggests = (state = [], action) => {

	const dec = new Decomposer(state, action, 'id');
	
	switch(action.type) {
		case types.LIKES.CHANGE:
			return dec.getDecomposedReducer(action.suggestId, 'likes', likes);
		
		case types.SUGGESTS.RECIEVE:
			return [
				...action.suggests
			];

		case types.COMMENTS.ADD:
			console.log(action.comment)
			return state;			
		
		default:
			return state;
	}

};