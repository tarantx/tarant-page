"use strict";(self.webpackChunktarant_page=self.webpackChunktarant_page||[]).push([[9878],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3339:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7},i="Tarant React",c={unversionedId:"Modules/tarant-react",id:"Modules/tarant-react",title:"Tarant React",description:"Provide the capabilities to actors to be render using the react framework.",source:"@site/docs/Modules/tarant-react.md",sourceDirName:"Modules",slug:"/Modules/tarant-react",permalink:"/docs/Modules/tarant-react",draft:!1,editUrl:"https://github.com/tarantx/tarant-page/tree/main/docs/Modules/tarant-react.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Tarant Sync Router Express",permalink:"/docs/Modules/tarant-sync-router-express"},next:{title:"Tarant Vue",permalink:"/docs/Modules/tarant-vue"}},l={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],p={toc:s},u="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tarant-react"},"Tarant React"),(0,a.kt)("p",null,"Provide the capabilities to actors to be render using the react framework."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"add it to your project using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install tarant-react --save")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add tarant-react")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Extend the react actor with a template and the properties to bind to the id of the actor will relate to the html component id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport { decorator } from "../../utils/decorator"\nimport { AppActor } from "../AppActor"\n\nexport class ReactDecorator extends decorator<AppActor> {\n    constructor(actor: AppActor) {\n        super(actor)\n    }\n\n    render() {\n        return (<div id="app"><button onClick={(this.actor as any).self.addOne}>{this.actor.counter}</button></div>)\n    }\n\n}\n')),(0,a.kt)("p",null,"Initialize the actor system with the provided materializer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { ActorSystem, ActorSystemConfigurationBuilder } from 'tarant'\nimport AppActor from './Actor/AppActor';\nimport { ReactRenderer } from 'tarant-react';\n\nwindow.onload = () => {\n  const system = ActorSystem.for(ActorSystemConfigurationBuilder.define()\n  .withMaterializer(new reactRenderer())\n  .done())  \n  system.actorOf(AppActor)\n}\n")))}d.isMDXComponent=!0}}]);