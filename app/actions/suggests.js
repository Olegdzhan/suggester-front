import suggests from '../dummydata/suggests';

export const types = {
	FETCH: 'FETCH_ALL_SUGGESTS'
};

export const fetchAllSuggests = () => {
	const fetchedSuggests = suggests;
	return {
		type: types.FETCH,
		suggests: fetchedSuggests
	};
};
