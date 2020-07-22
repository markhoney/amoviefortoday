(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{mae7:function(t,e,a){"use strict";var o=a("xuZE");a.n(o).a},odGf:function(t,e,a){"use strict";a.r(e);a("fbCW");var o={metaInfo:{title:"About this website"},methods:{stat:function(t){var e=this.$page.allStats.edges.find((function(e){return e.node.id===t}));if(e)return e.node.value}}},n=(a("mae7"),a("KHd+")),s=null,i=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Fixed",[a("h2",[t._v("About")]),a("p",[t._v("\n\t\tHave you ever spotted a date mentioned in a movie, or wondered when historical events in movies actually took place?\n\t\tWouldn't it be cool if you could watch a movie on the same date the events in it occurred?\n\t")]),a("p",[t._v("\n\t\tMaybe you've arrived home after a long day at work, sat down in front of the TV to relax and unwind, and found that you can't choose a movie to watch.\n\t\tWith all the streaming options available these days there's so much choice, maybe you just want someone to make the decision for you.\n\t")]),a("p",[t._v("\n\t\tWell, fret no longer. For every day of the year, this website suggests movies that you can watch.\n\t\tWhat makes this site interesting is that it's not just picking random movies. Each suggestion is in someone connected to the day it's connected to.\n\t")]),a("ul",{staticClass:"list-disc"},[a("li",[t._v("It might be that a movie this site suggests is based on historical events, and an event in the movie happened on the day in question.")]),a("li",[t._v("It may be a fictional movie, but one which mentions real dates. Maybe one that happens on a single day.")]),a("li",[t._v("\n\t\t\tIt could be that there's a day of the year where that movie is celebrated, such as\n\t\t\t"),a("g-link",{attrs:{to:"/movie/tt0092099"}},[t._v("Top Gun")]),t._v(" Day ("),a("g-link",{attrs:{to:"/may/13"}},[t._v("13th May")]),t._v("),\n\t\t\t"),a("g-link",{attrs:{to:"/movie/tt0088763"}},[t._v("Back to the Future")]),t._v(" Day ("),a("g-link",{attrs:{to:"/october/21"}},[t._v("21st October")]),t._v(") or\n\t\t\t"),a("g-link",{attrs:{to:"/movie/tt0083658"}},[t._v("Blade Runner")]),t._v(" Day ("),a("g-link",{attrs:{to:"/november/1"}},[t._v("1st November")]),t._v(").\n\t\t")],1),a("li",[t._v("\n\t\t\tOr it could just be that the day's a special day, and there's an obvious movie or two for that day, like\n\t\t\t"),a("g-link",{attrs:{to:"/movie/tt0138704"}},[t._v("Pi")]),t._v(" or\n\t\t\t"),a("g-link",{attrs:{to:"/movie/tt0454876"}},[t._v("Life of Pi")]),t._v(" on\n\t\t\tPi Day ("),a("g-link",{attrs:{to:"/march/14"}},[t._v("March 14th")]),t._v("), or\n\t\t\t"),a("g-link",{attrs:{to:"/movie/tt0325980"}},[t._v("Pirates of the Caribbean")]),t._v(" on\n\t\t\tTalk Like a Pirate Day ("),a("g-link",{attrs:{to:"/september/19"}},[t._v("September 19th")]),t._v(")\n\t\t")],1)]),a("h2",[t._v("Stats")]),a("p",[t._v("\n\t\tThis database contains "),a("b",[t._v(t._s(t.stat("events")))]),t._v(" events from "),a("b",[t._v(t._s(t.stat("movies")))]),t._v(" movies.\n\t\tThese events cover "),a("b",[t._v(t._s(t.stat("days")))]),t._v(" days of the year, and the events occurred in "),a("b",[t._v(t._s(t.stat("years")))]),t._v(" different years.\n\t\tThe movies were made in "),a("b",[t._v(t._s(t.stat("countries")))]),t._v(" countries, have "),a("b",[t._v(t._s(t.stat("languages")))]),t._v(" spoken (or signed) languages\n\t\tand were made by "),a("b",[t._v(t._s(t.stat("studios")))]),t._v(" different movie studios.\n\t")]),a("h2",[t._v("History")]),a("p",[t._v("\n\t\tThe idea for this website came about when a friend watched "),a("g-link",{attrs:{to:"/tt0367594"}},[t._v("Charlie and the Chocolate Factory")]),t._v(" on the First of February,\n\t\tand spotted that the visit to the chocolate factory happens on "),a("g-link",{attrs:{to:"/february/1"}},[t._v("February the first")]),t._v(".\n\t\tWhen he realised that the next day, "),a("g-link",{attrs:{to:"/february/2"}},[t._v("February the second")]),t._v(", was "),a("g-link",{attrs:{to:"/tt0107048"}},[t._v("Groundhog Day")]),t._v(",\n\t\the thought it was a nice coincidence.\n\t")],1),a("p",[t._v("\n\t\tWhen I was told this story a few days later, we both sat there and thought of a few more movies that are related to a particular day of the year.\n\t\tSome of the first movies we came up with were\n\t\t"),a("g-link",{attrs:{to:"/tt0116629"}},[t._v("Independence Day")]),t._v(",\n\t\t"),a("g-link",{attrs:{to:"/tt0058777"}},[t._v("Zulu")]),t._v(",\n\t\t"),a("g-link",{attrs:{to:"/tt0077651"}},[t._v("Halloween")]),t._v(" and\n\t\t"),a("g-link",{attrs:{to:"/tt0095016"}},[t._v("Die Hard")]),t._v(".\n\t\tOf course, it seemed prudent to start adding these movies to a spreadsheet.\n\t")],1),a("p",[t._v("\n\t\tAs the spreadsheet started growing, I realised that it would be nice to have a website where others could see the list.\n\t\tSo I figured I'd try out "),a("a",{attrs:{href:"https://gridsome.org/",target:"_blank",rel:"noopener"}},[t._v("Gridsome")]),t._v(",\n\t\ta nice Vue based static site generator that uses "),a("a",{attrs:{href:"https://graphql.org/",target:"_blank",rel:"noopener"}},[t._v("GraphQL")]),t._v(" as a data layer.\n\t\tI'm a big fan of shiny new JavaScript technologies, and a "),a("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("Vue")]),t._v("/GraphQL solution seemed perfect.\n\t\tI've also used "),a("a",{attrs:{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener"}},[t._v("Tailwind CSS")]),t._v(", a utility-first CSS library, to make things look pretty.\n\t")]),a("h2",[t._v("Metrics")]),a("h3",{attrs:{id:"stars"}},[t._v("Stars")]),a("p",[t._v("\n\t\tThe star rating on this website is based on "),a("a",{attrs:{href:"https://www.imdb.com/",target:"_blank",rel:"noopener"}},[t._v("IMDB")]),t._v(" and "),a("a",{attrs:{href:"https://www.themoviedb.org/",target:"_blank",rel:"noopener"}},[t._v("TheMovieDB")]),t._v(" scores,\n\t\tand takes into account that only very bad movies score below 40% (and not many reach below 30%), and not many movies score higher than 80%.\n\t")]),a("dl",[a("dt",[t._v("0% - 40%")]),a("dd",[t._v("0 stars")]),a("dt",[t._v("40% - 50%")]),a("dd",[t._v("1 star")]),a("dt",[t._v("50% - 60%")]),a("dd",[t._v("2 stars")]),a("dt",[t._v("60% - 70%")]),a("dd",[t._v("3 stars")]),a("dt",[t._v("70% - 80%")]),a("dd",[t._v("4 stars")]),a("dt",[t._v("80% - 100%")]),a("dd",[t._v("5 stars")])]),a("h3",{attrs:{id:"bechdel"}},[t._v("Bechdel Score")]),a("p",[t._v("\n\t\tThe Bechdel score uses the popular "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bechdel_test",target:"_blank",rel:"noopener"}},[t._v("Bechdel Test")]),t._v("\n\t\tto measure how well represented women are in a movie.\n\t\tThe bar for scoring is fairly low, but it's surprising how many movies don't manage to score the full three points.\n\t\tHere's are the three levels of Bechdel scores:\n\t")]),a("ol",{staticClass:"list-decimal"},[a("li",[t._v("A movie has at least two women in it")]),a("li",[t._v("A movie has at least two women in it who talk to each other")]),a("li",[t._v("A movie has at least two women in it who talk to each other about something other than a man")])]),a("p",[t._v("A movie with a Bechdel score of 0 does not even reach the level of having two women in it. This is frequently the case, for example, in older war movies.")]),a("p",[t._v("\n\t\tBechdel results are scraped from the "),a("a",{attrs:{href:"http://bechdeltest.com/",target:"_blank",rel:"noopener"}},[t._v("Bechdel Test website")]),t._v(",\n\t\tso if you want to see a Bechdel score for a movie on this site that's missing one, watch the movie, work out its score and add it to the site's API.\n\t\tWhen the next build of this website is run, the score will be added.\n\t")]),a("h3",{attrs:{id:"value"}},[t._v("Value for Money")]),a("p",[t._v("Coming soon...")])])}),[],!1,null,"1ad2c74a",null);"function"==typeof s&&s(i);e.default=i.exports},xuZE:function(t,e,a){}}]);