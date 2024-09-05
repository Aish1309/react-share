"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Login = require("./pages/login/Login");
var _LandingPage = require("./pages/landing/LandingPage");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Routes, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LandingPage.LandingPage, {})
      })
    })
  });
}
var _default = exports.default = App;