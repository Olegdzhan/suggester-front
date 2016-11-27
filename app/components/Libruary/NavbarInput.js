import React, { Component } from 'react';

export default class NavbarInput extends Component {

	constructor(props) {
		super(props);
		this.onFindSubmit = this.onFindSubmit.bind(this);
	}

	onFindSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<form className="lib-find-form" role="form" onSubmit={this.onFindSubmit}>
				<input type="text" className="lib-find-form__input" placeholder="Поиск советчиков" />
				<button type="submit" className="lib-find-form__button">
					<img src="/public/img/app/loupe.svg" alt="go!"/>
				</button>
			</form>
		);
	}
}