const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    index: {
      import: path.resolve(__dirname, "src/index.js"),
      dependOn: "shared",
    },
    support: {
      import: path.resolve(__dirname, "src/support.js"),
      dependOn: "shared",
    },
    hello: path.resolve(__dirname, "src/Hello.js"),
    shared: path.resolve(__dirname, "src/support.js"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
  devtool: false,
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader","css-loader"],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
