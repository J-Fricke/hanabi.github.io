(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[9216],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,g=h["".concat(s,".").concat(d)]||h[d]||m[d]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),a=r(9443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var m=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,m=e.values,h=e.groupId,d=e.className,g=i(),p=g.tabGroupChoices,f=g.setTabGroupChoices,y=(0,n.useState)(a),v=y[0],x=y[1],b=n.Children.toArray(e.children),w=[];if(null!=h){var k=p[h];null!=k&&k!==v&&m.some((function(e){return e.value===k}))&&x(k)}var E=function(e){var t=e.currentTarget,r=w.indexOf(t),n=m[r].value;x(n),null!=h&&(f(h,n),setTimeout((function(){var e,r,n,a,i,l,o,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,r>=0&&i<=c&&a<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case c:var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},m.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:E,onClick:E},r)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e){var t=e.className,r=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:i,dashRatio:a,counterClockwise:r})),d:l({pathRadius:i,counterClockwise:r}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,a=2*Math.PI*n,i=(1-r)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,l=e.counterClockwise,o=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+r,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:o.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(i,{className:a.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:o.trail}),(0,n.createElement)(i,{className:a.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:s,style:o.path}),c?(0,n.createElement)("text",{className:a.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function c(e){var t=e.part,r=Math.round((t-1)/60*100);return(0,n.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(s,{value:r,text:r+"%"}))}},2415:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return $},default:function(){return ne},frontMatter:function(){return Y},metadata:function(){return ee},toc:function(){return te}});var n,a,i,l,o,s,c,u,m,h,d,g,p,f,y,v,x,b,w,k,E,O,N,P,C,T,j,H,S,_,R,q,D,Z,B,I,M,A=r(2122),W=r(9756),V=r(7294),z=r(3905),Q=r(8787),G=r(5064),F=r(8215),L=["title","titleId"];function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var K=function(e){var t=e.title,r=e.titleId,A=U(e,L);return V.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:500,viewBox:"0 0 944 500",width:944,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,n||(n=V.createElement("defs",null,V.createElement("filter",{x:0,y:0,width:1,height:1,id:"5-save-question-1_yml__a"},V.createElement("feFlood",{floodColor:"#0ff"})))),a||(a=V.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),i||(i=V.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow2.svg"})),l||(l=V.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),o||(o=V.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue1.svg"})),s||(s=V.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple1.svg"})),V.createElement("svg",X({height:100,width:90,x:464,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,c||(c=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=V.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#5-save-question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=V.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),V.createElement("svg",X({height:100,width:70,x:554,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,h||(h=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",X({height:100,width:70,x:632,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,d||(d=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",X({height:100,width:70,x:710,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,g||(g=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",X({height:100,width:70,x:788,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,p||(p=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",X({height:100,width:70,x:866,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,f||(f=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",X({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,y||(y=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),v||(v=V.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/blue3.svg",y:125})),x||(x=V.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple4.svg",y:125})),b||(b=V.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green4.svg",y:125})),w||(w=V.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/yellow5.svg",y:125})),k||(k=V.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/yellow1.svg",y:125})),V.createElement("svg",X({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,E||(E=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),O||(O=V.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple4.svg",y:250})),N||(N=V.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/yellow4.svg",y:250})),P||(P=V.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green4.svg",y:250})),C||(C=V.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:247})),T||(T=V.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green3.svg",y:250})),j||(j=V.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:247})),H||(H=V.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/green2.svg",y:250})),V.createElement("svg",X({height:100,width:90,x:464,y:375,className:"example","aria-labelledby":r},A),t?V.createElement("title",{id:r},t):null,S||(S=V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Donald"))),_||(_=V.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/blue3.svg",y:375})),R||(R=V.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple5.svg",y:375})),q||(q=V.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/blue5.svg",y:375})),D||(D=V.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/purple3.svg",y:375})),Z||(Z=V.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple3.svg",y:375})),B||(B=V.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),I||(I=V.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green3.svg",y:170})),M||(M=V.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},J=["components"],Y={id:"5-save-question-1",title:"The 5 Save (Question 1)"},$=void 0,ee={unversionedId:"beginner/5-save-question-1",id:"beginner/5-save-question-1",isDocsHomePage:!1,title:"The 5 Save (Question 1)",description:"<Tabs",source:"@site/docs/beginner/5-save-question-1.md",sourceDirName:"beginner",slug:"/beginner/5-save-question-1",permalink:"/docs/beginner/5-save-question-1",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/5-save-question-1.md",version:"current",sidebarPosition:5,frontMatter:{id:"5-save-question-1",title:"The 5 Save (Question 1)"},sidebar:"mainSidebar",previous:{title:"The 5 Save",permalink:"/docs/beginner/5-save"},next:{title:"The 5 Save (Question 2)",permalink:"/docs/beginner/5-save-question-2"}},te=[],re={toc:te};function ne(e){var t=e.components,r=(0,W.Z)(e,J);return(0,z.kt)("wrapper",(0,A.Z)({},re,r,{components:t,mdxType:"MDXLayout"}),(0,z.kt)(Q.Z,{part:"16",mdxType:"BeginnersGuideProgress"}),(0,z.kt)(G.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,z.kt)(F.Z,{value:"question",mdxType:"TabItem"},(0,z.kt)("ul",null,(0,z.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,z.kt)(F.Z,{value:"solution",mdxType:"TabItem"},(0,z.kt)("ul",null,(0,z.kt)("li",{parentName:"ul"},"Bob has a one 5 in his hand. However, it is not on chop."),(0,z.kt)("li",{parentName:"ul"},"Donald has two 5's in his hand. However, neither of them are on chop."),(0,z.kt)("li",{parentName:"ul"},"Alice knows that you are ",(0,z.kt)("strong",{parentName:"li"},"only allowed")," to give ",(0,z.kt)("em",{parentName:"li"},"Save Clues")," to cards that are on chop."),(0,z.kt)("li",{parentName:"ul"},"Thus, Alice has nothing to do and should discard.")))),(0,z.kt)(K,{mdxType:"FiveSaveQuestion1"}))}ne.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);