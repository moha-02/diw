const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/application.js',
  output: {
    filename: 'all.js',
    path: path.resolve(__dirname, 'dist/js/'),
  },
  mode: "production",
  module:{
    rules:[
      {
      test: /\.(css|sass|scss)$/,
      use: ["style-loader","css-loader","sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  
};