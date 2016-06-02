import React from "react";

export default class row extends React.Component {
	get_field(field, keyLocation){
		if(typeof(field) === "boolean" ){
			return React.createElement('input',{type: 'checkbox', defaultChecked: field});
		}else if(this.props.hiddenRows.indexOf(keyLocation) === -1){
			return field;
		}
	}
	getHtml(i, keyLocation){
		if(this.props.hiddenRows.indexOf(keyLocation) === -1){ <td key={keyLocation} >{this.get_field(rows[i], keyLocation) }</td>};
	}
	render(){
		const {rows, hiddenRows} = this.props;
		const instace = this;
		const tabs = Object.keys(rows).map(function(i, keyLocation) {
			if(hiddenRows.indexOf(keyLocation) === -1){ 
				return <td key={keyLocation} >{instace.get_field(rows[i], keyLocation) }</td>
			};
		});

		return (
	     <tr key={rows.id}>
	     	{tabs}
	     	<td><a class="button green">Edit</a></td>
	     	<td><a class="button red">Delete</a></td>
	     </tr>
		);
	}
}