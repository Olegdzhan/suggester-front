import React, { Component } from 'react';

import Finder from '../../utils/Finder';

export default class FeedbackFooter extends Component {
	
	constructor(props) {
		super(props);

		this.finder = new Finder;

		this.submitForm = this.submitForm.bind(this);		
	}

	submitForm(e) {
		e.preventDefault();
		console.log(this.refs.newComment.value);
	}

	render() {

		const {
			likes, 
			suggestId,
			incrementLikes,
			decrementLikes 
		} = this.props;

		const currentIndex = this.finder.findIndexOfObjInArr(likes, 'id', 2383);
		
		return (
			<form className="comment-form" onSubmit={this.submitForm}>
				<button 
					type="button" 
					className="like-btn"
					onClick={() => {
						currentIndex ? decrementLikes(suggestId, 2383) : incrementLikes(suggestId, 2383);
					}}
				>
					<img src="/public/img/app/heart.svg" alt="likes" />
				</button>
				<input 
					type="text" 
					className="comment-input" 
					ref="newComment" />
			</form>
		);
	}
}