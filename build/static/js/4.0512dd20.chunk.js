(this["webpackJsonpkatie-page-therapy"]=this["webpackJsonpkatie-page-therapy"]||[]).push([[4],{41:function(e,t,r){"use strict";t.a=r.p+"static/media/web-project-1.dbc2198e.jpg"},42:function(e,t,r){"use strict";t.a=r.p+"static/media/mobile-project-1.0aa0cb76.jpg"},43:function(e,t,r){"use strict";t.a=r.p+"static/media/ui-project-2.d2891914.jpg"},44:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return j}));var a=r(8),c=r(1),s=(r(41),r.p+"static/media/individual.01637c53.jpg"),i=(r(42),r.p+"static/media/couples.c51ac3ef.jpg"),n=r.p+"static/media/lgbt-couple.a33a2f00.jpg",l=(r(43),[{id:1,title:"IFS Parts Work Therapy",category:"Individual Therapy",img:s,ProjectHeader:{title:"Integrated Therapy Services",publishDate:"Jul 26, 2023",tags:"IFS"}},{id:2,title:"Couples and Sex Therapy",category:"Couples Therapy",img:i},{id:3,title:"LGBT Communities",category:"LGBTQIA+ Therapy",img:n}]),d=r(2),o=Object(c.createContext)(),j=function(e){var t=Object(c.useState)(l),r=Object(a.a)(t,2),s=r[0],i=r[1],n=Object(c.useState)(""),j=Object(a.a)(n,2),m=j[0],g=j[1],p=Object(c.useState)(""),u=Object(a.a)(p,2),b=u[0],x=u[1],y=s.filter((function(e){return e.title.toLowerCase().includes(m.toLowerCase())||""===m?e:""})),h=s.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(b)}));return Object(d.jsx)(o.Provider,{value:{projects:s,setProjects:i,searchProject:m,setSearchProject:g,searchProjectsByTitle:y,selectProject:b,setSelectProject:x,selectProjectsByCategory:h},children:e.children})}},45:function(e,t,r){"use strict";var a=r(1),c=r(6),s=r(39),i=r(13),n=r(2),l=function(e){var t=e.title,r=e.category,a=e.image;return Object(n.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(i.b,{to:"/projects/single-project","aria-label":"Single Project",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},d=r(44),o=["Individual Therapy","Couples Therapy","LGBTQIA+ Therapy","IFS Therapy"],j=function(e){var t=e.setSelectProject;return Object(n.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Services"}),o.map((function(e){return Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(d.a),t=e.projects,r=e.searchProject,s=e.setSearchProject,i=e.searchProjectsByTitle,o=e.selectProject,m=e.setSelectProject,g=e.selectProjectsByCategory;return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Therapy Services"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search services by title or filter by category"}),Object(n.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(n.jsx)(c.l,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Services","aria-label":"Name"})]}),Object(n.jsx)(j,{setSelectProject:m})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:o?g.map((function(e){return Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})):r?i.map((function(e){return Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})):t.map((function(e){return Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)}))})]})}},48:function(e,t,r){"use strict";r.r(t);var a=r(45),c=r(44),s=r(2);t.default=function(){return Object(s.jsx)(c.b,{children:Object(s.jsx)("div",{className:"container mx-auto",children:Object(s.jsx)(a.a,{})})})}}}]);
//# sourceMappingURL=4.0512dd20.chunk.js.map