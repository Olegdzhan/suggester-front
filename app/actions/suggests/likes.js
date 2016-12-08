import types from '../types';

export const changeLikes = (suggestId, user) => ({
	type: types.LIKES.CHANGE,
	suggestId,
	user
});