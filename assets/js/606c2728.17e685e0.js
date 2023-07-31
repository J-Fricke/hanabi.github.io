/*! For license information please see 606c2728.17e685e0.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[481,6807,9074,8895,5010,4788,529,9047,2641,4677,620,926,7389,6216,1702,1566,7800,6480,1954,1038,8343,7791,203,8786],{433:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},2808:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(3117),a=n(7294),i=n(4334),l=n(3735),s=n(6775),o=n(4423),c=n(636),u=n(9200);function g(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:g(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function h(e){var t,n,r,i,l=e.defaultValue,s=e.queryString,o=void 0!==s&&s,c=e.groupId,g=p(e),h=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:g})})),f=h[0],b=h[1],v=m({queryString:o,groupId:c}),y=v[0],x=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=w[0],E=w[1],q=function(){var e=null!=y?y:k;return d({value:e,tabValues:g})?e:null}();return(0,a.useLayoutEffect)((function(){q&&b(q)}),[q]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),E(e)}),[x,E,g]),tabValues:g}}var f=n(5730),b="tabList__CuJ",v="tabItem_LNqP";function y(e){var t=e.className,n=e.block,s=e.selectedValue,o=e.selectValue,c=e.tabValues,u=[],g=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(g(t),o(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var i,l=u.indexOf(e.currentTarget)-1;n=null!=(i=u[l])?i:u[u.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:p},l,{className:(0,i.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=h(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(x,(0,r.Z)({},e,t)))}function k(e){var t=(0,f.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},2721:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},7241:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7872),a=n(7294),i=n(5774),l=n(2721),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],o=[];!function e(t,n){for(var a,i=(0,r.Z)(n);!(a=i()).done;){var l=a.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(o,s),"beginner"===o[0]&&o.shift();var c=o.length;function u(e){var t=e.id,n=o.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/c*100);return(0,a.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),a.createElement("div",{id:"percent"},a.createElement(i.Ip,{value:r,text:r+"%"}))}},8044:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return M},contentTitle:function(){return A},default:function(){return W},frontMatter:function(){return D},metadata:function(){return G},toc:function(){return H}});var r,a,i,l,s,o,c,u,g,p,d,m,h,f,b,v,y,x,w,k,E,q,O,N=n(3117),P=n(102),C=n(7294),S=n(3905),T=n(7241),j=n(2808),I=n(433),V=["title","titleId"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R=function(e){var t=e.title,n=e.titleId,N=B(e,V);return C.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,r||(r=C.createElement("defs",null,C.createElement("filter",{x:0,y:0,width:1,height:1,id:"other-general-strategy-question-5_yml__a"},C.createElement("feFlood",{floodColor:"#0ff"})))),a||(a=C.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red5.svg"})),i||(i=C.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=C.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),s||(s=C.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue4.svg"})),o||(o=C.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple1.svg"})),C.createElement("svg",_({height:100,width:90,x:464,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),c||(c=C.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#other-general-strategy-question-5_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=C.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),C.createElement("svg",_({height:100,width:70,x:554,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,g||(g=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",_({height:100,width:70,x:632,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,p||(p=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",_({height:100,width:70,x:710,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,d||(d=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",_({height:100,width:70,x:788,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,m||(m=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",_({height:100,width:70,x:866,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,h||(h=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",_({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),f||(f=C.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/yellow5.svg",y:125})),b||(b=C.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue4.svg",y:125})),v||(v=C.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green3.svg",y:125})),y||(y=C.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/yellow3.svg",y:125})),x||(x=C.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/red1.svg",y:125})),C.createElement("svg",_({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),C.createElement("svg",_({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,w||(w=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",_({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,k||(k=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",_({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,E||(E=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",_({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,q||(q=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",_({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,O||(O=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},Z=["components"],D={id:"other-general-strategy-question-5",title:"Other General Strategy (Question 5)"},A=void 0,G={unversionedId:"beginner/other-general-strategy-question-5",id:"beginner/other-general-strategy-question-5",title:"Other General Strategy (Question 5)",description:"<Tabs",source:"@site/docs/beginner/other-general-strategy-question-5.mdx",sourceDirName:"beginner",slug:"/beginner/other-general-strategy-question-5",permalink:"/docs/beginner/other-general-strategy-question-5",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/other-general-strategy-question-5.mdx",tags:[],version:"current",frontMatter:{id:"other-general-strategy-question-5",title:"Other General Strategy (Question 5)"},sidebar:"mainSidebar",previous:{title:"Other General Strategy (Question 4)",permalink:"/docs/beginner/other-general-strategy-question-4"},next:{title:"Special Moves",permalink:"/docs/beginner/special-moves"}},M={},H=[],Q={toc:H};function W(e){var t=e.components,n=(0,P.Z)(e,Z);return(0,S.kt)("wrapper",(0,N.Z)({},Q,n,{components:t,mdxType:"MDXLayout"}),(0,S.kt)(T.Z,{id:"other-general-strategy-question-4",mdxType:"BeginnersGuideProgress"}),(0,S.kt)(j.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,S.kt)(I.Z,{value:"question",mdxType:"TabItem"},(0,S.kt)("ul",null,(0,S.kt)("li",{parentName:"ul"},"Enumerate all of the legal clues that Alice can give."),(0,S.kt)("li",{parentName:"ul"},"Of these possibilities, what clue should Alice give?"))),(0,S.kt)(I.Z,{value:"solution",mdxType:"TabItem"},(0,S.kt)("ul",null,(0,S.kt)("li",{parentName:"ul"},"Alice can clue green to Bob as a ",(0,S.kt)("em",{parentName:"li"},"Play Clue")," on the green 3.",(0,S.kt)("ul",{parentName:"li"},(0,S.kt)("li",{parentName:"ul"},'This would "get" one card.'))),(0,S.kt)("li",{parentName:"ul"},"Alice can clue number 3 to Bob as a ",(0,S.kt)("em",{parentName:"li"},"Play Clue")," on the green 3.",(0,S.kt)("ul",{parentName:"li"},(0,S.kt)("li",{parentName:"ul"},'This would "get" two cards. (Bob would play the green 3 and hold on to the yellow 3 for later.)'))),(0,S.kt)("li",{parentName:"ul"},'Alice knows that normally, color clues are preferred to number clues. But that\'s only when the color clue and the number clue are more or less "the same". Here, it is much better to get two cards than to get one card, so Alice should clue number 3.')))),(0,S.kt)(R,{mdxType:"OtherGeneralStrategyQuestion5"}))}W.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(m,l(l({ref:t},g),{},{components:n})):r.createElement(m,l({ref:t},g))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return o}});var r=n(7294),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},a(e,t)};function i(e){var t=e.className,n=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,o=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,s({pathRadius:i,dashRatio:a,counterClockwise:n})),d:l({pathRadius:i,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,a=2*Math.PI*r,i=(1-n)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,a=e.classes,l=e.counterClockwise,s=e.styles,o=e.strokeWidth,c=e.text,u=this.getPathRadius(),g=this.getPathRatio();return(0,r.createElement)("svg",{className:a.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:a.background,style:s.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(i,{className:a.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:o,style:s.trail}),(0,r.createElement)(i,{className:a.path,counterClockwise:l,dashRatio:g*t,pathRadius:u,strokeWidth:o,style:s.path}),c?(0,r.createElement)("text",{className:a.text,style:s.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);