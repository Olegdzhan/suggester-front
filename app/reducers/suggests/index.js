import types from '../../actions/types';
import { likes } from './likes';

import Finder from '../../utils/Finder';

const finder = new Finder();

export const suggests = (state = [], action) => {

	if (action.type === types.LIKES.INCREMENT || action.type === types.LIKES.DECREMENT) {
		let currentIndex = finder.findIndexOfObjInArr(state, 'id', action.suggestId);
		let newState = [...state];
		newState[currentIndex].likes = likes(state[currentIndex].likes, action);
		return newState;
	}
	
	switch(action.type) {		
		
		case types.SUGGESTS.RECIEVE:
			return [
				...action.suggests
			];
			
		
		default:
			return state;
	}

};