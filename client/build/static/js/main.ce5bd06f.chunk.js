(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{33:function(e,t,a){e.exports=a(53)},38:function(e,t,a){},39:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),m=a(2),i=a(23),o=a(6),u="https://api.themoviedb.org/3/",s="783cc29548d112c8fc331b8b7d9dd58d",d="https://image.tmdb.org/t/p/",p=(a(38),function(e){return l.a.createElement("div",{className:"mainImage",style:{height:"500px",backgroundImage:"url('".concat(e.image,"')"),backgroundSize:"cover",position:"relative"}},l.a.createElement("div",null,l.a.createElement("div",{style:{position:"absolute",maxWidth:"500px",bottom:"2rem",marginLeft:"2rem"}},l.a.createElement("h2",{style:{color:"white"}},e.title),l.a.createElement("p",{style:{color:"white",fontSize:"1rem"}},e.text))))}),h=a(55),v=a(57);a(39);var E=function(e){return e.landingPage?l.a.createElement(v.a,{lg:6,md:8,xs:24},e.image?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},l.a.createElement("a",{href:"/movie/".concat(e.movieId),className:"hover"},l.a.createElement("img",{style:{width:"100%",height:"480px"},src:e.image,alt:e.movieName}))),l.a.createElement("div",{className:"credit"},l.a.createElement("p",{style:{textAlign:"center"}},e.movieName))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},l.a.createElement("a",{href:"/movie/".concat(e.movieId),className:"hover"},l.a.createElement("div",{style:{width:"100%",height:"480px",border:"1px solid #ddd"}}),l.a.createElement("p",{className:"hover_title"},e.movieName))),l.a.createElement("div",{className:"credit"},l.a.createElement("p",{style:{textAlign:"center"}},e.movieName)))):e.actorPage?e.row?l.a.createElement(v.a,{lg:6,md:8,xs:24},e.image?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},l.a.createElement("a",{href:"/movie/".concat(e.movieId),className:"hover"},l.a.createElement("img",{style:{width:"100%",height:"480px"},src:e.image,alt:e.movieName}))),l.a.createElement("div",{className:"credit"},l.a.createElement("p",null,e.movieName),l.a.createElement("p",null,e.character?e.character:"(unkowned)"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},l.a.createElement("a",{href:"/movie/".concat(e.movieId),className:"hover"},l.a.createElement("div",{style:{width:"100%",height:"480px",border:"1px solid #ddd"}}),l.a.createElement("p",{className:"hover_title"},e.movieName))),l.a.createElement("div",{className:"credit"},l.a.createElement("p",null,e.movieName),l.a.createElement("p",null,e.character?e.character:"(unkowned)")))):l.a.createElement(v.a,{style:{display:"inline-block"}},e.image?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},l.a.createElement("a",{href:"/movie/".concat(e.movieId),className:"hover"},l.a.createElement("img",{style:{width:"100%",height:"480px"},src:e.image,alt:e.movieName}))),l.a.createElement("div",{className:"credit"},l.a.createElement("p",null,e.movieName),l.a.createElement("p",null,e.character?e.character:"(unkowned)"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},l.a.createElement("a",{href:"/movie/".concat(e.movieId),className:"hover"},l.a.createElement("div",{style:{width:"100%",height:"480px",border:"1px solid #ddd"}}),l.a.createElement("p",{className:"hover_title"},e.movieName))),l.a.createElement("div",{className:"credit"},l.a.createElement("p",null,e.movieName),l.a.createElement("p",null,e.character?e.character:"(unkowned)")))):l.a.createElement(v.a,{lg:6,md:8,xs:24},e.image?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},l.a.createElement("a",{href:"/actor/".concat(e.actorId),className:"hover"},l.a.createElement("img",{style:{width:"100%",height:"480px"},src:e.image,alt:e.actorName}))),l.a.createElement("div",{className:"credit"},l.a.createElement("p",null,e.actorName),l.a.createElement("p",null,e.character?e.character:"(unkowned)"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},l.a.createElement("a",{href:"/actor/".concat(e.actorId),className:"hover"},l.a.createElement("div",{style:{width:"100%",height:"480px",border:"1px solid #ddd"}}),l.a.createElement("p",{className:"hover_title"},e.actorName))),l.a.createElement("div",{className:"credit"},l.a.createElement("p",null,e.actorName),l.a.createElement("p",null,e.character?e.character:"(unkowned)"))))};var g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),m=Object(o.a)(c,2),v=m[0],g=m[1],f=Object(n.useState)(0),y=Object(o.a)(f,2),b=y[0],N=y[1];Object(n.useEffect)((function(){var e="".concat(u,"movie/popular?api_key=").concat(s,"&language=ko-KR&page=1");w(e)}),[]);var w=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){r([].concat(Object(i.a)(a),Object(i.a)(e.results))),null===v&&g(e.results[0]),N(e.page)}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{width:"100%",margin:0}},v&&l.a.createElement(p,{image:"".concat(d,"w1280").concat(v.backdrop_path),title:v.title,text:v.overview}),l.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},l.a.createElement("h2",null,"Movies by latest"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(h.a,{gutter:[35,16]},a&&a.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement(E,{landingPage:!0,image:e.poster_path?"".concat(d,"w300").concat(e.poster_path):null,movieId:e.id,movieName:e.title}))})))),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("button",{onClick:function(){var e="".concat(u,"movie/popular?api_key=").concat(s,"&language=ko-KR&page=").concat(b+1);w(e)}},"Load More"))))},f=(a(49),a(31));var y=function(){return l.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},l.a.createElement("div",{className:"menu__logo"},l.a.createElement("a",{href:"/"},l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement(f.a,{style:{width:"30px",height:"30px"}}),"\xa0\xa0\xa0Movie App"))))};var b=function(){return l.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},l.a.createElement("p",null,"\xa9 Copyright H-Genie. All Rights Reserved."))},N=a(56);var w=function(e){var t=e.movie;return l.a.createElement(N.a,{title:"Movie Info",bordered:!0,column:{lg:3,md:2,sm:1,xs:1,xxs:1}},l.a.createElement(N.a.Item,{label:"\uc81c\ubaa9"},t.title),l.a.createElement(N.a.Item,{label:"\ud3c9\uc810"},t.vote_average?t.vote_average:null),l.a.createElement(N.a.Item,{label:"\uac1c\ubd09\uc77c"},t.release_date?t.release_date:"\uac1c\ubd09 \uc804"),l.a.createElement(N.a.Item,{label:"\uc0c1\uc601\uc2dc\uac04"},t.runtime?"".concat(t.runtime," \ubd84"):null),l.a.createElement(N.a.Item,{label:"\uc81c\uc791\ube44"},t.budget?"".concat(t.budget.toLocaleString()," $"):null),l.a.createElement(N.a.Item,{label:"\uc218\uc775"},t.revenue?"".concat(t.revenue.toLocaleString()," $"):null),l.a.createElement(N.a.Item,{label:"\uc7a5\ub974",span:3},void 0!==t.genres?t.genres.map((function(e,t){return l.a.createElement("span",{key:t,style:{marginRight:"1rem"}},e.name)})):null),l.a.createElement(N.a.Item,{label:"\ud0a4\uc6cc\ub4dc"},t.tagline))};var x=function(e){var t=e.match.params.movieId,a=Object(n.useState)([]),r=Object(o.a)(a,2),c=r[0],m=r[1],i=Object(n.useState)([]),v=Object(o.a)(i,2),g=v[0],f=v[1],y=Object(n.useState)(!1),b=Object(o.a)(y,2),N=b[0],x=b[1];return document.title=void 0===c.title?"Movie App":c.title,Object(n.useEffect)((function(){var e="".concat(u,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=ko-KR"),a="".concat(u,"movie/").concat(t,"?api_key=").concat(s,"&language=ko-KR");fetch(a).then((function(e){return e.json()})).then((function(e){m(e)})),fetch(e).then((function(e){return e.json()})).then((function(e){f(e.cast)}))}),[t]),l.a.createElement("div",null,l.a.createElement(p,{image:c.backdrop_path?"".concat(d,"w1280").concat(c.backdrop_path):null,title:c.title,text:c.overview}),l.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},l.a.createElement(w,{movie:c,genres:c.genres}),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"2rem"}},l.a.createElement("button",{onClick:function(){return x(!N)}},"Toggle Actor View")),N&&l.a.createElement(h.a,{gutter:[35,0]},g&&g.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement(E,{image:e.profile_path?"".concat(d,"w300").concat(e.profile_path):null,actorName:e.name,actorId:e.id,character:e.character}))})))))};a(51);var _=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)([]),i=Object(o.a)(m,2),p=i[0],v=i[1],g=Object(n.useState)([]),f=Object(o.a)(g,2),y=f[0],b=f[1],N=Object(n.useState)("popularity"),w=Object(o.a)(N,2),x=w[0],_=w[1],k=e.match.params.actorId;document.title=void 0===r.name?"Movie App":r.name,Object(n.useEffect)((function(){var e="".concat(u,"person/").concat(k,"?api_key=").concat(s,"&language=en-US");fetch(e).then((function(e){return e.json()})).then((function(e){c(e),v(e.also_known_as)})),j(x)}),[x]);var j=function(e){var t="".concat(u,"person/").concat(k,"/movie_credits?api_key=").concat(s,"&language=ko-KR"),a=function(e,t){return e.popularity===t.popularity?0:t.popularity-e.popularity},n=function(e,t){return e.release_date===t.release_date?0:e.release_date>t.release_date?-1:1};"popularity"===e?fetch(t).then((function(e){return e.json()})).then((function(e){return e.cast.sort(a)})).then((function(e){b(e)})):fetch(t).then((function(e){return e.json()})).then((function(e){return e.cast.sort(n)})).then((function(e){b(e)}))};return l.a.createElement("section",{style:{width:"85%",margin:"2rem auto"}},l.a.createElement("div",{className:"actor_top"},r.profile_path?l.a.createElement("img",{src:"".concat(d,"w300").concat(r.profile_path),alt:r.name,style:{width:"300px",height:"450px"}}):l.a.createElement("div",{className:"noImage"},"No Image"),l.a.createElement("div",null,l.a.createElement("h1",null,r.name),r.biography&&l.a.createElement("p",null,r.biography))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"actor_bottom"},l.a.createElement("div",{style:{minWidth:"300px"}},p.length||r.birthday||r.place_of_birth?l.a.createElement("h2",null,"\uc778\ubb3c \uc815\ubcf4"):null,p&&p.map((function(e,t){return l.a.createElement("p",{key:t},e)})),r.birthday&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"\uc0dd\ub144\uc6d4\uc77c"),l.a.createElement("p",null,r.birthday)),r.deathday&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"\uc0ac\ub9dd"),l.a.createElement("p",null,r.deathday)),r.place_of_birth&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"\ucd9c\uc0dd\uc9c0"),l.a.createElement("p",null,r.place_of_birth)),r.homepage&&l.a.createElement("h3",null,l.a.createElement("a",{href:r.homepage,target:"_blank",rel:"noopener noreferrer"},"\ud648\ud398\uc774\uc9c0"))),l.a.createElement("div",null,l.a.createElement("div",{className:"credits"},l.a.createElement("h2",null,"\ucd9c\uc5f0\uc791"),l.a.createElement("select",{onChange:function(e){e.preventDefault(),_(e.currentTarget.value)}},l.a.createElement("option",{value:"popularity"},"\uc778\uae30\uc21c"),l.a.createElement("option",{value:"release"},"\ucd9c\uc2dc\uc77c\uc21c"))),l.a.createElement(h.a,{gutter:[35,0]},y&&y.map((function(e,t){return l.a.createElement(E,{actorPage:!0,key:t,image:e.poster_path?"".concat(d,"w300").concat(e.poster_path):null,movieName:e.title,movieId:e.id,row:y.length>3,character:e.character})}))))))};var k=function(){return l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(y,null),l.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:g}),l.a.createElement(m.a,{exact:!0,path:"/movie/:movieId",component:x}),l.a.createElement(m.a,{exact:!0,path:"/actor/:actorId",component:_}))),l.a.createElement(b,null))},j=a(20);c.a.render(l.a.createElement(j.a,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ce5bd06f.chunk.js.map