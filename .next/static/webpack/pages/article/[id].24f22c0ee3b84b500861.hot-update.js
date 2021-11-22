webpackHotUpdate_N_E("pages/article/[id]",{

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ \"./node_modules/react-html-parser/lib/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Accordion */ \"./components/Accordion.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Card */ \"./components/Card.js\");\n\n\n\nvar _jsxFileName = \"/Users/rgupta/Documents/GitHub/react-snow/pages/article/[id]/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar reactStringReplace = __webpack_require__(/*! react-string-replace */ \"./node_modules/react-string-replace/index.js\");\n\nvar article = function article(_ref) {\n  var article = _ref.article;\n  var a = article.result.body;\n  var b = reactStringReplace(a, '#%accordion%#', function (match, i) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Accordion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      accordion: article.result\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, _this);\n  });\n  var c = reactStringReplace(b, '##%card%##', function (match, i) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      card: article.result\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: article.result.name_of_page\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      \"class\": \"usa-tag\",\n      children: article.result.sys_updated_on\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), c, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/\",\n      children: \"Go Back\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (article);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS8vaW5kZXguanM/NzBiZCJdLCJuYW1lcyI6WyJyZWFjdFN0cmluZ1JlcGxhY2UiLCJyZXF1aXJlIiwiYXJ0aWNsZSIsImEiLCJyZXN1bHQiLCJib2R5IiwiYiIsIm1hdGNoIiwiaSIsImMiLCJuYW1lX29mX3BhZ2UiLCJzeXNfdXBkYXRlZF9vbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBR0MsbUJBQU8sQ0FBQywwRUFBRCxDQUFsQzs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsdUJBQWlCO0FBQUEsTUFBZEEsT0FBYyxRQUFkQSxPQUFjO0FBQy9CLE1BQUlDLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWVDLElBQXZCO0FBQ0EsTUFBSUMsQ0FBQyxHQUFJTixrQkFBa0IsQ0FBQ0csQ0FBRCxFQUFJLGVBQUosRUFBcUIsVUFBQ0ksS0FBRCxFQUFRQyxDQUFSO0FBQUEsd0JBQzlDLHFFQUFDLDZEQUFEO0FBQVcsZUFBUyxFQUFFTixPQUFPLENBQUNFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEOEM7QUFBQSxHQUFyQixDQUEzQjtBQUdBLE1BQUlLLENBQUMsR0FBSVQsa0JBQWtCLENBQUNNLENBQUQsRUFBSSxZQUFKLEVBQWtCLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLHdCQUMzQyxxRUFBQyx3REFBRDtBQUFNLFVBQUksRUFBRU4sT0FBTyxDQUFDRTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDJDO0FBQUEsR0FBbEIsQ0FBM0I7QUFJQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtGLE9BQU8sQ0FBQ0UsTUFBUixDQUFlTTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFNLGVBQU0sU0FBWjtBQUFBLGdCQUF1QlIsT0FBTyxDQUFDRSxNQUFSLENBQWVPO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUlHRixDQUpILGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUFXRCxDQXBCRDs7O0FBMERlUCxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FydGljbGUvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXJuYW1lLCBwc2QgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTWV0YSdcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIsIHsgcHJvY2Vzc05vZGVzLCBjb252ZXJ0Tm9kZVRvRWxlbWVudCwgaHRtbHBhcnNlcjIgfSBmcm9tICdyZWFjdC1odG1sLXBhcnNlcic7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQWNjb3JkaW9uJztcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZCc7XG5jb25zdCByZWFjdFN0cmluZ1JlcGxhY2UgPSByZXF1aXJlKCdyZWFjdC1zdHJpbmctcmVwbGFjZScpO1xuXG5jb25zdCBhcnRpY2xlID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG4gIGxldCBhID0gYXJ0aWNsZS5yZXN1bHQuYm9keVxuICBsZXQgYiA9IChyZWFjdFN0cmluZ1JlcGxhY2UoYSwgJyMlYWNjb3JkaW9uJSMnLCAobWF0Y2gsIGkpID0+IChcbiAgICA8QWNjb3JkaW9uIGFjY29yZGlvbj17YXJ0aWNsZS5yZXN1bHR9PjwvQWNjb3JkaW9uPlxuKSkpXG4gIGxldCBjID0gKHJlYWN0U3RyaW5nUmVwbGFjZShiLCAnIyMlY2FyZCUjIycsIChtYXRjaCwgaSkgPT4gKFxuICAgIDxDYXJkIGNhcmQ9e2FydGljbGUucmVzdWx0fT48L0NhcmQ+XG4pKSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+e2FydGljbGUucmVzdWx0Lm5hbWVfb2ZfcGFnZX08L2gxPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ1c2EtdGFnXCI+e2FydGljbGUucmVzdWx0LnN5c191cGRhdGVkX29ufTwvc3Bhbj5cbiAgICAgIFxuICAgICAge2N9XG4gICAgICBcbiAgICAgIDxiciAvPlxuICAgICAgPExpbmsgaHJlZj0nLyc+R28gQmFjazwvTGluaz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZXY2OTA2MS5zZXJ2aWNlLW5vdy5jb20vYXBpL25vdy90YWJsZS94XzY4MjUyNl9wYWdlX2J1XzBfY3dpZ19wYWdlX2J1aWxkZXIvJHtjb250ZXh0LnBhcmFtcy5pZH1gLCB7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyAnICsgYnRvYShgJHt1c2VybmFtZX06JHtwc2R9YClcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBhcnRpY2xlID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGUsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2RldjY5MDYxLnNlcnZpY2Utbm93LmNvbS9hcGkvbm93L3RhYmxlL3hfNjgyNTI2X3BhZ2VfYnVfMF9jd2lnX3BhZ2VfYnVpbGRlcmAsIHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgKyBidG9hKGAke3VzZXJuYW1lfToke3BzZH1gKVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnN0IGlkcyA9IGFydGljbGVzLnJlc3VsdC5tYXAoKGFydGljbGUpID0+IGFydGljbGUuc3lzX2lkKVxuICBjb25zdCBwYXRocyA9IGlkcy5tYXAoKGlkKSA9PiAoeyBwYXJhbXM6IHsgaWQ6IGlkLnRvU3RyaW5nKCkgfSB9KSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/article/[id]/index.js\n");

/***/ })

})