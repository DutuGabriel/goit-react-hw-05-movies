"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[167],{167:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(43),i=a(462),n=a(505);const c="Home_home__CMw1J",r="Home_movieList__Sm4J-";var o=a(579);const h=()=>{const[e,t]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(0,n.RZ)().then((e=>t(e.results)))}),[]),(0,o.jsxs)("div",{className:c,children:[(0,o.jsx)("h1",{children:"Trending Today"}),(0,o.jsx)("ul",{className:r,children:e.map((e=>{let{id:t,title:a}=e;return(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:`/movies/${t}`,children:a})},t)}))})]})}},505:(e,t,a)=>{a.d(t,{LF:()=>r,RZ:()=>n,UM:()=>h,dk:()=>o,q8:()=>c});const s="4adb751b4507747724c11fe310ace224",i="https://api.themoviedb.org/3",n=async()=>{const e=await fetch(`${i}/trending/movie/day?api_key=${s}`);return await e.json()},c=async e=>{const t=await fetch(`${i}/search/movie?query=${e}&api_key=${s}`);return await t.json()},r=async e=>{const t=await fetch(`${i}/movie/${e}?api_key=${s}`);return await t.json()},o=async e=>{const t=await fetch(`${i}/movie/${e}/credits?api_key=${s}`);return await t.json()},h=async e=>{const t=await fetch(`${i}/movie/${e}/reviews?api_key=${s}`);return await t.json()}}}]);
//# sourceMappingURL=167.0d6b7187.chunk.js.map