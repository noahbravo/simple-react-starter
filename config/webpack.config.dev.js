const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = (env, options) =>
  merge(baseConfig(options.mode), {
    mode: 'development',
    devServer: {
      port: 3000,
      open: true,
      overlay: {
        warnings: true,
        errors: true
      },
      historyApiFallback: true,
      hot: true
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.sass']
    }
  })
