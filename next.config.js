const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [
    [
      optimizedImages, {
        optimizeImagesInDev: true,
        mozjpeg: {
          quality: 75,
        },
      },
    ],
    [
      css
    ],
    [
      sass, {
        cssModules: true,
      }
    ],
  ],
  {
    serverRuntimeConfig: {
    },
    publicRuntimeConfig: {
      apiUrl: process.env.API_URL || 'http://localhost:8081',
    },
  }
);