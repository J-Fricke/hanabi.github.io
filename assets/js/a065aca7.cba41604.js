(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[9065],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(r),d=i,p=h["".concat(c,".").concat(d)]||h[d]||m[d]||a;return r?n.createElement(p,l(l({ref:t},u),{},{components:r})):n.createElement(p,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),i=r(9443);var a=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var m=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,m=e.values,h=e.groupId,d=e.className,p=a(),g=p.tabGroupChoices,f=p.setTabGroupChoices,y=(0,n.useState)(i),x=y[0],b=y[1],v=n.Children.toArray(e.children),w=[];if(null!=h){var E=g[h];null!=E&&E!==x&&m.some((function(e){return e.value===E}))&&b(E)}var k=function(e){var t=e.currentTarget,r=w.indexOf(t),n=m[r].value;b(n),null!=h&&(f(h,n),setTimeout((function(){var e,r,n,i,a,l,o,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,i=e.bottom,a=e.right,l=window,o=l.innerHeight,s=l.innerWidth,r>=0&&a<=s&&i<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case s:var i=w.indexOf(e.target)-1;r=w[i]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},m.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":x===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:k,onClick:k},r)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function a(e){var t=e.className,r=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,c=e.strokeWidth,s=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},s,o({pathRadius:a,dashRatio:i,counterClockwise:r})),d:l({pathRadius:a,counterClockwise:r}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,i=2*Math.PI*n,a=(1-r)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,i=e.classes,l=e.counterClockwise,o=e.styles,c=e.strokeWidth,s=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,n.createElement)("svg",{className:i.root+" "+r,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:i.background,style:o.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(a,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:o.trail}),(0,n.createElement)(a,{className:i.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:c,style:o.path}),s?(0,n.createElement)("text",{className:i.text,style:o.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function s(e){var t=e.part,r=Math.round((t-1)/60*100);return(0,n.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(c,{value:r,text:r+"%"}))}},4279:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return ne},default:function(){return oe},frontMatter:function(){return re},metadata:function(){return ie},toc:function(){return ae}});var n,i,a,l,o,c,s,u,m,h,d,p,g,f,y,x,b,v,w,E,k,N,O,P,C,T,j,_,H,R,S,q,B,I,Z,D,W,M,A,V,Q,z=r(2122),G=r(9756),L=r(7294),X=r(3905),F=r(8787),U=r(5064),K=r(8215),J=["title","titleId"];function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var ee=function(e){var t=e.title,r=e.titleId,z=$(e,J);return L.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,n||(n=L.createElement("defs",null,L.createElement("filter",{x:0,y:0,width:1,height:1,id:"prompt-question-1_yml__a"},L.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=L.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),a||(a=L.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=L.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green3.svg"})),o||(o=L.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),c||(c=L.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple5.svg"})),L.createElement("svg",Y({height:100,width:90,x:464,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,s||(s=L.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=L.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#prompt-question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=L.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),L.createElement("svg",Y({height:100,width:70,x:554,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,h||(h=L.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),L.createElement("svg",Y({height:100,width:70,x:632,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,d||(d=L.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),L.createElement("svg",Y({height:100,width:70,x:710,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,p||(p=L.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),L.createElement("svg",Y({height:100,width:70,x:788,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,g||(g=L.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),L.createElement("svg",Y({height:100,width:70,x:866,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,f||(f=L.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),L.createElement("svg",Y({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,y||(y=L.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),L.createElement("svg",Y({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,x||(x=L.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),L.createElement("svg",Y({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,b||(b=L.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),v||(v=L.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),L.createElement("svg",Y({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,w||(w=L.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/2.svg"}))),E||(E=L.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),L.createElement("svg",Y({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,k||(k=L.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/2.svg"}))),L.createElement("svg",Y({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,N||(N=L.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),L.createElement("svg",Y({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},z),t?L.createElement("title",{id:r},t):null,O||(O=L.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),P||(P=L.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/blue4.svg",y:250})),C||(C=L.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/yellow3.svg",y:250})),T||(T=L.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:247})),j||(j=L.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red3.svg",y:250})),_||(_=L.createElement("image",{height:70,width:50,x:720,xlinkHref:"/img/pieces/arrow.svg",y:210})),H||(H=L.createElement("circle",{cx:745,cy:235,fill:"red",r:15,stroke:"#000",strokeWidth:2})),R||(R=L.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:247})),S||(S=L.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green4.svg",y:250})),q||(q=L.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:247})),B||(B=L.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/red5.svg",y:250})),I||(I=L.createElement("image",{height:70,width:50,x:876,xlinkHref:"/img/pieces/arrow_dark.svg",y:210})),Z||(Z=L.createElement("circle",{cx:901,cy:235,fill:"red",r:15,stroke:"#000",strokeWidth:2})),D||(D=L.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),W||(W=L.createElement("image",{height:100,width:70,x:103.5,xlinkHref:"/img/pieces/cards/green1.svg",y:120})),M||(M=L.createElement("image",{height:100,width:70,x:138.5,xlinkHref:"/img/pieces/cards/green4.svg",y:153.333})),A||(A=L.createElement("image",{height:100,width:70,x:173.5,xlinkHref:"/img/pieces/cards/red3.svg",y:186.667})),V||(V=L.createElement("image",{height:100,width:70,x:208.5,xlinkHref:"/img/pieces/cards/blue3.svg",y:220})),Q||(Q=L.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},te=["components"],re={id:"prompt-question-1",title:"The Prompt (Question 1)"},ne=void 0,ie={unversionedId:"beginner/prompt-question-1",id:"beginner/prompt-question-1",isDocsHomePage:!1,title:"The Prompt (Question 1)",description:"<Tabs",source:"@site/docs/beginner/prompt-question-1.md",sourceDirName:"beginner",slug:"/beginner/prompt-question-1",permalink:"/docs/beginner/prompt-question-1",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/prompt-question-1.md",version:"current",frontMatter:{id:"prompt-question-1",title:"The Prompt (Question 1)"},sidebar:"mainSidebar",previous:{title:"The Prompt",permalink:"/docs/beginner/prompt"},next:{title:"The Prompt (Question 2)",permalink:"/docs/beginner/prompt-question-2"}},ae=[],le={toc:ae};function oe(e){var t=e.components,r=(0,G.Z)(e,te);return(0,X.kt)("wrapper",(0,z.Z)({},le,r,{components:t,mdxType:"MDXLayout"}),(0,X.kt)(F.Z,{part:"56",mdxType:"BeginnersGuideProgress"}),(0,X.kt)(U.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,X.kt)(K.Z,{value:"question",mdxType:"TabItem"},(0,X.kt)("ul",null,(0,X.kt)("li",{parentName:"ul"},"Bob has two unknown 2's in his hand."),(0,X.kt)("li",{parentName:"ul"},"Alice clues red to Cathy."),(0,X.kt)("li",{parentName:"ul"},"What is Bob's interpretation of Alice's clue?"))),(0,X.kt)(K.Z,{value:"solution",mdxType:"TabItem"},(0,X.kt)("ul",null,(0,X.kt)("li",{parentName:"ul"},"Since the red 3 is in this trash, this is a ",(0,X.kt)("em",{parentName:"li"},"Critical Save")," on the red 3 (i.e. a ",(0,X.kt)("em",{parentName:"li"},"Save Clue"),")."),(0,X.kt)("li",{parentName:"ul"},"Bob should therefore not react in any way."),(0,X.kt)("li",{parentName:"ul"},"If the red 3 were not in the trash, then it would be a ",(0,X.kt)("em",{parentName:"li"},"Prompt")," on Bob's left-most 2.")))),(0,X.kt)(ee,{mdxType:"PromptQuestion1"}))}oe.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);