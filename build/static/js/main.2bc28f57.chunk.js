(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),u=n.n(o),s=(n(22),n(2)),c=n(6),i=n(3),l=n.n(i),m=n(5),f=n(4),h=n.n(f),d="/api/persons",p={getAll:function(){var e=Object(m.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.get(d),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(e){return h.a.post(d,e).then((function(e){return e.data}))},update:function(){var e=Object(m.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h.a.put("".concat(d,"/").concat(t),n),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.a.delete("".concat(d,"/").concat(t)),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){var t=e.persons,n=e.setPersons,a=e.newName,o=e.setNewName,u=e.newNumber,s=e.setNewNumber,i=e.handleNameChange,l=e.handleNumberChange,m=e.setMessage,f=e.setErrorMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:a,onChange:i})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{value:u,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault();var r=t.filter((function(e){return e.name==="".concat(a)}));if(1!==r.length){var i={name:a,number:u};p.create(i).then((function(e){n(t.concat(e)),o(""),s(""),m("Uusi yhteystieto lis\xe4tty!"),setTimeout((function(){m(null)}),3e3)})).catch((function(e){var t=e.response.data;console.log(t),f(JSON.stringify(t)),setTimeout((function(){f(null)}),3e3)}))}else if(window.confirm("".concat(a," on jo lis\xe4tty puhelinluetteloon. Haluatko korvata vanhan numeron uudella?"))){var l=r[0],h=Object(c.a)(Object(c.a)({},l),{},{number:u});p.update(l.id,h).then((function(e){n(t.map((function(t){return t.id!==l.id?t:e}))),o(""),s(""),m("Puhelinnumero p\xe4ivitetty!"),setTimeout((function(){m(null)}),3e3)})).catch((function(e){f("Yhteystieto on jo poistettu."),setTimeout((function(){f(null)}),3e3)}))}}},"Lis\xe4\xe4"))))},b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,e.numbersToShow.map((function(t){return r.a.createElement("p",{key:t.name},t.name," "," ",t.number,r.a.createElement("button",{type:"submit",onClick:function(){window.confirm("Haluatko varmasti poistaa yhteystiedon ".concat(t.name,"?"))&&p.deletePerson(t.id).then((function(){e.setPersons(e.persons.filter((function(e){return e.id!==t.id}))),e.setMessage("Yhteystieto poistettu!"),setTimeout((function(){e.setMessage(null)}),3e3)})).catch((function(n){e.setErrorMessage("Yhteystieto on jo poistettu."),setTimeout((function(){e.setErrorMessage(null)}),3e3),e.setPersons(e.persons.filter((function(e){return e.id!==t.id})))}))}},"Poista yhteystieto"))}))))},v=function(e){var t=e.result,n=e.handleResultChange;return r.a.createElement("div",null,"Kirjoita nimi tai sen osa: ",r.a.createElement("input",{value:t,onChange:n}))},E=function(e){var t=e.message,n=e.errorMessage;return null===t&&null===n?null:null!==n?r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n):r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},t)},y=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),c=Object(s.a)(u,2),i=c[0],l=c[1],m=Object(a.useState)(""),f=Object(s.a)(m,2),h=f[0],d=f[1],y=Object(a.useState)(""),w=Object(s.a)(y,2),j=w[0],O=w[1],N=Object(a.useState)(!0),S=Object(s.a)(N,2),k=S[0],C=S[1],M=Object(a.useState)(null),P=Object(s.a)(M,2),T=P[0],x=P[1],B=Object(a.useState)(null),L=Object(s.a)(B,2),R=L[0],Y=L[1];Object(a.useEffect)((function(){p.getAll().then((function(e){o(e)}))}),[]);var J=k?n:n.filter((function(e){return e.name.toString().toLowerCase().match("".concat(j.toString().toLowerCase()))}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Puhelinluettelo"),r.a.createElement(E,{message:T,errorMessage:R}),r.a.createElement("h2",null,"Etsi yhteystieto"),r.a.createElement(v,{result:j,handleResultChange:function(e){C(!1),O(e.target.value)}}),r.a.createElement("h3",null,"Yhteystiedot"),r.a.createElement(b,{numbersToShow:J,persons:n,setPersons:o,setMessage:x,setErrorMessage:Y}),r.a.createElement("h3",null,"Lis\xe4\xe4 uusi yhteystieto"),r.a.createElement(g,{persons:n,setPersons:o,newName:i,setNewName:l,newNumber:h,setNewNumber:d,handleNameChange:function(e){l(e.target.value)},handleNumberChange:function(e){d(e.target.value)},setMessage:x,setErrorMessage:Y}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2bc28f57.chunk.js.map