(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"1b5j":function(e,t,a){},"9Pk/":function(e,t,a){"use strict";var l={props:["value","invert"]},n=(a("sR4R"),a("KHd+")),i=Object(n.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"inline-flex flex-row"},[e._l(["genres","studios","countries","languages"],(function(t){return e._l(e.value[t],(function(l){return a("li",{key:l.title},[a("g-link",{attrs:{to:l.path}},[l.image?a("g-image",{staticClass:"icon hover:scale-150 transform transition-transform ease-in-out duration-500",class:{invert:["genres","countries"].includes(t)&&!e.$store.state.dark},attrs:{src:l.image,title:l.title}}):e._e()],1)],1)}))}))],2)}),[],!1,null,"b5d058e8",null);t.a=i.exports},JdHR:function(e,t,a){"use strict";var l={props:{value:Object,rounded:Boolean}},n=a("KHd+"),i=Object(n.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("g-link",{class:{"cursor-default":!e.value.path},attrs:{to:e.value.path}},[a("div",{staticClass:"text-grey-lightest font-bold hover:scale-110 transform transition-transform ease-in-out duration-500",staticStyle:{"max-width":"200px"}},[a("div",{staticClass:"hover:opacity-100 duration-500 ease-in-out transition-all hover:rounded-l-none flex flex-col bg-black bg-opacity-75 top-0 left-0 w-full h-full p-2 text-center justify-around",class:{absolute:e.value.images&&e.value.images.poster,"rounded-l-lg":e.rounded,"opacity-0":e.value.images&&e.value.images.poster}},[e.value.score?a("div",[e._v("\n\t\t\t\tRating: "+e._s(e.value.score.id)+" %\n\t\t\t")]):e._e(),e.value.awards?a("div",[e._v("\n\t\t\t\tAwards:\n\t\t\t\t"+e._s(e.value.awards)+"\n\t\t\t")]):e._e(),e.value.runtime?a("div",[e._v("\n\t\t\t\tLength: "+e._s(e.value.runtime)+" mins\n\t\t\t")]):e._e()]),e.value.images&&e.value.images.poster?a("g-image",{class:{"rounded-l-lg":e.rounded},attrs:{src:e.value.images.poster,alt:e.value.title+" poster"}}):e._e()],1)])}),[],!1,null,null,null);t.a=i.exports},ZRVG:function(e,t,a){"use strict";var l={props:["value"]},n=a("KHd+"),i=Object(n.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.value.images&&e.value.images.logo?a("h2",[e.value.path?a("g-link",{attrs:{to:e.value.path,title:"See details for the movie "+e.value.title}},[a("g-image",{attrs:{src:e.value.images.logo,immediate:""}})],1):a("g-image",{attrs:{src:e.value.images.logo}})],1):a("h2",[e.value.path?a("g-link",{attrs:{to:e.value.path,title:"See details for the movie "+e.value.title}},[e._v(e._s(e.value.title))]):[e._v(e._s(e.value.title))],e.value.year?[e._v(" ("),a("g-link",{attrs:{to:e.value.year.path,title:"See all movies released in "+e.value.year.id}},[e._v(e._s(e.value.year.id))]),e._v(")")]:e._e()],2)}),[],!1,null,null,null);t.a=i.exports},gAg2:function(e,t,a){"use strict";var l={props:["value","separator"],computed:{date:function(){return this.value.dayofyear.month.title+" "+this.value.dayofyear.day.id+this.value.dayofyear.day.ordinal}}},n=a("KHd+"),i=Object(n.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.value.dayofyear?a("h3",[e.value.dayofyear.month&&e.value.dayofyear.day&&e.value.dayofyear.path?[a("g-link",{staticClass:"inline-block",attrs:{to:e.value.dayofyear.path,title:"See all events on "+[e.value.dayofyear.month.title,e.value.dayofyear.day.id+e.value.dayofyear.day.ordinal].join(" ")}},[e._v("\n\t\t\t"+e._s([e.value.dayofyear.month.title,e.value.dayofyear.day.id+e.value.dayofyear.day.ordinal].join(" "))+"\n\t\t")]),e._v(",\n\t")]:e.value.dayofyear.month&&e.value.dayofyear.day&&e.value.dayofyear.month.path?[a("g-link",{staticClass:"inline-block",attrs:{to:e.value.dayofyear.month.path,title:"See all events in "+e.value.dayofyear.month.title}},[e._v("\n\t\t\t"+e._s(e.value.dayofyear.month.title)+"\n\t\t")]),e._v(" "+e._s(e.value.dayofyear.day.id)+e._s(e.value.dayofyear.day.ordinal)+",\n\t")]:e.value.dayofyear.month&&e.value.dayofyear.day?[e._v("\n\t\t"+e._s([e.value.dayofyear.month.title,e.value.dayofyear.day.id+e.value.dayofyear.day.ordinal].join(" "))+",\n\t")]:e.value.dayofyear.month?[a("g-link",{staticClass:"inline-block",attrs:{title:"See all events in "+e.value.dayofyear.month.title}},[e._v("\n\t\t\t"+e._s(this.value.dayofyear.month.title)+"\n\t\t")]),e._v(",\n\t")]:e.value.dayofyear.day?[a("g-link",{staticClass:"inline-block",attrs:{to:e.value.dayofyear.day.path,title:"See all events on the "+e.value.dayofyear.day.id+e.value.dayofyear.day.ordinal}},[e._v("\n\t\t\t"+e._s(e.value.dayofyear.day.id)+e._s(e.value.dayofyear.day.ordinal)+"\n\t\t")]),e._v(",\n\t")]:e._e(),e.value.year?[a("g-link",{attrs:{to:e.value.year.path,title:"See all events in "+e.value.year.id}},[e._v(e._s(e.value.year.id))]),e._v(",\n\t")]:e._e(),e._v("\n\t"+e._s(e.separator)+"\n\t"+e._s(e.value.title)+"\n")],2):e._e()}),[],!1,null,null,null);t.a=i.exports},jTen:function(e,t,a){"use strict";var l=a("JdHR"),n=a("ZRVG"),i={components:{EventLine:a("gAg2").a},props:["value"]},s=a("KHd+"),o=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("ul",this._l(this.value,(function(e){return t("li",{key:e.id},[t("event-line",{attrs:{value:e}})],1)})),0)}),[],!1,null,null,null).exports,r=a("9Pk/"),u={components:{MoviePoster:l.a,MovieTitle:n.a,EventLines:o,MovieIcons:r.a},props:["value"]},v=Object(s.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex my-16"},[t("movie-poster",{staticClass:"w-32",attrs:{value:this.value}}),t("div",{staticClass:"ml-8 flex-grow flex flex-col"},[t("movie-title",{staticClass:"font-bold text-4xl tracking-loose leading-none",attrs:{value:this.value}}),t("event-lines",{staticClass:"flex-grow text-xl list-disc mt-4 mb-8 ml-16",attrs:{value:this.value.events}}),t("movie-icons",{staticClass:"ml-8",attrs:{value:this.value}})],1)],1)}),[],!1,null,null,null);t.a=v.exports},"o++v":function(e,t,a){"use strict";a.r(t);var l={components:{MovieDetails:a("jTen").a},metaInfo:function(){return{title:this.title}},computed:{title:function(){return"Today in "+this.$page.genre.title}}},n=a("KHd+"),i=null,s=Object(n.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("fixed",{attrs:{title:this.title}},this._l(this.$page.genre.movies,(function(e){return t("movie-details",{key:e.id,attrs:{value:e}})})),1)}),[],!1,null,null,null);"function"==typeof i&&i(s);t.default=s.exports},sR4R:function(e,t,a){"use strict";var l=a("1b5j");a.n(l).a}}]);