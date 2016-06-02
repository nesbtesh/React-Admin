import React from "react";

import Tab from "./Header/Tab";

export default class Footer extends React.Component {
	render(){
		const name = "Will";
		return(

			<footer>
				<ul class="">
					<Tab link="http://wickory.com" title= "Wickory.com" />
					<Tab link="http://wickory.com" title= "Blog" />
					<Tab link="http://wickory.com" title= "Privacy Policy" />
					<li>
						<button class="button small right">Support</button>
					</li>
				</ul>

			</footer>
		);
	}
}