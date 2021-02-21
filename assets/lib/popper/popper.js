/**
 * @popperjs/core v2.8.2 - MIT License
 */

"use strict";!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){function t(e){return{width:(e=e.getBoundingClientRect()).width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function n(e){return"[object Window]"!==e.toString()?(e=e.ownerDocument)&&e.defaultView||window:e}function r(e){return{scrollLeft:(e=n(e)).pageXOffset,scrollTop:e.pageYOffset}}function o(e){return e instanceof n(e).Element||e instanceof Element}function i(e){return e instanceof n(e).HTMLElement||e instanceof HTMLElement}function a(e){return e instanceof n(e).ShadowRoot||e instanceof ShadowRoot}function s(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function p(e){return t(f(e)).left+r(e).scrollLeft}function c(e){return n(e).getComputedStyle(e)}function l(e){return e=c(e),/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX)}function u(e,o,a){void 0===a&&(a=!1);var c=f(o);e=t(e);var u=i(o),d={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(u||!u&&!a)&&(("body"!==s(o)||l(c))&&(d=o!==n(o)&&i(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:r(o)),i(o)?((m=t(o)).x+=o.clientLeft,m.y+=o.clientTop):c&&(m.x=p(c))),{x:e.left+d.scrollLeft-m.x,y:e.top+d.scrollTop-m.y,width:e.width,height:e.height}}function d(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function m(e){return"html"===s(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||f(e)}function h(e){return 0<=["html","body","#document"].indexOf(s(e))?e.ownerDocument.body:i(e)&&l(e)?e:h(m(e))}function v(e,t){var r;void 0===t&&(t=[]);var o=h(e);return e=o===(null==(r=e.ownerDocument)?void 0:r.body),r=n(o),o=e?[r].concat(r.visualViewport||[],l(o)?o:[]):o,t=t.concat(o),e?t:t.concat(v(m(o)))}function g(e){return i(e)&&"fixed"!==c(e).position?e.offsetParent:null}function y(e){for(var t=n(e),r=g(e);r&&0<=["table","td","th"].indexOf(s(r))&&"static"===c(r).position;)r=g(r);if(r&&("html"===s(r)||"body"===s(r)&&"static"===c(r).position))return t;if(!r)e:{for(r=navigator.userAgent.toLowerCase().includes("firefox"),e=m(e);i(e)&&0>["html","body"].indexOf(s(e));){var o=c(e);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||["transform","perspective"].includes(o.willChange)||r&&"filter"===o.willChange||r&&o.filter&&"none"!==o.filter){r=e;break e}e=e.parentNode}r=null}return r||t}function b(e){function t(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){r.has(e)||(e=n.get(e))&&t(e)})),o.push(e)}var n=new Map,r=new Set,o=[];return e.forEach((function(e){n.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||t(e)})),o}function w(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function x(e){return e.split("-")[0]}function O(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n))do{if(t&&e.isSameNode(t))return!0;t=t.parentNode||t.host}while(t);return!1}function j(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function E(e,o){if("viewport"===o){o=n(e);var a=f(e);o=o.visualViewport;var s=a.clientWidth;a=a.clientHeight;var l=0,u=0;o&&(s=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(l=o.offsetLeft,u=o.offsetTop)),e=j(e={width:s,height:a,x:l+p(e),y:u})}else i(o)?((e=t(o)).top+=o.clientTop,e.left+=o.clientLeft,e.bottom=e.top+o.clientHeight,e.right=e.left+o.clientWidth,e.width=o.clientWidth,e.height=o.clientHeight,e.x=e.left,e.y=e.top):(u=f(e),e=f(u),s=r(u),o=null==(a=u.ownerDocument)?void 0:a.body,a=_(e.scrollWidth,e.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=_(e.scrollHeight,e.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-s.scrollLeft+p(u),s=-s.scrollTop,"rtl"===c(o||e).direction&&(u+=_(e.clientWidth,o?o.clientWidth:0)-a),e=j({width:a,height:l,x:u,y:s}));return e}function D(e,t,n){return t="clippingParents"===t?function(e){var t=v(m(e)),n=0<=["absolute","fixed"].indexOf(c(e).position)&&i(e)?y(e):e;return o(n)?t.filter((function(e){return o(e)&&O(e,n)&&"body"!==s(e)})):[]}(e):[].concat(t),(n=(n=[].concat(t,[n])).reduce((function(t,n){return n=E(e,n),t.top=_(n.top,t.top),t.right=U(n.right,t.right),t.bottom=U(n.bottom,t.bottom),t.left=_(n.left,t.left),t}),E(e,n[0]))).width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}function L(e){return 0<=["top","bottom"].indexOf(e)?"x":"y"}function P(e){var t=e.reference,n=e.element,r=(e=e.placement)?x(e):null;e=e?e.split("-")[1]:null;var o=t.x+t.width/2-n.width/2,i=t.y+t.height/2-n.height/2;switch(r){case"top":o={x:o,y:t.y-n.height};break;case"bottom":o={x:o,y:t.y+t.height};break;case"right":o={x:t.x+t.width,y:i};break;case"left":o={x:t.x-n.width,y:i};break;default:o={x:t.x,y:t.y}}if(null!=(r=r?L(r):null))switch(i="y"===r?"height":"width",e){case"start":o[r]-=t[i]/2-n[i]/2;break;case"end":o[r]+=t[i]/2-n[i]/2}return o}function k(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function M(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function W(e,n){void 0===n&&(n={});var r=n;n=void 0===(n=r.placement)?e.placement:n;var i=r.boundary,a=void 0===i?"clippingParents":i,s=void 0===(i=r.rootBoundary)?"viewport":i;i=void 0===(i=r.elementContext)?"popper":i;var p=r.altBoundary,c=void 0!==p&&p;r=k("number"!=typeof(r=void 0===(r=r.padding)?0:r)?r:M(r,C));var l=e.elements.reference;p=e.rects.popper,a=D(o(c=e.elements[c?"popper"===i?"reference":"popper":i])?c:c.contextElement||f(e.elements.popper),a,s),c=P({reference:s=t(l),element:p,strategy:"absolute",placement:n}),p=j(Object.assign({},p,c)),s="popper"===i?p:s;var u={top:a.top-s.top+r.top,bottom:s.bottom-a.bottom+r.bottom,left:a.left-s.left+r.left,right:s.right-a.right+r.right};if(e=e.modifiersData.offset,"popper"===i&&e){var d=e[n];Object.keys(u).forEach((function(e){var t=0<=["right","bottom"].indexOf(e)?1:-1,n=0<=["top","bottom"].indexOf(e)?"y":"x";u[e]+=d[n]*t}))}return u}function A(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function B(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,r=void 0===(e=e.defaultOptions)?F:e;return function(e,t,i){function a(){f.forEach((function(e){return e()})),f=[]}void 0===i&&(i=r);var s={placement:"bottom",orderedModifiers:[],options:Object.assign({},F,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],p=!1,c={state:s,setOptions:function(i){return a(),s.options=Object.assign({},r,s.options,i),s.scrollParents={reference:o(e)?v(e):e.contextElement?v(e.contextElement):[],popper:v(t)},i=function(e){var t=b(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers))),s.orderedModifiers=i.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options;n=void 0===n?{}:n,"function"==typeof(e=e.effect)&&(t=e({state:s,name:t,instance:c,options:n}),f.push(t||function(){}))})),c.update()},forceUpdate:function(){if(!p){var e=s.elements,t=e.reference;if(A(t,e=e.popper))for(s.rects={reference:u(t,y(e),"fixed"===s.options.strategy),popper:d(e)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)})),t=0;t<s.orderedModifiers.length;t++)if(!0===s.reset)s.reset=!1,t=-1;else{var n=s.orderedModifiers[t];e=n.fn;var r=n.options;r=void 0===r?{}:r,n=n.name,"function"==typeof e&&(s=e({state:s,options:r,name:n,instance:c})||s)}}},update:w((function(){return new Promise((function(e){c.forceUpdate(),e(s)}))})),destroy:function(){a(),p=!0}};return A(e,t)?(c.setOptions(i).then((function(e){!p&&i.onFirstUpdate&&i.onFirstUpdate(e)})),c):c}}function T(e){var t,r=e.popper,o=e.popperRect,i=e.placement,a=e.offsets,s=e.position,p=e.gpuAcceleration,l=e.adaptive;if(!0===(e=e.roundOffsets)){e=a.y;var u=window.devicePixelRatio||1;e={x:z(z(a.x*u)/u)||0,y:z(z(e*u)/u)||0}}else e="function"==typeof e?e(a):a;e=void 0===(e=(u=e).x)?0:e,u=void 0===(u=u.y)?0:u;var d=a.hasOwnProperty("x");a=a.hasOwnProperty("y");var m,h="left",v="top",g=window;if(l){var b=y(r),w="clientHeight",x="clientWidth";b===n(r)&&("static"!==c(b=f(r)).position&&(w="scrollHeight",x="scrollWidth")),"top"===i&&(v="bottom",u-=b[w]-o.height,u*=p?1:-1),"left"===i&&(h="right",e-=b[x]-o.width,e*=p?1:-1)}return r=Object.assign({position:s},l&&J),p?Object.assign({},r,((m={})[v]=a?"0":"",m[h]=d?"0":"",m.transform=2>(g.devicePixelRatio||1)?"translate("+e+"px, "+u+"px)":"translate3d("+e+"px, "+u+"px, 0)",m)):Object.assign({},r,((t={})[v]=a?u+"px":"",t[h]=d?e+"px":"",t.transform="",t))}function H(e){return e.replace(/left|right|bottom|top/g,(function(e){return $[e]}))}function R(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function S(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function q(e){return["top","right","bottom","left"].some((function(t){return 0<=e[t]}))}var C=["top","bottom","right","left"],N=C.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),V=[].concat(C,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),I="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),_=Math.max,U=Math.min,z=Math.round,F={placement:"bottom",modifiers:[],strategy:"absolute"},X={passive:!0},Y={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,o=(e=e.options).scroll,i=void 0===o||o,a=void 0===(e=e.resize)||e,s=n(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",r.update,X)})),a&&s.addEventListener("resize",r.update,X),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",r.update,X)})),a&&s.removeEventListener("resize",r.update,X)}},data:{}},G={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=P({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},J={top:"auto",right:"auto",bottom:"auto",left:"auto"},K={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options;e=void 0===(e=n.gpuAcceleration)||e;var r=n.adaptive;r=void 0===r||r,n=void 0===(n=n.roundOffsets)||n,e={placement:x(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:e},null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,T(Object.assign({},e,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:n})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,T(Object.assign({},e,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:n})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Q={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];i(o)&&s(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{};e=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{}),i(r)&&s(r)&&(Object.assign(r.style,e),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.name,r=void 0===(e=e.options.offset)?[0,0]:e,o=(e=V.reduce((function(e,n){var o=t.rects,i=x(n),a=0<=["left","top"].indexOf(i)?-1:1,s="function"==typeof r?r(Object.assign({},o,{placement:n})):r;return o=(o=s[0])||0,s=((s=s[1])||0)*a,i=0<=["left","right"].indexOf(i)?{x:s,y:o}:{x:o,y:s},e[n]=i,e}),{}))[t.placement],i=o.x;o=o.y,null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=o),t.modifiersData[n]=e}},$={left:"right",right:"left",bottom:"top",top:"bottom"},ee={start:"end",end:"start"},te={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;if(e=e.name,!t.modifiersData[e]._skip){var r=n.mainAxis;r=void 0===r||r;var o=n.altAxis;o=void 0===o||o;var i=n.fallbackPlacements,a=n.padding,s=n.boundary,f=n.rootBoundary,p=n.altBoundary,c=n.flipVariations,l=void 0===c||c,u=n.allowedAutoPlacements;c=x(n=t.options.placement),i=i||(c!==n&&l?function(e){if("auto"===x(e))return[];var t=H(e);return[R(e),t,R(t)]}(n):[H(n)]);var d=[n].concat(i).reduce((function(e,n){return e.concat("auto"===x(n)?function(e,t){void 0===t&&(t={});var n=t.boundary,r=t.rootBoundary,o=t.padding,i=t.flipVariations,a=t.allowedAutoPlacements,s=void 0===a?V:a,f=t.placement.split("-")[1];0===(i=(t=f?i?N:N.filter((function(e){return e.split("-")[1]===f})):C).filter((function(e){return 0<=s.indexOf(e)}))).length&&(i=t);var p=i.reduce((function(t,i){return t[i]=W(e,{placement:i,boundary:n,rootBoundary:r,padding:o})[x(i)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:s,rootBoundary:f,padding:a,flipVariations:l,allowedAutoPlacements:u}):n)}),[]);n=t.rects.reference,i=t.rects.popper;var m=new Map;c=!0;for(var h=d[0],v=0;v<d.length;v++){var g=d[v],y=x(g),b="start"===g.split("-")[1],w=0<=["top","bottom"].indexOf(y),O=w?"width":"height",j=W(t,{placement:g,boundary:s,rootBoundary:f,altBoundary:p,padding:a});if(b=w?b?"right":"left":b?"bottom":"top",n[O]>i[O]&&(b=H(b)),O=H(b),w=[],r&&w.push(0>=j[y]),o&&w.push(0>=j[b],0>=j[O]),w.every((function(e){return e}))){h=g,c=!1;break}m.set(g,w)}if(c)for(r=function(e){var t=d.find((function(t){if(t=m.get(t))return t.slice(0,e).every((function(e){return e}))}));if(t)return h=t,"break"},o=l?3:1;0<o&&"break"!==r(o);o--);t.placement!==h&&(t.modifiersData[e]._skip=!0,t.placement=h,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ne={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;e=e.name;var r=n.mainAxis,o=void 0===r||r,i=void 0!==(r=n.altAxis)&&r;r=void 0===(r=n.tether)||r;var a=n.tetherOffset,s=void 0===a?0:a,f=W(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary});n=x(t.placement);var p=t.placement.split("-")[1],c=!p,l=L(n);n="x"===l?"y":"x",a=t.modifiersData.popperOffsets;var u=t.rects.reference,m=t.rects.popper,h="function"==typeof s?s(Object.assign({},t.rects,{placement:t.placement})):s;if(s={x:0,y:0},a){if(o||i){var v="y"===l?"top":"left",g="y"===l?"bottom":"right",b="y"===l?"height":"width",w=a[l],O=a[l]+f[v],j=a[l]-f[g],E=r?-m[b]/2:0,D="start"===p?u[b]:m[b];p="start"===p?-m[b]:-u[b],m=t.elements.arrow,m=r&&m?d(m):{width:0,height:0};var P=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};v=P[v],g=P[g],m=_(0,U(u[b],m[b])),D=c?u[b]/2-E-m-v-h:D-m-v-h,u=c?-u[b]/2+E+m+g+h:p+m+g+h,c=t.elements.arrow&&y(t.elements.arrow),h=t.modifiersData.offset?t.modifiersData.offset[t.placement][l]:0,c=a[l]+D-h-(c?"y"===l?c.clientTop||0:c.clientLeft||0:0),u=a[l]+u-h,o&&(o=r?U(O,c):O,j=r?_(j,u):j,o=_(o,U(w,j)),a[l]=o,s[l]=o-w),i&&(o=(i=a[n])+f["x"===l?"top":"left"],f=i-f["x"===l?"bottom":"right"],o=r?U(o,c):o,r=r?_(f,u):f,r=_(o,U(i,r)),a[n]=r,s[n]=r-i)}t.modifiersData[e]=s}},requiresIfExists:["offset"]},re={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state;e=e.name;var r=n.elements.arrow,o=n.modifiersData.popperOffsets,i=x(n.placement),a=L(i);if(i=0<=["left","right"].indexOf(i)?"height":"width",r&&o){var s=n.modifiersData[e+"#persistent"].padding,f=d(r),p="y"===a?"top":"left",c="y"===a?"bottom":"right",l=n.rects.reference[i]+n.rects.reference[a]-o[a]-n.rects.popper[i];o=o[a]-n.rects.reference[a],l=(r=(r=y(r))?"y"===a?r.clientHeight||0:r.clientWidth||0:0)/2-f[i]/2+(l/2-o/2),i=_(s[p],U(l,r-f[i]-s[c])),n.modifiersData[e]=((t={})[a]=i,t.centerOffset=i-l,t)}},effect:function(e){var t=e.state,n=e.options;e=e.name;var r=n.element;if(r=void 0===r?"[data-popper-arrow]":r,n=void 0===(n=n.padding)?0:n,null!=r){if("string"==typeof r&&!(r=t.elements.popper.querySelector(r)))return;O(t.elements.popper,r)&&(n="function"==typeof n?n(Object.assign({},t.rects,{placement:t.placement})):n,t.elements.arrow=r,t.modifiersData[e+"#persistent"]={padding:k("number"!=typeof n?n:M(n,C))})}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},oe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state;e=e.name;var n=t.rects.reference,r=t.rects.popper,o=t.modifiersData.preventOverflow,i=W(t,{elementContext:"reference"}),a=W(t,{altBoundary:!0});n=S(i,n),r=S(a,r,o),o=q(n),a=q(r),t.modifiersData[e]={referenceClippingOffsets:n,popperEscapeOffsets:r,isReferenceHidden:o,hasPopperEscaped:a},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":o,"data-popper-escaped":a})}},ie=B({defaultModifiers:[Y,G,K,Q]}),ae=[Y,G,K,Q,Z,te,ne,re,oe],se=B({defaultModifiers:ae});e.applyStyles=Q,e.arrow=re,e.computeStyles=K,e.createPopper=se,e.createPopperLite=ie,e.defaultModifiers=ae,e.detectOverflow=W,e.eventListeners=Y,e.flip=te,e.hide=oe,e.offset=Z,e.popperGenerator=B,e.popperOffsets=G,e.preventOverflow=ne,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=popper.min.js.map
