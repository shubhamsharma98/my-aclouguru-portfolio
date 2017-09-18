const path = require('path');

module.exports = {
	entry: './js/main.js', //where webpack starts looking for your code
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}, //where to output
	module: {
		rules: [{
			test: /\.js$/, //get every .js extension file to bundle together in the output
			exclude: /node_modules/, //where not to look
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['react']
				}
			}
		}]
	}
}