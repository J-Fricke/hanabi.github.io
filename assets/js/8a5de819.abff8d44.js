(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[9654],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),a=r(9443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,p=e.values,d=e.groupId,h=e.className,m=i(),f=m.tabGroupChoices,g=m.setTabGroupChoices,b=(0,n.useState)(a),y=b[0],v=b[1],x=n.Children.toArray(e.children),k=[];if(null!=d){var w=f[d];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&v(w)}var O=function(e){var t=e.currentTarget,r=k.indexOf(t),n=p[r].value;v(n),null!=d&&(g(d,n),setTimeout((function(){var e,r,n,a,i,o,c,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,r>=0&&i<=s&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},E=function(e){var t,r;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case s:var a=k.indexOf(e.target)-1;r=k[a]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:E,onFocus:O,onClick:O},r)}))),t?(0,n.cloneElement)(x.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e){var t=e.className,r=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,l=e.strokeWidth,s=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},s,c({pathRadius:i,dashRatio:a,counterClockwise:r})),d:o({pathRadius:i,counterClockwise:r}),strokeWidth:l,fillOpacity:0})}function o(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,a=2*Math.PI*n,i=(1-r)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,o=e.counterClockwise,c=e.styles,l=e.strokeWidth,s=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+r,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:c.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(i,{className:a.trail,counterClockwise:o,dashRatio:t,pathRadius:u,strokeWidth:l,style:c.trail}),(0,n.createElement)(i,{className:a.path,counterClockwise:o,dashRatio:p*t,pathRadius:u,strokeWidth:l,style:c.path}),s?(0,n.createElement)("text",{className:a.text,style:c.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function s(e){var t=e.part,r=Math.round((t-1)/60*100);return(0,n.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(l,{value:r,text:r+"%"}))}},951:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return P},default:function(){return R},frontMatter:function(){return C},metadata:function(){return T},toc:function(){return j}});var n,a,i,o,c,l,s,u,p,d,h=r(2122),m=r(9756),f=r(7294),g=r(3905),b=r(8787),y=r(5064),v=r(8215),x=["title","titleId"];function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var O=function(e){var t=e.title,r=e.titleId,h=w(e,x);return f.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:128,viewBox:"0 -3 554 128",width:554,className:"example","aria-labelledby":r},h),t?f.createElement("title",{id:r},t):null,f.createElement("svg",k({height:100,width:90,x:74,className:"example","aria-labelledby":r},h),t?f.createElement("title",{id:r},t):null,n||(n=f.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice"))),a||(a=f.createElement("image",{height:100,width:70,x:164,xlinkHref:"/img/pieces/cards/yellow2.svg"})),i||(i=f.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:239,y:-3})),o||(o=f.createElement("image",{height:100,width:70,x:242,xlinkHref:"/img/pieces/cards/blue3.svg"})),c||(c=f.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:317,y:-3})),l||(l=f.createElement("image",{height:100,width:70,x:320,xlinkHref:"/img/pieces/cards/green2.svg"})),s||(s=f.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:395,y:-3})),u||(u=f.createElement("image",{height:100,width:70,x:398,xlinkHref:"/img/pieces/cards/purple4.svg"})),p||(p=f.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:473,y:-3})),d||(d=f.createElement("image",{height:100,width:70,x:476,xlinkHref:"/img/pieces/cards/blue1.svg"})))},E=["components"],C={id:"chop-question-2",title:"The Chop (Question 2)"},P=void 0,T={unversionedId:"beginner/chop-question-2",id:"beginner/chop-question-2",isDocsHomePage:!1,title:"The Chop (Question 2)",description:"<Tabs",source:"@site/docs/beginner/chop-question-2.md",sourceDirName:"beginner",slug:"/beginner/chop-question-2",permalink:"/docs/beginner/chop-question-2",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/chop-question-2.md",version:"current",frontMatter:{id:"chop-question-2",title:"The Chop (Question 2)"},sidebar:"mainSidebar",previous:{title:"The Chop (Question 1)",permalink:"/docs/beginner/chop-question-1"},next:{title:"The Chop (Question 3)",permalink:"/docs/beginner/chop-question-3"}},j=[],N={toc:j};function R(e){var t=e.components,r=(0,m.Z)(e,E);return(0,g.kt)("wrapper",(0,h.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,g.kt)(b.Z,{part:"4",mdxType:"BeginnersGuideProgress"}),(0,g.kt)(y.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,g.kt)(v.Z,{value:"question",mdxType:"TabItem"},(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"What slot is Alice's chop?"))),(0,g.kt)(v.Z,{value:"solution",mdxType:"TabItem"},(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Slot 1 (because slots 2 through 5 have clues on them).")))),(0,g.kt)(O,{mdxType:"ChopQuestion2"}))}R.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);