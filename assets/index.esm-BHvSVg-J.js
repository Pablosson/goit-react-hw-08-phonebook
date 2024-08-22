var B=Object.defineProperty;var ee=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var T=(e,t,r)=>(ee(e,typeof t!="symbol"?t+"":t,r),r);import{q as Y,t as y,r as _,v as te}from"./index-BJCUlA4O.js";var re=function(e,t,r,n,s,i,c,a){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var o=[r,n,s,i,c,a],u=0;l=new Error(t.replace(/%s/g,function(){return o[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},ne=re;const F=Y(ne);var se=function(t,r,n,s){var i=n?n.call(s,t,r):void 0;if(i!==void 0)return!!i;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var c=Object.keys(t),a=Object.keys(r);if(c.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(r),o=0;o<c.length;o++){var u=c[o];if(!l(u))return!1;var p=t[u],m=r[u];if(i=n?n.call(s,p,m,u):void 0,i===!1||i===void 0&&p!==m)return!1}return!0};const ie=Y(se);var V=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(V||{}),I={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},q=Object.values(V),L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ae=Object.entries(L).reduce((e,[t,r])=>(e[r]=t,e),{}),h="data-rh",b={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},A=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},oe=e=>{let t=A(e,"title");const r=A(e,b.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,()=>t);const n=A(e,b.DEFAULT_TITLE);return t||n||void 0},le=e=>A(e,b.ON_CHANGE_CLIENT_STATE)||(()=>{}),P=(e,t)=>t.filter(r=>typeof r[e]<"u").map(r=>r[e]).reduce((r,n)=>({...r,...n}),{}),ce=(e,t)=>t.filter(r=>typeof r.base<"u").map(r=>r.base).reverse().reduce((r,n)=>{if(!r.length){const s=Object.keys(n);for(let i=0;i<s.length;i+=1){const a=s[i].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return r.concat(n)}}return r},[]),ue=e=>console&&typeof console.warn=="function"&&console.warn(e),E=(e,t,r)=>{const n={};return r.filter(s=>Array.isArray(s[e])?!0:(typeof s[e]<"u"&&ue(`Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`),!1)).map(s=>s[e]).reverse().reduce((s,i)=>{const c={};i.filter(l=>{let o;const u=Object.keys(l);for(let m=0;m<u.length;m+=1){const f=u[m],g=f.toLowerCase();t.indexOf(g)!==-1&&!(o==="rel"&&l[o].toLowerCase()==="canonical")&&!(g==="rel"&&l[g].toLowerCase()==="stylesheet")&&(o=g),t.indexOf(f)!==-1&&(f==="innerHTML"||f==="cssText"||f==="itemprop")&&(o=f)}if(!o||!l[o])return!1;const p=l[o].toLowerCase();return n[o]||(n[o]={}),c[o]||(c[o]={}),n[o][p]?!1:(c[o][p]=!0,!0)}).reverse().forEach(l=>s.push(l));const a=Object.keys(c);for(let l=0;l<a.length;l+=1){const o=a[l],u={...n[o],...c[o]};n[o]=u}return s},[]).reverse()},pe=(e,t)=>{if(Array.isArray(e)&&e.length){for(let r=0;r<e.length;r+=1)if(e[r][t])return!0}return!1},fe=e=>({baseTag:ce(["href"],e),bodyAttributes:P("bodyAttributes",e),defer:A(e,b.DEFER),encode:A(e,b.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:P("htmlAttributes",e),linkTags:E("link",["rel","href"],e),metaTags:E("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:E("noscript",["innerHTML"],e),onChangeClientState:le(e),scriptTags:E("script",["src","innerHTML"],e),styleTags:E("style",["cssText"],e),title:oe(e),titleAttributes:P("titleAttributes",e),prioritizeSeoTags:pe(e,b.PRIORITIZE_SEO_TAGS)}),Z=e=>Array.isArray(e)?e.join(""):e,de=(e,t)=>{const r=Object.keys(e);for(let n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return!0;return!1},$=(e,t)=>Array.isArray(e)?e.reduce((r,n)=>(de(n,t)?r.priority.push(n):r.default.push(n),r),{priority:[],default:[]}):{default:e,priority:[]},K=(e,t)=>({...e,[t]:void 0}),me=["noscript","script","style"],H=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),G=e=>Object.keys(e).reduce((t,r)=>{const n=typeof e[r]<"u"?`${r}="${e[r]}"`:`${r}`;return t?`${t} ${n}`:n},""),he=(e,t,r,n)=>{const s=G(r),i=Z(t);return s?`<${e} ${h}="true" ${s}>${H(i,n)}</${e}>`:`<${e} ${h}="true">${H(i,n)}</${e}>`},Te=(e,t,r=!0)=>t.reduce((n,s)=>{const i=s,c=Object.keys(i).filter(o=>!(o==="innerHTML"||o==="cssText")).reduce((o,u)=>{const p=typeof i[u]>"u"?u:`${u}="${H(i[u],r)}"`;return o?`${o} ${p}`:p},""),a=i.innerHTML||i.cssText||"",l=me.indexOf(e)===-1;return`${n}<${e} ${h}="true" ${c}${l?"/>":`>${a}</${e}>`}`},""),W=(e,t={})=>Object.keys(e).reduce((r,n)=>{const s=L[n];return r[s||n]=e[n],r},t),ye=(e,t,r)=>{const n={key:t,[h]:!0},s=W(r,n);return[y.createElement("title",s,t)]},x=(e,t)=>t.map((r,n)=>{const s={key:n,[h]:!0};return Object.keys(r).forEach(i=>{const a=L[i]||i;if(a==="innerHTML"||a==="cssText"){const l=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:l}}else s[a]=r[i]}),y.createElement(e,s)}),d=(e,t,r=!0)=>{switch(e){case"title":return{toComponent:()=>ye(e,t.title,t.titleAttributes),toString:()=>he(e,t.title,t.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>W(t),toString:()=>G(t)};default:return{toComponent:()=>x(e,t),toString:()=>Te(e,t,r)}}},ge=({metaTags:e,linkTags:t,scriptTags:r,encode:n})=>{const s=$(e,I.meta),i=$(t,I.link),c=$(r,I.script);return{priorityMethods:{toComponent:()=>[...x("meta",s.priority),...x("link",i.priority),...x("script",c.priority)],toString:()=>`${d("meta",s.priority,n)} ${d("link",i.priority,n)} ${d("script",c.priority,n)}`},metaTags:s.default,linkTags:i.default,scriptTags:c.default}},ve=e=>{const{baseTag:t,bodyAttributes:r,encode:n=!0,htmlAttributes:s,noscriptTags:i,styleTags:c,title:a="",titleAttributes:l,prioritizeSeoTags:o}=e;let{linkTags:u,metaTags:p,scriptTags:m}=e,f={toComponent:()=>{},toString:()=>""};return o&&({priorityMethods:f,linkTags:u,metaTags:p,scriptTags:m}=ge(e)),{priority:f,base:d("base",t,n),bodyAttributes:d("bodyAttributes",r,n),htmlAttributes:d("htmlAttributes",s,n),link:d("link",u,n),meta:d("meta",p,n),noscript:d("noscript",i,n),script:d("script",m,n),style:d("style",c,n),title:d("title",{title:a,titleAttributes:l},n)}},D=ve,w=[],J=!!(typeof window<"u"&&window.document&&window.document.createElement),M=class{constructor(e,t){T(this,"instances",[]);T(this,"canUseDOM",J);T(this,"context");T(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?w:this.instances,add:e=>{(this.canUseDOM?w:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?w:this.instances).indexOf(e);(this.canUseDOM?w:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=D({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},be={},Q=y.createContext(be),C,Ae=(C=class extends _.Component{constructor(r){super(r);T(this,"helmetData");this.helmetData=new M(this.props.context||{},C.canUseDOM)}render(){return y.createElement(Q.Provider,{value:this.helmetData.value},this.props.children)}},T(C,"canUseDOM",J),C),v=(e,t)=>{const r=document.head||document.querySelector("head"),n=r.querySelectorAll(`${e}[${h}]`),s=[].slice.call(n),i=[];let c;return t&&t.length&&t.forEach(a=>{const l=document.createElement(e);for(const o in a)if(Object.prototype.hasOwnProperty.call(a,o))if(o==="innerHTML")l.innerHTML=a.innerHTML;else if(o==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const u=o,p=typeof a[u]>"u"?"":a[u];l.setAttribute(o,p)}l.setAttribute(h,"true"),s.some((o,u)=>(c=u,l.isEqualNode(o)))?s.splice(c,1):i.push(l)}),s.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),i.forEach(a=>r.appendChild(a)),{oldTags:s,newTags:i}},R=(e,t)=>{const r=document.getElementsByTagName(e)[0];if(!r)return;const n=r.getAttribute(h),s=n?n.split(","):[],i=[...s],c=Object.keys(t);for(const a of c){const l=t[a]||"";r.getAttribute(a)!==l&&r.setAttribute(a,l),s.indexOf(a)===-1&&s.push(a);const o=i.indexOf(a);o!==-1&&i.splice(o,1)}for(let a=i.length-1;a>=0;a-=1)r.removeAttribute(i[a]);s.length===i.length?r.removeAttribute(h):r.getAttribute(h)!==c.join(",")&&r.setAttribute(h,c.join(","))},Ce=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Z(e)),R("title",t)},N=(e,t)=>{const{baseTag:r,bodyAttributes:n,htmlAttributes:s,linkTags:i,metaTags:c,noscriptTags:a,onChangeClientState:l,scriptTags:o,styleTags:u,title:p,titleAttributes:m}=e;R("body",n),R("html",s),Ce(p,m);const f={baseTag:v("base",r),linkTags:v("link",i),metaTags:v("meta",c),noscriptTags:v("noscript",a),scriptTags:v("script",o),styleTags:v("style",u)},g={},j={};Object.keys(f).forEach(S=>{const{newTags:U,oldTags:X}=f[S];U.length&&(g[S]=U),X.length&&(j[S]=f[S].oldTags)}),t&&t(),l(e,g,j)},O=null,Ee=e=>{O&&cancelAnimationFrame(O),e.defer?O=requestAnimationFrame(()=>{N(e,()=>{O=null})}):(N(e),O=null)},Oe=Ee,z=class extends _.Component{constructor(){super(...arguments);T(this,"rendered",!1)}shouldComponentUpdate(t){return!ie(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:r}=this.props.context;let n=null;const s=fe(t.get().map(i=>{const c={...i.props};return delete c.context,c}));Ae.canUseDOM?Oe(s):D&&(n=D(s)),r(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},k,xe=(k=class extends _.Component{shouldComponentUpdate(e){return!te(K(this.props,"helmetData"),K(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,n){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,n)}]}}mapObjectTypeChildren(e,t,r,n){switch(e.type){case"title":return{...t,[e.type]:n,titleAttributes:{...r}};case"body":return{...t,bodyAttributes:{...r}};case"html":return{...t,htmlAttributes:{...r}};default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t};return Object.keys(e).forEach(n=>{r={...r,[n]:e[n]}}),r}warnOnInvalidChildren(e,t){return F(q.some(r=>e.type===r),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${q.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),F(!t||typeof t=="string"||Array.isArray(t)&&!t.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let r={};return y.Children.forEach(e,n=>{if(!n||!n.props)return;const{children:s,...i}=n.props,c=Object.keys(i).reduce((l,o)=>(l[ae[o]||o]=i[o],l),{});let{type:a}=n;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(n,s),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(s,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(n,r,c,s);break;default:t=this.mapObjectTypeChildren(n,t,c,s);break}}),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props;let r={...t},{helmetData:n}=t;if(e&&(r=this.mapChildrenToProps(e,r)),n&&!(n instanceof M)){const s=n;n=new M(s.context,!0),delete r.helmetData}return n?y.createElement(z,{...r,context:n.value}):y.createElement(Q.Consumer,null,s=>y.createElement(z,{...r,context:s}))}},T(k,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),k);export{Ae as H,xe as a};
