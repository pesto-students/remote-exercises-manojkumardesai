(this["webpackJsonpsnake-game-react"]=this["webpackJsonpsnake-game-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),u=(n(13),n(7)),l=n(6),i=n(1);var f=[500,500],s=[[8,7],[8,8]],m=[8,3],b={38:[0,-1],40:[0,1],37:[-1,0],39:[1,0]},v=(n(14),function(){var e=Object(a.useRef)(),t=Object(a.useState)(s),n=Object(i.a)(t,2),c=n[0],o=n[1],v=Object(a.useState)(m),d=Object(i.a)(v,2),h=d[0],O=d[1],j=Object(a.useState)([0,-1]),E=Object(i.a)(j,2),w=E[0],g=E[1],p=Object(a.useState)(null),S=Object(i.a)(p,2),k=S[0],y=S[1],R=Object(a.useState)(!1),x=Object(i.a)(R,2),B=x[0],C=x[1],I=Object(a.useState)(0),M=Object(i.a)(I,2),W=M[0],G=M[1];!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return D()}),k);var J=function(){return h.map((function(e,t){return Math.floor(Math.random()*(f[t]/30))}))},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;if(30*e[0]>=f[0]||e[0]<0||30*e[1]>=f[1]||e[1]<0)return!0;var n,a=Object(l.a)(t);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(e[0]===r[0]&&e[1]===r[1])return!0}}catch(o){a.e(o)}finally{a.f()}return!1},A=function(e){if(e[0][0]===h[0]&&e[0][1]===h[1]){for(var t=J();N(t,e);)t=J();return O(t),G(W+1),k>200&&y(k-10),!0}return!1},D=function(){var e=Object(u.a)(c),t=[e[0][0]+w[0],e[0][1]+w[1]];e.unshift(t),N(t)?(y(null),C(!0)):A(e)||e.pop(),o(e)};return Object(a.useEffect)((function(){var t=e.current.getContext("2d");t.setTransform(30,0,0,30,0,0),t.clearRect(0,0,window.innerWidth,window.innerHeight),t.fillStyle="lightblue",c.forEach((function(e){var n=Object(i.a)(e,2),a=n[0],r=n[1];return t.fillRect(a,r,1,1)})),t.fillStyle="yellow",t.fillRect(h[0],h[1],1,1)}),[c,h,B]),r.a.createElement("div",{className:"gameBoard",role:"button",tabIndex:"0",onKeyDown:function(e){return function(e){var t=e.keyCode;return t>=37&&t<=40&&g(b[t])}(e)}},r.a.createElement("div",null,r.a.createElement("canvas",{className:"gameBorder",ref:e,width:"".concat(f[0],"px"),height:"".concat(f[1],"px")}),B&&r.a.createElement("div",null,"GAME OVER!")),r.a.createElement("div",null,r.a.createElement("p",null,"Score: ",W),r.a.createElement("button",{onClick:function(){o(s),O(m),g([0,-1]),y(500),C(!1),G(0)}}," ",B?"Restart":"Start Game"),W?r.a.createElement("button",{onClick:function(){y(k?null:400)}}," ",k?"Pause":"Resume"," "):null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.072b8b66.chunk.js.map