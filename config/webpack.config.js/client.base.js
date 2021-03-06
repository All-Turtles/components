const paths = require('../paths')
const { client: clientLoaders } = require('./loaders')
const resolvers = require('./resolvers')
const output = require('./output')
const plugins = require('./plugins')

const outputType = process.env.OUTPUT_TYPE

const externals = {
  app: null,
  library: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'react-router-dom': {
      commonjs: 'react-router-dom',
      commonjs2: 'react-router-dom',
      amd: 'ReactRouterDOM',
      root: 'ReactRouterDOM'
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components'
    }
  }
}

module.exports = {
  name: 'client',
  target: 'node',
  entry: `${paths.src}/index.js`,
  output: { ...output },
  module: {
    rules: clientLoaders
  },
  externals: { ...externals[outputType] },
  resolve: { ...resolvers },
  plugins: [...plugins.shared, ...plugins.client],
  // node: {
  //   dgram: 'empty',
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  //   child_process: 'empty'
  // },
  optimization: {
    moduleIds: 'named',
    emitOnErrors: false
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: false,
    modules: false,
    reasons: false,
    timings: true,
    version: false
  }
}
