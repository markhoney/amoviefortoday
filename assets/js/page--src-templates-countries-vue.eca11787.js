(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(t,e,s){},162:function(t,e,s){},163:function(t,e,s){"use strict";var i=s(161);s.n(i).a},164:function(t,e,s){"use strict";var i={props:["categories"]},n=s(29),o={components:{Icons:Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"button-container flex justify-between mb-2"},[t._l(t.categories,(function(e,i){return t._l(e,(function(e,n){return s("g-link",{key:i+n,attrs:{to:"/"+i+"/"+e.id}},[e.icon?s("img",{staticClass:"icon",attrs:{src:e.icon,title:e.name}}):t._e()])}))}))],2)}),[],!1,null,null,null).exports},props:["link","poster","title","subtitle","icons"]},l=(s(163),Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full md:w-full max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between"},[s("div",{staticClass:"md:flex-shrink-0"},[t.poster?s("g-link",{attrs:{to:t.link}},[s("g-image",{staticClass:"md:w-56",attrs:{src:t.poster,alt:t.title+" poster"}})],1):t._e()],1),s("div",{staticClass:"flex flex-col flex-grow px-8 py-4 bg-color-333"},[s("h3",{staticClass:"font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title"},[s("g-link",{attrs:{to:t.link}},[t._v(t._s(t.title))])],1),s("span",{staticClass:"movie--year text-xl lg:text-sm lg:mb-4"},[t._v(t._s(t.subtitle))]),s("div",{staticClass:"flex-grow"},[t._t("default")],2),s("Icons",{attrs:{categories:t.icons}})],1)])}),[],!1,null,null,null));e.a=l.exports},165:function(t,e,s){"use strict";var i=s(162);s.n(i).a},166:function(t,e,s){"use strict";var i={components:{Card:s(164).a},props:{movie:Object}},n=(s(165),s(29)),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Card",{attrs:{link:"/"+t.movie.id,poster:t.movie.images&&t.movie.images.poster&&t.movie.images.poster.path,title:t.movie.title,subtitle:t.movie.year,icons:{genres:t.movie.genres,studios:t.movie.studios,countries:t.movie.countries,languages:t.movie.languages}}},[s("p",{staticClass:"text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow"},[t._v(t._s(t.movie.plot))]),s("p",{staticClass:"mt-4 text-gray-100"},[t._v("- Directed by "+t._s(t.movie.director)+".")])])}),[],!1,null,null,null);e.a=o.exports},170:function(t,e){},179:function(t,e,s){"use strict";var i=s(170),n=s.n(i);e.default=n.a},191:function(t,e,s){"use strict";s.r(e);s(46);var i={components:{Movie:s(166).a},metaInfo:function(){return{title:this.$page.countries.name+" Movies"}}},n=s(29),o=s(179),l=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("h1",[this._v("\n\t\t"+this._s(this.$page.countries.name)+"\n\t")]),this._l(this.$page.countries.belongsTo.edges,(function(t,s){return e("Movie",{key:s,attrs:{movie:t.node}})}))],2)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(l);e.default=l.exports}}]);