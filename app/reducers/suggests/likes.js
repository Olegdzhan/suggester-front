import types from '../../actions/types';
import Finder from '../../utils/Finder';

export const likes = (state = [], action) => {

	const finder = new Finder();
	
	switch(action.type) {

		case types.LIKES.CHANGE:
			let currentIndex = finder.findIndexOfObjInArr(state, 'id', action.user.id);
			if (currentIndex) {
				return [
					...state.slice(0, currentIndex), 
					...state.slice(currentIndex + 1)
				];
			} else {
				return [
					...state, 
					action.user
				];
			}
		
		default:
			return state;

	}

};