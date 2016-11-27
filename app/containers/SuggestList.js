import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllSuggests, incrementLikes } from '../actions/suggests';

import SuggestList from '../components/Suggests/SuggestList';

const mapStateToProps = state => ({
	suggests: state.suggests
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		fetchAllSuggests, 
		incrementLikes
	}, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(SuggestList);