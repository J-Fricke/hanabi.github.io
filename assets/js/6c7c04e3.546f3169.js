(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[449],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,p=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return r?a.createElement(p,l(l({ref:t},u),{},{components:r})):a.createElement(p,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(7294),n=r(9443);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var m=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,m=e.values,d=e.groupId,h=e.className,p=i(),g=p.tabGroupChoices,f=p.setTabGroupChoices,y=(0,a.useState)(n),b=y[0],v=y[1],x=a.Children.toArray(e.children),k=[];if(null!=d){var w=g[d];null!=w&&w!==b&&m.some((function(e){return e.value===w}))&&v(w)}var E=function(e){var t=e.currentTarget,r=k.indexOf(t),a=m[r].value;v(a),null!=d&&(f(d,a),setTimeout((function(){var e,r,a,n,i,l,o,c;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,r>=0&&i<=c&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var a=k.indexOf(e.target)+1;r=k[a]||k[0];break;case c:var n=k.indexOf(e.target)-1;r=k[n]||k[k.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},m.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:E,onClick:E},r)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){"use strict";var a=(0,r(7294).createContext)(void 0);t.Z=a},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a=r(7294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e){var t=e.className,r=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:i,dashRatio:n,counterClockwise:r})),d:l({pathRadius:i,counterClockwise:r}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,n=2*Math.PI*a,i=(1-r)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-i:i)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,r),a)-r)/(a-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,n=e.classes,l=e.counterClockwise,o=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,a.createElement)("svg",{className:n.root+" "+r,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:n.background,style:o.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(i,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:o.trail}),(0,a.createElement)(i,{className:n.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:s,style:o.path}),c?(0,a.createElement)("text",{className:n.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component);function c(e){var t=e.part,r=Math.round((t-1)/60*100);return(0,a.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),a.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},a.createElement(s,{value:r,text:r+"%"}))}},7943:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return L},default:function(){return J},frontMatter:function(){return F},metadata:function(){return X},toc:function(){return U}});var a,n,i,l,o,s,c,u,m,d,h,p,g,f,y,b,v,x,k,w,E,N,O,C,P,S,T,j,_,B,R,q=r(2122),H=r(9756),I=r(7294),Z=r(3905),D=r(8787),A=r(5064),M=r(8215),W=["title","titleId"];function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var z=function(e){var t=e.title,r=e.titleId,q=V(e,W);return I.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,a||(a=I.createElement("defs",null,I.createElement("filter",{x:0,y:0,width:1,height:1,id:"2-save-question-2_yml__a"},I.createElement("feFlood",{floodColor:"#0ff"})))),n||(n=I.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),i||(i=I.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow1.svg"})),l||(l=I.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),o||(o=I.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),s||(s=I.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),I.createElement("svg",Q({height:100,width:90,x:464,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,c||(c=I.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=I.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#2-save-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=I.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),I.createElement("svg",Q({height:100,width:70,x:554,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,d||(d=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",Q({height:100,width:70,x:632,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,h||(h=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",Q({height:100,width:70,x:710,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,p||(p=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",Q({height:100,width:70,x:788,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,g||(g=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",Q({height:100,width:70,x:866,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,f||(f=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",Q({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,y||(y=I.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),b||(b=I.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:122})),I.createElement("svg",Q({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,v||(v=I.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/1.svg"}))),I.createElement("svg",Q({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,x||(x=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",Q({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,k||(k=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",Q({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,w||(w=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),E||(E=I.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),I.createElement("svg",Q({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,N||(N=I.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/2.svg"}))),O||(O=I.createElement("image",{height:70,width:50,x:876,xlinkHref:"/img/pieces/arrow.svg",y:85})),C||(C=I.createElement("circle",{cx:901,cy:110,r:15,stroke:"#fff",strokeWidth:2})),I.createElement("svg",Q({height:16,width:16,x:893,y:102,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,P||(P=I.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.4em"},"2"))),I.createElement("svg",Q({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},q),t?I.createElement("title",{id:r},t):null,S||(S=I.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),T||(T=I.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/green5.svg",y:250})),j||(j=I.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue3.svg",y:250})),_||(_=I.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green4.svg",y:250})),B||(B=I.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/purple3.svg",y:250})),R||(R=I.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple3.svg",y:250})))},G=["components"],F={id:"2-save-question-2",title:"The 2 Save (Question 2)"},L=void 0,X={unversionedId:"beginner/2-save-question-2",id:"beginner/2-save-question-2",isDocsHomePage:!1,title:"The 2 Save (Question 2)",description:"<Tabs",source:"@site/docs/beginner/2-save-question-2.md",sourceDirName:"beginner",slug:"/beginner/2-save-question-2",permalink:"/docs/beginner/2-save-question-2",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/2-save-question-2.md",version:"current",sidebarPosition:2,frontMatter:{id:"2-save-question-2",title:"The 2 Save (Question 2)"},sidebar:"mainSidebar",previous:{title:"The 2 Save (Question 1)",permalink:"/docs/beginner/2-save-question-1"},next:{title:"The 2 Save (Question 3)",permalink:"/docs/beginner/2-save-question-3"}},U=[],K={toc:U};function J(e){var t=e.components,r=(0,H.Z)(e,G);return(0,Z.kt)("wrapper",(0,q.Z)({},K,r,{components:t,mdxType:"MDXLayout"}),(0,Z.kt)(D.Z,{part:"20",mdxType:"BeginnersGuideProgress"}),(0,Z.kt)(A.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,Z.kt)(M.Z,{value:"question",mdxType:"TabItem"},(0,Z.kt)("ul",null,(0,Z.kt)("li",{parentName:"ul"},"Previously in the game, Bob was given a ",(0,Z.kt)("em",{parentName:"li"},"Play Clue")," on a 1. He had planned on playing it on his next turn."),(0,Z.kt)("li",{parentName:"ul"},"Now, Alice clues number 2 to Bob, touching his slot 5."),(0,Z.kt)("li",{parentName:"ul"},"From Bob's perspective, is this a ",(0,Z.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue"),"?"),(0,Z.kt)("li",{parentName:"ul"},"What identity does Bob write on the card?"))),(0,Z.kt)(M.Z,{value:"solution",mdxType:"TabItem"},(0,Z.kt)("ul",null,(0,Z.kt)("li",{parentName:"ul"},"Bob knows that his 1 is either a red 1, a blue 1, or a purple 1.",(0,Z.kt)("ul",{parentName:"li"},(0,Z.kt)("li",{parentName:"ul"},"(These are the 1's left to play on the stacks.)"))),(0,Z.kt)("li",{parentName:"ul"},"If this is a ",(0,Z.kt)("em",{parentName:"li"},"Play Clue"),", then the identity of his 2 would be:",(0,Z.kt)("ul",{parentName:"li"},(0,Z.kt)("li",{parentName:"ul"},"a yellow 2 (directly playable)"),(0,Z.kt)("li",{parentName:"ul"},"or a ",(0,Z.kt)("em",{parentName:"li"},"Delayed Play Clue")," on the two that matches his unknown 1 (e.g. red 2, blue 2, or purple 2)"))),(0,Z.kt)("li",{parentName:"ul"},"However, since Alice's clue touched Bob's chop, it could also be a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue"),". If it is a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue"),", then it could be a ",(0,Z.kt)("em",{parentName:"li"},"2 Save")," on an unplayable 2."),(0,Z.kt)("li",{parentName:"ul"},"Bob does not know whether or not this is a ",(0,Z.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue"),", but he has to treat it as a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue")," for the time being until he gets move information."),(0,Z.kt)("li",{parentName:"ul"},"Bob writes down an identity of red 2, yellow 2, blue 2, or purple 2.",(0,Z.kt)("ul",{parentName:"li"},(0,Z.kt)("li",{parentName:"ul"},"(It cannot be a green 2 because that card is already played and is useless to the team; Alice would not waste a clue on a useless card like that.)")))))),(0,Z.kt)(z,{mdxType:"TwoSaveQuestion2"}))}J.isMDXComponent=!0},6010:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);