import{q as n,j as e,d as g,a as u,r as b}from"./app-2688816d.js";import{A as N}from"./AuthenticatedLayout-53a88bb5.js";import y from"./create-043d1b2b.js";import{E as v}from"./EllipsisVerticalIcon-3732b645.js";import{q as t}from"./menu-d016fcdf.js";import{q as w}from"./transition-88dbd74e.js";import"./selection_criteria-ccb79788.js";import"./use-is-mounted-3890f08b.js";import"./keyboard-44a68a2f.js";import"./bugs-92116ef5.js";import"./use-resolve-button-type-1afe772a.js";import"./use-text-value-e5f174d0.js";import"./hidden-c7f7b473.js";import"./selection_requirements-abd228ef.js";import"./react-select.esm-52a6c5ee.js";import"./assertThisInitialized-34b52212.js";import"./selection_uses-d6fe5bf1.js";import"./selection_renewable-e82f407b.js";import"./selection_basis-f7d3a14c.js";import"./CheckIcon-05c18fe3.js";import"./dialog-e9adec39.js";import"./use-owner-0ed623fa.js";function X({auth:x}){const{viewpartner:c}=n().props,{scholarshipassociated:o}=n().props,{associatedUser:r}=n().props;function h(...s){return s.filter(Boolean).join(" ")}return e.jsxs(N,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Partner Information"}),breadcrumb:e.jsx("span",{children:e.jsx(g,{href:route("partner.list"),children:"Partner list"})}),children:[e.jsx(u,{title:"Scholarships"}),e.jsxs("div",{className:"w-full px-6 py-6 mx-auto",children:[e.jsxs("div",{class:"flex flex-nowrap px-3",children:[e.jsxs("div",{class:"sm:w-4/6 max-w-full p-6 lg-max:mt-6",children:[e.jsx("div",{className:"relative flex items-center -mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl bg-gray-200",children:e.jsx("span",{className:"absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-br from-red-800 to-red-700 opacity-80"})}),e.jsx("div",{className:"relative flex flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200",children:c.map(({id:s,organization_name:a,contact_name:l,email:i,phone:d,address:m,consent:p})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-wrap -mx-3",children:[e.jsx("div",{className:"flex-none w-auto max-w-full px-3",children:e.jsx("div",{className:"text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200",children:e.jsx("img",{src:"../assets/img/bruce-mars.jpg",alt:"profile_image",className:"w-full shadow-soft-sm rounded-xl"})})}),e.jsx("div",{className:"flex-none w-auto max-w-full px-3 my-auto",children:e.jsxs("div",{className:"h-full",children:[e.jsxs("h5",{className:"mb-1",children:[a," / ",l]}),e.jsxs("p",{className:"mb-0 font-semibold leading-normal text-base",children:["Email:",i," ",e.jsxs("span",{className:"ml-2",children:["Phone:",d]})]})]})}),e.jsx("div",{className:"w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12",children:e.jsx("div",{className:"relative right-0",children:e.jsx("ul",{className:"relative flex flex-wrap p-1 list-none bg-transparent rounded-xl","nav-pills":!0,role:"tablist"})})})]},s)}))})]}),e.jsx("div",{class:"sm:w-2/6 pl-4",children:e.jsx("div",{className:"flex max-w-full p-6 bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border",children:e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Partner Personnel"}),e.jsx("p",{className:"mt-2 text-base text-gray-700",children:"List of users associated with partner for contacting"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-100",children:r==null?void 0:r.map(s=>e.jsxs("li",{className:"flex justify-between gap-x-2 py-2",children:[e.jsxs("div",{className:"flex min-w-0 gap-x-4",children:[e.jsx("img",{className:"h-6 w-6 flex-none rounded-full bg-gray-50",src:s.imageUrl,alt:""}),e.jsx("div",{className:"min-w-0 flex-auto",children:e.jsxs("p",{className:"text-base font-semibold leading-normal text-gray-900",children:[e.jsx("a",{href:s.href,className:"hover:underline",children:s.name}),e.jsx("br",{}),e.jsx("span",{className:"mt-1 flex text-sm leading-normal text-gray-800",children:e.jsx("a",{href:`mailto:${s.email}`,className:"truncate hover:underline",children:s.email})})]})})]}),e.jsxs("div",{className:"flex shrink-0 items-center gap-x-2",children:[e.jsx("div",{className:"hidden sm:flex sm:flex-col sm:items-end",children:s.lastSeen?e.jsxs("p",{className:"mt-1 text-xs leading-normal text-gray-500",children:["Last seen ",e.jsx("time",{dateTime:s.lastSeenDateTime,children:s.lastSeen})]}):e.jsxs("div",{className:"flex items-center gap-x-1.5",children:[e.jsx("div",{className:"flex-none rounded-full bg-emerald-500/20 p-1",children:e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"})}),e.jsx("p",{className:"text-xs leading-normal text-gray-500",children:"Online"})]})}),e.jsxs(t,{as:"div",className:"relative flex-none",children:[e.jsxs(t.Button,{className:"-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900",children:[e.jsx("span",{className:"sr-only",children:"Open options"}),e.jsx(v,{className:"h-5 w-5","aria-hidden":"true"})]}),e.jsx(w,{as:b.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e.jsx(t.Items,{className:"absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none",children:e.jsx(t.Item,{children:({active:a})=>e.jsxs("a",{href:"#",className:h(a?"bg-gray-50":"","block px-3 py-1 text-base leading-6 text-gray-900"),children:["Delete User",e.jsxs("span",{className:"sr-only",children:[", ",s.name]})]})})})})]})]})]},s.email))})]})})})]}),e.jsx("div",{class:"w-full p-6 mx-auto mb-10",children:e.jsx("div",{class:"flex flex-wrap -mx-3 px-3",children:e.jsxs("div",{class:"sm:w-full max-w-full p-6 lg-max:mt-6 bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Scholarship Funds"}),e.jsx("p",{className:"mt-2 text-base text-gray-700"})]}),e.jsx("div",{className:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:e.jsx(y,{})})]}),e.jsx("div",{className:"-mx-4 mt-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6",children:"Deadline - Scholarship Name"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-base font-semibold text-gray-900 lg:table-cell",children:"Uses"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-base font-semibold text-gray-900 sm:table-cell",children:"Award Amount"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-base font-semibold text-gray-900 lg:table-cell",children:"Total fund Amount"}),e.jsx("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6",children:e.jsx("span",{className:"sr-only",children:"View"})})]})}),e.jsx("tbody",{children:o.map(({id:s,partner_id:a,name:l,deadline:i,description:d,award_payments:m,additional_information:p,review_applicants:S,selection_criteria:k,requirement_criteria:q,award_based_on:f,renewability:A,uses:F,fund_amount:j})=>e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"px-4",children:[e.jsxs("td",{className:"relative py-4 px-3 mr-4 text-base font-medium text-gray-900",children:[i," - ",l,e.jsx("div",{className:"absolute bottom-0 right-full h-px w-screen bg-gray-100"}),e.jsx("div",{className:"absolute bottom-0 left-0 h-px w-screen bg-gray-100"})]}),e.jsx("td",{className:"hidden px-3 py-4 text-base text-gray-800 sm:table-cell",children:f}),e.jsxs("td",{className:"hidden px-3 py-4 text-base text-gray-800 md:table-cell",children:["$",j]}),e.jsxs("td",{className:"px-3 py-4 text-base text-left text-gray-800",children:["$",m,"/yr"]}),e.jsxs("td",{className:"relative py-4 pl-3 text-right text-sm font-medium",children:[e.jsxs("a",{href:route("scholarship.show",s),className:"text-base text-indigo-600 hover:text-indigo-900",children:["View",e.jsxs("span",{className:"sr-only",children:[", ",l]})]}),e.jsxs("a",{href:route("scholarship.delete",s),className:"px-4 text-red-900 hover:text-indigo-900 text-base",children:["Delete",e.jsxs("span",{className:"sr-only",children:[", ",l]})]})]})]},s)}))})]})})]})})})]})]})}export{X as default};