import{X as ve,r as q,c as j,w as ae,a7 as me,an as we,J as pe,I as he,o as ze,A as ge,h as A,g as ye}from"./index.be2a1a55.js";import{r as Z}from"./rtl.b51694b1.js";const M=1e3,Me=["start","center","end","start-force","center-force","end-force"],ce=Array.prototype.filter,Ee=window.getComputedStyle(document.body).overflowAnchor===void 0?ve:function(t,s){t!==null&&(cancelAnimationFrame(t._qOverflowAnimationFrame),t._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(t===null)return;const S=t.children||[];ce.call(S,g=>g.dataset&&g.dataset.qVsAnchor!==void 0).forEach(g=>{delete g.dataset.qVsAnchor});const u=S[s];u&&u.dataset&&(u.dataset.qVsAnchor="")}))};function T(t,s){return t+s}function Q(t,s,S,u,g,c,V,E){const h=t===window?document.scrollingElement||document.documentElement:t,y=g===!0?"offsetWidth":"offsetHeight",o={scrollStart:0,scrollViewSize:-V-E,scrollMaxSize:0,offsetStart:-V,offsetEnd:-E};if(g===!0?(t===window?(o.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o.scrollViewSize+=document.documentElement.clientWidth):(o.scrollStart=h.scrollLeft,o.scrollViewSize+=h.clientWidth),o.scrollMaxSize=h.scrollWidth,c===!0&&(o.scrollStart=(Z===!0?o.scrollMaxSize-o.scrollViewSize:0)-o.scrollStart)):(t===window?(o.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,o.scrollViewSize+=document.documentElement.clientHeight):(o.scrollStart=h.scrollTop,o.scrollViewSize+=h.clientHeight),o.scrollMaxSize=h.scrollHeight),S!==null)for(let v=S.previousElementSibling;v!==null;v=v.previousElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(o.offsetStart+=v[y]);if(u!==null)for(let v=u.nextElementSibling;v!==null;v=v.nextElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(o.offsetEnd+=v[y]);if(s!==t){const v=h.getBoundingClientRect(),w=s.getBoundingClientRect();g===!0?(o.offsetStart+=w.left-v.left,o.offsetEnd-=w.width):(o.offsetStart+=w.top-v.top,o.offsetEnd-=w.height),t!==window&&(o.offsetStart+=o.scrollStart),o.offsetEnd+=o.scrollMaxSize-o.offsetStart}return o}function ne(t,s,S,u){s==="end"&&(s=(t===window?document.body:t)[S===!0?"scrollWidth":"scrollHeight"]),t===window?S===!0?(u===!0&&(s=(Z===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):S===!0?(u===!0&&(s=(Z===!0?t.scrollWidth-t.offsetWidth:0)-s),t.scrollLeft=s):t.scrollTop=s}function W(t,s,S,u){if(S>=u)return 0;const g=s.length,c=Math.floor(S/M),V=Math.floor((u-1)/M)+1;let E=t.slice(c,V).reduce(T,0);return S%M!==0&&(E-=s.slice(c*M,S).reduce(T,0)),u%M!==0&&u!==g&&(E-=s.slice(u,V*M).reduce(T,0)),E}const be={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},xe={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...be};function Re({virtualScrollLength:t,getVirtualScrollTarget:s,getVirtualScrollEl:S,virtualScrollItemSizeComputed:u}){const g=ye(),{props:c,emit:V,proxy:E}=g,{$q:h}=E;let y,o,v,w=[],f;const x=q(0),k=q(0),F=q({}),O=q(null),_=q(null),H=q(null),m=q({from:0,to:0}),D=j(()=>c.tableColspan!==void 0?c.tableColspan:100);u===void 0&&(u=j(()=>c.virtualScrollItemSize));const I=j(()=>u.value+";"+c.virtualScrollHorizontal),se=j(()=>I.value+";"+c.virtualScrollSliceRatioBefore+";"+c.virtualScrollSliceRatioAfter);ae(se,()=>{B()}),ae(I,L);function L(){J(o,!0)}function ee(e){J(e===void 0?o:e)}function N(e,l){const r=s();if(r==null||r.nodeType===8)return;const d=Q(r,S(),O.value,_.value,c.virtualScrollHorizontal,h.lang.rtl,c.virtualScrollStickySizeStart,c.virtualScrollStickySizeEnd);v!==d.scrollViewSize&&B(d.scrollViewSize),C(r,d,Math.min(t.value-1,Math.max(0,parseInt(e,10)||0)),0,Me.indexOf(l)>-1?l:o>-1&&e>o?"end":"start")}function ue(){const e=s();if(e==null||e.nodeType===8)return;const l=Q(e,S(),O.value,_.value,c.virtualScrollHorizontal,h.lang.rtl,c.virtualScrollStickySizeStart,c.virtualScrollStickySizeEnd),r=t.value-1,d=l.scrollMaxSize-l.offsetStart-l.offsetEnd-k.value;if(y===l.scrollStart)return;if(l.scrollMaxSize<=0){C(e,l,0,0);return}v!==l.scrollViewSize&&B(l.scrollViewSize),Y(m.value.from);const p=Math.floor(l.scrollMaxSize-Math.max(l.scrollViewSize,l.offsetEnd)-Math.min(f[r],l.scrollViewSize/2));if(p>0&&Math.ceil(l.scrollStart)>=p){C(e,l,r,l.scrollMaxSize-l.offsetEnd-w.reduce(T,0));return}let n=0,a=l.scrollStart-l.offsetStart,z=a;if(a<=d&&a+l.scrollViewSize>=x.value)a-=x.value,n=m.value.from,z=a;else for(let i=0;a>=w[i]&&n<r;i++)a-=w[i],n+=M;for(;a>0&&n<r;)a-=f[n],a>-l.scrollViewSize?(n++,z=a):z=f[n]+a;C(e,l,n,z)}function C(e,l,r,d,p){const n=typeof p=="string"&&p.indexOf("-force")>-1,a=n===!0?p.replace("-force",""):p,z=a!==void 0?a:"start";let i=Math.max(0,r-F.value[z]),b=i+F.value.total;b>t.value&&(b=t.value,i=Math.max(0,b-F.value.total)),y=l.scrollStart;const P=i!==m.value.from||b!==m.value.to;if(P===!1&&a===void 0){te(r);return}const{activeElement:re}=document,R=H.value;P===!0&&R!==null&&R!==re&&R.contains(re)===!0&&(R.addEventListener("focusout",le),setTimeout(()=>{R!==null&&R.removeEventListener("focusout",le)})),Ee(R,r-i);const de=a!==void 0?f.slice(i,r).reduce(T,0):0;if(P===!0){const X=b>=m.value.from&&i<=m.value.to?m.value.to:b;m.value={from:i,to:X},x.value=W(w,f,0,i),k.value=W(w,f,b,t.value),requestAnimationFrame(()=>{m.value.to!==b&&y===l.scrollStart&&(m.value={from:m.value.from,to:b},k.value=W(w,f,b,t.value))})}requestAnimationFrame(()=>{if(y!==l.scrollStart)return;P===!0&&Y(i);const X=f.slice(i,r).reduce(T,0),$=X+l.offsetStart+x.value,ie=$+f[r];let G=$+d;if(a!==void 0){const Se=X-de,K=l.scrollStart+Se;G=n!==!0&&K<$&&ie<K+l.scrollViewSize?K:a==="end"?ie-l.scrollViewSize:$-(a==="start"?0:Math.round((l.scrollViewSize-f[r])/2))}y=G,ne(e,G,c.virtualScrollHorizontal,h.lang.rtl),te(r)})}function Y(e){const l=H.value;if(l){const r=ce.call(l.children,i=>i.classList&&i.classList.contains("q-virtual-scroll--skip")===!1),d=r.length,p=c.virtualScrollHorizontal===!0?i=>i.getBoundingClientRect().width:i=>i.offsetHeight;let n=e,a,z;for(let i=0;i<d;){for(a=p(r[i]),i++;i<d&&r[i].classList.contains("q-virtual-scroll--with-prev")===!0;)a+=p(r[i]),i++;z=a-f[n],z!==0&&(f[n]+=z,w[Math.floor(n/M)]+=z),n++}}}function le(){H.value!==null&&H.value!==void 0&&H.value.focus()}function J(e,l){const r=1*u.value;(l===!0||Array.isArray(f)===!1)&&(f=[]);const d=f.length;f.length=t.value;for(let n=t.value-1;n>=d;n--)f[n]=r;const p=Math.floor((t.value-1)/M);w=[];for(let n=0;n<=p;n++){let a=0;const z=Math.min((n+1)*M,t.value);for(let i=n*M;i<z;i++)a+=f[i];w.push(a)}o=-1,y=void 0,x.value=W(w,f,0,m.value.from),k.value=W(w,f,m.value.to,t.value),e>=0?(Y(m.value.from),ge(()=>{N(e)})):U()}function B(e){if(e===void 0&&typeof window!="undefined"){const a=s();a!=null&&a.nodeType!==8&&(e=Q(a,S(),O.value,_.value,c.virtualScrollHorizontal,h.lang.rtl,c.virtualScrollStickySizeStart,c.virtualScrollStickySizeEnd).scrollViewSize)}v=e;const l=parseFloat(c.virtualScrollSliceRatioBefore)||0,r=parseFloat(c.virtualScrollSliceRatioAfter)||0,d=1+l+r,p=e===void 0||e<=0?1:Math.ceil(e/u.value),n=Math.max(1,p,Math.ceil((c.virtualScrollSliceSize>0?c.virtualScrollSliceSize:10)/d));F.value={total:Math.ceil(n*d),start:Math.ceil(n*l),center:Math.ceil(n*(.5+l)),end:Math.ceil(n*(1+l)),view:p}}function fe(e,l){const r=c.virtualScrollHorizontal===!0?"width":"height",d={["--q-virtual-scroll-item-"+r]:u.value+"px"};return[e==="tbody"?A(e,{class:"q-virtual-scroll__padding",key:"before",ref:O},[A("tr",[A("td",{style:{[r]:`${x.value}px`,...d},colspan:D.value})])]):A(e,{class:"q-virtual-scroll__padding",key:"before",ref:O,style:{[r]:`${x.value}px`,...d}}),A(e,{class:"q-virtual-scroll__content",key:"content",ref:H,tabindex:-1},l.flat()),e==="tbody"?A(e,{class:"q-virtual-scroll__padding",key:"after",ref:_},[A("tr",[A("td",{style:{[r]:`${k.value}px`,...d},colspan:D.value})])]):A(e,{class:"q-virtual-scroll__padding",key:"after",ref:_,style:{[r]:`${k.value}px`,...d}})]}function te(e){o!==e&&(c.onVirtualScroll!==void 0&&V("virtualScroll",{index:e,from:m.value.from,to:m.value.to-1,direction:e<o?"decrease":"increase",ref:E}),o=e)}B();const U=me(ue,h.platform.is.ios===!0?120:35);we(()=>{B()});let oe=!1;return pe(()=>{oe=!0}),he(()=>{if(oe!==!0)return;const e=s();y!==void 0&&e!==void 0&&e!==null&&e.nodeType!==8?ne(e,y,c.virtualScrollHorizontal,h.lang.rtl):N(o)}),ze(()=>{U.cancel()}),Object.assign(E,{scrollTo:N,reset:L,refresh:ee}),{virtualScrollSliceRange:m,virtualScrollSliceSizeComputed:F,setVirtualScrollSize:B,onVirtualScrollEvt:U,localResetVirtualScroll:J,padVirtualScroll:fe,scrollTo:N,reset:L,refresh:ee}}export{Re as a,xe as u};
