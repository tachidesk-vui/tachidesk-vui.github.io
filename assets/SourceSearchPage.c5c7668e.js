import{Q as M}from"./QPage.fd3498d9.js";import{Q as O}from"./QIntersection.16e3c7e8.js";import{Q as U}from"./QSpinnerDots.b18cc170.js";import{Q as z}from"./QInfiniteScroll.5540ce61.js";import{Q as g}from"./QBtn.83cc7836.js";import{Q as A}from"./QPageSticky.81f41ebd.js";import{Q as J}from"./QCardActions.8c792399.js";import{Q as E}from"./QList.1c031a76.js";import{Q as R}from"./QCard.f6a06634.js";import{Q as K}from"./QDialog.59defe17.js";import{C as Q}from"./ClosePopup.7c183214.js";import{m as X}from"./mangaCard.1147f1eb.js";import{d as y,r as s,_ as b,f as l,v as d,j as u,k as r,m as i,p as I,t as V,n as m,F as h,x as v,s as $,ac as Y,u as D,y as _,ab as Z}from"./index.16a21bb1.js";import{u as x}from"./Filters.74c8a9a6.js";import{Q as H}from"./QExpansionItem.8d7ecbe9.js";import{a as q,b as F,c as G,d as L,e as N,f as T,g as W,h as B,j as ee}from"./models.d7e94ac2.js";import{a as P,Q as c}from"./QItemLabel.43ea2709.js";import{Q as j}from"./QCheckbox.c9134f09.js";import{Q as p}from"./QItem.ddf44946.js";import{Q as te}from"./QSelect.eaf41a36.js";import{Q as ie}from"./QSeparator.c549f67d.js";import{Q as re}from"./QInput.fa3a8b18.js";import{Q as le}from"./QIcon.b4c56408.js";import{i as se}from"./isConfigurable.fb4efdf5.js";import"./QSpinner.992dc9e3.js";import"./Intersection.4f2ff861.js";import"./dom.1d14d0d9.js";import"./scroll.37cff1b1.js";import"./Ripple.0063342c.js";import"./use-dark.3d2c1956.js";import"./use-transition.8cb170ff.js";import"./focus-manager.32f8d49a.js";import"./QInnerLoading.c2ee7d9e.js";import"./QBadge.47e28206.js";import"./usefull.5949ebbf.js";import"./axios.5660c961.js";import"./StoreStuff.3cd89d8c.js";import"./getenv.7492fdf7.js";import"./uid.42677368.js";import"./use-checkbox.7b3a6ed5.js";import"./option-sizes.c9bdf2a2.js";import"./use-form.ce69c82a.js";import"./use-key-composition.d8eeb663.js";import"./QMenu.a516eb3a.js";import"./position-engine.c56c90f5.js";import"./use-virtual-scroll.727111b0.js";import"./rtl.b51694b1.js";import"./format.2a3572e1.js";const ae=y({name:"IsGroup",props:{filter:{type:Object,required:!0},position:{type:Number,default:()=>{}}},emits:["state-change"],setup(e){let t;return q(e.filter)?t=s(e.filter.filter.state):F(e.filter)?t=s(e.filter.filter.state):G(e.filter)?t=s(e.filter.filter.state):L(e.filter)?t=s(e.filter.filter.state):N(e.filter)?t=s():T(e.filter)?t=s():W(e.filter)&&(t=s(e.filter.filter.state||"")),{val:t,isfilterCheckBox:q,isfilterSort:F,isfilterSelect:G,isfilterTriState:L,isfilterHeader:N,isfilterSeparator:T,isfilterText:W,isSortState:B}},watch:{val(){typeof this.val=="object"?this.$emit("state-change",JSON.stringify(this.val),this.position):(typeof this.val=="string"||typeof this.val=="number"||typeof this.val=="boolean")&&this.$emit("state-change",this.val.toString(),this.position)}},methods:{doSort(e){B(this.val)&&(e==this.val.index?this.val.ascending=!this.val.ascending:(this.val.index=e,this.val.ascending=!0))}}});function oe(e,t,o,S,C,w){return l(),d(h,null,[e.isfilterCheckBox(e.filter)?(l(),u(p,{key:0},{default:r(()=>[i(c,null,{default:r(()=>[i(P,null,{default:r(()=>[I(V(e.filter.filter.name),1)]),_:1})]),_:1}),i(j,{modelValue:e.val,"onUpdate:modelValue":t[0]||(t[0]=a=>e.val=a),color:"blue"},null,8,["modelValue"])]),_:1})):m("",!0),e.isfilterSelect(e.filter)?(l(),u(p,{key:1},{default:r(()=>[i(te,{modelValue:e.val,"onUpdate:modelValue":t[1]||(t[1]=a=>e.val=a),style:{width:"100%"},options:e.filter.filter.displayValues.map((a,f)=>({label:a,value:f})),"emit-value":"","map-options":"",label:e.filter.filter.name},null,8,["modelValue","options","label"])]),_:1})):m("",!0),e.isfilterTriState(e.filter)?(l(),u(p,{key:2},{default:r(()=>[i(j,{modelValue:e.val,"onUpdate:modelValue":t[2]||(t[2]=a=>e.val=a),style:{width:"100%"},"toggle-indeterminate":"",label:e.filter.filter.name,"checked-icon":"check_box","unchecked-icon":"r_disabled_by_default","indeterminate-icon":"check_box_outline_blank","keep-color":"",size:"lg",color:"blue","indeterminate-value":0,"true-value":1,"false-value":2},null,8,["modelValue","label"])]),_:1})):m("",!0),e.isfilterHeader(e.filter)?(l(),u(p,{key:3},{default:r(()=>[i(c,null,{default:r(()=>[i(P,null,{default:r(()=>[I(V(e.filter.filter.name),1)]),_:1})]),_:1})]),_:1})):m("",!0),e.isfilterSeparator(e.filter)?(l(),u(p,{key:4},{default:r(()=>[i(ie)]),_:1})):m("",!0),e.isfilterText(e.filter)&&typeof e.val=="string"?(l(),u(p,{key:5},{default:r(()=>[i(re,{modelValue:e.val,"onUpdate:modelValue":t[3]||(t[3]=a=>e.val=a),style:{width:"100%"},outlined:"",label:e.filter.filter.name},null,8,["modelValue","label"])]),_:1})):m("",!0),e.isfilterSort(e.filter)&&e.isSortState(e.val)?(l(),u(H,{key:6,label:e.filter.filter.name,style:{width:"100%"}},{default:r(()=>[(l(!0),d(h,null,v(e.filter.filter.values,(a,f)=>(l(),u(p,{key:f},{default:r(()=>[i(c,{thumbnail:"",class:"q-px-md"},{default:r(()=>[i(le,{name:e.val.index==f?e.val.ascending?"arrow_downward":"arrow_upward":void 0},null,8,["name"])]),_:2},1024),i(c,null,{default:r(()=>[i(g,{flat:"",class:"q-pl-none",style:{width:"100%"},align:"left",label:a,onClick:n=>e.doSort(f)},null,8,["label","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["label"])):m("",!0)],64)}var ne=b(ae,[["render",oe]]);const ue=y({name:"IsGroup",components:{whatFilter:ne},props:{filter:{type:Object,required:!0},position:{type:Number,required:!0}},emits:["state-change"],setup(){return{isfilterGroup:ee,status:s([])}},methods:{stateChange(e,t=void 0){t!=null?(this.status=this.status.filter(o=>o.position!=t),this.status.push({position:t,state:e}),this.$emit("state-change",this.status,this.position)):this.$emit("state-change",e,this.position)}}}),fe={key:1};function me(e,t,o,S,C,w){const a=$("whatFilter");return l(),d(h,null,[e.isfilterGroup(e.filter)?(l(),u(H,{key:0,label:e.filter.filter.name},{default:r(()=>[i(E,null,{default:r(()=>[(l(!0),d(h,null,v(e.filter.filter.state,(f,n)=>(l(),d("div",{key:n},[i(a,{filter:f,position:n,onStateChange:e.stateChange},null,8,["filter","position","onStateChange"])]))),128))]),_:1})]),_:1},8,["label"])):m("",!0),e.isfilterGroup(e.filter)?m("",!0):(l(),d("div",fe,[i(a,{filter:e.filter,onStateChange:e.stateChange},null,8,["filter","onStateChange"])]))],64)}var de=b(ue,[["render",me]]);const pe=y({name:"MangaSourceGrid",components:{MangaCard:X,isItGroup:de},setup(){const e=s(new AbortController);return{devider:s(0),mangas:s([]),clwidth:s(0),display:s(x()),filters:s([]),items:s([]),filterDial:s(!1),stateChanges:s([]),Smitted:s(!1),noinit:s(!1),controller:e}},computed:{Displ(){return this.display.Display==null?"compact":this.display.Display?"comfort":"list"},widt(){return this.Displ=="list"?"width:100%; height: 109px;":`width: calc(100% / ${this.devider}); aspect-ratio: 225/350;transition: width 0.5s ease-out;`}},watch:{"$route.query.q":function(){this.resetScroll()}},created:async function(){this.calcWidth=Y(this.calcWidth,500)},mounted:function(){this.calcWidth(),this.$nextTick(()=>{window.addEventListener("resize",this.calcWidth)}),this.getFilts(!0)},beforeUnmount(){window.removeEventListener("resize",this.calcWidth)},methods:{calcWidth(){const e=this.$refs.infiniteScrol,t=this.$q.localStorage.getItem("MitemW");e.$el.clientWidth!=null&&(this.devider=Math.round(e.$el.clientWidth/t))},calcHeight(){var t;const e=(t=this.$parent)==null?void 0:t.$el;if(e){let o=e.clientHeight;return o-=e.children[0].clientHeight,o}return 0},async getlist(e){const t=this.$api.get(e,{signal:this.controller.signal});try{return(await t).data}catch{return}},async reload(e=1){if(this.noinit)return this.Smitted||this.$route.query.q?await this.getlist(`/api/v1/source/${this.$route.params.sourceID}/search?searchTerm=${this.$route.query.q||""}&pageNum=${e}`):await this.getlist(`/api/v1/source/${this.$route.params.sourceID}/${this.$route.params.poplate}/${e}`);this.noinit=!0},onLoad(e,t=()=>{}){this.reload(e).then(o=>{o!=null&&(this.items.push(...o.mangaList),o.hasNextPage||this.$refs.infiniteScrol.stop()),t()})},resetScroll(){this.items=[],this.controller.abort(),this.controller=new AbortController,this.$refs.infiniteScrol.reset(),this.$refs.infiniteScrol.resume(),this.$refs.infiniteScrol.trigger()},getFilts(e=!1){this.$api.get(`/api/v1/source/${this.$route.params.sourceID}/filters${e?"?reset=true":""}`).then(({data:t})=>{this.filters=t,this.resetScroll()})},stateChange(e,t){this.stateChanges=this.stateChanges.filter(o=>o.position!=t),typeof e!="string"?e.forEach(o=>{this.stateChanges.push({position:t,state:JSON.stringify(o)})}):this.stateChanges.push({position:t,state:e})},async submitFilters(){await this.$api.post(`/api/v1/source/${this.$route.params.sourceID}/filters`,this.stateChanges),this.Smitted=!0,this.stateChanges=[],this.getFilts()}}}),he={class:"flex"},ce={class:"row justify-center q-my-md"};function ge(e,t,o,S,C,w){const a=$("MangaCard"),f=$("isItGroup");return l(),d(h,null,[i(z,{ref:"infiniteScrol",offset:e.$q.screen.height/2,class:"notOflow",onLoad:e.onLoad},{loading:r(()=>[D("div",ce,[i(U,{color:"primary",size:"40px"})])]),default:r(()=>[D("div",he,[(l(!0),d(h,null,v(e.items,n=>(l(),u(O,{key:n.id,style:Z(e.widt)},{default:r(()=>[i(a,{display:e.Displ,manga:n},null,8,["display","manga"])]),_:2},1032,["style"]))),128))])]),_:1},8,["offset","onLoad"]),i(A,{position:"bottom-right",offset:[18,18]},{default:r(()=>[i(g,{fab:"",class:"text-black",icon:"filter_list",color:"blue",label:"FILTER",onClick:t[0]||(t[0]=n=>e.filterDial=!0)})]),_:1}),i(K,{modelValue:e.filterDial,"onUpdate:modelValue":t[2]||(t[2]=n=>e.filterDial=n)},{default:r(()=>[i(R,{style:{width:"500px"}},{default:r(()=>[i(J,{align:"between"},{default:r(()=>[_(i(g,{flat:"",label:"Reset",color:"blue",onClick:t[1]||(t[1]=n=>e.getFilts(!0))},null,512),[[Q]]),_(i(g,{color:"blue",class:"text-black",label:"Submit",onClick:e.submitFilters},null,8,["onClick"]),[[Q]])]),_:1}),i(E,null,{default:r(()=>[(l(!0),d(h,null,v(e.filters,(n,k)=>(l(),u(f,{key:k,filter:n,position:k,onStateChange:e.stateChange},null,8,["filter","position","onStateChange"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var ve=b(pe,[["render",ge]]);const $e=y({name:"ScourceSearchPage",components:{sourceGrid:ve},emits:["set-title"],setup(e,{emit:t}){return t("set-title","Source Search Page"),{isConfi:se()}},created:async function(){try{const{data:e}=await this.$api.get(`/api/v1/source/${this.$route.params.sourceID}`);this.$emit("set-title",e.displayName),this.isConfi.setConfigurable(e.isConfigurable)}catch(e){console.error(e)}},methods:{myTweak(e){return{height:e?`calc(100vh - ${e}px)`:"100vh"}}}});function ye(e,t,o,S,C,w){const a=$("sourceGrid");return l(),u(M,{"style-fn":e.myTweak,class:"notOflow"},{default:r(()=>[i(a)]),_:1},8,["style-fn"])}var ht=b($e,[["render",ye],["__scopeId","data-v-7a5ba568"]]);export{ht as default};
