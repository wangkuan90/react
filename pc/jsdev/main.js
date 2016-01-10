import React from "react";
import ReactDom  from "react-dom";
import {Router, Route} from 'react-router';
import createBrowserHistory from "history/lib/createBrowserHistory";
import common from "common";
import App from "./modules/home/App";

if (common.isPC) {
	require("./../sass/pc.scss")
	ReactDom.render(
		(<h1 className="visit-pc" > 请在手机端访问 < /h1>),
		document.getElementById("container")
	);
}else{
	require("./../sass/h5.scss");
	const history = createBrowserHistory();
	
	ReactDom.render((
		<Router history={history}>
			<Route path="/" component={App}>
			</Route>
		</Router>
		), document.getElementById("container")
	);
}
