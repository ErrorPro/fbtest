var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'app', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.*js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
};
