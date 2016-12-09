import React, { Component } from 'react';
import CommentForm from './CommentForm';

export default class FeedbackFooter extends Component {
	
	constructor(props) {
		super(props);

		this.onChangeLikes = this.onChangeLikes.bind(this);
	}

	onChangeLikes() {
		const { 
			suggestId,
			changeLikes 
		} = this.props;
		changeLikes(suggestId, {id: 2383, name: 'liker44'})
	}

	render() {		
		return (
			<div className="comment-form">
				<button 
					type="button" 
					className="like-btn"
					onClick={this.onChangeLikes}
				>
					<img src="/public/img/app/heart.svg" alt="likes" />
				</button>
				<CommentForm addComment={this.props.addComment} />
			</div>
		);
	}
}

