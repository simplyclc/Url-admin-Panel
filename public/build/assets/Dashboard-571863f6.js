import{r as l,q as d,j as e,a as w,d as b}from"./app-8d2b419d.js";import{A as u,a as g,B as v,b as j}from"./AuthenticatedLayout-8fcc1018.js";import N from"./create_Partner-4c4c3fa2.js";import y from"./yearly-chart-343cf29c.js";import{ImportApplications as k}from"./importApplications_form-3bf65a69.js";import"./transition-ffe475d1.js";import"./TextInput-66a21919.js";import"./Checkbox-0b7aa714.js";import"./CheckIcon-ca6c6b8f.js";import"./dialog-607f8680.js";import"./use-owner-e8bbfa71.js";import"./keyboard-55d2b3bd.js";import"./active-element-history-0d655bb6.js";import"./hidden-6b65874b.js";function A({title:a,titleId:s,...r},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M3.75 12a.75.75 0 0 1 .75-.75h13.19l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.47-5.47H4.5a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const R=l.forwardRef(A),Z=R;function C({title:a,titleId:s,...r},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z",clipRule:"evenodd"}),l.createElement("path",{fillRule:"evenodd",d:"M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const E=l.forwardRef(C),I=E;function z({auth:a}){const{scholarships:s,totalApplications:r,yearUpdate:i,winners:o}=d().props,{applications:x}=d().props,{partners:c}=d().props;console.log(o);const m=s.reduce((t,n)=>t+n.fund_amount,0);return e.jsxs(u,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Dashboard"}),breadcrumb:e.jsx("span",{children:" Dashboard"}),children:[e.jsx(w,{title:"Dashboard"}),e.jsxs("div",{className:"w-full px-6 py-6 mx-auto",children:[e.jsxs("div",{className:"flex flex-wrap -mx-3",children:[e.jsx("div",{className:"w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4",children:e.jsx("div",{className:"relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border",children:e.jsx("div",{className:"flex-auto p-4",children:e.jsxs("div",{className:"flex flex-row -mx-3",children:[e.jsx("div",{className:"flex-none w-2/3 max-w-full px-3",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-0 font-sans font-semibold leading-normal text-sm",children:"Total Scholarships"}),e.jsx("h5",{className:"mb-0 font-bold",children:s.length})]})}),e.jsx("div",{className:"px-3 text-right basis-1/3",children:e.jsx("div",{className:"inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-r from-rose-900 to-red-500",children:e.jsx(g,{className:"leading-none w-6 h-6 relative top-3.5 text-white"})})})]})})})}),e.jsx("div",{className:"w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4",children:e.jsx("div",{className:"relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border",children:e.jsx("div",{className:"flex-auto p-4",children:e.jsxs("div",{className:"flex flex-row -mx-3",children:[e.jsx("div",{className:"flex-none w-2/3 max-w-full px-3",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-0 font-sans font-semibold leading-normal text-sm",children:"Total Applicants / Applications"}),e.jsxs("h5",{className:"mb-0 font-bold",children:[x.length," / ",r]})]})}),e.jsx("div",{className:"px-3 text-right basis-1/3",children:e.jsx("div",{className:"inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-red-900 to-red-500",children:e.jsx(I,{className:"leading-none w-6 h-6 relative top-3.5 text-white"})})})]})})})}),e.jsx("div",{className:"w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4",children:e.jsx("div",{className:"relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border",children:e.jsx("div",{className:"flex-auto p-4",children:e.jsxs("div",{className:"flex flex-row -mx-3",children:[e.jsx("div",{className:"flex-none w-2/3 max-w-full px-3",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-0 font-sans font-semibold leading-normal text-sm",children:"Partners"}),e.jsx("h5",{className:"mb-0 font-bold",children:c.length})]})}),e.jsx("div",{className:"px-3 text-right basis-1/3",children:e.jsx("div",{className:"inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-red-900 to-red-500",children:e.jsx(v,{className:"leading-none w-6 h-6 relative top-3.5 text-white"})})})]})})})}),e.jsx("div",{className:"w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4",children:e.jsx("div",{className:"relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border",children:e.jsx("div",{className:"flex-auto p-4",children:e.jsxs("div",{className:"flex flex-row -mx-3",children:[e.jsx("div",{className:"flex-none w-2/3 max-w-full px-3",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-0 font-sans font-semibold leading-normal text-sm",children:"Total funds"}),e.jsxs("h5",{className:"mb-0 font-bold",children:["$",m]})]})}),e.jsx("div",{className:"px-3 text-right basis-1/3",children:e.jsx("div",{className:"inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-red-900 to-red-500",children:e.jsx(j,{className:"leading-none w-6 h-6 relative top-3.5 text-white"})})})]})})})})]}),e.jsxs("div",{className:"flex flex-wrap mt-6 -mx-3",children:[e.jsx("div",{className:"w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none",children:e.jsx("div",{className:"relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border",children:e.jsx("div",{className:"flex-auto p-4",children:e.jsxs("div",{className:"flex flex-wrap -mx-3",children:[e.jsx("div",{className:"max-w-full px-3 lg:w-1/2 lg:flex-none",children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsx("p",{className:"pt-2 mb-1 font-semibold",children:"Partners"}),e.jsx("h5",{className:"font-bold",children:"Partners Create"}),e.jsx("p",{className:"mb-12",children:"Our partners are vital to our young black scholars. Its is our duty to provide the partners and students a experience of success."}),e.jsx(N,{})]})}),e.jsx("div",{className:"max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none",children:e.jsxs("div",{className:"h-full bg-gradient-to-tl from-red-900 to-red-500 rounded-xl",children:[e.jsx("img",{src:"assets/site_images/10865.jpeg",className:"top-0 hidden w-full h-full lg:block",alt:"partner image"}),e.jsx("div",{className:"relative flex items-center justify-center h-full"})]})})]})})})}),e.jsx("div",{className:"w-full max-w-full px-3 lg:w-5/12 lg:flex-none",children:e.jsx("div",{className:"border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4",children:e.jsxs("div",{className:"relative h-full overflow-hidden bg-cover rounded-xl",children:[e.jsx("span",{className:"absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"}),e.jsxs("div",{className:"relative z-10 flex flex-col flex-auto h-full p-4",children:[e.jsx("h5",{className:"pt-2 mb-6 font-bold text-white",children:"Work with the Black Scholars"}),e.jsx("p",{className:"text-white",children:"We are a great organization for students but we need help from partners. It is all about who takes the first opportunity."}),e.jsxs("a",{className:"mt-auto mb-0 font-semibold leading-normal text-white group text-base",href:"javascript:;",children:["Learn how to work with partners in giving",e.jsx(Z,{className:"fas fa-arrow-right ease-bounce w-4 h-4 group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"})]})]})]})})})]}),e.jsxs("div",{className:"flex flex-wrap mt-6 -mx-3",children:[e.jsx("div",{className:"w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none",children:e.jsx("div",{className:"relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border",children:e.jsx("div",{className:"flex-auto p-4",children:e.jsx("div",{className:"flex flex-wrap -mx-3",children:e.jsx("div",{className:"max-w-full px-3 lg:w-full lg:flex-none",children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsx("p",{className:"pt-2 mb-1 font-semibold",children:"Yearly Funds"}),e.jsx("h5",{className:"font-bold",children:"Black Scholars Year over Year funds"}),e.jsx(y,{yearUpdate:i})]})})})})})}),e.jsxs("div",{className:"w-full max-w-full px-3 lg:w-5/12 lg:flex-none",children:[e.jsx("div",{className:"border-black/12.5 shadow-soft-xl relative flex h-2/3 min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-2",children:e.jsxs("ul",{role:"list",className:"divide-y divide-gray-100",children:[e.jsxs("div",{className:"mx-auto py-1 flex justify-between",children:[e.jsx("h3",{className:"p-2 px-4 text-lg text-gray-800",children:"Latest Winners"}),e.jsx(b,{href:route("winners.list","2024"),type:"button",className:"w-2/5 rounded-md bg-red-800 px-4 py-3 text-base font-semibold text-center text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700",children:"View All"})]}),o.map(({id:t,studentName:n,scholarshipName:h,distributionDate:f,award_payments:p})=>e.jsx("li",{className:"mt-1 relative py-2 hover:bg-gray-50",children:e.jsx("div",{className:"px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"mx-auto flex max-w-4xl justify-between gap-x-2",children:[e.jsx("div",{className:"flex min-w-0 gap-x-2",children:e.jsxs("div",{className:"min-w-0 flex-auto",children:[e.jsx("p",{className:"text-lg font-semibold text-gray-900",children:h}),e.jsx("p",{className:"flex text-base text-gray-700",children:n})]})}),e.jsx("div",{className:"flex shrink-0 items-center gap-x-2",children:e.jsxs("div",{className:"hidden sm:flex sm:flex-col sm:items-end",children:[e.jsxs("p",{className:"text-lg text-gray-900",children:["Award - $",p]}),e.jsxs("p",{className:"text-base leading-5 text-gray-700",children:["Distribution date - ",f]})]})})]})})},t))]})}),e.jsx(k,{})]})]})]})]})}export{z as default};
