const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pagesPath = path.resolve(__dirname, '../src/pages')
const entryPath = path.resolve(__dirname, '../src/js')
const pagesFiles = fs.readdirSync(pagesPath, 'utf-8')
const entriesFiles = fs.readdirSync(entryPath, 'utf-8')
const matchNameReg = /\w+(?=\.)/

const genHtmlWebpackPlugin = (files) => {
  return files.map(fileName => {
    const chunkName = fileName.match(matchNameReg)[0]
    return new HtmlWebpackPlugin({
      template: path.join(pagesPath, fileName),
      filename: fileName,
      chunks: [chunkName]
    })
  })
}

const genEntry = (entries) => {
  let entry = {}
  entries.forEach(entryName => {
    let _name = entryName.match(matchNameReg)[0]
    entry[_name] = path.join(entryPath, entryName)
  })
  return entry
}

module.exports.HTMLWebpackPlugins = genHtmlWebpackPlugin(pagesFiles)
module.exports.entry = genEntry(entriesFiles)
