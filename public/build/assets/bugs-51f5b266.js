import{r as d}from"./app-33bf3152.js";import{h as E,T as g}from"./keyboard-559cbfc1.js";import{s as m}from"./use-is-mounted-f403d620.js";function p(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function w(){return/Android/gi.test(window.navigator.userAgent)}function L(){return p()||w()}function s(n,e,o){let i=m(e);d.useEffect(()=>{function l(c){i.current(c)}return document.addEventListener(n,l,o),()=>document.removeEventListener(n,l,o)},[n,o])}function T(n,e,o){let i=m(e);d.useEffect(()=>{function l(c){i.current(c)}return window.addEventListener(n,l,o),()=>window.removeEventListener(n,l,o)},[n,o])}function H(n,e,o=!0){let i=d.useRef(!1);d.useEffect(()=>{requestAnimationFrame(()=>{i.current=o})},[o]);function l(t,a){if(!i.current||t.defaultPrevented)return;let r=a(t);if(r===null||!r.getRootNode().contains(r)||!r.isConnected)return;let v=function f(u){return typeof u=="function"?f(u()):Array.isArray(u)||u instanceof Set?u:[u]}(n);for(let f of v){if(f===null)continue;let u=f instanceof HTMLElement?f:f.current;if(u!=null&&u.contains(r)||t.composed&&t.composedPath().includes(u))return}return!E(r,g.Loose)&&r.tabIndex!==-1&&t.preventDefault(),e(t,r)}let c=d.useRef(null);s("pointerdown",t=>{var a,r;i.current&&(c.current=((r=(a=t.composedPath)==null?void 0:a.call(t))==null?void 0:r[0])||t.target)},!0),s("mousedown",t=>{var a,r;i.current&&(c.current=((r=(a=t.composedPath)==null?void 0:a.call(t))==null?void 0:r[0])||t.target)},!0),s("click",t=>{L()||c.current&&(l(t,()=>c.current),c.current=null)},!0),s("touchend",t=>l(t,()=>t.target instanceof HTMLElement?t.target:null),!0),T("blur",t=>l(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function P(n){let e=n.parentElement,o=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(o=e),e=e.parentElement;let i=(e==null?void 0:e.getAttribute("disabled"))==="";return i&&h(o)?!1:i}function h(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}export{P as r,T as s,p as t,H as y};