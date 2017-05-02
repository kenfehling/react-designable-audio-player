import path from 'path'

export default {
  entry: ["./src/index.js"],
  output: {
    libraryTarget: 'umd',
    library: 'ReactDesignableAudioPlayer',
    path: path.resolve('./dist'),
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    }
  },
  node: { Buffer: false },
};