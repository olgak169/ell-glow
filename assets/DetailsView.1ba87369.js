import{p as w,l as d,o as e,c as t,a,t as r,j as o,F as l,b as i,h as p,w as m,m as h,k as u}from"./index.828e9837.js";const y={class:"hero hero-services-details flow"},x=u("Book now"),B={class:"container-service-details flex-column"},V=["src","alt"],N={key:0},C={class:"detail-more-info flow"},D={class:"details-add-info flow"},I=u(" Price: "),L=u(" Duration: "),P={key:0},R=u(" Packages available: "),S=u("Back to services"),$={__name:"DetailsView",props:{dataSet:Object},setup(k){const f=k,g=w(),s=f.dataSet.services.find(_=>_.slug==g.params.slug);return(_,j)=>{const v=d("router-link"),b=d("RouterLink");return e(),t("main",null,[a("div",y,[a("h1",null,r(o(s).name),1),a("ul",null,[(e(!0),t(l,null,i(o(s).benefits,(n,c)=>(e(),t("li",{key:n},r(n),1))),128))]),p(v,{to:"/contact",class:"btn-cta"},{default:m(()=>[x]),_:1})]),a("div",B,[a("img",{src:`/img/services/${o(s).img}`,alt:o(s).name},null,8,V),o(s).process.length?(e(),t("h2",N,"Process: "+r(o(s).process[0]),1)):h("",!0),a("p",null,r(o(s).description),1),a("div",C,[(e(!0),t(l,null,i(o(s).moreInfo,n=>(e(),t("p",null,r(n),1))),256))]),a("div",D,[a("p",null,[I,(e(!0),t(l,null,i(o(s).price,(n,c)=>(e(),t("span",{key:c}," $"+r(n),1))),128))]),a("p",null,[L,(e(!0),t(l,null,i(o(s).duration,(n,c)=>(e(),t("span",{key:c},r(n)+"min ",1))),128))]),o(s).packageInfo.length?(e(),t("h3",P,[R,(e(!0),t(l,null,i(o(s).packageInfo,(n,c)=>(e(),t("p",{key:c},r(n),1))),128))])):h("",!0)]),p(b,{to:"/services",class:"btn-back"},{default:m(()=>[S]),_:1})])])}}};export{$ as default};