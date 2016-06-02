import React from "react";

import VisualStats from "../components/dashboard/VisualStats"
import Comments from "../components/dashboard/Comments"
import Orders from "../components/dashboard/Orders"
	

export default class Dashboard extends React.Component {
	
	render(){
		
		return(
			<div>
				<h3>Dashboard</h3>
				<VisualStats />
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<Comments />
					</div>
					<div class="col-md-6 col-sm-6">
						<Orders />
					</div>
				</div>
			</div>
		);
	}
}