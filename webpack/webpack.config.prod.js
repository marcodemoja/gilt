var webpack = require('webpack')
var path = require('path')
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ]
  // vendors: [path.join(__dirname, './vendors.js')]
  },
  cache: false,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: '[name].min.js',
    sourceMapFilename: '[name].js.map'
  },
  plugins: [
    /* new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }), */
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.7
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      minimize: true,
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: true,
      extractComments: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /en|us|fr|de|it|es|pr/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks(module, count) {
        var context = module.context
        return context && (context.indexOf('node_modules') >= 0 || context.indexOf('node_modules') >= 0)
      }
    // children: true,
    // chunks: ['vendors'],
    // filename: "vendor.js"
    // (Give the chunk a differe nt name)
    // minChunks: Infinity
    // (with more entries, this ensures that no other module
    //  goes into the vendor chunk)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loaders: ['babel-loader'],
        exclude: /(node_modules|bower_components)/
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
      },
      {
        test: 'fetch',
        use: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('.')
    ]
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
}
