const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins:[
                require('postcss-preset-env')(),
                require('cssnano')()
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
		]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css'
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'dist/*.html'))
    }),
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin()
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
