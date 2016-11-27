import React from 'react';
import { Link } from 'react-router';

const NavbarLogo = props => {
	const {
		href,
		src,
		children
	} = props;
	return (
		<Link to={href}>
			<figure className="figure-navbar-logo">
				<img src={src} alt="logo" className="figure-navbar-logo__img" />
				<figcaption className="figcaption-navbar-logo">
					{children}
				</figcaption>
			</figure>			
		</Link>
	);
}

export default NavbarLogo;