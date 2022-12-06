import{Q as d}from"./QBtn.cdb92c76.js";import{Q as b}from"./QTab.c1579a39.js";import{Q as V}from"./QTabs.de8078a2.js";import{Q as t}from"./QCardSection.e2ca179a.js";import{Q as q}from"./QIcon.6f02d6d6.js";import{Q as n,a as g}from"./QItemLabel.ab940886.js";import{Q as y}from"./QItem.967db878.js";import{Q as r}from"./QRadio.a2825040.js";import{Q as C}from"./QCard.5fb85c23.js";import{Q as c}from"./QDialog.53cdfb16.js";import v from"./SearchBar.6d731719.js";import{u as B}from"./Filters.553cd94e.js";import{i as k}from"./isConfigurable.b14869e2.js";import{_ as D,d as S,r as i,f as m,v as u,m as a,q as $,k as s,j as I,n as f,F as T,s as U,p as L}from"./index.eb7b1268.js";import"./QSpinner.5d01ec6b.js";import"./Ripple.a15f7331.js";import"./dom.6c863bc6.js";import"./uid.42677368.js";import"./QResizeObserver.9ffe9e37.js";import"./rtl.b51694b1.js";import"./use-dark.1e985ad9.js";import"./option-sizes.1d3e07cf.js";import"./use-form.1924db4e.js";import"./use-transition.367883b0.js";import"./focus-manager.32f8d49a.js";import"./scroll.ae6da8d4.js";import"./QInput.2394a332.js";import"./use-key-composition.937e7aa4.js";import"./StoreStuff.1b509852.js";const N=S({name:"LibraryTopBar",components:{SearchBar:v},setup(){const l=B(),e=i(k().isConfigurable),p=i(`${l.Display.value}`);return{dialo:i(!1),tab:i("display"),disp:p,filters:l,isConfigurable:e}},watch:{disp(){this.disp=="null"?this.filters.setDisplay(null):this.filters.setDisplay(this.disp=="true")}}}),w={key:0};function x(l,e,p,A,E,F){const Q=U("SearchBar");return m(),u(T,null,[a(Q),a(d,{flat:"",class:$(["q-ml-sm",l.$q.dark.isActive?"light":"dark"]),round:"",icon:"display_settings",onClick:e[0]||(e[0]=o=>l.dialo=!0)},null,8,["class"]),a(c,{modelValue:l.dialo,"onUpdate:modelValue":e[5]||(e[5]=o=>l.dialo=o)},{default:s(()=>[a(C,null,{default:s(()=>[a(t,{class:"q-pa-none"},{default:s(()=>[a(V,{modelValue:l.tab,"onUpdate:modelValue":e[1]||(e[1]=o=>l.tab=o),class:"text-teal"},{default:s(()=>[a(b,{class:"q-px-xl",name:"display",icon:"display_settings",label:"Display"})]),_:1},8,["modelValue"])]),_:1}),l.tab=="display"?(m(),u("div",w,[a(y,{class:"q-mx-lg q-pt-md q-pb-xs"},{default:s(()=>[a(n,{thumbnail:"",class:"q-pr-sm"},{default:s(()=>[a(q,{name:"display_settings"})]),_:1}),a(n,null,{default:s(()=>[a(g,null,{default:s(()=>[L("DISPLAY MODE")]),_:1})]),_:1})]),_:1}),a(t,{class:"q-px-md q-py-xs"},{default:s(()=>[a(r,{modelValue:l.disp,"onUpdate:modelValue":e[2]||(e[2]=o=>l.disp=o),val:"null",label:"Compact grid"},null,8,["modelValue"])]),_:1}),a(t,{class:"q-px-md q-py-xs"},{default:s(()=>[a(r,{modelValue:l.disp,"onUpdate:modelValue":e[3]||(e[3]=o=>l.disp=o),val:"true",label:"Comfortable grid"},null,8,["modelValue"])]),_:1}),a(t,{class:"q-px-md q-pt-xs q-pb-md"},{default:s(()=>[a(r,{modelValue:l.disp,"onUpdate:modelValue":e[4]||(e[4]=o=>l.disp=o),val:"false",label:"list"},null,8,["modelValue"])]),_:1})])):f("",!0)]),_:1})]),_:1},8,["modelValue"]),l.isConfigurable?(m(),I(d,{key:0,flat:"",round:"",class:"q-ml-sm",icon:"settings",to:"../config"})):f("",!0)],64)}var fa=D(N,[["render",x]]);export{fa as default};
