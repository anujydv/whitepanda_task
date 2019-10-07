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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3d3dy9jb25maWcvZXhwcmVzcy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJpc0RldiIsImdldCIsInNldCIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwidXNlIiwiZmlsdGVyIiwicmVxIiwicmVzIiwiaGVhZGVycyIsImNvbXByZXNzaW9uIiwiZXhwcmVzcyIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJzdGF0aWMiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O2VBRWUsa0JBQVVBLEdBQVYsRUFBZTtBQUMxQixNQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsR0FBSixDQUFRLEtBQVIsTUFBbUIsYUFBakM7QUFDQUYsRUFBQUEsR0FBRyxDQUFDRyxHQUFKLENBQVEsT0FBUixFQUFpQkMsY0FBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWpCO0FBQ0FOLEVBQUFBLEdBQUcsQ0FBQ0csR0FBSixDQUFRLGFBQVIsRUFBdUIsS0FBdkI7QUFDQUgsRUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVEsMEJBQVk7QUFDaEJDLElBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDbEIsVUFBSUQsR0FBRyxDQUFDRSxPQUFKLENBQVksa0JBQVosQ0FBSixFQUFxQztBQUNqQyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxhQUFPQyxxQkFBWUosTUFBWixDQUFtQkMsR0FBbkIsRUFBd0JDLEdBQXhCLENBQVA7QUFDSDtBQU5lLEdBQVosQ0FBUjtBQVFBVixFQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUU0saUJBQVFDLFVBQVIsQ0FBbUI7QUFDdkJDLElBQUFBLFFBQVEsRUFBRTtBQURhLEdBQW5CLENBQVI7QUFHQWYsRUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVFNLGlCQUFRRyxJQUFSLEVBQVI7QUFFQWhCLEVBQUFBLEdBQUcsQ0FBQ08sR0FBSixDQUFRTSxpQkFBUUksTUFBUixDQUFlYixjQUFLYyxPQUFMLENBQWFaLFNBQWIsRUFBd0IsT0FBeEIsRUFBaUMsUUFBakMsQ0FBZixDQUFSO0FBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgY29uc3QgaXNEZXYgPSBhcHAuZ2V0KFwiZW52XCIpID09PSBcImRldmVsb3BtZW50XCI7XG4gICAgYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vdmlld3MnKSk7XG4gICAgYXBwLnNldChcInZpZXcgZW5naW5lXCIsIFwiZWpzXCIpO1xuICAgIGFwcC51c2UoY29tcHJlc3Npb24oe1xuICAgICAgICBmaWx0ZXI6IChyZXEsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcS5oZWFkZXJzW1wieC1uby1jb21wcmVzc2lvblwiXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21wcmVzc2lvbi5maWx0ZXIocmVxLCByZXMpO1xuICAgICAgICB9XG4gICAgfSkpO1xuICAgIGFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtcbiAgICAgICAgZXh0ZW5kZWQ6IHRydWVcbiAgICB9KSk7XG4gICAgYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLi5cIiwgXCJwdWJsaWNcIikpKTtcbn1cbiJdfQ==