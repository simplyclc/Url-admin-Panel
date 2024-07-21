import{W as a,j as e}from"./app-6dfff5b4.js";function c(){const{data:l,setData:s,post:o,progress:t}=a({file:null});function i(r){r.preventDefault(),o(route("csv.import.application"),l,{forceFormData:!0})}return e.jsx("div",{className:"mt-4 border-black/12.5 shadow-soft-xl relative flex h-1/3 min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-2",children:e.jsxs("div",{className:"relative h-full overflow-hidden bg-cover rounded-xl",children:[e.jsx("span",{className:"absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"}),e.jsxs("div",{className:"relative z-10 flex flex-col flex-auto h-full p-4",children:[e.jsx("h5",{className:"pt-2 font-bold text-white",children:"Import bulk Applications"}),e.jsx("div",{className:"mt-auto",children:e.jsxs("form",{onSubmit:i,children:[e.jsx("input",{type:"file",accept:".csv",name:"file",id:"file",className:"block w-full px-4 rounded-md border-0 py-1.5 mr-4 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",onChange:r=>s("file",r.target.files),multiple:"true"}),t&&e.jsxs("progress",{value:t.percentage,max:"100",children:[t.percentage,"%"]}),e.jsx("button",{type:"submit",className:"mt-3 py-1.5 px-3 rounded-lg bg-gradient-to-tl from-red-900 to-red-500 text-white",children:"Import CSV"})]})})]})]})})}export{c as ImportApplications};
