import{W as f,j as e,d,a as j}from"./app-890d47b4.js";import{A as y}from"./AuthenticatedLayout-bbd41ee1.js";import{q as t}from"./menu-f98d0adc.js";import{E as b}from"./EllipsisVerticalIcon-6e58756e.js";import"./transition-84d75bab.js";import"./use-is-mounted-44ee9bdb.js";import"./keyboard-263b0f3f.js";import"./bugs-c392badc.js";import"./use-owner-3b59cbf0.js";import"./use-resolve-button-type-c3c696ed.js";import"./use-text-value-46cb7fca.js";function O({auth:o,userNotes:m,student:c,id:x}){const{data:i,setData:a,post:g,processing:N,errors:v,reset:w}=f({title:"",body:"",noteType:""}),n=s=>{s.preventDefault(),g(route("notes.student.create"))};return e.jsxs(y,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Notes View"}),breadcrumb:e.jsx("span",{children:e.jsx(d,{href:route("application.list"),children:"Applicants list"})}),children:[e.jsx(j,{title:"Application View"}),e.jsxs("div",{className:"mx-auto grid grid-cols-1 gap-x-4 gap-y-8 px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-2",children:[e.jsx("div",{className:"w-full px-2 py-3 mx-auto",children:e.jsx("div",{className:"overflow-hidden bg-white shadow sm:rounded-lg",children:e.jsxs("div",{className:"px-4 py-8 sm:px-6",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("h3",{className:"text-base font-semibold leading-7 text-gray-900",children:[c," - Latest Notes"]}),e.jsx(d,{href:route("application.view",{id:x}),className:"rounded-md bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"View Profile"})]}),e.jsx("p",{className:"mt-1 max-w-2xl text-sm leading-6 text-gray-500",children:"Notes label administration are not seen by student"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-600",children:m.map(({id:s,scholar_id:u,title:r,body:h,noteType:p,updated_at:l,user_id:k,name:T})=>e.jsx(e.Fragment,{children:e.jsxs("li",{className:"flex justify-between gap-x-6 py-5",children:[e.jsx("div",{className:"flex min-w-0 gap-x-4",children:e.jsx("div",{className:"min-w-0 flex-auto",children:e.jsx("p",{className:"text-base font-semibold leading-6 text-gray-900",children:e.jsxs("a",{href:u,className:"hover:underline",children:[r," ",e.jsx("br",{}),e.jsx("span",{className:"text-sm leading-6 text-gray-700",children:h})]})})})}),e.jsxs("div",{className:"flex shrink-0 items-center gap-x-6",children:[e.jsxs("div",{className:"hidden sm:flex sm:flex-col sm:items-end",children:[e.jsx("span",{className:"inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10",children:p}),l?e.jsxs("p",{className:"text-xs leading-5 text-gray-600",children:["Last updated ",e.jsx("time",{dateTime:l,children:l})]}):e.jsxs("div",{className:"mt-1 flex items-center gap-x-1.5",children:[e.jsx("div",{className:"flex-none rounded-full bg-emerald-500/20 p-1",children:e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"})}),e.jsx("p",{className:"text-xs leading-5 text-gray-500",children:"Online"})]})]}),e.jsxs(t,{as:"div",className:"relative flex-none",children:[e.jsxs(t.Button,{className:"-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900",children:[e.jsx("span",{className:"sr-only",children:"Open options"}),e.jsx(b,{"aria-hidden":"true",className:"h-5 w-5"})]}),e.jsx(t.Items,{transition:!0,className:"absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",children:e.jsx(t.Item,{children:e.jsxs("a",{href:"#",className:"block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50",children:["View profile",e.jsxs("span",{className:"sr-only",children:[", ",r]})]})})})]})]})]},s)}))})]})})}),e.jsx("div",{className:"w-full px-2 py-3 mx-auto",children:e.jsxs("div",{className:"overflow-hidden bg-white shadow sm:rounded-lg",children:[e.jsxs("div",{className:"px-4 py-4",children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Create Note "}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Use this form to create notes for student or administration notes for team"})]}),e.jsx("form",{onSubmit:n,children:e.jsxs("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2 px-4",children:[e.jsxs("div",{className:"col-span-6",children:[e.jsx("label",{htmlFor:"noteType",className:"block text-sm font-medium leading-6 text-gray-900",children:"label"}),e.jsxs("select",{id:"noteType",name:"noteType",value:i.noteType,onChange:s=>a("noteType",s.target.value),className:"mt-2 block w-full h-10 rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:"pending",children:[e.jsx("option",{children:"Please select a tag"}),e.jsx("option",{value:"Administration",children:"Administration"}),e.jsx("option",{value:"Student",children:"Student Note"})]})]}),e.jsxs("div",{className:"sm:col-span-full",children:[e.jsx("label",{htmlFor:"title",className:"block text-sm font-medium leading-6 text-gray-900",children:"Title"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"title",id:"title",value:i.title,autoComplete:"title",onChange:s=>a("title",s.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"body",className:"block text-sm font-medium leading-6 text-gray-900",children:"Body"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"body",name:"body",value:i.body,onChange:s=>a("body",s.target.value),rows:10,className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:""})}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Notes are limited to 250 characters"})]}),e.jsx("div",{className:"my-2 flex items-center justify-center",children:e.jsx("button",{href:n,type:"submit",className:"col-span-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Submit"})})]})})]})})]})]})}export{O as default};
