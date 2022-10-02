import webpack from 'webpack'
import baseConfig from './webpack.config.base.babel'

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: 'index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ]
}