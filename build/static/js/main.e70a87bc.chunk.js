(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{50:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=a(14),u=a(86),i=a(87),m=a(83),s=a(16),E=function(e){var t=e.isLogged,a=e.setIsLogged;return r.a.createElement(u.a,{bg:"dark",variant:"dark"},r.a.createElement(u.a.Brand,null,"Navbar"),r.a.createElement(i.a,{className:"mr-auto"},r.a.createElement(s.b,{to:"/questions"},r.a.createElement(i.a.Link,{as:"div"},"Questions"))),t?r.a.createElement(m.a,{onClick:function(){localStorage.removeItem("token"),a(!1)},variant:"outline-info"},"Salir"):r.a.createElement(s.b,{to:"/login"},r.a.createElement(m.a,{variant:"outline-info"},"Login")))},p=a(88),d=function(e){var t;return r.a.createElement(r.a.Fragment,null,null===(t=e.questions)||void 0===t?void 0:t.map((function(e){return r.a.createElement(p.a,{key:e.id},r.a.createElement(p.a.Header,null),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,e.title),r.a.createElement(p.a.Text,null,e.description),r.a.createElement(m.a,{variant:"primary"},"Ver pregunta")))})))},g=a(84),b=a(30),f=a.n(b),h=a(48),v=a(49),j=a.n(v).a.create({baseURL:"http://localhost:5678/api",timeout:1e3,headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),k=a(85),O=a(5),S=function(e){var t=Object(O.g)(),a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],u=l[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),E=s[0],p=s[1],d=function(){var a=Object(h.a)(f.a.mark((function a(n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),j.post("/auth/login",{email:E,password:c}).then((function(a){localStorage.setItem("token",a.data.token),t.push("/questions"),e.setIsLogged(!0)})).catch((function(e){alert(e.response.data.error)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{onSubmit:d},r.a.createElement(k.a.Group,{controlId:"formBasicEmail"},r.a.createElement(k.a.Label,null,"Email address"),r.a.createElement(k.a.Control,{onChange:function(e){p(e.target.value)},type:"email",required:!0,placeholder:"Enter email"})),r.a.createElement(k.a.Group,{controlId:"formBasicPassword"},r.a.createElement(k.a.Label,null,"Password"),r.a.createElement(k.a.Control,{onChange:function(e){u(e.target.value)},type:"password",required:!0,placeholder:"Password"})),r.a.createElement(m.a,{variant:"primary",type:"submit"},"Submit")))},I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Signup"))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Question"))},q=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),u=Object(o.a)(c,2),i=u[0],m=u[1];return Object(n.useEffect)((function(){j.get("/question").then((function(e){l(e.data),m(!1)}))}),[]),r.a.createElement(r.a.Fragment,null,i?r.a.createElement("p",null,"Cargando..."):r.a.createElement(d,{questions:a}))},w=(a(79),function(){var e=Object(n.useState)(localStorage.getItem("token")),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(s.a,null,r.a.createElement(E,{isLogged:a,setIsLogged:l}),r.a.createElement(g.a,null,r.a.createElement(O.d,null,r.a.createElement(O.b,{path:"/questions"},r.a.createElement(q,null)),r.a.createElement(O.b,{exact:!0,path:"/question"},r.a.createElement(L,null)),r.a.createElement(O.b,{exact:!0,path:"/login"},r.a.createElement(S,{setIsLogged:l})),r.a.createElement(O.b,{exact:!0,path:"/signup"},r.a.createElement(I,null)),r.a.createElement(O.a,{to:"/questions"}))))});c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.e70a87bc.chunk.js.map