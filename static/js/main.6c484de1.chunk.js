(this.webpackJsonpowdr=this.webpackJsonpowdr||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/iks.6ac2912e.svg"},23:function(e,a,t){e.exports=t.p+"static/media/hamburger_menu.42aa5dbd.svg"},24:function(e,a,t){e.exports=t.p+"static/media/Icon-1.91147906.svg"},25:function(e,a,t){e.exports=t.p+"static/media/Icon-4.436df0aa.svg"},43:function(e,a,t){e.exports=t.p+"static/media/Icon-2.db91e33e.svg"},44:function(e,a,t){e.exports=t.p+"static/media/Icon-3.2cfe9dfe.svg"},45:function(e,a,t){e.exports=t.p+"static/media/Signature.e54cfcfc.svg"},46:function(e,a,t){e.exports=t.p+"static/media/Instagram.703479fd.svg"},47:function(e,a,t){e.exports=t.p+"static/media/Facebook.df65b6c0.svg"},48:function(e,a,t){e.exports=t(70)},69:function(e,a,t){},7:function(e,a,t){e.exports=t.p+"static/media/Decoration.2290784e.svg"},70:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),m=t(6),o=t(5),i=t(3),u=t(13),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"header_nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/"},"Start")),l.a.createElement("li",null,l.a.createElement(u.Link,{spy:!0,smooth:!0,offset:0,duration:500,to:"simple_steps"},"O co chodzi?")),l.a.createElement("li",null,l.a.createElement(u.Link,{spy:!0,smooth:!0,offset:0,duration:500,to:"about_us"},"O nas")),l.a.createElement("li",null,l.a.createElement(u.Link,{spy:!0,smooth:!0,offset:0,duration:500,to:"help"},"Fundacja i organizacje")),l.a.createElement("li",null,l.a.createElement(u.Link,{spy:!0,smooth:!0,offset:0,duration:500,to:"contact"},"Kontakt")))))},d=l.a.createContext(null),E=t(42),p=t(26),b=t.n(p),h=(t(64),t(66),{apiKey:"AIzaSyAUzxEeJRbN4TgUJ0OVxqwhjCge-o_JqMw",authDomain:"owdr-4b372.firebaseapp.com",databaseURL:"https://owdr-4b372.firebaseio.com",projectId:"owdr-4b372",storageBucket:"owdr-4b372.appspot.com",messagingSenderId:"120964700288",appId:"1:120964700288:web:79125411b06979166fae65",measurementId:"G-G7SVGJKRMH"}),g=function e(){var a=this;Object(E.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,t){return a.auth.createUserWithEmailAndPassword(e,t)},this.doSignInWithEmailAndPassword=function(e,t){return a.auth.signInWithEmailAndPassword(e,t)},this.doSignOut=function(){return a.auth.signOut()},this.doPasswordReset=function(e){return a.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return a.auth.currentUser.updatePassword(e)},this.fundations=function(){return a.db.ref("fundations")},this.message=function(){return a.db.ref("message")},this.share=function(){return a.db.ref("share")},b.a.initializeApp(h),this.auth=b.a.auth(),this.db=b.a.database()},v=function(){var e=Object(n.useContext)(d),a=Object(o.f)(),t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],u=r[1];Object(n.useEffect)((function(){e.auth.onAuthStateChanged((function(e){u(e||null)}))}));var s=function(){e.doSignOut(),a.push("/wylogowano")},E=function(){return l.a.createElement("nav",{className:"user_nav"},l.a.createElement("ul",null,l.a.createElement("li",null,"Cze\u015b\u0107, ",c.email),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/oddaj-rzeczy"},"Oddaj Rzeczy")),l.a.createElement("li",{onClick:s},"Wyloguj si\u0119")))},p=function(){return l.a.createElement("nav",{className:"user_nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/logowanie"},"Zaloguj")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/rejestracja"},"Za\u0142\xf3\u017c Konto"))))};return l.a.createElement(l.a.Fragment,null,c?l.a.createElement(E,null):l.a.createElement(p,null))},f=t(7),j=t.n(f),w=t(22),z=t.n(w),y=t(23),k=t.n(y),O=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=function(){r(!t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"header"},l.a.createElement("nav",{className:"desktop_menu"},l.a.createElement(v,null),l.a.createElement(s,null),l.a.createElement("img",{alt:"hamburger",className:t?"hamburgerButton hidden":"hamburgerButton",src:k.a,onClick:c})),l.a.createElement("nav",{className:t?"mobile_menu":"mobile_menu hidden"},l.a.createElement(v,null),l.a.createElement(s,null),l.a.createElement("img",{alt:"iks",className:t?"iksButton":"iksButton hidden",src:z.a,onClick:c})),l.a.createElement("div",{className:t?"main_section hidden":"main_section"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"Zacznij Pomaga\u0107!"),l.a.createElement("p",null,"Oddaj niechciane rzeczy w zaufane r\u0119ce"),l.a.createElement("img",{alt:"decoration",src:j.a}),l.a.createElement("div",{className:"buttons_container"},l.a.createElement("button",null,l.a.createElement(m.b,{to:"/logowanie"},"ODDAJ RZECZY")),l.a.createElement("button",null,l.a.createElement(m.b,{to:"/logowanie"},"ZORGANIZUJ ZBI\xd3RK\u0118")))))))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"three_columns"},l.a.createElement("div",{className:"column"},l.a.createElement("p",null,"10"),l.a.createElement("p",null,"ODDANYCH WZOR\xd3W"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")),l.a.createElement("div",{className:"column"},l.a.createElement("p",null,"5"),l.a.createElement("p",null,"WSPARTYCH ORGANIZACJI"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")),l.a.createElement("div",{className:"column"},l.a.createElement("p",null,"7"),l.a.createElement("p",null,"ZORGANIZOWANYCH ZBI\xd3REK"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "))))},S=t(24),C=t.n(S),_=t(43),F=t.n(_),x=t(44),P=t.n(x),W=t(25),Z=t.n(W),I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"simple_steps"},l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"Wystarcz\u0105 4 proste kroki"),l.a.createElement("img",{alt:"decoration",src:j.a})),l.a.createElement("div",{className:"steps"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{alt:"shirt",src:C.a}),l.a.createElement("span",null,"Wybierz rzeczy"),l.a.createElement("hr",null),l.a.createElement("span",null,"ubrania, zabawki"),l.a.createElement("span",null,"sprz\u0119t i inne")),l.a.createElement("li",null,l.a.createElement("img",{alt:"bag",src:F.a}),l.a.createElement("span",null,"Spakuj je"),l.a.createElement("hr",null),l.a.createElement("span",null,"skorzystaj z"),l.a.createElement("span",null,"work\xf3w na \u015bmieci")),l.a.createElement("li",null,l.a.createElement("img",{alt:"magnifing_glass",src:P.a}),l.a.createElement("span",null,"Zdecyduj komu"),l.a.createElement("span",null,"chcesz pom\xf3c"),l.a.createElement("hr",null),l.a.createElement("span",null,"wybierz zaufane"),l.a.createElement("span",null,"miejsce")),l.a.createElement("li",null,l.a.createElement("img",{alt:"recycle",src:Z.a}),l.a.createElement("span",null,"Zam\xf3w kuriera"),l.a.createElement("hr",null),l.a.createElement("span",null,"kurier przyjedze"),l.a.createElement("span",null,"w dogodnym terminie")))),l.a.createElement("div",{className:"buttons_container"},l.a.createElement("button",null,l.a.createElement(m.b,{to:"/logowanie"},"ODDAJ RZECZY")))))},D=t(45),A=t.n(D),U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"about_us"},l.a.createElement("div",{className:"about_section_left"},l.a.createElement("div",{className:"content_wrapper"},l.a.createElement("p",null,"O nas"),l.a.createElement("img",{alt:"decoration",src:j.a}),l.a.createElement("p",null,"Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip."),l.a.createElement("img",{className:"signature",alt:"signature",src:A.a}))),l.a.createElement("div",{className:"about_section_right"})))},q=function(e){var a=e.id,t=e.onChoose,n=e.name;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{id:a,onClick:t},n))},G=function(){var e=Object(n.useContext)(d),a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){e.fundations().on("value",(function(e){c(e.val())}))}),[]);for(var m=Object(n.useState)(1),o=Object(i.a)(m,2),u=o[0],s=o[1],E=Object(n.useState)(1),p=Object(i.a)(E,2),b=p[0],h=p[1],g=function(e){h(e.target.id),s(1)},v=r&&r.find((function(e){return e.id==b})),f=function(e){s(e.target.id)},w=[],z=1;z<=(null===v||void 0===v?void 0:v.items.length)/3;z++)w.push(z);var y=w.map((function(e){return 1===w.length?void 0:l.a.createElement("li",{key:e,id:e,onClick:f},e)})),k=null===v||void 0===v?void 0:v.items.slice(3*(u-1),3*u),O=null===k||void 0===k?void 0:k.map((function(e,a){return l.a.createElement("div",{className:"element_wrapper_row",key:a},l.a.createElement("div",{className:"left"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,e.goal)),l.a.createElement("div",{className:"right"},l.a.createElement("span",null,e.tools)))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"help"},l.a.createElement("div",{className:"content_wrapper"},l.a.createElement("p",null,"Komu pomagamy"),l.a.createElement("img",{alt:"Decoration",src:j.a}),l.a.createElement("nav",{className:"help_nav"},l.a.createElement("ul",null,null===r||void 0===r?void 0:r.map((function(e){return l.a.createElement(q,{key:e.id,id:e.id,onChoose:g,name:e.name})})))),l.a.createElement("div",{className:"help_description"},null===v||void 0===v?void 0:v.desc),l.a.createElement("div",{className:"help_content"},O),l.a.createElement("div",{className:"help_pagination"},l.a.createElement("ul",{id:"page-numbers"},y)))))},R=t(10),K=t(2),B=t(46),J=t.n(B),L=t(47),T=t.n(L),H=function(){var e=Object(n.useContext)(d),a=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(a,2),r=t[0],c=t[1],m=Object(n.useState)([]),o=Object(i.a)(m,2),u=o[0],s=o[1],E=Object(n.useState)(null),p=Object(i.a)(E,2),b=p[0],h=p[1],g=function(e){var a=e.target,t=a.name,n=a.value;c((function(e){return Object(K.a)(Object(K.a)({},e),{},Object(R.a)({},t,n))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"contact_section"},l.a.createElement("div",{className:"contact_content_wrapper"},l.a.createElement("p",null,"Skontaktuj si\u0119 z nami"),l.a.createElement("img",{alt:"decoration",src:j.a}),b&&l.a.createElement("p",{className:"success"},b),l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),h(null);var t={},n=!0;r.name.length<2&&(t.name="Podane imi\u0119 jest nieprawid\u0142owe!",n=!1),(r.email.length<3||!r.email.includes("@"))&&(t.email="Podaj prawid\u0142owy mail!",n=!1),r.message.length<120&&(t.message="Wiadomo\u015b\u0107 musi mie\u0107 conajmniej 120 znak\xf3w!",n=!1),s(t),n&&(e.message().push().set(r),h("Wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana! Wkr\xf3tce si\u0119 z Tob\u0105 skontaktujemy!"),c({name:"",email:"",message:""}))}},l.a.createElement("div",{className:"contact_form_upper_part"},l.a.createElement("div",{className:"name"},l.a.createElement("label",null,"Imi\u0119:"),l.a.createElement("input",{type:"text",value:r.name,name:"name",onChange:g}),u.name&&l.a.createElement("p",{className:"alert"},u.name)),l.a.createElement("div",{className:"email"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"Email",value:r.email,name:"email",onChange:g}),u.email&&l.a.createElement("p",{className:"alert"},u.email))),l.a.createElement("div",{className:"message"},l.a.createElement("label",null,"Tre\u015b\u0107 wiadomo\u015bci:"),l.a.createElement("textarea",{value:r.message,name:"message",placeholder:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",onChange:g}),u.message&&l.a.createElement("p",{className:"alert"},u.message)),l.a.createElement("button",{type:"submit"},"Wy\u015blij")))),l.a.createElement("div",{className:"contact_section_footer"},l.a.createElement("img",{alt:"facebook",src:T.a}),l.a.createElement("img",{alt:"instagram",src:J.a}))))},M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null),l.a.createElement(N,null),l.a.createElement(I,null),l.a.createElement(U,null),l.a.createElement(G,null),l.a.createElement(H,null))},Y=function(){var e=Object(n.useContext)(d),a=Object(o.f)(),t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],u=r[1],s=Object(n.useState)([]),E=Object(i.a)(s,2),p=E[0],b=E[1],h=Object(n.useState)({email:"",password:""}),g=Object(i.a)(h,2),v=g[0],f=g[1],w=function(e){var a=e.target,t=a.name,n=a.value;f((function(e){return Object(K.a)(Object(K.a)({},e),{},Object(R.a)({},t,n))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"login"},l.a.createElement("h2",{className:"login-header"},"Zaloguj si\u0119"),l.a.createElement("img",{alt:"Decoration",src:j.a}),l.a.createElement("form",{className:"login-container",onSubmit:function(t){t.preventDefault();var n={};(v.email.length<3||!v.email.includes("@"))&&(n.email="Podany email jest nieprawid\u0142owy"),v.password.length<6&&(n.password="Podane has\u0142o jest za kr\xf3tkie."),b(n),0===Object.keys(n).length&&e.doSignInWithEmailAndPassword(v.email,v.password).then((function(){f((function(e){return Object(K.a)(Object(K.a)({},e),{},{email:"",password:""})})),a.push("/oddaj-rzeczy")})).catch((function(e){u(e.message)}))}},l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("p",null,l.a.createElement("input",{id:"email",type:"text",value:v.email,name:"email",onChange:w})),p.email&&l.a.createElement("p",null,p.email),l.a.createElement("label",{htmlFor:"password"},"Has\u0142o:"),l.a.createElement("p",null,l.a.createElement("input",{id:"password",type:"password",value:v.password,name:"password",onChange:w})),p.password&&l.a.createElement("p",null,p.password),l.a.createElement("p",null,l.a.createElement("input",{type:"submit",value:"Zaloguj si\u0119"})),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/rejestracja"},"Za\u0142\xf3\u017c konto")),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/"},"G\u0142\xf3wna")),c&&l.a.createElement("p",null,c))))},V=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"logout"},l.a.createElement("div",{className:"logout_wrapper"},l.a.createElement("p",null,"Wylogowanie nast\u0105pi\u0142o pomy\u015blnie"),l.a.createElement("img",{alt:"decoration",src:j.a}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/"},"G\u0142\xf3wna"))))))},$=function(){var e=Object(n.useContext)(d),a=Object(o.f)(),t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],u=r[1],s=Object(n.useState)([]),E=Object(i.a)(s,2),p=E[0],b=E[1],h=Object(n.useState)({email:"",password:"",password_2:""}),g=Object(i.a)(h,2),v=g[0],f=g[1],w=function(e){var a=e.target,t=a.name,n=a.value;f((function(e){return Object(K.a)(Object(K.a)({},e),{},Object(R.a)({},t,n))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"login"},l.a.createElement("h2",{className:"login-header"},"Za\u0142\xf3\u017c konto"),l.a.createElement("img",{alt:"Decoration",src:j.a}),l.a.createElement("form",{className:"login-container",onSubmit:function(t){t.preventDefault();var n={};(v.email.length<3||!v.email.includes("@"))&&(n.email="Podany email jest nieprawid\u0142owy"),v.password.length<6&&(n.password="Podane has\u0142o jest za kr\xf3tkie."),v.password_2!==v.password&&(n.password_2="Has\u0142a nie s\u0105 takie same."),b(n),0===Object.keys(n).length&&e.doCreateUserWithEmailAndPassword(v.email,v.password).then((function(){f((function(e){return Object(K.a)(Object(K.a)({},e),{},{email:"",password:"",password_2:""})})),a.push("/")})).catch((function(e){u(e.message)}))}},l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("p",null,l.a.createElement("input",{id:"email",type:"text",value:v.email,name:"email",onChange:w})),p.email&&l.a.createElement("p",null,p.email),l.a.createElement("label",{htmlFor:"password"},"Has\u0142o:"),l.a.createElement("p",null,l.a.createElement("input",{id:"password",type:"password",value:v.password,name:"password",onChange:w})),p.password&&l.a.createElement("p",null,p.password),l.a.createElement("label",{htmlFor:"password_2"},"Powt\xf3rz has\u0142o:"),l.a.createElement("p",null,l.a.createElement("input",{id:"password_2",type:"password",value:v.password_2,name:"password_2",onChange:w})),p.password_2&&l.a.createElement("p",null,p.password_2),l.a.createElement("p",null,l.a.createElement("input",{type:"submit",value:"Za\u0142\xf3\u017c konto"})),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/logowanie"},"Zaloguj")),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/"},"G\u0142\xf3wna")),c&&l.a.createElement("p",null,c))))},Q=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=function(){r(!t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"give_header"},l.a.createElement("nav",{className:"desktop_menu"},l.a.createElement(v,null),l.a.createElement(s,null),l.a.createElement("img",{alt:"hamburger",className:t?"hamburgerButton hidden":"hamburgerButton",src:k.a,onClick:c})),l.a.createElement("nav",{className:t?"mobile_menu":"mobile_menu hidden"},l.a.createElement(v,null),l.a.createElement(s,null),l.a.createElement("img",{alt:"iks",className:t?"iksButton":"iksButton hidden",src:z.a,onClick:c})),l.a.createElement("div",{className:t?"main_section hidden":"main_section"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"Oddaj rzeczy, kt\xf3rych ju\u017c nie chcesz"),l.a.createElement("p",null,"POTRZEBUJ\u0104CYM"),l.a.createElement("img",{alt:"decoration",src:j.a}),l.a.createElement("p",null,"Wystarcz\u0105 4 proste kroki:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"1"),l.a.createElement("p",null,"Wybierz rzeczy")),l.a.createElement("li",null,l.a.createElement("span",null,"2"),l.a.createElement("p",null,"Spakuj je w worki")),l.a.createElement("li",null,l.a.createElement("span",null,"3"),l.a.createElement("p",null,"Wybierz fundacj\u0119")),l.a.createElement("li",null,l.a.createElement("span",null,"4"),l.a.createElement("p",null,"Zam\xf3w kuriera")))))))},X=function(e){var a=e.currentStep,t=e.handleChange;return 1!==a?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Zaznacz co chcesz odda\u0107:"),l.a.createElement("div",{className:"radio-group"},l.a.createElement("input",{id:"option_1",name:"toGive",type:"radio",value:"ubrania, kt\xf3re nadaj\u0105 si\u0119 do ponownego u\u017cycia",onChange:t}),l.a.createElement("label",{htmlFor:"option_1"},"ubrania, kt\xf3re nadaj\u0105 si\u0119 do ponownego u\u017cycia")),l.a.createElement("div",{className:"radio-group"},l.a.createElement("input",{id:"option_2",name:"toGive",type:"radio",value:"ubrania, do wyrzucenia",onChange:t}),l.a.createElement("label",{htmlFor:"option_2"},"ubrania, do wyrzucenia")),l.a.createElement("div",{className:"radio-group"},l.a.createElement("input",{id:"option_3",name:"toGive",type:"radio",value:"zabawki",onChange:t}),l.a.createElement("label",{htmlFor:"option_3"},"zabawki")),l.a.createElement("div",{className:"radio-group"},l.a.createElement("input",{id:"option_4",name:"toGive",type:"radio",value:"ksi\u0105\u017cki",onChange:t}),l.a.createElement("label",{htmlFor:"option_4"},"ksi\u0105\u017cki")),l.a.createElement("div",{className:"radio-group"},l.a.createElement("input",{id:"option_5",name:"toGive",type:"radio",value:"Inne",onChange:t}),l.a.createElement("label",{htmlFor:"Inne"},"Inne")))},ee=function(e){var a=e.currentStep,t=e.form,n=e.handleChange;return 2!==a?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Podaj liczb\u0119 60l work\xf3w, w kt\xf3re spakowa\u0142e\u015b/a\u015b rzeczy:"),l.a.createElement("div",{className:"select-wrapper"},l.a.createElement("label",null,"Liczba 60l work\xf3w:"),l.a.createElement("select",{name:"bagsNumber",defaultValue:t.bagsNumber,onChange:n},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"))))},ae=function(e){var a=e.currentStep,t=e.form,n=e.handleChange,r=e.checkbox;return 3!==a?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Lokalizacja:"),l.a.createElement("select",{name:"localization",defaultValue:t.localization,onChange:n},l.a.createElement("option",{value:"Pozna\u0144"},"Pozna\u0144"),l.a.createElement("option",{value:"Warszawa"},"Warszawa"),l.a.createElement("option",{value:"Krak\xf3w"},"Krak\xf3w"),l.a.createElement("option",{value:"Wroc\u0142aw"},"Wroc\u0142aw"),l.a.createElement("option",{value:"Katowice"},"Katowice")),l.a.createElement("h3",null,"Komu chcesz pom\xf3c:"),l.a.createElement("p",null,l.a.createElement("input",{id:"dzieciom",type:"checkbox",name:"help",value:"dzieciom",onChange:r}),l.a.createElement("label",{htmlFor:"dzieciom"},"dzieciom")),l.a.createElement("p",null,l.a.createElement("input",{id:"samotnym matkom",type:"checkbox",name:"help",value:"samotnym matkom",onChange:r}),l.a.createElement("label",{htmlFor:"samotnym matkom"},"samotnym matkom")),l.a.createElement("p",null,l.a.createElement("input",{id:"bezdomnym",type:"checkbox",name:"help",value:"bezdomnym",onChange:r}),l.a.createElement("label",{htmlFor:"bezdomnym"},"bezdomnym")),l.a.createElement("p",null,l.a.createElement("input",{id:"niepe\u0142nosprawnym",type:"checkbox",name:"help",value:"niepe\u0142nosprawnym",onChange:r}),l.a.createElement("label",{htmlFor:"niepe\u0142nosprawnym"},"niepe\u0142nosprawnym")),l.a.createElement("p",null,l.a.createElement("input",{id:"osobom starszym",type:"checkbox",name:"help",value:"osobom starszym",onChange:r}),l.a.createElement("label",{htmlFor:"osobom starszym"},"osobom starszym")),l.a.createElement("label",{htmlFor:"message"},"Wpisz nazw\u0119 konkretnej organizacji (opcjonalnie)"),l.a.createElement("input",{id:"message",type:"text",name:"organizationSpecific",value:t.organizationSpecific,onChange:n}))},te=function(e){var a=e.currentStep,t=e.form,n=e.error,r=e.handleChange;return 4!==a?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Podaj adres oraz termin odbioru rzeczy przez kuriera:"),l.a.createElement("div",{className:"form_container"},l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"title"},"Adres odbioru:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"ulica"},"Ulica:")),l.a.createElement("td",null,l.a.createElement("input",{id:"ulica",type:"text",name:"street",value:t.street,onChange:r}),l.a.createElement("p",{className:"error"},n.street))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"miasto"},"Miasto:")),l.a.createElement("td",null,l.a.createElement("input",{id:"miasto",type:"text",name:"city",value:t.city,onChange:r}),l.a.createElement("p",{className:"error"},n.city))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"kod"},"Kod pocztowy:")),l.a.createElement("td",null,l.a.createElement("input",{id:"kod",type:"text",name:"postCode",value:t.postCode,onChange:r}),l.a.createElement("p",{className:"error"},n.postCode))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"numer"},"Numer telefonu:")),l.a.createElement("td",null,l.a.createElement("input",{id:"numer",type:"text",name:"phoneNumber",value:t.phoneNumber,onChange:r}),l.a.createElement("p",{className:"error"},n.phone)))))),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"title"},"Termin odbioru:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"data"},"Data:")),l.a.createElement("td",null,l.a.createElement("input",{id:"data",type:"date",name:"date",value:t.date,onChange:r}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"godzina"},"Godzina:")),l.a.createElement("td",null,l.a.createElement("input",{id:"godzina",type:"time",name:"time",value:t.time,onChange:r}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"note"},"Uwagi dla kuriera:")),l.a.createElement("td",null,l.a.createElement("input",{id:"note",type:"note",name:"note",value:t.note,onChange:r}))))))))},ne=function(e){var a=e.currentStep,t=e.form;return 5!==a?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"summary"},l.a.createElement("strong",null,"Podsumowanie twojej darowizny"),l.a.createElement("h3",null,"Oddajesz:"),l.a.createElement("div",{className:"upper-part-1"},l.a.createElement("div",null,l.a.createElement("img",{className:"icon",alt:"icon-1",src:C.a})),l.a.createElement("div",null,t.bagsNumber," worki, ",t.toGive,", ",t.help,".")),l.a.createElement("div",{className:"upper-part-2"},l.a.createElement("div",null,l.a.createElement("img",{className:"icon",alt:"icon-2",src:Z.a})),l.a.createElement("div",null,"dla lokalizacji: ",t.localization,".")),l.a.createElement("div",{className:"form_container"},l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"title"},"Adres odbioru:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",null,"Ulica:")),l.a.createElement("td",null,l.a.createElement("label",null,t.street))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",null,"Miasto:")),l.a.createElement("td",null,l.a.createElement("label",null,t.city))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",null,"Kod pocztowy:")),l.a.createElement("td",null,l.a.createElement("label",null,t.postCode))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",null,"Numer telefonu:")),l.a.createElement("td",null,l.a.createElement("label",null,t.phoneNumber)))))),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"title"},"Termin odbioru:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",null,"Data:")),l.a.createElement("td",null,l.a.createElement("label",null,t.date))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",null,"Godzina:")),l.a.createElement("td",null,l.a.createElement("label",null,t.time))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",null,"Uwagi dla kuriera:")),l.a.createElement("td",null,l.a.createElement("label",null,t.note)))))))))},le=function(e){return 6!==e.currentStep?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"thanks"},l.a.createElement("h2",null,"Dzi\u0119kujemy za przes\u0142anie formularza. Na maila prze\u015blemy wszelkie informacje o odbiorze."),l.a.createElement("img",{alt:"decoration",src:j.a})))},re=function(){var e=Object(n.useContext)(d),a=Object(n.useState)({}),t=Object(i.a)(a,2),r=t[0],c=t[1],m=Object(n.useState)({currentStep:1,options:{toGive:"",bagsNumber:"1",localization:"",help:"",organizationSpecific:"",street:"",city:"",postCode:"",phoneNumber:"",date:"",time:"",note:""}}),o=Object(i.a)(m,2),u=o[0],s=o[1],E=function(e){var a=e.target,t=a.name,n=a.value;s((function(e){return Object(K.a)(Object(K.a)({},e),{},{options:Object(K.a)(Object(K.a)({},e.options),{},Object(R.a)({},t,n))})}))};console.log(u.options);var p=function(){u.currentStep>=4?s((function(e){return Object(K.a)(Object(K.a)({},e),{},{currentStep:5})})):s((function(e){return Object(K.a)(Object(K.a)({},e),{},{currentStep:u.currentStep+1})}))},b=function(){(function(){var e={};e.street=(null===u||void 0===u?void 0:u.options.street.length)<2?"Podana ulica jest nieprawid\u0142owa!":"",e.city=(null===u||void 0===u?void 0:u.options.city.length)<2?"Podane miasto jest nieprawid\u0142owe!":"",e.postCode=/^[0-9]{2}-[0-9]{3}$/.test(null===u||void 0===u?void 0:u.options.postCode)?"":"Podany kod pocztowy jest nieprawid\u0142owy!",e.phone=/^[0-9]{9}$/.test(null===u||void 0===u?void 0:u.options.phoneNumber)?"":"Podany numer jest nieprawid\u0142owy!";var a=Object.values(e).findIndex((function(e){return null===e||void 0===e?void 0:e.length}))>-1;return c(e),a})()||p()},h=function(){u.currentStep<=1?s((function(e){return Object(K.a)(Object(K.a)({},e),{},{currentStep:1})})):s((function(e){return Object(K.a)(Object(K.a)({},e),{},{currentStep:u.currentStep-1})}))},g=function(a){a.preventDefault(),e.share().push().set(u.options),s((function(e){return Object(K.a)(Object(K.a)({},e),{},{currentStep:6})}))},v=function(){return 1!==u.currentStep&&6!==u.currentStep?l.a.createElement("button",{type:"button",onClick:h},"Wstecz"):null},f=function(){return u.currentStep<4?l.a.createElement("button",{type:"button",onClick:p},"Dalej"):4===u.currentStep?l.a.createElement("button",{type:"button",onClick:b},"Dalej"):5===u.currentStep?l.a.createElement("button",{type:"button",onClick:g},"Potwierdzam"):null};return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"master_form"},1===u.currentStep&&l.a.createElement("div",{className:"yellow_header"},l.a.createElement("h4",null,"Wa\u017cne!"),l.a.createElement("p",null,"Uzupe\u0142nij szczeg\xf3\u0142y dotycz\u0105ce Twoich rzeczy. Dzi\u0119ki temu b\u0119dziemy wiedzie\u0107 komu najlepiej je przekaza\u0107.")),2===u.currentStep&&l.a.createElement("div",{className:"yellow_header"},l.a.createElement("h4",null,"Wa\u017cne!"),l.a.createElement("p",null,"Wszystkie rzeczy do oddania zapakuj w 60l worki. Dok\u0142adn\u0105 instrukcj\u0119 jak poprawnie spakowa\u0107 rzeczy znajdziesz TUTAJ.")),3===u.currentStep&&l.a.createElement("div",{className:"yellow_header"},l.a.createElement("h4",null,"Wa\u017cne!"),l.a.createElement("p",null,"Je\u015bli wiesz komu chcesz pom\xf3c, mo\u017c\u0119sz wpisa\u0107 nazw\u0119 tej organizacji w wyszukiwarce. Mo\u017cesz te\u017c filtrowa\u0107 organizacje po ich lokalizacji b\u0105d\u017a w celu ich pomocy.")),4===u.currentStep&&l.a.createElement("div",{className:"yellow_header"},l.a.createElement("h4",null,"Wa\u017cne!"),l.a.createElement("p",null,"Podaj adres oraz termin odbioru rzeczy przez kuriera.")),l.a.createElement("div",{className:"column"},u.currentStep<=4?l.a.createElement("h1",null,"Krok ".concat(u.currentStep,"/ 4")):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.a.createElement(X,{currentStep:u.currentStep,handleChange:E}),l.a.createElement(ee,{currentStep:u.currentStep,form:u.options,handleChange:E}),l.a.createElement(ae,{currentStep:u.currentStep,form:u.options,handleChange:E,checkbox:function(e){var a=e.target,t=a.name,n=a.value;-1===u.options.help.indexOf(n)?s((function(e){return Object(K.a)(Object(K.a)({},e),{},{options:Object(K.a)(Object(K.a)({},e.options),{},Object(R.a)({},t,e.options.help.concat(" ",n," ").trimStart()))})})):s((function(e){return Object(K.a)(Object(K.a)({},e),{},{options:Object(K.a)(Object(K.a)({},e.options),{},Object(R.a)({},t,e.options.help.replace(n,"").trim()))})}))}}),l.a.createElement(te,{currentStep:u.currentStep,form:u.options,error:r,handleChange:E})),l.a.createElement(ne,{currentStep:u.currentStep,form:u.options}),l.a.createElement(le,{currentStep:u.currentStep}),l.a.createElement("div",{className:"master_form_buttons"},l.a.createElement(v,null),l.a.createElement(f,null)))))},ce=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Q,null),l.a.createElement(re,null),l.a.createElement(H,null))},me=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Nic tu nie ma!"))};var oe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:M}),l.a.createElement(o.a,{path:"/logowanie",component:Y}),l.a.createElement(o.a,{path:"/rejestracja",component:$}),l.a.createElement(o.a,{path:"/wylogowano",component:V}),l.a.createElement(o.a,{path:"/oddaj-rzeczy",component:ce}),l.a.createElement(o.a,{component:me}))))};t(69);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.Provider,{value:new g},l.a.createElement(oe,null))),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6c484de1.chunk.js.map