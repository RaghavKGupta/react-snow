webpackHotUpdate_N_E("pages/article/[id]",{

/***/ "./components/Accordion.js":
/*!*********************************!*\
  !*** ./components/Accordion.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ \"./node_modules/react-html-parser/lib/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/rgupta/Documents/GitHub/react-snow/components/Accordion.js\",\n    _this = undefined;\n\n\n\n\nfunction display(accordion) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        \"class\": \"usa-accordion__heading\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          \"class\": \"usa-accordion__button\",\n          \"aria-expanded\": \"false\",\n          \"aria-controls\": accordion.index,\n          children: accordion.heading\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: accordion.index,\n        \"class\": \"usa-accordion__content usa-prose\",\n        hidden: true,\n        children: react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(accordion.body)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 7\n      }, this)]\n    }, accordion.index, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\nfunction getList(accordion) {\n  var b = [];\n\n  for (var index = 1; index <= accordion.number_of_accordions_needed; index++) {\n    b.push({\n      index: \"a\".concat(index),\n      heading: accordion[\"accordion_\".concat(index, \"_heading\")],\n      body: accordion[\"accordion_\".concat(index, \"_body\")]\n    });\n  }\n\n  return b;\n}\n\nvar Accordion = function Accordion(_ref) {\n  var accordion = _ref.accordion;\n  var mapping = getList(accordion);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"usa-accordion\",\n    children: mapping.map(function (x) {\n      return display(x);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\nvar _c;\n\n$RefreshReg$(_c, \"Accordion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanM/M2QxNiJdLCJuYW1lcyI6WyJkaXNwbGF5IiwiYWNjb3JkaW9uIiwiaW5kZXgiLCJoZWFkaW5nIiwiUmVhY3RIdG1sUGFyc2VyIiwiYm9keSIsImdldExpc3QiLCJiIiwibnVtYmVyX29mX2FjY29yZGlvbnNfbmVlZGVkIiwicHVzaCIsIkFjY29yZGlvbiIsIm1hcHBpbmciLCJtYXAiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxTQUFqQixFQUE0QjtBQUNwQixzQkFBTztBQUFBLDJCQUNQO0FBQUEsOEJBQ0E7QUFBSSxpQkFBTSx3QkFBVjtBQUFBLCtCQUNBO0FBQVEsbUJBQU0sdUJBQWQ7QUFDRSwyQkFBYyxPQURoQjtBQUVFLDJCQUFlQSxTQUFTLENBQUNDLEtBRjNCO0FBQUEsb0JBR0dELFNBQVMsQ0FBQ0U7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBUUY7QUFBSyxVQUFFLEVBQUVGLFNBQVMsQ0FBQ0MsS0FBbkI7QUFBMEIsaUJBQU0sa0NBQWhDO0FBQW1FLGNBQU0sTUFBekU7QUFBQSxrQkFDQ0Usd0RBQWUsQ0FBQ0gsU0FBUyxDQUFDSSxJQUFYO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRTtBQUFBLE9BQVVKLFNBQVMsQ0FBQ0MsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURPLG1CQUFQO0FBY1A7O0FBRUQsU0FBU0ksT0FBVCxDQUFrQkwsU0FBbEIsRUFBNkI7QUFDN0IsTUFBSU0sQ0FBQyxHQUFHLEVBQVI7O0FBQ0ksT0FBSyxJQUFJTCxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssSUFBSUQsU0FBUyxDQUFDTywyQkFBdkMsRUFBb0VOLEtBQUssRUFBekUsRUFBNkU7QUFDekVLLEtBQUMsQ0FBQ0UsSUFBRixDQUFPO0FBQUNQLFdBQUssYUFBS0EsS0FBTCxDQUFOO0FBQW1CQyxhQUFPLEVBQUNGLFNBQVMscUJBQWNDLEtBQWQsY0FBcEM7QUFBbUVHLFVBQUksRUFBQ0osU0FBUyxxQkFBY0MsS0FBZDtBQUFqRixLQUFQO0FBQ0g7O0FBQ0wsU0FBT0ssQ0FBUDtBQUNDOztBQUVELElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQW1CO0FBQUEsTUFBaEJULFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNqQyxNQUFJVSxPQUFPLEdBQUdMLE9BQU8sQ0FBQ0wsU0FBRCxDQUFyQjtBQUNGLHNCQUNFO0FBQUssYUFBTSxlQUFYO0FBQUEsY0FDSVUsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQUMsQ0FBQztBQUFBLGFBQUliLE9BQU8sQ0FBQ2EsQ0FBRCxDQUFYO0FBQUEsS0FBYjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBUEQ7O0tBQU1ILFM7QUFRU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjY29yZGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIsIHsgcHJvY2Vzc05vZGVzLCBjb252ZXJ0Tm9kZVRvRWxlbWVudCwgaHRtbHBhcnNlcjIgfSBmcm9tICdyZWFjdC1odG1sLXBhcnNlcic7XG5cbmZ1bmN0aW9uIGRpc3BsYXkoYWNjb3JkaW9uKSB7XG4gICAgICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGtleT17YWNjb3JkaW9uLmluZGV4fT5cbiAgICAgICAgPGg0IGNsYXNzPVwidXNhLWFjY29yZGlvbl9faGVhZGluZ1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidXNhLWFjY29yZGlvbl9fYnV0dG9uXCJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9e2FjY29yZGlvbi5pbmRleH0+XG4gICAgICAgICAge2FjY29yZGlvbi5oZWFkaW5nfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvaDQ+XG4gICAgICA8ZGl2IGlkPXthY2NvcmRpb24uaW5kZXh9IGNsYXNzPVwidXNhLWFjY29yZGlvbl9fY29udGVudCB1c2EtcHJvc2VcIiBoaWRkZW4+XG4gICAgICB7UmVhY3RIdG1sUGFyc2VyKGFjY29yZGlvbi5ib2R5KX1cbiAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gXG4gICAgICA8Lz5cbn1cblxuZnVuY3Rpb24gZ2V0TGlzdCAoYWNjb3JkaW9uKSB7XG52YXIgYiA9IFtdXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBhY2NvcmRpb24ubnVtYmVyX29mX2FjY29yZGlvbnNfbmVlZGVkOyBpbmRleCsrKSB7XG4gICAgICAgIGIucHVzaCh7aW5kZXg6YGEke2luZGV4fWAsaGVhZGluZzphY2NvcmRpb25bYGFjY29yZGlvbl8ke2luZGV4fV9oZWFkaW5nYF0sYm9keTphY2NvcmRpb25bYGFjY29yZGlvbl8ke2luZGV4fV9ib2R5YF19KVxuICAgIH1cbnJldHVybiBiXG59XG5cbmNvbnN0IEFjY29yZGlvbiA9ICh7IGFjY29yZGlvbiB9KSA9PiB7XG4gICAgdmFyIG1hcHBpbmcgPSBnZXRMaXN0KGFjY29yZGlvbilcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwidXNhLWFjY29yZGlvblwiPlxuICAgICAgIHttYXBwaW5nLm1hcCh4ID0+IGRpc3BsYXkoeCkpfSBcbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Accordion.js\n");

/***/ })

})