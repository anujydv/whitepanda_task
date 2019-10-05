"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

if (process.env.NODE_ENV === "development") {
  require("@babel/register");
}

var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

_app.default.listen(port, function () {
  console.log("Server running on port: %d", port);
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(port, "port", "/home/devil/whitepanda_task/www/server.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3d3dy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicmVxdWlyZSIsInBvcnQiLCJQT1JUIiwiVkNBUF9BUFBfUE9SVCIsInNlcnZlciIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixhQUE3QixFQUE0QztBQUN4Q0MsRUFBQUEsT0FBTyxDQUFDLGlCQUFELENBQVA7QUFDSDs7QUFFRCxJQUFNQyxJQUFJLEdBQUdKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaLElBQW9CTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssYUFBaEMsSUFBaUQsSUFBOUQ7O0FBR0FDLGFBQU9DLE1BQVAsQ0FBY0osSUFBZCxFQUFvQixZQUFNO0FBQ3RCSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ04sSUFBMUM7QUFDSCxDQUZEOzs7Ozs7Ozs7OzswQkFITUEsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXJ2ZXIgZnJvbSBcIi4vYXBwXCI7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgcmVxdWlyZShcIkBiYWJlbC9yZWdpc3RlclwiKTtcbn1cblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgcHJvY2Vzcy5lbnYuVkNBUF9BUFBfUE9SVCB8fCAzMDAwO1xuXG5cbnNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIHJ1bm5pbmcgb24gcG9ydDogJWRcIiwgcG9ydCk7XG59KTtcbiJdfQ==