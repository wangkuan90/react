import React from "react";

export default class AppIndex extends React.Component {
	
	constructor() {
		super();
		this.state = {};
	}
	
	render() {
		return (
			<div className="list">
				<section className="item">
					List
				</section>
				<section className="item">
					Buttons
				</section>
				<section className="item">
					Forms
				</section>
				<section className="item">
					Toggle
				</section>
				<section className="item">
					Tabs
				</section>
				<section className="item">
					Grid
				</section>
				<section className="item">
					Utility
				</section>
			</div>
		)
	}
}
