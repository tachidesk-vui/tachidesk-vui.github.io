import{Q as F}from"./QIcon.84da60f3.js";import{Q as h,a as I}from"./QItemLabel.9f77ab94.js";import{Q as i}from"./QBtn.bbf1baf8.js";import{Q as m}from"./QItem.29e44177.js";import{Q as N}from"./QList.4700ba9d.js";import{Q as U}from"./QPageSticky.872e3a0d.js";import{Q as y}from"./QCardSection.d5ee5e78.js";import{Q as k}from"./QInput.2dbf500e.js";import{Q as C}from"./QToggle.a06622d5.js";import{Q}from"./QCardActions.d1461c1a.js";import{Q as $}from"./QCard.35696d4b.js";import{Q as b}from"./QDialog.be2a2810.js";import{Q as P}from"./QPage.cf8886d8.js";import{C as w}from"./ClosePopup.414cd872.js";import{d as V,r as d,_ as S,f as g,v as D,m as e,k as o,B as _,F as B,u as E,j as v,s as T,x as j,p as q,t as L}from"./index.7e40c818.js";import"./QSpinner.cf072ceb.js";import"./Ripple.27cebf29.js";import"./dom.acfac080.js";import"./use-dark.b03c4291.js";import"./use-key-composition.0094d429.js";import"./uid.42677368.js";import"./focus-manager.32f8d49a.js";import"./use-form.a98795ea.js";import"./use-checkbox.e6b686ce.js";import"./option-sizes.2a9a19fc.js";import"./use-timeout.b4da6a81.js";import"./scroll.2c23969d.js";import"./use-transition.f6e6130b.js";const A=V({name:"CatSettingsEdit",props:{cat:{type:Object,required:!0}},setup(t){return{editdialog:d(!1),defaul:d(t.cat.default),edittxt:d(t.cat.name)}},methods:{savetxt(){this.$api.patchForm(`/api/v1/category/${this.cat.id}`,{name:this.edittxt,default:this.defaul.toString()})}}}),O=E("div",{class:"text-h5"},"Edit Category",-1);function z(t,a,r,s,p,c){return g(),D(B,null,[e(i,{round:"",flat:"",icon:"edit",class:"q-ml-xl",onClick:a[0]||(a[0]=n=>t.editdialog=!0)}),e(b,{modelValue:t.editdialog,"onUpdate:modelValue":a[3]||(a[3]=n=>t.editdialog=n)},{default:o(()=>[e($,null,{default:o(()=>[e(y,null,{default:o(()=>[O]),_:1}),e(m,null,{default:o(()=>[e(k,{modelValue:t.edittxt,"onUpdate:modelValue":a[1]||(a[1]=n=>t.edittxt=n),style:{width:"100%"},type:"text",label:"Category Name",outlined:""},null,8,["modelValue"])]),_:1}),e(m,null,{default:o(()=>[e(C,{modelValue:t.defaul,"onUpdate:modelValue":a[2]||(a[2]=n=>t.defaul=n),label:"Default category when adding new manga to library",color:"blue"},null,8,["modelValue"])]),_:1}),e(Q,{align:"right"},{default:o(()=>[_(e(i,{flat:"",label:"Save",color:"primary",onClick:t.savetxt},null,8,["onClick"]),[[w]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var G=S(A,[["render",z]]);const H=V({name:"CategoriesSettingsPage",components:{catEdit:G},setup(){return{catag:d([]),editdialog:d(!1),newDialog:d(!1),edittxt:d(""),defaul:d(!1)}},mounted:function(){this.getcats()},methods:{myTweak(t){return{height:t?`calc(100vh - ${t}px)`:"100vh"}},moveto(t,a){const r=this.catag.findIndex(s=>s.order==t);r!=null&&(this.catag[r]!=null&&(this.catag=this.array_move(this.catag,t-1,a-1)),this.catag=this.catag.map((p,c)=>(p.order=c+1,p)),this.$api.patchForm("/api/v1/category/reorder",{from:t.toString(),to:a.toString()}))},array_move(t,a,r){if(r>=t.length){let s=r-t.length+1;for(;s--;)t.push(void 0)}return t.splice(r,0,t.splice(a,1)[0]),t},savetxt(){const t=new FormData;t.append("name",this.edittxt),t.append("default",this.defaul.toString()),this.$api.postForm("/api/v1/category/",{name:this.edittxt,default:this.defaul.toString()}).then(()=>this.getcats())},getcats(){this.$api.get("/api/v1/category/").then(({data:t})=>{this.catag=t})},delcat(t){this.$api.delete(`/api/v1/category/${t}`).then(()=>this.getcats())}}}),J=E("div",{class:"text-h5"},"New Category",-1);function K(t,a,r,s,p,c){const n=T("catEdit");return g(),v(P,{"style-fn":t.myTweak},{default:o(()=>[e(N,{separator:"",dark:t.$q.dark.isActive},{default:o(()=>[(g(!0),D(B,null,j(t.catag,(l,u)=>(g(),v(m,{key:u,class:"row justify-between"},{default:o(()=>[e(h,{avatar:""},{default:o(()=>[e(F,{name:"drag_handle"})]),_:1}),e(h,null,{default:o(()=>[e(I,null,{default:o(()=>[q(L(l.name),1)]),_:2},1024)]),_:2},1024),e(i,{round:"",flat:"",icon:"keyboard_double_arrow_up",onClick:f=>u?t.moveto(l.order,1):""},null,8,["onClick"]),e(i,{round:"",flat:"",icon:"keyboard_arrow_up",onClick:f=>u?t.moveto(l.order,l.order-1):""},null,8,["onClick"]),e(i,{round:"",flat:"",icon:"keyboard_arrow_down",onClick:f=>u<t.catag.length-1?t.moveto(l.order,l.order+1):""},null,8,["onClick"]),e(i,{round:"",flat:"",icon:"keyboard_double_arrow_down",onClick:f=>u<t.catag.length-1?t.moveto(l.order,t.catag.length):""},null,8,["onClick"]),e(n,{cat:l},null,8,["cat"]),e(i,{round:"",flat:"",icon:"delete",onClick:f=>t.delcat(l.id)},null,8,["onClick"])]),_:2},1024))),128))]),_:1},8,["dark"]),e(U,{position:"bottom-right",offset:[18,18]},{default:o(()=>[e(i,{fab:"",class:"text-black",icon:"add",color:"blue",onClick:a[0]||(a[0]=l=>t.newDialog=!0)})]),_:1}),e(b,{modelValue:t.newDialog,"onUpdate:modelValue":a[3]||(a[3]=l=>t.newDialog=l)},{default:o(()=>[e($,null,{default:o(()=>[e(y,null,{default:o(()=>[J]),_:1}),e(m,null,{default:o(()=>[e(k,{modelValue:t.edittxt,"onUpdate:modelValue":a[1]||(a[1]=l=>t.edittxt=l),style:{width:"100%"},type:"text",label:"Category Name",outlined:""},null,8,["modelValue"])]),_:1}),e(m,null,{default:o(()=>[e(C,{modelValue:t.defaul,"onUpdate:modelValue":a[2]||(a[2]=l=>t.defaul=l),label:"Default category when adding new manga to library",color:"blue"},null,8,["modelValue"])]),_:1}),e(Q,{align:"right"},{default:o(()=>[_(e(i,{flat:"",label:"Save",color:"primary",onClick:t.savetxt},null,8,["onClick"]),[[w]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["style-fn"])}var Qt=S(H,[["render",K]]);export{Qt as default};
