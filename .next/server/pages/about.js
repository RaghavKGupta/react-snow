module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/rgupta/Documents/GitHub/react-snow/components/Meta.js\";\n\n\nconst Meta = ({\n  title,\n  keywords,\n  description\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"keywords\",\n      content: keywords\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      charSet: \"utf-8\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      href: \"/favicon.ico\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n      src: \"../js/uswds-init.min.js\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"stylesheet\",\n      href: \"../css/uswds.min.css\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\nMeta.defaultProps = {\n  title: 'Demo for CWIG',\n  keywords: 'SEE, CWIG',\n  description: 'some text here'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meta);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01ldGEuanM/NGMzNSJdLCJuYW1lcyI6WyJNZXRhIiwidGl0bGUiLCJrZXl3b3JkcyIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxVQUFUO0FBQW1CQztBQUFuQixDQUFELEtBQXNDO0FBQ2pELHNCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNEJBQ0U7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsYUFBTyxFQUFFRDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUVDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFNLGFBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRTtBQUFNLFNBQUcsRUFBQyxNQUFWO0FBQWlCLFVBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBT0E7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQSxlQVFFO0FBQUEsZ0JBQVFGO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBYkQ7O0FBZUFELElBQUksQ0FBQ0ksWUFBTCxHQUFvQjtBQUNsQkgsT0FBSyxFQUFFLGVBRFc7QUFFbEJDLFVBQVEsRUFBRSxXQUZRO0FBR2xCQyxhQUFXLEVBQUU7QUFISyxDQUFwQjtBQU1lSCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWV0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgTWV0YSA9ICh7IHRpdGxlLCBrZXl3b3JkcywgZGVzY3JpcHRpb24gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgPG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9e2tleXdvcmRzfSAvPlxuICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvdXN3ZHMtaW5pdC5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2Nzcy91c3dkcy5taW4uY3NzXCIgLz5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gIClcbn1cblxuTWV0YS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiAnRGVtbyBmb3IgQ1dJRycsXG4gIGtleXdvcmRzOiAnU0VFLCBDV0lHJyxcbiAgZGVzY3JpcHRpb246ICdzb21lIHRleHQgaGVyZScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Meta.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n\nvar _jsxFileName = \"/Users/rgupta/Documents/GitHub/react-snow/pages/about.js\";\n\n\nconst about = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    class: \"usa-d-flex justify-content-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Meta__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: \"About\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"About CBX\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n          children: \"Children's Bureau Express\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 10\n        }, undefined), \" (CBX) covers news, issues, and trends of interest to professionals and policymakers in the interrelated fields of child abuse and neglect, child welfare, and adoption. Visit CBX to gain:\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          class: \"blue_dot\",\n          children: \"Context and perspective on the implementation of Federal legislation related to child safety, permanency, and well-being\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 5\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          class: \"blue_dot\",\n          children: \"Awareness of best practices and training materials\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 5\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          class: \"blue_dot\",\n          children: \"Insights into trends and emerging issues\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 5\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          class: \"blue_dot\",\n          children: \"Access to a community of your peers\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 5\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          class: \"blue_dot\",\n          children: \"Access to and updates on the resources of Child Welfare Information Gateway and the Children's Bureau's network of national Child Welfare Resource Centers.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 5\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Whenever possible, articles include links to full-text documents, online ordering services, related stories or resources, and other relevant sites. If you are viewing CBX via the Internet, just click on the highlighted link that you would like to follow. If you follow a link, you can always easily return to CBX. We also include the full web address for all links.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Printing and Emailing Articles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"You always have the following options available:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Print a printer-friendly version of an issue.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"This option prints each article without the menus and other graphics visible on the website.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 5\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Email an issue to a colleague and include a personalized message. You just need your recipient's email address.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 5\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Make a suggestion to CBX\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Send us a private email to \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"mailto:cb_express@childwelfare.gov\",\n          children: \"\\\"Make a Suggestion\\\"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 39\n        }, undefined), \".\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbImFib3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNsQixzQkFDRTtBQUFLLFNBQUssRUFBQyxtQ0FBWDtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQU0sV0FBSyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFBLGdDQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxlQUtNO0FBQUEsZ0NBQ1I7QUFBSSxlQUFLLEVBQUMsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUSxlQUdSO0FBQUksZUFBSyxFQUFDLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSFEsZUFJUjtBQUFJLGVBQUssRUFBQyxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpRLGVBS1I7QUFBSSxlQUFLLEVBQUMsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMUSxlQU1SO0FBQUksZUFBSyxFQUFDLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxOLGVBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBc0JFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBQSxnQ0FDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESSxlQUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGLGVBZ0NFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLCtEQUE4QjtBQUFHLGNBQUksRUFBQyxvQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5Q0QsQ0ExQ0Q7O0FBNENlQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhJ1xuXG5jb25zdCBhYm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwidXNhLWQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8TWV0YSB0aXRsZT0nQWJvdXQnIC8+XG4gICAgICA8ZGl2PlxuICAgICAgPGgxPkFib3V0IENCWDwvaDE+XG4gICAgICA8cD48ZW0+Q2hpbGRyZW4ncyBCdXJlYXUgRXhwcmVzczwvZW0+IChDQlgpIGNvdmVycyBuZXdzLCBpc3N1ZXMsIGFuZCB0cmVuZHMgb2ZcbiAgICAgICAgICAgIGludGVyZXN0IHRvIHByb2Zlc3Npb25hbHMgYW5kIHBvbGljeW1ha2VycyBpbiB0aGUgaW50ZXJyZWxhdGVkIGZpZWxkcyBvZlxuICAgICAgICAgICAgY2hpbGQgYWJ1c2UgYW5kIG5lZ2xlY3QsIGNoaWxkIHdlbGZhcmUsIGFuZCBhZG9wdGlvbi4gVmlzaXQgQ0JYIHRvIGdhaW46PC9wPlxuICAgICAgICAgICAgPHVsPlxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJibHVlX2RvdFwiPkNvbnRleHQgYW5kIHBlcnNwZWN0aXZlIG9uIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiBGZWRlcmFsXG5sZWdpc2xhdGlvbiByZWxhdGVkIHRvIGNoaWxkIHNhZmV0eSwgcGVybWFuZW5jeSwgYW5kIHdlbGwtYmVpbmc8L2xpPlxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJibHVlX2RvdFwiPkF3YXJlbmVzcyBvZiBiZXN0IHByYWN0aWNlcyBhbmQgdHJhaW5pbmcgbWF0ZXJpYWxzPC9saT5cblx0XHRcdFx0PGxpIGNsYXNzPVwiYmx1ZV9kb3RcIj5JbnNpZ2h0cyBpbnRvIHRyZW5kcyBhbmQgZW1lcmdpbmcgaXNzdWVzPC9saT5cblx0XHRcdFx0PGxpIGNsYXNzPVwiYmx1ZV9kb3RcIj5BY2Nlc3MgdG8gYSBjb21tdW5pdHkgb2YgeW91ciBwZWVyczwvbGk+XG5cdFx0XHRcdDxsaSBjbGFzcz1cImJsdWVfZG90XCI+QWNjZXNzIHRvIGFuZCB1cGRhdGVzIG9uIHRoZSByZXNvdXJjZXMgb2YgQ2hpbGQgV2VsZmFyZSBJbmZvcm1hdGlvbiBHYXRld2F5IGFuZCB0aGUgQ2hpbGRyZW4ncyBCdXJlYXUncyBuZXR3b3JrIG9mXG5uYXRpb25hbCBDaGlsZCBXZWxmYXJlIFJlc291cmNlIENlbnRlcnMuPC9saT5cblx0XHRcdDwvdWw+XG4gICAgICA8cD5XaGVuZXZlciBwb3NzaWJsZSwgYXJ0aWNsZXMgaW5jbHVkZSBsaW5rcyB0byBmdWxsLXRleHQgZG9jdW1lbnRzLCBvbmxpbmVcblx0XHRcdG9yZGVyaW5nIHNlcnZpY2VzLCByZWxhdGVkIHN0b3JpZXMgb3IgcmVzb3VyY2VzLCBhbmQgb3RoZXIgcmVsZXZhbnQgc2l0ZXMuXG5cdFx0XHRJZiB5b3UgYXJlIHZpZXdpbmcgQ0JYIHZpYSB0aGUgSW50ZXJuZXQsIGp1c3QgY2xpY2sgb24gdGhlIGhpZ2hsaWdodGVkXG5cdFx0XHRsaW5rIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gZm9sbG93LiBJZiB5b3UgZm9sbG93IGEgbGluaywgeW91IGNhbiBhbHdheXNcblx0XHRcdGVhc2lseSByZXR1cm4gdG8gQ0JYLiBXZSBhbHNvIGluY2x1ZGUgdGhlIGZ1bGwgd2ViIGFkZHJlc3MgZm9yIGFsbCBsaW5rcy48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5QcmludGluZyBhbmQgRW1haWxpbmcgQXJ0aWNsZXM8L2gyPlxuICAgICAgICA8cD5Zb3UgYWx3YXlzIGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb25zIGF2YWlsYWJsZTo8L3A+XG4gICAgICAgIDxwPlByaW50IGEgcHJpbnRlci1mcmllbmRseSB2ZXJzaW9uIG9mIGFuIGlzc3VlLjwvcD5cbiAgICAgICAgPHVsPlxuXHRcdFx0XHQ8bGk+VGhpcyBvcHRpb24gcHJpbnRzIGVhY2ggYXJ0aWNsZSB3aXRob3V0IHRoZSBtZW51cyBhbmQgb3RoZXIgZ3JhcGhpY3MgdmlzaWJsZSBvbiB0aGUgd2Vic2l0ZS48L2xpPlxuXHRcdFx0XHQ8bGk+RW1haWwgYW4gaXNzdWUgdG8gYSBjb2xsZWFndWUgYW5kIGluY2x1ZGUgYSBwZXJzb25hbGl6ZWQgbWVzc2FnZS4gWW91IGp1c3QgbmVlZCB5b3VyIHJlY2lwaWVudCdzIGVtYWlsXG5hZGRyZXNzLjwvbGk+XG5cdFx0XHQ8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+TWFrZSBhIHN1Z2dlc3Rpb24gdG8gQ0JYPC9oMj5cbiAgICAgICAgPHA+U2VuZCB1cyBhIHByaXZhdGUgZW1haWwgdG8gPGEgaHJlZj1cIm1haWx0bzpjYl9leHByZXNzQGNoaWxkd2VsZmFyZS5nb3ZcIj5cIk1ha2UgYSBTdWdnZXN0aW9uXCI8L2E+LjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });