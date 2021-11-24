webpackHotUpdate_N_E("pages/article/[id]",{

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ \"./node_modules/react-html-parser/lib/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Accordion */ \"./components/Accordion.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Card */ \"./components/Card.js\");\n\n\n\nvar _jsxFileName = \"/Users/rgupta/Documents/GitHub/react-snow/pages/article/[id]/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar reactStringReplace = __webpack_require__(/*! react-string-replace */ \"./node_modules/react-string-replace/index.js\");\n\nvar article = function article(_ref) {\n  var article = _ref.article;\n  var a = article.result.body;\n  var splitText = a.split(/(#.*#)/gm);\n  var b = reactStringReplace(a, '#%accordion%#', function (match, i) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Accordion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      accordion: article.result\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, _this);\n  });\n  var c = reactStringReplace(b, '##%card%##', function (match, i) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      card: article.result\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: article.result.name_of_page\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      \"class\": \"usa-tag\",\n      children: article.result.sys_updated_on\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), splitText.forEach(function (element) {\n      if (element.includes('#%accordion%#')) {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Accordion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          accordion: article.result\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, _this);\n      } else if (element.includes('##%card%##')) {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          card: article.result\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this);\n      } else {\n        react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(element);\n      }\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/\",\n      children: \"Go Back\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (article);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS8vaW5kZXguanM/NzBiZCJdLCJuYW1lcyI6WyJyZWFjdFN0cmluZ1JlcGxhY2UiLCJyZXF1aXJlIiwiYXJ0aWNsZSIsImEiLCJyZXN1bHQiLCJib2R5Iiwic3BsaXRUZXh0Iiwic3BsaXQiLCJiIiwibWF0Y2giLCJpIiwiYyIsIm5hbWVfb2ZfcGFnZSIsInN5c191cGRhdGVkX29uIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmNsdWRlcyIsIlJlYWN0SHRtbFBhcnNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBR0MsbUJBQU8sQ0FBQywwRUFBRCxDQUFsQzs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsdUJBQWlCO0FBQUEsTUFBZEEsT0FBYyxRQUFkQSxPQUFjO0FBQy9CLE1BQUlDLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWVDLElBQXZCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHSCxDQUFDLENBQUNJLEtBQUYsQ0FBUSxVQUFSLENBQWhCO0FBQ0EsTUFBSUMsQ0FBQyxHQUFJUixrQkFBa0IsQ0FBQ0csQ0FBRCxFQUFJLGVBQUosRUFBcUIsVUFBQ00sS0FBRCxFQUFRQyxDQUFSO0FBQUEsd0JBQzlDLHFFQUFDLDZEQUFEO0FBQVcsZUFBUyxFQUFFUixPQUFPLENBQUNFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEOEM7QUFBQSxHQUFyQixDQUEzQjtBQUdBLE1BQUlPLENBQUMsR0FBSVgsa0JBQWtCLENBQUNRLENBQUQsRUFBSSxZQUFKLEVBQWtCLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLHdCQUMzQyxxRUFBQyx3REFBRDtBQUFNLFVBQUksRUFBRVIsT0FBTyxDQUFDRTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDJDO0FBQUEsR0FBbEIsQ0FBM0I7QUFJQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtGLE9BQU8sQ0FBQ0UsTUFBUixDQUFlUTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFNLGVBQU0sU0FBWjtBQUFBLGdCQUF1QlYsT0FBTyxDQUFDRSxNQUFSLENBQWVTO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUlHUCxTQUFTLENBQUNRLE9BQVYsQ0FBa0IsVUFBQUMsT0FBTyxFQUFJO0FBQzlCLFVBQUdBLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixlQUFqQixDQUFILEVBQXFDO0FBQ25DO0FBQUEsNkVBQUMsNkRBQUQ7QUFBVyxtQkFBUyxFQUFFZCxPQUFPLENBQUNFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxPQUZILE1BRVMsSUFBSVcsT0FBTyxDQUFDQyxRQUFSLENBQWlCLFlBQWpCLENBQUosRUFBbUM7QUFDeEM7QUFBQSw2RUFBQyx3REFBRDtBQUFNLGNBQUksRUFBRWQsT0FBTyxDQUFDRTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0QsT0FGTSxNQUVBO0FBQ0xhLGdFQUFlLENBQUNGLE9BQUQsQ0FBZjtBQUNEO0FBQ0YsS0FSQSxDQUpILGVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGLGVBZUUscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUEsa0JBREY7QUFtQkQsQ0E3QkQ7OztBQW1FZWIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VybmFtZSwgcHNkIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01ldGEnXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyLCB7IHByb2Nlc3NOb2RlcywgY29udmVydE5vZGVUb0VsZW1lbnQsIGh0bWxwYXJzZXIyIH0gZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0FjY29yZGlvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0NhcmQnO1xuY29uc3QgcmVhY3RTdHJpbmdSZXBsYWNlID0gcmVxdWlyZSgncmVhY3Qtc3RyaW5nLXJlcGxhY2UnKTtcblxuY29uc3QgYXJ0aWNsZSA9ICh7IGFydGljbGUgfSkgPT4ge1xuICBsZXQgYSA9IGFydGljbGUucmVzdWx0LmJvZHlcbiAgbGV0IHNwbGl0VGV4dCA9IGEuc3BsaXQoLygjLiojKS9nbSlcbiAgbGV0IGIgPSAocmVhY3RTdHJpbmdSZXBsYWNlKGEsICcjJWFjY29yZGlvbiUjJywgKG1hdGNoLCBpKSA9PiAoXG4gICAgPEFjY29yZGlvbiBhY2NvcmRpb249e2FydGljbGUucmVzdWx0fT48L0FjY29yZGlvbj5cbikpKVxuICBsZXQgYyA9IChyZWFjdFN0cmluZ1JlcGxhY2UoYiwgJyMjJWNhcmQlIyMnLCAobWF0Y2gsIGkpID0+IChcbiAgICA8Q2FyZCBjYXJkPXthcnRpY2xlLnJlc3VsdH0+PC9DYXJkPlxuKSkpIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT57YXJ0aWNsZS5yZXN1bHQubmFtZV9vZl9wYWdlfTwvaDE+XG4gICAgICA8c3BhbiBjbGFzcz1cInVzYS10YWdcIj57YXJ0aWNsZS5yZXN1bHQuc3lzX3VwZGF0ZWRfb259PC9zcGFuPlxuICAgICBcbiAgICAgIHtzcGxpdFRleHQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmKGVsZW1lbnQuaW5jbHVkZXMoJyMlYWNjb3JkaW9uJSMnKSl7XG4gICAgICAgIDxBY2NvcmRpb24gYWNjb3JkaW9uPXthcnRpY2xlLnJlc3VsdH0+PC9BY2NvcmRpb24+XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5pbmNsdWRlcygnIyMlY2FyZCUjIycpKXtcbiAgICAgICAgICA8Q2FyZCBjYXJkPXthcnRpY2xlLnJlc3VsdH0+PC9DYXJkPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJlYWN0SHRtbFBhcnNlcihlbGVtZW50KVxuICAgICAgICB9XG4gICAgICB9KX1cbiAgICAgIFxuICAgICAgPGJyIC8+XG4gICAgICA8TGluayBocmVmPScvJz5HbyBCYWNrPC9MaW5rPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2RldjY5MDYxLnNlcnZpY2Utbm93LmNvbS9hcGkvbm93L3RhYmxlL3hfNjgyNTI2X3BhZ2VfYnVfMF9jd2lnX3BhZ2VfYnVpbGRlci8ke2NvbnRleHQucGFyYW1zLmlkfWAsIHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgKyBidG9hKGAke3VzZXJuYW1lfToke3BzZH1gKVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGFydGljbGUgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZSxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGV2NjkwNjEuc2VydmljZS1ub3cuY29tL2FwaS9ub3cvdGFibGUveF82ODI1MjZfcGFnZV9idV8wX2N3aWdfcGFnZV9idWlsZGVyYCwge1xuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArIGJ0b2EoYCR7dXNlcm5hbWV9OiR7cHNkfWApXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc3QgaWRzID0gYXJ0aWNsZXMucmVzdWx0Lm1hcCgoYXJ0aWNsZSkgPT4gYXJ0aWNsZS5zeXNfaWQpXG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcCgoaWQpID0+ICh7IHBhcmFtczogeyBpZDogaWQudG9TdHJpbmcoKSB9IH0pKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/article/[id]/index.js\n");

/***/ })

})