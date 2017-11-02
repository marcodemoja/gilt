var inlineCss = require('inline-css')
var sass = require('node-sass')
var fs = require('fs')
var path = require('path')
var cssPath = path.resolve(__dirname, './public')

var sassSourceFile = path.resolve(__dirname, './sass/app.scss')

var processSassFile = function(file, resultFileName) {
  sass.render({
    file: file,
    outputStyle: 'compressed',
    sourceMap: true,
    includePaths: ['./sass', './node_modules'],
    outFile: cssPath + '/' + resultFileName
  }, function(error, result) {
    if (error) {
      console.log(error.status)
      console.log(error.column)
      console.log(error.message)
      console.log(error.line)
    } else {
      fs.writeFile(cssPath + '/' + resultFileName + '.css', result.css.toString(), function(error) {
        if (error) {
          throw error
        }
      })
      fs.writeFile(cssPath + '/' + resultFileName + '.map', result.map.toString(), function(error) {
        if (error) {
          throw error
        }
      })
    }
  })
}
processSassFile(sassSourceFile, 'app')
