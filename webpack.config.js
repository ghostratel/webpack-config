const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')
const env = process.argv[3]
const webpack = require('webpack')

module.exports = {
  entry: { // 入口文件(可配置多入口)
    index: './src/index.js'
    // login: './src/login.js'
  },
  output: {
    filename: '[name].js', // 打包后的文件名称
    path: path.resolve('dist') // 打包后的目录，必须是绝对路径
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 8888,
    open: true
  },
  plugins: [
    new CleanWebpackPlugin('dist'), // 打包前先清空
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      filename: 'index.html',
      chunks: ['index'] // 对应关系,index.js对应的是index.html
    }),
    /*
    * 多页面按照此规则进行配置即可
    * template, filename以及chunks名称需要一一对应
    */
    // new HtmlWebpackPlugin({
    //   template: './src/login.html',
    //   hash: true,
    //   filename: 'login.html',
    //   chunks: ['login'] // 对应关系,login.js对应的是login.html
    // }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'src/*.html'))
    }),
    // 拆分后会把css文件放到dist目录下的css/style.css
    new ExtractTextWebpackPlugin('css/[name].css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: ExtractTextWebpackPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            // 开发环境就不压缩css
            minimize: env === 'development' ? !env === 'development' : true
          }
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      })
    }, {
      test: /\.js$/,
      use: 'bable-loader',
      include: '/src/',
      exclude: '/node_modules/'
    }, {
      test: /\.js$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [path.resolve(__dirname, 'src')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test: /\.(jpe?g|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
          outputPath: 'images/' // 图片打包后存放的目录
        }
      }]
    }, {
      test: /\.(htm|html)$/i,
      use: ['html-withimg-loader']
    }, {
      test: /\.(eot|ttf|woff|svg)$/,
      use: ['file-loader']
    }]
  },
  mode: 'development'
}
