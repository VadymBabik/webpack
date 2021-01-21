const { dirname } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: ["/js/index.js", "/scss/style.scss"],
  //
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
  },
  //
  // devServer: {
  //   contentBase: path.resolve(__dirname, "src/js/"),
  //   //   // compress: true,
  //   port: 9000,
  // },
  //
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      minimize: true,
    }),
  ],
  module: {
    rules: [
      {
        //scss
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { sourceMap: true },
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true },
            },
          ],
          fallback: "style-loader",
        }),
      },
    ],
  },
};
