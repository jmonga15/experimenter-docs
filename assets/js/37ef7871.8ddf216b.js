"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[3835],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,d=c["".concat(s,".").concat(f)]||c[f]||y[f]||o;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},460:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const o={id:"how-early",title:"How early is early?",slug:"/early-startup/how-early"},l=void 0,i={unversionedId:"faq/early-startup/how-early",id:"faq/early-startup/how-early",title:"How early is early?",description:"Early on Desktop",source:"@site/docs/faq/early-startup/how-early-is-early.mdx",sourceDirName:"faq/early-startup",slug:"/early-startup/how-early",permalink:"/early-startup/how-early",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/early-startup/how-early-is-early.mdx",tags:[],version:"current",frontMatter:{id:"how-early",title:"How early is early?",slug:"/early-startup/how-early"},sidebar:"sidebar",previous:{title:"What does early startup do?",permalink:"/early-startup/what-do-it-do"},next:{title:"What happens at experiment end?",permalink:"/end-experiment-behavior/experiment-end"}},s={},p=[{value:"Early on Desktop",id:"early-on-desktop",level:2},{value:"Early on Mobile",id:"early-on-mobile",level:2}],u={toc:p},c="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"early-on-desktop"},"Early on Desktop"),(0,n.kt)("p",null,"The 'isEarlyStartup' flag for features will write variables to prefs to ensure data is available once prefs are loaded.\nNimbus uses its own internal prefs.  If youre talking to Nimbus via JS you can just interact with it normally and it\nwill read from prefs if it hasn't yet loaded its data store. Then you can use the ",(0,n.kt)("a",{parentName:"p",href:"https://searchfox.org/mozilla-central/source/toolkit/components/nimbus/lib/NimbusFeatures.h"},"C++ API"),". "),(0,n.kt)("p",null,"You don't have to do anything special through, as long as isEarlyStartup is set it should Just Work.\nAssuming everything is main thread, you shouldnt have any issues."),(0,n.kt)("p",null,"First startup initializes Normandy and then nimbus, which will then try to grab experiments and rollouts for all features (",(0,n.kt)("a",{parentName:"p",href:"https://searchfox.org/mozilla-central/rev/fb9a504ca73529fa550efe488db2a012a4bf5169/toolkit/modules/FirstStartup.sys.mjs#50"},"code"),").\nThis happens before we paint the first window.  First startup blocks painting."),(0,n.kt)("h2",{id:"early-on-mobile"},"Early on Mobile"),(0,n.kt)("p",null,"TBD"))}y.isMDXComponent=!0}}]);