import{b as Se,r as C}from"./app-3db92e82.js";function Ur(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}function $e(){return $e=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$e.apply(this,arguments)}function Ze(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}function Je(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Qe(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Xe=function(){function e(t){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Qe(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Je(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),S="-ms-",Z="-moz-",f="-webkit-",_e="comm",ye="rule",me="decl",er="@import",Me="@keyframes",rr="@layer",tr=Math.abs,J=String.fromCharCode,nr=Object.assign;function ar(e,r){return v(e,0)^45?(((r<<2^v(e,0))<<2^v(e,1))<<2^v(e,2))<<2^v(e,3):0}function Ie(e){return e.trim()}function sr(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function le(e,r){return e.indexOf(r)}function v(e,r){return e.charCodeAt(r)|0}function G(e,r,t){return e.slice(r,t)}function T(e){return e.length}function pe(e){return e.length}function Y(e,r){return r.push(e),e}function ir(e,r){return e.map(r).join("")}var Q=1,L=1,Ne=0,E=0,p=0,z="";function X(e,r,t,n,a,s,i){return{value:e,root:r,parent:t,type:n,props:a,children:s,line:Q,column:L,length:i,return:""}}function W(e,r){return nr(X("",null,null,"",null,null,0),e,{length:-e.length},r)}function cr(){return p}function or(){return p=E>0?v(z,--E):0,L--,p===10&&(L=1,Q--),p}function A(){return p=E<Ne?v(z,E++):0,L++,p===10&&(L=1,Q++),p}function M(){return v(z,E)}function B(){return E}function q(e,r){return G(z,e,r)}function D(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fe(e){return Q=L=1,Ne=T(z=e),E=0,[]}function je(e){return z="",e}function H(e){return Ie(q(E-1,de(e===91?e+2:e===40?e+1:e)))}function fr(e){for(;(p=M())&&p<33;)A();return D(e)>2||D(p)>3?"":" "}function ur(e,r){for(;--r&&A()&&!(p<48||p>102||p>57&&p<65||p>70&&p<97););return q(e,B()+(r<6&&M()==32&&A()==32))}function de(e){for(;A();)switch(p){case e:return E;case 34:case 39:e!==34&&e!==39&&de(p);break;case 40:e===41&&de(e);break;case 92:A();break}return E}function lr(e,r){for(;A()&&e+p!==47+10;)if(e+p===42+42&&M()===47)break;return"/*"+q(r,E-1)+"*"+J(e===47?e:A())}function dr(e){for(;!D(M());)A();return q(e,E)}function hr(e){return je(U("",null,null,null,[""],e=Fe(e),0,[0],e))}function U(e,r,t,n,a,s,i,c,o){for(var y=0,b=0,x=i,I=0,N=0,k=0,h=1,$=1,m=1,w=0,P="",K=a,F=s,R=n,d=P;$;)switch(k=w,w=A()){case 40:if(k!=108&&v(d,x-1)==58){le(d+=u(H(w),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:d+=H(w);break;case 9:case 10:case 13:case 32:d+=fr(k);break;case 92:d+=ur(B()-1,7);continue;case 47:switch(M()){case 42:case 47:Y(yr(lr(A(),B()),r,t),o);break;default:d+="/"}break;case 123*h:c[y++]=T(d)*m;case 125*h:case 59:case 0:switch(w){case 0:case 125:$=0;case 59+b:m==-1&&(d=u(d,/\f/g,"")),N>0&&T(d)-x&&Y(N>32?Ee(d+";",n,t,x-1):Ee(u(d," ","")+";",n,t,x-2),o);break;case 59:d+=";";default:if(Y(R=Ce(d,r,t,y,b,a,c,P,K=[],F=[],x),s),w===123)if(b===0)U(d,r,R,R,K,s,x,c,F);else switch(I===99&&v(d,3)===110?100:I){case 100:case 108:case 109:case 115:U(e,R,R,n&&Y(Ce(e,R,R,0,0,a,c,P,a,K=[],x),F),a,F,x,c,n?K:F);break;default:U(d,R,R,R,[""],F,0,c,F)}}y=b=N=0,h=m=1,P=d="",x=i;break;case 58:x=1+T(d),N=k;default:if(h<1){if(w==123)--h;else if(w==125&&h++==0&&or()==125)continue}switch(d+=J(w),w*h){case 38:m=b>0?1:(d+="\f",-1);break;case 44:c[y++]=(T(d)-1)*m,m=1;break;case 64:M()===45&&(d+=H(A())),I=M(),b=x=T(P=d+=dr(B())),w++;break;case 45:k===45&&T(d)==2&&(h=0)}}return s}function Ce(e,r,t,n,a,s,i,c,o,y,b){for(var x=a-1,I=a===0?s:[""],N=pe(I),k=0,h=0,$=0;k<n;++k)for(var m=0,w=G(e,x+1,x=tr(h=i[k])),P=e;m<N;++m)(P=Ie(h>0?I[m]+" "+w:u(w,/&\f/g,I[m])))&&(o[$++]=P);return X(e,r,t,a===0?ye:c,o,y,b)}function yr(e,r,t){return X(e,r,t,_e,J(cr()),G(e,2,-2),0)}function Ee(e,r,t,n){return X(e,r,t,me,G(e,0,n),G(e,n+1,-1),n)}function j(e,r){for(var t="",n=pe(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function mr(e,r,t,n){switch(e.type){case rr:if(e.children.length)break;case er:case me:return e.return=e.return||e.value;case _e:return"";case Me:return e.return=e.value+"{"+j(e.children,n)+"}";case ye:e.value=e.props.join(",")}return T(t=j(e.children,n))?e.return=e.value+"{"+t+"}":""}function pr(e){var r=pe(e);return function(t,n,a,s){for(var i="",c=0;c<r;c++)i+=e[c](t,n,a,s)||"";return i}}function br(e){return function(r){r.root||(r=r.return)&&e(r)}}var gr=function(r,t,n){for(var a=0,s=0;a=s,s=M(),a===38&&s===12&&(t[n]=1),!D(s);)A();return q(r,E)},vr=function(r,t){var n=-1,a=44;do switch(D(a)){case 0:a===38&&M()===12&&(t[n]=1),r[n]+=gr(E-1,t,n);break;case 2:r[n]+=H(a);break;case 4:if(a===44){r[++n]=M()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=J(a)}while(a=A());return r},xr=function(r,t){return je(vr(Fe(r),t))},ke=new WeakMap,wr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!ke.get(n))&&!a){ke.set(r,!0);for(var s=[],i=xr(t,s),c=n.props,o=0,y=0;o<i.length;o++)for(var b=0;b<c.length;b++,y++)r.props[y]=s[o]?i[o].replace(/&\f/g,c[b]):c[b]+" "+i[o]}}},Sr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Le(e,r){switch(ar(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+Z+e+S+e+e;case 6828:case 4268:return f+e+S+e+e;case 6165:return f+e+S+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return f+e+S+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return f+e+S+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+S+u(e,"shrink","negative")+e;case 5292:return f+e+S+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+S+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(e)-1-r>6)switch(v(e,r+1)){case 109:if(v(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+Z+(v(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~le(e,"stretch")?Le(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(v(e,r+1)!==115)break;case 6444:switch(v(e,T(e)-3-(~le(e,"!important")&&10))){case 107:return u(e,":",":"+f)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(v(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+S+"$2box$3")+e}break;case 5936:switch(v(e,r+11)){case 114:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+S+e+e}return e}var $r=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case me:r.return=Le(r.value,r.length);break;case Me:return j([W(r,{value:u(r.value,"@","@"+f)})],a);case ye:if(r.length)return ir(r.props,function(s){switch(sr(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return j([W(r,{props:[u(s,/:(read-\w+)/,":"+Z+"$1")]})],a);case"::placeholder":return j([W(r,{props:[u(s,/:(plac\w+)/,":"+f+"input-$1")]}),W(r,{props:[u(s,/:(plac\w+)/,":"+Z+"$1")]}),W(r,{props:[u(s,/:(plac\w+)/,S+"input-$1")]})],a)}return""})}},Cr=[$r],Er=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(h){var $=h.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var a=r.stylisPlugins||Cr,s={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(h){for(var $=h.getAttribute("data-emotion").split(" "),m=1;m<$.length;m++)s[$[m]]=!0;c.push(h)});var o,y=[wr,Sr];{var b,x=[mr,br(function(h){b.insert(h)})],I=pr(y.concat(a,x)),N=function($){return j(hr($),I)};o=function($,m,w,P){b=w,N($?$+"{"+m.styles+"}":m.styles),P&&(k.inserted[m.name]=!0)}}var k={key:t,sheet:new Xe({key:t,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:o};return k.sheet.hydrate(c),k},ze={exports:{}},l={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=typeof Symbol=="function"&&Symbol.for,be=g?Symbol.for("react.element"):60103,ge=g?Symbol.for("react.portal"):60106,ee=g?Symbol.for("react.fragment"):60107,re=g?Symbol.for("react.strict_mode"):60108,te=g?Symbol.for("react.profiler"):60114,ne=g?Symbol.for("react.provider"):60109,ae=g?Symbol.for("react.context"):60110,ve=g?Symbol.for("react.async_mode"):60111,se=g?Symbol.for("react.concurrent_mode"):60111,ie=g?Symbol.for("react.forward_ref"):60112,ce=g?Symbol.for("react.suspense"):60113,kr=g?Symbol.for("react.suspense_list"):60120,oe=g?Symbol.for("react.memo"):60115,fe=g?Symbol.for("react.lazy"):60116,Ar=g?Symbol.for("react.block"):60121,Or=g?Symbol.for("react.fundamental"):60117,Pr=g?Symbol.for("react.responder"):60118,Rr=g?Symbol.for("react.scope"):60119;function O(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case be:switch(e=e.type,e){case ve:case se:case ee:case te:case re:case ce:return e;default:switch(e=e&&e.$$typeof,e){case ae:case ie:case fe:case oe:case ne:return e;default:return r}}case ge:return r}}}function We(e){return O(e)===se}l.AsyncMode=ve;l.ConcurrentMode=se;l.ContextConsumer=ae;l.ContextProvider=ne;l.Element=be;l.ForwardRef=ie;l.Fragment=ee;l.Lazy=fe;l.Memo=oe;l.Portal=ge;l.Profiler=te;l.StrictMode=re;l.Suspense=ce;l.isAsyncMode=function(e){return We(e)||O(e)===ve};l.isConcurrentMode=We;l.isContextConsumer=function(e){return O(e)===ae};l.isContextProvider=function(e){return O(e)===ne};l.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===be};l.isForwardRef=function(e){return O(e)===ie};l.isFragment=function(e){return O(e)===ee};l.isLazy=function(e){return O(e)===fe};l.isMemo=function(e){return O(e)===oe};l.isPortal=function(e){return O(e)===ge};l.isProfiler=function(e){return O(e)===te};l.isStrictMode=function(e){return O(e)===re};l.isSuspense=function(e){return O(e)===ce};l.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ee||e===se||e===te||e===re||e===ce||e===kr||typeof e=="object"&&e!==null&&(e.$$typeof===fe||e.$$typeof===oe||e.$$typeof===ne||e.$$typeof===ae||e.$$typeof===ie||e.$$typeof===Or||e.$$typeof===Pr||e.$$typeof===Rr||e.$$typeof===Ar)};l.typeOf=O;ze.exports=l;var Tr=ze.exports,Ge=Tr,_r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},De={};De[Ge.ForwardRef]=_r;De[Ge.Memo]=Mr;var Ir=!0;function Nr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Ve=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||Ir===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},qe=function(r,t,n){Ve(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var s=t;do r.insert(t===s?"."+a:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function Fr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var jr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lr=/[A-Z]|^ms/g,zr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ke=function(r){return r.charCodeAt(1)===45},Ae=function(r){return r!=null&&typeof r!="boolean"},ue=Ze(function(e){return Ke(e)?e:e.replace(Lr,"-$&").toLowerCase()}),Oe=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(zr,function(n,a,s){return _={name:a,styles:s,next:_},a})}return jr[r]!==1&&!Ke(r)&&typeof t=="number"&&t!==0?t+"px":t};function V(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return _={name:t.name,styles:t.styles,next:_},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)_={name:n.name,styles:n.styles,next:_},n=n.next;var a=t.styles+";";return a}return Wr(e,r,t)}case"function":{if(e!==void 0){var s=_,i=t(e);return _=s,V(e,r,i)}break}}if(r==null)return t;var c=r[t];return c!==void 0?c:t}function Wr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=V(e,r,t[a])+";";else for(var s in t){var i=t[s];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=s+"{"+r[i]+"}":Ae(i)&&(n+=ue(s)+":"+Oe(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var c=0;c<i.length;c++)Ae(i[c])&&(n+=ue(s)+":"+Oe(s,i[c])+";");else{var o=V(e,r,i);switch(s){case"animation":case"animationName":{n+=ue(s)+":"+o+";";break}default:n+=s+"{"+o+"}"}}}return n}var Pe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_,xe=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,s="";_=void 0;var i=r[0];i==null||i.raw===void 0?(a=!1,s+=V(n,t,i)):s+=i[0];for(var c=1;c<r.length;c++)s+=V(n,t,r[c]),a&&(s+=i[c]);Pe.lastIndex=0;for(var o="",y;(y=Pe.exec(s))!==null;)o+="-"+y[1];var b=Fr(s)+o;return{name:b,styles:s,next:_}},Gr=function(r){return r()},Ye=Se["useInsertionEffect"]?Se["useInsertionEffect"]:!1,Dr=Ye||Gr,Re=Ye||C.useLayoutEffect,we={}.hasOwnProperty,Be=C.createContext(typeof HTMLElement<"u"?Er({key:"css"}):null);Be.Provider;var He=function(r){return C.forwardRef(function(t,n){var a=C.useContext(Be);return r(t,a,n)})},Ue=C.createContext({}),he="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Vr=function(r,t){var n={};for(var a in t)we.call(t,a)&&(n[a]=t[a]);return n[he]=r,n},qr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Ve(t,n,a),Dr(function(){return qe(t,n,a)}),null},Kr=He(function(e,r,t){var n=e.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=e[he],s=[n],i="";typeof e.className=="string"?i=Nr(r.registered,s,e.className):e.className!=null&&(i=e.className+" ");var c=xe(s,void 0,C.useContext(Ue));i+=r.key+"-"+c.name;var o={};for(var y in e)we.call(e,y)&&y!=="css"&&y!==he&&(o[y]=e[y]);return o.ref=t,o.className=i,C.createElement(C.Fragment,null,C.createElement(qr,{cache:r,serialized:c,isStringTag:typeof a=="string"}),C.createElement(a,o))}),Yr=Kr,Zr=function(r,t){var n=arguments;if(t==null||!we.call(t,"css"))return C.createElement.apply(void 0,n);var a=n.length,s=new Array(a);s[0]=Yr,s[1]=Vr(r,t);for(var i=2;i<a;i++)s[i]=n[i];return C.createElement.apply(null,s)},Jr=He(function(e,r){var t=e.styles,n=xe([t],void 0,C.useContext(Ue)),a=C.useRef();return Re(function(){var s=r.key+"-global",i=new r.sheet.constructor({key:s,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),c=!1,o=document.querySelector('style[data-emotion="'+s+" "+n.name+'"]');return r.sheet.tags.length&&(i.before=r.sheet.tags[0]),o!==null&&(c=!0,o.setAttribute("data-emotion",s),i.hydrate([o])),a.current=[i,c],function(){i.flush()}},[r]),Re(function(){var s=a.current,i=s[0],c=s[1];if(c){s[1]=!1;return}if(n.next!==void 0&&qe(r,n.next,!0),i.tags.length){var o=i.tags[i.tags.length-1].nextElementSibling;i.before=o,i.flush()}r.insert("",n,i,!1)},[r,n.name]),null});function Br(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return xe(r)}var Qr=function(){var r=Br.apply(void 0,arguments),t="animation-"+r.name;return{name:t,styles:"@keyframes "+t+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Te(e,r){return Te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Te(e,r)}function Xr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}export{Jr as G,Ue as T,$e as _,Ur as a,Te as b,Xr as c,Br as d,Nr as g,qe as i,Zr as j,Qr as k,Ze as m,Ve as r,xe as s,Dr as u,He as w};
