(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7386)}])},8418:function(e,s,r){"use strict";function a(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var r=[],a=!0,l=!1,t=void 0;try{for(var n,i=e[Symbol.iterator]();!(a=(n=i.next()).done)&&(r.push(n.value),!s||r.length!==s);a=!0);}catch(c){l=!0,t=c}finally{try{a||null==i.return||i.return()}finally{if(l)throw t}}return r}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l,t=(l=r(7294))&&l.__esModule?l:{default:l},n=r(6273),i=r(387),c=r(7190);var d={};function h(e,s,r,a){if(e&&n.isLocalURL(s)){e.prefetch(s,r,a).catch((function(e){0}));var l=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;d[s+"%"+r+(l?"%"+l:"")]=!0}}},7190:function(e,s,r){"use strict";function a(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var r=[],a=!0,l=!1,t=void 0;try{for(var n,i=e[Symbol.iterator]();!(a=(n=i.next()).done)&&(r.push(n.value),!s||r.length!==s);a=!0);}catch(c){l=!0,t=c}finally{try{a||null==i.return||i.return()}finally{if(l)throw t}}return r}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,r=e.disabled||!n,c=l.useRef(),d=a(l.useState(!1),2),h=d[0],o=d[1],x=l.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||h||e&&e.tagName&&(c.current=function(e,s,r){var a=function(e){var s=e.rootMargin||"",r=i.get(s);if(r)return r;var a=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var s=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;s&&r&&s(r)}))}),e);return i.set(s,r={id:s,observer:l,elements:a}),r}(r),l=a.id,t=a.observer,n=a.elements;return n.set(e,s),t.observe(e),function(){n.delete(e),t.unobserve(e),0===n.size&&(t.disconnect(),i.delete(l))}}(e,(function(e){return e&&o(e)}),{rootMargin:s}))}),[r,s,h]);return l.useEffect((function(){if(!n&&!h){var e=t.requestIdleCallback((function(){return o(!0)}));return function(){return t.cancelIdleCallback(e)}}}),[h]),[x,h]};var l=r(7294),t=r(9311),n="undefined"!==typeof IntersectionObserver;var i=new Map},7386:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return h}});var a=r(5893),l=r(9008),t=r(7294);r(1664),[{href:"https://zeit.co/now",label:"ZEIT"},{href:"https://github.com/zeit/next.js",label:"GitHub"}].map((function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}));var n=function(){var e=(0,t.useState)(!1),s=(e[0],e[1],(0,t.useState)(!1)),r=s[0],l=s[1],n=(0,t.useState)(!1),i=n[0],c=n[1],d=(0,t.useState)(!1),h=d[0],o=d[1],x=function(){return l(!r)},w=function(){return c(!i)},m=function(){return o(!h)};return(0,a.jsxs)("header",{id:"headerArea",children:[(0,a.jsx)("div",{className:"headerArea-pc",children:(0,a.jsxs)("nav",{className:"headerArea-nav clearfix",children:[(0,a.jsx)("div",{className:"headerArea-nav__inline-gray clearfix",children:(0,a.jsxs)("ul",{className:"headerArea-nav__inline-gray-list",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/members/",children:"\u4f1a\u54e1\u306e\u65b9(\u500b\u4eba)"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/corp/",children:"\u6cd5\u4eba\u306e\u7686\u3055\u307e\u3078"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/info/faq/",children:"\u3088\u304f\u3042\u308b\u3054\u8cea\u554f"})}),(0,a.jsx)("li",{className:"searchInput__pc",children:(0,a.jsxs)("dl",{children:[(0,a.jsxs)("dt",{className:"searchInput__pc-btn",children:[(0,a.jsx)("img",{src:"https://www.wwf.or.jp/shared/svg/icons_search.svg",alt:""}),(0,a.jsx)("span",{className:"searchInput__pc-btn_text",children:"\u691c\u7d22\u3059\u308b"})]}),(0,a.jsxs)("dd",{className:"searchInput__pc-toggle",children:[(0,a.jsxs)("form",{id:"cse-search-box",action:"https://www.wwf.or.jp/search.html",className:"pc-searchform",children:[(0,a.jsx)("input",{type:"hidden",name:"cx",value:"003703045657839985411:3hzf67cfykc"}),(0,a.jsx)("input",{type:"hidden",name:"ie",value:"UTF-8"}),(0,a.jsx)("input",{type:"text",name:"q",size:"31",className:"pc-searchform-input"}),(0,a.jsx)("button",{type:"submit",name:"sa",value:"\u9001\u4fe1",className:"pc-searchform-submit"})]}),(0,a.jsx)("script",{type:"text/javascript",src:"http://www.google.com/cse/brand?form=cse-search-box&lang=ja"})]})]})})]})}),(0,a.jsxs)("div",{className:"headerArea-nav__inline clearfix",children:[(0,a.jsx)("p",{className:"headerArea-nav__logo",children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/",children:(0,a.jsx)("img",{src:"https://www.wwf.or.jp/shared/svg/icons_logo_sd.svg",alt:"WWF\u30b8\u30e3\u30d1\u30f3"})})}),(0,a.jsxs)("div",{className:"headerArea-pc__drawer-nav clearfix",children:[(0,a.jsx)("ul",{className:"headerArea-nav__cv",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/support/",children:(0,a.jsx)("span",{children:"\u5bc4\u4ed8\u30fb\u5165\u4f1a\u306e\u304a\u9858\u3044"})})})}),(0,a.jsxs)("div",{id:"headerAccordionPC",className:"headerArea-nav__inline-accordionBox headerArea-nav__accordionBox ".concat(r?"hover":""),onMouseEnter:x,onMouseLeave:x,children:[(0,a.jsxs)("dl",{className:"headerArea-nav__inline-accordion headerArea-nav__accordion",children:[(0,a.jsx)("dt",{children:(0,a.jsx)("a",{id:"headerActivities",className:"".concat(i?"active":""),onMouseEnter:w,onMouseLeave:w,href:"https://www.wwf.or.jp/activities/",children:"WWF\u306e\u6d3b\u52d5"})}),(0,a.jsx)("dd",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"group-nr",children:(0,a.jsxs)("a",{href:"https://www.wwf.or.jp/activities/news_and_reports/",children:["\u30cb\u30e5\u30fc\u30b9\u30fb\u6d3b\u52d5\u5831\u544a",(0,a.jsx)("small",{children:"New!"})]})}),(0,a.jsx)("li",{className:"group-ev",children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/event/",children:"\u30a4\u30d9\u30f3\u30c8"})}),(0,a.jsx)("li",{className:"group-pj",children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/activities/project/",children:"\u6ce8\u76ee\u306e\u6d3b\u52d5\u7279\u96c6"})}),(0,a.jsx)("li",{className:"group-sb",children:(0,a.jsxs)("a",{href:"https://www.wwf.or.jp/staffblog/",children:["\u30b9\u30bf\u30c3\u30d5\u30d6\u30ed\u30b0",(0,a.jsx)("small",{children:"New!"})]})})]})})]}),(0,a.jsxs)("dl",{className:"headerArea-nav__inline-accordion headerArea-nav__accordion",children:[(0,a.jsx)("dt",{children:(0,a.jsx)("a",{id:"headerAbout",className:"".concat(h?"active":""),onMouseEnter:m,onMouseLeave:m,href:"https://www.wwf.or.jp/aboutwwf/",children:"WWF\u306b\u3064\u3044\u3066"})}),(0,a.jsx)("dd",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/aboutwwf/japan/",children:"WWF\u30b8\u30e3\u30d1\u30f3\u306b\u3064\u3044\u3066"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/aboutwwf/earth/",children:"\u306a\u305c\u74b0\u5883\u554f\u984c\u306b\u53d6\u308a\u7d44\u3080\u306e\u304b"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/aboutwwf/history/",children:"WWF\u306e\u6b74\u53f2"})})]})})]}),(0,a.jsx)("div",{className:"headerArea-nav__inline-gray",children:(0,a.jsxs)("ul",{className:"headerArea-nav__inline-gray-list",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/magazine/",children:"\u30e1\u30fc\u30eb\u30de\u30ac\u30b8\u30f3"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/support/application/",children:"\u8cc7\u6599\u8acb\u6c42"})})]})})]})]})]})]})}),(0,a.jsx)("div",{className:"headerArea-sp",style:{display:"none"},children:(0,a.jsx)("nav",{className:"headerArea-nav clearfix",children:(0,a.jsxs)("div",{className:"headerArea-nav__inline clearfix",children:[(0,a.jsx)("p",{className:"headerArea-nav__logo",children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/",children:(0,a.jsx)("img",{src:"https://www.wwf.or.jp/shared/svg/icons_logo_sd.svg",alt:"WWF\u30b8\u30e3\u30d1\u30f3"})})}),(0,a.jsxs)("button",{type:"button",className:"drawer-toggle drawer-hamburger",children:[(0,a.jsx)("span",{className:"sr-only",children:"toggle navigation"}),(0,a.jsx)("span",{className:"drawer-hamburger-icon"})]}),(0,a.jsx)("div",{className:"drawer-nav",children:(0,a.jsx)("div",{className:"drawer-menu",children:(0,a.jsxs)("div",{className:"drawer-body",children:[(0,a.jsxs)("div",{className:"searchInput__sp",children:[(0,a.jsxs)("form",{id:"sp-cse-search-box",action:"https://www.wwf.or.jp/search.html",className:"sp-searchform",children:[(0,a.jsx)("input",{type:"hidden",name:"cx",value:"003703045657839985411:3hzf67cfykc"}),(0,a.jsx)("input",{type:"hidden",name:"ie",value:"UTF-8"}),(0,a.jsx)("input",{type:"text",name:"q",size:"31",className:"sp-searchform-input"}),(0,a.jsx)("button",{type:"submit",name:"sa",value:"\u9001\u4fe1",className:"sp-searchform-submit"})]}),(0,a.jsx)("script",{type:"text/javascript",src:"http://www.google.com/cse/brand?form=cse-search-box&lang=ja"})]}),(0,a.jsx)("ul",{className:"headerArea-nav__cv",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/support/",children:(0,a.jsx)("span",{children:"\u5bc4\u4ed8\u30fb\u5165\u4f1a\u306e\u304a\u9858\u3044"})})})}),(0,a.jsxs)("div",{id:"headerAccordionSP",className:"headerArea-nav__inline-accordionBox headerArea-nav__accordionBox",children:[(0,a.jsxs)("dl",{className:"headerArea-nav__inline-accordion headerArea-nav__accordion",children:[(0,a.jsx)("dt",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/activities/",children:"WWF\u306e\u6d3b\u52d5"})}),(0,a.jsx)("dd",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/activities/",children:"WWF\u306e\u6d3b\u52d5"})}),(0,a.jsx)("li",{className:"group-nr",children:(0,a.jsxs)("a",{href:"https://www.wwf.or.jp/activities/news_and_reports/",children:["\u30cb\u30e5\u30fc\u30b9\u30fb\u6d3b\u52d5\u5831\u544a",(0,a.jsx)("small",{children:"New!"})]})}),(0,a.jsx)("li",{className:"group-ev",children:(0,a.jsxs)("a",{href:"https://www.wwf.or.jp/event/",children:["\u30a4\u30d9\u30f3\u30c8",(0,a.jsx)("small",{children:"New!"})]})}),(0,a.jsx)("li",{className:"group-pj",children:(0,a.jsxs)("a",{href:"https://www.wwf.or.jp/activities/project/",children:["\u6ce8\u76ee\u306e\u6d3b\u52d5\u7279\u96c6",(0,a.jsx)("small",{children:"New!"})]})}),(0,a.jsx)("li",{className:"group-sb",children:(0,a.jsxs)("a",{href:"https://www.wwf.or.jp/staffblog/",children:["\u30b9\u30bf\u30c3\u30d5\u30d6\u30ed\u30b0",(0,a.jsx)("small",{children:"New!"})]})})]})})]}),(0,a.jsxs)("dl",{className:"headerArea-nav__inline-accordion headerArea-nav__accordion",children:[(0,a.jsx)("dt",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/aboutwwf/",children:"WWF\u306b\u3064\u3044\u3066"})}),(0,a.jsx)("dd",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/aboutwwf/",children:"WWF\u306b\u3064\u3044\u3066"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/aboutwwf/japan/",children:"WWF\u30b8\u30e3\u30d1\u30f3\u306b\u3064\u3044\u3066"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/aboutwwf/earth/",children:"\u306a\u305c\u74b0\u5883\u554f\u984c\u306b\u53d6\u308a\u7d44\u3080\u306e\u304b"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/aboutwwf/history/",children:"WWF\u306e\u6b74\u53f2"})})]})})]})]}),(0,a.jsxs)("ul",{className:"headerArea-nav__inline-another",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/members/",children:"\u4f1a\u54e1\u306e\u65b9(\u500b\u4eba)"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/corp/",children:"\u6cd5\u4eba\u306e\u7686\u3055\u307e\u3078"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/magazine/",children:"\u30e1\u30fc\u30eb\u30de\u30ac\u30b8\u30f3"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/info/faq/",children:"\u3088\u304f\u3042\u308b\u3054\u8cea\u554f"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/support/application/",children:"\u8cc7\u6599\u8acb\u6c42"})})]})]})})})]})})})]})};var i=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var s=(0,t.useState)(1),r=s[0],l=s[1],n=(0,t.useState)(""),i=n[0],c=n[1];return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex flex-wrap",children:(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("h4",{className:"text-left",children:"\u25a0\u3000\u52df\u91d1\u65b9\u6cd5\u306e\u4f8b "}),(0,a.jsxs)("ul",{className:"flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row tabs-content",role:"tablist",children:[(0,a.jsx)("li",{className:"-mb-px mr-2 last:mr-0 text-center md:text-lg sm:text-xs ".concat(1===r?"bg-blue-600":"bg-white"),children:(0,a.jsx)("a",{className:"font-bold uppercase md:px-14 sm:px-5 md:py-3 sm:py-2 rounded block leading-normal ".concat(1===r?"text-white hover:text-white visited:text-white":"text-blue-600"),onClick:function(e){e.preventDefault(),l(1)},"data-toggle":"tab",role:"tablist",children:"\u30cd\u30c3\u30c8\u3067"})}),(0,a.jsx)("li",{className:"-mb-px mr-2 last:mr-0 text-center ".concat(2===r?"bg-blue-600":"bg-white"),children:(0,a.jsx)("a",{className:"text-lg font-bold uppercase md:px-14 sm:px-5 sm:py-2 md:py-3 rounded block leading-normal ".concat(2===r?"text-white hover:text-white visited:text-white":"text-blue-600"),onClick:function(e){e.preventDefault(),l(2)},"data-toggle":"tab",role:"tablist",children:"\u30a2\u30d7\u30ea\u304b\u3089"})}),(0,a.jsx)("li",{className:"-mb-px mr-2 last:mr-0 text-center ".concat(3===r?"bg-blue-600":"bg-white"),children:(0,a.jsx)("a",{className:"text-lg font-bold uppercase md:px-14 sm:px-5 sm:py-2 md:py-3 rounded block leading-normal ".concat(3===r?"text-white hover:text-white visited:text-white":"text-blue-600"),onClick:function(e){e.preventDefault(),l(3)},"data-toggle":"tab",role:"tablist",children:"\u8857\u3067"})})]}),(0,a.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded",children:(0,a.jsx)("div",{className:"px-4 py-5",children:(0,a.jsxs)("div",{className:"tab-content tab-space",children:[(0,a.jsxs)("div",{className:1===r?"block":"hidden",id:"link1",children:[(0,a.jsx)("h4",{className:"text-left my-3",children:"Paypal\u3067\u52df\u91d1"}),(0,a.jsxs)("div",{className:"md:px-6 md:py-5 w-full bg-white flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"w-full sm:w-1/3 md:w-2/6 mb-5",children:(0,a.jsx)("div",{className:"flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ",children:"Logo"})}),(0,a.jsxs)("div",{className:"w-full sm:w-3/3 md:w-4/6 text-left md:pl-4",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("div",{className:"w-full md:w-4/6",children:(0,a.jsx)("p",{className:"text-red-500 text-sm",children:"\uff08\u30c0\u30df\u30fc\uff09\u4ee5\u4e0b\u3088\u308a\u652f\u63f4\u306e\u4f7f\u9014\u3068\u3001\u91d1\u984d\u3092\u304a\u9078\u3073\u304f\u3060\u3055\u3044\u3002\u91d1\u984d\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001Paypal\u306e\u30b5\u30a4\u30c8\u3078\u9077\u79fb\u3057\u307e\u3059\u3002"})}),(0,a.jsx)("div",{className:"w-full md:w-2/6",children:(0,a.jsx)("img",{src:"/images/payment.png",alt:"payment"})})]}),(0,a.jsxs)("div",{className:"grid grid-col-2 grid-rows-2 grid-flow-col border-solid border-gray-300 border-t-2 border-b-2",children:[(0,a.jsx)("div",{className:"col-span-2 bg-gray-100 py-5 px-6 border-b-2",children:"\u7a2e\u985e"}),(0,a.jsx)("div",{className:"col-span-2 bg-gray-100 py-5 px-6 ",children:"\u91d1\u984d"}),(0,a.jsx)("div",{className:"col-span-6 col-span-2 py-5 px-6 border-b-2",children:(0,a.jsxs)("select",{className:"form-select block w-full mt-1 border rounded",value:i,onChange:function(e){e.preventDefault(),console.log(e.target.value),c(e.target.value)},children:[(0,a.jsx)("option",{value:"",children:"\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"}),(0,a.jsx)("option",{value:"afghanistan2017",children:"\u30a2\u30d5\u30ac\u30cb\u30b9\u30bf\u30f3\u4eba\u9053\u5371\u6a5f\u5bfe\u5fdc\u652f\u63f4"}),(0,a.jsx)("option",{value:"yemen2015",children:"\u30a4\u30a8\u30e1\u30f3\u4eba\u9053\u5371\u6a5f\u5bfe\u5fdc\u652f\u63f4\uff08\u65e7\uff1a\u30a4\u30a8\u30e1\u30f3\u4eba\u9053\u5371\u6a5f\u5bfe\u5fdc\uff09"}),(0,a.jsx)("option",{value:"iraq-syria",children:"\u30a4\u30e9\u30af\u30fb\u30b7\u30ea\u30a2\u4eba\u9053\u5371\u6a5f\u5bfe\u5fdc\u652f\u63f4\uff08\u65e7\uff1a\u30a4\u30e9\u30af\u30fb\u30b7\u30ea\u30a2\u4eba\u9053\u5371\u6a5f\u5bfe\u5fdc\uff09"}),(0,a.jsx)("option",{value:"japan-disaster2021",children:"2021\u5e74\u8c6a\u96e8\u88ab\u707d\u8005\u652f\u63f4\uff08\u4ee4\u548c3\u5e748\u6708\u8c6a\u96e8\uff09"}),(0,a.jsx)("option",{value:"tohoku",children:"\u6771\u65e5\u672c\u5927\u9707\u707d\u88ab\u707d\u8005\u652f\u63f4"}),(0,a.jsx)("option",{value:"south-sudan",children:"\u5357\u30b9\u30fc\u30c0\u30f3\u96e3\u6c11\u7dca\u6025\u652f\u63f4"}),(0,a.jsx)("option",{value:"myanmar2021",children:"\u30df\u30e3\u30f3\u30de\u30fc\u4eba\u9053\u5371\u6a5f2021"}),(0,a.jsx)("option",{value:"myanmar-refugees2017",children:"\u30df\u30e3\u30f3\u30de\u30fc\u907f\u96e3\u6c11\u4eba\u9053\u652f\u63f4"})]})}),(0,a.jsx)("div",{className:"col-span-6 col-span-2 py-5 px-6 ",children:(0,a.jsxs)("div",{className:"grid grid-cols-4 gap-4 text-center flex ",children:[(0,a.jsx)("div",{className:"border py-3 px-2 border-blue-800 text-xs flex flex-row justify-center items-center ".concat(i?"bg-white":"bg-gray-300"),children:(0,a.jsxs)("a",{href:"/",className:"text-red-500 hover:text-red-500 visited:text-red-500 ".concat(i?"cursor-pointer":"pointer-events-none"),children:[(0,a.jsx)("span",{className:"font-bold",children:"100"}),"\u5186"]})}),(0,a.jsx)("div",{className:"border py-3 px-2 border-blue-800 text-xs flex flex-row justify-center items-center ".concat(i?"bg-white":"bg-gray-300"),children:(0,a.jsxs)("a",{href:"/",className:"text-red-500 hover:text-red-500 visited:text-red-500 ".concat(i?"cursor-pointer":"pointer-events-none"),children:[(0,a.jsx)("span",{className:"font-bold",children:"500"}),"\u5186"]})}),(0,a.jsx)("div",{className:"border py-3 px-2 border-blue-800 text-xs flex flex-row justify-center items-center ".concat(i?"bg-white":"bg-gray-300"),children:(0,a.jsxs)("a",{href:"/",className:"text-red-500 hover:text-red-500 visited:text-red-500 ".concat(i?"cursor-pointer":"pointer-events-none"),children:[(0,a.jsx)("span",{className:"font-bold",children:"1000"}),"\u5186"]})}),(0,a.jsx)("div",{className:"border py-3 px-2 border-blue-800 text-xs flex flex-row justify-center items-center ".concat(i?"bg-white":"bg-gray-300"),children:(0,a.jsx)("a",{href:"/",className:"text-red-500 hover:text-red-500 visited:text-red-500 ".concat(i?"cursor-pointer":"pointer-events-none"),children:(0,a.jsx)("span",{className:"font-bold",children:"\u305d\u306e\u4ed6\u306e\u91d1\u984d"})})})]})})]}),(0,a.jsx)("p",{className:"text-red-500 pt-10 mb-3",children:"\u203b\u30d7\u30eb\u30c0\u30a6\u30f3\u6587\u8a00\u30c0\u30df\u30fc\uff1a\u539f\u5247\u4e00\u822c\u3001\uff0b\u968f\u6642\u7dca\u6025\u652f\u63f4\uff09"}),(0,a.jsx)("p",{className:"",children:(0,a.jsx)("mark",{children:"\u751f\u7269\u591a\u69d8\u6027\u306e\u56de\u5fa9\u3068\u3001\u8131\u70ad\u7d20\u793e\u4f1a\u5b9f\u73fe\u3092\u3081\u3056\u3059WWF\u306e\u6d3b\u52d5\u5168\u822c\u3092\u652f\u63f4\u3059\u308b \u30c8\u30eb\u30b3\u30fb\u30ae\u30ea\u30b7\u30e3\u68ee\u6797\u706b\u707d\u5730\u57df\u306e\u56de\u5fa9\u4fdd\u5168\u3092\u652f\u63f4\u3059\u308b"})})]})]}),(0,a.jsx)("h4",{className:"text-left my-3",children:"Yahoo! \u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u52df\u91d1"}),(0,a.jsxs)("div",{className:"px-6 py-5 w-full bg-white flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"w-full sm:w-1/3 md:w-2/6 mb-5",children:(0,a.jsx)("div",{className:"flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ",children:"Logo"})}),(0,a.jsxs)("div",{className:"w-full sm:w-3/3 md:w-4/6 text-left md:pl-4",children:[(0,a.jsx)("p",{className:"mb-3",children:"Yahoo!\u30b8\u30e3\u30d1\u30f3\u306b\u3054\u5354\u529b\u3044\u305f\u3060\u304d\u3001\u30cd\u30c3\u30c8\u52df\u91d1\u306e\u30dd\u30fc\u30bf\u30eb\u30b5\u30a4\u30c8\u3067WWF\u30b8\u30e3\u30d1\u30f3\u306e \u6d3b\u52d5\u7d39\u4ecb\u3068\u52df\u91d1\u306e\u547c\u3073\u304b\u3051\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002"}),(0,a.jsx)("p",{children:"\u3053\u3061\u3089\u304b\u3089\u25b6\u30ea\u30f3\u30af"})]})]})]}),(0,a.jsxs)("div",{className:2===r?"block":"hidden",id:"link2",children:[(0,a.jsx)("h4",{className:"text-left my-3",children:"\u30e1\u30eb\u30da\u30a4\u3067\u52df\u91d1"}),(0,a.jsxs)("div",{className:"px-6 py-5 w-full bg-white flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"w-full sm:w-1/3 md:w-2/6 mb-5",children:(0,a.jsx)("div",{className:"flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ",children:"\u30b5\u30e0\u30cd\u753b\u50cf"})}),(0,a.jsx)("div",{className:"w-full sm:w-3/3 md:w-4/6 text-left md:pl-4",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"mb-3",children:"\u30d5\u30ea\u30de\u30a2\u30d7\u30ea\u300cmercari\u300d\u306e\u58f2\u308a\u4e0a\u3052\u3082\u30e1\u30eb\u30da\u30a4\u3092\u7d4c\u7531\u3057\u3066\u52df\u91d1\u3067\u304d\u307e\u3059\u3002"}),(0,a.jsx)("p",{className:"mb-3",children:"\u8a73\u7d30\u65b9\u6cd5\u306f\u3053\u3061\u3089\u25b6"}),(0,a.jsx)("p",{className:"text-red-500",children:"\u203b\u52df\u91d1\u5c0e\u7dda\u306e\u30e0\u30fc\u30d3\u30fc\u57cb\u3081\u8fbc\u307fURL\u3042\u308a\u307e\u3059\u3002\u57cb\u3081\u8fbc\u307f\u3082\u53ef\u80fd\u3067\u3059\u304b\uff1f"})]})})]}),(0,a.jsx)("h4",{className:"text-left my-3",children:"Paypay\u3067\u52df\u91d1\uff088\u6708\u6642\u70b9\u3067\u306f\u516c\u958b\u3057\u306a\u3044\uff09"}),(0,a.jsxs)("div",{className:"px-6 py-5 w-full bg-white flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"w-full sm:w-1/3 md:w-2/6 mb-5",children:(0,a.jsx)("div",{className:"flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ",children:"\u30b5\u30e0\u30cd\u753b\u50cf"})}),(0,a.jsx)("div",{className:"w-full sm:w-3/3 md:w-4/6 text-left md:pl-4",children:(0,a.jsx)("p",{className:"mb-3",children:"Dummy dummy dummy"})})]})]}),(0,a.jsxs)("div",{className:3===r?"block":"hidden",id:"link3",children:[(0,a.jsx)("h4",{className:"text-left my-3",children:"\u30d5\u30a1\u30df\u30dd\u30fc\u30c8\u52df\u91d1"}),(0,a.jsxs)("div",{className:"md:px-6 sm:px-2 py-5 w-full bg-white flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"md:w-2/6 sm:w-full justify-center mb-5",children:(0,a.jsx)("img",{className:"md:w-9/12 sm:w-6/12",src:"/images/Famiport.jpeg",alt:"payment"})}),(0,a.jsxs)("div",{className:"md:w-4/6 sm:w-full text-left",children:[(0,a.jsx)("p",{children:"\u5168\u56fd\u306e\u30d5\u30a1\u30df\u30ea\u30fc\u30de\u30fc\u30c8\u3067\u3001\u30de\u30eb\u30c1\u30e1\u30c7\u30a3\u30a2\u7aef\u672b\u300cFami\u30dd\u30fc\u30c8\u300d\u3092\u5229\u7528\u3057\u305f\u300cFami\u30dd\u30fc\u30c8\u52df\u91d1\u300d\u3092\u5b9f\u65bd\u3057\u3066\u3044\u307e\u3059\u3002"}),(0,a.jsx)("p",{children:"\u52df\u91d1\u300d\u30dc\u30bf\u30f3\u306b\u30bf\u30c3\u30c1\u3059\u308b\u3068\u3001WWF\u30b8\u30e3\u30d1\u30f3\u3092\u306f\u3058\u3081\u3001\u652f\u63f4\u3067\u304d\u308b13\u306e\u56e3\u4f53\u304c\u8868\u793a\u3055\u308c\u3001\u597d\u304d\u306a\u56e3\u4f53\u3092\u9078\u3076\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305d\u308c\u305e\u308c\u306e\u56e3\u4f53\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u52df\u91d1\u984d\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),(0,a.jsx)("p",{children:"WWF\u30b8\u30e3\u30d1\u30f3\u3078\u306e\u52df\u91d1\u306f\u3001\u300c1,000\u5186\u300d\u3001\u300c2,000\u5186\u300d\u3001\u300c3,000\u5186\u300d\u3001\u300c5,000\u5186\u300d\u3001\u300c10,000\u5186\u300d\u306e5\u3064\u304b\u3089\u304a\u9078\u3073\u3044\u305f\u3060\u3051\u307e\u3059\u3002"}),(0,a.jsx)("p",{children:"\u91d1\u984d\u3092\u9078\u3076\u3068\u3001Fami\u30dd\u30fc\u30c8\u304b\u3089\u30ec\u30b7\u30fc\u30c8\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u305d\u308c\u3092\u30ec\u30b8\u306b\u304a\u6301\u3061\u3044\u305f\u3060\u304d\u3001\u91d1\u984d\u3092\u304a\u652f\u6255\u304f\u3060\u3055\u3044\u3002"}),(0,a.jsx)("p",{className:"",children:"\u8a73\u3057\u304f\u306f\u3053\u3061\u3089\uff08\u30d5\u30a1\u30df\u30ea\u30fc\u30de\u30fc\u30c8\u306e\u30b5\u30a4\u30c8\u3078\u9077\u79fb"}),(0,a.jsx)("a",{className:"text-based",href:"https://www.family.co.jp/services/application/donation.html",children:(0,a.jsx)("mark",{children:" \u25b6https://www.family.co.jp/services/application/donation.html"})})]})]}),(0,a.jsx)("h4",{className:"text-left my-3",children:"\u8a2d\u7f6e\u52df\u91d1\u7bb1\u304b\u3089\u306e\u52df\u91d1"}),(0,a.jsxs)("div",{className:"md:px-6 sm:px-2 py-5 w-full bg-white flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"md:w-2/6 sm:w-full mb-5",children:(0,a.jsx)("div",{className:"flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ",children:"\u30b5\u30e0\u30cd\u753b\u50cf"})}),(0,a.jsx)("div",{className:"md:w-4/6 sm:w-full text-left",children:(0,a.jsx)("div",{children:(0,a.jsxs)("p",{children:["\u73fe\u5728\u3001WWF\u3067\u306f\u52d5\u7269\u5712\u3084\u52d5\u7269\u75c5\u9662\u3001\u30c1\u30a7\u30fc\u30f3\u5e97\u306a\u3069\u3001\u5404\u7a2e\u65bd\u8a2d\u3084\u591a\u6570\u306e\u5e97\u8217\u306b\u52df\u91d1\u7bb1\u3092\u8a2d\u7f6e\u3057\u3066\u304a\u308a\u307e\u3059\u3002 \u76ee\u306b",(0,a.jsx)("span",{className:"text-red-500",children:"\u3059\u3055\u308c"}),"\u308b\u6a5f\u4f1a\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001\u305c\u3072\u3054\u5354\u529b\u3092\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002"]})})})]})]})]})})})]})})})};function c(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i,{color:"pink"})})}var d=function(){return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center w-full flex-1 md:px-20 sm:px-2 text-center",children:[(0,a.jsx)("div",{className:"keyVisual__nofixed my-5",children:(0,a.jsxs)("div",{className:"sectionBody__pc-980",children:[(0,a.jsx)("ul",{className:"tablink tablink__mein",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.wwf.or.jp/members/",children:"\u4f1a\u54e1\u306e\u7686\u3055\u307e\u3078"})})}),(0,a.jsx)("h1",{className:"mainTitle center",children:"\u52df\u91d1\u6d3b\u52d5\u306b\u53c2\u52a0\u3059\u308b"})]})}),(0,a.jsx)("div",{id:"bodyAreaBg",className:"clearfix pt-5",children:(0,a.jsxs)("div",{id:"mainArea",className:"",children:[(0,a.jsx)("section",{children:(0,a.jsx)("p",{className:"readText",children:"WWF\u3067\u306f\u3001\u591a\u304f\u306e\u65b9\u306b\u3054\u53c2\u52a0\u3044\u305f\u3060\u304d\u306a\u304c\u3089\u3001\u74b0\u5883\u4fdd\u5168\u6d3b\u52d5\u3092\u9032\u3081\u3066\u3086\u304f\u305f\u3081\u3001 \u69d8\u3005\u306a\u5f62\u614b\u3067\u7686\u69d8\u306e\u52df\u91d1\u3092\u304a\u53d7\u3051\u3057\u3066\u3044\u307e\u3059\u3002"})}),(0,a.jsx)(c,{}),(0,a.jsxs)("div",{className:"text-left md:px-6 sm:px-2",children:[(0,a.jsx)("div",{className:"hr01",children:(0,a.jsx)("hr",{})}),(0,a.jsxs)("h2",{className:"titStyle2",children:["\u3010\u304a\u77e5\u3089\u305b\u3011",(0,a.jsx)("br",{}),"WWF\u52df\u91d1\u7bb1\uff08\u30d1\u30f3\u30c0\u30bb\u30c3\u30c8\uff09\u306e\u8cb8\u51fa\u4f11\u6b62\u306b\u3064\u3044\u3066"]}),(0,a.jsxs)("p",{children:["\u5927\u5909\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u304c\u3001WWF\u3067\u306f\u73fe\u5728\u3001\u52df\u91d1\u7bb1\u306a\u3069\u306e\u8cb8\u51fa\u30c4\u30fc\u30eb\uff08\u30d1\u30f3\u30c0\u30bb\u30c3\u30c8\uff09\u306e\u3001\u300c\u65b0\u898f\u304a\u7533\u3057\u8fbc\u307f\u300d\u306b\u3064\u3044\u3066\u306f\u3001\u53d7\u3051\u4ed8\u3051\u3092\u4f11\u6b62\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u3066\u304a\u308a\u307e\u3059\u3002",(0,a.jsx)("br",{}),"\u7686\u3055\u307e\u304b\u3089\u304a\u5bc4\u305b\u3044\u305f\u3060\u3044\u305f\u5927\u5207\u306a\u52df\u91d1\u3092\u3001\u5c11\u3057\u3067\u3082\u591a\u304f\u81ea\u7136\u4fdd\u8b77\u6d3b\u52d5\u306b\u5145\u3066\u308b\u305f\u3081\u3001\u4e8b\u52d9\u5c40\u3067\u306f\u52df\u91d1\u7bb1\u306a\u3069\u306e\u88fd\u4f5c\u8cbb\u3001\u9001\u6599\u3001\u7dad\u6301\u30fb\u7ba1\u7406\u8cbb\u306a\u3069\u306e\u30b3\u30b9\u30c8\u3084\u3001\u52df\u91d1\u696d\u52d9\u306e\u898b\u76f4\u3057\u3092\u884c\u306a\u3044\u3001 \u3088\u308a\u3088\u3044\u5f62\u3067\u7686\u3055\u307e\u306b\u3054\u53c2\u52a0\u3001\u3054\u5354\u529b\u3044\u305f\u3060\u3051\u308b\u65b9\u6cd5\u3092\u691c\u8a0e\u3057\u3066\u304a\u308a\u307e\u3059\u306e\u3067\u3001\u3054\u4e86\u627f\u3092\u3044\u305f\u3060\u3051\u308c\u3070\u5e78\u3044\u3067\u3059\u3002",(0,a.jsx)("br",{}),"\u306a\u304a\u3001\u4eca\u73fe\u5728\u3059\u3067\u306b\u52df\u91d1\u7bb1\u3092\u8a2d\u7f6e\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u7686\u3055\u307e\u304b\u3089\u306e\u52df\u91d1\u306b\u3064\u3044\u3066\u306f\u3001 \u5f93\u6765\u901a\u308a\u3001\u53d7\u4ed8\u3092\u7d99\u7d9a\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u3066\u304a\u308a\u307e\u3059\u306e\u3067\u3001\u5f15\u304d\u7d9a\u304d\u3054\u5354\u529b\u306e\u307b\u3069\u3092\u304a\u9858\u3044\u7533\u3057\u4e0a\u3052\u307e\u3059\u3002"]}),(0,a.jsx)("ul",{className:"link",children:(0,a.jsx)("li",{className:"middleLink",children:(0,a.jsx)("a",{href:"http://www.wwf.or.jp/join/action/bokin/soukin.html",children:"\u3010\u3059\u3067\u306b\u52df\u91d1\u7bb1\u3092\u8a2d\u7f6e\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u65b9\u3078\u3011\u96c6\u307e\u3063\u305f\u52df\u91d1\u306e\u5165\u91d1\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3053\u3061\u3089"})})})]})]})})]})};function h(){return(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)(l.default,{children:[(0,a.jsx)("title",{children:"WWF"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(n,{}),(0,a.jsx)("div",{className:"flex flex-col items-center justify-center min-h-screen py-2 container mx-auto",children:(0,a.jsx)(d,{})})]})}},9008:function(e,s,r){e.exports=r(5443)},1664:function(e,s,r){r(8418)}},function(e){e.O(0,[774,888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);