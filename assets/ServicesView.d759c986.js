import{S as B,_ as m}from"./ScrollTitle.338396cd.js";import{o as t,c as n,a as e,n as x,t as i,F as l,b as r,h as c,w as f,j as g,R as w,k as p,r as C,i as _,f as A,g as E,l as M,m as T,d as b}from"./index.2507881c.js";const V={class:"service-block"},j=["src"],F={key:0,class:"service-description service-main"},L={class:"service-name"},N=e("h3",null,"Benefits",-1),O={class:"service-details"},R={class:"flex"},D={class:"flex"},G=p("More info"),P=p("Book now"),q={key:1,class:"service-description addon-container"},z={class:"addon"},U={class:"service-name"},W={class:"addon"},Y={class:"service-name"},y={__name:"ServiceBlock",props:{service:Object,serviceMain:Boolean},setup(s){return(d,k)=>(t(),n("div",V,[e("div",{class:x(["service-img",{light:s.service.background==="light"}])},[e("img",{src:`/img/services/${s.service.img}`,alt:""},null,8,j)],2),s.serviceMain?(t(),n("article",F,[e("h2",L,i(s.service.name),1),e("p",null,i(s.service.description),1),N,e("ul",null,[(t(!0),n(l,null,r(s.service.benefits,(o,a)=>(t(),n("li",{key:a},"* "+i(o),1))),128))]),e("div",O,[e("div",null,[e("div",R,[(t(!0),n(l,null,r(s.service.duration,o=>(t(),n("span",null,"~"+i(o)+"min",1))),256))]),e("div",D,[(t(!0),n(l,null,r(s.service.price,o=>(t(),n("span",null,"~"+i(o)+"$",1))),256))])]),c(g(w),{to:`/services/${s.service.slug}`,class:"btn-cta btn-info"},{default:f(()=>[G]),_:1},8,["to"]),c(g(w),{to:"/contact",class:"btn-cta btn-book"},{default:f(()=>[P]),_:1})])])):(t(),n("div",q,[e("div",z,[e("h2",U,i(s.service.content[0].name),1),e("p",null,i(s.service.content[0].description),1),e("p",null,"~ "+i(s.service.content[0].price)+"$",1)]),e("div",W,[e("h2",Y,i(s.service.content[1].name),1),e("p",null,i(s.service.content[1].description),1),e("p",null,"~ "+i(s.service.content[1].price)+"$",1)])]))]))}},H={class:"hero hero-services"},I=e("h1",{class:"t-cursive"},"Services",-1),J=e("p",null," All procedures are done with high quality products available for purchase. Please book in advance. ",-1),K=p("Book now"),Q=e("article",{class:"section-description t-serif"},[e("p",null," Designed with both men and women in mind, EllGlow is a place where you can put your skin and body needs first in the trusted hands of our experienced laser and skin specialists. "),e("p",null,"At Ell Glow we offer:"),e("h5",null,"~Facial treaments"),e("p",null,"Rejuvenate your skin with our personalised skin treatments."),e("h5",null,"~Chemical peels"),e("p",null,"Stimulates the production of collagen to create smooth and healthy skin.")],-1),X={class:"service-section container"},Z=e("article",{class:"section-description t-serif"},[e("p",null,"Add something special to your experience.")],-1),ee={class:"addon-section container"},se=e("article",{class:"section-description t-serif"},[e("p",null,"Other services we offer. Call for consultation and available times.")],-1),ie={__name:"ServicesView",props:{dataSet:Object},setup(s){const d=C(!1);_.registerPlugin(B);const k=()=>{_.utils.toArray(".service-main").forEach(u=>{_.from(u.children,{scale:.8,opacity:.8,duration:1,scrollTrigger:{trigger:u,start:"20% center",end:"+=400"},immediateRender:!1})})},o=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},a=()=>{d.value=window.scrollY>900};return A(()=>{window.addEventListener("scroll",a),k()}),E(()=>{window.removeEventListener("scroll",a)}),($,u)=>{const S=M("router-link");return t(),n("main",null,[e("div",H,[I,J,c(S,{to:"/contact",class:"btn-cta service-hero-cta"},{default:f(()=>[K]),_:1})]),c(m,{title:"Face",color:0}),Q,e("section",X,[(t(!0),n(l,null,r(s.dataSet.services,(h,v)=>(t(),b(y,{key:v,service:h,serviceMain:!0},null,8,["service"]))),128))]),c(m,{title:"Addons",color:1}),Z,e("section",ee,[(t(!0),n(l,null,r(s.dataSet.addons,(h,v)=>(t(),b(y,{key:v,service:h,serviceMain:!1},null,8,["service"]))),128))]),c(m,{title:"Other",color:2}),se,d.value?(t(),n("button",{key:0,class:"btn-up",onClick:o},"to top")):T("",!0)])}}};export{ie as default};
