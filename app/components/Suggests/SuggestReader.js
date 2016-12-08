import React, { Component } from 'react';

import SuggestList from './SuggestList';

export default class SuggestReader extends Component {
	
	componentWillMount() {
		this.props.fetchAllSuggests();
	}

	render() {
		return <SuggestList suggests={this.props.suggests} />
	}	
}