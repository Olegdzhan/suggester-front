import suggests from '../dummydata/suggests';

export const types = {
	FETCH: 'FETCH_ALL_SUGGESTS',
	INCREMENT_LIKES: 'INCREMENT_LIKES'
};

export const fetchAllSuggests = () => {
	const fetchedSuggests = suggests;
	return {
		type: types.FETCH,
		suggests: fetchedSuggests
	};
};

export const incrementLikes = (suggestId, user) => ({
	type: types.INCREMENT_LIKES,
	suggestId,
	user
});
