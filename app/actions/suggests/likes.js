import types from '../types';

export const incrementLikes = (suggestId, user) => ({
	type: types.LIKES.INCREMENT,
	suggestId,
	user
});

export const decrementLikes = (suggestId, user) => ({
	type: types.LIKES.DECREMENT,
	suggestId,
	user
});