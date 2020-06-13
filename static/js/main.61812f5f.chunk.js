(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{13:function(n,e,t){n.exports=t(23)},18:function(n,e,t){},19:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(9),c=t.n(o),u=(t(18),t(3)),i=t(1),l=(t(19),t(2)),s={message:"All Systems Operational",backgroundColour:"#3da751"},d={message:"Some systems are experiencing issues",backgroundColour:"#4990e2"},m={message:"Some systems are experiencing a major outage",backgroundColour:"#d94430"},f=function(n,e){return 100*n.filter((function(n){return n.labels.find((function(n){return n.name===e}))})).length/n.length},g=t(4),b=t.n(g);function p(){var n=Object(i.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]);return p=function(){return n},n}function v(){var n=Object(i.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]);return v=function(){return n},n}function x(){var n=Object(i.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]);return x=function(){return n},n}function h(){var n=Object(i.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return h=function(){return n},n}var O=l.a.div(h(),(function(n){return n.backgroundColour?n.backgroundColour:"#b1b1b1"})),j=l.a.h2(x()),E=l.a.button(v()),w=l.a.code(p()),S=function(n){var e=n.loading,t=n.error,o=n.components,c=n.refetch,i=function(n){var e=Object(a.useState)(),t=Object(u.a)(e,2),r=t[0],o=t[1];return Object(a.useEffect)((function(){var e=!1;f(n,"operational")<70&&(o(d),e=!0),0!==f(n,"major outage")&&(o(m),e=!0),e||o(s)}),[n]),[r]}(o),l=Object(u.a)(i,1)[0],g=function(n,e){var t=Object(a.useState)(b()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),r=Object(u.a)(t,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){var e=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?n((function(){c(b()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):c(b()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(e)}}),[n]),Object(a.useEffect)((function(){c(b()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),e),[o]}(c,[e]),p=Object(u.a)(g,1)[0];return r.a.createElement(r.a.Fragment,null,t.hasError&&r.a.createElement(w,null,r.a.createElement("div",null,"An error occured"),r.a.createElement("div",null,"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."),JSON.stringify(t.errors,null,3)),r.a.createElement(O,{backgroundColour:null===l||void 0===l?void 0:l.backgroundColour},r.a.createElement(j,null,null===l||void 0===l?void 0:l.message),r.a.createElement(E,{onClick:c},e?"reloading":p)))},k={logo:"",name:"Issue Status",user:"tadhglewis"},C=k,y=function(n){var e=Object(a.useState)([]),t=Object(u.a)(e,2),r=t[0],o=t[1],c=Object(a.useState)(),i=Object(u.a)(c,2),l=i[0],s=i[1],d=Object(a.useState)(!0),m=Object(u.a)(d,2),f=m[0],g=m[1];return Object(a.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(n)))<new Date-24e4?I(g,s,o,n):(o(JSON.parse(localStorage.getItem("issueStatus".concat(n)))),g(!1),s())}),[]),[f,l,r,function(){return I(g,s,o,n)}]},I=function(n,e,t,a){n(!0),fetch("https://api.github.com/repos/".concat(C.user,"/issue-status/issues?state=all&labels=issue status,").concat(a)).then((function(n){return n.json()})).then((function(r){e(),localStorage.setItem("issueStatusLastFetch".concat(a),new Date),localStorage.setItem("issueStatus".concat(a),JSON.stringify(r)),t(r),n(!1)})).catch((function(r){e(r.toString()),localStorage.setItem("issueStatusLastFetch".concat(a),new Date),t(JSON.parse(localStorage.getItem("issueStatus".concat(a)))),n(!1)}))};function D(){var n=Object(i.a)(["\n  margin-bottom: 8px;\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]);return D=function(){return n},n}function F(){var n=Object(i.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n"]);return F=function(){return n},n}function N(){var n=Object(i.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]);return N=function(){return n},n}function L(){var n=Object(i.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]);return L=function(){return n},n}function J(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  margin-bottom: 3px;\n"]);return J=function(){return n},n}function M(){var n=Object(i.a)(["\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"]);return M=function(){return n},n}var z=l.a.div(M(),(function(n){return n.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),Y=l.a.div(J()),_=l.a.div(L()),A=l.a.div(N()),B=l.a.div(F(),(function(n){return n.active?"#6e6b6b":"#2f5888"}),(function(n){return n.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),P=l.a.div(D()),U=function(n){var e=n.incident;return r.a.createElement(z,{active:e.closed_at},r.a.createElement(Y,null,r.a.createElement("div",null,r.a.createElement(P,null,b()(e.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()),r.a.createElement(_,null,e.title)),r.a.createElement(B,{active:e.closed_at},e.closed_at?"Closed":"Active")),r.a.createElement(A,null,e.body))};function W(){var n=Object(i.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]);return W=function(){return n},n}var T=l.a.div(W());function $(){var n=Object(i.a)(["\n  margin: 0 8px;\n"]);return $=function(){return n},n}function q(){var n=Object(i.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]);return q=function(){return n},n}function G(){var n=Object(i.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]);return G=function(){return n},n}var H=l.a.div(G()),K=l.a.div(q()),Q=l.a.div($()),R=function(n){var e=n.loading,t=n.incidents;return r.a.createElement(H,null,r.a.createElement(K,null,"Incidents"),e&&0===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(T,null),r.a.createElement(T,null)):(null===t||void 0===t?void 0:t.length)>0?null===t||void 0===t?void 0:t.map((function(n){return r.a.createElement(U,{key:n.id,incident:n})})):r.a.createElement(Q,null,"No Incidents found."))};function V(){var n=Object(i.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]);return V=function(){return n},n}var X=l.a.div(V()),Z={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}};function nn(){var n=Object(i.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n"]);return nn=function(){return n},n}var en=l.a.div(nn(),(function(n){return n.colour}),(function(n){return n.backgroundColour})),tn=function(n){var e=function(n){var e=Object(a.useState)(),t=Object(u.a)(e,2),r=t[0],o=t[1];return Object(a.useEffect)((function(){o(Object.values(Z).find((function(e){return n.find((function(n){return n.name===e.name.toLowerCase()}))})))}),[n]),r||o(Z.unknown),[r]}(n.labels),t=Object(u.a)(e,1)[0];return r.a.createElement(en,{colour:null===t||void 0===t?void 0:t.colour,backgroundColour:null===t||void 0===t?void 0:t.backgroundColour},null===t||void 0===t?void 0:t.name)};function an(){var n=Object(i.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]);return an=function(){return n},n}var rn=l.a.div(an()),on=function(n){var e=n.component;return r.a.createElement(rn,null,e.title," ",r.a.createElement(tn,{labels:e.labels}))},cn=function(n){var e=n.loading,t=n.components;return e&&0===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(X,null),r.a.createElement(X,null)):(null===t||void 0===t?void 0:t.length)>0?null===t||void 0===t?void 0:t.map((function(n){return r.a.createElement(on,{key:n.id,component:n})})):r.a.createElement("p",null,"No Components found.")};function un(){var n=Object(i.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]);return un=function(){return n},n}function ln(){var n=Object(i.a)([""]);return ln=function(){return n},n}function sn(){var n=Object(i.a)(["\n  text-align: center;\n  margin-top: 0;\n"]);return sn=function(){return n},n}var dn=l.a.h1(sn()),mn=l.a.img(ln()),fn=l.a.div(un()),gn=function(){return C.logo||C.name?r.a.createElement(fn,null,C.logo?r.a.createElement(mn,{src:C.logo,alt:C.name}):r.a.createElement(dn,null,C.name)):null};function bn(){var n=Object(i.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]);return bn=function(){return n},n}function pn(){var n=Object(i.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]);return pn=function(){return n},n}var vn=l.a.div(pn()),xn=l.a.div(bn()),hn=function(){var n=y("component"),e=Object(u.a)(n,4),t=e[0],a=e[1],o=e[2],c=e[3],i=y("incident"),l=Object(u.a)(i,4),s=l[0],d=l[1],m=l[2],f=l[3];return r.a.createElement(vn,null,r.a.createElement(gn,null),r.a.createElement(xn,null,r.a.createElement(S,{loading:t||s,error:{hasError:a||d,errors:{componentsError:a,incidentsError:d}},components:o,refetch:function(){c(),f()}}),r.a.createElement(cn,{loading:t,components:o})),r.a.createElement(R,{loading:s,incidents:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(hn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.61812f5f.chunk.js.map