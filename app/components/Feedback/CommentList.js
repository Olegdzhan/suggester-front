import React from 'react';

const CommentList = props => {
	
	const list = props.comments.map(comment => (
		<li key={comment.id}>
			<mark>{comment.name}: </mark>
			{comment.comment}
		</li>
	));

	return (
		<ul className="suggests__comment-list">
			{list}
		</ul>
	);	
	
};

export default CommentList;