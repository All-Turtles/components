const watch = require('node-watch')
const paths = require('../config/paths')
const build = require('./build')
const chalk = require('chalk')

const color = '#3D87C9'

watch(paths.src, { recursive: true }, (evt, name) => {
  console.log('\n%s changed.', name)
  console.log(chalk.hex(color).bold('🔨 Rebuilding...\n'))
  build()
})
