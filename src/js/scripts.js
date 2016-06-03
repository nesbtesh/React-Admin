import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Products from "./pages/Products";
import Cupons from "./pages/Cupons";
import Reports from "./pages/Reports";
import Reviews from "./pages/Reviews";
import Withdraw from "./pages/Withdraw";

const app = document.getElementById('app')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout} >
			<IndexRoute component={Dashboard}></IndexRoute>
			<Route path="archives(/:article)" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
			<Route path="products" component={Products}></Route>
			<Route path="cupons" component={Cupons}></Route>
			<Route path="reports" component={Reports}></Route>
			<Route path="reviews" component={Reviews}></Route>
			<Route path="withdraw" component={Withdraw}></Route>
		</Route>
	</Router>
	, app)