(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"15al":function(t,e,a){"use strict";a("ma9I");var n=a("KQm4"),i={props:["value"],computed:{icons:function(){return[].concat(Object(n.a)(this.value.genres||[]),Object(n.a)(this.value.studios||[]),Object(n.a)(this.value.countries||[]),Object(n.a)(this.value.languages||[]))}}},s=(a("aiK9"),a("KHd+")),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex mb-2"},t._l(t.icons,(function(e){return a("g-link",{key:e.title,attrs:{to:e.path}},[e.image?a("g-image",{staticClass:"icon",attrs:{src:e.image,title:e.title,height:"32"}}):t._e()],1)})),1)}),[],!1,null,"081c9ca8",null);e.a=o.exports},DQNa:function(t,e,a){var n=a("busE"),i=Date.prototype,s=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(i,"toString",(function(){var t=o.call(this);return t==t?s.call(this):"Invalid Date"}))},EcVB:function(t,e,a){"use strict";var n=a("m0kF");a.n(n).a},JdHR:function(t,e,a){"use strict";var n=a("e2bQ"),i=a("iTj/"),s={components:{Score:n.a,Classification:i.a},props:{value:Object}},o=a("KHd+"),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-gray-100 font-bold",staticStyle:{"max-width":"200px"}},[a("div",{staticClass:"rounded-lg rounded-r-none hover:opacity-100 duration-500 ease-in-out transition-opacity flex flex-col bg-black bg-opacity-75 top-0 left-0 w-full h-full p-2 text-center justify-around",class:{absolute:t.value.images&&t.value.images.poster,"opacity-0":t.value.images&&t.value.images.poster}},[t.value.score?a("div",[t._v("\n\t\t\tRating: "+t._s(t.value.score.id)+" %\n\t\t")]):t._e(),t.value.awards?a("div",[t._v("\n\t\t\tAwards:\n\t\t\t"+t._s(t.value.awards)+"\n\t\t")]):t._e(),t.value.runtime?a("div",[t._v("\n\t\t\tLength: "+t._s(t.value.runtime)+" mins\n\t\t")]):t._e()]),t.value.images&&t.value.images.poster?a("g-image",{attrs:{src:t.value.images.poster,alt:t.value.title+" poster"}}):t._e()],1)}),[],!1,null,null,null);e.a=l.exports},PQHp:function(t,e,a){"use strict";var n=a("KHd+"),i=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("Please wait, fetching data...")])}),[],!1,null,null,null);e.a=i.exports},"U+9f":function(t,e,a){"use strict";var n={components:{MovieIcons:a("15al").a},props:["link","poster","title","subtitle","icons"]},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rounded shadow-lg m-4 flex bg-gray-900"},[a("div",{staticClass:"flex-none"},[t.poster?a("g-link",{attrs:{to:t.link}},[a("g-image",{staticClass:"h-32 w-24 md:h-64 md:w-48",attrs:{src:t.poster,alt:t.title+" poster"}})],1):t._e()],1),a("div",{staticClass:"flex-auto px-4"},[a("h3",{staticClass:"font-bold text-2xl md:text-4xl text-gray-200 leading-tight"},[a("g-link",{attrs:{to:t.link}},[t._v(t._s(t.title))])],1),a("h4",{staticClass:"text-base md:text-xl leading-tight"},[t._v(t._s(t.subtitle))]),a("div",{staticClass:"hidden md:block mt-4"},[t._t("default")],2),a("movie-icons",{staticClass:"hidden md:flex mt-6",attrs:{value:{genres:t.icons}}})],1)])}),[],!1,null,null,null);e.a=s.exports},ZRVG:function(t,e,a){"use strict";var n={props:["value"]},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t.value.path?a("g-link",{attrs:{to:t.value.path,title:"See details for the movie "+t.value.title}},[t._v(t._s(t.value.title))]):[t._v(t._s(t.value.title))],t.value.year?[t._v(" ("),a("g-link",{attrs:{to:t.value.year.path,title:"See all movies released in "+t.value.year.id}},[t._v(t._s(t.value.year.id))]),t._v(")")]:t._e()],2)}),[],!1,null,null,null);e.a=s.exports},aF0U:function(t,e,a){"use strict";var n=a("15al"),i=a("JdHR"),s=a("ZRVG"),o=a("gAg2"),l={components:{MovieIcons:n.a,MoviePoster:i.a,MovieTitle:s.a,EventLine:o.a},props:["value"]},r=(a("EcVB"),a("KHd+")),u=Object(r.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex shadow-xl bg-gray-400 dark:bg-gray-900 rounded-lg"},[a("movie-poster",{staticClass:"relative",attrs:{value:t.value.movie}}),a("div",{staticClass:"w-3/4 p-4 px-6 rounded-lg flex flex-col"},[a("movie-title",{staticClass:"mb-4 font-bold text-2xl md:text-4xl leading-none",attrs:{value:t.value.movie}}),a("div",{staticClass:"flex-grow"},[t.value.title?a("h4",{staticClass:"text-lg md:text-xl leading-tight text-primary-dark dark:text-primary-lighter"},[a("event-line",{attrs:{value:t.value}})],1):t._e(),a("div",{staticClass:"hidden sm:block"},[a("p",{staticClass:"plot"},[t._v(t._s(t.value.movie.plot))])])]),a("movie-icons",{staticClass:"hidden sm:flex mt-2",attrs:{value:t.value.movie}})],1)],1)}),[],!1,null,"189ab41f",null);e.a=u.exports},aiK9:function(t,e,a){"use strict";var n=a("fGVV");a.n(n).a},e2bQ:function(t,e,a){"use strict";var n={title:"StarRating",props:["percent","stars","colour","numeric"],computed:{rating:function(){return this.percent*(this.stars+1)/100-.5}}},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{color:t.colour||"#4299E1"},attrs:{title:t.percent+"%"}},[t._l(t.stars,(function(e){return a("button",{key:e,class:{"text-gray-300":e>t.rating}},[a("svg",{staticClass:"w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 260 245"}},[a("path",{attrs:{d:"M55 237L129 9l74 228L9 96h240"}})])])})),t.numeric?a("span",{staticClass:"ml-5 text-3xl text-gray-300"},[t._v(t._s(t.percent)+"%")]):t._e()],2)}),[],!1,null,"25dadfe1",null);e.a=s.exports},fGVV:function(t,e,a){},gAg2:function(t,e,a){"use strict";var n={props:["value","separator"],computed:{date:function(){return this.value.dayofyear.month.title+" "+this.value.dayofyear.day.id+this.value.dayofyear.day.ordinal}}},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("b",[t.value.dayofyear.month&&t.value.dayofyear.day&&t.value.dayofyear.path?a("g-link",{attrs:{to:t.value.dayofyear.path,title:"See all events on "+[this.value.dayofyear.month.title,this.value.dayofyear.day.id+this.value.dayofyear.day.ordinal].join(" ")}},[t._v("\n\t\t\t"+t._s([this.value.dayofyear.month.title,this.value.dayofyear.day.id+this.value.dayofyear.day.ordinal].join(" "))+"\n\t\t")]):t.value.dayofyear.month&&t.value.dayofyear.day?[t._v("\n\t\t\t"+t._s([this.value.dayofyear.month.title,this.value.dayofyear.day.id+this.value.dayofyear.day.ordinal].join(" "))+"\n\t\t")]:t.value.dayofyear.month?a("g-link",{attrs:{to:t.value.dayofyear.month.path,title:"See all events in "+this.value.dayofyear.month.title}},[t._v("\n\t\t\t"+t._s(this.value.dayofyear.month.title)+"\n\t\t")]):t.value.dayofyear.day?a("g-link",{attrs:{to:t.value.dayofyear.day.path,title:"See all events on the "+this.value.dayofyear.day.id+this.value.dayofyear.day.ordinal}},[t._v("\n\t\t\t"+t._s(this.value.dayofyear.day.id+this.value.dayofyear.day.ordinal)+"\n\t\t")]):t._e(),t.value.year?[t._v(",\n\t\t\t"),a("g-link",{attrs:{to:t.value.year.path,title:"See all events in "+t.value.year.id}},[t._v(t._s(t.value.year.id))])]:t._e()],2),t._v("\n\t"+t._s(t.separator)+"\n\t"+t._s(t.value.title)+"\n")])}),[],!1,null,null,null);e.a=s.exports},"iTj/":function(t,e,a){"use strict";var n={props:["value"]},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("g-link",{staticClass:"m-2 px-1 border-4 rounded-lg font-serif font-bold uppercase whitespace-no-wrap",staticStyle:{"font-family":"Garamond, 'Times New Roman', serif"},attrs:{to:this.value.path,title:"See all movies classified "+this.value.title}},[this._v("\n\t"+this._s(this.value.title)+"\n")])}),[],!1,null,null,null);e.a=s.exports},iyQ6:function(t,e,a){"use strict";a.r(e);a("ma9I"),a("DQNa"),a("07d7"),a("R5XZ"),a("ls82");var n=a("HaE+"),i=(a("ToJy"),a("aF0U")),s=a("lwU2"),o=a("PQHp"),l={components:{Event:i.a,NoEvents:s.a,Loading:o.a},props:["value"],data:function(){return{bottom:!0}},computed:{date:function(){return this.value.month.title+" "+this.value.day.id+this.value.day.ordinal},events:function(){return this.value.events.sort((function(t,e){return e.movie.votes-t.movie.votes}))}},methods:{navigate:function(t){"ArrowLeft"===t.code?this.$router.push({path:this.value.previous.path}):"ArrowRight"===t.code&&this.$router.push({path:this.value.next.path})},scroll:function(){this.bottom=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight}},mounted:function(){window.addEventListener("keydown",this.navigate)}},r=a("KHd+"),u={components:{Day:Object(r.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.value?a("section",[a("h1",{staticClass:"font-bold text-4xl text-center"},[a("g-link",{attrs:{to:t.value.previous.path,title:t.value.previous.title}},[t._v("🠰")]),t._v(" \n\t\t"),a("span",{staticClass:"inline-block"},[a("g-link",{attrs:{to:t.value.month.path,title:"See all events in "+t.value.month.title}},[t._v(t._s(t.value.month.title))]),t._v(" "+t._s(t.value.day.id)+t._s(t.value.day.ordinal))],1),t._v(" \n\t\t"),a("g-link",{attrs:{to:t.value.next.path,title:t.value.next.title}},[t._v("🠲")])],1),t.events?t._l(t.events,(function(t){return a("Event",{key:t.id,staticClass:"my-4 md:my-8",attrs:{value:t}})})):a("NoEvents"),a("div",{staticClass:"text-center text-6xl font-bold"},[a("g-link",{attrs:{to:t.value.previous.path,title:t.value.previous.title}},[a("button",{staticClass:"mr-8 px-2"},[t._v("\n\t\t\t\t🠰\n\t\t\t")])]),a("g-link",{attrs:{to:t.value.next.path,title:t.value.next.title}},[a("button",{staticClass:"mr-8 px-2"},[t._v("\n\t\t\t\t🠲\n\t\t\t")])])],1)],2):a("section",[a("Loading")],1)}),[],!1,null,null,null).exports},metaInfo:function(){return{title:this.title}},data:function(){return{now:new Date,mounted:!1,frontend:!1,title:"Today's Movies",months:["January","February","March","April","May","June","July","August","September","October","November","December"]}},created:function(){var t=this;setInterval((function(){return t.now=new Date}),6e4)},mounted:function(){window&&(this.frontend=!0),this.mounted=!0},computed:{month:function(){return this.months[this.now.getMonth()].toLowerCase()},day:function(){return this.now.getDate()},date:function(){return this.day.month_full+" "+this.day.day_ordinal}},asyncComputed:{today:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.mounted){e.next=18;break}if(!t.frontend){e.next=5;break}t.$router.push({path:"/".concat(t.month,"/").concat(t.day,"/")}),e.next=18;break;case 5:return e.next=7,fetch("/assets/data/".concat(t.month,"/").concat(t.day,"/index.json"));case 7:return a=e.sent,e.prev=8,e.next=11,a.json();case 11:return n=e.sent,e.abrupt("return",n.data.days.edges[0].node);case 15:e.prev=15,e.t0=e.catch(8),t.$router.push({path:"/".concat(t.month,"/").concat(t.day,"/")});case 18:return e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[8,15]])})))()}}},c=Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("p",[this._v("Have you ever arrived home after a long day at work, sat down in front of the TV to relax and unwind, and then found that you can't choose a movie to watch? Maybe you want someone to make the decision for you, maybe with all the streaming options available these days there's too much choice.")]),e("p",[this._v("Well, fret no longer. For every day of the year, this website suggests movies that you can watch. What makes this site interesting is that it's not just picking random movies. Each suggestion is in someone connected to the day it's connected to.")]),this._m(0),e("day",{attrs:{value:this.today}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("It might be that a movie this site suggests is based on historical events, and an event in the movie happened on the day in question.")]),e("li",[this._v("It may be a fictional movie, but one which mentions real dates.")]),e("li",[this._v("It could be that there's a day of the year where that movie is celebrated, such as Top Gun Day (13th May), Back to the Future Day (21st October) or Blade Runner Day (1st November).")]),e("li",[this._v("Or it could just be that the day's a special day, and there's an obvious movie or two for that day, like Pi or The Life of Pi on Pi Day (March 14th) or Pirates of the Caribbean on Talk Like a Pirate Day (September 19th)")])])}],!1,null,null,null);e.default=c.exports},lwU2:function(t,e,a){"use strict";var n={components:{Card:a("U+9f").a}},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("card",{attrs:{link:"mailto:mark@honeychurch.org",title:"Sorry",subtitle:"There are no movies for this day"}},[e("p",[this._v("If you know of a movie that is connected to this date, please let me know by emailing me at "),e("a",{attrs:{href:"mailto:mark@honeychurch.org"}},[this._v("mark@honeychurch.org")])])])}),[],!1,null,null,null);e.a=s.exports},m0kF:function(t,e,a){}}]);