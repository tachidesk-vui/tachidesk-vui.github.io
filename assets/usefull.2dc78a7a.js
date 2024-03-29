import{c as d,r as s,w as k,o as I,h as o,T as Q}from"./index.e607ebbf.js";import{c as j,h as P,Q as $}from"./QSpinner.a066f13a.js";import{api as F}from"./axios.adfc46d0.js";const L={ratio:[String,Number]};function E(e,n){return d(()=>{const i=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const H=16/9;var A=j({name:"QImg",props:{...L,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:H},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:i}){const u=s(e.initialRatio),f=E(e,u);let a;const l=[s(null),s(h())],r=s(0),c=s(!1),g=s(!1),_=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),q=d(()=>({width:e.width,height:e.height})),T=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),C=d(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));k(()=>S(),y);function S(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function h(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function y(t){clearTimeout(a),g.value=!1,t===null?(c.value=!1,l[r.value^1].value=h()):c.value=!0,l[r.value].value=t}function z({target:t}){a!==null&&(clearTimeout(a),u.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,b(t,1))}function b(t,m){a===null||m===1e3||(t.complete===!0?R(t):a=setTimeout(()=>{b(t,m+1)},50))}function R(t){a!==null&&(r.value=r.value^1,l[r.value].value=null,c.value=!1,g.value=!1,i("load",t.currentSrc||t.src))}function B(t){clearTimeout(a),c.value=!1,g.value=!0,l[r.value].value=null,l[r.value^1].value=h(),i("error",t)}function w(t){const m=l[t].value,v={key:"img_"+t,class:T.value,style:C.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...m};return r.value===t?(v.class+=" q-img__image--waiting",Object.assign(v,{onLoad:z,onError:B})):v.class+=" q-img__image--loaded",o("div",{class:"q-img__container absolute-full",key:"img"+t},o("img",v))}function N(){return c.value!==!0?o("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},P(n[g.value===!0?"error":"default"])):o("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[o($,{color:e.spinnerColor,size:e.spinnerSize})])}return y(S()),I(()=>{clearTimeout(a),a=null}),()=>{const t=[];return f.value!==null&&t.push(o("div",{key:"filler",style:f.value})),g.value!==!0&&(l[0].value!==null&&t.push(w(0)),l[1].value!==null&&t.push(w(1))),t.push(o(Q,{name:"q-transition--fade"},N)),o("div",{class:_.value,style:q.value,role:"img","aria-label":e.alt},t)}}});async function D(e){const n=await F.get(e,{responseType:"blob"});if(n.status==200){const i=await n.data,u=new FileReader;return u.readAsDataURL(i),await new Promise(f=>{u.onloadend=()=>{f(u.result)}})}else return new Promise(i=>{i("")})}export{A as Q,D as g};
