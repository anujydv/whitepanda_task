"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = require("http");

var _express = _interopRequireDefault(require("express"));

var _express2 = _interopRequireDefault(require("./config/express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var app = (0, _express.default)();
var httpServer = new _http.Server(app);
(0, _express2.default)(app);
app.get("/", function (req, res) {
  res.render("default");
});
var _default = httpServer;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "/home/devil/my_repo/whitepanda_task/www/app.js");
  reactHotLoader.register(httpServer, "httpServer", "/home/devil/my_repo/whitepanda_task/www/app.js");
  reactHotLoader.register(_default, "default", "/home/devil/my_repo/whitepanda_task/www/app.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3d3dy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwiaHR0cFNlcnZlciIsIlNlcnZlciIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLHVCQUFaO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLElBQUlDLFlBQUosQ0FBV0YsR0FBWCxDQUFuQjtBQUVBLHVCQUFpQkEsR0FBakI7QUFFQUEsR0FBRyxDQUFDRyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3ZCQSxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxTQUFYO0FBQ0gsQ0FGRDtlQUllTCxVOzs7Ozs7Ozs7Ozs7MEJBVFRELEc7MEJBQ0FDLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb25maWd1cmVFeHByZXNzIGZyb20gXCIuL2NvbmZpZy9leHByZXNzXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IGh0dHBTZXJ2ZXIgPSBuZXcgU2VydmVyKGFwcCk7XG5cbmNvbmZpZ3VyZUV4cHJlc3MoYXBwKTtcblxuYXBwLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnJlbmRlcihcImRlZmF1bHRcIik7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cFNlcnZlcjtcbiJdfQ==