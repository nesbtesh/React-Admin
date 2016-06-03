import dispatcher 	from "../dispatcher";
import axios 		from "axios";

export function createProduct(data) {
	dispatcher.dispatch({
		type: "CREATE_PRODUCT",
		data,
	});
}

export function deleteProduct(id) {
	dispatcher.dispatch({
		type: "DELETE_PRODUCT",
		id,
	});
}

export function reloadProducts(){
	
	dispatcher.dispatch({
		type: "FETCH_PRODUCTS",
	});

	axios.get("https://sompage.com/")
		
		.then(function (data) {
		
			dispatcher.dispatch({
				type: "RECEIVE_PRODUCTS",
				data: data.data,
			});
		
		})
		
		.catch(function (response) {
		
			if (response instanceof Error) {
		     	alert(response);
		    } 
		    
		});
}