import React from 'react';

import SuggestBlock from './SuggestBlock';
import LikesBlock from './LikesBlock';
import CommentList from './CommentList';

const SingleSuggest = props => {
	const { suggest } = props;

	return (
		<div>
			<SuggestBlock 
				author={suggest.author}
				category={suggest.category}
				suggest={suggest.suggest}
				dateTime={suggest.dateTime} />
			<LikesBlock 
				likes={suggest.likes}/>
			<CommentList
				comments={suggest.comments} />
		</div>
	);
};

export default SingleSuggest;