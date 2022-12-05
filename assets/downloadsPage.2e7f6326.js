import{Q as O}from"./QIcon.5f4d6aeb.js";import{Q as g,a as i}from"./QItemLabel.c44d9f45.js";import{Q as j}from"./QLinearProgress.c7e088d6.js";import{Q as k}from"./QBtn.d09c3270.js";import{Q as $}from"./QItem.bc55f9b3.js";import{Q as H}from"./QList.e5c06e4d.js";import{u as J,a as G}from"./use-dark.6a672a10.js";import{c as M,h as W,a as K}from"./QSpinner.5eed4aaf.js";import{c as v,h as p,g as X,r as h,w as B,an as Y,z as Z,I as ee,J as te,o as ae,Q as I,_ as le,d as oe,f as m,j as q,k as a,v as D,n as y,B as Q,m as t,p as E,t as _,u as s,ai as re}from"./index.0e613efa.js";import{u as se,a as ie}from"./use-virtual-scroll.95052611.js";import{c as ne}from"./scroll.924aa4d3.js";import{Q as de}from"./QCardSection.3cc22be1.js";import{Q as ue}from"./QCardActions.c3a39097.js";import{Q as ce}from"./QCard.0a761dda.js";import{Q as fe}from"./QDialog.2d22470a.js";import{Q as me}from"./QPage.f024ecae.js";import{R as ve}from"./Ripple.3ab13508.js";import{C as F}from"./ClosePopup.a227b8fc.js";import{u as he}from"./useDlSock.35a5c860.js";import{p as L}from"./models.d7e94ac2.js";import{u as pe}from"./use-quasar.6ad0522f.js";import{storeGet as ge}from"./StoreStuff.21e2f4bb.js";import{g as z}from"./getenv.7492fdf7.js";import"./rtl.b51694b1.js";import"./dom.41615696.js";import"./use-timeout.8d87aef2.js";import"./use-transition.5dfc4757.js";import"./focus-manager.32f8d49a.js";const _e=["horizontal","vertical","cell","none"];var be=M({name:"QMarkupTable",props:{...J,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>_e.includes(e)}},setup(e,{slots:l}){const d=X(),r=G(e,d.proxy.$q),n=v(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(r.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>p("div",{class:n.value},[p("table",{class:"q-table"},W(l.default))])}});function we(e,l){return p("div",e,[p("table",{class:"q-table"},l)])}const Se={list:H,table:be},ke=["list","table","__qtable"];var qe=M({name:"QVirtualScroll",props:{...se,type:{type:String,default:"list",validator:e=>ke.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:d}){let r;const n=h(null),u=v(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:o,localResetVirtualScroll:c,padVirtualScroll:b,onVirtualScrollEvt:x}=ie({virtualScrollLength:u,getVirtualScrollTarget:U,getVirtualScrollEl:T}),N=v(()=>{if(u.value===0)return[];const f=(A,P)=>({index:o.value.from+P,item:A});return e.itemsFn===void 0?e.items.slice(o.value.from,o.value.to).map(f):e.itemsFn(o.value.from,o.value.to-o.value.from).map(f)}),C=v(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),R=v(()=>e.scrollTarget!==void 0?{}:{tabindex:0});B(u,()=>{c()}),B(()=>e.scrollTarget,()=>{S(),w()});function T(){return n.value.$el||n.value}function U(){return r}function w(){r=ne(T(),e.scrollTarget),r.addEventListener("scroll",x,I.passive)}function S(){r!==void 0&&(r.removeEventListener("scroll",x,I.passive),r=void 0)}function V(){let f=b(e.type==="list"?"div":"tbody",N.value.map(l.default));return l.before!==void 0&&(f=l.before().concat(f)),K(l.after,f)}return Y(()=>{c()}),Z(()=>{w()}),ee(()=>{w()}),te(()=>{S()}),ae(()=>{S()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?we({ref:n,class:"q-table__middle "+C.value},V()):p(Se[e.type],{...d,ref:n,class:[d.class,C.value],...R.value},V)}}});const ye=oe({emits:["set-title"],setup(e,{emit:l}){l("set-title","Downloads");const d=pe(),r=he(),n=h(r),u=ge("baseUrl",z("TachideskURL")?z("TachideskURL"):location.origin),o=h([]),c=r.eventsFromServer.value?JSON.parse(r.eventsFromServer.value):[];L(c)&&(o.value=c.queue),n.value.isConnected&&r.sendMsg("STATUS");const b=h(new URL(u).origin!=location.origin&&!d.localStorage.getItem("dontshowagainWH")&&!!d.localStorage.getItem("auth"));return{downloads:o,goodBase:b,Emitter:n,filtering:h([])}},computed:{downlfilt(){return this.filtering.length?this.downloads.filter(e=>this.filtering.includes(e.state)):this.downloads}},watch:{"Emitter.eventsFromServer"(e){const l=JSON.parse(e);L(l)&&(this.downloads=l.queue)}},created(){this.$bus.on("DLFilter",e=>{this.filtering=e})},methods:{myTweak(e){return{height:e?`calc(100vh - ${e}px)`:"100vh"}},async delet(e){this.$api.delete(`/api/v1/download/${e.mangaId}/chapter/${e.chapterIndex}`),this.$api.delete(`/api/v1/manga/${e.mangaId}/chapter/${e.chapterIndex}`,{method:"DELETE"})},dontshowagain(){this.$q.localStorage.set("dontshowagainWH",!0)}}}),Qe={key:0},xe={key:1},Ce={class:"col-6"},Te=s("div",null," 1. Move this UI to the same origin as the server (Recomended) ",-1),Ve=s("div",null,"replace the default webui files with this ones files",-1),$e=s("div",null,"or some reverse proxy jank",-1),Be=s("div",null,"2. dissable authentication on the webhook url",-1),Ie=s("div",null,"/api/v1/downloads",-1),De=s("div",null,"with some reverse proxy jank",-1),Ee=s("div",null,"3. dissable authentication",-1),Fe=s("div",null,"in server configs",-1),Le=s("div",null,"4. Go to the default webUI and login",-1),ze=s("div",null,"per browser",-1),Me=s("div",null," this is a temporary fix as it will clear after a month (i think) ",-1);function Ne(e,l,d,r,n,u){return m(),q(me,{class:"flex items-center justify-center","style-fn":e.myTweak},{default:a(()=>[!e.downloads.length&&e.Emitter.isConnected?(m(),D("div",Qe,"No Downloads")):y("",!0),!e.downlfilt.length&&e.downloads.length&&e.Emitter.isConnected?(m(),D("div",xe," No Downloads fit filter ")):y("",!0),e.downlfilt.length?(m(),q(qe,{key:2,items:e.downlfilt,class:"self-start",style:{flex:"auto",height:"100%"}},{default:a(({item:o})=>[Q((m(),q($,{clickable:"",class:"q-pa-lg"},{default:a(()=>[t(g,{avatar:""},{default:a(()=>[t(O,{name:"drag_handle",size:"sm"})]),_:1}),t(g,null,{default:a(()=>[t(i,{class:"text-weight-medium text-h6"},{default:a(()=>[E(_(o.manga.title),1)]),_:2},1024),t(i,{caption:"",class:""},{default:a(()=>[s("div",Ce," Chapter "+_(o.chapterIndex)+" ("+_((o.progress*100).toFixed(2))+"%) => state: "+_(o.state),1),t(j,{value:o.progress,style:{width:"100%","max-width":"500px"}},null,8,["value"])]),_:2},1024)]),_:2},1024),t(g,{avatar:""},{default:a(()=>[t(k,{round:"",flat:"",icon:"delete",class:"flex-right",onClick:[l[0]||(l[0]=re(()=>{},["prevent"])),c=>e.delet(o)]},null,8,["onClick"])]),_:2},1024)]),_:2},1024)),[[ve]])]),_:1},8,["items"])):y("",!0),t(fe,{modelValue:e.goodBase,"onUpdate:modelValue":l[1]||(l[1]=o=>e.goodBase=o),persistent:""},{default:a(()=>[t(ce,{style:{"min-width":"350px"}},{default:a(()=>[t(de,{class:""},{default:a(()=>[t($,null,{default:a(()=>[t(g,null,{default:a(()=>[t(i,{class:"text-h6 text-negative"},{default:a(()=>[E(" Downloads webhook may not work with authentication. ")]),_:1}),t(i,{class:"text-info q-pt-lg"},{default:a(()=>[Te]),_:1}),t(i,{caption:"",class:"text-info"},{default:a(()=>[Ve,$e]),_:1}),t(i,{class:"text-info q-pt-lg"},{default:a(()=>[Be]),_:1}),t(i,{caption:"",class:"text-info"},{default:a(()=>[Ie,De]),_:1}),t(i,{class:"text-info q-pt-lg"},{default:a(()=>[Ee]),_:1}),t(i,{caption:"",class:"text-info"},{default:a(()=>[Fe]),_:1}),t(i,{class:"text-info q-pt-lg"},{default:a(()=>[Le]),_:1}),t(i,{caption:"",class:"text-info"},{default:a(()=>[ze,Me]),_:1})]),_:1})]),_:1})]),_:1}),t(ue,{align:"right",class:"text-primary"},{default:a(()=>[Q(t(k,{flat:"",label:"Ok"},null,512),[[F]]),Q(t(k,{flat:"",label:"Dont show again",onClick:e.dontshowagain},null,8,["onClick"]),[[F]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["style-fn"])}var vt=le(ye,[["render",Ne]]);export{vt as default};
