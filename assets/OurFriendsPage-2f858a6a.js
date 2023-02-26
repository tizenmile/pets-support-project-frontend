import{s as t,j as i,F as f,a as d,r as g,d as u,e as b,T as y}from"./index-23d39ed1.js";const z=t.h1`
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

`,M=({title:e})=>i(f,{children:i(z,{children:e})}),T=t.ul`
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
`,v=t.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`,O=t.div`
  position: absolute;
  top: 12px;
  right: 13px;
`,F=t.span`
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
`,S=t.li`
  margin-bottom: 4px;
`,C=({workDays:e})=>{const o=new Date,r=["MN","TU","WE","TH","FR","SA","SU"],h=["SU","MN","TU","WE","TH","FR","SA"];return i("div",{children:e&&i(T,{children:d(S,{children:[r.map(n=>i(v,{style:{color:h[o.getDay()]===n&&"#f59256"},children:n},n)),i(O,{children:e&&e.map((n,p)=>d(F,{style:{color:o.getDay()===p&&"#f59256"},children:[console.log((p+1||p+1===7||(p=0))===0&&"#f59256"),n&&n.isOpen?n.from:"",n&&n.isOpen&&"-",n&&n.isOpen?n.to:"Closed"]},n._id))})]})})})},k=t.div``,D=t.ul`
  position: reletive;
`,I=t.img`
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
`,L=t.h2`
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
`,U=t.a`
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
`,m=t.li`
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
`,E=t.div`
  display: flex;
`;t.span`
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
`;const s=t.a`
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
`,W=({data:e})=>{const{title:o,url:r,addressUrl:h,imageUrl:n,address:p,workDays:a,phone:x,email:l}=e,[w,c]=g.useState(!1);return d(k,{children:[i(L,{children:i(U,{href:r,target:"_blank",children:o})}),d(E,{children:[i("a",{href:r,target:"_blank",children:i(I,{src:n??"https://animals-city.org/wp-content/themes/animals-city/img/logo.svg",alt:o})}),d(D,{children:[i(m,{children:d(s,{onMouseOver:()=>{c(!0)},onMouseOut:()=>{c(!1)},children:["Time: ",i("br",{}),a&&(a[0].from||a[6].from)?a[0].from||a[6].from:"--------","-",a&&(a[0].to||a[6].to)?a[0].to||a[6].to:"--------",w&&i(C,{workDays:a})]})}),i(m,{children:d(s,{href:p&&h,target:"_blank",children:["Address: ",i("br",{})," ",p||"-----------------"]})}),i(m,{children:d(s,{href:l&&`mailto:${l}`,children:["Email: ",i("br",{}),l||"-----------------"]})}),i(m,{children:d(s,{href:x&&`tel:${x}`,children:["Phone: ",i("br",{}),x||"-----------------"," "]})})]})]})]})},_=t.ul`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -16px;
  display: flex;
  flex-wrap: wrap;
`,H=t.li`
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
`,j=t.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 280px) and (max-width: 767px) {
    max-width: 320px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
  }
`,A=e=>{var o,r;return(r=(o=e==null?void 0:e.friends)==null?void 0:o.friendsList[0])==null?void 0:r.sponsors},B=()=>{const e=u(A),o=b();if(g.useEffect(()=>{o(y())},[]),!!e)return console.log(e),i(j,{children:i(_,{children:e.map(r=>i(H,{children:i(W,{data:r})},r._id))})})},$=()=>d(f,{children:[i(M,{title:"Our friends"}),i(B,{})]});export{$ as default};
