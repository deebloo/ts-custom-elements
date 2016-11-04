module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './test/index.ts', watched: false}
    ],
    exclude: [],
    preprocessors: {
      './test/index.ts': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        loaders: [{
          test: /\.ts$/,
          exclude: /(node_modules)/,
          loader: 'awesome-typescript-loader'
        }]
      },
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
};