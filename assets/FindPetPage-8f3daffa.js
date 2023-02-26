import{s as o,d as f,t as V,r as s,e as W,v as ge,j as t,a as i,w as U,x as ne,Q as H,y as ae,z as fe,B as xe,C as ue,D as _e,E as He,G as oe,I as re,F as L,A as be,J as Ue,K as R,M as I,N as J,P as Ge,O as Ye}from"./index-4b08e76f.js";import{M as ye,a as Re}from"./ModalBackdrop-f61bf2f2.js";import{G as we}from"./iconBase-07fe5fb3.js";const ve=e=>e.notices.items,Ne=e=>e.notices.favNotices,ke=e=>e.search,j=e=>e.filters.status,Je=e=>e.notices.isLoading,qe="/pets-support-project-frontend/assets/male-a0f02fb1.svg",Ke="/pets-support-project-frontend/assets/female-147e65d7.svg",Qe="/pets-support-project-frontend/assets/plus-94d63496.svg",Me="/pets-support-project-frontend/assets/heart-4779bb70.svg",Ce="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",Ve=o.li`
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,Xe=o.div`
 display: flex;
 flex-direction: column;
 height: 612px;
`,Ze=o.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,et=o.div`
  position: relative;
`,tt=o.p`
  width: 158px;
  position: absolute;
  top: 20px;
  padding: 6px 0 7px 20px;
  border-radius: 0 ${e=>e.theme.radii.large} ${e=>e.theme.radii.large} 0;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.04em;
  background-color: rgba(255, 255, 255, 0.6);
  color: #111111;
`,ot=o.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 10px;
`,it=o.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,nt=o.ul`
  margin: 20px;
`,Z=o.li`
  display: flex;
  margin-bottom: 8px;

  &&:last-child {
  margin-bottom: 0;
`,T=o.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,le=o.button`
  margin: 0 auto 12px auto;
  width: 248px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  gap: 10px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #f59256;
  

  &&:hover {
    border-color: #ff6101;
    color: #ff6101;
    
    cursor: pointer;
  }
`;o.img`
 width: 16px;
 height: 17px;
 fill: currentColor;
`;const at=o.div`
  position: relative;
  width: 704px;
  height: auto;
  background: #ffffff;
  padding-left: 20px;
  padding-top: 32px;
  padding-right: 24px;
  border-radius: 40px;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 280px;
  }
`,rt=o.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12px;
  right: 20px;
  width: 44px;
  height: 44px;
  background-color: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50px;
  transition: ${e=>e.theme.transition};
  :hover {
    background: #f59256;
    color: #ffffff;
    transition: ${e=>e.theme.transition};
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 34px;
    height: 34px;
    top: 20px;
    right: 20px;
  }
`,lt=o.img`
  display: block;
  width: 20px;
  height: 20px;
`,ct=o.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,st=o.div`
  position: relative;
  margin-right: 20px;
  width: 288px;
  height: 328px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 240px;
    height: 240px;

    border-radius: 0px 0px 40px 40px;
  }
`,dt=o.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,ht=o.p`
  position: absolute;
  top: 20px;
  min-width: 158px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 0px 40px 40px 0px;
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 12px;
  line-height: 1.36;
  letter-spacing: 0.04em;
`,pt=o.h2`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 16px;
  }
`,S=o.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  width: 131px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,F=o.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,mt=o.ul`
  //   background-color: red;
`,z=o.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,gt=o.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  margin-top: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,ft=o.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,xt=o.div`
  margin-bottom: 32px;
  margin-top: 32px;
  display: flex;
  flex-direction: raw;
  justify-content: flex-end;
  margin-right: 40px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    margin-top: 40px;
  }
`,ut=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  margin-right: 12px;
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  transition: ${e=>e.theme.transition};
  :hover {
    transition: ${e=>e.theme.transition};
    background: #f59256;
    color: #ffffff;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 240px;
  }
`,bt=o.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,yt=o.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  transition: ${e=>e.theme.transition};
  :hover {
    transition: ${e=>e.theme.transition};
    background: #f59256;
    color: #ffffff;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 240px;
    margin-top: 12px;
  }
`,wt=({onClose:e,itemId:d,isFavorite:l})=>{const n=f(V),c=f(j),[r,p]=s.useState(null),[h,a]=s.useState(l),k=W(),m=()=>{a(b=>!b),k(h?fe(d):xe(d))},g=()=>t("div",{children:t(ue,{to:"/login",children:"You need to log in"})});if(s.useEffect(()=>{ge.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${d}`).then(b=>{const y=b.data.data;p(y)})},[]),!r)return;const v=b=>{let y=new Date(b).getDate();y<10&&(y="0"+y);let M=new Date(b).getMonth();M<10&&(M="0"+M);let N=new Date(b).getFullYear();return N<10&&(N="0"+N),y+"."+M+"."+N};return t(ye,{children:i(at,{children:[t(rt,{onClick:()=>{e(h),c==="fav-notice"&&k(U())},children:t(lt,{src:ne,alt:"close_menu_icon"})}),i(ct,{children:[i(st,{children:[t(dt,{src:r.notice.photo}),t(ht,{children:r.notice.category})]}),i("div",{children:[t(pt,{children:r.notice.title}),i(mt,{children:[r.notice.name&&i(z,{children:[t(S,{children:"Name:"}),t(F,{children:r.notice.name})]}),r.notice.birthDate&&i(z,{children:[t(S,{children:"Birthday:"}),t(F,{children:v(r.notice.birthDate)})]}),r.notice.breed&&i(z,{children:[t(S,{children:"Breed:"}),t(F,{children:r.notice.breed})]}),i(z,{children:[t(S,{children:"Place:"}),t(F,{children:r.notice.place})]}),i(z,{children:[t(S,{children:"The sex:"}),t(F,{children:r.notice.sex})]}),i(z,{children:[t(S,{children:"UserName:"}),t(F,{children:r.user.name})]}),i(z,{children:[t(S,{children:"Email:"}),t(F,{children:r.user.email})]}),i(z,{children:[t(S,{children:"Phone:"}),t(F,{children:r.user.mobile})]}),r.notice.category==="sell"&&i(z,{children:[t(S,{children:"Price:"}),t(F,{children:`${r.notice.price}$`})]})]})]})]}),i(gt,{children:["comments",i(ft,{children:[": ",r.notice.comments]})]}),i(xt,{children:[i(ut,{onClick:()=>{n?m():H(g)},children:[h?"del from":"add to",t(bt,{src:h?Ce:Me,alt:h?"heartFull":"heart"})]}),t(ae,{}),t(yt,{href:"tel:"+r.user.mobile,children:"contact"})]}),t("link",{})]})})},ce=({item:e})=>{const d=f(Ne),l=f(V),n=f(j),c=f(_e),[r,p]=s.useState(!1),[h,a]=s.useState(!1),k=f(j),m=W(),g=()=>{p(!0)},v=$=>{p(!1),a($)},b=d.reduce(($,Y)=>($.push(Y._id),$),[]);s.useEffect(()=>{a(b.includes(e._id))},[d]);const y=async()=>{a($=>!$),await m(h?fe(e._id):xe(e._id)),k==="fav-notice"&&m(U())},M=async()=>{const $=["sell","lost-found","for-free"];await m(He(e._id)),$.includes(n)?m(oe(n)):m(n==="own-notices"?re():U())},N=()=>t("div",{children:t(ue,{to:"/login",children:"You need to log in"})}),C=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),E=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let x;C<1?x="Less than a year":C>15?x="very old dog":C>=1&&C<=15?x=E[C-1]:x="unknown";const A=e.category;return i(Ve,{children:[i(Xe,{children:[i("div",{style:{flexGrow:1},children:[i(et,{children:[t(Ze,{src:e.photo,alt:e.title}),i(tt,{children:[A==="sell"&&"sell",A==="for-free"&&"in good hands",A==="lost-found"&&"lost/found"]}),t(ot,{onClick:()=>{l?y():H(N)},children:h?t("img",{src:Ce,alt:"heartFull"}):t("img",{src:Me,alt:"heart"})}),t(ae,{})]}),t(it,{style:{width:"280px"},children:e.title}),i(nt,{children:[e.breed&&i(Z,{children:[t(T,{style:{width:"50px"},children:"Breed:"}),t(T,{style:{marginLeft:"40px"},children:e.breed})]}),i(Z,{children:[t(T,{style:{width:"50px"},children:"Place:"}),t(T,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&i(Z,{children:[t(T,{style:{width:"50px"},children:"Age:"}),t(T,{style:{marginLeft:"40px"},children:x})]})]})]}),t(le,{style:e.userId!==c._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:g,children:"Learn more"}),e.userId==c._id&&i(le,{onClick:M,children:["Delete",t(Re,{width:"16px",height:"17px"})]})]}),r&&t(wt,{itemId:e._id,isFavorite:h,onClose:v})]})},vt=o.ul`
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fdf7f2;
  display: flex;
  flex-direction: column;

  @media (min-width: 280px) {
    padding: 0px 16px 0px 16px;
  }

  @media (min-width: 768px) {
    padding: 0px 32px 0px 32px;
  }
  @media (min-width: 1280px) {
    padding: 0px 16px 0px 16px;
  }
`,se=o.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(min(280px), 1fr));
  grid-gap: ${e=>e.theme.space[4]}px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`,Nt=()=>{const e=f(ve),d=f(Ne),l=f(j),c=f(ke).toLowerCase(),r=f(Je);let p,h;return e!==void 0&&e.length>0&&(p=e.filter(a=>a.title.toLowerCase().includes(c))),d!==void 0&&d.length>0&&(h=d.filter(a=>a.title.toLowerCase().includes(c))),t(L,{children:r?t(be,{}):l!=="fav-notice"?t(L,{children:p!==void 0&&p.length>=1&&t(se,{children:p.map(a=>t(ce,{item:a},a._id))})}):t(L,{children:h!==void 0&&h.length>=1&&t(se,{children:h.map(a=>t(ce,{item:a},a._id))})})})},kt=o.section``,Mt=o.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,Ct=o.ul`
  display: flex;
  flex-wrap: wrap;
`,O=o.li`
  &:not(:last-child) {
    margin-right: 12px;
  }
  @media (${e=>e.theme.media.mobileMax}) {
    &:nth-child(-n + 3) {
      margin-bottom: 12px;
    }
  }
  @media (${e=>e.theme.media.tablet}) {
    &:nth-child(-n + 3) {
      margin-bottom: 16px;
    }
  }
`,$t=o.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
  }
`,It=o.button`
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  background-color: ${e=>e.theme.colors.white};
  color: ${e=>e.theme.colors.mainText};
  border: solid ${e=>e.theme.colors.accent};
  border-radius: 40px;
  font-family: ${e=>e.theme.fonts.main};
  line-height: ${e=>e.theme.lineHeights.body};
  &:hover,
  &:active {
    color: ${e=>e.theme.colors.white};
    background-color: ${e=>e.theme.colors.hover};
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (${e=>e.theme.media.mobileMax}) {
    font-size: ${e=>e.theme.fontSizes.xs};
    padding: 8px 28px;
  }
  @media (${e=>e.theme.media.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xm};
    padding: 10px 28px;
  }
`,_=({selected:e=!1,type:d="button",children:l,...n})=>t(It,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:d,...n,children:l}),St=o.form`
  position: relative;
  width: 608px;
  min-height: 885px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
`,$e=o.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12px;
  right: 20px;
  width: 44px;
  height: 44px;
  background-color: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50px;
  transition: ${e=>e.theme.transition};
  :hover {
    background: #f59256;
    color: #ffffff;
    transition: ${e=>e.theme.transition};
  }
`,Ie=o.img`
  display: block;
  width: 20px;
  height: 20px;
`,Se=o.h2`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
`,Ft=o.p`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 28px;
`,zt=o.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`,ee=o.li`
  :not(:last-child) {
    margin-right: 12px;
  }
  :first-child {
    margin-bottom: 16px;
  }
`,q=o.label`
  padding: 10px 28px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  width: max-content;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
  cursor: pointer;
`,te=o.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${q} {
    transition: ${e=>e.theme.transition};
    background: #F59256;
`,Fe=o.ul`
  margin-bottom: 40px;
`,D=o.label`
  display: block;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,P=o.input`
  height: 48px;
  width: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-top: 12px;
  padding-left: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  ::placeholder {
    margin: 0;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: rgba(17, 17, 17, 0.6);
  }
`,B=o.li`
  margin-bottom: 28px;
`,ze=o.ul`
  display: flex;
  justify-content: center;
`,K=o.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,Q=o.button`
  width: 180px;
  height: 44px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;

  transition: ${e=>e.theme.transition};
  :hover {
    background: #f59256;
    color: #ffffff;
    transition: ${e=>e.theme.transition};
  }
`;function Lt(){return JSON.parse(window.localStorage.getItem("notice"))}const Bt=({onClose:e,isNext:d,onSubmit:l})=>{const n=Lt(),[c,r]=s.useState(n?n.category:"sell"),[p,h]=s.useState(n?n.title:""),[a,k]=s.useState(n?n.name:""),[m,g]=s.useState(n?n.birthDate:""),[v,b]=s.useState(n?n.breed:"");s.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:p,breed:v,name:a,birthDate:m,category:c}))},[p,v,a,m,c]);const y=x=>{r(x.target.value)};return i(St,{children:[t($e,{type:"button",onClick:e,children:t(Ie,{src:ne})}),t(Se,{children:"Add pet"}),t(Ft,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),i(zt,{children:[i(ee,{children:[t(te,{type:"radio",name:"category",checked:c==="lost-found",value:"lost-found",id:"lost/found",onChange:y}),t(q,{htmlFor:"lost/found",children:"lost/found"})]}),i(ee,{children:[t(te,{type:"radio",name:"category",checked:c==="for-free",value:"for-free",id:"inGoodHands",onChange:y}),t(q,{htmlFor:"inGoodHands",children:"in good hands"})]}),i(ee,{children:[t(te,{type:"radio",name:"category",checked:c==="sell",value:"sell",id:"sell",onChange:y}),t(q,{htmlFor:"sell",children:"sell"})]})]}),i(Fe,{children:[t(B,{children:i(D,{children:["Tittle of ad*:",t(P,{type:"text",min:"2",max:"48",required:!0,placeholder:"Type name",name:"title",value:p,onChange:x=>{h(x.target.value)}})]})}),t(B,{children:i(D,{children:["Name pet:",t(P,{type:"text",min:"2",max:"16",placeholder:"Type name pet",name:"name",value:a,onChange:x=>{k(x.target.value)}})]})}),t(B,{children:i(D,{children:["Date of birth:",t(P,{type:"date",name:"birthDate",value:m,onChange:x=>{g(x.target.value)}})]})}),t(B,{children:i(D,{children:["Breed:",t(P,{type:"text",min:"2",max:"24",placeholder:"Type breed",name:"breed",value:v,onChange:x=>{b(x.target.value)}})]})})]}),i(ze,{children:[t(K,{children:t(Q,{type:"button",onClick:e,children:"Cancel"})}),t(K,{children:t(Q,{type:"button",onClick:()=>{l({title:p,breed:v,name:a,birthDate:m,category:c}),d()},children:"Next"})})]})]})},At=o.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 90px;
`,Tt=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,Dt=o.ul`
  display: flex;
  margin-bottom: 40px;
`,de=o.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 90px;
  }
`,he=o.img`
  width: 54px;
  margin-bottom: 20px;
`,ie=o.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,pe=o.input`
  opacity: 0;
  height: 0;
  width:0;
  line-heigth: 0 ;
  overflow: hidden;
  padding: 0;
  margin:0;
  transition: ${e=>e.theme.transition};
  &:checked + ${ie} {
    transition: ${e=>e.theme.transition};
    color:  #F59256;;
`,Pt=o.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  width: max-content;
  display: block;
  cursor: pointer;
`,jt=o.button`
  width: 140px;
  height: 140px;
  margin-top: 12px;
  background: #fdf7f2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  // box-sizing: border-box;
  z-index: 1;
  :hover {
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
`,Wt=o.img`
  width: 47px;
  hegth: 47px;
`,Et=o.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,Ot=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-heigth: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  // display: none;
`,_t=o.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  // width: content-box;
`,Ht=o.textarea`
  margin-top: 12px;
  padding-left: 18px;
  padding-top: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  resize: none;
  outline: none;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  height: 113px;
  cursor: pointer;
  ::placeholder {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: rgba(17, 17, 17, 0.6);
  }
`;function Ut(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const Gt=({onClose:e,isPrev:d,notice:l})=>{const n=Ut(),c=f(w=>w.auth.token),r=s.useRef(null),[p,h]=s.useState(n?n.sex:""),[a,k]=s.useState(n?n.place:""),[m,g]=s.useState(n?n.price:""),[v,b]=s.useState(n?n.image:null),[y,M]=s.useState(n?n.imageName:null),[N,G]=s.useState(n?n.imageUrl:null),[C,E]=s.useState(n?n.comments:""),[x,A]=s.useState(!1),$=W();s.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:v,imageName:y,imageUrl:N,sex:p,place:a,price:m,comments:C}))});const Y=w=>{h(w.target.value)},Le=w=>{k(w.target.value)},Be=w=>{g(w.target.value)},Ae=w=>{const{files:u}=w.target;if(u[0].size>5242880)return Oe();b(u[0]),u[0]&&M(u[0].name),u&&G(URL.createObjectURL(u[0]))},Te=w=>{E(w.target.value)},De=()=>{r.current.click()},Pe=async w=>{A(!0),w.preventDefault();const u=new FormData;u.append("image",v),u.append("sex",p),u.append("place",a),u.append("price",m||1),u.append("comments",C),u.append("title",l.title),u.append("breed",l.breed),u.append("birthDate",l.birthDate),u.append("category",l.category),u.append("name",l.name);try{const X=await ge.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",u,{headers:{Authorization:`Bearer ${c}`}});console.log(X),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),je(),Ee(),e(),$(re())}catch(X){console.log(X),We()}A(!1)},je=()=>{G(null),M(null),b(null),h(""),k(""),g(""),E("")},We=()=>H.error("Please enter correct data!"),Ee=()=>H.success("Notice created!"),Oe=()=>H.error("The file must not exceed 5.2 mb!");return i(L,{children:[t(ae,{}),x?t(be,{}):t(L,{children:i(At,{name:"newForm",onSubmit:Pe,children:[t($e,{type:"button",onClick:e,children:t(Ie,{src:ne})}),t(Se,{children:"Add pet"}),t(Tt,{children:"The sex*:"}),i(Dt,{children:[i(de,{children:[t(he,{src:qe}),t(pe,{type:"radio",name:"sex",id:"male",checked:p==="male",value:"male",onChange:Y}),t(ie,{htmlFor:"male",children:"Male"})]}),i(de,{children:[t(he,{src:Ke}),t(pe,{type:"radio",name:"sex",id:"female",checked:p==="female",value:"female",onChange:Y}),t(ie,{htmlFor:"female",children:"Female"})]})]}),i(Fe,{children:[t(B,{children:i(D,{children:["Location*:",t(P,{type:"",placeholder:"Type location",name:"place",value:a,onChange:Le})]})}),l.category==="sell"&&t(B,{children:i(D,{children:["Price*:",t(P,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:m,onChange:Be})]})}),t(B,{children:i(Pt,{children:["Load the pet’s image:",t(jt,{type:"button",onClick:De,children:N?t(Et,{src:N}):t(Wt,{src:Qe})}),t(Ot,{type:"file",name:"image",ref:r,accept:"image/*,.png,.jpg,.gif,.web",onChange:Ae})]})}),t(B,{children:i(_t,{children:["Comments:",t(Ht,{type:"text",min:"8",max:"120",required:!0,placeholder:"Type comment",name:"comments",value:C,onChange:Te})]})})]}),i(ze,{children:[t(K,{children:t(Q,{onClick:d,children:"Back"})}),t(K,{children:t(Q,{type:"submit",children:"Done"})})]})]})})]})},Yt=({onClose:e})=>{const[d,l]=s.useState(!1),[n,c]=s.useState(null);return t(ye,{children:d?t(Gt,{onClose:e,isPrev:()=>{l(!1)},notice:n}):t(Bt,{onClose:e,isNext:()=>{l(!0)},onSubmit:a=>{c(a)}})})},Rt=o.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,Jt=()=>{const[e,d]=s.useState(!1);return i(L,{children:[t(Rt,{children:t("button",{onClick:()=>{d(!0)},children:" create notice"})}),e&&t(Yt,{onClose:()=>{d(!1)}})]})};function qt({category:e}){const d=f(V),l=Ue(),n=W(),c=f(j);s.useEffect(()=>{n(R("sell")),n(oe("sell")),l("/FindPet/sell",{replace:!0})},[n]);const r=a=>{n(R(a)),n(oe(a)),l(`/FindPet/${a}`,{replace:!0})},p=a=>{n(R(a)),n(re()),l(`/FindPet/${a}`,{replace:!0})},h=a=>{n(R(a)),n(U()),l(`/FindPet/${a}`,{replace:!0})};return t(kt,{children:i($t,{children:[t(Mt,{children:i(Ct,{children:[t(O,{children:t(_,{selected:c===I.lostFound,onClick:()=>r(I.lostFound),children:"lost/found"})}),t(O,{children:t(_,{selected:c===I.free,onClick:()=>r(I.free),children:"in good hands"})}),t(O,{children:t(_,{selected:c===I.sell,onClick:()=>r(I.sell),children:"sell"})}),d&&i(L,{children:[t(O,{children:t(_,{selected:c===I.favorite,onClick:()=>h(I.favorite),children:"favorite ads"})}),t(O,{children:t(_,{selected:c===I.my,onClick:()=>p(I.my),children:"my ads"})})]})]})}),t(Jt,{})]})})}function Kt(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}function Qt(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}o.section`
  margin-right: auto;
  margin-left: auto;
`;const Vt=o(Qt)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  fill: white;
  color: black;
  &:hover {
    color: ${e=>e.theme.colors.accent};
    scale: 1.15;
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (${e=>e.theme.media.mobileMax}) {
    width: 20px;
    height: 20px;
  }
  @media (${e=>e.theme.media.tablet}) {
    width: 24px;
    height: 24px;
  }
`,Xt=o.div`
  margin: 0 0;

  padding-left: 15px;
  padding-right: 15px;
  @media (${e=>e.theme.media.mobileMax}) {
    max-width: 768px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 22px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (${e=>e.theme.media.tablet}) {
    max-width: 1248px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
    margin-bottom: 60px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
    margin-left: auto;
    max-width: 1248px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 39px;
    margin-bottom: 60px;
  }
`,Zt=o.form`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media (${e=>e.theme.media.mobileMax}) {
    max-width: 280px;
    height: 40px;
    margin-bottom: 28px;
    font-size: ${e=>e.theme.fontSizes.s};
  }
  @media (${e=>e.theme.media.tablet}) {
    width: 608px;
    height: 44px;
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.xm};
  }
`,me=o.button`
  padding: 0px 0px;
`,eo=o.div`
  margin-left: auto;
  margin-right: auto;
`,to=o.h2`
  font-family: ${e=>e.theme.fonts.main};
  line-height: ${e=>e.theme.lineHeights.titleSection};
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.mainText};
  text-align: center;
  @media (${e=>e.theme.media.mobileMax}) {
    font-size: ${e=>e.theme.fontSizes.m};
    margin-bottom: 28px;
  }
  @media (${e=>e.theme.media.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xxxl};
    margin-bottom: 40px;
  }
`,oo=o(Kt)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  fill: white;
  color: black;
  &:hover {
    color: ${e=>e.theme.colors.accent};
    scale: 1.15;
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (${e=>e.theme.media.mobileMax}) {
    width: 17px;
    height: 17px;
  }
  @media (${e=>e.theme.media.tablet}) {
    width: 20px;
    height: 20px;
  }
`,io=o.input`
  outline: none;
  width: 100%;
  height: 100%;
  font-family: ${e=>e.theme.fonts.main};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  color: ${e=>e.theme.colors.searchText};
  border-radius: 14px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25), 7px 4px 6px rgba(49, 21, 4, 0.07);
  &:hover,
  &:focus,
  &:active {
    border: solid ${e=>e.theme.colors.accent};
    scale: 1.02;
  }
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (${e=>e.theme.media.mobileMax}) {
    padding-left: 12px;
  }
  @media (${e=>e.theme.media.tablet}) {
    padding-left: 20px;
  }
`;function no(){const[e,d]=s.useState(""),[l,n]=s.useState(null),c=W();f(ke);const r=document.getElementById("input"),p=g=>{n(!0),console.log(l)},h=g=>{g.currentTarget===g.target&&(n(!1),e===""&&c(J("")))};return i(L,{children:[t(to,{children:"Find your favorite pet"}),t(eo,{children:i(Zt,{onSubmit:g=>{g.preventDefault(),c(J(e))},children:[t(io,{id:"input",type:"text",onChange:g=>{d(g.target.value)},value:e,placeholder:"Search",onFocus:p,onBlur:h}),l?null:t(me,{type:"submit",children:t(oo,{})}),l?t(me,{onClick:g=>{g.preventDefault(),e!==""&&(c(J(e)),n(!1),h(g),r.blur()),e===""&&c(J(""))},children:t(Vt,{})}):null]})})]})}const co=()=>{const{categoryName:e}=Ge();f(ve),f(j);const d=f(V),l=W();return s.useEffect(()=>{d&&l(U())},[l]),i(L,{children:[i(Xt,{children:[t(no,{}),t(qt,{category:e})]}),i(vt,{children:[t(Nt,{}),t(Ye,{})]})]})};export{co as default};
