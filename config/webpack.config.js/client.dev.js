const baseConfig = require('./client.base')
const webpack = require('webpack')
const generateSourceMap = process.env.OMIT_SOURCEMAP !== 'true'

const config = {
  ...baseConfig,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...baseConfig.plugins
  ],
  mode: 'development',
  devtool: generateSourceMap ? 'cheap-module-inline-source-map' : false,
  performance: {
    hints: false
  }
}

module.exports = config
