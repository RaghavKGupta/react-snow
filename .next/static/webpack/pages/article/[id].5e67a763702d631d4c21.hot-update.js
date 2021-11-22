webpackHotUpdate_N_E("pages/article/[id]",{

/***/ "./components/Accordion.js":
/*!*********************************!*\
  !*** ./components/Accordion.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ \"./node_modules/react-html-parser/lib/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/rgupta/Documents/GitHub/react-snow/components/Accordion.js\",\n    _this = undefined;\n\n\n\n\nfunction display(accordion) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      \"class\": \"usa-accordion__heading\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        \"class\": \"usa-accordion__button\",\n        \"aria-expanded\": \"false\",\n        \"aria-controls\": accordion.index,\n        children: accordion.heading\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: accordion.index,\n      \"class\": \"usa-accordion__content usa-prose\",\n      hidden: true,\n      children: react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(accordion.body)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this)]\n  }, accordion.index, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 17\n  }, this);\n}\n\nfunction getList(accordion) {\n  var b = [];\n\n  for (var index = 1; index <= accordion.number_of_accordions_needed; index++) {\n    b.push({\n      index: \"a\".concat(index),\n      heading: accordion[\"accordion_\".concat(index, \"_heading\")],\n      body: accordion[\"accordion_\".concat(index, \"_body\")]\n    });\n  }\n\n  return b;\n}\n\nvar Accordion = function Accordion(_ref) {\n  var accordion = _ref.accordion;\n  var mapping = getList(accordion);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"usa-accordion\",\n    children: mapping.map(function (x) {\n      return display(x);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\nvar _c;\n\n$RefreshReg$(_c, \"Accordion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanM/M2QxNiJdLCJuYW1lcyI6WyJkaXNwbGF5IiwiYWNjb3JkaW9uIiwiaW5kZXgiLCJoZWFkaW5nIiwiUmVhY3RIdG1sUGFyc2VyIiwiYm9keSIsImdldExpc3QiLCJiIiwibnVtYmVyX29mX2FjY29yZGlvbnNfbmVlZGVkIiwicHVzaCIsIkFjY29yZGlvbiIsIm1hcHBpbmciLCJtYXAiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCO0FBQ3BCLHNCQUFRO0FBQUEsNEJBQ047QUFBSSxlQUFNLHdCQUFWO0FBQUEsNkJBQ0E7QUFBUSxpQkFBTSx1QkFBZDtBQUNFLHlCQUFjLE9BRGhCO0FBRUUseUJBQWVBLFNBQVMsQ0FBQ0MsS0FGM0I7QUFBQSxrQkFHR0QsU0FBUyxDQUFDRTtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE0sZUFRUjtBQUFLLFFBQUUsRUFBRUYsU0FBUyxDQUFDQyxLQUFuQjtBQUEwQixlQUFNLGtDQUFoQztBQUFtRSxZQUFNLE1BQXpFO0FBQUEsZ0JBQ0NFLHdEQUFlLENBQUNILFNBQVMsQ0FBQ0ksSUFBWDtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUlE7QUFBQSxLQUFVSixTQUFTLENBQUNDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQWFQOztBQUVELFNBQVNJLE9BQVQsQ0FBa0JMLFNBQWxCLEVBQTZCO0FBQzdCLE1BQUlNLENBQUMsR0FBRyxFQUFSOztBQUNJLE9BQUssSUFBSUwsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLElBQUlELFNBQVMsQ0FBQ08sMkJBQXZDLEVBQW9FTixLQUFLLEVBQXpFLEVBQTZFO0FBQ3pFSyxLQUFDLENBQUNFLElBQUYsQ0FBTztBQUFDUCxXQUFLLGFBQUtBLEtBQUwsQ0FBTjtBQUFtQkMsYUFBTyxFQUFDRixTQUFTLHFCQUFjQyxLQUFkLGNBQXBDO0FBQW1FRyxVQUFJLEVBQUNKLFNBQVMscUJBQWNDLEtBQWQ7QUFBakYsS0FBUDtBQUNIOztBQUNMLFNBQU9LLENBQVA7QUFDQzs7QUFFRCxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFtQjtBQUFBLE1BQWhCVCxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDakMsTUFBSVUsT0FBTyxHQUFHTCxPQUFPLENBQUNMLFNBQUQsQ0FBckI7QUFDRixzQkFDRTtBQUFLLGFBQU0sZUFBWDtBQUFBLGNBQ0lVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUFDLENBQUM7QUFBQSxhQUFJYixPQUFPLENBQUNhLENBQUQsQ0FBWDtBQUFBLEtBQWI7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQVBEOztLQUFNSCxTO0FBUVNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BY2NvcmRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyLCB7IHByb2Nlc3NOb2RlcywgY29udmVydE5vZGVUb0VsZW1lbnQsIGh0bWxwYXJzZXIyIH0gZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInO1xuXG5mdW5jdGlvbiBkaXNwbGF5KGFjY29yZGlvbikge1xuICAgICAgICByZXR1cm4gKDxkaXYga2V5PXthY2NvcmRpb24uaW5kZXh9PlxuICAgICAgICAgIDxoNCBjbGFzcz1cInVzYS1hY2NvcmRpb25fX2hlYWRpbmdcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidXNhLWFjY29yZGlvbl9fYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXthY2NvcmRpb24uaW5kZXh9PlxuICAgICAgICAgICAge2FjY29yZGlvbi5oZWFkaW5nfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2g0PlxuICAgICAgICA8ZGl2IGlkPXthY2NvcmRpb24uaW5kZXh9IGNsYXNzPVwidXNhLWFjY29yZGlvbl9fY29udGVudCB1c2EtcHJvc2VcIiBoaWRkZW4+XG4gICAgICAgIHtSZWFjdEh0bWxQYXJzZXIoYWNjb3JkaW9uLmJvZHkpfVxuICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPC9kaXY+KVxufVxuXG5mdW5jdGlvbiBnZXRMaXN0IChhY2NvcmRpb24pIHtcbnZhciBiID0gW11cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IGFjY29yZGlvbi5udW1iZXJfb2ZfYWNjb3JkaW9uc19uZWVkZWQ7IGluZGV4KyspIHtcbiAgICAgICAgYi5wdXNoKHtpbmRleDpgYSR7aW5kZXh9YCxoZWFkaW5nOmFjY29yZGlvbltgYWNjb3JkaW9uXyR7aW5kZXh9X2hlYWRpbmdgXSxib2R5OmFjY29yZGlvbltgYWNjb3JkaW9uXyR7aW5kZXh9X2JvZHlgXX0pXG4gICAgfVxucmV0dXJuIGJcbn1cblxuY29uc3QgQWNjb3JkaW9uID0gKHsgYWNjb3JkaW9uIH0pID0+IHtcbiAgICB2YXIgbWFwcGluZyA9IGdldExpc3QoYWNjb3JkaW9uKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJ1c2EtYWNjb3JkaW9uXCI+XG4gICAgICAge21hcHBpbmcubWFwKHggPT4gZGlzcGxheSh4KSl9IFxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Accordion.js\n");

/***/ })

})