"use strict";(self.webpackChunktarant_page=self.webpackChunktarant_page||[]).push([[6421],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(r),g=a,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(d,i(i({ref:e},s),{},{components:r})):n.createElement(d,i({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2441:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={authors:"kanekotic",organization_id:6881,title:"Implementing a simple actor in Tarant",tags:["opensource","showdev","coding","tutorial"],description:"Intro video about the fullstack actor model",draft:!1,published:new Date("2023-04-24T18:56:18.830Z"),cover_image:"https://raw.githubusercontent.com/tarantx/tarant-page/main/static/img/tarant-intro.png",series:"Tarant Tuorials"},i=void 0,l={permalink:"/blog/2023/04/24/tarant-fullstack-actor-system-in-5-minutes",editUrl:"https://github.com/tarantx/tarant-page/tree/main/blog/2023-04-24-tarant-fullstack-actor-system-in-5-minutes.md",source:"@site/blog/2023-04-24-tarant-fullstack-actor-system-in-5-minutes.md",title:"Implementing a simple actor in Tarant",description:"Intro video about the fullstack actor model",date:"2023-04-24T00:00:00.000Z",formattedDate:"April 24, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"showdev",permalink:"/blog/tags/showdev"},{label:"coding",permalink:"/blog/tags/coding"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:.3,hasTruncateMarker:!1,authors:[{name:"kanekotic",title:"Co-Founder of Tarant",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{authors:"kanekotic",organization_id:6881,title:"Implementing a simple actor in Tarant",tags:["opensource","showdev","coding","tutorial"],description:"Intro video about the fullstack actor model",draft:!1,published:"2023-04-24T18:56:18.830Z",cover_image:"https://raw.githubusercontent.com/tarantx/tarant-page/main/static/img/tarant-intro.png",series:"Tarant Tuorials"},nextItem:{title:"Tarant Fullstack Actor System in 5 minutes",permalink:"/blog/2023/04/24/video-intro"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/tarantx/tarant-page/main/static/img/ping-actor.png",alt:null})),(0,a.kt)("p",null,"Do you want to see how to implement simple actor in Tarant and start focusing on your domain logic? What our next video."),(0,a.kt)("p",null,"If that is to long here is a snippet image as TL;DR;"),(0,a.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/z-x0phbcOk8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("p",null,"{% embed ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/z-x0phbcOk8"},"https://youtu.be/z-x0phbcOk8")," %}"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/z-x0phbcOk8"},"\ufeffWatch the video on Youtube")))}m.isMDXComponent=!0}}]);