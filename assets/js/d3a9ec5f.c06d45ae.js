(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[179],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(7294),n=r(9443);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var m=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,m=e.values,p=e.groupId,h=e.className,d=i(),g=d.tabGroupChoices,f=d.setTabGroupChoices,y=(0,a.useState)(n),b=y[0],v=y[1],x=a.Children.toArray(e.children),k=[];if(null!=p){var w=g[p];null!=w&&w!==b&&m.some((function(e){return e.value===w}))&&v(w)}var E=function(e){var t=e.currentTarget,r=k.indexOf(t),a=m[r].value;v(a),null!=p&&(f(p,a),setTimeout((function(){var e,r,a,n,i,l,o,c;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,r>=0&&i<=c&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var a=k.indexOf(e.target)+1;r=k[a]||k[0];break;case c:var n=k.indexOf(e.target)-1;r=k[n]||k[k.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},m.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:E,onClick:E},r)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){"use strict";var a=(0,r(7294).createContext)(void 0);t.Z=a},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a=r(7294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e){var t=e.className,r=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:i,dashRatio:n,counterClockwise:r})),d:l({pathRadius:i,counterClockwise:r}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,n=2*Math.PI*a,i=(1-r)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-i:i)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,r),a)-r)/(a-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,n=e.classes,l=e.counterClockwise,o=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,a.createElement)("svg",{className:n.root+" "+r,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:n.background,style:o.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(i,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:o.trail}),(0,a.createElement)(i,{className:n.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:s,style:o.path}),c?(0,a.createElement)("text",{className:n.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component);function c(e){var t=e.part,r=Math.round((t-1)/60*100);return(0,a.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),a.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},a.createElement(s,{value:r,text:r+"%"}))}},275:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return U},default:function(){return $},frontMatter:function(){return X},metadata:function(){return K},toc:function(){return J}});var a,n,i,l,o,s,c,u,m,p,h,d,g,f,y,b,v,x,k,w,E,N,P,C,O,T,j,_,H,R,S,q,A,B=r(2122),I=r(9756),Z=r(7294),M=r(3905),D=r(8787),W=r(5064),V=r(8215),z=["title","titleId"];function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var F=function(e){var t=e.title,r=e.titleId,B=G(e,z);return Z.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:390,viewBox:"0 0 944 390",width:944,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,a||(a=Z.createElement("defs",null,Z.createElement("filter",{x:0,y:0,width:1,height:1,id:"prompt-question-3_yml__a"},Z.createElement("feFlood",{floodColor:"#0ff"})))),n||(n=Z.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),i||(i=Z.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=Z.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green1.svg"})),o||(o=Z.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue2.svg"})),s||(s=Z.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple1.svg"})),Z.createElement("svg",Q({height:100,width:90,x:464,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,c||(c=Z.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=Z.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#prompt-question-3_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=Z.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),Z.createElement("svg",Q({height:100,width:70,x:554,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,p||(p=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",Q({height:100,width:70,x:632,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,h||(h=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",Q({height:100,width:70,x:710,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,d||(d=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",Q({height:100,width:70,x:788,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,g||(g=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",Q({height:100,width:70,x:866,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,f||(f=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",Q({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,y||(y=Z.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),b||(b=Z.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/blue1.svg",y:125})),v||(v=Z.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple4.svg",y:125})),x||(x=Z.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/blue2.svg",y:125})),k||(k=Z.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green1.svg",y:125})),w||(w=Z.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),E||(E=Z.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/red5.svg",y:125})),Z.createElement("svg",Q({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,N||(N=Z.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),P||(P=Z.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/green4.svg",y:250})),C||(C=Z.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue1.svg",y:250})),O||(O=Z.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green4.svg",y:250})),T||(T=Z.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:247})),j||(j=Z.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/purple3.svg",y:250})),Z.createElement("svg",Q({height:20,width:64,x:791,y:355,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,_||(_=Z.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),Z.createElement("svg",Q({height:20,width:64,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,H||(H=Z.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"(p)")))),R||(R=Z.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:247})),S||(S=Z.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple2.svg",y:250})),Z.createElement("svg",Q({height:20,width:64,x:869,y:355,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,q||(q=Z.createElement("path",{stroke:"#fff",d:"M0 0h64v20H0z"})),Z.createElement("svg",Q({height:20,width:64,className:"example","aria-labelledby":r},B),t?Z.createElement("title",{id:r},t):null,A||(A=Z.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"(p)")))))},L=["components"],X={id:"prompt-question-3",title:"The Prompt (Question 3)"},U=void 0,K={unversionedId:"beginner/prompt-question-3",id:"beginner/prompt-question-3",isDocsHomePage:!1,title:"The Prompt (Question 3)",description:"<Tabs",source:"@site/docs/beginner/prompt-question-3.md",sourceDirName:"beginner",slug:"/beginner/prompt-question-3",permalink:"/docs/beginner/prompt-question-3",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/prompt-question-3.md",version:"current",frontMatter:{id:"prompt-question-3",title:"The Prompt (Question 3)"},sidebar:"mainSidebar",previous:{title:"The Prompt (Question 2)",permalink:"/docs/beginner/prompt-question-2"},next:{title:"The Finesse",permalink:"/docs/beginner/finesse"}},J=[],Y={toc:J};function $(e){var t=e.components,r=(0,I.Z)(e,L);return(0,M.kt)("wrapper",(0,B.Z)({},Y,r,{components:t,mdxType:"MDXLayout"}),(0,M.kt)(D.Z,{part:"58",mdxType:"BeginnersGuideProgress"}),(0,M.kt)(W.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,M.kt)(V.Z,{value:"question",mdxType:"TabItem"},(0,M.kt)("ul",null,(0,M.kt)("li",{parentName:"ul"},"Cathy has two unknown purple cards in her hand."),(0,M.kt)("li",{parentName:"ul"},"Alice wants to give a ",(0,M.kt)("em",{parentName:"li"},"Play Clue")," to the purple 4."),(0,M.kt)("li",{parentName:"ul"},"What clue should Alice give?"))),(0,M.kt)(V.Z,{value:"solution",mdxType:"TabItem"},(0,M.kt)("ul",null,(0,M.kt)("li",{parentName:"ul"},"It is possible for Alice to give a ",(0,M.kt)("em",{parentName:"li"},"Play Clue")," to the purple 4 either by cluing purple or by cluing number 4. Both clues would focus the purple 4."),(0,M.kt)("li",{parentName:"ul"},"However, this would signal a ",(0,M.kt)("em",{parentName:"li"},"Prompt")," to Cathy, and she would play her purple cards from left-to-right. That means that the purple 3 would misplay from slot 3."),(0,M.kt)("li",{parentName:"ul"},"Thus, Alice is not allowed to give a ",(0,M.kt)("em",{parentName:"li"},"Play Clue")," to the purple 4."),(0,M.kt)("li",{parentName:"ul"},"Instead, Alice can clue number 3 to Cathy. This would focus the purple 3 as a ",(0,M.kt)("em",{parentName:"li"},"Self-Prompt"),"."),(0,M.kt)("li",{parentName:"ul"},"After that, Alice can give a ",(0,M.kt)("em",{parentName:"li"},"Play Clue")," to the purple 4 without any problems."),(0,M.kt)("li",{parentName:"ul"},"Note that normally, players are not supposed to give ",(0,M.kt)("em",{parentName:"li"},"Tempo Clues"),", because they do not meet ",(0,M.kt)("em",{parentName:"li"},"Minimum Clue Value Principle"),". But here, Alice has a very good reason to give a ",(0,M.kt)("em",{parentName:"li"},"Tempo Clue"),' - Cathy\'s cards are "out of order". So, it is okay to break the rule.')))),(0,M.kt)(F,{mdxType:"PromptQuestion3"}))}$.isMDXComponent=!0},6010:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);