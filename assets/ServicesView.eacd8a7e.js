import{S as _,_ as d}from"./ScrollTitle.e607241e.js";import{l as b,o as n,c as i,a as e,n as $,t,F as h,b as v,i as l,w as y,m as w,k as u,f as S,u as p,d as k,g as f}from"./index.53a110e1.js";const B={class:"service-block"},x=["src"],C={key:0,class:"service-description service-main"},A={class:"service-name"},E=e("h3",null,"Benefits",-1),M={class:"service-details"},j=w("Book now"),F={key:1,class:"service-description addon-container"},V={class:"addon"},N={class:"service-name"},O={class:"addon"},P={class:"service-name"},g={__name:"ServiceBlock",props:{service:Object,serviceMain:Boolean},setup(s){return(m,a)=>{const c=b("router-link");return n(),i("div",B,[e("div",{class:$(["service-img",{light:s.service.background==="light"}])},[e("img",{src:`/img/services/${s.service.img}`,alt:""},null,8,x)],2),s.serviceMain?(n(),i("article",C,[e("h2",A,t(s.service.name),1),e("p",null,t(s.service.description),1),E,e("ul",null,[(n(!0),i(h,null,v(s.service.benefits,(o,r)=>(n(),i("li",{key:r},t(o),1))),128))]),e("div",M,[e("div",null,[e("p",null,"~ "+t(s.service.duration)+"min",1),e("p",null,"~ "+t(s.service.price)+"$",1)]),l(c,{to:"/contact",class:"service-book-btn t-sans book-btn"},{default:y(()=>[j]),_:1})])])):(n(),i("div",F,[e("div",V,[e("h2",N,t(s.service.content[0].name),1),e("p",null,t(s.service.content[0].description),1),e("p",null,"~ "+t(s.service.content[0].price)+"$",1)]),e("div",O,[e("h2",P,t(s.service.content[1].name),1),e("p",null,t(s.service.content[1].description),1),e("p",null,"~ "+t(s.service.content[1].price)+"$",1)])]))])}}},D={class:"hero hero-services"},G=e("h1",{class:"t-cursive"},"Services",-1),T=e("p",null," All procedures are done with high quality products available for purchase. Please book in advance. ",-1),q=w("Book now"),z=e("article",{class:"section-description t-serif"},[e("p",null," Designed with both men and women in mind, EllGlow is a place where you can put your skin and body needs first in the trusted hands of our experienced laser and skin specialists. "),e("p",null,"At EllGlow we offer:"),e("h5",null,"~Facial treaments"),e("p",null,"Rejuvenate your skin with our personalised skin treatments."),e("h5",null,"~Chemical peels"),e("p",null,"Stimulates the production of collagen to create smooth and healthy skin."),e("h5",null,"~Cosmetic injectables"),e("p",null," Ageing is a natural process, however we can keep you looking youthful with our injectables. ")],-1),L={class:"service-section container"},R=e("article",{class:"section-description t-serif"},[e("p",null,"Add something special to your experience.")],-1),W={class:"addon-section container"},H=e("article",{class:"section-description t-serif"},[e("p",null,"Other services we offer. Call for consultation and available times.")],-1),K={__name:"ServicesView",setup(s){return u.registerPlugin(_),S(()=>{u.utils.toArray(".service-description").forEach(a=>{const c=u.from(a,{opacity:0,yPercent:-20,paused:!0});_.create({trigger:a,start:"top bottom",scrab:.5,onEnter:()=>c.play()})})}),(m,a)=>{const c=b("router-link");return n(),i("main",null,[e("div",D,[G,T,l(c,{to:"/contact",class:"service-cta book-btn"},{default:y(()=>[q]),_:1})]),l(d,{title:"Face",color:0}),z,e("section",L,[(n(!0),i(h,null,v(p(f).services,(o,r)=>(n(),k(g,{key:r,service:o,serviceMain:!0},null,8,["service"]))),128))]),l(d,{title:"Addons",color:1}),R,e("section",W,[(n(!0),i(h,null,v(p(f).addons,(o,r)=>(n(),k(g,{key:r,service:o,serviceMain:!1},null,8,["service"]))),128))]),l(d,{title:"Other",color:2}),H])}}};export{K as default};
