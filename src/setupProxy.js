const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/proxyA', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/api/proxyA': '' }
    }),
    createProxyMiddleware('/api/proxyB', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api/proxyB': '' }
    })
  )
};