import React from 'react';

const LikesBlock = props => {
	const { likes } = props;
	const likers = likes.map((like, i) => (<li key={i}>{like.name}</li>));
	return (
		<div>
			<h4>Понравилось</h4>
			<button className="btn btnp=primary">
				<span className="glyphicon glyphicon-heart"></span>
				{likes.length}
			</button>
			<ul>{likers}</ul>
		</div>
	);
};

export default LikesBlock;