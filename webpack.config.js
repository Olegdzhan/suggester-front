var path = require('path');
module.exports = {
	entry: {
		bundle: './main.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build/',
		filename: 'bundle.js',
		pathinfo: true
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-object-rest-spread']
				}
			},
			{ 
				test: /\.styl$/, 
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!stylus-loader'
			}
		]
	}
};