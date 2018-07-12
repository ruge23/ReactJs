module.exports = {
	entry: [
    	'./index.js'
  	],
  	module: {
  		loaders: [
  			{
  				test: /(\.js|\.jsx)$/,
  				loader: 'babel-loader',
  				exclude: /node_modules/,
  				query: { presets: ['es2015', 'react'] }
  			}
  		]
  	},
  	output: {
    	filename: "index_bundle.js",
    	path: __dirname + '/dist'
  	}
}