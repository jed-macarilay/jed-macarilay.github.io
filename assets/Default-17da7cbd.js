import{u as Le,m as q,a as X,b as H,c as Pe,d as $e,e as ke,f as Ee,g as Re,h as ze,i as He,V as Me,j as J,k as Ne,_ as Oe,l as De,n as se}from"./VContainer-591447c2.js";import{p as C,i as Y,c as u,r as Q,a as D,g as ue,s as I,o as ee,b as ce,f as Fe,d as je,e as qe,h as Ue,j as de,k as $,l as k,m as r,T as Ke,n as ve,q as fe,t as Ge,u as me,v as W,w as ye,x as ge,y as Je,z as Ze,A as F,B as We,C as Xe,D as Ye,E as he,F as Qe,G as te,H as ae,I as z,J as Z,K as et}from"./index-cf0cea00.js";const j=Symbol.for("vuetify:layout"),pe=Symbol.for("vuetify:layout-item"),ie=1e3,tt=C({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),at=C({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function nt(){const e=Y(j);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ot(e){const i=Y(j);if(!i)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${je()}`,o=ue("useLayoutItem");ce(pe,{id:t});const s=I(!1);qe(()=>s.value=!0),Ue(()=>s.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:a}=i.register(o,{...e,active:u(()=>s.value?!1:e.active.value),id:t});return de(()=>i.unregister(t)),{layoutItemStyles:l,layoutRect:i.layoutRect,layoutItemScrimStyles:a}}const lt=(e,i,t,o)=>{let s={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...s}}];for(const a of e){const n=i.get(a),d=t.get(a),y=o.get(a);if(!n||!d||!y)continue;const c={...s,[n.value]:parseInt(s[n.value],10)+(y.value?parseInt(d.value,10):0)};l.push({id:a,layer:c}),s=c}return l};function st(e){const i=Y(j,null),t=u(()=>i?i.rootZIndex.value-100:ie),o=Q([]),s=D(new Map),l=D(new Map),a=D(new Map),n=D(new Map),d=D(new Map),{resizeRef:y,contentRect:c}=Le(),x=u(()=>{const m=new Map,V=e.overlaps??[];for(const v of V.filter(b=>b.includes(":"))){const[b,p]=v.split(":");if(!o.value.includes(b)||!o.value.includes(p))continue;const A=s.get(b),R=s.get(p),M=l.get(b),N=l.get(p);!A||!R||!M||!N||(m.set(p,{position:A.value,amount:parseInt(M.value,10)}),m.set(b,{position:R.value,amount:-parseInt(N.value,10)}))}return m}),g=u(()=>{const m=[...new Set([...a.values()].map(v=>v.value))].sort((v,b)=>v-b),V=[];for(const v of m){const b=o.value.filter(p=>{var A;return((A=a.get(p))==null?void 0:A.value)===v});V.push(...b)}return lt(V,s,l,n)}),h=u(()=>!Array.from(d.values()).some(m=>m.value)),S=u(()=>g.value[g.value.length-1].layer),L=u(()=>({"--v-layout-left":$(S.value.left),"--v-layout-right":$(S.value.right),"--v-layout-top":$(S.value.top),"--v-layout-bottom":$(S.value.bottom),...h.value?void 0:{transition:"none"}})),T=u(()=>g.value.slice(1).map((m,V)=>{let{id:v}=m;const{layer:b}=g.value[V],p=l.get(v),A=s.get(v);return{id:v,...b,size:Number(p.value),position:A.value}})),f=m=>T.value.find(V=>V.id===m),w=ue("createLayout"),P=I(!1);ee(()=>{P.value=!0}),ce(j,{register:(m,V)=>{let{id:v,order:b,position:p,layoutSize:A,elementSize:R,active:M,disableTransitions:N,absolute:Be}=V;a.set(v,b),s.set(v,p),l.set(v,A),n.set(v,M),N&&d.set(v,N);const ne=Fe(pe,w==null?void 0:w.vnode).indexOf(m);ne>-1?o.value.splice(ne,0,v):o.value.push(v);const oe=u(()=>T.value.findIndex(O=>O.id===v)),U=u(()=>t.value+g.value.length*2-oe.value*2),Ie=u(()=>{const O=p.value==="left"||p.value==="right",K=p.value==="right",Ce=p.value==="bottom",le={[p.value]:0,zIndex:U.value,transform:`translate${O?"X":"Y"}(${(M.value?0:-110)*(K||Ce?-1:1)}%)`,position:Be.value||t.value!==ie?"absolute":"fixed",...h.value?void 0:{transition:"none"}};if(!P.value)return le;const B=T.value[oe.value];if(!B)throw new Error(`[Vuetify] Could not find layout item "${v}"`);const G=x.value.get(v);return G&&(B[G.position]+=G.amount),{...le,height:O?`calc(100% - ${B.top}px - ${B.bottom}px)`:R.value?`${R.value}px`:void 0,left:K?void 0:`${B.left}px`,right:K?`${B.right}px`:void 0,top:p.value!=="bottom"?`${B.top}px`:void 0,bottom:p.value!=="top"?`${B.bottom}px`:void 0,width:O?R.value?`${R.value}px`:void 0:`calc(100% - ${B.left}px - ${B.right}px)`}}),Ae=u(()=>({zIndex:U.value-1}));return{layoutItemStyles:Ie,layoutItemScrimStyles:Ae,zIndex:U}},unregister:m=>{a.delete(m),s.delete(m),l.delete(m),n.delete(m),d.delete(m),o.value=o.value.filter(V=>V!==m)},mainRect:S,mainStyles:L,getLayoutItem:f,items:T,layoutRect:c,rootZIndex:t});const E=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),Te=u(()=>({zIndex:i?t.value:void 0,position:i?"relative":void 0,overflow:i?"hidden":void 0}));return{layoutClasses:E,layoutStyles:Te,getLayoutItem:f,items:T,layoutRect:c,layoutRef:y}}const be=C({text:String,...q(),...X()},"VToolbarTitle"),xe=k()({name:"VToolbarTitle",props:be(),setup(e,i){let{slots:t}=i;return H(()=>{const o=!!(t.default||t.text||e.text);return r(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[o&&r("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),it=C({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function _(e,i,t){return k()({name:e,props:it({mode:t,origin:i}),setup(o,s){let{slots:l}=s;const a={onBeforeEnter(n){o.origin&&(n.style.transformOrigin=o.origin)},onLeave(n){if(o.leaveAbsolute){const{offsetTop:d,offsetLeft:y,offsetWidth:c,offsetHeight:x}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${d}px`,n.style.left=`${y}px`,n.style.width=`${c}px`,n.style.height=`${x}px`}o.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(o.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:d,top:y,left:c,width:x,height:g}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=d||"",n.style.top=y||"",n.style.left=c||"",n.style.width=x||"",n.style.height=g||""}}};return()=>{const n=o.group?Ke:ve;return fe(n,{name:o.disabled?"":e,css:!o.disabled,...o.group?void 0:{mode:o.mode},...o.disabled?{}:a},l.default)}}})}function Se(e,i){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return k()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(o,s){let{slots:l}=s;return()=>fe(ve,{name:o.disabled?"":e,css:!o.disabled,...o.disabled?{}:i},l.default)}})}function _e(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=Ge(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const n=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const d=`${a[o]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=n.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=d})},onAfterEnter:l,onEnterCancelled:l,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[o]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(a){e&&a._parent&&a._parent.classList.remove(e),l(a)}function l(a){const n=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,n!=null&&(a.style[t]=n),delete a._initialStyle}}_("fab-transition","center center","out-in");_("dialog-bottom-transition");_("dialog-top-transition");_("fade-transition");_("scale-transition");_("scroll-x-transition");_("scroll-x-reverse-transition");_("scroll-y-transition");_("scroll-y-reverse-transition");_("slide-x-transition");_("slide-x-reverse-transition");_("slide-y-transition");_("slide-y-reverse-transition");const rt=Se("expand-transition",_e());Se("expand-x-transition",_e("",!0));const ut=[null,"prominent","default","comfortable","compact"],Ve=C({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ut.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Pe(),...q(),...$e(),...ke(),...X({tag:"header"}),...me()},"VToolbar"),re=k()({name:"VToolbar",props:Ve(),setup(e,i){var h;let{slots:t}=i;const{backgroundColorClasses:o,backgroundColorStyles:s}=Ee(W(e,"color")),{borderClasses:l}=Re(e),{elevationClasses:a}=ze(e),{roundedClasses:n}=He(e),{themeClasses:d}=ye(e),{rtlClasses:y}=ge(),c=I(!!(e.extended||(h=t.extension)!=null&&h.call(t))),x=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=u(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Je({VBtn:{variant:"text"}}),H(()=>{var f;const S=!!(e.title||t.title),L=!!(t.image||e.image),T=(f=t.extension)==null?void 0:f.call(t);return c.value=!!(e.extended||T),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,l.value,a.value,n.value,d.value,y.value,e.class],style:[s.value,e.style]},{default:()=>[L&&r("div",{key:"image",class:"v-toolbar__image"},[t.image?r(J,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):r(Me,{key:"image-img",cover:!0,src:e.image},null)]),r(J,{defaults:{VTabs:{height:$(x.value)}}},{default:()=>{var w,P,E;return[r("div",{class:"v-toolbar__content",style:{height:$(x.value)}},[t.prepend&&r("div",{class:"v-toolbar__prepend"},[(w=t.prepend)==null?void 0:w.call(t)]),S&&r(xe,{key:"title",text:e.title},{text:t.title}),(P=t.default)==null?void 0:P.call(t),t.append&&r("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),r(J,{defaults:{VTabs:{height:$(g.value)}}},{default:()=>[r(rt,null,{default:()=>[c.value&&r("div",{class:"v-toolbar__extension",style:{height:$(g.value)}},[T])]})]})]})}),{contentHeight:x,extensionHeight:g}}}),ct=C({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function dt(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let o=0;const s=Q(null),l=I(0),a=I(0),n=I(0),d=I(!1),y=I(!1),c=u(()=>Number(e.scrollThreshold)),x=u(()=>Ze((c.value-l.value)/c.value||0)),g=()=>{const h=s.value;!h||t&&!t.value||(o=l.value,l.value="window"in h?h.pageYOffset:h.scrollTop,y.value=l.value<o,n.value=Math.abs(l.value-c.value))};return F(y,()=>{a.value=a.value||l.value}),F(d,()=>{a.value=0}),ee(()=>{F(()=>e.scrollTarget,h=>{var L;const S=h?document.querySelector(h):window;S&&S!==s.value&&((L=s.value)==null||L.removeEventListener("scroll",g),s.value=S,s.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),de(()=>{var h;(h=s.value)==null||h.removeEventListener("scroll",g)}),t&&F(t,g,{immediate:!0}),{scrollThreshold:c,currentScroll:l,currentThreshold:n,isScrollActive:d,scrollRatio:x,isScrollingUp:y,savedScroll:a}}function we(){const e=I(!1);return ee(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:u(()=>e.value?void 0:{transition:"none !important"}),isBooted:We(e)}}const vt=C({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ve(),...at(),...ct(),height:{type:[Number,String],default:64}},"VAppBar"),ft=k()({name:"VAppBar",props:vt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const o=Q(),s=Xe(e,"modelValue"),l=u(()=>{var w;const f=new Set(((w=e.scrollBehavior)==null?void 0:w.split(" "))??[]);return{hide:f.has("hide"),inverted:f.has("inverted"),collapse:f.has("collapse"),elevate:f.has("elevate"),fadeImage:f.has("fade-image")}}),a=u(()=>{const f=l.value;return f.hide||f.inverted||f.collapse||f.elevate||f.fadeImage||!s.value}),{currentScroll:n,scrollThreshold:d,isScrollingUp:y,scrollRatio:c}=dt(e,{canScroll:a}),x=u(()=>e.collapse||l.value.collapse&&(l.value.inverted?c.value>0:c.value===0)),g=u(()=>e.flat||l.value.elevate&&(l.value.inverted?n.value>0:n.value===0)),h=u(()=>l.value.fadeImage?l.value.inverted?1-c.value:c.value:void 0),S=u(()=>{var P,E;if(l.value.hide&&l.value.inverted)return 0;const f=((P=o.value)==null?void 0:P.contentHeight)??0,w=((E=o.value)==null?void 0:E.extensionHeight)??0;return f+w});Ye(u(()=>!!e.scrollBehavior),()=>{Qe(()=>{l.value.hide?l.value.inverted?s.value=n.value>d.value:s.value=y.value||n.value<d.value:s.value=!0})});const{ssrBootStyles:L}=we(),{layoutItemStyles:T}=ot({id:e.name,order:u(()=>parseInt(e.order,10)),position:W(e,"location"),layoutSize:S,elementSize:I(void 0),active:s,absolute:W(e,"absolute")});return H(()=>{const[f]=re.filterProps(e);return r(re,he({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":h.value,height:void 0,...L.value},e.style]},f,{collapse:x.value,flat:g.value}),t)}),{}}}),mt=k()({name:"VAppBarTitle",props:be(),setup(e,i){let{slots:t}=i;return H(()=>r(xe,he(e,{class:"v-app-bar-title"}),t)),{}}}),yt=Ne("v-spacer","div","VSpacer"),gt={};function ht(e,i){return te(),ae(ft,{flat:""},{default:z(()=>[r(De,{class:"px-16 mx-auto d-flex align-center justify-center"},{default:z(()=>[r(mt,null,{default:z(()=>[Z("Jedmark Macarilay")]),_:1}),r(yt),r(se,{variant:"text",href:"#about"},{default:z(()=>[Z("about")]),_:1}),r(se,{variant:"text",href:"#experience"},{default:z(()=>[Z("experience")]),_:1})]),_:1})]),_:1})}const pt=Oe(gt,[["render",ht]]);const bt=C({scrollable:Boolean,...q(),...X({tag:"main"})},"VMain"),xt=k()({name:"VMain",props:bt(),setup(e,i){let{slots:t}=i;const{mainStyles:o}=nt(),{ssrBootStyles:s}=we();return H(()=>r(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,s.value,e.style]},{default:()=>{var l,a;return[e.scrollable?r("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(a=t.default)==null?void 0:a.call(t)]}})),{}}}),St={__name:"View",setup(e){return(i,t)=>{const o=et("router-view");return te(),ae(xt,null,{default:z(()=>[r(o)]),_:1})}}};const _t=C({...q(),...tt({fullHeight:!0}),...me()},"VApp"),Vt=k()({name:"VApp",props:_t(),setup(e,i){let{slots:t}=i;const o=ye(e),{layoutClasses:s,getLayoutItem:l,items:a,layoutRef:n}=st(e),{rtlClasses:d}=ge();return H(()=>{var y;return r("div",{ref:n,class:["v-application",o.themeClasses.value,s.value,d.value,e.class],style:[e.style]},[r("div",{class:"v-application__wrap"},[(y=t.default)==null?void 0:y.call(t)])])}),{getLayoutItem:l,items:a,theme:o}}}),It={__name:"Default",setup(e){return(i,t)=>(te(),ae(Vt,null,{default:z(()=>[r(pt),r(St)]),_:1}))}};export{It as default};