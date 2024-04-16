const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/ttb/api',
    createProxyMiddleware({
      target: 'http://www.aladin.co.kr',
      changeOrigin: true
    })
  );
};
