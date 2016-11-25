import { connect } from 'react-redux';

import SingleSuggest from '../components/Suggests/Single/SingleSuggest';

const mapStateToProps = (state, ownProps) => {
	let currentSuggest = {};
	for (let i = 0; i < state.suggests.length; i++) {
		if (state.suggests[i].id === ownProps.params.id) {			
			currentSuggest = state.suggests[i];
			break;
		}
	}
	return {
		suggest: currentSuggest
	}
};

export default connect(mapStateToProps, null)(SingleSuggest);