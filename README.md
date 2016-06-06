![alt text](https://raw.githubusercontent.com/nesbtesh/reactAdmin/master/photo.png)
# React Admin Template

**V1.0**

## What is it?

A reponsive template for [React.js](https://facebook.github.io/react/) using [Flux](https://facebook.github.io/flux/) and [Bootless](https://github.com/nesbtesh/Bootless).

## Installation

```
	$ npm install
```
The code above should install all the dependencies needed. If it doesn't work try looking at package.json and see what dependencies you are missing.

## Usage

#### Running webpack

I added a script to the package.json file to run webpack on your computer. Do not use this for production.

```
	$ npm run dev
```

If webpack is not installed try installing with the code below. 

```
 	$ npm install webpack --save
```

After running the above just go to http://localhost:8080

## Adding a configuration file

To add a configuration file just go to webpack.config.js and add the code below. Also don't forget to add the two json file with your variables.

```js
	externals: {
   		'Config': JSON.stringify(process.env.NODE_ENV ? require('./config.prod.json') : require('./config.dev.json'))
  	}
```

To access your configuration file just do the following:

'''
	import Config from "Config"
	Config.settingName
'''

## License

**MIT**
