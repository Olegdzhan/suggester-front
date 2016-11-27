import { types } from '../actions/suggests';
import Finder from '../utils/Finder';


export const suggests = (state = [], action) => {

	const finder = new Finder(state);
	
	switch(action.type) {
		
		case types.FETCH:
			return [
				...action.suggests
			];
		
		case types.INCREMENT_LIKES:
			const newState = [...state];
			const index = finder.findObjById(action.suggestId);

			const likes = state[index].likes;
			let likesIndex = false;
			for (let i = 0; i < likes.length; i++) {
				if (likes[i].id === action.user.id) {
					likesIndex = i;
					break;
				}
			}

			if (typeof likesIndex === 'number') {
				newState[index].likes.splice(likesIndex, 1);
			} else {
				newState[index].likes.push(action.user);				
			}
			return newState;

			

		case types.DECREMENT_LIKES:
			
			return [

			];
		
		default:
			return state;
	}	
};