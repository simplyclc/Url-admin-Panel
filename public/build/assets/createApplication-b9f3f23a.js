import{R as C,r,W as V,j as e,d as K,a as H}from"./app-8a804a9c.js";import{S as Z}from"./StudentAuthLayout-f93a8b22.js";import{O as M,U as I,y as D,T as W,o as P,u as A,C as E,I as L}from"./use-is-mounted-20504c5d.js";import{I as z,o as q,a as w}from"./keyboard-9ecdadb9.js";import{T as J}from"./use-resolve-button-type-0c07d536.js";import{s as Q,d as F,u as Y}from"./transition-198eabbb.js";import{r as G}from"./bugs-e7545094.js";import"./dialog-d575f93a.js";import"./use-owner-020f00a4.js";import"./hidden-e383f66c.js";var O;let X=(O=C.startTransition)!=null?O:function(s){s()};var ee=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(ee||{}),se=(s=>(s[s.ToggleDisclosure=0]="ToggleDisclosure",s[s.CloseDisclosure=1]="CloseDisclosure",s[s.SetButtonId=2]="SetButtonId",s[s.SetPanelId=3]="SetPanelId",s[s.LinkPanel=4]="LinkPanel",s[s.UnlinkPanel=5]="UnlinkPanel",s))(se||{});let le={0:s=>({...s,disclosureState:A(s.disclosureState,{0:1,1:0})}),1:s=>s.disclosureState===1?s:{...s,disclosureState:1},4(s){return s.linkedPanel===!0?s:{...s,linkedPanel:!0}},5(s){return s.linkedPanel===!1?s:{...s,linkedPanel:!1}},2(s,n){return s.buttonId===n.buttonId?s:{...s,buttonId:n.buttonId}},3(s,n){return s.panelId===n.panelId?s:{...s,panelId:n.panelId}}},R=r.createContext(null);R.displayName="DisclosureContext";function $(s){let n=r.useContext(R);if(n===null){let l=new Error(`<${s} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,$),l}return n}let T=r.createContext(null);T.displayName="DisclosureAPIContext";function U(s){let n=r.useContext(T);if(n===null){let l=new Error(`<${s} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,U),l}return n}let B=r.createContext(null);B.displayName="DisclosurePanelContext";function te(){return r.useContext(B)}function ae(s,n){return A(n.type,le,s,n)}let ne=r.Fragment;function re(s,n){let{defaultOpen:l=!1,...t}=s,f=r.useRef(null),i=D(n,W(p=>{f.current=p},s.as===void 0||s.as===r.Fragment)),c=r.useRef(null),y=r.useRef(null),m=r.useReducer(ae,{disclosureState:l?0:1,linkedPanel:!1,buttonRef:y,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:x},b]=m,h=P(p=>{b({type:1});let N=q(f);if(!N||!x)return;let d=(()=>p?p instanceof HTMLElement?p:p.current instanceof HTMLElement?p.current:N.getElementById(x):N.getElementById(x))();d==null||d.focus()}),v=r.useMemo(()=>({close:h}),[h]),j=r.useMemo(()=>({open:u===0,close:h}),[u,h]),k={ref:i};return C.createElement(R.Provider,{value:m},C.createElement(T.Provider,{value:v},C.createElement(Q,{value:A(u,{0:F.Open,1:F.Closed})},E({ourProps:k,theirProps:t,slot:j,defaultTag:ne,name:"Disclosure"}))))}let ie="button";function oe(s,n){let l=z(),{id:t=`headlessui-disclosure-button-${l}`,...f}=s,[i,c]=$("Disclosure.Button"),y=te(),m=y===null?!1:y===i.panelId,u=r.useRef(null),x=D(u,n,m?null:i.buttonRef),b=L();r.useEffect(()=>{if(!m)return c({type:2,buttonId:t}),()=>{c({type:2,buttonId:null})}},[t,c,m]);let h=P(d=>{var _;if(m){if(i.disclosureState===1)return;switch(d.key){case w.Space:case w.Enter:d.preventDefault(),d.stopPropagation(),c({type:0}),(_=i.buttonRef.current)==null||_.focus();break}}else switch(d.key){case w.Space:case w.Enter:d.preventDefault(),d.stopPropagation(),c({type:0});break}}),v=P(d=>{switch(d.key){case w.Space:d.preventDefault();break}}),j=P(d=>{var _;G(d.currentTarget)||s.disabled||(m?(c({type:0}),(_=i.buttonRef.current)==null||_.focus()):c({type:0}))}),k=r.useMemo(()=>({open:i.disclosureState===0}),[i]),p=J(s,u),N=m?{ref:x,type:p,onKeyDown:h,onClick:j}:{ref:x,id:t,type:p,"aria-expanded":i.disclosureState===0,"aria-controls":i.linkedPanel?i.panelId:void 0,onKeyDown:h,onKeyUp:v,onClick:j};return E({mergeRefs:b,ourProps:N,theirProps:f,slot:k,defaultTag:ie,name:"Disclosure.Button"})}let ce="div",de=M.RenderStrategy|M.Static;function me(s,n){let l=z(),{id:t=`headlessui-disclosure-panel-${l}`,...f}=s,[i,c]=$("Disclosure.Panel"),{close:y}=U("Disclosure.Panel"),m=L(),u=D(n,i.panelRef,j=>{X(()=>c({type:j?4:5}))});r.useEffect(()=>(c({type:3,panelId:t}),()=>{c({type:3,panelId:null})}),[t,c]);let x=Y(),b=(()=>x!==null?(x&F.Open)===F.Open:i.disclosureState===0)(),h=r.useMemo(()=>({open:i.disclosureState===0,close:y}),[i,y]),v={ref:u,id:t};return C.createElement(B.Provider,{value:i.panelId},E({mergeRefs:m,ourProps:v,theirProps:f,slot:h,defaultTag:ce,features:de,visible:b,name:"Disclosure.Panel"}))}let ge=I(re),ue=I(oe),xe=I(me),g=Object.assign(ge,{Button:ue,Panel:xe});function pe({title:s,titleId:n,...l},t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},l),s?r.createElement("title",{id:n},s):null,r.createElement("path",{fillRule:"evenodd",d:"M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",clipRule:"evenodd"}))}const he=r.forwardRef(pe),S=he;function Ie({auth:s,application:n}){const{data:l,setData:t,post:f,processing:i,errors:c,reset:y}=V({name:"",email:"",streetAddress:"",city:"",state:"",zipCode:"",siblings:"",siblings_attending_college:"",college_choice:"",college_major:"",college_status:"",college_choice2:"",college_major2:"",college_status2:"",college_choice3:"",college_major3:"",college_status3:"",sat_score:"",sat_scheduled:"",act_score:"",act_scheduled:"",reference:"",reference_email:"",reference_relationsship:"",reference2:"",reference_email2:"",reference_relationsship2:"",application_essay:"",community_service:""}),m=u=>{u.preventDefault(),f(route("scholar.application.create"))};return e.jsxs(Z,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Application"}),breadcrumb:e.jsx("span",{children:e.jsx(K,{href:route("scholar.dashboard"),children:"Application"})}),children:[e.jsx(H,{title:"Application"}),e.jsx("div",{className:"w-full px-6 py-6 mx-auto",children:e.jsx("div",{className:"flex flex-wrap -mx-1",children:e.jsxs("form",{onSubmit:m,children:[e.jsx("div",{className:"space-y-12",children:n==null?void 0:n.map(({id:u,name:x,email:b,deadline:h,description:v,award_payments:j,additional_information:k,review_applicants:p,selection_criteria:N,requirement_criteria:d,award_based_on:_,renewability:fe,uses:ye,fund_amount:be})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Personal Information"}),e.jsxs("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:["Use a permanent address where you can receive mail. ",e.jsx("br",{}),"This information will only be shared with Blacks Scholars personnel and Selection Committee"]})]}),e.jsxs("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Full name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"name",id:"name",value:l.name,autoComplete:"name",onChange:a=>t("name",a.target.value),placeholder:x,className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",placeholder:b,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"streetAddress",className:"block text-sm font-medium leading-6 text-gray-900",children:"Street address"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"streetAddress",value:l.streetAddress,id:"streetAddress",autoComplete:"streetAddress",onChange:a=>t("streetAddress",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-2 sm:col-start-1",children:[e.jsx("label",{htmlFor:"city",className:"block text-sm font-medium leading-6 text-gray-900",children:"City"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"city",value:l.city,id:"city",autoComplete:"address-level2",onChange:a=>t("city",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx("label",{htmlFor:"state",className:"block text-sm font-medium leading-6 text-gray-900",children:"State / Province"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"state",value:l.state,id:"state",autoComplete:"address-level1",onChange:a=>t("state",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx("label",{htmlFor:"zipCode",className:"block text-sm font-medium leading-6 text-gray-900",children:"ZIP / Postal code"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"zipCode",value:l.zipCode,id:"zipCode",autoComplete:"zipCode",onChange:a=>t("zipCode",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"siblings",className:"block text-sm font-medium leading-6 text-gray-900",children:"Any Siblings"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"siblings",value:l.siblings,id:"siblings",autoComplete:"siblings",onChange:a=>t("siblings",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"siblings_attending_college",className:"block text-sm font-medium leading-6 text-gray-900",children:"Number of Siblings Attending College?"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"siblings_attending_college",value:l.siblings_attending_college,id:"siblings_attending_college",onChange:a=>t("siblings_attending_college",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"College Choices & SAT Scores"}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Lets input your education level and or college choice"})]}),e.jsxs("div",{className:"max-w-2xl p-2 col-span-2",children:[e.jsx(g,{children:({open:a})=>e.jsxs(e.Fragment,{children:[e.jsxs(g.Button,{className:"flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-md font-medium text-gray-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-300/75",children:[e.jsx("span",{children:"First college choice"}),e.jsx(S,{className:`${a?"rotate-180 transform":""} h-5 w-5 text-purple-500`})]}),e.jsx(g.Panel,{className:"px-4 pb-2 pt-4 text-sm text-gray-500",children:e.jsxs("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{htmlFor:"college_choice",className:"block text-sm font-medium leading-6 text-gray-900",children:"College Name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"college_choice",id:"college_choice",value:l.college_choice,autoComplete:"given-name",onChange:o=>t("college_choice",o.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{htmlFor:"college_major",className:"block text-sm font-medium leading-6 text-gray-900",children:"College Major"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"college_major",value:l.college_major,id:"college_major",onChange:o=>t("college_major",o.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("label",{htmlFor:"college_status",className:"block text-sm font-medium leading-6 text-gray-900",children:"Current Admission Status"}),e.jsxs("select",{id:"college_status",name:"college_status",value:l.college_status,onChange:o=>t("college_status",o.target.value),className:"mt-2 block w-full h-10 rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:"pending",children:[e.jsx("option",{value:"Not Started",children:"Not Started"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Accepted",children:"Accepted"}),e.jsx("option",{value:"Decline",children:"Decline"})]})]})]})})]})}),e.jsx(g,{as:"div",className:"mt-2",children:({open:a})=>e.jsxs(e.Fragment,{children:[e.jsxs(g.Button,{className:"flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-md font-medium text-gray-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-300/75",children:[e.jsx("span",{children:"Second college choice"}),e.jsx(S,{className:`${a?"rotate-180 transform":""} h-5 w-5 text-slate-700`})]}),e.jsx(g.Panel,{className:"px-4 pb-2 pt-4 text-sm text-slate-800",children:e.jsxs("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{htmlFor:"colege_choice2",className:"block text-sm font-medium leading-6 text-gray-900",children:"College Name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"college_choice2",id:"colege_choice2",value:l.college_choice2,onChange:o=>t("college_choice2",o.target.value),autoComplete:"given-name",className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{htmlFor:"college_major2",className:"block text-sm font-medium leading-6 text-gray-900",children:"College Major"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"college_major2",id:"college_major2",value:l.college_major2,onChange:o=>t("college_major2",o.target.value),autoComplete:"given-name",className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("label",{htmlFor:"college_status2",className:"block text-sm font-medium leading-6 text-gray-900",children:"Current Admission Status"}),e.jsxs("select",{id:"college_status2",name:"college_status2",value:l.college_status2,onChange:o=>t("college_status2",o.target.value),className:"h-10 mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:"Canada",children:[e.jsx("option",{value:"Not Started",children:"Not Started"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Accepted",children:"Accepted"}),e.jsx("option",{value:"Decline",children:"Decline"})]})]})]})})]})}),e.jsx(g,{as:"div",className:"mt-2",children:({open:a})=>e.jsxs(e.Fragment,{children:[e.jsxs(g.Button,{className:"flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-md font-medium text-gray-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-300/75",children:[e.jsx("span",{children:"Third Choice college choice"}),e.jsx(S,{className:`${a?"rotate-180 transform":""} h-5 w-5 text-slate-700`})]}),e.jsx(g.Panel,{className:"px-4 pb-2 pt-4 text-sm text-slate-800",children:e.jsxs("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{htmlFor:"college_choice3",className:"block text-sm font-medium leading-6 text-gray-900",children:"College Name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"college_choice3",id:"college_choice3",value:l.college_choice3,autoComplete:"college_choice3",onChange:o=>t("college_choice3",o.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{htmlFor:"college_major3",className:"block text-sm font-medium leading-6 text-gray-900",children:"College Major"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"college_major3",id:"college_major3",value:l.college_major3,autoComplete:"given-name",onChange:o=>t("college_major3",o.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("label",{htmlFor:"college_status3",className:"block text-sm font-medium leading-6 text-gray-900",children:"Current Admission Status"}),e.jsxs("select",{id:"college_status3",name:"college_status3",value:l.college_status3,onChange:o=>t("college_status3",o.target.value),className:"h-10 mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:"Canada",children:[e.jsx("option",{value:"Not Started",children:"Not Started"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Accepted",children:"Accepted"}),e.jsx("option",{value:"Decline",children:"Decline"})]})]})]})})]})}),e.jsxs("div",{className:"mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"sat_score",className:"block text-sm font-medium leading-6 text-gray-900",children:"Sat Score"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"sat_score",value:l.sat_score,id:"sat_score",onChange:a=>t("sat_score",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"sat_scheduled",className:"block text-sm font-medium leading-6 text-gray-900",children:"Sat Schedule Date"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"date",name:"sat_scheduled",id:"sat_scheduled",value:l.sat_scheduled,onChange:a=>t("sat_scheduled",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"act_score",className:"block text-sm font-medium leading-6 text-gray-900",children:"Act Score"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"act_score",id:"act_score",value:l.act_score,onChange:a=>t("act_score",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"act_scheduled",className:"block text-sm font-medium leading-6 text-gray-900",children:"Act Schedule Date"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"date",name:"act_scheduled",id:"act_scheduled",value:l.act_scheduled,onChange:a=>t("act_scheduled",a.target.value),className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Referenece Information"}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600"})]}),e.jsx("div",{className:"max-w-2xl space-y-10 md:col-span-2",children:e.jsx(g,{children:({open:a})=>e.jsxs(e.Fragment,{children:[e.jsxs(g.Button,{className:"flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-md font-medium text-gray-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-300/75",children:[e.jsx("span",{children:"First Reference"}),e.jsx(S,{className:`${a?"rotate-180 transform":""} h-5 w-5 text-purple-500`})]}),e.jsx(g.Panel,{className:"px-4 pb-2 pt-4 text-sm text-gray-500",children:e.jsxs("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{htmlFor:"reference",className:"block text-sm font-medium leading-6 text-gray-900",children:"Reference Name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"reference",id:"reference",className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{htmlFor:"reference_email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Reference Email"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"reference_email",id:"reference_email",className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("label",{htmlFor:"reference_relationsship",className:"block text-sm font-medium leading-6 text-gray-900",children:"How do you know the reference?"}),e.jsxs("select",{id:"reference_relationsship",name:"reference_relationsship",className:"mt-2 block w-full h-10 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:"Employer",children:[e.jsx("option",{children:"Teacher\\Counsoler"}),e.jsx("option",{children:"Pastor"}),e.jsx("option",{children:"Employer"}),e.jsx("option",{children:"Family Friend"}),e.jsx("option",{children:"Other"})]})]})]})})]})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Addtional Information Information"}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600"})]}),e.jsxs("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2",children:[e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"application_essay",className:"block text-sm font-medium leading-6 text-gray-900",children:"Short Essay"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"application_essay",name:"application_essay",value:l.application_essay,onChange:a=>t("application_essay",a.target.value),rows:10,className:"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:""})}),e.jsx("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about yourself."})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx("label",{htmlFor:"community_service",className:"block text-sm font-medium leading-6 text-gray-900",children:"Community Service List"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"community_service",name:"community_service",value:l.community_service,onChange:a=>t("community_service",a.target.value),rows:10,className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:""})}),e.jsx("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"List your communinity Service ex:Company name, Jobtile, date,"})]})]})]})]}))}),e.jsxs("div",{className:"mt-6 flex items-center justify-center gap-x-6",children:[e.jsx("button",{type:"button",className:"text-sm font-semibold leading-6 text-gray-900",children:"Cancel"}),e.jsx("button",{href:m,type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Submit"})]})]})})})]})}export{Ie as default};
