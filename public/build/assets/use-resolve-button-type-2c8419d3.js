import{r as i}from"./app-33bf3152.js";import{l as o}from"./use-is-mounted-f403d620.js";function u(t){var r;if(t.type)return t.type;let n=(r=t.as)!=null?r:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function s(t,r){let[n,e]=i.useState(()=>u(t));return o(()=>{e(u(t))},[t.type,t.as]),o(()=>{n||r.current&&r.current instanceof HTMLButtonElement&&!r.current.hasAttribute("type")&&e("button")},[n,r]),n}export{s as T};
