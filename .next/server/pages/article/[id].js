"use strict";
(() => {
var exports = {};
exports.id = 580;
exports.ids = [580];
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

/***/ 443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(500);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(549);
;// CONCATENATED MODULE: external "react-html-parser"
const external_react_html_parser_namespaceObject = require("react-html-parser");
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_namespaceObject);
;// CONCATENATED MODULE: ./components/Accordion.js



function display(accordion) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    class: "usa-accordion__heading",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        class: "usa-accordion__button",
                        "aria-expanded": "false",
                        "aria-controls": accordion.index,
                        children: accordion.heading
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: accordion.index,
                    class: "usa-accordion__content usa-prose",
                    hidden: true,
                    children: external_react_html_parser_default()(accordion.body)
                })
            ]
        }, accordion.index)
    }));
}
function getList(accordion) {
    var b = [];
    for(let index = 1; index <= accordion.number_of_accordions_needed; index++){
        b.push({
            index: `a${index}`,
            heading: accordion[`accordion_${index}_heading`],
            body: accordion[`accordion_${index}_body`]
        });
    }
    return b;
}
const Accordion = ({ accordion  })=>{
    var mapping = getList(accordion);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        class: "usa-accordion",
        children: mapping.map((x)=>display(x)
        )
    }));
};
/* harmony default export */ const components_Accordion = (Accordion);

;// CONCATENATED MODULE: ./components/Card.js



function Card_display(card) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            class: "usa-card__container card__sizing",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("header", {
                    class: "usa-card__header",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        class: "usa-card__heading",
                        children: card.heading
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "usa-card__body",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: external_react_html_parser_default()(card.body)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "usa-card__footer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        class: "usa-button",
                        children: card.button
                    })
                })
            ]
        })
    }));
}
function Card_getList(card) {
    var b = [];
    for(let index = 1; index <= card.how_many_cards_needed; index++){
        b.push({
            index: index,
            heading: card[`card_${index}_title`],
            body: card[`card_${index}_body`],
            button: card[`card_${index}_button_title`]
        });
    }
    return b;
}
const Card = ({ card  })=>{
    var mapping = Card_getList(card);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        class: "usa-card",
        style: {
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        children: mapping.map((x)=>Card_display(x)
        )
    }));
};
/* harmony default export */ const components_Card = (Card);

;// CONCATENATED MODULE: ./pages/article/[id]/index.js








const reactStringReplace = __webpack_require__(455);
const article = ({ article: article1  })=>{
    let a = article1.result.body;
    let splitText = a.split(/({#.*#})/gm);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: article1.result.name_of_page
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                class: "usa-tag",
                children: article1.result.sys_updated_on
            }),
            splitText.map((element)=>{
                if (element.includes('#%accordion%#')) {
                    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Accordion, {
                        accordion: article1.result
                    }));
                } else if (element.includes('##%card%##')) {
                    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Card, {
                        card: article1.result
                    }));
                } else {
                    return external_react_html_parser_default()(element);
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: "Go Back"
            })
        ]
    }));
};
const getServerSideProps = async (context)=>{
    const res = await fetch(`https://dev69061.service-now.com/api/now/table/x_682526_page_bu_0_cwig_page_builder/${context.params.id}`, {
        method: 'get',
        headers: {
            'Authorization': 'Basic ' + btoa(`${config/* username */.b}:${config/* psd */.O}`)
        }
    });
    const article2 = await res.json();
    return {
        props: {
            article: article2
        }
    };
};
/* harmony default export */ const _id_ = (article);


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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 455:
/***/ ((module) => {

module.exports = require("react-string-replace");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,549], () => (__webpack_exec__(443)));
module.exports = __webpack_exports__;

})();