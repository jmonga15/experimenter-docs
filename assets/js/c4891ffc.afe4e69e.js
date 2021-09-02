(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[982],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"desktop-frontend-testing",title:"Desktop Front-end testing",slug:"/desktop-frontend-testing"},s=void 0,l={unversionedId:"desktop-frontend-testing",id:"desktop-frontend-testing",isDocsHomePage:!1,title:"Desktop Front-end testing",description:"In order to make testing easier we created some helpers that can be accessed by including",source:"@site/docs/desktop-frontend-testing.md",sourceDirName:".",slug:"/desktop-frontend-testing",permalink:"/desktop-frontend-testing",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/desktop-frontend-testing.md",tags:[],version:"current",frontMatter:{id:"desktop-frontend-testing",title:"Desktop Front-end testing",slug:"/desktop-frontend-testing"},sidebar:"sidebar",previous:{title:"Desktop Rollouts",permalink:"/desktop-rollouts"},next:{title:"PROPOSAL - Android Feature API",permalink:"/android-feature-api"}},u=[{value:"Testing your feature integrating with Nimbus",id:"testing-your-feature-integrating-with-nimbus",children:[]},{value:"Testing with a live Nimbus recipe",id:"testing-with-a-live-nimbus-recipe",children:[]},{value:"Testing with Desktop Rollouts",id:"testing-with-desktop-rollouts",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to make testing easier we created some helpers that can be accessed by including"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { ExperimentFakes } = ChromeUtils.import(\n  "resource://testing-common/NimbusTestUtils.jsm",\n);\n')),(0,o.kt)("h2",{id:"testing-your-feature-integrating-with-nimbus"},"Testing your feature integrating with Nimbus"),(0,o.kt)("p",null,"You need to provide a feature configuration and await enrollment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let doEnrollmentCleanup = await ExperimentFakes.enrollWithFeatureConfig({\n  featureId: "<YOUR FEATURE>",\n  // You can add values for each variable you added to the manifest\n  value: {\n    enabled: true\n  }\n});\n\n// Now you can assume the feature is enabled so you can\n// test and that it\'s doing the right thing\n\n// Assert.ok(It works!)\n\n// Finishing up\nawait doExperimentCleanup();\n')),(0,o.kt)("h2",{id:"testing-with-a-live-nimbus-recipe"},"Testing with a live Nimbus recipe"),(0,o.kt)("p",null,"If you already published an experiment through Nimbus then you will want to test enrollment in the browser."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Flip the following pref to true in the browser you want to enroll (in about:config)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"nimbus.debug")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You need to copy paste the following URL and fill in the required details.")),(0,o.kt)("p",null,"For experiments that are already live:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"about:studies?optin_slug=<YOUR_EXPERIMENT_SLUG>&optin_branch=<BRANCH_SLUG_TO_ENROLL>")),(0,o.kt)("p",null,'For experiments that are in "preview" mode:'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"about:studies?optin_slug=<YOUR_EXPERIMENT_SLUG>&optin_branch=<BRANCH_SLUG_TO_ENROLL>&optin_collection=nimbus-preview")),(0,o.kt)("h2",{id:"testing-with-desktop-rollouts"},"Testing with Desktop Rollouts"),(0,o.kt)("p",null,"For writing tests you usually want to have the following modules imported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { ExperimentAPI, NimbusFeatures } = ChromeUtils.import(\n  "resource://nimbus/ExperimentAPI.jsm",\n);\nconst { ExperimentFakes } = ChromeUtils.import(\n  "resource://testing-common/NimbusTestUtils.jsm",\n);\n')),(0,o.kt)("p",null,"Next this is how you would set up your feature to test integration with Desktop Rollouts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  // Ensure everything has finished initializing\n  await ExperimentAPI.ready();\n  // The actual setup\n  await ExperimentFakes.remoteDefaultsHelper({\n    // Reference your feature already defined in the FeatureManifest.js\n    feature: NimbusFeatures.<YOUR FEATURE>,\n    configuration: {\n      // An identifier used in telemetry\n      slug: "my-test-configuration",\n      // Is the feature on or off\n      enabled: true,\n      // Any additional variables\n      variables: {},\n    },\n  });\n\n  // Now your feature integration is ready for testing\n\n  // NimbusFeature.<YOUR FEATURE>.isEnabled()\n  // NimbusFeature.<YOUR FEATURE>.getAllVariables()\n')))}c.isMDXComponent=!0}}]);