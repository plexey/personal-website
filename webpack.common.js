const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./client/index.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
      { test: /\.(jpe?g|png|gif|ico)$/i, loader: "file?name=[name].[ext]" }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Production",
      template: "./client/index.html",
      filename: "index.html",
      inject: "body",
      favicon: "client/favicon.ico"
    })
  ],
  output: {
    filename: "index_bundle.js",
    path: path.resolve("dist"),
    publicPath: "/"
  }
};
