(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[822],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,g=d["".concat(o,".").concat(h)]||d[h]||m[h]||i;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(7294),n=r(9443);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),c="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var m=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,m=e.values,d=e.groupId,h=e.className,g=i(),p=g.tabGroupChoices,f=g.setTabGroupChoices,y=(0,a.useState)(n),b=y[0],x=y[1],v=a.Children.toArray(e.children),E=[];if(null!=d){var w=p[d];null!=w&&w!==b&&m.some((function(e){return e.value===w}))&&x(w)}var k=function(e){var t=e.currentTarget,r=E.indexOf(t),a=m[r].value;x(a),null!=d&&(f(d,a),setTimeout((function(){var e,r,a,n,i,l,c,s;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,l=window,c=l.innerHeight,s=l.innerWidth,r>=0&&i<=s&&n<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var a=E.indexOf(e.target)+1;r=E[a]||E[0];break;case s:var n=E.indexOf(e.target)-1;r=E[n]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},m.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:N,onFocus:k,onClick:k},r)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){"use strict";var a=(0,r(7294).createContext)(void 0);t.Z=a},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(7294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e){var t=e.className,r=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,o=e.strokeWidth,s=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},s,c({pathRadius:i,dashRatio:n,counterClockwise:r})),d:l({pathRadius:i,counterClockwise:r}),strokeWidth:o,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,n=2*Math.PI*a,i=(1-r)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-i:i)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,r),a)-r)/(a-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,n=e.classes,l=e.counterClockwise,c=e.styles,o=e.strokeWidth,s=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,a.createElement)("svg",{className:n.root+" "+r,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:n.background,style:c.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(i,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:o,style:c.trail}),(0,a.createElement)(i,{className:n.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:o,style:c.path}),s?(0,a.createElement)("text",{className:n.text,style:c.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component);function s(e){var t=e.part,r=Math.round((t-1)/60*100);return(0,a.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),a.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},a.createElement(o,{value:r,text:r+"%"}))}},8416:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return ee},default:function(){return ne},frontMatter:function(){return $},metadata:function(){return te},toc:function(){return re}});var a,n,i,l,c,o,s,u,m,d,h,g,p,f,y,b,x,v,E,w,k,N,O,C,P,j,_,S,T,R,q,H,Z,B,I,D,W,M,A=r(2122),F=r(9756),V=r(7294),Q=r(3905),z=r(8787),G=r(5064),L=r(8215),X=["title","titleId"];function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var J=function(e){var t=e.title,r=e.titleId,A=K(e,X);return V.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,a||(a=V.createElement("defs",null,V.createElement("filter",{x:0,y:0,width:1,height:1,id:"single-card-focus-question-1_yml__a"},V.createElement("feFlood",{floodColor:"#0ff"})))),n||(n=V.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),i||(i=V.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=V.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),c||(c=V.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),o||(o=V.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),V.createElement("svg",U({height:100,width:90,x:464,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,s||(s=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=V.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#single-card-focus-question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=V.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),V.createElement("svg",U({height:100,width:70,x:554,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,d||(d=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:70,x:632,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,h||(h=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:70,x:710,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,g||(g=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:70,x:788,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,p||(p=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:70,x:866,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,f||(f=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,y||(y=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),b||(b=V.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:122})),V.createElement("svg",U({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,x||(x=V.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/purple.svg"}))),v||(v=V.createElement("image",{height:70,width:50,x:564,xlinkHref:"/img/pieces/arrow.svg",y:85})),E||(E=V.createElement("circle",{cx:589,cy:110,fill:"#8a2be2",r:15,stroke:"#000",strokeWidth:2})),w||(w=V.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:122})),V.createElement("svg",U({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,k||(k=V.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/purple.svg"}))),N||(N=V.createElement("image",{height:70,width:50,x:642,xlinkHref:"/img/pieces/arrow.svg",y:85})),O||(O=V.createElement("circle",{cx:667,cy:110,fill:"#8a2be2",r:15,stroke:"#000",strokeWidth:2})),C||(C=V.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),V.createElement("svg",U({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,P||(P=V.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/purple.svg"}))),j||(j=V.createElement("image",{height:70,width:50,x:720,xlinkHref:"/img/pieces/arrow.svg",y:85})),_||(_=V.createElement("circle",{cx:745,cy:110,fill:"#8a2be2",r:15,stroke:"#000",strokeWidth:2})),S||(S=V.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),V.createElement("svg",U({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,T||(T=V.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/purple.svg"}))),R||(R=V.createElement("image",{height:70,width:50,x:798,xlinkHref:"/img/pieces/arrow.svg",y:85})),q||(q=V.createElement("circle",{cx:823,cy:110,fill:"#8a2be2",r:15,stroke:"#000",strokeWidth:2})),V.createElement("svg",U({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,H||(H=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,Z||(Z=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),V.createElement("svg",U({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,B||(B=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,I||(I=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,D||(D=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,W||(W=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",U({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,M||(M=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},Y=["components"],$={id:"single-card-focus-question-1",title:"Single Card Focus (Question 1)"},ee=void 0,te={unversionedId:"beginner/single-card-focus-question-1",id:"beginner/single-card-focus-question-1",isDocsHomePage:!1,title:"Single Card Focus (Question 1)",description:"<Tabs",source:"@site/docs/beginner/single-card-focus-question-1.md",sourceDirName:"beginner",slug:"/beginner/single-card-focus-question-1",permalink:"/docs/beginner/single-card-focus-question-1",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/single-card-focus-question-1.md",version:"current",frontMatter:{id:"single-card-focus-question-1",title:"Single Card Focus (Question 1)"},sidebar:"mainSidebar",previous:{title:"Single Card Focus",permalink:"/docs/beginner/single-card-focus"},next:{title:"Single Card Focus (Question 2)",permalink:"/docs/beginner/single-card-focus-question-2"}},re=[],ae={toc:re};function ne(e){var t=e.components,r=(0,F.Z)(e,Y);return(0,Q.kt)("wrapper",(0,A.Z)({},ae,r,{components:t,mdxType:"MDXLayout"}),(0,Q.kt)(z.Z,{part:"27",mdxType:"BeginnersGuideProgress"}),(0,Q.kt)(G.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,Q.kt)(L.Z,{value:"question",mdxType:"TabItem"},(0,Q.kt)("ul",null,(0,Q.kt)("li",{parentName:"ul"},"Bob has a completely unclued hand."),(0,Q.kt)("li",{parentName:"ul"},"Alice clues purple to Bob, touching four cards."),(0,Q.kt)("li",{parentName:"ul"},"Which slot is focused?"))),(0,Q.kt)(L.Z,{value:"solution",mdxType:"TabItem"},(0,Q.kt)("ul",null,(0,Q.kt)("li",{parentName:"ul"},"Slot 1, because it is the left-most card.",(0,Q.kt)("ul",{parentName:"li"},(0,Q.kt)("li",{parentName:"ul"},'(All of the cards are "new" and none of them are on chop.)')))))),(0,Q.kt)(J,{mdxType:"SingleCardFocusQuestion1"}))}ne.isMDXComponent=!0},6010:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);