/*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get=function t(e,i,n){null===e&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,i);if(void 0===s){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,i,n)}if("value"in s)return s.value;var a=s.get;return void 0!==a?a.call(n):void 0},_createClass=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}window.cash=function(){var i,o=document,a=window,t=Array.prototype,r=t.slice,n=t.filter,s=t.push,e=function(){},h=function(t){return typeof t==typeof e&&t.call},d=function(t){return"string"==typeof t},l=/^#[\w-]*$/,u=/^\.[\w-]*$/,c=/<.+>/,p=/^\w+$/;function v(t,e){e=e||o;var i=u.test(t)?e.getElementsByClassName(t.slice(1)):p.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t);return i}function f(t){if(!i){var e=(i=o.implementation.createHTMLDocument(null)).createElement("base");e.href=o.location.href,i.head.appendChild(e)}return i.body.innerHTML=t,i.body.childNodes}function m(t){"loading"!==o.readyState?t():o.addEventListener("DOMContentLoaded",t)}function g(t,e){if(!t)return this;if(t.cash&&t!==a)return t;var i,n=t,s=0;if(d(t))n=l.test(t)?o.getElementById(t.slice(1)):c.test(t)?f(t):v(t,e);else if(h(t))return m(t),this;if(!n)return this;if(n.nodeType||n===a)this[0]=n,this.length=1;else for(i=this.length=n.length;s<i;s++)this[s]=n[s];return this}function _(t,e){return new g(t,e)}var y=_.fn=_.prototype=g.prototype={cash:!0,length:0,push:s,splice:t.splice,map:t.map,init:g};function k(t,e){for(var i=t.length,n=0;n<i&&!1!==e.call(t[n],t[n],n,t);n++);}function b(t,e){var i=t&&(t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector);return!!i&&i.call(t,e)}function w(e){return d(e)?b:e.cash?function(t){return e.is(t)}:function(t,e){return t===e}}function C(t){return _(r.call(t).filter(function(t,e,i){return i.indexOf(t)===e}))}Object.defineProperty(y,"constructor",{value:_}),_.parseHTML=f,_.noop=e,_.isFunction=h,_.isString=d,_.extend=y.extend=function(t){t=t||{};var e=r.call(arguments),i=e.length,n=1;for(1===e.length&&(t=this,n=0);n<i;n++)if(e[n])for(var s in e[n])e[n].hasOwnProperty(s)&&(t[s]=e[n][s]);return t},_.extend({merge:function(t,e){for(var i=+e.length,n=t.length,s=0;s<i;n++,s++)t[n]=e[s];return t.length=n,t},each:k,matches:b,unique:C,isArray:Array.isArray,isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}});var E=_.uid="_cash"+Date.now();function M(t){return t[E]=t[E]||{}}function O(t,e,i){return M(t)[e]=i}function x(t,e){var i=M(t);return void 0===i[e]&&(i[e]=t.dataset?t.dataset[e]:_(t).attr("data-"+e)),i[e]}y.extend({data:function(e,i){if(d(e))return void 0===i?x(this[0],e):this.each(function(t){return O(t,e,i)});for(var t in e)this.data(t,e[t]);return this},removeData:function(s){return this.each(function(t){return i=s,void((n=M(e=t))?delete n[i]:e.dataset?delete e.dataset[i]:_(e).removeAttr("data-"+name));var e,i,n})}});var L=/\S+/g;function T(t){return d(t)&&t.match(L)}function $(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}function B(t,e,i){t.classList?t.classList.add(e):i.indexOf(" "+e+" ")&&(t.className+=" "+e)}function D(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(e,"")}y.extend({addClass:function(t){var n=T(t);return n?this.each(function(e){var i=" "+e.className+" ";k(n,function(t){B(e,t,i)})}):this},attr:function(e,i){if(e){if(d(e))return void 0===i?this[0]?this[0].getAttribute?this[0].getAttribute(e):this[0][e]:void 0:this.each(function(t){t.setAttribute?t.setAttribute(e,i):t[e]=i});for(var t in e)this.attr(t,e[t]);return this}},hasClass:function(t){var e=!1,i=T(t);return i&&i.length&&this.each(function(t){return!(e=$(t,i[0]))}),e},prop:function(e,i){if(d(e))return void 0===i?this[0][e]:this.each(function(t){t[e]=i});for(var t in e)this.prop(t,e[t]);return this},removeAttr:function(e){return this.each(function(t){t.removeAttribute?t.removeAttribute(e):delete t[e]})},removeClass:function(t){if(!arguments.length)return this.attr("class","");var i=T(t);return i?this.each(function(e){k(i,function(t){D(e,t)})}):this},removeProp:function(e){return this.each(function(t){delete t[e]})},toggleClass:function(t,e){if(void 0!==e)return this[e?"addClass":"removeClass"](t);var n=T(t);return n?this.each(function(e){var i=" "+e.className+" ";k(n,function(t){$(e,t)?D(e,t):B(e,t,i)})}):this}}),y.extend({add:function(t,e){return C(_.merge(this,_(t,e)))},each:function(t){return k(this,t),this},eq:function(t){return _(this.get(t))},filter:function(e){if(!e)return this;var i=h(e)?e:w(e);return _(n.call(this,function(t){return i(t,e)}))},first:function(){return this.eq(0)},get:function(t){return void 0===t?r.call(this):t<0?this[t+this.length]:this[t]},index:function(t){var e=t?_(t)[0]:this[0],i=t?this:_(e).parent().children();return r.call(i).indexOf(e)},last:function(){return this.eq(-1)}});var S,I,A,R,H,P,W=(H=/(?:^\w|[A-Z]|\b\w)/g,P=/[\s-_]+/g,function(t){return t.replace(H,function(t,e){return t[0===e?"toLowerCase":"toUpperCase"]()}).replace(P,"")}),j=(S={},I=document,A=I.createElement("div"),R=A.style,function(e){if(e=W(e),S[e])return S[e];var t=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+["webkit","moz","ms","o"].join(t+" ")+t).split(" ");return k(i,function(t){if(t in R)return S[t]=e=S[e]=t,!1}),S[e]});function F(t,e){return parseInt(a.getComputedStyle(t[0],null)[e],10)||0}function q(e,i,t){var n,s=x(e,"_cashEvents"),o=s&&s[i];o&&(t?(e.removeEventListener(i,t),0<=(n=o.indexOf(t))&&o.splice(n,1)):(k(o,function(t){e.removeEventListener(i,t)}),o=[]))}function N(t,e){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(e).replace(/%20/g,"+")}function z(t){var e,i,n,s=t.type;if(!s)return null;switch(s.toLowerCase()){case"select-one":return 0<=(n=(i=t).selectedIndex)?i.options[n].value:null;case"select-multiple":return e=[],k(t.options,function(t){t.selected&&e.push(t.value)}),e.length?e:null;case"radio":case"checkbox":return t.checked?t.value:null;default:return t.value?t.value:null}}function V(e,i,n){var t=d(i);t||!i.length?k(e,t?function(t){return t.insertAdjacentHTML(n?"afterbegin":"beforeend",i)}:function(t,e){return function(t,e,i){if(i){var n=t.childNodes[0];t.insertBefore(e,n)}else t.appendChild(e)}(t,0===e?i:i.cloneNode(!0),n)}):k(i,function(t){return V(e,t,n)})}_.prefixedProp=j,_.camelCase=W,y.extend({css:function(e,i){if(d(e))return e=j(e),1<arguments.length?this.each(function(t){return t.style[e]=i}):a.getComputedStyle(this[0])[e];for(var t in e)this.css(t,e[t]);return this}}),k(["Width","Height"],function(e){var t=e.toLowerCase();y[t]=function(){return this[0].getBoundingClientRect()[t]},y["inner"+e]=function(){return this[0]["client"+e]},y["outer"+e]=function(t){return this[0]["offset"+e]+(t?F(this,"margin"+("Width"===e?"Left":"Top"))+F(this,"margin"+("Width"===e?"Right":"Bottom")):0)}}),y.extend({off:function(e,i){return this.each(function(t){return q(t,e,i)})},on:function(a,i,r,l){var n;if(!d(a)){for(var t in a)this.on(t,i,a[t]);return this}return h(i)&&(r=i,i=null),"ready"===a?(m(r),this):(i&&(n=r,r=function(t){for(var e=t.target;!b(e,i);){if(e===this||null===e)return e=!1;e=e.parentNode}e&&n.call(e,t)}),this.each(function(t){var e,i,n,s,o=r;l&&(o=function(){r.apply(this,arguments),q(t,a,o)}),i=a,n=o,(s=x(e=t,"_cashEvents")||O(e,"_cashEvents",{}))[i]=s[i]||[],s[i].push(n),e.addEventListener(i,n)}))},one:function(t,e,i){return this.on(t,e,i,!0)},ready:m,trigger:function(t,e){if(document.createEvent){var i=document.createEvent("HTMLEvents");return i.initEvent(t,!0,!1),i=this.extend(i,e),this.each(function(t){return t.dispatchEvent(i)})}}}),y.extend({serialize:function(){var s="";return k(this[0].elements||this,function(t){if(!t.disabled&&"FIELDSET"!==t.tagName){var e=t.name;switch(t.type.toLowerCase()){case"file":case"reset":case"submit":case"button":break;case"select-multiple":var i=z(t);null!==i&&k(i,function(t){s+=N(e,t)});break;default:var n=z(t);null!==n&&(s+=N(e,n))}}}),s.substr(1)},val:function(e){return void 0===e?z(this[0]):this.each(function(t){return t.value=e})}}),y.extend({after:function(t){return _(t).insertAfter(this),this},append:function(t){return V(this,t),this},appendTo:function(t){return V(_(t),this),this},before:function(t){return _(t).insertBefore(this),this},clone:function(){return _(this.map(function(t){return t.cloneNode(!0)}))},empty:function(){return this.html(""),this},html:function(t){if(void 0===t)return this[0].innerHTML;var e=t.nodeType?t[0].outerHTML:t;return this.each(function(t){return t.innerHTML=e})},insertAfter:function(t){var s=this;return _(t).each(function(t,e){var i=t.parentNode,n=t.nextSibling;s.each(function(t){i.insertBefore(0===e?t:t.cloneNode(!0),n)})}),this},insertBefore:function(t){var s=this;return _(t).each(function(e,i){var n=e.parentNode;s.each(function(t){n.insertBefore(0===i?t:t.cloneNode(!0),e)})}),this},prepend:function(t){return V(this,t,!0),this},prependTo:function(t){return V(_(t),this,!0),this},remove:function(){return this.each(function(t){if(t.parentNode)return t.parentNode.removeChild(t)})},text:function(e){return void 0===e?this[0].textContent:this.each(function(t){return t.textContent=e})}});var X=o.documentElement;return y.extend({position:function(){var t=this[0];return{left:t.offsetLeft,top:t.offsetTop}},offset:function(){var t=this[0].getBoundingClientRect();return{top:t.top+a.pageYOffset-X.clientTop,left:t.left+a.pageXOffset-X.clientLeft}},offsetParent:function(){return _(this[0].offsetParent)}}),y.extend({children:function(e){var i=[];return this.each(function(t){s.apply(i,t.children)}),i=C(i),e?i.filter(function(t){return b(t,e)}):i},closest:function(t){return!t||this.length<1?_():this.is(t)?this.filter(t):this.parent().closest(t)},is:function(e){if(!e)return!1;var i=!1,n=w(e);return this.each(function(t){return!(i=n(t,e))}),i},find:function(e){if(!e||e.nodeType)return _(e&&this.has(e).length?e:null);var i=[];return this.each(function(t){s.apply(i,v(e,t))}),C(i)},has:function(e){var t=d(e)?function(t){return 0!==v(e,t).length}:function(t){return t.contains(e)};return this.filter(t)},next:function(){return _(this[0].nextElementSibling)},not:function(e){if(!e)return this;var i=w(e);return this.filter(function(t){return!i(t,e)})},parent:function(){var e=[];return this.each(function(t){t&&t.parentNode&&e.push(t.parentNode)}),C(e)},parents:function(e){var i,n=[];return this.each(function(t){for(i=t;i&&i.parentNode&&i!==o.body.parentNode;)i=i.parentNode,(!e||e&&b(i,e))&&n.push(i)}),C(n)},prev:function(){return _(this[0].previousElementSibling)},siblings:function(t){var e=this.parent().children(t),i=this[0];return e.filter(function(t){return t!==i})}}),_}();var Component=function(){function s(t,e,i){_classCallCheck(this,s),e instanceof Element||console.error(Error(e+" is not an HTML Element"));var n=t.getInstance(e);n&&n.destroy(),this.el=e,this.$el=cash(e)}return _createClass(s,null,[{key:"init",value:function(t,e,i){var n=null;if(e instanceof Element)n=new t(e,i);else if(e&&(e.jquery||e.cash||e instanceof NodeList)){for(var s=[],o=0;o<e.length;o++)s.push(new t(e[o],i));n=s}return n}}]),s}();!function(t){t.Package?M={}:t.M={},M.jQueryLoaded=!!t.jQuery}(window),"function"==typeof define&&define.amd?define("M",[],function(){return M}):"undefined"==typeof exports||exports.nodeType||("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=M),exports.default=M),M.version="1.0.0",M.keys={TAB:9,ENTER:13,ESC:27,ARROW_UP:38,ARROW_DOWN:40},M.tabPressed=!1,M.keyDown=!1;var docHandleKeydown=function(t){M.keyDown=!0,t.which!==M.keys.TAB&&t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||(M.tabPressed=!0)},docHandleKeyup=function(t){M.keyDown=!1,t.which!==M.keys.TAB&&t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||(M.tabPressed=!1)},docHandleFocus=function(t){M.keyDown&&document.body.classList.add("keyboard-focused")},docHandleBlur=function(t){document.body.classList.remove("keyboard-focused")};document.addEventListener("keydown",docHandleKeydown,!0),document.addEventListener("keyup",docHandleKeyup,!0),document.addEventListener("focus",docHandleFocus,!0),document.addEventListener("blur",docHandleBlur,!0),M.initializeJqueryWrapper=function(n,s,o){jQuery.fn[s]=function(e){if(n.prototype[e]){var i=Array.prototype.slice.call(arguments,1);if("get"===e.slice(0,3)){var t=this.first()[0][o];return t[e].apply(t,i)}return this.each(function(){var t=this[o];t[e].apply(t,i)})}if("object"==typeof e||!e)return n.init(this,e),this;jQuery.error("Method "+e+" does not exist on jQuery."+s)}},M.AutoInit=function(t){var e=t||document.body,i={Autocomplete:e.querySelectorAll(".autocomplete:not(.no-autoinit)"),Carousel:e.querySelectorAll(".carousel:not(.no-autoinit)"),Chips:e.querySelectorAll(".chips:not(.no-autoinit)"),Collapsible:e.querySelectorAll(".collapsible:not(.no-autoinit)"),Datepicker:e.querySelectorAll(".datepicker:not(.no-autoinit)"),Dropdown:e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),Materialbox:e.querySelectorAll(".materialboxed:not(.no-autoinit)"),Modal:e.querySelectorAll(".modal:not(.no-autoinit)"),Parallax:e.querySelectorAll(".parallax:not(.no-autoinit)"),Pushpin:e.querySelectorAll(".pushpin:not(.no-autoinit)"),ScrollSpy:e.querySelectorAll(".scrollspy:not(.no-autoinit)"),FormSelect:e.querySelectorAll("select:not(.no-autoinit)"),Sidenav:e.querySelectorAll(".sidenav:not(.no-autoinit)"),Tabs:e.querySelectorAll(".tabs:not(.no-autoinit)"),TapTarget:e.querySelectorAll(".tap-target:not(.no-autoinit)"),Timepicker:e.querySelectorAll(".timepicker:not(.no-autoinit)"),Tooltip:e.querySelectorAll(".tooltipped:not(.no-autoinit)"),FloatingActionButton:e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")};for(var n in i){M[n].init(i[n])}},M.objectSelectorString=function(t){return((t.prop("tagName")||"")+(t.attr("id")||"")+(t.attr("class")||"")).replace(/\s/g,"")},M.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),M.escapeHash=function(t){return t.replace(/(:|\.|\[|\]|,|=|\/)/g,"\\$1")},M.elementOrParentIsFixed=function(t){var e=$(t),i=e.add(e.parents()),n=!1;return i.each(function(){if("fixed"===$(this).css("position"))return!(n=!0)}),n},M.checkWithinContainer=function(t,e,i){var n={top:!1,right:!1,bottom:!1,left:!1},s=t.getBoundingClientRect(),o=t===document.body?Math.max(s.bottom,window.innerHeight):s.bottom,a=t.scrollLeft,r=t.scrollTop,l=e.left-a,h=e.top-r;return(l<s.left+i||l<i)&&(n.left=!0),(l+e.width>s.right-i||l+e.width>window.innerWidth-i)&&(n.right=!0),(h<s.top+i||h<i)&&(n.top=!0),(h+e.height>o-i||h+e.height>window.innerHeight-i)&&(n.bottom=!0),n},M.checkPossibleAlignments=function(t,e,i,n){var s={top:!0,right:!0,bottom:!0,left:!0,spaceOnTop:null,spaceOnRight:null,spaceOnBottom:null,spaceOnLeft:null},o="visible"===getComputedStyle(e).overflow,a=e.getBoundingClientRect(),r=Math.min(a.height,window.innerHeight),l=Math.min(a.width,window.innerWidth),h=t.getBoundingClientRect(),d=e.scrollLeft,u=e.scrollTop,c=i.left-d,p=i.top-u,v=i.top+h.height-u;return s.spaceOnRight=o?window.innerWidth-(h.left+i.width):l-(c+i.width),s.spaceOnRight<0&&(s.left=!1),s.spaceOnLeft=o?h.right-i.width:c-i.width+h.width,s.spaceOnLeft<0&&(s.right=!1),s.spaceOnBottom=o?window.innerHeight-(h.top+i.height+n):r-(p+i.height+n),s.spaceOnBottom<0&&(s.top=!1),s.spaceOnTop=o?h.bottom-(i.height+n):v-(i.height-n),s.spaceOnTop<0&&(s.bottom=!1),s},M.getOverflowParent=function(t){return null==t?null:t===document.body||"visible"!==getComputedStyle(t).overflow?t:M.getOverflowParent(t.parentElement)},M.getIdFromTrigger=function(t){var e=t.getAttribute("data-target");return e||(e=(e=t.getAttribute("href"))?e.slice(1):""),e},M.getDocumentScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},M.getDocumentScrollLeft=function(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0};var getTime=Date.now||function(){return(new Date).getTime()};M.throttle=function(i,n,s){var o=void 0,a=void 0,r=void 0,l=null,h=0;s||(s={});var d=function(){h=!1===s.leading?0:getTime(),l=null,r=i.apply(o,a),o=a=null};return function(){var t=getTime();h||!1!==s.leading||(h=t);var e=n-(t-h);return o=this,a=arguments,e<=0?(clearTimeout(l),l=null,h=t,r=i.apply(o,a),o=a=null):l||!1===s.trailing||(l=setTimeout(d,e)),r}};var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,i){if(i.get||i.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=i.value)},$jscomp.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:"undefined"!=typeof global&&null!=global?global:t},$jscomp.global=$jscomp.getGlobal(this),$jscomp.SYMBOL_PREFIX="jscomp_symbol_",$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){},$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)},$jscomp.symbolCounter_=0,$jscomp.Symbol=function(t){return $jscomp.SYMBOL_PREFIX+(t||"")+$jscomp.symbolCounter_++},$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var t=$jscomp.global.Symbol.iterator;t||(t=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&$jscomp.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}}),$jscomp.initSymbolIterator=function(){}},$jscomp.arrayIterator=function(t){var e=0;return $jscomp.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},$jscomp.iteratorPrototype=function(t){return $jscomp.initSymbolIterator(),(t={next:t})[$jscomp.global.Symbol.iterator]=function(){return this},t},$jscomp.array=$jscomp.array||{},$jscomp.iteratorFromArray=function(e,i){$jscomp.initSymbolIterator(),e instanceof String&&(e+="");var n=0,s={next:function(){if(n<e.length){var t=n++;return{value:i(t,e[t]),done:!1}}return s.next=function(){return{done:!0,value:void 0}},s.next()}};return s[Symbol.iterator]=function(){return s},s},$jscomp.polyfill=function(t,e,i,n){if(e){for(i=$jscomp.global,t=t.split("."),n=0;n<t.length-1;n++){var s=t[n];s in i||(i[s]={}),i=i[s]}(e=e(n=i[t=t[t.length-1]]))!=n&&null!=e&&$jscomp.defineProperty(i,t,{configurable:!0,writable:!0,value:e})}},$jscomp.polyfill("Array.prototype.keys",function(t){return t||function(){return $jscomp.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var $jscomp$this=this;M.anime=function(){function s(t){if(!B.col(t))try{return document.querySelectorAll(t)}catch(t){}}function b(t,e){for(var i=t.length,n=2<=arguments.length?e:void 0,s=[],o=0;o<i;o++)if(o in t){var a=t[o];e.call(n,a,o,t)&&s.push(a)}return s}function d(t){return t.reduce(function(t,e){return t.concat(B.arr(e)?d(e):e)},[])}function o(t){return B.arr(t)?t:(B.str(t)&&(t=s(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function a(t,e){return t.some(function(t){return t===e})}function r(t){var e,i={};for(e in t)i[e]=t[e];return i}function u(t,e){var i,n=r(t);for(i in t)n[i]=e.hasOwnProperty(i)?e[i]:t[i];return n}function c(t,e){var i,n=r(t);for(i in e)n[i]=B.und(t[i])?e[i]:t[i];return n}function l(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function h(t,e){return B.fnc(t)?t(e.target,e.id,e.total):t}function w(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function p(t,e){return B.dom(t)&&a($,e)?"transform":B.dom(t)&&(t.getAttribute(e)||B.svg(t)&&t[e])?"attribute":B.dom(t)&&"transform"!==e&&w(t,e)?"css":null!=t[e]?"object":void 0}function v(t,e){switch(p(t,e)){case"transform":return function(t,i){var e,n=-1<(e=i).indexOf("translate")||"perspective"===e?"px":-1<e.indexOf("rotate")||-1<e.indexOf("skew")?"deg":void 0,n=-1<i.indexOf("scale")?1:0+n;if(!(t=t.style.transform))return n;for(var s=[],o=[],a=[],r=/(\w+)\((.+?)\)/g;s=r.exec(t);)o.push(s[1]),a.push(s[2]);return(t=b(a,function(t,e){return o[e]===i})).length?t[0]:n}(t,e);case"css":return w(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0}function f(t,e){var i=/^(\*=|\+=|-=)/.exec(t);if(!i)return t;var n=l(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(i[0],"")),i[0][0]){case"+":return e+t+n;case"-":return e-t+n;case"*":return e*t+n}}function m(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function i(t){t=t.points;for(var e,i=0,n=0;n<t.numberOfItems;n++){var s=t.getItem(n);0<n&&(i+=m(e,s)),e=s}return i}function g(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return m({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return i(t);case"polygon":var e=t.points;return i(t)+m(e.getItem(e.numberOfItems-1),e.getItem(0))}}function C(e,i){function t(t){return t=void 0===t?0:t,e.el.getPointAtLength(1<=i+t?i+t:0)}var n=t(),s=t(-1),o=t(1);switch(e.property){case"x":return n.x;case"y":return n.y;case"angle":return 180*Math.atan2(o.y-s.y,o.x-s.x)/Math.PI}}function _(t,e){var i,n=/-?\d*\.?\d+/g;if(i=B.pth(t)?t.totalLength:t,B.col(i))if(B.rgb(i)){var s=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);i=s?"rgba("+s[1]+",1)":i}else i=B.hex(i)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,n){return e+e+i+i+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var i=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+i+","+e+",1)"}(i):B.hsl(i)?function(t){function e(t,e,i){return i<0&&(i+=1),1<i&&--i,i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}var i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(i[1])/360;var n=parseInt(i[2])/100,s=parseInt(i[3])/100,i=i[4]||1;if(0==n)s=n=t=s;else{var o=s<.5?s*(1+n):s+n-s*n,a=2*s-o,s=e(a,o,t+1/3),n=e(a,o,t);t=e(a,o,t-1/3)}return"rgba("+255*s+","+255*n+","+255*t+","+i+")"}(i):void 0;else s=(s=l(i))?i.substr(0,i.length-s.length):i,i=e&&!/\s/g.test(i)?s+e:s;return{original:i+="",numbers:i.match(n)?i.match(n).map(Number):[0],strings:B.str(t)||e?i.split(n):[]}}function y(t){return b(t=t?d(B.arr(t)?t.map(o):o(t)):[],function(t,e,i){return i.indexOf(t)===e})}function k(t,i){var e=r(i);if(B.arr(t)){var n=t.length;2!==n||B.obj(t[0])?B.fnc(i.duration)||(e.duration=i.duration/n):t={value:t}}return o(t).map(function(t,e){return e=e?0:i.delay,t=B.obj(t)&&!B.pth(t)?t:{value:t},B.und(t.delay)&&(t.delay=e),t}).map(function(t){return c(t,e)})}function E(o,a){var r;return o.tweens.map(function(t){var e=(t=function(t,e){var i,n={};for(i in t){var s=h(t[i],e);B.arr(s)&&1===(s=s.map(function(t){return h(t,e)})).length&&(s=s[0]),n[i]=s}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(t,a)).value,i=v(a.target,o.name),n=r?r.to.original:i,n=B.arr(e)?e[0]:n,s=f(B.arr(e)?e[1]:e,n),i=l(s)||l(n)||l(i);return t.from=_(n,i),t.to=_(s,i),t.start=r?r.end:o.offset,t.end=t.start+t.delay+t.duration,t.easing=function(t){return B.arr(t)?D.apply(this,t):S[t]}(t.easing),t.elasticity=(1e3-Math.min(Math.max(t.elasticity,1),999))/1e3,t.isPath=B.pth(e),t.isColor=B.col(t.from.original),t.isColor&&(t.round=1),r=t})}function M(e,t,i,n){var s="delay"===e;return t.length?(s?Math.min:Math.max).apply(Math,t.map(function(t){return t[e]})):s?n.delay:i.offset+n.delay+n.duration}function n(t){var e,i,n,s,o=u(L,t),a=u(T,t),r=(i=t.targets,(n=y(i)).map(function(t,e){return{target:t,id:e,total:n.length}})),l=[],h=c(o,a);for(e in t)h.hasOwnProperty(e)||"targets"===e||l.push({name:e,offset:h.offset,tweens:k(t[e],a)});return s=l,t=b(d(r.map(function(n){return s.map(function(t){var e=p(n.target,t.name);if(e){var i=E(t,n);t={type:e,property:t.name,animatable:n,tweens:i,duration:i[i.length-1].end,delay:i[0].delay}}else t=void 0;return t})})),function(t){return!B.und(t)}),c(o,{children:[],animatables:r,animations:t,duration:M("duration",t,o,a),delay:M("delay",t,o,a)})}function O(t){function d(){return window.Promise&&new Promise(function(t){return _=t})}function u(t){return k.reversed?k.duration-t:t}function c(e){for(var t=0,i={},n=k.animations,s=n.length;t<s;){var o=n[t],a=o.animatable,r=o.tweens,l=r.length-1,h=r[l];l&&(h=b(r,function(t){return e<t.end})[0]||h);for(var r=Math.min(Math.max(e-h.start-h.delay,0),h.duration)/h.duration,d=isNaN(r)?1:h.easing(r,h.elasticity),r=h.to.strings,u=h.round,l=[],c=void 0,c=h.to.numbers.length,p=0;p<c;p++){var v=void 0,v=h.to.numbers[p],f=h.from.numbers[p],v=h.isPath?C(h.value,d*v):f+d*(v-f);u&&(h.isColor&&2<p||(v=Math.round(v*u)/u)),l.push(v)}if(h=r.length)for(c=r[0],d=0;d<h;d++)u=r[d+1],p=l[d],isNaN(p)||(c=u?c+(p+u):c+(p+" "));else c=l[0];I[o.type](a.target,o.property,c,i,a.id),o.currentValue=c,t++}if(t=Object.keys(i).length)for(n=0;n<t;n++)x||(x=w(document.body,"transform")?"transform":"-webkit-transform"),k.animatables[n].target.style[x]=i[n].join(" ");k.currentTime=e,k.progress=e/k.duration*100}function p(t){k[t]&&k[t](k)}function v(){k.remaining&&!0!==k.remaining&&k.remaining--}function e(t){var e=k.duration,i=k.offset,n=i+k.delay,s=k.currentTime,o=k.reversed,a=u(t);if(k.children.length){var r=k.children,l=r.length;if(a>=k.currentTime)for(var h=0;h<l;h++)r[h].seek(a);else for(;l--;)r[l].seek(a)}(n<=a||!e)&&(k.began||(k.began=!0,p("begin")),p("run")),i<a&&a<e?c(a):(a<=i&&0!==s&&(c(0),o&&v()),(e<=a&&s!==e||!e)&&(c(e),o||v())),p("update"),e<=t&&(k.remaining?(m=f,"alternate"===k.direction&&(k.reversed=!k.reversed)):(k.pause(),k.completed||(k.completed=!0,p("complete"),"Promise"in window&&(_(),y=d()))),g=0)}t=void 0===t?{}:t;var f,m,g=0,_=null,y=d(),k=n(t);return k.reset=function(){var t=k.direction,e=k.loop;for(k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.completed=!1,k.reversed="reverse"===t,k.remaining="alternate"===t&&1===e?2:e,c(0),t=k.children.length;t--;)k.children[t].reset()},k.tick=function(t){f=t,m||(m=f),e((g+f-m)*O.speed)},k.seek=function(t){e(u(t))},k.pause=function(){var t=A.indexOf(k);-1<t&&A.splice(t,1),k.paused=!0},k.play=function(){k.paused&&(k.paused=!1,m=0,g=u(k.currentTime),A.push(k),R||H())},k.reverse=function(){k.reversed=!k.reversed,m=0,g=u(k.currentTime)},k.restart=function(){k.pause(),k.reset(),k.play()},k.finished=y,k.reset(),k.autoplay&&k.play(),k}var x,L={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},T={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},$="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),B={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return B.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||B.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return B.hex(t)||B.rgb(t)||B.hsl(t)}},D=function(){function u(t,e,i){return(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t}return function(a,r,l,h){if(0<=a&&a<=1&&0<=l&&l<=1){var d=new Float32Array(11);if(a!==r||l!==h)for(var t=0;t<11;++t)d[t]=u(.1*t,a,l);return function(t){if(a===r&&l===h)return t;if(0===t)return 0;if(1===t)return 1;for(var e=0,i=1;10!==i&&d[i]<=t;++i)e+=.1;var i=e+(t-d[--i])/(d[i+1]-d[i])*.1,n=3*(1-3*l+3*a)*i*i+2*(3*l-6*a)*i+3*a;if(.001<=n){for(e=0;e<4&&0!=(n=3*(1-3*l+3*a)*i*i+2*(3*l-6*a)*i+3*a);++e)var s=u(i,a,l)-t,i=i-s/n;t=i}else if(0===n)t=i;else{for(var i=e,e=e+.1,o=0;0<(n=u(s=i+(e-i)/2,a,l)-t)?e=s:i=s,1e-7<Math.abs(n)&&++o<10;);t=s}return u(t,r,h)}}}}(),S=function(){function i(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var t,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),e={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],i],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(t,e){return 1-i(1-t,e)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(t,e){return t<.5?i(2*t,e)/2:1-i(-2*t+2,e)/2}]},s={linear:D(.25,.25,.75,.75)},o={};for(t in e)o.type=t,e[o.type].forEach(function(i){return function(t,e){s["ease"+i.type+n[e]]=B.fnc(t)?t:D.apply($jscomp$this,t)}}(o)),o={type:o.type};return s}(),I={css:function(t,e,i){return t.style[e]=i},attribute:function(t,e,i){return t.setAttribute(e,i)},object:function(t,e,i){return t[e]=i},transform:function(t,e,i,n,s){n[s]||(n[s]=[]),n[s].push(e+"("+i+")")}},A=[],R=0,H=function(){function n(){R=requestAnimationFrame(t)}function t(t){var e=A.length;if(e){for(var i=0;i<e;)A[i]&&A[i].tick(t),i++;n()}else cancelAnimationFrame(R),R=0}return n}();return O.version="2.2.0",O.speed=1,O.running=A,O.remove=function(t){t=y(t);for(var e=A.length;e--;)for(var i=A[e],n=i.animations,s=n.length;s--;)a(t,n[s].animatable.target)&&(n.splice(s,1),n.length||i.pause())},O.getValue=v,O.path=function(t,e){var i=B.str(t)?s(t)[0]:t,n=e||100;return function(t){return{el:i,property:t,totalLength:g(i)*(n/100)}}},O.setDashoffset=function(t){var e=g(t);return t.setAttribute("stroke-dasharray",e),e},O.bezier=D,O.easings=S,O.timeline=function(n){var s=O(n);return s.pause(),s.duration=0,s.add=function(t){return s.children.forEach(function(t){t.began=!0,t.completed=!0}),o(t).forEach(function(t){var e=c(t,u(T,n||{}));e.targets=e.targets||n.targets,t=s.duration;var i=e.offset;e.autoplay=!1,e.direction=s.direction,e.offset=B.und(i)?t:f(i,t),s.began=!0,s.completed=!0,s.seek(e.offset),(e=O(e)).began=!0,e.completed=!0,e.duration>t&&(s.duration=e.duration),s.children.push(e)}),s.seek(0),s.reset(),s.autoplay&&s.restart(),s},s},O.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},O}(),function(r,l){"use strict";var e={accordion:!0,onOpenStart:void 0,onOpenEnd:void 0,onCloseStart:void 0,onCloseEnd:void 0,inDuration:300,outDuration:300},t=function(t){function s(t,e){_classCallCheck(this,s);var i=_possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,e));(i.el.M_Collapsible=i).options=r.extend({},s.defaults,e),i.$headers=i.$el.children("li").children(".collapsible-header"),i.$headers.attr("tabindex",0),i._setupEventHandlers();var n=i.$el.children("li.active").children(".collapsible-body");return i.options.accordion?n.first().css("display","block"):n.css("display","block"),i}return _inherits(s,Component),_createClass(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Collapsible=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleCollapsibleClickBound=this._handleCollapsibleClick.bind(this),this._handleCollapsibleKeydownBound=this._handleCollapsibleKeydown.bind(this),this.el.addEventListener("click",this._handleCollapsibleClickBound),this.$headers.each(function(t){t.addEventListener("keydown",e._handleCollapsibleKeydownBound)})}},{key:"_removeEventHandlers",value:function(){var e=this;this.el.removeEventListener("click",this._handleCollapsibleClickBound),this.$headers.each(function(t){t.removeEventListener("keydown",e._handleCollapsibleKeydownBound)})}},{key:"_handleCollapsibleClick",value:function(t){var e=r(t.target).closest(".collapsible-header");if(t.target&&e.length){var i=e.closest(".collapsible");if(i[0]===this.el){var n=e.closest("li"),s=i.children("li"),o=n[0].classList.contains("active"),a=s.index(n);o?this.close(a):this.open(a)}}}},{key:"_handleCollapsibleKeydown",value:function(t){13===t.keyCode&&this._handleCollapsibleClickBound(t)}},{key:"_animateIn",value:function(t){var e=this,i=this.$el.children("li").eq(t);if(i.length){var n=i.children(".collapsible-body");l.remove(n[0]),n.css({display:"block",overflow:"hidden",height:0,paddingTop:"",paddingBottom:""});var s=n.css("padding-top"),o=n.css("padding-bottom"),a=n[0].scrollHeight;n.css({paddingTop:0,paddingBottom:0}),l({targets:n[0],height:a,paddingTop:s,paddingBottom:o,duration:this.options.inDuration,easing:"easeInOutCubic",complete:function(t){n.css({overflow:"",paddingTop:"",paddingBottom:"",height:""}),"function"==typeof e.options.onOpenEnd&&e.options.onOpenEnd.call(e,i[0])}})}}},{key:"_animateOut",value:function(t){var e=this,i=this.$el.children("li").eq(t);if(i.length){var n=i.children(".collapsible-body");l.remove(n[0]),n.css("overflow","hidden"),l({targets:n[0],height:0,paddingTop:0,paddingBottom:0,duration:this.options.outDuration,easing:"easeInOutCubic",complete:function(){n.css({height:"",overflow:"",padding:"",display:""}),"function"==typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e,i[0])}})}}},{key:"open",value:function(t){var i=this,e=this.$el.children("li").eq(t);if(e.length&&!e[0].classList.contains("active")){if("function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,e[0]),this.options.accordion){var n=this.$el.children("li");this.$el.children("li.active").each(function(t){var e=n.index(r(t));i.close(e)})}e[0].classList.add("active"),this._animateIn(t)}}},{key:"close",value:function(t){var e=this.$el.children("li").eq(t);e.length&&e[0].classList.contains("active")&&("function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,e[0]),e[0].classList.remove("active"),this._animateOut(t))}}],[{key:"init",value:function(t,e){return _get(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Collapsible}},{key:"defaults",get:function(){return e}}]),s}();M.Collapsible=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"collapsible","M_Collapsible")}(cash,M.anime),function(h,i){"use strict";var e={alignment:"left",autoFocus:!0,constrainWidth:!0,container:null,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:150,outDuration:250,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,onItemClick:null},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return i.el.M_Dropdown=i,n._dropdowns.push(i),i.id=M.getIdFromTrigger(t),i.dropdownEl=document.getElementById(i.id),i.$dropdownEl=h(i.dropdownEl),i.options=h.extend({},n.defaults,e),i.isOpen=!1,i.isScrollable=!1,i.isTouchMoving=!1,i.focusedIndex=-1,i.filterQuery=[],i.options.container?h(i.options.container).append(i.dropdownEl):i.$el.after(i.dropdownEl),i._makeDropdownFocusable(),i._resetFilterQueryBound=i._resetFilterQuery.bind(i),i._handleDocumentClickBound=i._handleDocumentClick.bind(i),i._handleDocumentTouchmoveBound=i._handleDocumentTouchmove.bind(i),i._handleDropdownClickBound=i._handleDropdownClick.bind(i),i._handleDropdownKeydownBound=i._handleDropdownKeydown.bind(i),i._handleTriggerKeydownBound=i._handleTriggerKeydown.bind(i),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._resetDropdownStyles(),this._removeEventHandlers(),n._dropdowns.splice(n._dropdowns.indexOf(this),1),this.el.M_Dropdown=void 0}},{key:"_setupEventHandlers",value:function(){this.el.addEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.addEventListener("click",this._handleDropdownClickBound),this.options.hover?(this._handleMouseEnterBound=this._handleMouseEnter.bind(this),this.el.addEventListener("mouseenter",this._handleMouseEnterBound),this._handleMouseLeaveBound=this._handleMouseLeave.bind(this),this.el.addEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.addEventListener("mouseleave",this._handleMouseLeaveBound)):(this._handleClickBound=this._handleClick.bind(this),this.el.addEventListener("click",this._handleClickBound))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.removeEventListener("click",this._handleDropdownClickBound),this.options.hover?(this.el.removeEventListener("mouseenter",this._handleMouseEnterBound),this.el.removeEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.removeEventListener("mouseleave",this._handleMouseLeaveBound)):this.el.removeEventListener("click",this._handleClickBound)}},{key:"_setupTemporaryEventHandlers",value:function(){document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound),document.body.addEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.addEventListener("keydown",this._handleDropdownKeydownBound)}},{key:"_removeTemporaryEventHandlers",value:function(){document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound),document.body.removeEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.removeEventListener("keydown",this._handleDropdownKeydownBound)}},{key:"_handleClick",value:function(t){t.preventDefault(),this.open()}},{key:"_handleMouseEnter",value:function(){this.open()}},{key:"_handleMouseLeave",value:function(t){var e=t.toElement||t.relatedTarget,i=!!h(e).closest(".dropdown-content").length,n=!1,s=h(e).closest(".dropdown-trigger");s.length&&s[0].M_Dropdown&&s[0].M_Dropdown.isOpen&&(n=!0),n||i||this.close()}},{key:"_handleDocumentClick",value:function(t){var e=this,i=h(t.target);this.options.closeOnClick&&i.closest(".dropdown-content").length&&!this.isTouchMoving?setTimeout(function(){e.close()},0):!i.closest(".dropdown-trigger").length&&i.closest(".dropdown-content").length||setTimeout(function(){e.close()},0),this.isTouchMoving=!1}},{key:"_handleTriggerKeydown",value:function(t){t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ENTER||this.isOpen||(t.preventDefault(),this.open())}},{key:"_handleDocumentTouchmove",value:function(t){h(t.target).closest(".dropdown-content").length&&(this.isTouchMoving=!0)}},{key:"_handleDropdownClick",value:function(t){if("function"==typeof this.options.onItemClick){var e=h(t.target).closest("li")[0];this.options.onItemClick.call(this,e)}}},{key:"_handleDropdownKeydown",value:function(t){if(t.which===M.keys.TAB)t.preventDefault(),this.close();else if(t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||!this.isOpen)if(t.which===M.keys.ENTER&&this.isOpen){var e=this.dropdownEl.children[this.focusedIndex],i=h(e).find("a, button").first();i.length?i[0].click():e&&e.click()}else t.which===M.keys.ESC&&this.isOpen&&(t.preventDefault(),this.close());else{t.preventDefault();var n=t.which===M.keys.ARROW_DOWN?1:-1,s=this.focusedIndex,o=!1;do{if(s+=n,this.dropdownEl.children[s]&&-1!==this.dropdownEl.children[s].tabIndex){o=!0;break}}while(s<this.dropdownEl.children.length&&0<=s);o&&(this.focusedIndex=s,this._focusFocusedItem())}var a=String.fromCharCode(t.which).toLowerCase();if(a&&-1===[9,13,27,38,40].indexOf(t.which)){this.filterQuery.push(a);var r=this.filterQuery.join(""),l=h(this.dropdownEl).find("li").filter(function(t){return 0===h(t).text().toLowerCase().indexOf(r)})[0];l&&(this.focusedIndex=h(l).index(),this._focusFocusedItem())}this.filterTimeout=setTimeout(this._resetFilterQueryBound,1e3)}},{key:"_resetFilterQuery",value:function(){this.filterQuery=[]}},{key:"_resetDropdownStyles",value:function(){this.$dropdownEl.css({display:"",width:"",height:"",left:"",top:"","transform-origin":"",transform:"",opacity:""})}},{key:"_makeDropdownFocusable",value:function(){this.dropdownEl.tabIndex=0,h(this.dropdownEl).children().each(function(t){t.getAttribute("tabindex")||t.setAttribute("tabindex",0)})}},{key:"_focusFocusedItem",value:function(){0<=this.focusedIndex&&this.focusedIndex<this.dropdownEl.children.length&&this.options.autoFocus&&this.dropdownEl.children[this.focusedIndex].focus()}},{key:"_getDropdownPosition",value:function(){this.el.offsetParent.getBoundingClientRect();var t=this.el.getBoundingClientRect(),e=this.dropdownEl.getBoundingClientRect(),i=e.height,n=e.width,s=t.left-e.left,o=t.top-e.top,a={left:s,top:o,height:i,width:n},r=this.dropdownEl.offsetParent?this.dropdownEl.offsetParent:this.dropdownEl.parentNode,l=M.checkPossibleAlignments(this.el,r,a,this.options.coverTrigger?0:t.height),h="top",d=this.options.alignment;if(o+=this.options.coverTrigger?0:t.height,this.isScrollable=!1,l.top||(l.bottom?h="bottom":(this.isScrollable=!0,l.spaceOnTop>l.spaceOnBottom?(h="bottom",i+=l.spaceOnTop,o-=l.spaceOnTop):i+=l.spaceOnBottom)),!l[d]){var u="left"===d?"right":"left";l[u]?d=u:l.spaceOnLeft>l.spaceOnRight?(d="right",n+=l.spaceOnLeft,s-=l.spaceOnLeft):(d="left",n+=l.spaceOnRight)}return"bottom"===h&&(o=o-e.height+(this.options.coverTrigger?t.height:0)),"right"===d&&(s=s-e.width+t.width),{x:s,y:o,verticalAlignment:h,horizontalAlignment:d,height:i,width:n}}},{key:"_animateIn",value:function(){var e=this;i.remove(this.dropdownEl),i({targets:this.dropdownEl,opacity:{value:[0,1],easing:"easeOutQuad"},scaleX:[.3,1],scaleY:[.3,1],duration:this.options.inDuration,easing:"easeOutQuint",complete:function(t){e.options.autoFocus&&e.dropdownEl.focus(),"function"==typeof e.options.onOpenEnd&&e.options.onOpenEnd.call(e,e.el)}})}},{key:"_animateOut",value:function(){var e=this;i.remove(this.dropdownEl),i({targets:this.dropdownEl,opacity:{value:0,easing:"easeOutQuint"},scaleX:.3,scaleY:.3,duration:this.options.outDuration,easing:"easeOutQuint",complete:function(t){e._resetDropdownStyles(),"function"==typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e,e.el)}})}},{key:"_placeDropdown",value:function(){var t=this.options.constrainWidth?this.el.getBoundingClientRect().width:this.dropdownEl.getBoundingClientRect().width;this.dropdownEl.style.width=t+"px";var e=this._getDropdownPosition();this.dropdownEl.style.left=e.x+"px",this.dropdownEl.style.top=e.y+"px",this.dropdownEl.style.height=e.height+"px",this.dropdownEl.style.width=e.width+"px",this.dropdownEl.style.transformOrigin=("left"===e.horizontalAlignment?"0":"100%")+" "+("top"===e.verticalAlignment?"0":"100%")}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this._resetDropdownStyles(),this.dropdownEl.style.display="block",this._placeDropdown(),this._animateIn(),this._setupTemporaryEventHandlers())}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,this.focusedIndex=-1,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this._animateOut(),this._removeTemporaryEventHandlers(),this.options.autoFocus&&this.el.focus())}},{key:"recalculateDimensions",value:function(){this.isOpen&&(this.$dropdownEl.css({width:"",height:"",left:"",top:"","transform-origin":""}),this._placeDropdown())}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Dropdown}},{key:"defaults",get:function(){return e}}]),n}();t._dropdowns=[],M.Dropdown=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"dropdown","M_Dropdown")}(cash,M.anime),function(s,i){"use strict";var e={opacity:.5,inDuration:250,outDuration:250,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,preventScrolling:!0,dismissible:!0,startingTop:"4%",endingTop:"10%"},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Modal=i).options=s.extend({},n.defaults,e),i.isOpen=!1,i.id=i.$el.attr("id"),i._openingTrigger=void 0,i.$overlay=s('<div class="modal-overlay"></div>'),i.el.tabIndex=0,i._nthModalOpened=0,n._count++,i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){n._count--,this._removeEventHandlers(),this.el.removeAttribute("style"),this.$overlay.remove(),this.el.M_Modal=void 0}},{key:"_setupEventHandlers",value:function(){this._handleOverlayClickBound=this._handleOverlayClick.bind(this),this._handleModalCloseClickBound=this._handleModalCloseClick.bind(this),1===n._count&&document.body.addEventListener("click",this._handleTriggerClick),this.$overlay[0].addEventListener("click",this._handleOverlayClickBound),this.el.addEventListener("click",this._handleModalCloseClickBound)}},{key:"_removeEventHandlers",value:function(){0===n._count&&document.body.removeEventListener("click",this._handleTriggerClick),this.$overlay[0].removeEventListener("click",this._handleOverlayClickBound),this.el.removeEventListener("click",this._handleModalCloseClickBound)}},{key:"_handleTriggerClick",value:function(t){var e=s(t.target).closest(".modal-trigger");if(e.length){var i=M.getIdFromTrigger(e[0]),n=document.getElementById(i).M_Modal;n&&n.open(e),t.preventDefault()}}},{key:"_handleOverlayClick",value:function(){this.options.dismissible&&this.close()}},{key:"_handleModalCloseClick",value:function(t){s(t.target).closest(".modal-close").length&&this.close()}},{key:"_handleKeydown",value:function(t){27===t.keyCode&&this.options.dismissible&&this.close()}},{key:"_handleFocus",value:function(t){this.el.contains(t.target)||this._nthModalOpened!==n._modalsOpen||this.el.focus()}},{key:"_animateIn",value:function(){var t=this;s.extend(this.el.style,{display:"block",opacity:0}),s.extend(this.$overlay[0].style,{display:"block",opacity:0}),i({targets:this.$overlay[0],opacity:this.options.opacity,duration:this.options.inDuration,easing:"easeOutQuad"});var e={targets:this.el,duration:this.options.inDuration,easing:"easeOutCubic",complete:function(){"function"==typeof t.options.onOpenEnd&&t.options.onOpenEnd.call(t,t.el,t._openingTrigger)}};this.el.classList.contains("bottom-sheet")?s.extend(e,{bottom:0,opacity:1}):s.extend(e,{top:[this.options.startingTop,this.options.endingTop],opacity:1,scaleX:[.8,1],scaleY:[.8,1]}),i(e)}},{key:"_animateOut",value:function(){var t=this;i({targets:this.$overlay[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuart"});var e={targets:this.el,duration:this.options.outDuration,easing:"easeOutCubic",complete:function(){t.el.style.display="none",t.$overlay.remove(),"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t,t.el)}};this.el.classList.contains("bottom-sheet")?s.extend(e,{bottom:"-100%",opacity:0}):s.extend(e,{top:[this.options.endingTop,this.options.startingTop],opacity:0,scaleX:.8,scaleY:.8}),i(e)}},{key:"open",value:function(t){if(!this.isOpen)return this.isOpen=!0,n._modalsOpen++,this._nthModalOpened=n._modalsOpen,this.$overlay[0].style.zIndex=1e3+2*n._modalsOpen,this.el.style.zIndex=1e3+2*n._modalsOpen+1,this._openingTrigger=t?t[0]:void 0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el,this._openingTrigger),this.options.preventScrolling&&(document.body.style.overflow="hidden"),this.el.classList.add("open"),this.el.insertAdjacentElement("afterend",this.$overlay[0]),this.options.dismissible&&(this._handleKeydownBound=this._handleKeydown.bind(this),this._handleFocusBound=this._handleFocus.bind(this),document.addEventListener("keydown",this._handleKeydownBound),document.addEventListener("focus",this._handleFocusBound,!0)),i.remove(this.el),i.remove(this.$overlay[0]),this._animateIn(),this.el.focus(),this}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,n._modalsOpen--,this._nthModalOpened=0,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this.el.classList.remove("open"),0===n._modalsOpen&&(document.body.style.overflow=""),this.options.dismissible&&(document.removeEventListener("keydown",this._handleKeydownBound),document.removeEventListener("focus",this._handleFocusBound,!0)),i.remove(this.el),i.remove(this.$overlay[0]),this._animateOut(),this}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Modal}},{key:"defaults",get:function(){return e}}]),n}();t._modalsOpen=0,t._count=0,M.Modal=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"modal","M_Modal")}(cash,M.anime),function(o,a){"use strict";var e={inDuration:275,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Materialbox=i).options=o.extend({},n.defaults,e),i.overlayActive=!1,i.doneAnimating=!0,i.placeholder=o("<div></div>").addClass("material-placeholder"),i.originalWidth=0,i.originalHeight=0,i.originInlineStyles=i.$el.attr("style"),i.caption=i.el.getAttribute("data-caption")||"",i.$el.before(i.placeholder),i.placeholder.append(i.$el),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Materialbox=void 0,o(this.placeholder).after(this.el).remove(),this.$el.removeAttr("style")}},{key:"_setupEventHandlers",value:function(){this._handleMaterialboxClickBound=this._handleMaterialboxClick.bind(this),this.el.addEventListener("click",this._handleMaterialboxClickBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleMaterialboxClickBound)}},{key:"_handleMaterialboxClick",value:function(t){!1===this.doneAnimating||this.overlayActive&&this.doneAnimating?this.close():this.open()}},{key:"_handleWindowScroll",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowResize",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowEscape",value:function(t){27===t.keyCode&&this.doneAnimating&&this.overlayActive&&this.close()}},{key:"_makeAncestorsOverflowVisible",value:function(){this.ancestorsChanged=o();for(var t=this.placeholder[0].parentNode;null!==t&&!o(t).is(document);){var e=o(t);"visible"!==e.css("overflow")&&(e.css("overflow","visible"),void 0===this.ancestorsChanged?this.ancestorsChanged=e:this.ancestorsChanged=this.ancestorsChanged.add(e)),t=t.parentNode}}},{key:"_animateImageIn",value:function(){var t=this,e={targets:this.el,height:[this.originalHeight,this.newHeight],width:[this.originalWidth,this.newWidth],left:M.getDocumentScrollLeft()+this.windowWidth/2-this.placeholder.offset().left-this.newWidth/2,top:M.getDocumentScrollTop()+this.windowHeight/2-this.placeholder.offset().top-this.newHeight/2,duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){t.doneAnimating=!0,"function"==typeof t.options.onOpenEnd&&t.options.onOpenEnd.call(t,t.el)}};this.maxWidth=this.$el.css("max-width"),this.maxHeight=this.$el.css("max-height"),"none"!==this.maxWidth&&(e.maxWidth=this.newWidth),"none"!==this.maxHeight&&(e.maxHeight=this.newHeight),a(e)}},{key:"_animateImageOut",value:function(){var t=this,e={targets:this.el,width:this.originalWidth,height:this.originalHeight,left:0,top:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){t.placeholder.css({height:"",width:"",position:"",top:"",left:""}),t.attrWidth&&t.$el.attr("width",t.attrWidth),t.attrHeight&&t.$el.attr("height",t.attrHeight),t.$el.removeAttr("style"),t.originInlineStyles&&t.$el.attr("style",t.originInlineStyles),t.$el.removeClass("active"),t.doneAnimating=!0,t.ancestorsChanged.length&&t.ancestorsChanged.css("overflow",""),"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t,t.el)}};a(e)}},{key:"_updateVars",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.caption=this.el.getAttribute("data-caption")||""}},{key:"open",value:function(){var t=this;this._updateVars(),this.originalWidth=this.el.getBoundingClientRect().width,this.originalHeight=this.el.getBoundingClientRect().height,this.doneAnimating=!1,this.$el.addClass("active"),this.overlayActive=!0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this.placeholder.css({width:this.placeholder[0].getBoundingClientRect().width+"px",height:this.placeholder[0].getBoundingClientRect().height+"px",position:"relative",top:0,left:0}),this._makeAncestorsOverflowVisible(),this.$el.css({position:"absolute","z-index":1e3,"will-change":"left, top, width, height"}),this.attrWidth=this.$el.attr("width"),this.attrHeight=this.$el.attr("height"),this.attrWidth&&(this.$el.css("width",this.attrWidth+"px"),this.$el.removeAttr("width")),this.attrHeight&&(this.$el.css("width",this.attrHeight+"px"),this.$el.removeAttr("height")),this.$overlay=o('<div id="materialbox-overlay"></div>').css({opacity:0}).one("click",function(){t.doneAnimating&&t.close()}),this.$el.before(this.$overlay);var e=this.$overlay[0].getBoundingClientRect();this.$overlay.css({width:this.windowWidth+"px",height:this.windowHeight+"px",left:-1*e.left+"px",top:-1*e.top+"px"}),a.remove(this.el),a.remove(this.$overlay[0]),a({targets:this.$overlay[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}),""!==this.caption&&(this.$photocaption&&a.remove(this.$photoCaption[0]),this.$photoCaption=o('<div class="materialbox-caption"></div>'),this.$photoCaption.text(this.caption),o("body").append(this.$photoCaption),this.$photoCaption.css({display:"inline"}),a({targets:this.$photoCaption[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}));var i=0,n=this.originalWidth/this.windowWidth,s=this.originalHeight/this.windowHeight;this.newWidth=0,this.newHeight=0,s<n?(i=this.originalHeight/this.originalWidth,this.newWidth=.9*this.windowWidth,this.newHeight=.9*this.windowWidth*i):(i=this.originalWidth/this.originalHeight,this.newWidth=.9*this.windowHeight*i,this.newHeight=.9*this.windowHeight),this._animateImageIn(),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),this._handleWindowResizeBound=this._handleWindowResize.bind(this),this._handleWindowEscapeBound=this._handleWindowEscape.bind(this),window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleWindowResizeBound),window.addEventListener("keyup",this._handleWindowEscapeBound)}},{key:"close",value:function(){var t=this;this._updateVars(),this.doneAnimating=!1,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),a.remove(this.el),a.remove(this.$overlay[0]),""!==this.caption&&a.remove(this.$photoCaption[0]),window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleWindowResizeBound),window.removeEventListener("keyup",this._handleWindowEscapeBound),a({targets:this.$overlay[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){t.overlayActive=!1,t.$overlay.remove()}}),this._animateImageOut(),""!==this.caption&&a({targets:this.$photoCaption[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){t.$photoCaption.remove()}})}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Materialbox}},{key:"defaults",get:function(){return e}}]),n}();M.Materialbox=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"materialbox","M_Materialbox")}(cash,M.anime),function(s){"use strict";var e={responsiveThreshold:0},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Parallax=i).options=s.extend({},n.defaults,e),i._enabled=window.innerWidth>i.options.responsiveThreshold,i.$img=i.$el.find("img").first(),i.$img.each(function(){this.complete&&s(this).trigger("load")}),i._updateParallax(),i._setupEventHandlers(),i._setupStyles(),n._parallaxes.push(i),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){n._parallaxes.splice(n._parallaxes.indexOf(this),1),this.$img[0].style.transform="",this._removeEventHandlers(),this.$el[0].M_Parallax=void 0}},{key:"_setupEventHandlers",value:function(){this._handleImageLoadBound=this._handleImageLoad.bind(this),this.$img[0].addEventListener("load",this._handleImageLoadBound),0===n._parallaxes.length&&(n._handleScrollThrottled=M.throttle(n._handleScroll,5),window.addEventListener("scroll",n._handleScrollThrottled),n._handleWindowResizeThrottled=M.throttle(n._handleWindowResize,5),window.addEventListener("resize",n._handleWindowResizeThrottled))}},{key:"_removeEventHandlers",value:function(){this.$img[0].removeEventListener("load",this._handleImageLoadBound),0===n._parallaxes.length&&(window.removeEventListener("scroll",n._handleScrollThrottled),window.removeEventListener("resize",n._handleWindowResizeThrottled))}},{key:"_setupStyles",value:function(){this.$img[0].style.opacity=1}},{key:"_handleImageLoad",value:function(){this._updateParallax()}},{key:"_updateParallax",value:function(){var t=0<this.$el.height()?this.el.parentNode.offsetHeight:500,e=this.$img[0].offsetHeight-t,i=this.$el.offset().top+t,n=this.$el.offset().top,s=M.getDocumentScrollTop(),o=window.innerHeight,a=e*((s+o-n)/(t+o));this._enabled?s<i&&n<s+o&&(this.$img[0].style.transform="translate3D(-50%, "+a+"px, 0)"):this.$img[0].style.transform=""}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Parallax}},{key:"_handleScroll",value:function(){for(var t=0;t<n._parallaxes.length;t++){var e=n._parallaxes[t];e._updateParallax.call(e)}}},{key:"_handleWindowResize",value:function(){for(var t=0;t<n._parallaxes.length;t++){var e=n._parallaxes[t];e._enabled=window.innerWidth>e.options.responsiveThreshold}}},{key:"defaults",get:function(){return e}}]),n}();t._parallaxes=[],M.Parallax=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"parallax","M_Parallax")}(cash),function(a,s){"use strict";var e={duration:300,onShow:null,swipeable:!1,responsiveThreshold:1/0},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Tabs=i).options=a.extend({},n.defaults,e),i.$tabLinks=i.$el.children("li.tab").children("a"),i.index=0,i._setupActiveTabLink(),i.options.swipeable?i._setupSwipeableTabs():i._setupNormalTabs(),i._setTabsAndTabWidth(),i._createIndicator(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this._indicator.parentNode.removeChild(this._indicator),this.options.swipeable?this._teardownSwipeableTabs():this._teardownNormalTabs(),this.$el[0].M_Tabs=void 0}},{key:"_setupEventHandlers",value:function(){this._handleWindowResizeBound=this._handleWindowResize.bind(this),window.addEventListener("resize",this._handleWindowResizeBound),this._handleTabClickBound=this._handleTabClick.bind(this),this.el.addEventListener("click",this._handleTabClickBound)}},{key:"_removeEventHandlers",value:function(){window.removeEventListener("resize",this._handleWindowResizeBound),this.el.removeEventListener("click",this._handleTabClickBound)}},{key:"_handleWindowResize",value:function(){this._setTabsAndTabWidth(),0!==this.tabWidth&&0!==this.tabsWidth&&(this._indicator.style.left=this._calcLeftPos(this.$activeTabLink)+"px",this._indicator.style.right=this._calcRightPos(this.$activeTabLink)+"px")}},{key:"_handleTabClick",value:function(t){var e=this,i=a(t.target).closest("li.tab"),n=a(t.target).closest("a");if(n.length&&n.parent().hasClass("tab"))if(i.hasClass("disabled"))t.preventDefault();else if(!n.attr("target")){this.$activeTabLink.removeClass("active");var s=this.$content;this.$activeTabLink=n,this.$content=a(M.escapeHash(n[0].hash)),this.$tabLinks=this.$el.children("li.tab").children("a"),this.$activeTabLink.addClass("active");var o=this.index;this.index=Math.max(this.$tabLinks.index(n),0),this.options.swipeable?this._tabsCarousel&&this._tabsCarousel.set(this.index,function(){"function"==typeof e.options.onShow&&e.options.onShow.call(e,e.$content[0])}):this.$content.length&&(this.$content[0].style.display="block",this.$content.addClass("active"),"function"==typeof this.options.onShow&&this.options.onShow.call(this,this.$content[0]),s.length&&!s.is(this.$content)&&(s[0].style.display="none",s.removeClass("active"))),this._setTabsAndTabWidth(),this._animateIndicator(o),t.preventDefault()}}},{key:"_createIndicator",value:function(){var t=this,e=document.createElement("li");e.classList.add("indicator"),this.el.appendChild(e),this._indicator=e,setTimeout(function(){t._indicator.style.left=t._calcLeftPos(t.$activeTabLink)+"px",t._indicator.style.right=t._calcRightPos(t.$activeTabLink)+"px"},0)}},{key:"_setupActiveTabLink",value:function(){this.$activeTabLink=a(this.$tabLinks.filter('[href="'+location.hash+'"]')),0===this.$activeTabLink.length&&(this.$activeTabLink=this.$el.children("li.tab").children("a.active").first()),0===this.$activeTabLink.length&&(this.$activeTabLink=this.$el.children("li.tab").children("a").first()),this.$tabLinks.removeClass("active"),this.$activeTabLink[0].classList.add("active"),this.index=Math.max(this.$tabLinks.index(this.$activeTabLink),0),this.$activeTabLink.length&&(this.$content=a(M.escapeHash(this.$activeTabLink[0].hash)),this.$content.addClass("active"))}},{key:"_setupSwipeableTabs",value:function(){var i=this;window.innerWidth>this.options.responsiveThreshold&&(this.options.swipeable=!1);var n=a();this.$tabLinks.each(function(t){var e=a(M.escapeHash(t.hash));e.addClass("carousel-item"),n=n.add(e)});var t=a('<div class="tabs-content carousel carousel-slider"></div>');n.first().before(t),t.append(n),n[0].style.display="";var e=this.$activeTabLink.closest(".tab").index();this._tabsCarousel=M.Carousel.init(t[0],{fullWidth:!0,noWrap:!0,onCycleTo:function(t){var e=i.index;i.index=a(t).index(),i.$activeTabLink.removeClass("active"),i.$activeTabLink=i.$tabLinks.eq(i.index),i.$activeTabLink.addClass("active"),i._animateIndicator(e),"function"==typeof i.options.onShow&&i.options.onShow.call(i,i.$content[0])}}),this._tabsCarousel.set(e)}},{key:"_teardownSwipeableTabs",value:function(){var t=this._tabsCarousel.$el;this._tabsCarousel.destroy(),t.after(t.children()),t.remove()}},{key:"_setupNormalTabs",value:function(){this.$tabLinks.not(this.$activeTabLink).each(function(t){if(t.hash){var e=a(M.escapeHash(t.hash));e.length&&(e[0].style.display="none")}})}},{key:"_teardownNormalTabs",value:function(){this.$tabLinks.each(function(t){if(t.hash){var e=a(M.escapeHash(t.hash));e.length&&(e[0].style.display="")}})}},{key:"_setTabsAndTabWidth",value:function(){this.tabsWidth=this.$el.width(),this.tabWidth=Math.max(this.tabsWidth,this.el.scrollWidth)/this.$tabLinks.length}},{key:"_calcRightPos",value:function(t){return Math.ceil(this.tabsWidth-t.position().left-t[0].getBoundingClientRect().width)}},{key:"_calcLeftPos",value:function(t){return Math.floor(t.position().left)}},{key:"updateTabIndicator",value:function(){this._setTabsAndTabWidth(),this._animateIndicator(this.index)}},{key:"_animateIndicator",value:function(t){var e=0,i=0;0<=this.index-t?e=90:i=90;var n={targets:this._indicator,left:{value:this._calcLeftPos(this.$activeTabLink),delay:e},right:{value:this._calcRightPos(this.$activeTabLink),delay:i},duration:this.options.duration,easing:"easeOutQuad"};s.remove(this._indicator),s(n)}},{key:"select",value:function(t){var e=this.$tabLinks.filter('[href="#'+t+'"]');e.length&&e.trigger("click")}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Tabs}},{key:"defaults",get:function(){return e}}]),n}();M.Tabs=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"tabs","M_Tabs")}(cash,M.anime),function(d,e){"use strict";var i={exitDelay:200,enterDelay:0,html:null,margin:5,inDuration:250,outDuration:200,position:"bottom",transitionMovement:10},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Tooltip=i).options=d.extend({},n.defaults,e),i.isOpen=!1,i.isHovered=!1,i.isFocused=!1,i._appendTooltipEl(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){d(this.tooltipEl).remove(),this._removeEventHandlers(),this.el.M_Tooltip=void 0}},{key:"_appendTooltipEl",value:function(){var t=document.createElement("div");t.classList.add("material-tooltip"),this.tooltipEl=t;var e=document.createElement("div");e.classList.add("tooltip-content"),e.innerHTML=this.options.html,t.appendChild(e),document.body.appendChild(t)}},{key:"_updateTooltipContent",value:function(){this.tooltipEl.querySelector(".tooltip-content").innerHTML=this.options.html}},{key:"_setupEventHandlers",value:function(){this._handleMouseEnterBound=this._handleMouseEnter.bind(this),this._handleMouseLeaveBound=this._handleMouseLeave.bind(this),this._handleFocusBound=this._handleFocus.bind(this),this._handleBlurBound=this._handleBlur.bind(this),this.el.addEventListener("mouseenter",this._handleMouseEnterBound),this.el.addEventListener("mouseleave",this._handleMouseLeaveBound),this.el.addEventListener("focus",this._handleFocusBound,!0),this.el.addEventListener("blur",this._handleBlurBound,!0)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("mouseenter",this._handleMouseEnterBound),this.el.removeEventListener("mouseleave",this._handleMouseLeaveBound),this.el.removeEventListener("focus",this._handleFocusBound,!0),this.el.removeEventListener("blur",this._handleBlurBound,!0)}},{key:"open",value:function(t){this.isOpen||(t=void 0===t||void 0,this.isOpen=!0,this.options=d.extend({},this.options,this._getAttributeOptions()),this._updateTooltipContent(),this._setEnterDelayTimeout(t))}},{key:"close",value:function(){this.isOpen&&(this.isHovered=!1,this.isFocused=!1,this.isOpen=!1,this._setExitDelayTimeout())}},{key:"_setExitDelayTimeout",value:function(){var t=this;clearTimeout(this._exitDelayTimeout),this._exitDelayTimeout=setTimeout(function(){t.isHovered||t.isFocused||t._animateOut()},this.options.exitDelay)}},{key:"_setEnterDelayTimeout",value:function(t){var e=this;clearTimeout(this._enterDelayTimeout),this._enterDelayTimeout=setTimeout(function(){(e.isHovered||e.isFocused||t)&&e._animateIn()},this.options.enterDelay)}},{key:"_positionTooltip",value:function(){var t,e=this.el,i=this.tooltipEl,n=e.offsetHeight,s=e.offsetWidth,o=i.offsetHeight,a=i.offsetWidth,r=this.options.margin,l=void 0,h=void 0;this.xMovement=0,this.yMovement=0,l=e.getBoundingClientRect().top+M.getDocumentScrollTop(),h=e.getBoundingClientRect().left+M.getDocumentScrollLeft(),"top"===this.options.position?(l+=-o-r,h+=s/2-a/2,this.yMovement=-this.options.transitionMovement):"right"===this.options.position?(l+=n/2-o/2,h+=s+r,this.xMovement=this.options.transitionMovement):"left"===this.options.position?(l+=n/2-o/2,h+=-a-r,this.xMovement=-this.options.transitionMovement):(l+=n+r,h+=s/2-a/2,this.yMovement=this.options.transitionMovement),t=this._repositionWithinScreen(h,l,a,o),d(i).css({top:t.y+"px",left:t.x+"px"})}},{key:"_repositionWithinScreen",value:function(t,e,i,n){var s=M.getDocumentScrollLeft(),o=M.getDocumentScrollTop(),a=t-s,r=e-o,l={left:a,top:r,width:i,height:n},h=this.options.margin+this.options.transitionMovement,d=M.checkWithinContainer(document.body,l,h);return d.left?a=h:d.right&&(a-=a+i-window.innerWidth),d.top?r=h:d.bottom&&(r-=r+n-window.innerHeight),{x:a+s,y:r+o}}},{key:"_animateIn",value:function(){this._positionTooltip(),this.tooltipEl.style.visibility="visible",e.remove(this.tooltipEl),e({targets:this.tooltipEl,opacity:1,translateX:this.xMovement,translateY:this.yMovement,duration:this.options.inDuration,easing:"easeOutCubic"})}},{key:"_animateOut",value:function(){e.remove(this.tooltipEl),e({targets:this.tooltipEl,opacity:0,translateX:0,translateY:0,duration:this.options.outDuration,easing:"easeOutCubic"})}},{key:"_handleMouseEnter",value:function(){this.isHovered=!0,this.isFocused=!1,this.open(!1)}},{key:"_handleMouseLeave",value:function(){this.isHovered=!1,this.isFocused=!1,this.close()}},{key:"_handleFocus",value:function(){M.tabPressed&&(this.isFocused=!0,this.open(!1))}},{key:"_handleBlur",value:function(){this.isFocused=!1,this.close()}},{key:"_getAttributeOptions",value:function(){var t={},e=this.el.getAttribute("data-tooltip"),i=this.el.getAttribute("data-position");return e&&(t.html=e),i&&(t.position=i),t}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Tooltip}},{key:"defaults",get:function(){return i}}]),n}();M.Tooltip=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"tooltip","M_Tooltip")}(cash,M.anime),function(i){"use strict";var t=t||{},e=document.querySelectorAll.bind(document);function m(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}var g={duration:750,show:function(t,e){if(2===t.button)return!1;var i=e||this,n=document.createElement("div");n.className="waves-ripple",i.appendChild(n);var s,o,a,r,l,h,d,u=(h={top:0,left:0},d=(s=i)&&s.ownerDocument,o=d.documentElement,void 0!==s.getBoundingClientRect&&(h=s.getBoundingClientRect()),a=null!==(l=r=d)&&l===l.window?r:9===r.nodeType&&r.defaultView,{top:h.top+a.pageYOffset-o.clientTop,left:h.left+a.pageXOffset-o.clientLeft}),c=t.pageY-u.top,p=t.pageX-u.left,v="scale("+i.clientWidth/100*10+")";"touches"in t&&(c=t.touches[0].pageY-u.top,p=t.touches[0].pageX-u.left),n.setAttribute("data-hold",Date.now()),n.setAttribute("data-scale",v),n.setAttribute("data-x",p),n.setAttribute("data-y",c);var f={top:c+"px",left:p+"px"};n.className=n.className+" waves-notransition",n.setAttribute("style",m(f)),n.className=n.className.replace("waves-notransition",""),f["-webkit-transform"]=v,f["-moz-transform"]=v,f["-ms-transform"]=v,f["-o-transform"]=v,f.transform=v,f.opacity="1",f["-webkit-transition-duration"]=g.duration+"ms",f["-moz-transition-duration"]=g.duration+"ms",f["-o-transition-duration"]=g.duration+"ms",f["transition-duration"]=g.duration+"ms",f["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",n.setAttribute("style",m(f))},hide:function(t){l.touchup(t);var e=this,i=(e.clientWidth,null),n=e.getElementsByClassName("waves-ripple");if(!(0<n.length))return!1;var s=(i=n[n.length-1]).getAttribute("data-x"),o=i.getAttribute("data-y"),a=i.getAttribute("data-scale"),r=350-(Date.now()-Number(i.getAttribute("data-hold")));r<0&&(r=0),setTimeout(function(){var t={top:o+"px",left:s+"px",opacity:"0","-webkit-transition-duration":g.duration+"ms","-moz-transition-duration":g.duration+"ms","-o-transition-duration":g.duration+"ms","transition-duration":g.duration+"ms","-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,"-o-transform":a,transform:a};i.setAttribute("style",m(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},g.duration)},r)},wrapInput:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("input"===i.tagName.toLowerCase()){var n=i.parentNode;if("i"===n.tagName.toLowerCase()&&-1!==n.className.indexOf("waves-effect"))continue;var s=document.createElement("i");s.className=i.className+" waves-input-wrapper";var o=i.getAttribute("style");o||(o=""),s.setAttribute("style",o),i.className="waves-button-input",i.removeAttribute("style"),n.replaceChild(s,i),s.appendChild(i)}}}},l={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?l.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){0<l.touches&&(l.touches-=1)},500):"mousedown"===t.type&&0<l.touches&&(e=!1),e},touchup:function(t){l.allowEvent(t)}};function n(t){var e=function(t){if(!1===l.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentNode;){if(!(i instanceof SVGElement)&&-1!==i.className.indexOf("waves-effect")){e=i;break}i=i.parentNode}return e}(t);null!==e&&(g.show(t,e),"ontouchstart"in i&&(e.addEventListener("touchend",g.hide,!1),e.addEventListener("touchcancel",g.hide,!1)),e.addEventListener("mouseup",g.hide,!1),e.addEventListener("mouseleave",g.hide,!1),e.addEventListener("dragend",g.hide,!1))}t.displayEffect=function(t){"duration"in(t=t||{})&&(g.duration=t.duration),g.wrapInput(e(".waves-effect")),"ontouchstart"in i&&document.body.addEventListener("touchstart",n,!1),document.body.addEventListener("mousedown",n,!1)},t.attach=function(t){"input"===t.tagName.toLowerCase()&&(g.wrapInput([t]),t=t.parentNode),"ontouchstart"in i&&t.addEventListener("touchstart",n,!1),t.addEventListener("mousedown",n,!1)},i.Waves=t,document.addEventListener("DOMContentLoaded",function(){t.displayEffect()},!1)}(window),function(i,n){"use strict";var t={html:"",displayLength:4e3,inDuration:300,outDuration:375,classes:"",completeCallback:null,activationPercent:.8},e=function(){function s(t){_classCallCheck(this,s),this.options=i.extend({},s.defaults,t),this.message=this.options.html,this.panning=!1,this.timeRemaining=this.options.displayLength,0===s._toasts.length&&s._createContainer(),s._toasts.push(this);var e=this._createToast();(e.M_Toast=this).el=e,this.$el=i(e),this._animateIn(),this._setTimer()}return _createClass(s,[{key:"_createToast",value:function(){var t=document.createElement("div");return t.classList.add("toast"),this.options.classes.length&&i(t).addClass(this.options.classes),("object"==typeof HTMLElement?this.message instanceof HTMLElement:this.message&&"object"==typeof this.message&&null!==this.message&&1===this.message.nodeType&&"string"==typeof this.message.nodeName)?t.appendChild(this.message):this.message.jquery?i(t).append(this.message[0]):t.innerHTML=this.message,s._container.appendChild(t),t}},{key:"_animateIn",value:function(){n({targets:this.el,top:0,opacity:1,duration:this.options.inDuration,easing:"easeOutCubic"})}},{key:"_setTimer",value:function(){var t=this;this.timeRemaining!==1/0&&(this.counterInterval=setInterval(function(){t.panning||(t.timeRemaining-=20),t.timeRemaining<=0&&t.dismiss()},20))}},{key:"dismiss",value:function(){var t=this;window.clearInterval(this.counterInterval);var e=this.el.offsetWidth*this.options.activationPercent;this.wasSwiped&&(this.el.style.transition="transform .05s, opacity .05s",this.el.style.transform="translateX("+e+"px)",this.el.style.opacity=0),n({targets:this.el,opacity:0,marginTop:-40,duration:this.options.outDuration,easing:"easeOutExpo",complete:function(){"function"==typeof t.options.completeCallback&&t.options.completeCallback(),t.$el.remove(),s._toasts.splice(s._toasts.indexOf(t),1),0===s._toasts.length&&s._removeContainer()}})}}],[{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Toast}},{key:"_createContainer",value:function(){var t=document.createElement("div");t.setAttribute("id","toast-container"),t.addEventListener("touchstart",s._onDragStart),t.addEventListener("touchmove",s._onDragMove),t.addEventListener("touchend",s._onDragEnd),t.addEventListener("mousedown",s._onDragStart),document.addEventListener("mousemove",s._onDragMove),document.addEventListener("mouseup",s._onDragEnd),document.body.appendChild(t),s._container=t}},{key:"_removeContainer",value:function(){document.removeEventListener("mousemove",s._onDragMove),document.removeEventListener("mouseup",s._onDragEnd),i(s._container).remove(),s._container=null}},{key:"_onDragStart",value:function(t){if(t.target&&i(t.target).closest(".toast").length){var e=i(t.target).closest(".toast")[0].M_Toast;e.panning=!0,(s._draggedToast=e).el.classList.add("panning"),e.el.style.transition="",e.startingXPos=s._xPos(t),e.time=Date.now(),e.xPos=s._xPos(t)}}},{key:"_onDragMove",value:function(t){if(s._draggedToast){t.preventDefault();var e=s._draggedToast;e.deltaX=Math.abs(e.xPos-s._xPos(t)),e.xPos=s._xPos(t),e.velocityX=e.deltaX/(Date.now()-e.time),e.time=Date.now();var i=e.xPos-e.startingXPos,n=e.el.offsetWidth*e.options.activationPercent;e.el.style.transform="translateX("+i+"px)",e.el.style.opacity=1-Math.abs(i/n)}}},{key:"_onDragEnd",value:function(){if(s._draggedToast){var t=s._draggedToast;t.panning=!1,t.el.classList.remove("panning");var e=t.xPos-t.startingXPos,i=t.el.offsetWidth*t.options.activationPercent;Math.abs(e)>i||1<t.velocityX?(t.wasSwiped=!0,t.dismiss()):(t.el.style.transition="transform .2s, opacity .2s",t.el.style.transform="",t.el.style.opacity=""),s._draggedToast=null}}},{key:"_xPos",value:function(t){return t.targetTouches&&1<=t.targetTouches.length?t.targetTouches[0].clientX:t.clientX}},{key:"dismissAll",value:function(){for(var t in s._toasts)s._toasts[t].dismiss()}},{key:"defaults",get:function(){return t}}]),s}();e._toasts=[],e._container=null,e._draggedToast=null,M.Toast=e,M.toast=function(t){return new e(t)}}(cash,M.anime),function(s,o){"use strict";var e={edge:"left",draggable:!0,inDuration:250,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,preventScrolling:!0},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Sidenav=i).id=i.$el.attr("id"),i.options=s.extend({},n.defaults,e),i.isOpen=!1,i.isFixed=i.el.classList.contains("sidenav-fixed"),i.isDragged=!1,i.lastWindowWidth=window.innerWidth,i.lastWindowHeight=window.innerHeight,i._createOverlay(),i._createDragTarget(),i._setupEventHandlers(),i._setupClasses(),i._setupFixed(),n._sidenavs.push(i),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this._enableBodyScrolling(),this._overlay.parentNode.removeChild(this._overlay),this.dragTarget.parentNode.removeChild(this.dragTarget),this.el.M_Sidenav=void 0,this.el.style.transform="";var t=n._sidenavs.indexOf(this);0<=t&&n._sidenavs.splice(t,1)}},{key:"_createOverlay",value:function(){var t=document.createElement("div");this._closeBound=this.close.bind(this),t.classList.add("sidenav-overlay"),t.addEventListener("click",this._closeBound),document.body.appendChild(t),this._overlay=t}},{key:"_setupEventHandlers",value:function(){0===n._sidenavs.length&&document.body.addEventListener("click",this._handleTriggerClick),this._handleDragTargetDragBound=this._handleDragTargetDrag.bind(this),this._handleDragTargetReleaseBound=this._handleDragTargetRelease.bind(this),this._handleCloseDragBound=this._handleCloseDrag.bind(this),this._handleCloseReleaseBound=this._handleCloseRelease.bind(this),this._handleCloseTriggerClickBound=this._handleCloseTriggerClick.bind(this),this.dragTarget.addEventListener("touchmove",this._handleDragTargetDragBound),this.dragTarget.addEventListener("touchend",this._handleDragTargetReleaseBound),this._overlay.addEventListener("touchmove",this._handleCloseDragBound),this._overlay.addEventListener("touchend",this._handleCloseReleaseBound),this.el.addEventListener("touchmove",this._handleCloseDragBound),this.el.addEventListener("touchend",this._handleCloseReleaseBound),this.el.addEventListener("click",this._handleCloseTriggerClickBound),this.isFixed&&(this._handleWindowResizeBound=this._handleWindowResize.bind(this),window.addEventListener("resize",this._handleWindowResizeBound))}},{key:"_removeEventHandlers",value:function(){1===n._sidenavs.length&&document.body.removeEventListener("click",this._handleTriggerClick),this.dragTarget.removeEventListener("touchmove",this._handleDragTargetDragBound),this.dragTarget.removeEventListener("touchend",this._handleDragTargetReleaseBound),this._overlay.removeEventListener("touchmove",this._handleCloseDragBound),this._overlay.removeEventListener("touchend",this._handleCloseReleaseBound),this.el.removeEventListener("touchmove",this._handleCloseDragBound),this.el.removeEventListener("touchend",this._handleCloseReleaseBound),this.el.removeEventListener("click",this._handleCloseTriggerClickBound),this.isFixed&&window.removeEventListener("resize",this._handleWindowResizeBound)}},{key:"_handleTriggerClick",value:function(t){var e=s(t.target).closest(".sidenav-trigger");if(t.target&&e.length){var i=M.getIdFromTrigger(e[0]),n=document.getElementById(i).M_Sidenav;n&&n.open(e),t.preventDefault()}}},{key:"_startDrag",value:function(t){var e=t.targetTouches[0].clientX;this.isDragged=!0,this._startingXpos=e,this._xPos=this._startingXpos,this._time=Date.now(),this._width=this.el.getBoundingClientRect().width,this._overlay.style.display="block",this._initialScrollTop=this.isOpen?this.el.scrollTop:M.getDocumentScrollTop(),this._verticallyScrolling=!1,o.remove(this.el),o.remove(this._overlay)}},{key:"_dragMoveUpdate",value:function(t){var e=t.targetTouches[0].clientX,i=this.isOpen?this.el.scrollTop:M.getDocumentScrollTop();this.deltaX=Math.abs(this._xPos-e),this._xPos=e,this.velocityX=this.deltaX/(Date.now()-this._time),this._time=Date.now(),this._initialScrollTop!==i&&(this._verticallyScrolling=!0)}},{key:"_handleDragTargetDrag",value:function(t){if(this.options.draggable&&!this._isCurrentlyFixed()&&!this._verticallyScrolling){this.isDragged||this._startDrag(t),this._dragMoveUpdate(t);var e=this._xPos-this._startingXpos,i=0<e?"right":"left";e=Math.min(this._width,Math.abs(e)),this.options.edge===i&&(e=0);var n=e,s="translateX(-100%)";"right"===this.options.edge&&(s="translateX(100%)",n=-n),this.percentOpen=Math.min(1,e/this._width),this.el.style.transform=s+" translateX("+n+"px)",this._overlay.style.opacity=this.percentOpen}}},{key:"_handleDragTargetRelease",value:function(){this.isDragged&&(.2<this.percentOpen?this.open():this._animateOut(),this.isDragged=!1,this._verticallyScrolling=!1)}},{key:"_handleCloseDrag",value:function(t){if(this.isOpen){if(!this.options.draggable||this._isCurrentlyFixed()||this._verticallyScrolling)return;this.isDragged||this._startDrag(t),this._dragMoveUpdate(t);var e=this._xPos-this._startingXpos,i=0<e?"right":"left";e=Math.min(this._width,Math.abs(e)),this.options.edge!==i&&(e=0);var n=-e;"right"===this.options.edge&&(n=-n),this.percentOpen=Math.min(1,1-e/this._width),this.el.style.transform="translateX("+n+"px)",this._overlay.style.opacity=this.percentOpen}}},{key:"_handleCloseRelease",value:function(){this.isOpen&&this.isDragged&&(.8<this.percentOpen?this._animateIn():this.close(),this.isDragged=!1,this._verticallyScrolling=!1)}},{key:"_handleCloseTriggerClick",value:function(t){s(t.target).closest(".sidenav-close").length&&!this._isCurrentlyFixed()&&this.close()}},{key:"_handleWindowResize",value:function(){this.lastWindowWidth!==window.innerWidth&&(992<window.innerWidth?this.open():this.close()),this.lastWindowWidth=window.innerWidth,this.lastWindowHeight=window.innerHeight}},{key:"_setupClasses",value:function(){"right"===this.options.edge&&(this.el.classList.add("right-aligned"),this.dragTarget.classList.add("right-aligned"))}},{key:"_removeClasses",value:function(){this.el.classList.remove("right-aligned"),this.dragTarget.classList.remove("right-aligned")}},{key:"_setupFixed",value:function(){this._isCurrentlyFixed()&&this.open()}},{key:"_isCurrentlyFixed",value:function(){return this.isFixed&&992<window.innerWidth}},{key:"_createDragTarget",value:function(){var t=document.createElement("div");t.classList.add("drag-target"),document.body.appendChild(t),this.dragTarget=t}},{key:"_preventBodyScrolling",value:function(){document.body.style.overflow="hidden"}},{key:"_enableBodyScrolling",value:function(){document.body.style.overflow=""}},{key:"open",value:function(){!0!==this.isOpen&&(this.isOpen=!0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this._isCurrentlyFixed()?(o.remove(this.el),o({targets:this.el,translateX:0,duration:0,easing:"easeOutQuad"}),this._enableBodyScrolling(),this._overlay.style.display="none"):(this.options.preventScrolling&&this._preventBodyScrolling(),this.isDragged&&1==this.percentOpen||this._animateIn()))}},{key:"close",value:function(){if(!1!==this.isOpen)if(this.isOpen=!1,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this._isCurrentlyFixed()){var t="left"===this.options.edge?"-105%":"105%";this.el.style.transform="translateX("+t+")"}else this._enableBodyScrolling(),this.isDragged&&0==this.percentOpen?this._overlay.style.display="none":this._animateOut()}},{key:"_animateIn",value:function(){this._animateSidenavIn(),this._animateOverlayIn()}},{key:"_animateSidenavIn",value:function(){var t=this,e="left"===this.options.edge?-1:1;this.isDragged&&(e="left"===this.options.edge?e+this.percentOpen:e-this.percentOpen),o.remove(this.el),o({targets:this.el,translateX:[100*e+"%",0],duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){"function"==typeof t.options.onOpenEnd&&t.options.onOpenEnd.call(t,t.el)}})}},{key:"_animateOverlayIn",value:function(){var t=0;this.isDragged?t=this.percentOpen:s(this._overlay).css({display:"block"}),o.remove(this._overlay),o({targets:this._overlay,opacity:[t,1],duration:this.options.inDuration,easing:"easeOutQuad"})}},{key:"_animateOut",value:function(){this._animateSidenavOut(),this._animateOverlayOut()}},{key:"_animateSidenavOut",value:function(){var t=this,e="left"===this.options.edge?-1:1,i=0;this.isDragged&&(i="left"===this.options.edge?e+this.percentOpen:e-this.percentOpen),o.remove(this.el),o({targets:this.el,translateX:[100*i+"%",105*e+"%"],duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t,t.el)}})}},{key:"_animateOverlayOut",value:function(){var t=this;o.remove(this._overlay),o({targets:this._overlay,opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){s(t._overlay).css("display","none")}})}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Sidenav}},{key:"defaults",get:function(){return e}}]),n}();t._sidenavs=[],M.Sidenav=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"sidenav","M_Sidenav")}(cash,M.anime),function(o,a){"use strict";var e={throttle:100,scrollOffset:200,activeClass:"active",getActiveElement:function(t){return'a[href="#'+t+'"]'}},t=function(t){function c(t,e){_classCallCheck(this,c);var i=_possibleConstructorReturn(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,c,t,e));return(i.el.M_ScrollSpy=i).options=o.extend({},c.defaults,e),c._elements.push(i),c._count++,c._increment++,i.tickId=-1,i.id=c._increment,i._setupEventHandlers(),i._handleWindowScroll(),i}return _inherits(c,Component),_createClass(c,[{key:"destroy",value:function(){c._elements.splice(c._elements.indexOf(this),1),c._elementsInView.splice(c._elementsInView.indexOf(this),1),c._visibleElements.splice(c._visibleElements.indexOf(this.$el),1),c._count--,this._removeEventHandlers(),o(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),this.el.M_ScrollSpy=void 0}},{key:"_setupEventHandlers",value:function(){var t=M.throttle(this._handleWindowScroll,200);this._handleThrottledResizeBound=t.bind(this),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),1===c._count&&(window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleThrottledResizeBound),document.body.addEventListener("click",this._handleTriggerClick))}},{key:"_removeEventHandlers",value:function(){0===c._count&&(window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleThrottledResizeBound),document.body.removeEventListener("click",this._handleTriggerClick))}},{key:"_handleTriggerClick",value:function(t){for(var e=o(t.target),i=c._elements.length-1;0<=i;i--){var n=c._elements[i];if(e.is('a[href="#'+n.$el.attr("id")+'"]')){t.preventDefault();var s=n.$el.offset().top+1;a({targets:[document.documentElement,document.body],scrollTop:s-n.options.scrollOffset,duration:400,easing:"easeOutCubic"});break}}}},{key:"_handleWindowScroll",value:function(){c._ticks++;for(var t=M.getDocumentScrollTop(),e=M.getDocumentScrollLeft(),i=e+window.innerWidth,n=t+window.innerHeight,s=c._findElements(t,i,n,e),o=0;o<s.length;o++){var a=s[o];a.tickId<0&&a._enter(),a.tickId=c._ticks}for(var r=0;r<c._elementsInView.length;r++){var l=c._elementsInView[r],h=l.tickId;0<=h&&h!==c._ticks&&(l._exit(),l.tickId=-1)}c._elementsInView=s}},{key:"_enter",value:function(){(c._visibleElements=c._visibleElements.filter(function(t){return 0!=t.height()}))[0]?(o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),c._visibleElements[0][0].M_ScrollSpy&&this.id<c._visibleElements[0][0].M_ScrollSpy.id?c._visibleElements.unshift(this.$el):c._visibleElements.push(this.$el)):c._visibleElements.push(this.$el),o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass)}},{key:"_exit",value:function(){var e=this;(c._visibleElements=c._visibleElements.filter(function(t){return 0!=t.height()}))[0]&&(o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),(c._visibleElements=c._visibleElements.filter(function(t){return t.attr("id")!=e.$el.attr("id")}))[0]&&o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass))}}],[{key:"init",value:function(t,e){return _get(c.__proto__||Object.getPrototypeOf(c),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_ScrollSpy}},{key:"_findElements",value:function(t,e,i,n){for(var s=[],o=0;o<c._elements.length;o++){var a=c._elements[o],r=t+a.options.scrollOffset||200;if(0<a.$el.height()){var l=a.$el.offset().top,h=a.$el.offset().left,d=h+a.$el.width(),u=l+a.$el.height();!(e<h||d<n||i<l||u<r)&&s.push(a)}}return s}},{key:"defaults",get:function(){return e}}]),c}();t._elements=[],t._elementsInView=[],t._visibleElements=[],t._count=0,t._increment=0,t._ticks=0,M.ScrollSpy=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"scrollSpy","M_ScrollSpy")}(cash,M.anime),function(h){"use strict";var e={data:{},limit:1/0,onAutocomplete:null,minLength:1,sortFunction:function(t,e,i){return t.indexOf(i)-e.indexOf(i)}},t=function(t){function s(t,e){_classCallCheck(this,s);var i=_possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,e));return(i.el.M_Autocomplete=i).options=h.extend({},s.defaults,e),i.isOpen=!1,i.count=0,i.activeIndex=-1,i.oldVal,i.$inputField=i.$el.closest(".input-field"),i.$active=h(),i._mousedown=!1,i._setupDropdown(),i._setupEventHandlers(),i}return _inherits(s,Component),_createClass(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeDropdown(),this.el.M_Autocomplete=void 0}},{key:"_setupEventHandlers",value:function(){this._handleInputBlurBound=this._handleInputBlur.bind(this),this._handleInputKeyupAndFocusBound=this._handleInputKeyupAndFocus.bind(this),this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleContainerMousedownAndTouchstartBound=this._handleContainerMousedownAndTouchstart.bind(this),this._handleContainerMouseupAndTouchendBound=this._handleContainerMouseupAndTouchend.bind(this),this.el.addEventListener("blur",this._handleInputBlurBound),this.el.addEventListener("keyup",this._handleInputKeyupAndFocusBound),this.el.addEventListener("focus",this._handleInputKeyupAndFocusBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.el.addEventListener("click",this._handleInputClickBound),this.container.addEventListener("mousedown",this._handleContainerMousedownAndTouchstartBound),this.container.addEventListener("mouseup",this._handleContainerMouseupAndTouchendBound),void 0!==window.ontouchstart&&(this.container.addEventListener("touchstart",this._handleContainerMousedownAndTouchstartBound),this.container.addEventListener("touchend",this._handleContainerMouseupAndTouchendBound))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("blur",this._handleInputBlurBound),this.el.removeEventListener("keyup",this._handleInputKeyupAndFocusBound),this.el.removeEventListener("focus",this._handleInputKeyupAndFocusBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound),this.el.removeEventListener("click",this._handleInputClickBound),this.container.removeEventListener("mousedown",this._handleContainerMousedownAndTouchstartBound),this.container.removeEventListener("mouseup",this._handleContainerMouseupAndTouchendBound),void 0!==window.ontouchstart&&(this.container.removeEventListener("touchstart",this._handleContainerMousedownAndTouchstartBound),this.container.removeEventListener("touchend",this._handleContainerMouseupAndTouchendBound))}},{key:"_setupDropdown",value:function(){var e=this;this.container=document.createElement("ul"),this.container.id="autocomplete-options-"+M.guid(),h(this.container).addClass("autocomplete-content dropdown-content"),this.$inputField.append(this.container),this.el.setAttribute("data-target",this.container.id),this.dropdown=M.Dropdown.init(this.el,{autoFocus:!1,closeOnClick:!1,coverTrigger:!1,onItemClick:function(t){e.selectOption(h(t))}}),this.el.removeEventListener("click",this.dropdown._handleClickBound)}},{key:"_removeDropdown",value:function(){this.container.parentNode.removeChild(this.container)}},{key:"_handleInputBlur",value:function(){this._mousedown||(this.close(),this._resetAutocomplete())}},{key:"_handleInputKeyupAndFocus",value:function(t){"keyup"===t.type&&(s._keydown=!1),this.count=0;var e=this.el.value.toLowerCase();13!==t.keyCode&&38!==t.keyCode&&40!==t.keyCode&&(this.oldVal===e||!M.tabPressed&&"focus"===t.type||this.open(),this.oldVal=e)}},{key:"_handleInputKeydown",value:function(t){s._keydown=!0;var e=t.keyCode,i=void 0,n=h(this.container).children("li").length;e===M.keys.ENTER&&0<=this.activeIndex?(i=h(this.container).children("li").eq(this.activeIndex)).length&&(this.selectOption(i),t.preventDefault()):e!==M.keys.ARROW_UP&&e!==M.keys.ARROW_DOWN||(t.preventDefault(),e===M.keys.ARROW_UP&&0<this.activeIndex&&this.activeIndex--,e===M.keys.ARROW_DOWN&&this.activeIndex<n-1&&this.activeIndex++,this.$active.removeClass("active"),0<=this.activeIndex&&(this.$active=h(this.container).children("li").eq(this.activeIndex),this.$active.addClass("active")))}},{key:"_handleInputClick",value:function(t){this.open()}},{key:"_handleContainerMousedownAndTouchstart",value:function(t){this._mousedown=!0}},{key:"_handleContainerMouseupAndTouchend",value:function(t){this._mousedown=!1}},{key:"_highlight",value:function(t,e){var i=e.find("img"),n=e.text().toLowerCase().indexOf(""+t.toLowerCase()),s=n+t.length-1,o=e.text().slice(0,n),a=e.text().slice(n,s+1),r=e.text().slice(s+1);e.html("<span>"+o+"<span class='highlight'>"+a+"</span>"+r+"</span>"),i.length&&e.prepend(i)}},{key:"_resetCurrentElement",value:function(){this.activeIndex=-1,this.$active.removeClass("active")}},{key:"_resetAutocomplete",value:function(){h(this.container).empty(),this._resetCurrentElement(),this.oldVal=null,this.isOpen=!1,this._mousedown=!1}},{key:"selectOption",value:function(t){var e=t.text().trim();this.el.value=e,this.$el.trigger("change"),this._resetAutocomplete(),this.close(),"function"==typeof this.options.onAutocomplete&&this.options.onAutocomplete.call(this,e)}},{key:"_renderDropdown",value:function(t,i){var n=this;this._resetAutocomplete();var e=[];for(var s in t)if(t.hasOwnProperty(s)&&-1!==s.toLowerCase().indexOf(i)){if(this.count>=this.options.limit)break;var o={data:t[s],key:s};e.push(o),this.count++}if(this.options.sortFunction){e.sort(function(t,e){return n.options.sortFunction(t.key.toLowerCase(),e.key.toLowerCase(),i.toLowerCase())})}for(var a=0;a<e.length;a++){var r=e[a],l=h("<li></li>");r.data?l.append('<img src="'+r.data+'" class="right circle"><span>'+r.key+"</span>"):l.append("<span>"+r.key+"</span>"),h(this.container).append(l),this._highlight(i,l)}}},{key:"open",value:function(){var t=this.el.value.toLowerCase();this._resetAutocomplete(),t.length>=this.options.minLength&&(this.isOpen=!0,this._renderDropdown(this.options.data,t)),this.dropdown.isOpen?this.dropdown.recalculateDimensions():this.dropdown.open()}},{key:"close",value:function(){this.dropdown.close()}},{key:"updateData",value:function(t){var e=this.el.value.toLowerCase();this.options.data=t,this.isOpen&&this._renderDropdown(t,e)}}],[{key:"init",value:function(t,e){return _get(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Autocomplete}},{key:"defaults",get:function(){return e}}]),s}();t._keydown=!1,M.Autocomplete=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"autocomplete","M_Autocomplete")}(cash),function(d){M.updateTextFields=function(){d("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(t,e){var i=d(this);0<t.value.length||d(t).is(":focus")||t.autofocus||null!==i.attr("placeholder")?i.siblings("label").addClass("active"):t.validity?i.siblings("label").toggleClass("active",!0===t.validity.badInput):i.siblings("label").removeClass("active")})},M.validate_field=function(t){var e=null!==t.attr("data-length"),i=parseInt(t.attr("data-length")),n=t[0].value.length;0!==n||!1!==t[0].validity.badInput||t.is(":required")?t.hasClass("validate")&&(t.is(":valid")&&e&&n<=i||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid"))):t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid"))},M.textareaAutoResize=function(t){if(t instanceof Element&&(t=d(t)),t.length){var e=d(".hiddendiv").first();e.length||(e=d('<div class="hiddendiv common"></div>'),d("body").append(e));var i=t.css("font-family"),n=t.css("font-size"),s=t.css("line-height"),o=t.css("padding-top"),a=t.css("padding-right"),r=t.css("padding-bottom"),l=t.css("padding-left");n&&e.css("font-size",n),i&&e.css("font-family",i),s&&e.css("line-height",s),o&&e.css("padding-top",o),a&&e.css("padding-right",a),r&&e.css("padding-bottom",r),l&&e.css("padding-left",l),t.data("original-height")||t.data("original-height",t.height()),"off"===t.attr("wrap")&&e.css("overflow-wrap","normal").css("white-space","pre"),e.text(t[0].value+"\n");var h=e.html().replace(/\n/g,"<br>");e.html(h),0<t[0].offsetWidth&&0<t[0].offsetHeight?e.css("width",t.width()+"px"):e.css("width",window.innerWidth/2+"px"),t.data("original-height")<=e.innerHeight()?t.css("height",e.innerHeight()+"px"):t[0].value.length<t.data("previous-length")&&t.css("height",t.data("original-height")+"px"),t.data("previous-length",t[0].value.length)}else console.error("No textarea element found")},d(document).ready(function(){var n="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";d(document).on("change",n,function(){0===this.value.length&&null===d(this).attr("placeholder")||d(this).siblings("label").addClass("active"),M.validate_field(d(this))}),d(document).ready(function(){M.updateTextFields()}),d(document).on("reset",function(t){var e=d(t.target);e.is("form")&&(e.find(n).removeClass("valid").removeClass("invalid"),e.find(n).each(function(t){this.value.length&&d(this).siblings("label").removeClass("active")}),setTimeout(function(){e.find("select").each(function(){this.M_FormSelect&&d(this).trigger("change")})},0))}),document.addEventListener("focus",function(t){d(t.target).is(n)&&d(t.target).siblings("label, .prefix").addClass("active")},!0),document.addEventListener("blur",function(t){var e=d(t.target);if(e.is(n)){var i=".prefix";0===e[0].value.length&&!0!==e[0].validity.badInput&&null===e.attr("placeholder")&&(i+=", label"),e.siblings(i).removeClass("active"),M.validate_field(e)}},!0);d(document).on("keyup","input[type=radio], input[type=checkbox]",function(t){if(t.which===M.keys.TAB)return d(this).addClass("tabbed"),void d(this).one("blur",function(t){d(this).removeClass("tabbed")})});var t=".materialize-textarea";d(t).each(function(){var t=d(this);t.data("original-height",t.height()),t.data("previous-length",this.value.length),M.textareaAutoResize(t)}),d(document).on("keyup",t,function(){M.textareaAutoResize(d(this))}),d(document).on("keydown",t,function(){M.textareaAutoResize(d(this))}),d(document).on("change",'.file-field input[type="file"]',function(){for(var t=d(this).closest(".file-field").find("input.file-path"),e=d(this)[0].files,i=[],n=0;n<e.length;n++)i.push(e[n].name);t[0].value=i.join(", "),t.trigger("change")})})}(cash),function(s,o){"use strict";var e={indicators:!0,height:400,duration:500,interval:6e3},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Slider=i).options=s.extend({},n.defaults,e),i.$slider=i.$el.find(".slides"),i.$slides=i.$slider.children("li"),i.activeIndex=i.$slides.filter(function(t){return s(t).hasClass("active")}).first().index(),-1!=i.activeIndex&&(i.$active=i.$slides.eq(i.activeIndex)),i._setSliderHeight(),i.$slides.find(".caption").each(function(t){i._animateCaptionIn(t,0)}),i.$slides.find("img").each(function(t){var e="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";s(t).attr("src")!==e&&(s(t).css("background-image",'url("'+s(t).attr("src")+'")'),s(t).attr("src",e))}),i._setupIndicators(),i.$active?i.$active.css("display","block"):(i.$slides.first().addClass("active"),o({targets:i.$slides.first()[0],opacity:1,duration:i.options.duration,easing:"easeOutQuad"}),i.activeIndex=0,i.$active=i.$slides.eq(i.activeIndex),i.options.indicators&&i.$indicators.eq(i.activeIndex).addClass("active")),i.$active.find("img").each(function(t){o({targets:i.$active.find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:i.options.duration,easing:"easeOutQuad"})}),i._setupEventHandlers(),i.start(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this.pause(),this._removeIndicators(),this._removeEventHandlers(),this.el.M_Slider=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleIntervalBound=this._handleInterval.bind(this),this._handleIndicatorClickBound=this._handleIndicatorClick.bind(this),this.options.indicators&&this.$indicators.each(function(t){t.addEventListener("click",e._handleIndicatorClickBound)})}},{key:"_removeEventHandlers",value:function(){var e=this;this.options.indicators&&this.$indicators.each(function(t){t.removeEventListener("click",e._handleIndicatorClickBound)})}},{key:"_handleIndicatorClick",value:function(t){var e=s(t.target).index();this.set(e)}},{key:"_handleInterval",value:function(){var t=this.$slider.find(".active").index();this.$slides.length===t+1?t=0:t+=1,this.set(t)}},{key:"_animateCaptionIn",value:function(t,e){var i={targets:t,opacity:0,duration:e,easing:"easeOutQuad"};s(t).hasClass("center-align")?i.translateY=-100:s(t).hasClass("right-align")?i.translateX=100:s(t).hasClass("left-align")&&(i.translateX=-100),o(i)}},{key:"_setSliderHeight",value:function(){this.$el.hasClass("fullscreen")||(this.options.indicators?this.$el.css("height",this.options.height+40+"px"):this.$el.css("height",this.options.height+"px"),this.$slider.css("height",this.options.height+"px"))}},{key:"_setupIndicators",value:function(){var n=this;this.options.indicators&&(this.$indicators=s('<ul class="indicators"></ul>'),this.$slides.each(function(t,e){var i=s('<li class="indicator-item"></li>');n.$indicators.append(i[0])}),this.$el.append(this.$indicators[0]),this.$indicators=this.$indicators.children("li.indicator-item"))}},{key:"_removeIndicators",value:function(){this.$el.find("ul.indicators").remove()}},{key:"set",value:function(t){var e=this;if(t>=this.$slides.length?t=0:t<0&&(t=this.$slides.length-1),this.activeIndex!=t){this.$active=this.$slides.eq(this.activeIndex);var i=this.$active.find(".caption");this.$active.removeClass("active"),o({targets:this.$active[0],opacity:0,duration:this.options.duration,easing:"easeOutQuad",complete:function(){e.$slides.not(".active").each(function(t){o({targets:t,opacity:0,translateX:0,translateY:0,duration:0,easing:"easeOutQuad"})})}}),this._animateCaptionIn(i[0],this.options.duration),this.options.indicators&&(this.$indicators.eq(this.activeIndex).removeClass("active"),this.$indicators.eq(t).addClass("active")),o({targets:this.$slides.eq(t)[0],opacity:1,duration:this.options.duration,easing:"easeOutQuad"}),o({targets:this.$slides.eq(t).find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:this.options.duration,delay:this.options.duration,easing:"easeOutQuad"}),this.$slides.eq(t).addClass("active"),this.activeIndex=t,this.start()}}},{key:"pause",value:function(){clearInterval(this.interval)}},{key:"start",value:function(){clearInterval(this.interval),this.interval=setInterval(this._handleIntervalBound,this.options.duration+this.options.interval)}},{key:"next",value:function(){var t=this.activeIndex+1;t>=this.$slides.length?t=0:t<0&&(t=this.$slides.length-1),this.set(t)}},{key:"prev",value:function(){var t=this.activeIndex-1;t>=this.$slides.length?t=0:t<0&&(t=this.$slides.length-1),this.set(t)}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Slider}},{key:"defaults",get:function(){return e}}]),n}();M.Slider=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"slider","M_Slider")}(cash,M.anime),function(n,s){n(document).on("click",".card",function(t){if(n(this).children(".card-reveal").length){var i=n(t.target).closest(".card");void 0===i.data("initialOverflow")&&i.data("initialOverflow",void 0===i.css("overflow")?"":i.css("overflow"));var e=n(this).find(".card-reveal");n(t.target).is(n(".card-reveal .card-title"))||n(t.target).is(n(".card-reveal .card-title i"))?s({targets:e[0],translateY:0,duration:225,easing:"easeInOutQuad",complete:function(t){var e=t.animatables[0].target;n(e).css({display:"none"}),i.css("overflow",i.data("initialOverflow"))}}):(n(t.target).is(n(".card .activator"))||n(t.target).is(n(".card .activator i")))&&(i.css("overflow","hidden"),e.css({display:"block"}),s({targets:e[0],translateY:"-100%",duration:300,easing:"easeInOutQuad"}))}})}(cash,M.anime),function(h){"use strict";var e={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{},limit:1/0,onChipAdd:null,onChipSelect:null,onChipDelete:null},t=function(t){function l(t,e){_classCallCheck(this,l);var i=_possibleConstructorReturn(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,l,t,e));return(i.el.M_Chips=i).options=h.extend({},l.defaults,e),i.$el.addClass("chips input-field"),i.chipsData=[],i.$chips=h(),i._setupInput(),i.hasAutocomplete=0<Object.keys(i.options.autocompleteOptions).length,i.$input.attr("id")||i.$input.attr("id",M.guid()),i.options.data.length&&(i.chipsData=i.options.data,i._renderChips(i.chipsData)),i.hasAutocomplete&&i._setupAutocomplete(),i._setPlaceholder(),i._setupLabel(),i._setupEventHandlers(),i}return _inherits(l,Component),_createClass(l,[{key:"getData",value:function(){return this.chipsData}},{key:"destroy",value:function(){this._removeEventHandlers(),this.$chips.remove(),this.el.M_Chips=void 0}},{key:"_setupEventHandlers",value:function(){this._handleChipClickBound=this._handleChipClick.bind(this),this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputFocusBound=this._handleInputFocus.bind(this),this._handleInputBlurBound=this._handleInputBlur.bind(this),this.el.addEventListener("click",this._handleChipClickBound),document.addEventListener("keydown",l._handleChipsKeydown),document.addEventListener("keyup",l._handleChipsKeyup),this.el.addEventListener("blur",l._handleChipsBlur,!0),this.$input[0].addEventListener("focus",this._handleInputFocusBound),this.$input[0].addEventListener("blur",this._handleInputBlurBound),this.$input[0].addEventListener("keydown",this._handleInputKeydownBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleChipClickBound),document.removeEventListener("keydown",l._handleChipsKeydown),document.removeEventListener("keyup",l._handleChipsKeyup),this.el.removeEventListener("blur",l._handleChipsBlur,!0),this.$input[0].removeEventListener("focus",this._handleInputFocusBound),this.$input[0].removeEventListener("blur",this._handleInputBlurBound),this.$input[0].removeEventListener("keydown",this._handleInputKeydownBound)}},{key:"_handleChipClick",value:function(t){var e=h(t.target).closest(".chip"),i=h(t.target).is(".close");if(e.length){var n=e.index();i?(this.deleteChip(n),this.$input[0].focus()):this.selectChip(n)}else this.$input[0].focus()}},{key:"_handleInputFocus",value:function(){this.$el.addClass("focus")}},{key:"_handleInputBlur",value:function(){this.$el.removeClass("focus")}},{key:"_handleInputKeydown",value:function(t){if(l._keydown=!0,13===t.keyCode){if(this.hasAutocomplete&&this.autocomplete&&this.autocomplete.isOpen)return;t.preventDefault(),this.addChip({tag:this.$input[0].value}),this.$input[0].value=""}else 8!==t.keyCode&&37!==t.keyCode||""!==this.$input[0].value||!this.chipsData.length||(t.preventDefault(),this.selectChip(this.chipsData.length-1))}},{key:"_renderChip",value:function(t){if(t.tag){var e=document.createElement("div"),i=document.createElement("i");if(e.classList.add("chip"),e.textContent=t.tag,e.setAttribute("tabindex",0),h(i).addClass("material-icons close"),i.textContent="close",t.image){var n=document.createElement("img");n.setAttribute("src",t.image),e.insertBefore(n,e.firstChild)}return e.appendChild(i),e}}},{key:"_renderChips",value:function(){this.$chips.remove();for(var t=0;t<this.chipsData.length;t++){var e=this._renderChip(this.chipsData[t]);this.$el.append(e),this.$chips.add(e)}this.$el.append(this.$input[0])}},{key:"_setupAutocomplete",value:function(){var e=this;this.options.autocompleteOptions.onAutocomplete=function(t){e.addChip({tag:t}),e.$input[0].value="",e.$input[0].focus()},this.autocomplete=M.Autocomplete.init(this.$input[0],this.options.autocompleteOptions)}},{key:"_setupInput",value:function(){this.$input=this.$el.find("input"),this.$input.length||(this.$input=h("<input></input>"),this.$el.append(this.$input)),this.$input.addClass("input")}},{key:"_setupLabel",value:function(){this.$label=this.$el.find("label"),this.$label.length&&this.$label.setAttribute("for",this.$input.attr("id"))}},{key:"_setPlaceholder",value:function(){void 0!==this.chipsData&&!this.chipsData.length&&this.options.placeholder?h(this.$input).prop("placeholder",this.options.placeholder):(void 0===this.chipsData||this.chipsData.length)&&this.options.secondaryPlaceholder&&h(this.$input).prop("placeholder",this.options.secondaryPlaceholder)}},{key:"_isValid",value:function(t){if(t.hasOwnProperty("tag")&&""!==t.tag){for(var e=!1,i=0;i<this.chipsData.length;i++)if(this.chipsData[i].tag===t.tag){e=!0;break}return!e}return!1}},{key:"addChip",value:function(t){if(this._isValid(t)&&!(this.chipsData.length>=this.options.limit)){var e=this._renderChip(t);this.$chips.add(e),this.chipsData.push(t),h(this.$input).before(e),this._setPlaceholder(),"function"==typeof this.options.onChipAdd&&this.options.onChipAdd.call(this,this.$el,e)}}},{key:"deleteChip",value:function(t){var e=this.$chips.eq(t);this.$chips.eq(t).remove(),this.$chips=this.$chips.filter(function(t){return 0<=h(t).index()}),this.chipsData.splice(t,1),this._setPlaceholder(),"function"==typeof this.options.onChipDelete&&this.options.onChipDelete.call(this,this.$el,e[0])}},{key:"selectChip",value:function(t){var e=this.$chips.eq(t);(this._selectedChip=e)[0].focus(),"function"==typeof this.options.onChipSelect&&this.options.onChipSelect.call(this,this.$el,e[0])}}],[{key:"init",value:function(t,e){return _get(l.__proto__||Object.getPrototypeOf(l),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Chips}},{key:"_handleChipsKeydown",value:function(t){l._keydown=!0;var e=h(t.target).closest(".chips"),i=t.target&&e.length;if(!h(t.target).is("input, textarea")&&i){var n=e[0].M_Chips;if(8===t.keyCode||46===t.keyCode){t.preventDefault();var s=n.chipsData.length;if(n._selectedChip){var o=n._selectedChip.index();n.deleteChip(o),n._selectedChip=null,s=Math.max(o-1,0)}n.chipsData.length&&n.selectChip(s)}else if(37===t.keyCode){if(n._selectedChip){var a=n._selectedChip.index()-1;if(a<0)return;n.selectChip(a)}}else if(39===t.keyCode&&n._selectedChip){var r=n._selectedChip.index()+1;r>=n.chipsData.length?n.$input[0].focus():n.selectChip(r)}}}},{key:"_handleChipsKeyup",value:function(t){l._keydown=!1}},{key:"_handleChipsBlur",value:function(t){l._keydown||(h(t.target).closest(".chips")[0].M_Chips._selectedChip=null)}},{key:"defaults",get:function(){return e}}]),l}();t._keydown=!1,M.Chips=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"chips","M_Chips"),h(document).ready(function(){h(document.body).on("click",".chip .close",function(){var t=h(this).closest(".chips");t.length&&t[0].M_Chips||h(this).closest(".chip").remove()})})}(cash),function(s){"use strict";var e={top:0,bottom:1/0,offset:0,onPositionChange:null},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Pushpin=i).options=s.extend({},n.defaults,e),i.originalOffset=i.el.offsetTop,n._pushpins.push(i),i._setupEventHandlers(),i._updatePosition(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this.el.style.top=null,this._removePinClasses(),this._removeEventHandlers();var t=n._pushpins.indexOf(this);n._pushpins.splice(t,1)}},{key:"_setupEventHandlers",value:function(){document.addEventListener("scroll",n._updateElements)}},{key:"_removeEventHandlers",value:function(){document.removeEventListener("scroll",n._updateElements)}},{key:"_updatePosition",value:function(){var t=M.getDocumentScrollTop()+this.options.offset;this.options.top<=t&&this.options.bottom>=t&&!this.el.classList.contains("pinned")&&(this._removePinClasses(),this.el.style.top=this.options.offset+"px",this.el.classList.add("pinned"),"function"==typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pinned")),t<this.options.top&&!this.el.classList.contains("pin-top")&&(this._removePinClasses(),this.el.style.top=0,this.el.classList.add("pin-top"),"function"==typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-top")),t>this.options.bottom&&!this.el.classList.contains("pin-bottom")&&(this._removePinClasses(),this.el.classList.add("pin-bottom"),this.el.style.top=this.options.bottom-this.originalOffset+"px","function"==typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-bottom"))}},{key:"_removePinClasses",value:function(){this.el.classList.remove("pin-top"),this.el.classList.remove("pinned"),this.el.classList.remove("pin-bottom")}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Pushpin}},{key:"_updateElements",value:function(){for(var t in n._pushpins){n._pushpins[t]._updatePosition()}}},{key:"defaults",get:function(){return e}}]),n}();t._pushpins=[],M.Pushpin=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"pushpin","M_Pushpin")}(cash),function(r,s){"use strict";var e={direction:"top",hoverEnabled:!0,toolbarEnabled:!1};r.fn.reverse=[].reverse;var t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_FloatingActionButton=i).options=r.extend({},n.defaults,e),i.isOpen=!1,i.$anchor=i.$el.children("a").first(),i.$menu=i.$el.children("ul").first(),i.$floatingBtns=i.$el.find("ul .btn-floating"),i.$floatingBtnsReverse=i.$el.find("ul .btn-floating").reverse(),i.offsetY=0,i.offsetX=0,i.$el.addClass("direction-"+i.options.direction),"top"===i.options.direction?i.offsetY=40:"right"===i.options.direction?i.offsetX=-40:"bottom"===i.options.direction?i.offsetY=-40:i.offsetX=40,i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_FloatingActionButton=void 0}},{key:"_setupEventHandlers",value:function(){this._handleFABClickBound=this._handleFABClick.bind(this),this._handleOpenBound=this.open.bind(this),this._handleCloseBound=this.close.bind(this),this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.addEventListener("mouseenter",this._handleOpenBound),this.el.addEventListener("mouseleave",this._handleCloseBound)):this.el.addEventListener("click",this._handleFABClickBound)}},{key:"_removeEventHandlers",value:function(){this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.removeEventListener("mouseenter",this._handleOpenBound),this.el.removeEventListener("mouseleave",this._handleCloseBound)):this.el.removeEventListener("click",this._handleFABClickBound)}},{key:"_handleFABClick",value:function(){this.isOpen?this.close():this.open()}},{key:"_handleDocumentClick",value:function(t){r(t.target).closest(this.$menu).length||this.close()}},{key:"open",value:function(){this.isOpen||(this.options.toolbarEnabled?this._animateInToolbar():this._animateInFAB(),this.isOpen=!0)}},{key:"close",value:function(){this.isOpen&&(this.options.toolbarEnabled?(window.removeEventListener("scroll",this._handleCloseBound,!0),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),this._animateOutToolbar()):this._animateOutFAB(),this.isOpen=!1)}},{key:"_animateInFAB",value:function(){var e=this;this.$el.addClass("active");var i=0;this.$floatingBtnsReverse.each(function(t){s({targets:t,opacity:1,scale:[.4,1],translateY:[e.offsetY,0],translateX:[e.offsetX,0],duration:275,delay:i,easing:"easeInOutQuad"}),i+=40})}},{key:"_animateOutFAB",value:function(){var e=this;this.$floatingBtnsReverse.each(function(t){s.remove(t),s({targets:t,opacity:0,scale:.4,translateY:e.offsetY,translateX:e.offsetX,duration:175,easing:"easeOutQuad",complete:function(){e.$el.removeClass("active")}})})}},{key:"_animateInToolbar",value:function(){var t,e=this,i=window.innerWidth,n=window.innerHeight,s=this.el.getBoundingClientRect(),o=r('<div class="fab-backdrop"></div>'),a=this.$anchor.css("background-color");this.$anchor.append(o),this.offsetX=s.left-i/2+s.width/2,this.offsetY=n-s.bottom,t=i/o[0].clientWidth,this.btnBottom=s.bottom,this.btnLeft=s.left,this.btnWidth=s.width,this.$el.addClass("active"),this.$el.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+this.offsetX+"px)",transition:"none"}),this.$anchor.css({transform:"translateY("+-this.offsetY+"px)",transition:"none"}),o.css({"background-color":a}),setTimeout(function(){e.$el.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),e.$anchor.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout(function(){e.$el.css({overflow:"hidden","background-color":a}),o.css({transform:"scale("+t+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),e.$menu.children("li").children("a").css({opacity:1}),e._handleDocumentClickBound=e._handleDocumentClick.bind(e),window.addEventListener("scroll",e._handleCloseBound,!0),document.body.addEventListener("click",e._handleDocumentClickBound,!0)},100)},0)}},{key:"_animateOutToolbar",value:function(){var t=this,e=window.innerWidth,i=window.innerHeight,n=this.$el.find(".fab-backdrop"),s=this.$anchor.css("background-color");this.offsetX=this.btnLeft-e/2+this.btnWidth/2,this.offsetY=i-this.btnBottom,this.$el.removeClass("active"),this.$el.css({"background-color":"transparent",transition:"none"}),this.$anchor.css({transition:"none"}),n.css({transform:"scale(0)","background-color":s}),this.$menu.children("li").children("a").css({opacity:""}),setTimeout(function(){n.remove(),t.$el.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-t.offsetX+"px,0,0)"}),t.$anchor.css({overflow:"",transform:"translate3d(0,"+t.offsetY+"px,0)"}),setTimeout(function(){t.$el.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),t.$anchor.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})},20)},200)}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_FloatingActionButton}},{key:"defaults",get:function(){return e}}]),n}();M.FloatingActionButton=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"floatingActionButton","M_FloatingActionButton")}(cash,M.anime),function(g){"use strict";var e={autoClose:!1,format:"mmm dd, yyyy",parse:null,defaultDate:null,setDefaultDate:!1,disableWeekends:!1,disableDayFn:null,firstDay:0,minDate:null,maxDate:null,yearRange:10,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,container:null,showClearBtn:!1,i18n:{cancel:"Cancel",clear:"Clear",done:"Ok",previousMonth:"‹",nextMonth:"›",months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysAbbrev:["S","M","T","W","T","F","S"]},events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null},t=function(t){function B(t,e){_classCallCheck(this,B);var i=_possibleConstructorReturn(this,(B.__proto__||Object.getPrototypeOf(B)).call(this,B,t,e));(i.el.M_Datepicker=i).options=g.extend({},B.defaults,e),e&&e.hasOwnProperty("i18n")&&"object"==typeof e.i18n&&(i.options.i18n=g.extend({},B.defaults.i18n,e.i18n)),i.options.minDate&&i.options.minDate.setHours(0,0,0,0),i.options.maxDate&&i.options.maxDate.setHours(0,0,0,0),i.id=M.guid(),i._setupVariables(),i._insertHTMLIntoDOM(),i._setupModal(),i._setupEventHandlers(),i.options.defaultDate||(i.options.defaultDate=new Date(Date.parse(i.el.value)));var n=i.options.defaultDate;return B._isDate(n)?i.options.setDefaultDate?(i.setDate(n,!0),i.setInputValue()):i.gotoDate(n):i.gotoDate(new Date),i.isOpen=!1,i}return _inherits(B,Component),_createClass(B,[{key:"destroy",value:function(){this._removeEventHandlers(),this.modal.destroy(),g(this.modalEl).remove(),this.destroySelects(),this.el.M_Datepicker=void 0}},{key:"destroySelects",value:function(){var t=this.calendarEl.querySelector(".orig-select-year");t&&M.FormSelect.getInstance(t).destroy();var e=this.calendarEl.querySelector(".orig-select-month");e&&M.FormSelect.getInstance(e).destroy()}},{key:"_insertHTMLIntoDOM",value:function(){this.options.showClearBtn&&(g(this.clearBtn).css({visibility:""}),this.clearBtn.innerHTML=this.options.i18n.clear),this.doneBtn.innerHTML=this.options.i18n.done,this.cancelBtn.innerHTML=this.options.i18n.cancel,this.options.container?this.$modalEl.appendTo(this.options.container):this.$modalEl.insertBefore(this.el)}},{key:"_setupModal",value:function(){var t=this;this.modalEl.id="modal-"+this.id,this.modal=M.Modal.init(this.modalEl,{onCloseEnd:function(){t.isOpen=!1}})}},{key:"toString",value:function(t){var e=this;return t=t||this.options.format,B._isDate(this.date)?t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(t){return e.formats[t]?e.formats[t]():t}).join(""):""}},{key:"setDate",value:function(t,e){if(!t)return this.date=null,this._renderDateDisplay(),this.draw();if("string"==typeof t&&(t=new Date(Date.parse(t))),B._isDate(t)){var i=this.options.minDate,n=this.options.maxDate;B._isDate(i)&&t<i?t=i:B._isDate(n)&&n<t&&(t=n),this.date=new Date(t.getTime()),this._renderDateDisplay(),B._setToStartOfDay(this.date),this.gotoDate(this.date),e||"function"!=typeof this.options.onSelect||this.options.onSelect.call(this,this.date)}}},{key:"setInputValue",value:function(){this.el.value=this.toString(),this.$el.trigger("change",{firedBy:this})}},{key:"_renderDateDisplay",value:function(){var t=B._isDate(this.date)?this.date:new Date,e=this.options.i18n,i=e.weekdaysShort[t.getDay()],n=e.monthsShort[t.getMonth()],s=t.getDate();this.yearTextEl.innerHTML=t.getFullYear(),this.dateTextEl.innerHTML=i+", "+n+" "+s}},{key:"gotoDate",value:function(t){var e=!0;if(B._isDate(t)){if(this.calendars){var i=new Date(this.calendars[0].year,this.calendars[0].month,1),n=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),s=t.getTime();n.setMonth(n.getMonth()+1),n.setDate(n.getDate()-1),e=s<i.getTime()||n.getTime()<s}e&&(this.calendars=[{month:t.getMonth(),year:t.getFullYear()}]),this.adjustCalendars()}}},{key:"adjustCalendars",value:function(){this.calendars[0]=this.adjustCalendar(this.calendars[0]),this.draw()}},{key:"adjustCalendar",value:function(t){return t.month<0&&(t.year-=Math.ceil(Math.abs(t.month)/12),t.month+=12),11<t.month&&(t.year+=Math.floor(Math.abs(t.month)/12),t.month-=12),t}},{key:"nextMonth",value:function(){this.calendars[0].month++,this.adjustCalendars()}},{key:"prevMonth",value:function(){this.calendars[0].month--,this.adjustCalendars()}},{key:"render",value:function(t,e,i){var n=this.options,s=new Date,o=B._getDaysInMonth(t,e),a=new Date(t,e,1).getDay(),r=[],l=[];B._setToStartOfDay(s),0<n.firstDay&&(a-=n.firstDay)<0&&(a+=7);for(var h=0===e?11:e-1,d=11===e?0:e+1,u=0===e?t-1:t,c=11===e?t+1:t,p=B._getDaysInMonth(u,h),v=o+a,f=v;7<f;)f-=7;v+=7-f;for(var m=!1,g=0,_=0;g<v;g++){var y=new Date(t,e,g-a+1),k=!!B._isDate(this.date)&&B._compareDates(y,this.date),b=B._compareDates(y,s),w=-1!==n.events.indexOf(y.toDateString()),C=g<a||o+a<=g,E=g-a+1,M=e,O=t,x=n.startRange&&B._compareDates(n.startRange,y),L=n.endRange&&B._compareDates(n.endRange,y),T=n.startRange&&n.endRange&&n.startRange<y&&y<n.endRange;C&&(g<a?(E=p+E,M=h,O=u):(E-=o,M=d,O=c));var $={day:E,month:M,year:O,hasEvent:w,isSelected:k,isToday:b,isDisabled:n.minDate&&y<n.minDate||n.maxDate&&y>n.maxDate||n.disableWeekends&&B._isWeekend(y)||n.disableDayFn&&n.disableDayFn(y),isEmpty:C,isStartRange:x,isEndRange:L,isInRange:T,showDaysInNextAndPreviousMonths:n.showDaysInNextAndPreviousMonths};l.push(this.renderDay($)),7==++_&&(r.push(this.renderRow(l,n.isRTL,m)),_=0,m=!(l=[]))}return this.renderTable(n,r,i)}},{key:"renderDay",value:function(t){var e=[],i="false";if(t.isEmpty){if(!t.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';e.push("is-outside-current-month"),e.push("is-selection-disabled")}return t.isDisabled&&e.push("is-disabled"),t.isToday&&e.push("is-today"),t.isSelected&&(e.push("is-selected"),i="true"),t.hasEvent&&e.push("has-event"),t.isInRange&&e.push("is-inrange"),t.isStartRange&&e.push("is-startrange"),t.isEndRange&&e.push("is-endrange"),'<td data-day="'+t.day+'" class="'+e.join(" ")+'" aria-selected="'+i+'"><button class="datepicker-day-button" type="button" data-year="'+t.year+'" data-month="'+t.month+'" data-day="'+t.day+'">'+t.day+"</button></td>"}},{key:"renderRow",value:function(t,e,i){return'<tr class="datepicker-row'+(i?" is-selected":"")+'">'+(e?t.reverse():t).join("")+"</tr>"}},{key:"renderTable",value:function(t,e,i){return'<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="'+i+'">'+this.renderHead(t)+this.renderBody(e)+"</table></div>"}},{key:"renderHead",value:function(t){var e=void 0,i=[];for(e=0;e<7;e++)i.push('<th scope="col"><abbr title="'+this.renderDayName(t,e)+'">'+this.renderDayName(t,e,!0)+"</abbr></th>");return"<thead><tr>"+(t.isRTL?i.reverse():i).join("")+"</tr></thead>"}},{key:"renderBody",value:function(t){return"<tbody>"+t.join("")+"</tbody>"}},{key:"renderTitle",value:function(t,e,i,n,s,o){var a,r,l=void 0,h=void 0,d=void 0,u=this.options,c=i===u.minYear,p=i===u.maxYear,v='<div id="'+o+'" class="datepicker-controls" role="heading" aria-live="assertive">',f=!0,m=!0;for(d=[],l=0;l<12;l++)d.push('<option value="'+(i===s?l-e:12+l-e)+'"'+(l===n?' selected="selected"':"")+(c&&l<u.minMonth||p&&l>u.maxMonth?'disabled="disabled"':"")+">"+u.i18n.months[l]+"</option>");for(a='<select class="datepicker-select orig-select-month" tabindex="-1">'+d.join("")+"</select>",g.isArray(u.yearRange)?(l=u.yearRange[0],h=u.yearRange[1]+1):(l=i-u.yearRange,h=1+i+u.yearRange),d=[];l<h&&l<=u.maxYear;l++)l>=u.minYear&&d.push('<option value="'+l+'" '+(l===i?'selected="selected"':"")+">"+l+"</option>");r='<select class="datepicker-select orig-select-year" tabindex="-1">'+d.join("")+"</select>";v+='<button class="month-prev'+(f?"":" is-disabled")+'" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>',v+='<div class="selects-container">',u.showMonthAfterYear?v+=r+a:v+=a+r,v+="</div>",c&&(0===n||u.minMonth>=n)&&(f=!1),p&&(11===n||u.maxMonth<=n)&&(m=!1);return(v+='<button class="month-next'+(m?"":" is-disabled")+'" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>')+"</div>"}},{key:"draw",value:function(t){if(this.isOpen||t){var e,i=this.options,n=i.minYear,s=i.maxYear,o=i.minMonth,a=i.maxMonth,r="";this._y<=n&&(this._y=n,!isNaN(o)&&this._m<o&&(this._m=o)),this._y>=s&&(this._y=s,!isNaN(a)&&this._m>a&&(this._m=a)),e="datepicker-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var l=0;l<1;l++)this._renderDateDisplay(),r+=this.renderTitle(this,l,this.calendars[l].year,this.calendars[l].month,this.calendars[0].year,e)+this.render(this.calendars[l].year,this.calendars[l].month,e);this.destroySelects(),this.calendarEl.innerHTML=r;var h=this.calendarEl.querySelector(".orig-select-year"),d=this.calendarEl.querySelector(".orig-select-month");M.FormSelect.init(h,{classes:"select-year",dropdownOptions:{container:document.body,constrainWidth:!1}}),M.FormSelect.init(d,{classes:"select-month",dropdownOptions:{container:document.body,constrainWidth:!1}}),h.addEventListener("change",this._handleYearChange.bind(this)),d.addEventListener("change",this._handleMonthChange.bind(this)),"function"==typeof this.options.onDraw&&this.options.onDraw(this)}}},{key:"_setupEventHandlers",value:function(){this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleInputChangeBound=this._handleInputChange.bind(this),this._handleCalendarClickBound=this._handleCalendarClick.bind(this),this._finishSelectionBound=this._finishSelection.bind(this),this._handleMonthChange=this._handleMonthChange.bind(this),this._closeBound=this.close.bind(this),this.el.addEventListener("click",this._handleInputClickBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.el.addEventListener("change",this._handleInputChangeBound),this.calendarEl.addEventListener("click",this._handleCalendarClickBound),this.doneBtn.addEventListener("click",this._finishSelectionBound),this.cancelBtn.addEventListener("click",this._closeBound),this.options.showClearBtn&&(this._handleClearClickBound=this._handleClearClick.bind(this),this.clearBtn.addEventListener("click",this._handleClearClickBound))}},{key:"_setupVariables",value:function(){var e=this;this.$modalEl=g(B._template),this.modalEl=this.$modalEl[0],this.calendarEl=this.modalEl.querySelector(".datepicker-calendar"),this.yearTextEl=this.modalEl.querySelector(".year-text"),this.dateTextEl=this.modalEl.querySelector(".date-text"),this.options.showClearBtn&&(this.clearBtn=this.modalEl.querySelector(".datepicker-clear")),this.doneBtn=this.modalEl.querySelector(".datepicker-done"),this.cancelBtn=this.modalEl.querySelector(".datepicker-cancel"),this.formats={d:function(){return e.date.getDate()},dd:function(){var t=e.date.getDate();return(t<10?"0":"")+t},ddd:function(){return e.options.i18n.weekdaysShort[e.date.getDay()]},dddd:function(){return e.options.i18n.weekdays[e.date.getDay()]},m:function(){return e.date.getMonth()+1},mm:function(){var t=e.date.getMonth()+1;return(t<10?"0":"")+t},mmm:function(){return e.options.i18n.monthsShort[e.date.getMonth()]},mmmm:function(){return e.options.i18n.months[e.date.getMonth()]},yy:function(){return(""+e.date.getFullYear()).slice(2)},yyyy:function(){return e.date.getFullYear()}}}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleInputClickBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound),this.el.removeEventListener("change",this._handleInputChangeBound),this.calendarEl.removeEventListener("click",this._handleCalendarClickBound)}},{key:"_handleInputClick",value:function(){this.open()}},{key:"_handleInputKeydown",value:function(t){t.which===M.keys.ENTER&&(t.preventDefault(),this.open())}},{key:"_handleCalendarClick",value:function(t){if(this.isOpen){var e=g(t.target);e.hasClass("is-disabled")||(!e.hasClass("datepicker-day-button")||e.hasClass("is-empty")||e.parent().hasClass("is-disabled")?e.closest(".month-prev").length?this.prevMonth():e.closest(".month-next").length&&this.nextMonth():(this.setDate(new Date(t.target.getAttribute("data-year"),t.target.getAttribute("data-month"),t.target.getAttribute("data-day"))),this.options.autoClose&&this._finishSelection()))}}},{key:"_handleClearClick",value:function(){this.date=null,this.setInputValue(),this.close()}},{key:"_handleMonthChange",value:function(t){this.gotoMonth(t.target.value)}},{key:"_handleYearChange",value:function(t){this.gotoYear(t.target.value)}},{key:"gotoMonth",value:function(t){isNaN(t)||(this.calendars[0].month=parseInt(t,10),this.adjustCalendars())}},{key:"gotoYear",value:function(t){isNaN(t)||(this.calendars[0].year=parseInt(t,10),this.adjustCalendars())}},{key:"_handleInputChange",value:function(t){var e=void 0;t.firedBy!==this&&(e=this.options.parse?this.options.parse(this.el.value,this.options.format):new Date(Date.parse(this.el.value)),B._isDate(e)&&this.setDate(e))}},{key:"renderDayName",value:function(t,e,i){for(e+=t.firstDay;7<=e;)e-=7;return i?t.i18n.weekdaysAbbrev[e]:t.i18n.weekdays[e]}},{key:"_finishSelection",value:function(){this.setInputValue(),this.close()}},{key:"open",value:function(){if(!this.isOpen)return this.isOpen=!0,"function"==typeof this.options.onOpen&&this.options.onOpen.call(this),this.draw(),this.modal.open(),this}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,"function"==typeof this.options.onClose&&this.options.onClose.call(this),this.modal.close(),this}}],[{key:"init",value:function(t,e){return _get(B.__proto__||Object.getPrototypeOf(B),"init",this).call(this,this,t,e)}},{key:"_isDate",value:function(t){return/Date/.test(Object.prototype.toString.call(t))&&!isNaN(t.getTime())}},{key:"_isWeekend",value:function(t){var e=t.getDay();return 0===e||6===e}},{key:"_setToStartOfDay",value:function(t){B._isDate(t)&&t.setHours(0,0,0,0)}},{key:"_getDaysInMonth",value:function(t,e){return[31,B._isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]}},{key:"_isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"_compareDates",value:function(t,e){return t.getTime()===e.getTime()}},{key:"_setToStartOfDay",value:function(t){B._isDate(t)&&t.setHours(0,0,0,0)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Datepicker}},{key:"defaults",get:function(){return e}}]),B}();t._template=['<div class= "modal datepicker-modal">','<div class="modal-content datepicker-container">','<div class="datepicker-date-display">','<span class="year-text"></span>','<span class="date-text"></span>',"</div>",'<div class="datepicker-calendar-container">','<div class="datepicker-calendar"></div>','<div class="datepicker-footer">','<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>','<div class="confirmation-btns">','<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>','<button class="btn-flat datepicker-done waves-effect" type="button"></button>',"</div>","</div>","</div>","</div>","</div>"].join(""),M.Datepicker=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"datepicker","M_Datepicker")}(cash),function(h){"use strict";var e={dialRadius:135,outerRadius:105,innerRadius:70,tickRadius:20,duration:350,container:null,defaultTime:"now",fromNow:0,showClearBtn:!1,i18n:{cancel:"Cancel",clear:"Clear",done:"Ok"},autoClose:!1,twelveHour:!0,vibrate:!0,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,onSelect:null},t=function(t){function f(t,e){_classCallCheck(this,f);var i=_possibleConstructorReturn(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,f,t,e));return(i.el.M_Timepicker=i).options=h.extend({},f.defaults,e),i.id=M.guid(),i._insertHTMLIntoDOM(),i._setupModal(),i._setupVariables(),i._setupEventHandlers(),i._clockSetup(),i._pickerSetup(),i}return _inherits(f,Component),_createClass(f,[{key:"destroy",value:function(){this._removeEventHandlers(),this.modal.destroy(),h(this.modalEl).remove(),this.el.M_Timepicker=void 0}},{key:"_setupEventHandlers",value:function(){this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleClockClickStartBound=this._handleClockClickStart.bind(this),this._handleDocumentClickMoveBound=this._handleDocumentClickMove.bind(this),this._handleDocumentClickEndBound=this._handleDocumentClickEnd.bind(this),this.el.addEventListener("click",this._handleInputClickBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.plate.addEventListener("mousedown",this._handleClockClickStartBound),this.plate.addEventListener("touchstart",this._handleClockClickStartBound),h(this.spanHours).on("click",this.showView.bind(this,"hours")),h(this.spanMinutes).on("click",this.showView.bind(this,"minutes"))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleInputClickBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound)}},{key:"_handleInputClick",value:function(){this.open()}},{key:"_handleInputKeydown",value:function(t){t.which===M.keys.ENTER&&(t.preventDefault(),this.open())}},{key:"_handleClockClickStart",value:function(t){t.preventDefault();var e=this.plate.getBoundingClientRect(),i=e.left,n=e.top;this.x0=i+this.options.dialRadius,this.y0=n+this.options.dialRadius,this.moved=!1;var s=f._Pos(t);this.dx=s.x-this.x0,this.dy=s.y-this.y0,this.setHand(this.dx,this.dy,!1),document.addEventListener("mousemove",this._handleDocumentClickMoveBound),document.addEventListener("touchmove",this._handleDocumentClickMoveBound),document.addEventListener("mouseup",this._handleDocumentClickEndBound),document.addEventListener("touchend",this._handleDocumentClickEndBound)}},{key:"_handleDocumentClickMove",value:function(t){t.preventDefault();var e=f._Pos(t),i=e.x-this.x0,n=e.y-this.y0;this.moved=!0,this.setHand(i,n,!1,!0)}},{key:"_handleDocumentClickEnd",value:function(t){var e=this;t.preventDefault(),document.removeEventListener("mouseup",this._handleDocumentClickEndBound),document.removeEventListener("touchend",this._handleDocumentClickEndBound);var i=f._Pos(t),n=i.x-this.x0,s=i.y-this.y0;this.moved&&n===this.dx&&s===this.dy&&this.setHand(n,s),"hours"===this.currentView?this.showView("minutes",this.options.duration/2):this.options.autoClose&&(h(this.minutesView).addClass("timepicker-dial-out"),setTimeout(function(){e.done()},this.options.duration/2)),"function"==typeof this.options.onSelect&&this.options.onSelect.call(this,this.hours,this.minutes),document.removeEventListener("mousemove",this._handleDocumentClickMoveBound),document.removeEventListener("touchmove",this._handleDocumentClickMoveBound)}},{key:"_insertHTMLIntoDOM",value:function(){this.$modalEl=h(f._template),this.modalEl=this.$modalEl[0],this.modalEl.id="modal-"+this.id;var t=document.querySelector(this.options.container);this.options.container&&t?this.$modalEl.appendTo(t):this.$modalEl.insertBefore(this.el)}},{key:"_setupModal",value:function(){var t=this;this.modal=M.Modal.init(this.modalEl,{onOpenStart:this.options.onOpenStart,onOpenEnd:this.options.onOpenEnd,onCloseStart:this.options.onCloseStart,onCloseEnd:function(){"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t),t.isOpen=!1}})}},{key:"_setupVariables",value:function(){this.currentView="hours",this.vibrate=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,this._canvas=this.modalEl.querySelector(".timepicker-canvas"),this.plate=this.modalEl.querySelector(".timepicker-plate"),this.hoursView=this.modalEl.querySelector(".timepicker-hours"),this.minutesView=this.modalEl.querySelector(".timepicker-minutes"),this.spanHours=this.modalEl.querySelector(".timepicker-span-hours"),this.spanMinutes=this.modalEl.querySelector(".timepicker-span-minutes"),this.spanAmPm=this.modalEl.querySelector(".timepicker-span-am-pm"),this.footer=this.modalEl.querySelector(".timepicker-footer"),this.amOrPm="PM"}},{key:"_pickerSetup",value:function(){var t=h('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.clear+"</button>").appendTo(this.footer).on("click",this.clear.bind(this));this.options.showClearBtn&&t.css({visibility:""});var e=h('<div class="confirmation-btns"></div>');h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.cancel+"</button>").appendTo(e).on("click",this.close.bind(this)),h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.done+"</button>").appendTo(e).on("click",this.done.bind(this)),e.appendTo(this.footer)}},{key:"_clockSetup",value:function(){this.options.twelveHour&&(this.$amBtn=h('<div class="am-btn">AM</div>'),this.$pmBtn=h('<div class="pm-btn">PM</div>'),this.$amBtn.on("click",this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),this.$pmBtn.on("click",this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),this._buildHoursView(),this._buildMinutesView(),this._buildSVGClock()}},{key:"_buildSVGClock",value:function(){var t=this.options.dialRadius,e=this.options.tickRadius,i=2*t,n=f._createSVGEl("svg");n.setAttribute("class","timepicker-svg"),n.setAttribute("width",i),n.setAttribute("height",i);var s=f._createSVGEl("g");s.setAttribute("transform","translate("+t+","+t+")");var o=f._createSVGEl("circle");o.setAttribute("class","timepicker-canvas-bearing"),o.setAttribute("cx",0),o.setAttribute("cy",0),o.setAttribute("r",4);var a=f._createSVGEl("line");a.setAttribute("x1",0),a.setAttribute("y1",0);var r=f._createSVGEl("circle");r.setAttribute("class","timepicker-canvas-bg"),r.setAttribute("r",e),s.appendChild(a),s.appendChild(r),s.appendChild(o),n.appendChild(s),this._canvas.appendChild(n),this.hand=a,this.bg=r,this.bearing=o,this.g=s}},{key:"_buildHoursView",value:function(){var t=h('<div class="timepicker-tick"></div>');if(this.options.twelveHour)for(var e=1;e<13;e+=1){var i=t.clone(),n=e/6*Math.PI,s=this.options.outerRadius;i.css({left:this.options.dialRadius+Math.sin(n)*s-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(n)*s-this.options.tickRadius+"px"}),i.html(0===e?"00":e),this.hoursView.appendChild(i[0])}else for(var o=0;o<24;o+=1){var a=t.clone(),r=o/6*Math.PI,l=0<o&&o<13?this.options.innerRadius:this.options.outerRadius;a.css({left:this.options.dialRadius+Math.sin(r)*l-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(r)*l-this.options.tickRadius+"px"}),a.html(0===o?"00":o),this.hoursView.appendChild(a[0])}}},{key:"_buildMinutesView",value:function(){for(var t=h('<div class="timepicker-tick"></div>'),e=0;e<60;e+=5){var i=t.clone(),n=e/30*Math.PI;i.css({left:this.options.dialRadius+Math.sin(n)*this.options.outerRadius-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(n)*this.options.outerRadius-this.options.tickRadius+"px"}),i.html(f._addLeadingZero(e)),this.minutesView.appendChild(i[0])}}},{key:"_handleAmPmClick",value:function(t){var e=h(t.target);this.amOrPm=e.hasClass("am-btn")?"AM":"PM",this._updateAmPmView()}},{key:"_updateAmPmView",value:function(){this.options.twelveHour&&(this.$amBtn.toggleClass("text-primary","AM"===this.amOrPm),this.$pmBtn.toggleClass("text-primary","PM"===this.amOrPm))}},{key:"_updateTimeFromInput",value:function(){var t=((this.el.value||this.options.defaultTime||"")+"").split(":");if(this.options.twelveHour&&void 0!==t[1]&&(0<t[1].toUpperCase().indexOf("AM")?this.amOrPm="AM":this.amOrPm="PM",t[1]=t[1].replace("AM","").replace("PM","")),"now"===t[0]){var e=new Date(+new Date+this.options.fromNow);t=[e.getHours(),e.getMinutes()],this.options.twelveHour&&(this.amOrPm=12<=t[0]&&t[0]<24?"PM":"AM")}this.hours=+t[0]||0,this.minutes=+t[1]||0,this.spanHours.innerHTML=this.hours,this.spanMinutes.innerHTML=f._addLeadingZero(this.minutes),this._updateAmPmView()}},{key:"showView",value:function(t,e){"minutes"===t&&h(this.hoursView).css("visibility");var i="hours"===t,n=i?this.hoursView:this.minutesView,s=i?this.minutesView:this.hoursView;this.currentView=t,h(this.spanHours).toggleClass("text-primary",i),h(this.spanMinutes).toggleClass("text-primary",!i),s.classList.add("timepicker-dial-out"),h(n).css("visibility","visible").removeClass("timepicker-dial-out"),this.resetClock(e),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){h(s).css("visibility","hidden")},this.options.duration)}},{key:"resetClock",value:function(t){var e=this.currentView,i=this[e],n="hours"===e,s=i*(Math.PI/(n?6:30)),o=n&&0<i&&i<13?this.options.innerRadius:this.options.outerRadius,a=Math.sin(s)*o,r=-Math.cos(s)*o,l=this;t?(h(this.canvas).addClass("timepicker-canvas-out"),setTimeout(function(){h(l.canvas).removeClass("timepicker-canvas-out"),l.setHand(a,r)},t)):this.setHand(a,r)}},{key:"setHand",value:function(t,e,i){var n=this,s=Math.atan2(t,-e),o="hours"===this.currentView,a=Math.PI/(o||i?6:30),r=Math.sqrt(t*t+e*e),l=o&&r<(this.options.outerRadius+this.options.innerRadius)/2,h=l?this.options.innerRadius:this.options.outerRadius;this.options.twelveHour&&(h=this.options.outerRadius),s<0&&(s=2*Math.PI+s);var d=Math.round(s/a);s=d*a,this.options.twelveHour?o?0===d&&(d=12):(i&&(d*=5),60===d&&(d=0)):o?(12===d&&(d=0),d=l?0===d?12:d:0===d?0:d+12):(i&&(d*=5),60===d&&(d=0)),this[this.currentView]!==d&&this.vibrate&&this.options.vibrate&&(this.vibrateTimer||(navigator[this.vibrate](10),this.vibrateTimer=setTimeout(function(){n.vibrateTimer=null},100))),this[this.currentView]=d,o?this.spanHours.innerHTML=d:this.spanMinutes.innerHTML=f._addLeadingZero(d);var u=Math.sin(s)*(h-this.options.tickRadius),c=-Math.cos(s)*(h-this.options.tickRadius),p=Math.sin(s)*h,v=-Math.cos(s)*h;this.hand.setAttribute("x2",u),this.hand.setAttribute("y2",c),this.bg.setAttribute("cx",p),this.bg.setAttribute("cy",v)}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,this._updateTimeFromInput(),this.showView("hours"),this.modal.open())}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,this.modal.close())}},{key:"done",value:function(t,e){var i=this.el.value,n=e?"":f._addLeadingZero(this.hours)+":"+f._addLeadingZero(this.minutes);this.time=n,!e&&this.options.twelveHour&&(n=n+" "+this.amOrPm),(this.el.value=n)!==i&&this.$el.trigger("change"),this.close(),this.el.focus()}},{key:"clear",value:function(){this.done(null,!0)}}],[{key:"init",value:function(t,e){return _get(f.__proto__||Object.getPrototypeOf(f),"init",this).call(this,this,t,e)}},{key:"_addLeadingZero",value:function(t){return(t<10?"0":"")+t}},{key:"_createSVGEl",value:function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}},{key:"_Pos",value:function(t){return t.targetTouches&&1<=t.targetTouches.length?{x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY}:{x:t.clientX,y:t.clientY}}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Timepicker}},{key:"defaults",get:function(){return e}}]),f}();t._template=['<div class= "modal timepicker-modal">','<div class="modal-content timepicker-container">','<div class="timepicker-digital-display">','<div class="timepicker-text-container">','<div class="timepicker-display-column">','<span class="timepicker-span-hours text-primary"></span>',":",'<span class="timepicker-span-minutes"></span>',"</div>",'<div class="timepicker-display-column timepicker-display-am-pm">','<div class="timepicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="timepicker-analog-display">','<div class="timepicker-plate">','<div class="timepicker-canvas"></div>','<div class="timepicker-dial timepicker-hours"></div>','<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>',"</div>",'<div class="timepicker-footer"></div>',"</div>","</div>","</div>"].join(""),M.Timepicker=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"timepicker","M_Timepicker")}(cash),function(s){"use strict";var e={},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_CharacterCounter=i).options=s.extend({},n.defaults,e),i.isInvalid=!1,i.isValidLength=!1,i._setupCounter(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.CharacterCounter=void 0,this._removeCounter()}},{key:"_setupEventHandlers",value:function(){this._handleUpdateCounterBound=this.updateCounter.bind(this),this.el.addEventListener("focus",this._handleUpdateCounterBound,!0),this.el.addEventListener("input",this._handleUpdateCounterBound,!0)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("focus",this._handleUpdateCounterBound,!0),this.el.removeEventListener("input",this._handleUpdateCounterBound,!0)}},{key:"_setupCounter",value:function(){this.counterEl=document.createElement("span"),s(this.counterEl).addClass("character-counter").css({float:"right","font-size":"12px",height:1}),this.$el.parent().append(this.counterEl)}},{key:"_removeCounter",value:function(){s(this.counterEl).remove()}},{key:"updateCounter",value:function(){var t=+this.$el.attr("data-length"),e=this.el.value.length;this.isValidLength=e<=t;var i=e;t&&(i+="/"+t,this._validateInput()),s(this.counterEl).html(i)}},{key:"_validateInput",value:function(){this.isValidLength&&this.isInvalid?(this.isInvalid=!1,this.$el.removeClass("invalid")):this.isValidLength||this.isInvalid||(this.isInvalid=!0,this.$el.removeClass("valid"),this.$el.addClass("invalid"))}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_CharacterCounter}},{key:"defaults",get:function(){return e}}]),n}();M.CharacterCounter=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"characterCounter","M_CharacterCounter")}(cash),function(b){"use strict";var e={duration:200,dist:-100,shift:0,padding:0,numVisible:5,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null},t=function(t){function i(t,e){_classCallCheck(this,i);var n=_possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,e));return(n.el.M_Carousel=n).options=b.extend({},i.defaults,e),n.hasMultipleSlides=1<n.$el.find(".carousel-item").length,n.showIndicators=n.options.indicators&&n.hasMultipleSlides,n.noWrap=n.options.noWrap||!n.hasMultipleSlides,n.pressed=!1,n.dragged=!1,n.offset=n.target=0,n.images=[],n.itemWidth=n.$el.find(".carousel-item").first().innerWidth(),n.itemHeight=n.$el.find(".carousel-item").first().innerHeight(),n.dim=2*n.itemWidth+n.options.padding||1,n._autoScrollBound=n._autoScroll.bind(n),n._trackBound=n._track.bind(n),n.options.fullWidth&&(n.options.dist=0,n._setCarouselHeight(),n.showIndicators&&n.$el.find(".carousel-fixed-item").addClass("with-indicators")),n.$indicators=b('<ul class="indicators"></ul>'),n.$el.find(".carousel-item").each(function(t,e){if(n.images.push(t),n.showIndicators){var i=b('<li class="indicator-item"></li>');0===e&&i[0].classList.add("active"),n.$indicators.append(i)}}),n.showIndicators&&n.$el.append(n.$indicators),n.count=n.images.length,n.options.numVisible=Math.min(n.count,n.options.numVisible),n.xform="transform",["webkit","Moz","O","ms"].every(function(t){var e=t+"Transform";return void 0===document.body.style[e]||(n.xform=e,!1)}),n._setupEventHandlers(),n._scroll(n.offset),n}return _inherits(i,Component),_createClass(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Carousel=void 0}},{key:"_setupEventHandlers",value:function(){var i=this;this._handleCarouselTapBound=this._handleCarouselTap.bind(this),this._handleCarouselDragBound=this._handleCarouselDrag.bind(this),this._handleCarouselReleaseBound=this._handleCarouselRelease.bind(this),this._handleCarouselClickBound=this._handleCarouselClick.bind(this),void 0!==window.ontouchstart&&(this.el.addEventListener("touchstart",this._handleCarouselTapBound),this.el.addEventListener("touchmove",this._handleCarouselDragBound),this.el.addEventListener("touchend",this._handleCarouselReleaseBound)),this.el.addEventListener("mousedown",this._handleCarouselTapBound),this.el.addEventListener("mousemove",this._handleCarouselDragBound),this.el.addEventListener("mouseup",this._handleCarouselReleaseBound),this.el.addEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.addEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&(this._handleIndicatorClickBound=this._handleIndicatorClick.bind(this),this.$indicators.find(".indicator-item").each(function(t,e){t.addEventListener("click",i._handleIndicatorClickBound)}));var t=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=t.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}},{key:"_removeEventHandlers",value:function(){var i=this;void 0!==window.ontouchstart&&(this.el.removeEventListener("touchstart",this._handleCarouselTapBound),this.el.removeEventListener("touchmove",this._handleCarouselDragBound),this.el.removeEventListener("touchend",this._handleCarouselReleaseBound)),this.el.removeEventListener("mousedown",this._handleCarouselTapBound),this.el.removeEventListener("mousemove",this._handleCarouselDragBound),this.el.removeEventListener("mouseup",this._handleCarouselReleaseBound),this.el.removeEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.removeEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&this.$indicators.find(".indicator-item").each(function(t,e){t.removeEventListener("click",i._handleIndicatorClickBound)}),window.removeEventListener("resize",this._handleThrottledResizeBound)}},{key:"_handleCarouselTap",value:function(t){"mousedown"===t.type&&b(t.target).is("img")&&t.preventDefault(),this.pressed=!0,this.dragged=!1,this.verticalDragged=!1,this.reference=this._xpos(t),this.referenceY=this._ypos(t),this.velocity=this.amplitude=0,this.frame=this.offset,this.timestamp=Date.now(),clearInterval(this.ticker),this.ticker=setInterval(this._trackBound,100)}},{key:"_handleCarouselDrag",value:function(t){var e=void 0,i=void 0,n=void 0;if(this.pressed)if(e=this._xpos(t),i=this._ypos(t),n=this.reference-e,Math.abs(this.referenceY-i)<30&&!this.verticalDragged)(2<n||n<-2)&&(this.dragged=!0,this.reference=e,this._scroll(this.offset+n));else{if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1;this.verticalDragged=!0}if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1}},{key:"_handleCarouselRelease",value:function(t){if(this.pressed)return this.pressed=!1,clearInterval(this.ticker),this.target=this.offset,(10<this.velocity||this.velocity<-10)&&(this.amplitude=.9*this.velocity,this.target=this.offset+this.amplitude),this.target=Math.round(this.target/this.dim)*this.dim,this.noWrap&&(this.target>=this.dim*(this.count-1)?this.target=this.dim*(this.count-1):this.target<0&&(this.target=0)),this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound),this.dragged&&(t.preventDefault(),t.stopPropagation()),!1}},{key:"_handleCarouselClick",value:function(t){if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1;if(!this.options.fullWidth){var e=b(t.target).closest(".carousel-item").index();0!==this._wrap(this.center)-e&&(t.preventDefault(),t.stopPropagation()),this._cycleTo(e)}}},{key:"_handleIndicatorClick",value:function(t){t.stopPropagation();var e=b(t.target).closest(".indicator-item");e.length&&this._cycleTo(e.index())}},{key:"_handleResize",value:function(t){this.options.fullWidth?(this.itemWidth=this.$el.find(".carousel-item").first().innerWidth(),this.imageHeight=this.$el.find(".carousel-item.active").height(),this.dim=2*this.itemWidth+this.options.padding,this.offset=2*this.center*this.itemWidth,this.target=this.offset,this._setCarouselHeight(!0)):this._scroll()}},{key:"_setCarouselHeight",value:function(t){var i=this,e=this.$el.find(".carousel-item.active").length?this.$el.find(".carousel-item.active").first():this.$el.find(".carousel-item").first(),n=e.find("img").first();if(n.length)if(n[0].complete){var s=n.height();if(0<s)this.$el.css("height",s+"px");else{var o=n[0].naturalWidth,a=n[0].naturalHeight,r=this.$el.width()/o*a;this.$el.css("height",r+"px")}}else n.one("load",function(t,e){i.$el.css("height",t.offsetHeight+"px")});else if(!t){var l=e.height();this.$el.css("height",l+"px")}}},{key:"_xpos",value:function(t){return t.targetTouches&&1<=t.targetTouches.length?t.targetTouches[0].clientX:t.clientX}},{key:"_ypos",value:function(t){return t.targetTouches&&1<=t.targetTouches.length?t.targetTouches[0].clientY:t.clientY}},{key:"_wrap",value:function(t){return t>=this.count?t%this.count:t<0?this._wrap(this.count+t%this.count):t}},{key:"_track",value:function(){var t,e,i,n;e=(t=Date.now())-this.timestamp,this.timestamp=t,i=this.offset-this.frame,this.frame=this.offset,n=1e3*i/(1+e),this.velocity=.8*n+.2*this.velocity}},{key:"_autoScroll",value:function(){var t=void 0,e=void 0;this.amplitude&&(t=Date.now()-this.timestamp,2<(e=this.amplitude*Math.exp(-t/this.options.duration))||e<-2?(this._scroll(this.target-e),requestAnimationFrame(this._autoScrollBound)):this._scroll(this.target))}},{key:"_scroll",value:function(t){var e=this;this.$el.hasClass("scrolling")||this.el.classList.add("scrolling"),null!=this.scrollingTimeout&&window.clearTimeout(this.scrollingTimeout),this.scrollingTimeout=window.setTimeout(function(){e.$el.removeClass("scrolling")},this.options.duration);var i,n,s,o,a=void 0,r=void 0,l=void 0,h=void 0,d=void 0,u=void 0,c=this.center,p=1/this.options.numVisible;if(this.offset="number"==typeof t?t:this.offset,this.center=Math.floor((this.offset+this.dim/2)/this.dim),o=-(s=(n=this.offset-this.center*this.dim)<0?1:-1)*n*2/this.dim,i=this.count>>1,this.options.fullWidth?(l="translateX(0)",u=1):(l="translateX("+(this.el.clientWidth-this.itemWidth)/2+"px) ",l+="translateY("+(this.el.clientHeight-this.itemHeight)/2+"px)",u=1-p*o),this.showIndicators){var v=this.center%this.count,f=this.$indicators.find(".indicator-item.active");f.index()!==v&&(f.removeClass("active"),this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"))}if(!this.noWrap||0<=this.center&&this.center<this.count){r=this.images[this._wrap(this.center)],b(r).hasClass("active")||(this.$el.find(".carousel-item").removeClass("active"),r.classList.add("active"));var m=l+" translateX("+-n/2+"px) translateX("+s*this.options.shift*o*a+"px) translateZ("+this.options.dist*o+"px)";this._updateItemStyle(r,u,0,m)}for(a=1;a<=i;++a){if(this.options.fullWidth?(h=this.options.dist,d=a===i&&n<0?1-o:1):(h=this.options.dist*(2*a+o*s),d=1-p*(2*a+o*s)),!this.noWrap||this.center+a<this.count){r=this.images[this._wrap(this.center+a)];var g=l+" translateX("+(this.options.shift+(this.dim*a-n)/2)+"px) translateZ("+h+"px)";this._updateItemStyle(r,d,-a,g)}if(this.options.fullWidth?(h=this.options.dist,d=a===i&&0<n?1-o:1):(h=this.options.dist*(2*a-o*s),d=1-p*(2*a-o*s)),!this.noWrap||0<=this.center-a){r=this.images[this._wrap(this.center-a)];var _=l+" translateX("+(-this.options.shift+(-this.dim*a-n)/2)+"px) translateZ("+h+"px)";this._updateItemStyle(r,d,-a,_)}}if(!this.noWrap||0<=this.center&&this.center<this.count){r=this.images[this._wrap(this.center)];var y=l+" translateX("+-n/2+"px) translateX("+s*this.options.shift*o+"px) translateZ("+this.options.dist*o+"px)";this._updateItemStyle(r,u,0,y)}var k=this.$el.find(".carousel-item").eq(this._wrap(this.center));c!==this.center&&"function"==typeof this.options.onCycleTo&&this.options.onCycleTo.call(this,k[0],this.dragged),"function"==typeof this.oneTimeCallback&&(this.oneTimeCallback.call(this,k[0],this.dragged),this.oneTimeCallback=null)}},{key:"_updateItemStyle",value:function(t,e,i,n){t.style[this.xform]=n,t.style.zIndex=i,t.style.opacity=e,t.style.visibility="visible"}},{key:"_cycleTo",value:function(t,e){var i=this.center%this.count-t;this.noWrap||(i<0?Math.abs(i+this.count)<Math.abs(i)&&(i+=this.count):0<i&&Math.abs(i-this.count)<i&&(i-=this.count)),this.target=this.dim*Math.round(this.offset/this.dim),i<0?this.target+=this.dim*Math.abs(i):0<i&&(this.target-=this.dim*i),"function"==typeof e&&(this.oneTimeCallback=e),this.offset!==this.target&&(this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound))}},{key:"next",value:function(t){(void 0===t||isNaN(t))&&(t=1);var e=this.center+t;if(e>=this.count||e<0){if(this.noWrap)return;e=this._wrap(e)}this._cycleTo(e)}},{key:"prev",value:function(t){(void 0===t||isNaN(t))&&(t=1);var e=this.center-t;if(e>=this.count||e<0){if(this.noWrap)return;e=this._wrap(e)}this._cycleTo(e)}},{key:"set",value:function(t,e){if((void 0===t||isNaN(t))&&(t=0),t>this.count||t<0){if(this.noWrap)return;t=this._wrap(t)}this._cycleTo(t,e)}}],[{key:"init",value:function(t,e){return _get(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Carousel}},{key:"defaults",get:function(){return e}}]),i}();M.Carousel=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"carousel","M_Carousel")}(cash),function(S){"use strict";var e={onOpen:void 0,onClose:void 0},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_TapTarget=i).options=S.extend({},n.defaults,e),i.isOpen=!1,i.$origin=S("#"+i.$el.attr("data-target")),i._setup(),i._calculatePositioning(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.TapTarget=void 0}},{key:"_setupEventHandlers",value:function(){this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleTargetClickBound=this._handleTargetClick.bind(this),this._handleOriginClickBound=this._handleOriginClick.bind(this),this.el.addEventListener("click",this._handleTargetClickBound),this.originEl.addEventListener("click",this._handleOriginClickBound);var t=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=t.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleTargetClickBound),this.originEl.removeEventListener("click",this._handleOriginClickBound),window.removeEventListener("resize",this._handleThrottledResizeBound)}},{key:"_handleTargetClick",value:function(t){this.open()}},{key:"_handleOriginClick",value:function(t){this.close()}},{key:"_handleResize",value:function(t){this._calculatePositioning()}},{key:"_handleDocumentClick",value:function(t){S(t.target).closest(".tap-target-wrapper").length||(this.close(),t.preventDefault(),t.stopPropagation())}},{key:"_setup",value:function(){this.wrapper=this.$el.parent()[0],this.waveEl=S(this.wrapper).find(".tap-target-wave")[0],this.originEl=S(this.wrapper).find(".tap-target-origin")[0],this.contentEl=this.$el.find(".tap-target-content")[0],S(this.wrapper).hasClass(".tap-target-wrapper")||(this.wrapper=document.createElement("div"),this.wrapper.classList.add("tap-target-wrapper"),this.$el.before(S(this.wrapper)),this.wrapper.append(this.el)),this.contentEl||(this.contentEl=document.createElement("div"),this.contentEl.classList.add("tap-target-content"),this.$el.append(this.contentEl)),this.waveEl||(this.waveEl=document.createElement("div"),this.waveEl.classList.add("tap-target-wave"),this.originEl||(this.originEl=this.$origin.clone(!0,!0),this.originEl.addClass("tap-target-origin"),this.originEl.removeAttr("id"),this.originEl.removeAttr("style"),this.originEl=this.originEl[0],this.waveEl.append(this.originEl)),this.wrapper.append(this.waveEl))}},{key:"_calculatePositioning",value:function(){var t="fixed"===this.$origin.css("position");if(!t)for(var e=this.$origin.parents(),i=0;i<e.length&&!(t="fixed"==S(e[i]).css("position"));i++);var n=this.$origin.outerWidth(),s=this.$origin.outerHeight(),o=t?this.$origin.offset().top-M.getDocumentScrollTop():this.$origin.offset().top,a=t?this.$origin.offset().left-M.getDocumentScrollLeft():this.$origin.offset().left,r=window.innerWidth,l=window.innerHeight,h=r/2,d=l/2,u=a<=h,c=h<a,p=o<=d,v=d<o,f=.25*r<=a&&a<=.75*r,m=this.$el.outerWidth(),g=this.$el.outerHeight(),_=o+s/2-g/2,y=a+n/2-m/2,k=t?"fixed":"absolute",b=f?m:m/2+n,w=g/2,C=p?g/2:0,E=u&&!f?m/2-n:0,O=n,x=v?"bottom":"top",L=2*n,T=L,$=g/2-T/2,B=m/2-L/2,D={};D.top=p?_+"px":"",D.right=c?r-y-m+"px":"",D.bottom=v?l-_-g+"px":"",D.left=u?y+"px":"",D.position=k,S(this.wrapper).css(D),S(this.contentEl).css({width:b+"px",height:w+"px",top:C+"px",right:"0px",bottom:"0px",left:E+"px",padding:O+"px",verticalAlign:x}),S(this.waveEl).css({top:$+"px",left:B+"px",width:L+"px",height:T+"px"})}},{key:"open",value:function(){this.isOpen||("function"==typeof this.options.onOpen&&this.options.onOpen.call(this,this.$origin[0]),this.isOpen=!0,this.wrapper.classList.add("open"),document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound))}},{key:"close",value:function(){this.isOpen&&("function"==typeof this.options.onClose&&this.options.onClose.call(this,this.$origin[0]),this.isOpen=!1,this.wrapper.classList.remove("open"),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound))}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_TapTarget}},{key:"defaults",get:function(){return e}}]),n}();M.TapTarget=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"tapTarget","M_TapTarget")}(cash),function(d){"use strict";var e={classes:"",dropdownOptions:{}},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return i.$el.hasClass("browser-default")?_possibleConstructorReturn(i):((i.el.M_FormSelect=i).options=d.extend({},n.defaults,e),i.isMultiple=i.$el.prop("multiple"),i.el.tabIndex=-1,i._keysSelected={},i._valueDict={},i._setupDropdown(),i._setupEventHandlers(),i)}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeDropdown(),this.el.M_FormSelect=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleSelectChangeBound=this._handleSelectChange.bind(this),this._handleOptionClickBound=this._handleOptionClick.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t){t.addEventListener("click",e._handleOptionClickBound)}),this.el.addEventListener("change",this._handleSelectChangeBound),this.input.addEventListener("click",this._handleInputClickBound)}},{key:"_removeEventHandlers",value:function(){var e=this;d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t){t.removeEventListener("click",e._handleOptionClickBound)}),this.el.removeEventListener("change",this._handleSelectChangeBound),this.input.removeEventListener("click",this._handleInputClickBound)}},{key:"_handleSelectChange",value:function(t){this._setValueToInput()}},{key:"_handleOptionClick",value:function(t){t.preventDefault();var e=d(t.target).closest("li")[0],i=e.id;if(!d(e).hasClass("disabled")&&!d(e).hasClass("optgroup")&&i.length){var n=!0;if(this.isMultiple){var s=d(this.dropdownOptions).find("li.disabled.selected");s.length&&(s.removeClass("selected"),s.find('input[type="checkbox"]').prop("checked",!1),this._toggleEntryFromArray(s[0].id)),n=this._toggleEntryFromArray(i)}else d(this.dropdownOptions).find("li").removeClass("selected"),d(e).toggleClass("selected",n);d(this._valueDict[i].el).prop("selected")!==n&&(d(this._valueDict[i].el).prop("selected",n),this.$el.trigger("change"))}t.stopPropagation()}},{key:"_handleInputClick",value:function(){this.dropdown&&this.dropdown.isOpen&&(this._setValueToInput(),this._setSelectedStates())}},{key:"_setupDropdown",value:function(){var n=this;this.wrapper=document.createElement("div"),d(this.wrapper).addClass("select-wrapper "+this.options.classes),this.$el.before(d(this.wrapper)),this.wrapper.appendChild(this.el),this.el.disabled&&this.wrapper.classList.add("disabled"),this.$selectOptions=this.$el.children("option, optgroup"),this.dropdownOptions=document.createElement("ul"),this.dropdownOptions.id="select-options-"+M.guid(),d(this.dropdownOptions).addClass("dropdown-content select-dropdown "+(this.isMultiple?"multiple-select-dropdown":"")),this.$selectOptions.length&&this.$selectOptions.each(function(t){if(d(t).is("option")){var e=void 0;e=n.isMultiple?n._appendOptionWithIcon(n.$el,t,"multiple"):n._appendOptionWithIcon(n.$el,t),n._addOptionToValueDict(t,e)}else if(d(t).is("optgroup")){var i=d(t).children("option");d(n.dropdownOptions).append(d('<li class="optgroup"><span>'+t.getAttribute("label")+"</span></li>")[0]),i.each(function(t){var e=n._appendOptionWithIcon(n.$el,t,"optgroup-option");n._addOptionToValueDict(t,e)})}}),this.$el.after(this.dropdownOptions),this.input=document.createElement("input"),d(this.input).addClass("select-dropdown dropdown-trigger"),this.input.setAttribute("type","text"),this.input.setAttribute("readonly","true"),this.input.setAttribute("data-target",this.dropdownOptions.id),this.el.disabled&&d(this.input).prop("disabled","true"),this.$el.before(this.input),this._setValueToInput();var t=d('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');if(this.$el.before(t[0]),!this.el.disabled){var e=d.extend({},this.options.dropdownOptions);e.onOpenEnd=function(t){var e=d(n.dropdownOptions).find(".selected").first();if(e.length&&(M.keyDown=!0,n.dropdown.focusedIndex=e.index(),n.dropdown._focusFocusedItem(),M.keyDown=!1,n.dropdown.isScrollable)){var i=e[0].getBoundingClientRect().top-n.dropdownOptions.getBoundingClientRect().top;i-=n.dropdownOptions.clientHeight/2,n.dropdownOptions.scrollTop=i}},this.isMultiple&&(e.closeOnClick=!1),this.dropdown=M.Dropdown.init(this.input,e)}this._setSelectedStates()}},{key:"_addOptionToValueDict",value:function(t,e){var i=Object.keys(this._valueDict).length,n=this.dropdownOptions.id+i,s={};e.id=n,s.el=t,s.optionEl=e,this._valueDict[n]=s}},{key:"_removeDropdown",value:function(){d(this.wrapper).find(".caret").remove(),d(this.input).remove(),d(this.dropdownOptions).remove(),d(this.wrapper).before(this.$el),d(this.wrapper).remove()}},{key:"_appendOptionWithIcon",value:function(t,e,i){var n=e.disabled?"disabled ":"",s="optgroup-option"===i?"optgroup-option ":"",o=this.isMultiple?'<label><input type="checkbox"'+n+'"/><span>'+e.innerHTML+"</span></label>":e.innerHTML,a=d("<li></li>"),r=d("<span></span>");r.html(o),a.addClass(n+" "+s),a.append(r);var l=e.getAttribute("data-icon");if(l){var h=d('<img alt="" src="'+l+'">');a.prepend(h)}return d(this.dropdownOptions).append(a[0]),a[0]}},{key:"_toggleEntryFromArray",value:function(t){var e=!this._keysSelected.hasOwnProperty(t),i=d(this._valueDict[t].optionEl);return e?this._keysSelected[t]=!0:delete this._keysSelected[t],i.toggleClass("selected",e),i.find('input[type="checkbox"]').prop("checked",e),i.prop("selected",e),e}},{key:"_setValueToInput",value:function(){var i=[];if(this.$el.find("option").each(function(t){if(d(t).prop("selected")){var e=d(t).text();i.push(e)}}),!i.length){var t=this.$el.find("option:disabled").eq(0);t.length&&""===t[0].value&&i.push(t.text())}this.input.value=i.join(", ")}},{key:"_setSelectedStates",value:function(){for(var t in this._keysSelected={},this._valueDict){var e=this._valueDict[t],i=d(e.el).prop("selected");d(e.optionEl).find('input[type="checkbox"]').prop("checked",i),i?(this._activateOption(d(this.dropdownOptions),d(e.optionEl)),this._keysSelected[t]=!0):d(e.optionEl).removeClass("selected")}}},{key:"_activateOption",value:function(t,e){e&&(this.isMultiple||t.find("li.selected").removeClass("selected"),d(e).addClass("selected"))}},{key:"getSelectedValues",value:function(){var t=[];for(var e in this._keysSelected)t.push(this._valueDict[e].el.value);return t}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_FormSelect}},{key:"defaults",get:function(){return e}}]),n}();M.FormSelect=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"formSelect","M_FormSelect")}(cash),function(s,e){"use strict";var i={},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Range=i).options=s.extend({},n.defaults,e),i._mousedown=!1,i._setupThumb(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeThumb(),this.el.M_Range=void 0}},{key:"_setupEventHandlers",value:function(){this._handleRangeChangeBound=this._handleRangeChange.bind(this),this._handleRangeMousedownTouchstartBound=this._handleRangeMousedownTouchstart.bind(this),this._handleRangeInputMousemoveTouchmoveBound=this._handleRangeInputMousemoveTouchmove.bind(this),this._handleRangeMouseupTouchendBound=this._handleRangeMouseupTouchend.bind(this),this._handleRangeBlurMouseoutTouchleaveBound=this._handleRangeBlurMouseoutTouchleave.bind(this),this.el.addEventListener("change",this._handleRangeChangeBound),this.el.addEventListener("mousedown",this._handleRangeMousedownTouchstartBound),this.el.addEventListener("touchstart",this._handleRangeMousedownTouchstartBound),this.el.addEventListener("input",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("mousemove",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("touchmove",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("mouseup",this._handleRangeMouseupTouchendBound),this.el.addEventListener("touchend",this._handleRangeMouseupTouchendBound),this.el.addEventListener("blur",this._handleRangeBlurMouseoutTouchleaveBound),this.el.addEventListener("mouseout",this._handleRangeBlurMouseoutTouchleaveBound),this.el.addEventListener("touchleave",this._handleRangeBlurMouseoutTouchleaveBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("change",this._handleRangeChangeBound),this.el.removeEventListener("mousedown",this._handleRangeMousedownTouchstartBound),this.el.removeEventListener("touchstart",this._handleRangeMousedownTouchstartBound),this.el.removeEventListener("input",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("mousemove",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("touchmove",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("mouseup",this._handleRangeMouseupTouchendBound),this.el.removeEventListener("touchend",this._handleRangeMouseupTouchendBound),this.el.removeEventListener("blur",this._handleRangeBlurMouseoutTouchleaveBound),this.el.removeEventListener("mouseout",this._handleRangeBlurMouseoutTouchleaveBound),this.el.removeEventListener("touchleave",this._handleRangeBlurMouseoutTouchleaveBound)}},{key:"_handleRangeChange",value:function(){s(this.value).html(this.$el.val()),s(this.thumb).hasClass("active")||this._showRangeBubble();var t=this._calcRangeOffset();s(this.thumb).addClass("active").css("left",t+"px")}},{key:"_handleRangeMousedownTouchstart",value:function(t){if(s(this.value).html(this.$el.val()),this._mousedown=!0,this.$el.addClass("active"),s(this.thumb).hasClass("active")||this._showRangeBubble(),"input"!==t.type){var e=this._calcRangeOffset();s(this.thumb).addClass("active").css("left",e+"px")}}},{key:"_handleRangeInputMousemoveTouchmove",value:function(){if(this._mousedown){s(this.thumb).hasClass("active")||this._showRangeBubble();var t=this._calcRangeOffset();s(this.thumb).addClass("active").css("left",t+"px"),s(this.value).html(this.$el.val())}}},{key:"_handleRangeMouseupTouchend",value:function(){this._mousedown=!1,this.$el.removeClass("active")}},{key:"_handleRangeBlurMouseoutTouchleave",value:function(){if(!this._mousedown){var t=7+parseInt(this.$el.css("padding-left"))+"px";s(this.thumb).hasClass("active")&&(e.remove(this.thumb),e({targets:this.thumb,height:0,width:0,top:10,easing:"easeOutQuad",marginLeft:t,duration:100})),s(this.thumb).removeClass("active")}}},{key:"_setupThumb",value:function(){this.thumb=document.createElement("span"),this.value=document.createElement("span"),s(this.thumb).addClass("thumb"),s(this.value).addClass("value"),s(this.thumb).append(this.value),this.$el.after(this.thumb)}},{key:"_removeThumb",value:function(){s(this.thumb).remove()}},{key:"_showRangeBubble",value:function(){var t=-7+parseInt(s(this.thumb).parent().css("padding-left"))+"px";e.remove(this.thumb),e({targets:this.thumb,height:30,width:30,top:-30,marginLeft:t,duration:300,easing:"easeOutQuint"})}},{key:"_calcRangeOffset",value:function(){var t=this.$el.width()-15,e=parseFloat(this.$el.attr("max"))||100,i=parseFloat(this.$el.attr("min"))||0;return(parseFloat(this.$el.val())-i)/(e-i)*t}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Range}},{key:"defaults",get:function(){return i}}]),n}();M.Range=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"range","M_Range"),t.init(s("input[type=range]"))}(cash,M.anime);(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global.CodeMirror=factory());}(this,(function(){'use strict';var userAgent=navigator.userAgent
var platform=navigator.platform
var gecko=/gecko\/\d/i.test(userAgent)
var ie_upto10=/MSIE \d/.test(userAgent)
var ie_11up=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
var edge=/Edge\/(\d+)/.exec(userAgent)
var ie=ie_upto10||ie_11up||edge
var ie_version=ie&&(ie_upto10?document.documentMode||6:+(edge||ie_11up)[1])
var webkit=!edge&&/WebKit\//.test(userAgent)
var qtwebkit=webkit&&/Qt\/\d+\.\d+/.test(userAgent)
var chrome=!edge&&/Chrome\//.test(userAgent)
var presto=/Opera\//.test(userAgent)
var safari=/Apple Computer/.test(navigator.vendor)
var mac_geMountainLion=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
var phantom=/PhantomJS/.test(userAgent)
var ios=!edge&&/AppleWebKit/.test(userAgent)&&/Mobile\/\w+/.test(userAgent)
var android=/Android/.test(userAgent)
var mobile=ios||android||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
var mac=ios||/Mac/.test(platform)
var chromeOS=/\bCrOS\b/.test(userAgent)
var windows=/win/i.test(platform)
var presto_version=presto&&userAgent.match(/Version\/(\d*\.\d*)/)
if(presto_version){presto_version=Number(presto_version[1])}
if(presto_version&&presto_version>=15){presto=false;webkit=true}
var flipCtrlCmd=mac&&(qtwebkit||presto&&(presto_version==null||presto_version<12.11))
var captureRightClick=gecko||(ie&&ie_version>=9)
function classTest(cls){return new RegExp("(^|\\s)"+cls+"(?:$|\\s)\\s*")}
var rmClass=function(node,cls){var current=node.className
var match=classTest(cls).exec(current)
if(match){var after=current.slice(match.index+match[0].length)
node.className=current.slice(0,match.index)+(after?match[1]+after:"")}}
function removeChildren(e){for(var count=e.childNodes.length;count>0;--count)
{e.removeChild(e.firstChild)}
return e}
function removeChildrenAndAdd(parent,e){return removeChildren(parent).appendChild(e)}
function elt(tag,content,className,style){var e=document.createElement(tag)
if(className){e.className=className}
if(style){e.style.cssText=style}
if(typeof content=="string"){e.appendChild(document.createTextNode(content))}
else if(content){for(var i=0;i<content.length;++i){e.appendChild(content[i])}}
return e}
function eltP(tag,content,className,style){var e=elt(tag,content,className,style)
e.setAttribute("role","presentation")
return e}
var range
if(document.createRange){range=function(node,start,end,endNode){var r=document.createRange()
r.setEnd(endNode||node,end)
r.setStart(node,start)
return r}}
else{range=function(node,start,end){var r=document.body.createTextRange()
try{r.moveToElementText(node.parentNode)}
catch(e){return r}
r.collapse(true)
r.moveEnd("character",end)
r.moveStart("character",start)
return r}}
function contains(parent,child){if(child.nodeType==3)
{child=child.parentNode}
if(parent.contains)
{return parent.contains(child)}
do{if(child.nodeType==11){child=child.host}
if(child==parent){return true}}while(child=child.parentNode)}
function activeElt(){var activeElement
try{activeElement=document.activeElement}catch(e){activeElement=document.body||null}
while(activeElement&&activeElement.shadowRoot&&activeElement.shadowRoot.activeElement)
{activeElement=activeElement.shadowRoot.activeElement}
return activeElement}
function addClass(node,cls){var current=node.className
if(!classTest(cls).test(current)){node.className+=(current?" ":"")+cls}}
function joinClasses(a,b){var as=a.split(" ")
for(var i=0;i<as.length;i++)
{if(as[i]&&!classTest(as[i]).test(b)){b+=" "+as[i]}}
return b}
var selectInput=function(node){node.select()}
if(ios)
{selectInput=function(node){node.selectionStart=0;node.selectionEnd=node.value.length}}
else if(ie)
{selectInput=function(node){try{node.select()}catch(_e){}}}
function bind(f){var args=Array.prototype.slice.call(arguments,1)
return function(){return f.apply(null,args)}}
function copyObj(obj,target,overwrite){if(!target){target={}}
for(var prop in obj)
{if(obj.hasOwnProperty(prop)&&(overwrite!==false||!target.hasOwnProperty(prop)))
{target[prop]=obj[prop]}}
return target}
function countColumn(string,end,tabSize,startIndex,startValue){if(end==null){end=string.search(/[^\s\u00a0]/)
if(end==-1){end=string.length}}
for(var i=startIndex||0,n=startValue||0;;){var nextTab=string.indexOf("\t",i)
if(nextTab<0||nextTab>=end)
{return n+(end-i)}
n+=nextTab-i
n+=tabSize-(n%tabSize)
i=nextTab+1}}
var Delayed=function(){this.id=null};Delayed.prototype.set=function(ms,f){clearTimeout(this.id)
this.id=setTimeout(f,ms)};function indexOf(array,elt){for(var i=0;i<array.length;++i)
{if(array[i]==elt){return i}}
return-1}
var scrollerGap=30
var Pass={toString:function(){return"CodeMirror.Pass"}}
var sel_dontScroll={scroll:false};var sel_mouse={origin:"*mouse"};var sel_move={origin:"+move"};function findColumn(string,goal,tabSize){for(var pos=0,col=0;;){var nextTab=string.indexOf("\t",pos)
if(nextTab==-1){nextTab=string.length}
var skipped=nextTab-pos
if(nextTab==string.length||col+skipped>=goal)
{return pos+Math.min(skipped,goal-col)}
col+=nextTab-pos
col+=tabSize-(col%tabSize)
pos=nextTab+1
if(col>=goal){return pos}}}
var spaceStrs=[""]
function spaceStr(n){while(spaceStrs.length<=n)
{spaceStrs.push(lst(spaceStrs)+" ")}
return spaceStrs[n]}
function lst(arr){return arr[arr.length-1]}
function map(array,f){var out=[]
for(var i=0;i<array.length;i++){out[i]=f(array[i],i)}
return out}
function insertSorted(array,value,score){var pos=0,priority=score(value)
while(pos<array.length&&score(array[pos])<=priority){pos++}
array.splice(pos,0,value)}
function nothing(){}
function createObj(base,props){var inst
if(Object.create){inst=Object.create(base)}else{nothing.prototype=base
inst=new nothing()}
if(props){copyObj(props,inst)}
return inst}
var nonASCIISingleCaseWordChar=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function isWordCharBasic(ch){return /\w/.test(ch)||ch>"\x80"&&(ch.toUpperCase()!=ch.toLowerCase()||nonASCIISingleCaseWordChar.test(ch))}
function isWordChar(ch,helper){if(!helper){return isWordCharBasic(ch)}
if(helper.source.indexOf("\\w")>-1&&isWordCharBasic(ch)){return true}
return helper.test(ch)}
function isEmpty(obj){for(var n in obj){if(obj.hasOwnProperty(n)&&obj[n]){return false}}
return true}
var extendingChars=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function isExtendingChar(ch){return ch.charCodeAt(0)>=768&&extendingChars.test(ch)}
function skipExtendingChars(str,pos,dir){while((dir<0?pos>0:pos<str.length)&&isExtendingChar(str.charAt(pos))){pos+=dir}
return pos}
function findFirst(pred,from,to){var dir=from>to?-1:1
for(;;){if(from==to){return from}
var midF=(from+to)/2,mid=dir<0?Math.ceil(midF):Math.floor(midF)
if(mid==from){return pred(mid)?from:to}
if(pred(mid)){to=mid}
else{from=mid+dir}}}
function Display(place,doc,input){var d=this
this.input=input
d.scrollbarFiller=elt("div",null,"CodeMirror-scrollbar-filler")
d.scrollbarFiller.setAttribute("cm-not-content","true")
d.gutterFiller=elt("div",null,"CodeMirror-gutter-filler")
d.gutterFiller.setAttribute("cm-not-content","true")
d.lineDiv=eltP("div",null,"CodeMirror-code")
d.selectionDiv=elt("div",null,null,"position: relative; z-index: 1")
d.cursorDiv=elt("div",null,"CodeMirror-cursors")
d.measure=elt("div",null,"CodeMirror-measure")
d.lineMeasure=elt("div",null,"CodeMirror-measure")
d.lineSpace=eltP("div",[d.measure,d.lineMeasure,d.selectionDiv,d.cursorDiv,d.lineDiv],null,"position: relative; outline: none")
var lines=eltP("div",[d.lineSpace],"CodeMirror-lines")
d.mover=elt("div",[lines],null,"position: relative")
d.sizer=elt("div",[d.mover],"CodeMirror-sizer")
d.sizerWidth=null
d.heightForcer=elt("div",null,null,"position: absolute; height: "+scrollerGap+"px; width: 1px;")
d.gutters=elt("div",null,"CodeMirror-gutters")
d.lineGutter=null
d.scroller=elt("div",[d.sizer,d.heightForcer,d.gutters],"CodeMirror-scroll")
d.scroller.setAttribute("tabIndex","-1")
d.wrapper=elt("div",[d.scrollbarFiller,d.gutterFiller,d.scroller],"CodeMirror")
if(ie&&ie_version<8){d.gutters.style.zIndex=-1;d.scroller.style.paddingRight=0}
if(!webkit&&!(gecko&&mobile)){d.scroller.draggable=true}
if(place){if(place.appendChild){place.appendChild(d.wrapper)}
else{place(d.wrapper)}}
d.viewFrom=d.viewTo=doc.first
d.reportedViewFrom=d.reportedViewTo=doc.first
d.view=[]
d.renderedView=null
d.externalMeasured=null
d.viewOffset=0
d.lastWrapHeight=d.lastWrapWidth=0
d.updateLineNumbers=null
d.nativeBarWidth=d.barHeight=d.barWidth=0
d.scrollbarsClipped=false
d.lineNumWidth=d.lineNumInnerWidth=d.lineNumChars=null
d.alignWidgets=false
d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null
d.maxLine=null
d.maxLineLength=0
d.maxLineChanged=false
d.wheelDX=d.wheelDY=d.wheelStartX=d.wheelStartY=null
d.shift=false
d.selForContextMenu=null
d.activeTouch=null
input.init(d)}
function getLine(doc,n){n-=doc.first
if(n<0||n>=doc.size){throw new Error("There is no line "+(n+doc.first)+" in the document.")}
var chunk=doc
while(!chunk.lines){for(var i=0;;++i){var child=chunk.children[i],sz=child.chunkSize()
if(n<sz){chunk=child;break}
n-=sz}}
return chunk.lines[n]}
function getBetween(doc,start,end){var out=[],n=start.line
doc.iter(start.line,end.line+1,function(line){var text=line.text
if(n==end.line){text=text.slice(0,end.ch)}
if(n==start.line){text=text.slice(start.ch)}
out.push(text)
++n})
return out}
function getLines(doc,from,to){var out=[]
doc.iter(from,to,function(line){out.push(line.text)})
return out}
function updateLineHeight(line,height){var diff=height-line.height
if(diff){for(var n=line;n;n=n.parent){n.height+=diff}}}
function lineNo(line){if(line.parent==null){return null}
var cur=line.parent,no=indexOf(cur.lines,line)
for(var chunk=cur.parent;chunk;cur=chunk,chunk=chunk.parent){for(var i=0;;++i){if(chunk.children[i]==cur){break}
no+=chunk.children[i].chunkSize()}}
return no+cur.first}
function lineAtHeight(chunk,h){var n=chunk.first
outer:do{for(var i$1=0;i$1<chunk.children.length;++i$1){var child=chunk.children[i$1],ch=child.height
if(h<ch){chunk=child;continue outer}
h-=ch
n+=child.chunkSize()}
return n}while(!chunk.lines)
var i=0
for(;i<chunk.lines.length;++i){var line=chunk.lines[i],lh=line.height
if(h<lh){break}
h-=lh}
return n+i}
function isLine(doc,l){return l>=doc.first&&l<doc.first+doc.size}
function lineNumberFor(options,i){return String(options.lineNumberFormatter(i+options.firstLineNumber))}
function Pos(line,ch,sticky){if(sticky===void 0)sticky=null;if(!(this instanceof Pos)){return new Pos(line,ch,sticky)}
this.line=line
this.ch=ch
this.sticky=sticky}
function cmp(a,b){return a.line-b.line||a.ch-b.ch}
function equalCursorPos(a,b){return a.sticky==b.sticky&&cmp(a,b)==0}
function copyPos(x){return Pos(x.line,x.ch)}
function maxPos(a,b){return cmp(a,b)<0?b:a}
function minPos(a,b){return cmp(a,b)<0?a:b}
function clipLine(doc,n){return Math.max(doc.first,Math.min(n,doc.first+doc.size-1))}
function clipPos(doc,pos){if(pos.line<doc.first){return Pos(doc.first,0)}
var last=doc.first+doc.size-1
if(pos.line>last){return Pos(last,getLine(doc,last).text.length)}
return clipToLen(pos,getLine(doc,pos.line).text.length)}
function clipToLen(pos,linelen){var ch=pos.ch
if(ch==null||ch>linelen){return Pos(pos.line,linelen)}
else if(ch<0){return Pos(pos.line,0)}
else{return pos}}
function clipPosArray(doc,array){var out=[]
for(var i=0;i<array.length;i++){out[i]=clipPos(doc,array[i])}
return out}
var sawReadOnlySpans=false;var sawCollapsedSpans=false;function seeReadOnlySpans(){sawReadOnlySpans=true}
function seeCollapsedSpans(){sawCollapsedSpans=true}
function MarkedSpan(marker,from,to){this.marker=marker
this.from=from;this.to=to}
function getMarkedSpanFor(spans,marker){if(spans){for(var i=0;i<spans.length;++i){var span=spans[i]
if(span.marker==marker){return span}}}}
function removeMarkedSpan(spans,span){var r
for(var i=0;i<spans.length;++i)
{if(spans[i]!=span){(r||(r=[])).push(spans[i])}}
return r}
function addMarkedSpan(line,span){line.markedSpans=line.markedSpans?line.markedSpans.concat([span]):[span]
span.marker.attachLine(line)}
function markedSpansBefore(old,startCh,isInsert){var nw
if(old){for(var i=0;i<old.length;++i){var span=old[i],marker=span.marker
var startsBefore=span.from==null||(marker.inclusiveLeft?span.from<=startCh:span.from<startCh)
if(startsBefore||span.from==startCh&&marker.type=="bookmark"&&(!isInsert||!span.marker.insertLeft)){var endsAfter=span.to==null||(marker.inclusiveRight?span.to>=startCh:span.to>startCh);(nw||(nw=[])).push(new MarkedSpan(marker,span.from,endsAfter?null:span.to))}}}
return nw}
function markedSpansAfter(old,endCh,isInsert){var nw
if(old){for(var i=0;i<old.length;++i){var span=old[i],marker=span.marker
var endsAfter=span.to==null||(marker.inclusiveRight?span.to>=endCh:span.to>endCh)
if(endsAfter||span.from==endCh&&marker.type=="bookmark"&&(!isInsert||span.marker.insertLeft)){var startsBefore=span.from==null||(marker.inclusiveLeft?span.from<=endCh:span.from<endCh);(nw||(nw=[])).push(new MarkedSpan(marker,startsBefore?null:span.from-endCh,span.to==null?null:span.to-endCh))}}}
return nw}
function stretchSpansOverChange(doc,change){if(change.full){return null}
var oldFirst=isLine(doc,change.from.line)&&getLine(doc,change.from.line).markedSpans
var oldLast=isLine(doc,change.to.line)&&getLine(doc,change.to.line).markedSpans
if(!oldFirst&&!oldLast){return null}
var startCh=change.from.ch,endCh=change.to.ch,isInsert=cmp(change.from,change.to)==0
var first=markedSpansBefore(oldFirst,startCh,isInsert)
var last=markedSpansAfter(oldLast,endCh,isInsert)
var sameLine=change.text.length==1,offset=lst(change.text).length+(sameLine?startCh:0)
if(first){for(var i=0;i<first.length;++i){var span=first[i]
if(span.to==null){var found=getMarkedSpanFor(last,span.marker)
if(!found){span.to=startCh}
else if(sameLine){span.to=found.to==null?null:found.to+offset}}}}
if(last){for(var i$1=0;i$1<last.length;++i$1){var span$1=last[i$1]
if(span$1.to!=null){span$1.to+=offset}
if(span$1.from==null){var found$1=getMarkedSpanFor(first,span$1.marker)
if(!found$1){span$1.from=offset
if(sameLine){(first||(first=[])).push(span$1)}}}else{span$1.from+=offset
if(sameLine){(first||(first=[])).push(span$1)}}}}
if(first){first=clearEmptySpans(first)}
if(last&&last!=first){last=clearEmptySpans(last)}
var newMarkers=[first]
if(!sameLine){var gap=change.text.length-2,gapMarkers
if(gap>0&&first)
{for(var i$2=0;i$2<first.length;++i$2)
{if(first[i$2].to==null)
{(gapMarkers||(gapMarkers=[])).push(new MarkedSpan(first[i$2].marker,null,null))}}}
for(var i$3=0;i$3<gap;++i$3)
{newMarkers.push(gapMarkers)}
newMarkers.push(last)}
return newMarkers}
function clearEmptySpans(spans){for(var i=0;i<spans.length;++i){var span=spans[i]
if(span.from!=null&&span.from==span.to&&span.marker.clearWhenEmpty!==false)
{spans.splice(i--,1)}}
if(!spans.length){return null}
return spans}
function removeReadOnlyRanges(doc,from,to){var markers=null
doc.iter(from.line,to.line+1,function(line){if(line.markedSpans){for(var i=0;i<line.markedSpans.length;++i){var mark=line.markedSpans[i].marker
if(mark.readOnly&&(!markers||indexOf(markers,mark)==-1))
{(markers||(markers=[])).push(mark)}}}})
if(!markers){return null}
var parts=[{from:from,to:to}]
for(var i=0;i<markers.length;++i){var mk=markers[i],m=mk.find(0)
for(var j=0;j<parts.length;++j){var p=parts[j]
if(cmp(p.to,m.from)<0||cmp(p.from,m.to)>0){continue}
var newParts=[j,1],dfrom=cmp(p.from,m.from),dto=cmp(p.to,m.to)
if(dfrom<0||!mk.inclusiveLeft&&!dfrom)
{newParts.push({from:p.from,to:m.from})}
if(dto>0||!mk.inclusiveRight&&!dto)
{newParts.push({from:m.to,to:p.to})}
parts.splice.apply(parts,newParts)
j+=newParts.length-3}}
return parts}
function detachMarkedSpans(line){var spans=line.markedSpans
if(!spans){return}
for(var i=0;i<spans.length;++i)
{spans[i].marker.detachLine(line)}
line.markedSpans=null}
function attachMarkedSpans(line,spans){if(!spans){return}
for(var i=0;i<spans.length;++i)
{spans[i].marker.attachLine(line)}
line.markedSpans=spans}
function extraLeft(marker){return marker.inclusiveLeft?-1:0}
function extraRight(marker){return marker.inclusiveRight?1:0}
function compareCollapsedMarkers(a,b){var lenDiff=a.lines.length-b.lines.length
if(lenDiff!=0){return lenDiff}
var aPos=a.find(),bPos=b.find()
var fromCmp=cmp(aPos.from,bPos.from)||extraLeft(a)-extraLeft(b)
if(fromCmp){return-fromCmp}
var toCmp=cmp(aPos.to,bPos.to)||extraRight(a)-extraRight(b)
if(toCmp){return toCmp}
return b.id-a.id}
function collapsedSpanAtSide(line,start){var sps=sawCollapsedSpans&&line.markedSpans,found
if(sps){for(var sp=(void 0),i=0;i<sps.length;++i){sp=sps[i]
if(sp.marker.collapsed&&(start?sp.from:sp.to)==null&&(!found||compareCollapsedMarkers(found,sp.marker)<0))
{found=sp.marker}}}
return found}
function collapsedSpanAtStart(line){return collapsedSpanAtSide(line,true)}
function collapsedSpanAtEnd(line){return collapsedSpanAtSide(line,false)}
function collapsedSpanAround(line,ch){var sps=sawCollapsedSpans&&line.markedSpans,found
if(sps){for(var i=0;i<sps.length;++i){var sp=sps[i]
if(sp.marker.collapsed&&(sp.from==null||sp.from<ch)&&(sp.to==null||sp.to>ch)&&(!found||compareCollapsedMarkers(found,sp.marker)<0)){found=sp.marker}}}
return found}
function conflictingCollapsedRange(doc,lineNo,from,to,marker){var line=getLine(doc,lineNo)
var sps=sawCollapsedSpans&&line.markedSpans
if(sps){for(var i=0;i<sps.length;++i){var sp=sps[i]
if(!sp.marker.collapsed){continue}
var found=sp.marker.find(0)
var fromCmp=cmp(found.from,from)||extraLeft(sp.marker)-extraLeft(marker)
var toCmp=cmp(found.to,to)||extraRight(sp.marker)-extraRight(marker)
if(fromCmp>=0&&toCmp<=0||fromCmp<=0&&toCmp>=0){continue}
if(fromCmp<=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.to,from)>=0:cmp(found.to,from)>0)||fromCmp>=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.from,to)<=0:cmp(found.from,to)<0))
{return true}}}}
function visualLine(line){var merged
while(merged=collapsedSpanAtStart(line))
{line=merged.find(-1,true).line}
return line}
function visualLineEnd(line){var merged
while(merged=collapsedSpanAtEnd(line))
{line=merged.find(1,true).line}
return line}
function visualLineContinued(line){var merged,lines
while(merged=collapsedSpanAtEnd(line)){line=merged.find(1,true).line;(lines||(lines=[])).push(line)}
return lines}
function visualLineNo(doc,lineN){var line=getLine(doc,lineN),vis=visualLine(line)
if(line==vis){return lineN}
return lineNo(vis)}
function visualLineEndNo(doc,lineN){if(lineN>doc.lastLine()){return lineN}
var line=getLine(doc,lineN),merged
if(!lineIsHidden(doc,line)){return lineN}
while(merged=collapsedSpanAtEnd(line))
{line=merged.find(1,true).line}
return lineNo(line)+1}
function lineIsHidden(doc,line){var sps=sawCollapsedSpans&&line.markedSpans
if(sps){for(var sp=(void 0),i=0;i<sps.length;++i){sp=sps[i]
if(!sp.marker.collapsed){continue}
if(sp.from==null){return true}
if(sp.marker.widgetNode){continue}
if(sp.from==0&&sp.marker.inclusiveLeft&&lineIsHiddenInner(doc,line,sp))
{return true}}}}
function lineIsHiddenInner(doc,line,span){if(span.to==null){var end=span.marker.find(1,true)
return lineIsHiddenInner(doc,end.line,getMarkedSpanFor(end.line.markedSpans,span.marker))}
if(span.marker.inclusiveRight&&span.to==line.text.length)
{return true}
for(var sp=(void 0),i=0;i<line.markedSpans.length;++i){sp=line.markedSpans[i]
if(sp.marker.collapsed&&!sp.marker.widgetNode&&sp.from==span.to&&(sp.to==null||sp.to!=span.from)&&(sp.marker.inclusiveLeft||span.marker.inclusiveRight)&&lineIsHiddenInner(doc,line,sp)){return true}}}
function heightAtLine(lineObj){lineObj=visualLine(lineObj)
var h=0,chunk=lineObj.parent
for(var i=0;i<chunk.lines.length;++i){var line=chunk.lines[i]
if(line==lineObj){break}
else{h+=line.height}}
for(var p=chunk.parent;p;chunk=p,p=chunk.parent){for(var i$1=0;i$1<p.children.length;++i$1){var cur=p.children[i$1]
if(cur==chunk){break}
else{h+=cur.height}}}
return h}
function lineLength(line){if(line.height==0){return 0}
var len=line.text.length,merged,cur=line
while(merged=collapsedSpanAtStart(cur)){var found=merged.find(0,true)
cur=found.from.line
len+=found.from.ch-found.to.ch}
cur=line
while(merged=collapsedSpanAtEnd(cur)){var found$1=merged.find(0,true)
len-=cur.text.length-found$1.from.ch
cur=found$1.to.line
len+=cur.text.length-found$1.to.ch}
return len}
function findMaxLine(cm){var d=cm.display,doc=cm.doc
d.maxLine=getLine(doc,doc.first)
d.maxLineLength=lineLength(d.maxLine)
d.maxLineChanged=true
doc.iter(function(line){var len=lineLength(line)
if(len>d.maxLineLength){d.maxLineLength=len
d.maxLine=line}})}
function iterateBidiSections(order,from,to,f){if(!order){return f(from,to,"ltr",0)}
var found=false
for(var i=0;i<order.length;++i){var part=order[i]
if(part.from<to&&part.to>from||from==to&&part.to==from){f(Math.max(part.from,from),Math.min(part.to,to),part.level==1?"rtl":"ltr",i)
found=true}}
if(!found){f(from,to,"ltr")}}
var bidiOther=null
function getBidiPartAt(order,ch,sticky){var found
bidiOther=null
for(var i=0;i<order.length;++i){var cur=order[i]
if(cur.from<ch&&cur.to>ch){return i}
if(cur.to==ch){if(cur.from!=cur.to&&sticky=="before"){found=i}
else{bidiOther=i}}
if(cur.from==ch){if(cur.from!=cur.to&&sticky!="before"){found=i}
else{bidiOther=i}}}
return found!=null?found:bidiOther}
var bidiOrdering=(function(){var lowTypes="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
var arabicTypes="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
function charType(code){if(code<=0xf7){return lowTypes.charAt(code)}
else if(0x590<=code&&code<=0x5f4){return"R"}
else if(0x600<=code&&code<=0x6f9){return arabicTypes.charAt(code-0x600)}
else if(0x6ee<=code&&code<=0x8ac){return"r"}
else if(0x2000<=code&&code<=0x200b){return"w"}
else if(code==0x200c){return"b"}
else{return"L"}}
var bidiRE=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
var isNeutral=/[stwN]/,isStrong=/[LRr]/,countsAsLeft=/[Lb1n]/,countsAsNum=/[1n]/
function BidiSpan(level,from,to){this.level=level
this.from=from;this.to=to}
return function(str,direction){var outerType=direction=="ltr"?"L":"R"
if(str.length==0||direction=="ltr"&&!bidiRE.test(str)){return false}
var len=str.length,types=[]
for(var i=0;i<len;++i)
{types.push(charType(str.charCodeAt(i)))}
for(var i$1=0,prev=outerType;i$1<len;++i$1){var type=types[i$1]
if(type=="m"){types[i$1]=prev}
else{prev=type}}
for(var i$2=0,cur=outerType;i$2<len;++i$2){var type$1=types[i$2]
if(type$1=="1"&&cur=="r"){types[i$2]="n"}
else if(isStrong.test(type$1)){cur=type$1;if(type$1=="r"){types[i$2]="R"}}}
for(var i$3=1,prev$1=types[0];i$3<len-1;++i$3){var type$2=types[i$3]
if(type$2=="+"&&prev$1=="1"&&types[i$3+1]=="1"){types[i$3]="1"}
else if(type$2==","&&prev$1==types[i$3+1]&&(prev$1=="1"||prev$1=="n")){types[i$3]=prev$1}
prev$1=type$2}
for(var i$4=0;i$4<len;++i$4){var type$3=types[i$4]
if(type$3==","){types[i$4]="N"}
else if(type$3=="%"){var end=(void 0)
for(end=i$4+1;end<len&&types[end]=="%";++end){}
var replace=(i$4&&types[i$4-1]=="!")||(end<len&&types[end]=="1")?"1":"N"
for(var j=i$4;j<end;++j){types[j]=replace}
i$4=end-1}}
for(var i$5=0,cur$1=outerType;i$5<len;++i$5){var type$4=types[i$5]
if(cur$1=="L"&&type$4=="1"){types[i$5]="L"}
else if(isStrong.test(type$4)){cur$1=type$4}}
for(var i$6=0;i$6<len;++i$6){if(isNeutral.test(types[i$6])){var end$1=(void 0)
for(end$1=i$6+1;end$1<len&&isNeutral.test(types[end$1]);++end$1){}
var before=(i$6?types[i$6-1]:outerType)=="L"
var after=(end$1<len?types[end$1]:outerType)=="L"
var replace$1=before==after?(before?"L":"R"):outerType
for(var j$1=i$6;j$1<end$1;++j$1){types[j$1]=replace$1}
i$6=end$1-1}}
var order=[],m
for(var i$7=0;i$7<len;){if(countsAsLeft.test(types[i$7])){var start=i$7
for(++i$7;i$7<len&&countsAsLeft.test(types[i$7]);++i$7){}
order.push(new BidiSpan(0,start,i$7))}else{var pos=i$7,at=order.length
for(++i$7;i$7<len&&types[i$7]!="L";++i$7){}
for(var j$2=pos;j$2<i$7;){if(countsAsNum.test(types[j$2])){if(pos<j$2){order.splice(at,0,new BidiSpan(1,pos,j$2))}
var nstart=j$2
for(++j$2;j$2<i$7&&countsAsNum.test(types[j$2]);++j$2){}
order.splice(at,0,new BidiSpan(2,nstart,j$2))
pos=j$2}else{++j$2}}
if(pos<i$7){order.splice(at,0,new BidiSpan(1,pos,i$7))}}}
if(direction=="ltr"){if(order[0].level==1&&(m=str.match(/^\s+/))){order[0].from=m[0].length
order.unshift(new BidiSpan(0,0,m[0].length))}
if(lst(order).level==1&&(m=str.match(/\s+$/))){lst(order).to-=m[0].length
order.push(new BidiSpan(0,len-m[0].length,len))}}
return direction=="rtl"?order.reverse():order}})()
function getOrder(line,direction){var order=line.order
if(order==null){order=line.order=bidiOrdering(line.text,direction)}
return order}
var noHandlers=[]
var on=function(emitter,type,f){if(emitter.addEventListener){emitter.addEventListener(type,f,false)}else if(emitter.attachEvent){emitter.attachEvent("on"+type,f)}else{var map=emitter._handlers||(emitter._handlers={})
map[type]=(map[type]||noHandlers).concat(f)}}
function getHandlers(emitter,type){return emitter._handlers&&emitter._handlers[type]||noHandlers}
function off(emitter,type,f){if(emitter.removeEventListener){emitter.removeEventListener(type,f,false)}else if(emitter.detachEvent){emitter.detachEvent("on"+type,f)}else{var map=emitter._handlers,arr=map&&map[type]
if(arr){var index=indexOf(arr,f)
if(index>-1)
{map[type]=arr.slice(0,index).concat(arr.slice(index+1))}}}}
function signal(emitter,type ){var handlers=getHandlers(emitter,type)
if(!handlers.length){return}
var args=Array.prototype.slice.call(arguments,2)
for(var i=0;i<handlers.length;++i){handlers[i].apply(null,args)}}
function signalDOMEvent(cm,e,override){if(typeof e=="string")
{e={type:e,preventDefault:function(){this.defaultPrevented=true}}}
signal(cm,override||e.type,cm,e)
return e_defaultPrevented(e)||e.codemirrorIgnore}
function signalCursorActivity(cm){var arr=cm._handlers&&cm._handlers.cursorActivity
if(!arr){return}
var set=cm.curOp.cursorActivityHandlers||(cm.curOp.cursorActivityHandlers=[])
for(var i=0;i<arr.length;++i){if(indexOf(set,arr[i])==-1)
{set.push(arr[i])}}}
function hasHandler(emitter,type){return getHandlers(emitter,type).length>0}
function eventMixin(ctor){ctor.prototype.on=function(type,f){on(this,type,f)}
ctor.prototype.off=function(type,f){off(this,type,f)}}
function e_preventDefault(e){if(e.preventDefault){e.preventDefault()}
else{e.returnValue=false}}
function e_stopPropagation(e){if(e.stopPropagation){e.stopPropagation()}
else{e.cancelBubble=true}}
function e_defaultPrevented(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==false}
function e_stop(e){e_preventDefault(e);e_stopPropagation(e)}
function e_target(e){return e.target||e.srcElement}
function e_button(e){var b=e.which
if(b==null){if(e.button&1){b=1}
else if(e.button&2){b=3}
else if(e.button&4){b=2}}
if(mac&&e.ctrlKey&&b==1){b=3}
return b}
var dragAndDrop=function(){if(ie&&ie_version<9){return false}
var div=elt('div')
return"draggable"in div||"dragDrop"in div}()
var zwspSupported
function zeroWidthElement(measure){if(zwspSupported==null){var test=elt("span","\u200b")
removeChildrenAndAdd(measure,elt("span",[test,document.createTextNode("x")]))
if(measure.firstChild.offsetHeight!=0)
{zwspSupported=test.offsetWidth<=1&&test.offsetHeight>2&&!(ie&&ie_version<8)}}
var node=zwspSupported?elt("span","\u200b"):elt("span","\u00a0",null,"display: inline-block; width: 1px; margin-right: -1px")
node.setAttribute("cm-text","")
return node}
var badBidiRects
function hasBadBidiRects(measure){if(badBidiRects!=null){return badBidiRects}
var txt=removeChildrenAndAdd(measure,document.createTextNode("A\u062eA"))
var r0=range(txt,0,1).getBoundingClientRect()
var r1=range(txt,1,2).getBoundingClientRect()
removeChildren(measure)
if(!r0||r0.left==r0.right){return false}
return badBidiRects=(r1.right-r0.right<3)}
var splitLinesAuto="\n\nb".split(/\n/).length!=3?function(string){var pos=0,result=[],l=string.length
while(pos<=l){var nl=string.indexOf("\n",pos)
if(nl==-1){nl=string.length}
var line=string.slice(pos,string.charAt(nl-1)=="\r"?nl-1:nl)
var rt=line.indexOf("\r")
if(rt!=-1){result.push(line.slice(0,rt))
pos+=rt+1}else{result.push(line)
pos=nl+1}}
return result}:function(string){return string.split(/\r\n?|\n/);}
var hasSelection=window.getSelection?function(te){try{return te.selectionStart!=te.selectionEnd}
catch(e){return false}}:function(te){var range
try{range=te.ownerDocument.selection.createRange()}
catch(e){}
if(!range||range.parentElement()!=te){return false}
return range.compareEndPoints("StartToEnd",range)!=0}
var hasCopyEvent=(function(){var e=elt("div")
if("oncopy"in e){return true}
e.setAttribute("oncopy","return;")
return typeof e.oncopy=="function"})()
var badZoomedRects=null
function hasBadZoomedRects(measure){if(badZoomedRects!=null){return badZoomedRects}
var node=removeChildrenAndAdd(measure,elt("span","x"))
var normal=node.getBoundingClientRect()
var fromRange=range(node,0,1).getBoundingClientRect()
return badZoomedRects=Math.abs(normal.left-fromRange.left)>1}
var modes={};var mimeModes={};function defineMode(name,mode){if(arguments.length>2)
{mode.dependencies=Array.prototype.slice.call(arguments,2)}
modes[name]=mode}
function defineMIME(mime,spec){mimeModes[mime]=spec}
function resolveMode(spec){if(typeof spec=="string"&&mimeModes.hasOwnProperty(spec)){spec=mimeModes[spec]}else if(spec&&typeof spec.name=="string"&&mimeModes.hasOwnProperty(spec.name)){var found=mimeModes[spec.name]
if(typeof found=="string"){found={name:found}}
spec=createObj(found,spec)
spec.name=found.name}else if(typeof spec=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(spec)){return resolveMode("application/xml")}else if(typeof spec=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(spec)){return resolveMode("application/json")}
if(typeof spec=="string"){return{name:spec}}
else{return spec||{name:"null"}}}
function getMode(options,spec){spec=resolveMode(spec)
var mfactory=modes[spec.name]
if(!mfactory){return getMode(options,"text/plain")}
var modeObj=mfactory(options,spec)
if(modeExtensions.hasOwnProperty(spec.name)){var exts=modeExtensions[spec.name]
for(var prop in exts){if(!exts.hasOwnProperty(prop)){continue}
if(modeObj.hasOwnProperty(prop)){modeObj["_"+prop]=modeObj[prop]}
modeObj[prop]=exts[prop]}}
modeObj.name=spec.name
if(spec.helperType){modeObj.helperType=spec.helperType}
if(spec.modeProps){for(var prop$1 in spec.modeProps)
{modeObj[prop$1]=spec.modeProps[prop$1]}}
return modeObj}
var modeExtensions={}
function extendMode(mode,properties){var exts=modeExtensions.hasOwnProperty(mode)?modeExtensions[mode]:(modeExtensions[mode]={})
copyObj(properties,exts)}
function copyState(mode,state){if(state===true){return state}
if(mode.copyState){return mode.copyState(state)}
var nstate={}
for(var n in state){var val=state[n]
if(val instanceof Array){val=val.concat([])}
nstate[n]=val}
return nstate}
function innerMode(mode,state){var info
while(mode.innerMode){info=mode.innerMode(state)
if(!info||info.mode==mode){break}
state=info.state
mode=info.mode}
return info||{mode:mode,state:state}}
function startState(mode,a1,a2){return mode.startState?mode.startState(a1,a2):true}
var StringStream=function(string,tabSize,lineOracle){this.pos=this.start=0
this.string=string
this.tabSize=tabSize||8
this.lastColumnPos=this.lastColumnValue=0
this.lineStart=0
this.lineOracle=lineOracle};StringStream.prototype.eol=function(){return this.pos>=this.string.length};StringStream.prototype.sol=function(){return this.pos==this.lineStart};StringStream.prototype.peek=function(){return this.string.charAt(this.pos)||undefined};StringStream.prototype.next=function(){if(this.pos<this.string.length)
{return this.string.charAt(this.pos++)}};StringStream.prototype.eat=function(match){var ch=this.string.charAt(this.pos)
var ok
if(typeof match=="string"){ok=ch==match}
else{ok=ch&&(match.test?match.test(ch):match(ch))}
if(ok){++this.pos;return ch}};StringStream.prototype.eatWhile=function(match){var start=this.pos
while(this.eat(match)){}
return this.pos>start};StringStream.prototype.eatSpace=function(){var this$1=this;var start=this.pos
while(/[\s\u00a0]/.test(this.string.charAt(this.pos))){++this$1.pos}
return this.pos>start};StringStream.prototype.skipToEnd=function(){this.pos=this.string.length};StringStream.prototype.skipTo=function(ch){var found=this.string.indexOf(ch,this.pos)
if(found>-1){this.pos=found;return true}};StringStream.prototype.backUp=function(n){this.pos-=n};StringStream.prototype.column=function(){if(this.lastColumnPos<this.start){this.lastColumnValue=countColumn(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue)
this.lastColumnPos=this.start}
return this.lastColumnValue-(this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0)};StringStream.prototype.indentation=function(){return countColumn(this.string,null,this.tabSize)-
(this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0)};StringStream.prototype.match=function(pattern,consume,caseInsensitive){if(typeof pattern=="string"){var cased=function(str){return caseInsensitive?str.toLowerCase():str;}
var substr=this.string.substr(this.pos,pattern.length)
if(cased(substr)==cased(pattern)){if(consume!==false){this.pos+=pattern.length}
return true}}else{var match=this.string.slice(this.pos).match(pattern)
if(match&&match.index>0){return null}
if(match&&consume!==false){this.pos+=match[0].length}
return match}};StringStream.prototype.current=function(){return this.string.slice(this.start,this.pos)};StringStream.prototype.hideFirstChars=function(n,inner){this.lineStart+=n
try{return inner()}
finally{this.lineStart-=n}};StringStream.prototype.lookAhead=function(n){var oracle=this.lineOracle
return oracle&&oracle.lookAhead(n)};StringStream.prototype.baseToken=function(){var oracle=this.lineOracle
return oracle&&oracle.baseToken(this.pos)};var SavedContext=function(state,lookAhead){this.state=state
this.lookAhead=lookAhead};var Context=function(doc,state,line,lookAhead){this.state=state
this.doc=doc
this.line=line
this.maxLookAhead=lookAhead||0
this.baseTokens=null
this.baseTokenPos=1};Context.prototype.lookAhead=function(n){var line=this.doc.getLine(this.line+n)
if(line!=null&&n>this.maxLookAhead){this.maxLookAhead=n}
return line};Context.prototype.baseToken=function(n){var this$1=this;if(!this.baseTokens){return null}
while(this.baseTokens[this.baseTokenPos]<=n)
{this$1.baseTokenPos+=2}
var type=this.baseTokens[this.baseTokenPos+1]
return{type:type&&type.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-n}};Context.prototype.nextLine=function(){this.line++
if(this.maxLookAhead>0){this.maxLookAhead--}};Context.fromSaved=function(doc,saved,line){if(saved instanceof SavedContext)
{return new Context(doc,copyState(doc.mode,saved.state),line,saved.lookAhead)}
else
{return new Context(doc,copyState(doc.mode,saved),line)}};Context.prototype.save=function(copy){var state=copy!==false?copyState(this.doc.mode,this.state):this.state
return this.maxLookAhead>0?new SavedContext(state,this.maxLookAhead):state};function highlightLine(cm,line,context,forceToEnd){var st=[cm.state.modeGen],lineClasses={}
runMode(cm,line.text,cm.doc.mode,context,function(end,style){return st.push(end,style);},lineClasses,forceToEnd)
var state=context.state
var loop=function(o){context.baseTokens=st
var overlay=cm.state.overlays[o],i=1,at=0
context.state=true
runMode(cm,line.text,overlay.mode,context,function(end,style){var start=i
while(at<end){var i_end=st[i]
if(i_end>end)
{st.splice(i,1,end,st[i+1],i_end)}
i+=2
at=Math.min(end,i_end)}
if(!style){return}
if(overlay.opaque){st.splice(start,i-start,end,"overlay "+style)
i=start+2}else{for(;start<i;start+=2){var cur=st[start+1]
st[start+1]=(cur?cur+" ":"")+"overlay "+style}}},lineClasses)
context.state=state
context.baseTokens=null
context.baseTokenPos=1};for(var o=0;o<cm.state.overlays.length;++o)loop(o);return{styles:st,classes:lineClasses.bgClass||lineClasses.textClass?lineClasses:null}}
function getLineStyles(cm,line,updateFrontier){if(!line.styles||line.styles[0]!=cm.state.modeGen){var context=getContextBefore(cm,lineNo(line))
var resetState=line.text.length>cm.options.maxHighlightLength&&copyState(cm.doc.mode,context.state)
var result=highlightLine(cm,line,context)
if(resetState){context.state=resetState}
line.stateAfter=context.save(!resetState)
line.styles=result.styles
if(result.classes){line.styleClasses=result.classes}
else if(line.styleClasses){line.styleClasses=null}
if(updateFrontier===cm.doc.highlightFrontier)
{cm.doc.modeFrontier=Math.max(cm.doc.modeFrontier,++cm.doc.highlightFrontier)}}
return line.styles}
function getContextBefore(cm,n,precise){var doc=cm.doc,display=cm.display
if(!doc.mode.startState){return new Context(doc,true,n)}
var start=findStartLine(cm,n,precise)
var saved=start>doc.first&&getLine(doc,start-1).stateAfter
var context=saved?Context.fromSaved(doc,saved,start):new Context(doc,startState(doc.mode),start)
doc.iter(start,n,function(line){processLine(cm,line.text,context)
var pos=context.line
line.stateAfter=pos==n-1||pos%5==0||pos>=display.viewFrom&&pos<display.viewTo?context.save():null
context.nextLine()})
if(precise){doc.modeFrontier=context.line}
return context}
function processLine(cm,text,context,startAt){var mode=cm.doc.mode
var stream=new StringStream(text,cm.options.tabSize,context)
stream.start=stream.pos=startAt||0
if(text==""){callBlankLine(mode,context.state)}
while(!stream.eol()){readToken(mode,stream,context.state)
stream.start=stream.pos}}
function callBlankLine(mode,state){if(mode.blankLine){return mode.blankLine(state)}
if(!mode.innerMode){return}
var inner=innerMode(mode,state)
if(inner.mode.blankLine){return inner.mode.blankLine(inner.state)}}
function readToken(mode,stream,state,inner){for(var i=0;i<10;i++){if(inner){inner[0]=innerMode(mode,state).mode}
var style=mode.token(stream,state)
if(stream.pos>stream.start){return style}}
throw new Error("Mode "+mode.name+" failed to advance stream.")}
var Token=function(stream,type,state){this.start=stream.start;this.end=stream.pos
this.string=stream.current()
this.type=type||null
this.state=state};function takeToken(cm,pos,precise,asArray){var doc=cm.doc,mode=doc.mode,style
pos=clipPos(doc,pos)
var line=getLine(doc,pos.line),context=getContextBefore(cm,pos.line,precise)
var stream=new StringStream(line.text,cm.options.tabSize,context),tokens
if(asArray){tokens=[]}
while((asArray||stream.pos<pos.ch)&&!stream.eol()){stream.start=stream.pos
style=readToken(mode,stream,context.state)
if(asArray){tokens.push(new Token(stream,style,copyState(doc.mode,context.state)))}}
return asArray?tokens:new Token(stream,style,context.state)}
function extractLineClasses(type,output){if(type){for(;;){var lineClass=type.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!lineClass){break}
type=type.slice(0,lineClass.index)+type.slice(lineClass.index+lineClass[0].length)
var prop=lineClass[1]?"bgClass":"textClass"
if(output[prop]==null)
{output[prop]=lineClass[2]}
else if(!(new RegExp("(?:^|\s)"+lineClass[2]+"(?:$|\s)")).test(output[prop]))
{output[prop]+=" "+lineClass[2]}}}
return type}
function runMode(cm,text,mode,context,f,lineClasses,forceToEnd){var flattenSpans=mode.flattenSpans
if(flattenSpans==null){flattenSpans=cm.options.flattenSpans}
var curStart=0,curStyle=null
var stream=new StringStream(text,cm.options.tabSize,context),style
var inner=cm.options.addModeClass&&[null]
if(text==""){extractLineClasses(callBlankLine(mode,context.state),lineClasses)}
while(!stream.eol()){if(stream.pos>cm.options.maxHighlightLength){flattenSpans=false
if(forceToEnd){processLine(cm,text,context,stream.pos)}
stream.pos=text.length
style=null}else{style=extractLineClasses(readToken(mode,stream,context.state,inner),lineClasses)}
if(inner){var mName=inner[0].name
if(mName){style="m-"+(style?mName+" "+style:mName)}}
if(!flattenSpans||curStyle!=style){while(curStart<stream.start){curStart=Math.min(stream.start,curStart+5000)
f(curStart,curStyle)}
curStyle=style}
stream.start=stream.pos}
while(curStart<stream.pos){var pos=Math.min(stream.pos,curStart+5000)
f(pos,curStyle)
curStart=pos}}
function findStartLine(cm,n,precise){var minindent,minline,doc=cm.doc
var lim=precise?-1:n-(cm.doc.mode.innerMode?1000:100)
for(var search=n;search>lim;--search){if(search<=doc.first){return doc.first}
var line=getLine(doc,search-1),after=line.stateAfter
if(after&&(!precise||search+(after instanceof SavedContext?after.lookAhead:0)<=doc.modeFrontier))
{return search}
var indented=countColumn(line.text,null,cm.options.tabSize)
if(minline==null||minindent>indented){minline=search-1
minindent=indented}}
return minline}
function retreatFrontier(doc,n){doc.modeFrontier=Math.min(doc.modeFrontier,n)
if(doc.highlightFrontier<n-10){return}
var start=doc.first
for(var line=n-1;line>start;line--){var saved=getLine(doc,line).stateAfter
if(saved&&(!(saved instanceof SavedContext)||line+saved.lookAhead<n)){start=line+1
break}}
doc.highlightFrontier=Math.min(doc.highlightFrontier,start)}
var Line=function(text,markedSpans,estimateHeight){this.text=text
attachMarkedSpans(this,markedSpans)
this.height=estimateHeight?estimateHeight(this):1};Line.prototype.lineNo=function(){return lineNo(this)};eventMixin(Line)
function updateLine(line,text,markedSpans,estimateHeight){line.text=text
if(line.stateAfter){line.stateAfter=null}
if(line.styles){line.styles=null}
if(line.order!=null){line.order=null}
detachMarkedSpans(line)
attachMarkedSpans(line,markedSpans)
var estHeight=estimateHeight?estimateHeight(line):1
if(estHeight!=line.height){updateLineHeight(line,estHeight)}}
function cleanUpLine(line){line.parent=null
detachMarkedSpans(line)}
var styleToClassCache={};var styleToClassCacheWithMode={};function interpretTokenStyle(style,options){if(!style||/^\s*$/.test(style)){return null}
var cache=options.addModeClass?styleToClassCacheWithMode:styleToClassCache
return cache[style]||(cache[style]=style.replace(/\S+/g,"cm-$&"))}
function buildLineContent(cm,lineView){var content=eltP("span",null,null,webkit?"padding-right: .1px":null)
var builder={pre:eltP("pre",[content],"CodeMirror-line"),content:content,col:0,pos:0,cm:cm,trailingSpace:false,splitSpaces:cm.getOption("lineWrapping")}
lineView.measure={}
for(var i=0;i<=(lineView.rest?lineView.rest.length:0);i++){var line=i?lineView.rest[i-1]:lineView.line,order=(void 0)
builder.pos=0
builder.addToken=buildToken
if(hasBadBidiRects(cm.display.measure)&&(order=getOrder(line,cm.doc.direction)))
{builder.addToken=buildTokenBadBidi(builder.addToken,order)}
builder.map=[]
var allowFrontierUpdate=lineView!=cm.display.externalMeasured&&lineNo(line)
insertLineContent(line,builder,getLineStyles(cm,line,allowFrontierUpdate))
if(line.styleClasses){if(line.styleClasses.bgClass)
{builder.bgClass=joinClasses(line.styleClasses.bgClass,builder.bgClass||"")}
if(line.styleClasses.textClass)
{builder.textClass=joinClasses(line.styleClasses.textClass,builder.textClass||"")}}
if(builder.map.length==0)
{builder.map.push(0,0,builder.content.appendChild(zeroWidthElement(cm.display.measure)))}
if(i==0){lineView.measure.map=builder.map
lineView.measure.cache={}}else{;(lineView.measure.maps||(lineView.measure.maps=[])).push(builder.map);(lineView.measure.caches||(lineView.measure.caches=[])).push({})}}
if(webkit){var last=builder.content.lastChild
if(/\bcm-tab\b/.test(last.className)||(last.querySelector&&last.querySelector(".cm-tab")))
{builder.content.className="cm-tab-wrap-hack"}}
signal(cm,"renderLine",cm,lineView.line,builder.pre)
if(builder.pre.className)
{builder.textClass=joinClasses(builder.pre.className,builder.textClass||"")}
return builder}
function defaultSpecialCharPlaceholder(ch){var token=elt("span","\u2022","cm-invalidchar")
token.title="\\u"+ch.charCodeAt(0).toString(16)
token.setAttribute("aria-label",token.title)
return token}
function buildToken(builder,text,style,startStyle,endStyle,title,css){if(!text){return}
var displayText=builder.splitSpaces?splitSpaces(text,builder.trailingSpace):text
var special=builder.cm.state.specialChars,mustWrap=false
var content
if(!special.test(text)){builder.col+=text.length
content=document.createTextNode(displayText)
builder.map.push(builder.pos,builder.pos+text.length,content)
if(ie&&ie_version<9){mustWrap=true}
builder.pos+=text.length}else{content=document.createDocumentFragment()
var pos=0
while(true){special.lastIndex=pos
var m=special.exec(text)
var skipped=m?m.index-pos:text.length-pos
if(skipped){var txt=document.createTextNode(displayText.slice(pos,pos+skipped))
if(ie&&ie_version<9){content.appendChild(elt("span",[txt]))}
else{content.appendChild(txt)}
builder.map.push(builder.pos,builder.pos+skipped,txt)
builder.col+=skipped
builder.pos+=skipped}
if(!m){break}
pos+=skipped+1
var txt$1=(void 0)
if(m[0]=="\t"){var tabSize=builder.cm.options.tabSize,tabWidth=tabSize-builder.col%tabSize
txt$1=content.appendChild(elt("span",spaceStr(tabWidth),"cm-tab"))
txt$1.setAttribute("role","presentation")
txt$1.setAttribute("cm-text","\t")
builder.col+=tabWidth}else if(m[0]=="\r"||m[0]=="\n"){txt$1=content.appendChild(elt("span",m[0]=="\r"?"\u240d":"\u2424","cm-invalidchar"))
txt$1.setAttribute("cm-text",m[0])
builder.col+=1}else{txt$1=builder.cm.options.specialCharPlaceholder(m[0])
txt$1.setAttribute("cm-text",m[0])
if(ie&&ie_version<9){content.appendChild(elt("span",[txt$1]))}
else{content.appendChild(txt$1)}
builder.col+=1}
builder.map.push(builder.pos,builder.pos+1,txt$1)
builder.pos++}}
builder.trailingSpace=displayText.charCodeAt(text.length-1)==32
if(style||startStyle||endStyle||mustWrap||css){var fullStyle=style||""
if(startStyle){fullStyle+=startStyle}
if(endStyle){fullStyle+=endStyle}
var token=elt("span",[content],fullStyle,css)
if(title){token.title=title}
return builder.content.appendChild(token)}
builder.content.appendChild(content)}
function splitSpaces(text,trailingBefore){if(text.length>1&&!/  /.test(text)){return text}
var spaceBefore=trailingBefore,result=""
for(var i=0;i<text.length;i++){var ch=text.charAt(i)
if(ch==" "&&spaceBefore&&(i==text.length-1||text.charCodeAt(i+1)==32))
{ch="\u00a0"}
result+=ch
spaceBefore=ch==" "}
return result}
function buildTokenBadBidi(inner,order){return function(builder,text,style,startStyle,endStyle,title,css){style=style?style+" cm-force-border":"cm-force-border"
var start=builder.pos,end=start+text.length
for(;;){var part=(void 0)
for(var i=0;i<order.length;i++){part=order[i]
if(part.to>start&&part.from<=start){break}}
if(part.to>=end){return inner(builder,text,style,startStyle,endStyle,title,css)}
inner(builder,text.slice(0,part.to-start),style,startStyle,null,title,css)
startStyle=null
text=text.slice(part.to-start)
start=part.to}}}
function buildCollapsedSpan(builder,size,marker,ignoreWidget){var widget=!ignoreWidget&&marker.widgetNode
if(widget){builder.map.push(builder.pos,builder.pos+size,widget)}
if(!ignoreWidget&&builder.cm.display.input.needsContentAttribute){if(!widget)
{widget=builder.content.appendChild(document.createElement("span"))}
widget.setAttribute("cm-marker",marker.id)}
if(widget){builder.cm.display.input.setUneditable(widget)
builder.content.appendChild(widget)}
builder.pos+=size
builder.trailingSpace=false}
function insertLineContent(line,builder,styles){var spans=line.markedSpans,allText=line.text,at=0
if(!spans){for(var i$1=1;i$1<styles.length;i$1+=2)
{builder.addToken(builder,allText.slice(at,at=styles[i$1]),interpretTokenStyle(styles[i$1+1],builder.cm.options))}
return}
var len=allText.length,pos=0,i=1,text="",style,css
var nextChange=0,spanStyle,spanEndStyle,spanStartStyle,title,collapsed
for(;;){if(nextChange==pos){spanStyle=spanEndStyle=spanStartStyle=title=css=""
collapsed=null;nextChange=Infinity
var foundBookmarks=[],endStyles=(void 0)
for(var j=0;j<spans.length;++j){var sp=spans[j],m=sp.marker
if(m.type=="bookmark"&&sp.from==pos&&m.widgetNode){foundBookmarks.push(m)}else if(sp.from<=pos&&(sp.to==null||sp.to>pos||m.collapsed&&sp.to==pos&&sp.from==pos)){if(sp.to!=null&&sp.to!=pos&&nextChange>sp.to){nextChange=sp.to
spanEndStyle=""}
if(m.className){spanStyle+=" "+m.className}
if(m.css){css=(css?css+";":"")+m.css}
if(m.startStyle&&sp.from==pos){spanStartStyle+=" "+m.startStyle}
if(m.endStyle&&sp.to==nextChange){(endStyles||(endStyles=[])).push(m.endStyle,sp.to)}
if(m.title&&!title){title=m.title}
if(m.collapsed&&(!collapsed||compareCollapsedMarkers(collapsed.marker,m)<0))
{collapsed=sp}}else if(sp.from>pos&&nextChange>sp.from){nextChange=sp.from}}
if(endStyles){for(var j$1=0;j$1<endStyles.length;j$1+=2)
{if(endStyles[j$1+1]==nextChange){spanEndStyle+=" "+endStyles[j$1]}}}
if(!collapsed||collapsed.from==pos){for(var j$2=0;j$2<foundBookmarks.length;++j$2)
{buildCollapsedSpan(builder,0,foundBookmarks[j$2])}}
if(collapsed&&(collapsed.from||0)==pos){buildCollapsedSpan(builder,(collapsed.to==null?len+1:collapsed.to)-pos,collapsed.marker,collapsed.from==null)
if(collapsed.to==null){return}
if(collapsed.to==pos){collapsed=false}}}
if(pos>=len){break}
var upto=Math.min(len,nextChange)
while(true){if(text){var end=pos+text.length
if(!collapsed){var tokenText=end>upto?text.slice(0,upto-pos):text
builder.addToken(builder,tokenText,style?style+spanStyle:spanStyle,spanStartStyle,pos+tokenText.length==nextChange?spanEndStyle:"",title,css)}
if(end>=upto){text=text.slice(upto-pos);pos=upto;break}
pos=end
spanStartStyle=""}
text=allText.slice(at,at=styles[i++])
style=interpretTokenStyle(styles[i++],builder.cm.options)}}}
function LineView(doc,line,lineN){this.line=line
this.rest=visualLineContinued(line)
this.size=this.rest?lineNo(lst(this.rest))-lineN+1:1
this.node=this.text=null
this.hidden=lineIsHidden(doc,line)}
function buildViewArray(cm,from,to){var array=[],nextPos
for(var pos=from;pos<to;pos=nextPos){var view=new LineView(cm.doc,getLine(cm.doc,pos),pos)
nextPos=pos+view.size
array.push(view)}
return array}
var operationGroup=null
function pushOperation(op){if(operationGroup){operationGroup.ops.push(op)}else{op.ownsGroup=operationGroup={ops:[op],delayedCallbacks:[]}}}
function fireCallbacksForOps(group){var callbacks=group.delayedCallbacks,i=0
do{for(;i<callbacks.length;i++)
{callbacks[i].call(null)}
for(var j=0;j<group.ops.length;j++){var op=group.ops[j]
if(op.cursorActivityHandlers)
{while(op.cursorActivityCalled<op.cursorActivityHandlers.length)
{op.cursorActivityHandlers[op.cursorActivityCalled++].call(null,op.cm)}}}}while(i<callbacks.length)}
function finishOperation(op,endCb){var group=op.ownsGroup
if(!group){return}
try{fireCallbacksForOps(group)}
finally{operationGroup=null
endCb(group)}}
var orphanDelayedCallbacks=null
function signalLater(emitter,type ){var arr=getHandlers(emitter,type)
if(!arr.length){return}
var args=Array.prototype.slice.call(arguments,2),list
if(operationGroup){list=operationGroup.delayedCallbacks}else if(orphanDelayedCallbacks){list=orphanDelayedCallbacks}else{list=orphanDelayedCallbacks=[]
setTimeout(fireOrphanDelayed,0)}
var loop=function(i){list.push(function(){return arr[i].apply(null,args);})};for(var i=0;i<arr.length;++i)
loop(i);}
function fireOrphanDelayed(){var delayed=orphanDelayedCallbacks
orphanDelayedCallbacks=null
for(var i=0;i<delayed.length;++i){delayed[i]()}}
function updateLineForChanges(cm,lineView,lineN,dims){for(var j=0;j<lineView.changes.length;j++){var type=lineView.changes[j]
if(type=="text"){updateLineText(cm,lineView)}
else if(type=="gutter"){updateLineGutter(cm,lineView,lineN,dims)}
else if(type=="class"){updateLineClasses(cm,lineView)}
else if(type=="widget"){updateLineWidgets(cm,lineView,dims)}}
lineView.changes=null}
function ensureLineWrapped(lineView){if(lineView.node==lineView.text){lineView.node=elt("div",null,null,"position: relative")
if(lineView.text.parentNode)
{lineView.text.parentNode.replaceChild(lineView.node,lineView.text)}
lineView.node.appendChild(lineView.text)
if(ie&&ie_version<8){lineView.node.style.zIndex=2}}
return lineView.node}
function updateLineBackground(cm,lineView){var cls=lineView.bgClass?lineView.bgClass+" "+(lineView.line.bgClass||""):lineView.line.bgClass
if(cls){cls+=" CodeMirror-linebackground"}
if(lineView.background){if(cls){lineView.background.className=cls}
else{lineView.background.parentNode.removeChild(lineView.background);lineView.background=null}}else if(cls){var wrap=ensureLineWrapped(lineView)
lineView.background=wrap.insertBefore(elt("div",null,cls),wrap.firstChild)
cm.display.input.setUneditable(lineView.background)}}
function getLineContent(cm,lineView){var ext=cm.display.externalMeasured
if(ext&&ext.line==lineView.line){cm.display.externalMeasured=null
lineView.measure=ext.measure
return ext.built}
return buildLineContent(cm,lineView)}
function updateLineText(cm,lineView){var cls=lineView.text.className
var built=getLineContent(cm,lineView)
if(lineView.text==lineView.node){lineView.node=built.pre}
lineView.text.parentNode.replaceChild(built.pre,lineView.text)
lineView.text=built.pre
if(built.bgClass!=lineView.bgClass||built.textClass!=lineView.textClass){lineView.bgClass=built.bgClass
lineView.textClass=built.textClass
updateLineClasses(cm,lineView)}else if(cls){lineView.text.className=cls}}
function updateLineClasses(cm,lineView){updateLineBackground(cm,lineView)
if(lineView.line.wrapClass)
{ensureLineWrapped(lineView).className=lineView.line.wrapClass}
else if(lineView.node!=lineView.text)
{lineView.node.className=""}
var textClass=lineView.textClass?lineView.textClass+" "+(lineView.line.textClass||""):lineView.line.textClass
lineView.text.className=textClass||""}
function updateLineGutter(cm,lineView,lineN,dims){if(lineView.gutter){lineView.node.removeChild(lineView.gutter)
lineView.gutter=null}
if(lineView.gutterBackground){lineView.node.removeChild(lineView.gutterBackground)
lineView.gutterBackground=null}
if(lineView.line.gutterClass){var wrap=ensureLineWrapped(lineView)
lineView.gutterBackground=elt("div",null,"CodeMirror-gutter-background "+lineView.line.gutterClass,("left: "+(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px; width: "+(dims.gutterTotalWidth)+"px"))
cm.display.input.setUneditable(lineView.gutterBackground)
wrap.insertBefore(lineView.gutterBackground,lineView.text)}
var markers=lineView.line.gutterMarkers
if(cm.options.lineNumbers||markers){var wrap$1=ensureLineWrapped(lineView)
var gutterWrap=lineView.gutter=elt("div",null,"CodeMirror-gutter-wrapper",("left: "+(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px"))
cm.display.input.setUneditable(gutterWrap)
wrap$1.insertBefore(gutterWrap,lineView.text)
if(lineView.line.gutterClass)
{gutterWrap.className+=" "+lineView.line.gutterClass}
if(cm.options.lineNumbers&&(!markers||!markers["CodeMirror-linenumbers"]))
{lineView.lineNumber=gutterWrap.appendChild(elt("div",lineNumberFor(cm.options,lineN),"CodeMirror-linenumber CodeMirror-gutter-elt",("left: "+(dims.gutterLeft["CodeMirror-linenumbers"])+"px; width: "+(cm.display.lineNumInnerWidth)+"px")))}
if(markers){for(var k=0;k<cm.options.gutters.length;++k){var id=cm.options.gutters[k],found=markers.hasOwnProperty(id)&&markers[id]
if(found)
{gutterWrap.appendChild(elt("div",[found],"CodeMirror-gutter-elt",("left: "+(dims.gutterLeft[id])+"px; width: "+(dims.gutterWidth[id])+"px")))}}}}}
function updateLineWidgets(cm,lineView,dims){if(lineView.alignable){lineView.alignable=null}
for(var node=lineView.node.firstChild,next=(void 0);node;node=next){next=node.nextSibling
if(node.className=="CodeMirror-linewidget")
{lineView.node.removeChild(node)}}
insertLineWidgets(cm,lineView,dims)}
function buildLineElement(cm,lineView,lineN,dims){var built=getLineContent(cm,lineView)
lineView.text=lineView.node=built.pre
if(built.bgClass){lineView.bgClass=built.bgClass}
if(built.textClass){lineView.textClass=built.textClass}
updateLineClasses(cm,lineView)
updateLineGutter(cm,lineView,lineN,dims)
insertLineWidgets(cm,lineView,dims)
return lineView.node}
function insertLineWidgets(cm,lineView,dims){insertLineWidgetsFor(cm,lineView.line,lineView,dims,true)
if(lineView.rest){for(var i=0;i<lineView.rest.length;i++)
{insertLineWidgetsFor(cm,lineView.rest[i],lineView,dims,false)}}}
function insertLineWidgetsFor(cm,line,lineView,dims,allowAbove){if(!line.widgets){return}
var wrap=ensureLineWrapped(lineView)
for(var i=0,ws=line.widgets;i<ws.length;++i){var widget=ws[i],node=elt("div",[widget.node],"CodeMirror-linewidget")
if(!widget.handleMouseEvents){node.setAttribute("cm-ignore-events","true")}
positionLineWidget(widget,node,lineView,dims)
cm.display.input.setUneditable(node)
if(allowAbove&&widget.above)
{wrap.insertBefore(node,lineView.gutter||lineView.text)}
else
{wrap.appendChild(node)}
signalLater(widget,"redraw")}}
function positionLineWidget(widget,node,lineView,dims){if(widget.noHScroll){;(lineView.alignable||(lineView.alignable=[])).push(node)
var width=dims.wrapperWidth
node.style.left=dims.fixedPos+"px"
if(!widget.coverGutter){width-=dims.gutterTotalWidth
node.style.paddingLeft=dims.gutterTotalWidth+"px"}
node.style.width=width+"px"}
if(widget.coverGutter){node.style.zIndex=5
node.style.position="relative"
if(!widget.noHScroll){node.style.marginLeft=-dims.gutterTotalWidth+"px"}}}
function widgetHeight(widget){if(widget.height!=null){return widget.height}
var cm=widget.doc.cm
if(!cm){return 0}
if(!contains(document.body,widget.node)){var parentStyle="position: relative;"
if(widget.coverGutter)
{parentStyle+="margin-left: -"+cm.display.gutters.offsetWidth+"px;"}
if(widget.noHScroll)
{parentStyle+="width: "+cm.display.wrapper.clientWidth+"px;"}
removeChildrenAndAdd(cm.display.measure,elt("div",[widget.node],null,parentStyle))}
return widget.height=widget.node.parentNode.offsetHeight}
function eventInWidget(display,e){for(var n=e_target(e);n!=display.wrapper;n=n.parentNode){if(!n||(n.nodeType==1&&n.getAttribute("cm-ignore-events")=="true")||(n.parentNode==display.sizer&&n!=display.mover))
{return true}}}
function paddingTop(display){return display.lineSpace.offsetTop}
function paddingVert(display){return display.mover.offsetHeight-display.lineSpace.offsetHeight}
function paddingH(display){if(display.cachedPaddingH){return display.cachedPaddingH}
var e=removeChildrenAndAdd(display.measure,elt("pre","x"))
var style=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle
var data={left:parseInt(style.paddingLeft),right:parseInt(style.paddingRight)}
if(!isNaN(data.left)&&!isNaN(data.right)){display.cachedPaddingH=data}
return data}
function scrollGap(cm){return scrollerGap-cm.display.nativeBarWidth}
function displayWidth(cm){return cm.display.scroller.clientWidth-scrollGap(cm)-cm.display.barWidth}
function displayHeight(cm){return cm.display.scroller.clientHeight-scrollGap(cm)-cm.display.barHeight}
function ensureLineHeights(cm,lineView,rect){var wrapping=cm.options.lineWrapping
var curWidth=wrapping&&displayWidth(cm)
if(!lineView.measure.heights||wrapping&&lineView.measure.width!=curWidth){var heights=lineView.measure.heights=[]
if(wrapping){lineView.measure.width=curWidth
var rects=lineView.text.firstChild.getClientRects()
for(var i=0;i<rects.length-1;i++){var cur=rects[i],next=rects[i+1]
if(Math.abs(cur.bottom-next.bottom)>2)
{heights.push((cur.bottom+next.top)/2-rect.top)}}}
heights.push(rect.bottom-rect.top)}}
function mapFromLineView(lineView,line,lineN){if(lineView.line==line)
{return{map:lineView.measure.map,cache:lineView.measure.cache}}
for(var i=0;i<lineView.rest.length;i++)
{if(lineView.rest[i]==line)
{return{map:lineView.measure.maps[i],cache:lineView.measure.caches[i]}}}
for(var i$1=0;i$1<lineView.rest.length;i$1++)
{if(lineNo(lineView.rest[i$1])>lineN)
{return{map:lineView.measure.maps[i$1],cache:lineView.measure.caches[i$1],before:true}}}}
function updateExternalMeasurement(cm,line){line=visualLine(line)
var lineN=lineNo(line)
var view=cm.display.externalMeasured=new LineView(cm.doc,line,lineN)
view.lineN=lineN
var built=view.built=buildLineContent(cm,view)
view.text=built.pre
removeChildrenAndAdd(cm.display.lineMeasure,built.pre)
return view}
function measureChar(cm,line,ch,bias){return measureCharPrepared(cm,prepareMeasureForLine(cm,line),ch,bias)}
function findViewForLine(cm,lineN){if(lineN>=cm.display.viewFrom&&lineN<cm.display.viewTo)
{return cm.display.view[findViewIndex(cm,lineN)]}
var ext=cm.display.externalMeasured
if(ext&&lineN>=ext.lineN&&lineN<ext.lineN+ext.size)
{return ext}}
function prepareMeasureForLine(cm,line){var lineN=lineNo(line)
var view=findViewForLine(cm,lineN)
if(view&&!view.text){view=null}else if(view&&view.changes){updateLineForChanges(cm,view,lineN,getDimensions(cm))
cm.curOp.forceUpdate=true}
if(!view)
{view=updateExternalMeasurement(cm,line)}
var info=mapFromLineView(view,line,lineN)
return{line:line,view:view,rect:null,map:info.map,cache:info.cache,before:info.before,hasHeights:false}}
function measureCharPrepared(cm,prepared,ch,bias,varHeight){if(prepared.before){ch=-1}
var key=ch+(bias||""),found
if(prepared.cache.hasOwnProperty(key)){found=prepared.cache[key]}else{if(!prepared.rect)
{prepared.rect=prepared.view.text.getBoundingClientRect()}
if(!prepared.hasHeights){ensureLineHeights(cm,prepared.view,prepared.rect)
prepared.hasHeights=true}
found=measureCharInner(cm,prepared,ch,bias)
if(!found.bogus){prepared.cache[key]=found}}
return{left:found.left,right:found.right,top:varHeight?found.rtop:found.top,bottom:varHeight?found.rbottom:found.bottom}}
var nullRect={left:0,right:0,top:0,bottom:0}
function nodeAndOffsetInLineMap(map,ch,bias){var node,start,end,collapse,mStart,mEnd
for(var i=0;i<map.length;i+=3){mStart=map[i]
mEnd=map[i+1]
if(ch<mStart){start=0;end=1
collapse="left"}else if(ch<mEnd){start=ch-mStart
end=start+1}else if(i==map.length-3||ch==mEnd&&map[i+3]>ch){end=mEnd-mStart
start=end-1
if(ch>=mEnd){collapse="right"}}
if(start!=null){node=map[i+2]
if(mStart==mEnd&&bias==(node.insertLeft?"left":"right"))
{collapse=bias}
if(bias=="left"&&start==0)
{while(i&&map[i-2]==map[i-3]&&map[i-1].insertLeft){node=map[(i-=3)+2]
collapse="left"}}
if(bias=="right"&&start==mEnd-mStart)
{while(i<map.length-3&&map[i+3]==map[i+4]&&!map[i+5].insertLeft){node=map[(i+=3)+2]
collapse="right"}}
break}}
return{node:node,start:start,end:end,collapse:collapse,coverStart:mStart,coverEnd:mEnd}}
function getUsefulRect(rects,bias){var rect=nullRect
if(bias=="left"){for(var i=0;i<rects.length;i++){if((rect=rects[i]).left!=rect.right){break}}}else{for(var i$1=rects.length-1;i$1>=0;i$1--){if((rect=rects[i$1]).left!=rect.right){break}}}
return rect}
function measureCharInner(cm,prepared,ch,bias){var place=nodeAndOffsetInLineMap(prepared.map,ch,bias)
var node=place.node,start=place.start,end=place.end,collapse=place.collapse
var rect
if(node.nodeType==3){for(var i$1=0;i$1<4;i$1++){while(start&&isExtendingChar(prepared.line.text.charAt(place.coverStart+start))){--start}
while(place.coverStart+end<place.coverEnd&&isExtendingChar(prepared.line.text.charAt(place.coverStart+end))){++end}
if(ie&&ie_version<9&&start==0&&end==place.coverEnd-place.coverStart)
{rect=node.parentNode.getBoundingClientRect()}
else
{rect=getUsefulRect(range(node,start,end).getClientRects(),bias)}
if(rect.left||rect.right||start==0){break}
end=start
start=start-1
collapse="right"}
if(ie&&ie_version<11){rect=maybeUpdateRectForZooming(cm.display.measure,rect)}}else{if(start>0){collapse=bias="right"}
var rects
if(cm.options.lineWrapping&&(rects=node.getClientRects()).length>1)
{rect=rects[bias=="right"?rects.length-1:0]}
else
{rect=node.getBoundingClientRect()}}
if(ie&&ie_version<9&&!start&&(!rect||!rect.left&&!rect.right)){var rSpan=node.parentNode.getClientRects()[0]
if(rSpan)
{rect={left:rSpan.left,right:rSpan.left+charWidth(cm.display),top:rSpan.top,bottom:rSpan.bottom}}
else
{rect=nullRect}}
var rtop=rect.top-prepared.rect.top,rbot=rect.bottom-prepared.rect.top
var mid=(rtop+rbot)/2
var heights=prepared.view.measure.heights
var i=0
for(;i<heights.length-1;i++)
{if(mid<heights[i]){break}}
var top=i?heights[i-1]:0,bot=heights[i]
var result={left:(collapse=="right"?rect.right:rect.left)-prepared.rect.left,right:(collapse=="left"?rect.left:rect.right)-prepared.rect.left,top:top,bottom:bot}
if(!rect.left&&!rect.right){result.bogus=true}
if(!cm.options.singleCursorHeightPerLine){result.rtop=rtop;result.rbottom=rbot}
return result}
function maybeUpdateRectForZooming(measure,rect){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!hasBadZoomedRects(measure))
{return rect}
var scaleX=screen.logicalXDPI/screen.deviceXDPI
var scaleY=screen.logicalYDPI/screen.deviceYDPI
return{left:rect.left*scaleX,right:rect.right*scaleX,top:rect.top*scaleY,bottom:rect.bottom*scaleY}}
function clearLineMeasurementCacheFor(lineView){if(lineView.measure){lineView.measure.cache={}
lineView.measure.heights=null
if(lineView.rest){for(var i=0;i<lineView.rest.length;i++)
{lineView.measure.caches[i]={}}}}}
function clearLineMeasurementCache(cm){cm.display.externalMeasure=null
removeChildren(cm.display.lineMeasure)
for(var i=0;i<cm.display.view.length;i++)
{clearLineMeasurementCacheFor(cm.display.view[i])}}
function clearCaches(cm){clearLineMeasurementCache(cm)
cm.display.cachedCharWidth=cm.display.cachedTextHeight=cm.display.cachedPaddingH=null
if(!cm.options.lineWrapping){cm.display.maxLineChanged=true}
cm.display.lineNumChars=null}
function pageScrollX(){if(chrome&&android){return-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft))}
return window.pageXOffset||(document.documentElement||document.body).scrollLeft}
function pageScrollY(){if(chrome&&android){return-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop))}
return window.pageYOffset||(document.documentElement||document.body).scrollTop}
function widgetTopHeight(lineObj){var height=0
if(lineObj.widgets){for(var i=0;i<lineObj.widgets.length;++i){if(lineObj.widgets[i].above)
{height+=widgetHeight(lineObj.widgets[i])}}}
return height}
function intoCoordSystem(cm,lineObj,rect,context,includeWidgets){if(!includeWidgets){var height=widgetTopHeight(lineObj)
rect.top+=height;rect.bottom+=height}
if(context=="line"){return rect}
if(!context){context="local"}
var yOff=heightAtLine(lineObj)
if(context=="local"){yOff+=paddingTop(cm.display)}
else{yOff-=cm.display.viewOffset}
if(context=="page"||context=="window"){var lOff=cm.display.lineSpace.getBoundingClientRect()
yOff+=lOff.top+(context=="window"?0:pageScrollY())
var xOff=lOff.left+(context=="window"?0:pageScrollX())
rect.left+=xOff;rect.right+=xOff}
rect.top+=yOff;rect.bottom+=yOff
return rect}
function fromCoordSystem(cm,coords,context){if(context=="div"){return coords}
var left=coords.left,top=coords.top
if(context=="page"){left-=pageScrollX()
top-=pageScrollY()}else if(context=="local"||!context){var localBox=cm.display.sizer.getBoundingClientRect()
left+=localBox.left
top+=localBox.top}
var lineSpaceBox=cm.display.lineSpace.getBoundingClientRect()
return{left:left-lineSpaceBox.left,top:top-lineSpaceBox.top}}
function charCoords(cm,pos,context,lineObj,bias){if(!lineObj){lineObj=getLine(cm.doc,pos.line)}
return intoCoordSystem(cm,lineObj,measureChar(cm,lineObj,pos.ch,bias),context)}
function cursorCoords(cm,pos,context,lineObj,preparedMeasure,varHeight){lineObj=lineObj||getLine(cm.doc,pos.line)
if(!preparedMeasure){preparedMeasure=prepareMeasureForLine(cm,lineObj)}
function get(ch,right){var m=measureCharPrepared(cm,preparedMeasure,ch,right?"right":"left",varHeight)
if(right){m.left=m.right;}else{m.right=m.left}
return intoCoordSystem(cm,lineObj,m,context)}
var order=getOrder(lineObj,cm.doc.direction),ch=pos.ch,sticky=pos.sticky
if(ch>=lineObj.text.length){ch=lineObj.text.length
sticky="before"}else if(ch<=0){ch=0
sticky="after"}
if(!order){return get(sticky=="before"?ch-1:ch,sticky=="before")}
function getBidi(ch,partPos,invert){var part=order[partPos],right=part.level==1
return get(invert?ch-1:ch,right!=invert)}
var partPos=getBidiPartAt(order,ch,sticky)
var other=bidiOther
var val=getBidi(ch,partPos,sticky=="before")
if(other!=null){val.other=getBidi(ch,other,sticky!="before")}
return val}
function estimateCoords(cm,pos){var left=0
pos=clipPos(cm.doc,pos)
if(!cm.options.lineWrapping){left=charWidth(cm.display)*pos.ch}
var lineObj=getLine(cm.doc,pos.line)
var top=heightAtLine(lineObj)+paddingTop(cm.display)
return{left:left,right:left,top:top,bottom:top+lineObj.height}}
function PosWithInfo(line,ch,sticky,outside,xRel){var pos=Pos(line,ch,sticky)
pos.xRel=xRel
if(outside){pos.outside=true}
return pos}
function coordsChar(cm,x,y){var doc=cm.doc
y+=cm.display.viewOffset
if(y<0){return PosWithInfo(doc.first,0,null,true,-1)}
var lineN=lineAtHeight(doc,y),last=doc.first+doc.size-1
if(lineN>last)
{return PosWithInfo(doc.first+doc.size-1,getLine(doc,last).text.length,null,true,1)}
if(x<0){x=0}
var lineObj=getLine(doc,lineN)
for(;;){var found=coordsCharInner(cm,lineObj,lineN,x,y)
var collapsed=collapsedSpanAround(lineObj,found.ch+(found.xRel>0?1:0))
if(!collapsed){return found}
var rangeEnd=collapsed.find(1)
if(rangeEnd.line==lineN){return rangeEnd}
lineObj=getLine(doc,lineN=rangeEnd.line)}}
function wrappedLineExtent(cm,lineObj,preparedMeasure,y){y-=widgetTopHeight(lineObj)
var end=lineObj.text.length
var begin=findFirst(function(ch){return measureCharPrepared(cm,preparedMeasure,ch-1).bottom<=y;},end,0)
end=findFirst(function(ch){return measureCharPrepared(cm,preparedMeasure,ch).top>y;},begin,end)
return{begin:begin,end:end}}
function wrappedLineExtentChar(cm,lineObj,preparedMeasure,target){if(!preparedMeasure){preparedMeasure=prepareMeasureForLine(cm,lineObj)}
var targetTop=intoCoordSystem(cm,lineObj,measureCharPrepared(cm,preparedMeasure,target),"line").top
return wrappedLineExtent(cm,lineObj,preparedMeasure,targetTop)}
function boxIsAfter(box,x,y,left){return box.bottom<=y?false:box.top>y?true:(left?box.left:box.right)>x}
function coordsCharInner(cm,lineObj,lineNo,x,y){y-=heightAtLine(lineObj)
var preparedMeasure=prepareMeasureForLine(cm,lineObj)
var widgetHeight=widgetTopHeight(lineObj)
var begin=0,end=lineObj.text.length,ltr=true
var order=getOrder(lineObj,cm.doc.direction)
if(order){var part=(cm.options.lineWrapping?coordsBidiPartWrapped:coordsBidiPart)
(cm,lineObj,lineNo,preparedMeasure,order,x,y)
ltr=part.level!=1
begin=ltr?part.from:part.to-1
end=ltr?part.to:part.from-1}
var chAround=null,boxAround=null
var ch=findFirst(function(ch){var box=measureCharPrepared(cm,preparedMeasure,ch)
box.top+=widgetHeight;box.bottom+=widgetHeight
if(!boxIsAfter(box,x,y,false)){return false}
if(box.top<=y&&box.left<=x){chAround=ch
boxAround=box}
return true},begin,end)
var baseX,sticky,outside=false
if(boxAround){var atLeft=x-boxAround.left<boxAround.right-x,atStart=atLeft==ltr
ch=chAround+(atStart?0:1)
sticky=atStart?"after":"before"
baseX=atLeft?boxAround.left:boxAround.right}else{if(!ltr&&(ch==end||ch==begin)){ch++}
sticky=ch==0?"after":ch==lineObj.text.length?"before":(measureCharPrepared(cm,preparedMeasure,ch-(ltr?1:0)).bottom+widgetHeight<=y)==ltr?"after":"before"
var coords=cursorCoords(cm,Pos(lineNo,ch,sticky),"line",lineObj,preparedMeasure)
baseX=coords.left
outside=y<coords.top||y>=coords.bottom}
ch=skipExtendingChars(lineObj.text,ch,1)
return PosWithInfo(lineNo,ch,sticky,outside,x-baseX)}
function coordsBidiPart(cm,lineObj,lineNo,preparedMeasure,order,x,y){var index=findFirst(function(i){var part=order[i],ltr=part.level!=1
return boxIsAfter(cursorCoords(cm,Pos(lineNo,ltr?part.to:part.from,ltr?"before":"after"),"line",lineObj,preparedMeasure),x,y,true)},0,order.length-1)
var part=order[index]
if(index>0){var ltr=part.level!=1
var start=cursorCoords(cm,Pos(lineNo,ltr?part.from:part.to,ltr?"after":"before"),"line",lineObj,preparedMeasure)
if(boxIsAfter(start,x,y,true)&&start.top>y)
{part=order[index-1]}}
return part}
function coordsBidiPartWrapped(cm,lineObj,_lineNo,preparedMeasure,order,x,y){var ref=wrappedLineExtent(cm,lineObj,preparedMeasure,y);var begin=ref.begin;var end=ref.end;if(/\s/.test(lineObj.text.charAt(end-1))){end--}
var part=null,closestDist=null
for(var i=0;i<order.length;i++){var p=order[i]
if(p.from>=end||p.to<=begin){continue}
var ltr=p.level!=1
var endX=measureCharPrepared(cm,preparedMeasure,ltr?Math.min(end,p.to)-1:Math.max(begin,p.from)).right
var dist=endX<x?x-endX+1e9:endX-x
if(!part||closestDist>dist){part=p
closestDist=dist}}
if(!part){part=order[order.length-1]}
if(part.from<begin){part={from:begin,to:part.to,level:part.level}}
if(part.to>end){part={from:part.from,to:end,level:part.level}}
return part}
var measureText
function textHeight(display){if(display.cachedTextHeight!=null){return display.cachedTextHeight}
if(measureText==null){measureText=elt("pre")
for(var i=0;i<49;++i){measureText.appendChild(document.createTextNode("x"))
measureText.appendChild(elt("br"))}
measureText.appendChild(document.createTextNode("x"))}
removeChildrenAndAdd(display.measure,measureText)
var height=measureText.offsetHeight/50
if(height>3){display.cachedTextHeight=height}
removeChildren(display.measure)
return height||1}
function charWidth(display){if(display.cachedCharWidth!=null){return display.cachedCharWidth}
var anchor=elt("span","xxxxxxxxxx")
var pre=elt("pre",[anchor])
removeChildrenAndAdd(display.measure,pre)
var rect=anchor.getBoundingClientRect(),width=(rect.right-rect.left)/10
if(width>2){display.cachedCharWidth=width}
return width||10}
function getDimensions(cm){var d=cm.display,left={},width={}
var gutterLeft=d.gutters.clientLeft
for(var n=d.gutters.firstChild,i=0;n;n=n.nextSibling,++i){left[cm.options.gutters[i]]=n.offsetLeft+n.clientLeft+gutterLeft
width[cm.options.gutters[i]]=n.clientWidth}
return{fixedPos:compensateForHScroll(d),gutterTotalWidth:d.gutters.offsetWidth,gutterLeft:left,gutterWidth:width,wrapperWidth:d.wrapper.clientWidth}}
function compensateForHScroll(display){return display.scroller.getBoundingClientRect().left-display.sizer.getBoundingClientRect().left}
function estimateHeight(cm){var th=textHeight(cm.display),wrapping=cm.options.lineWrapping
var perLine=wrapping&&Math.max(5,cm.display.scroller.clientWidth/charWidth(cm.display)-3)
return function(line){if(lineIsHidden(cm.doc,line)){return 0}
var widgetsHeight=0
if(line.widgets){for(var i=0;i<line.widgets.length;i++){if(line.widgets[i].height){widgetsHeight+=line.widgets[i].height}}}
if(wrapping)
{return widgetsHeight+(Math.ceil(line.text.length/perLine)||1)*th}
else
{return widgetsHeight+th}}}
function estimateLineHeights(cm){var doc=cm.doc,est=estimateHeight(cm)
doc.iter(function(line){var estHeight=est(line)
if(estHeight!=line.height){updateLineHeight(line,estHeight)}})}
function posFromMouse(cm,e,liberal,forRect){var display=cm.display
if(!liberal&&e_target(e).getAttribute("cm-not-content")=="true"){return null}
var x,y,space=display.lineSpace.getBoundingClientRect()
try{x=e.clientX-space.left;y=e.clientY-space.top}
catch(e){return null}
var coords=coordsChar(cm,x,y),line
if(forRect&&coords.xRel==1&&(line=getLine(cm.doc,coords.line).text).length==coords.ch){var colDiff=countColumn(line,line.length,cm.options.tabSize)-line.length
coords=Pos(coords.line,Math.max(0,Math.round((x-paddingH(cm.display).left)/charWidth(cm.display))-colDiff))}
return coords}
function findViewIndex(cm,n){if(n>=cm.display.viewTo){return null}
n-=cm.display.viewFrom
if(n<0){return null}
var view=cm.display.view
for(var i=0;i<view.length;i++){n-=view[i].size
if(n<0){return i}}}
function updateSelection(cm){cm.display.input.showSelection(cm.display.input.prepareSelection())}
function prepareSelection(cm,primary){if(primary===void 0)primary=true;var doc=cm.doc,result={}
var curFragment=result.cursors=document.createDocumentFragment()
var selFragment=result.selection=document.createDocumentFragment()
for(var i=0;i<doc.sel.ranges.length;i++){if(!primary&&i==doc.sel.primIndex){continue}
var range=doc.sel.ranges[i]
if(range.from().line>=cm.display.viewTo||range.to().line<cm.display.viewFrom){continue}
var collapsed=range.empty()
if(collapsed||cm.options.showCursorWhenSelecting)
{drawSelectionCursor(cm,range.head,curFragment)}
if(!collapsed)
{drawSelectionRange(cm,range,selFragment)}}
return result}
function drawSelectionCursor(cm,head,output){var pos=cursorCoords(cm,head,"div",null,null,!cm.options.singleCursorHeightPerLine)
var cursor=output.appendChild(elt("div","\u00a0","CodeMirror-cursor"))
cursor.style.left=pos.left+"px"
cursor.style.top=pos.top+"px"
cursor.style.height=Math.max(0,pos.bottom-pos.top)*cm.options.cursorHeight+"px"
if(pos.other){var otherCursor=output.appendChild(elt("div","\u00a0","CodeMirror-cursor CodeMirror-secondarycursor"))
otherCursor.style.display=""
otherCursor.style.left=pos.other.left+"px"
otherCursor.style.top=pos.other.top+"px"
otherCursor.style.height=(pos.other.bottom-pos.other.top)*.85+"px"}}
function cmpCoords(a,b){return a.top-b.top||a.left-b.left}
function drawSelectionRange(cm,range,output){var display=cm.display,doc=cm.doc
var fragment=document.createDocumentFragment()
var padding=paddingH(cm.display),leftSide=padding.left
var rightSide=Math.max(display.sizerWidth,displayWidth(cm)-display.sizer.offsetLeft)-padding.right
var docLTR=doc.direction=="ltr"
function add(left,top,width,bottom){if(top<0){top=0}
top=Math.round(top)
bottom=Math.round(bottom)
fragment.appendChild(elt("div",null,"CodeMirror-selected",("position: absolute; left: "+left+"px;\n                             top: "+top+"px; width: "+(width==null?rightSide-left:width)+"px;\n                             height: "+(bottom-top)+"px")))}
function drawForLine(line,fromArg,toArg){var lineObj=getLine(doc,line)
var lineLen=lineObj.text.length
var start,end
function coords(ch,bias){return charCoords(cm,Pos(line,ch),"div",lineObj,bias)}
function wrapX(pos,dir,side){var extent=wrappedLineExtentChar(cm,lineObj,null,pos)
var prop=(dir=="ltr")==(side=="after")?"left":"right"
var ch=side=="after"?extent.begin:extent.end-(/\s/.test(lineObj.text.charAt(extent.end-1))?2:1)
return coords(ch,prop)[prop]}
var order=getOrder(lineObj,doc.direction)
iterateBidiSections(order,fromArg||0,toArg==null?lineLen:toArg,function(from,to,dir,i){var ltr=dir=="ltr"
var fromPos=coords(from,ltr?"left":"right")
var toPos=coords(to-1,ltr?"right":"left")
var openStart=fromArg==null&&from==0,openEnd=toArg==null&&to==lineLen
var first=i==0,last=!order||i==order.length-1
if(toPos.top-fromPos.top<=3){var openLeft=(docLTR?openStart:openEnd)&&first
var openRight=(docLTR?openEnd:openStart)&&last
var left=openLeft?leftSide:(ltr?fromPos:toPos).left
var right=openRight?rightSide:(ltr?toPos:fromPos).right
add(left,fromPos.top,right-left,fromPos.bottom)}else{var topLeft,topRight,botLeft,botRight
if(ltr){topLeft=docLTR&&openStart&&first?leftSide:fromPos.left
topRight=docLTR?rightSide:wrapX(from,dir,"before")
botLeft=docLTR?leftSide:wrapX(to,dir,"after")
botRight=docLTR&&openEnd&&last?rightSide:toPos.right}else{topLeft=!docLTR?leftSide:wrapX(from,dir,"before")
topRight=!docLTR&&openStart&&first?rightSide:fromPos.right
botLeft=!docLTR&&openEnd&&last?leftSide:toPos.left
botRight=!docLTR?rightSide:wrapX(to,dir,"after")}
add(topLeft,fromPos.top,topRight-topLeft,fromPos.bottom)
if(fromPos.bottom<toPos.top){add(leftSide,fromPos.bottom,null,toPos.top)}
add(botLeft,toPos.top,botRight-botLeft,toPos.bottom)}
if(!start||cmpCoords(fromPos,start)<0){start=fromPos}
if(cmpCoords(toPos,start)<0){start=toPos}
if(!end||cmpCoords(fromPos,end)<0){end=fromPos}
if(cmpCoords(toPos,end)<0){end=toPos}})
return{start:start,end:end}}
var sFrom=range.from(),sTo=range.to()
if(sFrom.line==sTo.line){drawForLine(sFrom.line,sFrom.ch,sTo.ch)}else{var fromLine=getLine(doc,sFrom.line),toLine=getLine(doc,sTo.line)
var singleVLine=visualLine(fromLine)==visualLine(toLine)
var leftEnd=drawForLine(sFrom.line,sFrom.ch,singleVLine?fromLine.text.length+1:null).end
var rightStart=drawForLine(sTo.line,singleVLine?0:null,sTo.ch).start
if(singleVLine){if(leftEnd.top<rightStart.top-2){add(leftEnd.right,leftEnd.top,null,leftEnd.bottom)
add(leftSide,rightStart.top,rightStart.left,rightStart.bottom)}else{add(leftEnd.right,leftEnd.top,rightStart.left-leftEnd.right,leftEnd.bottom)}}
if(leftEnd.bottom<rightStart.top)
{add(leftSide,leftEnd.bottom,null,rightStart.top)}}
output.appendChild(fragment)}
function restartBlink(cm){if(!cm.state.focused){return}
var display=cm.display
clearInterval(display.blinker)
var on=true
display.cursorDiv.style.visibility=""
if(cm.options.cursorBlinkRate>0)
{display.blinker=setInterval(function(){return display.cursorDiv.style.visibility=(on=!on)?"":"hidden";},cm.options.cursorBlinkRate)}
else if(cm.options.cursorBlinkRate<0)
{display.cursorDiv.style.visibility="hidden"}}
function ensureFocus(cm){if(!cm.state.focused){cm.display.input.focus();onFocus(cm)}}
function delayBlurEvent(cm){cm.state.delayingBlurEvent=true
setTimeout(function(){if(cm.state.delayingBlurEvent){cm.state.delayingBlurEvent=false
onBlur(cm)}},100)}
function onFocus(cm,e){if(cm.state.delayingBlurEvent){cm.state.delayingBlurEvent=false}
if(cm.options.readOnly=="nocursor"){return}
if(!cm.state.focused){signal(cm,"focus",cm,e)
cm.state.focused=true
addClass(cm.display.wrapper,"CodeMirror-focused")
if(!cm.curOp&&cm.display.selForContextMenu!=cm.doc.sel){cm.display.input.reset()
if(webkit){setTimeout(function(){return cm.display.input.reset(true);},20)}}
cm.display.input.receivedFocus()}
restartBlink(cm)}
function onBlur(cm,e){if(cm.state.delayingBlurEvent){return}
if(cm.state.focused){signal(cm,"blur",cm,e)
cm.state.focused=false
rmClass(cm.display.wrapper,"CodeMirror-focused")}
clearInterval(cm.display.blinker)
setTimeout(function(){if(!cm.state.focused){cm.display.shift=false}},150)}
function updateHeightsInViewport(cm){var display=cm.display
var prevBottom=display.lineDiv.offsetTop
for(var i=0;i<display.view.length;i++){var cur=display.view[i],height=(void 0)
if(cur.hidden){continue}
if(ie&&ie_version<8){var bot=cur.node.offsetTop+cur.node.offsetHeight
height=bot-prevBottom
prevBottom=bot}else{var box=cur.node.getBoundingClientRect()
height=box.bottom-box.top}
var diff=cur.line.height-height
if(height<2){height=textHeight(display)}
if(diff>.005||diff<-.005){updateLineHeight(cur.line,height)
updateWidgetHeight(cur.line)
if(cur.rest){for(var j=0;j<cur.rest.length;j++)
{updateWidgetHeight(cur.rest[j])}}}}}
function updateWidgetHeight(line){if(line.widgets){for(var i=0;i<line.widgets.length;++i){var w=line.widgets[i],parent=w.node.parentNode
if(parent){w.height=parent.offsetHeight}}}}
function visibleLines(display,doc,viewport){var top=viewport&&viewport.top!=null?Math.max(0,viewport.top):display.scroller.scrollTop
top=Math.floor(top-paddingTop(display))
var bottom=viewport&&viewport.bottom!=null?viewport.bottom:top+display.wrapper.clientHeight
var from=lineAtHeight(doc,top),to=lineAtHeight(doc,bottom)
if(viewport&&viewport.ensure){var ensureFrom=viewport.ensure.from.line,ensureTo=viewport.ensure.to.line
if(ensureFrom<from){from=ensureFrom
to=lineAtHeight(doc,heightAtLine(getLine(doc,ensureFrom))+display.wrapper.clientHeight)}else if(Math.min(ensureTo,doc.lastLine())>=to){from=lineAtHeight(doc,heightAtLine(getLine(doc,ensureTo))-display.wrapper.clientHeight)
to=ensureTo}}
return{from:from,to:Math.max(to,from+1)}}
function alignHorizontally(cm){var display=cm.display,view=display.view
if(!display.alignWidgets&&(!display.gutters.firstChild||!cm.options.fixedGutter)){return}
var comp=compensateForHScroll(display)-display.scroller.scrollLeft+cm.doc.scrollLeft
var gutterW=display.gutters.offsetWidth,left=comp+"px"
for(var i=0;i<view.length;i++){if(!view[i].hidden){if(cm.options.fixedGutter){if(view[i].gutter)
{view[i].gutter.style.left=left}
if(view[i].gutterBackground)
{view[i].gutterBackground.style.left=left}}
var align=view[i].alignable
if(align){for(var j=0;j<align.length;j++)
{align[j].style.left=left}}}}
if(cm.options.fixedGutter)
{display.gutters.style.left=(comp+gutterW)+"px"}}
function maybeUpdateLineNumberWidth(cm){if(!cm.options.lineNumbers){return false}
var doc=cm.doc,last=lineNumberFor(cm.options,doc.first+doc.size-1),display=cm.display
if(last.length!=display.lineNumChars){var test=display.measure.appendChild(elt("div",[elt("div",last)],"CodeMirror-linenumber CodeMirror-gutter-elt"))
var innerW=test.firstChild.offsetWidth,padding=test.offsetWidth-innerW
display.lineGutter.style.width=""
display.lineNumInnerWidth=Math.max(innerW,display.lineGutter.offsetWidth-padding)+1
display.lineNumWidth=display.lineNumInnerWidth+padding
display.lineNumChars=display.lineNumInnerWidth?last.length:-1
display.lineGutter.style.width=display.lineNumWidth+"px"
updateGutterSpace(cm)
return true}
return false}
function maybeScrollWindow(cm,rect){if(signalDOMEvent(cm,"scrollCursorIntoView")){return}
var display=cm.display,box=display.sizer.getBoundingClientRect(),doScroll=null
if(rect.top+box.top<0){doScroll=true}
else if(rect.bottom+box.top>(window.innerHeight||document.documentElement.clientHeight)){doScroll=false}
if(doScroll!=null&&!phantom){var scrollNode=elt("div","\u200b",null,("position: absolute;\n                         top: "+(rect.top-display.viewOffset-paddingTop(cm.display))+"px;\n                         height: "+(rect.bottom-rect.top+scrollGap(cm)+display.barHeight)+"px;\n                         left: "+(rect.left)+"px; width: "+(Math.max(2,rect.right-rect.left))+"px;"))
cm.display.lineSpace.appendChild(scrollNode)
scrollNode.scrollIntoView(doScroll)
cm.display.lineSpace.removeChild(scrollNode)}}
function scrollPosIntoView(cm,pos,end,margin){if(margin==null){margin=0}
var rect
if(!cm.options.lineWrapping&&pos==end){pos=pos.ch?Pos(pos.line,pos.sticky=="before"?pos.ch-1:pos.ch,"after"):pos
end=pos.sticky=="before"?Pos(pos.line,pos.ch+1,"before"):pos}
for(var limit=0;limit<5;limit++){var changed=false
var coords=cursorCoords(cm,pos)
var endCoords=!end||end==pos?coords:cursorCoords(cm,end)
rect={left:Math.min(coords.left,endCoords.left),top:Math.min(coords.top,endCoords.top)-margin,right:Math.max(coords.left,endCoords.left),bottom:Math.max(coords.bottom,endCoords.bottom)+margin}
var scrollPos=calculateScrollPos(cm,rect)
var startTop=cm.doc.scrollTop,startLeft=cm.doc.scrollLeft
if(scrollPos.scrollTop!=null){updateScrollTop(cm,scrollPos.scrollTop)
if(Math.abs(cm.doc.scrollTop-startTop)>1){changed=true}}
if(scrollPos.scrollLeft!=null){setScrollLeft(cm,scrollPos.scrollLeft)
if(Math.abs(cm.doc.scrollLeft-startLeft)>1){changed=true}}
if(!changed){break}}
return rect}
function scrollIntoView(cm,rect){var scrollPos=calculateScrollPos(cm,rect)
if(scrollPos.scrollTop!=null){updateScrollTop(cm,scrollPos.scrollTop)}
if(scrollPos.scrollLeft!=null){setScrollLeft(cm,scrollPos.scrollLeft)}}
function calculateScrollPos(cm,rect){var display=cm.display,snapMargin=textHeight(cm.display)
if(rect.top<0){rect.top=0}
var screentop=cm.curOp&&cm.curOp.scrollTop!=null?cm.curOp.scrollTop:display.scroller.scrollTop
var screen=displayHeight(cm),result={}
if(rect.bottom-rect.top>screen){rect.bottom=rect.top+screen}
var docBottom=cm.doc.height+paddingVert(display)
var atTop=rect.top<snapMargin,atBottom=rect.bottom>docBottom-snapMargin
if(rect.top<screentop){result.scrollTop=atTop?0:rect.top}else if(rect.bottom>screentop+screen){var newTop=Math.min(rect.top,(atBottom?docBottom:rect.bottom)-screen)
if(newTop!=screentop){result.scrollTop=newTop}}
var screenleft=cm.curOp&&cm.curOp.scrollLeft!=null?cm.curOp.scrollLeft:display.scroller.scrollLeft
var screenw=displayWidth(cm)-(cm.options.fixedGutter?display.gutters.offsetWidth:0)
var tooWide=rect.right-rect.left>screenw
if(tooWide){rect.right=rect.left+screenw}
if(rect.left<10)
{result.scrollLeft=0}
else if(rect.left<screenleft)
{result.scrollLeft=Math.max(0,rect.left-(tooWide?0:10))}
else if(rect.right>screenw+screenleft-3)
{result.scrollLeft=rect.right+(tooWide?0:10)-screenw}
return result}
function addToScrollTop(cm,top){if(top==null){return}
resolveScrollToPos(cm)
cm.curOp.scrollTop=(cm.curOp.scrollTop==null?cm.doc.scrollTop:cm.curOp.scrollTop)+top}
function ensureCursorVisible(cm){resolveScrollToPos(cm)
var cur=cm.getCursor()
cm.curOp.scrollToPos={from:cur,to:cur,margin:cm.options.cursorScrollMargin}}
function scrollToCoords(cm,x,y){if(x!=null||y!=null){resolveScrollToPos(cm)}
if(x!=null){cm.curOp.scrollLeft=x}
if(y!=null){cm.curOp.scrollTop=y}}
function scrollToRange(cm,range){resolveScrollToPos(cm)
cm.curOp.scrollToPos=range}
function resolveScrollToPos(cm){var range=cm.curOp.scrollToPos
if(range){cm.curOp.scrollToPos=null
var from=estimateCoords(cm,range.from),to=estimateCoords(cm,range.to)
scrollToCoordsRange(cm,from,to,range.margin)}}
function scrollToCoordsRange(cm,from,to,margin){var sPos=calculateScrollPos(cm,{left:Math.min(from.left,to.left),top:Math.min(from.top,to.top)-margin,right:Math.max(from.right,to.right),bottom:Math.max(from.bottom,to.bottom)+margin})
scrollToCoords(cm,sPos.scrollLeft,sPos.scrollTop)}
function updateScrollTop(cm,val){if(Math.abs(cm.doc.scrollTop-val)<2){return}
if(!gecko){updateDisplaySimple(cm,{top:val})}
setScrollTop(cm,val,true)
if(gecko){updateDisplaySimple(cm)}
startWorker(cm,100)}
function setScrollTop(cm,val,forceScroll){val=Math.min(cm.display.scroller.scrollHeight-cm.display.scroller.clientHeight,val)
if(cm.display.scroller.scrollTop==val&&!forceScroll){return}
cm.doc.scrollTop=val
cm.display.scrollbars.setScrollTop(val)
if(cm.display.scroller.scrollTop!=val){cm.display.scroller.scrollTop=val}}
function setScrollLeft(cm,val,isScroller,forceScroll){val=Math.min(val,cm.display.scroller.scrollWidth-cm.display.scroller.clientWidth)
if((isScroller?val==cm.doc.scrollLeft:Math.abs(cm.doc.scrollLeft-val)<2)&&!forceScroll){return}
cm.doc.scrollLeft=val
alignHorizontally(cm)
if(cm.display.scroller.scrollLeft!=val){cm.display.scroller.scrollLeft=val}
cm.display.scrollbars.setScrollLeft(val)}
function measureForScrollbars(cm){var d=cm.display,gutterW=d.gutters.offsetWidth
var docH=Math.round(cm.doc.height+paddingVert(cm.display))
return{clientHeight:d.scroller.clientHeight,viewHeight:d.wrapper.clientHeight,scrollWidth:d.scroller.scrollWidth,clientWidth:d.scroller.clientWidth,viewWidth:d.wrapper.clientWidth,barLeft:cm.options.fixedGutter?gutterW:0,docHeight:docH,scrollHeight:docH+scrollGap(cm)+d.barHeight,nativeBarWidth:d.nativeBarWidth,gutterWidth:gutterW}}
var NativeScrollbars=function(place,scroll,cm){this.cm=cm
var vert=this.vert=elt("div",[elt("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar")
var horiz=this.horiz=elt("div",[elt("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
vert.tabIndex=horiz.tabIndex=-1
place(vert);place(horiz)
on(vert,"scroll",function(){if(vert.clientHeight){scroll(vert.scrollTop,"vertical")}})
on(horiz,"scroll",function(){if(horiz.clientWidth){scroll(horiz.scrollLeft,"horizontal")}})
this.checkedZeroWidth=false
if(ie&&ie_version<8){this.horiz.style.minHeight=this.vert.style.minWidth="18px"}};NativeScrollbars.prototype.update=function(measure){var needsH=measure.scrollWidth>measure.clientWidth+1
var needsV=measure.scrollHeight>measure.clientHeight+1
var sWidth=measure.nativeBarWidth
if(needsV){this.vert.style.display="block"
this.vert.style.bottom=needsH?sWidth+"px":"0"
var totalHeight=measure.viewHeight-(needsH?sWidth:0)
this.vert.firstChild.style.height=Math.max(0,measure.scrollHeight-measure.clientHeight+totalHeight)+"px"}else{this.vert.style.display=""
this.vert.firstChild.style.height="0"}
if(needsH){this.horiz.style.display="block"
this.horiz.style.right=needsV?sWidth+"px":"0"
this.horiz.style.left=measure.barLeft+"px"
var totalWidth=measure.viewWidth-measure.barLeft-(needsV?sWidth:0)
this.horiz.firstChild.style.width=Math.max(0,measure.scrollWidth-measure.clientWidth+totalWidth)+"px"}else{this.horiz.style.display=""
this.horiz.firstChild.style.width="0"}
if(!this.checkedZeroWidth&&measure.clientHeight>0){if(sWidth==0){this.zeroWidthHack()}
this.checkedZeroWidth=true}
return{right:needsV?sWidth:0,bottom:needsH?sWidth:0}};NativeScrollbars.prototype.setScrollLeft=function(pos){if(this.horiz.scrollLeft!=pos){this.horiz.scrollLeft=pos}
if(this.disableHoriz){this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")}};NativeScrollbars.prototype.setScrollTop=function(pos){if(this.vert.scrollTop!=pos){this.vert.scrollTop=pos}
if(this.disableVert){this.enableZeroWidthBar(this.vert,this.disableVert,"vert")}};NativeScrollbars.prototype.zeroWidthHack=function(){var w=mac&&!mac_geMountainLion?"12px":"18px"
this.horiz.style.height=this.vert.style.width=w
this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none"
this.disableHoriz=new Delayed
this.disableVert=new Delayed};NativeScrollbars.prototype.enableZeroWidthBar=function(bar,delay,type){bar.style.pointerEvents="auto"
function maybeDisable(){var box=bar.getBoundingClientRect()
var elt=type=="vert"?document.elementFromPoint(box.right-1,(box.top+box.bottom)/2):document.elementFromPoint((box.right+box.left)/2,box.bottom-1)
if(elt!=bar){bar.style.pointerEvents="none"}
else{delay.set(1000,maybeDisable)}}
delay.set(1000,maybeDisable)};NativeScrollbars.prototype.clear=function(){var parent=this.horiz.parentNode
parent.removeChild(this.horiz)
parent.removeChild(this.vert)};var NullScrollbars=function(){};NullScrollbars.prototype.update=function(){return{bottom:0,right:0}};NullScrollbars.prototype.setScrollLeft=function(){};NullScrollbars.prototype.setScrollTop=function(){};NullScrollbars.prototype.clear=function(){};function updateScrollbars(cm,measure){if(!measure){measure=measureForScrollbars(cm)}
var startWidth=cm.display.barWidth,startHeight=cm.display.barHeight
updateScrollbarsInner(cm,measure)
for(var i=0;i<4&&startWidth!=cm.display.barWidth||startHeight!=cm.display.barHeight;i++){if(startWidth!=cm.display.barWidth&&cm.options.lineWrapping)
{updateHeightsInViewport(cm)}
updateScrollbarsInner(cm,measureForScrollbars(cm))
startWidth=cm.display.barWidth;startHeight=cm.display.barHeight}}
function updateScrollbarsInner(cm,measure){var d=cm.display
var sizes=d.scrollbars.update(measure)
d.sizer.style.paddingRight=(d.barWidth=sizes.right)+"px"
d.sizer.style.paddingBottom=(d.barHeight=sizes.bottom)+"px"
d.heightForcer.style.borderBottom=sizes.bottom+"px solid transparent"
if(sizes.right&&sizes.bottom){d.scrollbarFiller.style.display="block"
d.scrollbarFiller.style.height=sizes.bottom+"px"
d.scrollbarFiller.style.width=sizes.right+"px"}else{d.scrollbarFiller.style.display=""}
if(sizes.bottom&&cm.options.coverGutterNextToScrollbar&&cm.options.fixedGutter){d.gutterFiller.style.display="block"
d.gutterFiller.style.height=sizes.bottom+"px"
d.gutterFiller.style.width=measure.gutterWidth+"px"}else{d.gutterFiller.style.display=""}}
var scrollbarModel={"native":NativeScrollbars,"null":NullScrollbars}
function initScrollbars(cm){if(cm.display.scrollbars){cm.display.scrollbars.clear()
if(cm.display.scrollbars.addClass)
{rmClass(cm.display.wrapper,cm.display.scrollbars.addClass)}}
cm.display.scrollbars=new scrollbarModel[cm.options.scrollbarStyle](function(node){cm.display.wrapper.insertBefore(node,cm.display.scrollbarFiller)
on(node,"mousedown",function(){if(cm.state.focused){setTimeout(function(){return cm.display.input.focus();},0)}})
node.setAttribute("cm-not-content","true")},function(pos,axis){if(axis=="horizontal"){setScrollLeft(cm,pos)}
else{updateScrollTop(cm,pos)}},cm)
if(cm.display.scrollbars.addClass)
{addClass(cm.display.wrapper,cm.display.scrollbars.addClass)}}
var nextOpId=0
function startOperation(cm){cm.curOp={cm:cm,viewChanged:false,startHeight:cm.doc.height,forceUpdate:false,updateInput:null,typing:false,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:false,updateMaxLine:false,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:false,id:++nextOpId}
pushOperation(cm.curOp)}
function endOperation(cm){var op=cm.curOp
finishOperation(op,function(group){for(var i=0;i<group.ops.length;i++)
{group.ops[i].cm.curOp=null}
endOperations(group)})}
function endOperations(group){var ops=group.ops
for(var i=0;i<ops.length;i++)
{endOperation_R1(ops[i])}
for(var i$1=0;i$1<ops.length;i$1++)
{endOperation_W1(ops[i$1])}
for(var i$2=0;i$2<ops.length;i$2++)
{endOperation_R2(ops[i$2])}
for(var i$3=0;i$3<ops.length;i$3++)
{endOperation_W2(ops[i$3])}
for(var i$4=0;i$4<ops.length;i$4++)
{endOperation_finish(ops[i$4])}}
function endOperation_R1(op){var cm=op.cm,display=cm.display
maybeClipScrollbars(cm)
if(op.updateMaxLine){findMaxLine(cm)}
op.mustUpdate=op.viewChanged||op.forceUpdate||op.scrollTop!=null||op.scrollToPos&&(op.scrollToPos.from.line<display.viewFrom||op.scrollToPos.to.line>=display.viewTo)||display.maxLineChanged&&cm.options.lineWrapping
op.update=op.mustUpdate&&new DisplayUpdate(cm,op.mustUpdate&&{top:op.scrollTop,ensure:op.scrollToPos},op.forceUpdate)}
function endOperation_W1(op){op.updatedDisplay=op.mustUpdate&&updateDisplayIfNeeded(op.cm,op.update)}
function endOperation_R2(op){var cm=op.cm,display=cm.display
if(op.updatedDisplay){updateHeightsInViewport(cm)}
op.barMeasure=measureForScrollbars(cm)
if(display.maxLineChanged&&!cm.options.lineWrapping){op.adjustWidthTo=measureChar(cm,display.maxLine,display.maxLine.text.length).left+3
cm.display.sizerWidth=op.adjustWidthTo
op.barMeasure.scrollWidth=Math.max(display.scroller.clientWidth,display.sizer.offsetLeft+op.adjustWidthTo+scrollGap(cm)+cm.display.barWidth)
op.maxScrollLeft=Math.max(0,display.sizer.offsetLeft+op.adjustWidthTo-displayWidth(cm))}
if(op.updatedDisplay||op.selectionChanged)
{op.preparedSelection=display.input.prepareSelection()}}
function endOperation_W2(op){var cm=op.cm
if(op.adjustWidthTo!=null){cm.display.sizer.style.minWidth=op.adjustWidthTo+"px"
if(op.maxScrollLeft<cm.doc.scrollLeft)
{setScrollLeft(cm,Math.min(cm.display.scroller.scrollLeft,op.maxScrollLeft),true)}
cm.display.maxLineChanged=false}
var takeFocus=op.focus&&op.focus==activeElt()
if(op.preparedSelection)
{cm.display.input.showSelection(op.preparedSelection,takeFocus)}
if(op.updatedDisplay||op.startHeight!=cm.doc.height)
{updateScrollbars(cm,op.barMeasure)}
if(op.updatedDisplay)
{setDocumentHeight(cm,op.barMeasure)}
if(op.selectionChanged){restartBlink(cm)}
if(cm.state.focused&&op.updateInput)
{cm.display.input.reset(op.typing)}
if(takeFocus){ensureFocus(op.cm)}}
function endOperation_finish(op){var cm=op.cm,display=cm.display,doc=cm.doc
if(op.updatedDisplay){postUpdateDisplay(cm,op.update)}
if(display.wheelStartX!=null&&(op.scrollTop!=null||op.scrollLeft!=null||op.scrollToPos))
{display.wheelStartX=display.wheelStartY=null}
if(op.scrollTop!=null){setScrollTop(cm,op.scrollTop,op.forceScroll)}
if(op.scrollLeft!=null){setScrollLeft(cm,op.scrollLeft,true,true)}
if(op.scrollToPos){var rect=scrollPosIntoView(cm,clipPos(doc,op.scrollToPos.from),clipPos(doc,op.scrollToPos.to),op.scrollToPos.margin)
maybeScrollWindow(cm,rect)}
var hidden=op.maybeHiddenMarkers,unhidden=op.maybeUnhiddenMarkers
if(hidden){for(var i=0;i<hidden.length;++i)
{if(!hidden[i].lines.length){signal(hidden[i],"hide")}}}
if(unhidden){for(var i$1=0;i$1<unhidden.length;++i$1)
{if(unhidden[i$1].lines.length){signal(unhidden[i$1],"unhide")}}}
if(display.wrapper.offsetHeight)
{doc.scrollTop=cm.display.scroller.scrollTop}
if(op.changeObjs)
{signal(cm,"changes",cm,op.changeObjs)}
if(op.update)
{op.update.finish()}}
function runInOp(cm,f){if(cm.curOp){return f()}
startOperation(cm)
try{return f()}
finally{endOperation(cm)}}
function operation(cm,f){return function(){if(cm.curOp){return f.apply(cm,arguments)}
startOperation(cm)
try{return f.apply(cm,arguments)}
finally{endOperation(cm)}}}
function methodOp(f){return function(){if(this.curOp){return f.apply(this,arguments)}
startOperation(this)
try{return f.apply(this,arguments)}
finally{endOperation(this)}}}
function docMethodOp(f){return function(){var cm=this.cm
if(!cm||cm.curOp){return f.apply(this,arguments)}
startOperation(cm)
try{return f.apply(this,arguments)}
finally{endOperation(cm)}}}
function regChange(cm,from,to,lendiff){if(from==null){from=cm.doc.first}
if(to==null){to=cm.doc.first+cm.doc.size}
if(!lendiff){lendiff=0}
var display=cm.display
if(lendiff&&to<display.viewTo&&(display.updateLineNumbers==null||display.updateLineNumbers>from))
{display.updateLineNumbers=from}
cm.curOp.viewChanged=true
if(from>=display.viewTo){if(sawCollapsedSpans&&visualLineNo(cm.doc,from)<display.viewTo)
{resetView(cm)}}else if(to<=display.viewFrom){if(sawCollapsedSpans&&visualLineEndNo(cm.doc,to+lendiff)>display.viewFrom){resetView(cm)}else{display.viewFrom+=lendiff
display.viewTo+=lendiff}}else if(from<=display.viewFrom&&to>=display.viewTo){resetView(cm)}else if(from<=display.viewFrom){var cut=viewCuttingPoint(cm,to,to+lendiff,1)
if(cut){display.view=display.view.slice(cut.index)
display.viewFrom=cut.lineN
display.viewTo+=lendiff}else{resetView(cm)}}else if(to>=display.viewTo){var cut$1=viewCuttingPoint(cm,from,from,-1)
if(cut$1){display.view=display.view.slice(0,cut$1.index)
display.viewTo=cut$1.lineN}else{resetView(cm)}}else{var cutTop=viewCuttingPoint(cm,from,from,-1)
var cutBot=viewCuttingPoint(cm,to,to+lendiff,1)
if(cutTop&&cutBot){display.view=display.view.slice(0,cutTop.index).concat(buildViewArray(cm,cutTop.lineN,cutBot.lineN)).concat(display.view.slice(cutBot.index))
display.viewTo+=lendiff}else{resetView(cm)}}
var ext=display.externalMeasured
if(ext){if(to<ext.lineN)
{ext.lineN+=lendiff}
else if(from<ext.lineN+ext.size)
{display.externalMeasured=null}}}
function regLineChange(cm,line,type){cm.curOp.viewChanged=true
var display=cm.display,ext=cm.display.externalMeasured
if(ext&&line>=ext.lineN&&line<ext.lineN+ext.size)
{display.externalMeasured=null}
if(line<display.viewFrom||line>=display.viewTo){return}
var lineView=display.view[findViewIndex(cm,line)]
if(lineView.node==null){return}
var arr=lineView.changes||(lineView.changes=[])
if(indexOf(arr,type)==-1){arr.push(type)}}
function resetView(cm){cm.display.viewFrom=cm.display.viewTo=cm.doc.first
cm.display.view=[]
cm.display.viewOffset=0}
function viewCuttingPoint(cm,oldN,newN,dir){var index=findViewIndex(cm,oldN),diff,view=cm.display.view
if(!sawCollapsedSpans||newN==cm.doc.first+cm.doc.size)
{return{index:index,lineN:newN}}
var n=cm.display.viewFrom
for(var i=0;i<index;i++)
{n+=view[i].size}
if(n!=oldN){if(dir>0){if(index==view.length-1){return null}
diff=(n+view[index].size)-oldN
index++}else{diff=n-oldN}
oldN+=diff;newN+=diff}
while(visualLineNo(cm.doc,newN)!=newN){if(index==(dir<0?0:view.length-1)){return null}
newN+=dir*view[index-(dir<0?1:0)].size
index+=dir}
return{index:index,lineN:newN}}
function adjustView(cm,from,to){var display=cm.display,view=display.view
if(view.length==0||from>=display.viewTo||to<=display.viewFrom){display.view=buildViewArray(cm,from,to)
display.viewFrom=from}else{if(display.viewFrom>from)
{display.view=buildViewArray(cm,from,display.viewFrom).concat(display.view)}
else if(display.viewFrom<from)
{display.view=display.view.slice(findViewIndex(cm,from))}
display.viewFrom=from
if(display.viewTo<to)
{display.view=display.view.concat(buildViewArray(cm,display.viewTo,to))}
else if(display.viewTo>to)
{display.view=display.view.slice(0,findViewIndex(cm,to))}}
display.viewTo=to}
function countDirtyView(cm){var view=cm.display.view,dirty=0
for(var i=0;i<view.length;i++){var lineView=view[i]
if(!lineView.hidden&&(!lineView.node||lineView.changes)){++dirty}}
return dirty}
function startWorker(cm,time){if(cm.doc.highlightFrontier<cm.display.viewTo)
{cm.state.highlight.set(time,bind(highlightWorker,cm))}}
function highlightWorker(cm){var doc=cm.doc
if(doc.highlightFrontier>=cm.display.viewTo){return}
var end=+new Date+cm.options.workTime
var context=getContextBefore(cm,doc.highlightFrontier)
var changedLines=[]
doc.iter(context.line,Math.min(doc.first+doc.size,cm.display.viewTo+500),function(line){if(context.line>=cm.display.viewFrom){var oldStyles=line.styles
var resetState=line.text.length>cm.options.maxHighlightLength?copyState(doc.mode,context.state):null
var highlighted=highlightLine(cm,line,context,true)
if(resetState){context.state=resetState}
line.styles=highlighted.styles
var oldCls=line.styleClasses,newCls=highlighted.classes
if(newCls){line.styleClasses=newCls}
else if(oldCls){line.styleClasses=null}
var ischange=!oldStyles||oldStyles.length!=line.styles.length||oldCls!=newCls&&(!oldCls||!newCls||oldCls.bgClass!=newCls.bgClass||oldCls.textClass!=newCls.textClass)
for(var i=0;!ischange&&i<oldStyles.length;++i){ischange=oldStyles[i]!=line.styles[i]}
if(ischange){changedLines.push(context.line)}
line.stateAfter=context.save()
context.nextLine()}else{if(line.text.length<=cm.options.maxHighlightLength)
{processLine(cm,line.text,context)}
line.stateAfter=context.line%5==0?context.save():null
context.nextLine()}
if(+new Date>end){startWorker(cm,cm.options.workDelay)
return true}})
doc.highlightFrontier=context.line
doc.modeFrontier=Math.max(doc.modeFrontier,context.line)
if(changedLines.length){runInOp(cm,function(){for(var i=0;i<changedLines.length;i++)
{regLineChange(cm,changedLines[i],"text")}})}}
var DisplayUpdate=function(cm,viewport,force){var display=cm.display
this.viewport=viewport
this.visible=visibleLines(display,cm.doc,viewport)
this.editorIsHidden=!display.wrapper.offsetWidth
this.wrapperHeight=display.wrapper.clientHeight
this.wrapperWidth=display.wrapper.clientWidth
this.oldDisplayWidth=displayWidth(cm)
this.force=force
this.dims=getDimensions(cm)
this.events=[]};DisplayUpdate.prototype.signal=function(emitter,type){if(hasHandler(emitter,type))
{this.events.push(arguments)}};DisplayUpdate.prototype.finish=function(){var this$1=this;for(var i=0;i<this.events.length;i++)
{signal.apply(null,this$1.events[i])}};function maybeClipScrollbars(cm){var display=cm.display
if(!display.scrollbarsClipped&&display.scroller.offsetWidth){display.nativeBarWidth=display.scroller.offsetWidth-display.scroller.clientWidth
display.heightForcer.style.height=scrollGap(cm)+"px"
display.sizer.style.marginBottom=-display.nativeBarWidth+"px"
display.sizer.style.borderRightWidth=scrollGap(cm)+"px"
display.scrollbarsClipped=true}}
function selectionSnapshot(cm){if(cm.hasFocus()){return null}
var active=activeElt()
if(!active||!contains(cm.display.lineDiv,active)){return null}
var result={activeElt:active}
if(window.getSelection){var sel=window.getSelection()
if(sel.anchorNode&&sel.extend&&contains(cm.display.lineDiv,sel.anchorNode)){result.anchorNode=sel.anchorNode
result.anchorOffset=sel.anchorOffset
result.focusNode=sel.focusNode
result.focusOffset=sel.focusOffset}}
return result}
function restoreSelection(snapshot){if(!snapshot||!snapshot.activeElt||snapshot.activeElt==activeElt()){return}
snapshot.activeElt.focus()
if(snapshot.anchorNode&&contains(document.body,snapshot.anchorNode)&&contains(document.body,snapshot.focusNode)){var sel=window.getSelection(),range=document.createRange()
range.setEnd(snapshot.anchorNode,snapshot.anchorOffset)
range.collapse(false)
sel.removeAllRanges()
sel.addRange(range)
sel.extend(snapshot.focusNode,snapshot.focusOffset)}}
function updateDisplayIfNeeded(cm,update){var display=cm.display,doc=cm.doc
if(update.editorIsHidden){resetView(cm)
return false}
if(!update.force&&update.visible.from>=display.viewFrom&&update.visible.to<=display.viewTo&&(display.updateLineNumbers==null||display.updateLineNumbers>=display.viewTo)&&display.renderedView==display.view&&countDirtyView(cm)==0)
{return false}
if(maybeUpdateLineNumberWidth(cm)){resetView(cm)
update.dims=getDimensions(cm)}
var end=doc.first+doc.size
var from=Math.max(update.visible.from-cm.options.viewportMargin,doc.first)
var to=Math.min(end,update.visible.to+cm.options.viewportMargin)
if(display.viewFrom<from&&from-display.viewFrom<20){from=Math.max(doc.first,display.viewFrom)}
if(display.viewTo>to&&display.viewTo-to<20){to=Math.min(end,display.viewTo)}
if(sawCollapsedSpans){from=visualLineNo(cm.doc,from)
to=visualLineEndNo(cm.doc,to)}
var different=from!=display.viewFrom||to!=display.viewTo||display.lastWrapHeight!=update.wrapperHeight||display.lastWrapWidth!=update.wrapperWidth
adjustView(cm,from,to)
display.viewOffset=heightAtLine(getLine(cm.doc,display.viewFrom))
cm.display.mover.style.top=display.viewOffset+"px"
var toUpdate=countDirtyView(cm)
if(!different&&toUpdate==0&&!update.force&&display.renderedView==display.view&&(display.updateLineNumbers==null||display.updateLineNumbers>=display.viewTo))
{return false}
var selSnapshot=selectionSnapshot(cm)
if(toUpdate>4){display.lineDiv.style.display="none"}
patchDisplay(cm,display.updateLineNumbers,update.dims)
if(toUpdate>4){display.lineDiv.style.display=""}
display.renderedView=display.view
restoreSelection(selSnapshot)
removeChildren(display.cursorDiv)
removeChildren(display.selectionDiv)
display.gutters.style.height=display.sizer.style.minHeight=0
if(different){display.lastWrapHeight=update.wrapperHeight
display.lastWrapWidth=update.wrapperWidth
startWorker(cm,400)}
display.updateLineNumbers=null
return true}
function postUpdateDisplay(cm,update){var viewport=update.viewport
for(var first=true;;first=false){if(!first||!cm.options.lineWrapping||update.oldDisplayWidth==displayWidth(cm)){if(viewport&&viewport.top!=null)
{viewport={top:Math.min(cm.doc.height+paddingVert(cm.display)-displayHeight(cm),viewport.top)}}
update.visible=visibleLines(cm.display,cm.doc,viewport)
if(update.visible.from>=cm.display.viewFrom&&update.visible.to<=cm.display.viewTo)
{break}}
if(!updateDisplayIfNeeded(cm,update)){break}
updateHeightsInViewport(cm)
var barMeasure=measureForScrollbars(cm)
updateSelection(cm)
updateScrollbars(cm,barMeasure)
setDocumentHeight(cm,barMeasure)
update.force=false}
update.signal(cm,"update",cm)
if(cm.display.viewFrom!=cm.display.reportedViewFrom||cm.display.viewTo!=cm.display.reportedViewTo){update.signal(cm,"viewportChange",cm,cm.display.viewFrom,cm.display.viewTo)
cm.display.reportedViewFrom=cm.display.viewFrom;cm.display.reportedViewTo=cm.display.viewTo}}
function updateDisplaySimple(cm,viewport){var update=new DisplayUpdate(cm,viewport)
if(updateDisplayIfNeeded(cm,update)){updateHeightsInViewport(cm)
postUpdateDisplay(cm,update)
var barMeasure=measureForScrollbars(cm)
updateSelection(cm)
updateScrollbars(cm,barMeasure)
setDocumentHeight(cm,barMeasure)
update.finish()}}
function patchDisplay(cm,updateNumbersFrom,dims){var display=cm.display,lineNumbers=cm.options.lineNumbers
var container=display.lineDiv,cur=container.firstChild
function rm(node){var next=node.nextSibling
if(webkit&&mac&&cm.display.currentWheelTarget==node)
{node.style.display="none"}
else
{node.parentNode.removeChild(node)}
return next}
var view=display.view,lineN=display.viewFrom
for(var i=0;i<view.length;i++){var lineView=view[i]
if(lineView.hidden){}else if(!lineView.node||lineView.node.parentNode!=container){var node=buildLineElement(cm,lineView,lineN,dims)
container.insertBefore(node,cur)}else{while(cur!=lineView.node){cur=rm(cur)}
var updateNumber=lineNumbers&&updateNumbersFrom!=null&&updateNumbersFrom<=lineN&&lineView.lineNumber
if(lineView.changes){if(indexOf(lineView.changes,"gutter")>-1){updateNumber=false}
updateLineForChanges(cm,lineView,lineN,dims)}
if(updateNumber){removeChildren(lineView.lineNumber)
lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options,lineN)))}
cur=lineView.node.nextSibling}
lineN+=lineView.size}
while(cur){cur=rm(cur)}}
function updateGutterSpace(cm){var width=cm.display.gutters.offsetWidth
cm.display.sizer.style.marginLeft=width+"px"}
function setDocumentHeight(cm,measure){cm.display.sizer.style.minHeight=measure.docHeight+"px"
cm.display.heightForcer.style.top=measure.docHeight+"px"
cm.display.gutters.style.height=(measure.docHeight+cm.display.barHeight+scrollGap(cm))+"px"}
function updateGutters(cm){var gutters=cm.display.gutters,specs=cm.options.gutters
removeChildren(gutters)
var i=0
for(;i<specs.length;++i){var gutterClass=specs[i]
var gElt=gutters.appendChild(elt("div",null,"CodeMirror-gutter "+gutterClass))
if(gutterClass=="CodeMirror-linenumbers"){cm.display.lineGutter=gElt
gElt.style.width=(cm.display.lineNumWidth||1)+"px"}}
gutters.style.display=i?"":"none"
updateGutterSpace(cm)}
function setGuttersForLineNumbers(options){var found=indexOf(options.gutters,"CodeMirror-linenumbers")
if(found==-1&&options.lineNumbers){options.gutters=options.gutters.concat(["CodeMirror-linenumbers"])}else if(found>-1&&!options.lineNumbers){options.gutters=options.gutters.slice(0)
options.gutters.splice(found,1)}}
var wheelSamples=0;var wheelPixelsPerUnit=null;if(ie){wheelPixelsPerUnit=-.53}
else if(gecko){wheelPixelsPerUnit=15}
else if(chrome){wheelPixelsPerUnit=-.7}
else if(safari){wheelPixelsPerUnit=-1/3}
function wheelEventDelta(e){var dx=e.wheelDeltaX,dy=e.wheelDeltaY
if(dx==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS){dx=e.detail}
if(dy==null&&e.detail&&e.axis==e.VERTICAL_AXIS){dy=e.detail}
else if(dy==null){dy=e.wheelDelta}
return{x:dx,y:dy}}
function wheelEventPixels(e){var delta=wheelEventDelta(e)
delta.x*=wheelPixelsPerUnit
delta.y*=wheelPixelsPerUnit
return delta}
function onScrollWheel(cm,e){var delta=wheelEventDelta(e),dx=delta.x,dy=delta.y
var display=cm.display,scroll=display.scroller
var canScrollX=scroll.scrollWidth>scroll.clientWidth
var canScrollY=scroll.scrollHeight>scroll.clientHeight
if(!(dx&&canScrollX||dy&&canScrollY)){return}
if(dy&&mac&&webkit){outer:for(var cur=e.target,view=display.view;cur!=scroll;cur=cur.parentNode){for(var i=0;i<view.length;i++){if(view[i].node==cur){cm.display.currentWheelTarget=cur
break outer}}}}
if(dx&&!gecko&&!presto&&wheelPixelsPerUnit!=null){if(dy&&canScrollY)
{updateScrollTop(cm,Math.max(0,scroll.scrollTop+dy*wheelPixelsPerUnit))}
setScrollLeft(cm,Math.max(0,scroll.scrollLeft+dx*wheelPixelsPerUnit))
if(!dy||(dy&&canScrollY))
{e_preventDefault(e)}
display.wheelStartX=null
return}
if(dy&&wheelPixelsPerUnit!=null){var pixels=dy*wheelPixelsPerUnit
var top=cm.doc.scrollTop,bot=top+display.wrapper.clientHeight
if(pixels<0){top=Math.max(0,top+pixels-50)}
else{bot=Math.min(cm.doc.height,bot+pixels+50)}
updateDisplaySimple(cm,{top:top,bottom:bot})}
if(wheelSamples<20){if(display.wheelStartX==null){display.wheelStartX=scroll.scrollLeft;display.wheelStartY=scroll.scrollTop
display.wheelDX=dx;display.wheelDY=dy
setTimeout(function(){if(display.wheelStartX==null){return}
var movedX=scroll.scrollLeft-display.wheelStartX
var movedY=scroll.scrollTop-display.wheelStartY
var sample=(movedY&&display.wheelDY&&movedY/display.wheelDY)||(movedX&&display.wheelDX&&movedX/display.wheelDX)
display.wheelStartX=display.wheelStartY=null
if(!sample){return}
wheelPixelsPerUnit=(wheelPixelsPerUnit*wheelSamples+sample)/(wheelSamples+1)
++wheelSamples},200)}else{display.wheelDX+=dx;display.wheelDY+=dy}}}
var Selection=function(ranges,primIndex){this.ranges=ranges
this.primIndex=primIndex};Selection.prototype.primary=function(){return this.ranges[this.primIndex]};Selection.prototype.equals=function(other){var this$1=this;if(other==this){return true}
if(other.primIndex!=this.primIndex||other.ranges.length!=this.ranges.length){return false}
for(var i=0;i<this.ranges.length;i++){var here=this$1.ranges[i],there=other.ranges[i]
if(!equalCursorPos(here.anchor,there.anchor)||!equalCursorPos(here.head,there.head)){return false}}
return true};Selection.prototype.deepCopy=function(){var this$1=this;var out=[]
for(var i=0;i<this.ranges.length;i++)
{out[i]=new Range(copyPos(this$1.ranges[i].anchor),copyPos(this$1.ranges[i].head))}
return new Selection(out,this.primIndex)};Selection.prototype.somethingSelected=function(){var this$1=this;for(var i=0;i<this.ranges.length;i++)
{if(!this$1.ranges[i].empty()){return true}}
return false};Selection.prototype.contains=function(pos,end){var this$1=this;if(!end){end=pos}
for(var i=0;i<this.ranges.length;i++){var range=this$1.ranges[i]
if(cmp(end,range.from())>=0&&cmp(pos,range.to())<=0)
{return i}}
return-1};var Range=function(anchor,head){this.anchor=anchor;this.head=head};Range.prototype.from=function(){return minPos(this.anchor,this.head)};Range.prototype.to=function(){return maxPos(this.anchor,this.head)};Range.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function normalizeSelection(ranges,primIndex){var prim=ranges[primIndex]
ranges.sort(function(a,b){return cmp(a.from(),b.from());})
primIndex=indexOf(ranges,prim)
for(var i=1;i<ranges.length;i++){var cur=ranges[i],prev=ranges[i-1]
if(cmp(prev.to(),cur.from())>=0){var from=minPos(prev.from(),cur.from()),to=maxPos(prev.to(),cur.to())
var inv=prev.empty()?cur.from()==cur.head:prev.from()==prev.head
if(i<=primIndex){--primIndex}
ranges.splice(--i,2,new Range(inv?to:from,inv?from:to))}}
return new Selection(ranges,primIndex)}
function simpleSelection(anchor,head){return new Selection([new Range(anchor,head||anchor)],0)}
function changeEnd(change){if(!change.text){return change.to}
return Pos(change.from.line+change.text.length-1,lst(change.text).length+(change.text.length==1?change.from.ch:0))}
function adjustForChange(pos,change){if(cmp(pos,change.from)<0){return pos}
if(cmp(pos,change.to)<=0){return changeEnd(change)}
var line=pos.line+change.text.length-(change.to.line-change.from.line)-1,ch=pos.ch
if(pos.line==change.to.line){ch+=changeEnd(change).ch-change.to.ch}
return Pos(line,ch)}
function computeSelAfterChange(doc,change){var out=[]
for(var i=0;i<doc.sel.ranges.length;i++){var range=doc.sel.ranges[i]
out.push(new Range(adjustForChange(range.anchor,change),adjustForChange(range.head,change)))}
return normalizeSelection(out,doc.sel.primIndex)}
function offsetPos(pos,old,nw){if(pos.line==old.line)
{return Pos(nw.line,pos.ch-old.ch+nw.ch)}
else
{return Pos(nw.line+(pos.line-old.line),pos.ch)}}
function computeReplacedSel(doc,changes,hint){var out=[]
var oldPrev=Pos(doc.first,0),newPrev=oldPrev
for(var i=0;i<changes.length;i++){var change=changes[i]
var from=offsetPos(change.from,oldPrev,newPrev)
var to=offsetPos(changeEnd(change),oldPrev,newPrev)
oldPrev=change.to
newPrev=to
if(hint=="around"){var range=doc.sel.ranges[i],inv=cmp(range.head,range.anchor)<0
out[i]=new Range(inv?to:from,inv?from:to)}else{out[i]=new Range(from,from)}}
return new Selection(out,doc.sel.primIndex)}
function loadMode(cm){cm.doc.mode=getMode(cm.options,cm.doc.modeOption)
resetModeState(cm)}
function resetModeState(cm){cm.doc.iter(function(line){if(line.stateAfter){line.stateAfter=null}
if(line.styles){line.styles=null}})
cm.doc.modeFrontier=cm.doc.highlightFrontier=cm.doc.first
startWorker(cm,100)
cm.state.modeGen++
if(cm.curOp){regChange(cm)}}
function isWholeLineUpdate(doc,change){return change.from.ch==0&&change.to.ch==0&&lst(change.text)==""&&(!doc.cm||doc.cm.options.wholeLineUpdateBefore)}
function updateDoc(doc,change,markedSpans,estimateHeight){function spansFor(n){return markedSpans?markedSpans[n]:null}
function update(line,text,spans){updateLine(line,text,spans,estimateHeight)
signalLater(line,"change",line,change)}
function linesFor(start,end){var result=[]
for(var i=start;i<end;++i)
{result.push(new Line(text[i],spansFor(i),estimateHeight))}
return result}
var from=change.from,to=change.to,text=change.text
var firstLine=getLine(doc,from.line),lastLine=getLine(doc,to.line)
var lastText=lst(text),lastSpans=spansFor(text.length-1),nlines=to.line-from.line
if(change.full){doc.insert(0,linesFor(0,text.length))
doc.remove(text.length,doc.size-text.length)}else if(isWholeLineUpdate(doc,change)){var added=linesFor(0,text.length-1)
update(lastLine,lastLine.text,lastSpans)
if(nlines){doc.remove(from.line,nlines)}
if(added.length){doc.insert(from.line,added)}}else if(firstLine==lastLine){if(text.length==1){update(firstLine,firstLine.text.slice(0,from.ch)+lastText+firstLine.text.slice(to.ch),lastSpans)}else{var added$1=linesFor(1,text.length-1)
added$1.push(new Line(lastText+firstLine.text.slice(to.ch),lastSpans,estimateHeight))
update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0))
doc.insert(from.line+1,added$1)}}else if(text.length==1){update(firstLine,firstLine.text.slice(0,from.ch)+text[0]+lastLine.text.slice(to.ch),spansFor(0))
doc.remove(from.line+1,nlines)}else{update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0))
update(lastLine,lastText+lastLine.text.slice(to.ch),lastSpans)
var added$2=linesFor(1,text.length-1)
if(nlines>1){doc.remove(from.line+1,nlines-1)}
doc.insert(from.line+1,added$2)}
signalLater(doc,"change",doc,change)}
function linkedDocs(doc,f,sharedHistOnly){function propagate(doc,skip,sharedHist){if(doc.linked){for(var i=0;i<doc.linked.length;++i){var rel=doc.linked[i]
if(rel.doc==skip){continue}
var shared=sharedHist&&rel.sharedHist
if(sharedHistOnly&&!shared){continue}
f(rel.doc,shared)
propagate(rel.doc,doc,shared)}}}
propagate(doc,null,true)}
function attachDoc(cm,doc){if(doc.cm){throw new Error("This document is already in use.")}
cm.doc=doc
doc.cm=cm
estimateLineHeights(cm)
loadMode(cm)
setDirectionClass(cm)
if(!cm.options.lineWrapping){findMaxLine(cm)}
cm.options.mode=doc.modeOption
regChange(cm)}
function setDirectionClass(cm){;(cm.doc.direction=="rtl"?addClass:rmClass)(cm.display.lineDiv,"CodeMirror-rtl")}
function directionChanged(cm){runInOp(cm,function(){setDirectionClass(cm)
regChange(cm)})}
function History(startGen){this.done=[];this.undone=[]
this.undoDepth=Infinity
this.lastModTime=this.lastSelTime=0
this.lastOp=this.lastSelOp=null
this.lastOrigin=this.lastSelOrigin=null
this.generation=this.maxGeneration=startGen||1}
function historyChangeFromChange(doc,change){var histChange={from:copyPos(change.from),to:changeEnd(change),text:getBetween(doc,change.from,change.to)}
attachLocalSpans(doc,histChange,change.from.line,change.to.line+1)
linkedDocs(doc,function(doc){return attachLocalSpans(doc,histChange,change.from.line,change.to.line+1);},true)
return histChange}
function clearSelectionEvents(array){while(array.length){var last=lst(array)
if(last.ranges){array.pop()}
else{break}}}
function lastChangeEvent(hist,force){if(force){clearSelectionEvents(hist.done)
return lst(hist.done)}else if(hist.done.length&&!lst(hist.done).ranges){return lst(hist.done)}else if(hist.done.length>1&&!hist.done[hist.done.length-2].ranges){hist.done.pop()
return lst(hist.done)}}
function addChangeToHistory(doc,change,selAfter,opId){var hist=doc.history
hist.undone.length=0
var time=+new Date,cur
var last
if((hist.lastOp==opId||hist.lastOrigin==change.origin&&change.origin&&((change.origin.charAt(0)=="+"&&hist.lastModTime>time-(doc.cm?doc.cm.options.historyEventDelay:500))||change.origin.charAt(0)=="*"))&&(cur=lastChangeEvent(hist,hist.lastOp==opId))){last=lst(cur.changes)
if(cmp(change.from,change.to)==0&&cmp(change.from,last.to)==0){last.to=changeEnd(change)}else{cur.changes.push(historyChangeFromChange(doc,change))}}else{var before=lst(hist.done)
if(!before||!before.ranges)
{pushSelectionToHistory(doc.sel,hist.done)}
cur={changes:[historyChangeFromChange(doc,change)],generation:hist.generation}
hist.done.push(cur)
while(hist.done.length>hist.undoDepth){hist.done.shift()
if(!hist.done[0].ranges){hist.done.shift()}}}
hist.done.push(selAfter)
hist.generation=++hist.maxGeneration
hist.lastModTime=hist.lastSelTime=time
hist.lastOp=hist.lastSelOp=opId
hist.lastOrigin=hist.lastSelOrigin=change.origin
if(!last){signal(doc,"historyAdded")}}
function selectionEventCanBeMerged(doc,origin,prev,sel){var ch=origin.charAt(0)
return ch=="*"||ch=="+"&&prev.ranges.length==sel.ranges.length&&prev.somethingSelected()==sel.somethingSelected()&&new Date-doc.history.lastSelTime<=(doc.cm?doc.cm.options.historyEventDelay:500)}
function addSelectionToHistory(doc,sel,opId,options){var hist=doc.history,origin=options&&options.origin
if(opId==hist.lastSelOp||(origin&&hist.lastSelOrigin==origin&&(hist.lastModTime==hist.lastSelTime&&hist.lastOrigin==origin||selectionEventCanBeMerged(doc,origin,lst(hist.done),sel))))
{hist.done[hist.done.length-1]=sel}
else
{pushSelectionToHistory(sel,hist.done)}
hist.lastSelTime=+new Date
hist.lastSelOrigin=origin
hist.lastSelOp=opId
if(options&&options.clearRedo!==false)
{clearSelectionEvents(hist.undone)}}
function pushSelectionToHistory(sel,dest){var top=lst(dest)
if(!(top&&top.ranges&&top.equals(sel)))
{dest.push(sel)}}
function attachLocalSpans(doc,change,from,to){var existing=change["spans_"+doc.id],n=0
doc.iter(Math.max(doc.first,from),Math.min(doc.first+doc.size,to),function(line){if(line.markedSpans)
{(existing||(existing=change["spans_"+doc.id]={}))[n]=line.markedSpans}
++n})}
function removeClearedSpans(spans){if(!spans){return null}
var out
for(var i=0;i<spans.length;++i){if(spans[i].marker.explicitlyCleared){if(!out){out=spans.slice(0,i)}}
else if(out){out.push(spans[i])}}
return!out?spans:out.length?out:null}
function getOldSpans(doc,change){var found=change["spans_"+doc.id]
if(!found){return null}
var nw=[]
for(var i=0;i<change.text.length;++i)
{nw.push(removeClearedSpans(found[i]))}
return nw}
function mergeOldSpans(doc,change){var old=getOldSpans(doc,change)
var stretched=stretchSpansOverChange(doc,change)
if(!old){return stretched}
if(!stretched){return old}
for(var i=0;i<old.length;++i){var oldCur=old[i],stretchCur=stretched[i]
if(oldCur&&stretchCur){spans:for(var j=0;j<stretchCur.length;++j){var span=stretchCur[j]
for(var k=0;k<oldCur.length;++k)
{if(oldCur[k].marker==span.marker){continue spans}}
oldCur.push(span)}}else if(stretchCur){old[i]=stretchCur}}
return old}
function copyHistoryArray(events,newGroup,instantiateSel){var copy=[]
for(var i=0;i<events.length;++i){var event=events[i]
if(event.ranges){copy.push(instantiateSel?Selection.prototype.deepCopy.call(event):event)
continue}
var changes=event.changes,newChanges=[]
copy.push({changes:newChanges})
for(var j=0;j<changes.length;++j){var change=changes[j],m=(void 0)
newChanges.push({from:change.from,to:change.to,text:change.text})
if(newGroup){for(var prop in change){if(m=prop.match(/^spans_(\d+)$/)){if(indexOf(newGroup,Number(m[1]))>-1){lst(newChanges)[prop]=change[prop]
delete change[prop]}}}}}}
return copy}
function extendRange(range,head,other,extend){if(extend){var anchor=range.anchor
if(other){var posBefore=cmp(head,anchor)<0
if(posBefore!=(cmp(other,anchor)<0)){anchor=head
head=other}else if(posBefore!=(cmp(head,other)<0)){head=other}}
return new Range(anchor,head)}else{return new Range(other||head,head)}}
function extendSelection(doc,head,other,options,extend){if(extend==null){extend=doc.cm&&(doc.cm.display.shift||doc.extend)}
setSelection(doc,new Selection([extendRange(doc.sel.primary(),head,other,extend)],0),options)}
function extendSelections(doc,heads,options){var out=[]
var extend=doc.cm&&(doc.cm.display.shift||doc.extend)
for(var i=0;i<doc.sel.ranges.length;i++)
{out[i]=extendRange(doc.sel.ranges[i],heads[i],null,extend)}
var newSel=normalizeSelection(out,doc.sel.primIndex)
setSelection(doc,newSel,options)}
function replaceOneSelection(doc,i,range,options){var ranges=doc.sel.ranges.slice(0)
ranges[i]=range
setSelection(doc,normalizeSelection(ranges,doc.sel.primIndex),options)}
function setSimpleSelection(doc,anchor,head,options){setSelection(doc,simpleSelection(anchor,head),options)}
function filterSelectionChange(doc,sel,options){var obj={ranges:sel.ranges,update:function(ranges){var this$1=this;this.ranges=[]
for(var i=0;i<ranges.length;i++)
{this$1.ranges[i]=new Range(clipPos(doc,ranges[i].anchor),clipPos(doc,ranges[i].head))}},origin:options&&options.origin}
signal(doc,"beforeSelectionChange",doc,obj)
if(doc.cm){signal(doc.cm,"beforeSelectionChange",doc.cm,obj)}
if(obj.ranges!=sel.ranges){return normalizeSelection(obj.ranges,obj.ranges.length-1)}
else{return sel}}
function setSelectionReplaceHistory(doc,sel,options){var done=doc.history.done,last=lst(done)
if(last&&last.ranges){done[done.length-1]=sel
setSelectionNoUndo(doc,sel,options)}else{setSelection(doc,sel,options)}}
function setSelection(doc,sel,options){setSelectionNoUndo(doc,sel,options)
addSelectionToHistory(doc,doc.sel,doc.cm?doc.cm.curOp.id:NaN,options)}
function setSelectionNoUndo(doc,sel,options){if(hasHandler(doc,"beforeSelectionChange")||doc.cm&&hasHandler(doc.cm,"beforeSelectionChange"))
{sel=filterSelectionChange(doc,sel,options)}
var bias=options&&options.bias||(cmp(sel.primary().head,doc.sel.primary().head)<0?-1:1)
setSelectionInner(doc,skipAtomicInSelection(doc,sel,bias,true))
if(!(options&&options.scroll===false)&&doc.cm)
{ensureCursorVisible(doc.cm)}}
function setSelectionInner(doc,sel){if(sel.equals(doc.sel)){return}
doc.sel=sel
if(doc.cm){doc.cm.curOp.updateInput=doc.cm.curOp.selectionChanged=true
signalCursorActivity(doc.cm)}
signalLater(doc,"cursorActivity",doc)}
function reCheckSelection(doc){setSelectionInner(doc,skipAtomicInSelection(doc,doc.sel,null,false))}
function skipAtomicInSelection(doc,sel,bias,mayClear){var out
for(var i=0;i<sel.ranges.length;i++){var range=sel.ranges[i]
var old=sel.ranges.length==doc.sel.ranges.length&&doc.sel.ranges[i]
var newAnchor=skipAtomic(doc,range.anchor,old&&old.anchor,bias,mayClear)
var newHead=skipAtomic(doc,range.head,old&&old.head,bias,mayClear)
if(out||newAnchor!=range.anchor||newHead!=range.head){if(!out){out=sel.ranges.slice(0,i)}
out[i]=new Range(newAnchor,newHead)}}
return out?normalizeSelection(out,sel.primIndex):sel}
function skipAtomicInner(doc,pos,oldPos,dir,mayClear){var line=getLine(doc,pos.line)
if(line.markedSpans){for(var i=0;i<line.markedSpans.length;++i){var sp=line.markedSpans[i],m=sp.marker
if((sp.from==null||(m.inclusiveLeft?sp.from<=pos.ch:sp.from<pos.ch))&&(sp.to==null||(m.inclusiveRight?sp.to>=pos.ch:sp.to>pos.ch))){if(mayClear){signal(m,"beforeCursorEnter")
if(m.explicitlyCleared){if(!line.markedSpans){break}
else{--i;continue}}}
if(!m.atomic){continue}
if(oldPos){var near=m.find(dir<0?1:-1),diff=(void 0)
if(dir<0?m.inclusiveRight:m.inclusiveLeft)
{near=movePos(doc,near,-dir,near&&near.line==pos.line?line:null)}
if(near&&near.line==pos.line&&(diff=cmp(near,oldPos))&&(dir<0?diff<0:diff>0))
{return skipAtomicInner(doc,near,pos,dir,mayClear)}}
var far=m.find(dir<0?-1:1)
if(dir<0?m.inclusiveLeft:m.inclusiveRight)
{far=movePos(doc,far,dir,far.line==pos.line?line:null)}
return far?skipAtomicInner(doc,far,pos,dir,mayClear):null}}}
return pos}
function skipAtomic(doc,pos,oldPos,bias,mayClear){var dir=bias||1
var found=skipAtomicInner(doc,pos,oldPos,dir,mayClear)||(!mayClear&&skipAtomicInner(doc,pos,oldPos,dir,true))||skipAtomicInner(doc,pos,oldPos,-dir,mayClear)||(!mayClear&&skipAtomicInner(doc,pos,oldPos,-dir,true))
if(!found){doc.cantEdit=true
return Pos(doc.first,0)}
return found}
function movePos(doc,pos,dir,line){if(dir<0&&pos.ch==0){if(pos.line>doc.first){return clipPos(doc,Pos(pos.line-1))}
else{return null}}else if(dir>0&&pos.ch==(line||getLine(doc,pos.line)).text.length){if(pos.line<doc.first+doc.size-1){return Pos(pos.line+1,0)}
else{return null}}else{return new Pos(pos.line,pos.ch+dir)}}
function selectAll(cm){cm.setSelection(Pos(cm.firstLine(),0),Pos(cm.lastLine()),sel_dontScroll)}
function filterChange(doc,change,update){var obj={canceled:false,from:change.from,to:change.to,text:change.text,origin:change.origin,cancel:function(){return obj.canceled=true;}}
if(update){obj.update=function(from,to,text,origin){if(from){obj.from=clipPos(doc,from)}
if(to){obj.to=clipPos(doc,to)}
if(text){obj.text=text}
if(origin!==undefined){obj.origin=origin}}}
signal(doc,"beforeChange",doc,obj)
if(doc.cm){signal(doc.cm,"beforeChange",doc.cm,obj)}
if(obj.canceled){return null}
return{from:obj.from,to:obj.to,text:obj.text,origin:obj.origin}}
function makeChange(doc,change,ignoreReadOnly){if(doc.cm){if(!doc.cm.curOp){return operation(doc.cm,makeChange)(doc,change,ignoreReadOnly)}
if(doc.cm.state.suppressEdits){return}}
if(hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange")){change=filterChange(doc,change,true)
if(!change){return}}
var split=sawReadOnlySpans&&!ignoreReadOnly&&removeReadOnlyRanges(doc,change.from,change.to)
if(split){for(var i=split.length-1;i>=0;--i)
{makeChangeInner(doc,{from:split[i].from,to:split[i].to,text:i?[""]:change.text,origin:change.origin})}}else{makeChangeInner(doc,change)}}
function makeChangeInner(doc,change){if(change.text.length==1&&change.text[0]==""&&cmp(change.from,change.to)==0){return}
var selAfter=computeSelAfterChange(doc,change)
addChangeToHistory(doc,change,selAfter,doc.cm?doc.cm.curOp.id:NaN)
makeChangeSingleDoc(doc,change,selAfter,stretchSpansOverChange(doc,change))
var rebased=[]
linkedDocs(doc,function(doc,sharedHist){if(!sharedHist&&indexOf(rebased,doc.history)==-1){rebaseHist(doc.history,change)
rebased.push(doc.history)}
makeChangeSingleDoc(doc,change,null,stretchSpansOverChange(doc,change))})}
function makeChangeFromHistory(doc,type,allowSelectionOnly){var suppress=doc.cm&&doc.cm.state.suppressEdits
if(suppress&&!allowSelectionOnly){return}
var hist=doc.history,event,selAfter=doc.sel
var source=type=="undo"?hist.done:hist.undone,dest=type=="undo"?hist.undone:hist.done
var i=0
for(;i<source.length;i++){event=source[i]
if(allowSelectionOnly?event.ranges&&!event.equals(doc.sel):!event.ranges)
{break}}
if(i==source.length){return}
hist.lastOrigin=hist.lastSelOrigin=null
for(;;){event=source.pop()
if(event.ranges){pushSelectionToHistory(event,dest)
if(allowSelectionOnly&&!event.equals(doc.sel)){setSelection(doc,event,{clearRedo:false})
return}
selAfter=event}else if(suppress){source.push(event)
return}else{break}}
var antiChanges=[]
pushSelectionToHistory(selAfter,dest)
dest.push({changes:antiChanges,generation:hist.generation})
hist.generation=event.generation||++hist.maxGeneration
var filter=hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange")
var loop=function(i){var change=event.changes[i]
change.origin=type
if(filter&&!filterChange(doc,change,false)){source.length=0
return{}}
antiChanges.push(historyChangeFromChange(doc,change))
var after=i?computeSelAfterChange(doc,change):lst(source)
makeChangeSingleDoc(doc,change,after,mergeOldSpans(doc,change))
if(!i&&doc.cm){doc.cm.scrollIntoView({from:change.from,to:changeEnd(change)})}
var rebased=[]
linkedDocs(doc,function(doc,sharedHist){if(!sharedHist&&indexOf(rebased,doc.history)==-1){rebaseHist(doc.history,change)
rebased.push(doc.history)}
makeChangeSingleDoc(doc,change,null,mergeOldSpans(doc,change))})};for(var i$1=event.changes.length-1;i$1>=0;--i$1){var returned=loop(i$1);if(returned)return returned.v;}}
function shiftDoc(doc,distance){if(distance==0){return}
doc.first+=distance
doc.sel=new Selection(map(doc.sel.ranges,function(range){return new Range(Pos(range.anchor.line+distance,range.anchor.ch),Pos(range.head.line+distance,range.head.ch));}),doc.sel.primIndex)
if(doc.cm){regChange(doc.cm,doc.first,doc.first-distance,distance)
for(var d=doc.cm.display,l=d.viewFrom;l<d.viewTo;l++)
{regLineChange(doc.cm,l,"gutter")}}}
function makeChangeSingleDoc(doc,change,selAfter,spans){if(doc.cm&&!doc.cm.curOp)
{return operation(doc.cm,makeChangeSingleDoc)(doc,change,selAfter,spans)}
if(change.to.line<doc.first){shiftDoc(doc,change.text.length-1-(change.to.line-change.from.line))
return}
if(change.from.line>doc.lastLine()){return}
if(change.from.line<doc.first){var shift=change.text.length-1-(doc.first-change.from.line)
shiftDoc(doc,shift)
change={from:Pos(doc.first,0),to:Pos(change.to.line+shift,change.to.ch),text:[lst(change.text)],origin:change.origin}}
var last=doc.lastLine()
if(change.to.line>last){change={from:change.from,to:Pos(last,getLine(doc,last).text.length),text:[change.text[0]],origin:change.origin}}
change.removed=getBetween(doc,change.from,change.to)
if(!selAfter){selAfter=computeSelAfterChange(doc,change)}
if(doc.cm){makeChangeSingleDocInEditor(doc.cm,change,spans)}
else{updateDoc(doc,change,spans)}
setSelectionNoUndo(doc,selAfter,sel_dontScroll)}
function makeChangeSingleDocInEditor(cm,change,spans){var doc=cm.doc,display=cm.display,from=change.from,to=change.to
var recomputeMaxLength=false,checkWidthStart=from.line
if(!cm.options.lineWrapping){checkWidthStart=lineNo(visualLine(getLine(doc,from.line)))
doc.iter(checkWidthStart,to.line+1,function(line){if(line==display.maxLine){recomputeMaxLength=true
return true}})}
if(doc.sel.contains(change.from,change.to)>-1)
{signalCursorActivity(cm)}
updateDoc(doc,change,spans,estimateHeight(cm))
if(!cm.options.lineWrapping){doc.iter(checkWidthStart,from.line+change.text.length,function(line){var len=lineLength(line)
if(len>display.maxLineLength){display.maxLine=line
display.maxLineLength=len
display.maxLineChanged=true
recomputeMaxLength=false}})
if(recomputeMaxLength){cm.curOp.updateMaxLine=true}}
retreatFrontier(doc,from.line)
startWorker(cm,400)
var lendiff=change.text.length-(to.line-from.line)-1
if(change.full)
{regChange(cm)}
else if(from.line==to.line&&change.text.length==1&&!isWholeLineUpdate(cm.doc,change))
{regLineChange(cm,from.line,"text")}
else
{regChange(cm,from.line,to.line+1,lendiff)}
var changesHandler=hasHandler(cm,"changes"),changeHandler=hasHandler(cm,"change")
if(changeHandler||changesHandler){var obj={from:from,to:to,text:change.text,removed:change.removed,origin:change.origin}
if(changeHandler){signalLater(cm,"change",cm,obj)}
if(changesHandler){(cm.curOp.changeObjs||(cm.curOp.changeObjs=[])).push(obj)}}
cm.display.selForContextMenu=null}
function replaceRange(doc,code,from,to,origin){if(!to){to=from}
if(cmp(to,from)<0){var assign;(assign=[to,from],from=assign[0],to=assign[1],assign)}
if(typeof code=="string"){code=doc.splitLines(code)}
makeChange(doc,{from:from,to:to,text:code,origin:origin})}
function rebaseHistSelSingle(pos,from,to,diff){if(to<pos.line){pos.line+=diff}else if(from<pos.line){pos.line=from
pos.ch=0}}
function rebaseHistArray(array,from,to,diff){for(var i=0;i<array.length;++i){var sub=array[i],ok=true
if(sub.ranges){if(!sub.copied){sub=array[i]=sub.deepCopy();sub.copied=true}
for(var j=0;j<sub.ranges.length;j++){rebaseHistSelSingle(sub.ranges[j].anchor,from,to,diff)
rebaseHistSelSingle(sub.ranges[j].head,from,to,diff)}
continue}
for(var j$1=0;j$1<sub.changes.length;++j$1){var cur=sub.changes[j$1]
if(to<cur.from.line){cur.from=Pos(cur.from.line+diff,cur.from.ch)
cur.to=Pos(cur.to.line+diff,cur.to.ch)}else if(from<=cur.to.line){ok=false
break}}
if(!ok){array.splice(0,i+1)
i=0}}}
function rebaseHist(hist,change){var from=change.from.line,to=change.to.line,diff=change.text.length-(to-from)-1
rebaseHistArray(hist.done,from,to,diff)
rebaseHistArray(hist.undone,from,to,diff)}
function changeLine(doc,handle,changeType,op){var no=handle,line=handle
if(typeof handle=="number"){line=getLine(doc,clipLine(doc,handle))}
else{no=lineNo(handle)}
if(no==null){return null}
if(op(line,no)&&doc.cm){regLineChange(doc.cm,no,changeType)}
return line}
function LeafChunk(lines){var this$1=this;this.lines=lines
this.parent=null
var height=0
for(var i=0;i<lines.length;++i){lines[i].parent=this$1
height+=lines[i].height}
this.height=height}
LeafChunk.prototype={chunkSize:function chunkSize(){return this.lines.length},removeInner:function removeInner(at,n){var this$1=this;for(var i=at,e=at+n;i<e;++i){var line=this$1.lines[i]
this$1.height-=line.height
cleanUpLine(line)
signalLater(line,"delete")}
this.lines.splice(at,n)},collapse:function collapse(lines){lines.push.apply(lines,this.lines)},insertInner:function insertInner(at,lines,height){var this$1=this;this.height+=height
this.lines=this.lines.slice(0,at).concat(lines).concat(this.lines.slice(at))
for(var i=0;i<lines.length;++i){lines[i].parent=this$1}},iterN:function iterN(at,n,op){var this$1=this;for(var e=at+n;at<e;++at)
{if(op(this$1.lines[at])){return true}}}}
function BranchChunk(children){var this$1=this;this.children=children
var size=0,height=0
for(var i=0;i<children.length;++i){var ch=children[i]
size+=ch.chunkSize();height+=ch.height
ch.parent=this$1}
this.size=size
this.height=height
this.parent=null}
BranchChunk.prototype={chunkSize:function chunkSize(){return this.size},removeInner:function removeInner(at,n){var this$1=this;this.size-=n
for(var i=0;i<this.children.length;++i){var child=this$1.children[i],sz=child.chunkSize()
if(at<sz){var rm=Math.min(n,sz-at),oldHeight=child.height
child.removeInner(at,rm)
this$1.height-=oldHeight-child.height
if(sz==rm){this$1.children.splice(i--,1);child.parent=null}
if((n-=rm)==0){break}
at=0}else{at-=sz}}
if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof LeafChunk))){var lines=[]
this.collapse(lines)
this.children=[new LeafChunk(lines)]
this.children[0].parent=this}},collapse:function collapse(lines){var this$1=this;for(var i=0;i<this.children.length;++i){this$1.children[i].collapse(lines)}},insertInner:function insertInner(at,lines,height){var this$1=this;this.size+=lines.length
this.height+=height
for(var i=0;i<this.children.length;++i){var child=this$1.children[i],sz=child.chunkSize()
if(at<=sz){child.insertInner(at,lines,height)
if(child.lines&&child.lines.length>50){var remaining=child.lines.length%25+25
for(var pos=remaining;pos<child.lines.length;){var leaf=new LeafChunk(child.lines.slice(pos,pos+=25))
child.height-=leaf.height
this$1.children.splice(++i,0,leaf)
leaf.parent=this$1}
child.lines=child.lines.slice(0,remaining)
this$1.maybeSpill()}
break}
at-=sz}},maybeSpill:function maybeSpill(){if(this.children.length<=10){return}
var me=this
do{var spilled=me.children.splice(me.children.length-5,5)
var sibling=new BranchChunk(spilled)
if(!me.parent){var copy=new BranchChunk(me.children)
copy.parent=me
me.children=[copy,sibling]
me=copy}else{me.size-=sibling.size
me.height-=sibling.height
var myIndex=indexOf(me.parent.children,me)
me.parent.children.splice(myIndex+1,0,sibling)}
sibling.parent=me.parent}while(me.children.length>10)
me.parent.maybeSpill()},iterN:function iterN(at,n,op){var this$1=this;for(var i=0;i<this.children.length;++i){var child=this$1.children[i],sz=child.chunkSize()
if(at<sz){var used=Math.min(n,sz-at)
if(child.iterN(at,used,op)){return true}
if((n-=used)==0){break}
at=0}else{at-=sz}}}}
var LineWidget=function(doc,node,options){var this$1=this;if(options){for(var opt in options){if(options.hasOwnProperty(opt))
{this$1[opt]=options[opt]}}}
this.doc=doc
this.node=node};LineWidget.prototype.clear=function(){var this$1=this;var cm=this.doc.cm,ws=this.line.widgets,line=this.line,no=lineNo(line)
if(no==null||!ws){return}
for(var i=0;i<ws.length;++i){if(ws[i]==this$1){ws.splice(i--,1)}}
if(!ws.length){line.widgets=null}
var height=widgetHeight(this)
updateLineHeight(line,Math.max(0,line.height-height))
if(cm){runInOp(cm,function(){adjustScrollWhenAboveVisible(cm,line,-height)
regLineChange(cm,no,"widget")})
signalLater(cm,"lineWidgetCleared",cm,this,no)}};LineWidget.prototype.changed=function(){var this$1=this;var oldH=this.height,cm=this.doc.cm,line=this.line
this.height=null
var diff=widgetHeight(this)-oldH
if(!diff){return}
if(!lineIsHidden(this.doc,line)){updateLineHeight(line,line.height+diff)}
if(cm){runInOp(cm,function(){cm.curOp.forceUpdate=true
adjustScrollWhenAboveVisible(cm,line,diff)
signalLater(cm,"lineWidgetChanged",cm,this$1,lineNo(line))})}};eventMixin(LineWidget)
function adjustScrollWhenAboveVisible(cm,line,diff){if(heightAtLine(line)<((cm.curOp&&cm.curOp.scrollTop)||cm.doc.scrollTop))
{addToScrollTop(cm,diff)}}
function addLineWidget(doc,handle,node,options){var widget=new LineWidget(doc,node,options)
var cm=doc.cm
if(cm&&widget.noHScroll){cm.display.alignWidgets=true}
changeLine(doc,handle,"widget",function(line){var widgets=line.widgets||(line.widgets=[])
if(widget.insertAt==null){widgets.push(widget)}
else{widgets.splice(Math.min(widgets.length-1,Math.max(0,widget.insertAt)),0,widget)}
widget.line=line
if(cm&&!lineIsHidden(doc,line)){var aboveVisible=heightAtLine(line)<doc.scrollTop
updateLineHeight(line,line.height+widgetHeight(widget))
if(aboveVisible){addToScrollTop(cm,widget.height)}
cm.curOp.forceUpdate=true}
return true})
if(cm){signalLater(cm,"lineWidgetAdded",cm,widget,typeof handle=="number"?handle:lineNo(handle))}
return widget}
var nextMarkerId=0
var TextMarker=function(doc,type){this.lines=[]
this.type=type
this.doc=doc
this.id=++nextMarkerId};TextMarker.prototype.clear=function(){var this$1=this;if(this.explicitlyCleared){return}
var cm=this.doc.cm,withOp=cm&&!cm.curOp
if(withOp){startOperation(cm)}
if(hasHandler(this,"clear")){var found=this.find()
if(found){signalLater(this,"clear",found.from,found.to)}}
var min=null,max=null
for(var i=0;i<this.lines.length;++i){var line=this$1.lines[i]
var span=getMarkedSpanFor(line.markedSpans,this$1)
if(cm&&!this$1.collapsed){regLineChange(cm,lineNo(line),"text")}
else if(cm){if(span.to!=null){max=lineNo(line)}
if(span.from!=null){min=lineNo(line)}}
line.markedSpans=removeMarkedSpan(line.markedSpans,span)
if(span.from==null&&this$1.collapsed&&!lineIsHidden(this$1.doc,line)&&cm)
{updateLineHeight(line,textHeight(cm.display))}}
if(cm&&this.collapsed&&!cm.options.lineWrapping){for(var i$1=0;i$1<this.lines.length;++i$1){var visual=visualLine(this$1.lines[i$1]),len=lineLength(visual)
if(len>cm.display.maxLineLength){cm.display.maxLine=visual
cm.display.maxLineLength=len
cm.display.maxLineChanged=true}}}
if(min!=null&&cm&&this.collapsed){regChange(cm,min,max+1)}
this.lines.length=0
this.explicitlyCleared=true
if(this.atomic&&this.doc.cantEdit){this.doc.cantEdit=false
if(cm){reCheckSelection(cm.doc)}}
if(cm){signalLater(cm,"markerCleared",cm,this,min,max)}
if(withOp){endOperation(cm)}
if(this.parent){this.parent.clear()}};TextMarker.prototype.find=function(side,lineObj){var this$1=this;if(side==null&&this.type=="bookmark"){side=1}
var from,to
for(var i=0;i<this.lines.length;++i){var line=this$1.lines[i]
var span=getMarkedSpanFor(line.markedSpans,this$1)
if(span.from!=null){from=Pos(lineObj?line:lineNo(line),span.from)
if(side==-1){return from}}
if(span.to!=null){to=Pos(lineObj?line:lineNo(line),span.to)
if(side==1){return to}}}
return from&&{from:from,to:to}};TextMarker.prototype.changed=function(){var this$1=this;var pos=this.find(-1,true),widget=this,cm=this.doc.cm
if(!pos||!cm){return}
runInOp(cm,function(){var line=pos.line,lineN=lineNo(pos.line)
var view=findViewForLine(cm,lineN)
if(view){clearLineMeasurementCacheFor(view)
cm.curOp.selectionChanged=cm.curOp.forceUpdate=true}
cm.curOp.updateMaxLine=true
if(!lineIsHidden(widget.doc,line)&&widget.height!=null){var oldHeight=widget.height
widget.height=null
var dHeight=widgetHeight(widget)-oldHeight
if(dHeight)
{updateLineHeight(line,line.height+dHeight)}}
signalLater(cm,"markerChanged",cm,this$1)})};TextMarker.prototype.attachLine=function(line){if(!this.lines.length&&this.doc.cm){var op=this.doc.cm.curOp
if(!op.maybeHiddenMarkers||indexOf(op.maybeHiddenMarkers,this)==-1)
{(op.maybeUnhiddenMarkers||(op.maybeUnhiddenMarkers=[])).push(this)}}
this.lines.push(line)};TextMarker.prototype.detachLine=function(line){this.lines.splice(indexOf(this.lines,line),1)
if(!this.lines.length&&this.doc.cm){var op=this.doc.cm.curOp;(op.maybeHiddenMarkers||(op.maybeHiddenMarkers=[])).push(this)}};eventMixin(TextMarker)
function markText(doc,from,to,options,type){if(options&&options.shared){return markTextShared(doc,from,to,options,type)}
if(doc.cm&&!doc.cm.curOp){return operation(doc.cm,markText)(doc,from,to,options,type)}
var marker=new TextMarker(doc,type),diff=cmp(from,to)
if(options){copyObj(options,marker,false)}
if(diff>0||diff==0&&marker.clearWhenEmpty!==false)
{return marker}
if(marker.replacedWith){marker.collapsed=true
marker.widgetNode=eltP("span",[marker.replacedWith],"CodeMirror-widget")
if(!options.handleMouseEvents){marker.widgetNode.setAttribute("cm-ignore-events","true")}
if(options.insertLeft){marker.widgetNode.insertLeft=true}}
if(marker.collapsed){if(conflictingCollapsedRange(doc,from.line,from,to,marker)||from.line!=to.line&&conflictingCollapsedRange(doc,to.line,from,to,marker))
{throw new Error("Inserting collapsed marker partially overlapping an existing one")}
seeCollapsedSpans()}
if(marker.addToHistory)
{addChangeToHistory(doc,{from:from,to:to,origin:"markText"},doc.sel,NaN)}
var curLine=from.line,cm=doc.cm,updateMaxLine
doc.iter(curLine,to.line+1,function(line){if(cm&&marker.collapsed&&!cm.options.lineWrapping&&visualLine(line)==cm.display.maxLine)
{updateMaxLine=true}
if(marker.collapsed&&curLine!=from.line){updateLineHeight(line,0)}
addMarkedSpan(line,new MarkedSpan(marker,curLine==from.line?from.ch:null,curLine==to.line?to.ch:null))
++curLine})
if(marker.collapsed){doc.iter(from.line,to.line+1,function(line){if(lineIsHidden(doc,line)){updateLineHeight(line,0)}})}
if(marker.clearOnEnter){on(marker,"beforeCursorEnter",function(){return marker.clear();})}
if(marker.readOnly){seeReadOnlySpans()
if(doc.history.done.length||doc.history.undone.length)
{doc.clearHistory()}}
if(marker.collapsed){marker.id=++nextMarkerId
marker.atomic=true}
if(cm){if(updateMaxLine){cm.curOp.updateMaxLine=true}
if(marker.collapsed)
{regChange(cm,from.line,to.line+1)}
else if(marker.className||marker.title||marker.startStyle||marker.endStyle||marker.css)
{for(var i=from.line;i<=to.line;i++){regLineChange(cm,i,"text")}}
if(marker.atomic){reCheckSelection(cm.doc)}
signalLater(cm,"markerAdded",cm,marker)}
return marker}
var SharedTextMarker=function(markers,primary){var this$1=this;this.markers=markers
this.primary=primary
for(var i=0;i<markers.length;++i)
{markers[i].parent=this$1}};SharedTextMarker.prototype.clear=function(){var this$1=this;if(this.explicitlyCleared){return}
this.explicitlyCleared=true
for(var i=0;i<this.markers.length;++i)
{this$1.markers[i].clear()}
signalLater(this,"clear")};SharedTextMarker.prototype.find=function(side,lineObj){return this.primary.find(side,lineObj)};eventMixin(SharedTextMarker)
function markTextShared(doc,from,to,options,type){options=copyObj(options)
options.shared=false
var markers=[markText(doc,from,to,options,type)],primary=markers[0]
var widget=options.widgetNode
linkedDocs(doc,function(doc){if(widget){options.widgetNode=widget.cloneNode(true)}
markers.push(markText(doc,clipPos(doc,from),clipPos(doc,to),options,type))
for(var i=0;i<doc.linked.length;++i)
{if(doc.linked[i].isParent){return}}
primary=lst(markers)})
return new SharedTextMarker(markers,primary)}
function findSharedMarkers(doc){return doc.findMarks(Pos(doc.first,0),doc.clipPos(Pos(doc.lastLine())),function(m){return m.parent;})}
function copySharedMarkers(doc,markers){for(var i=0;i<markers.length;i++){var marker=markers[i],pos=marker.find()
var mFrom=doc.clipPos(pos.from),mTo=doc.clipPos(pos.to)
if(cmp(mFrom,mTo)){var subMark=markText(doc,mFrom,mTo,marker.primary,marker.primary.type)
marker.markers.push(subMark)
subMark.parent=marker}}}
function detachSharedMarkers(markers){var loop=function(i){var marker=markers[i],linked=[marker.primary.doc]
linkedDocs(marker.primary.doc,function(d){return linked.push(d);})
for(var j=0;j<marker.markers.length;j++){var subMarker=marker.markers[j]
if(indexOf(linked,subMarker.doc)==-1){subMarker.parent=null
marker.markers.splice(j--,1)}}};for(var i=0;i<markers.length;i++)loop(i);}
var nextDocId=0
var Doc=function(text,mode,firstLine,lineSep,direction){if(!(this instanceof Doc)){return new Doc(text,mode,firstLine,lineSep,direction)}
if(firstLine==null){firstLine=0}
BranchChunk.call(this,[new LeafChunk([new Line("",null)])])
this.first=firstLine
this.scrollTop=this.scrollLeft=0
this.cantEdit=false
this.cleanGeneration=1
this.modeFrontier=this.highlightFrontier=firstLine
var start=Pos(firstLine,0)
this.sel=simpleSelection(start)
this.history=new History(null)
this.id=++nextDocId
this.modeOption=mode
this.lineSep=lineSep
this.direction=(direction=="rtl")?"rtl":"ltr"
this.extend=false
if(typeof text=="string"){text=this.splitLines(text)}
updateDoc(this,{from:start,to:start,text:text})
setSelection(this,simpleSelection(start),sel_dontScroll)}
Doc.prototype=createObj(BranchChunk.prototype,{constructor:Doc,iter:function(from,to,op){if(op){this.iterN(from-this.first,to-from,op)}
else{this.iterN(this.first,this.first+this.size,from)}},insert:function(at,lines){var height=0
for(var i=0;i<lines.length;++i){height+=lines[i].height}
this.insertInner(at-this.first,lines,height)},remove:function(at,n){this.removeInner(at-this.first,n)},getValue:function(lineSep){var lines=getLines(this,this.first,this.first+this.size)
if(lineSep===false){return lines}
return lines.join(lineSep||this.lineSeparator())},setValue:docMethodOp(function(code){var top=Pos(this.first,0),last=this.first+this.size-1
makeChange(this,{from:top,to:Pos(last,getLine(this,last).text.length),text:this.splitLines(code),origin:"setValue",full:true},true)
if(this.cm){scrollToCoords(this.cm,0,0)}
setSelection(this,simpleSelection(top),sel_dontScroll)}),replaceRange:function(code,from,to,origin){from=clipPos(this,from)
to=to?clipPos(this,to):from
replaceRange(this,code,from,to,origin)},getRange:function(from,to,lineSep){var lines=getBetween(this,clipPos(this,from),clipPos(this,to))
if(lineSep===false){return lines}
return lines.join(lineSep||this.lineSeparator())},getLine:function(line){var l=this.getLineHandle(line);return l&&l.text},getLineHandle:function(line){if(isLine(this,line)){return getLine(this,line)}},getLineNumber:function(line){return lineNo(line)},getLineHandleVisualStart:function(line){if(typeof line=="number"){line=getLine(this,line)}
return visualLine(line)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(pos){return clipPos(this,pos)},getCursor:function(start){var range=this.sel.primary(),pos
if(start==null||start=="head"){pos=range.head}
else if(start=="anchor"){pos=range.anchor}
else if(start=="end"||start=="to"||start===false){pos=range.to()}
else{pos=range.from()}
return pos},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:docMethodOp(function(line,ch,options){setSimpleSelection(this,clipPos(this,typeof line=="number"?Pos(line,ch||0):line),null,options)}),setSelection:docMethodOp(function(anchor,head,options){setSimpleSelection(this,clipPos(this,anchor),clipPos(this,head||anchor),options)}),extendSelection:docMethodOp(function(head,other,options){extendSelection(this,clipPos(this,head),other&&clipPos(this,other),options)}),extendSelections:docMethodOp(function(heads,options){extendSelections(this,clipPosArray(this,heads),options)}),extendSelectionsBy:docMethodOp(function(f,options){var heads=map(this.sel.ranges,f)
extendSelections(this,clipPosArray(this,heads),options)}),setSelections:docMethodOp(function(ranges,primary,options){var this$1=this;if(!ranges.length){return}
var out=[]
for(var i=0;i<ranges.length;i++)
{out[i]=new Range(clipPos(this$1,ranges[i].anchor),clipPos(this$1,ranges[i].head))}
if(primary==null){primary=Math.min(ranges.length-1,this.sel.primIndex)}
setSelection(this,normalizeSelection(out,primary),options)}),addSelection:docMethodOp(function(anchor,head,options){var ranges=this.sel.ranges.slice(0)
ranges.push(new Range(clipPos(this,anchor),clipPos(this,head||anchor)))
setSelection(this,normalizeSelection(ranges,ranges.length-1),options)}),getSelection:function(lineSep){var this$1=this;var ranges=this.sel.ranges,lines
for(var i=0;i<ranges.length;i++){var sel=getBetween(this$1,ranges[i].from(),ranges[i].to())
lines=lines?lines.concat(sel):sel}
if(lineSep===false){return lines}
else{return lines.join(lineSep||this.lineSeparator())}},getSelections:function(lineSep){var this$1=this;var parts=[],ranges=this.sel.ranges
for(var i=0;i<ranges.length;i++){var sel=getBetween(this$1,ranges[i].from(),ranges[i].to())
if(lineSep!==false){sel=sel.join(lineSep||this$1.lineSeparator())}
parts[i]=sel}
return parts},replaceSelection:function(code,collapse,origin){var dup=[]
for(var i=0;i<this.sel.ranges.length;i++)
{dup[i]=code}
this.replaceSelections(dup,collapse,origin||"+input")},replaceSelections:docMethodOp(function(code,collapse,origin){var this$1=this;var changes=[],sel=this.sel
for(var i=0;i<sel.ranges.length;i++){var range=sel.ranges[i]
changes[i]={from:range.from(),to:range.to(),text:this$1.splitLines(code[i]),origin:origin}}
var newSel=collapse&&collapse!="end"&&computeReplacedSel(this,changes,collapse)
for(var i$1=changes.length-1;i$1>=0;i$1--)
{makeChange(this$1,changes[i$1])}
if(newSel){setSelectionReplaceHistory(this,newSel)}
else if(this.cm){ensureCursorVisible(this.cm)}}),undo:docMethodOp(function(){makeChangeFromHistory(this,"undo")}),redo:docMethodOp(function(){makeChangeFromHistory(this,"redo")}),undoSelection:docMethodOp(function(){makeChangeFromHistory(this,"undo",true)}),redoSelection:docMethodOp(function(){makeChangeFromHistory(this,"redo",true)}),setExtending:function(val){this.extend=val},getExtending:function(){return this.extend},historySize:function(){var hist=this.history,done=0,undone=0
for(var i=0;i<hist.done.length;i++){if(!hist.done[i].ranges){++done}}
for(var i$1=0;i$1<hist.undone.length;i$1++){if(!hist.undone[i$1].ranges){++undone}}
return{undo:done,redo:undone}},clearHistory:function(){this.history=new History(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(true)},changeGeneration:function(forceSplit){if(forceSplit)
{this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null}
return this.history.generation},isClean:function(gen){return this.history.generation==(gen||this.cleanGeneration)},getHistory:function(){return{done:copyHistoryArray(this.history.done),undone:copyHistoryArray(this.history.undone)}},setHistory:function(histData){var hist=this.history=new History(this.history.maxGeneration)
hist.done=copyHistoryArray(histData.done.slice(0),null,true)
hist.undone=copyHistoryArray(histData.undone.slice(0),null,true)},setGutterMarker:docMethodOp(function(line,gutterID,value){return changeLine(this,line,"gutter",function(line){var markers=line.gutterMarkers||(line.gutterMarkers={})
markers[gutterID]=value
if(!value&&isEmpty(markers)){line.gutterMarkers=null}
return true})}),clearGutter:docMethodOp(function(gutterID){var this$1=this;this.iter(function(line){if(line.gutterMarkers&&line.gutterMarkers[gutterID]){changeLine(this$1,line,"gutter",function(){line.gutterMarkers[gutterID]=null
if(isEmpty(line.gutterMarkers)){line.gutterMarkers=null}
return true})}})}),lineInfo:function(line){var n
if(typeof line=="number"){if(!isLine(this,line)){return null}
n=line
line=getLine(this,line)
if(!line){return null}}else{n=lineNo(line)
if(n==null){return null}}
return{line:n,handle:line,text:line.text,gutterMarkers:line.gutterMarkers,textClass:line.textClass,bgClass:line.bgClass,wrapClass:line.wrapClass,widgets:line.widgets}},addLineClass:docMethodOp(function(handle,where,cls){return changeLine(this,handle,where=="gutter"?"gutter":"class",function(line){var prop=where=="text"?"textClass":where=="background"?"bgClass":where=="gutter"?"gutterClass":"wrapClass"
if(!line[prop]){line[prop]=cls}
else if(classTest(cls).test(line[prop])){return false}
else{line[prop]+=" "+cls}
return true})}),removeLineClass:docMethodOp(function(handle,where,cls){return changeLine(this,handle,where=="gutter"?"gutter":"class",function(line){var prop=where=="text"?"textClass":where=="background"?"bgClass":where=="gutter"?"gutterClass":"wrapClass"
var cur=line[prop]
if(!cur){return false}
else if(cls==null){line[prop]=null}
else{var found=cur.match(classTest(cls))
if(!found){return false}
var end=found.index+found[0].length
line[prop]=cur.slice(0,found.index)+(!found.index||end==cur.length?"":" ")+cur.slice(end)||null}
return true})}),addLineWidget:docMethodOp(function(handle,node,options){return addLineWidget(this,handle,node,options)}),removeLineWidget:function(widget){widget.clear()},markText:function(from,to,options){return markText(this,clipPos(this,from),clipPos(this,to),options,options&&options.type||"range")},setBookmark:function(pos,options){var realOpts={replacedWith:options&&(options.nodeType==null?options.widget:options),insertLeft:options&&options.insertLeft,clearWhenEmpty:false,shared:options&&options.shared,handleMouseEvents:options&&options.handleMouseEvents}
pos=clipPos(this,pos)
return markText(this,pos,pos,realOpts,"bookmark")},findMarksAt:function(pos){pos=clipPos(this,pos)
var markers=[],spans=getLine(this,pos.line).markedSpans
if(spans){for(var i=0;i<spans.length;++i){var span=spans[i]
if((span.from==null||span.from<=pos.ch)&&(span.to==null||span.to>=pos.ch))
{markers.push(span.marker.parent||span.marker)}}}
return markers},findMarks:function(from,to,filter){from=clipPos(this,from);to=clipPos(this,to)
var found=[],lineNo=from.line
this.iter(from.line,to.line+1,function(line){var spans=line.markedSpans
if(spans){for(var i=0;i<spans.length;i++){var span=spans[i]
if(!(span.to!=null&&lineNo==from.line&&from.ch>=span.to||span.from==null&&lineNo!=from.line||span.from!=null&&lineNo==to.line&&span.from>=to.ch)&&(!filter||filter(span.marker)))
{found.push(span.marker.parent||span.marker)}}}
++lineNo})
return found},getAllMarks:function(){var markers=[]
this.iter(function(line){var sps=line.markedSpans
if(sps){for(var i=0;i<sps.length;++i)
{if(sps[i].from!=null){markers.push(sps[i].marker)}}}})
return markers},posFromIndex:function(off){var ch,lineNo=this.first,sepSize=this.lineSeparator().length
this.iter(function(line){var sz=line.text.length+sepSize
if(sz>off){ch=off;return true}
off-=sz
++lineNo})
return clipPos(this,Pos(lineNo,ch))},indexFromPos:function(coords){coords=clipPos(this,coords)
var index=coords.ch
if(coords.line<this.first||coords.ch<0){return 0}
var sepSize=this.lineSeparator().length
this.iter(this.first,coords.line,function(line){index+=line.text.length+sepSize})
return index},copy:function(copyHistory){var doc=new Doc(getLines(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
doc.scrollTop=this.scrollTop;doc.scrollLeft=this.scrollLeft
doc.sel=this.sel
doc.extend=false
if(copyHistory){doc.history.undoDepth=this.history.undoDepth
doc.setHistory(this.getHistory())}
return doc},linkedDoc:function(options){if(!options){options={}}
var from=this.first,to=this.first+this.size
if(options.from!=null&&options.from>from){from=options.from}
if(options.to!=null&&options.to<to){to=options.to}
var copy=new Doc(getLines(this,from,to),options.mode||this.modeOption,from,this.lineSep,this.direction)
if(options.sharedHist){copy.history=this.history;}(this.linked||(this.linked=[])).push({doc:copy,sharedHist:options.sharedHist})
copy.linked=[{doc:this,isParent:true,sharedHist:options.sharedHist}]
copySharedMarkers(copy,findSharedMarkers(this))
return copy},unlinkDoc:function(other){var this$1=this;if(other instanceof CodeMirror){other=other.doc}
if(this.linked){for(var i=0;i<this.linked.length;++i){var link=this$1.linked[i]
if(link.doc!=other){continue}
this$1.linked.splice(i,1)
other.unlinkDoc(this$1)
detachSharedMarkers(findSharedMarkers(this$1))
break}}
if(other.history==this.history){var splitIds=[other.id]
linkedDocs(other,function(doc){return splitIds.push(doc.id);},true)
other.history=new History(null)
other.history.done=copyHistoryArray(this.history.done,splitIds)
other.history.undone=copyHistoryArray(this.history.undone,splitIds)}},iterLinkedDocs:function(f){linkedDocs(this,f)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(str){if(this.lineSep){return str.split(this.lineSep)}
return splitLinesAuto(str)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:docMethodOp(function(dir){if(dir!="rtl"){dir="ltr"}
if(dir==this.direction){return}
this.direction=dir
this.iter(function(line){return line.order=null;})
if(this.cm){directionChanged(this.cm)}})})
Doc.prototype.eachLine=Doc.prototype.iter
var lastDrop=0
function onDrop(e){var cm=this
clearDragCursor(cm)
if(signalDOMEvent(cm,e)||eventInWidget(cm.display,e))
{return}
e_preventDefault(e)
if(ie){lastDrop=+new Date}
var pos=posFromMouse(cm,e,true),files=e.dataTransfer.files
if(!pos||cm.isReadOnly()){return}
if(files&&files.length&&window.FileReader&&window.File){var n=files.length,text=Array(n),read=0
var loadFile=function(file,i){if(cm.options.allowDropFileTypes&&indexOf(cm.options.allowDropFileTypes,file.type)==-1)
{return}
var reader=new FileReader
reader.onload=operation(cm,function(){var content=reader.result
if(/[\x00-\x08\x0e-\x1f]{2}/.test(content)){content=""}
text[i]=content
if(++read==n){pos=clipPos(cm.doc,pos)
var change={from:pos,to:pos,text:cm.doc.splitLines(text.join(cm.doc.lineSeparator())),origin:"paste"}
makeChange(cm.doc,change)
setSelectionReplaceHistory(cm.doc,simpleSelection(pos,changeEnd(change)))}})
reader.readAsText(file)}
for(var i=0;i<n;++i){loadFile(files[i],i)}}else{if(cm.state.draggingText&&cm.doc.sel.contains(pos)>-1){cm.state.draggingText(e)
setTimeout(function(){return cm.display.input.focus();},20)
return}
try{var text$1=e.dataTransfer.getData("Text")
if(text$1){var selected
if(cm.state.draggingText&&!cm.state.draggingText.copy)
{selected=cm.listSelections()}
setSelectionNoUndo(cm.doc,simpleSelection(pos,pos))
if(selected){for(var i$1=0;i$1<selected.length;++i$1)
{replaceRange(cm.doc,"",selected[i$1].anchor,selected[i$1].head,"drag")}}
cm.replaceSelection(text$1,"around","paste")
cm.display.input.focus()}}
catch(e){}}}
function onDragStart(cm,e){if(ie&&(!cm.state.draggingText||+new Date-lastDrop<100)){e_stop(e);return}
if(signalDOMEvent(cm,e)||eventInWidget(cm.display,e)){return}
e.dataTransfer.setData("Text",cm.getSelection())
e.dataTransfer.effectAllowed="copyMove"
if(e.dataTransfer.setDragImage&&!safari){var img=elt("img",null,null,"position: fixed; left: 0; top: 0;")
img.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
if(presto){img.width=img.height=1
cm.display.wrapper.appendChild(img)
img._top=img.offsetTop}
e.dataTransfer.setDragImage(img,0,0)
if(presto){img.parentNode.removeChild(img)}}}
function onDragOver(cm,e){var pos=posFromMouse(cm,e)
if(!pos){return}
var frag=document.createDocumentFragment()
drawSelectionCursor(cm,pos,frag)
if(!cm.display.dragCursor){cm.display.dragCursor=elt("div",null,"CodeMirror-cursors CodeMirror-dragcursors")
cm.display.lineSpace.insertBefore(cm.display.dragCursor,cm.display.cursorDiv)}
removeChildrenAndAdd(cm.display.dragCursor,frag)}
function clearDragCursor(cm){if(cm.display.dragCursor){cm.display.lineSpace.removeChild(cm.display.dragCursor)
cm.display.dragCursor=null}}
function forEachCodeMirror(f){if(!document.getElementsByClassName){return}
var byClass=document.getElementsByClassName("CodeMirror")
for(var i=0;i<byClass.length;i++){var cm=byClass[i].CodeMirror
if(cm){f(cm)}}}
var globalsRegistered=false
function ensureGlobalHandlers(){if(globalsRegistered){return}
registerGlobalHandlers()
globalsRegistered=true}
function registerGlobalHandlers(){var resizeTimer
on(window,"resize",function(){if(resizeTimer==null){resizeTimer=setTimeout(function(){resizeTimer=null
forEachCodeMirror(onResize)},100)}})
on(window,"blur",function(){return forEachCodeMirror(onBlur);})}
function onResize(cm){var d=cm.display
d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null
d.scrollbarsClipped=false
cm.setSize()}
var keyNames={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"}
for(var i=0;i<10;i++){keyNames[i+48]=keyNames[i+96]=String(i)}
for(var i$1=65;i$1<=90;i$1++){keyNames[i$1]=String.fromCharCode(i$1)}
for(var i$2=1;i$2<=12;i$2++){keyNames[i$2+111]=keyNames[i$2+63235]="F"+i$2}
var keyMap={}
keyMap.basic={"Left":"goCharLeft","Right":"goCharRight","Up":"goLineUp","Down":"goLineDown","End":"goLineEnd","Home":"goLineStartSmart","PageUp":"goPageUp","PageDown":"goPageDown","Delete":"delCharAfter","Backspace":"delCharBefore","Shift-Backspace":"delCharBefore","Tab":"defaultTab","Shift-Tab":"indentAuto","Enter":"newlineAndIndent","Insert":"toggleOverwrite","Esc":"singleSelection"}
keyMap.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection","fallthrough":"basic"}
keyMap.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"}
keyMap.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd","fallthrough":["basic","emacsy"]}
keyMap["default"]=mac?keyMap.macDefault:keyMap.pcDefault
function normalizeKeyName(name){var parts=name.split(/-(?!$)/)
name=parts[parts.length-1]
var alt,ctrl,shift,cmd
for(var i=0;i<parts.length-1;i++){var mod=parts[i]
if(/^(cmd|meta|m)$/i.test(mod)){cmd=true}
else if(/^a(lt)?$/i.test(mod)){alt=true}
else if(/^(c|ctrl|control)$/i.test(mod)){ctrl=true}
else if(/^s(hift)?$/i.test(mod)){shift=true}
else{throw new Error("Unrecognized modifier name: "+mod)}}
if(alt){name="Alt-"+name}
if(ctrl){name="Ctrl-"+name}
if(cmd){name="Cmd-"+name}
if(shift){name="Shift-"+name}
return name}
function normalizeKeyMap(keymap){var copy={}
for(var keyname in keymap){if(keymap.hasOwnProperty(keyname)){var value=keymap[keyname]
if(/^(name|fallthrough|(de|at)tach)$/.test(keyname)){continue}
if(value=="..."){delete keymap[keyname];continue}
var keys=map(keyname.split(" "),normalizeKeyName)
for(var i=0;i<keys.length;i++){var val=(void 0),name=(void 0)
if(i==keys.length-1){name=keys.join(" ")
val=value}else{name=keys.slice(0,i+1).join(" ")
val="..."}
var prev=copy[name]
if(!prev){copy[name]=val}
else if(prev!=val){throw new Error("Inconsistent bindings for "+name)}}
delete keymap[keyname]}}
for(var prop in copy){keymap[prop]=copy[prop]}
return keymap}
function lookupKey(key,map,handle,context){map=getKeyMap(map)
var found=map.call?map.call(key,context):map[key]
if(found===false){return"nothing"}
if(found==="..."){return"multi"}
if(found!=null&&handle(found)){return"handled"}
if(map.fallthrough){if(Object.prototype.toString.call(map.fallthrough)!="[object Array]")
{return lookupKey(key,map.fallthrough,handle,context)}
for(var i=0;i<map.fallthrough.length;i++){var result=lookupKey(key,map.fallthrough[i],handle,context)
if(result){return result}}}}
function isModifierKey(value){var name=typeof value=="string"?value:keyNames[value.keyCode]
return name=="Ctrl"||name=="Alt"||name=="Shift"||name=="Mod"}
function addModifierNames(name,event,noShift){var base=name
if(event.altKey&&base!="Alt"){name="Alt-"+name}
if((flipCtrlCmd?event.metaKey:event.ctrlKey)&&base!="Ctrl"){name="Ctrl-"+name}
if((flipCtrlCmd?event.ctrlKey:event.metaKey)&&base!="Cmd"){name="Cmd-"+name}
if(!noShift&&event.shiftKey&&base!="Shift"){name="Shift-"+name}
return name}
function keyName(event,noShift){if(presto&&event.keyCode==34&&event["char"]){return false}
var name=keyNames[event.keyCode]
if(name==null||event.altGraphKey){return false}
if(event.keyCode==3&&event.code){name=event.code}
return addModifierNames(name,event,noShift)}
function getKeyMap(val){return typeof val=="string"?keyMap[val]:val}
function deleteNearSelection(cm,compute){var ranges=cm.doc.sel.ranges,kill=[]
for(var i=0;i<ranges.length;i++){var toKill=compute(ranges[i])
while(kill.length&&cmp(toKill.from,lst(kill).to)<=0){var replaced=kill.pop()
if(cmp(replaced.from,toKill.from)<0){toKill.from=replaced.from
break}}
kill.push(toKill)}
runInOp(cm,function(){for(var i=kill.length-1;i>=0;i--)
{replaceRange(cm.doc,"",kill[i].from,kill[i].to,"+delete")}
ensureCursorVisible(cm)})}
function moveCharLogically(line,ch,dir){var target=skipExtendingChars(line.text,ch+dir,dir)
return target<0||target>line.text.length?null:target}
function moveLogically(line,start,dir){var ch=moveCharLogically(line,start.ch,dir)
return ch==null?null:new Pos(start.line,ch,dir<0?"after":"before")}
function endOfLine(visually,cm,lineObj,lineNo,dir){if(visually){var order=getOrder(lineObj,cm.doc.direction)
if(order){var part=dir<0?lst(order):order[0]
var moveInStorageOrder=(dir<0)==(part.level==1)
var sticky=moveInStorageOrder?"after":"before"
var ch
if(part.level>0||cm.doc.direction=="rtl"){var prep=prepareMeasureForLine(cm,lineObj)
ch=dir<0?lineObj.text.length-1:0
var targetTop=measureCharPrepared(cm,prep,ch).top
ch=findFirst(function(ch){return measureCharPrepared(cm,prep,ch).top==targetTop;},(dir<0)==(part.level==1)?part.from:part.to-1,ch)
if(sticky=="before"){ch=moveCharLogically(lineObj,ch,1)}}else{ch=dir<0?part.to:part.from}
return new Pos(lineNo,ch,sticky)}}
return new Pos(lineNo,dir<0?lineObj.text.length:0,dir<0?"before":"after")}
function moveVisually(cm,line,start,dir){var bidi=getOrder(line,cm.doc.direction)
if(!bidi){return moveLogically(line,start,dir)}
if(start.ch>=line.text.length){start.ch=line.text.length
start.sticky="before"}else if(start.ch<=0){start.ch=0
start.sticky="after"}
var partPos=getBidiPartAt(bidi,start.ch,start.sticky),part=bidi[partPos]
if(cm.doc.direction=="ltr"&&part.level%2==0&&(dir>0?part.to>start.ch:part.from<start.ch)){return moveLogically(line,start,dir)}
var mv=function(pos,dir){return moveCharLogically(line,pos instanceof Pos?pos.ch:pos,dir);}
var prep
var getWrappedLineExtent=function(ch){if(!cm.options.lineWrapping){return{begin:0,end:line.text.length}}
prep=prep||prepareMeasureForLine(cm,line)
return wrappedLineExtentChar(cm,line,prep,ch)}
var wrappedLineExtent=getWrappedLineExtent(start.sticky=="before"?mv(start,-1):start.ch)
if(cm.doc.direction=="rtl"||part.level==1){var moveInStorageOrder=(part.level==1)==(dir<0)
var ch=mv(start,moveInStorageOrder?1:-1)
if(ch!=null&&(!moveInStorageOrder?ch>=part.from&&ch>=wrappedLineExtent.begin:ch<=part.to&&ch<=wrappedLineExtent.end)){var sticky=moveInStorageOrder?"before":"after"
return new Pos(start.line,ch,sticky)}}
var searchInVisualLine=function(partPos,dir,wrappedLineExtent){var getRes=function(ch,moveInStorageOrder){return moveInStorageOrder?new Pos(start.line,mv(ch,1),"before"):new Pos(start.line,ch,"after");}
for(;partPos>=0&&partPos<bidi.length;partPos+=dir){var part=bidi[partPos]
var moveInStorageOrder=(dir>0)==(part.level!=1)
var ch=moveInStorageOrder?wrappedLineExtent.begin:mv(wrappedLineExtent.end,-1)
if(part.from<=ch&&ch<part.to){return getRes(ch,moveInStorageOrder)}
ch=moveInStorageOrder?part.from:mv(part.to,-1)
if(wrappedLineExtent.begin<=ch&&ch<wrappedLineExtent.end){return getRes(ch,moveInStorageOrder)}}}
var res=searchInVisualLine(partPos+dir,dir,wrappedLineExtent)
if(res){return res}
var nextCh=dir>0?wrappedLineExtent.end:mv(wrappedLineExtent.begin,-1)
if(nextCh!=null&&!(dir>0&&nextCh==line.text.length)){res=searchInVisualLine(dir>0?0:bidi.length-1,dir,getWrappedLineExtent(nextCh))
if(res){return res}}
return null}
var commands={selectAll:selectAll,singleSelection:function(cm){return cm.setSelection(cm.getCursor("anchor"),cm.getCursor("head"),sel_dontScroll);},killLine:function(cm){return deleteNearSelection(cm,function(range){if(range.empty()){var len=getLine(cm.doc,range.head.line).text.length
if(range.head.ch==len&&range.head.line<cm.lastLine())
{return{from:range.head,to:Pos(range.head.line+1,0)}}
else
{return{from:range.head,to:Pos(range.head.line,len)}}}else{return{from:range.from(),to:range.to()}}});},deleteLine:function(cm){return deleteNearSelection(cm,function(range){return({from:Pos(range.from().line,0),to:clipPos(cm.doc,Pos(range.to().line+1,0))});});},delLineLeft:function(cm){return deleteNearSelection(cm,function(range){return({from:Pos(range.from().line,0),to:range.from()});});},delWrappedLineLeft:function(cm){return deleteNearSelection(cm,function(range){var top=cm.charCoords(range.head,"div").top+5
var leftPos=cm.coordsChar({left:0,top:top},"div")
return{from:leftPos,to:range.from()}});},delWrappedLineRight:function(cm){return deleteNearSelection(cm,function(range){var top=cm.charCoords(range.head,"div").top+5
var rightPos=cm.coordsChar({left:cm.display.lineDiv.offsetWidth+100,top:top},"div")
return{from:range.from(),to:rightPos}});},undo:function(cm){return cm.undo();},redo:function(cm){return cm.redo();},undoSelection:function(cm){return cm.undoSelection();},redoSelection:function(cm){return cm.redoSelection();},goDocStart:function(cm){return cm.extendSelection(Pos(cm.firstLine(),0));},goDocEnd:function(cm){return cm.extendSelection(Pos(cm.lastLine()));},goLineStart:function(cm){return cm.extendSelectionsBy(function(range){return lineStart(cm,range.head.line);},{origin:"+move",bias:1});},goLineStartSmart:function(cm){return cm.extendSelectionsBy(function(range){return lineStartSmart(cm,range.head);},{origin:"+move",bias:1});},goLineEnd:function(cm){return cm.extendSelectionsBy(function(range){return lineEnd(cm,range.head.line);},{origin:"+move",bias:-1});},goLineRight:function(cm){return cm.extendSelectionsBy(function(range){var top=cm.cursorCoords(range.head,"div").top+5
return cm.coordsChar({left:cm.display.lineDiv.offsetWidth+100,top:top},"div")},sel_move);},goLineLeft:function(cm){return cm.extendSelectionsBy(function(range){var top=cm.cursorCoords(range.head,"div").top+5
return cm.coordsChar({left:0,top:top},"div")},sel_move);},goLineLeftSmart:function(cm){return cm.extendSelectionsBy(function(range){var top=cm.cursorCoords(range.head,"div").top+5
var pos=cm.coordsChar({left:0,top:top},"div")
if(pos.ch<cm.getLine(pos.line).search(/\S/)){return lineStartSmart(cm,range.head)}
return pos},sel_move);},goLineUp:function(cm){return cm.moveV(-1,"line");},goLineDown:function(cm){return cm.moveV(1,"line");},goPageUp:function(cm){return cm.moveV(-1,"page");},goPageDown:function(cm){return cm.moveV(1,"page");},goCharLeft:function(cm){return cm.moveH(-1,"char");},goCharRight:function(cm){return cm.moveH(1,"char");},goColumnLeft:function(cm){return cm.moveH(-1,"column");},goColumnRight:function(cm){return cm.moveH(1,"column");},goWordLeft:function(cm){return cm.moveH(-1,"word");},goGroupRight:function(cm){return cm.moveH(1,"group");},goGroupLeft:function(cm){return cm.moveH(-1,"group");},goWordRight:function(cm){return cm.moveH(1,"word");},delCharBefore:function(cm){return cm.deleteH(-1,"char");},delCharAfter:function(cm){return cm.deleteH(1,"char");},delWordBefore:function(cm){return cm.deleteH(-1,"word");},delWordAfter:function(cm){return cm.deleteH(1,"word");},delGroupBefore:function(cm){return cm.deleteH(-1,"group");},delGroupAfter:function(cm){return cm.deleteH(1,"group");},indentAuto:function(cm){return cm.indentSelection("smart");},indentMore:function(cm){return cm.indentSelection("add");},indentLess:function(cm){return cm.indentSelection("subtract");},insertTab:function(cm){return cm.replaceSelection("\t");},insertSoftTab:function(cm){var spaces=[],ranges=cm.listSelections(),tabSize=cm.options.tabSize
for(var i=0;i<ranges.length;i++){var pos=ranges[i].from()
var col=countColumn(cm.getLine(pos.line),pos.ch,tabSize)
spaces.push(spaceStr(tabSize-col%tabSize))}
cm.replaceSelections(spaces)},defaultTab:function(cm){if(cm.somethingSelected()){cm.indentSelection("add")}
else{cm.execCommand("insertTab")}},transposeChars:function(cm){return runInOp(cm,function(){var ranges=cm.listSelections(),newSel=[]
for(var i=0;i<ranges.length;i++){if(!ranges[i].empty()){continue}
var cur=ranges[i].head,line=getLine(cm.doc,cur.line).text
if(line){if(cur.ch==line.length){cur=new Pos(cur.line,cur.ch-1)}
if(cur.ch>0){cur=new Pos(cur.line,cur.ch+1)
cm.replaceRange(line.charAt(cur.ch-1)+line.charAt(cur.ch-2),Pos(cur.line,cur.ch-2),cur,"+transpose")}else if(cur.line>cm.doc.first){var prev=getLine(cm.doc,cur.line-1).text
if(prev){cur=new Pos(cur.line,1)
cm.replaceRange(line.charAt(0)+cm.doc.lineSeparator()+
prev.charAt(prev.length-1),Pos(cur.line-1,prev.length-1),cur,"+transpose")}}}
newSel.push(new Range(cur,cur))}
cm.setSelections(newSel)});},newlineAndIndent:function(cm){return runInOp(cm,function(){var sels=cm.listSelections()
for(var i=sels.length-1;i>=0;i--)
{cm.replaceRange(cm.doc.lineSeparator(),sels[i].anchor,sels[i].head,"+input")}
sels=cm.listSelections()
for(var i$1=0;i$1<sels.length;i$1++)
{cm.indentLine(sels[i$1].from().line,null,true)}
ensureCursorVisible(cm)});},openLine:function(cm){return cm.replaceSelection("\n","start");},toggleOverwrite:function(cm){return cm.toggleOverwrite();}}
function lineStart(cm,lineN){var line=getLine(cm.doc,lineN)
var visual=visualLine(line)
if(visual!=line){lineN=lineNo(visual)}
return endOfLine(true,cm,visual,lineN,1)}
function lineEnd(cm,lineN){var line=getLine(cm.doc,lineN)
var visual=visualLineEnd(line)
if(visual!=line){lineN=lineNo(visual)}
return endOfLine(true,cm,line,lineN,-1)}
function lineStartSmart(cm,pos){var start=lineStart(cm,pos.line)
var line=getLine(cm.doc,start.line)
var order=getOrder(line,cm.doc.direction)
if(!order||order[0].level==0){var firstNonWS=Math.max(0,line.text.search(/\S/))
var inWS=pos.line==start.line&&pos.ch<=firstNonWS&&pos.ch
return Pos(start.line,inWS?0:firstNonWS,start.sticky)}
return start}
function doHandleBinding(cm,bound,dropShift){if(typeof bound=="string"){bound=commands[bound]
if(!bound){return false}}
cm.display.input.ensurePolled()
var prevShift=cm.display.shift,done=false
try{if(cm.isReadOnly()){cm.state.suppressEdits=true}
if(dropShift){cm.display.shift=false}
done=bound(cm)!=Pass}finally{cm.display.shift=prevShift
cm.state.suppressEdits=false}
return done}
function lookupKeyForEditor(cm,name,handle){for(var i=0;i<cm.state.keyMaps.length;i++){var result=lookupKey(name,cm.state.keyMaps[i],handle,cm)
if(result){return result}}
return(cm.options.extraKeys&&lookupKey(name,cm.options.extraKeys,handle,cm))||lookupKey(name,cm.options.keyMap,handle,cm)}
var stopSeq=new Delayed
function dispatchKey(cm,name,e,handle){var seq=cm.state.keySeq
if(seq){if(isModifierKey(name)){return"handled"}
if(/\'$/.test(name))
{cm.state.keySeq=null}
else
{stopSeq.set(50,function(){if(cm.state.keySeq==seq){cm.state.keySeq=null
cm.display.input.reset()}})}
if(dispatchKeyInner(cm,seq+" "+name,e,handle)){return true}}
return dispatchKeyInner(cm,name,e,handle)}
function dispatchKeyInner(cm,name,e,handle){var result=lookupKeyForEditor(cm,name,handle)
if(result=="multi")
{cm.state.keySeq=name}
if(result=="handled")
{signalLater(cm,"keyHandled",cm,name,e)}
if(result=="handled"||result=="multi"){e_preventDefault(e)
restartBlink(cm)}
return!!result}
function handleKeyBinding(cm,e){var name=keyName(e,true)
if(!name){return false}
if(e.shiftKey&&!cm.state.keySeq){return dispatchKey(cm,"Shift-"+name,e,function(b){return doHandleBinding(cm,b,true);})||dispatchKey(cm,name,e,function(b){if(typeof b=="string"?/^go[A-Z]/.test(b):b.motion)
{return doHandleBinding(cm,b)}})}else{return dispatchKey(cm,name,e,function(b){return doHandleBinding(cm,b);})}}
function handleCharBinding(cm,e,ch){return dispatchKey(cm,"'"+ch+"'",e,function(b){return doHandleBinding(cm,b,true);})}
var lastStoppedKey=null
function onKeyDown(e){var cm=this
cm.curOp.focus=activeElt()
if(signalDOMEvent(cm,e)){return}
if(ie&&ie_version<11&&e.keyCode==27){e.returnValue=false}
var code=e.keyCode
cm.display.shift=code==16||e.shiftKey
var handled=handleKeyBinding(cm,e)
if(presto){lastStoppedKey=handled?code:null
if(!handled&&code==88&&!hasCopyEvent&&(mac?e.metaKey:e.ctrlKey))
{cm.replaceSelection("",null,"cut")}}
if(code==18&&!/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
{showCrossHair(cm)}}
function showCrossHair(cm){var lineDiv=cm.display.lineDiv
addClass(lineDiv,"CodeMirror-crosshair")
function up(e){if(e.keyCode==18||!e.altKey){rmClass(lineDiv,"CodeMirror-crosshair")
off(document,"keyup",up)
off(document,"mouseover",up)}}
on(document,"keyup",up)
on(document,"mouseover",up)}
function onKeyUp(e){if(e.keyCode==16){this.doc.sel.shift=false}
signalDOMEvent(this,e)}
function onKeyPress(e){var cm=this
if(eventInWidget(cm.display,e)||signalDOMEvent(cm,e)||e.ctrlKey&&!e.altKey||mac&&e.metaKey){return}
var keyCode=e.keyCode,charCode=e.charCode
if(presto&&keyCode==lastStoppedKey){lastStoppedKey=null;e_preventDefault(e);return}
if((presto&&(!e.which||e.which<10))&&handleKeyBinding(cm,e)){return}
var ch=String.fromCharCode(charCode==null?keyCode:charCode)
if(ch=="\x08"){return}
if(handleCharBinding(cm,e,ch)){return}
cm.display.input.onKeyPress(e)}
var DOUBLECLICK_DELAY=400
var PastClick=function(time,pos,button){this.time=time
this.pos=pos
this.button=button};PastClick.prototype.compare=function(time,pos,button){return this.time+DOUBLECLICK_DELAY>time&&cmp(pos,this.pos)==0&&button==this.button};var lastClick;var lastDoubleClick;function clickRepeat(pos,button){var now=+new Date
if(lastDoubleClick&&lastDoubleClick.compare(now,pos,button)){lastClick=lastDoubleClick=null
return"triple"}else if(lastClick&&lastClick.compare(now,pos,button)){lastDoubleClick=new PastClick(now,pos,button)
lastClick=null
return"double"}else{lastClick=new PastClick(now,pos,button)
lastDoubleClick=null
return"single"}}
function onMouseDown(e){var cm=this,display=cm.display
if(signalDOMEvent(cm,e)||display.activeTouch&&display.input.supportsTouch()){return}
display.input.ensurePolled()
display.shift=e.shiftKey
if(eventInWidget(display,e)){if(!webkit){display.scroller.draggable=false
setTimeout(function(){return display.scroller.draggable=true;},100)}
return}
var button=e_button(e)
if(button==3&&captureRightClick?contextMenuInGutter(cm,e):clickInGutter(cm,e)){return}
var pos=posFromMouse(cm,e),repeat=pos?clickRepeat(pos,button):"single"
window.focus()
if(button==1&&cm.state.selectingText)
{cm.state.selectingText(e)}
if(pos&&handleMappedButton(cm,button,pos,repeat,e)){return}
if(button==1){if(pos){leftButtonDown(cm,pos,repeat,e)}
else if(e_target(e)==display.scroller){e_preventDefault(e)}}else if(button==2){if(pos){extendSelection(cm.doc,pos)}
setTimeout(function(){return display.input.focus();},20)}else if(button==3){if(captureRightClick){onContextMenu(cm,e)}
else{delayBlurEvent(cm)}}}
function handleMappedButton(cm,button,pos,repeat,event){var name="Click"
if(repeat=="double"){name="Double"+name}
else if(repeat=="triple"){name="Triple"+name}
name=(button==1?"Left":button==2?"Middle":"Right")+name
return dispatchKey(cm,addModifierNames(name,event),event,function(bound){if(typeof bound=="string"){bound=commands[bound]}
if(!bound){return false}
var done=false
try{if(cm.isReadOnly()){cm.state.suppressEdits=true}
done=bound(cm,pos)!=Pass}finally{cm.state.suppressEdits=false}
return done})}
function configureMouse(cm,repeat,event){var option=cm.getOption("configureMouse")
var value=option?option(cm,repeat,event):{}
if(value.unit==null){var rect=chromeOS?event.shiftKey&&event.metaKey:event.altKey
value.unit=rect?"rectangle":repeat=="single"?"char":repeat=="double"?"word":"line"}
if(value.extend==null||cm.doc.extend){value.extend=cm.doc.extend||event.shiftKey}
if(value.addNew==null){value.addNew=mac?event.metaKey:event.ctrlKey}
if(value.moveOnDrag==null){value.moveOnDrag=!(mac?event.altKey:event.ctrlKey)}
return value}
function leftButtonDown(cm,pos,repeat,event){if(ie){setTimeout(bind(ensureFocus,cm),0)}
else{cm.curOp.focus=activeElt()}
var behavior=configureMouse(cm,repeat,event)
var sel=cm.doc.sel,contained
if(cm.options.dragDrop&&dragAndDrop&&!cm.isReadOnly()&&repeat=="single"&&(contained=sel.contains(pos))>-1&&(cmp((contained=sel.ranges[contained]).from(),pos)<0||pos.xRel>0)&&(cmp(contained.to(),pos)>0||pos.xRel<0))
{leftButtonStartDrag(cm,event,pos,behavior)}
else
{leftButtonSelect(cm,event,pos,behavior)}}
function leftButtonStartDrag(cm,event,pos,behavior){var display=cm.display,moved=false
var dragEnd=operation(cm,function(e){if(webkit){display.scroller.draggable=false}
cm.state.draggingText=false
off(display.wrapper.ownerDocument,"mouseup",dragEnd)
off(display.wrapper.ownerDocument,"mousemove",mouseMove)
off(display.scroller,"dragstart",dragStart)
off(display.scroller,"drop",dragEnd)
if(!moved){e_preventDefault(e)
if(!behavior.addNew)
{extendSelection(cm.doc,pos,null,null,behavior.extend)}
if(webkit||ie&&ie_version==9)
{setTimeout(function(){display.wrapper.ownerDocument.body.focus();display.input.focus()},20)}
else
{display.input.focus()}}})
var mouseMove=function(e2){moved=moved||Math.abs(event.clientX-e2.clientX)+Math.abs(event.clientY-e2.clientY)>=10}
var dragStart=function(){return moved=true;}
if(webkit){display.scroller.draggable=true}
cm.state.draggingText=dragEnd
dragEnd.copy=!behavior.moveOnDrag
if(display.scroller.dragDrop){display.scroller.dragDrop()}
on(display.wrapper.ownerDocument,"mouseup",dragEnd)
on(display.wrapper.ownerDocument,"mousemove",mouseMove)
on(display.scroller,"dragstart",dragStart)
on(display.scroller,"drop",dragEnd)
delayBlurEvent(cm)
setTimeout(function(){return display.input.focus();},20)}
function rangeForUnit(cm,pos,unit){if(unit=="char"){return new Range(pos,pos)}
if(unit=="word"){return cm.findWordAt(pos)}
if(unit=="line"){return new Range(Pos(pos.line,0),clipPos(cm.doc,Pos(pos.line+1,0)))}
var result=unit(cm,pos)
return new Range(result.from,result.to)}
function leftButtonSelect(cm,event,start,behavior){var display=cm.display,doc=cm.doc
e_preventDefault(event)
var ourRange,ourIndex,startSel=doc.sel,ranges=startSel.ranges
if(behavior.addNew&&!behavior.extend){ourIndex=doc.sel.contains(start)
if(ourIndex>-1)
{ourRange=ranges[ourIndex]}
else
{ourRange=new Range(start,start)}}else{ourRange=doc.sel.primary()
ourIndex=doc.sel.primIndex}
if(behavior.unit=="rectangle"){if(!behavior.addNew){ourRange=new Range(start,start)}
start=posFromMouse(cm,event,true,true)
ourIndex=-1}else{var range=rangeForUnit(cm,start,behavior.unit)
if(behavior.extend)
{ourRange=extendRange(ourRange,range.anchor,range.head,behavior.extend)}
else
{ourRange=range}}
if(!behavior.addNew){ourIndex=0
setSelection(doc,new Selection([ourRange],0),sel_mouse)
startSel=doc.sel}else if(ourIndex==-1){ourIndex=ranges.length
setSelection(doc,normalizeSelection(ranges.concat([ourRange]),ourIndex),{scroll:false,origin:"*mouse"})}else if(ranges.length>1&&ranges[ourIndex].empty()&&behavior.unit=="char"&&!behavior.extend){setSelection(doc,normalizeSelection(ranges.slice(0,ourIndex).concat(ranges.slice(ourIndex+1)),0),{scroll:false,origin:"*mouse"})
startSel=doc.sel}else{replaceOneSelection(doc,ourIndex,ourRange,sel_mouse)}
var lastPos=start
function extendTo(pos){if(cmp(lastPos,pos)==0){return}
lastPos=pos
if(behavior.unit=="rectangle"){var ranges=[],tabSize=cm.options.tabSize
var startCol=countColumn(getLine(doc,start.line).text,start.ch,tabSize)
var posCol=countColumn(getLine(doc,pos.line).text,pos.ch,tabSize)
var left=Math.min(startCol,posCol),right=Math.max(startCol,posCol)
for(var line=Math.min(start.line,pos.line),end=Math.min(cm.lastLine(),Math.max(start.line,pos.line));line<=end;line++){var text=getLine(doc,line).text,leftPos=findColumn(text,left,tabSize)
if(left==right)
{ranges.push(new Range(Pos(line,leftPos),Pos(line,leftPos)))}
else if(text.length>leftPos)
{ranges.push(new Range(Pos(line,leftPos),Pos(line,findColumn(text,right,tabSize))))}}
if(!ranges.length){ranges.push(new Range(start,start))}
setSelection(doc,normalizeSelection(startSel.ranges.slice(0,ourIndex).concat(ranges),ourIndex),{origin:"*mouse",scroll:false})
cm.scrollIntoView(pos)}else{var oldRange=ourRange
var range=rangeForUnit(cm,pos,behavior.unit)
var anchor=oldRange.anchor,head
if(cmp(range.anchor,anchor)>0){head=range.head
anchor=minPos(oldRange.from(),range.anchor)}else{head=range.anchor
anchor=maxPos(oldRange.to(),range.head)}
var ranges$1=startSel.ranges.slice(0)
ranges$1[ourIndex]=bidiSimplify(cm,new Range(clipPos(doc,anchor),head))
setSelection(doc,normalizeSelection(ranges$1,ourIndex),sel_mouse)}}
var editorSize=display.wrapper.getBoundingClientRect()
var counter=0
function extend(e){var curCount=++counter
var cur=posFromMouse(cm,e,true,behavior.unit=="rectangle")
if(!cur){return}
if(cmp(cur,lastPos)!=0){cm.curOp.focus=activeElt()
extendTo(cur)
var visible=visibleLines(display,doc)
if(cur.line>=visible.to||cur.line<visible.from)
{setTimeout(operation(cm,function(){if(counter==curCount){extend(e)}}),150)}}else{var outside=e.clientY<editorSize.top?-20:e.clientY>editorSize.bottom?20:0
if(outside){setTimeout(operation(cm,function(){if(counter!=curCount){return}
display.scroller.scrollTop+=outside
extend(e)}),50)}}}
function done(e){cm.state.selectingText=false
counter=Infinity
e_preventDefault(e)
display.input.focus()
off(display.wrapper.ownerDocument,"mousemove",move)
off(display.wrapper.ownerDocument,"mouseup",up)
doc.history.lastSelOrigin=null}
var move=operation(cm,function(e){if(e.buttons===0||!e_button(e)){done(e)}
else{extend(e)}})
var up=operation(cm,done)
cm.state.selectingText=up
on(display.wrapper.ownerDocument,"mousemove",move)
on(display.wrapper.ownerDocument,"mouseup",up)}
function bidiSimplify(cm,range){var anchor=range.anchor;var head=range.head;var anchorLine=getLine(cm.doc,anchor.line)
if(cmp(anchor,head)==0&&anchor.sticky==head.sticky){return range}
var order=getOrder(anchorLine)
if(!order){return range}
var index=getBidiPartAt(order,anchor.ch,anchor.sticky),part=order[index]
if(part.from!=anchor.ch&&part.to!=anchor.ch){return range}
var boundary=index+((part.from==anchor.ch)==(part.level!=1)?0:1)
if(boundary==0||boundary==order.length){return range}
var leftSide
if(head.line!=anchor.line){leftSide=(head.line-anchor.line)*(cm.doc.direction=="ltr"?1:-1)>0}else{var headIndex=getBidiPartAt(order,head.ch,head.sticky)
var dir=headIndex-index||(head.ch-anchor.ch)*(part.level==1?-1:1)
if(headIndex==boundary-1||headIndex==boundary)
{leftSide=dir<0}
else
{leftSide=dir>0}}
var usePart=order[boundary+(leftSide?-1:0)]
var from=leftSide==(usePart.level==1)
var ch=from?usePart.from:usePart.to,sticky=from?"after":"before"
return anchor.ch==ch&&anchor.sticky==sticky?range:new Range(new Pos(anchor.line,ch,sticky),head)}
function gutterEvent(cm,e,type,prevent){var mX,mY
if(e.touches){mX=e.touches[0].clientX
mY=e.touches[0].clientY}else{try{mX=e.clientX;mY=e.clientY}
catch(e){return false}}
if(mX>=Math.floor(cm.display.gutters.getBoundingClientRect().right)){return false}
if(prevent){e_preventDefault(e)}
var display=cm.display
var lineBox=display.lineDiv.getBoundingClientRect()
if(mY>lineBox.bottom||!hasHandler(cm,type)){return e_defaultPrevented(e)}
mY-=lineBox.top-display.viewOffset
for(var i=0;i<cm.options.gutters.length;++i){var g=display.gutters.childNodes[i]
if(g&&g.getBoundingClientRect().right>=mX){var line=lineAtHeight(cm.doc,mY)
var gutter=cm.options.gutters[i]
signal(cm,type,cm,line,gutter,e)
return e_defaultPrevented(e)}}}
function clickInGutter(cm,e){return gutterEvent(cm,e,"gutterClick",true)}
function onContextMenu(cm,e){if(eventInWidget(cm.display,e)||contextMenuInGutter(cm,e)){return}
if(signalDOMEvent(cm,e,"contextmenu")){return}
cm.display.input.onContextMenu(e)}
function contextMenuInGutter(cm,e){if(!hasHandler(cm,"gutterContextMenu")){return false}
return gutterEvent(cm,e,"gutterContextMenu",false)}
function themeChanged(cm){cm.display.wrapper.className=cm.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+
cm.options.theme.replace(/(^|\s)\s*/g," cm-s-")
clearCaches(cm)}
var Init={toString:function(){return"CodeMirror.Init"}}
var defaults={}
var optionHandlers={}
function defineOptions(CodeMirror){var optionHandlers=CodeMirror.optionHandlers
function option(name,deflt,handle,notOnInit){CodeMirror.defaults[name]=deflt
if(handle){optionHandlers[name]=notOnInit?function(cm,val,old){if(old!=Init){handle(cm,val,old)}}:handle}}
CodeMirror.defineOption=option
CodeMirror.Init=Init
option("value","",function(cm,val){return cm.setValue(val);},true)
option("mode",null,function(cm,val){cm.doc.modeOption=val
loadMode(cm)},true)
option("indentUnit",2,loadMode,true)
option("indentWithTabs",false)
option("smartIndent",true)
option("tabSize",4,function(cm){resetModeState(cm)
clearCaches(cm)
regChange(cm)},true)
option("lineSeparator",null,function(cm,val){cm.doc.lineSep=val
if(!val){return}
var newBreaks=[],lineNo=cm.doc.first
cm.doc.iter(function(line){for(var pos=0;;){var found=line.text.indexOf(val,pos)
if(found==-1){break}
pos=found+val.length
newBreaks.push(Pos(lineNo,found))}
lineNo++})
for(var i=newBreaks.length-1;i>=0;i--)
{replaceRange(cm.doc,val,newBreaks[i],Pos(newBreaks[i].line,newBreaks[i].ch+val.length))}})
option("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(cm,val,old){cm.state.specialChars=new RegExp(val.source+(val.test("\t")?"":"|\t"),"g")
if(old!=Init){cm.refresh()}})
option("specialCharPlaceholder",defaultSpecialCharPlaceholder,function(cm){return cm.refresh();},true)
option("electricChars",true)
option("inputStyle",mobile?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},true)
option("spellcheck",false,function(cm,val){return cm.getInputField().spellcheck=val;},true)
option("rtlMoveVisually",!windows)
option("wholeLineUpdateBefore",true)
option("theme","default",function(cm){themeChanged(cm)
guttersChanged(cm)},true)
option("keyMap","default",function(cm,val,old){var next=getKeyMap(val)
var prev=old!=Init&&getKeyMap(old)
if(prev&&prev.detach){prev.detach(cm,next)}
if(next.attach){next.attach(cm,prev||null)}})
option("extraKeys",null)
option("configureMouse",null)
option("lineWrapping",false,wrappingChanged,true)
option("gutters",[],function(cm){setGuttersForLineNumbers(cm.options)
guttersChanged(cm)},true)
option("fixedGutter",true,function(cm,val){cm.display.gutters.style.left=val?compensateForHScroll(cm.display)+"px":"0"
cm.refresh()},true)
option("coverGutterNextToScrollbar",false,function(cm){return updateScrollbars(cm);},true)
option("scrollbarStyle","native",function(cm){initScrollbars(cm)
updateScrollbars(cm)
cm.display.scrollbars.setScrollTop(cm.doc.scrollTop)
cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)},true)
option("lineNumbers",false,function(cm){setGuttersForLineNumbers(cm.options)
guttersChanged(cm)},true)
option("firstLineNumber",1,guttersChanged,true)
option("lineNumberFormatter",function(integer){return integer;},guttersChanged,true)
option("showCursorWhenSelecting",false,updateSelection,true)
option("resetSelectionOnContextMenu",true)
option("lineWiseCopyCut",true)
option("pasteLinesPerSelection",true)
option("readOnly",false,function(cm,val){if(val=="nocursor"){onBlur(cm)
cm.display.input.blur()}
cm.display.input.readOnlyChanged(val)})
option("disableInput",false,function(cm,val){if(!val){cm.display.input.reset()}},true)
option("dragDrop",true,dragDropChanged)
option("allowDropFileTypes",null)
option("cursorBlinkRate",530)
option("cursorScrollMargin",0)
option("cursorHeight",1,updateSelection,true)
option("singleCursorHeightPerLine",true,updateSelection,true)
option("workTime",100)
option("workDelay",100)
option("flattenSpans",true,resetModeState,true)
option("addModeClass",false,resetModeState,true)
option("pollInterval",100)
option("undoDepth",200,function(cm,val){return cm.doc.history.undoDepth=val;})
option("historyEventDelay",1250)
option("viewportMargin",10,function(cm){return cm.refresh();},true)
option("maxHighlightLength",10000,resetModeState,true)
option("moveInputWithCursor",true,function(cm,val){if(!val){cm.display.input.resetPosition()}})
option("tabindex",null,function(cm,val){return cm.display.input.getField().tabIndex=val||"";})
option("autofocus",null)
option("direction","ltr",function(cm,val){return cm.doc.setDirection(val);},true)
option("phrases",null)}
function guttersChanged(cm){updateGutters(cm)
regChange(cm)
alignHorizontally(cm)}
function dragDropChanged(cm,value,old){var wasOn=old&&old!=Init
if(!value!=!wasOn){var funcs=cm.display.dragFunctions
var toggle=value?on:off
toggle(cm.display.scroller,"dragstart",funcs.start)
toggle(cm.display.scroller,"dragenter",funcs.enter)
toggle(cm.display.scroller,"dragover",funcs.over)
toggle(cm.display.scroller,"dragleave",funcs.leave)
toggle(cm.display.scroller,"drop",funcs.drop)}}
function wrappingChanged(cm){if(cm.options.lineWrapping){addClass(cm.display.wrapper,"CodeMirror-wrap")
cm.display.sizer.style.minWidth=""
cm.display.sizerWidth=null}else{rmClass(cm.display.wrapper,"CodeMirror-wrap")
findMaxLine(cm)}
estimateLineHeights(cm)
regChange(cm)
clearCaches(cm)
setTimeout(function(){return updateScrollbars(cm);},100)}
function CodeMirror(place,options){var this$1=this;if(!(this instanceof CodeMirror)){return new CodeMirror(place,options)}
this.options=options=options?copyObj(options):{}
copyObj(defaults,options,false)
setGuttersForLineNumbers(options)
var doc=options.value
if(typeof doc=="string"){doc=new Doc(doc,options.mode,null,options.lineSeparator,options.direction)}
else if(options.mode){doc.modeOption=options.mode}
this.doc=doc
var input=new CodeMirror.inputStyles[options.inputStyle](this)
var display=this.display=new Display(place,doc,input)
display.wrapper.CodeMirror=this
updateGutters(this)
themeChanged(this)
if(options.lineWrapping)
{this.display.wrapper.className+=" CodeMirror-wrap"}
initScrollbars(this)
this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:false,delayingBlurEvent:false,focused:false,suppressEdits:false,pasteIncoming:false,cutIncoming:false,selectingText:false,draggingText:false,highlight:new Delayed(),keySeq:null,specialChars:null}
if(options.autofocus&&!mobile){display.input.focus()}
if(ie&&ie_version<11){setTimeout(function(){return this$1.display.input.reset(true);},20)}
registerEventHandlers(this)
ensureGlobalHandlers()
startOperation(this)
this.curOp.forceUpdate=true
attachDoc(this,doc)
if((options.autofocus&&!mobile)||this.hasFocus())
{setTimeout(bind(onFocus,this),20)}
else
{onBlur(this)}
for(var opt in optionHandlers){if(optionHandlers.hasOwnProperty(opt))
{optionHandlers[opt](this$1,options[opt],Init)}}
maybeUpdateLineNumberWidth(this)
if(options.finishInit){options.finishInit(this)}
for(var i=0;i<initHooks.length;++i){initHooks[i](this$1)}
endOperation(this)
if(webkit&&options.lineWrapping&&getComputedStyle(display.lineDiv).textRendering=="optimizelegibility")
{display.lineDiv.style.textRendering="auto"}}
CodeMirror.defaults=defaults
CodeMirror.optionHandlers=optionHandlers
function registerEventHandlers(cm){var d=cm.display
on(d.scroller,"mousedown",operation(cm,onMouseDown))
if(ie&&ie_version<11)
{on(d.scroller,"dblclick",operation(cm,function(e){if(signalDOMEvent(cm,e)){return}
var pos=posFromMouse(cm,e)
if(!pos||clickInGutter(cm,e)||eventInWidget(cm.display,e)){return}
e_preventDefault(e)
var word=cm.findWordAt(pos)
extendSelection(cm.doc,word.anchor,word.head)}))}
else
{on(d.scroller,"dblclick",function(e){return signalDOMEvent(cm,e)||e_preventDefault(e);})}
if(!captureRightClick){on(d.scroller,"contextmenu",function(e){return onContextMenu(cm,e);})}
var touchFinished,prevTouch={end:0}
function finishTouch(){if(d.activeTouch){touchFinished=setTimeout(function(){return d.activeTouch=null;},1000)
prevTouch=d.activeTouch
prevTouch.end=+new Date}}
function isMouseLikeTouchEvent(e){if(e.touches.length!=1){return false}
var touch=e.touches[0]
return touch.radiusX<=1&&touch.radiusY<=1}
function farAway(touch,other){if(other.left==null){return true}
var dx=other.left-touch.left,dy=other.top-touch.top
return dx*dx+dy*dy>20*20}
on(d.scroller,"touchstart",function(e){if(!signalDOMEvent(cm,e)&&!isMouseLikeTouchEvent(e)&&!clickInGutter(cm,e)){d.input.ensurePolled()
clearTimeout(touchFinished)
var now=+new Date
d.activeTouch={start:now,moved:false,prev:now-prevTouch.end<=300?prevTouch:null}
if(e.touches.length==1){d.activeTouch.left=e.touches[0].pageX
d.activeTouch.top=e.touches[0].pageY}}})
on(d.scroller,"touchmove",function(){if(d.activeTouch){d.activeTouch.moved=true}})
on(d.scroller,"touchend",function(e){var touch=d.activeTouch
if(touch&&!eventInWidget(d,e)&&touch.left!=null&&!touch.moved&&new Date-touch.start<300){var pos=cm.coordsChar(d.activeTouch,"page"),range
if(!touch.prev||farAway(touch,touch.prev))
{range=new Range(pos,pos)}
else if(!touch.prev.prev||farAway(touch,touch.prev.prev))
{range=cm.findWordAt(pos)}
else
{range=new Range(Pos(pos.line,0),clipPos(cm.doc,Pos(pos.line+1,0)))}
cm.setSelection(range.anchor,range.head)
cm.focus()
e_preventDefault(e)}
finishTouch()})
on(d.scroller,"touchcancel",finishTouch)
on(d.scroller,"scroll",function(){if(d.scroller.clientHeight){updateScrollTop(cm,d.scroller.scrollTop)
setScrollLeft(cm,d.scroller.scrollLeft,true)
signal(cm,"scroll",cm)}})
on(d.scroller,"mousewheel",function(e){return onScrollWheel(cm,e);})
on(d.scroller,"DOMMouseScroll",function(e){return onScrollWheel(cm,e);})
on(d.wrapper,"scroll",function(){return d.wrapper.scrollTop=d.wrapper.scrollLeft=0;})
d.dragFunctions={enter:function(e){if(!signalDOMEvent(cm,e)){e_stop(e)}},over:function(e){if(!signalDOMEvent(cm,e)){onDragOver(cm,e);e_stop(e)}},start:function(e){return onDragStart(cm,e);},drop:operation(cm,onDrop),leave:function(e){if(!signalDOMEvent(cm,e)){clearDragCursor(cm)}}}
var inp=d.input.getField()
on(inp,"keyup",function(e){return onKeyUp.call(cm,e);})
on(inp,"keydown",operation(cm,onKeyDown))
on(inp,"keypress",operation(cm,onKeyPress))
on(inp,"focus",function(e){return onFocus(cm,e);})
on(inp,"blur",function(e){return onBlur(cm,e);})}
var initHooks=[]
CodeMirror.defineInitHook=function(f){return initHooks.push(f);}
function indentLine(cm,n,how,aggressive){var doc=cm.doc,state
if(how==null){how="add"}
if(how=="smart"){if(!doc.mode.indent){how="prev"}
else{state=getContextBefore(cm,n).state}}
var tabSize=cm.options.tabSize
var line=getLine(doc,n),curSpace=countColumn(line.text,null,tabSize)
if(line.stateAfter){line.stateAfter=null}
var curSpaceString=line.text.match(/^\s*/)[0],indentation
if(!aggressive&&!/\S/.test(line.text)){indentation=0
how="not"}else if(how=="smart"){indentation=doc.mode.indent(state,line.text.slice(curSpaceString.length),line.text)
if(indentation==Pass||indentation>150){if(!aggressive){return}
how="prev"}}
if(how=="prev"){if(n>doc.first){indentation=countColumn(getLine(doc,n-1).text,null,tabSize)}
else{indentation=0}}else if(how=="add"){indentation=curSpace+cm.options.indentUnit}else if(how=="subtract"){indentation=curSpace-cm.options.indentUnit}else if(typeof how=="number"){indentation=curSpace+how}
indentation=Math.max(0,indentation)
var indentString="",pos=0
if(cm.options.indentWithTabs)
{for(var i=Math.floor(indentation/tabSize);i;--i){pos+=tabSize;indentString+="\t"}}
if(pos<indentation){indentString+=spaceStr(indentation-pos)}
if(indentString!=curSpaceString){replaceRange(doc,indentString,Pos(n,0),Pos(n,curSpaceString.length),"+input")
line.stateAfter=null
return true}else{for(var i$1=0;i$1<doc.sel.ranges.length;i$1++){var range=doc.sel.ranges[i$1]
if(range.head.line==n&&range.head.ch<curSpaceString.length){var pos$1=Pos(n,curSpaceString.length)
replaceOneSelection(doc,i$1,new Range(pos$1,pos$1))
break}}}}
var lastCopied=null
function setLastCopied(newLastCopied){lastCopied=newLastCopied}
function applyTextInput(cm,inserted,deleted,sel,origin){var doc=cm.doc
cm.display.shift=false
if(!sel){sel=doc.sel}
var paste=cm.state.pasteIncoming||origin=="paste"
var textLines=splitLinesAuto(inserted),multiPaste=null
if(paste&&sel.ranges.length>1){if(lastCopied&&lastCopied.text.join("\n")==inserted){if(sel.ranges.length%lastCopied.text.length==0){multiPaste=[]
for(var i=0;i<lastCopied.text.length;i++)
{multiPaste.push(doc.splitLines(lastCopied.text[i]))}}}else if(textLines.length==sel.ranges.length&&cm.options.pasteLinesPerSelection){multiPaste=map(textLines,function(l){return[l];})}}
var updateInput
for(var i$1=sel.ranges.length-1;i$1>=0;i$1--){var range=sel.ranges[i$1]
var from=range.from(),to=range.to()
if(range.empty()){if(deleted&&deleted>0)
{from=Pos(from.line,from.ch-deleted)}
else if(cm.state.overwrite&&!paste)
{to=Pos(to.line,Math.min(getLine(doc,to.line).text.length,to.ch+lst(textLines).length))}
else if(lastCopied&&lastCopied.lineWise&&lastCopied.text.join("\n")==inserted)
{from=to=Pos(from.line,0)}}
updateInput=cm.curOp.updateInput
var changeEvent={from:from,to:to,text:multiPaste?multiPaste[i$1%multiPaste.length]:textLines,origin:origin||(paste?"paste":cm.state.cutIncoming?"cut":"+input")}
makeChange(cm.doc,changeEvent)
signalLater(cm,"inputRead",cm,changeEvent)}
if(inserted&&!paste)
{triggerElectric(cm,inserted)}
ensureCursorVisible(cm)
cm.curOp.updateInput=updateInput
cm.curOp.typing=true
cm.state.pasteIncoming=cm.state.cutIncoming=false}
function handlePaste(e,cm){var pasted=e.clipboardData&&e.clipboardData.getData("Text")
if(pasted){e.preventDefault()
if(!cm.isReadOnly()&&!cm.options.disableInput)
{runInOp(cm,function(){return applyTextInput(cm,pasted,0,null,"paste");})}
return true}}
function triggerElectric(cm,inserted){if(!cm.options.electricChars||!cm.options.smartIndent){return}
var sel=cm.doc.sel
for(var i=sel.ranges.length-1;i>=0;i--){var range=sel.ranges[i]
if(range.head.ch>100||(i&&sel.ranges[i-1].head.line==range.head.line)){continue}
var mode=cm.getModeAt(range.head)
var indented=false
if(mode.electricChars){for(var j=0;j<mode.electricChars.length;j++)
{if(inserted.indexOf(mode.electricChars.charAt(j))>-1){indented=indentLine(cm,range.head.line,"smart")
break}}}else if(mode.electricInput){if(mode.electricInput.test(getLine(cm.doc,range.head.line).text.slice(0,range.head.ch)))
{indented=indentLine(cm,range.head.line,"smart")}}
if(indented){signalLater(cm,"electricInput",cm,range.head.line)}}}
function copyableRanges(cm){var text=[],ranges=[]
for(var i=0;i<cm.doc.sel.ranges.length;i++){var line=cm.doc.sel.ranges[i].head.line
var lineRange={anchor:Pos(line,0),head:Pos(line+1,0)}
ranges.push(lineRange)
text.push(cm.getRange(lineRange.anchor,lineRange.head))}
return{text:text,ranges:ranges}}
function disableBrowserMagic(field,spellcheck){field.setAttribute("autocorrect","off")
field.setAttribute("autocapitalize","off")
field.setAttribute("spellcheck",!!spellcheck)}
function hiddenTextarea(){var te=elt("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
var div=elt("div",[te],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
if(webkit){te.style.width="1000px"}
else{te.setAttribute("wrap","off")}
if(ios){te.style.border="1px solid black"}
disableBrowserMagic(te)
return div}
function addEditorMethods(CodeMirror){var optionHandlers=CodeMirror.optionHandlers
var helpers=CodeMirror.helpers={}
CodeMirror.prototype={constructor:CodeMirror,focus:function(){window.focus();this.display.input.focus()},setOption:function(option,value){var options=this.options,old=options[option]
if(options[option]==value&&option!="mode"){return}
options[option]=value
if(optionHandlers.hasOwnProperty(option))
{operation(this,optionHandlers[option])(this,value,old)}
signal(this,"optionChange",this,option)},getOption:function(option){return this.options[option]},getDoc:function(){return this.doc},addKeyMap:function(map,bottom){this.state.keyMaps[bottom?"push":"unshift"](getKeyMap(map))},removeKeyMap:function(map){var maps=this.state.keyMaps
for(var i=0;i<maps.length;++i)
{if(maps[i]==map||maps[i].name==map){maps.splice(i,1)
return true}}},addOverlay:methodOp(function(spec,options){var mode=spec.token?spec:CodeMirror.getMode(this.options,spec)
if(mode.startState){throw new Error("Overlays may not be stateful.")}
insertSorted(this.state.overlays,{mode:mode,modeSpec:spec,opaque:options&&options.opaque,priority:(options&&options.priority)||0},function(overlay){return overlay.priority;})
this.state.modeGen++
regChange(this)}),removeOverlay:methodOp(function(spec){var this$1=this;var overlays=this.state.overlays
for(var i=0;i<overlays.length;++i){var cur=overlays[i].modeSpec
if(cur==spec||typeof spec=="string"&&cur.name==spec){overlays.splice(i,1)
this$1.state.modeGen++
regChange(this$1)
return}}}),indentLine:methodOp(function(n,dir,aggressive){if(typeof dir!="string"&&typeof dir!="number"){if(dir==null){dir=this.options.smartIndent?"smart":"prev"}
else{dir=dir?"add":"subtract"}}
if(isLine(this.doc,n)){indentLine(this,n,dir,aggressive)}}),indentSelection:methodOp(function(how){var this$1=this;var ranges=this.doc.sel.ranges,end=-1
for(var i=0;i<ranges.length;i++){var range=ranges[i]
if(!range.empty()){var from=range.from(),to=range.to()
var start=Math.max(end,from.line)
end=Math.min(this$1.lastLine(),to.line-(to.ch?0:1))+1
for(var j=start;j<end;++j)
{indentLine(this$1,j,how)}
var newRanges=this$1.doc.sel.ranges
if(from.ch==0&&ranges.length==newRanges.length&&newRanges[i].from().ch>0)
{replaceOneSelection(this$1.doc,i,new Range(from,newRanges[i].to()),sel_dontScroll)}}else if(range.head.line>end){indentLine(this$1,range.head.line,how,true)
end=range.head.line
if(i==this$1.doc.sel.primIndex){ensureCursorVisible(this$1)}}}}),getTokenAt:function(pos,precise){return takeToken(this,pos,precise)},getLineTokens:function(line,precise){return takeToken(this,Pos(line),precise,true)},getTokenTypeAt:function(pos){pos=clipPos(this.doc,pos)
var styles=getLineStyles(this,getLine(this.doc,pos.line))
var before=0,after=(styles.length-1)/2,ch=pos.ch
var type
if(ch==0){type=styles[2]}
else{for(;;){var mid=(before+after)>>1
if((mid?styles[mid*2-1]:0)>=ch){after=mid}
else if(styles[mid*2+1]<ch){before=mid+1}
else{type=styles[mid*2+2];break}}}
var cut=type?type.indexOf("overlay "):-1
return cut<0?type:cut==0?null:type.slice(0,cut-1)},getModeAt:function(pos){var mode=this.doc.mode
if(!mode.innerMode){return mode}
return CodeMirror.innerMode(mode,this.getTokenAt(pos).state).mode},getHelper:function(pos,type){return this.getHelpers(pos,type)[0]},getHelpers:function(pos,type){var this$1=this;var found=[]
if(!helpers.hasOwnProperty(type)){return found}
var help=helpers[type],mode=this.getModeAt(pos)
if(typeof mode[type]=="string"){if(help[mode[type]]){found.push(help[mode[type]])}}else if(mode[type]){for(var i=0;i<mode[type].length;i++){var val=help[mode[type][i]]
if(val){found.push(val)}}}else if(mode.helperType&&help[mode.helperType]){found.push(help[mode.helperType])}else if(help[mode.name]){found.push(help[mode.name])}
for(var i$1=0;i$1<help._global.length;i$1++){var cur=help._global[i$1]
if(cur.pred(mode,this$1)&&indexOf(found,cur.val)==-1)
{found.push(cur.val)}}
return found},getStateAfter:function(line,precise){var doc=this.doc
line=clipLine(doc,line==null?doc.first+doc.size-1:line)
return getContextBefore(this,line+1,precise).state},cursorCoords:function(start,mode){var pos,range=this.doc.sel.primary()
if(start==null){pos=range.head}
else if(typeof start=="object"){pos=clipPos(this.doc,start)}
else{pos=start?range.from():range.to()}
return cursorCoords(this,pos,mode||"page")},charCoords:function(pos,mode){return charCoords(this,clipPos(this.doc,pos),mode||"page")},coordsChar:function(coords,mode){coords=fromCoordSystem(this,coords,mode||"page")
return coordsChar(this,coords.left,coords.top)},lineAtHeight:function(height,mode){height=fromCoordSystem(this,{top:height,left:0},mode||"page").top
return lineAtHeight(this.doc,height+this.display.viewOffset)},heightAtLine:function(line,mode,includeWidgets){var end=false,lineObj
if(typeof line=="number"){var last=this.doc.first+this.doc.size-1
if(line<this.doc.first){line=this.doc.first}
else if(line>last){line=last;end=true}
lineObj=getLine(this.doc,line)}else{lineObj=line}
return intoCoordSystem(this,lineObj,{top:0,left:0},mode||"page",includeWidgets||end).top+
(end?this.doc.height-heightAtLine(lineObj):0)},defaultTextHeight:function(){return textHeight(this.display)},defaultCharWidth:function(){return charWidth(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(pos,node,scroll,vert,horiz){var display=this.display
pos=cursorCoords(this,clipPos(this.doc,pos))
var top=pos.bottom,left=pos.left
node.style.position="absolute"
node.setAttribute("cm-ignore-events","true")
this.display.input.setUneditable(node)
display.sizer.appendChild(node)
if(vert=="over"){top=pos.top}else if(vert=="above"||vert=="near"){var vspace=Math.max(display.wrapper.clientHeight,this.doc.height),hspace=Math.max(display.sizer.clientWidth,display.lineSpace.clientWidth)
if((vert=='above'||pos.bottom+node.offsetHeight>vspace)&&pos.top>node.offsetHeight)
{top=pos.top-node.offsetHeight}
else if(pos.bottom+node.offsetHeight<=vspace)
{top=pos.bottom}
if(left+node.offsetWidth>hspace)
{left=hspace-node.offsetWidth}}
node.style.top=top+"px"
node.style.left=node.style.right=""
if(horiz=="right"){left=display.sizer.clientWidth-node.offsetWidth
node.style.right="0px"}else{if(horiz=="left"){left=0}
else if(horiz=="middle"){left=(display.sizer.clientWidth-node.offsetWidth)/2}
node.style.left=left+"px"}
if(scroll)
{scrollIntoView(this,{left:left,top:top,right:left+node.offsetWidth,bottom:top+node.offsetHeight})}},triggerOnKeyDown:methodOp(onKeyDown),triggerOnKeyPress:methodOp(onKeyPress),triggerOnKeyUp:onKeyUp,triggerOnMouseDown:methodOp(onMouseDown),execCommand:function(cmd){if(commands.hasOwnProperty(cmd))
{return commands[cmd].call(null,this)}},triggerElectric:methodOp(function(text){triggerElectric(this,text)}),findPosH:function(from,amount,unit,visually){var this$1=this;var dir=1
if(amount<0){dir=-1;amount=-amount}
var cur=clipPos(this.doc,from)
for(var i=0;i<amount;++i){cur=findPosH(this$1.doc,cur,dir,unit,visually)
if(cur.hitSide){break}}
return cur},moveH:methodOp(function(dir,unit){var this$1=this;this.extendSelectionsBy(function(range){if(this$1.display.shift||this$1.doc.extend||range.empty())
{return findPosH(this$1.doc,range.head,dir,unit,this$1.options.rtlMoveVisually)}
else
{return dir<0?range.from():range.to()}},sel_move)}),deleteH:methodOp(function(dir,unit){var sel=this.doc.sel,doc=this.doc
if(sel.somethingSelected())
{doc.replaceSelection("",null,"+delete")}
else
{deleteNearSelection(this,function(range){var other=findPosH(doc,range.head,dir,unit,false)
return dir<0?{from:other,to:range.head}:{from:range.head,to:other}})}}),findPosV:function(from,amount,unit,goalColumn){var this$1=this;var dir=1,x=goalColumn
if(amount<0){dir=-1;amount=-amount}
var cur=clipPos(this.doc,from)
for(var i=0;i<amount;++i){var coords=cursorCoords(this$1,cur,"div")
if(x==null){x=coords.left}
else{coords.left=x}
cur=findPosV(this$1,coords,dir,unit)
if(cur.hitSide){break}}
return cur},moveV:methodOp(function(dir,unit){var this$1=this;var doc=this.doc,goals=[]
var collapse=!this.display.shift&&!doc.extend&&doc.sel.somethingSelected()
doc.extendSelectionsBy(function(range){if(collapse)
{return dir<0?range.from():range.to()}
var headPos=cursorCoords(this$1,range.head,"div")
if(range.goalColumn!=null){headPos.left=range.goalColumn}
goals.push(headPos.left)
var pos=findPosV(this$1,headPos,dir,unit)
if(unit=="page"&&range==doc.sel.primary())
{addToScrollTop(this$1,charCoords(this$1,pos,"div").top-headPos.top)}
return pos},sel_move)
if(goals.length){for(var i=0;i<doc.sel.ranges.length;i++)
{doc.sel.ranges[i].goalColumn=goals[i]}}}),findWordAt:function(pos){var doc=this.doc,line=getLine(doc,pos.line).text
var start=pos.ch,end=pos.ch
if(line){var helper=this.getHelper(pos,"wordChars")
if((pos.sticky=="before"||end==line.length)&&start){--start;}else{++end}
var startChar=line.charAt(start)
var check=isWordChar(startChar,helper)?function(ch){return isWordChar(ch,helper);}:/\s/.test(startChar)?function(ch){return /\s/.test(ch);}:function(ch){return(!/\s/.test(ch)&&!isWordChar(ch));}
while(start>0&&check(line.charAt(start-1))){--start}
while(end<line.length&&check(line.charAt(end))){++end}}
return new Range(Pos(pos.line,start),Pos(pos.line,end))},toggleOverwrite:function(value){if(value!=null&&value==this.state.overwrite){return}
if(this.state.overwrite=!this.state.overwrite)
{addClass(this.display.cursorDiv,"CodeMirror-overwrite")}
else
{rmClass(this.display.cursorDiv,"CodeMirror-overwrite")}
signal(this,"overwriteToggle",this,this.state.overwrite)},hasFocus:function(){return this.display.input.getField()==activeElt()},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:methodOp(function(x,y){scrollToCoords(this,x,y)}),getScrollInfo:function(){var scroller=this.display.scroller
return{left:scroller.scrollLeft,top:scroller.scrollTop,height:scroller.scrollHeight-scrollGap(this)-this.display.barHeight,width:scroller.scrollWidth-scrollGap(this)-this.display.barWidth,clientHeight:displayHeight(this),clientWidth:displayWidth(this)}},scrollIntoView:methodOp(function(range,margin){if(range==null){range={from:this.doc.sel.primary().head,to:null}
if(margin==null){margin=this.options.cursorScrollMargin}}else if(typeof range=="number"){range={from:Pos(range,0),to:null}}else if(range.from==null){range={from:range,to:null}}
if(!range.to){range.to=range.from}
range.margin=margin||0
if(range.from.line!=null){scrollToRange(this,range)}else{scrollToCoordsRange(this,range.from,range.to,range.margin)}}),setSize:methodOp(function(width,height){var this$1=this;var interpret=function(val){return typeof val=="number"||/^\d+$/.test(String(val))?val+"px":val;}
if(width!=null){this.display.wrapper.style.width=interpret(width)}
if(height!=null){this.display.wrapper.style.height=interpret(height)}
if(this.options.lineWrapping){clearLineMeasurementCache(this)}
var lineNo=this.display.viewFrom
this.doc.iter(lineNo,this.display.viewTo,function(line){if(line.widgets){for(var i=0;i<line.widgets.length;i++)
{if(line.widgets[i].noHScroll){regLineChange(this$1,lineNo,"widget");break}}}
++lineNo})
this.curOp.forceUpdate=true
signal(this,"refresh",this)}),operation:function(f){return runInOp(this,f)},startOperation:function(){return startOperation(this)},endOperation:function(){return endOperation(this)},refresh:methodOp(function(){var oldHeight=this.display.cachedTextHeight
regChange(this)
this.curOp.forceUpdate=true
clearCaches(this)
scrollToCoords(this,this.doc.scrollLeft,this.doc.scrollTop)
updateGutterSpace(this)
if(oldHeight==null||Math.abs(oldHeight-textHeight(this.display))>.5)
{estimateLineHeights(this)}
signal(this,"refresh",this)}),swapDoc:methodOp(function(doc){var old=this.doc
old.cm=null
attachDoc(this,doc)
clearCaches(this)
this.display.input.reset()
scrollToCoords(this,doc.scrollLeft,doc.scrollTop)
this.curOp.forceScroll=true
signalLater(this,"swapDoc",this,old)
return old}),phrase:function(phraseText){var phrases=this.options.phrases
return phrases&&Object.prototype.hasOwnProperty.call(phrases,phraseText)?phrases[phraseText]:phraseText},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}}
eventMixin(CodeMirror)
CodeMirror.registerHelper=function(type,name,value){if(!helpers.hasOwnProperty(type)){helpers[type]=CodeMirror[type]={_global:[]}}
helpers[type][name]=value}
CodeMirror.registerGlobalHelper=function(type,name,predicate,value){CodeMirror.registerHelper(type,name,value)
helpers[type]._global.push({pred:predicate,val:value})}}
function findPosH(doc,pos,dir,unit,visually){var oldPos=pos
var origDir=dir
var lineObj=getLine(doc,pos.line)
function findNextLine(){var l=pos.line+dir
if(l<doc.first||l>=doc.first+doc.size){return false}
pos=new Pos(l,pos.ch,pos.sticky)
return lineObj=getLine(doc,l)}
function moveOnce(boundToLine){var next
if(visually){next=moveVisually(doc.cm,lineObj,pos,dir)}else{next=moveLogically(lineObj,pos,dir)}
if(next==null){if(!boundToLine&&findNextLine())
{pos=endOfLine(visually,doc.cm,lineObj,pos.line,dir)}
else
{return false}}else{pos=next}
return true}
if(unit=="char"){moveOnce()}else if(unit=="column"){moveOnce(true)}else if(unit=="word"||unit=="group"){var sawType=null,group=unit=="group"
var helper=doc.cm&&doc.cm.getHelper(pos,"wordChars")
for(var first=true;;first=false){if(dir<0&&!moveOnce(!first)){break}
var cur=lineObj.text.charAt(pos.ch)||"\n"
var type=isWordChar(cur,helper)?"w":group&&cur=="\n"?"n":!group||/\s/.test(cur)?null:"p"
if(group&&!first&&!type){type="s"}
if(sawType&&sawType!=type){if(dir<0){dir=1;moveOnce();pos.sticky="after"}
break}
if(type){sawType=type}
if(dir>0&&!moveOnce(!first)){break}}}
var result=skipAtomic(doc,pos,oldPos,origDir,true)
if(equalCursorPos(oldPos,result)){result.hitSide=true}
return result}
function findPosV(cm,pos,dir,unit){var doc=cm.doc,x=pos.left,y
if(unit=="page"){var pageSize=Math.min(cm.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)
var moveAmount=Math.max(pageSize-.5*textHeight(cm.display),3)
y=(dir>0?pos.bottom:pos.top)+dir*moveAmount}else if(unit=="line"){y=dir>0?pos.bottom+3:pos.top-3}
var target
for(;;){target=coordsChar(cm,x,y)
if(!target.outside){break}
if(dir<0?y<=0:y>=doc.height){target.hitSide=true;break}
y+=dir*5}
return target}
var ContentEditableInput=function(cm){this.cm=cm
this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null
this.polling=new Delayed()
this.composing=null
this.gracePeriod=false
this.readDOMTimeout=null};ContentEditableInput.prototype.init=function(display){var this$1=this;var input=this,cm=input.cm
var div=input.div=display.lineDiv
disableBrowserMagic(div,cm.options.spellcheck)
on(div,"paste",function(e){if(signalDOMEvent(cm,e)||handlePaste(e,cm)){return}
if(ie_version<=11){setTimeout(operation(cm,function(){return this$1.updateFromDOM();}),20)}})
on(div,"compositionstart",function(e){this$1.composing={data:e.data,done:false}})
on(div,"compositionupdate",function(e){if(!this$1.composing){this$1.composing={data:e.data,done:false}}})
on(div,"compositionend",function(e){if(this$1.composing){if(e.data!=this$1.composing.data){this$1.readFromDOMSoon()}
this$1.composing.done=true}})
on(div,"touchstart",function(){return input.forceCompositionEnd();})
on(div,"input",function(){if(!this$1.composing){this$1.readFromDOMSoon()}})
function onCopyCut(e){if(signalDOMEvent(cm,e)){return}
if(cm.somethingSelected()){setLastCopied({lineWise:false,text:cm.getSelections()})
if(e.type=="cut"){cm.replaceSelection("",null,"cut")}}else if(!cm.options.lineWiseCopyCut){return}else{var ranges=copyableRanges(cm)
setLastCopied({lineWise:true,text:ranges.text})
if(e.type=="cut"){cm.operation(function(){cm.setSelections(ranges.ranges,0,sel_dontScroll)
cm.replaceSelection("",null,"cut")})}}
if(e.clipboardData){e.clipboardData.clearData()
var content=lastCopied.text.join("\n")
e.clipboardData.setData("Text",content)
if(e.clipboardData.getData("Text")==content){e.preventDefault()
return}}
var kludge=hiddenTextarea(),te=kludge.firstChild
cm.display.lineSpace.insertBefore(kludge,cm.display.lineSpace.firstChild)
te.value=lastCopied.text.join("\n")
var hadFocus=document.activeElement
selectInput(te)
setTimeout(function(){cm.display.lineSpace.removeChild(kludge)
hadFocus.focus()
if(hadFocus==div){input.showPrimarySelection()}},50)}
on(div,"copy",onCopyCut)
on(div,"cut",onCopyCut)};ContentEditableInput.prototype.prepareSelection=function(){var result=prepareSelection(this.cm,false)
result.focus=this.cm.state.focused
return result};ContentEditableInput.prototype.showSelection=function(info,takeFocus){if(!info||!this.cm.display.view.length){return}
if(info.focus||takeFocus){this.showPrimarySelection()}
this.showMultipleSelections(info)};ContentEditableInput.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()};ContentEditableInput.prototype.showPrimarySelection=function(){var sel=this.getSelection(),cm=this.cm,prim=cm.doc.sel.primary()
var from=prim.from(),to=prim.to()
if(cm.display.viewTo==cm.display.viewFrom||from.line>=cm.display.viewTo||to.line<cm.display.viewFrom){sel.removeAllRanges()
return}
var curAnchor=domToPos(cm,sel.anchorNode,sel.anchorOffset)
var curFocus=domToPos(cm,sel.focusNode,sel.focusOffset)
if(curAnchor&&!curAnchor.bad&&curFocus&&!curFocus.bad&&cmp(minPos(curAnchor,curFocus),from)==0&&cmp(maxPos(curAnchor,curFocus),to)==0)
{return}
var view=cm.display.view
var start=(from.line>=cm.display.viewFrom&&posToDOM(cm,from))||{node:view[0].measure.map[2],offset:0}
var end=to.line<cm.display.viewTo&&posToDOM(cm,to)
if(!end){var measure=view[view.length-1].measure
var map=measure.maps?measure.maps[measure.maps.length-1]:measure.map
end={node:map[map.length-1],offset:map[map.length-2]-map[map.length-3]}}
if(!start||!end){sel.removeAllRanges()
return}
var old=sel.rangeCount&&sel.getRangeAt(0),rng
try{rng=range(start.node,start.offset,end.offset,end.node)}
catch(e){}
if(rng){if(!gecko&&cm.state.focused){sel.collapse(start.node,start.offset)
if(!rng.collapsed){sel.removeAllRanges()
sel.addRange(rng)}}else{sel.removeAllRanges()
sel.addRange(rng)}
if(old&&sel.anchorNode==null){sel.addRange(old)}
else if(gecko){this.startGracePeriod()}}
this.rememberSelection()};ContentEditableInput.prototype.startGracePeriod=function(){var this$1=this;clearTimeout(this.gracePeriod)
this.gracePeriod=setTimeout(function(){this$1.gracePeriod=false
if(this$1.selectionChanged())
{this$1.cm.operation(function(){return this$1.cm.curOp.selectionChanged=true;})}},20)};ContentEditableInput.prototype.showMultipleSelections=function(info){removeChildrenAndAdd(this.cm.display.cursorDiv,info.cursors)
removeChildrenAndAdd(this.cm.display.selectionDiv,info.selection)};ContentEditableInput.prototype.rememberSelection=function(){var sel=this.getSelection()
this.lastAnchorNode=sel.anchorNode;this.lastAnchorOffset=sel.anchorOffset
this.lastFocusNode=sel.focusNode;this.lastFocusOffset=sel.focusOffset};ContentEditableInput.prototype.selectionInEditor=function(){var sel=this.getSelection()
if(!sel.rangeCount){return false}
var node=sel.getRangeAt(0).commonAncestorContainer
return contains(this.div,node)};ContentEditableInput.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"){if(!this.selectionInEditor())
{this.showSelection(this.prepareSelection(),true)}
this.div.focus()}};ContentEditableInput.prototype.blur=function(){this.div.blur()};ContentEditableInput.prototype.getField=function(){return this.div};ContentEditableInput.prototype.supportsTouch=function(){return true};ContentEditableInput.prototype.receivedFocus=function(){var input=this
if(this.selectionInEditor())
{this.pollSelection()}
else
{runInOp(this.cm,function(){return input.cm.curOp.selectionChanged=true;})}
function poll(){if(input.cm.state.focused){input.pollSelection()
input.polling.set(input.cm.options.pollInterval,poll)}}
this.polling.set(this.cm.options.pollInterval,poll)};ContentEditableInput.prototype.selectionChanged=function(){var sel=this.getSelection()
return sel.anchorNode!=this.lastAnchorNode||sel.anchorOffset!=this.lastAnchorOffset||sel.focusNode!=this.lastFocusNode||sel.focusOffset!=this.lastFocusOffset};ContentEditableInput.prototype.pollSelection=function(){if(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged()){return}
var sel=this.getSelection(),cm=this.cm
if(android&&chrome&&this.cm.options.gutters.length&&isInGutter(sel.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs})
this.blur()
this.focus()
return}
if(this.composing){return}
this.rememberSelection()
var anchor=domToPos(cm,sel.anchorNode,sel.anchorOffset)
var head=domToPos(cm,sel.focusNode,sel.focusOffset)
if(anchor&&head){runInOp(cm,function(){setSelection(cm.doc,simpleSelection(anchor,head),sel_dontScroll)
if(anchor.bad||head.bad){cm.curOp.selectionChanged=true}})}};ContentEditableInput.prototype.pollContent=function(){if(this.readDOMTimeout!=null){clearTimeout(this.readDOMTimeout)
this.readDOMTimeout=null}
var cm=this.cm,display=cm.display,sel=cm.doc.sel.primary()
var from=sel.from(),to=sel.to()
if(from.ch==0&&from.line>cm.firstLine())
{from=Pos(from.line-1,getLine(cm.doc,from.line-1).length)}
if(to.ch==getLine(cm.doc,to.line).text.length&&to.line<cm.lastLine())
{to=Pos(to.line+1,0)}
if(from.line<display.viewFrom||to.line>display.viewTo-1){return false}
var fromIndex,fromLine,fromNode
if(from.line==display.viewFrom||(fromIndex=findViewIndex(cm,from.line))==0){fromLine=lineNo(display.view[0].line)
fromNode=display.view[0].node}else{fromLine=lineNo(display.view[fromIndex].line)
fromNode=display.view[fromIndex-1].node.nextSibling}
var toIndex=findViewIndex(cm,to.line)
var toLine,toNode
if(toIndex==display.view.length-1){toLine=display.viewTo-1
toNode=display.lineDiv.lastChild}else{toLine=lineNo(display.view[toIndex+1].line)-1
toNode=display.view[toIndex+1].node.previousSibling}
if(!fromNode){return false}
var newText=cm.doc.splitLines(domTextBetween(cm,fromNode,toNode,fromLine,toLine))
var oldText=getBetween(cm.doc,Pos(fromLine,0),Pos(toLine,getLine(cm.doc,toLine).text.length))
while(newText.length>1&&oldText.length>1){if(lst(newText)==lst(oldText)){newText.pop();oldText.pop();toLine--}
else if(newText[0]==oldText[0]){newText.shift();oldText.shift();fromLine++}
else{break}}
var cutFront=0,cutEnd=0
var newTop=newText[0],oldTop=oldText[0],maxCutFront=Math.min(newTop.length,oldTop.length)
while(cutFront<maxCutFront&&newTop.charCodeAt(cutFront)==oldTop.charCodeAt(cutFront))
{++cutFront}
var newBot=lst(newText),oldBot=lst(oldText)
var maxCutEnd=Math.min(newBot.length-(newText.length==1?cutFront:0),oldBot.length-(oldText.length==1?cutFront:0))
while(cutEnd<maxCutEnd&&newBot.charCodeAt(newBot.length-cutEnd-1)==oldBot.charCodeAt(oldBot.length-cutEnd-1))
{++cutEnd}
if(newText.length==1&&oldText.length==1&&fromLine==from.line){while(cutFront&&cutFront>from.ch&&newBot.charCodeAt(newBot.length-cutEnd-1)==oldBot.charCodeAt(oldBot.length-cutEnd-1)){cutFront--
cutEnd++}}
newText[newText.length-1]=newBot.slice(0,newBot.length-cutEnd).replace(/^\u200b+/,"")
newText[0]=newText[0].slice(cutFront).replace(/\u200b+$/,"")
var chFrom=Pos(fromLine,cutFront)
var chTo=Pos(toLine,oldText.length?lst(oldText).length-cutEnd:0)
if(newText.length>1||newText[0]||cmp(chFrom,chTo)){replaceRange(cm.doc,newText,chFrom,chTo,"+input")
return true}};ContentEditableInput.prototype.ensurePolled=function(){this.forceCompositionEnd()};ContentEditableInput.prototype.reset=function(){this.forceCompositionEnd()};ContentEditableInput.prototype.forceCompositionEnd=function(){if(!this.composing){return}
clearTimeout(this.readDOMTimeout)
this.composing=null
this.updateFromDOM()
this.div.blur()
this.div.focus()};ContentEditableInput.prototype.readFromDOMSoon=function(){var this$1=this;if(this.readDOMTimeout!=null){return}
this.readDOMTimeout=setTimeout(function(){this$1.readDOMTimeout=null
if(this$1.composing){if(this$1.composing.done){this$1.composing=null}
else{return}}
this$1.updateFromDOM()},80)};ContentEditableInput.prototype.updateFromDOM=function(){var this$1=this;if(this.cm.isReadOnly()||!this.pollContent())
{runInOp(this.cm,function(){return regChange(this$1.cm);})}};ContentEditableInput.prototype.setUneditable=function(node){node.contentEditable="false"};ContentEditableInput.prototype.onKeyPress=function(e){if(e.charCode==0||this.composing){return}
e.preventDefault()
if(!this.cm.isReadOnly())
{operation(this.cm,applyTextInput)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0)}};ContentEditableInput.prototype.readOnlyChanged=function(val){this.div.contentEditable=String(val!="nocursor")};ContentEditableInput.prototype.onContextMenu=function(){};ContentEditableInput.prototype.resetPosition=function(){};ContentEditableInput.prototype.needsContentAttribute=true
function posToDOM(cm,pos){var view=findViewForLine(cm,pos.line)
if(!view||view.hidden){return null}
var line=getLine(cm.doc,pos.line)
var info=mapFromLineView(view,line,pos.line)
var order=getOrder(line,cm.doc.direction),side="left"
if(order){var partPos=getBidiPartAt(order,pos.ch)
side=partPos%2?"right":"left"}
var result=nodeAndOffsetInLineMap(info.map,pos.ch,side)
result.offset=result.collapse=="right"?result.end:result.start
return result}
function isInGutter(node){for(var scan=node;scan;scan=scan.parentNode)
{if(/CodeMirror-gutter-wrapper/.test(scan.className)){return true}}
return false}
function badPos(pos,bad){if(bad){pos.bad=true;}return pos}
function domTextBetween(cm,from,to,fromLine,toLine){var text="",closing=false,lineSep=cm.doc.lineSeparator(),extraLinebreak=false
function recognizeMarker(id){return function(marker){return marker.id==id;}}
function close(){if(closing){text+=lineSep
if(extraLinebreak){text+=lineSep}
closing=extraLinebreak=false}}
function addText(str){if(str){close()
text+=str}}
function walk(node){if(node.nodeType==1){var cmText=node.getAttribute("cm-text")
if(cmText){addText(cmText)
return}
var markerID=node.getAttribute("cm-marker"),range
if(markerID){var found=cm.findMarks(Pos(fromLine,0),Pos(toLine+1,0),recognizeMarker(+markerID))
if(found.length&&(range=found[0].find(0)))
{addText(getBetween(cm.doc,range.from,range.to).join(lineSep))}
return}
if(node.getAttribute("contenteditable")=="false"){return}
var isBlock=/^(pre|div|p|li|table|br)$/i.test(node.nodeName)
if(!/^br$/i.test(node.nodeName)&&node.textContent.length==0){return}
if(isBlock){close()}
for(var i=0;i<node.childNodes.length;i++)
{walk(node.childNodes[i])}
if(/^(pre|p)$/i.test(node.nodeName)){extraLinebreak=true}
if(isBlock){closing=true}}else if(node.nodeType==3){addText(node.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}}
for(;;){walk(from)
if(from==to){break}
from=from.nextSibling
extraLinebreak=false}
return text}
function domToPos(cm,node,offset){var lineNode
if(node==cm.display.lineDiv){lineNode=cm.display.lineDiv.childNodes[offset]
if(!lineNode){return badPos(cm.clipPos(Pos(cm.display.viewTo-1)),true)}
node=null;offset=0}else{for(lineNode=node;;lineNode=lineNode.parentNode){if(!lineNode||lineNode==cm.display.lineDiv){return null}
if(lineNode.parentNode&&lineNode.parentNode==cm.display.lineDiv){break}}}
for(var i=0;i<cm.display.view.length;i++){var lineView=cm.display.view[i]
if(lineView.node==lineNode)
{return locateNodeInLineView(lineView,node,offset)}}}
function locateNodeInLineView(lineView,node,offset){var wrapper=lineView.text.firstChild,bad=false
if(!node||!contains(wrapper,node)){return badPos(Pos(lineNo(lineView.line),0),true)}
if(node==wrapper){bad=true
node=wrapper.childNodes[offset]
offset=0
if(!node){var line=lineView.rest?lst(lineView.rest):lineView.line
return badPos(Pos(lineNo(line),line.text.length),bad)}}
var textNode=node.nodeType==3?node:null,topNode=node
if(!textNode&&node.childNodes.length==1&&node.firstChild.nodeType==3){textNode=node.firstChild
if(offset){offset=textNode.nodeValue.length}}
while(topNode.parentNode!=wrapper){topNode=topNode.parentNode}
var measure=lineView.measure,maps=measure.maps
function find(textNode,topNode,offset){for(var i=-1;i<(maps?maps.length:0);i++){var map=i<0?measure.map:maps[i]
for(var j=0;j<map.length;j+=3){var curNode=map[j+2]
if(curNode==textNode||curNode==topNode){var line=lineNo(i<0?lineView.line:lineView.rest[i])
var ch=map[j]+offset
if(offset<0||curNode!=textNode){ch=map[j+(offset?1:0)]}
return Pos(line,ch)}}}}
var found=find(textNode,topNode,offset)
if(found){return badPos(found,bad)}
for(var after=topNode.nextSibling,dist=textNode?textNode.nodeValue.length-offset:0;after;after=after.nextSibling){found=find(after,after.firstChild,0)
if(found)
{return badPos(Pos(found.line,found.ch-dist),bad)}
else
{dist+=after.textContent.length}}
for(var before=topNode.previousSibling,dist$1=offset;before;before=before.previousSibling){found=find(before,before.firstChild,-1)
if(found)
{return badPos(Pos(found.line,found.ch+dist$1),bad)}
else
{dist$1+=before.textContent.length}}}
var TextareaInput=function(cm){this.cm=cm
this.prevInput=""
this.pollingFast=false
this.polling=new Delayed()
this.hasSelection=false
this.composing=null};TextareaInput.prototype.init=function(display){var this$1=this;var input=this,cm=this.cm
this.createField(display)
var te=this.textarea
display.wrapper.insertBefore(this.wrapper,display.wrapper.firstChild)
if(ios){te.style.width="0px"}
on(te,"input",function(){if(ie&&ie_version>=9&&this$1.hasSelection){this$1.hasSelection=null}
input.poll()})
on(te,"paste",function(e){if(signalDOMEvent(cm,e)||handlePaste(e,cm)){return}
cm.state.pasteIncoming=true
input.fastPoll()})
function prepareCopyCut(e){if(signalDOMEvent(cm,e)){return}
if(cm.somethingSelected()){setLastCopied({lineWise:false,text:cm.getSelections()})}else if(!cm.options.lineWiseCopyCut){return}else{var ranges=copyableRanges(cm)
setLastCopied({lineWise:true,text:ranges.text})
if(e.type=="cut"){cm.setSelections(ranges.ranges,null,sel_dontScroll)}else{input.prevInput=""
te.value=ranges.text.join("\n")
selectInput(te)}}
if(e.type=="cut"){cm.state.cutIncoming=true}}
on(te,"cut",prepareCopyCut)
on(te,"copy",prepareCopyCut)
on(display.scroller,"paste",function(e){if(eventInWidget(display,e)||signalDOMEvent(cm,e)){return}
cm.state.pasteIncoming=true
input.focus()})
on(display.lineSpace,"selectstart",function(e){if(!eventInWidget(display,e)){e_preventDefault(e)}})
on(te,"compositionstart",function(){var start=cm.getCursor("from")
if(input.composing){input.composing.range.clear()}
input.composing={start:start,range:cm.markText(start,cm.getCursor("to"),{className:"CodeMirror-composing"})}})
on(te,"compositionend",function(){if(input.composing){input.poll()
input.composing.range.clear()
input.composing=null}})};TextareaInput.prototype.createField=function(_display){this.wrapper=hiddenTextarea()
this.textarea=this.wrapper.firstChild};TextareaInput.prototype.prepareSelection=function(){var cm=this.cm,display=cm.display,doc=cm.doc
var result=prepareSelection(cm)
if(cm.options.moveInputWithCursor){var headPos=cursorCoords(cm,doc.sel.primary().head,"div")
var wrapOff=display.wrapper.getBoundingClientRect(),lineOff=display.lineDiv.getBoundingClientRect()
result.teTop=Math.max(0,Math.min(display.wrapper.clientHeight-10,headPos.top+lineOff.top-wrapOff.top))
result.teLeft=Math.max(0,Math.min(display.wrapper.clientWidth-10,headPos.left+lineOff.left-wrapOff.left))}
return result};TextareaInput.prototype.showSelection=function(drawn){var cm=this.cm,display=cm.display
removeChildrenAndAdd(display.cursorDiv,drawn.cursors)
removeChildrenAndAdd(display.selectionDiv,drawn.selection)
if(drawn.teTop!=null){this.wrapper.style.top=drawn.teTop+"px"
this.wrapper.style.left=drawn.teLeft+"px"}};TextareaInput.prototype.reset=function(typing){if(this.contextMenuPending||this.composing){return}
var cm=this.cm
if(cm.somethingSelected()){this.prevInput=""
var content=cm.getSelection()
this.textarea.value=content
if(cm.state.focused){selectInput(this.textarea)}
if(ie&&ie_version>=9){this.hasSelection=content}}else if(!typing){this.prevInput=this.textarea.value=""
if(ie&&ie_version>=9){this.hasSelection=null}}};TextareaInput.prototype.getField=function(){return this.textarea};TextareaInput.prototype.supportsTouch=function(){return false};TextareaInput.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!mobile||activeElt()!=this.textarea)){try{this.textarea.focus()}
catch(e){}}};TextareaInput.prototype.blur=function(){this.textarea.blur()};TextareaInput.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0};TextareaInput.prototype.receivedFocus=function(){this.slowPoll()};TextareaInput.prototype.slowPoll=function(){var this$1=this;if(this.pollingFast){return}
this.polling.set(this.cm.options.pollInterval,function(){this$1.poll()
if(this$1.cm.state.focused){this$1.slowPoll()}})};TextareaInput.prototype.fastPoll=function(){var missed=false,input=this
input.pollingFast=true
function p(){var changed=input.poll()
if(!changed&&!missed){missed=true;input.polling.set(60,p)}
else{input.pollingFast=false;input.slowPoll()}}
input.polling.set(20,p)};TextareaInput.prototype.poll=function(){var this$1=this;var cm=this.cm,input=this.textarea,prevInput=this.prevInput
if(this.contextMenuPending||!cm.state.focused||(hasSelection(input)&&!prevInput&&!this.composing)||cm.isReadOnly()||cm.options.disableInput||cm.state.keySeq)
{return false}
var text=input.value
if(text==prevInput&&!cm.somethingSelected()){return false}
if(ie&&ie_version>=9&&this.hasSelection===text||mac&&/[\uf700-\uf7ff]/.test(text)){cm.display.input.reset()
return false}
if(cm.doc.sel==cm.display.selForContextMenu){var first=text.charCodeAt(0)
if(first==0x200b&&!prevInput){prevInput="\u200b"}
if(first==0x21da){this.reset();return this.cm.execCommand("undo")}}
var same=0,l=Math.min(prevInput.length,text.length)
while(same<l&&prevInput.charCodeAt(same)==text.charCodeAt(same)){++same}
runInOp(cm,function(){applyTextInput(cm,text.slice(same),prevInput.length-same,null,this$1.composing?"*compose":null)
if(text.length>1000||text.indexOf("\n")>-1){input.value=this$1.prevInput=""}
else{this$1.prevInput=text}
if(this$1.composing){this$1.composing.range.clear()
this$1.composing.range=cm.markText(this$1.composing.start,cm.getCursor("to"),{className:"CodeMirror-composing"})}})
return true};TextareaInput.prototype.ensurePolled=function(){if(this.pollingFast&&this.poll()){this.pollingFast=false}};TextareaInput.prototype.onKeyPress=function(){if(ie&&ie_version>=9){this.hasSelection=null}
this.fastPoll()};TextareaInput.prototype.onContextMenu=function(e){var input=this,cm=input.cm,display=cm.display,te=input.textarea
var pos=posFromMouse(cm,e),scrollPos=display.scroller.scrollTop
if(!pos||presto){return}
var reset=cm.options.resetSelectionOnContextMenu
if(reset&&cm.doc.sel.contains(pos)==-1)
{operation(cm,setSelection)(cm.doc,simpleSelection(pos),sel_dontScroll)}
var oldCSS=te.style.cssText,oldWrapperCSS=input.wrapper.style.cssText
input.wrapper.style.cssText="position: absolute"
var wrapperBox=input.wrapper.getBoundingClientRect()
te.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-wrapperBox.top-5)+"px; left: "+(e.clientX-wrapperBox.left-5)+"px;\n      z-index: 1000; background: "+(ie?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
var oldScrollY
if(webkit){oldScrollY=window.scrollY}
display.input.focus()
if(webkit){window.scrollTo(null,oldScrollY)}
display.input.reset()
if(!cm.somethingSelected()){te.value=input.prevInput=" "}
input.contextMenuPending=true
display.selForContextMenu=cm.doc.sel
clearTimeout(display.detectingSelectAll)
function prepareSelectAllHack(){if(te.selectionStart!=null){var selected=cm.somethingSelected()
var extval="\u200b"+(selected?te.value:"")
te.value="\u21da"
te.value=extval
input.prevInput=selected?"":"\u200b"
te.selectionStart=1;te.selectionEnd=extval.length
display.selForContextMenu=cm.doc.sel}}
function rehide(){input.contextMenuPending=false
input.wrapper.style.cssText=oldWrapperCSS
te.style.cssText=oldCSS
if(ie&&ie_version<9){display.scrollbars.setScrollTop(display.scroller.scrollTop=scrollPos)}
if(te.selectionStart!=null){if(!ie||(ie&&ie_version<9)){prepareSelectAllHack()}
var i=0,poll=function(){if(display.selForContextMenu==cm.doc.sel&&te.selectionStart==0&&te.selectionEnd>0&&input.prevInput=="\u200b"){operation(cm,selectAll)(cm)}else if(i++<10){display.detectingSelectAll=setTimeout(poll,500)}else{display.selForContextMenu=null
display.input.reset()}}
display.detectingSelectAll=setTimeout(poll,200)}}
if(ie&&ie_version>=9){prepareSelectAllHack()}
if(captureRightClick){e_stop(e)
var mouseup=function(){off(window,"mouseup",mouseup)
setTimeout(rehide,20)}
on(window,"mouseup",mouseup)}else{setTimeout(rehide,50)}};TextareaInput.prototype.readOnlyChanged=function(val){if(!val){this.reset()}
this.textarea.disabled=val=="nocursor"};TextareaInput.prototype.setUneditable=function(){};TextareaInput.prototype.needsContentAttribute=false
function fromTextArea(textarea,options){options=options?copyObj(options):{}
options.value=textarea.value
if(!options.tabindex&&textarea.tabIndex)
{options.tabindex=textarea.tabIndex}
if(!options.placeholder&&textarea.placeholder)
{options.placeholder=textarea.placeholder}
if(options.autofocus==null){var hasFocus=activeElt()
options.autofocus=hasFocus==textarea||textarea.getAttribute("autofocus")!=null&&hasFocus==document.body}
function save(){textarea.value=cm.getValue()}
var realSubmit
if(textarea.form){on(textarea.form,"submit",save)
if(!options.leaveSubmitMethodAlone){var form=textarea.form
realSubmit=form.submit
try{var wrappedSubmit=form.submit=function(){save()
form.submit=realSubmit
form.submit()
form.submit=wrappedSubmit}}catch(e){}}}
options.finishInit=function(cm){cm.save=save
cm.getTextArea=function(){return textarea;}
cm.toTextArea=function(){cm.toTextArea=isNaN
save()
textarea.parentNode.removeChild(cm.getWrapperElement())
textarea.style.display=""
if(textarea.form){off(textarea.form,"submit",save)
if(typeof textarea.form.submit=="function")
{textarea.form.submit=realSubmit}}}}
textarea.style.display="none"
var cm=CodeMirror(function(node){return textarea.parentNode.insertBefore(node,textarea.nextSibling);},options)
return cm}
function addLegacyProps(CodeMirror){CodeMirror.off=off
CodeMirror.on=on
CodeMirror.wheelEventPixels=wheelEventPixels
CodeMirror.Doc=Doc
CodeMirror.splitLines=splitLinesAuto
CodeMirror.countColumn=countColumn
CodeMirror.findColumn=findColumn
CodeMirror.isWordChar=isWordCharBasic
CodeMirror.Pass=Pass
CodeMirror.signal=signal
CodeMirror.Line=Line
CodeMirror.changeEnd=changeEnd
CodeMirror.scrollbarModel=scrollbarModel
CodeMirror.Pos=Pos
CodeMirror.cmpPos=cmp
CodeMirror.modes=modes
CodeMirror.mimeModes=mimeModes
CodeMirror.resolveMode=resolveMode
CodeMirror.getMode=getMode
CodeMirror.modeExtensions=modeExtensions
CodeMirror.extendMode=extendMode
CodeMirror.copyState=copyState
CodeMirror.startState=startState
CodeMirror.innerMode=innerMode
CodeMirror.commands=commands
CodeMirror.keyMap=keyMap
CodeMirror.keyName=keyName
CodeMirror.isModifierKey=isModifierKey
CodeMirror.lookupKey=lookupKey
CodeMirror.normalizeKeyMap=normalizeKeyMap
CodeMirror.StringStream=StringStream
CodeMirror.SharedTextMarker=SharedTextMarker
CodeMirror.TextMarker=TextMarker
CodeMirror.LineWidget=LineWidget
CodeMirror.e_preventDefault=e_preventDefault
CodeMirror.e_stopPropagation=e_stopPropagation
CodeMirror.e_stop=e_stop
CodeMirror.addClass=addClass
CodeMirror.contains=contains
CodeMirror.rmClass=rmClass
CodeMirror.keyNames=keyNames}
defineOptions(CodeMirror)
addEditorMethods(CodeMirror)
var dontDelegate="iter insert remove copy getEditor constructor".split(" ")
for(var prop in Doc.prototype){if(Doc.prototype.hasOwnProperty(prop)&&indexOf(dontDelegate,prop)<0)
{CodeMirror.prototype[prop]=(function(method){return function(){return method.apply(this.doc,arguments)}})(Doc.prototype[prop])}}
eventMixin(Doc)
CodeMirror.inputStyles={"textarea":TextareaInput,"contenteditable":ContentEditableInput}
CodeMirror.defineMode=function(name ){if(!CodeMirror.defaults.mode&&name!="null"){CodeMirror.defaults.mode=name}
defineMode.apply(this,arguments)}
CodeMirror.defineMIME=defineMIME
CodeMirror.defineMode("null",function(){return({token:function(stream){return stream.skipToEnd();}});})
CodeMirror.defineMIME("text/plain","null")
CodeMirror.defineExtension=function(name,func){CodeMirror.prototype[name]=func}
CodeMirror.defineDocExtension=function(name,func){Doc.prototype[name]=func}
CodeMirror.fromTextArea=fromTextArea
addLegacyProps(CodeMirror)
CodeMirror.version="5.40.2"
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";function Context(indented,column,type,info,align,prev){this.indented=indented;this.column=column;this.type=type;this.info=info;this.align=align;this.prev=prev;}
function pushContext(state,col,type,info){var indent=state.indented;if(state.context&&state.context.type=="statement"&&type!="statement")
indent=state.context.indented;return state.context=new Context(indent,col,type,info,null,state.context);}
function popContext(state){var t=state.context.type;if(t==")"||t=="]"||t=="}")
state.indented=state.context.indented;return state.context=state.context.prev;}
function typeBefore(stream,state,pos){if(state.prevToken=="variable"||state.prevToken=="type")return true;if(/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(stream.string.slice(0,pos)))return true;if(state.typeAtEndOfLine&&stream.column()==stream.indentation())return true;}
function isTopScope(context){for(;;){if(!context||context.type=="top")return true;if(context.type=="}"&&context.prev.info!="namespace")return false;context=context.prev;}}
CodeMirror.defineMode("clike",function(config,parserConfig){var indentUnit=config.indentUnit,statementIndentUnit=parserConfig.statementIndentUnit||indentUnit,dontAlignCalls=parserConfig.dontAlignCalls,keywords=parserConfig.keywords||{},types=parserConfig.types||{},builtin=parserConfig.builtin||{},blockKeywords=parserConfig.blockKeywords||{},defKeywords=parserConfig.defKeywords||{},atoms=parserConfig.atoms||{},hooks=parserConfig.hooks||{},multiLineStrings=parserConfig.multiLineStrings,indentStatements=parserConfig.indentStatements!==false,indentSwitch=parserConfig.indentSwitch!==false,namespaceSeparator=parserConfig.namespaceSeparator,isPunctuationChar=parserConfig.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,numberStart=parserConfig.numberStart||/[\d\.]/,number=parserConfig.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,isOperatorChar=parserConfig.isOperatorChar||/[+\-*&%=<>!?|\/]/,isIdentifierChar=parserConfig.isIdentifierChar||/[\w\$_\xa1-\uffff]/;var curPunc,isDefKeyword;function tokenBase(stream,state){var ch=stream.next();if(hooks[ch]){var result=hooks[ch](stream,state);if(result!==false)return result;}
if(ch=='"'||ch=="'"){state.tokenize=tokenString(ch);return state.tokenize(stream,state);}
if(isPunctuationChar.test(ch)){curPunc=ch;return null;}
if(numberStart.test(ch)){stream.backUp(1)
if(stream.match(number))return"number"
stream.next()}
if(ch=="/"){if(stream.eat("*")){state.tokenize=tokenComment;return tokenComment(stream,state);}
if(stream.eat("/")){stream.skipToEnd();return"comment";}}
if(isOperatorChar.test(ch)){while(!stream.match(/^\/[\/*]/,false)&&stream.eat(isOperatorChar)){}
return"operator";}
stream.eatWhile(isIdentifierChar);if(namespaceSeparator)while(stream.match(namespaceSeparator))
stream.eatWhile(isIdentifierChar);var cur=stream.current();if(contains(keywords,cur)){if(contains(blockKeywords,cur))curPunc="newstatement";if(contains(defKeywords,cur))isDefKeyword=true;return"keyword";}
if(contains(types,cur))return"type";if(contains(builtin,cur)){if(contains(blockKeywords,cur))curPunc="newstatement";return"builtin";}
if(contains(atoms,cur))return"atom";return"variable";}
function tokenString(quote){return function(stream,state){var escaped=false,next,end=false;while((next=stream.next())!=null){if(next==quote&&!escaped){end=true;break;}
escaped=!escaped&&next=="\\";}
if(end||!(escaped||multiLineStrings))
state.tokenize=null;return"string";};}
function tokenComment(stream,state){var maybeEnd=false,ch;while(ch=stream.next()){if(ch=="/"&&maybeEnd){state.tokenize=null;break;}
maybeEnd=(ch=="*");}
return"comment";}
function maybeEOL(stream,state){if(parserConfig.typeFirstDefinitions&&stream.eol()&&isTopScope(state.context))
state.typeAtEndOfLine=typeBefore(stream,state,stream.pos)}
return{startState:function(basecolumn){return{tokenize:null,context:new Context((basecolumn||0)-indentUnit,0,"top",null,false),indented:0,startOfLine:true,prevToken:null};},token:function(stream,state){var ctx=state.context;if(stream.sol()){if(ctx.align==null)ctx.align=false;state.indented=stream.indentation();state.startOfLine=true;}
if(stream.eatSpace()){maybeEOL(stream,state);return null;}
curPunc=isDefKeyword=null;var style=(state.tokenize||tokenBase)(stream,state);if(style=="comment"||style=="meta")return style;if(ctx.align==null)ctx.align=true;if(curPunc==";"||curPunc==":"||(curPunc==","&&stream.match(/^\s*(?:\/\/.*)?$/,false)))
while(state.context.type=="statement")popContext(state);else if(curPunc=="{")pushContext(state,stream.column(),"}");else if(curPunc=="[")pushContext(state,stream.column(),"]");else if(curPunc=="(")pushContext(state,stream.column(),")");else if(curPunc=="}"){while(ctx.type=="statement")ctx=popContext(state);if(ctx.type=="}")ctx=popContext(state);while(ctx.type=="statement")ctx=popContext(state);}
else if(curPunc==ctx.type)popContext(state);else if(indentStatements&&(((ctx.type=="}"||ctx.type=="top")&&curPunc!=";")||(ctx.type=="statement"&&curPunc=="newstatement"))){pushContext(state,stream.column(),"statement",stream.current());}
if(style=="variable"&&((state.prevToken=="def"||(parserConfig.typeFirstDefinitions&&typeBefore(stream,state,stream.start)&&isTopScope(state.context)&&stream.match(/^\s*\(/,false)))))
style="def";if(hooks.token){var result=hooks.token(stream,state,style);if(result!==undefined)style=result;}
if(style=="def"&&parserConfig.styleDefs===false)style="variable";state.startOfLine=false;state.prevToken=isDefKeyword?"def":style||curPunc;maybeEOL(stream,state);return style;},indent:function(state,textAfter){if(state.tokenize!=tokenBase&&state.tokenize!=null||state.typeAtEndOfLine)return CodeMirror.Pass;var ctx=state.context,firstChar=textAfter&&textAfter.charAt(0);var closing=firstChar==ctx.type;if(ctx.type=="statement"&&firstChar=="}")ctx=ctx.prev;if(parserConfig.dontIndentStatements)
while(ctx.type=="statement"&&parserConfig.dontIndentStatements.test(ctx.info))
ctx=ctx.prev
if(hooks.indent){var hook=hooks.indent(state,ctx,textAfter,indentUnit);if(typeof hook=="number")return hook}
var switchBlock=ctx.prev&&ctx.prev.info=="switch";if(parserConfig.allmanIndentation&&/[{(]/.test(firstChar)){while(ctx.type!="top"&&ctx.type!="}")ctx=ctx.prev
return ctx.indented}
if(ctx.type=="statement")
return ctx.indented+(firstChar=="{"?0:statementIndentUnit);if(ctx.align&&(!dontAlignCalls||ctx.type!=")"))
return ctx.column+(closing?0:1);if(ctx.type==")"&&!closing)
return ctx.indented+statementIndentUnit;return ctx.indented+(closing?0:indentUnit)+
(!closing&&switchBlock&&!/^(?:case|default)\b/.test(textAfter)?indentUnit:0);},electricInput:indentSwitch?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"};});function words(str){var obj={},words=str.split(" ");for(var i=0;i<words.length;++i)obj[words[i]]=true;return obj;}
function contains(words,word){if(typeof words==="function"){return words(word);}else{return words.propertyIsEnumerable(word);}}
var cKeywords="auto if break case register continue return default do sizeof "+
"static else struct switch extern typedef union for goto while enum const volatile";var cTypes="int long char short double float unsigned signed void size_t ptrdiff_t";function cppHook(stream,state){if(!state.startOfLine)return false
for(var ch,next=null;ch=stream.peek();){if(ch=="\\"&&stream.match(/^.$/)){next=cppHook
break}else if(ch=="/"&&stream.match(/^\/[\/\*]/,false)){break}
stream.next()}
state.tokenize=next
return"meta"}
function pointerHook(_stream,state){if(state.prevToken=="type")return"type";return false;}
function cpp14Literal(stream){stream.eatWhile(/[\w\.']/);return"number";}
function cpp11StringHook(stream,state){stream.backUp(1);if(stream.match(/(R|u8R|uR|UR|LR)/)){var match=stream.match(/"([^\s\\()]{0,16})\(/);if(!match){return false;}
state.cpp11RawStringDelim=match[1];state.tokenize=tokenRawString;return tokenRawString(stream,state);}
if(stream.match(/(u8|u|U|L)/)){if(stream.match(/["']/,false)){return"string";}
return false;}
stream.next();return false;}
function cppLooksLikeConstructor(word){var lastTwo=/(\w+)::~?(\w+)$/.exec(word);return lastTwo&&lastTwo[1]==lastTwo[2];}
function tokenAtString(stream,state){var next;while((next=stream.next())!=null){if(next=='"'&&!stream.eat('"')){state.tokenize=null;break;}}
return"string";}
function tokenRawString(stream,state){var delim=state.cpp11RawStringDelim.replace(/[^\w\s]/g,'\\$&');var match=stream.match(new RegExp(".*?\\)"+delim+'"'));if(match)
state.tokenize=null;else
stream.skipToEnd();return"string";}
function def(mimes,mode){if(typeof mimes=="string")mimes=[mimes];var words=[];function add(obj){if(obj)for(var prop in obj)if(obj.hasOwnProperty(prop))
words.push(prop);}
add(mode.keywords);add(mode.types);add(mode.builtin);add(mode.atoms);if(words.length){mode.helperType=mimes[0];CodeMirror.registerHelper("hintWords",mimes[0],words);}
for(var i=0;i<mimes.length;++i)
CodeMirror.defineMIME(mimes[i],mode);}
def(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:words(cKeywords),types:words(cTypes+" bool _Complex _Bool float_t double_t intptr_t intmax_t "+
"int8_t int16_t int32_t int64_t uintptr_t uintmax_t uint8_t uint16_t "+
"uint32_t uint64_t"),blockKeywords:words("case do else for if switch while struct"),defKeywords:words("struct"),typeFirstDefinitions:true,atoms:words("NULL true false"),hooks:{"#":cppHook,"*":pointerHook},modeProps:{fold:["brace","include"]}});def(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:words(cKeywords+" asm dynamic_cast namespace reinterpret_cast try explicit new "+
"static_cast typeid catch operator template typename class friend private "+
"this using const_cast inline public throw virtual delete mutable protected "+
"alignas alignof constexpr decltype nullptr noexcept thread_local final "+
"static_assert override"),types:words(cTypes+" bool wchar_t"),blockKeywords:words("catch class do else finally for if struct switch try while"),defKeywords:words("class namespace struct enum union"),typeFirstDefinitions:true,atoms:words("true false NULL"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,hooks:{"#":cppHook,"*":pointerHook,"u":cpp11StringHook,"U":cpp11StringHook,"L":cpp11StringHook,"R":cpp11StringHook,"0":cpp14Literal,"1":cpp14Literal,"2":cpp14Literal,"3":cpp14Literal,"4":cpp14Literal,"5":cpp14Literal,"6":cpp14Literal,"7":cpp14Literal,"8":cpp14Literal,"9":cpp14Literal,token:function(stream,state,style){if(style=="variable"&&stream.peek()=="("&&(state.prevToken==";"||state.prevToken==null||state.prevToken=="}")&&cppLooksLikeConstructor(stream.current()))
return"def";}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}});def("text/x-java",{name:"clike",keywords:words("abstract assert break case catch class const continue default "+
"do else enum extends final finally float for goto if implements import "+
"instanceof interface native new package private protected public "+
"return static strictfp super switch synchronized this throw throws transient "+
"try volatile while @interface"),types:words("byte short int long float double boolean char void Boolean Byte Character Double Float "+
"Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:words("catch class do else finally for if switch try while"),defKeywords:words("class interface enum @interface"),typeFirstDefinitions:true,atoms:words("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(stream){if(stream.match('interface',false))return false;stream.eatWhile(/[\w\$_]/);return"meta";}},modeProps:{fold:["brace","import"]}});def("text/x-csharp",{name:"clike",keywords:words("abstract as async await base break case catch checked class const continue"+
" default delegate do else enum event explicit extern finally fixed for"+
" foreach goto if implicit in interface internal is lock namespace new"+
" operator out override params private protected public readonly ref return sealed"+
" sizeof stackalloc static struct switch this throw try typeof unchecked"+
" unsafe using virtual void volatile while add alias ascending descending dynamic from get"+
" global group into join let orderby partial remove select set value var yield"),types:words("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func"+
" Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32"+
" UInt64 bool byte char decimal double short int long object"+
" sbyte float string ushort uint ulong"),blockKeywords:words("catch class do else finally for foreach if struct switch try while"),defKeywords:words("class interface namespace struct var"),typeFirstDefinitions:true,atoms:words("true false null"),hooks:{"@":function(stream,state){if(stream.eat('"')){state.tokenize=tokenAtString;return tokenAtString(stream,state);}
stream.eatWhile(/[\w\$_]/);return"meta";}}});function tokenTripleString(stream,state){var escaped=false;while(!stream.eol()){if(!escaped&&stream.match('"""')){state.tokenize=null;break;}
escaped=stream.next()=="\\"&&!escaped;}
return"string";}
function tokenNestedComment(depth){return function(stream,state){var ch
while(ch=stream.next()){if(ch=="*"&&stream.eat("/")){if(depth==1){state.tokenize=null
break}else{state.tokenize=tokenNestedComment(depth-1)
return state.tokenize(stream,state)}}else if(ch=="/"&&stream.eat("*")){state.tokenize=tokenNestedComment(depth+1)
return state.tokenize(stream,state)}}
return"comment"}}
def("text/x-scala",{name:"clike",keywords:words("abstract case catch class def do else extends final finally for forSome if "+
"implicit import lazy match new null object override package private protected return "+
"sealed super this throw trait try type val var while with yield _ "+
"assert assume require print println printf readLine readBoolean readByte readShort "+
"readChar readInt readLong readFloat readDouble"),types:words("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either "+
"Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable "+
"Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering "+
"Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder "+
"StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector "+
"Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable "+
"Compiler Double Exception Float Integer Long Math Number Object Package Pair Process "+
"Runtime Runnable SecurityManager Short StackTraceElement StrictMath String "+
"StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:true,blockKeywords:words("catch class enum do else finally for forSome if match switch try while"),defKeywords:words("class enum def object package trait type val var"),atoms:words("true false null"),indentStatements:false,indentSwitch:false,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(stream){stream.eatWhile(/[\w\$_]/);return"meta";},'"':function(stream,state){if(!stream.match('""'))return false;state.tokenize=tokenTripleString;return state.tokenize(stream,state);},"'":function(stream){stream.eatWhile(/[\w\$_\xa1-\uffff]/);return"atom";},"=":function(stream,state){var cx=state.context
if(cx.type=="}"&&cx.align&&stream.eat(">")){state.context=new Context(cx.indented,cx.column,cx.type,cx.info,null,cx.prev)
return"operator"}else{return false}},"/":function(stream,state){if(!stream.eat("*"))return false
state.tokenize=tokenNestedComment(1)
return state.tokenize(stream,state)}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function tokenKotlinString(tripleString){return function(stream,state){var escaped=false,next,end=false;while(!stream.eol()){if(!tripleString&&!escaped&&stream.match('"')){end=true;break;}
if(tripleString&&stream.match('"""')){end=true;break;}
next=stream.next();if(!escaped&&next=="$"&&stream.match('{'))
stream.skipTo("}");escaped=!escaped&&next=="\\"&&!tripleString;}
if(end||!tripleString)
state.tokenize=null;return"string";}}
def("text/x-kotlin",{name:"clike",keywords:words("package as typealias class interface this super val operator "+
"var fun for is in This throw return annotation "+
"break continue object if else while do try when !in !is as? "+
"file import where by get set abstract enum open inner override private public internal "+
"protected catch finally out final vararg reified dynamic companion constructor init "+
"sealed field property receiver param sparam lateinit data inline noinline tailrec "+
"external annotation crossinline const operator infix suspend actual expect setparam"),types:words("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable "+
"Compiler Double Exception Float Integer Long Math Number Object Package Pair Process "+
"Runtime Runnable SecurityManager Short StackTraceElement StrictMath String "+
"StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray "+
"ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy "+
"LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),intendSwitch:false,indentStatements:false,multiLineStrings:true,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,blockKeywords:words("catch class do else finally for if where try while enum"),defKeywords:words("class val var object interface fun"),atoms:words("true false null this"),hooks:{"@":function(stream){stream.eatWhile(/[\w\$_]/);return"meta";},'"':function(stream,state){state.tokenize=tokenKotlinString(stream.match('""'));return state.tokenize(stream,state);},indent:function(state,ctx,textAfter,indentUnit){var firstChar=textAfter&&textAfter.charAt(0);if((state.prevToken=="}"||state.prevToken==")")&&textAfter=="")
return state.indented;if(state.prevToken=="operator"&&textAfter!="}"||state.prevToken=="variable"&&firstChar=="."||(state.prevToken=="}"||state.prevToken==")")&&firstChar==".")
return indentUnit*2+ctx.indented;if(ctx.align&&ctx.type=="}")
return ctx.indented+(state.context.type==(textAfter||"").charAt(0)?0:indentUnit);}},modeProps:{closeBrackets:{triples:'"'}}});def(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:words("sampler1D sampler2D sampler3D samplerCube "+
"sampler1DShadow sampler2DShadow "+
"const attribute uniform varying "+
"break continue discard return "+
"for while do if else struct "+
"in out inout"),types:words("float int bool void "+
"vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 "+
"mat2 mat3 mat4"),blockKeywords:words("for while do if else struct"),builtin:words("radians degrees sin cos tan asin acos atan "+
"pow exp log exp2 sqrt inversesqrt "+
"abs sign floor ceil fract mod min max clamp mix step smoothstep "+
"length distance dot cross normalize ftransform faceforward "+
"reflect refract matrixCompMult "+
"lessThan lessThanEqual greaterThan greaterThanEqual "+
"equal notEqual any all not "+
"texture1D texture1DProj texture1DLod texture1DProjLod "+
"texture2D texture2DProj texture2DLod texture2DProjLod "+
"texture3D texture3DProj texture3DLod texture3DProjLod "+
"textureCube textureCubeLod "+
"shadow1D shadow2D shadow1DProj shadow2DProj "+
"shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod "+
"dFdx dFdy fwidth "+
"noise1 noise2 noise3 noise4"),atoms:words("true false "+
"gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex "+
"gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 "+
"gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 "+
"gl_FogCoord gl_PointCoord "+
"gl_Position gl_PointSize gl_ClipVertex "+
"gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor "+
"gl_TexCoord gl_FogFragCoord "+
"gl_FragCoord gl_FrontFacing "+
"gl_FragData gl_FragDepth "+
"gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix "+
"gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse "+
"gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse "+
"gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose "+
"gl_ProjectionMatrixInverseTranspose "+
"gl_ModelViewProjectionMatrixInverseTranspose "+
"gl_TextureMatrixInverseTranspose "+
"gl_NormalScale gl_DepthRange gl_ClipPlane "+
"gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel "+
"gl_FrontLightModelProduct gl_BackLightModelProduct "+
"gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ "+
"gl_FogParameters "+
"gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords "+
"gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats "+
"gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits "+
"gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits "+
"gl_MaxDrawBuffers"),indentSwitch:false,hooks:{"#":cppHook},modeProps:{fold:["brace","include"]}});def("text/x-nesc",{name:"clike",keywords:words(cKeywords+"as atomic async call command component components configuration event generic "+
"implementation includes interface module new norace nx_struct nx_union post provides "+
"signal task uses abstract extends"),types:words(cTypes),blockKeywords:words("case do else for if switch while struct"),atoms:words("null true false"),hooks:{"#":cppHook},modeProps:{fold:["brace","include"]}});def("text/x-objectivec",{name:"clike",keywords:words(cKeywords+"inline restrict _Bool _Complex _Imaginary BOOL Class bycopy byref id IMP in "+
"inout nil oneway out Protocol SEL self super atomic nonatomic retain copy readwrite readonly"),types:words(cTypes),atoms:words("YES NO NULL NILL ON OFF true false"),hooks:{"@":function(stream){stream.eatWhile(/[\w\$]/);return"keyword";},"#":cppHook,indent:function(_state,ctx,textAfter){if(ctx.type=="statement"&&/^@\w/.test(textAfter))return ctx.indented}},modeProps:{fold:"brace"}});def("text/x-squirrel",{name:"clike",keywords:words("base break clone continue const default delete enum extends function in class"+
" foreach local resume return this throw typeof yield constructor instanceof static"),types:words(cTypes),blockKeywords:words("case catch class else for foreach if switch try while"),defKeywords:words("function local class"),typeFirstDefinitions:true,atoms:words("true false null"),hooks:{"#":cppHook},modeProps:{fold:["brace","include"]}});var stringTokenizer=null;function tokenCeylonString(type){return function(stream,state){var escaped=false,next,end=false;while(!stream.eol()){if(!escaped&&stream.match('"')&&(type=="single"||stream.match('""'))){end=true;break;}
if(!escaped&&stream.match('``')){stringTokenizer=tokenCeylonString(type);end=true;break;}
next=stream.next();escaped=type=="single"&&!escaped&&next=="\\";}
if(end)
state.tokenize=null;return"string";}}
def("text/x-ceylon",{name:"clike",keywords:words("abstracts alias assembly assert assign break case catch class continue dynamic else"+
" exists extends finally for function given if import in interface is let module new"+
" nonempty object of out outer package return satisfies super switch then this throw"+
" try value void while"),types:function(word){var first=word.charAt(0);return(first===first.toUpperCase()&&first!==first.toLowerCase());},blockKeywords:words("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:words("class dynamic function interface module object package value"),builtin:words("abstract actual aliased annotation by default deprecated doc final formal late license"+
" native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:true,typeFirstDefinitions:true,atoms:words("true false null larger smaller equal empty finished"),indentSwitch:false,styleDefs:false,hooks:{"@":function(stream){stream.eatWhile(/[\w\$_]/);return"meta";},'"':function(stream,state){state.tokenize=tokenCeylonString(stream.match('""')?"triple":"single");return state.tokenize(stream,state);},'`':function(stream,state){if(!stringTokenizer||!stream.match('`'))return false;state.tokenize=stringTokenizer;stringTokenizer=null;return state.tokenize(stream,state);},"'":function(stream){stream.eatWhile(/[\w\$_\xa1-\uffff]/);return"atom";},token:function(_stream,state,style){if((style=="variable"||style=="type")&&state.prevToken=="."){return"variable-2";}}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}});});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("css",function(config,parserConfig){var inline=parserConfig.inline
if(!parserConfig.propertyKeywords)parserConfig=CodeMirror.resolveMode("text/css");var indentUnit=config.indentUnit,tokenHooks=parserConfig.tokenHooks,documentTypes=parserConfig.documentTypes||{},mediaTypes=parserConfig.mediaTypes||{},mediaFeatures=parserConfig.mediaFeatures||{},mediaValueKeywords=parserConfig.mediaValueKeywords||{},propertyKeywords=parserConfig.propertyKeywords||{},nonStandardPropertyKeywords=parserConfig.nonStandardPropertyKeywords||{},fontProperties=parserConfig.fontProperties||{},counterDescriptors=parserConfig.counterDescriptors||{},colorKeywords=parserConfig.colorKeywords||{},valueKeywords=parserConfig.valueKeywords||{},allowNested=parserConfig.allowNested,lineComment=parserConfig.lineComment,supportsAtComponent=parserConfig.supportsAtComponent===true;var type,override;function ret(style,tp){type=tp;return style;}
function tokenBase(stream,state){var ch=stream.next();if(tokenHooks[ch]){var result=tokenHooks[ch](stream,state);if(result!==false)return result;}
if(ch=="@"){stream.eatWhile(/[\w\\\-]/);return ret("def",stream.current());}else if(ch=="="||(ch=="~"||ch=="|")&&stream.eat("=")){return ret(null,"compare");}else if(ch=="\""||ch=="'"){state.tokenize=tokenString(ch);return state.tokenize(stream,state);}else if(ch=="#"){stream.eatWhile(/[\w\\\-]/);return ret("atom","hash");}else if(ch=="!"){stream.match(/^\s*\w*/);return ret("keyword","important");}else if(/\d/.test(ch)||ch=="."&&stream.eat(/\d/)){stream.eatWhile(/[\w.%]/);return ret("number","unit");}else if(ch==="-"){if(/[\d.]/.test(stream.peek())){stream.eatWhile(/[\w.%]/);return ret("number","unit");}else if(stream.match(/^-[\w\\\-]+/)){stream.eatWhile(/[\w\\\-]/);if(stream.match(/^\s*:/,false))
return ret("variable-2","variable-definition");return ret("variable-2","variable");}else if(stream.match(/^\w+-/)){return ret("meta","meta");}}else if(/[,+>*\/]/.test(ch)){return ret(null,"select-op");}else if(ch=="."&&stream.match(/^-?[_a-z][_a-z0-9-]*/i)){return ret("qualifier","qualifier");}else if(/[:;{}\[\]\(\)]/.test(ch)){return ret(null,ch);}else if(((ch=="u"||ch=="U")&&stream.match(/rl(-prefix)?\(/i))||((ch=="d"||ch=="D")&&stream.match("omain(",true,true))||((ch=="r"||ch=="R")&&stream.match("egexp(",true,true))){stream.backUp(1);state.tokenize=tokenParenthesized;return ret("property","word");}else if(/[\w\\\-]/.test(ch)){stream.eatWhile(/[\w\\\-]/);return ret("property","word");}else{return ret(null,null);}}
function tokenString(quote){return function(stream,state){var escaped=false,ch;while((ch=stream.next())!=null){if(ch==quote&&!escaped){if(quote==")")stream.backUp(1);break;}
escaped=!escaped&&ch=="\\";}
if(ch==quote||!escaped&&quote!=")")state.tokenize=null;return ret("string","string");};}
function tokenParenthesized(stream,state){stream.next();if(!stream.match(/\s*[\"\')]/,false))
state.tokenize=tokenString(")");else
state.tokenize=null;return ret(null,"(");}
function Context(type,indent,prev){this.type=type;this.indent=indent;this.prev=prev;}
function pushContext(state,stream,type,indent){state.context=new Context(type,stream.indentation()+(indent===false?0:indentUnit),state.context);return type;}
function popContext(state){if(state.context.prev)
state.context=state.context.prev;return state.context.type;}
function pass(type,stream,state){return states[state.context.type](type,stream,state);}
function popAndPass(type,stream,state,n){for(var i=n||1;i>0;i--)
state.context=state.context.prev;return pass(type,stream,state);}
function wordAsValue(stream){var word=stream.current().toLowerCase();if(valueKeywords.hasOwnProperty(word))
override="atom";else if(colorKeywords.hasOwnProperty(word))
override="keyword";else
override="variable";}
var states={};states.top=function(type,stream,state){if(type=="{"){return pushContext(state,stream,"block");}else if(type=="}"&&state.context.prev){return popContext(state);}else if(supportsAtComponent&&/@component/i.test(type)){return pushContext(state,stream,"atComponentBlock");}else if(/^@(-moz-)?document$/i.test(type)){return pushContext(state,stream,"documentTypes");}else if(/^@(media|supports|(-moz-)?document|import)$/i.test(type)){return pushContext(state,stream,"atBlock");}else if(/^@(font-face|counter-style)/i.test(type)){state.stateArg=type;return"restricted_atBlock_before";}else if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type)){return"keyframes";}else if(type&&type.charAt(0)=="@"){return pushContext(state,stream,"at");}else if(type=="hash"){override="builtin";}else if(type=="word"){override="tag";}else if(type=="variable-definition"){return"maybeprop";}else if(type=="interpolation"){return pushContext(state,stream,"interpolation");}else if(type==":"){return"pseudo";}else if(allowNested&&type=="("){return pushContext(state,stream,"parens");}
return state.context.type;};states.block=function(type,stream,state){if(type=="word"){var word=stream.current().toLowerCase();if(propertyKeywords.hasOwnProperty(word)){override="property";return"maybeprop";}else if(nonStandardPropertyKeywords.hasOwnProperty(word)){override="string-2";return"maybeprop";}else if(allowNested){override=stream.match(/^\s*:(?:\s|$)/,false)?"property":"tag";return"block";}else{override+=" error";return"maybeprop";}}else if(type=="meta"){return"block";}else if(!allowNested&&(type=="hash"||type=="qualifier")){override="error";return"block";}else{return states.top(type,stream,state);}};states.maybeprop=function(type,stream,state){if(type==":")return pushContext(state,stream,"prop");return pass(type,stream,state);};states.prop=function(type,stream,state){if(type==";")return popContext(state);if(type=="{"&&allowNested)return pushContext(state,stream,"propBlock");if(type=="}"||type=="{")return popAndPass(type,stream,state);if(type=="(")return pushContext(state,stream,"parens");if(type=="hash"&&!/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())){override+=" error";}else if(type=="word"){wordAsValue(stream);}else if(type=="interpolation"){return pushContext(state,stream,"interpolation");}
return"prop";};states.propBlock=function(type,_stream,state){if(type=="}")return popContext(state);if(type=="word"){override="property";return"maybeprop";}
return state.context.type;};states.parens=function(type,stream,state){if(type=="{"||type=="}")return popAndPass(type,stream,state);if(type==")")return popContext(state);if(type=="(")return pushContext(state,stream,"parens");if(type=="interpolation")return pushContext(state,stream,"interpolation");if(type=="word")wordAsValue(stream);return"parens";};states.pseudo=function(type,stream,state){if(type=="meta")return"pseudo";if(type=="word"){override="variable-3";return state.context.type;}
return pass(type,stream,state);};states.documentTypes=function(type,stream,state){if(type=="word"&&documentTypes.hasOwnProperty(stream.current())){override="tag";return state.context.type;}else{return states.atBlock(type,stream,state);}};states.atBlock=function(type,stream,state){if(type=="(")return pushContext(state,stream,"atBlock_parens");if(type=="}"||type==";")return popAndPass(type,stream,state);if(type=="{")return popContext(state)&&pushContext(state,stream,allowNested?"block":"top");if(type=="interpolation")return pushContext(state,stream,"interpolation");if(type=="word"){var word=stream.current().toLowerCase();if(word=="only"||word=="not"||word=="and"||word=="or")
override="keyword";else if(mediaTypes.hasOwnProperty(word))
override="attribute";else if(mediaFeatures.hasOwnProperty(word))
override="property";else if(mediaValueKeywords.hasOwnProperty(word))
override="keyword";else if(propertyKeywords.hasOwnProperty(word))
override="property";else if(nonStandardPropertyKeywords.hasOwnProperty(word))
override="string-2";else if(valueKeywords.hasOwnProperty(word))
override="atom";else if(colorKeywords.hasOwnProperty(word))
override="keyword";else
override="error";}
return state.context.type;};states.atComponentBlock=function(type,stream,state){if(type=="}")
return popAndPass(type,stream,state);if(type=="{")
return popContext(state)&&pushContext(state,stream,allowNested?"block":"top",false);if(type=="word")
override="error";return state.context.type;};states.atBlock_parens=function(type,stream,state){if(type==")")return popContext(state);if(type=="{"||type=="}")return popAndPass(type,stream,state,2);return states.atBlock(type,stream,state);};states.restricted_atBlock_before=function(type,stream,state){if(type=="{")
return pushContext(state,stream,"restricted_atBlock");if(type=="word"&&state.stateArg=="@counter-style"){override="variable";return"restricted_atBlock_before";}
return pass(type,stream,state);};states.restricted_atBlock=function(type,stream,state){if(type=="}"){state.stateArg=null;return popContext(state);}
if(type=="word"){if((state.stateArg=="@font-face"&&!fontProperties.hasOwnProperty(stream.current().toLowerCase()))||(state.stateArg=="@counter-style"&&!counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
override="error";else
override="property";return"maybeprop";}
return"restricted_atBlock";};states.keyframes=function(type,stream,state){if(type=="word"){override="variable";return"keyframes";}
if(type=="{")return pushContext(state,stream,"top");return pass(type,stream,state);};states.at=function(type,stream,state){if(type==";")return popContext(state);if(type=="{"||type=="}")return popAndPass(type,stream,state);if(type=="word")override="tag";else if(type=="hash")override="builtin";return"at";};states.interpolation=function(type,stream,state){if(type=="}")return popContext(state);if(type=="{"||type==";")return popAndPass(type,stream,state);if(type=="word")override="variable";else if(type!="variable"&&type!="("&&type!=")")override="error";return"interpolation";};return{startState:function(base){return{tokenize:null,state:inline?"block":"top",stateArg:null,context:new Context(inline?"block":"top",base||0,null)};},token:function(stream,state){if(!state.tokenize&&stream.eatSpace())return null;var style=(state.tokenize||tokenBase)(stream,state);if(style&&typeof style=="object"){type=style[1];style=style[0];}
override=style;if(type!="comment")
state.state=states[state.state](type,stream,state);return override;},indent:function(state,textAfter){var cx=state.context,ch=textAfter&&textAfter.charAt(0);var indent=cx.indent;if(cx.type=="prop"&&(ch=="}"||ch==")"))cx=cx.prev;if(cx.prev){if(ch=="}"&&(cx.type=="block"||cx.type=="top"||cx.type=="interpolation"||cx.type=="restricted_atBlock")){cx=cx.prev;indent=cx.indent;}else if(ch==")"&&(cx.type=="parens"||cx.type=="atBlock_parens")||ch=="{"&&(cx.type=="at"||cx.type=="atBlock")){indent=Math.max(0,cx.indent-indentUnit);}}
return indent;},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:lineComment,fold:"brace"};});function keySet(array){var keys={};for(var i=0;i<array.length;++i){keys[array[i].toLowerCase()]=true;}
return keys;}
var documentTypes_=["domain","regexp","url","url-prefix"],documentTypes=keySet(documentTypes_);var mediaTypes_=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],mediaTypes=keySet(mediaTypes_);var mediaFeatures_=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],mediaFeatures=keySet(mediaFeatures_);var mediaValueKeywords_=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],mediaValueKeywords=keySet(mediaValueKeywords_);var propertyKeywords_=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],propertyKeywords=keySet(propertyKeywords_);var nonStandardPropertyKeywords_=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],nonStandardPropertyKeywords=keySet(nonStandardPropertyKeywords_);var fontProperties_=["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],fontProperties=keySet(fontProperties_);var counterDescriptors_=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],counterDescriptors=keySet(counterDescriptors_);var colorKeywords_=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],colorKeywords=keySet(colorKeywords_);var valueKeywords_=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],valueKeywords=keySet(valueKeywords_);var allWords=documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_).concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_).concat(valueKeywords_);CodeMirror.registerHelper("hintWords","css",allWords);function tokenCComment(stream,state){var maybeEnd=false,ch;while((ch=stream.next())!=null){if(maybeEnd&&ch=="/"){state.tokenize=null;break;}
maybeEnd=(ch=="*");}
return["comment","comment"];}
CodeMirror.defineMIME("text/css",{documentTypes:documentTypes,mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,mediaValueKeywords:mediaValueKeywords,propertyKeywords:propertyKeywords,nonStandardPropertyKeywords:nonStandardPropertyKeywords,fontProperties:fontProperties,counterDescriptors:counterDescriptors,colorKeywords:colorKeywords,valueKeywords:valueKeywords,tokenHooks:{"/":function(stream,state){if(!stream.eat("*"))return false;state.tokenize=tokenCComment;return tokenCComment(stream,state);}},name:"css"});CodeMirror.defineMIME("text/x-scss",{mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,mediaValueKeywords:mediaValueKeywords,propertyKeywords:propertyKeywords,nonStandardPropertyKeywords:nonStandardPropertyKeywords,colorKeywords:colorKeywords,valueKeywords:valueKeywords,fontProperties:fontProperties,allowNested:true,lineComment:"//",tokenHooks:{"/":function(stream,state){if(stream.eat("/")){stream.skipToEnd();return["comment","comment"];}else if(stream.eat("*")){state.tokenize=tokenCComment;return tokenCComment(stream,state);}else{return["operator","operator"];}},":":function(stream){if(stream.match(/\s*\{/,false))
return[null,null]
return false;},"$":function(stream){stream.match(/^[\w-]+/);if(stream.match(/^\s*:/,false))
return["variable-2","variable-definition"];return["variable-2","variable"];},"#":function(stream){if(!stream.eat("{"))return false;return[null,"interpolation"];}},name:"css",helperType:"scss"});CodeMirror.defineMIME("text/x-less",{mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,mediaValueKeywords:mediaValueKeywords,propertyKeywords:propertyKeywords,nonStandardPropertyKeywords:nonStandardPropertyKeywords,colorKeywords:colorKeywords,valueKeywords:valueKeywords,fontProperties:fontProperties,allowNested:true,lineComment:"//",tokenHooks:{"/":function(stream,state){if(stream.eat("/")){stream.skipToEnd();return["comment","comment"];}else if(stream.eat("*")){state.tokenize=tokenCComment;return tokenCComment(stream,state);}else{return["operator","operator"];}},"@":function(stream){if(stream.eat("{"))return[null,"interpolation"];if(stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,false))return false;stream.eatWhile(/[\w\\\-]/);if(stream.match(/^\s*:/,false))
return["variable-2","variable-definition"];return["variable-2","variable"];},"&":function(){return["atom","atom"];}},name:"css",helperType:"less"});CodeMirror.defineMIME("text/x-gss",{documentTypes:documentTypes,mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,propertyKeywords:propertyKeywords,nonStandardPropertyKeywords:nonStandardPropertyKeywords,fontProperties:fontProperties,counterDescriptors:counterDescriptors,colorKeywords:colorKeywords,valueKeywords:valueKeywords,supportsAtComponent:true,tokenHooks:{"/":function(stream,state){if(!stream.eat("*"))return false;state.tokenize=tokenCComment;return tokenCComment(stream,state);}},name:"css",helperType:"gss"});});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("http",function(){function failFirstLine(stream,state){stream.skipToEnd();state.cur=header;return"error";}
function start(stream,state){if(stream.match(/^HTTP\/\d\.\d/)){state.cur=responseStatusCode;return"keyword";}else if(stream.match(/^[A-Z]+/)&&/[ \t]/.test(stream.peek())){state.cur=requestPath;return"keyword";}else{return failFirstLine(stream,state);}}
function responseStatusCode(stream,state){var code=stream.match(/^\d+/);if(!code)return failFirstLine(stream,state);state.cur=responseStatusText;var status=Number(code[0]);if(status>=100&&status<200){return"positive informational";}else if(status>=200&&status<300){return"positive success";}else if(status>=300&&status<400){return"positive redirect";}else if(status>=400&&status<500){return"negative client-error";}else if(status>=500&&status<600){return"negative server-error";}else{return"error";}}
function responseStatusText(stream,state){stream.skipToEnd();state.cur=header;return null;}
function requestPath(stream,state){stream.eatWhile(/\S/);state.cur=requestProtocol;return"string-2";}
function requestProtocol(stream,state){if(stream.match(/^HTTP\/\d\.\d$/)){state.cur=header;return"keyword";}else{return failFirstLine(stream,state);}}
function header(stream){if(stream.sol()&&!stream.eat(/[ \t]/)){if(stream.match(/^.*?:/)){return"atom";}else{stream.skipToEnd();return"error";}}else{stream.skipToEnd();return"string";}}
function body(stream){stream.skipToEnd();return null;}
return{token:function(stream,state){var cur=state.cur;if(cur!=header&&cur!=body&&stream.eatSpace())return null;return cur(stream,state);},blankLine:function(state){state.cur=body;},startState:function(){return{cur:start};}};});CodeMirror.defineMIME("message/http","http");});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("javascript",function(config,parserConfig){var indentUnit=config.indentUnit;var statementIndent=parserConfig.statementIndent;var jsonldMode=parserConfig.jsonld;var jsonMode=parserConfig.json||jsonldMode;var isTS=parserConfig.typescript;var wordRE=parserConfig.wordCharacters||/[\w$\xa1-\uffff]/;var keywords=function(){function kw(type){return{type:type,style:"keyword"};}
var A=kw("keyword a"),B=kw("keyword b"),C=kw("keyword c"),D=kw("keyword d");var operator=kw("operator"),atom={type:"atom",style:"atom"};return{"if":kw("if"),"while":A,"with":A,"else":B,"do":B,"try":B,"finally":B,"return":D,"break":D,"continue":D,"new":kw("new"),"delete":C,"void":C,"throw":C,"debugger":kw("debugger"),"var":kw("var"),"const":kw("var"),"let":kw("var"),"function":kw("function"),"catch":kw("catch"),"for":kw("for"),"switch":kw("switch"),"case":kw("case"),"default":kw("default"),"in":operator,"typeof":operator,"instanceof":operator,"true":atom,"false":atom,"null":atom,"undefined":atom,"NaN":atom,"Infinity":atom,"this":kw("this"),"class":kw("class"),"super":kw("atom"),"yield":C,"export":kw("export"),"import":kw("import"),"extends":C,"await":C};}();var isOperatorChar=/[+\-*&%=<>!?|~^@]/;var isJsonldKeyword=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function readRegexp(stream){var escaped=false,next,inSet=false;while((next=stream.next())!=null){if(!escaped){if(next=="/"&&!inSet)return;if(next=="[")inSet=true;else if(inSet&&next=="]")inSet=false;}
escaped=!escaped&&next=="\\";}}
var type,content;function ret(tp,style,cont){type=tp;content=cont;return style;}
function tokenBase(stream,state){var ch=stream.next();if(ch=='"'||ch=="'"){state.tokenize=tokenString(ch);return state.tokenize(stream,state);}else if(ch=="."&&stream.match(/^\d+(?:[eE][+\-]?\d+)?/)){return ret("number","number");}else if(ch=="."&&stream.match("..")){return ret("spread","meta");}else if(/[\[\]{}\(\),;\:\.]/.test(ch)){return ret(ch);}else if(ch=="="&&stream.eat(">")){return ret("=>","operator");}else if(ch=="0"&&stream.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i)){return ret("number","number");}else if(/\d/.test(ch)){stream.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/);return ret("number","number");}else if(ch=="/"){if(stream.eat("*")){state.tokenize=tokenComment;return tokenComment(stream,state);}else if(stream.eat("/")){stream.skipToEnd();return ret("comment","comment");}else if(expressionAllowed(stream,state,1)){readRegexp(stream);stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);return ret("regexp","string-2");}else{stream.eat("=");return ret("operator","operator",stream.current());}}else if(ch=="`"){state.tokenize=tokenQuasi;return tokenQuasi(stream,state);}else if(ch=="#"){stream.skipToEnd();return ret("error","error");}else if(isOperatorChar.test(ch)){if(ch!=">"||!state.lexical||state.lexical.type!=">"){if(stream.eat("=")){if(ch=="!"||ch=="=")stream.eat("=")}else if(/[<>*+\-]/.test(ch)){stream.eat(ch)
if(ch==">")stream.eat(ch)}}
return ret("operator","operator",stream.current());}else if(wordRE.test(ch)){stream.eatWhile(wordRE);var word=stream.current()
if(state.lastType!="."){if(keywords.propertyIsEnumerable(word)){var kw=keywords[word]
return ret(kw.type,kw.style,word)}
if(word=="async"&&stream.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,false))
return ret("async","keyword",word)}
return ret("variable","variable",word)}}
function tokenString(quote){return function(stream,state){var escaped=false,next;if(jsonldMode&&stream.peek()=="@"&&stream.match(isJsonldKeyword)){state.tokenize=tokenBase;return ret("jsonld-keyword","meta");}
while((next=stream.next())!=null){if(next==quote&&!escaped)break;escaped=!escaped&&next=="\\";}
if(!escaped)state.tokenize=tokenBase;return ret("string","string");};}
function tokenComment(stream,state){var maybeEnd=false,ch;while(ch=stream.next()){if(ch=="/"&&maybeEnd){state.tokenize=tokenBase;break;}
maybeEnd=(ch=="*");}
return ret("comment","comment");}
function tokenQuasi(stream,state){var escaped=false,next;while((next=stream.next())!=null){if(!escaped&&(next=="`"||next=="$"&&stream.eat("{"))){state.tokenize=tokenBase;break;}
escaped=!escaped&&next=="\\";}
return ret("quasi","string-2",stream.current());}
var brackets="([{}])";function findFatArrow(stream,state){if(state.fatArrowAt)state.fatArrowAt=null;var arrow=stream.string.indexOf("=>",stream.start);if(arrow<0)return;if(isTS){var m=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start,arrow))
if(m)arrow=m.index}
var depth=0,sawSomething=false;for(var pos=arrow-1;pos>=0;--pos){var ch=stream.string.charAt(pos);var bracket=brackets.indexOf(ch);if(bracket>=0&&bracket<3){if(!depth){++pos;break;}
if(--depth==0){if(ch=="(")sawSomething=true;break;}}else if(bracket>=3&&bracket<6){++depth;}else if(wordRE.test(ch)){sawSomething=true;}else if(/["'\/]/.test(ch)){return;}else if(sawSomething&&!depth){++pos;break;}}
if(sawSomething&&!depth)state.fatArrowAt=pos;}
var atomicTypes={"atom":true,"number":true,"variable":true,"string":true,"regexp":true,"this":true,"jsonld-keyword":true};function JSLexical(indented,column,type,align,prev,info){this.indented=indented;this.column=column;this.type=type;this.prev=prev;this.info=info;if(align!=null)this.align=align;}
function inScope(state,varname){for(var v=state.localVars;v;v=v.next)
if(v.name==varname)return true;for(var cx=state.context;cx;cx=cx.prev){for(var v=cx.vars;v;v=v.next)
if(v.name==varname)return true;}}
function parseJS(state,style,type,content,stream){var cc=state.cc;cx.state=state;cx.stream=stream;cx.marked=null,cx.cc=cc;cx.style=style;if(!state.lexical.hasOwnProperty("align"))
state.lexical.align=true;while(true){var combinator=cc.length?cc.pop():jsonMode?expression:statement;if(combinator(type,content)){while(cc.length&&cc[cc.length-1].lex)
cc.pop()();if(cx.marked)return cx.marked;if(type=="variable"&&inScope(state,content))return"variable-2";return style;}}}
var cx={state:null,column:null,marked:null,cc:null};function pass(){for(var i=arguments.length-1;i>=0;i--)cx.cc.push(arguments[i]);}
function cont(){pass.apply(null,arguments);return true;}
function inList(name,list){for(var v=list;v;v=v.next)if(v.name==name)return true
return false;}
function register(varname){var state=cx.state;cx.marked="def";if(state.context){if(state.lexical.info=="var"&&state.context&&state.context.block){var newContext=registerVarScoped(varname,state.context)
if(newContext!=null){state.context=newContext
return}}else if(!inList(varname,state.localVars)){state.localVars=new Var(varname,state.localVars)
return}}
if(parserConfig.globalVars&&!inList(varname,state.globalVars))
state.globalVars=new Var(varname,state.globalVars)}
function registerVarScoped(varname,context){if(!context){return null}else if(context.block){var inner=registerVarScoped(varname,context.prev)
if(!inner)return null
if(inner==context.prev)return context
return new Context(inner,context.vars,true)}else if(inList(varname,context.vars)){return context}else{return new Context(context.prev,new Var(varname,context.vars),false)}}
function isModifier(name){return name=="public"||name=="private"||name=="protected"||name=="abstract"||name=="readonly"}
function Context(prev,vars,block){this.prev=prev;this.vars=vars;this.block=block}
function Var(name,next){this.name=name;this.next=next}
var defaultVars=new Var("this",new Var("arguments",null))
function pushcontext(){cx.state.context=new Context(cx.state.context,cx.state.localVars,false)
cx.state.localVars=defaultVars}
function pushblockcontext(){cx.state.context=new Context(cx.state.context,cx.state.localVars,true)
cx.state.localVars=null}
function popcontext(){cx.state.localVars=cx.state.context.vars
cx.state.context=cx.state.context.prev}
popcontext.lex=true
function pushlex(type,info){var result=function(){var state=cx.state,indent=state.indented;if(state.lexical.type=="stat")indent=state.lexical.indented;else for(var outer=state.lexical;outer&&outer.type==")"&&outer.align;outer=outer.prev)
indent=outer.indented;state.lexical=new JSLexical(indent,cx.stream.column(),type,null,state.lexical,info);};result.lex=true;return result;}
function poplex(){var state=cx.state;if(state.lexical.prev){if(state.lexical.type==")")
state.indented=state.lexical.indented;state.lexical=state.lexical.prev;}}
poplex.lex=true;function expect(wanted){function exp(type){if(type==wanted)return cont();else if(wanted==";"||type=="}"||type==")"||type=="]")return pass();else return cont(exp);};return exp;}
function statement(type,value){if(type=="var")return cont(pushlex("vardef",value),vardef,expect(";"),poplex);if(type=="keyword a")return cont(pushlex("form"),parenExpr,statement,poplex);if(type=="keyword b")return cont(pushlex("form"),statement,poplex);if(type=="keyword d")return cx.stream.match(/^\s*$/,false)?cont():cont(pushlex("stat"),maybeexpression,expect(";"),poplex);if(type=="debugger")return cont(expect(";"));if(type=="{")return cont(pushlex("}"),pushblockcontext,block,poplex,popcontext);if(type==";")return cont();if(type=="if"){if(cx.state.lexical.info=="else"&&cx.state.cc[cx.state.cc.length-1]==poplex)
cx.state.cc.pop()();return cont(pushlex("form"),parenExpr,statement,poplex,maybeelse);}
if(type=="function")return cont(functiondef);if(type=="for")return cont(pushlex("form"),forspec,statement,poplex);if(type=="class"||(isTS&&value=="interface")){cx.marked="keyword";return cont(pushlex("form"),className,poplex);}
if(type=="variable"){if(isTS&&value=="declare"){cx.marked="keyword"
return cont(statement)}else if(isTS&&(value=="module"||value=="enum"||value=="type")&&cx.stream.match(/^\s*\w/,false)){cx.marked="keyword"
if(value=="enum")return cont(enumdef);else if(value=="type")return cont(typeexpr,expect("operator"),typeexpr,expect(";"));else return cont(pushlex("form"),pattern,expect("{"),pushlex("}"),block,poplex,poplex)}else if(isTS&&value=="namespace"){cx.marked="keyword"
return cont(pushlex("form"),expression,block,poplex)}else if(isTS&&value=="abstract"){cx.marked="keyword"
return cont(statement)}else{return cont(pushlex("stat"),maybelabel);}}
if(type=="switch")return cont(pushlex("form"),parenExpr,expect("{"),pushlex("}","switch"),pushblockcontext,block,poplex,poplex,popcontext);if(type=="case")return cont(expression,expect(":"));if(type=="default")return cont(expect(":"));if(type=="catch")return cont(pushlex("form"),pushcontext,maybeCatchBinding,statement,poplex,popcontext);if(type=="export")return cont(pushlex("stat"),afterExport,poplex);if(type=="import")return cont(pushlex("stat"),afterImport,poplex);if(type=="async")return cont(statement)
if(value=="@")return cont(expression,statement)
return pass(pushlex("stat"),expression,expect(";"),poplex);}
function maybeCatchBinding(type){if(type=="(")return cont(funarg,expect(")"))}
function expression(type,value){return expressionInner(type,value,false);}
function expressionNoComma(type,value){return expressionInner(type,value,true);}
function parenExpr(type){if(type!="(")return pass()
return cont(pushlex(")"),expression,expect(")"),poplex)}
function expressionInner(type,value,noComma){if(cx.state.fatArrowAt==cx.stream.start){var body=noComma?arrowBodyNoComma:arrowBody;if(type=="(")return cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,expect("=>"),body,popcontext);else if(type=="variable")return pass(pushcontext,pattern,expect("=>"),body,popcontext);}
var maybeop=noComma?maybeoperatorNoComma:maybeoperatorComma;if(atomicTypes.hasOwnProperty(type))return cont(maybeop);if(type=="function")return cont(functiondef,maybeop);if(type=="class"||(isTS&&value=="interface")){cx.marked="keyword";return cont(pushlex("form"),classExpression,poplex);}
if(type=="keyword c"||type=="async")return cont(noComma?expressionNoComma:expression);if(type=="(")return cont(pushlex(")"),maybeexpression,expect(")"),poplex,maybeop);if(type=="operator"||type=="spread")return cont(noComma?expressionNoComma:expression);if(type=="[")return cont(pushlex("]"),arrayLiteral,poplex,maybeop);if(type=="{")return contCommasep(objprop,"}",null,maybeop);if(type=="quasi")return pass(quasi,maybeop);if(type=="new")return cont(maybeTarget(noComma));if(type=="import")return cont(expression);return cont();}
function maybeexpression(type){if(type.match(/[;\}\)\],]/))return pass();return pass(expression);}
function maybeoperatorComma(type,value){if(type==",")return cont(expression);return maybeoperatorNoComma(type,value,false);}
function maybeoperatorNoComma(type,value,noComma){var me=noComma==false?maybeoperatorComma:maybeoperatorNoComma;var expr=noComma==false?expression:expressionNoComma;if(type=="=>")return cont(pushcontext,noComma?arrowBodyNoComma:arrowBody,popcontext);if(type=="operator"){if(/\+\+|--/.test(value)||isTS&&value=="!")return cont(me);if(isTS&&value=="<"&&cx.stream.match(/^([^>]|<.*?>)*>\s*\(/,false))
return cont(pushlex(">"),commasep(typeexpr,">"),poplex,me);if(value=="?")return cont(expression,expect(":"),expr);return cont(expr);}
if(type=="quasi"){return pass(quasi,me);}
if(type==";")return;if(type=="(")return contCommasep(expressionNoComma,")","call",me);if(type==".")return cont(property,me);if(type=="[")return cont(pushlex("]"),maybeexpression,expect("]"),poplex,me);if(isTS&&value=="as"){cx.marked="keyword";return cont(typeexpr,me)}
if(type=="regexp"){cx.state.lastType=cx.marked="operator"
cx.stream.backUp(cx.stream.pos-cx.stream.start-1)
return cont(expr)}}
function quasi(type,value){if(type!="quasi")return pass();if(value.slice(value.length-2)!="${")return cont(quasi);return cont(expression,continueQuasi);}
function continueQuasi(type){if(type=="}"){cx.marked="string-2";cx.state.tokenize=tokenQuasi;return cont(quasi);}}
function arrowBody(type){findFatArrow(cx.stream,cx.state);return pass(type=="{"?statement:expression);}
function arrowBodyNoComma(type){findFatArrow(cx.stream,cx.state);return pass(type=="{"?statement:expressionNoComma);}
function maybeTarget(noComma){return function(type){if(type==".")return cont(noComma?targetNoComma:target);else if(type=="variable"&&isTS)return cont(maybeTypeArgs,noComma?maybeoperatorNoComma:maybeoperatorComma)
else return pass(noComma?expressionNoComma:expression);};}
function target(_,value){if(value=="target"){cx.marked="keyword";return cont(maybeoperatorComma);}}
function targetNoComma(_,value){if(value=="target"){cx.marked="keyword";return cont(maybeoperatorNoComma);}}
function maybelabel(type){if(type==":")return cont(poplex,statement);return pass(maybeoperatorComma,expect(";"),poplex);}
function property(type){if(type=="variable"){cx.marked="property";return cont();}}
function objprop(type,value){if(type=="async"){cx.marked="property";return cont(objprop);}else if(type=="variable"||cx.style=="keyword"){cx.marked="property";if(value=="get"||value=="set")return cont(getterSetter);var m
if(isTS&&cx.state.fatArrowAt==cx.stream.start&&(m=cx.stream.match(/^\s*:\s*/,false)))
cx.state.fatArrowAt=cx.stream.pos+m[0].length
return cont(afterprop);}else if(type=="number"||type=="string"){cx.marked=jsonldMode?"property":(cx.style+" property");return cont(afterprop);}else if(type=="jsonld-keyword"){return cont(afterprop);}else if(isTS&&isModifier(value)){cx.marked="keyword"
return cont(objprop)}else if(type=="["){return cont(expression,maybetype,expect("]"),afterprop);}else if(type=="spread"){return cont(expressionNoComma,afterprop);}else if(value=="*"){cx.marked="keyword";return cont(objprop);}else if(type==":"){return pass(afterprop)}}
function getterSetter(type){if(type!="variable")return pass(afterprop);cx.marked="property";return cont(functiondef);}
function afterprop(type){if(type==":")return cont(expressionNoComma);if(type=="(")return pass(functiondef);}
function commasep(what,end,sep){function proceed(type,value){if(sep?sep.indexOf(type)>-1:type==","){var lex=cx.state.lexical;if(lex.info=="call")lex.pos=(lex.pos||0)+1;return cont(function(type,value){if(type==end||value==end)return pass()
return pass(what)},proceed);}
if(type==end||value==end)return cont();return cont(expect(end));}
return function(type,value){if(type==end||value==end)return cont();return pass(what,proceed);};}
function contCommasep(what,end,info){for(var i=3;i<arguments.length;i++)
cx.cc.push(arguments[i]);return cont(pushlex(end,info),commasep(what,end),poplex);}
function block(type){if(type=="}")return cont();return pass(statement,block);}
function maybetype(type,value){if(isTS){if(type==":")return cont(typeexpr);if(value=="?")return cont(maybetype);}}
function mayberettype(type){if(isTS&&type==":"){if(cx.stream.match(/^\s*\w+\s+is\b/,false))return cont(expression,isKW,typeexpr)
else return cont(typeexpr)}}
function isKW(_,value){if(value=="is"){cx.marked="keyword"
return cont()}}
function typeexpr(type,value){if(value=="keyof"||value=="typeof"){cx.marked="keyword"
return cont(value=="keyof"?typeexpr:expressionNoComma)}
if(type=="variable"||value=="void"){cx.marked="type"
return cont(afterType)}
if(type=="string"||type=="number"||type=="atom")return cont(afterType);if(type=="[")return cont(pushlex("]"),commasep(typeexpr,"]",","),poplex,afterType)
if(type=="{")return cont(pushlex("}"),commasep(typeprop,"}",",;"),poplex,afterType)
if(type=="(")return cont(commasep(typearg,")"),maybeReturnType)
if(type=="<")return cont(commasep(typeexpr,">"),typeexpr)}
function maybeReturnType(type){if(type=="=>")return cont(typeexpr)}
function typeprop(type,value){if(type=="variable"||cx.style=="keyword"){cx.marked="property"
return cont(typeprop)}else if(value=="?"){return cont(typeprop)}else if(type==":"){return cont(typeexpr)}else if(type=="["){return cont(expression,maybetype,expect("]"),typeprop)}}
function typearg(type,value){if(type=="variable"&&cx.stream.match(/^\s*[?:]/,false)||value=="?")return cont(typearg)
if(type==":")return cont(typeexpr)
return pass(typeexpr)}
function afterType(type,value){if(value=="<")return cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType)
if(value=="|"||type=="."||value=="&")return cont(typeexpr)
if(type=="[")return cont(expect("]"),afterType)
if(value=="extends"||value=="implements"){cx.marked="keyword";return cont(typeexpr)}}
function maybeTypeArgs(_,value){if(value=="<")return cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType)}
function typeparam(){return pass(typeexpr,maybeTypeDefault)}
function maybeTypeDefault(_,value){if(value=="=")return cont(typeexpr)}
function vardef(_,value){if(value=="enum"){cx.marked="keyword";return cont(enumdef)}
return pass(pattern,maybetype,maybeAssign,vardefCont);}
function pattern(type,value){if(isTS&&isModifier(value)){cx.marked="keyword";return cont(pattern)}
if(type=="variable"){register(value);return cont();}
if(type=="spread")return cont(pattern);if(type=="[")return contCommasep(eltpattern,"]");if(type=="{")return contCommasep(proppattern,"}");}
function proppattern(type,value){if(type=="variable"&&!cx.stream.match(/^\s*:/,false)){register(value);return cont(maybeAssign);}
if(type=="variable")cx.marked="property";if(type=="spread")return cont(pattern);if(type=="}")return pass();return cont(expect(":"),pattern,maybeAssign);}
function eltpattern(){return pass(pattern,maybeAssign)}
function maybeAssign(_type,value){if(value=="=")return cont(expressionNoComma);}
function vardefCont(type){if(type==",")return cont(vardef);}
function maybeelse(type,value){if(type=="keyword b"&&value=="else")return cont(pushlex("form","else"),statement,poplex);}
function forspec(type,value){if(value=="await")return cont(forspec);if(type=="(")return cont(pushlex(")"),forspec1,expect(")"),poplex);}
function forspec1(type){if(type=="var")return cont(vardef,expect(";"),forspec2);if(type==";")return cont(forspec2);if(type=="variable")return cont(formaybeinof);return pass(expression,expect(";"),forspec2);}
function formaybeinof(_type,value){if(value=="in"||value=="of"){cx.marked="keyword";return cont(expression);}
return cont(maybeoperatorComma,forspec2);}
function forspec2(type,value){if(type==";")return cont(forspec3);if(value=="in"||value=="of"){cx.marked="keyword";return cont(expression);}
return pass(expression,expect(";"),forspec3);}
function forspec3(type){if(type!=")")cont(expression);}
function functiondef(type,value){if(value=="*"){cx.marked="keyword";return cont(functiondef);}
if(type=="variable"){register(value);return cont(functiondef);}
if(type=="(")return cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,mayberettype,statement,popcontext);if(isTS&&value=="<")return cont(pushlex(">"),commasep(typeparam,">"),poplex,functiondef)}
function funarg(type,value){if(value=="@")cont(expression,funarg)
if(type=="spread")return cont(funarg);if(isTS&&isModifier(value)){cx.marked="keyword";return cont(funarg);}
return pass(pattern,maybetype,maybeAssign);}
function classExpression(type,value){if(type=="variable")return className(type,value);return classNameAfter(type,value);}
function className(type,value){if(type=="variable"){register(value);return cont(classNameAfter);}}
function classNameAfter(type,value){if(value=="<")return cont(pushlex(">"),commasep(typeparam,">"),poplex,classNameAfter)
if(value=="extends"||value=="implements"||(isTS&&type==",")){if(value=="implements")cx.marked="keyword";return cont(isTS?typeexpr:expression,classNameAfter);}
if(type=="{")return cont(pushlex("}"),classBody,poplex);}
function classBody(type,value){if(type=="async"||(type=="variable"&&(value=="static"||value=="get"||value=="set"||(isTS&&isModifier(value)))&&cx.stream.match(/^\s+[\w$\xa1-\uffff]/,false))){cx.marked="keyword";return cont(classBody);}
if(type=="variable"||cx.style=="keyword"){cx.marked="property";return cont(isTS?classfield:functiondef,classBody);}
if(type=="[")
return cont(expression,maybetype,expect("]"),isTS?classfield:functiondef,classBody)
if(value=="*"){cx.marked="keyword";return cont(classBody);}
if(type==";")return cont(classBody);if(type=="}")return cont();if(value=="@")return cont(expression,classBody)}
function classfield(type,value){if(value=="?")return cont(classfield)
if(type==":")return cont(typeexpr,maybeAssign)
if(value=="=")return cont(expressionNoComma)
return pass(functiondef)}
function afterExport(type,value){if(value=="*"){cx.marked="keyword";return cont(maybeFrom,expect(";"));}
if(value=="default"){cx.marked="keyword";return cont(expression,expect(";"));}
if(type=="{")return cont(commasep(exportField,"}"),maybeFrom,expect(";"));return pass(statement);}
function exportField(type,value){if(value=="as"){cx.marked="keyword";return cont(expect("variable"));}
if(type=="variable")return pass(expressionNoComma,exportField);}
function afterImport(type){if(type=="string")return cont();if(type=="(")return pass(expression);return pass(importSpec,maybeMoreImports,maybeFrom);}
function importSpec(type,value){if(type=="{")return contCommasep(importSpec,"}");if(type=="variable")register(value);if(value=="*")cx.marked="keyword";return cont(maybeAs);}
function maybeMoreImports(type){if(type==",")return cont(importSpec,maybeMoreImports)}
function maybeAs(_type,value){if(value=="as"){cx.marked="keyword";return cont(importSpec);}}
function maybeFrom(_type,value){if(value=="from"){cx.marked="keyword";return cont(expression);}}
function arrayLiteral(type){if(type=="]")return cont();return pass(commasep(expressionNoComma,"]"));}
function enumdef(){return pass(pushlex("form"),pattern,expect("{"),pushlex("}"),commasep(enummember,"}"),poplex,poplex)}
function enummember(){return pass(pattern,maybeAssign);}
function isContinuedStatement(state,textAfter){return state.lastType=="operator"||state.lastType==","||isOperatorChar.test(textAfter.charAt(0))||/[,.]/.test(textAfter.charAt(0));}
function expressionAllowed(stream,state,backUp){return state.tokenize==tokenBase&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType)||(state.lastType=="quasi"&&/\{\s*$/.test(stream.string.slice(0,stream.pos-(backUp||0))))}
return{startState:function(basecolumn){var state={tokenize:tokenBase,lastType:"sof",cc:[],lexical:new JSLexical((basecolumn||0)-indentUnit,0,"block",false),localVars:parserConfig.localVars,context:parserConfig.localVars&&new Context(null,null,false),indented:basecolumn||0};if(parserConfig.globalVars&&typeof parserConfig.globalVars=="object")
state.globalVars=parserConfig.globalVars;return state;},token:function(stream,state){if(stream.sol()){if(!state.lexical.hasOwnProperty("align"))
state.lexical.align=false;state.indented=stream.indentation();findFatArrow(stream,state);}
if(state.tokenize!=tokenComment&&stream.eatSpace())return null;var style=state.tokenize(stream,state);if(type=="comment")return style;state.lastType=type=="operator"&&(content=="++"||content=="--")?"incdec":type;return parseJS(state,style,type,content,stream);},indent:function(state,textAfter){if(state.tokenize==tokenComment)return CodeMirror.Pass;if(state.tokenize!=tokenBase)return 0;var firstChar=textAfter&&textAfter.charAt(0),lexical=state.lexical,top
if(!/^\s*else\b/.test(textAfter))for(var i=state.cc.length-1;i>=0;--i){var c=state.cc[i];if(c==poplex)lexical=lexical.prev;else if(c!=maybeelse)break;}
while((lexical.type=="stat"||lexical.type=="form")&&(firstChar=="}"||((top=state.cc[state.cc.length-1])&&(top==maybeoperatorComma||top==maybeoperatorNoComma)&&!/^[,\.=+\-*:?[\(]/.test(textAfter))))
lexical=lexical.prev;if(statementIndent&&lexical.type==")"&&lexical.prev.type=="stat")
lexical=lexical.prev;var type=lexical.type,closing=firstChar==type;if(type=="vardef")return lexical.indented+(state.lastType=="operator"||state.lastType==","?lexical.info.length+1:0);else if(type=="form"&&firstChar=="{")return lexical.indented;else if(type=="form")return lexical.indented+indentUnit;else if(type=="stat")
return lexical.indented+(isContinuedStatement(state,textAfter)?statementIndent||indentUnit:0);else if(lexical.info=="switch"&&!closing&&parserConfig.doubleIndentSwitch!=false)
return lexical.indented+(/^(?:case|default)\b/.test(textAfter)?indentUnit:2*indentUnit);else if(lexical.align)return lexical.column+(closing?0:1);else return lexical.indented+(closing?0:indentUnit);},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:jsonMode?null:"/*",blockCommentEnd:jsonMode?null:"*/",blockCommentContinue:jsonMode?null:" * ",lineComment:jsonMode?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:jsonMode?"json":"javascript",jsonldMode:jsonldMode,jsonMode:jsonMode,expressionAllowed:expressionAllowed,skipExpression:function(state){var top=state.cc[state.cc.length-1]
if(top==expression||top==expressionNoComma)state.cc.pop()}};});CodeMirror.registerHelper("wordChars","javascript",/[\w$]/);CodeMirror.defineMIME("text/javascript","javascript");CodeMirror.defineMIME("text/ecmascript","javascript");CodeMirror.defineMIME("application/javascript","javascript");CodeMirror.defineMIME("application/x-javascript","javascript");CodeMirror.defineMIME("application/ecmascript","javascript");CodeMirror.defineMIME("application/json",{name:"javascript",json:true});CodeMirror.defineMIME("application/x-json",{name:"javascript",json:true});CodeMirror.defineMIME("application/ld+json",{name:"javascript",jsonld:true});CodeMirror.defineMIME("text/typescript",{name:"javascript",typescript:true});CodeMirror.defineMIME("application/typescript",{name:"javascript",typescript:true});});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("jinja2",function(){var keywords=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","plural"],operator=/^[+\-*&%=<>!?|~^]/,sign=/^[:\[\(\{]/,atom=["true","false"],number=/^(\d[+\-\*\/])?\d+(\.\d+)?/;keywords=new RegExp("(("+keywords.join(")|(")+"))\\b");atom=new RegExp("(("+atom.join(")|(")+"))\\b");function tokenBase(stream,state){var ch=stream.peek();if(state.incomment){if(!stream.skipTo("#}")){stream.skipToEnd();}else{stream.eatWhile(/\#|}/);state.incomment=false;}
return"comment";}else if(state.intag){if(state.operator){state.operator=false;if(stream.match(atom)){return"atom";}
if(stream.match(number)){return"number";}}
if(state.sign){state.sign=false;if(stream.match(atom)){return"atom";}
if(stream.match(number)){return"number";}}
if(state.instring){if(ch==state.instring){state.instring=false;}
stream.next();return"string";}else if(ch=="'"||ch=='"'){state.instring=ch;stream.next();return"string";}else if(stream.match(state.intag+"}")||stream.eat("-")&&stream.match(state.intag+"}")){state.intag=false;return"tag";}else if(stream.match(operator)){state.operator=true;return"operator";}else if(stream.match(sign)){state.sign=true;}else{if(stream.eat(" ")||stream.sol()){if(stream.match(keywords)){return"keyword";}
if(stream.match(atom)){return"atom";}
if(stream.match(number)){return"number";}
if(stream.sol()){stream.next();}}else{stream.next();}}
return"variable";}else if(stream.eat("{")){if(stream.eat("#")){state.incomment=true;if(!stream.skipTo("#}")){stream.skipToEnd();}else{stream.eatWhile(/\#|}/);state.incomment=false;}
return"comment";}else if(ch=stream.eat(/\{|%/)){state.intag=ch;if(ch=="{"){state.intag="}";}
stream.eat("-");return"tag";}}
stream.next();};return{startState:function(){return{tokenize:tokenBase};},token:function(stream,state){return state.tokenize(stream,state);},blockCommentStart:"{#",blockCommentEnd:"#}"};});});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("nginx",function(config){function words(str){var obj={},words=str.split(" ");for(var i=0;i<words.length;++i)obj[words[i]]=true;return obj;}
var keywords=words("break return rewrite set"+
" accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23");var keywords_block=words("http mail events server types location upstream charset_map limit_except if geo map");var keywords_important=words("include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files");var indentUnit=config.indentUnit,type;function ret(style,tp){type=tp;return style;}
function tokenBase(stream,state){stream.eatWhile(/[\w\$_]/);var cur=stream.current();if(keywords.propertyIsEnumerable(cur)){return"keyword";}
else if(keywords_block.propertyIsEnumerable(cur)){return"variable-2";}
else if(keywords_important.propertyIsEnumerable(cur)){return"string-2";}
var ch=stream.next();if(ch=="@"){stream.eatWhile(/[\w\\\-]/);return ret("meta",stream.current());}
else if(ch=="/"&&stream.eat("*")){state.tokenize=tokenCComment;return tokenCComment(stream,state);}
else if(ch=="<"&&stream.eat("!")){state.tokenize=tokenSGMLComment;return tokenSGMLComment(stream,state);}
else if(ch=="=")ret(null,"compare");else if((ch=="~"||ch=="|")&&stream.eat("="))return ret(null,"compare");else if(ch=="\""||ch=="'"){state.tokenize=tokenString(ch);return state.tokenize(stream,state);}
else if(ch=="#"){stream.skipToEnd();return ret("comment","comment");}
else if(ch=="!"){stream.match(/^\s*\w*/);return ret("keyword","important");}
else if(/\d/.test(ch)){stream.eatWhile(/[\w.%]/);return ret("number","unit");}
else if(/[,.+>*\/]/.test(ch)){return ret(null,"select-op");}
else if(/[;{}:\[\]]/.test(ch)){return ret(null,ch);}
else{stream.eatWhile(/[\w\\\-]/);return ret("variable","variable");}}
function tokenCComment(stream,state){var maybeEnd=false,ch;while((ch=stream.next())!=null){if(maybeEnd&&ch=="/"){state.tokenize=tokenBase;break;}
maybeEnd=(ch=="*");}
return ret("comment","comment");}
function tokenSGMLComment(stream,state){var dashes=0,ch;while((ch=stream.next())!=null){if(dashes>=2&&ch==">"){state.tokenize=tokenBase;break;}
dashes=(ch=="-")?dashes+1:0;}
return ret("comment","comment");}
function tokenString(quote){return function(stream,state){var escaped=false,ch;while((ch=stream.next())!=null){if(ch==quote&&!escaped)
break;escaped=!escaped&&ch=="\\";}
if(!escaped)state.tokenize=tokenBase;return ret("string","string");};}
return{startState:function(base){return{tokenize:tokenBase,baseIndent:base||0,stack:[]};},token:function(stream,state){if(stream.eatSpace())return null;type=null;var style=state.tokenize(stream,state);var context=state.stack[state.stack.length-1];if(type=="hash"&&context=="rule")style="atom";else if(style=="variable"){if(context=="rule")style="number";else if(!context||context=="@media{")style="tag";}
if(context=="rule"&&/^[\{\};]$/.test(type))
state.stack.pop();if(type=="{"){if(context=="@media")state.stack[state.stack.length-1]="@media{";else state.stack.push("{");}
else if(type=="}")state.stack.pop();else if(type=="@media")state.stack.push("@media");else if(context=="{"&&type!="comment")state.stack.push("rule");return style;},indent:function(state,textAfter){var n=state.stack.length;if(/^\}/.test(textAfter))
n-=state.stack[state.stack.length-1]=="rule"?2:1;return state.baseIndent+n*indentUnit;},electricChars:"}"};});CodeMirror.defineMIME("text/x-nginx-conf","nginx");});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("perl",function(){var PERL={'->':4,'++':4,'--':4,'**':4,'=~':4,'!~':4,'*':4,'/':4,'%':4,'x':4,'+':4,'-':4,'.':4,'<<':4,'>>':4,'<':4,'>':4,'<=':4,'>=':4,'lt':4,'gt':4,'le':4,'ge':4,'==':4,'!=':4,'<=>':4,'eq':4,'ne':4,'cmp':4,'~~':4,'&':4,'|':4,'^':4,'&&':4,'||':4,'//':4,'..':4,'...':4,'?':4,':':4,'=':4,'+=':4,'-=':4,'*=':4,',':4,'=>':4,'::':4,'not':4,'and':4,'or':4,'xor':4,'BEGIN':[5,1],'END':[5,1],'PRINT':[5,1],'PRINTF':[5,1],'GETC':[5,1],'READ':[5,1],'READLINE':[5,1],'DESTROY':[5,1],'TIE':[5,1],'TIEHANDLE':[5,1],'UNTIE':[5,1],'STDIN':5,'STDIN_TOP':5,'STDOUT':5,'STDOUT_TOP':5,'STDERR':5,'STDERR_TOP':5,'$ARG':5,'$_':5,'@ARG':5,'@_':5,'$LIST_SEPARATOR':5,'$"':5,'$PROCESS_ID':5,'$PID':5,'$$':5,'$REAL_GROUP_ID':5,'$GID':5,'$(':5,'$EFFECTIVE_GROUP_ID':5,'$EGID':5,'$)':5,'$PROGRAM_NAME':5,'$0':5,'$SUBSCRIPT_SEPARATOR':5,'$SUBSEP':5,'$;':5,'$REAL_USER_ID':5,'$UID':5,'$<':5,'$EFFECTIVE_USER_ID':5,'$EUID':5,'$>':5,'$a':5,'$b':5,'$COMPILING':5,'$^C':5,'$DEBUGGING':5,'$^D':5,'${^ENCODING}':5,'$ENV':5,'%ENV':5,'$SYSTEM_FD_MAX':5,'$^F':5,'@F':5,'${^GLOBAL_PHASE}':5,'$^H':5,'%^H':5,'@INC':5,'%INC':5,'$INPLACE_EDIT':5,'$^I':5,'$^M':5,'$OSNAME':5,'$^O':5,'${^OPEN}':5,'$PERLDB':5,'$^P':5,'$SIG':5,'%SIG':5,'$BASETIME':5,'$^T':5,'${^TAINT}':5,'${^UNICODE}':5,'${^UTF8CACHE}':5,'${^UTF8LOCALE}':5,'$PERL_VERSION':5,'$^V':5,'${^WIN32_SLOPPY_STAT}':5,'$EXECUTABLE_NAME':5,'$^X':5,'$1':5,'$MATCH':5,'$&':5,'${^MATCH}':5,'$PREMATCH':5,'$`':5,'${^PREMATCH}':5,'$POSTMATCH':5,"$'":5,'${^POSTMATCH}':5,'$LAST_PAREN_MATCH':5,'$+':5,'$LAST_SUBMATCH_RESULT':5,'$^N':5,'@LAST_MATCH_END':5,'@+':5,'%LAST_PAREN_MATCH':5,'%+':5,'@LAST_MATCH_START':5,'@-':5,'%LAST_MATCH_START':5,'%-':5,'$LAST_REGEXP_CODE_RESULT':5,'$^R':5,'${^RE_DEBUG_FLAGS}':5,'${^RE_TRIE_MAXBUF}':5,'$ARGV':5,'@ARGV':5,'ARGV':5,'ARGVOUT':5,'$OUTPUT_FIELD_SEPARATOR':5,'$OFS':5,'$,':5,'$INPUT_LINE_NUMBER':5,'$NR':5,'$.':5,'$INPUT_RECORD_SEPARATOR':5,'$RS':5,'$/':5,'$OUTPUT_RECORD_SEPARATOR':5,'$ORS':5,'$\\':5,'$OUTPUT_AUTOFLUSH':5,'$|':5,'$ACCUMULATOR':5,'$^A':5,'$FORMAT_FORMFEED':5,'$^L':5,'$FORMAT_PAGE_NUMBER':5,'$%':5,'$FORMAT_LINES_LEFT':5,'$-':5,'$FORMAT_LINE_BREAK_CHARACTERS':5,'$:':5,'$FORMAT_LINES_PER_PAGE':5,'$=':5,'$FORMAT_TOP_NAME':5,'$^':5,'$FORMAT_NAME':5,'$~':5,'${^CHILD_ERROR_NATIVE}':5,'$EXTENDED_OS_ERROR':5,'$^E':5,'$EXCEPTIONS_BEING_CAUGHT':5,'$^S':5,'$WARNING':5,'$^W':5,'${^WARNING_BITS}':5,'$OS_ERROR':5,'$ERRNO':5,'$!':5,'%OS_ERROR':5,'%ERRNO':5,'%!':5,'$CHILD_ERROR':5,'$?':5,'$EVAL_ERROR':5,'$@':5,'$OFMT':5,'$#':5,'$*':5,'$ARRAY_BASE':5,'$[':5,'$OLD_PERL_VERSION':5,'$]':5,'if':[1,1],elsif:[1,1],'else':[1,1],'while':[1,1],unless:[1,1],'for':[1,1],foreach:[1,1],'abs':1,accept:1,alarm:1,'atan2':1,bind:1,binmode:1,bless:1,bootstrap:1,'break':1,caller:1,chdir:1,chmod:1,chomp:1,chop:1,chown:1,chr:1,chroot:1,close:1,closedir:1,connect:1,'continue':[1,1],'cos':1,crypt:1,dbmclose:1,dbmopen:1,'default':1,defined:1,'delete':1,die:1,'do':1,dump:1,each:1,endgrent:1,endhostent:1,endnetent:1,endprotoent:1,endpwent:1,endservent:1,eof:1,'eval':1,'exec':1,exists:1,exit:1,'exp':1,fcntl:1,fileno:1,flock:1,fork:1,format:1,formline:1,getc:1,getgrent:1,getgrgid:1,getgrnam:1,gethostbyaddr:1,gethostbyname:1,gethostent:1,getlogin:1,getnetbyaddr:1,getnetbyname:1,getnetent:1,getpeername:1,getpgrp:1,getppid:1,getpriority:1,getprotobyname:1,getprotobynumber:1,getprotoent:1,getpwent:1,getpwnam:1,getpwuid:1,getservbyname:1,getservbyport:1,getservent:1,getsockname:1,getsockopt:1,given:1,glob:1,gmtime:1,'goto':1,grep:1,hex:1,'import':1,index:1,'int':1,ioctl:1,'join':1,keys:1,kill:1,last:1,lc:1,lcfirst:1,length:1,'link':1,listen:1,local:2,localtime:1,lock:1,'log':1,lstat:1,m:null,map:1,mkdir:1,msgctl:1,msgget:1,msgrcv:1,msgsnd:1,my:2,'new':1,next:1,no:1,oct:1,open:1,opendir:1,ord:1,our:2,pack:1,'package':1,pipe:1,pop:1,pos:1,print:1,printf:1,prototype:1,push:1,q:null,qq:null,qr:null,quotemeta:null,qw:null,qx:null,rand:1,read:1,readdir:1,readline:1,readlink:1,readpipe:1,recv:1,redo:1,ref:1,rename:1,require:1,reset:1,'return':1,reverse:1,rewinddir:1,rindex:1,rmdir:1,s:null,say:1,scalar:1,seek:1,seekdir:1,select:1,semctl:1,semget:1,semop:1,send:1,setgrent:1,sethostent:1,setnetent:1,setpgrp:1,setpriority:1,setprotoent:1,setpwent:1,setservent:1,setsockopt:1,shift:1,shmctl:1,shmget:1,shmread:1,shmwrite:1,shutdown:1,'sin':1,sleep:1,socket:1,socketpair:1,'sort':1,splice:1,'split':1,sprintf:1,'sqrt':1,srand:1,stat:1,state:1,study:1,'sub':1,'substr':1,symlink:1,syscall:1,sysopen:1,sysread:1,sysseek:1,system:1,syswrite:1,tell:1,telldir:1,tie:1,tied:1,time:1,times:1,tr:null,truncate:1,uc:1,ucfirst:1,umask:1,undef:1,unlink:1,unpack:1,unshift:1,untie:1,use:1,utime:1,values:1,vec:1,wait:1,waitpid:1,wantarray:1,warn:1,when:1,write:1,y:null};var RXstyle="string-2";var RXmodifiers=/[goseximacplud]/;function tokenChain(stream,state,chain,style,tail){state.chain=null;state.style=null;state.tail=null;state.tokenize=function(stream,state){var e=false,c,i=0;while(c=stream.next()){if(c===chain[i]&&!e){if(chain[++i]!==undefined){state.chain=chain[i];state.style=style;state.tail=tail;}
else if(tail)
stream.eatWhile(tail);state.tokenize=tokenPerl;return style;}
e=!e&&c=="\\";}
return style;};return state.tokenize(stream,state);}
function tokenSOMETHING(stream,state,string){state.tokenize=function(stream,state){if(stream.string==string)
state.tokenize=tokenPerl;stream.skipToEnd();return"string";};return state.tokenize(stream,state);}
function tokenPerl(stream,state){if(stream.eatSpace())
return null;if(state.chain)
return tokenChain(stream,state,state.chain,state.style,state.tail);if(stream.match(/^\-?[\d\.]/,false))
if(stream.match(/^(\-?(\d*\.\d+(e[+-]?\d+)?|\d+\.\d*)|0x[\da-fA-F]+|0b[01]+|\d+(e[+-]?\d+)?)/))
return'number';if(stream.match(/^<<(?=\w)/)){stream.eatWhile(/\w/);return tokenSOMETHING(stream,state,stream.current().substr(2));}
if(stream.sol()&&stream.match(/^\=item(?!\w)/)){return tokenSOMETHING(stream,state,'=cut');}
var ch=stream.next();if(ch=='"'||ch=="'"){if(prefix(stream,3)=="<<"+ch){var p=stream.pos;stream.eatWhile(/\w/);var n=stream.current().substr(1);if(n&&stream.eat(ch))
return tokenSOMETHING(stream,state,n);stream.pos=p;}
return tokenChain(stream,state,[ch],"string");}
if(ch=="q"){var c=look(stream,-2);if(!(c&&/\w/.test(c))){c=look(stream,0);if(c=="x"){c=look(stream,1);if(c=="("){eatSuffix(stream,2);return tokenChain(stream,state,[")"],RXstyle,RXmodifiers);}
if(c=="["){eatSuffix(stream,2);return tokenChain(stream,state,["]"],RXstyle,RXmodifiers);}
if(c=="{"){eatSuffix(stream,2);return tokenChain(stream,state,["}"],RXstyle,RXmodifiers);}
if(c=="<"){eatSuffix(stream,2);return tokenChain(stream,state,[">"],RXstyle,RXmodifiers);}
if(/[\^'"!~\/]/.test(c)){eatSuffix(stream,1);return tokenChain(stream,state,[stream.eat(c)],RXstyle,RXmodifiers);}}
else if(c=="q"){c=look(stream,1);if(c=="("){eatSuffix(stream,2);return tokenChain(stream,state,[")"],"string");}
if(c=="["){eatSuffix(stream,2);return tokenChain(stream,state,["]"],"string");}
if(c=="{"){eatSuffix(stream,2);return tokenChain(stream,state,["}"],"string");}
if(c=="<"){eatSuffix(stream,2);return tokenChain(stream,state,[">"],"string");}
if(/[\^'"!~\/]/.test(c)){eatSuffix(stream,1);return tokenChain(stream,state,[stream.eat(c)],"string");}}
else if(c=="w"){c=look(stream,1);if(c=="("){eatSuffix(stream,2);return tokenChain(stream,state,[")"],"bracket");}
if(c=="["){eatSuffix(stream,2);return tokenChain(stream,state,["]"],"bracket");}
if(c=="{"){eatSuffix(stream,2);return tokenChain(stream,state,["}"],"bracket");}
if(c=="<"){eatSuffix(stream,2);return tokenChain(stream,state,[">"],"bracket");}
if(/[\^'"!~\/]/.test(c)){eatSuffix(stream,1);return tokenChain(stream,state,[stream.eat(c)],"bracket");}}
else if(c=="r"){c=look(stream,1);if(c=="("){eatSuffix(stream,2);return tokenChain(stream,state,[")"],RXstyle,RXmodifiers);}
if(c=="["){eatSuffix(stream,2);return tokenChain(stream,state,["]"],RXstyle,RXmodifiers);}
if(c=="{"){eatSuffix(stream,2);return tokenChain(stream,state,["}"],RXstyle,RXmodifiers);}
if(c=="<"){eatSuffix(stream,2);return tokenChain(stream,state,[">"],RXstyle,RXmodifiers);}
if(/[\^'"!~\/]/.test(c)){eatSuffix(stream,1);return tokenChain(stream,state,[stream.eat(c)],RXstyle,RXmodifiers);}}
else if(/[\^'"!~\/(\[{<]/.test(c)){if(c=="("){eatSuffix(stream,1);return tokenChain(stream,state,[")"],"string");}
if(c=="["){eatSuffix(stream,1);return tokenChain(stream,state,["]"],"string");}
if(c=="{"){eatSuffix(stream,1);return tokenChain(stream,state,["}"],"string");}
if(c=="<"){eatSuffix(stream,1);return tokenChain(stream,state,[">"],"string");}
if(/[\^'"!~\/]/.test(c)){return tokenChain(stream,state,[stream.eat(c)],"string");}}}}
if(ch=="m"){var c=look(stream,-2);if(!(c&&/\w/.test(c))){c=stream.eat(/[(\[{<\^'"!~\/]/);if(c){if(/[\^'"!~\/]/.test(c)){return tokenChain(stream,state,[c],RXstyle,RXmodifiers);}
if(c=="("){return tokenChain(stream,state,[")"],RXstyle,RXmodifiers);}
if(c=="["){return tokenChain(stream,state,["]"],RXstyle,RXmodifiers);}
if(c=="{"){return tokenChain(stream,state,["}"],RXstyle,RXmodifiers);}
if(c=="<"){return tokenChain(stream,state,[">"],RXstyle,RXmodifiers);}}}}
if(ch=="s"){var c=/[\/>\]})\w]/.test(look(stream,-2));if(!c){c=stream.eat(/[(\[{<\^'"!~\/]/);if(c){if(c=="[")
return tokenChain(stream,state,["]","]"],RXstyle,RXmodifiers);if(c=="{")
return tokenChain(stream,state,["}","}"],RXstyle,RXmodifiers);if(c=="<")
return tokenChain(stream,state,[">",">"],RXstyle,RXmodifiers);if(c=="(")
return tokenChain(stream,state,[")",")"],RXstyle,RXmodifiers);return tokenChain(stream,state,[c,c],RXstyle,RXmodifiers);}}}
if(ch=="y"){var c=/[\/>\]})\w]/.test(look(stream,-2));if(!c){c=stream.eat(/[(\[{<\^'"!~\/]/);if(c){if(c=="[")
return tokenChain(stream,state,["]","]"],RXstyle,RXmodifiers);if(c=="{")
return tokenChain(stream,state,["}","}"],RXstyle,RXmodifiers);if(c=="<")
return tokenChain(stream,state,[">",">"],RXstyle,RXmodifiers);if(c=="(")
return tokenChain(stream,state,[")",")"],RXstyle,RXmodifiers);return tokenChain(stream,state,[c,c],RXstyle,RXmodifiers);}}}
if(ch=="t"){var c=/[\/>\]})\w]/.test(look(stream,-2));if(!c){c=stream.eat("r");if(c){c=stream.eat(/[(\[{<\^'"!~\/]/);if(c){if(c=="[")
return tokenChain(stream,state,["]","]"],RXstyle,RXmodifiers);if(c=="{")
return tokenChain(stream,state,["}","}"],RXstyle,RXmodifiers);if(c=="<")
return tokenChain(stream,state,[">",">"],RXstyle,RXmodifiers);if(c=="(")
return tokenChain(stream,state,[")",")"],RXstyle,RXmodifiers);return tokenChain(stream,state,[c,c],RXstyle,RXmodifiers);}}}}
if(ch=="`"){return tokenChain(stream,state,[ch],"variable-2");}
if(ch=="/"){if(!/~\s*$/.test(prefix(stream)))
return"operator";else
return tokenChain(stream,state,[ch],RXstyle,RXmodifiers);}
if(ch=="$"){var p=stream.pos;if(stream.eatWhile(/\d/)||stream.eat("{")&&stream.eatWhile(/\d/)&&stream.eat("}"))
return"variable-2";else
stream.pos=p;}
if(/[$@%]/.test(ch)){var p=stream.pos;if(stream.eat("^")&&stream.eat(/[A-Z]/)||!/[@$%&]/.test(look(stream,-2))&&stream.eat(/[=|\\\-#?@;:&`~\^!\[\]*'"$+.,\/<>()]/)){var c=stream.current();if(PERL[c])
return"variable-2";}
stream.pos=p;}
if(/[$@%&]/.test(ch)){if(stream.eatWhile(/[\w$\[\]]/)||stream.eat("{")&&stream.eatWhile(/[\w$\[\]]/)&&stream.eat("}")){var c=stream.current();if(PERL[c])
return"variable-2";else
return"variable";}}
if(ch=="#"){if(look(stream,-2)!="$"){stream.skipToEnd();return"comment";}}
if(/[:+\-\^*$&%@=<>!?|\/~\.]/.test(ch)){var p=stream.pos;stream.eatWhile(/[:+\-\^*$&%@=<>!?|\/~\.]/);if(PERL[stream.current()])
return"operator";else
stream.pos=p;}
if(ch=="_"){if(stream.pos==1){if(suffix(stream,6)=="_END__"){return tokenChain(stream,state,['\0'],"comment");}
else if(suffix(stream,7)=="_DATA__"){return tokenChain(stream,state,['\0'],"variable-2");}
else if(suffix(stream,7)=="_C__"){return tokenChain(stream,state,['\0'],"string");}}}
if(/\w/.test(ch)){var p=stream.pos;if(look(stream,-2)=="{"&&(look(stream,0)=="}"||stream.eatWhile(/\w/)&&look(stream,0)=="}"))
return"string";else
stream.pos=p;}
if(/[A-Z]/.test(ch)){var l=look(stream,-2);var p=stream.pos;stream.eatWhile(/[A-Z_]/);if(/[\da-z]/.test(look(stream,0))){stream.pos=p;}
else{var c=PERL[stream.current()];if(!c)
return"meta";if(c[1])
c=c[0];if(l!=":"){if(c==1)
return"keyword";else if(c==2)
return"def";else if(c==3)
return"atom";else if(c==4)
return"operator";else if(c==5)
return"variable-2";else
return"meta";}
else
return"meta";}}
if(/[a-zA-Z_]/.test(ch)){var l=look(stream,-2);stream.eatWhile(/\w/);var c=PERL[stream.current()];if(!c)
return"meta";if(c[1])
c=c[0];if(l!=":"){if(c==1)
return"keyword";else if(c==2)
return"def";else if(c==3)
return"atom";else if(c==4)
return"operator";else if(c==5)
return"variable-2";else
return"meta";}
else
return"meta";}
return null;}
return{startState:function(){return{tokenize:tokenPerl,chain:null,style:null,tail:null};},token:function(stream,state){return(state.tokenize||tokenPerl)(stream,state);},lineComment:'#'};});CodeMirror.registerHelper("wordChars","perl",/[\w$]/);CodeMirror.defineMIME("text/x-perl","perl");function look(stream,c){return stream.string.charAt(stream.pos+(c||0));}
function prefix(stream,c){if(c){var x=stream.pos-c;return stream.string.substr((x>=0?x:0),c);}
else{return stream.string.substr(0,stream.pos-1);}}
function suffix(stream,c){var y=stream.string.length;var x=y-stream.pos+1;return stream.string.substr(stream.pos,(c&&c<y?c:x));}
function eatSuffix(stream,c){var x=stream.pos+c;var y;if(x<=0)
stream.pos=0;else if(x>=(y=stream.string.length-1))
stream.pos=y;else
stream.pos=x;}});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../clike/clike"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror","../htmlmixed/htmlmixed","../clike/clike"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";function keywords(str){var obj={},words=str.split(" ");for(var i=0;i<words.length;++i)obj[words[i]]=true;return obj;}
function matchSequence(list,end,escapes){if(list.length==0)return phpString(end);return function(stream,state){var patterns=list[0];for(var i=0;i<patterns.length;i++)if(stream.match(patterns[i][0])){state.tokenize=matchSequence(list.slice(1),end);return patterns[i][1];}
state.tokenize=phpString(end,escapes);return"string";};}
function phpString(closing,escapes){return function(stream,state){return phpString_(stream,state,closing,escapes);};}
function phpString_(stream,state,closing,escapes){if(escapes!==false&&stream.match("${",false)||stream.match("{$",false)){state.tokenize=null;return"string";}
if(escapes!==false&&stream.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/)){if(stream.match("[",false)){state.tokenize=matchSequence([[["[",null]],[[/\d[\w\.]*/,"number"],[/\$[a-zA-Z_][a-zA-Z0-9_]*/,"variable-2"],[/[\w\$]+/,"variable"]],[["]",null]]],closing,escapes);}
if(stream.match(/\-\>\w/,false)){state.tokenize=matchSequence([[["->",null]],[[/[\w]+/,"variable"]]],closing,escapes);}
return"variable-2";}
var escaped=false;while(!stream.eol()&&(escaped||escapes===false||(!stream.match("{$",false)&&!stream.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/,false)))){if(!escaped&&stream.match(closing)){state.tokenize=null;state.tokStack.pop();state.tokStack.pop();break;}
escaped=stream.next()=="\\"&&!escaped;}
return"string";}
var phpKeywords="abstract and array as break case catch class clone const continue declare default "+
"do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final "+
"for foreach function global goto if implements interface instanceof namespace "+
"new or private protected public static switch throw trait try use var while xor "+
"die echo empty exit eval include include_once isset list require require_once return "+
"print unset __halt_compiler self static parent yield insteadof finally";var phpAtoms="true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__";var phpBuiltin="func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count";CodeMirror.registerHelper("hintWords","php",[phpKeywords,phpAtoms,phpBuiltin].join(" ").split(" "));CodeMirror.registerHelper("wordChars","php",/[\w$]/);var phpConfig={name:"clike",helperType:"php",keywords:keywords(phpKeywords),blockKeywords:keywords("catch do else elseif for foreach if switch try while finally"),defKeywords:keywords("class function interface namespace trait"),atoms:keywords(phpAtoms),builtin:keywords(phpBuiltin),multiLineStrings:true,hooks:{"$":function(stream){stream.eatWhile(/[\w\$_]/);return"variable-2";},"<":function(stream,state){var before;if(before=stream.match(/<<\s*/)){var quoted=stream.eat(/['"]/);stream.eatWhile(/[\w\.]/);var delim=stream.current().slice(before[0].length+(quoted?2:1));if(quoted)stream.eat(quoted);if(delim){(state.tokStack||(state.tokStack=[])).push(delim,0);state.tokenize=phpString(delim,quoted!="'");return"string";}}
return false;},"#":function(stream){while(!stream.eol()&&!stream.match("?>",false))stream.next();return"comment";},"/":function(stream){if(stream.eat("/")){while(!stream.eol()&&!stream.match("?>",false))stream.next();return"comment";}
return false;},'"':function(_stream,state){(state.tokStack||(state.tokStack=[])).push('"',0);state.tokenize=phpString('"');return"string";},"{":function(_stream,state){if(state.tokStack&&state.tokStack.length)
state.tokStack[state.tokStack.length-1]++;return false;},"}":function(_stream,state){if(state.tokStack&&state.tokStack.length>0&&!--state.tokStack[state.tokStack.length-1]){state.tokenize=phpString(state.tokStack[state.tokStack.length-2]);}
return false;}}};CodeMirror.defineMode("php",function(config,parserConfig){var htmlMode=CodeMirror.getMode(config,(parserConfig&&parserConfig.htmlMode)||"text/html");var phpMode=CodeMirror.getMode(config,phpConfig);function dispatch(stream,state){var isPHP=state.curMode==phpMode;if(stream.sol()&&state.pending&&state.pending!='"'&&state.pending!="'")state.pending=null;if(!isPHP){if(stream.match(/^<\?\w*/)){state.curMode=phpMode;if(!state.php)state.php=CodeMirror.startState(phpMode,htmlMode.indent(state.html,""))
state.curState=state.php;return"meta";}
if(state.pending=='"'||state.pending=="'"){while(!stream.eol()&&stream.next()!=state.pending){}
var style="string";}else if(state.pending&&stream.pos<state.pending.end){stream.pos=state.pending.end;var style=state.pending.style;}else{var style=htmlMode.token(stream,state.curState);}
if(state.pending)state.pending=null;var cur=stream.current(),openPHP=cur.search(/<\?/),m;if(openPHP!=-1){if(style=="string"&&(m=cur.match(/[\'\"]$/))&&!/\?>/.test(cur))state.pending=m[0];else state.pending={end:stream.pos,style:style};stream.backUp(cur.length-openPHP);}
return style;}else if(isPHP&&state.php.tokenize==null&&stream.match("?>")){state.curMode=htmlMode;state.curState=state.html;if(!state.php.context.prev)state.php=null;return"meta";}else{return phpMode.token(stream,state.curState);}}
return{startState:function(){var html=CodeMirror.startState(htmlMode)
var php=parserConfig.startOpen?CodeMirror.startState(phpMode):null
return{html:html,php:php,curMode:parserConfig.startOpen?phpMode:htmlMode,curState:parserConfig.startOpen?php:html,pending:null};},copyState:function(state){var html=state.html,htmlNew=CodeMirror.copyState(htmlMode,html),php=state.php,phpNew=php&&CodeMirror.copyState(phpMode,php),cur;if(state.curMode==htmlMode)cur=htmlNew;else cur=phpNew;return{html:htmlNew,php:phpNew,curMode:state.curMode,curState:cur,pending:state.pending};},token:dispatch,indent:function(state,textAfter){if((state.curMode!=phpMode&&/^\s*<\//.test(textAfter))||(state.curMode==phpMode&&/^\?>/.test(textAfter)))
return htmlMode.indent(state.html,textAfter);return state.curMode.indent(state.curState,textAfter);},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",innerMode:function(state){return{state:state.curState,mode:state.curMode};}};},"htmlmixed","clike");CodeMirror.defineMIME("application/x-httpd-php","php");CodeMirror.defineMIME("application/x-httpd-php-open",{name:"php",startOpen:true});CodeMirror.defineMIME("text/x-php",phpConfig);});(function(mod){'use strict';if(typeof exports=='object'&&typeof module=='object')
mod(require('../../lib/codemirror'));else if(typeof define=='function'&&define.amd)
define(['../../lib/codemirror'],mod);else
mod(window.CodeMirror);})(function(CodeMirror){'use strict';CodeMirror.defineMode('powershell',function(){function buildRegexp(patterns,options){options=options||{};var prefix=options.prefix!==undefined?options.prefix:'^';var suffix=options.suffix!==undefined?options.suffix:'\\b';for(var i=0;i<patterns.length;i++){if(patterns[i]instanceof RegExp){patterns[i]=patterns[i].source;}
else{patterns[i]=patterns[i].replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}}
return new RegExp(prefix+'('+patterns.join('|')+')'+suffix,'i');}
var notCharacterOrDash='(?=[^A-Za-z\\d\\-_]|$)';var varNames=/[\w\-:]/
var keywords=buildRegexp([/begin|break|catch|continue|data|default|do|dynamicparam/,/else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,/param|process|return|switch|throw|trap|try|until|where|while/],{suffix:notCharacterOrDash});var punctuation=/[\[\]{},;`\.]|@[({]/;var wordOperators=buildRegexp(['f',/b?not/,/[ic]?split/,'join',/is(not)?/,'as',/[ic]?(eq|ne|[gl][te])/,/[ic]?(not)?(like|match|contains)/,/[ic]?replace/,/b?(and|or|xor)/],{prefix:'-'});var symbolOperators=/[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/;var operators=buildRegexp([wordOperators,symbolOperators],{suffix:''});var numbers=/^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i;var identifiers=/^[A-Za-z\_][A-Za-z\-\_\d]*\b/;var symbolBuiltins=/[A-Z]:|%|\?/i;var namedBuiltins=buildRegexp([/Add-(Computer|Content|History|Member|PSSnapin|Type)/,/Checkpoint-Computer/,/Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,/Compare-Object/,/Complete-Transaction/,/Connect-PSSession/,/ConvertFrom-(Csv|Json|SecureString|StringData)/,/Convert-Path/,/ConvertTo-(Csv|Html|Json|SecureString|Xml)/,/Copy-Item(Property)?/,/Debug-Process/,/Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/Disconnect-PSSession/,/Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/(Enter|Exit)-PSSession/,/Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,/ForEach-Object/,/Format-(Custom|List|Table|Wide)/,new RegExp('Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential'
+'|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job'
+'|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration'
+'|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)'),/Group-Object/,/Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,/ImportSystemModules/,/Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,/Join-Path/,/Limit-EventLog/,/Measure-(Command|Object)/,/Move-Item(Property)?/,new RegExp('New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile'
+'|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)'),/Out-(Default|File|GridView|Host|Null|Printer|String)/,/Pause/,/(Pop|Push)-Location/,/Read-Host/,/Receive-(Job|PSSession)/,/Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,/Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,/Rename-(Computer|Item(Property)?)/,/Reset-ComputerMachinePassword/,/Resolve-Path/,/Restart-(Computer|Service)/,/Restore-Computer/,/Resume-(Job|Service)/,/Save-Help/,/Select-(Object|String|Xml)/,/Send-MailMessage/,new RegExp('Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug'+
'|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)'),/Show-(Command|ControlPanelItem|EventLog)/,/Sort-Object/,/Split-Path/,/Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,/Stop-(Computer|Job|Process|Service|Transcript)/,/Suspend-(Job|Service)/,/TabExpansion2/,/Tee-Object/,/Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,/Trace-Command/,/Unblock-File/,/Undo-Transaction/,/Unregister-(Event|PSSessionConfiguration)/,/Update-(FormatData|Help|List|TypeData)/,/Use-Transaction/,/Wait-(Event|Job|Process)/,/Where-Object/,/Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,/cd|help|mkdir|more|oss|prompt/,/ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,/echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,/group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,/measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,/rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,/sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/],{prefix:'',suffix:''});var variableBuiltins=buildRegexp([/[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,/FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,/MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,/PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,/PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,/WarningPreference|WhatIfPreference/,/Event|EventArgs|EventSubscriber|Sender/,/Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,/true|false|null/],{prefix:'\\$',suffix:''});var builtins=buildRegexp([symbolBuiltins,namedBuiltins,variableBuiltins],{suffix:notCharacterOrDash});var grammar={keyword:keywords,number:numbers,operator:operators,builtin:builtins,punctuation:punctuation,identifier:identifiers};function tokenBase(stream,state){var parent=state.returnStack[state.returnStack.length-1];if(parent&&parent.shouldReturnFrom(state)){state.tokenize=parent.tokenize;state.returnStack.pop();return state.tokenize(stream,state);}
if(stream.eatSpace()){return null;}
if(stream.eat('(')){state.bracketNesting+=1;return'punctuation';}
if(stream.eat(')')){state.bracketNesting-=1;return'punctuation';}
for(var key in grammar){if(stream.match(grammar[key])){return key;}}
var ch=stream.next();if(ch==="'"){return tokenSingleQuoteString(stream,state);}
if(ch==='$'){return tokenVariable(stream,state);}
if(ch==='"'){return tokenDoubleQuoteString(stream,state);}
if(ch==='<'&&stream.eat('#')){state.tokenize=tokenComment;return tokenComment(stream,state);}
if(ch==='#'){stream.skipToEnd();return'comment';}
if(ch==='@'){var quoteMatch=stream.eat(/["']/);if(quoteMatch&&stream.eol()){state.tokenize=tokenMultiString;state.startQuote=quoteMatch[0];return tokenMultiString(stream,state);}else if(stream.eol()){return'error';}else if(stream.peek().match(/[({]/)){return'punctuation';}else if(stream.peek().match(varNames)){return tokenVariable(stream,state);}}
return'error';}
function tokenSingleQuoteString(stream,state){var ch;while((ch=stream.peek())!=null){stream.next();if(ch==="'"&&!stream.eat("'")){state.tokenize=tokenBase;return'string';}}
return'error';}
function tokenDoubleQuoteString(stream,state){var ch;while((ch=stream.peek())!=null){if(ch==='$'){state.tokenize=tokenStringInterpolation;return'string';}
stream.next();if(ch==='`'){stream.next();continue;}
if(ch==='"'&&!stream.eat('"')){state.tokenize=tokenBase;return'string';}}
return'error';}
function tokenStringInterpolation(stream,state){return tokenInterpolation(stream,state,tokenDoubleQuoteString);}
function tokenMultiStringReturn(stream,state){state.tokenize=tokenMultiString;state.startQuote='"'
return tokenMultiString(stream,state);}
function tokenHereStringInterpolation(stream,state){return tokenInterpolation(stream,state,tokenMultiStringReturn);}
function tokenInterpolation(stream,state,parentTokenize){if(stream.match('$(')){var savedBracketNesting=state.bracketNesting;state.returnStack.push({shouldReturnFrom:function(state){return state.bracketNesting===savedBracketNesting;},tokenize:parentTokenize});state.tokenize=tokenBase;state.bracketNesting+=1;return'punctuation';}else{stream.next();state.returnStack.push({shouldReturnFrom:function(){return true;},tokenize:parentTokenize});state.tokenize=tokenVariable;return state.tokenize(stream,state);}}
function tokenComment(stream,state){var maybeEnd=false,ch;while((ch=stream.next())!=null){if(maybeEnd&&ch=='>'){state.tokenize=tokenBase;break;}
maybeEnd=(ch==='#');}
return'comment';}
function tokenVariable(stream,state){var ch=stream.peek();if(stream.eat('{')){state.tokenize=tokenVariableWithBraces;return tokenVariableWithBraces(stream,state);}else if(ch!=undefined&&ch.match(varNames)){stream.eatWhile(varNames);state.tokenize=tokenBase;return'variable-2';}else{state.tokenize=tokenBase;return'error';}}
function tokenVariableWithBraces(stream,state){var ch;while((ch=stream.next())!=null){if(ch==='}'){state.tokenize=tokenBase;break;}}
return'variable-2';}
function tokenMultiString(stream,state){var quote=state.startQuote;if(stream.sol()&&stream.match(new RegExp(quote+'@'))){state.tokenize=tokenBase;}
else if(quote==='"'){while(!stream.eol()){var ch=stream.peek();if(ch==='$'){state.tokenize=tokenHereStringInterpolation;return'string';}
stream.next();if(ch==='`'){stream.next();}}}
else{stream.skipToEnd();}
return'string';}
var external={startState:function(){return{returnStack:[],bracketNesting:0,tokenize:tokenBase};},token:function(stream,state){return state.tokenize(stream,state);},blockCommentStart:'<#',blockCommentEnd:'#>',lineComment:'#',fold:'brace'};return external;});CodeMirror.defineMIME('application/x-powershell','powershell');});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";function wordRegexp(words){return new RegExp("^(("+words.join(")|(")+"))\\b");}
var wordOperators=wordRegexp(["and","or","not","is"]);var commonKeywords=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"];var commonBuiltins=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];CodeMirror.registerHelper("hintWords","python",commonKeywords.concat(commonBuiltins));function top(state){return state.scopes[state.scopes.length-1];}
CodeMirror.defineMode("python",function(conf,parserConf){var ERRORCLASS="error";var delimiters=parserConf.delimiters||parserConf.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/;var operators=[parserConf.singleOperators,parserConf.doubleOperators,parserConf.doubleDelimiters,parserConf.tripleDelimiters,parserConf.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@])/]
for(var i=0;i<operators.length;i++)if(!operators[i])operators.splice(i--,1)
var hangingIndent=parserConf.hangingIndent||conf.indentUnit;var myKeywords=commonKeywords,myBuiltins=commonBuiltins;if(parserConf.extra_keywords!=undefined)
myKeywords=myKeywords.concat(parserConf.extra_keywords);if(parserConf.extra_builtins!=undefined)
myBuiltins=myBuiltins.concat(parserConf.extra_builtins);var py3=!(parserConf.version&&Number(parserConf.version)<3)
if(py3){var identifiers=parserConf.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;myKeywords=myKeywords.concat(["nonlocal","False","True","None","async","await"]);myBuiltins=myBuiltins.concat(["ascii","bytes","exec","print"]);var stringPrefixes=new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))","i");}else{var identifiers=parserConf.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;myKeywords=myKeywords.concat(["exec","print"]);myBuiltins=myBuiltins.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]);var stringPrefixes=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i");}
var keywords=wordRegexp(myKeywords);var builtins=wordRegexp(myBuiltins);function tokenBase(stream,state){var sol=stream.sol()&&state.lastToken!="\\"
if(sol)state.indent=stream.indentation()
if(sol&&top(state).type=="py"){var scopeOffset=top(state).offset;if(stream.eatSpace()){var lineOffset=stream.indentation();if(lineOffset>scopeOffset)
pushPyScope(state);else if(lineOffset<scopeOffset&&dedent(stream,state)&&stream.peek()!="#")
state.errorToken=true;return null;}else{var style=tokenBaseInner(stream,state);if(scopeOffset>0&&dedent(stream,state))
style+=" "+ERRORCLASS;return style;}}
return tokenBaseInner(stream,state);}
function tokenBaseInner(stream,state){if(stream.eatSpace())return null;if(stream.match(/^#.*/))return"comment";if(stream.match(/^[0-9\.]/,false)){var floatLiteral=false;if(stream.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)){floatLiteral=true;}
if(stream.match(/^[\d_]+\.\d*/)){floatLiteral=true;}
if(stream.match(/^\.\d+/)){floatLiteral=true;}
if(floatLiteral){stream.eat(/J/i);return"number";}
var intLiteral=false;if(stream.match(/^0x[0-9a-f_]+/i))intLiteral=true;if(stream.match(/^0b[01_]+/i))intLiteral=true;if(stream.match(/^0o[0-7_]+/i))intLiteral=true;if(stream.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)){stream.eat(/J/i);intLiteral=true;}
if(stream.match(/^0(?![\dx])/i))intLiteral=true;if(intLiteral){stream.eat(/L/i);return"number";}}
if(stream.match(stringPrefixes)){var isFmtString=stream.current().toLowerCase().indexOf('f')!==-1;if(!isFmtString){state.tokenize=tokenStringFactory(stream.current());return state.tokenize(stream,state);}else{state.tokenize=formatStringFactory(stream.current(),state.tokenize);return state.tokenize(stream,state);}}
for(var i=0;i<operators.length;i++)
if(stream.match(operators[i]))return"operator"
if(stream.match(delimiters))return"punctuation";if(state.lastToken=="."&&stream.match(identifiers))
return"property";if(stream.match(keywords)||stream.match(wordOperators))
return"keyword";if(stream.match(builtins))
return"builtin";if(stream.match(/^(self|cls)\b/))
return"variable-2";if(stream.match(identifiers)){if(state.lastToken=="def"||state.lastToken=="class")
return"def";return"variable";}
stream.next();return ERRORCLASS;}
function formatStringFactory(delimiter,tokenOuter){while("rubf".indexOf(delimiter.charAt(0).toLowerCase())>=0)
delimiter=delimiter.substr(1);var singleline=delimiter.length==1;var OUTCLASS="string";function tokenFString(stream,state){if(stream.match(delimiter)){state.tokenize=tokenString
return OUTCLASS;}else if(stream.match('{')){return"punctuation";}else if(stream.match('}')){state.tokenize=tokenString
return"punctuation";}else{return tokenBaseInner(stream,state);}}
function tokenString(stream,state){while(!stream.eol()){stream.eatWhile(/[^'"\{\}\\]/);if(stream.eat("\\")){stream.next();if(singleline&&stream.eol())
return OUTCLASS;}else if(stream.match(delimiter)){state.tokenize=tokenOuter;return OUTCLASS;}else if(stream.match('{{')){return OUTCLASS;}else if(stream.match('{',false)){state.tokenize=tokenFString
if(stream.current()){return OUTCLASS;}else{stream.next();return"punctuation";}}else if(stream.match('}}')){return OUTCLASS;}else if(stream.match('}')){return ERRORCLASS;}else{stream.eat(/['"]/);}}
if(singleline){if(parserConf.singleLineStringErrors)
return ERRORCLASS;else
state.tokenize=tokenOuter;}
return OUTCLASS;}
tokenString.isString=true;return tokenString;}
function tokenStringFactory(delimiter){while("rubf".indexOf(delimiter.charAt(0).toLowerCase())>=0)
delimiter=delimiter.substr(1);var singleline=delimiter.length==1;var OUTCLASS="string";function tokenString(stream,state){while(!stream.eol()){stream.eatWhile(/[^'"\\]/);if(stream.eat("\\")){stream.next();if(singleline&&stream.eol())
return OUTCLASS;}else if(stream.match(delimiter)){state.tokenize=tokenBase;return OUTCLASS;}else{stream.eat(/['"]/);}}
if(singleline){if(parserConf.singleLineStringErrors)
return ERRORCLASS;else
state.tokenize=tokenBase;}
return OUTCLASS;}
tokenString.isString=true;return tokenString;}
function pushPyScope(state){while(top(state).type!="py")state.scopes.pop()
state.scopes.push({offset:top(state).offset+conf.indentUnit,type:"py",align:null})}
function pushBracketScope(stream,state,type){var align=stream.match(/^([\s\[\{\(]|#.*)*$/,false)?null:stream.column()+1
state.scopes.push({offset:state.indent+hangingIndent,type:type,align:align})}
function dedent(stream,state){var indented=stream.indentation();while(state.scopes.length>1&&top(state).offset>indented){if(top(state).type!="py")return true;state.scopes.pop();}
return top(state).offset!=indented;}
function tokenLexer(stream,state){if(stream.sol())state.beginningOfLine=true;var style=state.tokenize(stream,state);var current=stream.current();if(state.beginningOfLine&&current=="@")
return stream.match(identifiers,false)?"meta":py3?"operator":ERRORCLASS;if(/\S/.test(current))state.beginningOfLine=false;if((style=="variable"||style=="builtin")&&state.lastToken=="meta")
style="meta";if(current=="pass"||current=="return")
state.dedent+=1;if(current=="lambda")state.lambda=true;if(current==":"&&!state.lambda&&top(state).type=="py")
pushPyScope(state);if(current.length==1&&!/string|comment/.test(style)){var delimiter_index="[({".indexOf(current);if(delimiter_index!=-1)
pushBracketScope(stream,state,"])}".slice(delimiter_index,delimiter_index+1));delimiter_index="])}".indexOf(current);if(delimiter_index!=-1){if(top(state).type==current)state.indent=state.scopes.pop().offset-hangingIndent
else return ERRORCLASS;}}
if(state.dedent>0&&stream.eol()&&top(state).type=="py"){if(state.scopes.length>1)state.scopes.pop();state.dedent-=1;}
return style;}
var external={startState:function(basecolumn){return{tokenize:tokenBase,scopes:[{offset:basecolumn||0,type:"py",align:null}],indent:basecolumn||0,lastToken:null,lambda:false,dedent:0};},token:function(stream,state){var addErr=state.errorToken;if(addErr)state.errorToken=false;var style=tokenLexer(stream,state);if(style&&style!="comment")
state.lastToken=(style=="keyword"||style=="punctuation")?stream.current():style;if(style=="punctuation")style=null;if(stream.eol()&&state.lambda)
state.lambda=false;return addErr?style+" "+ERRORCLASS:style;},indent:function(state,textAfter){if(state.tokenize!=tokenBase)
return state.tokenize.isString?CodeMirror.Pass:0;var scope=top(state),closing=scope.type==textAfter.charAt(0)
if(scope.align!=null)
return scope.align-(closing?1:0)
else
return scope.offset-(closing?hangingIndent:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"};return external;});CodeMirror.defineMIME("text/x-python","python");var words=function(str){return str.split(" ");};CodeMirror.defineMIME("text/x-cython",{name:"python",extra_keywords:words("by cdef cimport cpdef ctypedef enum except "+
"extern gil include nogil property public "+
"readonly struct union DEF IF ELIF ELSE")});});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("ruby",function(config){function wordObj(words){var o={};for(var i=0,e=words.length;i<e;++i)o[words[i]]=true;return o;}
var keywords=wordObj(["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"]);var indentWords=wordObj(["def","class","case","for","while","until","module","then","catch","loop","proc","begin"]);var dedentWords=wordObj(["end","until"]);var matching={"[":"]","{":"}","(":")"};var curPunc;function chain(newtok,stream,state){state.tokenize.push(newtok);return newtok(stream,state);}
function tokenBase(stream,state){if(stream.sol()&&stream.match("=begin")&&stream.eol()){state.tokenize.push(readBlockComment);return"comment";}
if(stream.eatSpace())return null;var ch=stream.next(),m;if(ch=="`"||ch=="'"||ch=='"'){return chain(readQuoted(ch,"string",ch=='"'||ch=="`"),stream,state);}else if(ch=="/"){if(regexpAhead(stream))
return chain(readQuoted(ch,"string-2",true),stream,state);else
return"operator";}else if(ch=="%"){var style="string",embed=true;if(stream.eat("s"))style="atom";else if(stream.eat(/[WQ]/))style="string";else if(stream.eat(/[r]/))style="string-2";else if(stream.eat(/[wxq]/)){style="string";embed=false;}
var delim=stream.eat(/[^\w\s=]/);if(!delim)return"operator";if(matching.propertyIsEnumerable(delim))delim=matching[delim];return chain(readQuoted(delim,style,embed,true),stream,state);}else if(ch=="#"){stream.skipToEnd();return"comment";}else if(ch=="<"&&(m=stream.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))){return chain(readHereDoc(m[1]),stream,state);}else if(ch=="0"){if(stream.eat("x"))stream.eatWhile(/[\da-fA-F]/);else if(stream.eat("b"))stream.eatWhile(/[01]/);else stream.eatWhile(/[0-7]/);return"number";}else if(/\d/.test(ch)){stream.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/);return"number";}else if(ch=="?"){while(stream.match(/^\\[CM]-/)){}
if(stream.eat("\\"))stream.eatWhile(/\w/);else stream.next();return"string";}else if(ch==":"){if(stream.eat("'"))return chain(readQuoted("'","atom",false),stream,state);if(stream.eat('"'))return chain(readQuoted('"',"atom",true),stream,state);if(stream.eat(/[\<\>]/)){stream.eat(/[\<\>]/);return"atom";}
if(stream.eat(/[\+\-\*\/\&\|\:\!]/)){return"atom";}
if(stream.eat(/[a-zA-Z$@_\xa1-\uffff]/)){stream.eatWhile(/[\w$\xa1-\uffff]/);stream.eat(/[\?\!\=]/);return"atom";}
return"operator";}else if(ch=="@"&&stream.match(/^@?[a-zA-Z_\xa1-\uffff]/)){stream.eat("@");stream.eatWhile(/[\w\xa1-\uffff]/);return"variable-2";}else if(ch=="$"){if(stream.eat(/[a-zA-Z_]/)){stream.eatWhile(/[\w]/);}else if(stream.eat(/\d/)){stream.eat(/\d/);}else{stream.next();}
return"variable-3";}else if(/[a-zA-Z_\xa1-\uffff]/.test(ch)){stream.eatWhile(/[\w\xa1-\uffff]/);stream.eat(/[\?\!]/);if(stream.eat(":"))return"atom";return"ident";}else if(ch=="|"&&(state.varList||state.lastTok=="{"||state.lastTok=="do")){curPunc="|";return null;}else if(/[\(\)\[\]{}\\;]/.test(ch)){curPunc=ch;return null;}else if(ch=="-"&&stream.eat(">")){return"arrow";}else if(/[=+\-\/*:\.^%<>~|]/.test(ch)){var more=stream.eatWhile(/[=+\-\/*:\.^%<>~|]/);if(ch=="."&&!more)curPunc=".";return"operator";}else{return null;}}
function regexpAhead(stream){var start=stream.pos,depth=0,next,found=false,escaped=false
while((next=stream.next())!=null){if(!escaped){if("[{(".indexOf(next)>-1){depth++}else if("]})".indexOf(next)>-1){depth--
if(depth<0)break}else if(next=="/"&&depth==0){found=true
break}
escaped=next=="\\"}else{escaped=false}}
stream.backUp(stream.pos-start)
return found}
function tokenBaseUntilBrace(depth){if(!depth)depth=1;return function(stream,state){if(stream.peek()=="}"){if(depth==1){state.tokenize.pop();return state.tokenize[state.tokenize.length-1](stream,state);}else{state.tokenize[state.tokenize.length-1]=tokenBaseUntilBrace(depth-1);}}else if(stream.peek()=="{"){state.tokenize[state.tokenize.length-1]=tokenBaseUntilBrace(depth+1);}
return tokenBase(stream,state);};}
function tokenBaseOnce(){var alreadyCalled=false;return function(stream,state){if(alreadyCalled){state.tokenize.pop();return state.tokenize[state.tokenize.length-1](stream,state);}
alreadyCalled=true;return tokenBase(stream,state);};}
function readQuoted(quote,style,embed,unescaped){return function(stream,state){var escaped=false,ch;if(state.context.type==='read-quoted-paused'){state.context=state.context.prev;stream.eat("}");}
while((ch=stream.next())!=null){if(ch==quote&&(unescaped||!escaped)){state.tokenize.pop();break;}
if(embed&&ch=="#"&&!escaped){if(stream.eat("{")){if(quote=="}"){state.context={prev:state.context,type:'read-quoted-paused'};}
state.tokenize.push(tokenBaseUntilBrace());break;}else if(/[@\$]/.test(stream.peek())){state.tokenize.push(tokenBaseOnce());break;}}
escaped=!escaped&&ch=="\\";}
return style;};}
function readHereDoc(phrase){return function(stream,state){if(stream.match(phrase))state.tokenize.pop();else stream.skipToEnd();return"string";};}
function readBlockComment(stream,state){if(stream.sol()&&stream.match("=end")&&stream.eol())
state.tokenize.pop();stream.skipToEnd();return"comment";}
return{startState:function(){return{tokenize:[tokenBase],indented:0,context:{type:"top",indented:-config.indentUnit},continuedLine:false,lastTok:null,varList:false};},token:function(stream,state){curPunc=null;if(stream.sol())state.indented=stream.indentation();var style=state.tokenize[state.tokenize.length-1](stream,state),kwtype;var thisTok=curPunc;if(style=="ident"){var word=stream.current();style=state.lastTok=="."?"property":keywords.propertyIsEnumerable(stream.current())?"keyword":/^[A-Z]/.test(word)?"tag":(state.lastTok=="def"||state.lastTok=="class"||state.varList)?"def":"variable";if(style=="keyword"){thisTok=word;if(indentWords.propertyIsEnumerable(word))kwtype="indent";else if(dedentWords.propertyIsEnumerable(word))kwtype="dedent";else if((word=="if"||word=="unless")&&stream.column()==stream.indentation())
kwtype="indent";else if(word=="do"&&state.context.indented<state.indented)
kwtype="indent";}}
if(curPunc||(style&&style!="comment"))state.lastTok=thisTok;if(curPunc=="|")state.varList=!state.varList;if(kwtype=="indent"||/[\(\[\{]/.test(curPunc))
state.context={prev:state.context,type:curPunc||style,indented:state.indented};else if((kwtype=="dedent"||/[\)\]\}]/.test(curPunc))&&state.context.prev)
state.context=state.context.prev;if(stream.eol())
state.continuedLine=(curPunc=="\\"||style=="operator");return style;},indent:function(state,textAfter){if(state.tokenize[state.tokenize.length-1]!=tokenBase)return 0;var firstChar=textAfter&&textAfter.charAt(0);var ct=state.context;var closing=ct.type==matching[firstChar]||ct.type=="keyword"&&/^(?:end|until|else|elsif|when|rescue)\b/.test(textAfter);return ct.indented+(closing?0:config.indentUnit)+
(state.continuedLine?config.indentUnit:0);},electricInput:/^\s*(?:end|rescue|elsif|else|\})$/,lineComment:"#",fold:"indent"};});CodeMirror.defineMIME("text/x-ruby","ruby");});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"),require("../css/css"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror","../css/css"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("sass",function(config){var cssMode=CodeMirror.mimeModes["text/css"];var propertyKeywords=cssMode.propertyKeywords||{},colorKeywords=cssMode.colorKeywords||{},valueKeywords=cssMode.valueKeywords||{},fontProperties=cssMode.fontProperties||{};function tokenRegexp(words){return new RegExp("^"+words.join("|"));}
var keywords=["true","false","null","auto"];var keywordsRegexp=new RegExp("^"+keywords.join("|"));var operators=["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"];var opRegexp=tokenRegexp(operators);var pseudoElementsRegexp=/^::?[a-zA-Z_][\w\-]*/;var word;function isEndLine(stream){return!stream.peek()||stream.match(/\s+$/,false);}
function urlTokens(stream,state){var ch=stream.peek();if(ch===")"){stream.next();state.tokenizer=tokenBase;return"operator";}else if(ch==="("){stream.next();stream.eatSpace();return"operator";}else if(ch==="'"||ch==='"'){state.tokenizer=buildStringTokenizer(stream.next());return"string";}else{state.tokenizer=buildStringTokenizer(")",false);return"string";}}
function comment(indentation,multiLine){return function(stream,state){if(stream.sol()&&stream.indentation()<=indentation){state.tokenizer=tokenBase;return tokenBase(stream,state);}
if(multiLine&&stream.skipTo("*/")){stream.next();stream.next();state.tokenizer=tokenBase;}else{stream.skipToEnd();}
return"comment";};}
function buildStringTokenizer(quote,greedy){if(greedy==null){greedy=true;}
function stringTokenizer(stream,state){var nextChar=stream.next();var peekChar=stream.peek();var previousChar=stream.string.charAt(stream.pos-2);var endingString=((nextChar!=="\\"&&peekChar===quote)||(nextChar===quote&&previousChar!=="\\"));if(endingString){if(nextChar!==quote&&greedy){stream.next();}
if(isEndLine(stream)){state.cursorHalf=0;}
state.tokenizer=tokenBase;return"string";}else if(nextChar==="#"&&peekChar==="{"){state.tokenizer=buildInterpolationTokenizer(stringTokenizer);stream.next();return"operator";}else{return"string";}}
return stringTokenizer;}
function buildInterpolationTokenizer(currentTokenizer){return function(stream,state){if(stream.peek()==="}"){stream.next();state.tokenizer=currentTokenizer;return"operator";}else{return tokenBase(stream,state);}};}
function indent(state){if(state.indentCount==0){state.indentCount++;var lastScopeOffset=state.scopes[0].offset;var currentOffset=lastScopeOffset+config.indentUnit;state.scopes.unshift({offset:currentOffset});}}
function dedent(state){if(state.scopes.length==1)return;state.scopes.shift();}
function tokenBase(stream,state){var ch=stream.peek();if(stream.match("/*")){state.tokenizer=comment(stream.indentation(),true);return state.tokenizer(stream,state);}
if(stream.match("//")){state.tokenizer=comment(stream.indentation(),false);return state.tokenizer(stream,state);}
if(stream.match("#{")){state.tokenizer=buildInterpolationTokenizer(tokenBase);return"operator";}
if(ch==='"'||ch==="'"){stream.next();state.tokenizer=buildStringTokenizer(ch);return"string";}
if(!state.cursorHalf){if(ch==="-"){if(stream.match(/^-\w+-/)){return"meta";}}
if(ch==="."){stream.next();if(stream.match(/^[\w-]+/)){indent(state);return"qualifier";}else if(stream.peek()==="#"){indent(state);return"tag";}}
if(ch==="#"){stream.next();if(stream.match(/^[\w-]+/)){indent(state);return"builtin";}
if(stream.peek()==="#"){indent(state);return"tag";}}
if(ch==="$"){stream.next();stream.eatWhile(/[\w-]/);return"variable-2";}
if(stream.match(/^-?[0-9\.]+/))
return"number";if(stream.match(/^(px|em|in)\b/))
return"unit";if(stream.match(keywordsRegexp))
return"keyword";if(stream.match(/^url/)&&stream.peek()==="("){state.tokenizer=urlTokens;return"atom";}
if(ch==="="){if(stream.match(/^=[\w-]+/)){indent(state);return"meta";}}
if(ch==="+"){if(stream.match(/^\+[\w-]+/)){return"variable-3";}}
if(ch==="@"){if(stream.match(/@extend/)){if(!stream.match(/\s*[\w]/))
dedent(state);}}
if(stream.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)){indent(state);return"def";}
if(ch==="@"){stream.next();stream.eatWhile(/[\w-]/);return"def";}
if(stream.eatWhile(/[\w-]/)){if(stream.match(/ *: *[\w-\+\$#!\("']/,false)){word=stream.current().toLowerCase();var prop=state.prevProp+"-"+word;if(propertyKeywords.hasOwnProperty(prop)){return"property";}else if(propertyKeywords.hasOwnProperty(word)){state.prevProp=word;return"property";}else if(fontProperties.hasOwnProperty(word)){return"property";}
return"tag";}
else if(stream.match(/ *:/,false)){indent(state);state.cursorHalf=1;state.prevProp=stream.current().toLowerCase();return"property";}
else if(stream.match(/ *,/,false)){return"tag";}
else{indent(state);return"tag";}}
if(ch===":"){if(stream.match(pseudoElementsRegexp)){return"variable-3";}
stream.next();state.cursorHalf=1;return"operator";}}
else{if(ch==="#"){stream.next();if(stream.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)){if(isEndLine(stream)){state.cursorHalf=0;}
return"number";}}
if(stream.match(/^-?[0-9\.]+/)){if(isEndLine(stream)){state.cursorHalf=0;}
return"number";}
if(stream.match(/^(px|em|in)\b/)){if(isEndLine(stream)){state.cursorHalf=0;}
return"unit";}
if(stream.match(keywordsRegexp)){if(isEndLine(stream)){state.cursorHalf=0;}
return"keyword";}
if(stream.match(/^url/)&&stream.peek()==="("){state.tokenizer=urlTokens;if(isEndLine(stream)){state.cursorHalf=0;}
return"atom";}
if(ch==="$"){stream.next();stream.eatWhile(/[\w-]/);if(isEndLine(stream)){state.cursorHalf=0;}
return"variable-2";}
if(ch==="!"){stream.next();state.cursorHalf=0;return stream.match(/^[\w]+/)?"keyword":"operator";}
if(stream.match(opRegexp)){if(isEndLine(stream)){state.cursorHalf=0;}
return"operator";}
if(stream.eatWhile(/[\w-]/)){if(isEndLine(stream)){state.cursorHalf=0;}
word=stream.current().toLowerCase();if(valueKeywords.hasOwnProperty(word)){return"atom";}else if(colorKeywords.hasOwnProperty(word)){return"keyword";}else if(propertyKeywords.hasOwnProperty(word)){state.prevProp=stream.current().toLowerCase();return"property";}else{return"tag";}}
if(isEndLine(stream)){state.cursorHalf=0;return null;}}
if(stream.match(opRegexp))
return"operator";stream.next();return null;}
function tokenLexer(stream,state){if(stream.sol())state.indentCount=0;var style=state.tokenizer(stream,state);var current=stream.current();if(current==="@return"||current==="}"){dedent(state);}
if(style!==null){var startOfToken=stream.pos-current.length;var withCurrentIndent=startOfToken+(config.indentUnit*state.indentCount);var newScopes=[];for(var i=0;i<state.scopes.length;i++){var scope=state.scopes[i];if(scope.offset<=withCurrentIndent)
newScopes.push(scope);}
state.scopes=newScopes;}
return style;}
return{startState:function(){return{tokenizer:tokenBase,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]};},token:function(stream,state){var style=tokenLexer(stream,state);state.lastToken={style:style,content:stream.current()};return style;},indent:function(state){return state.scopes[0].offset;}};},"css");CodeMirror.defineMIME("text/x-sass","sass");});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode('shell',function(){var words={};function define(style,dict){for(var i=0;i<dict.length;i++){words[dict[i]]=style;}};var commonAtoms=["true","false"];var commonKeywords=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"];var commonCommands=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];CodeMirror.registerHelper("hintWords","shell",commonAtoms.concat(commonKeywords,commonCommands));define('atom',commonAtoms);define('keyword',commonKeywords);define('builtin',commonCommands);function tokenBase(stream,state){if(stream.eatSpace())return null;var sol=stream.sol();var ch=stream.next();if(ch==='\\'){stream.next();return null;}
if(ch==='\''||ch==='"'||ch==='`'){state.tokens.unshift(tokenString(ch,ch==="`"?"quote":"string"));return tokenize(stream,state);}
if(ch==='#'){if(sol&&stream.eat('!')){stream.skipToEnd();return'meta';}
stream.skipToEnd();return'comment';}
if(ch==='$'){state.tokens.unshift(tokenDollar);return tokenize(stream,state);}
if(ch==='+'||ch==='='){return'operator';}
if(ch==='-'){stream.eat('-');stream.eatWhile(/\w/);return'attribute';}
if(/\d/.test(ch)){stream.eatWhile(/\d/);if(stream.eol()||!/\w/.test(stream.peek())){return'number';}}
stream.eatWhile(/[\w-]/);var cur=stream.current();if(stream.peek()==='='&&/\w+/.test(cur))return'def';return words.hasOwnProperty(cur)?words[cur]:null;}
function tokenString(quote,style){var close=quote=="("?")":quote=="{"?"}":quote
return function(stream,state){var next,escaped=false;while((next=stream.next())!=null){if(next===close&&!escaped){state.tokens.shift();break;}else if(next==='$'&&!escaped&&quote!=="'"&&stream.peek()!=close){escaped=true;stream.backUp(1);state.tokens.unshift(tokenDollar);break;}else if(!escaped&&quote!==close&&next===quote){state.tokens.unshift(tokenString(quote,style))
return tokenize(stream,state)}else if(!escaped&&/['"]/.test(next)&&!/['"]/.test(quote)){state.tokens.unshift(tokenStringStart(next,"string"));stream.backUp(1);break;}
escaped=!escaped&&next==='\\';}
return style;};};function tokenStringStart(quote,style){return function(stream,state){state.tokens[0]=tokenString(quote,style)
stream.next()
return tokenize(stream,state)}}
var tokenDollar=function(stream,state){if(state.tokens.length>1)stream.eat('$');var ch=stream.next()
if(/['"({]/.test(ch)){state.tokens[0]=tokenString(ch,ch=="("?"quote":ch=="{"?"def":"string");return tokenize(stream,state);}
if(!/\d/.test(ch))stream.eatWhile(/\w/);state.tokens.shift();return'def';};function tokenize(stream,state){return(state.tokens[0]||tokenBase)(stream,state);};return{startState:function(){return{tokens:[]};},token:function(stream,state){return tokenize(stream,state);},closeBrackets:"()[]{}''\"\"``",lineComment:'#',fold:"brace"};});CodeMirror.defineMIME('text/x-sh','shell');CodeMirror.defineMIME('application/x-sh','shell');});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("sql",function(config,parserConfig){"use strict";var client=parserConfig.client||{},atoms=parserConfig.atoms||{"false":true,"true":true,"null":true},builtin=parserConfig.builtin||{},keywords=parserConfig.keywords||{},operatorChars=parserConfig.operatorChars||/^[*+\-%<>!=&|~^]/,support=parserConfig.support||{},hooks=parserConfig.hooks||{},dateSQL=parserConfig.dateSQL||{"date":true,"time":true,"timestamp":true},backslashStringEscapes=parserConfig.backslashStringEscapes!==false,brackets=parserConfig.brackets||/^[\{}\(\)\[\]]/,punctuation=parserConfig.punctuation||/^[;.,:]/
function tokenBase(stream,state){var ch=stream.next();if(hooks[ch]){var result=hooks[ch](stream,state);if(result!==false)return result;}
if(support.hexNumber&&((ch=="0"&&stream.match(/^[xX][0-9a-fA-F]+/))||(ch=="x"||ch=="X")&&stream.match(/^'[0-9a-fA-F]+'/))){return"number";}else if(support.binaryNumber&&(((ch=="b"||ch=="B")&&stream.match(/^'[01]+'/))||(ch=="0"&&stream.match(/^b[01]+/)))){return"number";}else if(ch.charCodeAt(0)>47&&ch.charCodeAt(0)<58){stream.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/);support.decimallessFloat&&stream.match(/^\.(?!\.)/);return"number";}else if(ch=="?"&&(stream.eatSpace()||stream.eol()||stream.eat(";"))){return"variable-3";}else if(ch=="'"||(ch=='"'&&support.doubleQuote)){state.tokenize=tokenLiteral(ch);return state.tokenize(stream,state);}else if((((support.nCharCast&&(ch=="n"||ch=="N"))||(support.charsetCast&&ch=="_"&&stream.match(/[a-z][a-z0-9]*/i)))&&(stream.peek()=="'"||stream.peek()=='"'))){return"keyword";}else if(support.commentSlashSlash&&ch=="/"&&stream.eat("/")){stream.skipToEnd();return"comment";}else if((support.commentHash&&ch=="#")||(ch=="-"&&stream.eat("-")&&(!support.commentSpaceRequired||stream.eat(" ")))){stream.skipToEnd();return"comment";}else if(ch=="/"&&stream.eat("*")){state.tokenize=tokenComment(1);return state.tokenize(stream,state);}else if(ch=="."){if(support.zerolessFloat&&stream.match(/^(?:\d+(?:e[+-]?\d+)?)/i))
return"number";if(stream.match(/^\.+/))
return null
if(support.ODBCdotTable&&stream.match(/^[\w\d_]+/))
return"variable-2";}else if(operatorChars.test(ch)){stream.eatWhile(operatorChars);return"operator";}else if(brackets.test(ch)){stream.eatWhile(brackets);return"bracket";}else if(punctuation.test(ch)){stream.eatWhile(punctuation);return"punctuation";}else if(ch=='{'&&(stream.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/)||stream.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))){return"number";}else{stream.eatWhile(/^[_\w\d]/);var word=stream.current().toLowerCase();if(dateSQL.hasOwnProperty(word)&&(stream.match(/^( )+'[^']*'/)||stream.match(/^( )+"[^"]*"/)))
return"number";if(atoms.hasOwnProperty(word))return"atom";if(builtin.hasOwnProperty(word))return"builtin";if(keywords.hasOwnProperty(word))return"keyword";if(client.hasOwnProperty(word))return"string-2";return null;}}
function tokenLiteral(quote){return function(stream,state){var escaped=false,ch;while((ch=stream.next())!=null){if(ch==quote&&!escaped){state.tokenize=tokenBase;break;}
escaped=backslashStringEscapes&&!escaped&&ch=="\\";}
return"string";};}
function tokenComment(depth){return function(stream,state){var m=stream.match(/^.*?(\/\*|\*\/)/)
if(!m)stream.skipToEnd()
else if(m[1]=="/*")state.tokenize=tokenComment(depth+1)
else if(depth>1)state.tokenize=tokenComment(depth-1)
else state.tokenize=tokenBase
return"comment"}}
function pushContext(stream,state,type){state.context={prev:state.context,indent:stream.indentation(),col:stream.column(),type:type};}
function popContext(state){state.indent=state.context.indent;state.context=state.context.prev;}
return{startState:function(){return{tokenize:tokenBase,context:null};},token:function(stream,state){if(stream.sol()){if(state.context&&state.context.align==null)
state.context.align=false;}
if(state.tokenize==tokenBase&&stream.eatSpace())return null;var style=state.tokenize(stream,state);if(style=="comment")return style;if(state.context&&state.context.align==null)
state.context.align=true;var tok=stream.current();if(tok=="(")
pushContext(stream,state,")");else if(tok=="[")
pushContext(stream,state,"]");else if(state.context&&state.context.type==tok)
popContext(state);return style;},indent:function(state,textAfter){var cx=state.context;if(!cx)return CodeMirror.Pass;var closing=textAfter.charAt(0)==cx.type;if(cx.align)return cx.col+(closing?0:1);else return cx.indent+(closing?0:config.indentUnit);},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:support.commentSlashSlash?"//":support.commentHash?"#":"--",closeBrackets:"()[]{}''\"\"``"};});(function(){"use strict";function hookIdentifier(stream){var ch;while((ch=stream.next())!=null){if(ch=="`"&&!stream.eat("`"))return"variable-2";}
stream.backUp(stream.current().length-1);return stream.eatWhile(/\w/)?"variable-2":null;}
function hookIdentifierDoublequote(stream){var ch;while((ch=stream.next())!=null){if(ch=="\""&&!stream.eat("\""))return"variable-2";}
stream.backUp(stream.current().length-1);return stream.eatWhile(/\w/)?"variable-2":null;}
function hookVar(stream){if(stream.eat("@")){stream.match(/^session\./);stream.match(/^local\./);stream.match(/^global\./);}
if(stream.eat("'")){stream.match(/^.*'/);return"variable-2";}else if(stream.eat('"')){stream.match(/^.*"/);return"variable-2";}else if(stream.eat("`")){stream.match(/^.*`/);return"variable-2";}else if(stream.match(/^[0-9a-zA-Z$\.\_]+/)){return"variable-2";}
return null;};function hookClient(stream){if(stream.eat("N")){return"atom";}
return stream.match(/^[a-zA-Z.#!?]/)?"variable-2":null;}
var sqlKeywords="alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";function set(str){var obj={},words=str.split(" ");for(var i=0;i<words.length;++i)obj[words[i]]=true;return obj;}
CodeMirror.defineMIME("text/x-sql",{name:"sql",keywords:set(sqlKeywords+"begin"),builtin:set("bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric"),atoms:set("false true null unknown"),operatorChars:/^[*+\-%<>!=]/,dateSQL:set("date time timestamp"),support:set("ODBCdotTable doubleQuote binaryNumber hexNumber")});CodeMirror.defineMIME("text/x-mssql",{name:"sql",client:set("$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id"),keywords:set(sqlKeywords+"begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with"),builtin:set("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),atoms:set("is not null like and or in left right between inner outer join all any some cross unpivot pivot exists"),operatorChars:/^[*+\-%<>!=^\&|\/]/,brackets:/^[\{}\(\)]/,punctuation:/^[;.,:/]/,backslashStringEscapes:false,dateSQL:set("date datetimeoffset datetime2 smalldatetime datetime time"),hooks:{"@":hookVar}});CodeMirror.defineMIME("text/x-mysql",{name:"sql",client:set("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),keywords:set(sqlKeywords+"accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),builtin:set("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),atoms:set("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^]/,dateSQL:set("date time timestamp"),support:set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),hooks:{"@":hookVar,"`":hookIdentifier,"\\":hookClient}});CodeMirror.defineMIME("text/x-mariadb",{name:"sql",client:set("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),keywords:set(sqlKeywords+"accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),builtin:set("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),atoms:set("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^]/,dateSQL:set("date time timestamp"),support:set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),hooks:{"@":hookVar,"`":hookIdentifier,"\\":hookClient}});CodeMirror.defineMIME("text/x-sqlite",{name:"sql",client:set("auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"),keywords:set(sqlKeywords+"abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"),builtin:set("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"),atoms:set("null current_date current_time current_timestamp"),operatorChars:/^[*+\-%<>!=&|/~]/,dateSQL:set("date time timestamp datetime"),support:set("decimallessFloat zerolessFloat"),identifierQuote:"\"",hooks:{"@":hookVar,":":hookVar,"?":hookVar,"$":hookVar,"\"":hookIdentifierDoublequote,"`":hookIdentifier}});CodeMirror.defineMIME("text/x-cassandra",{name:"sql",client:{},keywords:set("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),builtin:set("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),atoms:set("false true infinity NaN"),operatorChars:/^[<>=]/,dateSQL:{},support:set("commentSlashSlash decimallessFloat"),hooks:{}});CodeMirror.defineMIME("text/x-plsql",{name:"sql",client:set("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),keywords:set("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),builtin:set("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),operatorChars:/^[*+\-%<>!=~]/,dateSQL:set("date time timestamp"),support:set("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")});CodeMirror.defineMIME("text/x-hive",{name:"sql",keywords:set("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external false fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger true unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with"),builtin:set("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype"),atoms:set("false true null unknown"),operatorChars:/^[*+\-%<>!=]/,dateSQL:set("date timestamp"),support:set("ODBCdotTable doubleQuote binaryNumber hexNumber")});CodeMirror.defineMIME("text/x-pgsql",{name:"sql",client:set("source"),keywords:set(sqlKeywords+"a abort abs absent absolute access according action ada add admin after aggregate all allocate also always analyse analyze any are array array_agg array_max_cardinality asensitive assertion assignment asymmetric at atomic attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli binary bit_length blob blocked bom both breadth c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain characteristics characters character_length character_set_catalog character_set_name character_set_schema char_length check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column columns column_name command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constraint constraints constraint_catalog constraint_name constraint_schema constructor contains content continue control conversion convert copy corr corresponding cost covar_pop covar_samp cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datetime_interval_code datetime_interval_precision day db deallocate dec declare default defaults deferrable deferred defined definer degree delimiter delimiters dense_rank depth deref derived describe descriptor deterministic diagnostics dictionary disable discard disconnect dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain dynamic dynamic_function dynamic_function_code each element else empty enable encoding encrypted end end-exec end_frame end_partition enforced enum equals escape event every except exception exclude excluding exclusive exec execute exists exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreign fortran forward found frame_row free freeze fs full function functions fusion g general generated get global go goto grant granted greatest grouping groups handler header hex hierarchy hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import including increment indent index indexes indicator inherit inherits initially inline inner inout input insensitive instance instantiable instead integrity intersect intersection invoker isnull isolation k key key_member key_type label lag language large last last_value lateral lc_collate lc_ctype lead leading leakproof least left length level library like_regex link listen ln load local localtime localtimestamp location locator lock locked logged lower m map mapping match matched materialized max maxvalue max_cardinality member merge message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized nothing notify notnull nowait nth_value ntile null nullable nullif nulls number object occurrences_regex octets octet_length of off offset oids old only open operator option options ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password percent percentile_cont percentile_disc percent_rank period permission placing plans pli policy portion position position_regex power precedes preceding prepare prepared preserve primary prior privileges procedural procedure program public quote range rank read reads reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict restricted result return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns revoke right role rollback rollup routine routine_catalog routine_name routine_schema row rows row_count row_number rule savepoint scale schema schema_name scope scope_catalog scope_name scope_schema scroll search second section security selective self sensitive sequence sequences serializable server server_name session session_user setof sets share show similar simple size skip snapshot some source space specific specifictype specific_name sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset substring substring_regex succeeds sum symmetric sysid system system_time system_user t tables tablesample tablespace table_name temp template temporary then ties timezone_hour timezone_minute to token top_level_count trailing transaction transactions_committed transactions_rolled_back transaction_active transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted unique unknown unlink unlisten unlogged unnamed unnest until untyped upper uri usage user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of varbinary variadic var_pop var_samp verbose version versioning view views volatile when whenever whitespace width_bucket window within work wrapper write xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes loop repeat attach path depends detach zone"),builtin:set("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),atoms:set("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^\/#@?~]/,dateSQL:set("date time timestamp"),support:set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")});CodeMirror.defineMIME("text/x-gql",{name:"sql",keywords:set("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),atoms:set("false true"),builtin:set("blob datetime first key __key__ string integer double boolean null"),operatorChars:/^[*+\-%<>!=]/});CodeMirror.defineMIME("text/x-gpsql",{name:"sql",client:set("source"),keywords:set("abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone"),builtin:set("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),atoms:set("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^\/#@?~]/,dateSQL:set("date time timestamp"),support:set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")});CodeMirror.defineMIME("text/x-sparksql",{name:"sql",keywords:set("add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases datata dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with"),builtin:set("tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat"),atoms:set("false true null"),operatorChars:/^[*+\-%<>!=~&|^]/,dateSQL:set("date time timestamp"),support:set("ODBCdotTable doubleQuote zerolessFloat")});CodeMirror.defineMIME("text/x-esper",{name:"sql",client:set("source"),keywords:set("alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"),builtin:{},atoms:set("false true null"),operatorChars:/^[*+\-%<>!=&|^\/#@?~]/,dateSQL:set("time"),support:set("decimallessFloat zerolessFloat binaryNumber hexNumber")});}());});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("vb",function(conf,parserConf){var ERRORCLASS='error';function wordRegexp(words){return new RegExp("^(("+words.join(")|(")+"))\\b","i");}
var singleOperators=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]");var singleDelimiters=new RegExp('^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]');var doubleOperators=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))");var doubleDelimiters=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))");var tripleDelimiters=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");var identifiers=new RegExp("^[_A-Za-z][_A-Za-z0-9]*");var openingKeywords=['class','module','sub','enum','select','while','if','function','get','set','property','try'];var middleKeywords=['else','elseif','case','catch'];var endKeywords=['next','loop'];var operatorKeywords=['and','or','not','xor','in'];var wordOperators=wordRegexp(operatorKeywords);var commonKeywords=['as','dim','break','continue','optional','then','until','goto','byval','byref','new','handles','property','return','const','private','protected','friend','public','shared','static','true','false'];var commontypes=['integer','string','double','decimal','boolean','short','char','float','single'];var keywords=wordRegexp(commonKeywords);var types=wordRegexp(commontypes);var stringPrefixes='"';var opening=wordRegexp(openingKeywords);var middle=wordRegexp(middleKeywords);var closing=wordRegexp(endKeywords);var doubleClosing=wordRegexp(['end']);var doOpening=wordRegexp(['do']);var indentInfo=null;CodeMirror.registerHelper("hintWords","vb",openingKeywords.concat(middleKeywords).concat(endKeywords).concat(operatorKeywords).concat(commonKeywords).concat(commontypes));function indent(_stream,state){state.currentIndent++;}
function dedent(_stream,state){state.currentIndent--;}
function tokenBase(stream,state){if(stream.eatSpace()){return null;}
var ch=stream.peek();if(ch==="'"){stream.skipToEnd();return'comment';}
if(stream.match(/^((&H)|(&O))?[0-9\.a-f]/i,false)){var floatLiteral=false;if(stream.match(/^\d*\.\d+F?/i)){floatLiteral=true;}
else if(stream.match(/^\d+\.\d*F?/)){floatLiteral=true;}
else if(stream.match(/^\.\d+F?/)){floatLiteral=true;}
if(floatLiteral){stream.eat(/J/i);return'number';}
var intLiteral=false;if(stream.match(/^&H[0-9a-f]+/i)){intLiteral=true;}
else if(stream.match(/^&O[0-7]+/i)){intLiteral=true;}
else if(stream.match(/^[1-9]\d*F?/)){stream.eat(/J/i);intLiteral=true;}
else if(stream.match(/^0(?![\dx])/i)){intLiteral=true;}
if(intLiteral){stream.eat(/L/i);return'number';}}
if(stream.match(stringPrefixes)){state.tokenize=tokenStringFactory(stream.current());return state.tokenize(stream,state);}
if(stream.match(tripleDelimiters)||stream.match(doubleDelimiters)){return null;}
if(stream.match(doubleOperators)||stream.match(singleOperators)||stream.match(wordOperators)){return'operator';}
if(stream.match(singleDelimiters)){return null;}
if(stream.match(doOpening)){indent(stream,state);state.doInCurrentLine=true;return'keyword';}
if(stream.match(opening)){if(!state.doInCurrentLine)
indent(stream,state);else
state.doInCurrentLine=false;return'keyword';}
if(stream.match(middle)){return'keyword';}
if(stream.match(doubleClosing)){dedent(stream,state);dedent(stream,state);return'keyword';}
if(stream.match(closing)){dedent(stream,state);return'keyword';}
if(stream.match(types)){return'keyword';}
if(stream.match(keywords)){return'keyword';}
if(stream.match(identifiers)){return'variable';}
stream.next();return ERRORCLASS;}
function tokenStringFactory(delimiter){var singleline=delimiter.length==1;var OUTCLASS='string';return function(stream,state){while(!stream.eol()){stream.eatWhile(/[^'"]/);if(stream.match(delimiter)){state.tokenize=tokenBase;return OUTCLASS;}else{stream.eat(/['"]/);}}
if(singleline){if(parserConf.singleLineStringErrors){return ERRORCLASS;}else{state.tokenize=tokenBase;}}
return OUTCLASS;};}
function tokenLexer(stream,state){var style=state.tokenize(stream,state);var current=stream.current();if(current==='.'){style=state.tokenize(stream,state);if(style==='variable'){return'variable';}else{return ERRORCLASS;}}
var delimiter_index='[({'.indexOf(current);if(delimiter_index!==-1){indent(stream,state);}
if(indentInfo==='dedent'){if(dedent(stream,state)){return ERRORCLASS;}}
delimiter_index='])}'.indexOf(current);if(delimiter_index!==-1){if(dedent(stream,state)){return ERRORCLASS;}}
return style;}
var external={electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:tokenBase,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:false};},token:function(stream,state){if(stream.sol()){state.currentIndent+=state.nextLineIndent;state.nextLineIndent=0;state.doInCurrentLine=0;}
var style=tokenLexer(stream,state);state.lastToken={style:style,content:stream.current()};return style;},indent:function(state,textAfter){var trueText=textAfter.replace(/^\s+|\s+$/g,'');if(trueText.match(closing)||trueText.match(doubleClosing)||trueText.match(middle))return conf.indentUnit*(state.currentIndent-1);if(state.currentIndent<0)return 0;return state.currentIndent*conf.indentUnit;},lineComment:"'"};return external;});CodeMirror.defineMIME("text/x-vb","vb");});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("vbscript",function(conf,parserConf){var ERRORCLASS='error';function wordRegexp(words){return new RegExp("^(("+words.join(")|(")+"))\\b","i");}
var singleOperators=new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]");var doubleOperators=new RegExp("^((<>)|(<=)|(>=))");var singleDelimiters=new RegExp('^[\\.,]');var brakets=new RegExp('^[\\(\\)]');var identifiers=new RegExp("^[A-Za-z][_A-Za-z0-9]*");var openingKeywords=['class','sub','select','while','if','function','property','with','for'];var middleKeywords=['else','elseif','case'];var endKeywords=['next','loop','wend'];var wordOperators=wordRegexp(['and','or','not','xor','is','mod','eqv','imp']);var commonkeywords=['dim','redim','then','until','randomize','byval','byref','new','property','exit','in','const','private','public','get','set','let','stop','on error resume next','on error goto 0','option explicit','call','me'];var atomWords=['true','false','nothing','empty','null'];var builtinFuncsWords=['abs','array','asc','atn','cbool','cbyte','ccur','cdate','cdbl','chr','cint','clng','cos','csng','cstr','date','dateadd','datediff','datepart','dateserial','datevalue','day','escape','eval','execute','exp','filter','formatcurrency','formatdatetime','formatnumber','formatpercent','getlocale','getobject','getref','hex','hour','inputbox','instr','instrrev','int','fix','isarray','isdate','isempty','isnull','isnumeric','isobject','join','lbound','lcase','left','len','loadpicture','log','ltrim','rtrim','trim','maths','mid','minute','month','monthname','msgbox','now','oct','replace','rgb','right','rnd','round','scriptengine','scriptenginebuildversion','scriptenginemajorversion','scriptengineminorversion','second','setlocale','sgn','sin','space','split','sqr','strcomp','string','strreverse','tan','time','timer','timeserial','timevalue','typename','ubound','ucase','unescape','vartype','weekday','weekdayname','year'];var builtinConsts=['vbBlack','vbRed','vbGreen','vbYellow','vbBlue','vbMagenta','vbCyan','vbWhite','vbBinaryCompare','vbTextCompare','vbSunday','vbMonday','vbTuesday','vbWednesday','vbThursday','vbFriday','vbSaturday','vbUseSystemDayOfWeek','vbFirstJan1','vbFirstFourDays','vbFirstFullWeek','vbGeneralDate','vbLongDate','vbShortDate','vbLongTime','vbShortTime','vbObjectError','vbOKOnly','vbOKCancel','vbAbortRetryIgnore','vbYesNoCancel','vbYesNo','vbRetryCancel','vbCritical','vbQuestion','vbExclamation','vbInformation','vbDefaultButton1','vbDefaultButton2','vbDefaultButton3','vbDefaultButton4','vbApplicationModal','vbSystemModal','vbOK','vbCancel','vbAbort','vbRetry','vbIgnore','vbYes','vbNo','vbCr','VbCrLf','vbFormFeed','vbLf','vbNewLine','vbNullChar','vbNullString','vbTab','vbVerticalTab','vbUseDefault','vbTrue','vbFalse','vbEmpty','vbNull','vbInteger','vbLong','vbSingle','vbDouble','vbCurrency','vbDate','vbString','vbObject','vbError','vbBoolean','vbVariant','vbDataObject','vbDecimal','vbByte','vbArray'];var builtinObjsWords=['WScript','err','debug','RegExp'];var knownProperties=['description','firstindex','global','helpcontext','helpfile','ignorecase','length','number','pattern','source','value','count'];var knownMethods=['clear','execute','raise','replace','test','write','writeline','close','open','state','eof','update','addnew','end','createobject','quit'];var aspBuiltinObjsWords=['server','response','request','session','application'];var aspKnownProperties=['buffer','cachecontrol','charset','contenttype','expires','expiresabsolute','isclientconnected','pics','status','clientcertificate','cookies','form','querystring','servervariables','totalbytes','contents','staticobjects','codepage','lcid','sessionid','timeout','scripttimeout'];var aspKnownMethods=['addheader','appendtolog','binarywrite','end','flush','redirect','binaryread','remove','removeall','lock','unlock','abandon','getlasterror','htmlencode','mappath','transfer','urlencode'];var knownWords=knownMethods.concat(knownProperties);builtinObjsWords=builtinObjsWords.concat(builtinConsts);if(conf.isASP){builtinObjsWords=builtinObjsWords.concat(aspBuiltinObjsWords);knownWords=knownWords.concat(aspKnownMethods,aspKnownProperties);};var keywords=wordRegexp(commonkeywords);var atoms=wordRegexp(atomWords);var builtinFuncs=wordRegexp(builtinFuncsWords);var builtinObjs=wordRegexp(builtinObjsWords);var known=wordRegexp(knownWords);var stringPrefixes='"';var opening=wordRegexp(openingKeywords);var middle=wordRegexp(middleKeywords);var closing=wordRegexp(endKeywords);var doubleClosing=wordRegexp(['end']);var doOpening=wordRegexp(['do']);var noIndentWords=wordRegexp(['on error resume next','exit']);var comment=wordRegexp(['rem']);function indent(_stream,state){state.currentIndent++;}
function dedent(_stream,state){state.currentIndent--;}
function tokenBase(stream,state){if(stream.eatSpace()){return'space';}
var ch=stream.peek();if(ch==="'"){stream.skipToEnd();return'comment';}
if(stream.match(comment)){stream.skipToEnd();return'comment';}
if(stream.match(/^((&H)|(&O))?[0-9\.]/i,false)&&!stream.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i,false)){var floatLiteral=false;if(stream.match(/^\d*\.\d+/i)){floatLiteral=true;}
else if(stream.match(/^\d+\.\d*/)){floatLiteral=true;}
else if(stream.match(/^\.\d+/)){floatLiteral=true;}
if(floatLiteral){stream.eat(/J/i);return'number';}
var intLiteral=false;if(stream.match(/^&H[0-9a-f]+/i)){intLiteral=true;}
else if(stream.match(/^&O[0-7]+/i)){intLiteral=true;}
else if(stream.match(/^[1-9]\d*F?/)){stream.eat(/J/i);intLiteral=true;}
else if(stream.match(/^0(?![\dx])/i)){intLiteral=true;}
if(intLiteral){stream.eat(/L/i);return'number';}}
if(stream.match(stringPrefixes)){state.tokenize=tokenStringFactory(stream.current());return state.tokenize(stream,state);}
if(stream.match(doubleOperators)||stream.match(singleOperators)||stream.match(wordOperators)){return'operator';}
if(stream.match(singleDelimiters)){return null;}
if(stream.match(brakets)){return"bracket";}
if(stream.match(noIndentWords)){state.doInCurrentLine=true;return'keyword';}
if(stream.match(doOpening)){indent(stream,state);state.doInCurrentLine=true;return'keyword';}
if(stream.match(opening)){if(!state.doInCurrentLine)
indent(stream,state);else
state.doInCurrentLine=false;return'keyword';}
if(stream.match(middle)){return'keyword';}
if(stream.match(doubleClosing)){dedent(stream,state);dedent(stream,state);return'keyword';}
if(stream.match(closing)){if(!state.doInCurrentLine)
dedent(stream,state);else
state.doInCurrentLine=false;return'keyword';}
if(stream.match(keywords)){return'keyword';}
if(stream.match(atoms)){return'atom';}
if(stream.match(known)){return'variable-2';}
if(stream.match(builtinFuncs)){return'builtin';}
if(stream.match(builtinObjs)){return'variable-2';}
if(stream.match(identifiers)){return'variable';}
stream.next();return ERRORCLASS;}
function tokenStringFactory(delimiter){var singleline=delimiter.length==1;var OUTCLASS='string';return function(stream,state){while(!stream.eol()){stream.eatWhile(/[^'"]/);if(stream.match(delimiter)){state.tokenize=tokenBase;return OUTCLASS;}else{stream.eat(/['"]/);}}
if(singleline){if(parserConf.singleLineStringErrors){return ERRORCLASS;}else{state.tokenize=tokenBase;}}
return OUTCLASS;};}
function tokenLexer(stream,state){var style=state.tokenize(stream,state);var current=stream.current();if(current==='.'){style=state.tokenize(stream,state);current=stream.current();if(style&&(style.substr(0,8)==='variable'||style==='builtin'||style==='keyword')){if(style==='builtin'||style==='keyword')style='variable';if(knownWords.indexOf(current.substr(1))>-1)style='variable-2';return style;}else{return ERRORCLASS;}}
return style;}
var external={electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:tokenBase,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:false,ignoreKeyword:false};},token:function(stream,state){if(stream.sol()){state.currentIndent+=state.nextLineIndent;state.nextLineIndent=0;state.doInCurrentLine=0;}
var style=tokenLexer(stream,state);state.lastToken={style:style,content:stream.current()};if(style==='space')style=null;return style;},indent:function(state,textAfter){var trueText=textAfter.replace(/^\s+|\s+$/g,'');if(trueText.match(closing)||trueText.match(doubleClosing)||trueText.match(middle))return conf.indentUnit*(state.currentIndent-1);if(state.currentIndent<0)return 0;return state.currentIndent*conf.indentUnit;}};return external;});CodeMirror.defineMIME("text/vbscript","vbscript");});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";var htmlConfig={autoSelfClosers:{'area':true,'base':true,'br':true,'col':true,'command':true,'embed':true,'frame':true,'hr':true,'img':true,'input':true,'keygen':true,'link':true,'meta':true,'param':true,'source':true,'track':true,'wbr':true,'menuitem':true},implicitlyClosed:{'dd':true,'li':true,'optgroup':true,'option':true,'p':true,'rp':true,'rt':true,'tbody':true,'td':true,'tfoot':true,'th':true,'tr':true},contextGrabbers:{'dd':{'dd':true,'dt':true},'dt':{'dd':true,'dt':true},'li':{'li':true},'option':{'option':true,'optgroup':true},'optgroup':{'optgroup':true},'p':{'address':true,'article':true,'aside':true,'blockquote':true,'dir':true,'div':true,'dl':true,'fieldset':true,'footer':true,'form':true,'h1':true,'h2':true,'h3':true,'h4':true,'h5':true,'h6':true,'header':true,'hgroup':true,'hr':true,'menu':true,'nav':true,'ol':true,'p':true,'pre':true,'section':true,'table':true,'ul':true},'rp':{'rp':true,'rt':true},'rt':{'rp':true,'rt':true},'tbody':{'tbody':true,'tfoot':true},'td':{'td':true,'th':true},'tfoot':{'tbody':true},'th':{'td':true,'th':true},'thead':{'tbody':true,'tfoot':true},'tr':{'tr':true}},doNotIndent:{"pre":true},allowUnquoted:true,allowMissing:true,caseFold:true}
var xmlConfig={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:false,allowMissing:false,allowMissingTagName:false,caseFold:false}
CodeMirror.defineMode("xml",function(editorConf,config_){var indentUnit=editorConf.indentUnit
var config={}
var defaults=config_.htmlMode?htmlConfig:xmlConfig
for(var prop in defaults)config[prop]=defaults[prop]
for(var prop in config_)config[prop]=config_[prop]
var type,setStyle;function inText(stream,state){function chain(parser){state.tokenize=parser;return parser(stream,state);}
var ch=stream.next();if(ch=="<"){if(stream.eat("!")){if(stream.eat("[")){if(stream.match("CDATA["))return chain(inBlock("atom","]]>"));else return null;}else if(stream.match("--")){return chain(inBlock("comment","-->"));}else if(stream.match("DOCTYPE",true,true)){stream.eatWhile(/[\w\._\-]/);return chain(doctype(1));}else{return null;}}else if(stream.eat("?")){stream.eatWhile(/[\w\._\-]/);state.tokenize=inBlock("meta","?>");return"meta";}else{type=stream.eat("/")?"closeTag":"openTag";state.tokenize=inTag;return"tag bracket";}}else if(ch=="&"){var ok;if(stream.eat("#")){if(stream.eat("x")){ok=stream.eatWhile(/[a-fA-F\d]/)&&stream.eat(";");}else{ok=stream.eatWhile(/[\d]/)&&stream.eat(";");}}else{ok=stream.eatWhile(/[\w\.\-:]/)&&stream.eat(";");}
return ok?"atom":"error";}else{stream.eatWhile(/[^&<]/);return null;}}
inText.isInText=true;function inTag(stream,state){var ch=stream.next();if(ch==">"||(ch=="/"&&stream.eat(">"))){state.tokenize=inText;type=ch==">"?"endTag":"selfcloseTag";return"tag bracket";}else if(ch=="="){type="equals";return null;}else if(ch=="<"){state.tokenize=inText;state.state=baseState;state.tagName=state.tagStart=null;var next=state.tokenize(stream,state);return next?next+" tag error":"tag error";}else if(/[\'\"]/.test(ch)){state.tokenize=inAttribute(ch);state.stringStartCol=stream.column();return state.tokenize(stream,state);}else{stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);return"word";}}
function inAttribute(quote){var closure=function(stream,state){while(!stream.eol()){if(stream.next()==quote){state.tokenize=inTag;break;}}
return"string";};closure.isInAttribute=true;return closure;}
function inBlock(style,terminator){return function(stream,state){while(!stream.eol()){if(stream.match(terminator)){state.tokenize=inText;break;}
stream.next();}
return style;}}
function doctype(depth){return function(stream,state){var ch;while((ch=stream.next())!=null){if(ch=="<"){state.tokenize=doctype(depth+1);return state.tokenize(stream,state);}else if(ch==">"){if(depth==1){state.tokenize=inText;break;}else{state.tokenize=doctype(depth-1);return state.tokenize(stream,state);}}}
return"meta";};}
function Context(state,tagName,startOfLine){this.prev=state.context;this.tagName=tagName;this.indent=state.indented;this.startOfLine=startOfLine;if(config.doNotIndent.hasOwnProperty(tagName)||(state.context&&state.context.noIndent))
this.noIndent=true;}
function popContext(state){if(state.context)state.context=state.context.prev;}
function maybePopContext(state,nextTagName){var parentTagName;while(true){if(!state.context){return;}
parentTagName=state.context.tagName;if(!config.contextGrabbers.hasOwnProperty(parentTagName)||!config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)){return;}
popContext(state);}}
function baseState(type,stream,state){if(type=="openTag"){state.tagStart=stream.column();return tagNameState;}else if(type=="closeTag"){return closeTagNameState;}else{return baseState;}}
function tagNameState(type,stream,state){if(type=="word"){state.tagName=stream.current();setStyle="tag";return attrState;}else if(config.allowMissingTagName&&type=="endTag"){setStyle="tag bracket";return attrState(type,stream,state);}else{setStyle="error";return tagNameState;}}
function closeTagNameState(type,stream,state){if(type=="word"){var tagName=stream.current();if(state.context&&state.context.tagName!=tagName&&config.implicitlyClosed.hasOwnProperty(state.context.tagName))
popContext(state);if((state.context&&state.context.tagName==tagName)||config.matchClosing===false){setStyle="tag";return closeState;}else{setStyle="tag error";return closeStateErr;}}else if(config.allowMissingTagName&&type=="endTag"){setStyle="tag bracket";return closeState(type,stream,state);}else{setStyle="error";return closeStateErr;}}
function closeState(type,_stream,state){if(type!="endTag"){setStyle="error";return closeState;}
popContext(state);return baseState;}
function closeStateErr(type,stream,state){setStyle="error";return closeState(type,stream,state);}
function attrState(type,_stream,state){if(type=="word"){setStyle="attribute";return attrEqState;}else if(type=="endTag"||type=="selfcloseTag"){var tagName=state.tagName,tagStart=state.tagStart;state.tagName=state.tagStart=null;if(type=="selfcloseTag"||config.autoSelfClosers.hasOwnProperty(tagName)){maybePopContext(state,tagName);}else{maybePopContext(state,tagName);state.context=new Context(state,tagName,tagStart==state.indented);}
return baseState;}
setStyle="error";return attrState;}
function attrEqState(type,stream,state){if(type=="equals")return attrValueState;if(!config.allowMissing)setStyle="error";return attrState(type,stream,state);}
function attrValueState(type,stream,state){if(type=="string")return attrContinuedState;if(type=="word"&&config.allowUnquoted){setStyle="string";return attrState;}
setStyle="error";return attrState(type,stream,state);}
function attrContinuedState(type,stream,state){if(type=="string")return attrContinuedState;return attrState(type,stream,state);}
return{startState:function(baseIndent){var state={tokenize:inText,state:baseState,indented:baseIndent||0,tagName:null,tagStart:null,context:null}
if(baseIndent!=null)state.baseIndent=baseIndent
return state},token:function(stream,state){if(!state.tagName&&stream.sol())
state.indented=stream.indentation();if(stream.eatSpace())return null;type=null;var style=state.tokenize(stream,state);if((style||type)&&style!="comment"){setStyle=null;state.state=state.state(type||style,stream,state);if(setStyle)
style=setStyle=="error"?style+" error":setStyle;}
return style;},indent:function(state,textAfter,fullLine){var context=state.context;if(state.tokenize.isInAttribute){if(state.tagStart==state.indented)
return state.stringStartCol+1;else
return state.indented+indentUnit;}
if(context&&context.noIndent)return CodeMirror.Pass;if(state.tokenize!=inTag&&state.tokenize!=inText)
return fullLine?fullLine.match(/^(\s*)/)[0].length:0;if(state.tagName){if(config.multilineTagIndentPastTag!==false)
return state.tagStart+state.tagName.length+2;else
return state.tagStart+indentUnit*(config.multilineTagIndentFactor||1);}
if(config.alignCDATA&&/<!\[CDATA\[/.test(textAfter))return 0;var tagAfter=textAfter&&/^<(\/)?([\w_:\.-]*)/.exec(textAfter);if(tagAfter&&tagAfter[1]){while(context){if(context.tagName==tagAfter[2]){context=context.prev;break;}else if(config.implicitlyClosed.hasOwnProperty(context.tagName)){context=context.prev;}else{break;}}}else if(tagAfter){while(context){var grabbers=config.contextGrabbers[context.tagName];if(grabbers&&grabbers.hasOwnProperty(tagAfter[2]))
context=context.prev;else
break;}}
while(context&&context.prev&&!context.startOfLine)
context=context.prev;if(context)return context.indent+indentUnit;else return state.baseIndent||0;},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:config.htmlMode?"html":"xml",helperType:config.htmlMode?"html":"xml",skipAttribute:function(state){if(state.state==attrValueState)
state.state=attrState}};});CodeMirror.defineMIME("text/xml","xml");CodeMirror.defineMIME("application/xml","xml");if(!CodeMirror.mimeModes.hasOwnProperty("text/html"))
CodeMirror.defineMIME("text/html",{name:"xml",htmlMode:true});});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("yaml",function(){var cons=['true','false','on','off','yes','no'];var keywordRegex=new RegExp("\\b(("+cons.join(")|(")+"))$",'i');return{token:function(stream,state){var ch=stream.peek();var esc=state.escaped;state.escaped=false;if(ch=="#"&&(stream.pos==0||/\s/.test(stream.string.charAt(stream.pos-1)))){stream.skipToEnd();return"comment";}
if(stream.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))
return"string";if(state.literal&&stream.indentation()>state.keyCol){stream.skipToEnd();return"string";}else if(state.literal){state.literal=false;}
if(stream.sol()){state.keyCol=0;state.pair=false;state.pairStart=false;if(stream.match(/---/)){return"def";}
if(stream.match(/\.\.\./)){return"def";}
if(stream.match(/\s*-\s+/)){return'meta';}}
if(stream.match(/^(\{|\}|\[|\])/)){if(ch=='{')
state.inlinePairs++;else if(ch=='}')
state.inlinePairs--;else if(ch=='[')
state.inlineList++;else
state.inlineList--;return'meta';}
if(state.inlineList>0&&!esc&&ch==','){stream.next();return'meta';}
if(state.inlinePairs>0&&!esc&&ch==','){state.keyCol=0;state.pair=false;state.pairStart=false;stream.next();return'meta';}
if(state.pairStart){if(stream.match(/^\s*(\||\>)\s*/)){state.literal=true;return'meta';};if(stream.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)){return'variable-2';}
if(state.inlinePairs==0&&stream.match(/^\s*-?[0-9\.\,]+\s?$/)){return'number';}
if(state.inlinePairs>0&&stream.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/)){return'number';}
if(stream.match(keywordRegex)){return'keyword';}}
if(!state.pair&&stream.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)){state.pair=true;state.keyCol=stream.indentation();return"atom";}
if(state.pair&&stream.match(/^:\s*/)){state.pairStart=true;return'meta';}
state.pairStart=false;state.escaped=(ch=='\\');stream.next();return null;},startState:function(){return{pair:false,pairStart:false,keyCol:0,inlinePairs:0,inlineList:0,literal:false,escaped:false};},lineComment:"#",fold:"indent"};});CodeMirror.defineMIME("text/x-yaml","yaml");CodeMirror.defineMIME("text/yaml","yaml");});(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"),require("../yaml/yaml"))
else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror","../yaml/yaml"],mod)
else
mod(CodeMirror)})(function(CodeMirror){var START=0,FRONTMATTER=1,BODY=2
CodeMirror.defineMode("yaml-frontmatter",function(config,parserConfig){var yamlMode=CodeMirror.getMode(config,"yaml")
var innerMode=CodeMirror.getMode(config,parserConfig&&parserConfig.base||"gfm")
function curMode(state){return state.state==BODY?innerMode:yamlMode}
return{startState:function(){return{state:START,inner:CodeMirror.startState(yamlMode)}},copyState:function(state){return{state:state.state,inner:CodeMirror.copyState(curMode(state),state.inner)}},token:function(stream,state){if(state.state==START){if(stream.match(/---/,false)){state.state=FRONTMATTER
return yamlMode.token(stream,state.inner)}else{state.state=BODY
state.inner=CodeMirror.startState(innerMode)
return innerMode.token(stream,state.inner)}}else if(state.state==FRONTMATTER){var end=stream.sol()&&stream.match(/---/,false)
var style=yamlMode.token(stream,state.inner)
if(end){state.state=BODY
state.inner=CodeMirror.startState(innerMode)}
return style}else{return innerMode.token(stream,state.inner)}},innerMode:function(state){return{mode:curMode(state),state:state.inner}},blankLine:function(state){var mode=curMode(state)
if(mode.blankLine)return mode.blankLine(state.inner)}}})});