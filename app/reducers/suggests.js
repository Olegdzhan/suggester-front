import { types } from '../actions/suggests';

export const suggests = (state = [], action) => {
	switch(action.type) {
		case types.FETCH:
		return [
			...action.suggests
		];
		default:
		return state;
	}	
};