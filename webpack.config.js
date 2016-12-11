const path = require('path');

module.exports = {
  entry: {
    app: ['./src/main/entry.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {loader: 'babel-loader', exclude: /node_modules/, test: /\.js[x]?$/},
      {loader: 'babel!ts', exclude: /node_modules/, test: /\.ts[x]?$/}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts']
  }
};