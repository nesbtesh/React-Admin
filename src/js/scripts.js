import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Products from "./pages/Products";


const app = document.getElementById('app')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout} >
			<IndexRoute component={Dashboard}></IndexRoute>
			<Route path="archives(/:article)" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
			<Route path="products" component={Products}></Route>
		</Route>
	</Router>
	, app)