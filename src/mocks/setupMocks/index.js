export function setupMocks () {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const { worker } = require('./browser')
    worker.start()
  }
}