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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/rgupta/Documents/GitHub/react-snow/components/Meta.js\";\n\n\nconst Meta = ({\n  title,\n  keywords,\n  description\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"keywords\",\n      content: keywords\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      charSet: \"utf-8\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      href: \"/favicon.ico\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n      src: \"../js/uswds-init.min.js\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"stylesheet\",\n      href: \"../css/uswds.min.css\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"stylesheet\",\n      href: \"../cbxTest.scss\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n      src: \"../js/uswds.min.js\",\n      async: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n      src: \"https://kit.fontawesome.com/dad43c51a6.js\",\n      crossorigin: \"anonymous\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\nMeta.defaultProps = {\n  title: 'Demo for CWIG',\n  keywords: 'SEE, CWIG',\n  description: 'some text here'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meta);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01ldGEuanM/NGMzNSJdLCJuYW1lcyI6WyJNZXRhIiwidGl0bGUiLCJrZXl3b3JkcyIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxVQUFUO0FBQW1CQztBQUFuQixDQUFELEtBQXNDO0FBQ2pELHNCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNEJBQ0U7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsYUFBTyxFQUFFRDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUVDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFNLGFBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRTtBQUFNLFNBQUcsRUFBQyxNQUFWO0FBQWlCLFVBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBT0E7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQSxlQVFBO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkEsZUFTSTtBQUFRLFNBQUcsRUFBQyxvQkFBWjtBQUFpQyxXQUFLO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosZUFVSTtBQUFRLFNBQUcsRUFBQywyQ0FBWjtBQUF3RCxpQkFBVyxFQUFDO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkosZUFZRTtBQUFBLGdCQUFRRjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnQkQsQ0FqQkQ7O0FBbUJBRCxJQUFJLENBQUNJLFlBQUwsR0FBb0I7QUFDbEJILE9BQUssRUFBRSxlQURXO0FBRWxCQyxVQUFRLEVBQUUsV0FGUTtBQUdsQkMsYUFBVyxFQUFFO0FBSEssQ0FBcEI7QUFNZUgsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IE1ldGEgPSAoeyB0aXRsZSwga2V5d29yZHMsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PXtrZXl3b3Jkc30gLz5cbiAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8c2NyaXB0IHNyYz1cIi4uL2pzL3Vzd2RzLWluaXQubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9jc3MvdXN3ZHMubWluLmNzc1wiIC8+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9jYnhUZXN0LnNjc3NcIi8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvdXN3ZHMubWluLmpzXCIgYXN5bmM+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2RhZDQzYzUxYTYuanNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgIFxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuXG5NZXRhLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6ICdEZW1vIGZvciBDV0lHJyxcbiAga2V5d29yZHM6ICdTRUUsIENXSUcnLFxuICBkZXNjcmlwdGlvbjogJ3NvbWUgdGV4dCBoZXJlJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWV0YVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Meta.js\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n\nvar _jsxFileName = \"/Users/rgupta/Documents/GitHub/react-snow/pages/contact.js\";\n\n\nconst contact = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    class: \"usa-d-flex justify-content-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Meta__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: \"Contact\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Contact Us\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      class: \"grid-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        class: \"grid-row\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          class: \"tablet:grid-col\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Questions\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 7\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"To report child abuse or neglec, please contact Child Help USA at 1.800.4 A Child(1.800.422.4453) or see our list of State child abuse and neglect reporting numbers.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 9\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          class: \"tablet:grid-col\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          class: \"tablet:grid-col\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              class: \"usa-icon\",\n              \"aria-hidden\": \"true\",\n              focusable: \"false\",\n              role: \"img\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"use\", {\n                href: \"../img/sprite.svg#mail\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 18,\n                columnNumber: 9\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 7\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Email Us\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 9\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"You can email us at SomeEmailHere\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 9\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 38\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              class: \"usa-icon\",\n              \"aria-hidden\": \"true\",\n              focusable: \"false\",\n              role: \"img\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"use\", {\n                href: \"../img/sprite.svg#phone\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 9\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 7\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Call Us\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 9\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"To speak to an information support specialist, please contact us at 1.800.384.3366 between 9:30 AM and 5:30 PM. (EST)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 9\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 7\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              class: \"usa-icon\",\n              \"aria-hidden\": \"true\",\n              focusable: \"false\",\n              role: \"img\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"use\", {\n                href: \"../img/sprite.svg#chat\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 9\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 7\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Live Chat/Live Online Support\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 9\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"Use Live Chat, an instant messaging service, to contact an information support specialist between 10:00 AM and 5:00 PM (EST) \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 9\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 7\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              class: \"usa-icon\",\n              \"aria-hidden\": \"true\",\n              focusable: \"false\",\n              role: \"img\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"use\", {\n                href: \"../img/sprite.svg#location_on\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 9\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 7\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Mail\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 9\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Child Welfare Information Gateway\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 45\n              }, undefined), \"Children's Bureau/ACYF\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 35\n              }, undefined), \"330 C Street S.W.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 30\n              }, undefined), \"Washington, DC 20201\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 9\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 7\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 9\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Comments/Suggestion\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Send us a private email to \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"mailto:cb_express@childwelfare.gov\",\n          children: \"\\\"Make a Suggestion\\\"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 39\n        }, undefined), \".\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiY29udGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsc0JBQ0U7QUFBSyxTQUFLLEVBQUMsbUNBQVg7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFNLFdBQUssRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUssV0FBSyxFQUFDLGdCQUFYO0FBQUEsNkJBQ0E7QUFBSyxhQUFLLEVBQUMsVUFBWDtBQUFBLGdDQUNBO0FBQUssZUFBSyxFQUFDLGlCQUFYO0FBQUEsa0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFNRTtBQUFLLGVBQUssRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsZUFPRTtBQUFLLGVBQUssRUFBQyxpQkFBWDtBQUFBLGtDQUE2QjtBQUFBLG9DQUMvQjtBQUFLLG1CQUFLLEVBQUMsVUFBWDtBQUFzQiw2QkFBWSxNQUFsQztBQUF5Qyx1QkFBUyxFQUFDLE9BQW5EO0FBQTJELGtCQUFJLEVBQUMsS0FBaEU7QUFBQSxxQ0FDRTtBQUFLLG9CQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEK0IsZUFJN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSjZCLGVBSzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUw2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTdCLGVBT0Y7QUFBQSxvQ0FDQTtBQUFLLG1CQUFLLEVBQUMsVUFBWDtBQUFzQiw2QkFBWSxNQUFsQztBQUF5Qyx1QkFBUyxFQUFDLE9BQW5EO0FBQTJELGtCQUFJLEVBQUMsS0FBaEU7QUFBQSxxQ0FDRTtBQUFLLG9CQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBFLGVBY0Y7QUFBQSxvQ0FDQTtBQUFLLG1CQUFLLEVBQUMsVUFBWDtBQUFzQiw2QkFBWSxNQUFsQztBQUF5Qyx1QkFBUyxFQUFDLE9BQW5EO0FBQTJELGtCQUFJLEVBQUMsS0FBaEU7QUFBQSxxQ0FDRTtBQUFLLG9CQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWRFLGVBcUJGO0FBQUEsb0NBQ0E7QUFBSyxtQkFBSyxFQUFDLFVBQVg7QUFBc0IsNkJBQVksTUFBbEM7QUFBeUMsdUJBQVMsRUFBQyxPQUFuRDtBQUEyRCxrQkFBSSxFQUFDLEtBQWhFO0FBQUEscUNBQ0U7QUFBSyxvQkFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQUtFO0FBQUEsMkVBQW9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQXBDLHlDQUMwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUQxQixvQ0FFcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUE2Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3Q0YsZUE4Q0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsK0RBQThCO0FBQUcsY0FBSSxFQUFDLG9DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXVERCxDQXhERDs7QUEwRGVBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcblxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwidXNhLWQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8TWV0YSB0aXRsZT0nQ29udGFjdCcgLz5cbiAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWQtcm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGV0OmdyaWQtY29sXCI+XG4gICAgICA8aDI+UXVlc3Rpb25zPC9oMj5cbiAgICAgICAgPHA+VG8gcmVwb3J0IGNoaWxkIGFidXNlIG9yIG5lZ2xlYywgcGxlYXNlIGNvbnRhY3QgQ2hpbGQgSGVscCBVU0EgYXQgMS44MDAuNCBBIENoaWxkKDEuODAwLjQyMi40NDUzKSBvciBzZWUgb3VyIGxpc3Qgb2YgU3RhdGUgY2hpbGQgYWJ1c2UgYW5kIG5lZ2xlY3QgcmVwb3J0aW5nIG51bWJlcnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGV0OmdyaWQtY29sXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZXQ6Z3JpZC1jb2xcIj48ZGl2PlxuICAgICAgPHN2ZyBjbGFzcz1cInVzYS1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiByb2xlPVwiaW1nXCI+XG4gICAgICAgIDx1c2UgaHJlZj1cIi4uL2ltZy9zcHJpdGUuc3ZnI21haWxcIj48L3VzZT5cbiAgICAgIDwvc3ZnPlxuICAgICAgICA8aDM+RW1haWwgVXM8L2gzPlxuICAgICAgICA8cD5Zb3UgY2FuIGVtYWlsIHVzIGF0IFNvbWVFbWFpbEhlcmU8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8c3ZnIGNsYXNzPVwidXNhLWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHJvbGU9XCJpbWdcIj5cbiAgICAgICAgPHVzZSBocmVmPVwiLi4vaW1nL3Nwcml0ZS5zdmcjcGhvbmVcIj48L3VzZT5cbiAgICAgIDwvc3ZnPlxuICAgICAgICA8aDM+Q2FsbCBVczwvaDM+XG4gICAgICAgIDxwPlRvIHNwZWFrIHRvIGFuIGluZm9ybWF0aW9uIHN1cHBvcnQgc3BlY2lhbGlzdCwgcGxlYXNlIGNvbnRhY3QgdXMgYXQgMS44MDAuMzg0LjMzNjYgYmV0d2VlbiA5OjMwIEFNIGFuZCA1OjMwIFBNLiAoRVNUKTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxzdmcgY2xhc3M9XCJ1c2EtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgcm9sZT1cImltZ1wiPlxuICAgICAgICA8dXNlIGhyZWY9XCIuLi9pbWcvc3ByaXRlLnN2ZyNjaGF0XCI+PC91c2U+XG4gICAgICA8L3N2Zz5cbiAgICAgICAgPGgzPkxpdmUgQ2hhdC9MaXZlIE9ubGluZSBTdXBwb3J0PC9oMz5cbiAgICAgICAgPHA+VXNlIExpdmUgQ2hhdCwgYW4gaW5zdGFudCBtZXNzYWdpbmcgc2VydmljZSwgdG8gY29udGFjdCBhbiBpbmZvcm1hdGlvbiBzdXBwb3J0IHNwZWNpYWxpc3QgYmV0d2VlbiAxMDowMCBBTSBhbmQgNTowMCBQTSAoRVNUKSA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8c3ZnIGNsYXNzPVwidXNhLWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHJvbGU9XCJpbWdcIj5cbiAgICAgICAgPHVzZSBocmVmPVwiLi4vaW1nL3Nwcml0ZS5zdmcjbG9jYXRpb25fb25cIj48L3VzZT5cbiAgICAgIDwvc3ZnPlxuICAgICAgICA8aDM+TWFpbDwvaDM+XG4gICAgICAgIDxwPkNoaWxkIFdlbGZhcmUgSW5mb3JtYXRpb24gR2F0ZXdheTxici8+XG4gICAgICAgICAgICBDaGlsZHJlbidzIEJ1cmVhdS9BQ1lGPGJyLz5cbiAgICAgICAgICAgIDMzMCBDIFN0cmVldCBTLlcuPGJyLz5cbiAgICAgICAgICAgIFdhc2hpbmd0b24sIERDIDIwMjAxXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoci8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+Q29tbWVudHMvU3VnZ2VzdGlvbjwvaDI+XG4gICAgICAgIDxwPlNlbmQgdXMgYSBwcml2YXRlIGVtYWlsIHRvIDxhIGhyZWY9XCJtYWlsdG86Y2JfZXhwcmVzc0BjaGlsZHdlbGZhcmUuZ292XCI+XCJNYWtlIGEgU3VnZ2VzdGlvblwiPC9hPi48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

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