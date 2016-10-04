var webpack = require('webpack');

module.exports = {
  output: {
    libraryTarget: 'umd',
    library: 'ReactDesignableAudioPlayer',
    path: './dist/',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      }
    }
  ],
  node: { Buffer: false },
};