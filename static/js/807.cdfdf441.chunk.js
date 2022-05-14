"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[807],{5105:function(A,n,t){t.d(n,{r:function(){return w},s:function(){return b}});var e=t(8544),r=t(9797),i=t(184);function a(A){var n=A.alt,t=A.src,a=A.title,c=A.id;return(0,i.jsx)(x,{children:(0,i.jsxs)(f,{to:"/movies/".concat(c),children:[(0,i.jsx)(r.bU,{children:(0,i.jsx)(g,{src:null!==t?"https://image.tmdb.org/t/p/w300".concat(t):"".concat(e),alt:n})}),(0,i.jsx)(m,{children:a})]})})}var c,o,u,s,l,p=t(168),d=t(501),h=t(955),x=h.ZP.li(c||(c=(0,p.Z)(["\n  max-width: 300px;\n  overflow: hidden;\n"]))),f=(0,h.ZP)(d.rU)(o||(o=(0,p.Z)(["\n  width: 100%;\n  height: inherit;\n  align-items: center;\n  text-decoration: none;\n  color: black;\n"]))),g=h.ZP.img(u||(u=(0,p.Z)(["\n  display: block;\n  object-fit: contain;\n"]))),m=h.ZP.p(s||(s=(0,p.Z)(["\n  margin: 10px 0 0;\n  text-wrap: wrap;\n"])));function w(A){var n=A.movies,t=A.onClick;return(0,i.jsx)(b,{className:"Gallery",onClick:t,children:n.map((function(A){return(0,i.jsx)(a,{alt:A.original_title,src:A.poster_path,title:A.title,id:A.id},A.id)}))})}w.defaultProps={onClick:function(){return null}};var b=h.ZP.ul(l||(l=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding: 0;\n  margin: 10px 0 20 0;\n"])))},8657:function(A,n,t){t.d(n,{NA:function(){return o},bU:function(){return u},rS:function(){return s}});var e,r,i,a=t(168),c=t(955),o=c.ZP.div(e||(e=(0,a.Z)(["\n  text-align: justify;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 15px;\n  }\n"]))),u=c.ZP.div(r||(r=(0,a.Z)(["\n  width: 300px;\n  height: 450px;\n  margin: auto;\n  object-fit: contain;\n  & img {\n    width: inherit;\n    height: auto;\n    overflow: hidden;\n  }\n"]))),s=c.ZP.h1(i||(i=(0,a.Z)(["\n  @media screen and (max-width: 767px) {\n    text-align: center;\n  }\n  @media screen and (min-width: 768px) {\n    margin-top: 0;\n  }\n"])))},9797:function(A,n,t){t.d(n,{Zx:function(){return i},rS:function(){return a.rS},bU:function(){return a.bU},NA:function(){return a.NA}});var e=t(8544),r=t(184),i=function(A){var n=A.movie,t=n.title,i=n.poster_path,c=n.release_date,o=n.vote_average,u=n.overview,s=n.genres,l=void 0===s?[]:s;return(0,r.jsxs)(a.NA,{children:[(0,r.jsx)(a.bU,{children:(0,r.jsx)("img",{alt:t,src:null===i?"".concat(e):"https://image.tmdb.org/t/p/w300".concat(i)})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.rS,{children:[t," ",c&&"(".concat(c,")")]}),(0,r.jsxs)("p",{children:["User score: ",10*o+"% "]}),(0,r.jsx)("h2",{children:" Overview"}),(0,r.jsx)("p",{children:u}),(0,r.jsx)("h3",{children:"Genres"}),(0,r.jsxs)("p",{children:[" ",l.map((function(A){return A.name+" "}))," "]})]})]})},a=t(8657)},1214:function(A,n,t){t.d(n,{W2:function(){return l},$0:function(){return s},bx:function(){return c},Dx:function(){return p}});var e,r,i,a=t(184),c=function(A){var n=A.title,t=A.children;return(0,a.jsx)(s,{children:(0,a.jsxs)(l,{children:[n&&(0,a.jsx)(p,{children:n}),t]})})},o=t(168),u=t(955),s=u.ZP.section(e||(e=(0,o.Z)(["\n  padding: 8px 0px;\n  width: 100%;\n  font-family: sans-serif;\n"]))),l=u.ZP.div(r||(r=(0,o.Z)(["\n  box-sizing: border-box;\n  padding: 0 30px;\n  width: 100%;\n  text-align: center;\n"]))),p=u.ZP.h1(i||(i=(0,o.Z)(["\n  margin-block-end: 0;\n  margin-block-start: 0;\n  margin: 0;\n  font-size: 35px;\n"])))},1902:function(A,n,t){t.d(n,{Y5:function(){return d},TH:function(){return l},wr:function(){return u},r0:function(){return x},Cm:function(){return g}});var e=t(5861),r=t(7757),i=t.n(r),a=t(4569),c=t.n(a);c().defaults.baseURL="https://api.themoviedb.org/3/";var o="6c934d67464856a6476afafcb7e85695";function u(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(i().mark((function A(){var n,t;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("trending/movie/day?api_key=".concat(o));case 2:return n=A.sent,t=n.data.results,A.abrupt("return",t);case 5:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function l(A){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function A(n){var t,e;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=A.sent,e=t.data.results,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function d(A){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(i().mark((function A(n){var t,e;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("movie/".concat(n,"?api_key=").concat(o));case 2:return t=A.sent,A.next=5,t.data;case 5:return e=A.sent,A.abrupt("return",e);case 7:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function x(A){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(i().mark((function A(n){var t,e;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("movie/".concat(n,"/credits?api_key=").concat(o));case 2:return t=A.sent,A.next=5,t.data.cast;case 5:return e=A.sent,A.abrupt("return",e);case 7:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function g(A){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(i().mark((function A(n){var t,e;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("movie/".concat(n,"/reviews?api_key=").concat(o));case 2:return t=A.sent,A.next=5,t.data.results;case 5:return e=A.sent,A.abrupt("return",e);case 7:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},807:function(A,n,t){t.r(n),t.d(n,{MoviesPage:function(){return y}});var e,r,i,a=t(5861),c=t(885),o=t(7757),u=t.n(o),s=t(501),l=t(2791),p=t(577),d=t(1902),h=t(5105),x=t(1214),f=t(7692),g=t(184),m=function(A){var n=A.onSubmit,t=(0,l.useState)(""),e=(0,c.Z)(t,2),r=e[0],i=e[1];return(0,g.jsxs)(v,{className:"searchForm",onSubmit:function(A){A.preventDefault();var t=r.trim();if(""===t)return p.Am.error("There is nothing to find. Try again!",{theme:"colored"});n(t),i("")},children:[(0,g.jsx)(Q,{type:"submit",className:"searchForm-button",children:(0,g.jsx)(f.Goc,{})}),(0,g.jsx)(j,{className:"searchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter movies name",value:r,onChange:function(A){i(A.currentTarget.value.toLowerCase())}})]})},w=t(168),b=t(955),v=b.ZP.form(e||(e=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  background-color: #fff;\n  border: 1px solid;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),j=b.ZP.input(r||(r=(0,w.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),Q=b.ZP.button(i||(i=(0,w.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  .searchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n"]))),y=function(){var A=(0,l.useState)(null),n=(0,c.Z)(A,2),t=n[0],e=n[1],r=(0,s.lr)(""),i=(0,c.Z)(r,2),o=i[0],f=i[1];(0,l.useEffect)((function(){var A=o.get("query");function n(){return(n=(0,a.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.TH)(A);case 3:t=n.sent,e(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),p.Am.error("The resource you requested could not be found.");case 10:return n.prev=10,n.finish(10);case 12:case"end":return n.stop()}}),n,null,[[0,7,10,12]])})))).apply(this,arguments)}A&&function(){n.apply(this,arguments)}()}),[o]);return(0,g.jsxs)(x.bx,{children:[(0,g.jsx)(m,{onSubmit:function(A){f({query:A})}}),t&&(0,g.jsx)(h.r,{movies:t})]})}},8544:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=807.cdfdf441.chunk.js.map