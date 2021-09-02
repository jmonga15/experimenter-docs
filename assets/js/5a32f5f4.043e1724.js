(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[383],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=i,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5208:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"ios-preview-testing",title:"Testing the preview flow on iOS"},l="Testing the preview flow on iOS",p={unversionedId:"ios-preview-testing",id:"ios-preview-testing",isDocsHomePage:!1,title:"Testing the preview flow on iOS",description:"Launching an experiment to Preview the stage server",source:"@site/docs/ios-preview-testing.md",sourceDirName:".",slug:"/ios-preview-testing",permalink:"/ios-preview-testing",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/ios-preview-testing.md",tags:[],version:"current",frontMatter:{id:"ios-preview-testing",title:"Testing the preview flow on iOS"},sidebar:"sidebar",previous:{title:"Testing on mobile",permalink:"/android-frontend-testing"},next:{title:"Nimbus Feature API (JS)",permalink:"/desktop-feature-api"}},s=[{value:"Launching an experiment to Preview the stage server",id:"launching-an-experiment-to-preview-the-stage-server",children:[]},{value:"Pointing a local iOS build to the stage server",id:"pointing-a-local-ios-build-to-the-stage-server",children:[]},{value:"Accessing the secret menu",id:"accessing-the-secret-menu",children:[{value:"FAQs",id:"faqs",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-the-preview-flow-on-ios"},"Testing the preview flow on iOS"),(0,o.kt)("h2",{id:"launching-an-experiment-to-preview-the-stage-server"},"Launching an experiment to Preview the stage server"),(0,o.kt)("p",null,"The first step to testing the preview flow is to launch an experiment\nto preview on the stage nimbus server (we should not using the production server for testing). Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://stage.experimenter.nonprod.dataops.mozgcp.net/nimbus/"},"stage experimenter")," and create your experiment there."),(0,o.kt)("p",null,"Follow the first few instructions on ",(0,o.kt)("a",{parentName:"p",href:"/console/preview"},"the preview docs")," to get an experiment to preview. (note that the experiment should be set to target iOS, look at the ",(0,o.kt)("a",{parentName:"p",href:"#faq"},"FAQ")," section at the bottom)"),(0,o.kt)("h2",{id:"pointing-a-local-ios-build-to-the-stage-server"},"Pointing a local iOS build to the stage server"),(0,o.kt)("p",null,"Since we will be using the stage server, we want Firefox to look for experiments there. For iOS, you can do that on a local build, which you can get running by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/firefox-ios/blob/main/README.md#building-the-code"},"following the instructions on the ",(0,o.kt)("inlineCode",{parentName:"a"},"firefox-ios")," repository")),(0,o.kt)("p",null,"Once you have a local build using xcode, you should replace ",(0,o.kt)("inlineCode",{parentName:"p"},"NIMBUS_URL")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://settings.stage.mozaws.net/v1/"),". You can set that on ",(0,o.kt)("inlineCode",{parentName:"p"},"info.plist"),", which lies in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," directory once you have the project setup. ",(0,o.kt)("inlineCode",{parentName:"p"},"NIMBUS_URL")," will have an initial value of ",(0,o.kt)("inlineCode",{parentName:"p"},"$(NIMBUS_URL)"),", replace that with the setting server's url."),(0,o.kt)("h2",{id:"accessing-the-secret-menu"},"Accessing the secret menu"),(0,o.kt)("p",null,"At this point, you can run your local build of Firefox iOS, once it's run:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the settings menu and click ",(0,o.kt)("strong",{parentName:"p"},"5")," times on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Firefox Daylight 0.0.1")," under the about section: "),(0,o.kt)("img",{src:"/img/firefox-ios/secret-menu-access.png",height:"500"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll all the way to the bottom and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Experiments")," menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," on the top right.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"Use Preview Collection (requires restart)")," option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset")," and restart the app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Repeat the steps 1-2, and you should now see the experiment you launched to preview!"))),(0,o.kt)("p",null,"You can also check out this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1XPF4TQQTxRwWDrp907JtWXi4rCJ0Pg1YOpFGCHz8sBc/edit#"},"visual documentation")," for a clear demonstration of how to switch to the preview collection."),(0,o.kt)("h3",{id:"faqs"},"FAQs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"What kind of experiment should I create?"))),(0,o.kt)("p",null,"If you would like your test to be more in-depth, we recommend you create an iOS experiment that can be directly tested on the UI. For example, you can create an ",(0,o.kt)("inlineCode",{parentName:"p"},"onboarding-default-browser")," experiment by setting the feature config to ",(0,o.kt)("inlineCode",{parentName:"p"},"onboarding-default-browser")," and setting the appropriate values, ",(0,o.kt)("a",{parentName:"p",href:"https://stage.experimenter.nonprod.dataops.mozgcp.net/nimbus/teshaqtest-preview-flow-showhide-default-browser-title-image"},"check out this experiment on experimenter for a complete example")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"I don't see my experiments on Firefox!"))),(0,o.kt)("p",null,"It takes a little time, but if you still can't see the experiments, try restarting the app and double check that you launched your experiment to preview and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Firefox iOS")," and didn't miss any configuration on experimenter. If you keep facing trouble reach out to use on #ask-experimenter on slack!"))}u.isMDXComponent=!0}}]);