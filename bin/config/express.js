"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.join");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _compression = _interopRequireDefault(require("compression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _default = function _default(app) {
  var isDev = app.get("env") === "development";
  app.set('views', _path.default.join(__dirname, '../../views'));
  app.set("view engine", "ejs");
  app.use((0, _compression.default)({
    filter: function filter(req, res) {
      if (req.headers["x-no-compression"]) {
        return false;
      }

      return _compression.default.filter(req, res);
    }
  }));
  app.use(_express.default.urlencoded({
    extended: true
  }));
  app.use(_express.default.json());
  app.use(_express.default.static(_path.default.resolve(__dirname, "../..", "public"))); // const webpackConfig = isDev ? require("../webpack.config.dev").default : require("../webpack.config.prod").default;
  // if (isDev) {
  //     const webpack = require("webpack");
  //     const compiler = webpack(webpackConfig);
  //     app.use(require("webpack-dev-middleware")(compiler, {
  //         noInfo: false,
  //         publicPath: webpackConfig.output.publicPath
  //     }));
  //     app.use(require("webpack-hot-middleware")(compiler));
  // } else {
  //     console.log(webpackConfig.output.path);
  //     app.use(express.static(webpackConfig.output.path));
  // }
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/devil/whitepanda_task/www/config/express.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3d3dy9jb25maWcvZXhwcmVzcy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJpc0RldiIsImdldCIsInNldCIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwidXNlIiwiZmlsdGVyIiwicmVxIiwicmVzIiwiaGVhZGVycyIsImNvbXByZXNzaW9uIiwiZXhwcmVzcyIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJzdGF0aWMiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O2VBRWUsa0JBQVVBLEdBQVYsRUFBZTtBQUMxQixNQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsR0FBSixDQUFRLEtBQVIsTUFBbUIsYUFBakM7QUFDQUYsRUFBQUEsR0FBRyxDQUFDRyxHQUFKLENBQVEsT0FBUixFQUFpQkMsY0FBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWpCO0FBQ0FOLEVBQUFBLEdBQUcsQ0FBQ0csR0FBSixDQUFRLGFBQVIsRUFBdUIsS0FBdkI7QUFDQUgsRUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVEsMEJBQVk7QUFDaEJDLElBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDbEIsVUFBSUQsR0FBRyxDQUFDRSxPQUFKLENBQVksa0JBQVosQ0FBSixFQUFxQztBQUNqQyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxhQUFPQyxxQkFBWUosTUFBWixDQUFtQkMsR0FBbkIsRUFBd0JDLEdBQXhCLENBQVA7QUFDSDtBQU5lLEdBQVosQ0FBUjtBQVFBVixFQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUU0saUJBQVFDLFVBQVIsQ0FBbUI7QUFDdkJDLElBQUFBLFFBQVEsRUFBRTtBQURhLEdBQW5CLENBQVI7QUFHQWYsRUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVFNLGlCQUFRRyxJQUFSLEVBQVI7QUFFQWhCLEVBQUFBLEdBQUcsQ0FBQ08sR0FBSixDQUFRTSxpQkFBUUksTUFBUixDQUFlYixjQUFLYyxPQUFMLENBQWFaLFNBQWIsRUFBd0IsT0FBeEIsRUFBaUMsUUFBakMsQ0FBZixDQUFSLEVBakIwQixDQWtCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICBjb25zdCBpc0RldiA9IGFwcC5nZXQoXCJlbnZcIikgPT09IFwiZGV2ZWxvcG1lbnRcIjtcbiAgICBhcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi92aWV3cycpKTtcbiAgICBhcHAuc2V0KFwidmlldyBlbmdpbmVcIiwgXCJlanNcIik7XG4gICAgYXBwLnVzZShjb21wcmVzc2lvbih7XG4gICAgICAgIGZpbHRlcjogKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVxLmhlYWRlcnNbXCJ4LW5vLWNvbXByZXNzaW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXByZXNzaW9uLmZpbHRlcihyZXEsIHJlcyk7XG4gICAgICAgIH1cbiAgICB9KSk7XG4gICAgYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoe1xuICAgICAgICBleHRlbmRlZDogdHJ1ZVxuICAgIH0pKTtcbiAgICBhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcblxuICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi8uLlwiLCBcInB1YmxpY1wiKSkpO1xuICAgIC8vIGNvbnN0IHdlYnBhY2tDb25maWcgPSBpc0RldiA/IHJlcXVpcmUoXCIuLi93ZWJwYWNrLmNvbmZpZy5kZXZcIikuZGVmYXVsdCA6IHJlcXVpcmUoXCIuLi93ZWJwYWNrLmNvbmZpZy5wcm9kXCIpLmRlZmF1bHQ7XG4gICAgLy8gaWYgKGlzRGV2KSB7XG4gICAgLy8gICAgIGNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKFwid2VicGFja1wiKTtcbiAgICAvLyAgICAgY29uc3QgY29tcGlsZXIgPSB3ZWJwYWNrKHdlYnBhY2tDb25maWcpO1xuICAgIC8vICAgICBhcHAudXNlKHJlcXVpcmUoXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIpKGNvbXBpbGVyLCB7XG4gICAgLy8gICAgICAgICBub0luZm86IGZhbHNlLFxuICAgIC8vICAgICAgICAgcHVibGljUGF0aDogd2VicGFja0NvbmZpZy5vdXRwdXQucHVibGljUGF0aFxuICAgIC8vICAgICB9KSk7XG4gICAgLy8gICAgIGFwcC51c2UocmVxdWlyZShcIndlYnBhY2staG90LW1pZGRsZXdhcmVcIikoY29tcGlsZXIpKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh3ZWJwYWNrQ29uZmlnLm91dHB1dC5wYXRoKTtcbiAgICAvLyAgICAgYXBwLnVzZShleHByZXNzLnN0YXRpYyh3ZWJwYWNrQ29uZmlnLm91dHB1dC5wYXRoKSk7XG4gICAgLy8gfVxufVxuIl19