var webpack = require('webpack');

var env = process.env.NODE_ENV;

var output = {
  libraryTarget: 'var',
  library: 'LsMapComponent',
  filename: 'build/bundles/bundle.js'
};

var plugins = [];

if (env === 'prod' || env === 'production') {
  output.filename = 'build/bundles/bundle.min.js'

  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    mangle: true
  }));
}

module.exports = {
  entry: './src',
  output: output,
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: plugins
}