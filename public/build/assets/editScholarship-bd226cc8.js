import{r as s,j as e,d as _,a as A,y as V}from"./app-066876ed.js";import{A as R}from"./AuthenticatedLayout-73fc8cb7.js";import{C as I}from"./selection_criteria-4fcdd984.js";import q from"./selection_requirements-724f7ff9.js";import B from"./selection_uses-ab2d6cce.js";import D from"./selection_renewable-7485f753.js";import E from"./selection_basis-d486323f.js";import{C as U}from"./CheckIcon-53741808.js";import"./transition-38a03ed2.js";import"./keyboard-b41b523e.js";import"./react-select.esm-4ae264b1.js";import"./assertThisInitialized-ca743b97.js";function te({auth:p,data:t,role:f}){const[i,b]=s.useState({});let[O,m]=s.useState(!1);s.useRef(null);const[x,y]=s.useState([]),[r,j]=s.useState([]),[o,N]=s.useState([]),[u,v]=s.useState([]),[h,w]=s.useState([]);function a(l){const d=l.target.id,n=l.target.value;b(c=>({...c,[d]:n}))}function S(l){l.preventDefault(),V.post(route("scholarship.update"),[i,x,r,o,u,h]),console.log(i,x,r,o)}return e.jsxs(R,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Scholarships Information "}),breadcrumb:e.jsxs("span",{children:[f==="admin"?e.jsx(_,{href:route("scholarship.list"),children:"Scholarship list"}):e.jsx("span",{children:"Scholarship list"})," "]}),children:[e.jsx(A,{title:"Scholarships"}),e.jsx("div",{className:"w-full px-6 py-6 mx-auto my-10",children:e.jsxs("div",{className:"relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/100 bg-clip-border backdrop-blur-2xl backdrop-saturate-200",children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",children:e.jsx(U,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),t==null?void 0:t.map(({id:l,name:d,deadline:n,description:c,award_payments:k,additional_information:C,review_applicants:P,selection_criteria:g,requirement_criteria:W,award_based_on:$,renewability:z,uses:G,fund_amount:F})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-3 text-center sm:mt-5",children:[e.jsx("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Edit Scholarship"}),e.jsx("div",{className:"mt-2",children:e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"space-y-12",children:[e.jsx("div",{className:"border-b border-gray-900/10 pb-8",children:e.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"street-address",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Scholarship name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"scholarshship-name",value:i.name,id:"name",autoComplete:"scholarshship-name",onChange:a,defaultValue:d,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"about",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Scholarship Description"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"description",name:"description",type:"text",value:i.description,rows:5,onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:c})}),e.jsx("p",{className:"mt-3 text-sm text-right leading-6 text-gray-600",children:"Write a short description about the scholarship."})]})]})}),e.jsxs("div",{className:"border-b border-gray-900/10 pb-8",children:[e.jsx("h2",{className:"text-base text-left font-semibold leading-7 text-gray-900",children:"Scholarship Information"}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"first-name",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Scholarship Deadline"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"date",name:"fullname",value:n,id:"deadline",autoComplete:"deadline",onChange:a,defaultValue:n,className:"block w-full rounded-md border-0 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"first-name",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Individual Award Amount"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"award_payments",value:t.award_payments,id:"award_payments",autoComplete:"award_payments",onChange:a,defaultValue:k,className:"block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Fund Amount"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"fund_amount",name:"fund_amount",value:t.fund_amount,type:"text",autoComplete:"fund-amount",onChange:a,defaultValue:F,className:"block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Selection Criteria"}),e.jsx(I,{selected:r,setSelected:y,defaultValue:g}),e.jsxs("p",{className:"text-xs text-gray-600 text-left",children:["existing selection[",g,"]"]})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Requirements"}),e.jsx(q,{selectedValue:r,setSelectedValue:j})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Possible basis for the Award"}),e.jsx(E,{selectBasis:o,setSelectBasis:N})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Frequency or Renew-ability of the Award"}),e.jsx(D,{selectedRenew:u,setSelectedRenew:v})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Possible allowable uses of Award by student"}),e.jsx(B,{selectedUses:h,setSelectedUses:w})]})]})]}),e.jsx("div",{className:"border-b border-gray-900/10 pb-8",children:e.jsx("div",{className:"mt-4 space-y-10",children:e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"about",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Additional information"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"additional_information",name:"additional_information",type:"text",value:t.additional_information,rows:3,onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:C})}),e.jsx("p",{className:"mt-3 text-sm text-left leading-6 text-gray-600",children:"Write a few additional sentences about the scholarship."})]})})})]},l),e.jsxs("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",children:[e.jsx("div",{className:"sm:col-span-1",children:e.jsx("button",{type:"submit",className:"inline-block w-full px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-red-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102 sm:col-start-1",onClick:()=>m(!1),children:"Submit"})}),e.jsx("div",{className:"sm:col-span-1",children:e.jsx("button",{type:"button",className:"inline-block w-full justify-center rounded-md bg-white py-1.5 my-4 mt-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0",onClick:()=>m(!1),children:"Cancel"})})]})]})})]})}))]})})]})}export{te as default};
