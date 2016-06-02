import React from "react";

import Tab from "../Tab";
import Comment from "./Comment";
import Order from "./Order";

export default class Orders extends React.Component {
	get_orders(){
		return(
			<ul class="orders-feed">
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
			</ul>
		);
	}
	render(){
		return(
			<div class="tabs">
				<h4>Orders</h4>
			    <Tab id="tab-3" group="tab-group-2" name="Shipped" text={this.get_orders()} />
			    <Tab id="tab-4" group="tab-group-2" name="Pending" checked="true" text={this.get_orders()} />
			</div>
		);
	}
}