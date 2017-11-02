var webpack = require('webpack')
var externals = require('./externals.js')
var path = require('path')
module.exports = {
  entry: {
    'vendors': [path.join(__dirname, './vendors.js')]
  },
  cache: true,
  devtool: 'source-map',
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../../js/'),
    sourceMapFilename: '[name].js.map',
    library: '[name]'
  },
  externals: externals,
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loaders: ['babel-loader'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            query: 'jQuery'
          },
          {
            loader: 'expose-loader',
            query: '$'
          }
        ]
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
        test: require.resolve('moment'),
        use: [
          {
            loader: 'expose-loader',
            query: 'Moment'
          }
        ]
      },
      { test: /foundation\.*\.js$/, use: 'exports-loader?foundation=jQuery.fn.foundation' },
      { test: /foundation\.*\.js$/, use: 'imports-loader?this=>window' }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: './[name]-manifest.json',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /en|us|fr|de|it|es|pr/)
  ]
}
