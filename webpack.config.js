const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: {
    app: './src/app.js'
	},
	output: {
    filename: '[name].[hash:5].js',
    chunkFilename: '[name].[hash:5].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
				exclude: /(node_modules)/
			}
		]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups:{
        lodash: {
          test: /(lodash)/,
          name: 'lodash',
          chunks: 'all'
        },
        jquery: {
          test: /jquery/,
          name: 'jquery',
          chunks: 'all'
        }
      }
    }
  }
}
