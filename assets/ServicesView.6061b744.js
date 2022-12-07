import{j as y,o as s,c as n,a as e,n as x,t as o,F as l,b as r,h as c,w as g,k as $,l as p,r as B,i as _,f as C,g as M,m as j,d as f}from"./index.d5680757.js";import{S as E,_ as k}from"./ScrollTitle.29e5d534.js";const T={class:"service-block"},A=["src","alt"],V={key:0,class:"service-description service-main flow"},F={class:"service-name"},L=e("h3",null,"Benefits",-1),N={class:"flow"},O={class:"service-details flex-column"},G={class:"flex"},R={class:"flex"},W={key:0,class:"service-links flex"},z=p("More info"),D=p("Book now"),H={key:1,class:"service-description addon-container"},I={class:"addon"},P={class:"service-name"},U={class:"addon"},Y={class:"service-name"},w={__name:"ServiceBlock",props:{service:Object,serviceMain:Boolean},setup(t){return(h,b)=>{const u=y("router-link");return s(),n("div",T,[e("div",{class:x(["service-img",{light:t.service.background==="light"}])},[e("img",{src:`./img/services/${t.service.img}`,alt:`Image ${t.service.name}`},null,8,A)],2),t.serviceMain?(s(),n("article",V,[e("h2",F,o(t.service.name),1),e("p",null,o(t.service.description),1),L,e("ul",N,[(s(!0),n(l,null,r(t.service.benefits,(i,v)=>(s(),n("li",{key:v}," \u2727 "+o(i),1))),128))]),e("div",O,[e("div",null,[e("div",G,[(s(!0),n(l,null,r(t.service.duration,i=>(s(),n("span",null,"~"+o(i)+"min",1))),256))]),e("div",R,[(s(!0),n(l,null,r(t.service.price,i=>(s(),n("span",null,"~"+o(i)+"$",1))),256))])]),t.service.slug?(s(),n("div",W,[c(u,{to:`/services/${t.service.slug}`,class:"btn-cta btn-info"},{default:g(()=>[z]),_:1},8,["to"]),c(u,{to:"/contact",class:"btn-cta btn-book"},{default:g(()=>[D]),_:1})])):$("",!0)])])):(s(),n("div",H,[e("div",I,[e("h2",P,o(t.service.content[0].name),1),e("p",null,o(t.service.content[0].description),1),e("p",null,"~ "+o(t.service.content[0].price)+"$",1)]),e("div",U,[e("h2",Y,o(t.service.content[1].name),1),e("p",null,o(t.service.content[1].description),1),e("p",null,"~ "+o(t.service.content[1].price)+"$",1)])]))])}}},q={class:"hero hero-services"},J=e("h1",{class:"t-cursive"},"Services",-1),K=e("p",null," Our busy holiday season is upon us. We welcome new and returning clients to schedule their appointments now! ",-1),Q=p("Book now"),X=e("article",{class:"section-description t-serif"},[e("p",null," As the premier provider of laser- and light-based skin-rejuvenation technologies, we have the tools, experience, and talent to help you look and feel your best. "),e("p",null,"At Ell Glow we offer:"),e("h5",null,"\u2736 Facial treaments"),e("p",null,"Rejuvenate your skin with our personalised skin treatments."),e("h5",null,"\u2736 Chemical peels"),e("p",null,"Stimulates the production of collagen to create smooth and healthy skin.")],-1),Z={class:"service-section container"},ee=e("article",{class:"section-description t-serif"},[e("p",null,"Let's add a little something extra to your experience!"),e("p",null," Get an additional mini treatment with your main one to get even more benefits. ")],-1),te={class:"addon-section container"},se=e("article",{class:"section-description t-serif"},[e("p",null,"Here at Ell Glow we have a lot more to offer!"),e("p",null,"Check out other services that our clients enjoy."),e("p",null,"Call us to see what services are available to book.")],-1),ne={class:"other-section container"},oe=e("footer",{class:"t-cursive"},"Come visit us soon!",-1),ie=["onClick"],re={__name:"ServicesView",props:{dataSet:Object},setup(t){const h=B(!1);_.registerPlugin(E);const b=()=>{_.utils.toArray(".service-main").forEach(m=>{_.from(m.children,{scale:.8,opacity:.8,duration:1,scrollTrigger:{trigger:m,start:"20% center",end:"+=400"},immediateRender:!1})})},u=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},i=()=>{h.value=window.scrollY>900};return C(()=>{window.addEventListener("scroll",i),b()}),M(()=>{window.removeEventListener("scroll",i)}),(v,m)=>{const S=y("router-link");return s(),n("main",null,[e("div",q,[J,K,c(S,{to:"/contact",class:"btn-cta service-hero-cta"},{default:g(()=>[Q]),_:1})]),c(k,{title:"Face",color:0}),X,e("section",Z,[(s(!0),n(l,null,r(t.dataSet.services,(a,d)=>(s(),f(w,{key:d,service:a,serviceMain:!0},null,8,["service"]))),128))]),c(k,{title:"Addons",color:1}),ee,e("section",te,[(s(!0),n(l,null,r(t.dataSet.addons,(a,d)=>(s(),f(w,{key:d,service:a,serviceMain:!1},null,8,["service"]))),128))]),c(k,{title:"Other",color:2}),se,e("section",ne,[(s(!0),n(l,null,r(t.dataSet.other,(a,d)=>(s(),f(w,{key:d,service:a,serviceMain:!0},null,8,["service"]))),128))]),oe,h.value?(s(),n("button",{key:0,class:"btn-up",onClick:j(u,["stop"])},"to top",8,ie)):$("",!0)])}}};export{re as default};
