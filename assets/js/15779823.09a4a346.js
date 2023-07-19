"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[8455],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||g[u]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<s;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(4137));const s={id:"messaging-telemetry",title:"Messaging Telemetry",slug:"/messaging/telemetry",sidebar_position:3.5},i=void 0,o={unversionedId:"workflow/implementing/messaging/messaging-telemetry",id:"workflow/implementing/messaging/messaging-telemetry",title:"Messaging Telemetry",description:"Event telemetry is sent for any interaction with the messaging surfaces and additionally for impressions (when the message is shown). The following types of user interaction is captured by telemetry:",source:"@site/docs/workflow/implementing/messaging/telemetry.md",sourceDirName:"workflow/implementing/messaging",slug:"/messaging/telemetry",permalink:"/messaging/telemetry",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/implementing/messaging/telemetry.md",tags:[],version:"current",sidebarPosition:3.5,frontMatter:{id:"messaging-telemetry",title:"Messaging Telemetry",slug:"/messaging/telemetry",sidebar_position:3.5},sidebar:"sidebar",previous:{title:"How a Message Gets Shown",permalink:"/messaging/how-a-message-gets-shown"},next:{title:"Messaging System Frequency cap",permalink:"/messaging/frequency-cap"}},l={},m=[],p={toc:m},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Event telemetry is sent for any interaction with the messaging surfaces and additionally for impressions (when the message is shown). The following types of user interaction is captured by telemetry:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Impression"),(0,a.kt)("li",{parentName:"ul"},"Primary click"),(0,a.kt)("li",{parentName:"ul"},"Secondary click (when available)"),(0,a.kt)("li",{parentName:"ul"},"Dismiss")),(0,a.kt)("p",null,"Telemetry pings will include the message id, experiment and branch slug (if enrolled) and the event type."),(0,a.kt)("p",null,"Telemetry from all messaging surfaces (",(0,a.kt)("a",{parentName:"p",href:"https://searchfox.org/mozilla-central/rev/65d4d3399afa79c8de5a0cc11752d2ba7c31edc1/browser/components/newtab/lib/TelemetryFeed.jsm#645"},"except doorhangers when not enrolled in an experiment"),") includes client id in the event ping. ",(0,a.kt)("strong",{parentName:"p"},"Special care should be taken not to associate any browsing history with messaging events: showing a message when the user visits a particular website is not allowed because it would accidentally leak information about that visit.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/telemetry/"},"Additional telemetry")," is available when the message is delivered as an ",(0,a.kt)("u",null,"experiment"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exposure"),(0,a.kt)("li",{parentName:"ul"},"Reach")),(0,a.kt)("p",null,"These events are sent once per feature per browsing session."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Exposure")," (actually displayed to the user) is sent just before the message is shown (similar to Impressions) and only for the messages that are defined as ",(0,a.kt)("em",{parentName:"p"},"features")," in the FeatureManifest."),(0,a.kt)("p",null,"A client will send one ",(0,a.kt)("strong",{parentName:"p"},"Reach")," event for every message  available in the branches that the client is not enrolled in.\nExample: Experiment has 3 branches ","[control, treatment-1, treatment-2]",". If the user is enrolled in the ",(0,a.kt)("strong",{parentName:"p"},"control branch")," then 2 ",(0,a.kt)("strong",{parentName:"p"},"Reach")," pings will be sent for the messages in the treatment-1,2 branches. The reach ping is sent when the user action (trigger) associated with the message and the targeting conditions are satisfied (in other words when the user would have seen the message if the user would have been enrolled in that branch).\n",(0,a.kt)("strong",{parentName:"p"},"Exposure")," and ",(0,a.kt)("strong",{parentName:"p"},"Reach")," events for a feature get sent when the trigger associated with that message fires and if the message targeting matches."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debugging telemetry pings")),(0,a.kt)("p",null,"Make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"browser.ping-centre.log")," pref is enabled. Open the Browser Toolbox and interact with the message, any telemetry pings will be logged to the console. "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Because of the implementation of moments pages, telemetry is only sent for when a message is matched (the page will be shown in the next browsing session). No other telemetry is available.")))}g.isMDXComponent=!0}}]);