import React from "react";

/***
 This class creates a sliding tab
***/
export default class Tab extends React.Component {
	
	render(){
		
		return(  
		   <div class="tab">
		       <input type="radio" id={ this.props.id } name={this.props.group} defaultChecked={this.props.checked}  />
		       <label for={ this.props.id }>{this.props.name}</label>
		       
		       <div class="content">
		           	{this.props.text}
		       </div> 
		   </div>
		);
	
	}
}