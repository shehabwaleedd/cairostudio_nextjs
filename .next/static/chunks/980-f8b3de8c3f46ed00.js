(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{4930:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=i(1024);i(2265);let s=n._(i(4795));function r(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let i=s.default,n={loading:e=>{let{error:t,isLoading:i,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e),Object.assign(n,t);let o=n.loader;return i({...n,loader:()=>null!=o?o().then(r):Promise.resolve(r(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6005:function(e,t,i){"use strict";function n(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return n}}),i(6491)},4795:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let n=i(1024)._(i(2265)),s=i(6005),r=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function i(e){let i=t.loading,r=n.default.createElement(i,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?n.default.Fragment:s.NoSSR,l=t.lazy;return n.default.createElement(n.default.Suspense,{fallback:r},n.default.createElement(o,null,n.default.createElement(l,e)))}return t.lazy=n.default.lazy(t.loader),i.displayName="LoadableComponent",i}},6993:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=i(1024)._(i(2265)).default.createContext(null)},4033:function(e,t,i){e.exports=i(5313)},3018:function(e,t,i){"use strict";var n=i(1289);function s(){}function r(){}r.resetWarningCache=s,e.exports=function(){function e(e,t,i,s,r,o){if(o!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:s};return i.PropTypes=i,i}},4275:function(e,t,i){e.exports=i(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1853:function(e,t,i){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=i(2265),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},r=n.useState,o=n.useEffect,l=n.useLayoutEffect,a=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!s(e,i)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var i=t(),n=r({inst:{value:i,getSnapshot:t}}),s=n[0].inst,c=n[1];return l(function(){s.value=i,s.getSnapshot=t,u(s)&&c({inst:s})},[e,i,t]),o(function(){return u(s)&&c({inst:s}),e(function(){u(s)&&c({inst:s})})},[e]),a(i),i};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},8704:function(e,t,i){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=i(2265),s=i(6272),r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=s.useSyncExternalStore,l=n.useRef,a=n.useEffect,u=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,i,n,s){var h=l(null);if(null===h.current){var f={hasValue:!1,value:null};h.current=f}else f=h.current;var d=o(e,(h=u(function(){function e(e){if(!a){if(a=!0,o=e,e=n(e),void 0!==s&&f.hasValue){var t=f.value;if(s(t,e))return l=t}return l=e}if(t=l,r(o,e))return t;var i=n(e);return void 0!==s&&s(t,i)?t:(o=e,l=i)}var o,l,a=!1,u=void 0===i?null:i;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,i,n,s]))[0],h[1]);return a(function(){f.hasValue=!0,f.value=d},[d]),c(d),d}},6272:function(e,t,i){"use strict";e.exports=i(1853)},5401:function(e,t,i){"use strict";e.exports=i(8704)},6067:function(e,t,i){"use strict";i.d(t,{pi:function(){return D}});var n,s,r=i(2265),o="undefined"!=typeof window&&new class{constructor(){this.raf=e=>{requestAnimationFrame(this.raf);let t=e-this.now;this.now=e;for(let i=0;i<this.callbacks.length;i++)this.callbacks[i].callback(e,t)},this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf)}add(e,t=0){return this.callbacks.push({callback:e,priority:t}),this.callbacks.sort((e,t)=>e.priority-t.priority),()=>this.remove(e)}remove(e){this.callbacks=this.callbacks.filter(({callback:t})=>e!==t)}},l=function(e,t,i){var n=null,s=null,r=function(){n&&(clearTimeout(n),s=null,n=null)},o=function(){if(!t)return e.apply(this,arguments);var o=this,l=arguments,a=i&&!n;if(r(),s=function(){e.apply(o,l)},n=setTimeout(function(){if(n=null,!a){var e=s;return s=null,e()}},t),a)return s()};return o.cancel=r,o.flush=function(){var e=s;r(),e&&e()},o};let a=e=>{let t;let i=new Set,n=(e,n)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=n?n:"object"!=typeof s||null===s)?s:Object.assign({},t,s),i.forEach(i=>i(t,e))}},s=()=>t,r={setState:n,getState:s,subscribe:e=>(i.add(e),()=>i.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),i.clear()}};return t=e(n,s,r),r},u=e=>e?a(e):a;var c=i(5401);let{useDebugValue:h}=r,{useSyncExternalStoreWithSelector:f}=c,d=!1,p=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?u(e):e,i=(e,i)=>(function(e,t=e.getState,i){i&&!d&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),d=!0);let n=f(e.subscribe,e.getState,e.getServerState||e.getState,t,i);return h(n),n})(t,e,i);return Object.assign(i,t),i};function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}let v=(n=e=>({elements:[],addElement:t=>{e(e=>({elements:[...e.elements,t]}))},removeElement:t=>{e(e=>({elements:e.elements.filter(e=>e!==t)}))}}))?p(n):p;function g({ignoreTransform:e=!1,ignoreSticky:t=!0,lazy:i=!1,debounce:n=500,resizeDebounce:s=n,callback:o=()=>{}}={},a=[]){let[u,c]=(0,r.useState)(),[h,f]=(0,r.useState)({}),d=(0,r.useRef)({}),[p]=function({lazy:e=!1,debounce:t=500,box:i="border-box",callback:n=()=>{}}={},s=[]){let o=(0,r.useRef)({}),[a,u]=(0,r.useState)({}),[c,h]=(0,r.useState)();(0,r.useEffect)(()=>{if(!c)return;let s=l(([t])=>{o.current=t,n(t),e||u(t)},t,!0),r=new ResizeObserver(s);return r.observe(c,{box:i}),()=>{r.disconnect(),s.cancel()}},[c,e,t,i,...s]);let f=(0,r.useCallback)(()=>o.current,[]);return[h,e?f:a]}({lazy:!0,debounce:s,callback:e=>{let t=e.borderBoxSize[0].inlineSize,n=e.borderBoxSize[0].blockSize;d.current.width=t,d.current.height=n,o(d.current),i||f(e=>m({},e,{width:t,height:n}))}},[i,s,...a]),g=v(({elements:e})=>e);(0,r.useEffect)(()=>{if(!u)return;let s=l(()=>{let n,s;if(t&&function e(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&e(t.offsetParent)}(u),e)n=function e(t,i=0){let n=i+t.offsetTop;return t.offsetParent?e(t.offsetParent,n):n}(u),s=function e(t,i=0){let n=i+t.offsetLeft;return t.offsetParent?e(t.offsetParent,n):n}(u);else{let e=u.getBoundingClientRect();n=e.top+function e(t,i=0){let n=i+t.scrollTop;return t.offsetParent?e(t.offsetParent,n):n+window.scrollY}(u),s=e.left+function e(t,i=0){let n=i+t.scrollLeft;return t.offsetParent?e(t.offsetParent,n):n+window.scrollX}(u)}t&&function e(t){var i;"true"===(null==t||null==(i=t.dataset)?void 0:i.sticky)&&(t.style.removeProperty("position"),t.dataset.sticky="true",delete t.dataset.sticky),t.parentNode&&e(t.parentNode)}(u),d.current.top=n,d.current.left=s,o(d.current),i||f(e=>m({},e,{top:n,left:s}))},n,!0),r=new ResizeObserver(s);return r.observe(document.body),g.forEach(e=>{r.observe(e)}),()=>{r.disconnect(),s.cancel()}},[u,i,n,e,t,g,...a]);let b=(0,r.useCallback)(()=>d.current,[]);return[e=>{c(e),p(e)},i?b:h]}function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function y(e,t,i){return Math.max(e,Math.min(t,i))}g.observe=function(e){v.getState().addElement(e)},g.unobserve=function(e){v.getState().removeElement(e)};class S{advance(e){var t,i,n,s;if(!this.isRunning)return;let r=!1;if(this.lerp)this.value=(i=this.value,n=this.to,(1-(s=1-Math.exp(-60*this.lerp*e)))*i+s*n),Math.round(this.value)===this.to&&(this.value=this.to,r=!0);else{this.currentTime+=e;let t=y(0,this.currentTime/this.duration,1),i=(r=t>=1)?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}null==(t=this.onUpdate)||t.call(this,this.value,r),r&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i=.1,duration:n=1,easing:s=e=>e,onStart:r,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,null==r||r(),this.onUpdate=o}}class w{constructor({wrapper:e,content:t,autoResize:i=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=e,this.content=t,i){var n;let e;let t=(n=this.resize,function(){let t=arguments,i=this;clearTimeout(e),e=setTimeout(function(){n.apply(i,t)},250)});this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(t),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(t),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var e,t;null==(e=this.wrapperResizeObserver)||e.disconnect(),null==(t=this.contentResizeObserver)||t.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class E{constructor(){this.events={}}emit(e,...t){let i=this.events[e]||[];for(let e=0,n=i.length;e<n;e++)i[e](...t)}on(e,t){var i;return(null==(i=this.events[e])?void 0:i.push(t))||(this.events[e]=[t]),()=>{var i;this.events[e]=null==(i=this.events[e])?void 0:i.filter(e=>t!==e)}}off(e,t){var i;this.events[e]=null==(i=this.events[e])?void 0:i.filter(e=>t!==e)}destroy(){this.events={}}}class O{constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=2,normalizeWheel:n=!1}){this.onTouchStart=e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0}},this.onTouchMove=e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:e})},this.onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})},this.onWheel=e=>{let{deltaX:t,deltaY:i}=e;this.normalizeWheel&&(t=y(-100,t,100),i=y(-100,i,100)),t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})},this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.normalizeWheel=n,this.touchStart={x:null,y:null},this.emitter=new E,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class T{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:i=e,eventsTarget:n=i,smoothWheel:s=!0,smoothTouch:r=!1,syncTouch:o=!1,syncTouchLerp:l=.1,__iosNoInertiaSyncTouchLerp:a=.4,touchInertiaMultiplier:u=35,duration:c,easing:h=e=>Math.min(1,1.001-Math.pow(2,-10*e)),lerp:f=!c&&.1,infinite:d=!1,orientation:p="vertical",gestureOrientation:m="vertical",touchMultiplier:v=1,wheelMultiplier:g=1,normalizeWheel:y=!1,autoResize:T=!0}={}){this.onVirtualScroll=({deltaX:e,deltaY:t,event:i})=>{if(i.ctrlKey)return;let n=i.type.includes("touch"),s=i.type.includes("wheel");if("both"===this.options.gestureOrientation&&0===e&&0===t||"vertical"===this.options.gestureOrientation&&0===t||"horizontal"===this.options.gestureOrientation&&0===e||n&&"vertical"===this.options.gestureOrientation&&0===this.scroll&&!this.options.infinite&&t<=0)return;let r=i.composedPath();if((r=r.slice(0,r.indexOf(this.rootElement))).find(e=>{var t;return(null==e.hasAttribute?void 0:e.hasAttribute("data-lenis-prevent"))||n&&(null==e.hasAttribute?void 0:e.hasAttribute("data-lenis-prevent-touch"))||s&&(null==e.hasAttribute?void 0:e.hasAttribute("data-lenis-prevent-wheel"))||(null==(t=e.classList)?void 0:t.contains("lenis"))}))return;if(this.isStopped||this.isLocked)return void i.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&n||this.options.smoothWheel&&s,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();i.preventDefault();let o=t;"both"===this.options.gestureOrientation?o=Math.abs(t)>Math.abs(e)?t:e:"horizontal"===this.options.gestureOrientation&&(o=e);let l=n&&this.options.syncTouch,a=n&&"touchend"===i.type&&Math.abs(o)>1;a&&(o=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+o,b({programmatic:!1},l&&{lerp:a?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-e),this.emit()}},window.lenisVersion="1.0.28",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:i,eventsTarget:n,smoothWheel:s,smoothTouch:r,syncTouch:o,syncTouchLerp:l,__iosNoInertiaSyncTouchLerp:a,touchInertiaMultiplier:u,duration:c,easing:h,lerp:f,infinite:d,gestureOrientation:m,orientation:p,touchMultiplier:v,wheelMultiplier:g,normalizeWheel:y,autoResize:T},this.animate=new S,this.emitter=new E,this.dimensions=new w({wrapper:e,content:t,autoResize:T}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s||r,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll=new O(n,{touchMultiplier:v,wheelMultiplier:g,normalizeWheel:y}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1),this.toggleClass("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(e){let t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:i=!1,lock:n=!1,duration:s=this.options.duration,easing:r=this.options.easing,lerp:o=!s&&this.options.lerp,onComplete:l=null,force:a=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||a){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var c;let i;if("string"==typeof e?i=document.querySelector(e):null!=(c=e)&&c.nodeType&&(i=e),i){if(this.options.wrapper!==window){let e=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?e.left:e.top}let n=i.getBoundingClientRect();e=(this.isHorizontal?n.left:n.top)+this.animatedScroll}}if("number"==typeof e){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=y(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(null==l||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:r,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(e,t)=>{this.isScrolling=!0,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),u&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),null==l||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var e;return this.options.infinite?(this.animatedScroll%(e=this.limit)+e)%e:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClass("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClass("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClass("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClass("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClass(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}var k=i(4275);let R=e=>{let t;let i=new Set,n=(e,n)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=n?n:"object"!=typeof s||null===s)?s:Object.assign({},t,s),i.forEach(i=>i(t,e))}},s=()=>t,r={setState:n,getState:s,subscribe:e=>(i.add(e),()=>i.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),i.clear()}};return t=e(n,s,r),r},_=e=>e?R(e):R,{useDebugValue:z}=r,{useSyncExternalStoreWithSelector:C}=c,P=!1,x=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?_(e):e,i=(e,i)=>(function(e,t=e.getState,i){i&&!P&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),P=!0);let n=C(e.subscribe,e.getState,e.getServerState||e.getState,t,i);return z(n),n})(t,e,i);return Object.assign(i,t),i};var L=function(){for(var e,t,i=0,n="";i<arguments.length;)(e=arguments[i++])&&(t=function e(t){var i,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(i=0;i<t.length;i++)t[i]&&(n=e(t[i]))&&(s&&(s+=" "),s+=n);else for(i in t)t[i]&&(s&&(s+=" "),s+=i)}return s}(e))&&(n&&(n+=" "),n+=t);return n};function M(){return(M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}let j=["children","root","options","autoRaf","rafPriority","className"],N=(0,r.createContext)(),W=(s=()=>({}))?x(s):x,D=(0,r.forwardRef)((e,t)=>{let{children:i,root:n=!1,options:s={},autoRaf:l=!0,rafPriority:a=0,className:u}=e,c=function(e,t){if(null==e)return{};var i,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(i=r[n])>=0||(s[i]=e[i]);return s}(e,j),h=(0,r.useRef)(),f=(0,r.useRef)(),[d,p]=(0,r.useState)(),m=(0,r.useRef)([]),v=(0,r.useCallback)((e,t)=>{m.current.push({callback:e,priority:t}),m.current.sort((e,t)=>e.priority-t.priority)},[]),g=(0,r.useCallback)(e=>{m.current=m.current.filter(t=>t.callback!==e)},[]);(0,r.useImperativeHandle)(t,()=>d,[d]),(0,r.useEffect)(()=>{let e=new T(M({},s,!n&&{wrapper:h.current,content:f.current}));return p(e),()=>{e.destroy(),p(void 0)}},[n,JSON.stringify(s)]),function(e,t=0){(0,r.useEffect)(()=>{if(e)return o.add(e,t),()=>o.remove(e)},[e,t])}(e=>{l&&(null==d||d.raf(e))},a),(0,r.useEffect)(()=>{n&&d&&W.setState({lenis:d,addCallback:v,removeCallback:g})},[n,d,v,g]);let b=(0,r.useCallback)(e=>{for(let t=0;t<m.current.length;t++)m.current[t].callback(e)},[]);(0,r.useEffect)(()=>(null==d||d.on("scroll",b),()=>{null==d||d.off("scroll",b)}),[d,b]);let y=(0,r.useCallback)(()=>{h.current&&(h.current.className=L(null==d?void 0:d.className,u))},[d,u]);return(0,r.useEffect)(()=>(y(),null==d||d.on("className change",y),()=>{null==d||d.off("className change",y)}),[d,y]),r.createElement(N.Provider,{value:{lenis:d,addCallback:v,removeCallback:g}},n?i:r.createElement("div",M({ref:h,className:L(null==d?void 0:d.className,u)},c),r.createElement("div",{ref:f},i)))});D.displayName="ReactLenis",D.propTypes={children:k.node,root:k.bool,options:k.object,autoRaf:k.bool,rafPriority:k.number,className:k.string}},2167:function(e,t,i){"use strict";i.d(t,{M:function(){return v}});var n=i(2265),s=i(538);function r(){let e=(0,n.useRef)(!1);return(0,s.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var o=i(2363),l=i(8243),a=i(961);class u extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let i=(0,n.useId)(),s=(0,n.useRef)(null),r=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:e,height:n,top:o,left:l}=r.current;if(t||!s.current||!e||!n)return;s.current.dataset.motionPopId=i;let a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[t]),n.createElement(u,{isPresent:t,childRef:s,sizeRef:r},n.cloneElement(e,{ref:s}))}let h=({children:e,initial:t,isPresent:i,onExitComplete:s,custom:r,presenceAffectsLayout:o,mode:u})=>{let h=(0,a.h)(f),d=(0,n.useId)(),p=(0,n.useMemo)(()=>({id:d,initial:t,isPresent:i,custom:r,onExitComplete:e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;s&&s()},register:e=>(h.set(e,!1),()=>h.delete(e))}),o?void 0:[i]);return(0,n.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[i]),n.useEffect(()=>{i||h.size||!s||s()},[i]),"popLayout"===u&&(e=n.createElement(c,{isPresent:i},e)),n.createElement(l.O.Provider,{value:p},e)};function f(){return new Map}var d=i(781),p=i(6567);let m=e=>e.key||"",v=({children:e,custom:t,initial:i=!0,onExitComplete:l,exitBeforeEnter:a,presenceAffectsLayout:u=!0,mode:c="sync"})=>{var f;(0,p.k)(!a,"Replace exitBeforeEnter with mode='wait'");let v=(0,n.useContext)(d.p).forceRender||function(){let e=r(),[t,i]=(0,n.useState)(0),s=(0,n.useCallback)(()=>{e.current&&i(t+1)},[t]);return[(0,n.useCallback)(()=>o.Wi.postRender(s),[s]),t]}()[0],g=r(),b=function(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}(e),y=b,S=(0,n.useRef)(new Map).current,w=(0,n.useRef)(y),E=(0,n.useRef)(new Map).current,O=(0,n.useRef)(!0);if((0,s.L)(()=>{O.current=!1,function(e,t){e.forEach(e=>{let i=m(e);t.set(i,e)})}(b,E),w.current=y}),f=()=>{O.current=!0,E.clear(),S.clear()},(0,n.useEffect)(()=>()=>f(),[]),O.current)return n.createElement(n.Fragment,null,y.map(e=>n.createElement(h,{key:m(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:u,mode:c},e)));y=[...y];let T=w.current.map(m),k=b.map(m),R=T.length;for(let e=0;e<R;e++){let t=T[e];-1!==k.indexOf(t)||S.has(t)||S.set(t,void 0)}return"wait"===c&&S.size&&(y=[]),S.forEach((e,i)=>{if(-1!==k.indexOf(i))return;let s=E.get(i);if(!s)return;let r=T.indexOf(i),o=e;o||(o=n.createElement(h,{key:m(s),isPresent:!1,onExitComplete:()=>{S.delete(i);let e=Array.from(E.keys()).filter(e=>!k.includes(e));if(e.forEach(e=>E.delete(e)),w.current=b.filter(t=>{let n=m(t);return n===i||e.includes(n)}),!S.size){if(!1===g.current)return;v(),l&&l()}},custom:t,presenceAffectsLayout:u,mode:c},s),S.set(i,o)),y.splice(r,0,o)}),y=y.map(e=>{let t=e.key;return S.has(t)?e:n.createElement(h,{key:m(e),isPresent:!0,presenceAffectsLayout:u,mode:c},e)}),n.createElement(n.Fragment,null,S.size?y:y.map(e=>(0,n.cloneElement)(e)))}}}]);