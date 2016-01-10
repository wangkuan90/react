import React from "react";
import Title from "./Title";
import AppIndex from "./AppIndex";

export default class App extends React.Component {
	
	constructor() {
        super(); 
        this.state = {};
    }
	
	render() {
		return (
			<div>
				<Title />
				<AppIndex />
			</div>
		)
	}
}