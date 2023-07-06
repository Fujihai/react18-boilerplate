import { CONFIG } from '../../constants/config'

export function setupMocks () {
  if (process.env.NODE_ENV === 'development' && CONFIG.enableMSW) {
    // eslint-disable-next-line global-require
    const { worker } = require('./browser')
    worker.start()
  }
}