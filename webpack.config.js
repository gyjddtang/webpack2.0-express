/**
 * Created by Mili on 2017/6/19.
 */

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/main.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dis')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'index.css'
    }),

    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
