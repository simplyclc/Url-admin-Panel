import{j as e,r as n,W as w}from"./app-890d47b4.js";import{I as j}from"./InputError-1cd3888c.js";import{I as b}from"./InputLabel-86079fff.js";import{q as m}from"./transition-84d75bab.js";import{_ as p}from"./dialog-f07c6810.js";import{T as v}from"./TextInput-91792528.js";import"./use-is-mounted-44ee9bdb.js";import"./use-owner-3b59cbf0.js";import"./keyboard-263b0f3f.js";import"./bugs-c392badc.js";import"./hidden-72a3a728.js";function x({className:r="",disabled:t,children:s,...o}){return e.jsx("button",{...o,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+r,disabled:t,children:s})}function N({children:r,show:t=!1,maxWidth:s="2xl",closeable:o=!0,onClose:a=()=>{}}){const l=()=>{o&&a()},i={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[s];return e.jsx(m,{show:t,as:n.Fragment,leave:"duration-200",children:e.jsxs(p,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[e.jsx(m.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),e.jsx(m.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsx(p.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${i}`,children:r})})]})})}function F({type:r="button",className:t="",disabled:s,children:o,...a}){return e.jsx("button",{...a,type:r,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+t,disabled:s,children:o})}function B({className:r=""}){const[t,s]=n.useState(!1),o=n.useRef(),{data:a,setData:l,delete:i,processing:f,reset:u,errors:y}=w({password:""}),g=()=>{s(!0)},h=d=>{d.preventDefault(),i(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>o.current.focus(),onFinish:()=>u()})},c=()=>{s(!1),u()};return e.jsxs("section",{className:`space-y-6 ${r}`,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsx(x,{onClick:g,children:"Delete Account"}),e.jsx(N,{show:t,onClose:c,children:e.jsxs("form",{onSubmit:h,className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),e.jsxs("div",{className:"mt-6",children:[e.jsx(b,{htmlFor:"password",value:"Password",className:"sr-only"}),e.jsx(v,{id:"password",type:"password",name:"password",ref:o,value:a.password,onChange:d=>l("password",d.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e.jsx(j,{message:y.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(F,{onClick:c,children:"Cancel"}),e.jsx(x,{className:"ml-3",disabled:f,children:"Delete Account"})]})]})})]})}export{B as default};
