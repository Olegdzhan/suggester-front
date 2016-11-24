import React from 'react';

const SuggestListItem = props => {
	return (
		<div className="panel panel-info">
			<div className="panel-heading">
				<span className="label label-primary">{props.category}</span>
				<h3 className="panel-title">{props.suggest}</h3>
			</div>
			<div className="panel-body">
				<p>{props.author} - {props.dateTime}</p>
				<span className="label label-primary">likes: {props.likes.length}</span>
				<span className="label label-primary">comments: {props.comments.length}</span>
			</div>
		</div>
	);
}

export default SuggestListItem;