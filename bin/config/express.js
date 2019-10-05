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
  app.use(_express.default.static(_path.default.resolve(__dirname, "../..", "public")));
  var webpackConfig = isDev ? require("../webpack.config.dev").default : require("../webpack.config.prod").default;

  if (isDev) {
    var webpack = require("webpack");

    var compiler = webpack(webpackConfig);
    app.use(require("webpack-dev-middleware")(compiler, {
      noInfo: false,
      publicPath: webpackConfig.output.publicPath
    }));
    app.use(require("webpack-hot-middleware")(compiler));
  } else {
    console.log(webpackConfig.output.path);
    app.use(_express.default.static(webpackConfig.output.path));
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

  reactHotLoader.register(_default, "default", "/home/devil/whitepanda_task/www/config/express.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3d3dy9jb25maWcvZXhwcmVzcy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJpc0RldiIsImdldCIsInNldCIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwidXNlIiwiZmlsdGVyIiwicmVxIiwicmVzIiwiaGVhZGVycyIsImNvbXByZXNzaW9uIiwiZXhwcmVzcyIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJzdGF0aWMiLCJyZXNvbHZlIiwid2VicGFja0NvbmZpZyIsInJlcXVpcmUiLCJkZWZhdWx0Iiwid2VicGFjayIsImNvbXBpbGVyIiwibm9JbmZvIiwicHVibGljUGF0aCIsIm91dHB1dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7ZUFFZSxrQkFBVUEsR0FBVixFQUFlO0FBQzFCLE1BQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxHQUFKLENBQVEsS0FBUixNQUFtQixhQUFqQztBQUNBRixFQUFBQSxHQUFHLENBQUNHLEdBQUosQ0FBUSxPQUFSLEVBQWlCQyxjQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsYUFBckIsQ0FBakI7QUFDQU4sRUFBQUEsR0FBRyxDQUFDRyxHQUFKLENBQVEsYUFBUixFQUF1QixLQUF2QjtBQUNBSCxFQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUSwwQkFBWTtBQUNoQkMsSUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNsQixVQUFJRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxrQkFBWixDQUFKLEVBQXFDO0FBQ2pDLGVBQU8sS0FBUDtBQUNIOztBQUNELGFBQU9DLHFCQUFZSixNQUFaLENBQW1CQyxHQUFuQixFQUF3QkMsR0FBeEIsQ0FBUDtBQUNIO0FBTmUsR0FBWixDQUFSO0FBUUFWLEVBQUFBLEdBQUcsQ0FBQ08sR0FBSixDQUFRTSxpQkFBUUMsVUFBUixDQUFtQjtBQUN2QkMsSUFBQUEsUUFBUSxFQUFFO0FBRGEsR0FBbkIsQ0FBUjtBQUdBZixFQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUU0saUJBQVFHLElBQVIsRUFBUjtBQUVBaEIsRUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVFNLGlCQUFRSSxNQUFSLENBQWViLGNBQUtjLE9BQUwsQ0FBYVosU0FBYixFQUF3QixPQUF4QixFQUFpQyxRQUFqQyxDQUFmLENBQVI7QUFDQSxNQUFNYSxhQUFhLEdBQUdsQixLQUFLLEdBQUdtQixPQUFPLENBQUMsdUJBQUQsQ0FBUCxDQUFpQ0MsT0FBcEMsR0FBOENELE9BQU8sQ0FBQyx3QkFBRCxDQUFQLENBQWtDQyxPQUEzRzs7QUFDQSxNQUFJcEIsS0FBSixFQUFXO0FBQ1AsUUFBTXFCLE9BQU8sR0FBR0YsT0FBTyxDQUFDLFNBQUQsQ0FBdkI7O0FBQ0EsUUFBTUcsUUFBUSxHQUFHRCxPQUFPLENBQUNILGFBQUQsQ0FBeEI7QUFDQW5CLElBQUFBLEdBQUcsQ0FBQ08sR0FBSixDQUFRYSxPQUFPLENBQUMsd0JBQUQsQ0FBUCxDQUFrQ0csUUFBbEMsRUFBNEM7QUFDaERDLE1BQUFBLE1BQU0sRUFBRSxLQUR3QztBQUVoREMsTUFBQUEsVUFBVSxFQUFFTixhQUFhLENBQUNPLE1BQWQsQ0FBcUJEO0FBRmUsS0FBNUMsQ0FBUjtBQUlBekIsSUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVFhLE9BQU8sQ0FBQyx3QkFBRCxDQUFQLENBQWtDRyxRQUFsQyxDQUFSO0FBQ0gsR0FSRCxNQVFPO0FBQ0hJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxhQUFhLENBQUNPLE1BQWQsQ0FBcUJ0QixJQUFqQztBQUNBSixJQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUU0saUJBQVFJLE1BQVIsQ0FBZUUsYUFBYSxDQUFDTyxNQUFkLENBQXFCdEIsSUFBcEMsQ0FBUjtBQUNIO0FBQ0osQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgY29uc3QgaXNEZXYgPSBhcHAuZ2V0KFwiZW52XCIpID09PSBcImRldmVsb3BtZW50XCI7XG4gICAgYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vdmlld3MnKSk7XG4gICAgYXBwLnNldChcInZpZXcgZW5naW5lXCIsIFwiZWpzXCIpO1xuICAgIGFwcC51c2UoY29tcHJlc3Npb24oe1xuICAgICAgICBmaWx0ZXI6IChyZXEsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcS5oZWFkZXJzW1wieC1uby1jb21wcmVzc2lvblwiXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21wcmVzc2lvbi5maWx0ZXIocmVxLCByZXMpO1xuICAgICAgICB9XG4gICAgfSkpO1xuICAgIGFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtcbiAgICAgICAgZXh0ZW5kZWQ6IHRydWVcbiAgICB9KSk7XG4gICAgYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLi5cIiwgXCJwdWJsaWNcIikpKTtcbiAgICBjb25zdCB3ZWJwYWNrQ29uZmlnID0gaXNEZXYgPyByZXF1aXJlKFwiLi4vd2VicGFjay5jb25maWcuZGV2XCIpLmRlZmF1bHQgOiByZXF1aXJlKFwiLi4vd2VicGFjay5jb25maWcucHJvZFwiKS5kZWZhdWx0O1xuICAgIGlmIChpc0Rldikge1xuICAgICAgICBjb25zdCB3ZWJwYWNrID0gcmVxdWlyZShcIndlYnBhY2tcIik7XG4gICAgICAgIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayh3ZWJwYWNrQ29uZmlnKTtcbiAgICAgICAgYXBwLnVzZShyZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKShjb21waWxlciwge1xuICAgICAgICAgICAgbm9JbmZvOiBmYWxzZSxcbiAgICAgICAgICAgIHB1YmxpY1BhdGg6IHdlYnBhY2tDb25maWcub3V0cHV0LnB1YmxpY1BhdGhcbiAgICAgICAgfSkpO1xuICAgICAgICBhcHAudXNlKHJlcXVpcmUoXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlXCIpKGNvbXBpbGVyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cod2VicGFja0NvbmZpZy5vdXRwdXQucGF0aCk7XG4gICAgICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMod2VicGFja0NvbmZpZy5vdXRwdXQucGF0aCkpO1xuICAgIH1cbn1cbiJdfQ==