const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	target: 'web',
	devtool: 'eval-source-map',
	entry: './src/index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.css', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{loader: "html-loader"}]
			}, {
				test: /\.scss$/,
				use: [{loader: MiniCssExtractPlugin.loader}, "css-loader", "sass-loader"]
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		})
	],
	devServer: {
		contentBase: './dist'
	},
};
