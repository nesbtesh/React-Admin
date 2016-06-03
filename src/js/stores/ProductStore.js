import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter{
	constructor()
	{
		super();
		//DO NEVER DO THIS IN PRODUCTION THIS IS JUST FOR TESTING PURPOSES
		this.products = {
			  "count": 29,
			  "next": 2,
			  "list": [
			    {
			      "id": 42,
			      "title": "new candledddddd",
			      "short_description": "new",
			      "retail_price": "10.00",
			      "in_stock": 13,
			      "images": [],
			      "slug": "d123dddddddddddddddddddd",
			      "is_active": true
			    },
			    {
			      "id": 43,
			      "title": "new candledddddd",
			      "short_description": "new",
			      "retail_price": "10.00",
			      "in_stock": 13,
			      "images": [],
			      "slug": "d123ddddddddddddddddddddd",
			      "is_active": true
			    },
			    {
			      "id": 21,
			      "title": "hgello",
			      "short_description": "hello2",
			      "retail_price": "0.00",
			      "in_stock": null,
			      "images": [],
			      "slug": "hddddfdff",
			      "is_active": true
			    },
			    {
			      "id": 22,
			      "title": "hgello",
			      "short_description": "hello2",
			      "retail_price": "12.23",
			      "in_stock": null,
			      "images": [],
			      "slug": "hddddfdfddf",
			      "is_active": true
			    },
			    {
			      "id": 44,
			      "title": "new candledddddd",
			      "short_description": "new",
			      "retail_price": "10.00",
			      "in_stock": 13,
			      "images": [],
			      "slug": "d123dddddddddddddddddddddd",
			      "is_active": true
			    },
			    {
			      "id": 45,
			      "title": "new candledddddd",
			      "short_description": "new",
			      "retail_price": "6.00",
			      "in_stock": 13,
			      "images": [],
			      "slug": "fsd",
			      "is_active": true
			    },
			    {
			      "id": 46,
			      "title": "new candledddddd",
			      "short_description": "new",
			      "retail_price": "6.00",
			      "in_stock": 13,
			      "images": [],
			      "slug": "fsddsadsa",
			      "is_active": true
			    },
			    {
			      "id": 47,
			      "title": "new candledddddd",
			      "short_description": "new",
			      "retail_price": "43.00",
			      "in_stock": 13,
			      "images": [],
			      "slug": "fsddsad33sa",
			      "is_active": true
			    },
			    {
			      "id": 48,
			      "title": "new candledddddd",
			      "short_description": "new",
			      "retail_price": "43.00",
			      "in_stock": 313,
			      "images": [],
			      "slug": "fsddsad33sa3",
			      "is_active": true
			    },
			    {
			      "id": 50,
			      "title": "micky",
			      "short_description": "new",
			      "retail_price": "43.00",
			      "in_stock": 313,
			      "images": [],
			      "slug": "fsddsadd33sa3",
			      "is_active": true
			    },
			    {
			      "id": 51,
			      "title": "lego",
			      "short_description": "new",
			      "retail_price": "43.00",
			      "in_stock": 313,
			      "images": [],
			      "slug": "fsddsadd33sa3d",
			      "is_active": true
			    },
			    {
			      "id": 52,
			      "title": "lego",
			      "short_description": "new",
			      "retail_price": "43.00",
			      "in_stock": 313,
			      "images": [],
			      "slug": "lego",
			      "is_active": true
			    }
			  ],
			  "pages": 3,
			  "previous": null
			};
	}

	createProduct(data)
	{
		const id = Date.now();
		this.products.list.push({
			  id: id,
			  title: data.title,
		      short_description: data.short_description,
		      retail_price: data.retail_price,
		      in_stock: data.in_stock,
		      slug: data.slug,
		      is_active: false,
		      completed: false
		});
		this.emit("change");
	}

	getAll()
	{
		return this.products;
	}

	handleActions(action)
	{

		switch(action.type) {
		
			case "CREATE_PRODUCT": {
				this.createProduct(action.data);
			}
		
			case "RECEIVE_PRODUCTS": {
				this.products = action.data;
				this.emit("change");
			}

		}

	}
}

const productStore = new ProductStore;

dispatcher.register(productStore.handleActions.bind(productStore));

export default productStore;