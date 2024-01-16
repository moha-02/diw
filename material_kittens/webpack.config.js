const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/js/application.js',
  output: {
    filename: 'all.js',
    path: path.resolve(__dirname, 'dist/js/'),
    
  },
  mode: "production",
  module:{
    rules:[
      {
        test: /\.(scss)$/,
        use: [
          miniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new miniCssExtractPlugin()
  ],
  
};