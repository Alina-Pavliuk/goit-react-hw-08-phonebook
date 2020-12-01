(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var a,c,r,s,i=n(1),o=n(0),u=n(23),l=n.n(u),b=(n(64),n(6)),j=n(8),m=(n(69),n(89),n(11)),O=n.n(m),p=n(22),_=n(19),d=n.n(_),g=n(2),h={setToken:Object(g.b)("token/set"),resetToken:Object(g.b)("token/reset"),registerRequest:Object(g.b)("auth/registerRequest"),registerSuccess:Object(g.b)("auth/registerSuccess"),registerError:Object(g.b)("auth/registerError"),loginRequest:Object(g.b)("auth/loginRequest"),loginSuccess:Object(g.b)("auth/loginSuccess"),loginError:Object(g.b)("auth/loginError"),logoutRequest:Object(g.b)("auth/logoutRequest"),logoutSuccess:Object(g.b)("auth/logoutSuccess"),logoutError:Object(g.b)("auth/logoutError"),getCurrentUserRequest:Object(g.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(g.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(g.b)("auth/getCurrentUserError")},f="https://goit-phonebook-api.herokuapp.com",v=function(e){d.a.defaults.headers.common.Authorization="Bearer ".concat(e)},x=function(){d.a.defaults.headers.common.Authorization=""},N=(n(53),n(7)),C=n(4),k=n(21),L=n(20),E=n.n(L),w=n(12),y="/login",S="/register",I="/contacts",A=function(e){return e.auth.token},U=function(e){return e.auth.user.email},B={email:"",password:""},F=function(){var e=Object(o.useState)(B),t=Object(k.a)(e,2),n=t[0],a=t[1],c=Object(b.b)(),r=function(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(N.a)({},n,c))}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:E.a.loginTitle,children:"Login"}),Object(i.jsxs)("form",{autoComplete:"on",className:E.a.loginForm,onSubmit:function(e){var t;e.preventDefault(),c((t=n,function(){var e=Object(p.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(h.loginRequest),e.next=4,d.a.post("".concat(f,"/users/login"),t).then((function(e){v(e.data.token),n(h.loginSuccess(e.data))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n(h.loginError(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}())),a(B)},children:[Object(i.jsxs)("label",{className:E.a.loginLabel,children:[Object(i.jsx)("span",{className:E.a.loginLabelSpan,children:"Email"}),Object(i.jsx)("input",{type:"email",name:"email",placeholder:"Enter email",suggested:"email",value:n.email,className:E.a.loginInput,onChange:r})]}),Object(i.jsxs)("label",{className:E.a.loginLabel,children:[Object(i.jsx)("span",{className:E.a.loginLabelSpan,children:"Password"}),Object(i.jsx)("input",{type:"password",name:"password",placeholder:"Enter password",suggested:"password",value:n.password,className:E.a.loginInput,onChange:r})]}),Object(i.jsx)("button",{type:"submit",className:E.a.loginButton,children:"Login"})]}),Object(i.jsxs)("p",{className:E.a.loginMessage,children:["If you don't have an account please ",Object(i.jsx)(w.b,{to:S,children:"Sing UP"})]})]})},R=n(14),M=n.n(R),q={name:"",email:"",password:""},P=function(){var e=Object(o.useState)(q),t=Object(k.a)(e,2),n=t[0],a=t[1],c=Object(b.b)(),r=function(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(N.a)({},n,c))}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:M.a.registrationTitle,children:"Registration"}),Object(i.jsxs)("form",{autoComplete:"on",className:M.a.registrationForm,onSubmit:function(e){var t;e.preventDefault(),c((t=n,function(){var e=Object(p.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(h.registerRequest()),e.next=4,d.a.post("".concat(f,"/users/signup"),t).then((function(e){v(e.data.token),n(h.registerSuccess(e.data)),console.log(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n(h.registerError(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}())),a(q)},children:[Object(i.jsxs)("label",{className:M.a.registrationLabel,children:[Object(i.jsx)("span",{className:M.a.registrationLabelSpan,children:"Name"}),Object(i.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",suggested:"name",value:n.name,className:M.a.registrationInput,onChange:r})]}),Object(i.jsxs)("label",{className:M.a.registrationLabel,children:[Object(i.jsx)("span",{className:M.a.registrationLabelSpan,children:"Email"}),Object(i.jsx)("input",{type:"email",name:"email",placeholder:"Enter email",suggested:"email",value:n.email,className:M.a.registrationInput,onChange:r})]}),Object(i.jsxs)("label",{className:M.a.registrationLabel,children:[Object(i.jsx)("span",{className:M.a.registrationLabelSpan,children:"Password"}),Object(i.jsx)("input",{type:"password",name:"password",placeholder:"Enter email",suggested:"password",value:n.password,className:M.a.registrationInput,onChange:r})]}),Object(i.jsx)("button",{type:"submit",className:M.a.registrationButton,children:"Sing Up"})]}),Object(i.jsxs)("p",{className:M.a.registrationMessage,children:["If you already have an account please ",Object(i.jsx)(w.b,{to:y,children:"LOGIN"})]})]})},T=n(17),D=n.n(T),H=n(35),J=n.n(H),X=function(){var e=Object(b.c)(U),t=Object(b.b)();return Object(i.jsxs)("div",{className:J.a.containerUserMenu,children:[Object(i.jsx)("p",{className:J.a.emailUserMenu,children:e}),Object(i.jsx)("button",{className:J.a.buttonUserMenu,type:"button",onClick:function(){t(function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(h.logoutRequest()),e.next=4,d.a.post("".concat(f,"/users/logout")).then((function(){x(),t(h.logoutSuccess())}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t(h.logoutError(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]})},z=n(57),Q=function(e){var t=e.isPrivate,n=e.isPublic,a=Object(z.a)(e,["isPrivate","isPublic"]),c=Object(b.c)(A);return t?c?Object(i.jsx)(w.b,Object(C.a)({},a)):null:n&&c?null:Object(i.jsx)(w.b,Object(C.a)({},a))},W=function(){var e=Object(b.c)(A);return Object(i.jsxs)("header",{className:D.a.nav,children:[Object(i.jsxs)("ul",{className:D.a.navList,children:[Object(i.jsx)("li",{className:D.a.navList__item}),Object(i.jsx)("li",{className:D.a.navList__item,children:Object(i.jsx)(Q,{to:y,className:D.a.navList__item_link,activeClassName:D.a.navList__item_active_link,isPublic:!0,children:"Login"})}),Object(i.jsx)("li",{className:D.a.navList__item,children:Object(i.jsx)(Q,{to:S,className:D.a.navList__item_link,activeClassName:D.a.navList__item_active_link,isPublic:!0,children:"Registration"})}),Object(i.jsx)("li",{className:D.a.navList__item,children:Object(i.jsx)(Q,{to:I,className:D.a.navList__item_link,activeClassName:D.a.navList__item_active_link,isPrivate:!0,children:"Contacts"})})]}),e&&Object(i.jsx)(X,{})]})},K=n(26),Y=n.n(K),Z=n(113),G=n(114),V=n(25),$=n.n(V),ee=n(27),te=n.n(ee),ne={number:"",name:""},ae=function(e){var t=e.setAlert,n=e.addContact,a=e.contacts,c=Object(o.useState)(ne),r=Object(k.a)(c,2),s=r[0],u=r[1],l=s.name,b=s.number,j=function(e){var t=e.target,n=t.name,a=t.value;u(Object(C.a)(Object(C.a)({},s),{},Object(N.a)({},n,a)))};return Object(i.jsxs)("form",{className:te.a.ContactForm,onSubmit:function(e){e.preventDefault();var c=e.target,r=c.name,s=c.number,i={name:r.value,number:s.value};a.some((function(e){return e.name===r.value}))?t(!0):(n(i),u(Object(C.a)({},ne)))},children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{className:te.a.titleLabel,children:"Name"}),Object(i.jsx)("input",{className:te.a.inputForm,type:"text",value:l,name:"name",placeholder:"Name",onChange:j})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{className:te.a.titleLabel,children:" Number"}),Object(i.jsx)("input",{className:te.a.inputForm,type:"text",value:b,name:"number",placeholder:"Number",onChange:j})]}),Object(i.jsx)("button",{className:te.a.formButton,type:"submit",children:"Add contact"})]})},ce=n(36),re=n.n(ce),se=function(e){var t=e.filter,n=e.filterHandler;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:re.a.wrapperSearch,children:Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{className:re.a.filterLabel_span,children:" Find contacts by name"}),Object(i.jsx)("input",{className:re.a.filterInput,type:"text",name:"filter",value:t,onChange:n,placeholder:"Search"})]})})})},ie=function(e){var t=e.id,n=e.name,a=e.number,c=e.removeContact;return Object(i.jsxs)("li",{className:$.a.contactItem,children:[Object(i.jsxs)("p",{className:$.a.paragraph,children:[n,": ",a]}),Object(i.jsx)("button",{className:$.a.removeBtn,type:"button",onClick:c(t),children:"X"})]})},oe=Object(g.b)("contacts/addRequest"),ue=Object(g.b)("contacts/addSuccess"),le=Object(g.b)("contacts/addError"),be=Object(g.b)("contacts/getRequest"),je=Object(g.b)("contacts/getSuccess"),me=Object(g.b)("contacts/getError"),Oe=Object(g.b)("contacts/removeRequest"),pe=Object(g.b)("contacts/removeSuccess"),_e=Object(g.b)("contacts/removeError"),de=(Object(g.b)("contacts/add",(function(e){return{payload:{contactObj:e}}})),Object(g.b)("contacts/remove"),Object(g.b)("contacts/set"),Object(g.b)("filter/edit")),ge=function(e){return function(){var t=Object(p.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(oe()),t.next=4,d.a.post("".concat(f,"/contacts"),e);case 4:a=t.sent,n(ue(a.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(le(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},he=function(){return function(){var e=Object(p.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(be()),e.next=4,d.a.get("".concat(f,"/contacts"));case 4:n=e.sent,t(je(n.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(me(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},fe=function(e){return function(){var t=Object(p.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Oe()),t.next=4,d.a.delete("".concat(f,"/contacts/").concat(e));case 4:n(pe(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(_e(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},ve=n(24),xe=function(e){return e.contacts},Ne=Object(ve.a)(xe,(function(e){return e.items})),Ce=Object(ve.a)(xe,(function(e){return e.filter})),ke=Object(ve.a)(Ne,Ce,(function(e,t){return 0===e.length?[]:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),Le=function(){var e=Object(b.c)(Ne),t=Object(b.c)(Ce),n=Object(b.c)(ke),a=(Object(b.c)(A),Object(j.g)(),Object(b.b)()),c=Object(o.useState)(!1),r=Object(k.a)(c,2),s=r[0],u=r[1],l=Object(o.useState)(!1),m=Object(k.a)(l,2),O=m[0],p=m[1];Object(o.useEffect)((function(){a(he()),u(!0)}),[a]);var _=function(e){return function(t){a(fe(e))}};return Object(i.jsxs)("div",{className:Y.a.wrapper,children:[Object(i.jsx)(Z.a,{classNames:{enterActive:Y.a.alertBoxEnterActive,exitActive:Y.a.alertBoxExitActive},mountOnEnter:!0,unmountOnExit:!0,timeout:300,in:O,children:Object(i.jsxs)("div",{className:Y.a.alertBox,children:[Object(i.jsx)("h2",{children:"The name is already a contact"}),Object(i.jsx)("button",{onClick:function(){return p(!1)},className:$.a.alertBtn,type:"button",children:"X"})]})}),Object(i.jsx)(Z.a,{classNames:{enterActive:Y.a.titleEnterActive},timeout:800,in:s,children:Object(i.jsx)("h2",{className:Y.a.title,children:"Phonebook "})}),Object(i.jsx)(ae,{setAlert:p,addContact:function(e){a(ge(e))},contacts:e}),Object(i.jsx)(se,{filter:t,filterHandler:function(e){a(de(e.target.value))}}),Object(i.jsx)(G.a,{className:Y.a.contactsList,component:"ul",children:n.map((function(e){return Object(i.jsx)(Z.a,{timeout:800,classNames:{enterActive:$.a.listItemEnterActive,exitActive:$.a.listItemExitActive},children:Object(i.jsx)(ie,Object(C.a)(Object(C.a)({},e),{},{removeContact:_}))},e.id)}))})]})},Ee=function(e){return Object(b.c)(A)?Object(i.jsx)(j.b,Object(C.a)({},e)):Object(i.jsx)(j.a,{to:y})},we=function(e){return Object(b.c)(A)?Object(i.jsx)(j.a,{to:I}):Object(i.jsx)(j.b,Object(C.a)({},e))},ye=function(){var e=Object(b.b)();return Object(o.useEffect)((function(){e(function(){var e=Object(p.a)(O.a.mark((function e(t,n){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(),c=a.auth.token){e.next=3;break}return e.abrupt("return");case 3:return v(c),e.prev=4,t(h.getCurrentUserRequest()),e.next=8,d.a.get("".concat(f,"/users/current")).then((function(e){var n=e.data;return t(h.getCurrentUserSuccess(n))}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),t(h.getCurrentUserError(e.t0));case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,n){return e.apply(this,arguments)}}())}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(W,{}),Object(i.jsxs)(j.d,{children:[Object(i.jsx)(we,{path:y,component:F}),Object(i.jsx)(we,{path:S,component:P}),Object(i.jsx)(Ee,{exact:!0,to:I,component:Le})]})]})},Se=n(32),Ie=Object(g.c)({items:[],filter:""},(a={},Object(N.a)(a,ue,(function(e,t){var n=t.payload;return Object(C.a)(Object(C.a)({},e),{},{items:[].concat(Object(Se.a)(e.items),[n])})})),Object(N.a)(a,je,(function(e,t){var n=t.payload;return Object(C.a)(Object(C.a)({},e),{},{items:Object(Se.a)(n)})})),Object(N.a)(a,pe,(function(e,t){var n=t.payload;return Object(C.a)(Object(C.a)({},e),{},{items:e.items.filter((function(e){return e.id!==n}))})})),Object(N.a)(a,de,(function(e,t){var n=t.payload;return Object(C.a)(Object(C.a)({},e),{},{filter:n})})),a)),Ae=n(13),Ue={name:null,email:null},Be=Object(g.c)(Ue,(c={},Object(N.a)(c,h.registerSuccess,(function(e,t){return t.payload.user})),Object(N.a)(c,h.loginSuccess,(function(e,t){return t.payload.user})),Object(N.a)(c,h.getCurrentUserSuccess,(function(e,t){return t.payload})),Object(N.a)(c,h.logoutSuccess,(function(){return Ue})),c)),Fe=Object(g.c)(null,(r={},Object(N.a)(r,h.registerSuccess,(function(e,t){return t.payload.token})),Object(N.a)(r,h.loginSuccess,(function(e,t){return t.payload.token})),Object(N.a)(r,h.logoutSuccess,(function(){return null})),r)),Re=Object(g.c)(null,(s={},Object(N.a)(s,h.registerError,(function(e,t){return t.payload})),Object(N.a)(s,h.loginError,(function(e,t){return t.payload})),Object(N.a)(s,h.logoutError,(function(e,t){return t.payload})),Object(N.a)(s,h.getCurrentError,(function(e,t){return t.payload})),s)),Me=Object(Ae.c)({user:Be,token:Fe,error:Re}),qe=n(54),Pe=n.n(qe),Te=n(43),De=n(55),He=n.n(De),Je=n(30),Xe=Object(g.d)({serializableCheck:!1}),ze={key:"auth",storage:He.a,whitelist:["token"]},Qe=Object(g.a)({reducer:{contacts:Ie,auth:Object(Te.a)(ze,Me)},middleware:[].concat(Object(Se.a)(Xe),[Pe.a,Je.a])}),We=Qe,Ke=Object(Te.b)(Qe),Ye=n(56);l.a.render(Object(i.jsx)(b.a,{store:We,children:Object(i.jsx)(Ye.a,{loading:null,persistor:Ke,children:Object(i.jsx)(w.a,{children:Object(i.jsx)(ye,{})})})}),document.getElementById("root"))},14:function(e,t,n){e.exports={registrationForm:"Registration_registrationForm__3TAiX",registrationInput:"Registration_registrationInput__1icr0",registrationButton:"Registration_registrationButton__1m7B5",registrationTitle:"Registration_registrationTitle__2k_Df",registrationMessage:"Registration_registrationMessage__2TCIZ"}},17:function(e,t,n){e.exports={nav:"Header_nav__15M3N",navList:"Header_navList__226kJ",navList__item:"Header_navList__item__2sUKk",navList__item_link:"Header_navList__item_link__isq1e",navList__item_active_link:"Header_navList__item_active_link__2uwh_"}},20:function(e,t,n){e.exports={loginForm:"Login_loginForm__3AuyD",loginInput:"Login_loginInput__35Ew2",loginButton:"Login_loginButton__2Lm8i",loginTitle:"Login_loginTitle__3UsLj",loginMessage:"Login_loginMessage__1qvhF"}},25:function(e,t,n){e.exports={contactItem:"ContactItem_contactItem__D_wUJ",listItemEnterActive:"ContactItem_listItemEnterActive__28bVf",task:"ContactItem_task__20LfY",listItemExitActive:"ContactItem_listItemExitActive__1wZ3F",hinge:"ContactItem_hinge__m3PqO",removeBtn:"ContactItem_removeBtn__29UAM",paragraph:"ContactItem_paragraph__1OKz_"}},26:function(e,t,n){e.exports={wrapper:"Contacts_wrapper__18UvY",formButton:"Contacts_formButton__2XrTD",title:"Contacts_title__1vTDm",titleEnterActive:"Contacts_titleEnterActive__4N2ey",task:"Contacts_task__1S9jx",contactsList:"Contacts_contactsList__2XRQ5",alertBox:"Contacts_alertBox__Nat0I",alertBoxEnterActive:"Contacts_alertBoxEnterActive__2Lwty",alertBoxExitActive:"Contacts_alertBoxExitActive__nWt6n",hinge:"Contacts_hinge__2vquC"}},27:function(e,t,n){e.exports={ContactForm:"ContactForm_ContactForm__212Qj",titleLabel:"ContactForm_titleLabel__2badp",inputForm:"ContactForm_inputForm__2de9Q",formButton:"ContactForm_formButton__fthjp"}},35:function(e,t,n){e.exports={emailUserMenu:"UserMenu_emailUserMenu__2RJDg",containerUserMenu:"UserMenu_containerUserMenu__bEiPW",buttonUserMenu:"UserMenu_buttonUserMenu__2zvrm"}},36:function(e,t,n){e.exports={filterInput:"Filter_filterInput__AdX91",filterLabel_span:"Filter_filterLabel_span__oJAe_",wrapperSearch:"Filter_wrapperSearch__3WE7k"}},53:function(e,t,n){},64:function(e,t,n){},89:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.0b27feaf.chunk.js.map