(this.webpackJsonpmytest=this.webpackJsonpmytest||[]).push([[0],{11:function(e,a,i){},12:function(e,a,i){"use strict";i.r(a);i(1);var t=i(3),s=i.n(t),n=i(4),c=(i(9),i(0));var r=function(e){return Object(c.jsxs)("div",{className:"tc bg-light-yellow dib ma2 br3 pa2 grow ",children:[Object(c.jsx)("img",{alt:"avtar",src:"https://robohash.org/"+e.id}),Object(c.jsxs)("div",{className:"texts",children:[Object(c.jsx)("p",{className:"f3",children:e.name}),Object(c.jsx)("p",{className:"f4",children:e.email})]})]})};var l=function(e){var a,i=[],t=Object(n.a)(e.robolist);try{for(t.s();!(a=t.n()).done;){var s=a.value;i.push(Object(c.jsx)(r,{name:s.name,id:s.id,email:s.email},s.id))}}catch(l){t.e(l)}finally{t.f()}return Object(c.jsx)("div",{children:i})},h=[{id:"0000",name:"Satyansh Shukla",email:"20cs01021@iitbbs.ac.in"},{id:"0001",name:"Aditya  Balakrishnan",email:"20cs01019@iitbbs.ac.in"},{id:"0002",name:"Rishvic Pushpakaran",email:"20cs01018@iitbbs.ac.in"},{id:"0003",name:"Mithun Chandrashekhar",email:"20cs01017@iitbbs.ac.in"},{id:"0004",name:"Prateek Kumar Singh",email:"20cs01003@iitbbs.ac.in"}];var d=function(e){return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{onChange:e.anyinput,type:"search",placeholder:"Find friends",className:"pa3 bs b--green"})})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,13)).then((function(a){var i=a.getCLS,t=a.getFID,s=a.getFCP,n=a.getLCP,c=a.getTTFB;i(e),t(e),s(e),n(e),c(e)}))},m=(i(11),{list2:h,searchfeild:""});function o(e){m.searchfeild=e.target.value,m.list2=h.filter((function(e){return e.name.toLowerCase().includes(m.searchfeild)})),u()}function u(){s.a.render(Object(c.jsxs)("div",{className:"customcss",children:[Object(c.jsx)("h1",{className:"thehead",children:"ROBOFRIENDS"}),Object(c.jsx)("hr",{}),Object(c.jsx)(d,{className:"pa3",anyinput:o}),Object(c.jsx)(l,{robolist:m.list2})]}),document.getElementById("root"))}u(),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.89794fca.chunk.js.map