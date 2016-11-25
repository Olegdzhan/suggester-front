import comments from '../dummydata/comments';

export const types = {
	FETCH: 'FETCH_ALL_COMMENTS',
	ADD: 'ADD_COMMENT',
	REMOVE: 'REMOVE_COMMENT'
};

export const fetchAllComments = suggestId => {	
	const fetchedComments = comments[suggestId];
	return {
		type: types.fetch,
		comments: fetchedComments
	}
}

export const addComment = (suggestId, author, comment) => ({
	type: types.ADD,
	suggestId,
	author,
	comment
});

export const removeComment = id => ({
	type: types.REMOVE,
	id
});