import{r as l,j as e,d as p,a as h}from"./app-a0471452.js";import{S as u}from"./StudentAuthLayout-e5cc90bf.js";import j from"./viewscholarship-0be78051.js";import"./transition-bb71e7ef.js";import"./use-is-mounted-0e325f09.js";import"./dialog-79684368.js";import"./use-owner-48e3526b.js";import"./keyboard-0cc100c7.js";import"./bugs-4d49d1fa.js";import"./hidden-08ab9802.js";function f({title:a,titleId:s,...r},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",clipRule:"evenodd"}))}const g=l.forwardRef(f),v=g;function Z({auth:a,scholarship:s,scholarshipInfo:r,requirements:i,scholarshipuses:d,criteria:n,message:c}){return e.jsxs(u,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Application"}),breadcrumb:e.jsx("span",{children:e.jsx(p,{href:route("scholar.dashboard"),children:"Application"})}),children:[e.jsx(h,{title:"Application"}),e.jsx("div",{className:"sm:pl-32 md:pl-96",children:e.jsx("div",{className:"xl:pl-32 px-6 py-6",children:e.jsxs("div",{className:"px-4 py-10 sm:px-6 lg:px-8 lg:py-6",children:[c==="true"?e.jsx("div",{className:"rounded-md bg-green-50 py-4 px-auto",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(v,{"aria-hidden":"true",className:"h-5 w-5 text-green-400"})}),e.jsx("div",{className:"ml-3",children:e.jsx("p",{className:"text-lg font-medium text-green-800",children:"Your information has been sent to the scholarship partner."})}),e.jsx("div",{className:"ml-auto pl-3"})]})}):e.jsx("div",{}),e.jsx(j,{scholarshipInfo:r,requirements:i,scholarshipuses:d,criteria:n})]})})}),e.jsxs("aside",{className:"fixed inset-y-0 left-72 hidden w-1/4 overflow-y-auto border-r border-gray-200 px-4 pt-25 pb-6 sm:px-6 lg:px-8 xl:block bg-white",children:[e.jsx("h3",{className:"mt-4",children:"Available Scholarships"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-100",children:s.map(({id:t,name:o,award_payments:x,deadline:m})=>e.jsx("li",{className:"flex gap-x-4 py-5",children:e.jsx("div",{className:"min-w-0",children:e.jsxs("a",{href:route("scholar.application.view",{id:t}),children:[e.jsx("p",{className:"text-base font-semibold leading-6 text-gray-900",children:o}),e.jsxs("p",{className:"truncate text-base leading-5 text-gray-600",children:["Award amout: ",x," - Deadline date:",m]})]})})},t))})]})]})}export{Z as default};
