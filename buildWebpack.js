var prodConfig = require('./webpack/webpack.config.prod.js')
var webpack = require('webpack')

var configs = [prodConfig]

configs.forEach(function(config) {
  var bundler = webpack(config)
  bundler.run(function(errs, stats) {
    if (errs) {
      console.log(errs)
      return
    }
    if (stats.hasErrors()) {
      console.log('Stats Err:', stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true
      }))
      return
    }
    console.log(stats.toString({
      colors: true,
      usedExports: true,
      reasons: true
    }))
  })
})
