"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[5795],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=f(n),g=i,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var f=2;f<o;f++)a[f]=n[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>f});var r=n(7462),i=(n(7294),n(4137));const o={title:"QA Sign-off",slug:"/qa-sign-off",sidebar_position:1},a=void 0,s={unversionedId:"workflow/implementing/risk-mitigation/qa-sign-off/qa-sign-off",id:"workflow/implementing/risk-mitigation/qa-sign-off/qa-sign-off",title:"QA Sign-off",description:"Feature testing alone is not enough for experiments or rollouts.  There is testing specific to see that the turning on and off of your feature works through Nimbus.  There is also testing if you are changing configurations (does it work in different locals? platforms?), if there is new advanced targeting that needs testing, and if there is new telemetry.",source:"@site/docs/workflow/implementing/risk-mitigation/qa-sign-off/qa-sign-off.mdx",sourceDirName:"workflow/implementing/risk-mitigation/qa-sign-off",slug:"/qa-sign-off",permalink:"/qa-sign-off",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/implementing/risk-mitigation/qa-sign-off/qa-sign-off.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"QA Sign-off",slug:"/qa-sign-off",sidebar_position:1},sidebar:"sidebar",previous:{title:"Risk Mitigation",permalink:"/risk-mitigation"},next:{title:"VP Sign-off",permalink:"/vp-sign-off"}},l={},f=[],c={toc:f},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Feature testing alone is not enough for experiments or rollouts.  There is testing specific to see that the turning on and off of your feature works through Nimbus.  There is also testing if you are changing configurations (does it work in different locals? platforms?), if there is new advanced targeting that needs testing, and if there is new telemetry.  "),(0,i.kt)("p",null,"Unless you are 100% certain you don\u2019t need QA - ",(0,i.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/jira/software/c/projects/QA/boards/261?quickFilter=1447"},"file a QA ticket here"),".  Issue type will be either Experiment or Rollout.   QA often finds critical edge cases that were missed.  "),(0,i.kt)("p",null,"The only possible exceptions where you may not need official QA are below; ",(0,i.kt)("strong",{parentName:"p"},"if you choose to skip QA, you must self-test"),", ",(0,i.kt)("a",{parentName:"p",href:"https://experimenter.info/previewing-experiments"},"learn more"),".  Self-testing is recommended even before sending to QA, as it can avoid days of delay if QA discovers an easily corrected recipe error when they start testing."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You are launching on Nightly or early Beta and the feature itself was tested.  "),(0,i.kt)("li",{parentName:"ol"},"You are repeating an experiment with minimal changes that don\u2019t involve new code.  Ex: QA tested the original experiment - and now you are rolling out one of the winning configurations.  You launched the original but there was a small error in targeting (be sure to consider localization with every country/language change, if there is user facing copy in your experiment!)"),(0,i.kt)("li",{parentName:"ol"},"You are doing a message experiment with no new code changes or new targeting, so only changing the copy / well tested fields.  Note: Skipping testing for this is when we see easy-to-make human errors lead to sending the wrong language places.  We also see more image resolution issues that you\u2019d think (cropped, color issues, scaling issues).  Swapping images can cause unexpected display issues.")))}u.isMDXComponent=!0}}]);