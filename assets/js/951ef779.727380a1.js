(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[147],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,f=d["".concat(m,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5433:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={},l="Adding a Platform",m={unversionedId:"jetstream/add-new-platform",id:"jetstream/add-new-platform",isDocsHomePage:!1,title:"Adding a Platform",description:"Jetstream runs analyses for experiments launched on several different platforms, such as Fenix or Firefox Desktop. When adding a new platform in Experimenter, the new platform also needs to be configured in mozanalysis and Jetstream to enable automated analyses for launched experiments.",source:"@site/docs/jetstream/add-new-platform.md",sourceDirName:"jetstream",slug:"/jetstream/add-new-platform",permalink:"/jetstream/add-new-platform",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/add-new-platform.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Adding support in mozanalysis",id:"adding-support-in-mozanalysis",children:[]},{value:"Update mozanalysis in jetstream",id:"update-mozanalysis-in-jetstream",children:[]},{value:"Add support for platform in jetstream",id:"add-support-for-platform-in-jetstream",children:[{value:"Configuration breakdown",id:"configuration-breakdown",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-a-platform"},"Adding a Platform"),(0,i.kt)("p",null,"Jetstream runs analyses for experiments launched on several different platforms, such as Fenix or Firefox Desktop. When adding a new platform in Experimenter, the new platform also needs to be configured in mozanalysis and Jetstream to enable automated analyses for launched experiments."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"adding-support-in-mozanalysis"},"Adding support in mozanalysis"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/mozanalysis/"},"https://github.com/mozilla/mozanalysis/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default metrics and datasources need to be added to mozanalysis. These default metric and data source definitions will be available for custom experiment configurations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add new metric(s) in ",(0,i.kt)("inlineCode",{parentName:"li"},"mozanalysis")," (if needed). For more detailed guide follow ",(0,i.kt)("a",{parentName:"li",href:"https://experimenter.info/jetstream/metrics#how-do-i-add-a-metric-to-my-experiment"},"how do I add a metric to my experiment"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://experimenter.info/jetstream/configuration#metrics-section"},"defining metric"))))),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Optionally, segment definitions can also be added in mozanalysis:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add new segment(s) in ",(0,i.kt)("inlineCode",{parentName:"li"},"mozanalysis")," (if needed). For more detailed guide follow ",(0,i.kt)("a",{parentName:"li",href:"https://experimenter.info/jetstream/configuration#defining-segments"},"defining segment"))))),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After adding support to mozanalysis and merging your changed into the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/mozanalysis/tree/main"},"main branch")," new package needs to be published to ",(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/mozanalysis/"},"PyPi")),(0,i.kt)("li",{parentName:"ul"},"Make sure ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch is your current branch and create a new git tag using:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git tag YYYY.M.MINOR\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Push the tag to remote using:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin --tags\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This will trigger CI pipeline which will release the new version of ",(0,i.kt)("inlineCode",{parentName:"li"},"mozanalysis")," package to ",(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/mozanalysis/"},"PyPi"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"More information about the deployment and tag format can be found ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/mozilla/mozanalysis#deploying-a-new-release"},"here"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"update-mozanalysis-in-jetstream"},"Update mozanalysis in jetstream"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream"},"https://github.com/mozilla/jetstream")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure your ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch is up-to-date with remote")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Checkout into a new branch ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout -b mozanalysis/upgrade-<new_version>"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream/blob/main/requirements.in#L130"},"requirements.in")," in jetstream project and update mozanalysis package to the new version created in the prior step (git tag)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mozanalysis==[new_version]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/jetstream/blob/main/requirements.txt"},"requirements.txt")," in jetstream project by running the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip-compile --generate-hashes --output-file=requirements.txt requirements.in\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Commit changes to both ",(0,i.kt)("inlineCode",{parentName:"li"},"requirements.in")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"requirements.txt")," files"),(0,i.kt)("li",{parentName:"ul"},"Push your branch to remote"),(0,i.kt)("li",{parentName:"ul"},"Create a pull request to merge your branch into the main branch and wait for a review before merging")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"add-support-for-platform-in-jetstream"},"Add support for platform in jetstream"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inside ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/jetstream/blob/main/platform_config.toml"},"platform_config.toml")," add configuration for the new platform")),(0,i.kt)("p",null,"An example of desktop configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[platform.firefox_desktop]\nconfig_spec_path = "default_metrics.toml"\nmetrics_module = "desktop"\nsegments_module = "desktop"\nenrollments_query_type = "normandy"\napp_id = "firefox-desktop"\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"configuration-breakdown"},"Configuration breakdown"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[platform.platform_name]")," - Specify platform name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config_spec_path")," - toml configuration for the app found inside ",(0,i.kt)("inlineCode",{parentName:"li"},"jetstream/config")," folder (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"<platform_name>.toml"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metrics_module")," - mozanalysis metrics module that this platform should use (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"<platform_name>"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"segments_module")," - mozanalysis segments module that this platform should use (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enrollments_query_type")," - whether enrollments should be determined based on Glean events (",(0,i.kt)("inlineCode",{parentName:"li"},"glean-event"),") data or Normandy data (",(0,i.kt)("inlineCode",{parentName:"li"},"normandy"),") (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"glean-event"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app_id")," - application ID as defined in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/probe-scraper/blob/main/repositories.yaml"},"probe-scraper repository.yaml"))))}u.isMDXComponent=!0}}]);