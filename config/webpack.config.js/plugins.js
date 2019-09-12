const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

const shared = []

const client = [
  new CaseSensitivePathsPlugin(),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/, /\.stories\./)
]

module.exports = {
  shared,
  client
}
