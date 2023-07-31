/*! For license information please see e170ca5b.2b21504c.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[2551,6807,9074,8895,5010,4788,529,9047,2641,4677,620,926,7389,6216,1702,1566,7800,6480,1954,1038,8343,7791,203,8786],{433:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),i=n(4334),a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,l),hidden:n},t)}},2808:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(3117),i=n(7294),a=n(4334),l=n(3735),o=n(6775),s=n(4423),c=n(636),u=n(9200);function p(e){return function(e){var t,n;return null!=(t=null==(n=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,a=(0,o.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(l),(0,i.useCallback)((function(e){if(l){var t=new URLSearchParams(a.location.search);t.set(l,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[l,a])]}function h(e){var t,n,r,a,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,c=e.groupId,p=d(e),h=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:l,tabValues:p})})),f=h[0],b=h[1],v=m({queryString:s,groupId:c}),y=v[0],x=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),r=n[0],a=n[1],[r,(0,i.useCallback)((function(e){t&&a.set(e)}),[t,a])]),k=w[0],E=w[1],q=function(){var e=null!=y?y:k;return g({value:e,tabValues:p})?e:null}();return(0,i.useLayoutEffect)((function(){q&&b(q)}),[q]),{selectedValue:f,selectValue:(0,i.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),E(e)}),[x,E,p]),tabValues:p}}var f=n(5730),b="tabList__CuJ",v="tabItem_LNqP";function y(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(p(t),s(r))},g=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,i=u.indexOf(e.currentTarget)+1;n=null!=(r=u[i])?r:u[0];break;case"ArrowLeft":var a,l=u.indexOf(e.currentTarget)-1;n=null!=(a=u[l])?a:u[u.length-1]}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return u.push(e)},onKeyDown:g,onClick:d},l,{className:(0,a.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=a.find((function(e){return e.props.value===r}));return l?(0,i.cloneElement)(l,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=h(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",b)},i.createElement(y,(0,r.Z)({},e,t)),i.createElement(x,(0,r.Z)({},e,t)))}function k(e){var t=(0,f.Z)();return i.createElement(w,(0,r.Z)({key:String(t)},e))}},2721:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},7241:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7872),i=n(7294),a=n(5774),l=n(2721),o=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],s=[];!function e(t,n){for(var i,a=(0,r.Z)(n);!(i=a()).done;){var l=i.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,o),"beginner"===s[0]&&s.shift();var c=s.length;function u(e){var t=e.id,n=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/c*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(a.Ip,{value:r,text:r+"%"}))}},6992:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return W},contentTitle:function(){return M},default:function(){return X},frontMatter:function(){return H},metadata:function(){return Q},toc:function(){return L}});var r,i,a,l,o,s,c,u,p,d,g,m,h,f,b,v,y,x,w,k,E,q,N,O,P,C,T=n(3117),S=n(102),j=n(7294),I=n(3905),V=n(7241),_=n(2808),B=n(433),R=["title","titleId"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var A=function(e){var t=e.title,n=e.titleId,T=D(e,R);return j.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,r||(r=j.createElement("defs",null,j.createElement("filter",{x:0,y:0,width:1,height:1,id:"good-touch-principle-question-2_yml__a"},j.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=j.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),a||(a=j.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=j.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),o||(o=j.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue3.svg"})),s||(s=j.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple3.svg"})),j.createElement("svg",Z({height:100,width:90,x:464,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),c||(c=j.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#good-touch-principle-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=j.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),j.createElement("svg",Z({height:100,width:70,x:554,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,p||(p=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:632,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,d||(d=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:710,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,g||(g=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:788,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,m||(m=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:866,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,h||(h=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),f||(f=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple1.svg",y:125})),b||(b=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple5.svg",y:125})),v||(v=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red4.svg",y:125})),y||(y=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/blue1.svg",y:125})),x||(x=j.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/red2.svg",y:125})),j.createElement("svg",Z({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),w||(w=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/green2.svg",y:250})),k||(k=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple2.svg",y:250})),E||(E=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:247})),q||(q=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red3.svg",y:250})),N||(N=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:247})),O||(O=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/red4.svg",y:250})),P||(P=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:247})),C||(C=j.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/green3.svg",y:250})))},G=["components"],H={id:"good-touch-principle-question-2",title:"Good Touch Principle (Question 2)"},M=void 0,Q={unversionedId:"beginner/good-touch-principle-question-2",id:"beginner/good-touch-principle-question-2",title:"Good Touch Principle (Question 2)",description:"<Tabs",source:"@site/docs/beginner/good-touch-principle-question-2.mdx",sourceDirName:"beginner",slug:"/beginner/good-touch-principle-question-2",permalink:"/docs/beginner/good-touch-principle-question-2",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/good-touch-principle-question-2.mdx",tags:[],version:"current",frontMatter:{id:"good-touch-principle-question-2",title:"Good Touch Principle (Question 2)"},sidebar:"mainSidebar",previous:{title:"Good Touch Principle (Question 1)",permalink:"/docs/beginner/good-touch-principle-question-1"},next:{title:"Good Touch Principle (Question 3)",permalink:"/docs/beginner/good-touch-principle-question-3"}},W={},L=[],z={toc:L};function X(e){var t=e.components,n=(0,S.Z)(e,G);return(0,I.kt)("wrapper",(0,T.Z)({},z,n,{components:t,mdxType:"MDXLayout"}),(0,I.kt)(V.Z,{id:"good-touch-principle-question-2",mdxType:"BeginnersGuideProgress"}),(0,I.kt)(_.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,I.kt)(B.Z,{value:"question",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"What action should Alice perform?"),(0,I.kt)("li",{parentName:"ul"},"If Alice should give a clue, what ",(0,I.kt)("em",{parentName:"li"},"card note")," will be written on the focused card? (Be specific.)"))),(0,I.kt)(B.Z,{value:"solution",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"Alice needs to give a ",(0,I.kt)("em",{parentName:"li"},"Play Clue")," to Bob's red 2 before it is discarded."),(0,I.kt)("li",{parentName:"ul"},"If Alice clues red, then it would focus the red 2, but the red 4 would be duplicated (because it is already clued in Cathy's hand)."),(0,I.kt)("li",{parentName:"ul"},"If Alice clues number 2, then it would only touch the red 2."),(0,I.kt)("li",{parentName:"ul"},"Thus, Alice should clue number 2 to Bob."),(0,I.kt)("li",{parentName:"ul"},"Bob will write a ",(0,I.kt)("em",{parentName:"li"},"card note")," with the following identities:",(0,I.kt)("ul",{parentName:"li"},(0,I.kt)("li",{parentName:"ul"},"red 2 (as a ",(0,I.kt)("em",{parentName:"li"},"Play Clue"),")"),(0,I.kt)("li",{parentName:"ul"},"yellow 2 (as a ",(0,I.kt)("em",{parentName:"li"},"2 Save"),")"))),(0,I.kt)("li",{parentName:"ul"},"(Bob knows that it cannot be a ",(0,I.kt)("em",{parentName:"li"},"2 Save")," on a green 2 because that card is present in Cathy's hand and it is not on chop yet.)")))),(0,I.kt)(A,{mdxType:"GoodTouchPrincipleQuestion2"}))}X.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return s}});var r=n(7294),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i(e,t)};function a(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:a,dashRatio:i,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,l=e.counterClockwise,o=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:o.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:s,style:o.path}),c?(0,r.createElement)("text",{className:i.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);