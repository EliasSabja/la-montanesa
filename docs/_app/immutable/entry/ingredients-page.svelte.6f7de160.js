import{S as U,i as W,s as X,w as Y,R as Z,k,q as x,a as m,y as E,l as P,m as j,r as ee,h as O,c as u,z as q,n as te,p as ne,b as se,C as o,A as C,g as h,d as S,f as re,T as ae,B as F,o as ie,v as oe}from"../chunks/index.bcb8faf1.js";import"../chunks/Row.df97b085.js";import{S as ge,P as J,a as le}from"../chunks/Sort.e6f81041.js";import{a as fe}from"../chunks/ingredients.f3bc5d02.js";import{I as pe}from"../chunks/IngredientList.ed4e189e.js";function K(i){let e,s;return e=new le({props:{type:"border",color:"dark"}}),{c(){E(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,c){C(e,r,c),s=!0},i(r){s||(h(e.$$.fragment,r),s=!0)},o(r){S(e.$$.fragment,r),s=!1},d(r){F(e,r)}}}function me(i){let e,s,r,c,d,b,l,w,_,R,f,A,D,g,I,z,p,H,L,N,T,$,M;l=new ge({props:{sort:i[4],order:i[5],setSort:i[7],setOrder:i[8]}}),f=new J({props:{page:i[0],pages:i[1],setPage:i[6]}});let a=i[3]&&K();function Q(n){i[9](n)}let v={};return i[2]!==void 0&&(v.ingredients=i[2]),p=new pe({props:v}),Y.push(()=>Z(p,"ingredients",Q)),$=new J({props:{page:i[0],pages:i[1],setPage:i[6]}}),{c(){e=k("main"),s=k("h2"),r=x("Ingredientes disponibles"),c=m(),d=k("br"),b=m(),E(l.$$.fragment),w=m(),_=k("br"),R=m(),E(f.$$.fragment),A=m(),D=k("br"),g=m(),I=k("div"),a&&a.c(),z=m(),E(p.$$.fragment),L=m(),N=k("br"),T=m(),E($.$$.fragment),this.h()},l(n){e=P(n,"MAIN",{});var t=j(e);s=P(t,"H2",{class:!0});var y=j(s);r=ee(y,"Ingredientes disponibles"),y.forEach(O),c=u(t),d=P(t,"BR",{}),b=u(t),q(l.$$.fragment,t),w=u(t),_=P(t,"BR",{}),R=u(t),q(f.$$.fragment,t),A=u(t),D=P(t,"BR",{}),g=u(t),I=P(t,"DIV",{style:!0});var B=j(I);a&&a.l(B),B.forEach(O),z=u(t),q(p.$$.fragment,t),L=u(t),N=P(t,"BR",{}),T=u(t),q($.$$.fragment,t),t.forEach(O),this.h()},h(){te(s,"class","text-center"),ne(I,"text-align","center")},m(n,t){se(n,e,t),o(e,s),o(s,r),o(e,c),o(e,d),o(e,b),C(l,e,null),o(e,w),o(e,_),o(e,R),C(f,e,null),o(e,A),o(e,D),o(e,g),o(e,I),a&&a.m(I,null),o(e,z),C(p,e,null),o(e,L),o(e,N),o(e,T),C($,e,null),M=!0},p(n,[t]){const y={};t&16&&(y.sort=n[4]),t&32&&(y.order=n[5]),l.$set(y);const B={};t&1&&(B.page=n[0]),t&2&&(B.pages=n[1]),f.$set(B),n[3]?a?t&8&&h(a,1):(a=K(),a.c(),h(a,1),a.m(I,null)):a&&(oe(),S(a,1,1,()=>{a=null}),re());const G={};!H&&t&4&&(H=!0,G.ingredients=n[2],ae(()=>H=!1)),p.$set(G);const V={};t&1&&(V.page=n[0]),t&2&&(V.pages=n[1]),$.$set(V)},i(n){M||(h(l.$$.fragment,n),h(f.$$.fragment,n),h(a),h(p.$$.fragment,n),h($.$$.fragment,n),M=!0)},o(n){S(l.$$.fragment,n),S(f.$$.fragment,n),S(a),S(p.$$.fragment,n),S($.$$.fragment,n),M=!1},d(n){n&&O(e),F(l),F(f),a&&a.d(),F(p),F($)}}}function ue(i,e,s){let r=1,c=1,d=[],b=!1,l="name",w="asc";ie(async()=>{await _()});async function _(){s(3,b=!0);const g=await fe(l,w,r,12);g&&(s(2,d=g.ingredients),s(1,c=g.pages),s(3,b=!1))}async function R(g){s(0,r=g),await _()}async function f(g){s(4,l=g),s(0,r=1),await _()}async function A(g){s(5,w=g),s(0,r=1),await _()}function D(g){d=g,s(2,d)}return[r,c,d,b,l,w,R,f,A,D]}class be extends U{constructor(e){super(),W(this,e,ue,me,X,{})}}export{be as default};
