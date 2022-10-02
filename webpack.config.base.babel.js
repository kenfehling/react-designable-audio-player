import path from 'path'

export default {
  entry: "./src/index.js",
  output: {
    library: 'react-designable-audio-player',
    libraryTarget: 'commonjs',
    globalObject: 'this',
    path: path.resolve('./lib'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
  node: { Buffer: false }
};