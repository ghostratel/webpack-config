const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		bundle: './src/index.js'
	},
	output: {
		filename: 'bundle.js'
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
				test: /\.(eot|ttf|woff|woff2|otf)$/,
				use: 'file-loader'
			},
			{
				test: /\.(scss|css)$/,
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
			}
		]
	}
}
