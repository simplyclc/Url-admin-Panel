import{j as e,d as C,a as z}from"./app-066876ed.js";import{A as E}from"./AuthenticatedLayout-73fc8cb7.js";import M from"./createScholarship-7f94f9eb.js";import"./transition-38a03ed2.js";import"./selection_criteria-4fcdd984.js";import"./keyboard-b41b523e.js";import"./selection_requirements-724f7ff9.js";import"./react-select.esm-4ae264b1.js";import"./assertThisInitialized-ca743b97.js";import"./selection_uses-ab2d6cce.js";import"./selection_renewable-7485f753.js";import"./selection_basis-d486323f.js";import"./CheckIcon-53741808.js";import"./dialog-809a5dce.js";function je({auth:F,scholarship:x,applications:c,otherscholarship:o,requirements:m,scholarshipuses:h,criteria:p,role:S}){function s(...l){return l.filter(Boolean).join(" ")}return e.jsxs(E,{user:F.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Scholarships Information "}),breadcrumb:e.jsxs("span",{children:[S==="admin"?e.jsx(C,{href:route("scholarship.list"),children:"Scholarship list"}):e.jsx("span",{children:"Scholarship list"})," "]}),children:[e.jsx(z,{title:"Scholarships"}),x==null?void 0:x.map(({id:l,name:d,deadline:b,description:t,award_payments:j,additional_information:n,review_applicants:g,selection_criteria:u,requirement_criteria:w,award_based_on:f,renewability:v,uses:N,fund_amount:r})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full px-6 py-6 mx-auto",children:[e.jsx("div",{className:"relative flex items-center p-0 -mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl bg-gray-200",children:e.jsx("span",{className:"absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-br from-red-800 to-red-700 opacity-80"})}),e.jsx("div",{className:"relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/100 bg-clip-border backdrop-blur-2xl backdrop-saturate-200",children:e.jsxs("div",{className:"flex flex-wrap -mx-3",children:[e.jsx("div",{className:"flex-none w-auto max-w-full px-3",children:e.jsx("div",{className:"text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200",children:e.jsx("img",{src:"../assets/img/bruce-mars.jpg",alt:"profile_image",className:"w-full shadow-soft-sm rounded-xl"})})}),e.jsx("div",{className:"flex-none w-auto max-w-full px-3 my-auto",children:e.jsx("div",{className:"h-full",children:e.jsxs("h5",{className:"mb-1",children:[d," "]})})},l),e.jsx("div",{className:"w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12",children:e.jsx("div",{className:"relative right-0",children:e.jsx("ul",{className:"relative flex flex-wrap p-1 list-none bg-transparent rounded-xl","nav-pills":!0,role:"tablist",children:e.jsx("li",{className:"z-30 flex-auto text-center",children:e.jsxs("p",{className:"z-30 block w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700","nav-link":!0,href:"javascript:;",role:"tab","aria-selected":"false",children:[e.jsxs("svg",{className:"text-slate-700",width:"16px",height:"16px",viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",children:[e.jsx("title",{children:"settings"}),e.jsx("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:e.jsx("g",{transform:"translate(-2020.000000, -442.000000)",fill:"#FFFFFF","fill-rule":"nonzero",children:e.jsx("g",{transform:"translate(1716.000000, 291.000000)",children:e.jsxs("g",{transform:"translate(304.000000, 151.000000)",children:[e.jsx("polygon",{className:"fill-slate-800",opacity:"0.596981957",points:"18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"}),e.jsx("path",{className:"fill-slate-800",d:"M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z",opacity:"0.596981957"}),e.jsx("path",{className:"fill-slate-800",d:"M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"})]})})})})]}),e.jsxs("span",{className:"ml-1",children:["fund amount",r==null?e.jsx("span",{className:"text-4xl text-black ml-5",children:"$0.00"}):e.jsx("span",{className:"text-4xl text-black ml-5",children:r.toFixed(2)})]})]})})})})})]})})]}),e.jsx("div",{className:"w-full p-6 mx-auto",children:e.jsxs("div",{className:"flex flex-wrap -mx-3",children:[e.jsx("div",{className:"w-full max-w-full px-4 lg-max:mt-6 xl:w-8/12",children:e.jsxs("div",{className:"relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border",children:[e.jsx("div",{className:"p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl",children:e.jsxs("div",{className:"flex flex-wrap -mx-3",children:[e.jsx("div",{className:"flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none",children:e.jsx("h6",{className:"mb-0",children:"Scholarship description"})}),e.jsxs("div",{className:"w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none",children:[e.jsx("a",{href:"javascript:;","data-target":"tooltip_trigger","data-placement":"top",children:e.jsx("i",{className:"leading-normal fas fa-user-edit text-sm text-slate-400"})}),e.jsxs("div",{"data-target":"tooltip",className:"hidden px-2 py-1 text-center text-black bg-black rounded-lg text-sm",role:"tooltip",children:["Edit Profile",e.jsx("div",{className:"invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']","data-popper-arrow":!0})]})]})]})}),e.jsxs("div",{className:"flex-auto p-2",children:[e.jsx("p",{className:"leading-normal text-sm mx-2",children:t}),e.jsx("hr",{className:"h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent"}),e.jsx("h6",{className:"mb-0",children:"Additional Information"}),e.jsx("p",{className:"leading-normal text-sm mx-2",children:n})]})]})}),e.jsx("div",{className:"w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12",children:e.jsxs("div",{className:"relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border",children:[e.jsx("div",{className:"px-4 pt-4 mb-0 bg-white border-b-0 rounded-t-2xl",children:e.jsx("div",{className:"flex flex-wrap -mx-3",children:e.jsx("div",{className:"flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none",children:e.jsx("h6",{className:"mb-0",children:"Criteria"})})})}),e.jsxs("div",{className:"flex-auto px-4",children:[e.jsx("ul",{className:"flex flex-col pb-2 pl-0 mb-0",children:p==null?void 0:p.map(({id:i,name:a})=>e.jsx(e.Fragment,{children:e.jsx("li",{className:"text-slate-700",children:a})}))}),e.jsxs("ul",{className:"flex flex-col pl-0 mb-0",children:[e.jsxs("li",{className:"relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit",children:[e.jsx("strong",{className:"text-slate-700",children:"Award based on:"}),"   ",f]}),e.jsxs("li",{className:"relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit",children:[e.jsx("strong",{className:"text-slate-700",children:"Uses:"}),e.jsx("ul",{children:h==null?void 0:h.map(({id:i,name:a})=>e.jsx(e.Fragment,{children:e.jsx("li",{className:"text-slate-700",children:a})}))})]}),e.jsxs("li",{className:"relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit",children:[e.jsx("strong",{className:"text-slate-700",children:"Rquirements:"}),e.jsx("ul",{children:m==null?void 0:m.map(({id:i,name:a})=>e.jsx(e.Fragment,{children:e.jsx("li",{className:"text-slate-700",children:a})}))})]})]})]})]})})]})}),e.jsx("div",{className:"w-full p-2 mx-auto mb-2",children:e.jsx("div",{className:"sm:col-span-3 mx-4",children:e.jsx("a",{href:route("scholarship.edit"),className:"inline-block w-1/5 px-3 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-red-700 to-red-500 hover:shadow-soft-2xl hover:scale-102",children:"Edit"})})})]})),e.jsx("div",{className:"w-full p-6 mx-auto mb-10",children:e.jsx("div",{className:"flex flex-wrap -mx-3 px-3",children:e.jsxs("div",{className:"w-full max-w-full p-6 lg-max:mt-6 bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border",children:[e.jsx("div",{className:"sm:flex sm:items-center",children:e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Applications"}),e.jsx("p",{className:"mt-2 text-sm text-gray-700"})]})}),e.jsx("div",{className:"-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",children:"School"}),e.jsx("th",{scope:"col",className:"sm:hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",children:"SAT"}),e.jsx("th",{scope:"col",className:"sm:hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",children:"ACT"}),e.jsx("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",children:"College / Major"}),e.jsxs("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6",children:[e.jsx("span",{className:"sr-only",children:"View"}),"View"]})]})}),e.jsx("tbody",{children:c==null?void 0:c.map(({id:l,scholarship_id:d,awarded:b,name:t,email:j,submitted_on:n,phone:g,parent_name:u,parent_job:w,parent_phone:f,parent_email:v,applicant_essay:N,community_service:r,school:i,graduation_year:a,gpa:L,sat_Scheduled:R,sat_Score:y,act_scheduled:V,act_score:_,ap_test_name:B,ap_test_score:I,ap_test_name2:T,family_income:Z,siblings:O,siblings_attending_college:P,fasfa_acknowledgement:U,college_choice:k,college_major:A,college_status:$,college_choice2:D,college_major2:G,college_status2:H,scholarship_choice:J,reference:K,reference_email1:Q,reference_relationshiip:W,reference2:X,reference_email2:Y,reference_relationshiip2:q,resume_upload:ee,essay_upload:le,additional_information_upload:se})=>e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsxs("td",{className:s("border-t border-gray-200","relative py-4 pl-4 pr-3 text-sm sm:pl-6"),children:[e.jsx("div",{className:"font-medium text-gray-900",children:t}),e.jsxs("div",{className:"mt-1 flex flex-col text-gray-700 sm:block lg:hidden",children:[e.jsx("span",{children:L}),e.jsx("br",{}),e.jsx("span",{children:n})]})]}),e.jsxs("td",{className:s("border-t border-gray-200","px-3 py-3.5 text-sm text-gray-900 text-left"),children:[e.jsx("div",{className:"hidden md:block",children:i}),e.jsx("div",{className:"lg:hidden",children:i})]}),e.jsxs("td",{className:s("border-t border-gray-200","px-3 py-3.5 text-sm text-gray-900 text-left"),children:[e.jsx("div",{className:"hidden md:block",children:y}),e.jsx("div",{className:"sm:hidden",children:y})]}),e.jsxs("td",{className:s("border-t border-gray-200","px-3 py-3.5 text-sm text-gray-900 text-left"),children:[e.jsx("div",{className:"hidden md:block",children:_}),e.jsx("div",{className:"sm:hidden",children:_})]}),e.jsxs("td",{className:s("border-t border-gray-200","px-3 py-3.5 text-sm text-gray-900 text-left"),children:[e.jsx("div",{className:"sm:hidden",children:k}),e.jsxs("div",{className:"hidden sm:block",children:[k," - ",A]})]}),e.jsx("td",{className:s("border-t border-gray-200","relative py-3.5 pl-3 pr-4 text-center text-sm font-medium sm:pr-6"),children:e.jsx(C,{href:route("application.view",l),className:"inline-block w-full px-6 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-red-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102",children:"Resume"})})]},l)}))})]})})]})})}),e.jsx("div",{className:"w-full p-6 mx-auto",children:e.jsx("div",{className:"flex flex-wrap -mx-3",children:e.jsx("div",{className:"flex-none w-full max-w-full px-3 mt-6",children:e.jsxs("div",{className:"relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border",children:[e.jsxs("div",{className:"p-4 pb-0 mb-0 bg-white rounded-t-2xl",children:[e.jsx("h6",{className:"mb-1",children:"Other Scholarships"}),e.jsx("p",{className:"leading-normal text-sm",children:"Addition scholarships provided:"})]}),e.jsx("div",{className:"flex-auto p-4",children:e.jsxs("div",{className:"flex flex-wrap -mx-3",children:[o==null?void 0:o.map(({id:l,name:d,deadline:b,description:t,award_payments:j,additional_information:n,review_applicants:g,selection_criteria:u,requirement_criteria:w,award_based_on:f,renewability:v,uses:N,fund_amount:r})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full max-w-full px-3 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12",children:e.jsxs("div",{className:"relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border mb-6",children:[e.jsx("div",{className:"relative",children:e.jsx("a",{className:"block shadow-xl rounded-2xl",children:e.jsx("img",{src:"../assets/img/home-decor-1.jpg",alt:"img-blur-shadow",className:"max-w-full shadow-soft-2xl rounded-2xl"})})}),e.jsxs("div",{className:"flex-auto px-1 pt-6",children:[e.jsxs("p",{className:"relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text",children:["Scholarship amount ",r]}),e.jsx("a",{href:"javascript:;",children:e.jsx("h5",{children:d})}),e.jsx("p",{className:"mb-6 leading-normal text-sm truncate ...",children:t}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("button",{type:"button",className:"inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500",children:"View Scholarship"})})]})]})},l)})),e.jsx("div",{className:"w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12",children:e.jsx("div",{className:"relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border",children:e.jsx("div",{className:"flex flex-col justify-center flex-auto p-6 text-center",children:e.jsx(M,{})})})})]})})]})})})})]})}export{je as default};
