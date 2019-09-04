const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
const cdn = process.env.CDN || ''

const paths = {
  clientBuild: resolveApp('appBuild/'),
  libraryBuild: resolveApp('dist/'),
  dotenv: resolveApp('config/.env'),
  src: resolveApp('src'),
  components: resolveApp('src/components'),
  nodeModules: resolveApp('node_modules'),
  publicPath: '/appBuild/',
  cdn
}

paths.resolveModules = [
  paths.src,
  paths.nodeModules
]

module.exports = paths
