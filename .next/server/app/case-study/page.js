(()=>{var e={};e.id=175,e.ids=[175],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},82036:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>l,routeModule:()=>h,tree:()=>u});var n=r(50482),s=r(69108),i=r(62563),o=r.n(i),a=r(68300),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);r.d(t,c);let u=["",{children:["case-study",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,45662)),"/Users/shehabwaleed/Development/work/cairostudio/src/app/case-study/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,27422)),"/Users/shehabwaleed/Development/work/cairostudio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/Users/shehabwaleed/Development/work/cairostudio/src/app/case-study/page.jsx"],p="/case-study/page",d={require:r,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/case-study/page",pathname:"/case-study",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},10224:(e,t,r)=>{Promise.resolve().then(r.bind(r,95728))},46377:(e,t,r)=>{var n=r(67598).Symbol;e.exports=n},65945:(e,t,r)=>{var n=r(46377),s=r(51370),i=r(33517),o=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?s(e):i(e)}},62894:(e,t,r)=>{var n=r(69575),s=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(s,""):e}},22335:e=>{var t="object"==typeof global&&global&&global.Object===Object&&global;e.exports=t},51370:(e,t,r)=>{var n=r(46377),s=Object.prototype,i=s.hasOwnProperty,o=s.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var s=o.call(e);return n&&(t?e[a]=r:delete e[a]),s}},33517:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},67598:(e,t,r)=>{var n=r(22335),s="object"==typeof self&&self&&self.Object===Object&&self,i=n||s||Function("return this")();e.exports=i},69575:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},63908:(e,t,r)=>{var n=r(60986),s=r(120),i=r(29155),o=Math.max,a=Math.min;e.exports=function(e,t,r){var c,u,l,p,d,h,f=0,m=!1,g=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var r=c,n=u;return c=u=void 0,f=t,p=e.apply(n,r)}function j(e){var r=e-h,n=e-f;return void 0===h||r>=t||r<0||g&&n>=l}function b(){var e,r,n,i=s();if(j(i))return w(i);d=setTimeout(b,(e=i-h,r=i-f,n=t-e,g?a(n,l-r):n))}function w(e){return(d=void 0,v&&c)?x(e):(c=u=void 0,p)}function y(){var e,r=s(),n=j(r);if(c=arguments,u=this,h=r,n){if(void 0===d)return f=e=h,d=setTimeout(b,t),m?x(e):p;if(g)return clearTimeout(d),d=setTimeout(b,t),x(h)}return void 0===d&&(d=setTimeout(b,t)),p}return t=i(t)||0,n(r)&&(m=!!r.leading,l=(g="maxWait"in r)?o(i(r.maxWait)||0,t):l,v="trailing"in r?!!r.trailing:v),y.cancel=function(){void 0!==d&&clearTimeout(d),f=0,c=h=u=d=void 0},y.flush=function(){return void 0===d?p:w(s())},y}},60986:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},12111:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},56381:(e,t,r)=>{var n=r(65945),s=r(12111);e.exports=function(e){return"symbol"==typeof e||s(e)&&"[object Symbol]"==n(e)}},120:(e,t,r)=>{var n=r(67598);e.exports=function(){return n.Date.now()}},29155:(e,t,r)=>{var n=r(62894),s=r(60986),i=r(56381),o=0/0,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=c.test(e);return r||u.test(e)?l(e.slice(2),r?2:8):a.test(e)?o:+e}},90978:(e,t)=>{"use strict";function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95728:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var n=r(95344),s=r(3729),i=r.n(s),o=r(48414),a=r(53971),c=r(20783),u=r.n(c),l=r(41223),p=r.n(l),d=r(30885);let h={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},f={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},m="mousemove",g="mouseup";function v(e,t){if(0===t)return e;let r=Math.PI/180*t;return[e[0]*Math.cos(r)+e[1]*Math.sin(r),e[1]*Math.cos(r)-e[0]*Math.sin(r)]}var x=r(63908),j=r.n(x),b=r(90978),w=r.n(b);let y=()=>{let[e,t]=(0,s.useState)([]),[r,n]=(0,s.useState)(null),[i,c]=(0,s.useState)(!1),u=(0,s.useCallback)(async()=>{c(!0);try{let e=(await (0,o.PL)((0,o.hJ)(a.db,"projects"))).docs.map(e=>({...e.data(),id:e.id}));sessionStorage.setItem("projects",JSON.stringify(e)),t(e.filter(e=>e.displayed))}catch(e){n(e.message)}finally{c(!1)}},[]);return(0,s.useEffect)(()=>{let e=sessionStorage.getItem("projects");e?(t(JSON.parse(e)),t(JSON.parse(e).filter(e=>e.displayed))):u()},[u]),{projects:e,error:r}},O=(e,t,r,n,s,i,o)=>{let a=n.current[e],c=s.current[e],u=n.current[t],l=s.current[t];d.ZP.timeline({defaults:{ease:"power3.inOut"},onComplete:()=>{o(t),i(!1)}}).to(a,{xPercent:-100*r,autoAlpha:0,duration:1,ease:"power3.inOut"},.1).to(c,{xPercent:-100*r,autoAlpha:0,duration:1,ease:"power3.inOut"},.1).fromTo(u,{xPercent:100*r,autoAlpha:0},{xPercent:0,autoAlpha:1,duration:1,ease:"power3.inOut"},.1).fromTo(l,{xPercent:100*r,autoAlpha:0},{xPercent:0,autoAlpha:1,duration:1,ease:"power3.inOut"},.1)},S=()=>{let{projects:e,error:t}=y(),[r,o]=(0,s.useState)(0),[a,c]=(0,s.useState)(!1),l=(0,s.useRef)([]),x=(0,s.useRef)([]),b=(0,s.useRef)(null),S=(0,s.useCallback)(j()(t=>{if(a||0===e.length)return;c(!0);let n=(r+t+e.length)%e.length;O(r,n,t,l,x,c,o)},300),[r,e.length,a]),_=function(e){var t,r,n;let i;let{trackMouse:o}=e,a=s.useRef(Object.assign({},f)),c=s.useRef(Object.assign({},h)),u=s.useRef(Object.assign({},c.current));for(i in u.current=Object.assign({},c.current),c.current=Object.assign(Object.assign({},h),e),h)void 0===c.current[i]&&(c.current[i]=h[i]);let[l,p]=s.useMemo(()=>(function(e,t){let r=t=>{let r="touches"in t;r&&t.touches.length>1||e((e,s)=>{s.trackMouse&&!r&&(document.addEventListener(m,n),document.addEventListener(g,o));let{clientX:i,clientY:a}=r?t.touches[0]:t,c=v([i,a],s.rotationAngle);return s.onTouchStartOrOnMouseDown&&s.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),f),{initial:c.slice(),xy:c,start:t.timeStamp||0})})},n=t=>{e((e,r)=>{let n="touches"in t;if(n&&t.touches.length>1)return e;if(t.timeStamp-e.start>r.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;let{clientX:s,clientY:i}=n?t.touches[0]:t,[o,a]=v([s,i],r.rotationAngle),c=o-e.xy[0],u=a-e.xy[1],l=Math.abs(c),p=Math.abs(u),d=(t.timeStamp||0)-e.start,f=l>p?c>0?"Right":"Left":u>0?"Down":"Up",m="number"==typeof r.delta?r.delta:r.delta[f.toLowerCase()]||h.delta;if(l<m&&p<m&&!e.swiping)return e;let g={absX:l,absY:p,deltaX:c,deltaY:u,dir:f,event:t,first:e.first,initial:e.initial,velocity:Math.sqrt(l*l+p*p)/(d||1),vxvy:[c/(d||1),u/(d||1)]};g.first&&r.onSwipeStart&&r.onSwipeStart(g),r.onSwiping&&r.onSwiping(g);let x=!1;return(r.onSwiping||r.onSwiped||r[`onSwiped${f}`])&&(x=!0),x&&r.preventScrollOnSwipe&&r.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:g,swiping:!0})})},s=t=>{e((e,r)=>{let n;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<r.swipeDuration){n=Object.assign(Object.assign({},e.eventData),{event:t}),r.onSwiped&&r.onSwiped(n);let s=r[`onSwiped${n.dir}`];s&&s(n)}}else r.onTap&&r.onTap({event:t});return r.onTouchEndOrOnMouseUp&&r.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),f),{eventData:n})})},i=()=>{document.removeEventListener(m,n),document.removeEventListener(g,o)},o=e=>{i(),s(e)},a=(e,t)=>{let i=()=>{};if(e&&e.addEventListener){let o=Object.assign(Object.assign({},h.touchEventOptions),t.touchEventOptions),a=[["touchstart",r,o],["touchmove",n,Object.assign(Object.assign({},o),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",s,o]];a.forEach(([t,r,n])=>e.addEventListener(t,r,n)),i=()=>a.forEach(([t,r])=>e.removeEventListener(t,r))}return i},c={ref:t=>{null!==t&&e((e,r)=>{if(e.el===t)return e;let n={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),n.cleanUpTouch=void 0),r.trackTouch&&t&&(n.cleanUpTouch=a(t,r)),Object.assign(Object.assign(Object.assign({},e),{el:t}),n)})}};return t.trackMouse&&(c.onMouseDown=r),[c,a]})(e=>a.current=e(a.current,c.current),{trackMouse:o}),[o]);return a.current=(t=a.current,r=c.current,n=u.current,r.trackTouch&&t.el?t.cleanUpTouch?r.preventScrollOnSwipe!==n.preventScrollOnSwipe||r.touchEventOptions.passive!==n.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:p(t.el,r)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:p(t.el,r)}):(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0}))),l}({onSwipedLeft:()=>S(1),onSwipedRight:()=>S(-1)});return((0,s.useEffect)(()=>{e.length>0&&(d.ZP.set(l.current[r],{autoAlpha:1}),d.ZP.set(x.current[r],{autoAlpha:1}));let t=e=>{"ArrowRight"===e.key&&S(1),"ArrowLeft"===e.key&&S(-1)};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e,r,S]),0===e.length)?n.jsx("p",{children:"Loading..."}):t?(0,n.jsxs)("p",{children:["Error: ",t]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(w(),{children:[n.jsx("title",{children:"Showcase of Projects - Cairo Studio"}),n.jsx("meta",{name:"description",content:"Explore our unique and innovative projects that showcase our expertise in design, technology, and creativity."}),n.jsx("meta",{name:"keywords",content:"innovative projects, creative design, technology, showcase, your brand name"}),n.jsx("meta",{property:"og:title",content:"Showcase of Projects - Cairo Studio"}),n.jsx("meta",{property:"og:description",content:"Dive into our portfolio of projects, highlighting our skills in design, development, and innovation."}),n.jsx("meta",{property:"og:type",content:"website"}),n.jsx("meta",{property:"og:url",content:window.location.href}),n.jsx("meta",{property:"og:image",content:"URL_TO_IMAGE"})," ",n.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),n.jsx("meta",{name:"twitter:title",content:"Showcase of Projects - Cairo Studio"}),n.jsx("meta",{name:"twitter:description",content:"Discover our projects that define the cutting edge of design and technology."}),n.jsx("meta",{name:"twitter:image",content:"URL_TO_IMAGE"})]}),n.jsx("main",{className:"showCase",children:(0,n.jsxs)("div",{className:"showCase__container",ref:b,..._,children:[e.map((e,t)=>(0,n.jsxs)(i().Fragment,{children:[n.jsx(u(),{href:`/case-study/${e.title}`,className:"slider slider--bg",children:n.jsx("div",{ref:e=>l.current[t]=e,className:`slider__item ${r===t?"slider__item--current":""}`,children:n.jsx(p(),{className:"slider__item-inner",src:e.cover,alt:e.title,width:5500,height:1200})})}),n.jsx("div",{className:"showCase__title",children:(e.title,!1)}),n.jsx(u(),{href:`/case-study/${e.title}`,className:"slider slider--fg",children:n.jsx("div",{ref:e=>x.current[t]=e,className:`slider__item-small ${r===t?"slider__item--current-small":""}`,children:n.jsx(p(),{className:"slider__item-inner-small",src:e.homePage,width:100,height:100,alt:e.title})})})]},e.id)),(0,n.jsxs)("div",{className:"currentProject",children:[(0,n.jsxs)("p",{className:"currentProject__length",children:["00-",r+1," — 00-",e.length]}),n.jsx("h2",{className:"currentProject__title",children:e[r].title})]}),(0,n.jsxs)("div",{className:"buttons",children:[n.jsx("button",{onClick:()=>S(-1),className:"prev-button",children:n.jsx("span",{children:"Prev"})}),n.jsx("button",{onClick:()=>S(1),className:"next-button",children:n.jsx("span",{children:"Next"})})]})]})})]})}},45662:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>s,default:()=>o});let n=(0,r(86843).createProxy)(String.raw`/Users/shehabwaleed/Development/work/cairostudio/src/app/case-study/page.jsx`),{__esModule:s,$$typeof:i}=n,o=n.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(70337);let s=e=>[{type:"image/x-icon",sizes:"24x24",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,0,337,223,885,706],()=>r(82036));module.exports=n})();