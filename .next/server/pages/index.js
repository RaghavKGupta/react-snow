"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ username),
/* harmony export */   "O": () => (/* binding */ psd)
/* harmony export */ });
const username = 'adminraghav';
const psd = 'pdipw';


/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(500);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/ArticleItem.js



const ArticleItem = ({ article  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        class: "usa-card__container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                class: "usa-card__header",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    class: "usa-card__heading",
                    children: article.short_description
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "usa-card__body",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: article.name_of_page
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "usa-card__footer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/article/${article.sys_id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        class: "usa-button",
                        children: "View Article"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_ArticleItem = (ArticleItem);

;// CONCATENATED MODULE: ./components/ArticleList.js



const ArticleList = ({ articles  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: articles && articles.length > 0 && articles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ArticleItem, {
                article: article
            })
        )
    }));
};
/* harmony default export */ const components_ArticleList = (ArticleList);

;// CONCATENATED MODULE: ./pages/index.js



function Home({ articles  }) {
    try {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ArticleList, {
                articles: articles.result
            })
        }));
    } catch (e) {
        console.log(e);
        return null;
    }
};
const getServerSideProps = async ()=>{
    /*const res = await fetch(`${server}/api/articles`)*/ const res = await fetch(`https://dev69061.service-now.com/api/now/table/x_682526_page_bu_0_cwig_page_builder`, {
        method: 'get',
        headers: {
            'Authorization': 'Basic ' + btoa(`${config/* username */.b}:${config/* psd */.O}`)
        }
    });
    const articles = await res.json();
    return {
        props: {
            articles
        }
    };
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(35)));
module.exports = __webpack_exports__;

})();