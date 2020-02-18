(this["webpackJsonphealth-app"]=this["webpackJsonphealth-app"]||[]).push([[0],{225:function(n,e,t){n.exports=t(451)},428:function(n,e,t){},429:function(n,e,t){},451:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(102),o=t.n(c),i=(t(230),t(239),t(428),t(429),t(213)),u=t(214),l=t(220),s=t(215),f=t(222),p=t(45),d=t(221),b=t(57),m=t.n(b),v=t(139),h=t(83),g=t(25),x=t(59),O=t(8),j=t(9),w="1200px",y={sm:"screen and (max-width: ".concat("767px",")"),xl:"screen and (max-width: ".concat(w,")")};function E(){var n=Object(O.a)(["\n    margin-top: auto;\n    margin-left: auto;\n    background-color: #38B2A9;\n    color: #fff;\n    padding: 10px 12px;\n    border-radius: 8px;\n    font-size: 14px;\n    cursor: pointer;\n    transition: .5s;\n\n    &:hover{\n        background-color: #2d958e;\n    }\n"]);return E=function(){return n},n}function k(){var n=Object(O.a)(["\n    margin-bottom: 10px;\n"]);return k=function(){return n},n}function _(){var n=Object(O.a)(["\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n"]);return _=function(){return n},n}function A(){var n=Object(O.a)(["\n    display: inline-block;\n    margin-left: 10px;\n"]);return A=function(){return n},n}function C(){var n=Object(O.a)(["\n    color: #f1e05a;\n"]);return C=function(){return n},n}function F(){var n=Object(O.a)(["\n    font-size: 20px;\n    min-height: 30px;\n    margin-bottom: 5px;\n"]);return F=function(){return n},n}function L(){var n=Object(O.a)(["\n    font-size: 24px;\n    margin-bottom: 5px;\n"]);return L=function(){return n},n}function N(){var n=Object(O.a)(["\n    padding: 20px;\n    background-color: #38B2A9;\n    color: #fff;\n"]);return N=function(){return n},n}function H(){var n=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n"]);return H=function(){return n},n}function S(){var n=Object(O.a)(["\n    width: calc(50% - 30px);\n    margin: 20px 15px;\n    list-style: none;\n    border-radius: 8px;\n    overflow: hidden;\n    background-color: #fff;\n    box-shadow: 0 0 10px rgba(0,0,0,.15);\n    transition: .5s;\n\n    &:hover{\n        box-shadow: 0 0 10px rgba(0,0,0,.3);\n    }\n\n    @media "," {\n        width: 100%\n    }\n"]);return S=function(){return n},n}var z=function(n,e){var t=n.info,r=n.onFavorite,c=n.onUnFavorite,o=Object(g.c)((function(n){return n.Favorite.list})).find((function(n){if(n.data.full_name===t.full_name)return!0}));return a.a.createElement(D,null,a.a.createElement(q,null,a.a.createElement(U,{href:t.html_url,target:"_black"},a.a.createElement(J,null,t.full_name),a.a.createElement(K,null,t.language),a.a.createElement(P,null,a.a.createElement("i",{className:"icon-star-24px"}),t.watchers),null!==t.license&&a.a.createElement(T,null,t.license.spdx_id)),a.a.createElement(X,null,a.a.createElement(I,null,t.description),!o&&a.a.createElement(M,{onClick:r},"\u52a0\u5165\u6536\u85cf"),c&&a.a.createElement(M,{onClick:c},"\u53d6\u6d88\u6536\u85cf"))))};z.defaultProps={info:{href:"first",full_name:"test",license:null}};var B=z,D=j.b.li(S(),y.sm),q=j.b.div(H()),U=j.b.a(N()),J=j.b.p(L()),K=j.b.p(F()),P=j.b.span(C()),T=j.b.span(A()),X=j.b.div(_()),I=j.b.p(k()),M=j.b.button(E()),R=B;function W(){var n=Object(O.a)(["\n    width: 50px;\n\theight: 50px;\n\tmargin: 0 auto;\n\tborder: 3px solid #38B2A9;\n\tborder-radius: 50%;\n\tborder-left-color: transparent;\n\tborder-right-color: transparent;\n\tanimation: "," 500ms infinite linear;\n"]);return W=function(){return n},n}function V(){var n=Object(O.a)(["\n    width: 100%;\n\theight: 50px;\n\ttext-align: center;\n"]);return V=function(){return n},n}function $(){var n=Object(O.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,.2);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return $=function(){return n},n}function G(){var n=Object(O.a)(["\n    100%{ \n        transform: rotate(360deg); transform: rotate(360deg)\n    };\n"]);return G=function(){return n},n}var Q=function(n,e){return a.a.createElement(Z,null,a.a.createElement(nn,null,a.a.createElement(en,null)))},Y=Object(j.c)(G()),Z=j.b.div($()),nn=j.b.div(V()),en=j.b.div(W(),Y),tn=Q,rn="home/get_mask_request",an="home/get_mask_success",cn="home/is_loading",on="home/enter_mask",un="home/create_favorite",ln="home/change_page",sn="home/create_search",fn=function(n){var e=n.title,t=n.page;return{type:rn,payload:{title:e,page:t}}},pn=function(n){var e=n.list;return{type:an,payload:{list:e}}},dn=function(n){return{type:cn,payload:{Switch:n}}},bn=function(n){return{type:ln,payload:{page:n}}};function mn(){var n=Object(O.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n"]);return mn=function(){return n},n}function vn(){var n=Object(O.a)(["\n    max-width: 1280px;\n    width: 100%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return vn=function(){return n},n}var hn=function(n,e){var t=Object(g.b)(),c=Object(g.c)((function(n){return n.Home.list})),o=Object(g.c)((function(n){return n.Home.isLoading})),i=Object(g.c)((function(n){return n.Home.search})),u=Object(g.c)((function(n){return n.Home.page}));Object(r.useEffect)((function(){return function(){window.removeEventListener("scroll",s)}}));var l=function(n){t(dn(!0)),t(function(n){return{type:un,payload:{info:n}}}(n))},s=function(){if(document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight){var n=i,e=u+1;t(bn(e)),t(dn(!0)),t(fn({title:n,page:e}))}};return window.addEventListener("scroll",s),a.a.createElement(gn,null,a.a.createElement(xn,null,c&&c.map((function(n){return a.a.createElement(R,{key:n.full_name,info:n,onFavorite:function(){return l(n)}})}))),!0===o&&a.a.createElement(tn,null))},gn=j.b.div(vn()),xn=j.b.ul(mn()),On=hn,jn="favorite/get_favorite_request",wn="favorite/get_favorite_success",yn="favorite/remove_favorite_request",En="favorite/is_loading",kn=function(){return{type:jn}},_n=function(n){return{type:wn,payload:{list:n}}},An=function(n){return{type:En,payload:{Switch:n}}};function Cn(){var n=Object(O.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n"]);return Cn=function(){return n},n}function Fn(){var n=Object(O.a)(["\n    max-width: 1280px;\n    width: 100%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return Fn=function(){return n},n}var Ln=function(n,e){var t=Object(g.b)(),c=Object(g.c)((function(n){return n.Favorite.list})),o=Object(g.c)((function(n){return n.Favorite.isLoading}));Object(r.useEffect)((function(){t(An(!0)),t(kn())}),[]);var i=function(n){t(An(!0)),t(function(n){return{type:yn,payload:{id:n}}}(n))};return a.a.createElement(Nn,null,a.a.createElement(Hn,null,c&&a.a.createElement(a.a.Fragment,null,c.map((function(n){return a.a.createElement(R,{key:n._id,info:n.data,onUnFavorite:function(){return i(n._id)}})})))),!0===o&&a.a.createElement(tn,null))},Nn=j.b.div(Fn()),Hn=j.b.ul(Cn()),Sn=Ln;function zn(){var n=Object(O.a)(["\n    position: fixed;\n    background-color: #fff;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #38B2A9;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 30px;\n"]);return zn=function(){return n},n}var Bn=function(){return a.a.createElement(Dn,null,"Page Not Found")},Dn=j.b.div(zn()),qn=Bn;var Un=function(){return a.a.createElement(x.c,null,a.a.createElement(x.a,{path:"/",exact:!0,component:On}),a.a.createElement(x.a,{path:"/Favorite",component:Sn}),a.a.createElement(x.a,{component:qn}))};function Jn(){var n=Object(O.a)(["\n        &:after{\n            width: 100%;\n        }\n    "]);return Jn=function(){return n},n}function Kn(){var n=Object(O.a)(["\n    padding: 0 5px;\n    margin: 0 10px;\n    color: #fff;\n    position: relative;\n\n    &:after{\n        content: '';\n        position: absolute;\n        width: 0%;\n        left: 50%;\n        bottom: -5px;\n        transform: translateX(-50%);\n        height: 2px;\n        background-color: #fff;\n        transition: .5s;\n    }\n\n    &:hover{\n        &:after{\n            width: 100%;\n        }\n    }\n\n    ",";\n"]);return Kn=function(){return n},n}function Pn(){var n=Object(O.a)(["\n\n"]);return Pn=function(){return n},n}function Tn(){var n=Object(O.a)(["\n    padding: 20px;\n    background-color: #38B2A9;\n    display: flex;\n    justify-content: center;\n"]);return Tn=function(){return n},n}var Xn=function(n,e){var t=n.className,r=n.onClick,c=n.iscurrent;return a.a.createElement(In,{className:t},a.a.createElement(Mn,null,a.a.createElement(Rn,{to:"/",onClick:function(){return r(!0)},iscurrent:"".concat(c)},"\u641c\u5c0b")),a.a.createElement(Mn,null,a.a.createElement(Rn,{to:"/Favorite",onClick:function(){return r(!1)},iscurrent:"".concat(!c)},"\u6536\u85cf")))},In=j.b.ul(Tn()),Mn=j.b.li(Pn()),Rn=Object(j.b)(h.b)(Kn(),(function(n){return"true"===n.iscurrent&&Object(j.a)(Jn())})),Wn=Xn;function Vn(){var n=Object(O.a)(["\n    font-family: 'Helvetica Neue','Microsoft JhengHei',sans-serif;\n    padding: 0;\n    border: none;\n    background-color: transparent;\n    outline: none;\n    margin-left: 12px;\n    flex: 1;\n    font-weight: bold;\n\n    &::-webkit-input-placeholder{\n        color: #A3A3A3;\n    }\n\n    &:-moz-placeholder{\n        color: #A3A3A3;\n    }\n\n    &::-moz-placeholder{\n        color: #A3A3A3;\n    }\n\n    &input:-ms-input-placeholder{\n        color: #A3A3A3;\n    }\n"]);return Vn=function(){return n},n}function $n(){var n=Object(O.a)(["\n    font-size: 21px;\n    color: #333;\n"]);return $n=function(){return n},n}function Gn(){var n=Object(O.a)(["\n        display: none\n    "]);return Gn=function(){return n},n}function Qn(){var n=Object(O.a)(["\n    display: flex;\n    width: 290px;\n    max-width: calc(100% - 30px);\n    align-items: center;\n    border-radius: 8px;\n    background-color: #ddd;\n    padding: 12px 20px;\n    margin: 20px auto;\n\n    ",";\n"]);return Qn=function(){return n},n}var Yn=function(n,e){var t=n.className,r=n.onChange,c=n.onKeyDown,o=n.value,i=n.iscurrent;return a.a.createElement(Zn,{className:t,iscurrent:!i},a.a.createElement(ne,{className:"icon-search-24px"}),a.a.createElement(ee,{type:"text",placeholder:"\u641c\u5c0b",onChange:r,onKeyDown:c,value:o}))},Zn=j.b.div(Qn(),(function(n){return n.iscurrent&&Object(j.a)(Gn())})),ne=j.b.span($n()),ee=j.b.input(Vn()),te=Yn,re=function(n,e){var t=Object(r.useState)(""),c=Object(v.a)(t,2),o=c[0],i=c[1],u=Object(r.useState)(!0),l=Object(v.a)(u,2),s=l[0],f=l[1],p=Object(g.b)();return a.a.createElement(h.a,null,a.a.createElement(Wn,{onClick:function(n){f(n)},iscurrent:s}),a.a.createElement(te,{onChange:function(n){i(n.target.value)},value:o,onKeyDown:function(n){var e=n.target.value;if(13===n.keyCode){p(dn(!0)),p({type:on}),p({type:sn,payload:{search:e}}),p(bn(1)),p(fn({title:e,page:1})),p(kn())}},iscurrent:s}),a.a.createElement(Un,null))},ae=t(58),ce=t(49),oe={list:[],page:1,isLoading:!1,search:""},ie=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case an:return Object(ce.a)({},n,{list:[].concat(Object(ae.a)(n.list),Object(ae.a)(e.payload.list)),isLoading:!1});case sn:return Object(ce.a)({},n,{search:e.payload.search});case cn:return Object(ce.a)({},n,{isLoading:e.payload.Switch});case on:return Object(ce.a)({},n,{list:[],page:1});case ln:return Object(ce.a)({},n,{page:e.payload.page});default:return n}},ue={list:[],isLoading:!1},le=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case wn:return Object(ce.a)({},n,{list:Object(ae.a)(e.payload.list)});case En:return Object(ce.a)({},n,{isLoading:e.payload.Switch});default:return n}},se=Object(p.c)({Home:ie,Favorite:le}),fe=t(20),pe=t.n(fe),de=t(17),be=function(n){var e=n.title,t=n.page;return m.a.get("/search/repositories?q=".concat(e,"&per_page=10&page=").concat(t))},me=function(n){return m.a.post("https://morning-atoll-00255.herokuapp.com/api/lists/add",{data:n})},ve=function(){return m.a.get("https://morning-atoll-00255.herokuapp.com/api/lists")},he=function(n){return m.a.delete("https://morning-atoll-00255.herokuapp.com/api/lists/delete/".concat(n))},ge=pe.a.mark(we),xe=pe.a.mark(ye),Oe=pe.a.mark(Ee),je=pe.a.mark(ke);function we(n,e){var t;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(de.b)(be,{title:n.payload.title,page:n.payload.page});case 3:if(0===(t=e.sent).data.items){e.next=11;break}return e.next=7,Object(de.d)(pn({list:t.data.items}));case 7:return e.next=9,Object(de.d)(dn(!1));case 9:e.next=13;break;case 11:return e.next=13,Object(de.d)(dn(!1));case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),ge,null,[[0,15]])}function ye(){return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(de.e)(rn,we);case 2:case"end":return n.stop()}}),xe)}function Ee(n,e){var t;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(de.b)(me,n.payload.info);case 3:return e.next=5,Object(de.b)(ve);case 5:return t=e.sent,e.next=8,Object(de.d)(_n(t.data));case 8:return e.next=10,Object(de.d)(dn(!1));case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),Oe,null,[[0,12]])}function ke(){return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(de.e)(un,Ee);case 2:case"end":return n.stop()}}),je)}var _e=[Object(de.c)(ye),Object(de.c)(ke)],Ae=pe.a.mark(Ne),Ce=pe.a.mark(He),Fe=pe.a.mark(Se),Le=pe.a.mark(ze);function Ne(n,e){var t;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(de.b)(ve);case 3:return t=n.sent,n.next=6,Object(de.d)(_n(t.data));case 6:return n.next=8,Object(de.d)(An(!1));case 8:n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),Ae,null,[[0,10]])}function He(){return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(de.e)(jn,Ne);case 2:case"end":return n.stop()}}),Ce)}function Se(n,e){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(de.b)(he,n.payload.id);case 3:return e.next=5,Ne();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),Fe,null,[[0,7]])}function ze(){return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(de.e)(yn,Se);case 2:case"end":return n.stop()}}),Le)}var Be=[Object(de.c)(He),Object(de.c)(ze)],De=pe.a.mark(qe);function qe(){return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(de.a)([].concat(Object(ae.a)(_e),Object(ae.a)(Be)));case 2:case"end":return n.stop()}}),De)}var Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,Je=Object(d.a)(),Ke=Object(p.e)(se,Ue(Object(p.a)(Je)));Je.run(qe),m.a.defaults.baseURL="https://api.github.com/";var Pe=function(n){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(g.a,{store:Ke},a.a.createElement(re,null))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[225,1,2]]]);
//# sourceMappingURL=main.8de8ce94.chunk.js.map