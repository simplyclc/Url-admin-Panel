import{R as m}from"./app-2688816d.js";import{b as N,d,l as x,u as A,a as F}from"./use-is-mounted-3890f08b.js";var E;let k=(E=m.useId)!=null?E:function(){let e=N(),[t,n]=m.useState(e?()=>d.nextId():null);return x(()=>{t===null&&n(d.nextId())},[t]),t!=null?""+t:void 0};function w(e){return d.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var y=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(y||{}),S=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(S||{}),I=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(I||{});function v(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var D=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(D||{});function P(e,t=0){var n;return e===((n=w(e))==null?void 0:n.body)?!1:A(t,{0(){return e.matches(f)},1(){let r=e;for(;r!==null;){if(r.matches(f))return!0;r=r.parentElement}return!1}})}function K(e){let t=w(e);F().nextFrame(()=>{t&&!P(t.activeElement,0)&&O(e)})}var g=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(g||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function O(e){e==null||e.focus({preventScroll:!0})}let L=["textarea","input"].join(",");function M(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,L))!=null?n:!1}function T(e,t=n=>n){return e.slice().sort((n,r)=>{let a=t(n),i=t(r);if(a===null||i===null)return 0;let o=a.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function G(e,t){return _(v(),t,{relativeTo:e})}function _(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:a=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?T(e):e:v(e);a.length>0&&o.length>1&&(o=o.filter(u=>!a.includes(u))),r=r??i.activeElement;let p=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),b=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=t&32?{preventScroll:!0}:{},c=0,s=o.length,l;do{if(c>=s||c+s<=0)return 0;let u=b+c;if(t&16)u=(u+s)%s;else{if(u<0)return 3;if(u>=s)return 1}l=o[u],l==null||l.focus(h),c+=p}while(l!==i.activeElement);return t&6&&M(l)&&l.select(),2}var U=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(U||{});export{K as D,k as I,y as M,S as N,_ as O,D as T,G as _,U as a,T as b,P as h,w as o,O as y};