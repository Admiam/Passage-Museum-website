(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,i){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";var i=n(9361).default,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,g=e.priority,v=void 0!==g&&g,z=e.loading,k=e.lazyRoot,O=void 0===k?null:k,E=e.lazyBoundary,M=e.className,R=e.quality,L=e.width,C=e.height,I=e.style,P=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,B=e.placeholder,D=void 0===B?"empty":B,U=e.blurDataURL,W=h(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=l.useContext(d.ImageConfigContext),T=l.useMemo((function(){var e=y||H||c.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[H]),F=W,V=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var K=_;if("loader"in F){if(F.loader){var Z=F.loader;K=function(e){e.config;var t=h(e,["config"]);return Z(t)}}delete F.loader}var G="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var J=j(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(U=U||J.blurDataURL,G=J.src,(!V||"fill"!==V)&&(C=C||J.height,L=L||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:G;var Q=S(L),X=S(C),Y=S(R),$=!v&&("lazy"===z||"undefined"===typeof z);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,$=!1);b.has(t)&&($=!1);m&&(f=!0);var ee,te=r(l.useState(!1),2),ne=te[0],ie=te[1],re=r(s.useIntersection({rootRef:O,rootMargin:E||"200px",disabled:!$}),3),oe=re[0],ae=re[1],le=re[2],ue=!$||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q};0;var pe=Object.assign({},I,fe),ge="blur"!==D||ne?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(U,'")')};if("fill"===V)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof X){var he=X/Q,ve=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===V?(ce.display="block",ce.position="relative",de=!0,se.paddingTop=ve):"intrinsic"===V?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",de=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===V&&(ce.display="inline-block",ce.position="relative",ce.width=Q,ce.height=X)}else 0;var me={src:w,srcSet:void 0,sizes:void 0};ue&&(me=x({config:T,src:t,unoptimized:f,layout:V,width:Q,quality:Y,sizes:n,loader:K}));var ye=t;0;var be,we="imagesrcset",ze="imagesizes";we="imageSrcSet",ze="imageSizes";var je=(i(be={},we,me.srcSet),i(be,ze,me.sizes),be),xe=l.default.useLayoutEffect,Se=l.useRef(N),_e=l.useRef(t);l.useEffect((function(){Se.current=N}),[N]),xe((function(){_e.current!==t&&(le(),_e.current=t)}),[le,t]);var ke=p({isLazy:$,imgAttributes:me,heightInt:X,widthInt:Q,qualityInt:Y,layout:V,className:M,imgStyle:pe,blurStyle:ge,loading:z,config:T,unoptimized:f,placeholder:D,loader:K,srcString:ye,onLoadingCompleteRef:Se,setBlurComplete:ie,setIntersection:oe,isVisible:ue,noscriptSizes:n},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ce},de?l.default.createElement("span",{style:se},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(A,Object.assign({},ke))),v?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},je))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(5443))&&a.__esModule?a:{default:a},c=n(9309),s=n(7190),d=n(9977),f=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function g(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function h(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1}||{},m=v.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var z=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(O(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(O(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(O(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,l=e.quality,u=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(i);l)c.push(parseInt(l[2]));if(c.length){var s,d=.01*(s=Math).min.apply(s,o(c));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,u),d=s.widths,f=s.kind,p=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[p]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=z.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,i,r,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,u=e.blurStyle,c=e.isLazy,s=e.placeholder,d=e.loading,f=e.srcString,g=e.config,v=e.unoptimized,m=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,j=e.onError,S=(e.isVisible,e.noscriptSizes),_=h(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=c?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":r,className:o,style:p({},a,u),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&k(e,f,0,s,y,b)}),[w,f,r,s,y,b]),onLoad:function(e){k(e.currentTarget,f,0,s,y,b),z&&z(e)},onError:function(e){"blur"===s&&b(!0),j&&j(e)}})),(c||"blur"===s)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},_,x({config:g,src:f,unoptimized:v,layout:r,width:n,quality:i,sizes:S,loader:m}),{decoding:"async","data-nimg":r,style:a,className:o,loading:d}))))};function O(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var i=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(6273),l=n(2725),u=n(3462),c=n(1018),s=n(7190),d=n(1210),f=n(8684);var p="undefined"!==typeof o.default.useTransition,g={};function h(e,t,n,i){if(e&&a.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;g[t+"%"+n+(r?"%"+r:"")]=!0}}var v=o.default.forwardRef((function(e,t){var n,r=e.href,v=e.as,m=e.children,y=e.prefetch,b=e.passHref,w=e.replace,z=e.shallow,j=e.scroll,x=e.locale,S=e.onClick,_=e.onMouseEnter,k=e.legacyBehavior,A=void 0===k?!0!==Boolean(!1):k,O=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=m,!A||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var E=!1!==y,M=i(p?o.default.useTransition():[],2)[1],R=o.default.useContext(u.RouterContext),L=o.default.useContext(c.AppRouterContext);L&&(R=L);var C,I=o.default.useMemo((function(){var e=i(a.resolveHref(R,r,!0),2),t=e[0],n=e[1];return{href:t,as:v?a.resolveHref(R,v):n||t}}),[R,r,v]),P=I.href,q=I.as,N=o.default.useRef(P),B=o.default.useRef(q);A&&(C=o.default.Children.only(n));var D=A?C&&"object"===typeof C&&C.ref:t,U=i(s.useIntersection({rootMargin:"200px"}),3),W=U[0],H=U[1],T=U[2],F=o.default.useCallback((function(e){B.current===q&&N.current===P||(T(),B.current=q,N.current=P),W(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[q,D,P,T,W]);o.default.useEffect((function(){var e=H&&E&&a.isLocalURL(P),t="undefined"!==typeof x?x:R&&R.locale,n=g[P+"%"+q+(t?"%"+t:"")];e&&!n&&h(R,P,q,{locale:t})}),[q,P,H,x,E,R]);var V={ref:F,onClick:function(e){A||"function"!==typeof S||S(e),A&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,l,u,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var s=function(){t[r?"replace":"push"](n,i,{shallow:o,locale:u,scroll:l})};c?c(s):s()}}(e,R,P,q,w,z,j,x,L?M:void 0)},onMouseEnter:function(e){A||"function"!==typeof _||_(e),A&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),a.isLocalURL(P)&&h(R,P,q,{priority:!0})}};if(!A||b||"a"===C.type&&!("href"in C.props)){var K="undefined"!==typeof x?x:R&&R.locale,Z=R&&R.isLocaleDomain&&d.getDomainLocale(q,K,R.locales,R.domainLocales);V.href=Z||f.addBasePath(l.addLocale(q,K,R&&R.defaultLocale))}return A?o.default.cloneElement(C,V):o.default.createElement("a",Object.assign({},O,V),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,s=r.useRef(),d=i(r.useState(!1),2),f=d[0],p=d[1],g=i(r.useState(null),2),h=g[0],v=g[1];r.useEffect((function(){if(a){if(s.current&&(s.current(),s.current=void 0),c||f)return;return h&&h.tagName&&(s.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=l.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},u.push(n),l.set(n,t),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);var t=u.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&u.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[h,c,n,t,f]);var m=r.useCallback((function(){p(!1)}),[]);return[v,f,m]};var r=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var r=((i=n(7294))&&i.__esModule?i:{default:i}).default.createContext(null);t.AppRouterContext=r},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)}}]);