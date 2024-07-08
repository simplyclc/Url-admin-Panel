import{W as f,r as t,j as e,y as b}from"./app-89c3b29c.js";import j from"./updateyearSelection-c1d54716.js";import{C as v}from"./CheckIcon-3f379df1.js";import{q as r}from"./transition-94e5de23.js";import{_ as n}from"./dialog-f40394ca.js";import"./react-select.esm-bf1f5676.js";import"./assertThisInitialized-c39f2433.js";import"./use-is-mounted-a1c5f610.js";import"./keyboard-f13d67a1.js";import"./bugs-9f29b693.js";function A({winners:m,winnersID:c}){var l=m,o=c;console.log(o);const{data:i,setData:d}=f({award_payments:"",distributionDate:""});let[x,a]=t.useState(!1);const p=t.useRef(null),[u,g]=t.useState([]);function h(){a(!0)}function y(s){s.preventDefault(),b.post(route("update.winner",[o]),[i])}return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:h,className:"text-indigo-700 hover:text-red-800",children:"Update Scholarship"}),e.jsx(r,{appear:!0,show:x,as:t.Fragment,children:e.jsxs(n,{as:"div",className:"relative z-10",initialFocus:p,onClose:a,children:[e.jsx(r.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-left sm:items-center sm:p-0",children:e.jsx(r.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsx(n.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6",children:e.jsxs("div",{children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",children:e.jsx(v,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-5",children:[e.jsx(n.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"Award Scholarship"}),e.jsx("div",{className:"mt-2",children:e.jsxs("form",{onSubmit:y,children:[e.jsx("div",{className:"space-y-12",children:e.jsx("div",{className:"border-b border-gray-900/10 pb-8",children:e.jsxs("div",{className:"mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"award_payments",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Award Amount"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"award_payments",name:"award_payments",value:i.award_payments,type:"text",autoComplete:"award_payments",onChange:s=>d("award_payments",s.target.value),className:"block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:l.award_payments})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"distributionDate",className:"block text-sm text-left font-medium leading-6 text-gray-900",children:"Distribution Date"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"date",name:"distributionDate",value:i.distributionDate,id:"distributionDate",autoComplete:"distributionDate",onChange:s=>d("distributionDate",s.target.value),className:"block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:l.distributionDate})})]}),e.jsxs("div",{className:"sm:col-span-6",children:[e.jsx("label",{htmlFor:"frequnecy",className:"block text-base text-left font-medium leading-6 text-gray-900",children:"Selection Criteria"}),e.jsx(j,{selectedFrequnecy:u,setSelectedFrequnecy:g})]})]})})}),e.jsxs("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",children:[e.jsx("div",{className:"sm:col-span-1",children:e.jsx("button",{type:"submit",className:"inline-block w-full px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-red-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102 sm:col-start-1",onClick:()=>a(!1),children:"Submit"})}),e.jsx("div",{className:"sm:col-span-1",children:e.jsx("button",{type:"button",className:"inline-block w-full justify-center rounded-md bg-white py-1.5 my-4 mt-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0",onClick:()=>a(!1),children:"Cancel"})})]})]})})]})]})})})})})]})})]})}export{A as default};