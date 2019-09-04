const webpack = require('webpack')
const rimraf = require('rimraf')
const paths = require('../config/paths')
const webpackConfig = require('../config/webpack.config.js')(process.env.NODE_ENV || 'development')

const outputType = process.env.OUTPUT_TYPE
const buildDir = outputType === 'library' ? paths.libraryBuild : paths.clientBuild
console.log('buildDir', buildDir)
// console.log('webpackConfig::', webpackConfig)
const build = async () => {
  rimraf.sync(buildDir)

  webpack(webpackConfig, (error, stats) => {
    console.log('webpack', error, stats)
  })
}

build()

module.exports = build
