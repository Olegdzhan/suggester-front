import React, { Component } from 'react';
import { Link } from 'react-router';

const SuggestListItem = props => {
	const {
		id,
		author,
		dateTime,
		suggest,
		category,
		likes,
		incrementLikes
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
			</div>
			<div className="suggest-list-item__footer">
				<form className="comment-form">
					<button 
						type="button" 
						className="like-btn"
						onClick={() => {
							incrementLikes(id, {id: 4634, name: 'liker2'});
						}}>
						<img src="/public/img/app/heart.svg" alt="likes" />
					</button>
				</form>
			</div>
		</div>
	);
}

export default SuggestListItem;