"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7416],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=n(7462),a=(n(7294),n(4137));const r={id:"nimbus-cli-changelog",title:"What's New",slug:"/nimbus-cli/whats-new"},l=void 0,o={unversionedId:"deep-dives/mobile/nimbus-cli/nimbus-cli-changelog",id:"deep-dives/mobile/nimbus-cli/nimbus-cli-changelog",title:"What's New",description:"0.4.0",source:"@site/docs/deep-dives/mobile/nimbus-cli/110-whats-new.mdx",sourceDirName:"deep-dives/mobile/nimbus-cli",slug:"/nimbus-cli/whats-new",permalink:"/nimbus-cli/whats-new",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/nimbus-cli/110-whats-new.mdx",tags:[],version:"current",sidebarPosition:110,frontMatter:{id:"nimbus-cli-changelog",title:"What's New",slug:"/nimbus-cli/whats-new"},sidebar:"sidebar",previous:{title:"Instrumentation Guide",permalink:"/nimbus-cli/instrumentation"},next:{title:"Branches",permalink:"/deep-dives/experimenter/branches-page"}},s={},m=[{value:"<code>0.4.0</code>",id:"040",level:3},{value:"<code>0.3.0</code>",id:"030",level:3}],c={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"040"},(0,a.kt)("inlineCode",{parentName:"h3"},"0.4.0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--app")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"--channel")," parameters are now optional. If a command needs them and you haven't specified them, then it will error."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch-list")," now have filters. You can filter on ",(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/getting-started#list"},"slug, feature, is-rollout, active-on date, and enroll date"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/working-with-patch-files"},(0,a.kt)("inlineCode",{parentName:"a"},"--patch FILE"))," is now available for any command which accepts an experiment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/on-devices"},(0,a.kt)("inlineCode",{parentName:"a"},"start-server"))," \u2013 a new command to start a web server, which devices can connect to. Firefox for iOS and Android support this from v117.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pbcopy")," adds to the clipboard a URL with experiments encoded in them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pbpaste")," sends the URL to the server. In this way, we can open enroll apps on device into experiments with the CLI."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/fml#working-with-the-nimbus-fml-command-line"},(0,a.kt)("inlineCode",{parentName:"a"},"fml"))," \u2013 a new command to interact with the lower level ",(0,a.kt)("inlineCode",{parentName:"li"},"nimbus-fml")," command line.")),(0,a.kt)("h3",{id:"030"},(0,a.kt)("inlineCode",{parentName:"h3"},"0.3.0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now using the Experimenter API to get experiments, instead of Remote Settings. This saves time waiting for the sync between Experimenter and RS."),(0,a.kt)("li",{parentName:"ul"},"Split ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch")," into a ",(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/working-with-files#fetch"},(0,a.kt)("inlineCode",{parentName:"a"},"fetch"))," for named recipes and ",(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/working-with-files#fetch-list"},(0,a.kt)("inlineCode",{parentName:"a"},"fetch-list"))," for getting a list; this changes the parameters for ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/opening-and-resetting#passthrough-parameters"},"Passthrough parameters")," for finer control of the app launch process. Thanks Ben, for the suggestion."),(0,a.kt)("li",{parentName:"ul"},"A new ",(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/working-with-features#features"},(0,a.kt)("inlineCode",{parentName:"a"},"features")," command")," to get the feature configuration out of the experiment. You can also ",(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/fml#features"},"merge with the defaults")," from the manifest."),(0,a.kt)("li",{parentName:"ul"},"A new ",(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/fml#defaults"},(0,a.kt)("inlineCode",{parentName:"a"},"defaults")," command")," to get the defaults from the manifest."),(0,a.kt)("li",{parentName:"ul"},"A new ",(0,a.kt)("a",{parentName:"li",href:"/nimbus-cli/getting-started#info"},(0,a.kt)("inlineCode",{parentName:"a"},"info")," command")," to get information about the experiment. This can be good for investigations."),(0,a.kt)("li",{parentName:"ul"},"Experiment slugs can be derived from Experimenter URLs."),(0,a.kt)("li",{parentName:"ul"},"Where you can read and write JSON, you can now read and write YAML.")))}u.isMDXComponent=!0}}]);