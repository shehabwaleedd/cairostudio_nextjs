"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{3193:function(e,s,t){t.r(s);var n=t(7437),r=t(2265),i=t(7505),a=t(5745),o=t(3379),l=t(2106);s.default=()=>{let e=(0,r.useRef)(null),[s,t]=(0,r.useState)(!1),[c,d]=(0,r.useState)(0);(0,r.useEffect)(()=>{{t(!0);let e=()=>{d(window.scrollY/(document.body.offsetHeight-window.innerHeight))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}},[]);let[u,h,w]=(0,i.F)(o.d,["/assets/color.webp","/assets/normal.webp","/assets/occlusion.webp"]);return(0,n.jsx)(a.Xz,{ref:e,children:s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("ambientLight",{intensity:.1}),(0,n.jsx)("directionalLight",{intensity:4,position:[1,0,-.15]}),(0,n.jsxs)(l.E.mesh,{scale:2.5,"rotation-y":c*Math.PI*2,children:[(0,n.jsx)("sphereGeometry",{args:[1,64,64]}),(0,n.jsx)("meshStandardMaterial",{map:u,normalMap:h,aoMap:w})]})]})})}}}]);