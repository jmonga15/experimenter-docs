(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[265],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1214:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={id:"configuration",title:"Configuring Jetstream"},s=void 0,l={unversionedId:"jetstream/configuration",id:"jetstream/configuration",isDocsHomePage:!1,title:"Configuring Jetstream",description:"About configurations",source:"@site/docs/jetstream/configuration.md",sourceDirName:"jetstream",slug:"/jetstream/configuration",permalink:"/jetstream/configuration",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuring Jetstream"},sidebar:"sidebar",previous:{title:"Outcomes",permalink:"/jetstream/outcomes"},next:{title:"Jetstream Data Products",permalink:"/jetstream/data-products"}},c=[{value:"About configurations",id:"about-configurations",children:[]},{value:"Landing configurations",id:"landing-configurations",children:[]},{value:"Configuration file syntax",id:"configuration-file-syntax",children:[{value:"Custom experiment configurations",id:"custom-experiment-configurations",children:[]},{value:"Experiment section",id:"experiment-section",children:[]},{value:"Metrics section",id:"metrics-section",children:[]},{value:"Defining metrics",id:"defining-metrics",children:[]},{value:"Defining data sources",id:"defining-data-sources",children:[]},{value:"Defining segments",id:"defining-segments",children:[]},{value:"Outcome snippets",id:"outcome-snippets",children:[]}]}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-configurations"},"About configurations"),(0,o.kt)("p",null,"There are two ways to customize the results that appear in Experimenter and ",(0,o.kt)("a",{parentName:"p",href:"https://protosaur.dev/partybal/"},"partybal")," for an experiment."),(0,o.kt)("p",null,"You can either reference an ",(0,o.kt)("a",{parentName:"p",href:"/jetstream/outcomes"},"outcome")," while creating the experiment in the console,\nor commit a custom configuration to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream-config"},"jetstream-config")," repository."),(0,o.kt)("p",null,"Outcome definitions are also created in jetstream-config and use the same configuration language."),(0,o.kt)("p",null,"Custom experiment configurations are associated with an experiment by their filename,\nwhich should match the experiment slug, like ",(0,o.kt)("inlineCode",{parentName:"p"},"my-experiment-slug.toml"),".\nThis works for both Normandy and Nimbus slugs."),(0,o.kt)("h2",{id:"landing-configurations"},"Landing configurations"),(0,o.kt)("p",null,"To add or update a custom configuration, open a pull request against ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream-config"},"jetstream-config"),".\nCI checks will validate the columns, data sources, and SQL syntax.\nOnce CI completes, you may merge the pull request, which will trigger Jetstream to re-run your analysis.\nNo additional review is necessary to land configurations."),(0,o.kt)("p",null,"Note that rerunning experiments may be costly!\nDon't let this stop you from doing your job,\nbut try to avoid too much iteration on large and long-running experiments."),(0,o.kt)("h2",{id:"configuration-file-syntax"},"Configuration file syntax"),(0,o.kt)("p",null,"Custom configs for ",(0,o.kt)("a",{parentName:"p",href:"#custom-experiment-configurations"},"experiments")," and ",(0,o.kt)("a",{parentName:"p",href:"#outcome-snippets"},"outcome snippets"),"\nanalyzed in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream"},"jetstream")," use the same configuration language."),(0,o.kt)("p",null,"Custom configuration files are written in ",(0,o.kt)("a",{parentName:"p",href:"https://toml.io/en/"},"TOML"),"."),(0,o.kt)("h3",{id:"custom-experiment-configurations"},"Custom experiment configurations"),(0,o.kt)("p",null,"Configuration files have four main sections:\n",(0,o.kt)("a",{parentName:"p",href:"#experiment-section"},(0,o.kt)("inlineCode",{parentName:"a"},"[experiment]")),", ",(0,o.kt)("a",{parentName:"p",href:"#metrics-section"},(0,o.kt)("inlineCode",{parentName:"a"},"[metrics]")),", ",(0,o.kt)("a",{parentName:"p",href:"#defining-data-sources"},(0,o.kt)("inlineCode",{parentName:"a"},"[data_sources]")),",\nand ",(0,o.kt)("a",{parentName:"p",href:"#defining-segments"},(0,o.kt)("inlineCode",{parentName:"a"},"[segments]")),"."),(0,o.kt)("p",null,"Examples of every value you can specify in each section are given below.\nYou do not need to, and should not, specify everything!\nJetstream will take values from Experimenter\nand combine them with a reasonable set of defaults."),(0,o.kt)("p",null,"Lines starting with a ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," are comments and have no effect."),(0,o.kt)("h3",{id:"experiment-section"},"Experiment section"),(0,o.kt)("p",null,"This part of the configuration file lets you"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"specify the segments you wish to analyze,"),(0,o.kt)("li",{parentName:"ul"},"override some values from Experimenter, and"),(0,o.kt)("li",{parentName:"ul"},"define an exposure signal for your experiment.")),(0,o.kt)("p",null,"Segments are subsets of your enrolled population,\nand depend on some factor that could be observed about the client\nbefore they enrolled in the experiment."),(0,o.kt)("p",null,"Some segments ",(0,o.kt)("a",{parentName:"p",href:"https://docs.telemetry.mozilla.org/concepts/segments.html"},"are described in DTMO"),",\nand there are lists of predefined segments in the\n",(0,o.kt)("a",{parentName:"p",href:"https://mozilla.github.io/mozanalysis/api/segments/desktop.html"},"mozanalysis documentation"),"."),(0,o.kt)("p",null,"You can also override some values from Experimenter in the experiment section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[experiment]\n# The segments that you wish to compute metrics for.\n# You can define your own later in the configuration,\n# or (more commonly) use a value from mozanalysis.\n# The segment of all users is always computed.\nsegments = ["is_regular_user_v3", "new_or_resurrected_v3"]\n\n# Nominal length of the enrollment period in days.\n# Mozanalysis will consider enrollment_period + 1 "dates" of enrollments.\nenrollment_period = 7\n\n# The name of the control branch.\n# To compare all branches to each other pairwise, use the value `nan`.\nreference_branch = "control"\n\n# Override the "enrollment query" mozanalysis will use.\n# See https://github.com/mozilla/mozanalysis/issues/93 for more details about\n# what the query needs to contain.\n# It must yield columns named client_id, branch, enrollment_date, and num_enrollment_events.\n# Jetstream interprets this as a Jinja2 template; an `experiment` object is provided\n# that lets you access other details from Experimenter, like a slug.\nenrollment_query = """\n  SELECT\n      client_id,\n      branch,\n      enrollment_date,\n      num_enrollments\n  FROM mozdata.some_table.name_here\n  WHERE\n      DATE(submission_timestamp) BETWEEN "{{experiment.start_date_str}}" AND "{{experiment.last_enrollment_date_str}}"\n      AND mozfun.map.get_key(environment.experiments, "{{experiment.slug}}") IS NOT NULL\n"""\n\n# You can override either or both of the start_date and end_date.\n# In conjunction with a custom enrollment query, this can be useful for holdbacks,\n# since you don\'t really care about the period of time before your client upgrades\n# to the new version.\nstart_date = "2020-01-01"\nend_date = "2020-12-31"\n\n# If you need Jetstream to decline to run analysis for an experiment,\n# you can set this to true.\nskip = false\n\n# You can override the exposure signal for the experiment if one is useful.\n# We\'ll default to the Nimbus exposure event if one is not specified here.\n[experiment.exposure_signal]\nname = "nimbus"\nfriendly_name = "Nimbus exposure signal"\ndescription = "Nimbus desktop feature exposure signal"\ndata_source = "normandy_events"\nselect_expression = "event_method = \'expose\' AND event_string_value = \'my_slug\'"\n')),(0,o.kt)("p",null,"You should not define a ",(0,o.kt)("inlineCode",{parentName:"p"},"start_date")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"end_date")," in your Jetstream configuration\nunless it is important for your analysis that the deployment period is not the same as the analysis period."),(0,o.kt)("h3",{id:"metrics-section"},"Metrics section"),(0,o.kt)("p",null,"The metrics section allows you to specify and define the metrics that you're collecting,\nthe statistical summaries that you'd like applied to them, and any filters that you need.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.telemetry.mozilla.org/datasets/jetstream.html"},"Jetstream docmentation at DTMO")," for more details on the analysis window concept."),(0,o.kt)("p",null,"You can use the names of metrics defined in mozanalysis without redefining them.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://mozilla.github.io/mozanalysis/api/metrics/desktop.html"},"mozanalysis metrics documentation"),"\nfor your platform for the set of defined metrics."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[metrics]\n# Metrics to compute for each daily analysis window.\n# Defined as a list of strings. The string should be the "slug" of the metric,\n# which is the name of the Metric object defined in mozanalysis, or the name\n# of the metric definition section in this config file (see below).\ndaily = []\n\n# Metrics to compute for each weekly analysis window.\nweekly = ["uri_count", "retained"]\n\n# Metrics to compute for each 28 days long analysis window\n28_day = ["uri_count"]\n\n# Metrics to compute only for the overall analysis window.\noverall = ["uri_count", "search_count"]\n')),(0,o.kt)("h3",{id:"defining-metrics"},"Defining metrics"),(0,o.kt)("p",null,"You can define a new metric by adding a new section with a name like"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"[metrics.<new_metric_slug>]")),(0,o.kt)("p",null,"For example, you could define a new metric based on a scalar named\n",(0,o.kt)("inlineCode",{parentName:"p"},"browser.engagement.cows_clicked")," this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[metrics.ever_clicked_cows]\n# A clause of a SELECT expression. The expression must contain an aggregation function.\n# The expression is evaluated with `GROUP BY client_id, branch` over an analysis window.\n# Interpreted as a Jinja2 template. The mozanalysis helper functions are available,\n# so you could equivalently write the expression below like:\n# select_expression = "{{agg_sum("payload.processes.parent.scalars.browser_engagment_cows_clicked")}} > 0"\n# See https://mozilla.github.io/mozanalysis/api/metrics.html for details.\nselect_expression = "SUM(COALESCE(payload.processes.parent.scalars.browser_engagement_cows_clicked)) > 0"\n\n# The data source to use. You can use the slug of a data source defined in mozanalysis,\n# or else define a new data source below.\ndata_source = "main"\n\n# Whether larger values of this metric are subjectively "better" or not.\n# This defaults to true so you don\'t need to specify it for engagement-type metrics\n# where we\'re trying to encourage more of something. But for performance metrics,\n# bigger is often worse, so you should set this to false.\nbigger_is_better = true\n\n# A friendly metric name displayed in dashboards.\nfriendly_name = "Cows clicked"\n\n# A description that will be displayed by dashboards.\ndescription = "Number of cows clicked"\n\n# Whether to compute the metric on an exposures basis, an enrollments basis, or both.\n# An enrollments basis includes all users that enrolled. This is currently the default.\n# An exposures basis includes all users that would have experienced a difference in their\n# user experience as a result of the experiment; it is a subset of enrollments.\n# We may default to an exposures basis in the future.\nexposure_basis = ["exposures", "enrollments"]\n')),(0,o.kt)("p",null,"You should also add some sections to describe how your new metrics should be summarized for reporting.\nYou can do this by adding a statistics section to the metric for the statistic you want."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/jetstream/statistics"},"Statistics")," for a list of supported statistics and details about implementing your own."),(0,o.kt)("p",null,"This looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[metrics.ever_clicked_cows.statistics.binomial]\n# Sometimes it\'s useful to specify a "pre-treatment" to drop extreme values\n# or perform a transformation. There is a list of these in the Jetstream wiki.\n# They\'re specified like this:\n# pre_treatments = [\n#     {name = "drop_nulls"},   # \u26a0\ufe0f Use this pretreatment judiciously!\n#                              # It can cause misleading results in\n#                              # the presence of churn. Engagement metrics\n#                              # should be coalesced to zero instead,\n#                              # or you should handle zeros explicitly.\n#     {name = "log", base = 2},\n# ]\n# They don\'t make much sense for a binomial statistic, though.\n\n# You can also change the default width of the confidence interval.\nci_width = 0.95\n')),(0,o.kt)("p",null,"To put it all together, the metrics section (without any comments) for this probe could look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[metrics]\nweekly = ["ever_clicked_cows"]\n\n[metrics.ever_clicked_cows]\nselect_expression = "SUM(COALESCE(payload.processes.parent.scalars.browser_engagement_cows_clicked)) > 0"\ndata_source = "main"\n\n[metrics.ever_clicked_cows.statistics.binomial]\n')),(0,o.kt)("h3",{id:"defining-data-sources"},"Defining data sources"),(0,o.kt)("p",null,"Most of the regular data sources are already defined in mozanalysis,\nbut you can define a new one in a similar way to how new metrics are defined."),(0,o.kt)("p",null,"Add a section that looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[data_sources.my_cool_data_source]\n# FROM expression - often just a fully-qualified table name. Sometimes a subquery.\nfrom_expression = "(SELECT client_id, experiments, submission_date FROM my_cool_table)"\n\n# See https://mozilla.github.io/mozanalysis/api/metrics.html#mozanalysis.metrics.DataSource for details.\nexperiments_column_type = "native"\n')),(0,o.kt)("p",null,"Then, your new metric can refer to it like ",(0,o.kt)("inlineCode",{parentName:"p"},'data_source = "my_cool_data_source"'),"."),(0,o.kt)("h3",{id:"defining-segments"},"Defining segments"),(0,o.kt)("p",null,"You can define new segments, just like you can define new metrics."),(0,o.kt)("p",null,"This looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"[segments.my_segment]\n# Note the aggregation function; these expressions are grouped over client_id\nselect_expression = '{{agg_any(\"is_default_browser\")}}'\ndata_source = \"my_data_source\"\n\n[segments.data_sources.my_data_source]\nfrom_expression = '(SELECT submission_date, client_id, is_default_browser FROM my_cool_table)'\n")),(0,o.kt)("p",null,"Learn more about defining a segment data source in the ",(0,o.kt)("a",{parentName:"p",href:"https://mozilla.github.io/mozanalysis/api/segments.html#mozanalysis.segments.SegmentDataSource"},"mozanalysis documentation"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"clients_last_seen")," table is particularly useful for segmentation because each client should be present on the ",(0,o.kt)("inlineCode",{parentName:"p"},"submission_date")," when they enroll.\nIf you are not using ",(0,o.kt)("inlineCode",{parentName:"p"},"clients_last_seen"),", you probably want to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"window_start")," argument for the segment data source to a value more negative than zero,\nwhich controls how far back before enrollment mozanalysis will look to compute the segment expression."),(0,o.kt)("p",null,"For example, to aggregate over rows from the week prior to enrollment, the segment data source should be defined with ",(0,o.kt)("inlineCode",{parentName:"p"},"window_start = -7"),"."),(0,o.kt)("p",null,"To segment on fields in the telemetry environment, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," ping table (not the derived ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," table) with no lookback period,\nsince the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," ping that contains the enrollment event will necessarily be received\non the date of enrollment."),(0,o.kt)("h3",{id:"outcome-snippets"},"Outcome snippets"),(0,o.kt)("p",null,'Outcome snippets, which define a collection of summaries with a common theme (e.g. "performace", "Picture in Picture use"),\nare stored in the ',(0,o.kt)("inlineCode",{parentName:"p"},"outcomes/")," directory and file names serve as unique identifiers. Outcome snippets are organized in different\nsubdirectories that represent the application they are supporting, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"fenix/")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"firefox_desktop/"),"."),(0,o.kt)("p",null,"Configuration files have a set of ",(0,o.kt)("a",{parentName:"p",href:"#defining-metrics"},(0,o.kt)("inlineCode",{parentName:"a"},"[metrics]")," definitions")," and ",(0,o.kt)("a",{parentName:"p",href:"#defining-data-sources"},(0,o.kt)("inlineCode",{parentName:"a"},"[data_sources]")),".\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"friendly_name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," are required at the top of the outcome snippet config file."),(0,o.kt)("p",null,"Unlike experiment configurations, the ",(0,o.kt)("inlineCode",{parentName:"p"},"[metrics]")," section does not specify the analysis windows metrics\nare computed for. Jetstream computes metrics defined in outcome snippets for weekly and overall\nanalysis windows."),(0,o.kt)("p",null,"Outcome snippets look, for example, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"friendly_name = 'Example config'\ndescription = 'Example outcome snippet'\n\n[metrics.total_amazon_search_count]\nselect_expression = \"SUM(CASE WHEN engine like 'amazon%' then sap else 0 end)\"\ndata_source = \"search_clients_engines_sources_daily\"\n[metrics.total_amazon_search_count.statistics.bootstrap_mean]\n[metrics.total_amazon_search_count.statistics.deciles]\n\n[metrics.urlbar_amazon_search_count]\nselect_expression = \"\"\"\nSUM(CASE\n        WHEN source = 'alias' and engine like 'amazon%' then sap\n        WHEN source = 'urlbar' and engine like 'amazon%' then sap\n        WHEN source = 'urlbar-searchmode' and engine like 'amazon%' then sap\n        else 0 end)\"\"\"\ndata_source = \"search_clients_engines_sources_daily\"\n[metrics.urlbar_amazon_search_count.statistics.bootstrap_mean]\n[metrics.urlbar_amazon_search_count.statistics.deciles]\n")))}u.isMDXComponent=!0}}]);