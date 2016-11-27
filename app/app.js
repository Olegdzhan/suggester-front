import React, { Component } from 'react';

import { 
	Navigation,
	Navbar,
	NavbarLogo,
	NavbarInput
} from './components/Libruary';
import { navLis } from './routes';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar>
					<NavbarLogo src="" href="/">SugGuest</NavbarLogo>
					<NavbarInput />
					<Navigation lis={navLis} />
				</Navbar>				
				<div className="app-container">
					{this.props.children}
				</div>
								
			</div>
		);
	}
} 