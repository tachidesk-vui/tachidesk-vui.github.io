import{Q as ie}from"./QPage.3d8dac92.js";import{g as re,Q as x}from"./usefull.b37a3c29.js";import{Q as I}from"./QBtn.b43eb823.js";import{Q as de,a as B}from"./QMenu.439f18b2.js";import{storeGet as ue,storeSet as U}from"./StoreStuff.f00ba33a.js";import{d as H,r as h,_ as E,f as i,v as $,j as p,n as g,u as C,q as N,t as w,p as c,m as l,F as Z,x as le,ab as oe,k as a,V as j,a4 as ce,a5 as me,a1 as A,a3 as ee,a2 as O,N as pe,P as S,aa as se,s as z,y as b,ak as fe}from"./index.44844fed.js";import{Q as V}from"./QIcon.8235beb7.js";import{Q as m,a as J}from"./QItemLabel.a3f9f0a1.js";import{Q as k}from"./QItem.2ee01b28.js";import{Q as M}from"./QList.5d44d7ad.js";import{Q as he}from"./QLinearProgress.c7290e61.js";import{Q as ke}from"./QIntersection.c3d38d35.js";import{Q as ge}from"./QScrollArea.eca06d21.js";import{Q as be}from"./QTooltip.b4f67e2d.js";import{Q as ye}from"./QPageSticky.4ecd9ecb.js";import{C as y}from"./ClosePopup.e6e1b173.js";import{f as ve}from"./QSpinner.3e2d5684.js";import{c as G}from"./selection.2ac3d1f3.js";import{R as $e}from"./Ripple.7acd3163.js";import{T as we}from"./TouchPan.35c43ba2.js";import{p as te}from"./models.d7e94ac2.js";import{Q as K}from"./QTab.7563f55c.js";import{Q as Ce}from"./QTabs.8540b553.js";import{Q as D}from"./QCardSection.bf0a7dd9.js";import{Q as L}from"./QCheckbox.1ebea11a.js";import{Q as ae}from"./QRadio.ae0b2678.js";import{Q as _e}from"./QCard.3d4678f7.js";import{Q as Se}from"./QDialog.d33dbf34.js";import{u as qe}from"./useDlSock.5bfa2108.js";import"./axios.cd816db6.js";import"./getenv.7492fdf7.js";import"./use-dark.f1b9b8d7.js";import"./position-engine.2b684373.js";import"./scroll.b4a6a74e.js";import"./dom.08caf161.js";import"./use-transition.a418cd43.js";import"./focus-manager.32f8d49a.js";import"./Intersection.2974b452.js";import"./QResizeObserver.2faeb199.js";import"./QScrollObserver.990416e8.js";import"./format.2a3572e1.js";import"./uid.42677368.js";import"./rtl.b51694b1.js";import"./use-checkbox.e795fd23.js";import"./option-sizes.3a90e243.js";import"./use-form.34561d7e.js";const De=H({name:"MangaInfo",props:{manga:{type:Object,default:Object},offset:{type:Number,default:()=>0}},emits:["inlib"],setup(e){var d;return{useCache:ue("useCache",!0),inLib:h(((d=e.manga)==null?void 0:d.inLibrary)||!1),imgdata:h()}},created:function(){if(this.imgdata&&this.manga)this.getImg();else{const e=this.$watch(()=>[this.imgdata,this.manga],()=>{!this.imgdata&&this.manga&&(this.getImg(),e())})}},methods:{async InLibrary(){this.inLib=!this.inLib,this.inLib?await this.$api.get(`/api/v1/manga/${this.$route.params.mangaID}/library/`):await this.$api.delete(`/api/v1/manga/${this.$route.params.mangaID}/library/`),this.$emit("inlib")},getImg(){var e;re(((e=this.manga)==null?void 0:e.thumbnailUrl)+"?useCache="+this.useCache).then(t=>{this.imgdata=t})}}}),Ie={class:"flex no-wrap"},Qe={key:1,class:"q-mx-md",style:{display:"inline-block"}},Fe={key:0,class:"text-h5 q-my-xs"},Be={class:"text-subtitle1"},Ve={key:1,class:"text-h5 q-my-xs"},Me={class:"text-subtitle1"},Ue={key:2,class:"text-h5 q-my-xs"},Le={class:"text-subtitle1"},Pe={key:3,class:"text-h5 q-my-xs"},Re={class:"text-subtitle1"},Ae={class:"q-my-md",style:{display:"flex","justify-content":"space-evenly"}},Te={key:1},Ne=C("h6",{class:"q-my-sm"},"About:",-1),ze={style:{"font-size":"1.3em"}},He={key:2};function Ee(e,t,d,n,v,f){var r,u,o,s,Q,q,F;return i(),$("div",{class:"q-px-md q-py-md col MangaInfo",style:oe([{"overflow-y":"auto"},e.$q.screen.sm||e.$q.screen.xs?"":"max-height: calc(100vh - "+e.offset+"px)"])},[e.$q.screen.sm||e.$q.screen.xs||e.$q.screen.md?(i(),p(x,{key:0,style:{width:"fit-content","max-width":"100%"},loading:"lazy",class:"rounded-borders q-mx-md","img-class":"test",src:e.imgdata,fit:"scale-down"},null,8,["src"])):g("",!0),C("div",Ie,[e.$q.screen.sm||e.$q.screen.xs||e.$q.screen.md?g("",!0):(i(),p(x,{key:0,style:{width:"fit-content","max-width":"50%",flex:"none"},loading:"lazy",class:"rounded-borders","img-class":"test",src:e.imgdata,fit:"scale-down"},null,8,["src"])),e.manga?(i(),$("div",Qe,[C("h3",{style:{"overflow-wrap":"anywhere"},class:N(e.$q.screen.sm||e.$q.screen.xs||e.$q.screen.md?"q-my-sm":"")},w(e.manga.title),3),e.manga.author?(i(),$("div",Fe,[c(" Author: "),C("span",Be,w(e.manga.author),1)])):g("",!0),e.manga.artist?(i(),$("div",Ve,[c(" Artist: "),C("span",Me,w(e.manga.artist),1)])):g("",!0),e.manga.status?(i(),$("div",Ue,[c(" Status: "),C("span",Le,w(e.manga.status),1)])):g("",!0),(r=e.manga.source)!=null&&r.displayName?(i(),$("div",Pe,[c(" Source: "),C("span",Re,w((u=e.manga.source)==null?void 0:u.displayName),1)])):g("",!0)])):g("",!0)]),C("div",Ae,[l(I,{flat:"",color:(o=e.manga)!=null&&o.inLibrary?"primary":"grey-9",icon:"favorite",label:(s=e.manga)!=null&&s.inLibrary?"In Library":"Add To Library",onClick:e.InLibrary},null,8,["color","label","onClick"]),l(I,{flat:"",color:"grey-9",icon:"public",label:"Open Site",href:(Q=e.manga)==null?void 0:Q.realUrl,target:"_blank"},null,8,["href"])]),(q=e.manga)!=null&&q.description?(i(),$("div",Te,[Ne,C("p",ze,w(e.manga.description),1)])):g("",!0),(F=e.manga)!=null&&F.genre?(i(),$("div",He,[(i(!0),$(Z,null,le(e.manga.genre,_=>(i(),p(de,{key:_,outline:"",color:"primary"},{default:a(()=>[c(w(_),1)]),_:2},1024))),128))])):g("",!0)],4)}var je=E(De,[["render",Ee]]),Oe=ve({name:"touch-hold",beforeMount(e,t){const{modifiers:d}=t;if(d.mouse!==!0&&j.has.touch!==!0)return;const n={handler:t.value,noop:ce,mouseStart(f){typeof n.handler=="function"&&me(f)===!0&&(A(n,"temp",[[document,"mousemove","move","passiveCapture"],[document,"click","end","notPassiveCapture"]]),n.start(f,!0))},touchStart(f){if(f.target!==void 0&&typeof n.handler=="function"){const r=f.target;A(n,"temp",[[r,"touchmove","move","passiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),n.start(f)}},start(f,r){n.origin=ee(f);const u=Date.now();j.is.mobile===!0&&(document.body.classList.add("non-selectable"),G(),n.styleCleanup=o=>{n.styleCleanup=void 0;const s=()=>{document.body.classList.remove("non-selectable")};o===!0?(G(),setTimeout(s,10)):s()}),n.triggered=!1,n.sensitivity=r===!0?n.mouseSensitivity:n.touchSensitivity,n.timer=setTimeout(()=>{G(),n.triggered=!0,n.handler({evt:f,touch:r!==!0,mouse:r===!0,position:n.origin,duration:Date.now()-u})},n.duration)},move(f){const{top:r,left:u}=ee(f);(Math.abs(u-n.origin.left)>=n.sensitivity||Math.abs(r-n.origin.top)>=n.sensitivity)&&clearTimeout(n.timer)},end(f){O(n,"temp"),n.styleCleanup!==void 0&&n.styleCleanup(n.triggered),n.triggered===!0?f!==void 0&&pe(f):clearTimeout(n.timer)}},v=[600,5,7];if(typeof t.arg=="string"&&t.arg.length>0&&t.arg.split(":").forEach((f,r)=>{const u=parseInt(f,10);u&&(v[r]=u)}),[n.duration,n.touchSensitivity,n.mouseSensitivity]=v,e.__qtouchhold=n,d.mouse===!0){const f=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";A(n,"main",[[e,"mousedown","mouseStart",`passive${f}`]])}j.has.touch===!0&&A(n,"main",[[e,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[e,"touchend","noop","notPassiveCapture"]])},updated(e,t){const d=e.__qtouchhold;d!==void 0&&t.oldValue!==t.value&&(typeof t.value!="function"&&d.end(),d.handler=t.value)},beforeUnmount(e){const t=e.__qtouchhold;t!==void 0&&(O(t,"main"),O(t,"temp"),clearTimeout(t.timer),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchhold)}});const W=h(null),X=h(null),Y=h(null),P=h(null),T=h(null),R=h("source");function ne(e){W.value=S.getItem(`${e}ChUnread`),X.value=S.getItem(`${e}ChDownloaded`),Y.value=S.getItem(`${e}ChBookmarked`),P.value=S.getItem(`${e}ChSource`),T.value=S.getItem(`${e}ChFetchDate`),R.value=S.getItem(`${e}ChDisplay`);const t=function(u){u==null?S.remove(`${e}ChUnread`):S.set(`${e}ChUnread`,u),W.value=u},d=function(u){U(`${e}ChDownloaded`,u),X.value=u},n=function(u){U(`${e}ChBookmarked`,u),Y.value=u},v=function(u){u!=null&&(U(`${e}ChSource`,u),S.remove(`${e}ChFetchDate`)),P.value=u},f=function(u){u!=null&&(U(`${e}ChFetchDate`,u),S.remove(`${e}ChSource`)),T.value=u},r=function(u){U(`${e}ChDisplay`,u,"source"),R.value=u};return P.value==null&&T.value==null&&(P.value=!1),R.value==null&&(R.value="source"),{Unread:W,Downloaded:X,Bookmarked:Y,Source:P,FetchDate:T,Display:R,setUnread:t,setDownloaded:d,setBookmarked:n,setSource:v,setFetchDate:f,setDisplay:r}}const Je=H({name:"LibraryTopBar",setup(){const e=se(),t=ne(parseInt(`${e.params.mangaID}`)),d=h(t);return{dialo:h(!1),tab:h("filter"),unread:h(t.Unread),downloaded:h(t.Downloaded),bookmarked:h(t.Bookmarked),Source:h(t.Source),FetchDate:h(t.FetchDate),filt:d,disp:h(t.Display)}},watch:{unread(){this.filt.setUnread(this.unread)},downloaded(){this.filt.setDownloaded(this.downloaded)},bookmarked(){this.filt.setBookmarked(this.bookmarked)},Source(){this.filt.setSource(this.Source),this.Source!=null&&(this.FetchDate=null)},FetchDate(){this.filt.setFetchDate(this.FetchDate),this.FetchDate!=null&&(this.Source=null)},disp(){this.filt.setDisplay(this.disp)}},methods:{aredefaults(){return this.unread==null&&this.downloaded==null&&this.bookmarked==null&&this.Source==!1&&this.FetchDate==null&&this.disp=="source"}}}),Ge={key:0},Ke={key:1},We={key:2};function Xe(e,t,d,n,v,f){return i(),$(Z,null,[l(I,{flat:"",class:"q-ml-sm",round:"","text-color":e.$q.dark.isActive?e.aredefaults()?"white":"orange":e.aredefaults()?"dark":"orange",icon:"filter_list",onClick:t[0]||(t[0]=r=>e.dialo=!0)},null,8,["text-color"]),l(Se,{modelValue:e.dialo,"onUpdate:modelValue":t[9]||(t[9]=r=>e.dialo=r)},{default:a(()=>[l(_e,null,{default:a(()=>[l(D,{class:"q-pa-none"},{default:a(()=>[l(Ce,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=r=>e.tab=r),class:"text-teal"},{default:a(()=>[l(K,{class:"q-px-xl",name:"filter",icon:"filter_list",label:"Filter"}),l(K,{class:"q-px-xl",name:"sort",icon:"sort",label:"Sort"}),l(K,{class:"q-px-xl",name:"display",icon:"display_settings",label:"Display"})]),_:1},8,["modelValue"])]),_:1}),e.tab=="filter"?(i(),$("div",Ge,[l(D,{class:"q-px-md q-pt-md q-pb-xs"},{default:a(()=>[l(L,{modelValue:e.unread,"onUpdate:modelValue":t[2]||(t[2]=r=>e.unread=r),style:{width:"100%"},"toggle-indeterminate":"",label:"Unread","checked-icon":"check_box","unchecked-icon":"r_disabled_by_default","indeterminate-icon":"check_box_outline_blank","keep-color":"",size:"lg",color:"primary"},null,8,["modelValue"])]),_:1}),l(D,{class:"q-px-md q-py-xs"},{default:a(()=>[l(L,{modelValue:e.downloaded,"onUpdate:modelValue":t[3]||(t[3]=r=>e.downloaded=r),style:{width:"100%"},"toggle-indeterminate":"",label:"Downloaded","checked-icon":"check_box","unchecked-icon":"r_disabled_by_default","indeterminate-icon":"check_box_outline_blank","keep-color":"",size:"lg",color:"primary"},null,8,["modelValue"])]),_:1}),l(D,{class:"q-px-md q-pt-xs q-pb-md"},{default:a(()=>[l(L,{modelValue:e.bookmarked,"onUpdate:modelValue":t[4]||(t[4]=r=>e.bookmarked=r),style:{width:"100%"},"toggle-indeterminate":"",label:"Bookmarked","checked-icon":"check_box","unchecked-icon":"r_disabled_by_default","indeterminate-icon":"check_box_outline_blank","keep-color":"",size:"lg",color:"primary"},null,8,["modelValue"])]),_:1})])):g("",!0),e.tab=="sort"?(i(),$("div",Ke,[l(D,{class:"q-px-md q-pt-md q-pb-xs"},{default:a(()=>[l(L,{modelValue:e.Source,"onUpdate:modelValue":t[5]||(t[5]=r=>e.Source=r),style:{width:"100%"},"checked-icon":"arrow_upward","unchecked-icon":"arrow_downward","indeterminate-icon":"null",color:"primary","keep-color":"",label:"By Source"},null,8,["modelValue"])]),_:1}),l(D,{class:"q-px-md q-pt-xs q-pb-md"},{default:a(()=>[l(L,{modelValue:e.FetchDate,"onUpdate:modelValue":t[6]||(t[6]=r=>e.FetchDate=r),style:{width:"100%"},"checked-icon":"arrow_upward","unchecked-icon":"arrow_downward","indeterminate-icon":"null",color:"primary","keep-color":"",label:"By Fetch date"},null,8,["modelValue"])]),_:1})])):g("",!0),e.tab=="display"?(i(),$("div",We,[l(D,{class:"q-px-md q-pt-md q-pb-xs"},{default:a(()=>[l(ae,{modelValue:e.disp,"onUpdate:modelValue":t[7]||(t[7]=r=>e.disp=r),val:"source",label:"By Source Title"},null,8,["modelValue"])]),_:1}),l(D,{class:"q-px-md q-pt-xs q-pb-md"},{default:a(()=>[l(ae,{modelValue:e.disp,"onUpdate:modelValue":t[8]||(t[8]=r=>e.disp=r),val:"chapter",label:"By Chapter Number"},null,8,["modelValue"])]),_:1})])):g("",!0)]),_:1})]),_:1},8,["modelValue"])],64)}var Ye=E(Je,[["render",Xe]]);const Ze=H({name:"MangaChapters",components:{filterr:Ye},setup(){const e=se(),t=h(ne(parseInt(`${e.params.mangaID}`))),d=h([]),n=h([]),v=qe(),f=h(v),r=h([]),u=h(0),o=v.eventsFromServer.value?JSON.parse(v.eventsFromServer.value):[];if(te(o)){const q=o.queue.filter(F=>F.mangaId==parseInt(`${e.params.mangaID}`));u.value=q.length,r.value=q}f.value.isConnected&&v.sendMsg("STATUS");const s=h([18,18]),Q=h(!1);return{chapters:d,chaptersfilt:n,filters:t,Emitter:f,downloadsnum:u,downloads:r,selectMode:h(!1),selected:h([]),fabPos:s,draggingFab:Q}},computed:{doFilt(){let e=this.chapters;return this.filters.Unread!=null&&(e=e.filter(t=>this.filters.Unread?!t.read:t.read)),this.filters.Downloaded!=null&&(e=e.filter(t=>this.filters.Downloaded?t.downloaded:!t.downloaded)),this.filters.Bookmarked!=null&&(e=e.filter(t=>this.filters.Bookmarked?t.bookmarked:!t.bookmarked)),e},doSrt(){let e=this.doFilt;return this.filters.Source!=null&&(e=e.sort((t,d)=>this.filters.Source?t.index>d.index?1:-1:t.index<d.index?1:-1)),this.filters.FetchDate!=null&&(e=e.sort((t,d)=>this.filters.FetchDate?t.fetchedAt>d.fetchedAt?-1:1:t.fetchedAt<d.fetchedAt?-1:1)),e},res(){const e=this.doSrt.filter(t=>!t.read);if(e.length){const t=e[e.length-1];return`/manga/${t.mangaId}/chapter/${t.index}`}else return`/manga/${this.$route.params.mangaID}/chapter/${1}`}},watch:{"Emitter.eventsFromServer"(e){const t=JSON.parse(e);if(te(t)){const d=t.queue.filter(n=>n.mangaId==parseInt(`${this.$route.params.mangaID}`));this.downloadsnum!=d.length&&this.getonline(),this.downloadsnum=d.length,this.downloads=d}}},created:async function(){this.$bus.on("updateManga",()=>{this.getonline("true")}),this.getonline()},methods:{moveFab(e){this.draggingFab=e.isFirst!==!0&&e.isFinal!==!0;let t=this.fabPos[0]-e.delta.x,d=this.fabPos[1]-e.delta.y;const n=this.$refs.conta.parentElement.getBoundingClientRect(),v=this.$refs.sticky.$el.getBoundingClientRect(),f=n.height,r=v.height;d>f-r&&(d=f-r),d<0&&(d=0);const u=n.width,o=v.width;t>u-o&&(t=u-o),t<0&&(t=0),this.fabPos=[t,d]},calcHeight(){const e=this.$refs.chapHead;if(e==null)return 0;let t=e.getBoundingClientRect().bottom;return t+=parseInt(window.getComputedStyle(e).getPropertyValue("margin-bottom")),t||0},async getonline(e="false",t=2){try{this.chapters=(await this.$api.get(`/api/v1/manga/${this.$route.params.mangaID}/chapters?onlineFetch=${e}`)).data}catch{t--,t>=0?(console.warn("fetch chapters failed in chapterList Retrying, retries left: "+t),this.getonline(e,t)):console.error("fetch chapters failed in chapterList")}},async download(e){await this.$api.get(`/api/v1/download/${this.$route.params.mangaID}/chapter/${e}`)},async dele(e){await this.$api.delete(`/api/v1/manga/${this.$route.params.mangaID}/chapter/${e}`),this.getonline()},async mpatch(e,t){await this.$api.patchForm(`/api/v1/manga/${this.$route.params.mangaID}/chapter/${e}`,t),this.getonline()},handleHold(e){this.selectMode=!0,this.selectthis(e)},selectthis(e){this.selected.includes(e)?this.selected=this.selected.filter(t=>t!==e):this.selected.push(e)},selectall(){this.selected.length?this.selected=[]:this.selected=this.doSrt.map(e=>e.id)},dl(e){this.$api.post("/api/v1/download/batch",{chapterIds:e})},read(e,t=!0,d="isRead"){this.$api.post(`/api/v1/manga/${this.$route.params.mangaID}/chapter/batch`,{chapterIds:e,change:{[d]:t}}).then(()=>this.getonline())}}}),xe={ref:"conta"},et={ref:"chapHead",class:"row justify-between items-center"},tt={class:"q-ma-md"},at={style:{"padding-right":"12px"}};function lt(e,t,d,n,v,f){const r=z("filterr"),u=z("router-link");return i(),$("div",xe,[C("div",et,[C("h4",tt,w(e.chapters.length)+" chapters",1),C("div",at,[e.selectMode?(i(),p(I,{key:0,flat:"",round:"",icon:"select_all",onClick:e.selectall},null,8,["onClick"])):g("",!0),l(I,{flat:"",round:"",icon:e.selectMode?"flip_to_front":"flip_to_back",onClick:t[0]||(t[0]=o=>e.selectMode=!e.selectMode)},null,8,["icon"]),l(I,{round:"",flat:"",icon:"more_vert"},{default:a(()=>[l(B,{anchor:"bottom end",self:"top right"},{default:a(()=>[l(M,{style:{width:"fit-content"}},{default:a(()=>[l(k,{clickable:""},{default:a(()=>[l(m,{side:""},{default:a(()=>[l(V,{name:"keyboard_arrow_left"})]),_:1}),l(m,null,{default:a(()=>[c("download")]),_:1}),l(B,{anchor:"top start",self:"top end",style:{"white-space":"nowrap"}},{default:a(()=>[l(M,null,{default:a(()=>[b((i(),p(k,{clickable:"",onClick:t[1]||(t[1]=o=>e.dl(e.doSrt.filter(s=>!s.downloaded).map(s=>s.id)))},{default:a(()=>[l(m,null,{default:a(()=>[c("Download All")]),_:1})]),_:1})),[[y]]),b((i(),p(k,{clickable:"",onClick:t[2]||(t[2]=o=>e.dl(e.doSrt.filter(s=>!s.downloaded).slice(-5).map(s=>s.id)))},{default:a(()=>[l(m,null,{default:a(()=>[c("Download Next 5")]),_:1})]),_:1})),[[y]]),e.selectMode?b((i(),p(k,{key:0,clickable:"",onClick:t[3]||(t[3]=o=>e.dl(e.selected))},{default:a(()=>[l(m,null,{default:a(()=>[c("Download Selected")]),_:1})]),_:1})),[[y]]):g("",!0)]),_:1})]),_:1})]),_:1}),l(k,{clickable:""},{default:a(()=>[l(m,{side:""},{default:a(()=>[l(V,{name:"keyboard_arrow_left"})]),_:1}),l(m,null,{default:a(()=>[c("Read")]),_:1}),l(B,{anchor:"top start",self:"top end",style:{"white-space":"nowrap"}},{default:a(()=>[l(M,null,{default:a(()=>[b((i(),p(k,{clickable:"",onClick:t[4]||(t[4]=o=>e.read(e.doSrt.filter(s=>!s.read).map(s=>s.id)))},{default:a(()=>[l(m,null,{default:a(()=>[c("Read All")]),_:1})]),_:1})),[[y]]),b((i(),p(k,{clickable:"",onClick:t[5]||(t[5]=o=>e.read(e.doSrt.filter(s=>!s.read).slice(-5).map(s=>s.id)))},{default:a(()=>[l(m,null,{default:a(()=>[c("Read Next 5")]),_:1})]),_:1})),[[y]]),e.selectMode?b((i(),p(k,{key:0,clickable:"",onClick:t[6]||(t[6]=o=>e.read(e.selected))},{default:a(()=>[l(m,null,{default:a(()=>[c("Read Selected")]),_:1})]),_:1})),[[y]]):g("",!0)]),_:1})]),_:1})]),_:1}),l(k,{clickable:""},{default:a(()=>[l(m,{side:""},{default:a(()=>[l(V,{name:"keyboard_arrow_left"})]),_:1}),l(m,null,{default:a(()=>[c("Unread")]),_:1}),l(B,{anchor:"top start",self:"top end",style:{"white-space":"nowrap"}},{default:a(()=>[l(M,null,{default:a(()=>[b((i(),p(k,{clickable:"",onClick:t[7]||(t[7]=o=>e.read(e.doSrt.filter(s=>!!s.read).map(s=>s.id),!1))},{default:a(()=>[l(m,null,{default:a(()=>[c("Unread All")]),_:1})]),_:1})),[[y]]),b((i(),p(k,{clickable:"",onClick:t[8]||(t[8]=o=>e.read(e.doSrt.filter(s=>!!s.read).slice(0,5).map(s=>s.id),!1))},{default:a(()=>[l(m,null,{default:a(()=>[c("Unread Last 5")]),_:1})]),_:1})),[[y]]),e.selectMode?b((i(),p(k,{key:0,clickable:"",onClick:t[9]||(t[9]=o=>e.read(e.selected,!1))},{default:a(()=>[l(m,null,{default:a(()=>[c("Unread Selected")]),_:1})]),_:1})),[[y]]):g("",!0)]),_:1})]),_:1})]),_:1}),l(k,{clickable:""},{default:a(()=>[l(m,{side:""},{default:a(()=>[l(V,{name:"keyboard_arrow_left"})]),_:1}),l(m,null,{default:a(()=>[c("Bookmark")]),_:1}),l(B,{anchor:"top start",self:"top end",style:{"white-space":"nowrap"}},{default:a(()=>[l(M,null,{default:a(()=>[b((i(),p(k,{clickable:"",onClick:t[10]||(t[10]=o=>e.read(e.doSrt.filter(s=>!s.bookmarked).map(s=>s.id),!0,"isBookmarked"))},{default:a(()=>[l(m,null,{default:a(()=>[c("Bookmark All")]),_:1})]),_:1})),[[y]]),b((i(),p(k,{clickable:"",onClick:t[11]||(t[11]=o=>e.read(e.doSrt.filter(s=>!s.bookmarked).slice(-5).map(s=>s.id),!0,"isBookmarked"))},{default:a(()=>[l(m,null,{default:a(()=>[c("Bookmark Next 5")]),_:1})]),_:1})),[[y]]),e.selectMode?b((i(),p(k,{key:0,clickable:"",onClick:t[12]||(t[12]=o=>e.read(e.selected,!0,"isBookmarked"))},{default:a(()=>[l(m,null,{default:a(()=>[c("Bookmark Selected")]),_:1})]),_:1})),[[y]]):g("",!0)]),_:1})]),_:1})]),_:1}),l(k,{clickable:""},{default:a(()=>[l(m,{side:""},{default:a(()=>[l(V,{name:"keyboard_arrow_left"})]),_:1}),l(m,null,{default:a(()=>[c("Unbookmark")]),_:1}),l(B,{anchor:"top start",self:"top end",style:{"white-space":"nowrap"}},{default:a(()=>[l(M,null,{default:a(()=>[b((i(),p(k,{clickable:"",onClick:t[13]||(t[13]=o=>e.read(e.doSrt.filter(s=>!!s.bookmarked).map(s=>s.id),!1,"isBookmarked"))},{default:a(()=>[l(m,null,{default:a(()=>[c("Unbookmark All")]),_:1})]),_:1})),[[y]]),b((i(),p(k,{clickable:"",onClick:t[14]||(t[14]=o=>e.read(e.doSrt.filter(s=>!!s.bookmarked).slice(0,5).map(s=>s.id),!1,"isBookmarked"))},{default:a(()=>[l(m,null,{default:a(()=>[c("Unbookmark Last 5")]),_:1})]),_:1})),[[y]]),e.selectMode?b((i(),p(k,{key:0,clickable:"",onClick:t[15]||(t[15]=o=>e.read(e.selected,!1,"isBookmarked"))},{default:a(()=>[l(m,null,{default:a(()=>[c("Unbookmark Selected")]),_:1})]),_:1})),[[y]]):g("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(r)])],512),l(ge,{class:N(["q-pr-xs",e.selectMode?" selectmode":""]),style:oe(e.$q.screen.sm||e.$q.screen.xs?"height: 50vh":"height: calc(100vh - "+e.calcHeight()+"px)")},{default:a(()=>[(i(!0),$(Z,null,le(e.doSrt,o=>(i(),p(ke,{key:o.index,style:{height:"58px"},class:""},{default:a(()=>[b((i(),p(k,{id:o.id,key:o.index,clickable:"",class:N(["q-ma-sm rounded-borders",(o.read?"text-grey":"")+" "+(e.selected.includes(o.id)&&e.selectMode?"selected":"")+" "+(e.$q.dark.isActive?"bg-dark":"bg-light")]),to:e.selectMode?void 0:"/manga/"+o.mangaId+"/chapter/"+o.index,onClick:s=>e.selectMode?e.selectthis(o.id):void 0},{default:a(()=>[o.bookmarked?(i(),p(m,{key:0,side:""},{default:a(()=>[l(J,null,{default:a(()=>[l(V,{color:"primary",name:"bookmark",size:"sm"})]),_:1})]),_:1})):g("",!0),l(m,null,{default:a(()=>[l(J,null,{default:a(()=>[c(w(e.filters.Display=="source"?o.name:"Chapter "+o.chapterNumber),1)]),_:2},1024),l(J,{caption:""},{default:a(()=>{var s,Q,q,F;return[c(w(o.scanlator)+" "+w(new Date(o.uploadDate).toLocaleDateString())+" "+w(o.downloaded?"\u2022 downloaded":"")+" "+w((s=e.downloads.find(_=>_.chapterIndex==o.index))!=null&&s.state?"\u2022 "+((Q=e.downloads.find(_=>_.chapterIndex==o.index))==null?void 0:Q.state):"")+" ",1),((q=e.downloads.find(_=>_.chapterIndex==o.index))==null?void 0:q.state)=="Downloading"?(i(),p(he,{key:0,value:(F=e.downloads.find(_=>_.chapterIndex==o.index))==null?void 0:F.progress},null,8,["value"])):g("",!0)]}),_:2},1024)]),_:2},1024),e.selectMode?(i(),p(V,{key:1,class:"flex-right self-center",size:"md",color:e.selected.includes(o.id)?"blue":"",name:e.selected.includes(o.id)?"check_box":"check_box_outline_blank",flat:""},null,8,["color","name"])):g("",!0),l(I,{round:"",flat:"",icon:"more_vert",class:"flex-right",onClick:t[16]||(t[16]=fe(()=>{},["prevent"]))},{default:a(()=>[l(B,null,{default:a(()=>[l(M,{style:{width:"fit-content"}},{default:a(()=>[o.downloaded?g("",!0):b((i(),p(k,{key:0,clickable:"",onClick:s=>e.download(o.index)},{default:a(()=>[l(m,null,{default:a(()=>[c("Download")]),_:1})]),_:2},1032,["onClick"])),[[y]]),o.downloaded?b((i(),p(k,{key:1,clickable:"",onClick:s=>e.dele(o.index)},{default:a(()=>[l(m,null,{default:a(()=>[c("Delete")]),_:1})]),_:2},1032,["onClick"])),[[y]]):g("",!0),b((i(),p(k,{clickable:"",onClick:s=>e.mpatch(o.index,{bookmarked:`${!o.bookmarked}`})},{default:a(()=>[l(m,null,{default:a(()=>[c(w(o.bookmarked?"Remove bookmark":"Bookmark"),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[y]]),b((i(),p(k,{clickable:"",onClick:s=>e.mpatch(o.index,{read:`${!o.read}`,lastPageRead:"1"})},{default:a(()=>[l(m,null,{default:a(()=>[c(w(o.read?"Mark as Unread":"Mark as Read"),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[y]]),b((i(),p(k,{clickable:"",onClick:s=>e.mpatch(o.index,{markPrevRead:"true"})},{default:a(()=>[l(m,{style:{"white-space":"nowrap"}},{default:a(()=>[c("Mark previous as Read")]),_:1})]),_:2},1032,["onClick"])),[[y]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["id","class","to","onClick"])),[[Oe,()=>e.handleHold(o.id),void 0,{mouse:!0}],[$e]])]),_:2},1024))),128))]),_:1},8,["style","class"]),l(ye,{ref:"sticky",position:"bottom-right",offset:e.fabPos},{default:a(()=>[l(u,{is:e.draggingFab?"span":"router-link",style:{"text-decoration":"none",color:"inherit"},to:e.res},{default:a(()=>[b((i(),p(I,{fab:"",class:"Fabconsist",label:"Resume",color:"blue",icon:"drag_indicator"},{default:a(()=>[l(be,null,{default:a(()=>[c(" draggable ")]),_:1})]),_:1})),[[we,e.moveFab,void 0,{prevent:!0,mouse:!0}]])]),_:1},8,["is","to"])]),_:1},8,["offset"])],512)}var ot=E(Ze,[["render",lt],["__scopeId","data-v-85dacada"]]);const st=H({name:"MangaPage",components:{mangaInfo:je,mangaChapters:ot},emits:["set-title"],setup(){return{manga:h({}),offset:h(Number())}},created:async function(){var e;this.$bus.on("updateManga",()=>{this.getonline("true")}),await this.getonline(),this.$emit("set-title",((e=this.manga)==null?void 0:e.title)||"manga"),new Date(this.manga.lastFetchedAt*1e3)<new Date(new Date().setDate(new Date().getDate()-1))&&this.$bus.emit("updateManga")},methods:{async getonline(e="false",t=3){try{this.manga=(await this.$api.get(`/api/v1/manga/${this.$route.params.mangaID}/?onlineFetch=${e}`)).data}catch{t>=1&&await this.getonline(e,t-1)}},myTweak(e){return this.offset=e,{height:e?`calc(100vh - ${e}px)`:"100vh"}}}});function nt(e,t,d,n,v,f){const r=z("mangaInfo"),u=z("mangaChapters");return i(),p(ie,{class:N(["nowrap",e.$q.screen.sm||e.$q.screen.xs?"col":"row"]),"style-fn":e.myTweak},{default:a(()=>[l(r,{manga:e.manga,offset:e.offset,class:"col-6",onInlib:e.getonline},null,8,["manga","offset","onInlib"]),l(u,{class:"col-6"})]),_:1},8,["class","style-fn"])}var xt=E(st,[["render",nt]]);export{xt as default};
