(this.webpackJsonpfortune=this.webpackJsonpfortune||[]).push([[0],{163:function(e,t,n){e.exports=n(256)},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);n(164),n(190),n(192),n(193),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232);var a=n(0),o=n.n(a),c=n(89),r=n.n(c),l=n(18),i=n.n(l),s=n(13),u=n(3),m=(n(251),n(96)),p=n.n(m),f=n(97),d=n.n(f),h=n(98),g=n.n(h),b=n(99),E=n.n(b),x=n(100),w=n.n(x);var y=n(57),j=n.n(y),v=n(59),O=n(93),S=n(94),k=n(95),A=function(){function e(){Object(S.a)(this,e)}return Object(k.a)(e,null,[{key:"callMethod",value:function(){var t=Object(O.a)(j.a.mark((function t(n){var a,o,c=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},t.prev=1,t.next=4,fetch("".concat(e.baseURL,"/").concat(n),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(v.a)(Object(v.a)({},a),{},{search:document.location.search}))});case 4:return o=t.sent,t.abrupt("return",o.json());case 8:t.prev=8,t.t0=t.catch(1),console.log("1 API Error: ",t.t0),console.log("2 API Error: ",t.t0.stack),console.log("2 API Error: ",t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}]),e}();A.baseURL="https://wheel.cf/server/api";var z="https://sun9-40.userapi.com/2OpcaRTr0LoA2SGgN8fWhcvt_fm3iXwmf34f3Q/26Gcr6w9RQg.jpg",C=Number(new URLSearchParams(document.location.search).get("vk_user_id")),T=A.callMethod;function M(e,t,n,a){switch(e){case"app-notification":i.a.sendPromise("VKWebAppAllowNotifications").then((function(e){console.log("res",e)})).catch((function(e){console.log("err",e)}));break;case"story":!function(e,t){var n="https://vk.com/app".concat(7637811,"#").concat(C);i.a.sendPromise("VKWebAppShowStoryBox",{background_type:"image",url:"https://sun9-61.userapi.com/dt1EAGrTXKBJvGYIBRnvMXRqyved3Yw7x0ZCzg/cnIbVSGFOxo.jpg",attachment:{text:"go_to",type:"url",url:n}}).then((function(e){if(e.result)return T("story")})).then((function(n){!0===n.added?t("\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 1 \u0431\u043e\u043d\u0443\u0441\u043d\u0443\u044e \u043f\u043e\u043f\u044b\u0442\u043a\u0443"):t("\u0415\u0449\u0451 \u043e\u0434\u043d\u0443 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0437\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ".concat(W(n.time))),e()}))}(a,t);break;case"share-wall":!function(e,t,n){e.preventDefault();"https://vk.com/app".concat(7637811,"#").concat(C);var a="".concat("photo-198555148_457239084",",https://vk.com/app").concat(7637811,"#").concat(C);i.a.send("VKWebAppShowWallPostBox",{message:"",attachments:a}).then((function(e){if(e.post_id>0)return T("wall")})).then((function(e){!0===e.added?n("\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 1 \u0431\u043e\u043d\u0443\u0441\u043d\u0443\u044e \u043f\u043e\u043f\u044b\u0442\u043a\u0443"):n("\u0415\u0449\u0451 \u043e\u0434\u043d\u0443 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0437\u0430 \u0440\u0435\u043f\u043e\u0441\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ".concat(W(e.time))),t()}))}(n,a,t)}}var P=function(e){var t=e.setActiveModal;e.addGroup,e.openModalSharing,e.referrals;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.g,{activeModal:"modal-prize"},o.a.createElement(u.f,{id:"modal-prize",onClose:function(){t(null)},header:"\u041d\u0430\u0431\u043e\u0440 \u0441\u0442\u0438\u043a\u0435\u0440\u043e\u0432",icon:o.a.createElement(u.c,{size:72,src:z}),caption:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.e,{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},o.a.createElement(u.e,null,'\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0443\u043b\u0447\u0438\u0442\u044c \u043f\u0440\u0438\u0437, \u043d\u0430\u0436\u043c\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0438\u0437"'),o.a.createElement(u.d,{size:"l",mode:"commerce",href:"https://vk.me/public199716716",target:"_blank",onClick:function(){},style:{color:"white",marginTop:"30px",width:"260px"}},o.a.createElement("span",{style:{fontSize:"17px"}}," \u041f\u043e\u0443\u043b\u0447\u0438\u0442\u044c \u043f\u0440\u0438\u0437"))))})))};var I,W=function(e){var t=Math.floor(e/1e3%60),n=Math.floor(e/6e4%60),a=Math.floor(e/36e5%24);return n=n<10?"0"+n:n,t=t<10?"0"+t:t,"".concat(a=a<10?"0"+a:a,":").concat(n,":").concat(t)},N=n(58),U=n.n(N),_=A.callMethod,V=function(e){var t=e.id,n=(e.go,e.fetchedUser,e.snackbar),c=e.openAlert,r=e.openPopoutSharing,l=(e.allowMessages,e.attempts),m=e.timeToAttempt,p=e.getUser,f=e.openModal,d=e.getPlatform,h=Object(a.useState)(!1),g=Object(s.a)(h,2),b=(g[0],g[1],Object(a.useState)("")),E=Object(s.a)(b,2),x=E[0],w=E[1],y=["animationOne","animationTwo","animationThree","animationFour"],j=Object(a.useState)(m-Date.now()),v=Object(s.a)(j,2),O=v[0],S=v[1],k=Object(a.useState)(!0),A=Object(s.a)(k,2);A[0],A[1];return Object(a.useEffect)((function(){console.log("\u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043c \u0445\u043e\u0443\u043c")}),[]),Object(a.useEffect)((function(){return I&&clearInterval(I),I=setInterval((function(){S(m-Date.now())}),1e3),function(){return clearInterval(I)}}),[m]),o.a.createElement(u.h,{id:t},o.a.createElement(u.e,{className:"web"!==d?"imgPanelHome":"imgPanelHome AdditionalAttempts"},o.a.createElement(u.e,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100px"}},O>0?o.a.createElement(U.a,{top:!0,duration:3e3},o.a.createElement(u.e,{style:{fontSize:"15px",color:"white"}}," ","\u041e\u0421\u0422\u0410\u041b\u041e\u0421\u042c \u0414\u041e \u0421\u041b\u0415\u0414\u0423\u042e\u0429\u0415\u0419 \u041f\u041e\u041f\u042b\u0422\u041a\u0418:"," "),o.a.createElement(u.e,{style:{fontSize:"15px",color:"white",marginTop:"10px"}}," ",W(O)," ")):o.a.createElement(U.a,{top:!0,duration:3e3},o.a.createElement(u.e,{style:{fontSize:"15px",color:"white"}},"\u041f\u043e\u043f\u044b\u0442\u043a\u0438: ",l))),o.a.createElement(u.e,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",height:"320px"}},o.a.createElement(u.e,{className:"imgPointer"}),o.a.createElement(u.e,{className:"imgFortune ".concat(x)})),o.a.createElement(u.d,{size:"l",mode:"commerce",onClick:function(){!function(){var e=0,t=Math.floor(y.length),n=Math.floor(Math.random()*t);i.a.sendPromise("VKWebAppAllowMessagesFromGroup",{group_id:199716716}).then((function(e){if(!1!==e.status)return _("twist")})).then((function(t){!1===t.status?c("\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u0440\u0443\u0442\u0438\u0442\u044c \u043a\u043e\u043b\u0435\u0441\u043e","red"):(e=y[n],console.log("res",n+1),console.log("a",e),w(y[n]),setTimeout((function(){f("prize")}),1e3*(n+4)),p())})).catch((function(e){return console.log("err",e),c("\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u0441\u043c\u043e\u0433\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u043c \u043f\u0440\u0438\u0437","red")}))}()},style:{color:"white",marginTop:"30px",width:"260px"},disabled:Boolean(O>0)||0===l},o.a.createElement("span",{style:{fontSize:"17px"}}," \u041a\u0440\u0443\u0442\u0438\u0442\u044c \u043a\u043e\u043b\u0435\u0441\u043e")),o.a.createElement(u.d,{size:"l",mode:"overlay_primary",onClick:r,style:{marginTop:"15px",width:"260px"}},o.a.createElement("span",{style:{fontSize:"17px"}}," \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0438"))),n)},D=(n(88),function(e){var t=e.id,n=e.go,a=(e.fetchedUser,e.snackbar);e.openAlert;return o.a.createElement(u.h,{id:t},o.a.createElement(u.e,{className:"imgPanelHome AdditionalAttempts"},o.a.createElement(u.e,{style:{color:"white",fontSize:"30px",fontWeight:"bold",margin:"0px 0px 10px 0px"}},"\u041a\u041e\u041b\u0415\u0421\u041e \u0423\u0414\u0410\u0427\u0418"),o.a.createElement(u.e,{style:{width:"94%",background:"rgba(89, 76, 76, 0.5)",fontSize:"20px",margin:"0px 0px 20px 0px",padding:"20px",color:"white",borderRadius:"15px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},o.a.createElement(u.e,null,"\u041a\u0440\u0443\u0442\u0438 \u043a\u043e\u043b\u0435\u0441\u043e \u0443\u0434\u0430\u0447\u0438 \u0438 \u0432\u044b\u0438\u0433\u0440\u044b\u0432\u0430\u0439 \u043a\u0440\u0443\u0442\u044b\u0435 \u043f\u0440\u0438\u0437\u044b."),o.a.createElement(u.e,null,"\u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c \u0442\u0435\u0431\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043e\u0434\u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u043e\u043f\u044b\u0442\u043a\u0430.")),o.a.createElement(u.e,{className:"imgPointer AdditionalAttempts"}),o.a.createElement(u.e,{className:"imgFortune AdditionalAttempts animationInfinite"}),o.a.createElement(u.e,{style:{width:"94%",background:"rgba(89, 76, 76, 0.5)",fontSize:"20px",margin:"0px 0px 20px 0px",padding:"20px",color:"white",borderRadius:"15px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},o.a.createElement(u.e,null,"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0439 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0438, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044f \u043b\u0435\u0433\u043a\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f.")),o.a.createElement(u.e,{style:{color:"white",fontSize:"20px",fontWeight:"bold",margin:"0px 0px 10px 0px"}},"\u0414\u041e\u041f\u041e\u041b\u041d\u0418\u0422\u0415\u041b\u042c\u041d\u042b\u0415 \u041f\u041e\u041f\u042b\u0422\u041a\u0418"),o.a.createElement(u.d,{size:"l",onClick:n,"data-to":"additional-attempts",style:{backgroundColor:"white",color:"black",marginTop:"15px",width:"260px"}},o.a.createElement("span",{style:{fontSize:"17px"}}," \u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 +1")),o.a.createElement(u.d,{size:"l",onClick:n,"data-to":"additional-attempts",style:{backgroundColor:"white",color:"black",marginTop:"15px",width:"260px"}},o.a.createElement("span",{style:{fontSize:"17px"}}," \u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0435\u043d\u0435 +1")),o.a.createElement(u.d,{size:"l",onClick:n,"data-to":"additional-attempts",style:{backgroundColor:"white",color:"black",marginTop:"15px",width:"260px"}},o.a.createElement("span",{style:{fontSize:"17px"}},"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f +1")),o.a.createElement(u.d,{size:"l",onClick:n,"data-to":"home",style:{backgroundColor:"green",color:"white",marginTop:"15px",width:"350px",height:"50px"}},o.a.createElement("span",{style:{fontSize:"25px"}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))),a)}),F=function(e){var t=e.id,n=(e.go,e.fetchedUser,e.snackbar),c=e.openAlert,r=Object(a.useState)(!1),l=Object(s.a)(r,2),i=(l[0],l[1],Object(a.useState)("")),m=Object(s.a)(i,2),p=m[0],f=m[1],d=["animationOne","animationTwo","animationThree","animationFour"];return Object(a.useEffect)((function(){}),[]),o.a.createElement(u.h,{id:t},o.a.createElement(u.e,{className:"imgPanelHome"},o.a.createElement(u.e,{className:"imgPointer"}),o.a.createElement(u.e,{className:"imgFortune ".concat(p)}),o.a.createElement(u.d,{size:"l",onClick:function(){!function(){var e,t=Math.ceil(0),n=Math.floor(d.length-1),a=Math.floor(Math.random()*(n-0))+t;f(d[a]),setTimeout((function(){f("")}),1e3),e=d[a],console.log("res",a),console.log("a",e)}()},style:{backgroundColor:"green",color:"white",marginTop:"30px",width:"260px"}},o.a.createElement("span",{style:{fontSize:"17px"}}," \u041a\u0440\u0443\u0442\u0438\u0442\u044c \u043a\u043e\u043b\u0435\u0441\u043e")),o.a.createElement(u.d,{size:"l",onClick:function(){return c("\u041e\u0448\u0438\u0431\u043a\u0430 !","red")},style:{backgroundColor:"white",color:"black",marginTop:"15px",width:"260px"}},o.a.createElement("span",{style:{fontSize:"17px"}}," \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0438"))),n)},G=(n(254),n(255),A.callMethod),K=function(){Object(u.k)();var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("home"),l=Object(s.a)(r,2),m=l[0],f=l[1],h=Object(a.useState)(null),b=Object(s.a)(h,2),x=b[0],y=b[1],j=Object(a.useState)(null),v=Object(s.a)(j,2),O=v[0],S=(v[1],Object(a.useState)(null)),k=Object(s.a)(S,2),A=k[0],C=k[1],T=Object(a.useState)(null),I=Object(s.a)(T,2),N=I[0],U=I[1],_=Object(a.useState)(null),K=Object(s.a)(_,2),R=K[0],B=K[1],J=Object(a.useState)(0),H=Object(s.a)(J,2),L=H[0],X=H[1],Q=Object(a.useState)(0),Y=Object(s.a)(Q,2),q=Y[0],Z=Y[1],$=Object(a.useState)(),ee=Object(s.a)($,2),te=ee[0],ne=ee[1];Object(a.useEffect)((function(){i.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var o=document.createAttribute("scheme");o.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(o)}}))}),[]);var ae=function(){G("getUser").then((function(e){e.user&&(B(e.user.attempts),X(e.user.timeToStoryShare),Z(e.user.timeToWallShare),ne(e.user.timeToAttempt)),console.log("res",e)})).catch((function(e){console.log("err",e)}))};function oe(){i.a.send("VKWebAppJoinGroup",{group_id:199716716}).then((function(e){var t=e.result;console.log("VKWebAppJoinGroup",t)}))}function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"green";N||U(o.a.createElement(u.i,{duration:"7000",layout:"horizontal",onClose:function(){return U(null)},before:o.a.createElement(u.c,{size:24,style:{backgroundColor:t}},"green"===t?o.a.createElement(p.a,{fill:"#fff",width:14,height:14}):o.a.createElement(d.a,{fill:"#fff",width:14,height:14}))},e))}Object(a.useEffect)((function(){console.log("\u0437\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),ae()}),[]),Object(a.useEffect)((function(){i.a.sendPromise("VKWebAppGetClientVersion").then((function(e){c(e.platform),console.log("result.platform",n)})).catch((function(e){return console.log(e)}))}),[n]);var re=function(e){f(e.currentTarget.dataset.to)};return o.a.createElement(u.j,{activePanel:m,popout:A,modal:x},o.a.createElement(V,{id:"home",fetchedUser:O,go:re,snackbar:N,openAlert:ce,openPopoutSharing:function(){y(null),C(o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{onClose:function(){return C(null)}},o.a.createElement(u.b,{autoclose:!0},o.a.createElement("div",{style:{fontSize:"13px",color:"#818C99"}},"\u0417\u0430 \u043a\u0430\u0436\u0434\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0440\u0430\u0437 \u0432 24 \u0447\u0430\u0441\u0430")),o.a.createElement(u.b,{before:o.a.createElement(g.a,{width:20,height:20}),autoclose:!0,onClick:function(){L<Date.now()?M("story",ce,null,ae):ce("\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u043e\u043d\u0443\u0441\u043d\u0443\u044e \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0437\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0447\u0435\u0440\u0435\u0437 ".concat(W(L-Date.now())),"red")}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"),o.a.createElement(u.b,{before:o.a.createElement(E.a,{width:20,height:20}),autoclose:!0,onClick:function(e){q<Date.now()?M("share-wall",ce,e,ae):ce("\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u043e\u043d\u0443\u0441\u043d\u0443\u044e \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0437\u0430 \u043f\u043e\u0441\u0442 \u043c\u043e\u0436\u043d\u043e \u0447\u0435\u0440\u0435\u0437 ".concat(W(q-Date.now())),"red")}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0435\u043d\u0435"),o.a.createElement(u.b,{before:o.a.createElement(w.a,{width:20,height:20}),autoclose:!0,onClick:oe},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0443"))))},allowMessages:function e(){i.a.send("VKWebAppAllowMessagesFromGroup",{group_id:199716716}).then((function(e){console.log("res",e)})).catch((function(t){setTimeout(e,5e3),console.log("err",t)}))},attempts:R,timeToAttempt:te,getUser:ae,openModal:function(e){y(o.a.createElement(P,{setActiveModal:y,APP_AVATAR:z,getUser:ae,type:e}))},getPlatform:n}),o.a.createElement(D,{id:"additional-attempts",fetchedUser:O,go:re,snackbar:N,openAlert:ce}),o.a.createElement(F,{id:"application-description",fetchedUser:O,go:re,snackbar:N,openAlert:ce}))};i.a.send("VKWebAppInit"),r.a.render(o.a.createElement(K,null),document.getElementById("root")),Promise.all([n.e(3),n.e(4)]).then(n.bind(null,260)).then((function(e){e.default}))}},[[163,1,2]]]);
//# sourceMappingURL=main.812e17e5.chunk.js.map