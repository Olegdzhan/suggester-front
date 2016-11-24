import React, { Component } from 'react';

import { Navigation } from './components/Libruary';
import { navLis } from './routes';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<Navigation lis={navLis} />
						<h1>Suggester</h1>
						{this.props.children}
					</div>
				</div>				
			</div>
		);
	}
} 