module.exports = (env = 'development') => {
  if (env !== 'production') {
    process.env.NODE_ENV = 'development'
    return [require('./client.dev')]
  }
  process.env.NODE_ENV = 'production'
  return [require('./client.prod')]
}
