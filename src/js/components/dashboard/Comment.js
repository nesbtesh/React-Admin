import React from "react";

export default class Comment extends React.Component {
	render(){
		return(  
		 
   			<li class="comment-row">
   				<div class="display-table">
   					<span class="float-left helper-name">Nessim Btesh</span>
   					<span class="helper-date float-right">26 Feb, 10:30AM</span>
   				</div>
   				<div class="display-table">
   					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
   				</div>
   				<div class="action-row">
   					<span class="float-left comment-status">{ this.props.status }</span>
   					<ul class="comment-action float-right">
   						<li>Approve</li>
   						<li>Decline</li>
   						<li>Quick Edit</li>
   					</ul>
   				</div>
   			</li>
		);
	}
}