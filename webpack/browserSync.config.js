var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.dev.js')
var webpack = require('webpack')
var bundler = webpack(config)

module.exports = {
  middleware: [
    webpackDevMiddleware(bundler, {
      publicPath: '/src/',
      stats: {
        colors: true,
        usedExports: true,
        reasons: true
      }
    }),
    webpackHotMiddleware(bundler)
  ],
  files: [
    '../src/**/*.js',
    '../css/app.css',
    '../images/*.svg',
    '../images/*.png',
    '../images/*.jpeg',
    '../images/*.jpg'
  ],
  online: false,
  ghostMode: true,
  minify: false
}
