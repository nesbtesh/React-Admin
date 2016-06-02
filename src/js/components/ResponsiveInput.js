import React from "react";

export default class ResponsiveInput extends React.Component {
	render(){
		return(  
			<div className={this.props.columns}>
				<input placeholder={this.props.placeholder} type={this.props.type} />
			</div>
		);
	}
}