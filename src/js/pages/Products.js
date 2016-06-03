import React from "react";

import Table from "../components/Table"
import ProductStore from '../stores/ProductStore';
import { Link } from "react-router"; 
import * as ProductActions from "../actions/ProductActions";

export default class Products extends React.Component {
	
	constructor()
	{
		super();
		this.getProducts = this.getProducts.bind(this);
		this.state ={
			products: ProductStore.getAll(),
		};
	}

	componentWillMount() 
	{
		ProductStore.on("change", this.getProducts);
	}

	componentWillUnmount()
	{
		ProductStore.removeListener("change", this.getProducts);
	}

	getProducts()
	{
		this.setState({
			products: ProductStore.getAll(),
		});
	}

	reloadProducts()
	{
  		ProductActions.reloadProducts();
  	}

	render()
	{ 
		return (
	    	<h1>Products</h1>
		);
	}
}