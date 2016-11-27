import React from 'react';

const Navbar = props => {
	const { children } = props;
	return (
		<div className="lib-navbar-container">
			<nav className="lib-navbar">{children}</nav>
		</div>
	);
};

export default Navbar;