import{s as i,d as g,t as Z,r as d,e as H,v as ve,j as t,a as n,w as R,x as le,Q as E,y as ee,z as Ne,B as ke,C as Ce,D as Ue,E as Ge,G as ae,I as de,F as I,A as Me,J as Ye,K as q,M as $,N as K,P as Re,O as Je}from"./index-707fe978.js";import{M as ce,a as qe}from"./ModalBackdrop-b9f51202.js";import{G as $e}from"./iconBase-ffdb1d31.js";const Ie=e=>e.notices.items,Se=e=>e.notices.favNotices,Fe=e=>e.search,_=e=>e.filters.status,Ke=e=>e.notices.isLoading,Qe="/pets-support-project-frontend/assets/male-a0f02fb1.svg",Ve="/pets-support-project-frontend/assets/female-147e65d7.svg",Xe="/pets-support-project-frontend/assets/plus-94d63496.svg",ze="/pets-support-project-frontend/assets/heart-4779bb70.svg",Le="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",Ze=i.li`
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,et=i.div`
  display: flex;
  flex-direction: column;
  height: 612px;
`,tt=i.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,it=i.div`
  position: relative;
`,nt=i.p`
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
`,ot=i.button`
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
`,at=i.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,rt=i.ul`
  margin: 20px;
`,ie=i.li`
  display: flex;
  margin-bottom: 8px;

  &&:last-child {
    margin-bottom: 0;
  }
`,P=i.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,pe=i.button`
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
`;i.img`
  width: 16px;
  height: 17px;
  fill: currentColor;
`;const lt=i.div`
  position: relative;
  width: 704px;
  height: auto;
  background: #ffffff;
  padding-left: 20px;
  padding-top: 32px;
  padding-right: 24px;
  border-radius: 40px;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 150px;
    width: 280px;
  }
`,dt=i.button`
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
`,ct=i.img`
  display: block;
  width: 20px;
  height: 20px;
`,st=i.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,ht=i.div`
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
`,pt=i.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,mt=i.p`
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
`,ft=i.h2`
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
`,S=i.p`
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
`,T=i.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,me=i.a`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  /* text-decoration: none; */
  color: #000000;
  :hover {
    cursor: pointer;
    color: #f59256;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,gt=i.ul`
  //   background-color: red;
`,F=i.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,xt=i.p`
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
`,ut=i.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,bt=i.div`
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
`,yt=i.button`
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
`,wt=i.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,vt=i.a`
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
`,Nt=({onClose:e,itemId:c,isFavorite:l})=>{const o=g(Z),s=g(_),[a,h]=d.useState(null),[p,r]=d.useState(l),N=H(),u=()=>{r(v=>!v),N(p?Ne(c):ke(c))},m=()=>t("div",{children:t(Ce,{to:"/login",children:"You need to log in"})});if(d.useEffect(()=>{ve.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${c}`).then(v=>{const y=v.data.data;h(y)})},[]),!a)return;const b=v=>{let y=new Date(v).getDate();y<10&&(y="0"+y);let M=new Date(v).getMonth();M<10&&(M="0"+M);let k=new Date(v).getFullYear();return k<10&&(k="0"+k),y+"."+M+"."+k};return t(ce,{children:n(lt,{children:[t(dt,{onClick:()=>{e(p),s==="fav-notice"&&N(R())},children:t(ct,{src:le,alt:"close_menu_icon"})}),n(st,{children:[n(ht,{children:[t(pt,{src:a.notice.photo}),t(mt,{children:a.notice.category})]}),n("div",{children:[t(ft,{children:a.notice.title}),n(gt,{children:[a.notice.name&&n(F,{children:[t(S,{children:"Name:"}),t(T,{children:a.notice.name})]}),a.notice.birthDate&&n(F,{children:[t(S,{children:"Birthday:"}),t(T,{children:b(a.notice.birthDate)})]}),a.notice.breed&&n(F,{children:[t(S,{children:"Breed:"}),t(T,{children:a.notice.breed})]}),n(F,{children:[t(S,{children:"Place:"}),t(T,{children:a.notice.place})]}),n(F,{children:[t(S,{children:"The sex:"}),t(T,{children:a.notice.sex})]}),n(F,{children:[t(S,{children:"UserName:"}),t(T,{children:a.user.name})]}),n(F,{children:[t(S,{children:"Email:"}),t(me,{href:"mailto:"+a.user.email,children:a.user.email})]}),n(F,{children:[t(S,{children:"Phone:"}),t(me,{href:"tel:"+a.user.mobile,children:a.user.mobile})]}),a.notice.category==="sell"&&n(F,{children:[t(S,{children:"Price:"}),t(T,{children:`${a.notice.price}$`})]})]})]})]}),n(xt,{children:["comments",n(ut,{children:[": ",a.notice.comments]})]}),n(bt,{children:[n(yt,{onClick:()=>{o?u():E(m)},children:[p?"del from":"add to",t(wt,{src:p?Le:ze,alt:p?"heartFull":"heart"})]}),t(ee,{}),t(vt,{href:"tel:"+a.user.mobile,children:"contact"})]}),t("link",{})]})})},kt=i.div`
  position: relative;
  width: 450px;
  height: auto;
  background: #ffffff;
  padding-left: 20px;
  padding-top: 32px;
  padding-right: 24px;
  border-radius: 40px;
  @media (min-width: 320px) and (max-width: 450px) {
    margin-top: 150px;
    width: 280px;
  }
`,Ct=i.div`
display: flex;
justify-content: center;
margin: 20px 0 ;
`,fe=i.button`
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
  @media (min-width: 320px) and (max-width: 450px) {
    width: 240px;
  }
`,Mt=({onClose:e,deleteNotice:c})=>t(ce,{children:n(kt,{children:[t("h3",{style:{textAlign:"center"},children:"Are you sure?"}),n(Ct,{children:[t(fe,{onClick:e,children:"Cancel"}),t(fe,{onClick:c,children:"Delete notice"})]})]})}),ge=({item:e})=>{const c=g(Se),l=g(Z),o=g(_),s=g(Ue),[a,h]=d.useState(!1),[p,r]=d.useState(!1),[N,u]=d.useState(!1),m=g(_),b=H(),v=()=>{h(!0)},y=()=>{r(C=>!C)},M=C=>{h(!1),u(C)},k=c.reduce((C,te)=>(C.push(te._id),C),[]);d.useEffect(()=>{u(k.includes(e._id))},[c]);const D=async()=>{u(C=>!C),await b(N?Ne(e._id):ke(e._id)),m==="fav-notice"&&b(R())},A=async()=>{const C=["sell","lost-found","for-free"];await b(Ge(e._id)),C.includes(o)?b(ae(o)):b(o==="own-notices"?de():R())},j=()=>t("div",{children:t(Ce,{to:"/login",children:"You need to log in"})}),f=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),z=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let L;f<1?L="Less than a year":f>15?L="very old dog":f>=1&&f<=15?L=z[f-1]:L="unknown";const U=e.category;return n(Ze,{children:[n(et,{children:[n("div",{style:{flexGrow:1},children:[n(it,{children:[t(tt,{src:e.photo,alt:e.title}),n(nt,{children:[U==="sell"&&"sell",U==="for-free"&&"in good hands",U==="lost-found"&&"lost/found"]}),t(ot,{onClick:()=>{l?D():E(j)},children:N?t("img",{src:Le,alt:"heartFull"}):t("img",{src:ze,alt:"heart"})}),t(ee,{})]}),t(at,{style:{width:"280px"},children:e.title}),n(rt,{children:[e.breed&&n(ie,{children:[t(P,{style:{width:"50px"},children:"Breed:"}),t(P,{style:{marginLeft:"40px"},children:e.breed})]}),n(ie,{children:[t(P,{style:{width:"50px"},children:"Place:"}),t(P,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&n(ie,{children:[t(P,{style:{width:"50px"},children:"Age:"}),t(P,{style:{marginLeft:"40px"},children:L})]})]})]}),t(pe,{style:e.userId!==s._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:v,children:"Learn more"}),e.userId==s._id&&n(pe,{onClick:y,children:["Delete",t(qe,{width:"16px",height:"17px"})]})]}),a&&t(Nt,{itemId:e._id,isFavorite:N,onClose:M}),p&&t(Mt,{onClose:y,deleteNotice:A})]})},$t=i.ul`
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
`,xe=i.ul`
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
`,It=()=>{const e=g(Ie),c=g(Se),l=g(_),s=g(Fe).toLowerCase(),a=g(Ke);let h,p;return e!==void 0&&e.length>0&&(h=e.filter(r=>r.title.toLowerCase().includes(s))),c!==void 0&&c.length>0&&(p=c.filter(r=>r.title.toLowerCase().includes(s))),t(I,{children:a?t(Me,{}):l!=="fav-notice"?t(I,{children:h!==void 0&&h.length>=1&&t(xe,{children:h.map(r=>t(ge,{item:r},r._id))})}):t(I,{children:p!==void 0&&p.length>=1&&t(xe,{children:p.map(r=>t(ge,{item:r},r._id))})})})},St=i.section``,Ft=i.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,zt=i.ul`
  display: flex;
  flex-wrap: wrap;
`,G=i.li`
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
`,Lt=i.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
  }
`,Bt=i.button`
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
`,Y=({selected:e=!1,type:c="button",children:l,...o})=>t(Bt,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:c,...o,children:l}),At=i.form`
  position: relative;
  width: 608px;
  min-height: 885px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 100px;
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 20px 40px;
    width: 280px;
  }
`,Be=i.button`
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
    top: 20px;
    width: 34px;
    height: 34px;
  }
`,Ae=i.img`
  display: block;
  width: 20px;
  height: 20px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`,Te=i.h2`
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;

  @media (min-width: 320px) and (max-width: 767px) {
    line-height: 33px;
  }
`,Tt=i.p`
  /* display: flex; */
  /* padding-left: auto;
  padding-right: auto; */
  /* align-items: center; */
  /* justify-content: center; */
  /* text-align: center; */
  width: available;
  margin-left: auto;
  margin-right: auto;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 28px;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
    line-height: 23px;
  }
`,Dt=i.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 32px;
  }
`,ne=i.li`
  :not(:last-child) {
    margin-right: 12px;
    margin-bottom: 16px;
  }
  /* :first-child {
    margin-bottom: 16px;
  } */
  /* @media (min-width: 320px) and (max-width: 767px) {
  }
  :not(:last-child) {
    margin-right: 8px;
  }
  :first-child {
    margin-bottom: 16px;
  } */
`,Q=i.label`
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
  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 19px;
    padding: 8px 28px;
  }
`,oe=i.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${Q} {
    transition: ${e=>e.theme.transition};
    background: #f59256;
  }
`,De=i.ul`
  margin-bottom: 40px;
`,W=i.label`
  display: block;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,O=i.input`
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
`,B=i.li`
  margin-bottom: 28px;
`,je=i.ul`
  display: flex;
  justify-content: center;
`,V=i.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,X=i.button`
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
`;function jt(){return JSON.parse(window.localStorage.getItem("notice"))}const Pt=({onClose:e,isNext:c,onSubmit:l})=>{const o=jt(),[s,a]=d.useState(o?o.category:"sell"),[h,p]=d.useState(o?o.title:""),[r,N]=d.useState(o?o.name:""),[u,m]=d.useState(o?o.birthDate:""),[b,v]=d.useState(o?o.breed:"");d.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:h,breed:b,name:r,birthDate:u,category:s}))},[h,b,r,u,s]);const y=f=>{a(f.target.value)},M=f=>{const{value:z}=f.target;p(z)},k=f=>{N(f.target.value)},D=f=>{const{value:z}=f.target;if(Date.parse(z)>Date.now()){J();return}else m(z)},A=f=>{v(f.target.value)},j=()=>{l({title:h,breed:b,name:r,birthDate:u,category:s}),c()},J=()=>E.error("Wrong date!!!! Are you from the future??");return n(I,{children:[t(ee,{}),n(At,{children:[t(Be,{type:"button",onClick:e,children:t(Ae,{src:le})}),t(Te,{children:"Add pet"}),t(Tt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),n(Dt,{children:[n(ne,{children:[t(oe,{type:"radio",name:"category",checked:s==="lost-found",value:"lost-found",id:"lost/found",onChange:y}),t(Q,{htmlFor:"lost/found",children:"lost/found"})]}),n(ne,{children:[t(oe,{type:"radio",name:"category",checked:s==="for-free",value:"for-free",id:"inGoodHands",onChange:y}),t(Q,{htmlFor:"inGoodHands",children:"in good hands"})]}),n(ne,{children:[t(oe,{type:"radio",name:"category",checked:s==="sell",value:"sell",id:"sell",onChange:y}),t(Q,{htmlFor:"sell",children:"sell"})]})]}),n(De,{children:[t(B,{children:n(W,{children:[n("p",{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(O,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:h,onChange:M})]})}),t(B,{children:n(W,{children:["Name pet:",t(O,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:r,onChange:k})]})}),t(B,{children:n(W,{children:["Date of birth:",t(O,{type:"date",name:"birthDate",value:u,onChange:D})]})}),t(B,{children:n(W,{children:["Breed:",t(O,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:b,onChange:A})]})})]}),n(je,{children:[t(V,{children:t(X,{type:"button",onClick:e,children:"Cancel"})}),t(V,{children:t(X,{type:"button",onClick:j,children:"Next"})})]})]})]})},Wt=i.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 150px;
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 20px 40px;
  }
`,Ot=i.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,Et=i.ul`
  display: flex;
  margin-bottom: 40px;
`,ue=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 90px;
  }
`,be=i.img`
  width: 54px;
  margin-bottom: 20px;
`,re=i.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,ye=i.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  transition: ${e=>e.theme.transition};
  &:checked + ${re} {
    transition: ${e=>e.theme.transition};
    color: #f59256;
  }
`,_t=i.label`
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
`,Ht=i.button`
  width: 140px;
  height: 140px;
  margin-top: 12px;
  background: #fdf7f2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  :hover {
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
`,Ut=i.img`
  width: 47px;
  hegth: 47px;
`,Gt=i.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,Yt=i.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  // display: none;
`,Rt=i.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,Jt=i.textarea`
  margin-top: 12px;
  padding-left: 18px;
  padding-top: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  resize: vertical;
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
`;function qt(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const Kt=({onClose:e,isPrev:c,notice:l})=>{const o=qt(),s=g(w=>w.auth.token),a=d.useRef(null),[h,p]=d.useState(o?o.sex:""),[r,N]=d.useState(o?o.place:""),[u,m]=d.useState(o?o.price:""),[b,v]=d.useState(o?o.image:null),[y,M]=d.useState(o?o.imageName:null),[k,D]=d.useState(o?o.imageUrl:null),[A,j]=d.useState(o?o.comments:""),[J,f]=d.useState(!1),z=H();d.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:b,imageName:y,imageUrl:k,sex:h,place:r,price:u,comments:A}))});const L=w=>{p(w.target.value)},U=w=>{N(w.target.value)},C=w=>{m(w.target.value)},te=w=>{const{files:x}=w.target;if(x[0].size>5242880)return He();v(x[0]),x[0]&&M(x[0].name),x&&D(URL.createObjectURL(x[0]))},Pe=w=>{j(w.target.value)},We=()=>{a.current.click()},Oe=async w=>{f(!0),w.preventDefault();const x=new FormData;x.append("image",b),x.append("sex",h),x.append("place",r),x.append("price",u||1),x.append("comments",A),x.append("title",l.title),x.append("breed",l.breed),x.append("birthDate",l.birthDate),x.append("category",l.category),x.append("name",l.name);try{const he=await ve.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",x,{headers:{Authorization:`Bearer ${s}`}});localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),z(de()),Ee(),se(),e(),se()}catch(he){_e(he.response.data.message[0].message)}f(!1)},Ee=()=>{D(null),M(null),v(null),p(""),N(""),m(""),j("")},_e=w=>E.error(w),se=()=>E.success("Notice created!"),He=()=>E.error("The file must not exceed 5.2 mb!");return t(I,{children:J?t(Me,{}):n(I,{children:[t(ee,{}),n(Wt,{name:"newForm",onSubmit:Oe,children:[t(Be,{type:"button",onClick:e,children:t(Ae,{src:le})}),t(Te,{children:"Add pet"}),t(Ot,{children:"The sex*:"}),n(Et,{children:[n(ue,{children:[t(be,{src:Qe}),t(ye,{type:"radio",name:"sex",id:"male",checked:h==="male",value:"male",onChange:L}),t(re,{htmlFor:"male",children:"Male"})]}),n(ue,{children:[t(be,{src:Ve}),t(ye,{type:"radio",name:"sex",id:"female",checked:h==="female",value:"female",onChange:L}),t(re,{htmlFor:"female",children:"Female"})]})]}),n(De,{children:[t(B,{children:n(W,{children:[n("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(O,{type:"",placeholder:"Type location",name:"place",value:r,onChange:U})]})}),l.category==="sell"&&t(B,{children:n(W,{children:["Price",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:u,onChange:C})]})}),t(B,{children:n(_t,{children:["Load the pet’s image:",t(Ht,{type:"button",onClick:We,children:k?t(Gt,{src:k}):t(Ut,{src:Xe})}),t(Yt,{type:"file",name:"image",ref:a,accept:"image/*,.png,.jpg,.gif,.web",onChange:te})]})}),t(B,{children:n(Rt,{children:[n("p",{children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(Jt,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type comment",name:"comments",value:A,onChange:Pe})]})})]}),n(je,{children:[t(V,{children:t(X,{onClick:c,children:"Back"})}),t(V,{children:t(X,{type:"submit",children:"Done"})})]})]})]})})},Qt=({onClose:e})=>{const[c,l]=d.useState(!1),[o,s]=d.useState(null);return t(ce,{children:c?t(Kt,{onClose:e,isPrev:()=>{l(!1)},notice:o}):t(Pt,{onClose:e,isNext:()=>{l(!0)},onSubmit:r=>{s(r)}})})},Vt=i.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,Xt=()=>{const[e,c]=d.useState(!1);return n(I,{children:[t(Vt,{children:t("button",{onClick:()=>{c(!0)},children:" create notice"})}),e&&t(Qt,{onClose:()=>{c(!1)}})]})};function Zt({category:e}){const c=g(Z),l=Ye(),o=H(),s=g(_);d.useEffect(()=>{o(q("sell")),o(ae("sell")),l("/FindPet/sell",{replace:!0})},[o]);const a=r=>{o(q(r)),o(ae(r)),l(`/FindPet/${r}`,{replace:!0})},h=r=>{o(q(r)),o(de()),l(`/FindPet/${r}`,{replace:!0})},p=r=>{o(q(r)),o(R()),l(`/FindPet/${r}`,{replace:!0})};return t(St,{children:n(Lt,{children:[t(Ft,{children:n(zt,{children:[t(G,{children:t(Y,{selected:s===$.lostFound,onClick:()=>a($.lostFound),children:"lost/found"})}),t(G,{children:t(Y,{selected:s===$.free,onClick:()=>a($.free),children:"in good hands"})}),t(G,{children:t(Y,{selected:s===$.sell,onClick:()=>a($.sell),children:"sell"})}),c&&n(I,{children:[t(G,{children:t(Y,{selected:s===$.favorite,onClick:()=>p($.favorite),children:"favorite ads"})}),t(G,{children:t(Y,{selected:s===$.my,onClick:()=>h($.my),children:"my ads"})})]})]})}),t(Xt,{})]})})}function ei(e){return $e({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}function ti(e){return $e({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}i.section`
  margin-right: auto;
  margin-left: auto;
`;const ii=i(ti)`
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
`,ni=i.div`
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
`,oi=i.form`
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
`,we=i.button`
  padding: 0px 0px;
`,ai=i.div`
  margin-left: auto;
  margin-right: auto;
`,ri=i.h2`
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
`,li=i(ei)`
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
`,di=i.input`
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
`;function ci(){const[e,c]=d.useState(""),[l,o]=d.useState(null),s=H();g(Fe);const a=document.getElementById("input"),h=m=>{o(!0),console.log(l)},p=m=>{m.currentTarget===m.target&&(o(!1),e===""&&s(K("")))};return n(I,{children:[t(ri,{children:"Find your favorite pet"}),t(ai,{children:n(oi,{onSubmit:m=>{m.preventDefault(),s(K(e))},children:[t(di,{id:"input",type:"text",onChange:m=>{c(m.target.value)},value:e,placeholder:"Search",onFocus:h,onBlur:p}),l?null:t(we,{type:"submit",children:t(li,{})}),l?t(we,{onClick:m=>{m.preventDefault(),e!==""&&(s(K(e)),o(!1),p(m),a.blur()),e===""&&s(K(""))},children:t(ii,{})}):null]})})]})}const mi=()=>{const{categoryName:e}=Re();g(Ie),g(_);const c=g(Z),l=H();return d.useEffect(()=>{c&&l(R())},[l]),n(I,{children:[n(ni,{children:[t(ci,{}),t(Zt,{category:e})]}),n($t,{children:[t(It,{}),t(Je,{})]})]})};export{mi as default};
