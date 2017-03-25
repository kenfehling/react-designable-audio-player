var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve('./'),
  entry: '../../examples/src/index.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [
          path.resolve('../../examples/src'),
          path.resolve('../../src')
        ]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-designable-audio-player': path.resolve('../../src')
    },
    modules: [
      path.resolve('../../examples/node_modules'),
      path.resolve('../../node_modules'),
      path.resolve('./node_modules'),
      'node_modules'
    ]
  },
  node: { Buffer: false }
};