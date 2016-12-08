import types from '../../actions/types';

import Finder from '../../utils/Finder';

const finder = new Finder();

export const likes = (state = [], action) => {
	console.log(state);
	
	switch(action.type) {

		case types.LIKES.INCREMENT:
			return [...state, { id: action.user.id, name: action.user.name }];
		
		case types.LIKES.DECREMENT:
			let currentIndex = finder.findIndexOfObjInArr(state, 'id', action.userId);			
			return [...state.slice(0, currentIndex), ...state.slice(currentIndex+1)];
		
		default:
			return state;

	}

};