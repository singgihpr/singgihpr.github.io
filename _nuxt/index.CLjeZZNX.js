import{_ as g}from"./Header.CyhCpz-3.js";import{b as s,D as h,w as y,e as t,B as f,t as n,C as x,E as b,c,g as l,F as k,G as A,H as w}from"./entry.DwW0RIUD.js";import{u as C}from"./index.BH-pJaAi.js";import{u as D}from"./asyncData.D2iYM_g4.js";import{q as B}from"./query.uQgXO4Mk.js";import"./preview.Do0STbAY.js";const N={class:"relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5",datetime:"2022-09-05"},S=t("span",{class:"absolute inset-y-0 left-0 flex items-center","aria-hidden":"true"},[t("span",{class:"h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"})],-1),$={class:"text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"},q={class:"relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400"},v={__name:"ArticleCard",props:{article:{type:Object,required:!0}},setup(a){const e=r=>new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return(r,o)=>{const i=x;return s(),h(i,{to:a.article._path,class:"group"},{default:y(()=>[t("article",null,[t("time",N,[S,f(" "+n(e(a.article.published)),1)]),t("h2",$,n(a.article.title),1),t("p",q,n(a.article.description),1)])]),_:1},8,["to"])}}},z={class:"min-h-screen"},F={class:"space-y-16"},d="All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.",O={__name:"index",async setup(a){let e,r;C({title:"Articles | Fayaz Ahmed",description:d});const{data:o}=([e,r]=b(()=>D("all-articles",()=>B("/articles").sort({published:-1}).find())),e=await e,r(),e);return(i,L)=>{const m=g,_=v;return s(),c("main",z,[l(m,{class:"mb-16",title:"Articles",description:d}),t("ul",F,[(s(!0),c(k,null,A(w(o),(u,p)=>(s(),c("li",{key:p},[l(_,{article:u},null,8,["article"])]))),128))])])}}};export{O as default};
