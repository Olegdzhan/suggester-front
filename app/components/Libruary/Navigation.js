import React from 'react';
import { Link } from 'react-router';

const Navigation = props => {
	const { lis } = props;

	return (
		<ul className="nav">
			{
				lis.map((li, i) => {
					return (
						<li key={i}>
							<Link to={li.href}>{li.caption}</Link>
						</li>
					);
				})
			}
		</ul>
	);
};

export default Navigation;