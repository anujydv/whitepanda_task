"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  mode: "production",
  entry: {
    "default": (0, _path.resolve)(__dirname, "src/index.js")
  },
  target: "web",
  output: {
    path: (0, _path.resolve)(__dirname, "public/js"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  optimization: {
    minimize: true
  },
  plugin: [new _webpack.default.optimize.ModuleConcatenationPlugin()],
  module: {
    rules: [{
      test: /\.js$/,
      use: ["babel-loader"]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: "file-loader"
    }]
  }
};
exports.default = _default;