import React, { Component } from 'react';
import { Link } from 'react-router';

import CommentList from '../Feedback/CommentList';
import FeedbackFooter from '../../containers/FeedbackFooter';

const SuggestListItem = props => {
	
	const {
		id,
		author,
		dateTime,
		suggest,
		category,
		comments,
		likes
	} = props;

	return (		
		<div className="suggest-list-item">
			<div className="suggest-list-item__header">
				<span className="author">{author}</span>
				<span className="date-time">{dateTime}</span>
			</div>
			<div className="suggest-list-item__message">
				<h3 className="suggest">{suggest}</h3>
				<p className="category">Категория: <span>{category}</span></p>
			</div>
			<div className="suggest-list-item__feedback">
				<span className="likes-amount">{likes.length} отметок "Нравится"</span>
				<CommentList comments={comments} />
			</div>
			<div className="suggest-list-item__footer">
				<FeedbackFooter likes={likes} suggestId={id} />
			</div>
		</div>
	);
	
}

export default SuggestListItem;