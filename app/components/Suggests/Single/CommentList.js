import React, { Component } from 'react';

export default class CommentList extends Component {
	constructor(props) {
		super(props);
		this.onCommentSubmit = this.onCommentSubmit.bind(this);
	}

	onCommentSubmit(e) {
		e.preventDefault();
	}

	render() {
		const { comments } = this.props;
		
		const commentList = comments.map((comment, i) => (
			<div key={i}>
				<p>{comment.name} - {comment.dateTime}</p>
				<p>{comment.comment}</p>
			</div>
		));

		return (
			<div>
				<h4>Комментарии</h4>
				{commentList}
				<form role="form" onSubmit={this.onCommentSubmit}>
					<div className="input-group">
						<input 
							type="text"
							className="form-control"
							placeholder="оставить комментарий" />
						<span className="input-group-btn">
							<button 
								type="submit" 
								className="btn btn-success"
							>ОК</button>
						</span>
					</div>
				</form>
			</div>
		);
	}
}