const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'bin'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      Services: path.resolve(__dirname, 'src/services'),
      Components: path.resolve(__dirname, 'src/components'),
      Routes: path.resolve(__dirname, 'src/routes'),
      Assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.scss$/, loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/, loader: 'file-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/assets/images/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
