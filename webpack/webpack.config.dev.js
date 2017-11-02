var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var walkSync = function(dir, filelist) {
  var files = fs.readdirSync(dir)
  filelist = filelist || []
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist)
    } else {
      if (file.includes('.js') && !file.includes('test.js') && !file.includes('min.js') && !file.includes('stories.js')) {
        filelist.push(path.resolve(path.join(dir, file)))
      }
    }
  })
  return filelist
}

var filesToFetch = [
  ...walkSync('./src/components'),
  ...walkSync('./src/containers'),
  ...walkSync('./src/actions'),
  ...walkSync('./src/reducers'),
  ...walkSync('./src/endpoints')
]

var plugins = []
for (var i = 0, ln = filesToFetch.length; i < ln; i++) {
  plugins.push(new webpack.PrefetchPlugin('.', filesToFetch[i]))
}

module.exports = {
  cache: true,
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      'babel-core/register',
      './src/index.js'
    ]
  },
  devtool: 'eval-source-map',
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../public/'),
    publicPath: '../public/'
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: [path.resolve(__dirname, '../public/')]
      }
    }, {
      reload: false
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /en|us|fr|de|it|es|pr/),
    ...plugins
  ],
  watch: true,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: [
          /(node_modules|bower_components)/
        ]
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          plugins: ['react-hot-loader/babel']
        }
      },
      {
        test: require.resolve('react'),
        use: [
          {
            loader: 'expose-loader',
            query: 'React'
          }
        ]
      },
      {
        test: require.resolve('react-dom'),
        use: [
          {
            loader: 'expose-loader',
            query: 'ReactDOM'
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('.')
    ]
  },
  recordsPath: path.resolve(__dirname, 'js'),
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
}
