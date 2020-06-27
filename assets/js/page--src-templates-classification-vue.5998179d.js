(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{210:function(t,e,s){},211:function(t,e,s){"use strict";var i={props:["icons"]},a=(s(212),s(6)),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex mb-2"},t._l(t.icons,(function(e){return s("g-link",{key:e.title,attrs:{to:e.path}},[e.image?s("g-image",{staticClass:"icon",attrs:{src:e.image,title:e.title,height:"32"}}):t._e()],1)})),1)}),[],!1,null,"634de1c3",null);e.a=n.exports},212:function(t,e,s){"use strict";var i=s(210);s.n(i).a},213:function(t,e,s){"use strict";var i={title:"StarRating",props:["percent","stars","colour","numeric"],computed:{rating:function(){return this.percent*(this.stars+1)/100-.5}}},a=s(6),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:{color:t.colour||"#4299E1"},attrs:{title:t.percent+"%"}},[t._l(t.stars,(function(e){return s("button",{key:e,class:{"text-gray-300":e>t.rating}},[s("svg",{staticClass:"w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 260 245"}},[s("path",{attrs:{d:"M55 237L129 9l74 228L9 96h240"}})])])})),t.numeric?s("span",{staticClass:"ml-5 text-3xl text-gray-300"},[t._v(t._s(t.percent)+"%")]):t._e()],2)}),[],!1,null,"25dadfe1",null);e.a=n.exports},214:function(t,e,s){"use strict";var i={props:["to"]},a=s(6),n=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("g-link",{staticClass:"m-2 px-1 border-4 rounded-lg font-serif font-bold uppercase whitespace-no-wrap",staticStyle:{"font-family":"Garamond, 'Times New Roman', serif"},attrs:{to:this.to}},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},215:function(t,e,s){"use strict";var i={components:{Icons:s(211).a},props:["link","poster","title","subtitle","icons"]},a=s(6),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rounded shadow-lg m-4 flex bg-gray-900"},[s("div",{staticClass:"flex-none"},[t.poster?s("g-link",{attrs:{to:t.link}},[s("g-image",{staticClass:"h-32 w-24 md:h-64 md:w-48",attrs:{src:t.poster,alt:t.title+" poster"}})],1):t._e()],1),s("div",{staticClass:"flex-auto px-4"},[s("h3",{staticClass:"font-bold text-2xl md:text-4xl text-gray-200 leading-tight"},[s("g-link",{attrs:{to:t.link}},[t._v(t._s(t.title))])],1),s("h4",{staticClass:"text-base md:text-xl leading-tight"},[t._v(t._s(t.subtitle))]),s("div",{staticClass:"hidden md:block mt-4"},[t._t("default")],2),s("Icons",{staticClass:"hidden md:flex mt-6",attrs:{icons:t.icons}})],1)])}),[],!1,null,null,null);e.a=n.exports},216:function(t,e,s){"use strict";var i=s(215),a=s(213),n=s(214),l={components:{Card:i.a,Score:a.a,Classification:n.a},props:{movie:Object}},o=s(6),r=Object(o.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Card",{attrs:{link:t.movie.path,image:t.movie.images&&t.movie.images.poster,title:t.movie.title,subtitle:t.movie.year,icons:t.movie.genres||[].concat(t.movie.studios||[],t.movie.countries||[],t.movie.languages||[])}},[s("p",{staticClass:"text-xl text-base text-gray-100 leading-snug h-20 overflow-hidden"},[t._v(t._s(t.movie.plot))]),t.movie.classification?s("classification",{staticClass:"float-right",attrs:{to:t.movie.classification.path}},[t._v(t._s(t.movie.classification.title))]):t._e(),t.movie.score?s("score",{staticClass:"mt-2",attrs:{percent:t.movie.score.id,stars:5}}):t._e()],1)}),[],!1,null,null,null);e.a=r.exports},223:function(t,e){},233:function(t,e,s){"use strict";var i=s(223),a=s.n(i);e.default=a.a},243:function(t,e,s){"use strict";s.r(e);var i={components:{Movie:s(216).a},metaInfo:function(){return{title:this.title}},computed:{title:function(){return this.$page.classification.title+" Movies"}}},a=s(6),n=s(233),l=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.$page.classification.title))]),this._l(this.$page.classification.movies,(function(t,s){return e("Movie",{key:s,attrs:{movie:t}})}))],2)}),[],!1,null,null,null);"function"==typeof n.default&&Object(n.default)(l);e.default=l.exports}}]);