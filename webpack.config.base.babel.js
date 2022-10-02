import path from 'path'

export default {
  entry: ["./src/index.js"],
  output: {
    library: '',
    libraryTarget: 'commonjs',
    path: path.resolve('./lib'),
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