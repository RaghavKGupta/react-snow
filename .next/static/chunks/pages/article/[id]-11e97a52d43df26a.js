(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{9296:function(n,c,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[id]",function(){return r(7691)}])},7691:function(n,c,r){"use strict";r.r(c),r.d(c,{__N_SSP:function(){return t},default:function(){return o}});var a=r(5893),e=r(1664),s=(r(1163),r(8549),r(653));var d=function(n){var c=function(n){for(var c=[],r=1;r<=n.number_of_accordions_needed;r++)c.push({index:"a".concat(r),heading:n["accordion_".concat(r,"_heading")],body:n["accordion_".concat(r,"_body")]});return c}(n.accordion);return(0,a.jsx)("div",{class:"usa-accordion",children:c.map((function(n){return function(n){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{class:"usa-accordion__heading",children:(0,a.jsx)("button",{class:"usa-accordion__button","aria-expanded":"false","aria-controls":n.index,children:n.heading})}),(0,a.jsx)("div",{id:n.index,class:"usa-accordion__content usa-prose",hidden:!0,children:(0,s.ZP)(n.body)})]},n.index)})}(n)}))})};var i=function(n){var c=function(n){for(var c=[],r=1;r<=n.how_many_cards_needed;r++)c.push({index:r,heading:n["card_".concat(r,"_title")],body:n["card_".concat(r,"_body")],button:n["card_".concat(r,"_button_title")]});return c}(n.card);return(0,a.jsx)("div",{class:"usa-card",style:{height:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"},children:c.map((function(n){return function(n){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{class:"usa-card__container card__sizing",children:[(0,a.jsx)("header",{class:"usa-card__header",children:(0,a.jsx)("h2",{class:"usa-card__heading",children:n.heading})}),(0,a.jsx)("div",{class:"usa-card__body",children:(0,a.jsx)("p",{children:(0,s.ZP)(n.body)})}),(0,a.jsx)("div",{class:"usa-card__footer",children:(0,a.jsx)("button",{class:"usa-button",children:n.button})})]})})}(n)}))})},t=(r(9632),!0),o=function(n){var c=n.article,r=c.result.body.split(/({#.*#})/gm);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:c.result.name_of_page}),(0,a.jsx)("span",{class:"usa-tag",children:c.result.sys_updated_on}),r.map((function(n){return n.includes("#%accordion%#")?(0,a.jsx)(d,{accordion:c.result}):n.includes("##%card%##")?(0,a.jsx)(i,{card:c.result}):(0,s.ZP)(n)})),(0,a.jsx)("br",{}),(0,a.jsx)(e.default,{href:"/",children:"Go Back"})]})}},9557:function(){}},function(n){n.O(0,[624,774,888,179],(function(){return c=9296,n(n.s=c);var c}));var c=n.O();_N_E=c}]);