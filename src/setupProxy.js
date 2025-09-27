const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // This is the path you will use for your Foursquare API calls
    createProxyMiddleware({
      target: 'https://api.foursquare.com', // Base URL of the Foursquare API
      changeOrigin: true, // Changes the origin of the host header to the target URL
      pathRewrite: {
        '^/api': '', // Remove '/api' from the beginning of the URL when forwarding it
      },
    })
  );
};
