import{j as t}from"./app-3db92e82.js";import{S as r,c as o}from"./react-select.esm-d75e1042.js";import"./assertThisInitialized-0842855e.js";const n=[{id:1.1,value:"Merit",label:"Merit"},{id:2.1,value:"Financial need",label:"Financial need"},{id:3.1,value:"Merit and Financial need",label:"Merit and Financial need"}],d=a=>{const i=a.getValue().length||0;return t.jsx(o.basisMax,{...a,children:i<2?a.children:t.jsx("div",{style:{margin:15},children:"Max limit achieved"})})};function x({selectBasis:a,setSelectBasis:i}){const l=e=>e.length<3,s=e=>{i(Array.isArray(e)?e.map(c=>c.value):[])};return t.jsx(r,{placeholder:"Scholarship basis",components:{basisMax:d},isMulti:!0,value:n.filter(e=>a.includes(e.value)),isValidNewOption:l,name:"basis",className:"basic-multi-select py-2 text-left text-sm",touchUi:!1,onChange:s,options:n})}export{x as default};
