import{u as k,a as $}from"./use-dark.3bb5a166.js";import{c as _,u as S,b as h,a as C}from"./QSpinner.1f524bf5.js";import{c as r,h as a,g as w}from"./index.be2a1a55.js";const x={xs:2,sm:4,md:6,lg:10,xl:14};function i(e,l,t){return{transform:l===!0?`translateX(${t.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var D=_({name:"QLinearProgress",props:{...k,...S,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:t}=w(),c=$(e,t.$q),n=h(e,x),s=r(()=>e.indeterminate===!0||e.query===!0),u=r(()=>e.reverse!==e.query),d=r(()=>({...n.value!==null?n.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=r(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=r(()=>i(e.buffer!==void 0?e.buffer:1,u.value,t.$q)),g=r(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${c.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),f=r(()=>i(s.value===!0?1:e.value,u.value,t.$q)),q=r(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${s.value===!0?"in":""}determinate`),b=r(()=>({width:`${e.value*100}%`})),y=r(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const o=[a("div",{class:g.value,style:m.value}),a("div",{class:q.value,style:f.value})];return e.stripe===!0&&s.value===!1&&o.push(a("div",{class:y.value,style:b.value})),a("div",{class:v.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},C(l.default,o))}}});export{D as Q};
