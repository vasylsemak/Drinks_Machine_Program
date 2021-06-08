const path = require('path')

module.exports = {
  entry : "./client/main.js",
  output : {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  }
}
