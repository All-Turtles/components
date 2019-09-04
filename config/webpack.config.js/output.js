const paths = require('../paths')

const outputType = process.env.OUTPUT_TYPE
const publicPath = process.env.NODE_ENV === 'production' ? `${paths.cdn}` : paths.publicPath

const app = {
  path: paths.clientBuild,
  filename: 'bundle.js',
  publicPath: publicPath,
  chunkFilename: '[name].[chunkhash:8].chunk.js'
}

const library = {
  library: '[name]',
  libraryTarget: 'umd',
  filename: 'index.js',
  path: paths.libraryBuild,
  // publicPath,
  umdNamedDefine: true
}

const outputs = {
  app,
  library
}

console.log('outputs[outputType]', outputs[outputType])

module.exports = outputs[outputType]
