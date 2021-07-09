!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";for(var e="undefined"!=typeof window&&"undefined"!=typeof document,t=["Edge","Trident","Firefox"],n=0,o=0;o<t.length;o+=1)if(e&&0<=navigator.userAgent.indexOf(t[o])){n=1;break}var a=e&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},n))}};function s(e){return e&&"[object Function]"==={}.toString.call(e)}function y(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function c(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function h(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=y(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+o)?e:h(c(e))}var r=e&&!(!window.MSInputMethodContext||!document.documentMode),i=e&&/MSIE 10/.test(navigator.userAgent);function m(e){return 11===e?r:10===e?i:r||i}function w(e){if(!e)return document.documentElement;for(var t=m(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===y(n,"position")?w(n):n:e?e.ownerDocument.documentElement:document.documentElement}function f(e){return null!==e.parentNode?f(e.parentNode):e}function g(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var a=i.commonAncestorContainer;if(e!==a&&t!==a||o.contains(r))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||w(e.firstElementChild)===e)}(a)?a:w(a);var s=f(e);return s.host?g(s.host,t):g(e,f(t).host)}function v(e){var t="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"!==n&&"HTML"!==n)return e[t];var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[t]}function u(e,t){var n="x"===t?"Left":"Top",o="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function p(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],m(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function b(e){var t=e.body,n=e.documentElement,o=m(10)&&getComputedStyle(n);return{height:p("Height",t,n,o),width:p("Width",t,n,o)}}var l=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),x=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function O(e){return E({},e,{right:e.left+e.width,bottom:e.top+e.height})}function L(e){var t={};try{if(m(10)){t=e.getBoundingClientRect();var n=v(e,"top"),o=v(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?b(e.ownerDocument):{},a=i.width||e.clientWidth||r.right-r.left,s=i.height||e.clientHeight||r.bottom-r.top,f=e.offsetWidth-a,p=e.offsetHeight-s;if(f||p){var l=y(e);f-=u(l,"x"),p-=u(l,"y"),r.width-=f,r.height-=p}return O(r)}function T(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=m(10),r="HTML"===t.nodeName,i=L(e),a=L(t),s=h(e),f=y(t),p=parseFloat(f.borderTopWidth,10),l=parseFloat(f.borderLeftWidth,10);n&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var u=O({top:i.top-a.top-p,left:i.left-a.left-l,width:i.width,height:i.height});if(u.marginTop=0,u.marginLeft=0,!o&&r){var d=parseFloat(f.marginTop,10),c=parseFloat(f.marginLeft,10);u.top-=p-d,u.bottom-=p-d,u.left-=l-c,u.right-=l-c,u.marginTop=d,u.marginLeft=c}return(o&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(u=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=v(t,"top"),r=v(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}(u,t)),u}function D(e){if(!e||!e.parentElement||m())return document.documentElement;for(var t=e.parentElement;t&&"none"===y(t,"transform");)t=t.parentElement;return t||document.documentElement}function d(e,t,n,o){var r=4<arguments.length&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=r?D(e):g(e,t);if("viewport"===o)i=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=T(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:v(n),s=t?0:v(n,"left");return O({top:a-o.top+o.marginTop,left:s-o.left+o.marginLeft,width:r,height:i})}(a,r);else{var s=void 0;"scrollParent"===o?"BODY"===(s=h(c(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===o?e.ownerDocument.documentElement:o;var f=T(s,a,r);if("HTML"!==s.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===y(t,"position"))return!0;var o=c(t);return!!o&&e(o)}(a))i=f;else{var p=b(e.ownerDocument),l=p.height,u=p.width;i.top+=f.top-f.marginTop,i.bottom=l+f.top,i.left+=f.left-f.marginLeft,i.right=u+f.left}}var d="number"==typeof(n=n||0);return i.left+=d?n:n.left||0,i.top+=d?n:n.top||0,i.right-=d?n:n.right||0,i.bottom-=d?n:n.bottom||0,i}function M(e,t,o,n,r){var i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=d(o,n,i,r),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},f=Object.keys(s).map(function(e){return E({key:e},s[e],{area:function(e){return e.width*e.height}(s[e])})}).sort(function(e,t){return t.area-e.area}),p=f.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<p.length?p[0].key:f[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function N(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return T(n,o?D(t):g(t,n),o)}function F(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function k(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function H(e,t,n){n=n.split("-")[0];var o=F(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",f=i?"height":"width",p=i?"width":"height";return r[a]=t[a]+t[f]/2-o[f]/2,r[s]=n===s?t[s]-o[p]:t[k(s)],r}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function B(e,n,t){return(void 0===t?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=C(e,function(e){return e[t]===n});return e.indexOf(o)}(e,"name",t))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;e.enabled&&s(t)&&(n.offsets.popper=O(n.offsets.popper),n.offsets.reference=O(n.offsets.reference),n=t(n,e))}),n}function A(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function P(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==document.body.style[i])return i}return null}function S(e){var t=e.ownerDocument;return t?t.defaultView:window}function W(e,t,n,o){n.updateBound=o,S(e).addEventListener("resize",n.updateBound,{passive:!0});var r=h(e);return function e(t,n,o,r){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t;a.addEventListener(n,o,{passive:!0}),i||e(h(a.parentNode),n,o,r),r.push(a)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function j(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return S(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function I(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function R(n,o){Object.keys(o).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&I(o[e])&&(t="px"),n.style[e]=o[e]+t})}var U=e&&/Firefox/i.test(navigator.userAgent);function Y(e,t,n){var o=C(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var V=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],q=V.slice(3);function z(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=q.indexOf(e),o=q.slice(n+1).concat(q.slice(0,n));return t?o.reverse():o}var G="flip",_="clockwise",X="counterclockwise";function J(e,r,i,t){var a=[0,0],s=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),o=n.indexOf(C(n,function(e){return-1!==e.search(/,|\s/)}));n[o]&&-1===n[o].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,p=-1!==o?[n.slice(0,o).concat([n[o].split(f)[0]]),[n[o].split(f)[1]].concat(n.slice(o+1))]:[n];return(p=p.map(function(e,t){var n=(1===t?!s:s)?"height":"width",o=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,o=!0,e):o?(e[e.length-1]+=t,o=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],a=r[2];if(!i)return e;if(0!==a.indexOf("%"))return"vh"!==a&&"vw"!==a?i:("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i;var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=o}return O(s)[t]/100*i}(e,n,r,i)})})).forEach(function(n,o){n.forEach(function(e,t){I(e)&&(a[o]+=e*("-"===n[t-1]?-1:1))})}),a}var K={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,a=r.popper,s=-1!==["bottom","top"].indexOf(n),f=s?"left":"top",p=s?"width":"height",l={start:x({},f,i[f]),end:x({},f,i[f]+i[p]-a[p])};e.offsets.popper=E({},a,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,a=r.reference,s=o.split("-")[0],f=void 0;return f=I(+n)?[+n,0]:J(n,i,a,s),"left"===s?(i.top+=f[0],i.left-=f[1]):"right"===s?(i.top+=f[0],i.left+=f[1]):"top"===s?(i.left+=f[0],i.top-=f[1]):"bottom"===s&&(i.left+=f[0],i.top+=f[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,o){var t=o.boundariesElement||w(e.instance.popper);e.instance.reference===t&&(t=w(t));var n=P("transform"),r=e.instance.popper.style,i=r.top,a=r.left,s=r[n];r.top="",r.left="",r[n]="";var f=d(e.instance.popper,e.instance.reference,o.padding,t,e.positionFixed);r.top=i,r.left=a,r[n]=s,o.boundaries=f;var p=o.priority,l=e.offsets.popper,u={primary:function(e){var t=l[e];return l[e]<f[e]&&!o.escapeWithReference&&(t=Math.max(l[e],f[e])),x({},e,t)},secondary:function(e){var t="right"===e?"left":"top",n=l[t];return l[e]>f[e]&&!o.escapeWithReference&&(n=Math.min(l[t],f[e]-("right"===e?l.width:l.height))),x({},t,n)}};return p.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=E({},l,u[t](e))}),e.offsets.popper=l,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(r),s=a?"right":"bottom",f=a?"left":"top",p=a?"width":"height";return n[s]<i(o[f])&&(e.offsets.popper[f]=i(o[f])-n[p]),n[f]>i(o[s])&&(e.offsets.popper[f]=i(o[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!Y(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,a=i.popper,s=i.reference,f=-1!==["left","right"].indexOf(r),p=f?"height":"width",l=f?"Top":"Left",u=l.toLowerCase(),d=f?"left":"top",c=f?"bottom":"right",h=F(o)[p];s[c]-h<a[u]&&(e.offsets.popper[u]-=a[u]-(s[c]-h)),s[u]+h>a[c]&&(e.offsets.popper[u]+=s[u]+h-a[c]),e.offsets.popper=O(e.offsets.popper);var m=s[u]+s[p]/2-h/2,g=y(e.instance.popper),v=parseFloat(g["margin"+l],10),b=parseFloat(g["border"+l+"Width"],10),w=m-e.offsets.popper[u]-v-b;return w=Math.max(Math.min(a[p]-h,w),0),e.arrowElement=o,e.offsets.arrow=(x(n={},u,Math.round(w)),x(n,d,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(m,g){if(A(m.instance.modifiers,"inner"))return m;if(m.flipped&&m.placement===m.originalPlacement)return m;var v=d(m.instance.popper,m.instance.reference,g.padding,g.boundariesElement,m.positionFixed),b=m.placement.split("-")[0],w=k(b),y=m.placement.split("-")[1]||"",x=[];switch(g.behavior){case G:x=[b,w];break;case _:x=z(b);break;case X:x=z(b,!0);break;default:x=g.behavior}return x.forEach(function(e,t){if(b!==e||x.length===t+1)return m;b=m.placement.split("-")[0],w=k(b);var n=m.offsets.popper,o=m.offsets.reference,r=Math.floor,i="left"===b&&r(n.right)>r(o.left)||"right"===b&&r(n.left)<r(o.right)||"top"===b&&r(n.bottom)>r(o.top)||"bottom"===b&&r(n.top)<r(o.bottom),a=r(n.left)<r(v.left),s=r(n.right)>r(v.right),f=r(n.top)<r(v.top),p=r(n.bottom)>r(v.bottom),l="left"===b&&a||"right"===b&&s||"top"===b&&f||"bottom"===b&&p,u=-1!==["top","bottom"].indexOf(b),d=!!g.flipVariations&&(u&&"start"===y&&a||u&&"end"===y&&s||!u&&"start"===y&&f||!u&&"end"===y&&p),c=!!g.flipVariationsByContent&&(u&&"start"===y&&s||u&&"end"===y&&a||!u&&"start"===y&&p||!u&&"end"===y&&f),h=d||c;(i||l||h)&&(m.flipped=!0,(i||l)&&(b=x[t+1]),h&&(y=function(e){return"end"===e?"start":"start"===e?"end":e}(y)),m.placement=b+(y?"-"+y:""),m.offsets.popper=E({},m.offsets.popper,H(m.instance.popper,m.offsets.reference,m.placement)),m=B(m.instance.modifiers,m,"flip"))}),m},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=i[n]-(s?r[a?"width":"height"]:0),e.placement=k(t),e.offsets.popper=O(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!Y(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=C(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=C(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=w(e.instance.popper),f=L(s),p={position:r.position},l=function(e,t){var n=e.offsets,o=n.popper,r=n.reference,i=Math.round,a=Math.floor,s=function(e){return e},f=i(r.width),p=i(o.width),l=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),d=t?l||u||f%2==p%2?i:a:s,c=t?i:s;return{left:d(f%2==1&&p%2==1&&!u&&t?o.left-1:o.left),top:c(o.top),bottom:c(o.bottom),right:d(o.right)}}(e,window.devicePixelRatio<2||!U),u="bottom"===n?"top":"bottom",d="right"===o?"left":"right",c=P("transform"),h=void 0,m=void 0;if(m="bottom"==u?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-f.height+l.bottom:l.top,h="right"==d?"HTML"===s.nodeName?-s.clientWidth+l.right:-f.width+l.right:l.left,a&&c)p[c]="translate3d("+h+"px, "+m+"px, 0)",p[u]=0,p[d]=0,p.willChange="transform";else{var g="bottom"==u?-1:1,v="right"==d?-1:1;p[u]=m*g,p[d]=h*v,p.willChange=u+", "+d}var b={"x-placement":e.placement};return e.attributes=E({},b,e.attributes),e.styles=E({},p,e.styles),e.arrowStyles=E({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return R(e.instance.popper,e.styles),function(t,n){Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&R(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=N(r,t,e,n.positionFixed),a=M(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),R(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Q=function(){function i(e,t){var n=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=a(this.update.bind(this)),this.options=E({},i.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(E({},i.Defaults.modifiers,o.modifiers)).forEach(function(e){n.options.modifiers[e]=E({},i.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return E({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return l(i,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=M(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=H(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=B(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,A(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[P("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=W(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return j.call(this)}}]),i}();return Q.Utils=("undefined"!=typeof window?window:global).PopperUtils,Q.placements=V,Q.Defaults=K,Q});