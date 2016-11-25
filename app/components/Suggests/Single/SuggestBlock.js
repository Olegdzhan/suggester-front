import React from 'react';

const SuggestBlock = props => {
	const {
		author,
		category,
		suggest,
		dateTime
	} = props;
	return (
		<div>
			<button className="btn btn-default">Назад</button>
			<button className="btn btn-info">Все рекомендации автора</button>
			<figure>
				<img src="" alt="авка" />
				<figcaption>{author}</figcaption>
			</figure>
			<h4>{category}</h4>
			<h3>{suggest}</h3>
			<p>{dateTime}</p>
			<div>Здесь поле для подкачки контента сторонних ресурсов</div>
		</div>
	);
}

export default SuggestBlock;