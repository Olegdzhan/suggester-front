import types from '../types';

export const addComment = comment => ({
	type: types.COMMENTS.ADD,
	comment
});

export const removeComment = id => ({
	type: types.COMMENTS.REMOVE,
	id
});