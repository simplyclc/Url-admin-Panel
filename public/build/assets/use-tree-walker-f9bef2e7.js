import{r as c}from"./app-8d2b419d.js";import{o as d}from"./keyboard-55d2b3bd.js";import{l as m}from"./transition-ffe475d1.js";function b({container:e,accept:r,walk:t,enabled:f=!0}){let o=c.useRef(r),n=c.useRef(t);c.useEffect(()=>{o.current=r,n.current=t},[r,t]),m(()=>{if(!e||!f)return;let u=d(e);if(!u)return;let a=o.current,l=n.current,p=Object.assign(s=>a(s),{acceptNode:a}),i=u.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,p,!1);for(;i.nextNode();)l(i.currentNode)},[e,f,o,n])}export{b as F};
