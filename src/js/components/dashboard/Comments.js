import React from "react";

import Tab from "../Tab"
import Comment from "./Comment"

export default class Comments extends React.Component {
	get_comments(){
		return(
			<ul>
				<Comment />  
				<Comment />  
				<Comment />  
				<Comment />  			
			</ul>
		);
	}
	render(){
		return(
			<div class="tabs">
				<h4>Comments</h4>
			    <Tab id="tab-1" group="tab-group-1" name="Approved" checked="true" status="PENDING" text={this.get_comments()} />
			    <Tab id="tab-2" group="tab-group-1" name="Pending" status="PENDING" text={this.get_comments()} />
			</div>
		);
	}
}