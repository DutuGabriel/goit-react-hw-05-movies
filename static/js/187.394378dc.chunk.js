"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[187],{187:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});var t=s(462),i=s(43),n=s(505);const c={details:"MovieDetails_details__TGlfg"};var r=s(579);const o=()=>{var e,a;const{movieId:s}=(0,t.g)(),o=null!==(e=null===(a=(0,t.zy)().state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/movies",[l,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{(0,n.LF)(s).then(d)}),[s]),l?(0,r.jsxs)("div",{className:c.details,children:[(0,r.jsx)(t.N_,{to:o,children:"\u2190 Back"}),(0,r.jsx)("h2",{children:l.title}),(0,r.jsx)("p",{children:l.overview}),(0,r.jsxs)("p",{children:["Genres: ",l.genres.map((e=>e.name)).join(", ")]}),(0,r.jsx)("h3",{children:"Additional Information"}),(0,r.jsxs)("ul",{className:c.ul,children:[(0,r.jsx)("li",{className:c.li,children:(0,r.jsx)(t.N_,{to:"cast",state:{from:o},children:"Cast"})}),(0,r.jsx)("li",{className:c.li,children:(0,r.jsx)(t.N_,{to:"reviews",state:{from:o},children:"Reviews"})})]}),(0,r.jsx)(t.sv,{})]}):(0,r.jsx)("div",{children:"Loading..."})}},505:(e,a,s)=>{s.d(a,{LF:()=>r,RZ:()=>n,UM:()=>l,dk:()=>o,q8:()=>c});const t="4adb751b4507747724c11fe310ace224",i="https://api.themoviedb.org/3",n=async()=>{const e=await fetch(`${i}/trending/movie/day?api_key=${t}`);return await e.json()},c=async e=>{const a=await fetch(`${i}/search/movie?query=${e}&api_key=${t}`);return await a.json()},r=async e=>{const a=await fetch(`${i}/movie/${e}?api_key=${t}`);return await a.json()},o=async e=>{const a=await fetch(`${i}/movie/${e}/credits?api_key=${t}`);return await a.json()},l=async e=>{const a=await fetch(`${i}/movie/${e}/reviews?api_key=${t}`);return await a.json()}}}]);
//# sourceMappingURL=187.394378dc.chunk.js.map