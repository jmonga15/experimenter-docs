(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1831],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6708:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"preview",title:"Previewing Experiments"},p=void 0,s={unversionedId:"experiment-owners/preview",id:"experiment-owners/preview",isDocsHomePage:!1,title:"Previewing Experiments",description:"This guide will help you preview what each branch of an experiment will look like for users in the target application.",source:"@site/docs/experiment-owners/preview.md",sourceDirName:"experiment-owners",slug:"/experiment-owners/preview",permalink:"/experiment-owners/preview",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/experiment-owners/preview.md",tags:[],version:"current",frontMatter:{id:"preview",title:"Previewing Experiments"},sidebar:"sidebar",previous:{title:"Custom Audiences",permalink:"/experiment-owners/custom-audiences"},next:{title:"Experimentation for data scientists",permalink:"/data-scientists"}},l=[],c={toc:l};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will help you preview what each branch of an experiment will look like for users in the target application."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These steps only apply to Firefox Desktop Version 90+. You can find ",(0,o.kt)("a",{parentName:"p",href:"/ios-preview-testing"},"instructions for iOS here"),", Fenix instructions are coming soon!"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'For experiments that are already live, go to the summary page. For experiments that have not yet launched, you will need the author to click "Launch to Preview" on the Review & Launch page.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Launch to Preview Button",src:n(1147).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll down to the ",(0,o.kt)("strong",{parentName:"p"},"Preview Url")," section of the page. Select the branch you want and copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"about:studies")," URL.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"about:config")," in ",(0,o.kt)("strong",{parentName:"p"},"Firefox Desktop v90+")," and set ",(0,o.kt)("inlineCode",{parentName:"p"},"nimbus.debug")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". Paste the URL you copied above in your browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should be enrolled! To exit the experiment, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"about:studies"),' and click "Remove"'))),(0,o.kt)("h4",{id:"earlier-desktop-firefox-versions-90"},"Earlier Desktop Firefox versions (<90)"),(0,o.kt)("p",null,"To use preview with earlier versions of Firefox, you can use your Browser Toolbox devtools to run ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/piatra/fb3876257f876386da104df593000ce9"},"this code snippet"),"."))}u.isMDXComponent=!0},1147:function(e,t,n){"use strict";t.Z=n.p+"assets/images/preview-button-563b0d2667614e4134a24cbe36cd1b7d.png"}}]);