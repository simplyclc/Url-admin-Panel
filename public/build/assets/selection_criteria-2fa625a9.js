import{r as u,R as Q,j as h}from"./app-c6eb9c27.js";import{s as oe,l as P,o as p,O as ee,U as F,y as E,u as C,x as ye,C as k,a as Z}from"./use-is-mounted-61ea4c08.js";import{p as q,s as Se,d as H,u as we,q as Le}from"./transition-6585ec81.js";import{h as Ie,T as Te,f as $e,s as De,I as G,o as Ce,b as g,a as Pe}from"./keyboard-7e6d477f.js";import{y as Fe,r as Ee}from"./bugs-a5d1d2a7.js";import{T as ke}from"./use-resolve-button-type-ad2383b9.js";function ae(e,r){let[t,o]=u.useState(e),i=oe(e);return P(()=>o(i.current),[i,o,...r]),t}function je(e,r,t){let[o,i]=u.useState(t),n=e!==void 0,a=u.useRef(n),s=u.useRef(!1),f=u.useRef(!1);return n&&!a.current&&!s.current?(s.current=!0,a.current=n,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!n&&a.current&&!f.current&&(f.current=!0,a.current=n,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[n?e:o,p(b=>(n||i(b),r==null?void 0:r(b)))]}function te(e){return[e.screenX,e.screenY]}function Ae(){let e=u.useRef([-1,-1]);return{wasMoved(r){let t=te(r);return e.current[0]===t[0]&&e.current[1]===t[1]?!1:(e.current=t,!0)},update(r){e.current=te(r)}}}function Me(e){throw new Error("Unexpected object: "+e)}var w=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(w||{});function Ne(e,r){let t=r.resolveItems();if(t.length<=0)return null;let o=r.resolveActiveIndex(),i=o??-1;switch(e.focus){case 0:{for(let n=0;n<t.length;++n)if(!r.resolveDisabled(t[n],n,t))return n;return o}case 1:{for(let n=i-1;n>=0;--n)if(!r.resolveDisabled(t[n],n,t))return n;return o}case 2:{for(let n=i+1;n<t.length;++n)if(!r.resolveDisabled(t[n],n,t))return n;return o}case 3:{for(let n=t.length-1;n>=0;--n)if(!r.resolveDisabled(t[n],n,t))return n;return o}case 4:{for(let n=0;n<t.length;++n)if(r.resolveId(t[n],n,t)===e.id)return n;return o}case 5:return null;default:Me(e)}}function ie(e={},r=null,t=[]){for(let[o,i]of Object.entries(e))se(t,le(r,o),i);return t}function le(e,r){return e?e+"["+r+"]":r}function se(e,r,t){if(Array.isArray(t))for(let[o,i]of t.entries())se(e,le(r,o.toString()),i);else t instanceof Date?e.push([r,t.toISOString()]):typeof t=="boolean"?e.push([r,t?"1":"0"]):typeof t=="string"?e.push([r,t]):typeof t=="number"?e.push([r,`${t}`]):t==null?e.push([r,""]):ie(t,r,e)}let re=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ne(e){var r,t;let o=(r=e.innerText)!=null?r:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return o;let n=!1;for(let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),n=!0;let a=n?(t=i.innerText)!=null?t:"":o;return re.test(a)&&(a=a.replace(re,"")),a}function Be(e){let r=e.getAttribute("aria-label");if(typeof r=="string")return r.trim();let t=e.getAttribute("aria-labelledby");if(t){let o=t.split(" ").map(i=>{let n=document.getElementById(i);if(n){let a=n.getAttribute("aria-label");return typeof a=="string"?a.trim():ne(n).trim()}return null}).filter(Boolean);if(o.length>0)return o.join(", ")}return ne(e).trim()}function Ue(e){let r=u.useRef(""),t=u.useRef("");return p(()=>{let o=e.current;if(!o)return"";let i=o.innerText;if(r.current===i)return t.current;let n=Be(o).trim().toLowerCase();return r.current=i,t.current=n,n})}var Qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qe||{}),ze=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ze||{}),qe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(qe||{}),He=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(He||{});function K(e,r=t=>t){let t=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,o=Pe(r(e.options.slice()),n=>n.dataRef.current.domRef.current),i=t?o.indexOf(t):null;return i===-1&&(i=null),{options:o,activeOptionIndex:i}}let Ge={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{isSelected:t}=e.dataRef.current,o=e.options.findIndex(i=>t(i.dataRef.current.value));return o!==-1&&(r=o),{...e,listboxState:0,activeOptionIndex:r}},2(e,r){var t;if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=K(e),i=Ne(r,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.current.disabled});return{...e,...o,searchQuery:"",activeOptionIndex:i,activationTrigger:(t=r.trigger)!=null?t:1}},3:(e,r)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let t=e.searchQuery!==""?0:1,o=e.searchQuery+r.value.toLowerCase(),i=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+t).concat(e.options.slice(0,e.activeOptionIndex+t)):e.options).find(a=>{var s;return!a.dataRef.current.disabled&&((s=a.dataRef.current.textValue)==null?void 0:s.startsWith(o))}),n=i?e.options.indexOf(i):-1;return n===-1||n===e.activeOptionIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeOptionIndex:n,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,r)=>{let t={id:r.id,dataRef:r.dataRef},o=K(e,i=>[...i,t]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(r.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(t)),{...e,...o}},6:(e,r)=>{let t=K(e,o=>{let i=o.findIndex(n=>n.id===r.id);return i!==-1&&o.splice(i,1),o});return{...e,...t,activationTrigger:1}},7:(e,r)=>({...e,labelId:r.id})},X=u.createContext(null);X.displayName="ListboxActionsContext";function j(e){let r=u.useContext(X);if(r===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return r}let Y=u.createContext(null);Y.displayName="ListboxDataContext";function A(e){let r=u.useContext(Y);if(r===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return r}function Ve(e,r){return C(r.type,Ge,e,r)}let _e=u.Fragment;function Ke(e,r){let{value:t,defaultValue:o,form:i,name:n,onChange:a,by:s=(c,d)=>c===d,disabled:f=!1,horizontal:b=!1,multiple:R=!1,...I}=e;const D=b?"horizontal":"vertical";let T=E(r),[O=R?[]:void 0,L]=je(t,a,o),[x,l]=u.useReducer(Ve,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),m=u.useRef({static:!1,hold:!1}),M=u.useRef(null),N=u.useRef(null),V=u.useRef(null),y=p(typeof s=="string"?(c,d)=>{let S=s;return(c==null?void 0:c[S])===(d==null?void 0:d[S])}:s),$=u.useCallback(c=>C(v.mode,{1:()=>O.some(d=>y(d,c)),0:()=>y(O,c)}),[O]),v=u.useMemo(()=>({...x,value:O,disabled:f,mode:R?1:0,orientation:D,compare:y,isSelected:$,optionsPropsRef:m,labelRef:M,buttonRef:N,optionsRef:V}),[O,f,R,x]);P(()=>{x.dataRef.current=v},[v]),Fe([v.buttonRef,v.optionsRef],(c,d)=>{var S;l({type:1}),Ie(d,Te.Loose)||(c.preventDefault(),(S=v.buttonRef.current)==null||S.focus())},v.listboxState===0);let ue=u.useMemo(()=>({open:v.listboxState===0,disabled:f,value:O}),[v,f,O]),ce=p(c=>{let d=v.options.find(S=>S.id===c);d&&_(d.dataRef.current.value)}),de=p(()=>{if(v.activeOptionIndex!==null){let{dataRef:c,id:d}=v.options[v.activeOptionIndex];_(c.current.value),l({type:2,focus:w.Specific,id:d})}}),pe=p(()=>l({type:0})),fe=p(()=>l({type:1})),ve=p((c,d,S)=>c===w.Specific?l({type:2,focus:w.Specific,id:d,trigger:S}):l({type:2,focus:c,trigger:S})),be=p((c,d)=>(l({type:5,id:c,dataRef:d}),()=>l({type:6,id:c}))),xe=p(c=>(l({type:7,id:c}),()=>l({type:7,id:null}))),_=p(c=>C(v.mode,{0(){return L==null?void 0:L(c)},1(){let d=v.value.slice(),S=d.findIndex(U=>y(U,c));return S===-1?d.push(c):d.splice(S,1),L==null?void 0:L(d)}})),me=p(c=>l({type:3,value:c})),ge=p(()=>l({type:4})),he=u.useMemo(()=>({onChange:_,registerOption:be,registerLabel:xe,goToOption:ve,closeListbox:fe,openListbox:pe,selectActiveOption:de,selectOption:ce,search:me,clearSearch:ge}),[]),Re={ref:T},B=u.useRef(null),Oe=q();return u.useEffect(()=>{B.current&&o!==void 0&&Oe.addEventListener(B.current,"reset",()=>{L==null||L(o)})},[B,L]),Q.createElement(X.Provider,{value:he},Q.createElement(Y.Provider,{value:v},Q.createElement(Se,{value:C(v.listboxState,{0:H.Open,1:H.Closed})},n!=null&&O!=null&&ie({[n]:O}).map(([c,d],S)=>Q.createElement($e,{features:De.Hidden,ref:S===0?U=>{var J;B.current=(J=U==null?void 0:U.closest("form"))!=null?J:null}:void 0,...ye({key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,name:c,value:d})})),k({ourProps:Re,theirProps:I,slot:ue,defaultTag:_e,name:"Listbox"}))))}let We="button";function Ze(e,r){var t;let o=G(),{id:i=`headlessui-listbox-button-${o}`,...n}=e,a=A("Listbox.Button"),s=j("Listbox.Button"),f=E(a.buttonRef,r),b=q(),R=p(x=>{switch(x.key){case g.Space:case g.Enter:case g.ArrowDown:x.preventDefault(),s.openListbox(),b.nextFrame(()=>{a.value||s.goToOption(w.First)});break;case g.ArrowUp:x.preventDefault(),s.openListbox(),b.nextFrame(()=>{a.value||s.goToOption(w.Last)});break}}),I=p(x=>{switch(x.key){case g.Space:x.preventDefault();break}}),D=p(x=>{if(Ee(x.currentTarget))return x.preventDefault();a.listboxState===0?(s.closeListbox(),b.nextFrame(()=>{var l;return(l=a.buttonRef.current)==null?void 0:l.focus({preventScroll:!0})})):(x.preventDefault(),s.openListbox())}),T=ae(()=>{if(a.labelId)return[a.labelId,i].join(" ")},[a.labelId,i]),O=u.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled,value:a.value}),[a]),L={ref:f,id:i,type:ke(e,a.buttonRef),"aria-haspopup":"listbox","aria-controls":(t=a.optionsRef.current)==null?void 0:t.id,"aria-expanded":a.listboxState===0,"aria-labelledby":T,disabled:a.disabled,onKeyDown:R,onKeyUp:I,onClick:D};return k({ourProps:L,theirProps:n,slot:O,defaultTag:We,name:"Listbox.Button"})}let Xe="label";function Ye(e,r){let t=G(),{id:o=`headlessui-listbox-label-${t}`,...i}=e,n=A("Listbox.Label"),a=j("Listbox.Label"),s=E(n.labelRef,r);P(()=>a.registerLabel(o),[o]);let f=p(()=>{var R;return(R=n.buttonRef.current)==null?void 0:R.focus({preventScroll:!0})}),b=u.useMemo(()=>({open:n.listboxState===0,disabled:n.disabled}),[n]);return k({ourProps:{ref:s,id:o,onClick:f},theirProps:i,slot:b,defaultTag:Xe,name:"Listbox.Label"})}let Je="ul",et=ee.RenderStrategy|ee.Static;function tt(e,r){var t;let o=G(),{id:i=`headlessui-listbox-options-${o}`,...n}=e,a=A("Listbox.Options"),s=j("Listbox.Options"),f=E(a.optionsRef,r),b=q(),R=q(),I=we(),D=(()=>I!==null?(I&H.Open)===H.Open:a.listboxState===0)();u.useEffect(()=>{var l;let m=a.optionsRef.current;m&&a.listboxState===0&&m!==((l=Ce(m))==null?void 0:l.activeElement)&&m.focus({preventScroll:!0})},[a.listboxState,a.optionsRef]);let T=p(l=>{switch(R.dispose(),l.key){case g.Space:if(a.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),s.search(l.key);case g.Enter:if(l.preventDefault(),l.stopPropagation(),a.activeOptionIndex!==null){let{dataRef:m}=a.options[a.activeOptionIndex];s.onChange(m.current.value)}a.mode===0&&(s.closeListbox(),Z().nextFrame(()=>{var m;return(m=a.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}));break;case C(a.orientation,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return l.preventDefault(),l.stopPropagation(),s.goToOption(w.Next);case C(a.orientation,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),s.goToOption(w.Previous);case g.Home:case g.PageUp:return l.preventDefault(),l.stopPropagation(),s.goToOption(w.First);case g.End:case g.PageDown:return l.preventDefault(),l.stopPropagation(),s.goToOption(w.Last);case g.Escape:return l.preventDefault(),l.stopPropagation(),s.closeListbox(),b.nextFrame(()=>{var m;return(m=a.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})});case g.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(s.search(l.key),R.setTimeout(()=>s.clearSearch(),350));break}}),O=ae(()=>{var l;return(l=a.buttonRef.current)==null?void 0:l.id},[a.buttonRef.current]),L=u.useMemo(()=>({open:a.listboxState===0}),[a]),x={"aria-activedescendant":a.activeOptionIndex===null||(t=a.options[a.activeOptionIndex])==null?void 0:t.id,"aria-multiselectable":a.mode===1?!0:void 0,"aria-labelledby":O,"aria-orientation":a.orientation,id:i,onKeyDown:T,role:"listbox",tabIndex:0,ref:f};return k({ourProps:x,theirProps:n,slot:L,defaultTag:Je,features:et,visible:D,name:"Listbox.Options"})}let rt="li";function nt(e,r){let t=G(),{id:o=`headlessui-listbox-option-${t}`,disabled:i=!1,value:n,...a}=e,s=A("Listbox.Option"),f=j("Listbox.Option"),b=s.activeOptionIndex!==null?s.options[s.activeOptionIndex].id===o:!1,R=s.isSelected(n),I=u.useRef(null),D=Ue(I),T=oe({disabled:i,value:n,domRef:I,get textValue(){return D()}}),O=E(r,I);P(()=>{if(s.listboxState!==0||!b||s.activationTrigger===0)return;let y=Z();return y.requestAnimationFrame(()=>{var $,v;(v=($=I.current)==null?void 0:$.scrollIntoView)==null||v.call($,{block:"nearest"})}),y.dispose},[I,b,s.listboxState,s.activationTrigger,s.activeOptionIndex]),P(()=>f.registerOption(o,T),[T,o]);let L=p(y=>{if(i)return y.preventDefault();f.onChange(n),s.mode===0&&(f.closeListbox(),Z().nextFrame(()=>{var $;return($=s.buttonRef.current)==null?void 0:$.focus({preventScroll:!0})}))}),x=p(()=>{if(i)return f.goToOption(w.Nothing);f.goToOption(w.Specific,o)}),l=Ae(),m=p(y=>l.update(y)),M=p(y=>{l.wasMoved(y)&&(i||b||f.goToOption(w.Specific,o,0))}),N=p(y=>{l.wasMoved(y)&&(i||b&&f.goToOption(w.Nothing))}),V=u.useMemo(()=>({active:b,selected:R,disabled:i}),[b,R,i]);return k({ourProps:{id:o,ref:O,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":R,disabled:void 0,onClick:L,onFocus:x,onPointerEnter:m,onMouseEnter:m,onPointerMove:M,onMouseMove:M,onPointerLeave:N,onMouseLeave:N},theirProps:a,slot:V,defaultTag:rt,name:"Listbox.Option"})}let ot=F(Ke),at=F(Ze),it=F(Ye),lt=F(tt),st=F(nt),z=Object.assign(ot,{Button:at,Label:it,Options:lt,Option:st});function ut({title:e,titleId:r,...t},o){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},t),e?u.createElement("title",{id:r},e):null,u.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const ct=u.forwardRef(ut),dt=ct;function pt({title:e,titleId:r,...t},o){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},t),e?u.createElement("title",{id:r},e):null,u.createElement("path",{fillRule:"evenodd",d:"M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const ft=u.forwardRef(pt),vt=ft,bt=[{id:1,name:"Resident of a specific geographic area"},{id:2,name:"Intend to pursue a specific course of study"},{id:3,name:"Minimum grade point average (4.0 scale)"},{id:4,name:"Graduate of a specific high school"},{id:5,name:"Full-time or part tine enrollment"},{id:6,name:"Attend a certain type of institution"},{id:7,name:"Proficient in a particular area, such as art, music"},{id:8,name:"Community or volunteer service"}];function W(...e){return e.filter(Boolean).join(" ")}function xt({selected:e,setSelected:r}){return h.jsx(z,{value:e,onChange:r,multiple:!0,children:({open:t})=>h.jsx(h.Fragment,{children:h.jsxs("div",{className:"relative mt-2",children:[h.jsxs(z.Button,{className:"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 h-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[h.jsx("span",{className:"block truncate",children:"Criteria list"}),h.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:h.jsx(vt,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),h.jsx(Le,{show:t,as:u.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:h.jsx(z.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base text-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:bt.map(o=>h.jsx(z.Option,{className:({active:i})=>W(i?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-8 pr-4"),value:o,children:({selected:i,active:n})=>h.jsxs(h.Fragment,{children:[h.jsx("span",{className:W(i?"font-semibold":"font-normal","block truncate"),children:o.name}),i?h.jsx("span",{className:W(n?"text-white":"text-indigo-600","absolute inset-y-0 left-0 flex items-center pl-1.5"),children:h.jsx(dt,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},o.id))})})]})})})}const St=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"}));export{xt as C,St as a,w as c,Ne as f,Ue as s,Ae as u};
