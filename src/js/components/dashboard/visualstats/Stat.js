import React from "react";


export default class Stat extends React.Component {
	render()
	{
		
		var { number, fancyClass, title } = this.props;
		fancyClass = fancyClass + " dashboard-visual";
		
		return(
		
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<a className={ fancyClass }> 
					
					<div class="visual">
						<i class="material-icons">{ this.props.icon }</i>
					</div>
					
					<div class="details">
                        <div class="number">
                            <span data-value="{ number }" data-counter="counterup">{ number }</span>
                        </div>
                    	<div class="desc"> { title } </div>
                	</div>
				
				</a>
			</div>
    				
		);
	}
}