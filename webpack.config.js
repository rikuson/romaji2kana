const path = require('path');

module.exports = {
  entry: {
    dist: './src/index.js',
    docs: './src/index.js',
  },
  output: {
    path: __dirname,
    filename: '[name]/bundle.js',
    library: 'romaji2kana',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        },
      },
    ]
  }
}
