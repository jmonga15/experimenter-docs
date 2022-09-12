(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7152],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return g},kt:function(){return l}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=c(t),l=s,f=p["".concat(u,".").concat(l)]||p[l]||m[l]||a;return t?r.createElement(f,i(i({ref:n},g),{},{components:t})):r.createElement(f,i({ref:n},g))}));function l(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7439:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(2122),s=t(9756),a=(t(7294),t(3905)),i={id:"experiments-and-user-messaging",title:"Experiments & User Messaging",slug:"/messaging/experiments-and-user-messaging"},o=void 0,u={unversionedId:"messaging/experiments-and-user-messaging",id:"messaging/experiments-and-user-messaging",isDocsHomePage:!1,title:"Experiments & User Messaging",description:"Experiments enforce the rule that a user cannot enroll in multiple experiments of the same type (feature). Each messaging surface corresponds to a feature so we can only run a single experiment for any given messaging surface per cohort of users.",source:"@site/docs/messaging/experiments-and-user-messaging.md",sourceDirName:"messaging",slug:"/messaging/experiments-and-user-messaging",permalink:"/messaging/experiments-and-user-messaging",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/messaging/experiments-and-user-messaging.md",tags:[],version:"current",frontMatter:{id:"experiments-and-user-messaging",title:"Experiments & User Messaging",slug:"/messaging/experiments-and-user-messaging"},sidebar:"sidebar",previous:{title:"Groups & Campaigns",permalink:"/messaging/groups-and-campaigns"},next:{title:"How a Message Gets Shown",permalink:"/messaging/how-a-message-gets-shown"}},c=[],g={toc:c};function m(e){var n=e.components,t=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Experiments enforce the rule that a user cannot enroll in multiple experiments of the same type (feature). Each messaging surface corresponds to a feature so we can only run a single experiment for any given messaging surface per cohort of users."),(0,a.kt)("p",null,"There is no practical limitation of Messaging System for how many messages of the same type can exist. If deployed directly through Remote Settings multiple messages targeting the same surface can co-exist. "),(0,a.kt)("p",null,"Messaging System will select a single message to show based on targeting condition and trigger. If multiple messages match, the first one is selected. Through frequency and lifetime settings eventually all messages will be given an opportunity to be shown."),(0,a.kt)("p",null,"For messages deployed outside of experiments we can use ",(0,a.kt)("strong",{parentName:"p"},"Priority")," (see ",(0,a.kt)("a",{parentName:"p",href:"./how-a-message-gets-shown"},"How a Message Gets Shown"),") to rank the order in which they are evaluated."))}m.isMDXComponent=!0}}]);