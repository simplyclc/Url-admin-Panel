import{q as I,j as e,d as l}from"./app-3db92e82.js";import{Z as S,u as A,M,c as b,B as C,a as i,d as t,b as d,L as p,A as h,I as x,J as w}from"./AccountCircle-ff9f0480.js";import"./assertThisInitialized-0842855e.js";import"./index-90830622.js";function y(){const{allScholaships:m}=I().props,{data:n}=m;console.log(n);const a=b(),u=[a.accessor("id",{header:"ID",size:40}),a.accessor("name",{header:"Scholarship Name",size:150}),a.accessor("additional_information",{header:"Extra Infomation",size:400}),a.accessor("selection_criteria",{header:"Selection Criteria",size:300}),a.accessor("review_applicants",{header:"Review Applicants",size:50}),a.accessor("award_payments",{header:"Award Payment size",size:50}),a.accessor("award_based_on",{header:"Award Based On"}),a.accessor("renewability",{header:"Renewable",size:50}),a.accessor("uses",{header:"Scholarship uses"}),a.accessor("deadline",{header:"Deadline"}),a.accessor("fund_amount",{header:"Fund amount"})],o=S({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),c=s=>{const r=s.map(f=>f.original),R=x(o)(r);w(o)(R)},g=()=>{const s=x(o)(n);w(o)(s)},j=A({columns:u,data:n,enableRowSelection:!0,enableRowActions:!0,columnFilterDisplayMode:"popover",paginationDisplayMode:"pages",positionToolbarAlertBanner:"bottom",renderTopToolbarCustomActions:({table:s})=>e.jsxs(C,{sx:{display:"flex",gap:"16px",padding:"8px",flexWrap:"wrap"},children:[e.jsx(i,{onClick:g,startIcon:e.jsx(t,{}),children:"Export All Data"}),e.jsx(i,{disabled:s.getPrePaginationRowModel().rows.length===0,onClick:()=>c(s.getPrePaginationRowModel().rows),startIcon:e.jsx(t,{}),children:"Export All Rows"}),e.jsx(i,{disabled:s.getRowModel().rows.length===0,onClick:()=>c(s.getRowModel().rows),startIcon:e.jsx(t,{}),children:"Export Page Rows"}),e.jsx(i,{disabled:!s.getIsSomeRowsSelected()&&!s.getIsAllRowsSelected(),onClick:()=>c(s.getSelectedRowModel().rows),startIcon:e.jsx(t,{}),children:"Export Selected Rows"})]}),renderRowActionMenuItems:({closeMenu:s,row:r})=>[e.jsxs(d,{onClick:()=>{s()},sx:{m:0},children:[e.jsx(p,{children:e.jsx(h,{})}),e.jsx(l,{href:route("scholarship.show",r.original.id),children:"View Scholarship"})]},0),e.jsxs(d,{onClick:()=>{s()},sx:{m:0},children:[e.jsx(p,{children:e.jsx(h,{})}),e.jsx(l,{href:route("scholarship.applications.view",r.original.id),children:"View applications"})]},1)]});return e.jsx(M,{table:j})}export{y as default};
