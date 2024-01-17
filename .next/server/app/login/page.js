(()=>{var e={};e.id=626,e.ids=[626],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},83164:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var r=s(50482),i=s(69108),a=s(62563),o=s.n(a),n=s(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1665)),"/Users/shehabwaleed/Development/work/cairostudio/src/app/login/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,27422)),"/Users/shehabwaleed/Development/work/cairostudio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/shehabwaleed/Development/work/cairostudio/src/app/login/page.jsx"],d="/login/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},86653:(e,t,s)=>{Promise.resolve().then(s.bind(s,96282))},96282:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(95344),i=s(3729),a=s(22254),o=s(49931),n=s(20783),l=s.n(n);s(57602);let c=function(){let[e,t]=(0,i.useState)(""),[s,n]=(0,i.useState)(""),[c,u]=(0,i.useState)(""),[d,p]=(0,i.useState)(!1),[m,g]=(0,i.useState)(!1),[x,h]=(0,i.useState)({}),{signIn:_}=(0,o.useUserAuth)(),v=(0,a.useRouter)(),f=async t=>{t.preventDefault(),u("");try{await _(e,s),console.log("Logged in successfully"),v.push("/admin")}catch(e){u(e.message),console.log(c)}};(0,i.useEffect)(()=>{sessionStorage.getItem("hasLoginShown")||(b(),sessionStorage.setItem("hasLoginShown","true"))},[]);let b=()=>{let e=localStorage.getItem("rememberedEmail"),s=localStorage.getItem("rememberedPassword");e&&s&&(t(e),n(s),p(!0))};return r.jsx("section",{className:"login",children:r.jsx("div",{className:"login__container containered",children:r.jsx("div",{className:"login__content",children:r.jsx("form",{className:"login__form",onSubmit:f,children:(0,r.jsxs)("div",{className:"form__container",children:[(0,r.jsxs)("div",{className:"form__container_form-input",children:[r.jsx("h1",{children:"Login"}),r.jsx("div",{className:"login__input",children:r.jsx("input",{type:"email",id:"email",className:"login__input-field",placeholder:"Enter Email",value:e,onChange:e=>t(e.target.value)})}),r.jsx("div",{className:"login__input",children:r.jsx("input",{type:"password",id:"password",className:"login__input-field left-aligned-input",placeholder:"Enter Password",value:s,onChange:e=>n(e.target.value),style:{textAlign:"left"}})}),r.jsx("div",{className:"login__button",children:r.jsx("button",{onClick:t=>{t.preventDefault(),u(""),m?(localStorage.setItem("rememberedEmail",e),localStorage.setItem("rememberedPassword",s)):(localStorage.removeItem("rememberedEmail"),localStorage.removeItem("rememberedPassword")),f(t)},type:"submit",className:"login__button-sign",children:r.jsx("h3",{children:"Login Title"})})}),(0,r.jsxs)("div",{className:"login__checkbox",children:[r.jsx("label",{children:r.jsx("input",{type:"checkbox",checked:m,onChange:e=>{g(e.target.checked)},required:!0})}),r.jsx("p",{children:"Remember Password"})]}),x.agreed&&r.jsx("p",{className:"error-message",children:x.agreed})]}),r.jsx("div",{className:"login__forgot",children:(0,r.jsxs)("span",{className:"login__forgot",children:["Forgot Password",r.jsx(l(),{className:"clickhere__button",href:"/passwordreset",children:"Login"})]})})]})})})})})}},1665:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>o});let r=(0,s(86843).createProxy)(String.raw`/Users/shehabwaleed/Development/work/cairostudio/src/app/login/page.jsx`),{__esModule:i,$$typeof:a}=r,o=r.default},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(70337);let i=e=>[{type:"image/x-icon",sizes:"24x24",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},57602:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,0,337,706],()=>s(83164));module.exports=r})();