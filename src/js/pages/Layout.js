import React from "react";
import { Link } from "react-router"; 

import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar";

export default class Layout extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      collapsed: true,
	    };
	}
	
	toggleCollapse() {
	    const collapsed = !this.state.collapsed;
	    this.setState({collapsed});
	}

	navigate(){
		this.context.router.push(null, "/");
	}

	render(){
		const { collapsed } = this.state;
		const navClass = collapsed ? "" : "active";
		return(
			<div>
				<Sidebar location={this.props.location} />
				<div class={"main-wrapper " + navClass}>
					<Header toggleClick={this.toggleCollapse.bind(this)} />
					<div class="main-content">
						{ this.props.children }
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}