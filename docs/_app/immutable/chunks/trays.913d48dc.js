import{A as o}from"./constants.1053d11f.js";const h=async(a,t,s,c)=>{const r=[];try{const e=await fetch(`${o}/trays?sort=${a}&order=${t}&page=${s}&size=${c}`).then(n=>n.json());for await(const n of e.items){const y=await i(n.id);r.push(y)}return{trays:r,pages:e.pages}}catch(e){return console.log("Error trayList: "+e.message),{trays:[],pages:0}}},i=async a=>{try{return await fetch(`${o}/trays/${a}`).then(s=>s.json())}catch(t){return console.log("Error getting tray by id: "+t.message),{}}},p=async a=>{try{if(!a)return[];const t=await fetch(`${o}/search/trays?name=${a}`).then(r=>r.json());return t?t.slice(0,5).map(r=>({id:r.id,name:r.name,category:"trays"})):[]}catch(t){return console.log("Error search tray: "+t.message),[]}};export{i as a,h as g,p as s};