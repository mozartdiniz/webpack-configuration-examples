const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'HTML Webpack Plugin',
      version: '1.0.1',
      template: './templates/index.html',
      hash: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8886,
    hot: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
