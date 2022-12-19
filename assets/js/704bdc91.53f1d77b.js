/*! For license information please see 704bdc91.53f1d77b.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[1864,5767,2601,7016,2368,5685,4307,4992,2701,4951,4273,7617,5876,7408,5977,7803,5232,7612,3732,4061,6085,4494,5974,2366],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(t),d=r,f=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5162:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(7294),r=t(6010),a="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:t},n)}},5488:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var i=t(3117),r=t(7294),a=t(6010),o=t(2389),s=t(7392),l=t(7094),c=t(2466),u="tabList__CuJ",p="tabItem_LNqP";function g(e){var n,t,o=e.lazy,g=e.block,d=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=f?f:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,s.l)(m,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==x&&!m.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.U)(),w=k.tabGroupChoices,q=k.setTabGroupChoices,O=(0,r.useState)(x),E=O[0],P=O[1],C=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=w[v];null!=j&&j!==E&&m.some((function(e){return e.value===j}))&&P(j)}var N=function(e){var n=e.currentTarget,t=C.indexOf(n),i=m[t].value;i!==E&&(T(n),P(i),null!=v&&q(v,String(i)))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i,r=C.indexOf(e.currentTarget)+1;t=null!=(i=C[r])?i:C[0];break;case"ArrowLeft":var a,o=C.indexOf(e.currentTarget)-1;t=null!=(a=C[o])?a:C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":g},b)},m.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:N,onClick:N},o,{className:(0,a.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,o.Z)();return r.createElement(g,(0,i.Z)({key:String(n)},e))}},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},1961:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var i=t(7872),r=t(7294),a=t(5774),o=t(6679),s=o.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],l=[];!function e(n,t){for(var r,a=(0,i.Z)(t);!(r=a()).done;){var o=r.value;"string"==typeof o?n.push(o):e(n,Object.values(o)[0])}}(l,s),"beginner"===l[0]&&l.shift();var c=l.length;function u(e){var n=e.id,t=l.findIndex((function(e){return"beginner/"+n===e}));if(-1===t)throw new Error("page id not found in sidebar");var i=Math.round((t+1)/c*100);return(0,r.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),r.createElement("div",{id:"percent"},r.createElement(a.Ip,{value:i,text:i+"%"}))}},4551:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return q},contentTitle:function(){return k},default:function(){return P},frontMatter:function(){return x},metadata:function(){return w},toc:function(){return O}});var i,r,a,o,s,l=t(3117),c=t(102),u=t(7294),p=t(3905),g=t(1961),d=t(5488),f=t(5162),v=["title","titleId"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},b.apply(this,arguments)}function h(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=function(e){var n=e.title,t=e.titleId,l=h(e,v);return u.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:125,viewBox:"0 0 554 125",width:554,className:"example","aria-labelledby":t},l),n?u.createElement("title",{id:t},n):null,u.createElement("svg",b({height:100,width:90,x:74,className:"example","aria-labelledby":t},l),n?u.createElement("title",{id:t},n):null,u.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice")),i||(i=u.createElement("image",{height:100,width:70,x:164,xlinkHref:"/img/pieces/cards/blue5.svg"})),r||(r=u.createElement("image",{height:100,width:70,x:242,xlinkHref:"/img/pieces/cards/yellow1.svg"})),a||(a=u.createElement("image",{height:100,width:70,x:320,xlinkHref:"/img/pieces/cards/yellow2.svg"})),o||(o=u.createElement("image",{height:100,width:70,x:398,xlinkHref:"/img/pieces/cards/yellow3.svg"})),s||(s=u.createElement("image",{height:100,width:70,x:476,xlinkHref:"/img/pieces/cards/green1.svg"})))},y=["components"],x={id:"chop-question-1",title:"The Chop (Question 1)"},k=void 0,w={unversionedId:"beginner/chop-question-1",id:"beginner/chop-question-1",title:"The Chop (Question 1)",description:"<Tabs",source:"@site/docs/beginner/chop-question-1.mdx",sourceDirName:"beginner",slug:"/beginner/chop-question-1",permalink:"/docs/beginner/chop-question-1",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/chop-question-1.mdx",tags:[],version:"current",frontMatter:{id:"chop-question-1",title:"The Chop (Question 1)"},sidebar:"mainSidebar",previous:{title:"The Chop",permalink:"/docs/beginner/chop"},next:{title:"The Chop (Question 2)",permalink:"/docs/beginner/chop-question-2"}},q={},O=[],E={toc:O};function P(e){var n=e.components,t=(0,c.Z)(e,y);return(0,p.kt)("wrapper",(0,l.Z)({},E,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)(g.Z,{id:"chop-question-1",mdxType:"BeginnersGuideProgress"}),(0,p.kt)(d.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,p.kt)(f.Z,{value:"question",mdxType:"TabItem"},(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"What slot is Alice's chop?"))),(0,p.kt)(f.Z,{value:"solution",mdxType:"TabItem"},(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Slot 5, the green 1 (because no cards have clues on them).")))),(0,p.kt)(m,{mdxType:"ChopQuestion1"}))}P.isMDXComponent=!0},5774:function(e,n,t){"use strict";t.d(n,{Ip:function(){return l}});var i=t(7294),r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},r(e,n)};function a(e){var n=e.className,t=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,l=e.strokeWidth,c=e.style;return(0,i.createElement)("path",{className:n,style:Object.assign({},c,s({pathRadius:a,dashRatio:r,counterClockwise:t})),d:o({pathRadius:a,counterClockwise:t}),strokeWidth:l,fillOpacity:0})}function o(e){var n=e.pathRadius,t=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+n+"\n      a "+n+","+n+" "+t+" 1 1 0,"+2*n+"\n      a "+n+","+n+" "+t+" 1 1 0,-"+2*n+"\n    "}function s(e){var n=e.counterClockwise,t=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-t)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(n?-a:a)+"px"}}var l=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},n.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},n.prototype.getPathRatio=function(){var e=this.props,n=e.value,t=e.minValue,i=e.maxValue;return(Math.min(Math.max(n,t),i)-t)/(i-t)},n.prototype.render=function(){var e=this.props,n=e.circleRatio,t=e.className,r=e.classes,o=e.counterClockwise,s=e.styles,l=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+t,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:r.trail,counterClockwise:o,dashRatio:n,pathRadius:u,strokeWidth:l,style:s.trail}),(0,i.createElement)(a,{className:r.path,counterClockwise:o,dashRatio:p*n,pathRadius:u,strokeWidth:l,style:s.path}),c?(0,i.createElement)("text",{className:r.text,style:s.text,x:50,y:50},c):null)},n.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},n}(i.Component)}}]);