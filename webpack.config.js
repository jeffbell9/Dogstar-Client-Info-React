const path = require('path');

module.exports = {
	entry: './index.js',

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},

	devServer: {
		contentBase: "./public",
		hot: true
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader']
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test : /\.jpg$/,
				exclude: /(node_modules)/,
				loader : 'file-loader'
			}
		]
	}
};