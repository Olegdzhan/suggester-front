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
						<h1>Suggester</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-4">
						<Navigation lis={navLis} />					
					</div>
					<div className="col-xs-12 col-sm-8">
						{this.props.children}
					</div>
				</div>				
			</div>
		);
	}
} 