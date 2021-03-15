(this["webpackJsonpportfolio-upgrade"]=this["webpackJsonpportfolio-upgrade"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(8),r=c.n(i),n=(c(13),c(5)),l=(c(14),c.p+"static/media/Photo.ffcbda1d.png"),o=c(0);var j=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("div",{className:"center",id:"about",children:Object(o.jsx)("h1",{className:"page-header",children:"About Me"})}),Object(o.jsx)("div",{className:"center",children:Object(o.jsx)("img",{src:l,alt:"Ryan Peters",className:"photo"})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"The past eighteen years I have been a successful chef in the Austin area. I am a single father of two little girls who was left out in the cold following the pandemic. I quickly realized how little value I held in an industry that demanded more than it gave. The time unemployed inspired me to make a change to do the best for my family. I wish to find a new career in the web development industy and I am starting to take those steps necessary. I have enrolled in a coding bootcamp through the University of Texas and will attain the skills necessary to begin a career in web development."})})]})},d=c(4),h=c(6);var b=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(n.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(""),r=Object(n.a)(i,2),l=r[0],j=r[1],b=c.name,u=c.email,m=c.message;function p(e){"Name"!==e.target.name&&"Message"!==e.target.name||(e.target.value.length?j(""):j("".concat(e.target.name," is required."))),l||a(Object(h.a)(Object(h.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(o.jsxs)("section",{children:[Object(o.jsx)("div",{className:"center",children:Object(o.jsx)("h2",{className:"page-header",children:"Contact Me"})}),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{id:"contact-form",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"Name",children:"Name:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",defaultValue:b,onBlur:p,name:"Name"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"email",defaultValue:u,name:"email",onBlur:function(e){"email"===e.target.name&&(function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value)?e.target.value.length?j(""):j("".concat(e.target.name," is required.")):j("Your email is invalid.")),l||a(Object(h.a)(Object(h.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"Message",children:"Message:"}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{name:"Message",defaultValue:m,onBlur:p,rows:"5"})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})})]})},u=c(2);var m=function(e){var t=Object(s.useState)(e)[0].projects,c=t.name,a=t.description,i=t.image,r=t.technologies,n=t.deployed,l=t.github;return Object(o.jsxs)(u.a,{style:{width:"18rem"},children:[Object(o.jsx)(u.a.Img,{variant:"top",src:i,className:"card-image"}),Object(o.jsx)("div",{className:"center",children:Object(o.jsxs)(u.a.Body,{children:[Object(o.jsx)(u.a.Title,{className:"card-title",children:c}),Object(o.jsx)(u.a.Text,{className:"card-text",children:a}),Object(o.jsx)(u.a.Subtitle,{className:"card-subtitle",children:"Techs Used"}),Object(o.jsx)(u.a.Text,{className:"card-techs",children:function(e){for(var t="",c=0;c<e.length;c++)c===e.length-1?t+=e[c]:t+=e[c]+", ";return t}(r)}),Object(o.jsxs)(u.a.Link,{href:n,target:"_blank",className:"card-link",children:[c," App"]}),Object(o.jsx)("br",{}),Object(o.jsxs)(u.a.Link,{href:l,target:"_blank",className:"card-link",children:[c," Github"]})]})})]})};var p=function(){var e=[{name:"D.O.G.S",description:"A social media application to help find your dog a friend.",image:"https://user-images.githubusercontent.com/71112436/106391741-887ba600-63b4-11eb-8a75-c049b8b4f7ea.png",technologies:["HTML/CSS","JavaScript","Node.js","express","handlebars.js"],github:"https://github.com/JenniferFadare/D.O.G.S..git",deployed:"https://murmuring-taiga-40351.herokuapp.com/"},{name:"Meal Queue",description:"Meal Queue is an aide to help individuals come up with dinner ideas. Type in a food item and a list of different recipes is presented with an option to view a video tutorial.",image:"https://github.com/axeliono/group-project-1/raw/main/assets/images/mealQ.jpg",technologies:["HTML/SCSS","JavaScript"],github:"https://github.com/axeliono/Meal-Queue.git",deployed:"https://axeliono.github.io/Meal-Queue/"},{name:"Work Day Scheduler",description:"A clean and accurate way to search for your favorite songs while also displaying the lyrics.",image:"https://i.imgur.com/i7nYPwk.png",technologies:["HTML/CSS","JavaScript","jQuery"],github:"https://peters0470.github.io/Work-Day-Scheduler/",deployed:"https://peters0470.github.io/Work-Day-Scheduler/"},{name:"Budget Tracker",description:"Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.",image:"https://user-images.githubusercontent.com/71112436/110219644-223be480-7e86-11eb-80e0-8c11cc2e276e.png",technologies:["JavaScript","MongoDB","Node.js","Express"],github:"https://github.com/peters0470/budget-tracker.git",deployed:"https://shielded-sands-92466.herokuapp.com/"},{name:"Weather Dashboard",description:"A weather dashboard that shows current weather and five-day weather forecast for any city.",image:"https://user-images.githubusercontent.com/71112436/97815919-2e553280-1c57-11eb-870e-ae6700064dff.png",technologies:["HTML/CSS","JavaScript"],github:"https://github.com/peters0470/Weather-Dashboard.git",deployed:"https://peters0470.github.io/Weather-Dashboard/"},{name:"Password Generator",description:"This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.",image:"https://user-images.githubusercontent.com/71112436/95663685-ee42da00-0b06-11eb-9f5e-acfc7b793c4c.png",technologies:["HTML/CSS","JavaScript"],github:"https://github.com/peters0470/password-challenge.git",deployed:"https://peters0470.github.io/password-challenge/"},{name:"Note Taker",description:"This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.",image:"https://user-images.githubusercontent.com/71112436/102000509-d2e27f80-3cad-11eb-9ac6-8ec2084c407c.png",technologies:["HTML/CSS","JavaScript","Express.js"],github:"https://github.com/peters0470/note-taker.git",deployed:"https://github.com/peters0470/note-taker.git"}];return Object(o.jsxs)("section",{children:[Object(o.jsx)("div",{className:"center",children:Object(o.jsx)("h1",{className:"page-header",children:"My Portfolio"})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("ul",{className:"flex-row mobile-row",children:[Object(o.jsx)("li",{className:"padding",children:Object(o.jsx)(m,{projects:e[0]})}),Object(o.jsx)("li",{className:"padding",children:Object(o.jsx)(m,{projects:e[1]})})]}),Object(o.jsxs)("ul",{className:"flex-row mobile-row",children:[Object(o.jsx)("li",{className:"padding",children:Object(o.jsx)(m,{projects:e[2]})}),Object(o.jsx)("li",{className:"padding",children:Object(o.jsx)(m,{projects:e[3]})})]}),Object(o.jsxs)("ul",{className:"flex-row mobile-row",children:[Object(o.jsx)("li",{className:"padding",children:Object(o.jsx)(m,{projects:e[4]})}),Object(o.jsx)("li",{className:"padding",children:Object(o.jsx)(m,{projects:e[5]})})]})]})]})},g=c.p+"static/media/resume.3000a3af.png";var x=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("div",{className:"center",children:Object(o.jsx)("h1",{className:"page-header",children:"My Resume"})}),Object(o.jsx)("div",{className:"bottom-spacing",children:Object(o.jsx)("a",{href:g,download:!0,children:Object(o.jsx)("h4",{children:"Download my Resume"})})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Front-End Proficiencies"}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{children:"HTML5"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"jQuery"}),Object(o.jsx)("li",{children:"Bootstrap"}),Object(o.jsx)("li",{children:"React"}),Object(o.jsx)("li",{children:"Responsive Web Design "})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h5",{children:"Back-End Proficiencies"}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{children:"APIs"}),Object(o.jsx)("li",{children:"NodeJS"}),Object(o.jsx)("li",{children:"Express"}),Object(o.jsx)("li",{children:"Model View Controller (MVC)"}),Object(o.jsx)("li",{children:"Object Oriented Programming(OOP)"}),Object(o.jsx)("li",{children:"Progressive Web Applications (PWA)"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h5",{children:"Dev Tool Proficiencies"}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{children:"Git"}),Object(o.jsx)("li",{children:"npm"}),Object(o.jsx)("li",{children:"MySQL Workbench "}),Object(o.jsx)("li",{children:"Webpack"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h5",{children:"Database Proficiencies"}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{children:"MySQL"}),Object(o.jsx)("li",{children:"Sequelize"}),Object(o.jsx)("li",{children:"NoSQL"}),Object(o.jsx)("li",{children:"MongoDB"}),Object(o.jsx)("li",{children:"Mongoose"})]})]})]})};var O=function(e){var t=e.currentTab,c=e.setCurrentTab;return Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"flex-row mobile-view",children:[Object(o.jsx)("li",{className:"about"===t?"mx-2 navActive":"mx-2",children:Object(o.jsx)("span",{onClick:function(){return c("about")},children:"About Me"})}),Object(o.jsx)("li",{className:"portfolio"===t?"mx-2 navActive":"mx-2",children:Object(o.jsx)("span",{onClick:function(){return c("portfolio")},children:"Portfolio"})}),Object(o.jsx)("li",{className:"contact"===t?"mx-2 navActive":"mx-2",children:Object(o.jsx)("span",{onClick:function(){return c("contact")},children:"Contact"})}),Object(o.jsx)("li",{className:"resume"===t?"mx-2 navActive":"mx-2",children:Object(o.jsx)("span",{onClick:function(){return c("resume")},children:"Resume"})})]})})};var f=function(e){var t=e.currentTab,c=e.setCurrentTab;return Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Ryan Peters Portfolio"})}),Object(o.jsx)("div",{children:Object(o.jsx)(O,{currentTab:t,setCurrentTab:c})})]})};var v=function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"https://github.com/peters0470",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("img",{src:"https://user-images.githubusercontent.com/71112436/111097901-71ca8200-8510-11eb-88bf-1b241dd51024.png",alt:"Github",className:"logo"})})}),Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/ryan-peters-482747112/",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("img",{src:"https://user-images.githubusercontent.com/71112436/111097980-94f53180-8510-11eb-834e-01909eb25723.png",alt:"LinkedIn",className:"logo"})})})]})};var y=function(){var e=Object(s.useState)("about"),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"mobile-header",children:Object(o.jsx)(f,{currentTab:c,setCurrentTab:a})}),Object(o.jsx)("div",{children:Object(o.jsx)("main",{children:function(){switch(c){case"about":return Object(o.jsx)(j,{});case"portfolio":return Object(o.jsx)(p,{});case"contact":return Object(o.jsx)(b,{});case"resume":return Object(o.jsx)(x,{});default:return null}}()})}),Object(o.jsx)("div",{children:Object(o.jsx)(v,{})})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.bc4d27e9.chunk.js.map