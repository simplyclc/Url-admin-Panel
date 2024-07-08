import{r as u,R as Q,j as h}from"./app-33bf3152.js";import{s as te,l as k,o as p,O as ee,U as E,y as D,u as C,x as he,C as j,a as J}from"./use-is-mounted-f403d620.js";import{p as q,s as Oe,d as G,u as Re,q as ye}from"./transition-32da0020.js";import{h as Se,T as Le,f as we,s as Ie,I as H,o as $e,a as g,b as Te}from"./keyboard-559cbfc1.js";import{y as Pe,r as Ce}from"./bugs-51f5b266.js";import{T as ke}from"./use-resolve-button-type-2c8419d3.js";import{s as Ee,u as De,c as w,f as je}from"./use-text-value-907a0dd4.js";function ne(e,t){let[n,r]=u.useState(e),a=te(e);return k(()=>r(a.current),[a,r,...t]),n}function Me(e,t,n){let[r,a]=u.useState(n),s=e!==void 0,o=u.useRef(s),l=u.useRef(!1),f=u.useRef(!1);return s&&!o.current&&!l.current?(l.current=!0,o.current=s,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!s&&o.current&&!f.current&&(f.current=!0,o.current=s,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[s?e:r,p(b=>(s||a(b),t==null?void 0:t(b)))]}function re(e={},t=null,n=[]){for(let[r,a]of Object.entries(e))ae(n,oe(t,r),a);return n}function oe(e,t){return e?e+"["+t+"]":t}function ae(e,t,n){if(Array.isArray(n))for(let[r,a]of n.entries())ae(e,oe(t,r.toString()),a);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):re(n,t,e)}var Fe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Fe||{}),Ae=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ae||{}),Ne=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ne||{}),Be=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Be||{});function W(e,t=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=Te(t(e.options.slice()),s=>s.dataRef.current.domRef.current),a=n?r.indexOf(n):null;return a===-1&&(a=null),{options:r,activeOptionIndex:a}}let Ue={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(a=>n(a.dataRef.current.value));return r!==-1&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=W(e),a=je(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:a,activationTrigger:(n=t.trigger)!=null?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,r=e.searchQuery+t.value.toLowerCase(),a=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(o=>{var l;return!o.dataRef.current.disabled&&((l=o.dataRef.current.textValue)==null?void 0:l.startsWith(r))}),s=a?e.options.indexOf(a):-1;return s===-1||s===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:s,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=W(e,a=>[...a,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=W(e,r=>{let a=r.findIndex(s=>s.id===t.id);return a!==-1&&r.splice(a,1),r});return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},X=u.createContext(null);X.displayName="ListboxActionsContext";function M(e){let t=u.useContext(X);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,M),n}return t}let Y=u.createContext(null);Y.displayName="ListboxDataContext";function F(e){let t=u.useContext(Y);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,F),n}return t}function Qe(e,t){return C(t.type,Ue,e,t)}let ze=u.Fragment;function qe(e,t){let{value:n,defaultValue:r,form:a,name:s,onChange:o,by:l=(c,d)=>c===d,disabled:f=!1,horizontal:b=!1,multiple:O=!1,...I}=e;const P=b?"horizontal":"vertical";let $=D(t),[R=O?[]:void 0,L]=Me(n,o,r),[x,i]=u.useReducer(Qe,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),m=u.useRef({static:!1,hold:!1}),A=u.useRef(null),N=u.useRef(null),V=u.useRef(null),y=p(typeof l=="string"?(c,d)=>{let S=l;return(c==null?void 0:c[S])===(d==null?void 0:d[S])}:l),T=u.useCallback(c=>C(v.mode,{1:()=>R.some(d=>y(d,c)),0:()=>y(R,c)}),[R]),v=u.useMemo(()=>({...x,value:R,disabled:f,mode:O?1:0,orientation:P,compare:y,isSelected:T,optionsPropsRef:m,labelRef:A,buttonRef:N,optionsRef:V}),[R,f,O,x]);k(()=>{x.dataRef.current=v},[v]),Pe([v.buttonRef,v.optionsRef],(c,d)=>{var S;i({type:1}),Se(d,Le.Loose)||(c.preventDefault(),(S=v.buttonRef.current)==null||S.focus())},v.listboxState===0);let ie=u.useMemo(()=>({open:v.listboxState===0,disabled:f,value:R}),[v,f,R]),le=p(c=>{let d=v.options.find(S=>S.id===c);d&&K(d.dataRef.current.value)}),se=p(()=>{if(v.activeOptionIndex!==null){let{dataRef:c,id:d}=v.options[v.activeOptionIndex];K(c.current.value),i({type:2,focus:w.Specific,id:d})}}),ue=p(()=>i({type:0})),ce=p(()=>i({type:1})),de=p((c,d,S)=>c===w.Specific?i({type:2,focus:w.Specific,id:d,trigger:S}):i({type:2,focus:c,trigger:S})),pe=p((c,d)=>(i({type:5,id:c,dataRef:d}),()=>i({type:6,id:c}))),fe=p(c=>(i({type:7,id:c}),()=>i({type:7,id:null}))),K=p(c=>C(v.mode,{0(){return L==null?void 0:L(c)},1(){let d=v.value.slice(),S=d.findIndex(U=>y(U,c));return S===-1?d.push(c):d.splice(S,1),L==null?void 0:L(d)}})),ve=p(c=>i({type:3,value:c})),be=p(()=>i({type:4})),xe=u.useMemo(()=>({onChange:K,registerOption:pe,registerLabel:fe,goToOption:de,closeListbox:ce,openListbox:ue,selectActiveOption:se,selectOption:le,search:ve,clearSearch:be}),[]),me={ref:$},B=u.useRef(null),ge=q();return u.useEffect(()=>{B.current&&r!==void 0&&ge.addEventListener(B.current,"reset",()=>{L==null||L(r)})},[B,L]),Q.createElement(X.Provider,{value:xe},Q.createElement(Y.Provider,{value:v},Q.createElement(Oe,{value:C(v.listboxState,{0:G.Open,1:G.Closed})},s!=null&&R!=null&&re({[s]:R}).map(([c,d],S)=>Q.createElement(we,{features:Ie.Hidden,ref:S===0?U=>{var _;B.current=(_=U==null?void 0:U.closest("form"))!=null?_:null}:void 0,...he({key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,name:c,value:d})})),j({ourProps:me,theirProps:I,slot:ie,defaultTag:ze,name:"Listbox"}))))}let Ge="button";function He(e,t){var n;let r=H(),{id:a=`headlessui-listbox-button-${r}`,...s}=e,o=F("Listbox.Button"),l=M("Listbox.Button"),f=D(o.buttonRef,t),b=q(),O=p(x=>{switch(x.key){case g.Space:case g.Enter:case g.ArrowDown:x.preventDefault(),l.openListbox(),b.nextFrame(()=>{o.value||l.goToOption(w.First)});break;case g.ArrowUp:x.preventDefault(),l.openListbox(),b.nextFrame(()=>{o.value||l.goToOption(w.Last)});break}}),I=p(x=>{switch(x.key){case g.Space:x.preventDefault();break}}),P=p(x=>{if(Ce(x.currentTarget))return x.preventDefault();o.listboxState===0?(l.closeListbox(),b.nextFrame(()=>{var i;return(i=o.buttonRef.current)==null?void 0:i.focus({preventScroll:!0})})):(x.preventDefault(),l.openListbox())}),$=ne(()=>{if(o.labelId)return[o.labelId,a].join(" ")},[o.labelId,a]),R=u.useMemo(()=>({open:o.listboxState===0,disabled:o.disabled,value:o.value}),[o]),L={ref:f,id:a,type:ke(e,o.buttonRef),"aria-haspopup":"listbox","aria-controls":(n=o.optionsRef.current)==null?void 0:n.id,"aria-expanded":o.listboxState===0,"aria-labelledby":$,disabled:o.disabled,onKeyDown:O,onKeyUp:I,onClick:P};return j({ourProps:L,theirProps:s,slot:R,defaultTag:Ge,name:"Listbox.Button"})}let Ve="label";function Ke(e,t){let n=H(),{id:r=`headlessui-listbox-label-${n}`,...a}=e,s=F("Listbox.Label"),o=M("Listbox.Label"),l=D(s.labelRef,t);k(()=>o.registerLabel(r),[r]);let f=p(()=>{var O;return(O=s.buttonRef.current)==null?void 0:O.focus({preventScroll:!0})}),b=u.useMemo(()=>({open:s.listboxState===0,disabled:s.disabled}),[s]);return j({ourProps:{ref:l,id:r,onClick:f},theirProps:a,slot:b,defaultTag:Ve,name:"Listbox.Label"})}let We="ul",Ze=ee.RenderStrategy|ee.Static;function Je(e,t){var n;let r=H(),{id:a=`headlessui-listbox-options-${r}`,...s}=e,o=F("Listbox.Options"),l=M("Listbox.Options"),f=D(o.optionsRef,t),b=q(),O=q(),I=Re(),P=(()=>I!==null?(I&G.Open)===G.Open:o.listboxState===0)();u.useEffect(()=>{var i;let m=o.optionsRef.current;m&&o.listboxState===0&&m!==((i=$e(m))==null?void 0:i.activeElement)&&m.focus({preventScroll:!0})},[o.listboxState,o.optionsRef]);let $=p(i=>{switch(O.dispose(),i.key){case g.Space:if(o.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),l.search(i.key);case g.Enter:if(i.preventDefault(),i.stopPropagation(),o.activeOptionIndex!==null){let{dataRef:m}=o.options[o.activeOptionIndex];l.onChange(m.current.value)}o.mode===0&&(l.closeListbox(),J().nextFrame(()=>{var m;return(m=o.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}));break;case C(o.orientation,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return i.preventDefault(),i.stopPropagation(),l.goToOption(w.Next);case C(o.orientation,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return i.preventDefault(),i.stopPropagation(),l.goToOption(w.Previous);case g.Home:case g.PageUp:return i.preventDefault(),i.stopPropagation(),l.goToOption(w.First);case g.End:case g.PageDown:return i.preventDefault(),i.stopPropagation(),l.goToOption(w.Last);case g.Escape:return i.preventDefault(),i.stopPropagation(),l.closeListbox(),b.nextFrame(()=>{var m;return(m=o.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})});case g.Tab:i.preventDefault(),i.stopPropagation();break;default:i.key.length===1&&(l.search(i.key),O.setTimeout(()=>l.clearSearch(),350));break}}),R=ne(()=>{var i;return(i=o.buttonRef.current)==null?void 0:i.id},[o.buttonRef.current]),L=u.useMemo(()=>({open:o.listboxState===0}),[o]),x={"aria-activedescendant":o.activeOptionIndex===null||(n=o.options[o.activeOptionIndex])==null?void 0:n.id,"aria-multiselectable":o.mode===1?!0:void 0,"aria-labelledby":R,"aria-orientation":o.orientation,id:a,onKeyDown:$,role:"listbox",tabIndex:0,ref:f};return j({ourProps:x,theirProps:s,slot:L,defaultTag:We,features:Ze,visible:P,name:"Listbox.Options"})}let Xe="li";function Ye(e,t){let n=H(),{id:r=`headlessui-listbox-option-${n}`,disabled:a=!1,value:s,...o}=e,l=F("Listbox.Option"),f=M("Listbox.Option"),b=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===r:!1,O=l.isSelected(s),I=u.useRef(null),P=Ee(I),$=te({disabled:a,value:s,domRef:I,get textValue(){return P()}}),R=D(t,I);k(()=>{if(l.listboxState!==0||!b||l.activationTrigger===0)return;let y=J();return y.requestAnimationFrame(()=>{var T,v;(v=(T=I.current)==null?void 0:T.scrollIntoView)==null||v.call(T,{block:"nearest"})}),y.dispose},[I,b,l.listboxState,l.activationTrigger,l.activeOptionIndex]),k(()=>f.registerOption(r,$),[$,r]);let L=p(y=>{if(a)return y.preventDefault();f.onChange(s),l.mode===0&&(f.closeListbox(),J().nextFrame(()=>{var T;return(T=l.buttonRef.current)==null?void 0:T.focus({preventScroll:!0})}))}),x=p(()=>{if(a)return f.goToOption(w.Nothing);f.goToOption(w.Specific,r)}),i=De(),m=p(y=>i.update(y)),A=p(y=>{i.wasMoved(y)&&(a||b||f.goToOption(w.Specific,r,0))}),N=p(y=>{i.wasMoved(y)&&(a||b&&f.goToOption(w.Nothing))}),V=u.useMemo(()=>({active:b,selected:O,disabled:a}),[b,O,a]);return j({ourProps:{id:r,ref:R,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":O,disabled:void 0,onClick:L,onFocus:x,onPointerEnter:m,onMouseEnter:m,onPointerMove:A,onMouseMove:A,onPointerLeave:N,onMouseLeave:N},theirProps:o,slot:V,defaultTag:Xe,name:"Listbox.Option"})}let _e=E(qe),et=E(He),tt=E(Ke),nt=E(Je),rt=E(Ye),z=Object.assign(_e,{Button:et,Label:tt,Options:nt,Option:rt});function ot({title:e,titleId:t,...n},r){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?u.createElement("title",{id:t},e):null,u.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const at=u.forwardRef(ot),it=at;function lt({title:e,titleId:t,...n},r){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?u.createElement("title",{id:t},e):null,u.createElement("path",{fillRule:"evenodd",d:"M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const st=u.forwardRef(lt),ut=st,ct=[{id:1,name:"Resident of a specific geographic area"},{id:2,name:"Intend to pursue a specific course of study"},{id:3,name:"Minimum grade point average (4.0 scale)"},{id:4,name:"Graduate of a specific high school"},{id:5,name:"Full-time or part tine enrollment"},{id:6,name:"Attend a certain type of institution"},{id:7,name:"Proficient in a particular area, such as art, music"},{id:8,name:"Community or volunteer service"}];function Z(...e){return e.filter(Boolean).join(" ")}function gt({selected:e,setSelected:t}){return h.jsx(z,{value:e,onChange:t,multiple:!0,children:({open:n})=>h.jsx(h.Fragment,{children:h.jsxs("div",{className:"relative mt-2",children:[h.jsxs(z.Button,{className:"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 h-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[h.jsx("span",{className:"block truncate",children:"Criteria list"}),h.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:h.jsx(ut,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),h.jsx(ye,{show:n,as:u.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:h.jsx(z.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base text-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:ct.map(r=>h.jsx(z.Option,{className:({active:a})=>Z(a?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-8 pr-4"),value:r,children:({selected:a,active:s})=>h.jsxs(h.Fragment,{children:[h.jsx("span",{className:Z(a?"font-semibold":"font-normal","block truncate"),children:r.name}),a?h.jsx("span",{className:Z(s?"text-white":"text-indigo-600","absolute inset-y-0 left-0 flex items-center pl-1.5"),children:h.jsx(it,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},r.id))})})]})})})}export{gt as default};
