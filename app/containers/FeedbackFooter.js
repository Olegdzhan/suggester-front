import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as comments from '../actions/suggests/comments';
import * as likes from '../actions/suggests/likes';

import FeedbackFooter from '../components/Feedback/FeedbackFooter';

const mapDispatchToProps = dispatch => bindActionCreators({
	addComment: comments.addComment,
	changeLikes: likes.changeLikes
}, dispatch);

export default connect(null, mapDispatchToProps)(FeedbackFooter);