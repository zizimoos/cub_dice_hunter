(this.webpackJsonpdichunter=this.webpackJsonpdichunter||[]).push([[0],{42:function(e,n,t){e.exports=t(78)},78:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(33),o=t.n(c),i=t(4),u=t(15),l=t(5),s=t(3),d=t(2),f=t(7),p=t.n(f),m=t(11),b=t(18);t(48),t(50);b.initializeApp({apiKey:"AIzaSyBHKCEj3Uz_omKH6wiZNbjVavm4dHILsA4",authDomain:"dicehunters-f303f.firebaseapp.com",databaseURL:"https://dicehunters-f303f.firebaseio.com",projectId:"dicehunters-f303f",storageBucket:"dicehunters-f303f.appspot.com",messagingSenderId:"608121465490",appId:"1:608121465490:web:e0eba54ce9898bbeb4144b"});var h=b.auth(),g=new b.auth.GoogleAuthProvider,x=b.firestore(),v=t(41),j=t(28);function O(){var e=Object(s.a)(["\n  all: unset;\n  width: 300px;\n  height: 23px;\n  padding: 5px;\n  font-size: 16px;\n  text-align: center;\n  color: whitesmoke;\n  background-color: #c05c67;\n  border-radius: 2px;\n  cursor: pointer;\n"]);return O=function(){return e},e}function E(){var e=Object(s.a)(["\n  all: unset;\n  width: 300px;\n  height: 23px;\n  padding: 5px;\n  font-size: 16px;\n  ::placeholder {\n    color: rgba(255, 255, 255, 0.2);\n    font-size: 14px;\n    padding-left: 8px;\n  }\n  background-color: #4a5d70;\n  /* border: 2px solid red; */\n  border-radius: 2px;\n\n  margin-bottom: 5px;\n"]);return E=function(){return e},e}function w(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return w=function(){return e},e}function y(){var e=Object(s.a)(["\n  width: 300px;\n  height: 500px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return y=function(){return e},e}function S(){var e=Object(s.a)(["\n  color: whitesmoke;\n  margin-bottom: 30px;\n  font-size: 30px;\n"]);return S=function(){return e},e}function k(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 85vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return k=function(){return e},e}var C=d.default.div(k()),I=d.default.div(S()),z=d.default.div(y()),A=d.default.form(w()),D=d.default.input(E()),M=d.default.input(O()),P="",F=Object(l.g)((function(e){var n=e.history,t=Object(r.useState)(""),c=Object(i.a)(t,2),o=c[0],u=c[1],l=Object(r.useState)(""),s=Object(i.a)(l,2),d=s[0],f=s[1],b=Object(r.useState)(!1),g=Object(i.a)(b,2),O=g[0],E=g[1],w=Object(r.useState)(""),y=Object(i.a)(w,2),S=y[0],k=y[1],F=Object(r.useState)([]),T=Object(i.a)(F,2),L=T[0],U=T[1],N=Object(r.useState)({loggIn:""}),H=Object(i.a)(N,2),q=H[0],B=H[1],J=function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("loggedID").get();case 2:e.sent.forEach((function(e){var n=Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id});U((function(e){return[n].concat(Object(v.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){var n=e.target,t=n.name,r=n.value;"email"===t?u(r):"password"===t&&f(r)},G=function(){var e=Object(m.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=7;break}return e.next=5,h.createUserWithEmailAndPassword(o,d);case 5:e.next=26;break;case 7:return e.next=9,J();case 9:if(0===(r=L.filter((function(e){return e.loggedId===o}))).length){e.next=17;break}console.log("\uc774\ubbf8 \ub2e4\ub978 \uacf3\uc5d0\uc11c \uc811\uc18d\uc911\uc785\ub2c8\ub2e4."),k("\uc774\ubbf8 \ub2e4\ub978 \uacf3\uc5d0\uc11c \uc811\uc18d\uc911\uc785\ub2c8\ub2e4."),B({loggIn:!1}),setTimeout((function(){return n.push("/production")}),2e3),e.next=26;break;case 17:if(0!==r.length){e.next=26;break}return e.next=20,h.signInWithEmailAndPassword(o,d);case 20:return k("\ub85c\uadf8\uc778 \uc911\uc785\ub2c8\ub2e4."),q||B({loggIn:!0}),e.next=24,J();case 24:return e.next=26,x.collection("loggedID").add({loggedId:o,createAt:Date.now()}).then((function(e){P=e.id,x.collection("loggedID").doc(e.id).set({id:e.id,loggedId:o})}));case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(1),k(e.t0.message);case 31:return e.prev=31,E(!1),e.finish(31);case 34:case"end":return e.stop()}}),e,null,[[1,28,31,34]])})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){J()}),[]),a.a.createElement(C,null,a.a.createElement(z,null,a.a.createElement(I,null,"Time to DiceHunter"),a.a.createElement(A,{style:{marginBottom:"20px"},onSubmit:G},a.a.createElement(D,{name:"email",type:"email",placeholder:"e-mail",required:!0,value:o,onChange:W}),a.a.createElement(D,{name:"password",type:"password",placeholder:"password",required:!0,value:d,onChange:W}),a.a.createElement(M,{type:"submit",value:O?"Create Account":"Log In"})),a.a.createElement("p",{style:{color:"white"}},S?"Error : ".concat(S):null)))}));function T(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n"]);return T=function(){return e},e}function L(){var e=Object(s.a)(["\n  width: 100px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.2s ease-in-out;\n"]);return L=function(){return e},e}function U(){var e=Object(s.a)(["\n  display: flex;\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #0d2538;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n  }\n"]);return U=function(){return e},e}var N=d.default.ul(U(),(function(e){return e.open?"translateX(0%)":"translateX(100%)"})),H=d.default.li(L(),(function(e){return e.current?"#c05c67":"transparent"})),q=Object(d.default)(u.b)(T()),B=Object(l.g)((function(e){var n=e.location.pathname,t=e.open,r=(e.userObj,function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.collection("loggedID").doc("".concat(P)).delete();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:return e.prev=7,c(),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[0,5,7,10]])})));return function(){return e.apply(this,arguments)}}()),c=function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.signOut();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(N,{open:t},h.currentUser?a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{current:"/"===n},a.a.createElement(q,{to:"/"},"Search")),a.a.createElement(H,{current:"/product"===n},a.a.createElement(q,{to:"/product"},"Product")),a.a.createElement(H,{onClick:r,current:!h.currentUser},a.a.createElement(q,{to:"/"},h.currentUser?"Sign Out":"Sign In"))):a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{current:"/product"===n},a.a.createElement(q,{to:"/product"},"Product")),a.a.createElement(H,{onClick:r,current:"/"===n&&!h.currentUser},a.a.createElement(q,{to:"/"},h.currentUser?"Sign Out":"Sign In"))))}));function J(){var e=Object(s.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 10px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return J=function(){return e},e}var W=d.default.div(J(),(function(e){return e.open?"#ccc":"white"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),G=function(e){var n=e.userObj,t=Object(r.useState)(!1),c=Object(i.a)(t,2),o=c[0],u=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,{open:o,onClick:function(){return u(!o)}},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement(B,{open:o,userObj:n}))};function X(){var e=Object(s.a)(["\n  margin-left: 10px;\n"]);return X=function(){return e},e}function K(){var e=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: rgb(35, 49, 64);\n  color: #e8f4ff;\n  z-index: 10;\n  /* box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8); */\n"]);return K=function(){return e},e}var R=d.default.header(K()),V=d.default.div(X()),Z=function(e){var n=e.userObj;return a.a.createElement(R,null,a.a.createElement(V,null,"Dice Hunter"),a.a.createElement(G,{userObj:n}))},$=t(37),_=t.n($),Q=function(){return a.a.createElement(_.a,{type:"Grid",color:"#00BFFF",height:250,width:250,timeout:3e3})};function Y(){var e=Object(s.a)(["\n  color: whitesmoke;\n  font-size: 16px;\n"]);return Y=function(){return e},e}function ee(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 6px;\n  width: 150px;\n  color: rgb(35, 49, 64);\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n  display: inline-block;\n  height: 25px;\n  background-color: #02fe7c;\n  margin-right: 10px;\n  align-self: flex-start;\n  width: ","px;\n  /* animation: "," 2s 1s infinite linear alternate; */\n  animation: ","\n    2s 0s linear;\n"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n0% {\n    width: 1px;\n  }\n  50% {\n    width: 10px;\n  }\n  100% {\n    width: $(y)px;\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 10px 0px 0px;\n  background-color: #4a5d70;\n  :hover {\n    transform: scale(1.01, 1.2);\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(s.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n  /* display: flex; */\n  /* height: 30%; */\n"]);return ae=function(){return e},e}function ce(){var e=Object(s.a)(["\n  position: absolute;\n  top: 150px;\n  width: 80%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n"]);return ce=function(){return e},e}var oe=d.default.div(ce()),ie=d.default.div(ae()),ue=d.default.div(re()),le=function(e){return Object(d.keyframes)(te())},se=d.default.span(ne(),(function(e){return 2e3*e.cnsum}),le,(function(e){return le("".concat((function(e){return 2e3*e.cnsum}),"px"))})),de=d.default.div(ee()),fe=d.default.span(Y()),pe=function(e){var n=e.chance,t=e.sum,r=e.overfifteen;return a.a.createElement(oe,null,n.map((function(e,n){return a.a.createElement("div",{key:"cn"+n},a.a.createElement(ie,{key:n},a.a.createElement(ue,{key:"bar"+n},a.a.createElement("div",{key:"divone"+n,style:{display:"flex"}},a.a.createElement("span",{key:"spanone"+n,style:{display:"inline-block",width:"30px",textAlign:"center",paddingTop:"6px",color:"#ec644b"}},n),a.a.createElement(se,{cnsum:e/t}),a.a.createElement("span",{key:"spanthree"+n,style:{display:"inline-block",width:"100px",marginRight:"20px",textAlign:"start",paddingTop:"6px",color:"#ec644b"}}," ",(e/t*100).toPrecision(2)," %")),a.a.createElement("div",{key:"divtwo"+n,style:{display:"flex",justifyContent:"flex-end"}},a.a.createElement(de,{key:"spanfour"+n},e.toLocaleString()," / ",t.toLocaleString())))))})),a.a.createElement(fe,null,t?"Over twelve : ".concat(r.toLocaleString()," /\n              ").concat(t.toLocaleString()):null))},me=t(38),be=t(39);function he(){var e=Object(s.a)(["\n  all: unset;\n  width: 130px;\n  height: 16px;\n  padding: 5px;\n  font-size: 14px;\n  text-align: center;\n  background-color: #4a5d70;\n  ::placeholder {\n    /* background-color: rgba(255, 255, 255, 0.2); */\n    /* color: rgba(255, 255, 255, 0.2); */\n    padding-left: 8px;\n  }\n  /* border: 2px solid red; */\n  border-radius: 2px;\n  margin-right: 5px;\n  margin-left: 5px;\n  /* margin-bottom: 5px; */\n"]);return he=function(){return e},e}function ge(){var e=Object(s.a)(["\n  position: absolute;\n  top: 65px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return ge=function(){return e},e}function xe(){var e=Object(s.a)(["\n  position: absolute;\n  top: 80px;\n  font-size: 16;\n  color: whitesmoke;\n"]);return xe=function(){return e},e}function ve(){var e=Object(s.a)(["\n  position: absolute;\n  top: 7px;\n  right: -25px;\n  cursor: pointer;\n"]);return ve=function(){return e},e}function je(){var e=Object(s.a)(["\n  all: unset;\n  width: 100%;\n  height: 40px;\n  padding-left: 30px;\n  font-size: 16px;\n  border-radius: 3px;\n  background-color: #4a5d70;\n  ::placeholder {\n    color: rgba(255, 255, 255, 0.2);\n  }\n"]);return je=function(){return e},e}function Oe(){var e=Object(s.a)(["\n  position: absolute;\n  width: 30%;\n  top: 15px;\n"]);return Oe=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ee=function(){return e},e}var we=d.default.div(Ee()),ye=d.default.form(Oe()),Se=d.default.input(je()),ke=d.default.div(ve()),Ce=d.default.span(xe()),Ie=d.default.form(ge()),ze=d.default.input(he()),Ae=function(e){var n=e.chance,t=(e.percent,e.sum),r=e.overfifteen,c=e.loading,o=e.error,i=e.handleSubmit,u=e.searchTerm,l=e.updateTerm,s=e.onSubmit,d=e.onChangeServer,f=e.onChangeClient,p=e.serverSeed,m=e.clientSeed;return a.a.createElement(we,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(ye,{onSubmit:i},a.a.createElement(Se,{placeholder:"Copy and paste the Numbers of step",value:u,onChange:l}),a.a.createElement(ke,{onClick:i},a.a.createElement(me.a,{icon:be.a,size:"2x",color:"rgb(35, 49, 64)"}))),a.a.createElement(Ie,{onSubmit:s},a.a.createElement("span",{style:{color:"#4a5d70"}}," ","C :"," "),a.a.createElement(ze,{name:"clientSeed",type:"text",placeholder:"Client Seed ",required:!0,value:m,onChange:f}),a.a.createElement("span",{style:{color:"#4a5d70"}}," ","S :"," "),a.a.createElement(ze,{name:"serverSeed",type:"text",placeholder:"Server Seed",required:!0,value:p,onChange:d}))),c?a.a.createElement(Q,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(Ce,{style:{fontSize:16,color:"whitesmoke",marginTop:"30px",marginBottom:"40px"}},o?"".concat(o):null),a.a.createElement(pe,{chance:n,sum:t,overfifteen:r})))},De=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)([]),u=Object(i.a)(o,2),l=u[0],s=u[1],d=Object(r.useState)(0),f=Object(i.a)(d,2),p=f[0],m=f[1],b=Object(r.useState)(0),h=Object(i.a)(b,2),g=h[0],x=h[1],v=Object(r.useState)(!1),j=Object(i.a)(v,2),O=j[0],E=j[1],w=Object(r.useState)(""),y=Object(i.a)(w,2),S=y[0],k=y[1],C=Object(r.useState)(""),I=Object(i.a)(C,2),z=I[0],A=I[1],D=Object(r.useState)([]),M=Object(i.a)(D,2),P=M[0],F=M[1],T=Object(r.useState)(""),L=Object(i.a)(T,2),U=L[0],N=L[1],H=Object(r.useState)(""),q=Object(i.a)(H,2),B=q[0],J=q[1],W=function(){var e=S.split(",").map((function(e){return parseInt(e)})),n=e.reduce((function(e,n){return e+n})),t=e.includes(NaN),r=e.includes(0),a=e.filter((function(e){return e>28}));if(e.length>6||e.length<5||t||0!==a.length||r||n>50||""===U||""===B)A("Sorry, We don't have the data you are searching"),c([.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1]),m(10),x(0);else{if(JSON.stringify(P)===JSON.stringify(e))return;JSON.stringify(P)!==JSON.stringify(e)&&(F(e),K(),k(""),A(""))}},G=[],X=0,K=function(){for(var e=0;e<12;e++)e<7?(X=Math.floor(Math.random()*(1e4*Math.random()))+132,G.push(X)):e>6&&e<9?(X=Math.floor(Math.random()*(6e3*Math.random()))+332,G.push(X)):e>8&&(X=Math.floor(Math.random()*(1e3*Math.random()))+132,G.push(X));var n=Math.floor(100*Math.random())+1,t=G.reduce((function(e,n){return e+n}))+n,r=G.map((function(e){return parseFloat((e/t*100).toPrecision(4))}));c(G),m(t),x(n),s(r),!1===O&&E(!0)};return!0===O&&setTimeout((function(){return E(!1)}),3e3+Math.floor(1e3*Math.random())),a.a.createElement(Ae,{chance:t,percent:l,sum:p,loading:O,searchTerm:S,handleSubmit:function(e){e.preventDefault(),""!==S&&W(S)},updateTerm:function(e){e.preventDefault();var n=e.target.value;k(n)},error:z,overfifteen:g,onSubmit:function(e){},onChangeClient:function(e){e.preventDefault();var n=e.target.value;console.log(n),J(n)},onChangeServer:function(e){e.preventDefault();var n=e.target.value;console.log(n),N(n)},serverSeed:U,clientSeed:B})};function Me(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: rgb(45, 63, 81);\n"]);return Me=function(){return e},e}var Pe=d.default.div(Me()),Fe=function(){return a.a.createElement(Pe,null,"ProductPresenter")},Te=function(){return a.a.createElement(Fe,null)};function Le(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: rgb(45, 63, 81);\n"]);return Le=function(){return e},e}var Ue=d.default.div(Le()),Ne=function(){return a.a.createElement(Ue,null,"CompanyPresenter")},He=function(){return a.a.createElement(Ne,null)};function qe(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: rgb(45, 63, 81);\n"]);return qe=function(){return e},e}var Be=d.default.div(qe()),Je=function(){return a.a.createElement(Be,null,"DetailPresenter")},We=function(){return a.a.createElement(Je,null)};function Ge(){var e=Object(s.a)(["\n  all: unset;\n  width: 300px;\n  padding: 5px;\n  font-size: 16px;\n  background-color: #4a5d70;\n  /* border: 1px solid black; */\n  :not(:last-child) {\n    margin-bottom: 5px;\n  }\n  cursor: pointer;\n"]);return Ge=function(){return e},e}function Xe(){var e=Object(s.a)(["\n  all: unset;\n  width: 300px;\n  height: 23px;\n  padding: 5px;\n  font-size: 16px;\n  ::placeholder {\n    color: rgba(255, 255, 255, 0.2);\n    font-size: 14px;\n    padding-left: 8px;\n  }\n  background-color: #4a5d70;\n  border-radius: 32x;\n\n  margin-bottom: 5px;\n"]);return Xe=function(){return e},e}function Ke(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ke=function(){return e},e}function Re(){var e=Object(s.a)(["\n  width: 300px;\n  height: 500px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Re=function(){return e},e}function Ve(){var e=Object(s.a)(["\n  color: whitesmoke;\n  margin-bottom: 30px;\n  font-size: 30px;\n"]);return Ve=function(){return e},e}function Ze(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ze=function(){return e},e}var $e=d.default.div(Ze()),_e=d.default.div(Ve()),Qe=d.default.div(Re()),Ye=d.default.form(Ke()),en=d.default.input(Xe()),nn=d.default.button(Ge()),tn=function(){var e=Object(r.useState)(""),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),u=Object(i.a)(o,2),l=u[0],s=u[1],d=Object(r.useState)(!0),f=Object(i.a)(d,2),b=f[0],x=f[1],v=Object(r.useState)(""),j=Object(i.a)(v,2),O=j[0],E=j[1],w=function(e){var n=e.target,t=n.name,r=n.value;"email"===t?(c(r),console.log(r)):"password"===t&&s(r)},y=function(){var e=Object(m.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,!b){e.next=7;break}return e.next=5,h.createUserWithEmailAndPassword(t,l);case 5:e.next=9;break;case 7:return e.next=9,h.signInWithEmailAndPassword(t,l);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),E(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement($e,null,a.a.createElement(Qe,null,a.a.createElement(_e,null,"Time to DiceHunter"),a.a.createElement(Ye,{onSubmit:y},a.a.createElement(en,{name:"email",type:"email",placeholder:"e-mail",required:!0,value:t,onChange:w}),a.a.createElement(en,{name:"password",type:"password",placeholder:"password",required:!0,value:l,onChange:w}),a.a.createElement(en,{style:{textAlign:"center",backgroundColor:"#c05c67",color:"whitesmoke",fontSize:14},type:"submit",value:b?"Create Account":"Log In"})),a.a.createElement(nn,{onClick:function(e){"google"===e.target.name&&h.signInWithPopup(g)},name:"google"},"Continue with Google"),a.a.createElement(nn,{onClick:function(){return x((function(e){return!e}))}},b?"login":"Create Account"),a.a.createElement("p",null,O?"error : ".concat(O):null)))},rn=function(e){var n=e.isLoggedIn,t=e.userObj;return a.a.createElement(u.a,null,a.a.createElement(Z,{userObj:t}),a.a.createElement(l.d,null,n?a.a.createElement(a.a.Fragment,null,a.a.createElement(l.b,{exact:!0,path:"/"},a.a.createElement(De,null)),a.a.createElement(l.b,{path:"/product",component:Te}),a.a.createElement(l.b,{path:"/company",component:He}),a.a.createElement(l.b,{path:"/detail",component:We}),a.a.createElement(l.a,{from:"*",to:"/"})):a.a.createElement(a.a.Fragment,null,a.a.createElement(l.b,{exact:!0,path:"/"},a.a.createElement(F,null)),a.a.createElement(l.b,{exact:!0,path:"/azerckidforever",component:tn}),a.a.createElement(l.b,{path:"/product",component:Te}))))},an=t(40),cn=t.n(an);function on(){var e=Object(s.a)(["\n",";\na{\n    text-decoration:none;\n    color:inherit;\n}\n*{\n    box-sizing: border-box;\n}\nbody{\n    font-family:Arial, Helvetica, sans-serif;\n    font-size:14px;\n    background-color: rgb(45, 63, 81);\n    color:rgba(40,40,40,1);\n    padding-top:50px;\n}\n"]);return on=function(){return e},e}var un=Object(d.createGlobalStyle)(on(),cn.a);var ln=function(){var e=Object(r.useState)(!1),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),l=u[0],s=u[1],d=Object(r.useState)(null),f=Object(i.a)(d,2),p=f[0],m=f[1];return Object(r.useEffect)((function(){h.onAuthStateChanged((function(e){e?(s(!0),m(e)):s(!1),c(!0)}))}),[]),a.a.createElement(a.a.Fragment,null,t?a.a.createElement(rn,{isLoggedIn:l,userObj:p}):null,a.a.createElement(un,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ln,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.668539ec.chunk.js.map