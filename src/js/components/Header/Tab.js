import React from "react";

export default class Tab extends React.Component {

	render(){
		return(
			<li><a href="{this.props.link}" >{ this.props.title }</a></li>
		);
	}
}