"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _default = {
  mode: "development",
  entry: {
    "default": (0, _path.resolve)(__dirname, "src/index.js")
  },
  target: "web",
  output: {
    path: (0, _path.resolve)(__dirname, "public/js"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  plugins: [new _webpack.default.optimize.OccurrenceOrderPlugin(), new _webpack.default.NamedModulesPlugin(), new _webpack.default.NoEmitOnErrorsPlugin()],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules | bower_components)/,
      use: [{
        loader: "babel-loader"
      }]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: "file-loader"
    }]
  }
};
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/devil/whitepanda_task/webpack.config.dev.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmRldi5qcyJdLCJuYW1lcyI6WyJtb2RlIiwiZW50cnkiLCJfX2Rpcm5hbWUiLCJ0YXJnZXQiLCJvdXRwdXQiLCJwYXRoIiwicHVibGljUGF0aCIsImZpbGVuYW1lIiwicGx1Z2lucyIsIndlYnBhY2siLCJvcHRpbWl6ZSIsIk9jY3VycmVuY2VPcmRlclBsdWdpbiIsIk5hbWVkTW9kdWxlc1BsdWdpbiIsIk5vRW1pdE9uRXJyb3JzUGx1Z2luIiwibW9kdWxlIiwicnVsZXMiLCJ0ZXN0IiwiZXhjbHVkZSIsInVzZSIsImxvYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7O2VBRWU7QUFDWEEsRUFBQUEsSUFBSSxFQUFFLGFBREs7QUFFWEMsRUFBQUEsS0FBSyxFQUFFO0FBQ0gsZUFBVyxtQkFBUUMsU0FBUixFQUFtQixjQUFuQjtBQURSLEdBRkk7QUFLWEMsRUFBQUEsTUFBTSxFQUFFLEtBTEc7QUFNWEMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLElBQUksRUFBRSxtQkFBUUgsU0FBUixFQUFtQixXQUFuQixDQURGO0FBRUpJLElBQUFBLFVBQVUsRUFBRSxHQUZSO0FBR0pDLElBQUFBLFFBQVEsRUFBRTtBQUhOLEdBTkc7QUFXWEMsRUFBQUEsT0FBTyxFQUFFLENBQ0wsSUFBSUMsaUJBQVFDLFFBQVIsQ0FBaUJDLHFCQUFyQixFQURLLEVBRUwsSUFBSUYsaUJBQVFHLGtCQUFaLEVBRkssRUFHTCxJQUFJSCxpQkFBUUksb0JBQVosRUFISyxDQVhFO0FBZ0JYQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsS0FBSyxFQUFFLENBQ0g7QUFDSUMsTUFBQUEsSUFBSSxFQUFFLE9BRFY7QUFFSUMsTUFBQUEsT0FBTyxFQUFFLG1DQUZiO0FBR0lDLE1BQUFBLEdBQUcsRUFBRSxDQUNEO0FBQ0lDLFFBQUFBLE1BQU0sRUFBRTtBQURaLE9BREM7QUFIVCxLQURHLEVBVUg7QUFDSUgsTUFBQUEsSUFBSSxFQUFFLFFBRFY7QUFDb0JFLE1BQUFBLEdBQUcsRUFBRSxDQUFDLGNBQUQsRUFBaUIsWUFBakI7QUFEekIsS0FWRyxFQWFIO0FBQUVGLE1BQUFBLElBQUksRUFBRSw0QkFBUjtBQUFzQ0UsTUFBQUEsR0FBRyxFQUFFO0FBQTNDLEtBYkc7QUFESDtBQWhCRyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYnBhY2sgZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbW9kZTogXCJkZXZlbG9wbWVudFwiLFxuICAgIGVudHJ5OiB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXguanNcIilcbiAgICB9LFxuICAgIHRhcmdldDogXCJ3ZWJcIixcbiAgICBvdXRwdXQ6IHtcbiAgICAgICAgcGF0aDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwicHVibGljL2pzXCIpLFxuICAgICAgICBwdWJsaWNQYXRoOiBcIi9cIixcbiAgICAgICAgZmlsZW5hbWU6IFwiW25hbWVdLmJ1bmRsZS5qc1wiXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIG5ldyB3ZWJwYWNrLm9wdGltaXplLk9jY3VycmVuY2VPcmRlclBsdWdpbigpLFxuICAgICAgICBuZXcgd2VicGFjay5OYW1lZE1vZHVsZXNQbHVnaW4oKSxcbiAgICAgICAgbmV3IHdlYnBhY2suTm9FbWl0T25FcnJvcnNQbHVnaW4oKVxuICAgIF0sXG4gICAgbW9kdWxlOiB7XG4gICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLmpzJC8sXG4gICAgICAgICAgICAgICAgZXhjbHVkZTogLyhub2RlX21vZHVsZXMgfCBib3dlcl9jb21wb25lbnRzKS8sXG4gICAgICAgICAgICAgICAgdXNlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcjogXCJiYWJlbC1sb2FkZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0OiAvXFwuY3NzJC8sIHVzZTogW1wic3R5bGUtbG9hZGVyXCIsIFwiY3NzLWxvYWRlclwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGVzdDogL1xcLmVvdChcXD92PVxcZCtcXC5cXGQrXFwuXFxkKyk/JC8sIHVzZTogXCJmaWxlLWxvYWRlclwiIH1cbiAgICAgICAgXVxuICAgIH1cbn07Il19