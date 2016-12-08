import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAllSuggests } from '../actions/suggests/suggests';

import SuggestReader from '../components/Suggests/SuggestReader';

const mapStateToProps = state => ({
	suggests: state.suggests
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchAllSuggests
}, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(SuggestReader);