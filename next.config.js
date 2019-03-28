const withSass = require('@zeit/next-sass');

module.exports = withSass({
  serverRuntimeConfig: {
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || 'http://localhost:8081',
  },
  cssModules: true
});