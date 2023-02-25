import{s as i,j as t,F as f,a as o,r as w,v as u}from"./index-769db597.js";const b=i.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
  text-align: center;
  margin-bottom: 60px;
  margin-top: 52px;

  @media (min-width: 280px) and (max-width: 767px) {
margin-bottom: 28px;
margin-top: 22px;

  
}
@media (min-width: 768px) and (max-width: 1279px) {
margin-bottom: 40px;
margin-top: 64px;

`,y=({title:n})=>t(f,{children:t(b,{children:n})}),z=i.ul`
  position: absolute;
  width: 120px;

  left: 0px;
  top: 20px;
  padding: 12px;

  background: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 1;
`,v=i.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`,M=i.div`
  position: absolute;
  top: 12px;
  right: 13px;
`,T=i.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: auto;

  color: #000000;
`,O=i.li`
  margin-bottom: 4px;
`,S=({workDays:n})=>{const d=new Date,p=["MN","TU","WE","TH","FR","SA","SU"],h=["SU","MN","TU","WE","TH","FR","SA"];return t("div",{children:n&&t(z,{children:o(O,{children:[p.map(e=>t(v,{style:{color:h[d.getDay()]===e&&"#f59256"},children:e},e)),t(M,{children:n&&n.map((e,r)=>o(T,{style:{color:d.getDay()===r&&"#f59256"},children:[console.log((r+1||r+1===7||(r=0))===0&&"#f59256"),e&&e.isOpen?e.from:"",e&&e.isOpen&&"-",e&&e.isOpen?e.to:"Closed"]},e._id))})]})})})},k=i.div``,C=i.ul`
  position: reletive;
`,F=i.img`
  width: 158px;
  height: 112px;

  @media (min-width: 280px) and (max-width: 767px) {
    width: 110px;
    height: 78px;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    width: 120px;
    height: 85px;
  }
`,U=i.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #f59256;
  margin-bottom: 16px;
  @media (min-width: 280px) and (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;

    margin-bottom: 12px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
    line-height: 22px;
  }
`,I=i.a`
font-family: "Manrope";
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 27px;
align-items: center;
text-align: center;
text-decoration-line: underline;
color: #f59256;
margin-bottom: 16px;
@media (min-width: 280px) and (max-width: 767px) {
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 12px;
}
@media (min-width: 768px) and (max-width: 1279px) {
  font-size: 16px;
  line-height: 22px;
`,m=i.li`
  margin-bottom: 12px;
  max-width: 206px;
  margin-left: 12px;
  position: relative;
  @media (min-width: 280px) and (max-width: 767px) {
    max-width: 150px;
    margin-bottom: 4px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 4px;
  }
`,L=i.div`
  display: flex;
`;i.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000000;

  @media (min-width: 280px) and (max-width: 767px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 12px;
    line-height: 16px;
  }
`;const l=i.a`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000000;
  &:hover {
    color: #dc712f;
  }

@media (min-width: 280px) and (max-width: 767px) {
font-size: 12px;
line-height: 16px;
  
}
@media (min-width: 768px) and (max-width: 1279px) {
font-size: 14px;
line-height: 19px;
`,_=({data:n})=>{const{title:d,url:p,addressUrl:h,imageUrl:e,address:r,workDays:a,phone:x,email:s}=n,[g,c]=w.useState(!1);return o(k,{children:[t(U,{children:t(I,{href:p,target:"_blank",children:d})}),o(L,{children:[t("a",{href:p,target:"_blank",children:t(F,{src:e??"https://animals-city.org/wp-content/themes/animals-city/img/logo.svg",alt:d})}),o(C,{children:[t(m,{children:o(l,{onMouseOver:()=>{c(!0)},onMouseOut:()=>{c(!1)},children:["Time: ",t("br",{}),a&&(a[0].from||a[6].from)?a[0].from||a[6].from:"--------","-",a&&(a[0].to||a[6].to)?a[0].to||a[6].to:"--------",g&&t(S,{workDays:a})]})}),t(m,{children:o(l,{href:r&&h,target:"_blank",children:["Address: ",t("br",{})," ",r||"-----------------"]})}),t(m,{children:o(l,{href:s&&`mailto:${s}`,children:["Email: ",t("br",{}),s||"-----------------"]})}),t(m,{children:o(l,{href:x&&`tel:${x}`,children:["Phone: ",t("br",{}),x||"-----------------"," "]})})]})]})]})},E="https://pet.tizenmile.keenetic.pro/api/static/friends",W=async()=>await u.get(E),A=i.ul`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -16px;
  display: flex;
  flex-wrap: wrap;
`,B=i.li`
  border-radius: 40px;
  background: #ffffff;
  margin: 16px;
  padding: 16px 4px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;

  width: calc(33.3333333333% - 32px);
  @media (min-width: 280px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: calc(50% - 32px);
  }
`,D=i.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 280px) and (max-width: 767px) {
    max-width: 320px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
  }
`,H=W(),j=H.data[0].sponsors,R=()=>t(D,{children:t(A,{children:j.map(n=>t(B,{children:t(_,{data:n})},n._id))})}),q=()=>o(f,{children:[t(y,{title:"Our friends"}),t(R,{})]});export{q as default};
