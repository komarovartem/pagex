!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=98)}([function(t,e,n){var r=n(19)("wks"),o=n(15),i=n(2).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,e,n){t.exports=!n(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(3),o=n(30),i=n(23),c=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return"object"===n(t)?null!==t:"function"==typeof t}},function(t,e,n){var r=n(2),o=n(9),i=n(8),c=n(15)("src"),u=n(46),a=(""+u).split("toString");n(12).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var s="function"==typeof n;s&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(s&&(i(n,c)||o(n,c,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||u.call(this)})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4),o=n(17);t.exports=n(1)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(11),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(2),o=n(12),i=n(9),c=n(7),u=n(22),a=function t(e,n,a){var s,f,l,p,v=e&t.F,d=e&t.G,g=e&t.P,x=e&t.B,y=d?r:e&t.S?r[n]||(r[n]={}):(r[n]||{}).prototype,h=d?o:o[n]||(o[n]={}),m=h.prototype||(h.prototype={});for(s in d&&(a=n),a)l=((f=!v&&y&&void 0!==y[s])?y:a)[s],p=x&&f?u(l,r):g&&"function"==typeof l?u(Function.call,l):l,y&&c(y,s,l,e&t.U),h[s]!=l&&i(h,s,p),g&&m[s]!=l&&(m[s]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(29),o=n(10);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(12),o=n(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(25)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(10);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(3);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(37);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(19)("keys"),o=n(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(13),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){"use strict";var r,o,i=n(21),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,s=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(a=function(t){var e,n,r,o,a=this;return f&&(n=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),s&&(e=a.lastIndex),r=c.call(a,t),s&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),f&&r&&r.length>1&&u.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r}),t.exports=a},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){t.exports=!n(1)&&!n(5)(function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){"use strict";var r=n(33)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(11),o=n(10);t.exports=function(t){return function(e,n){var i,c,u=String(o(e)),a=r(n),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(26),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var c=n.call(t,e);if("object"!==r(c))throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){"use strict";n(47);var r=n(7),o=n(9),i=n(5),c=n(10),u=n(0),a=n(27),s=u("species"),f=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=u(t),v=!i(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=v?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[p](""),!e}):void 0;if(!v||!d||"replace"===t&&!f||"split"===t&&!l){var g=/./[p],x=n(c,p,""[t],function(t,e,n,r,o){return e.exec===a?v&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),y=x[0],h=x[1];r(String.prototype,t,y),o(RegExp.prototype,p,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)})}}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},,,function(t,e,n){var r=n(8),o=n(18),i=n(44)(!1),c=n(24)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)n!=c&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(40),o=n(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(4).f,o=n(8),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},,function(t,e,n){var r=n(18),o=n(14),i=n(45);t.exports=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(11),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){t.exports=n(19)("native-function-to-string",Function.toString)},function(t,e,n){"use strict";var r=n(27);n(16)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){var r=n(3),o=n(61),i=n(28),c=n(24)("IE_PROTO"),u=function(){},a=function(){var t,e=n(31)("iframe"),r=i.length;for(e.style.display="none",n(62).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[c]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){"use strict";var r=n(3),o=n(20),i=n(14),c=n(11),u=n(32),a=n(34),s=Math.max,f=Math.min,l=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;n(35)("replace",2,function(t,e,n,d){return[function(r,o){var i=t(this),c=null==r?void 0:r[e];return void 0!==c?c.call(r,i,o):n.call(String(i),r,o)},function(t,e){var o=d(n,t,this,e);if(o.done)return o.value;var l=r(t),p=String(this),v="function"==typeof e;v||(e=String(e));var x=l.global;if(x){var y=l.unicode;l.lastIndex=0}for(var h=[];;){var m=a(l,p);if(null===m)break;if(h.push(m),!x)break;""===String(m[0])&&(l.lastIndex=u(p,i(l.lastIndex),y))}for(var b,S="",w=0,_=0;_<h.length;_++){m=h[_];for(var O=String(m[0]),j=s(f(c(m.index),p.length),0),E=[],L=1;L<m.length;L++)E.push(void 0===(b=m[L])?b:String(b));var P=m.groups;if(v){var T=[O].concat(E,j,p);void 0!==P&&T.push(P);var A=String(e.apply(void 0,T))}else A=g(O,p,j,E,P,e);j>=w&&(S+=p.slice(w,j)+A,w=j+O.length)}return S+p.slice(w)}];function g(t,e,r,i,c,u){var a=r+t.length,s=i.length,f=v;return void 0!==c&&(c=o(c),f=p),n.call(u,f,function(n,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(a);case"<":u=c[o.slice(1,-1)];break;default:var f=+o;if(0===f)return n;if(f>s){var p=l(f/10);return 0===p?n:p<=s?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):n}u=i[f-1]}return void 0===u?"":u})}})},,,,,,,,,function(t,e,n){"use strict";var r=n(33)(!0);n(59)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(25),o=n(16),i=n(7),c=n(9),u=n(36),a=n(60),s=n(42),f=n(63),l=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,g,x,y){a(n,e,d);var h,m,b,S=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",_="values"==g,O=!1,j=t.prototype,E=j[l]||j["@@iterator"]||g&&j[g],L=E||S(g),P=g?_?S("entries"):L:void 0,T="Array"==e&&j.entries||E;if(T&&(b=f(T.call(new t)))!==Object.prototype&&b.next&&(s(b,w,!0),r||"function"==typeof b[l]||c(b,l,v)),_&&E&&"values"!==E.name&&(O=!0,L=function(){return E.call(this)}),r&&!y||!p&&!O&&j[l]||c(j,l,L),u[e]=L,u[w]=v,g)if(h={values:_?L:S("values"),keys:x?L:S("keys"),entries:P},y)for(m in h)m in j||i(j,m,h[m]);else o(o.P+o.F*(p||O),e,h);return h}},function(t,e,n){"use strict";var r=n(48),o=n(17),i=n(42),c={};n(9)(c,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(3),i=n(41);t.exports=n(1)?Object.defineProperties:function(t,e){o(t);for(var n,c=i(e),u=c.length,a=0;u>a;)r.f(t,n=c[a++],e[n]);return t}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(8),o=n(20),i=n(24)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){"use strict";var r=n(22),o=n(16),i=n(20),c=n(65),u=n(66),a=n(14),s=n(67),f=n(68);o(o.S+o.F*!n(69)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),v="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,x=void 0!==g,y=0,h=f(p);if(x&&(g=r(g,d>2?arguments[2]:void 0,2)),null==h||v==Array&&u(h))for(n=new v(e=a(p.length));e>y;y++)s(n,y,x?g(p[y],y):p[y]);else for(l=h.call(p),n=new v;!(o=l.next()).done;y++)s(n,y,x?c(l,g,[o.value,y],!0):o.value);return n.length=y,n}})},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(36),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){"use strict";var r=n(4),o=n(17);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(26),o=n(0)("iterator"),i=n(36);t.exports=n(12).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(t){}return n}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){t.exports=n(99)},function(t,e,n){"use strict";n.r(e);n(49),n(58),n(64);var r={accordion:{item:null,wrapper:null,content:null,container:null,init:function(t){if(this.container=t.closest(".pagex-accordion"),this.item=t.closest(".pagex-accordion-item"),this.wrapper=this.item.querySelector(".pagex-accordion-item-content-wrapper"),this.content=this.item.querySelector(".pagex-accordion-item-content"),!this.container.matches(".pagex-accordion-toggle-separately")&&!this.item.matches(".pagex-item-active")){var e=this.container.querySelector(".pagex-item-active");if(null!=e)e.querySelector(".pagex-accordion-item-content-wrapper").classList.remove("pagex-accordion-active"),e.classList.remove("pagex-item-active")}this.item.matches(".pagex-item-active")?(this.wrapper.classList.remove("pagex-accordion-active"),this.item.classList.remove("pagex-item-active")):(this.item.classList.add("pagex-item-active"),this.wrapper.classList.add("pagex-accordion-active")),pagex.updatePostContent()}},tabs:{init:function(t){if(!t.matches(".pagex-item-active")){var e=t.closest(".pagex-tabs"),n=Array.from(t.parentNode.children).indexOf(t);e.querySelector(".pagex-tabs-nav-items .pagex-item-active").classList.remove("pagex-item-active"),e.querySelector(".pagex-tabs-panes .pagex-item-active").classList.remove("pagex-item-active"),e.querySelectorAll(".pagex-tabs-nav-items .pagex-tabs-nav-item")[n].classList.add("pagex-item-active"),e.querySelectorAll(".pagex-tabs-panes .pagex-tabs-pane")[n].classList.add("pagex-item-active"),pagex.updatePostContent()}}},switchToBuilder:function(){document.body.classList.add("pagex-builder-editor-active"),document.querySelector('[name="pagex_page_status"]').value="true"},switchToDefault:function(){document.body.classList.remove("pagex-builder-editor-active"),document.querySelector('[name="pagex_page_status"]').value="false"},switchToFrontend:function(){pagexLocalize.front_link.length&&window.location.replace(pagexLocalize.front_link)}};document.addEventListener("click",function(t){if(t.target){var e=t.target;e.matches(".pagex-accordion-item-header")&&r.accordion.init(e),e.matches(".pagex-tabs-nav-item")&&r.tabs.init(e),e.matches(".pagex-switch-editor-builder")&&r.switchToBuilder(),e.matches(".pagex-switch-editor-wordpress")&&r.switchToDefault(),e.matches(".pagex-switch-editor-frontend")&&r.switchToFrontend()}}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("#advanced-sortables"),e=document.querySelector("#pagex-backend-editor"),n=document.querySelector('[name="pagex_page_status"]'),r=null!=n&&n.value;do{t.parentNode.insertBefore(t,t.previousElementSibling)}while(t&&t.previousElementSibling);e&&e.previousElementSibling&&e.parentNode.insertBefore(e,e.previousElementSibling),r&&"true"===r&&document.body.classList.add("pagex-builder-editor-active"),setTimeout(function(){var t=document.querySelector(".edit-post-header-toolbar"),e=document.querySelector("#wp-content-media-buttons"),n='<div id="pagex-switch-editors"><button class="pagex-switch-editor-wordpress button" type="button">'+pagexLocalize.string.edit_with_wordpress+'</button><button class="pagex-switch-editor-frontend button button-primary" type="button">'+pagexLocalize.string.edit_with_frontend+'</button><button class="pagex-switch-editor-builder button button-primary" type="button">'+pagexLocalize.string.edit_with_pagex+"</button></div>";t&&t.insertAdjacentHTML("beforeend",n),e&&e.insertAdjacentHTML("beforeend",n)},800)})}]);