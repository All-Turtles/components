const paths = require('../paths')

module.exports = {
  extensions: ['.js', '.ejs', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
  alias: {
    app: `${paths.src}`
  }
}
