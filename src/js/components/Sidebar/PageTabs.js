import React 	from "react";
import Tab 		from "./Tab";

export default class PageTabs extends React.Component {

	navigate(){
		this.props.history.pushState(null, "/");
	}

	render(){
		
		//generate arrays of Tabs
		const tabs =[
			{icon: 'home', to: '/', title: 'home'},
			{icon: 'work', to: '/products', title: 'products'},
			{icon: 'shopping_cart', to: '/archives', title: 'Archives'},
			{icon: 'redeem', to: '/cupons', title: 'cupons'},
			{icon: 'trending_up', to: '/reports', title: 'reports'},
			{icon: 'chat', to: '/reviews', title: 'reviews'},
			{icon: 'vertical_align_top', to: '/withdraw', title: 'withdraw'},
			{icon: 'settings', to: '/settings', title: 'settings'},
		].map((tab, i) => <Tab key={i} icon={tab.icon} title={tab.title} to={tab.to} location={this.props.location} />);

		return(
			<ul class="page-tab">	
				{tabs}
			</ul>
		);
	}
}