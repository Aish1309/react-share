"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LandingPage = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LandingPage = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "LandingPage"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
      to: "/login",
      children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        children: "Login Page"
      })]
    })]
  });
};
exports.LandingPage = LandingPage;