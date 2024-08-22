import{_ as y}from"./Button.DO4igo6Y.js";import{k as f,r as k,b as d,c as g,e as a,t as u,g as b,n,H as r,D as h,f as s,S as v}from"./entry.DwW0RIUD.js";import"./Icon.DSaDCUIb.js";const m={class:"text-sm font-semibold"},w={class:"text-gray-500 text-sm"},p={class:"mt-2 border dark:border-white/10 rounded-lg shadow-sm overflow-hidden"},x={class:"p-2 flex items-center gap-2 border-b dark:border-white/10"},C={class:"flex items-center w-full"},_={key:0,class:"bg-gray-100 dark:bg-gray-900 overflow-hidden"},$={__name:"LabCard",props:{title:String,description:String,showUsageTab:{type:Boolean,default:!0},showCreditTab:{type:Boolean,default:!1}},setup(o){const e=k("preview");return(l,t)=>{const i=y;return d(),g("div",null,[a("h2",m,u(o.title),1),a("p",w,u(o.description),1),a("div",p,[a("div",x,[a("div",C,[b(i,{onClick:t[0]||(t[0]=c=>e.value="preview"),label:"Preview",variant:"soft",color:"white",size:"xs",class:n(["relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300",{"active-tab":r(e)==="preview"}])},null,8,["class"]),b(i,{onClick:t[1]||(t[1]=c=>e.value="code"),label:"Code",variant:"soft",color:"white",size:"xs",class:n(["relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300",{"active-tab":r(e)==="code"}])},null,8,["class"]),o.showUsageTab?(d(),h(i,{key:0,onClick:t[2]||(t[2]=c=>e.value="usage"),label:"Usage",variant:"soft",color:"white",size:"xs",class:n(["relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300",{"active-tab":r(e)==="usage"}])},null,8,["class"])):s("",!0),o.showCreditTab?(d(),h(i,{key:1,onClick:t[3]||(t[3]=c=>e.value="credit"),label:"Credits",variant:"soft",color:"white",size:"xs",class:n(["relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300",{"active-tab":r(e)==="credit"}])},null,8,["class"])):s("",!0)])]),a("div",null,[r(e)==="preview"?(d(),g("div",_,[v(l.$slots,"preview",{},void 0,!0)])):s("",!0),r(e)==="code"?v(l.$slots,"codebase",{key:1},void 0,!0):s("",!0),r(e)==="usage"?v(l.$slots,"usage",{key:2},void 0,!0):s("",!0),r(e)==="credit"?v(l.$slots,"credit",{key:3},void 0,!0):s("",!0)])])])}}},T=f($,[["__scopeId","data-v-46c49546"]]);export{T as default};
