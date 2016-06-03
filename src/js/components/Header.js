import React 	from "react";
import Title 	from "./Header/Title";
import Tab 		from "./Header/Tab";


export default class Header extends React.Component {
	
	render(){
	
		return(
			<div class="top-nav">
				<div class="wrap">
					<ul class="nav-left hamburger-icon hide-on-large">
						<li>
							<a onClick={this.props.toggleClick}><i class="material-icons">&#xE5D2;</i></a>
						</li>
					</ul>
					<i class="material-icons header-search-icon">search</i>
					<input class="header-search-bar" placeholder="Search" />
				</div>
			</div>
		);
	}
}