// deviner le chemin de la racine en abs
var path = require('path');
var root = path.resolve(__dirname);
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('bundle.css')

module.exports = {
  entry: {
    app: ['./src/main.css', './src/main.js']
  },
  output: {
    // path: __dirname + '/dist',
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: root
      },{
        test: /\.css$/,
        // attention plusieur loader > 'loaderS'
        // loaders: ['style-loader', 'css-loader']
        loaders: extractCSS.extract(['css-loader'])
      }
    ]
  },
  plugins: [
    extractCSS
  ]
}