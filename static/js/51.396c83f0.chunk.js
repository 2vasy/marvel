"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[51],{122:(e,s,a)=>{a.d(s,{A:()=>n});const t=a.p+"static/media/error.42292aa12b6bc303ce99.gif";var r=a(579);const n=()=>(0,r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:t,alt:"error.gif"})},856:(e,s,a)=>{a.r(s),a.d(s,{default:()=>b});var t=a(43),r=a(897),n=a(122),c=a(286);const i=a.p+"static/media/mjolnir.61f31e1809f12183a524.png";var l=a(579);const o=e=>{let{char:s}=e;const{name:a,description:t,thumbnail:r,homepage:n,wiki:c}=s;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:a}),(0,l.jsx)("p",{className:"randomchar__descr",children:t}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:n,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:c,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=()=>{const[e,s]=(0,t.useState)(null),{loading:a,error:d,getCharacter:h,clearError:m}=(0,r.A)();(0,t.useEffect)((()=>{_();const e=setInterval(_,6e4);return()=>{clearInterval(e)}}),[]);const u=e=>{s(e)},_=()=>{m();const e=Math.floor(400*Math.random()+1011e3);h(e).then(u)},j=d?(0,l.jsx)(n.A,{}):null,x=a?(0,l.jsx)(c.A,{}):null,p=a||d||!e?null:(0,l.jsx)(o,{char:e});return(0,l.jsxs)("div",{className:"randomchar",children:[j,x,p,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{onClick:_,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=e=>{const[s,a]=(0,t.useState)([]),[i,o]=(0,t.useState)(!1),[d,h]=(0,t.useState)(210),[m,u]=(0,t.useState)(!1),{loading:_,error:j,getAllCharacters:x}=(0,r.A)();(0,t.useEffect)((()=>{p(d,!0)}),[]);const p=(e,s)=>{o(!s),x(e).then(b)},b=e=>{let s=!1;e.length<9&&(s=!0),a((s=>[...s,...e])),o((e=>!1)),h((e=>e+9)),u((e=>s))},g=(0,t.useRef)([]),v=e=>{g.current.forEach((e=>e.classList.remove("char__item_selected"))),g.current[e].classList.add("char__item_selected"),g.current[e].focus()};const N=function(s){const a=s.map(((s,a)=>{let t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s.thumbnail&&(t={objectFit:"unset"}),(0,l.jsxs)("li",{className:"char__item",tabIndex:0,ref:e=>g.current[a]=e,onClick:()=>{e.onCharSelected(s.id),v(a)},onKeyPress:t=>{" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(s.id),v(a))},children:[(0,l.jsx)("img",{src:s.thumbnail,alt:s.name,style:t}),(0,l.jsx)("div",{className:"char__name",children:s.name})]},s.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:a})}(s),f=j?(0,l.jsx)(n.A,{}):null,k=_&&!i?(0,l.jsx)(c.A,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[f,k,N,(0,l.jsx)("button",{className:"button button__main button__long",disabled:i,style:{display:m?"none":"block"},onClick:()=>p(d),children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},m=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]}),u=e=>{let{char:s}=e;const{name:a,description:t,thumbnail:r,homepage:n,wiki:c,comics:i}=s;let o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:r,alt:a,style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:a}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:n,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:c,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:t}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is comics with this character",i.map(((e,s)=>{if(!(s>9))return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},s)}))]})]})},_=e=>{const[s,a]=(0,t.useState)(null),{loading:i,error:o,getCharacter:d,clearError:h}=(0,r.A)();(0,t.useEffect)((()=>{_()}),[e.charId]);const _=()=>{const{charId:s}=e;s&&(h(),d(s).then(j))},j=e=>{a(e)},x=s||i||o?null:(0,l.jsx)(m,{}),p=o?(0,l.jsx)(n.A,{}):null,b=i?(0,l.jsx)(c.A,{}):null,g=i||o||!s?null:(0,l.jsx)(u,{char:s});return(0,l.jsxs)("div",{className:"char__info",children:[x,p,b,g]})};class j extends t.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,s){console.log(e,s),this.setState({error:!0})}render(){return this.state.error?(0,l.jsx)(n.A,{}):this.props.children}}const x=j,p=a.p+"static/media/vision.067d4ae1936d64a577ce.png",b=()=>{const[e,s]=(0,t.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{children:(0,l.jsx)(d,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(x,{children:(0,l.jsx)(h,{onCharSelected:e=>{s(e)}})}),(0,l.jsx)(x,{children:(0,l.jsx)(_,{charId:e})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:p,alt:"vision"})]})}},897:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(43);const r=()=>{const{loading:e,request:s,error:a,clearError:r}=(()=>{const[e,s]=(0,t.useState)(!1),[a,r]=(0,t.useState)(null);return{loading:e,request:(0,t.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};s(!0);try{const r=await fetch(e,{method:a,body:t,headers:n});if(!r.ok)throw new Error(`Could not fetch ${e}, status ${r.status}`);const c=await r.json();return s(!1),c}catch(c){throw s(!1),r(c.massage),c}}),[]),error:a,clearError:(0,t.useCallback)((()=>r(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",c="apikey=9dd034565ccd5274cc3af31734f6373c",i=e=>({id:e.id,name:e.name,description:e.description?`${e.description.slice(0,210)}...`:"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var s;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?`${e.pageCount} p.`:"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(s=e.textObjects[0])||void 0===s?void 0:s.language)||"en-us",price:e.prices[0].price?`${e.prices[0].price}$`:"not available"}};return{loading:e,error:a,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await s(`${n}characters?limit=9&offset=${e}&${c}`)).data.results.map(i)},getCharacter:async e=>{const a=await s(`${n}characters/${e}?${c}`);return i(a.data.results[0])},clearError:r,getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await s(`${n}comics?orderBy=issueNumber&limit=8&offset=${e}&${c}`)).data.results.map(l)},getComic:async e=>{const a=await s(`${n}comics/${e}?${c}`);return l(a.data.results[0])}}}}}]);
//# sourceMappingURL=51.396c83f0.chunk.js.map