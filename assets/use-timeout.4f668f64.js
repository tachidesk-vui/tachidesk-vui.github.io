import{o as z,Y as q,w as M,z as $,g as W,A as x,Z as p,Q as d,L as k,$ as B,J as F}from"./index.be2a1a55.js";import{v as D,b as I}from"./QBtn.c26c6b21.js";import{a as _,b as j,h as J}from"./scroll.1b357255.js";function N(e,o,r){let l;function i(){l!==void 0&&(q.remove(l),l=void 0)}return z(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>r.value===!0,handler:o},q.add(l)}}}const ee={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},oe=["beforeShow","show","beforeHide","hide"];function te({showing:e,canShow:o,hideOnRouteChange:r,handleShow:l,handleHide:i,processOnMount:m}){const s=W(),{props:n,emit:u,proxy:V}=s;let a;function X(t){e.value===!0?b(t):L(t)}function L(t){if(n.disable===!0||t!==void 0&&t.qAnchorHandled===!0||o!==void 0&&o(t)!==!0)return;const c=n["onUpdate:modelValue"]!==void 0;c===!0&&(u("update:modelValue",!0),a=t,x(()=>{a===t&&(a=void 0)})),(n.modelValue===null||c===!1)&&E(t)}function E(t){e.value!==!0&&(e.value=!0,u("beforeShow",t),l!==void 0?l(t):u("show",t))}function b(t){if(n.disable===!0)return;const c=n["onUpdate:modelValue"]!==void 0;c===!0&&(u("update:modelValue",!1),a=t,x(()=>{a===t&&(a=void 0)})),(n.modelValue===null||c===!1)&&H(t)}function H(t){e.value!==!1&&(e.value=!1,u("beforeHide",t),i!==void 0?i(t):u("hide",t))}function P(t){n.disable===!0&&t===!0?n["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):t===!0!==e.value&&(t===!0?E:H)(a)}M(()=>n.modelValue,P),r!==void 0&&D(s)===!0&&M(()=>V.$route.fullPath,()=>{r.value===!0&&e.value===!0&&b()}),m===!0&&$(()=>{P(n.modelValue)});const S={show:L,hide:b,toggle:X};return Object.assign(V,S),S}let v=0,h,g,w,T=!1,C,A,f;function K(e){O(e)&&k(e)}function O(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=B(e),r=e.shiftKey&&!e.deltaX,l=!r&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=r||l?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const s=o[m];if(J(s,l))return l?i<0&&s.scrollTop===0?!0:i>0&&s.scrollTop+s.clientHeight===s.scrollHeight:i<0&&s.scrollLeft===0?!0:i>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function U(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){T!==!0&&(T=!0,requestAnimationFrame(()=>{T=!1;const{height:o}=e.target,{clientHeight:r,scrollTop:l}=document.scrollingElement;(w===void 0||o!==window.innerHeight)&&(w=r-o,document.scrollingElement.scrollTop=l),l>w&&(document.scrollingElement.scrollTop-=Math.ceil((l-w)/8))}))}function Y(e){const o=document.body,r=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(o);h=_(window),g=j(window),C=o.style.left,A=o.style.top,o.style.left=`-${h}px`,o.style.top=`-${g}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,d.passiveCapture),window.visualViewport.addEventListener("scroll",y,d.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",U,d.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",K,d.notPassive),e==="remove"&&(p.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",y,d.passiveCapture),window.visualViewport.removeEventListener("scroll",y,d.passiveCapture)):window.removeEventListener("scroll",U,d.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=C,o.style.top=A,window.scrollTo(h,g),w=void 0)}function Q(e){let o="add";if(e===!0){if(v++,f!==void 0){clearTimeout(f),f=void 0;return}if(v>1)return}else{if(v===0||(v--,v>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){clearTimeout(f),f=setTimeout(()=>{Y(o),f=void 0},100);return}}Y(o)}function le(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Q(o))}}}function re(){let e;const o=W();function r(){clearTimeout(e)}return F(r),z(r),{removeTimeout:r,registerTimeout(l,i){clearTimeout(e),I(o)===!1&&(e=setTimeout(l,i))}}}export{oe as a,re as b,te as c,N as d,le as e,ee as u};
