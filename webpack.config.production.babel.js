import webpack from 'webpack'
import baseConfig from './webpack.config.base.babel'

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: 'react-router-nested-history.min.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
    }),
  ]
}