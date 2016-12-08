import types from '../types';

export const addComment = (suggestId, userId, comment) => ({
	type: types.COMMENTS.ADD,
	suggestId,
	userId,
	comment
});

export const removeComment = id => ({
	type: types.COMMENTS.REMOVE,
	id
});