const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		bundle: './src/index.js'
	},
	output: {
    filename: '[name]_[hash:5].js'
  },
  devtool: 'cheap-module-eval-source-map',
  // dev devtool: 'cheap-module-eval-source-map',
  // prod devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: 'dist',
    open: true,
    hot: true,
    hotOnly: true
  },
	module: {
		rules: [
			{
				test: /\.(svg|jpe?g|gif|png|bmp)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]_[hash:5].[ext]',
						outputPath: 'images',
						limit: 2048
					}
				}
			},
			{
				test: /\.(eot|ttf|woff2?|otf)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name]_[hash:5].[ext]',
						outputPath: 'fonts'
					}
				}
			},
			{
				test: /(?<!module)\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.module\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: true
						}
					},
					'sass-loader',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
	]
}
