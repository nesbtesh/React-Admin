import React from "react";
import { Link } from "react-router"; 

export default class Tab extends React.Component {

	render(){
		const { to } = this.props;
		const Isclass = this.props.location.pathname.match(to) ? "active" : "";
		return(
			<li class={ Isclass }>
				<Link to={ to } >
					<i class="material-icons">{ this.props.icon }</i>
					<span>{ this.props.title }</span>
				</Link>
			</li>
		);
	}
}