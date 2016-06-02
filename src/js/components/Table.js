import React from "react";

import Row from "./table/Row"

export default class Table extends React.Component {
	
	parseTitle(title){
		if(this.props.hiddenRows.indexOf(title) === -1){
			title = title.replace(/_|\-/, " ");
			return title;
		}
	}
	
	getHiddenIndex(hiddenRows, keys){
		const hidden = [];
		
		for (var i = hiddenRows.length - 1; i >= 0; i--) {
			hidden.push(keys.indexOf(hiddenRows[i]));
		}
		
		return hidden;
	}
	
	render(){
		
		const {data, hiddenRows} = this.props;
		const keys = Object.keys(data[0]);
		var hidden = this.getHiddenIndex(hiddenRows, keys);
		const rows = data.map((row, i) => <Row key={i} rows={row} hiddenRows={hidden} /> );
		
		const instace = this;
		const theads = keys.map(function(title, i) {
			if(hiddenRows.indexOf(title) === -1){ 
				return <th key={i+7000} >{instace.parseTitle(title)}</th>;
			};
		});

		return (
	     <table>
	     	<thead>
	     		<tr>{theads}
					<th></th>
					<th></th>
	     		</tr>
	     	</thead>
	     	<tbody>
				{rows}
			</tbody>
	     </table>
		);
	}
}