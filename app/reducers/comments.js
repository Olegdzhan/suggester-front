import { types } from '../actions/comments';

const comment = (state = [], action) => {
	switch(action.type) {
		case types.ADD:
			return {
				...state,
				userId: action.userId,
				comment: action.comment
			};
		case types.REMOVE:
			return state;
		default:
			return state;
	}
};

export const comments = (state = {}, action) => {
	switch(action.type) {
		case types.FETCH:
		return state;
		case types.ADD:
		return state;
		case types.REMOVE:
		return state;
		default:
		return state;
	}
};