const webpack = require('webpack')
const rimraf = require('rimraf')
const paths = require('../config/paths')
const webpackConfig = require('../config/webpack.config.js')(process.env.NODE_ENV || 'development')
const WebpackDevServer = require('webpack-dev-server')

console.log('WebpackDevServer', WebpackDevServer)

const start = async () => {
  rimraf.sync(paths.clientBuild)

  const port = 3001
  const host = '0.0.0.0'

  webpackConfig.watch = true
  const options = {
    stats: { colors: true },
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    port,
    contentBase: './public',
    host
  }

  // https://github.com/webpack/webpack-dev-server/blob/master/examples/api/simple/server.js
  WebpackDevServer.addDevServerEntrypoints(webpackConfig, options)
  const compiler = webpack(webpackConfig)
  const server = new WebpackDevServer(options, compiler)
  server.listen(port, host, (error) => {
    if (error) {
      console.log('Error', error)
    }
  })
}

start()
