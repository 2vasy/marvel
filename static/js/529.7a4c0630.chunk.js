"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[529],{122:(e,t,c)=>{c.d(t,{A:()=>i});const s=c.p+"static/media/error.42292aa12b6bc303ce99.gif";var a=c(579);const i=()=>(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:s,alt:"error.gif"})},150:(e,t,c)=>{c.r(t),c.d(t,{default:()=>m});var s=c(216),a=c(475),i=c(43),r=c(897),n=c(122),l=c(286),o=c(579);const u=e=>{let{comic:t}=e;const{title:c,description:s,pageCount:i,thumbnail:r,language:n,price:l}=t;return(0,o.jsxs)("div",{className:"single-comic",children:[(0,o.jsx)("img",{src:r,alt:c,className:"single-comic__img"}),(0,o.jsxs)("div",{className:"single-comic__info",children:[(0,o.jsx)("h2",{className:"single-comic__name",children:c}),(0,o.jsx)("p",{className:"single-comic__descr",children:s}),(0,o.jsx)("p",{className:"single-comic__descr",children:i}),(0,o.jsx)("p",{className:"single-comic__descr",children:n}),(0,o.jsx)("div",{className:"single-comic__price",children:l})]}),(0,o.jsx)(a.N_,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})},m=()=>{const{comicId:e}=(0,s.g)(),[t,c]=(0,i.useState)(null),{loading:a,error:m,getComic:d,clearError:h}=(0,r.A)();(0,i.useEffect)((()=>{g()}),[e]);const g=()=>{h(),d(e).then(p)},p=e=>{c(e)},b=m?(0,o.jsx)(n.A,{}):null,f=a?(0,o.jsx)(l.A,{}):null,v=a||m||!t?null:(0,o.jsx)(u,{comic:t});return(0,o.jsxs)(o.Fragment,{children:[b,f,v]})}},897:(e,t,c)=>{c.d(t,{A:()=>a});var s=c(43);const a=()=>{const{loading:e,request:t,error:c,clearError:a}=(()=>{const[e,t]=(0,s.useState)(!1),[c,a]=(0,s.useState)(null);return{loading:e,request:(0,s.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t(!0);try{const a=await fetch(e,{method:c,body:s,headers:i});if(!a.ok)throw new Error(`Could not fetch ${e}, status ${a.status}`);const r=await a.json();return t(!1),r}catch(r){throw t(!1),a(r.massage),r}}),[]),error:c,clearError:(0,s.useCallback)((()=>a(null)),[])}})(),i="https://gateway.marvel.com:443/v1/public/",r="apikey=9dd034565ccd5274cc3af31734f6373c",n=e=>({id:e.id,name:e.name,description:e.description?`${e.description.slice(0,210)}...`:"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?`${e.pageCount} p.`:"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?`${e.prices[0].price}$`:"not available"}};return{loading:e,error:c,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await t(`${i}characters?limit=9&offset=${e}&${r}`)).data.results.map(n)},getCharacter:async e=>{const c=await t(`${i}characters/${e}?${r}`);return n(c.data.results[0])},clearError:a,getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await t(`${i}comics?orderBy=issueNumber&limit=8&offset=${e}&${r}`)).data.results.map(l)},getComic:async e=>{const c=await t(`${i}comics/${e}?${r}`);return l(c.data.results[0])}}}}}]);
//# sourceMappingURL=529.7a4c0630.chunk.js.map