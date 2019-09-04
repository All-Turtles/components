const paths = require('../paths')

module.exports = {
  extensions: ['.js', '.ejs', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
  alias: {
    'app/api': `${paths.src}/api`,
    'app/styles': `${paths.src}/styles/index`,
    'app/ui-kit': `${paths.src}/components/AppUIKit`,
    'app/utilities': `${paths.src}/Utilities`,
    'app/analytics': `${paths.src}/Analytics`,
    'app': `${paths.src}`
  }
}
