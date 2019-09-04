const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
// const WriteFileWebpackPlugin = require('write-file-webpack-plugin')
// const Dotenv = require('dotenv-webpack')

// const deployEnv = process.env.DEPLOY_ENV || 'development'

const shared = []

const client = [
  new CaseSensitivePathsPlugin(),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
]

module.exports = {
  shared,
  client
}
