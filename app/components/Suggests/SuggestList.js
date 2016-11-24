import React, { Component } from 'react';

import SuggestListItem from './SuggestListItem';

export default class SuggestList extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchAllSuggests();
	}
	
	render() {
		const elements = this.props.suggests.map((suggest, i) => {
			return (
				<li key={i}>
					<SuggestListItem 
						author={suggest.author}
						category={suggest.category}
						dateTime={suggest.dateTime}
						suggest={suggest.suggest}
						likes={suggest.likes}
						comments={suggest.comments}
					/>
				</li>
			);
		});

		return (
			<ul>
				{elements}
			</ul>
		);
	} 
	
};