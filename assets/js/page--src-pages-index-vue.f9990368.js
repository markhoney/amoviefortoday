(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(t,e,r){},162:function(t,e,r){},163:function(t,e,r){"use strict";var n=r(161);r.n(n).a},164:function(t,e,r){"use strict";var n={props:["categories"]},o=r(29),i={components:{Icons:Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"button-container flex justify-between mb-2"},[t._l(t.categories,(function(e,n){return t._l(e,(function(e,o){return r("g-link",{key:n+o,attrs:{to:"/"+n+"/"+e.id}},[e.icon?r("img",{staticClass:"icon",attrs:{src:e.icon,title:e.name}}):t._e()])}))}))],2)}),[],!1,null,null,null).exports},props:["link","poster","title","subtitle","icons"]},a=(r(163),Object(o.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:w-full max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between"},[r("div",{staticClass:"md:flex-shrink-0"},[t.poster?r("g-link",{attrs:{to:t.link}},[r("g-image",{staticClass:"md:w-56",attrs:{src:t.poster,alt:t.title+" poster"}})],1):t._e()],1),r("div",{staticClass:"flex flex-col flex-grow px-8 py-4 bg-color-333"},[r("h3",{staticClass:"font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title"},[r("g-link",{attrs:{to:t.link}},[t._v(t._s(t.title))])],1),r("span",{staticClass:"movie--year text-xl lg:text-sm lg:mb-4"},[t._v(t._s(t.subtitle))]),r("div",{staticClass:"flex-grow"},[t._t("default")],2),r("Icons",{attrs:{categories:t.icons}})],1)])}),[],!1,null,null,null));e.a=a.exports},165:function(t,e,r){"use strict";var n=r(162);r.n(n).a},166:function(t,e,r){"use strict";var n={components:{Card:r(164).a},props:{movie:Object}},o=(r(165),r(29)),i=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",{attrs:{link:"/"+t.movie.id,poster:t.movie.images&&t.movie.images.poster&&t.movie.images.poster.path,title:t.movie.title,subtitle:t.movie.year,icons:{genres:t.movie.genres,studios:t.movie.studios,countries:t.movie.countries,languages:t.movie.languages}}},[r("p",{staticClass:"text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow"},[t._v(t._s(t.movie.plot))]),r("p",{staticClass:"mt-4 text-gray-100"},[t._v("- Directed by "+t._s(t.movie.director)+".")])])}),[],!1,null,null,null);e.a=i.exports},173:function(t,e,r){var n=r(12),o=Date.prototype,i=o.toString,a=o.getTime;new Date(NaN)+""!="Invalid Date"&&n(o,"toString",(function(){var t=a.call(this);return t==t?i.call(this):"Invalid Date"}))},185:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new b(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=w(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function l(){}function f(){}function h(){}var v={};v[o]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(L([])));p&&p!==e&&r.call(p,o)&&(v=p);var y=h.prototype=l.prototype=Object.create(v);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,s){var u=c(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,s)}))}s(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=y.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},m(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},187:function(t,e,r){"use strict";r.r(e);r(31),r(173),r(25),r(121),r(185);function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var o={components:{Movie:r(166).a},metaInfo:{title:"Movies for Today"},data:function(){return{now:new Date,mounted:!1}},created:function(){var t=this;setInterval((function(){return t.now=new Date}),6e4)},mounted:function(){this.mounted=!0},computed:{month:function(){return this.now.getMonth()+1},day:function(){return this.now.getDate()}},asyncComputed:{today:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.mounted){t.next=14;break}return t.next=3,fetch("/assets/data/".concat(e.month,"/").concat(e.day,"/index.json"));case 3:return r=t.sent,t.prev=4,t.next=7,r.json();case 7:return n=t.sent,t.abrupt("return",n.data.days.edges[0].node);case 11:t.prev=11,t.t0=t.catch(4),console.log("Data file not found");case 14:return t.abrupt("return",null);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})),function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))})()}}},i=r(29),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.today?r("Layout",[r("h1",{staticClass:"font-bold text-4xl"},[r("g-link",{attrs:{to:t.today.previous}},[t._v("<")]),t._v("\n\t\t"+t._s(t.today.month_full)+" "+t._s(t.today.day_ordinal)+"\n\t\t"),r("g-link",{attrs:{to:t.today.next}},[t._v(">")])],1),t.today?r("div",t._l(t.today.events,(function(t,e){return r("Movie",{key:e,attrs:{movie:t.movie}})})),1):t._e()]):r("Layout",[r("p",[t._v("Please wait, fetching data...")])])}),[],!1,null,null,null);e.default=a.exports}}]);