import React from "react";

import Stat from "./visualstats/Stat"

export default class VisualStats extends React.Component {
	
	render(){
		return (
	    	<div class="row last-visual">
				<Stat fancyClass="blue" icon="comment" number="1349" title="New Feedback" />
				<Stat fancyClass="red" icon="attach_money" number="12.5M$" title="Total Profit" />
				<Stat fancyClass="green" icon="shopping_cart" number="134" title="New Orders" />
				<Stat fancyClass="purple" icon="local_library" number="+ 13%" title="Brand Popularity" />
			</div>
		);
	}
}