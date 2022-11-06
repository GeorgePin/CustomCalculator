// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(png|jpg)/,
        type: "asset/resource",
        generator: {
          filename: "./src/static/images/[name][ext][query]",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
