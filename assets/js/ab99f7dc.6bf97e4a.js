"use strict";(self.webpackChunktarant_page=self.webpackChunktarant_page||[]).push([[6995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},s="Tarant Sync Router Express",i={unversionedId:"Modules/tarant-sync-router-express",id:"Modules/tarant-sync-router-express",title:"Tarant Sync Router Express",description:"remote-sync server for bindings clients using routers or tarant-sync-router-express",source:"@site/docs/Modules/tarant-sync-router-express.md",sourceDirName:"Modules",slug:"/Modules/tarant-sync-router-express",permalink:"/docs/Modules/tarant-sync-router-express",draft:!1,editUrl:"https://github.com/tarantx/tarant-page/tree/main/docs/Modules/tarant-sync-router-express.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Tarant Sync Client",permalink:"/docs/Modules/tarant-sync-client"},next:{title:"Tarant React",permalink:"/docs/Modules/tarant-react"}},p={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"confiuration options",id:"confiuration-options",level:2},{value:'Created my free logo at <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a>',id:"created-my-free-logo-at-logomakrcom",level:5}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tarant-sync-router-express"},"Tarant Sync Router Express"),(0,o.kt)("p",null,"remote-sync server for bindings clients using routers or ",(0,o.kt)("inlineCode",{parentName:"p"},"tarant-sync-router-express")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"add it to your project using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install tarant-sync-router-express --save")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add tarant-sync-router-express")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"initialize your controllers/routers by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"SyncController")," with the actor system and the wanted configuration. Adding them to your express app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import SyncController from "tarant-sync-router-express"\nimport { ActorSystem, ActorSystemConfigurationBuilder } from \'tarant\'\nimport AppActor from \'../AppActor\'\n\nconst app: express.Application = express()\nconst port: number = 3002\nconst config : any  = {\n      paths: {\n          pull: "/pull", \n          push: "/push", \n      },\n      actorTypes: { AppActor }\n}\n\nconst system : any = ActorSystem.for(ActorSystemConfigurationBuilder.define().done())  \n\napp.use(SyncController(system, config))\n\napp.listen(port, () => {\n    console.log(`Listening at http://localhost:${port}/`)\n})\n')),(0,o.kt)("p",null,"your actors will require to implement IUpdatable (UpdateFrom) and IExportable (toJson)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Actor } from "tarant";\nimport { IUpdatable, IExportable } from "tarant-sync-router-express"\n\nexport default class AppActor extends Actor implements IUpdatable, IExportable {\n\n  constructor(name: string) {\n      super(name)\n  }\n\n  addOne() {\n      this.counter++\n  }\n\n  toJson(){\n        return {\n            id: this.id,\n            type:"AppActor",\n            counter: this.counter\n        }\n    }\n\n    updateFrom({ counter }: any): void {\n        this.counter = counter\n    }\n\n    private counter = 1; \n}\n\n')),(0,o.kt)("h2",{id:"confiuration-options"},"confiuration options"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"paths.pull: path to endpoint for pulling data from the backend"),(0,o.kt)("li",{parentName:"ol"},"paths.push: path to endpoint for pushing data to the backend"),(0,o.kt)("li",{parentName:"ol"},"ActorTypes: objects registering the type of actors that should be sync with the backend ")),(0,o.kt)("h5",{id:"created-my-free-logo-at-logomakrcom"},"Created my free ",(0,o.kt)("a",{parentName:"h5",href:"https://logomakr.com/0ZeODI"},"logo")," at ",(0,o.kt)("a",{href:"http://logomakr.com",title:"Logo Makr"},"LogoMakr.com")))}d.isMDXComponent=!0}}]);