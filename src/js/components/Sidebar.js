import React from "react";

import PageTabs from "./Sidebar/PageTabs"

export default class Sidebar extends React.Component {
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
	
	render(){
		const { collapsed } = this.state;
		const navClass = collapsed ? "" : "active";
		return(
			<div class="sidebar scrollable-container">
				<div class="logo">
					<i class="material-icons">dashboard</i>
					<span>Dashboard</span>
				</div>
				<div class={"user " + navClass} onClick={this.toggleCollapse.bind(this)}>
					<div class="with-padding">
						<img src="images/250.png" />
						<span>Nessim Btesh</span>
					</div>
					<ul>
						<li>Profile</li>
						<li>Logout</li>
					</ul>
				</div>
				<PageTabs location={this.props.location} />
			</div>
		);
	}
}