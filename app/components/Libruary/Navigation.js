import React from 'react';
import { Link } from 'react-router';

const Navigation = props => {
	const { lis } = props;

	return (
		<ul className="lib-navigation">
			{
				lis.map((li, i) => {
					return (
						<li key={i}>
							<Link to={li.href}>
								<img className="lib-navigation__img" src={li.src} alt={li.alt} />
							</Link>
						</li>
					);
				})
			}
		</ul>
	);
};

export default Navigation;