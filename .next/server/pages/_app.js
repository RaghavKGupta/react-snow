(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 180:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__S4aNf",
	"main": "Layout_main__c1pHS"
};


/***/ }),

/***/ 796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Nav.js



const Nav = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                class: "usa-banner",
                "aria-label": "Official government website",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "usa-accordion",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            class: "usa-banner__header",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                class: "usa-banner__inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "grid-col-auto",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            class: "usa-banner__header-flag",
                                            src: "../img/us_flag_small.png",
                                            alt: "U.S. flag"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "grid-col-fill tablet:grid-col-auto",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                class: "usa-banner__header-text",
                                                children: "An official website of the United States government"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                class: "usa-banner__header-action",
                                                "aria-hidden": "true",
                                                children: "Here’s how you know"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        class: "usa-accordion__button usa-banner__button",
                                        "aria-expanded": "false",
                                        "aria-controls": "gov-banner-default",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            class: "usa-banner__button-text",
                                            children: "Here’s how you know"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "usa-banner__content usa-accordion__content",
                            id: "gov-banner-default",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                class: "grid-row grid-gap-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "usa-banner__guidance tablet:grid-col-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                class: "usa-banner__icon usa-media-block__img",
                                                src: "../img/icon-dot-gov.svg",
                                                role: "img",
                                                alt: "",
                                                "aria-hidden": "true"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                class: "usa-media-block__body",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: " Official websites use .gov "
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        "A ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: ".gov"
                                                        }),
                                                        " website belongs to an official government organization in the United States."
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "usa-banner__guidance tablet:grid-col-6",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            class: "usa-banner__icon usa-media-block__img",
                                            src: "../img/icon-https.svg",
                                            role: "img",
                                            alt: "",
                                            "aria-hidden": "true"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const components_Nav = (Nav);

// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(549);
;// CONCATENATED MODULE: ./components/Header.js

const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                class: "usa-header usa-header--basic cbxHeader",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "usa-nav-container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "usa-navbar",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "usa-logo",
                                    id: "basic-logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        class: "usa-logo__text",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "javascript:void(0)",
                                            title: "CBX",
                                            style: {
                                                fontSize: '32px',
                                                color: 'white'
                                            },
                                            children: [
                                                "CBX",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        fontSize: 'small'
                                                    },
                                                    children: "Children's Bureau Express"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    class: "usa-menu-btn",
                                    children: "Menu"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            "aria-label": "Primary navigation",
                            class: "usa-nav",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    class: "usa-nav__close",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "../img/usa-icons/close.svg",
                                        role: "img",
                                        alt: "Close"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    class: "usa-nav__primary usa-accordion",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            class: "usa-nav__primary-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/",
                                                class: "usa-nav__link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    class: "nav",
                                                    children: "Current Issue"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            class: "usa-nav__primary-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "javascript:void(0)",
                                                class: "usa-nav__link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    class: "nav",
                                                    children: "Previous Issues"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            class: "usa-nav__primary-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/about",
                                                class: "usa-nav__link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    class: "nav",
                                                    children: "About Us"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            class: "usa-nav__primary-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/contact",
                                                class: "usa-nav__link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    class: "nav",
                                                    children: "Contact Us"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    class: "usa-search usa-search--small",
                                    role: "search",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            class: "usa-sr-only",
                                            for: "basic-search-field-en-small",
                                            children: "Search"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            class: "usa-input",
                                            id: "basic-search-field-en-small",
                                            type: "search",
                                            name: "search"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            class: "usa-button",
                                            type: "submit",
                                            style: {
                                                backgroundColor: '#63BAB0'
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                class: "usa-sr-only",
                                                children: "Search"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    class: "usa-breadcrumb",
                    "aria-label": "Breadcrumbs,,",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                        class: "usa-breadcrumb__list",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: "usa-breadcrumb__list-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "javascript:void(0);",
                                    class: "usa-breadcrumb__link",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: "usa-breadcrumb__list-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "javascript:void(0);",
                                    class: "usa-breadcrumb__link",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Current Issue"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Footer.js

const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                class: "usa-footer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "footer__upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "grid-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "grid-row grid-gap",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: " usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2 ",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "mobile-lg:grid-col-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "usa-footer__logo-heading",
                                                    children: "Children's Bureau Express"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: "Contact Center"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "",
                                                    children: "cb_express@childwelfare.gov"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "usa-footer__social-links grid-row grid-gap-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    class: "grid-col-auto",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        class: "usa-social-link usa-social-link--facebook",
                                                        href: "javascript:void(0);",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Facebook"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    class: "grid-col-auto",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        class: "usa-social-link usa-social-link--twitter",
                                                        href: "javascript:void(0);",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    class: "grid-col-auto",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        class: "usa-social-link usa-social-link--youtube",
                                                        href: "javascript:void(0);",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "YouTube"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    class: "grid-col-auto",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        class: "usa-social-link usa-social-link--instagram",
                                                        href: "javascript:void(0);",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Instagram"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    class: "grid-col-auto",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        class: "usa-social-link usa-social-link--rss",
                                                        href: "javascript:void(0);",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "RSS"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "usa-footer__contact-links mobile-lg:grid-col-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                        class: "usa-footer__address",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            class: "usa-footer__contact-info grid-row grid-gap",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                class: "grid-col-auto",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    class: "usa-search",
                                                    role: "search",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            id: "sign_up",
                                                            children: "Sign up"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            class: "usa-sr-only",
                                                            for: "basic-search-field-en-small",
                                                            children: "Sign up"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            id: "basic-search-field-en-small",
                                                            class: "footer_input",
                                                            type: "email",
                                                            name: "sign_up",
                                                            placeholder: "Your email address"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "submit",
                                                            style: {
                                                                backgroundColor: '#E2EFF7',
                                                                color: '#264A64'
                                                            },
                                                            children: "Sign up"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "usa-identifier footer__lower",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        class: "usa-identifier__section usa-identifier__section--masthead",
                        "aria-label": "Agency identifier,,,",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "usa-identifier__container",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "usa-identifier__logos",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "javascript:void(0);",
                                            class: "usa-identifier__logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                class: "usa-identifier__logo-img",
                                                src: "../img/cb-logo-white.svg",
                                                alt: "<Parent agency> logo",
                                                role: "img"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "javascript:void(0);",
                                            class: "usa-identifier__logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                class: "usa-identifier__logo-img",
                                                src: "../img/acf-logo-white.svg",
                                                alt: "<Other agency> logo",
                                                role: "img"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "usa-identifier__identity",
                                    "aria-label": "Agency description",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            class: "usa-identifier__identity-domain",
                                            children: "cbexpress.acf.hhs.gov"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            class: "usa-identifier__identity-disclaimer",
                                            children: [
                                                "An official website of the",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.acf.hhs.gov/cb/",
                                                    children: "U.S. Department of Health and Human Services,"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "",
                                                    children: " Administration of Children and Families"
                                                }),
                                                " and the",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.acf.hhs.gov/",
                                                    children: "Children's Bureau"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        class: "usa-identifier__section usa-identifier__section--required-links",
                        "aria-label": "Links to help navigate the policies and procedures for Child Welfare Gateway.",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "usa-identifier__container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                class: "usa-identifier__required-links-list",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "usa-identifier__required-links-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.acf.hhs.gov/cb/",
                                            class: "usa-identifier__required-link",
                                            children: "About Children's Bureau Express"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "usa-identifier__required-links-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.childwelfare.gov/accessibility/",
                                            class: "usa-identifier__required-link",
                                            children: "Accessibility support"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "usa-identifier__required-links-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.acf.hhs.gov/foia",
                                            class: "usa-identifier__required-link usa-link",
                                            children: "FOIA requests"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "usa-identifier__required-links-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.acf.hhs.gov/no-fear-act",
                                            class: "usa-identifier__required-link usa-link",
                                            children: "No FEAR Act data"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "usa-identifier__required-links-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://oig.hhs.gov/",
                                            class: "usa-identifier__required-link usa-link",
                                            children: "Office of the Inspector"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "usa-identifier__required-links-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://oig.hhs.gov/",
                                            class: "usa-identifier__required-link usa-link",
                                            children: "General"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "usa-identifier__required-links-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.childwelfare.gov/performancereports/",
                                            class: "usa-identifier__required-link usa-link",
                                            children: "Performance reports"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "usa-identifier__required-links-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.childwelfare.gov/privacypolicy/",
                                            class: "usa-identifier__required-link usa-link",
                                            children: "Privacy policy"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        class: "usa-identifier__section usa-identifier__section--usagov",
                        "aria-label": "U.S. government information and services,,,",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "usa-identifier__container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "usa-identifier__usagov-description",
                                    children: "Looking for U.S. government information and services?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.usa.gov/",
                                    class: "usa-link",
                                    children: "Visit USA.gov"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(180);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout.js






const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "../js/uswds.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: (Layout_module_default()).main,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "grid-container",
                            children: children
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,549], () => (__webpack_exec__(796)));
module.exports = __webpack_exports__;

})();