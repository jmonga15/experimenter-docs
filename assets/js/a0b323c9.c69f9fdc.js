"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6060],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(4137));const o={id:"nimbus-cli-working-with-logs",title:"Working with Logs",slug:"/nimbus-cli/working-with-logs"},r=void 0,l={unversionedId:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-logs",id:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-logs",title:"Working with Logs",description:"Log files are especially helpful to developers, but not always very easy to access.",source:"@site/docs/deep-dives/mobile/nimbus-cli/60-working-with-logs.mdx",sourceDirName:"deep-dives/mobile/nimbus-cli",slug:"/nimbus-cli/working-with-logs",permalink:"/nimbus-cli/working-with-logs",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/nimbus-cli/60-working-with-logs.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{id:"nimbus-cli-working-with-logs",title:"Working with Logs",slug:"/nimbus-cli/working-with-logs"},sidebar:"sidebar",previous:{title:"Working with Files",permalink:"/nimbus-cli/working-with-files"},next:{title:"Working with Feature Manifests",permalink:"/nimbus-cli/fml"}},s={},p=[{value:"<code>capture-logs</code>",id:"capture-logs",level:2},{value:"<code>tail-logs</code>",id:"tail-logs",level:2},{value:"<code>log-state</code>",id:"log-state",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Log files are especially helpful to developers, but not always very easy to access."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"adb logcat")," on Android, and on iOS it uses the Unix commands ",(0,a.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tail"),"."),(0,a.kt)("p",null,"These logs are useful when examining the internal state of the app, or attaching to bug reports."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For iOS the logs that are displayed and captured are the app's logs.\nFor Android, the logs are for the whole device.\nFor Android devices also used for personal usage, you should probably not upload such logs anywhere.")),(0,a.kt)("h2",{id:"capture-logs"},(0,a.kt)("inlineCode",{parentName:"h2"},"capture-logs")),(0,a.kt)("p",null,"Capturing a device log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer \\\n    capture-logs logs.txt\n")),(0,a.kt)("h2",{id:"tail-logs"},(0,a.kt)("inlineCode",{parentName:"h2"},"tail-logs")),(0,a.kt)("p",null,"You can set up a different terminal window to watch the logs as they are generated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer tail-logs\n")),(0,a.kt)("p",null,"If you know of any keywords you may be interested in, you can filter piping the output to the ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," command."),(0,a.kt)("p",null,"For example, the following outputs any log entry containing the word ",(0,a.kt)("inlineCode",{parentName:"p"},"send-tab"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer tail-logs | grep -i send-tab\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"On iOS, because the ",(0,a.kt)("inlineCode",{parentName:"p"},"reset-app")," command deletes the app contaner, the ",(0,a.kt)("inlineCode",{parentName:"p"},"tail-logs")," command is only available after the first run after a reset, and stops after a reset.")),(0,a.kt)("h2",{id:"log-state"},(0,a.kt)("inlineCode",{parentName:"h2"},"log-state")),(0,a.kt)("p",null,"This command is an analog for the experiments menu in the secret settings of Fenix and Firefox for iOS."),(0,a.kt)("p",null,"It relaunches the app, then asks the SDK to dump the state of the Nimbus SDK to the logs. For example:"),(0,a.kt)("p",null,"For example, this is a section of logs captured on an Android device shortly after ",(0,a.kt)("inlineCode",{parentName:"p"},"log-state"),", and an enrollment into the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewpoint-rolling-week-2-expansion-android")," experiment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"06-05 12:12:47.177 12737 12737 D nimbus::nimbus_client: nimbus_18d_NimbusClient_dump_state_to_log\n06-05 12:12:47.177 12737 12737 I nimbus::nimbus_client: Slug                                                             | Features                      | Branch\n06-05 12:12:47.177 12737 12737 I nimbus::nimbus_client: viewpoint-rolling-week-2-expansion-android                       | messaging                     | treatment\n06-05 12:12:47.177 12737 12841 D nimbus::nimbus_client: nimbus_18d_NimbusClient_set_fetch_enabled\n")),(0,a.kt)("p",null,"It is useful to use in conjunction with other logging commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer log-state\nnimbus-cli --app fenix --channel developer tail-log | grep -i nimbus\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer log-state\nnimbus-cli --app fenix --channel developer capture-logs logs.txt\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"log-state")," is called at the same time as the ",(0,a.kt)("inlineCode",{parentName:"p"},"enroll")," command."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For iOS, it can be a bit tricky to see the state of logs at the beginning of a just-installed but not yet opened app."),(0,a.kt)("p",{parentName:"admonition"},"You can do the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"enroll")," then ",(0,a.kt)("inlineCode",{parentName:"p"},"tail-logs")," with by adding ",(0,a.kt)("a",{parentName:"p",href:"/nimbus-cli/opening-and-resetting#leading-parameters"},(0,a.kt)("inlineCode",{parentName:"a"},"-- --console-pty {}"))," to the end of the enroll command."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ nimbus-cli --app firefox_ios --channel developer \\\n    enroll \\\n    ios-search-bar-placement-v2-treatment-a-rollout --branch treatment-a \\\n    -- --console-pty {}\n")),(0,a.kt)("p",{parentName:"admonition"},"2023-06-15 17:06:29.611 \ud83d\udc99 INFO ","[sync]"," Profile - ","[RUST][nimbus::nimbus_client]"," ","[Nimbus]"," Days since update: 0\n2023-06-15 17:06:29.644 \ud83d\udc99 INFO ","[sync]"," Profile - ","[RUST][nimbus::nimbus_client]"," Slug                                                             | Features                      | Branch\n2023-06-15 17:06:29.645 \ud83d\udc99 INFO ","[sync]"," Profile - ","[RUST][nimbus::nimbus_client]"," ios-search-bar-placement-v2-treatment-a-rollout                  | search                        | treatment-a\n2023-06-15 17:06:29.645 \ud83d\udc99 INFO ","[experiments]"," Experiments - Nimbus is ready!")))}m.isMDXComponent=!0}}]);