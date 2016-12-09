import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class CommentForm extends Component {
	render() {
		const { addComment } = this.props;
		return (
			<form onSubmit={addComment}>					
				<Field
					name="comment"
					component="input" 
					type="text" 
					className="comment-input" 
					ref="newComment" />
			</form>
		);
	}
}

CommentForm = reduxForm({
	form: 'commentForm'
})(CommentForm);

export default CommentForm;