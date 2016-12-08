import React from 'react';

import SuggestListItem from './SuggestListItem';

const SuggestList = props => {	
	
	const elements = props.suggests.map(suggest => {
		return (
			<li key={suggest.id}>
				<SuggestListItem
					{...suggest}
				/>
			</li>
		);
	});
	

	return (
		<ul>
			{elements}
		</ul>
	);
	
};

export default SuggestList;