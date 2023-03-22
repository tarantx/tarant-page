"use strict";(self.webpackChunktarant_page=self.webpackChunktarant_page||[]).push([[9671],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:e},p),{},{components:r})):a.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:0},i="Welcome",l={unversionedId:"intro",id:"intro",title:"Welcome",description:"Welcome to the Tarant user guide! This guide shows you how to get started on this actor model framework.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/tarantx/tarant-page/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/docs/quick-start"}},s={},c=[{value:"What is Tarant?",id:"what-is-tarant",level:2},{value:"Is Tarant for me?",id:"is-tarant-for-me",level:2},{value:"Ready to get started?",id:"ready-to-get-started",level:2}],p={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome"},"Welcome"),(0,n.kt)("p",null,"Welcome to the Tarant user guide! This guide shows you how to get started on this actor model framework."),(0,n.kt)("h2",{id:"what-is-tarant"},"What is Tarant?"),(0,n.kt)("p",null,"Tarant is an extensible full-stack actor model that allows you to build aplications focusing in the bussiness logic and allowing the platform to abstract other concepts that are common to all applications (ex. serialization, rendering, networking) through our modules."),(0,n.kt)("h2",{id:"is-tarant-for-me"},"Is Tarant for me?"),(0,n.kt)("p",null,"If you are thinking on creating applications you should give it a try. Tarant is a generic framework, it can be used for any type of applications so it's very likely\nyou can get benefits from the actor model. Types of applications written with tarant:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Web Servers"),(0,n.kt)("li",{parentName:"ul"},"Web Applications"),(0,n.kt)("li",{parentName:"ul"},"Control Planes"),(0,n.kt)("li",{parentName:"ul"},"Embedded Agents")),(0,n.kt)("h2",{id:"ready-to-get-started"},"Ready to get started?"),(0,n.kt)("p",null,"Find out how to start in 5 minutes with our ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick-start"},"quick start guide"),". You can also take a look at ",(0,n.kt)("a",{parentName:"p",href:"/docs/category/examples"},"our examples"),", visit the ",(0,n.kt)("a",{parentName:"p",href:"https://www.tarant.dev"},"page")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tarantx"},"our repositories")," and start exploring."))}d.isMDXComponent=!0}}]);