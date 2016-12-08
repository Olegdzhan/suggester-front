import types from '../types';
import axios from 'axios';

export const fetchAllSuggests = () => dispatch => {
	return axios.get('../../app/dummydata/suggests.json').then(
		response => {
			dispatch(recieveAllSuggests(response.data));
		},
		error => {
			console.error(error);
		}
	);
};

export const recieveAllSuggests = suggests => ({
	type: types.SUGGESTS.RECIEVE,
	suggests
});
