import{r as s,j as e,y as q}from"./app-3db92e82.js";import{C as B}from"./selection_criteria-00b1378f.js";import T from"./selection_requirements-15036108.js";import D from"./selection_uses-e4deeec6.js";import E from"./selection_renewable-0eac47ce.js";import I from"./selection_basis-64309ef9.js";import{C as P}from"./CheckIcon-b21617f7.js";import{q as x}from"./transition-94509dd4.js";import{_ as u}from"./dialog-a143540c.js";import"./keyboard-19b0a59b.js";import"./react-select.esm-d75e1042.js";import"./assertThisInitialized-0842855e.js";function te(y){const{data:t}=y,[i,b]=s.useState({});let[j,n]=s.useState(!1);const N=s.useRef(null),[g,v]=s.useState([]),[r,w]=s.useState([]),[d,S]=s.useState([]),[h,k]=s.useState([]),[p,C]=s.useState([]);function F(){n(!0)}function a(l){const c=l.target.id,o=l.target.value;b(m=>({...m,[c]:o}))}function _(l){l.preventDefault(),q.post(route("scholarship.update"),[i,g,r,d,h,p]),console.log(i,g,r,d)}return e.jsxs(e.Fragment,{children:[e.jsx("a",{onClick:F,children:"edit scholarship"}),e.jsx(x,{appear:!0,show:j,as:s.Fragment,children:e.jsxs(u,{as:"div",className:"relative z-10",initialFocus:N,onClose:n,children:[e.jsx(x.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-left sm:items-center sm:p-0",children:e.jsx(x.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsx(u.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6",children:e.jsxs("div",{children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",children:e.jsx(P,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),t==null?void 0:t.map(({id:l,name:c,deadline:o,description:m,award_payments:V,additional_information:R,review_applicants:U,selection_criteria:f,requirement_criteria:z,award_based_on:O,renewability:W,uses:M,fund_amount:A})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-3 text-center sm:mt-5",children:[e.jsx(u.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"Edit Scholarship"}),e.jsx("div",{className:"mt-2",children:e.jsxs("form",{onSubmit:_,children:[e.jsxs("div",{className:"space-y-12",children:[e.jsx("div",{className:"border-b border-gray-900/10 pb-8",children:e.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"street-address",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Scholarship name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"scholarshship-name",value:i.name,id:"name",autoComplete:"scholarshship-name",onChange:a,defaultValue:c,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"about",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Scholarship Description"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"description",name:"description",type:"text",value:i.description,rows:5,onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:m})}),e.jsx("p",{className:"mt-3 text-sm text-right leading-6 text-gray-600",children:"Write a short description about the scholarship."})]})]})}),e.jsxs("div",{className:"border-b border-gray-900/10 pb-8",children:[e.jsx("h2",{className:"text-base text-left font-semibold leading-7 text-gray-900",children:"Scholarship Information"}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"first-name",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Scholarship Deadline"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"date",name:"fullname",value:o,id:"deadline",autoComplete:"deadline",onChange:a,defaultValue:o,className:"block w-full rounded-md border-0 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"first-name",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Individual Award Amount"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"award_payments",value:t.award_payments,id:"award_payments",autoComplete:"award_payments",onChange:a,defaultValue:V,className:"block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Fund Amount"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"fund_amount",name:"fund_amount",value:t.fund_amount,type:"text",autoComplete:"fund-amount",onChange:a,defaultValue:A,className:"block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Selection Criteria"}),e.jsx(B,{selected:r,setSelected:v,defaultValue:f}),e.jsxs("p",{className:"text-xs text-gray-600 text-left",children:["existing selection[",f,"]"]})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Requirements"}),e.jsx(T,{selectedValue:r,setSelectedValue:w})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Possible basis for the Award"}),e.jsx(I,{selectBasis:d,setSelectBasis:S})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Frequency or Renew-ability of the Award"}),e.jsx(E,{selectedRenew:h,setSelectedRenew:k})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Possible allowable uses of Award by student"}),e.jsx(D,{selectedUses:p,setSelectedUses:C})]})]})]}),e.jsx("div",{className:"border-b border-gray-900/10 pb-8",children:e.jsx("div",{className:"mt-4 space-y-10",children:e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"about",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Additional information"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"additional_information",name:"additional_information",type:"text",value:t.additional_information,rows:3,onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:R})}),e.jsx("p",{className:"mt-3 text-sm text-left leading-6 text-gray-600",children:"Write a few additional sentences about the scholarship."})]})})})]},l),e.jsxs("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",children:[e.jsx("div",{className:"sm:col-span-1",children:e.jsx("button",{type:"submit",className:"inline-block w-full px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-red-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102 sm:col-start-1",onClick:()=>n(!1),children:"Submit"})}),e.jsx("div",{className:"sm:col-span-1",children:e.jsx("button",{type:"button",className:"inline-block w-full justify-center rounded-md bg-white py-1.5 my-4 mt-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0",onClick:()=>n(!1),children:"Cancel"})})]})]})})]})}))]})})})})})]})})]})}export{te as default};
