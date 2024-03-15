import{r as a,q as r,j as e,d as n,a as o}from"./app-066876ed.js";import{A as c}from"./AuthenticatedLayout-73fc8cb7.js";import d from"./Table-3f8efc66.js";import"./transition-38a03ed2.js";import"./AccountCircle-bf815337.js";import"./assertThisInitialized-ca743b97.js";function x({title:l,titleId:s,...t},i){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},t),l?a.createElement("title",{id:s},l):null,a.createElement("path",{d:"M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"}))}const m=a.forwardRef(x),p=m;function v({auth:l}){const{applications:s}=r().props,{data:t}=s;return e.jsxs(c,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"All Applications"}),breadcrumb:e.jsx("span",{children:e.jsx(n,{href:route("application.list"),children:"Applicants list"})}),children:[e.jsx(o,{title:"Scholarships"}),e.jsxs("div",{className:"w-full px-6 py-6 mx-auto",children:[e.jsx("div",{className:"flex flex-wrap -mx-1",children:e.jsx("div",{className:"w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/3",children:e.jsx("div",{className:"relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border",children:e.jsx("div",{className:"flex-auto p-4",children:e.jsxs("div",{className:"flex flex-row -mx-3",children:[e.jsx("div",{className:"flex-none w-2/3 max-w-full px-3",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-0 font-sans font-semibold leading-normal text-base",children:"Total Applications"}),e.jsx("h5",{className:"mb-0 font-bold",children:t.length})]})}),e.jsx("div",{className:"px-3 text-right basis-1/3",children:e.jsx("div",{className:"inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-red-900 to-red-500",children:e.jsx(p,{className:"leading-none w-6 h-6 relative top-3.5 text-white"})})})]})})})})}),e.jsx("div",{className:"py-8 px-3",children:e.jsx(d,{})})]})]})}export{v as default};