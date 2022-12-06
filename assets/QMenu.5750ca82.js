import{Q as O}from"./QIcon.6f02d6d6.js";import{R as se}from"./Ripple.a15f7331.js";import{u as V,a as $}from"./use-dark.1e985ad9.js";import{c as N,u as re,b as de,e as fe,j as ve,h as me}from"./QSpinner.5d01ec6b.js";import{c as a,h as r,g as W,N as U,r as Q,w as j,a3 as he,T as ge,o as be}from"./index.eb7b1268.js";import{u as qe,v as H,a as Se,b as ke,c as ye,r as I,s as Ce,p as z,d as xe}from"./position-engine.0e8527d9.js";import{u as Pe,a as Be,h as Te,b as Oe,c as _e,i as Re,j as we,r as Ee,k as L,l as Fe,m as Ae}from"./QDialog.53cdfb16.js";import{u as De,a as Me}from"./use-transition.367883b0.js";import{c as Ke}from"./scroll.ae6da8d4.js";import{c as Qe}from"./dom.6c863bc6.js";import{b as je}from"./focus-manager.32f8d49a.js";const He={xs:8,sm:10,md:14,lg:20,xl:24};var Ye=N({name:"QChip",props:{...V,...re,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:y,emit:l}){const{proxy:{$q:u}}=W(),c=$(e,u),v=de(e,He),d=a(()=>e.selected===!0||e.icon!==void 0),g=a(()=>e.selected===!0?e.iconSelected||u.iconSet.chip.selected:e.icon),q=a(()=>e.iconRemove||u.iconSet.chip.remove),f=a(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),i=a(()=>{const o=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(o?` text-${o} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(f.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(c.value===!0?" q-chip--dark q-dark":"")}),n=a(()=>{const o=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},m={...o,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||u.lang.label.remove};return{chip:o,remove:m}});function s(o){o.keyCode===13&&S(o)}function S(o){e.disable||(l("update:selected",!e.selected),l("click",o))}function k(o){(o.keyCode===void 0||o.keyCode===13)&&(U(o),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function C(){const o=[];f.value===!0&&o.push(r("div",{class:"q-focus-helper"})),d.value===!0&&o.push(r(O,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const m=e.label!==void 0?[r("div",{class:"ellipsis"},[e.label])]:void 0;return o.push(r("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ve(y.default,m))),e.iconRight&&o.push(r(O,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&o.push(r(O,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:q.value,...n.value.remove,onClick:k,onKeyup:k})),o}return()=>{if(e.modelValue===!1)return;const o={class:i.value,style:v.value};return f.value===!0&&Object.assign(o,n.value.chip,{onClick:S,onKeyup:s}),fe("div",o,C(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[se,e.ripple]])}}}),Ze=N({name:"QMenu",inheritAttrs:!1,props:{...qe,...Pe,...V,...De,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:H},self:{type:String,validator:H},offset:{type:Array,validator:Se},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Be,"click","escapeKey"],setup(e,{slots:y,emit:l,attrs:u}){let c=null,v,d,g;const q=W(),{proxy:f}=q,{$q:i}=f,n=Q(null),s=Q(!1),S=a(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),k=$(e,i),{registerTick:C,removeTick:o}=Te(),{registerTimeout:m}=Oe(),{transitionProps:G,transitionStyle:J}=Me(e),{localScrollTarget:_,changeScrollEvent:X,unconfigureScrollTarget:Y}=ke(e,M),{anchorEl:h,canShow:Z}=ye({showing:s}),{hide:R}=_e({showing:s,canShow:Z,handleShow:ae,handleHide:ne,hideOnRouteChange:S,processOnMount:!0}),{showPortal:w,hidePortal:E,renderPortal:p}=Re(q,n,ie),x={anchorEl:h,innerRef:n,onClickOutside(t){if(e.persistent!==!0&&s.value===!0)return R(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&U(t),!0}},F=a(()=>z(e.anchor||(e.cover===!0?"center middle":"bottom start"),i.lang.rtl)),ee=a(()=>e.cover===!0?F.value:z(e.self||"top start",i.lang.rtl)),te=a(()=>(e.square===!0?" q-menu--square":"")+(k.value===!0?" q-menu--dark q-dark":"")),oe=a(()=>e.autoClose===!0?{onClick:le}:{}),A=a(()=>s.value===!0&&e.persistent!==!0);j(A,t=>{t===!0?(Fe(B),xe(x)):(L(B),I(x))});function P(){je(()=>{let t=n.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function ae(t){if(c=e.noRefocus===!1?document.activeElement:null,we(K),w(),M(),v=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const T=he(t);if(T.left!==void 0){const{top:ue,left:ce}=h.value.getBoundingClientRect();v={left:T.left-ce,top:T.top-ue}}}d===void 0&&(d=j(()=>i.screen.width+"|"+i.screen.height+"|"+e.self+"|"+e.anchor+"|"+i.lang.rtl,b)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{b(),e.noFocus!==!0&&P()}),m(()=>{i.platform.is.ios===!0&&(g=e.autoClose,n.value.click()),b(),w(!0),l("show",t)},e.transitionDuration)}function ne(t){o(),E(),D(!0),c!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),m(()=>{E(!0),l("hide",t)},e.transitionDuration)}function D(t){v=void 0,d!==void 0&&(d(),d=void 0),(t===!0||s.value===!0)&&(Ee(K),Y(),I(x),L(B)),t!==!0&&(c=null)}function M(){(h.value!==null||e.scrollTarget!==void 0)&&(_.value=Ke(h.value,e.scrollTarget),X(_.value,b))}function le(t){g!==!0?(Ae(f,t),l("click",t)):g=!1}function K(t){A.value===!0&&e.noFocus!==!0&&Qe(n.value,t.target)!==!0&&P()}function B(t){l("escapeKey"),R(t)}function b(){const t=n.value;t===null||h.value===null||Ce({el:t,offset:e.offset,anchorEl:h.value,anchorOrigin:F.value,selfOrigin:ee.value,absoluteOffset:v,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ie(){return r(ge,G.value,()=>s.value===!0?r("div",{role:"menu",...u,ref:n,tabindex:-1,class:["q-menu q-position-engine scroll"+te.value,u.class],style:[u.style,J.value],...oe.value},me(y.default)):null)}return be(D),Object.assign(f,{focus:P,updatePosition:b}),p}});export{Ye as Q,Ze as a};
