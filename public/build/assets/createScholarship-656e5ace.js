import{r as s,j as e,y as C}from"./app-8d2b419d.js";import F from"./selection_criteria-1d80399a.js";import q from"./selection_requirements-dce4aeb8.js";import _ from"./selection_uses-b1e58037.js";import A from"./selection_renewable-3b3899dc.js";import R from"./selection_basis-81c03b29.js";import{C as V}from"./CheckIcon-ca6c6b8f.js";import{q as m}from"./transition-ffe475d1.js";import{_ as x}from"./dialog-607f8680.js";import"./form-94fe775f.js";import"./keyboard-55d2b3bd.js";import"./use-resolve-button-type-81844bc5.js";import"./use-text-value-80c5dc57.js";import"./calculate-active-index-17ed5dbe.js";import"./hidden-6b65874b.js";import"./react-select.esm-6840b6b8.js";import"./assertThisInitialized-19df7010.js";import"./use-owner-e8bbfa71.js";import"./active-element-history-0d655bb6.js";function B({title:t,titleId:i,...r},l){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":i},r),t?s.createElement("title",{id:i},t):null,s.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"}))}const D=s.forwardRef(B),E=D;function se(){const[t,i]=s.useState({name:"",deadline:"",award_payments:"",fund_amount:"",description:"",additional_information:"",question1:"",question2:"",question3:""});let[r,l]=s.useState(!1);const h=s.useRef(null),[o,p]=s.useState([]),[d,f]=s.useState([]),[c,y]=s.useState([]),[u,b]=s.useState([]),[g,j]=s.useState([]);function v(){l(!0)}function a(n){const w=n.target.id,k=n.target.value;i(S=>({...S,[w]:k}))}function N(n){n.preventDefault(),C.post(route("scholarship.create"),[t,o,d,c,u,g]),console.log(t,o,d,c)}return e.jsxs(e.Fragment,{children:[e.jsxs("a",{onClick:v,children:[e.jsx(E,{className:"h-12 w-12 text-gray-600","aria-hidden":"true"}),e.jsx("h5",{className:"text-slate-400",children:"Add New Scholarship"})]}),e.jsx(m,{appear:!0,show:r,as:s.Fragment,children:e.jsxs(x,{as:"div",className:"relative z-10",initialFocus:h,onClose:l,children:[e.jsx(m.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-left sm:items-center sm:p-0",children:e.jsx(m.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsx(x.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6",children:e.jsxs("div",{children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",children:e.jsx(V,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-5",children:[e.jsx(x.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"Create Scholarship"}),e.jsx("div",{className:"mt-2",children:e.jsxs("form",{onSubmit:N,children:[e.jsxs("div",{className:"space-y-12",children:[e.jsx("div",{className:"border-b border-gray-900/10 pb-8",children:e.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"street-address",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Name of Scholarship"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"scholarshship-name",value:t.name,id:"name",autoComplete:"scholarshship-name",onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"about",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Scholarship Description"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"description",name:"description",type:"text",value:t.description,rows:5,onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:"Description about scholarship"})}),e.jsx("p",{className:"mt-3 text-sm text-right leading-6 text-gray-600",children:"Write a short description about the scholarship."})]})]})}),e.jsxs("div",{className:"border-b border-gray-900/10 pb-8",children:[e.jsx("h2",{className:"text-base text-left font-semibold leading-7 text-gray-900",children:"Scholarship Information"}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"first-name",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Scholarship Deadline"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"date",name:"fullname",value:t.deadline,id:"deadline",autoComplete:"deadline",onChange:a,className:"block w-full rounded-md border-0 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"first-name",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Individual Award Amount"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"award_payments",value:t.award_payments,id:"award_payments",autoComplete:"award_payments",onChange:a,className:"block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"ex: 2000"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Fund Amount"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"fund_amount",name:"fund_amount",value:t.fund_amount,type:"text",autoComplete:"fund-amount",onChange:a,className:"block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"ex: 2000"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Selection Criteria"}),e.jsx(F,{selected:o,setSelected:p})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"country",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Requirements"}),e.jsx(q,{selectedValue:d,setSelectedValue:f})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"basisAward",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Possible basis for the Award"}),e.jsx(R,{selectBasis:c,setSelectBasis:y})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"renewable",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Frequency or Renew-ability of the Award"}),e.jsx(A,{selectedRenew:u,setSelectedRenew:b})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"uses",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Possible allowable uses of Award by student"}),e.jsx(_,{selectedUses:g,setSelectedUses:j})]})]})]}),e.jsxs("div",{className:"border-b border-gray-900/10 pb-4",children:[e.jsx("div",{className:"mt-4 space-y-10",children:e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"about",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Additional question 1"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"question1",name:"question1",type:"text",value:t.question1,rows:1,onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6",defaultValue:""})})]})}),e.jsx("div",{className:"mt-6 space-y-10",children:e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"about",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Additional question 2"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"question2",name:"question2",type:"text",value:t.question2,rows:1,onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6",defaultValue:""})})]})}),e.jsx("div",{className:"mt-6 space-y-6",children:e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"about",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Additional question 3"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"question3",name:"question3",type:"text",value:t.question3,rows:1,onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6",defaultValue:""})})]})}),e.jsx("div",{className:"mt-4 space-y-10",children:e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"about",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Additional information"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"additional_information",name:"additional_information",type:"text",value:t.additional_information,rows:3,onChange:a,className:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:""})}),e.jsx("p",{className:"mt-3 text-sm text-left leading-6 text-gray-600",children:"Write a few additional sentences about the scholarship."})]})})]})]}),e.jsx("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",children:e.jsx("div",{className:"sm:col-span-3",children:e.jsx("button",{type:"submit",className:"inline-block w-full px-3 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-red-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102",onClick:()=>l(!1),children:"Submit"})})})]})})]})]})})})})})]})})]})}export{se as default};
