(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[1446],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),h=i,p=m["".concat(c,".").concat(h)]||m[h]||d[h]||a;return r?n.createElement(p,l(l({ref:t},u),{},{components:r})):n.createElement(p,l({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(7294),i=r(9443);var a=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var d=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,d=e.values,m=e.groupId,h=e.className,p=a(),g=p.tabGroupChoices,f=p.setTabGroupChoices,y=(0,n.useState)(i),b=y[0],v=y[1],x=n.Children.toArray(e.children),w=[];if(null!=m){var E=g[m];null!=E&&E!==b&&d.some((function(e){return e.value===E}))&&v(E)}var k=function(e){var t=e.currentTarget,r=w.indexOf(t),n=d[r].value;v(n),null!=m&&(f(m,n),setTimeout((function(){var e,r,n,i,a,l,o,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,i=e.bottom,a=e.right,l=window,o=l.innerHeight,s=l.innerWidth,r>=0&&a<=s&&i<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case s:var i=w.indexOf(e.target)-1;r=w[i]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:k,onClick:k},r)}))),t?(0,n.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function a(e){var t=e.className,r=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,c=e.strokeWidth,s=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},s,o({pathRadius:a,dashRatio:i,counterClockwise:r})),d:l({pathRadius:a,counterClockwise:r}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,i=2*Math.PI*n,a=(1-r)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,i=e.classes,l=e.counterClockwise,o=e.styles,c=e.strokeWidth,s=e.text,u=this.getPathRadius(),d=this.getPathRatio();return(0,n.createElement)("svg",{className:i.root+" "+r,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:i.background,style:o.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(a,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:o.trail}),(0,n.createElement)(a,{className:i.path,counterClockwise:l,dashRatio:d*t,pathRadius:u,strokeWidth:c,style:o.path}),s?(0,n.createElement)("text",{className:i.text,style:o.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function s(e){var t=e.part,r=Math.round((t-1)/60*100);return(0,n.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(c,{value:r,text:r+"%"}))}},9317:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return W},default:function(){return L},frontMatter:function(){return M},metadata:function(){return V},toc:function(){return Q}});var n,i,a,l,o,c,s,u,d,m,h,p,g,f,y,b,v,x,w,E,k,O,P,N,C,T,j=r(2122),_=r(9756),R=r(7294),q=r(3905),I=r(8787),S=r(5064),Z=r(8215),B=["title","titleId"];function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var G=function(e){var t=e.title,r=e.titleId,j=A(e,B);return R.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,n||(n=R.createElement("defs",null,R.createElement("filter",{x:0,y:0,width:1,height:1,id:"good-touch-principle-question-1_yml__a"},R.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=R.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),a||(a=R.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow4.svg"})),l||(l=R.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green5.svg"})),o||(o=R.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue2.svg"})),c||(c=R.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple1.svg"})),R.createElement("svg",D({height:100,width:90,x:464,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,s||(s=R.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=R.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#good-touch-principle-question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),d||(d=R.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),R.createElement("svg",D({height:100,width:70,x:554,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,m||(m=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),R.createElement("svg",D({height:100,width:70,x:632,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,h||(h=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),R.createElement("svg",D({height:100,width:70,x:710,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,p||(p=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),R.createElement("svg",D({height:100,width:70,x:788,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,g||(g=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),R.createElement("svg",D({height:100,width:70,x:866,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,f||(f=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),R.createElement("svg",D({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,y||(y=R.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),b||(b=R.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple1.svg",y:125})),v||(v=R.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red3.svg",y:125})),x||(x=R.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green1.svg",y:125})),w||(w=R.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/blue2.svg",y:125})),E||(E=R.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/blue3.svg",y:125})),R.createElement("svg",D({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,k||(k=R.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),R.createElement("svg",D({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,O||(O=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),R.createElement("svg",D({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,P||(P=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),R.createElement("svg",D({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,N||(N=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),R.createElement("svg",D({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,C||(C=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),R.createElement("svg",D({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":r},j),t?R.createElement("title",{id:r},t):null,T||(T=R.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},H=["components"],M={id:"good-touch-principle-question-1",title:"Good Touch Principle (Question 1)"},W=void 0,V={unversionedId:"beginner/good-touch-principle-question-1",id:"beginner/good-touch-principle-question-1",isDocsHomePage:!1,title:"Good Touch Principle (Question 1)",description:"<Tabs",source:"@site/docs/beginner/good-touch-principle-question-1.md",sourceDirName:"beginner",slug:"/beginner/good-touch-principle-question-1",permalink:"/docs/beginner/good-touch-principle-question-1",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/good-touch-principle-question-1.md",version:"current",frontMatter:{id:"good-touch-principle-question-1",title:"Good Touch Principle (Question 1)"},sidebar:"mainSidebar",previous:{title:"Good Touch Principle (GTP)",permalink:"/docs/beginner/good-touch-principle"},next:{title:"Good Touch Principle (Question 2)",permalink:"/docs/beginner/good-touch-principle-question-2"}},Q=[],z={toc:Q};function L(e){var t=e.components,r=(0,_.Z)(e,H);return(0,q.kt)("wrapper",(0,j.Z)({},z,r,{components:t,mdxType:"MDXLayout"}),(0,q.kt)(I.Z,{part:"39",mdxType:"BeginnersGuideProgress"}),(0,q.kt)(S.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,q.kt)(Z.Z,{value:"question",mdxType:"TabItem"},(0,q.kt)("ul",null,(0,q.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,q.kt)(Z.Z,{value:"solution",mdxType:"TabItem"},(0,q.kt)("ul",null,(0,q.kt)("li",{parentName:"ul"},"Alice needs to give a ",(0,q.kt)("em",{parentName:"li"},"Play Clue")," to Bob's blue 3 before it is discarded."),(0,q.kt)("li",{parentName:"ul"},"If Alice clues blue, then it would focus the blue 3, but the blue 2 would be duplicated (because it is already played on the stacks)."),(0,q.kt)("li",{parentName:"ul"},"If Alice clues number 3, then it would focus the blue 3, but it would also touch the red 3. The red 3 is useful to the team in the future, so this is a good thing."),(0,q.kt)("li",{parentName:"ul"},"Thus, Alice should clue number 3 to Bob.")))),(0,q.kt)(G,{mdxType:"GoodTouchPrincipleQuestion1"}))}L.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);