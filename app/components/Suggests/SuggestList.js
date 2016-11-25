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
	} 
	
};