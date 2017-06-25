// deviner le chemin de la racine en abs
var path = require('path');
var root = path.resolve(__dirname);

module.exports = {
  entry: {
    app: ['./src/main.js']
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
      }
    ]
  }
}