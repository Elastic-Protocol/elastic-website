(this["webpackJsonpelastic-website"]=this["webpackJsonpelastic-website"]||[]).push([[6],{237:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(2),c=r.isValidElement;function a(e,t){return function(e,t,n){return c(e)?r.cloneElement(e,"function"===typeof n?n(e.props||{}):n):t}(e,e,t)}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},264:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=(r=n(289))&&r.__esModule?r:{default:r};t.default=c,e.exports=c},265:function(e,t,n){"use strict";var r=n(2),c=Object(r.createContext)({});t.a=c},269:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(35),c=n.n(r),a=n(25),i=n.n(a),o=["xxl","xl","lg","md","sm","xs"],l={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,d=-1,u={},f={matchHandlers:{},dispatch:function(e){return u=e,s.forEach((function(e){return e(u)})),s.size>=1},subscribe:function(e){return s.size||this.register(),d+=1,s.set(d,e),e(u),d},unsubscribe:function(e){s.delete(e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(l).forEach((function(t){var n=l[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),s.clear()},register:function(){var e=this;Object.keys(l).forEach((function(t){var n=l[t],r=function(n){var r=n.matches;e.dispatch(i()(i()({},u),c()({},t,r)))},a=window.matchMedia(n);a.addListener(r),e.matchHandlers[n]={mql:a,listener:r},r(a)}))}};t.a=f},289:function(e,t,n){"use strict";var r=n(51),c=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(2)),i=r(n(290)),o=r(n(86)),l=function(e,t){return a.createElement(o.default,Object.assign({},e,{ref:t,icon:i.default}))};l.displayName="LoadingOutlined";var s=a.forwardRef(l);t.default=s},290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"}},294:function(e,t,n){"use strict";var r=n(25),c=n.n(r),a=n(35),i=n.n(a),o=n(87),l=n.n(o),s=n(52),d=n.n(s),u=n(2),f=n(47),p=n.n(f),m=n(139),h=n(265),b=n(251),j=n(269),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},x=(Object(b.a)("top","middle","bottom","stretch"),Object(b.a)("start","end","center","space-around","space-between"),u.forwardRef((function(e,t){var n,r=e.prefixCls,a=e.justify,o=e.align,s=e.className,f=e.style,b=e.children,x=e.gutter,O=void 0===x?0:x,g=e.wrap,y=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=u.useContext(m.b),N=w.getPrefixCls,_=w.direction,E=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),k=d()(E,2),C=k[0],S=k[1],P=u.useRef(O);u.useEffect((function(){var e=j.a.subscribe((function(e){var t=P.current||0;(!Array.isArray(t)&&"object"===l()(t)||Array.isArray(t)&&("object"===l()(t[0])||"object"===l()(t[1])))&&S(e)}));return function(){return j.a.unsubscribe(e)}}),[]);var L=N("row",r),A=function(){var e=[0,0];return(Array.isArray(O)?O:[O,0]).forEach((function(t,n){if("object"===l()(t))for(var r=0;r<j.b.length;r++){var c=j.b[r];if(C[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t||0})),e}(),I=p()(L,(n={},i()(n,"".concat(L,"-no-wrap"),!1===g),i()(n,"".concat(L,"-").concat(a),a),i()(n,"".concat(L,"-").concat(o),o),i()(n,"".concat(L,"-rtl"),"rtl"===_),n),s),R=c()(c()(c()({},A[0]>0?{marginLeft:A[0]/-2,marginRight:A[0]/-2}:{}),A[1]>0?{marginTop:A[1]/-2,marginBottom:A[1]/2}:{}),f);return u.createElement(h.a.Provider,{value:{gutter:A,wrap:g}},u.createElement("div",c()({},y,{className:I,style:R,ref:t}),b))})));x.displayName="Row",t.a=x},295:function(e,t,n){"use strict";var r=n(35),c=n.n(r),a=n(25),i=n.n(a),o=n(87),l=n.n(o),s=n(2),d=n(47),u=n.n(d),f=n(265),p=n(139),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};var h=["xs","sm","md","lg","xl","xxl"],b=s.forwardRef((function(e,t){var n,r=s.useContext(p.b),a=r.getPrefixCls,o=r.direction,d=s.useContext(f.a),b=d.gutter,j=d.wrap,v=e.prefixCls,x=e.span,O=e.order,g=e.offset,y=e.push,w=e.pull,N=e.className,_=e.children,E=e.flex,k=e.style,C=m(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=a("col",v),P={};h.forEach((function(t){var n,r={},a=e[t];"number"===typeof a?r.span=a:"object"===l()(a)&&(r=a||{}),delete C[t],P=i()(i()({},P),(n={},c()(n,"".concat(S,"-").concat(t,"-").concat(r.span),void 0!==r.span),c()(n,"".concat(S,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),c()(n,"".concat(S,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),c()(n,"".concat(S,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),c()(n,"".concat(S,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),c()(n,"".concat(S,"-rtl"),"rtl"===o),n))}));var L=u()(S,(n={},c()(n,"".concat(S,"-").concat(x),void 0!==x),c()(n,"".concat(S,"-order-").concat(O),O),c()(n,"".concat(S,"-offset-").concat(g),g),c()(n,"".concat(S,"-push-").concat(y),y),c()(n,"".concat(S,"-pull-").concat(w),w),n),N,P),A=i()({},k);return b&&(A=i()(i()(i()({},b[0]>0?{paddingLeft:b[0]/2,paddingRight:b[0]/2}:{}),b[1]>0?{paddingTop:b[1]/2,paddingBottom:b[1]/2}:{}),A)),E&&(A.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E),"auto"!==E||!1!==j||A.minWidth||(A.minWidth=0)),s.createElement("div",i()({},C,{style:A,className:L,ref:t}),_)}));b.displayName="Col",t.a=b},460:function(e,t,n){"use strict";var r=n(294);t.a=r.a},461:function(e,t,n){"use strict";var r=n(295);t.a=r.a},463:function(e,t,n){},499:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(2),a=n(460),i=n(461),o=n(25),l=n.n(o),s=n(35),d=n.n(s),u=n(47),f=n.n(u),p=n(264),m=n.n(p),h=n(139),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},j=function(e){var t,n,r=e.prefixCls,a=e.className,i=e.color,o=void 0===i?"blue":i,s=e.dot,u=e.pending,p=void 0!==u&&u,m=(e.position,e.label),j=e.children,v=b(e,["prefixCls","className","color","dot","pending","position","label","children"]),x=(0,c.useContext(h.b).getPrefixCls)("timeline",r),O=f()((t={},d()(t,"".concat(x,"-item"),!0),d()(t,"".concat(x,"-item-pending"),p),t),a),g=f()((n={},d()(n,"".concat(x,"-item-head"),!0),d()(n,"".concat(x,"-item-head-custom"),s),d()(n,"".concat(x,"-item-head-").concat(o),!0),n));return c.createElement("li",l()({},v,{className:O}),m&&c.createElement("div",{className:"".concat(x,"-item-label")},m),c.createElement("div",{className:"".concat(x,"-item-tail")}),c.createElement("div",{className:g,style:{borderColor:/blue|red|green|gray/.test(o||"")?void 0:o}},s),c.createElement("div",{className:"".concat(x,"-item-content")},j))},v=n(237),x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},O=function(e){var t,n=c.useContext(h.b),r=n.getPrefixCls,a=n.direction,i=e.prefixCls,o=e.pending,s=void 0===o?null:o,u=e.pendingDot,p=e.children,b=e.className,O=e.reverse,g=void 0!==O&&O,y=e.mode,w=void 0===y?"":y,N=x(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),_=r("timeline",i),E="boolean"===typeof s?null:s,k=s?c.createElement(j,{pending:!!s,dot:u||c.createElement(m.a,null)},E):null,C=c.Children.toArray(p);C.push(k),g&&C.reverse();var S=function(e,t){return"alternate"===w?"right"===e.props.position?"".concat(_,"-item-right"):"left"===e.props.position?"".concat(_,"-item-left"):"".concat(_,t%2===0?"-item-left":"-item-right"):"left"===w?"".concat(_,"-item-left"):"right"===w||"right"===e.props.position?"".concat(_,"-item-right"):""},P=C.filter((function(e){return!!e})),L=c.Children.count(P),A="".concat(_,"-item-last"),I=c.Children.map(P,(function(e,t){var n=t===L-2?A:"",r=t===L-1?A:"";return Object(v.a)(e,{className:f()([e.props.className,!g&&s?n:r,S(e,t)])})})),R=C.some((function(e){var t;return!!(null===(t=null===e||void 0===e?void 0:e.props)||void 0===t?void 0:t.label)})),M=f()(_,(t={},d()(t,"".concat(_,"-pending"),!!s),d()(t,"".concat(_,"-reverse"),!!g),d()(t,"".concat(_,"-").concat(w),!!w&&!R),d()(t,"".concat(_,"-label"),R),d()(t,"".concat(_,"-rtl"),"rtl"===a),t),b);return c.createElement("ul",l()({},N,{className:M}),I)};O.Item=j;var g=O,y=n(33),w=n(18);n(463),t.default=function(){return Object(r.jsx)("div",{className:"Start Page",children:Object(r.jsx)("div",{className:"Section__wrapper",children:Object(r.jsx)(a.a,{className:"Section__container",children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)("h2",{children:"Getting started guide"}),Object(r.jsxs)(g,{className:"Start__timeline",mode:"left",children:[Object(r.jsx)(g.Item,{children:Object(r.jsxs)("div",{className:"Start__timeline__item",children:[Object(r.jsx)("h4",{children:"Learn"}),Object(r.jsx)("p",{children:"Understand the project: What is it? How does it work? What are the benefits? What does the future hold?"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"more-link",href:"".concat(w.b),target:"_blank",rel:"noreferrer",children:"Overview"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"more-link",href:"".concat(w.b),target:"_blank",rel:"noreferrer",children:"Project Roadmap"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"more-link",href:"".concat(w.b),target:"_blank",rel:"noreferrer",children:"FAQs"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"more-link",href:"".concat(w.b),target:"_blank",rel:"noreferrer",children:"Overview"})})]})]})}),Object(r.jsx)(g.Item,{children:Object(r.jsxs)("div",{className:"Start__timeline__item",children:[Object(r.jsx)("h4",{children:"Buy Elastic Token (ELS)"}),Object(r.jsx)("p",{children:"ELS can be found on UniSwap and is the easiest way to get exposure to all Elastic assets."}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"more-link",href:"".concat(w.b),target:"_blank",rel:"noreferrer",children:"Community launch"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"more-link",href:"".concat(w.b),target:"_blank",rel:"noreferrer",children:"Tokenomics"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"more-link",href:"https://www.uniswap.org",target:"_blank",rel:"noreferrer",children:"Uniswap (we recommend the ETH pair)"})})]})]})}),Object(r.jsx)(g.Item,{children:Object(r.jsxs)("div",{className:"Start__timeline__item",children:[Object(r.jsx)("h4",{children:"Stake"}),Object(r.jsx)("p",{children:"Leverage your ELS holdings to accumulate Elastic Assets and supercharge your ELS holdings."}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"more-link",href:"https://www.uniswap.org",target:"_blank",rel:"noreferrer",children:"Staking guide"})}),Object(r.jsx)("li",{children:Object(r.jsx)(y.b,{to:"/app/stake",className:"more-link",children:"Staking pools"})})]})]})})]})]})})})})}}}]);
//# sourceMappingURL=6.b780cabc.chunk.js.map