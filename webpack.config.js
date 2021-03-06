const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },

  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'out put managment'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new uglifyJSPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
};