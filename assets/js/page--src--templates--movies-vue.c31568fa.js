(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"15al":function(t,e,a){"use strict";a("ma9I");var l=a("KQm4"),i={props:["value"],computed:{icons:function(){return[].concat(Object(l.a)(this.value.genres||[]),Object(l.a)(this.value.studios||[]),Object(l.a)(this.value.countries||[]),Object(l.a)(this.value.languages||[]))}}},s=(a("Ta4G"),a("KHd+")),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex mb-2"},t._l(t.icons,(function(e){return a("g-link",{key:e.title,attrs:{to:e.path}},[e.image?a("g-image",{staticClass:"icon",attrs:{src:e.image,title:e.title,height:"32"}}):t._e()],1)})),1)}),[],!1,null,"45b96000",null);e.a=o.exports},JdHR:function(t,e,a){"use strict";var l=a("e2bQ"),i=a("iTj/"),s={components:{Score:l.a,Classification:i.a},props:{value:Object}},o=a("KHd+"),n=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-gray-100 font-bold",staticStyle:{"max-width":"200px"}},[a("div",{staticClass:"rounded-lg rounded-r-none hover:opacity-100 duration-500 ease-in-out transition-opacity flex flex-col bg-black bg-opacity-75 top-0 left-0 w-full h-full p-2 text-center justify-around",class:{absolute:t.value.images&&t.value.images.poster,"opacity-0":t.value.images&&t.value.images.poster}},[t.value.score?a("div",[t._v("\n\t\t\tRating: "+t._s(t.value.score.id)+" %\n\t\t")]):t._e(),t.value.awards?a("div",[t._v("\n\t\t\tAwards:\n\t\t\t"+t._s(t.value.awards)+"\n\t\t")]):t._e(),t.value.runtime?a("div",[t._v("\n\t\t\tLength: "+t._s(t.value.runtime)+" mins\n\t\t")]):t._e()]),t.value.images&&t.value.images.poster?a("g-image",{attrs:{src:t.value.images.poster,alt:t.value.title+" poster"}}):t._e()],1)}),[],!1,null,null,null);e.a=n.exports},"TK/9":function(t,e,a){},Ta4G:function(t,e,a){"use strict";var l=a("TK/9");a.n(l).a},ZRVG:function(t,e,a){"use strict";var l={props:["value"]},i=a("KHd+"),s=Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.value.images&&t.value.images.logo?a("h2",[t.value.path?a("g-link",{attrs:{to:t.value.path,title:"See details for the movie "+t.value.title}},[a("g-image",{attrs:{src:t.value.images.logo,immediate:!0}})],1):a("g-image",{attrs:{src:t.value.images.logo}})],1):a("h2",[t.value.path?a("g-link",{attrs:{to:t.value.path,title:"See details for the movie "+t.value.title}},[t._v(t._s(t.value.title))]):[t._v(t._s(t.value.title))],t.value.year?[t._v(" ("),a("g-link",{attrs:{to:t.value.year.path,title:"See all movies released in "+t.value.year.id}},[t._v(t._s(t.value.year.id))]),t._v(")")]:t._e()],2)}),[],!1,null,null,null);e.a=s.exports},e2bQ:function(t,e,a){"use strict";var l={title:"StarRating",props:["percent","stars","colour","numeric"],computed:{rating:function(){return Math.min(Math.max(this.percent/10-3,0),5)}}},i=a("KHd+"),s=Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{color:t.colour||"#4299E1"},attrs:{title:t.percent+"%"}},[t._l(t.stars,(function(e){return a("button",{key:e,class:{"text-gray-300":e>t.rating}},[a("svg",{staticClass:"w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 260 245"}},[a("path",{attrs:{d:"M55 237L129 9l74 228L9 96h240"}})])])})),t.numeric?a("span",{staticClass:"ml-5 text-3xl text-gray-300"},[t._v(t._s(t.percent)+"%")]):t._e()],2)}),[],!1,null,"c8bdc5ce",null);e.a=s.exports},gAg2:function(t,e,a){"use strict";var l={props:["value","separator"],computed:{date:function(){return this.value.dayofyear.month.title+" "+this.value.dayofyear.day.id+this.value.dayofyear.day.ordinal}}},i=a("KHd+"),s=Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("b",[t.value.dayofyear.month&&t.value.dayofyear.day&&t.value.dayofyear.path?[a("g-link",{staticClass:"inline-block",attrs:{to:t.value.dayofyear.path,title:"See all events on "+[t.value.dayofyear.month.title,t.value.dayofyear.day.id+t.value.dayofyear.day.ordinal].join(" ")}},[t._v("\n\t\t\t\t"+t._s([t.value.dayofyear.month.title,t.value.dayofyear.day.id+t.value.dayofyear.day.ordinal].join(" "))+"\n\t\t\t")]),t._v(t._s(t.value.year&&",")+"\n\t\t")]:t.value.dayofyear.month&&t.value.dayofyear.day&&t.value.dayofyear.month.path?[a("g-link",{staticClass:"inline-block",attrs:{to:t.value.dayofyear.month.path,title:"See all events in "+t.value.dayofyear.month.title}},[t._v("\n\t\t\t\t"+t._s(t.value.dayofyear.month.title)+"\n\t\t\t")]),t._v(" "+t._s(t.value.dayofyear.day.id)+t._s(t.value.dayofyear.day.ordinal)+t._s(t.value.year&&",")+"\n\t\t")]:t.value.dayofyear.month&&t.value.dayofyear.day?[t._v("\n\t\t\t"+t._s([t.value.dayofyear.month.title,t.value.dayofyear.day.id+t.value.dayofyear.day.ordinal].join(" "))+t._s(t.value.year&&",")+"\n\t\t")]:t.value.dayofyear.month?[a("g-link",{staticClass:"inline-block",attrs:{title:"See all events in "+t.value.dayofyear.month.title}},[t._v("\n\t\t\t\t"+t._s(this.value.dayofyear.month.title)+"\n\t\t\t")]),t._v(t._s(t.value.year&&",")+"\n\t\t")]:t.value.dayofyear.day?[a("g-link",{staticClass:"inline-block",attrs:{to:t.value.dayofyear.day.path,title:"See all events on the "+t.value.dayofyear.day.id+t.value.dayofyear.day.ordinal}},[t._v("\n\t\t\t\t"+t._s(t.value.dayofyear.day.id)+t._s(t.value.dayofyear.day.ordinal)+"\n\t\t\t")]),t._v(t._s(t.value.year&&",")+"\n\t\t")]:t._e(),t.value.year?[a("g-link",{attrs:{to:t.value.year.path,title:"See all events in "+t.value.year.id}},[t._v(t._s(t.value.year.id))])]:t._e()],2),t._v("\n\t"+t._s(t.separator)+"\n\t"+t._s(t.value.title)+"\n")])}),[],!1,null,null,null);e.a=s.exports},"iTj/":function(t,e,a){"use strict";var l={props:["value"]},i=a("KHd+"),s=Object(i.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("g-link",{staticClass:"m-2 px-1 border-4 rounded-lg font-serif font-bold uppercase whitespace-no-wrap",staticStyle:{"font-family":"Garamond, 'Times New Roman', serif"},attrs:{to:this.value.path,title:"See all movies classified "+this.value.title}},[this._v("\n\t"+this._s(this.value.title)+"\n")])}),[],!1,null,null,null);e.a=s.exports},oMkY:function(t,e,a){"use strict";a.r(e);var l=a("e2bQ"),i=a("iTj/"),s=(a("oVuX"),a("+2oP"),{props:["value"],data:function(){return{levels:["This movie does not have two women in it","This movie has at least two women in it","who talk to each other","about something other than a man"],colours:["bg-red-600","bg-orange-600","bg-yellow-600","bg-green-600"]}},computed:{title:function(){return 0===this.value?this.levels[0]+".":this.levels.slice(1,this.value+1).join(", ")+"."}}}),o=a("KHd+"),n=Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"ml-4 pb-1 px-5 font-bold rounded-md",class:this.colours[this.value],attrs:{title:this.title}},[this._v(this._s(this.value))])}),[],!1,null,null,null).exports,r=a("JdHR"),u=a("ZRVG"),v=a("gAg2"),c={components:{Icons:a("15al").a,Score:l.a,MoviePoster:r.a,Classification:i.a,Bechdel:n,MovieTitle:u.a,EventLine:v.a},metaInfo:function(){return{title:this.title}},computed:{title:function(){return this.$page.movie.title}}},d=null,m=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$page.movie.images&&t.$page.movie.images.fanart?a("g-image",{staticClass:"absolute z-0 w-full object-cover object-top",staticStyle:{height:"20rem",filter:"saturate(0.2) brightness(0.5)","clip-path":"polygon(0 0, 100% 0, 100% calc(100% - 4vw), 0 100%)"},attrs:{src:t.$page.movie.images.fanart}}):t._e(),a("div",{staticClass:"flex w-full h-full p-2 pt-16"},[t.$page.movie.images&&t.$page.movie.images.poster?a("div",{staticClass:"pr-48 ml-8 hidden sm:inline height-1"},[a("movie-poster",{staticClass:"absolute shadow-lg border-4 border-white w-48 z-0",attrs:{value:t.$page.movie}})],1):t._e(),a("div",{staticClass:"flex-auto md:ml-16 z-10"},[a("div",{staticClass:"h-56"},[a("movie-title",{staticClass:"font-bold text-4xl md:text-5xl tracking-loose leading-tight z-10",staticStyle:{"text-shadow":"2px 2px #111"},attrs:{value:t.$page.movie}}),t.$page.movie.score?a("score",{staticClass:"mt-2",attrs:{percent:t.$page.movie.score.id,stars:5,numeric:!0}}):t._e()],1),a("div",{staticClass:"mt-4 mr-8 max-w-screen-lg p-8 text-xl"},[a("p",[t._v(t._s(t.$page.movie.plot))]),a("h3",{staticClass:"mt-8 text-3xl"},[t._v("Events")]),a("ul",{staticClass:"ml-8"},t._l(t.$page.movie.events,(function(t){return a("li",{key:t.id},[a("event-line",{attrs:{value:t}})],1)})),0),t.$page.movie.directors?a("p",{staticClass:"mt-4"},[a("b",[t._v("Directed by")]),t._v(" "+t._s(t.$page.movie.directors.map((function(t){return t.title})).join(", ")))]):t._e(),t.$page.movie.actors?a("p",{staticClass:"mt-4"},[a("b",[t._v("Starring")]),t._v(" "+t._s(t.$page.movie.actors.map((function(t){return t.title})).join(", ")))]):t._e(),t.$page.movie.bechdel?a("p",{staticClass:"mt-4"},[a("g-link",{staticClass:"font-bold",attrs:{to:"/about#bechdel"}},[t._v("Bechdel score")]),a("bechdel",{attrs:{value:t.$page.movie.bechdel.rating}})],1):t._e()])]),a("div",{staticClass:"z-10"},[t.$page.movie.classification?a("classification",{staticClass:"float-right md:mr-16",attrs:{value:t.$page.movie.classification}}):t._e()],1)])],1)}),[],!1,null,null,null);"function"==typeof d&&d(m);e.default=m.exports}}]);