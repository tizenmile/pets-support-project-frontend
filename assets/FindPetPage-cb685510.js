import{s as i,d as g,t as Z,r as s,e as H,v as ve,j as t,a as n,w as Q,x as de,Q as E,y as ee,z as Ne,B as Ce,C as ke,D as He,E as ae,G as le,F as M,A as $e,I as Ue,J,K as N,M as q,N as Ge,O as Ye}from"./index-2bb7042e.js";import{M as se,t as Re,s as Je,c as qe,T as Ke,A as Qe}from"./PetsData.styled-7467bbe6.js";import{T as Ve}from"./index.esm-3bfdb72f.js";import{G as Xe}from"./iconBase-aa6ca338.js";const Me=e=>e.notices.items,Ie=e=>e.notices.favNotices,Se=e=>e.search,_=e=>e.filters.status,Ze=e=>e.notices.isLoading,et="/pets-support-project-frontend/assets/male-a0f02fb1.svg",tt="/pets-support-project-frontend/assets/female-147e65d7.svg",it="/pets-support-project-frontend/assets/plus-94d63496.svg",ze="/pets-support-project-frontend/assets/heart-4779bb70.svg",Fe="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",nt=i.li`
  /* position: relative; */
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,ot=i.div`
  display: flex;
  flex-direction: column;
  height: 612px;
`,at=i.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,rt=i.div`
  position: relative;
`,dt=i.p`
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
`,lt=i.button`
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
`,st=i.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,ct=i.ul`
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
`,he=i.button`
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
`;const pt=i.div`
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
`,ht=i.button`
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
`,mt=i.img`
  display: block;
  width: 20px;
  height: 20px;
`,xt=i.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,ft=i.div`
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
`,gt=i.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,ut=i.p`
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
`,bt=i.h2`
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
`,k=i.p`
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
`,L=i.p`
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
`,wt=i.ul`
  //   background-color: red;
`,$=i.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,yt=i.p`
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
`,vt=i.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,Nt=i.div`
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
`,Ct=i.button`
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
`,kt=i.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,$t=i.a`
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
`,Mt=({onClose:e,itemId:l,isFavorite:r})=>{const o=g(Z),c=g(_),[a,h]=s.useState(null),[d,p]=s.useState(r),y=H(),b=()=>{p(x=>!x),y(d?Ne(l):Ce(l))},m=()=>t("div",{children:t(ke,{to:"/login",children:"You need to log in"})});if(s.useEffect(()=>{ve.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${l}`).then(x=>{const I=x.data.data;h(I)})},[]),!!a)return t(se,{children:n(pt,{children:[t(ht,{onClick:()=>{e(d),c==="fav-notice"&&y(Q())},children:t(mt,{src:de,alt:"close_menu_icon"})}),n(xt,{children:[n(ft,{children:[t(gt,{src:a.notice.photo}),t(ut,{children:a.notice.category})]}),n("div",{children:[t(bt,{children:a.notice.title}),n(wt,{children:[a.notice.name&&n($,{children:[t(k,{children:"Name:"}),t(L,{children:a.notice.name})]}),a.notice.birthDate&&n($,{children:[t(k,{children:"Birthday:"}),t(L,{children:Re(a.notice.birthDate)})]}),a.notice.breed&&n($,{children:[t(k,{children:"Breed:"}),t(L,{children:a.notice.breed})]}),n($,{children:[t(k,{children:"Place:"}),t(L,{children:a.notice.place})]}),n($,{children:[t(k,{children:"The sex:"}),t(L,{children:a.notice.sex})]}),n($,{children:[t(k,{children:"UserName:"}),t(L,{children:a.user.name})]}),n($,{children:[t(k,{children:"Email:"}),t(me,{href:"mailto:"+a.user.email,children:a.user.email})]}),n($,{children:[t(k,{children:"Phone:"}),t(me,{href:"tel:"+a.user.mobile,children:a.user.mobile})]}),a.notice.category==="sell"&&n($,{children:[t(k,{children:"Price:"}),t(L,{children:`${a.notice.price} ₴`})]})]})]})]}),n(yt,{children:["Comments",n(vt,{children:[": ",a.notice.comments]})]}),n(Nt,{children:[n(Ct,{onClick:()=>{o?b():E(m)},children:[d?"del from":"add to",t(kt,{src:d?Fe:ze,alt:d?"heartFull":"heart"})]}),t(ee,{}),t($t,{href:"tel:"+a.user.mobile,children:"contact"})]}),t("link",{})]})})},It=i.div`
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
`,St=i.div`
display: flex;
justify-content: center;
margin: 20px 0 ;
`,xe=i.button`
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
`,zt=({onClose:e,deleteNotice:l})=>t(se,{children:n(It,{children:[t("h3",{style:{textAlign:"center"},children:"Are you sure?"}),n(St,{children:[t(xe,{onClick:e,children:"Cancel"}),t(xe,{onClick:l,children:"Delete notice"})]})]})}),fe=({item:e})=>{const l=g(Ie),r=g(Z),o=g(_),c=g(Je),[a,h]=s.useState(!1),[d,p]=s.useState(!1),[y,b]=s.useState(!1),m=g(_),x=H(),I=()=>{h(!0)},C=()=>{p(v=>!v)},T=v=>{h(!1),b(v)},S=l.reduce((v,te)=>(v.push(te._id),v),[]);s.useEffect(()=>{b(S.includes(e._id))},[l]);const D=async()=>{b(v=>!v),await x(y?Ne(e._id):Ce(e._id)),m==="fav-notice"&&x(Q())},z=async()=>{const v=["sell","lost-found","for-free"];await x(He(e._id)),v.includes(o)?x(ae(o)):x(o==="own-notices"?le():Q())},j=()=>t("div",{children:t(ke,{to:"/login",children:"You need to log in"})}),f=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),F=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let A;f<1?A="Less than a year":f>15?A="very old pet":f>=1&&f<=15?A=F[f-1]:A="unknown";const U=e.category;return n(nt,{children:[n(ot,{children:[n("div",{style:{flexGrow:1},children:[n(rt,{children:[t(at,{src:e.photo,alt:e.title}),n(dt,{children:[U==="sell"&&"sell",U==="for-free"&&"in good hands",U==="lost-found"&&"lost/found"]}),t(lt,{onClick:()=>{r?D():E(j)},children:y?t("img",{src:Fe,alt:"heartFull"}):t("img",{src:ze,alt:"heart"})}),t(ee,{})]}),t(st,{style:{width:"280px"},children:e.title}),n(ct,{children:[e.breed&&n(ie,{children:[t(P,{style:{width:"50px"},children:"Breed:"}),t(P,{style:{marginLeft:"40px"},children:e.breed})]}),n(ie,{children:[t(P,{style:{width:"50px"},children:"Place:"}),t(P,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&n(ie,{children:[t(P,{style:{width:"50px"},children:"Age:"}),t(P,{style:{marginLeft:"40px"},children:A})]})]})]}),t(he,{style:e.userId!==c._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:I,children:"Learn more"}),e.userId==c._id&&n(he,{onClick:C,children:["Delete",t(qe,{width:"16px",height:"17px"})]})]}),a&&t(Mt,{itemId:e._id,isFavorite:y,onClose:T}),d&&t(zt,{onClose:C,deleteNotice:z})]})},Ft=i.ul`
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
`,ge=i.ul`
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
`,At=()=>{const e=g(Me),l=g(Ie),r=g(_),c=g(Se).toLowerCase(),a=g(Ze);let h,d;return e!==void 0&&e.length>0&&(h=e.filter(p=>p.title.toLowerCase().includes(c))),l!==void 0&&l.length>0&&(d=l.filter(p=>p.title.toLowerCase().includes(c))),t(M,{children:a?t($e,{}):r!=="fav-notice"?t(M,{children:h!==void 0&&h.length>=1&&t(ge,{children:h.map(p=>t(fe,{item:p},p._id))})}):t(M,{children:d!==void 0&&d.length>=1?t(ge,{children:d.map(p=>t(fe,{item:p},p._id))}):t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any favorite ads"})})})},Bt=i.section``,Lt=i.div`
  @media ${e=>e.theme.media.desktop} {
    margin-right: auto;
  }
`,Tt=i.ul`
  display: flex;
  flex-wrap: wrap;
`,G=i.li`
  &:not(:last-child) {
    margin-right: 12px;
  }
  @media ${e=>e.theme.media.mobileMax} {
    &:nth-child(-n + 3) {
      margin-bottom: 12px;
    }
  }
  @media ${e=>e.theme.media.tablet} {
    &:nth-child(-n + 3) {
      margin-bottom: 0px;
    }
  }
`,Dt=i.div`
  @media ${e=>e.theme.media.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,jt=i.button`
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  background-color: ${e=>e.theme.colors.white};
  color: ${e=>e.theme.colors.mainText};
  border: solid 2px rgba(245, 146, 86, 1);
  border-radius: 40px;
  font-family: ${e=>e.theme.fonts.main};
  line-height: ${e=>e.theme.lineHeights.body};
  &:hover,
  &:active {
    color: #fff;

    border: solid 2px ${e=>e.theme.colors.hover};
    background-color: ${e=>e.theme.colors.hover} !important;
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media ${e=>e.theme.media.mobileMax} {
    font-size: ${e=>e.theme.fontSizes.xs};
    padding: 8px 28px;
  }
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.xm};
    padding: 10px 28px;
  }
`,Y=({selected:e=!1,type:l="button",children:r,...o})=>t(jt,{style:{backgroundColor:e&&"rgba(245,146,86,1)",color:e&&"#fff"},type:l,...o,children:r}),Pt=i.form`
  position: relative;
  width: 608px;
  min-height: 885px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 100px;
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 40px 20px 28px 20px;
    width: 280px;
    margin-top: 200px;
  }
`,Ae=i.button`
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
`,Be=i.img`
  display: block;
  width: 20px;
  height: 20px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`,Le=i.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 24px;
    line-height: 33px;
  }
`,Wt=i.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 20px;
  }
`,Ot=i.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    /* margin-bottom: 32px; */
  }
`,ne=i.li`
  :not(:last-child) {
    margin-right: 12px;
    margin-bottom: 16px;
    @media (min-width: 320px) and (max-width: 767px) {
      margin-bottom: 0px;
    }
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
`,K=i.label`
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
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 19px;
    padding: 8px 28px;
  }
`,oe=i.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${K} {
    color: #fff;
    transition: ${e=>e.theme.transition};
    background: #f59256;
  }
`,Te=i.ul`
  margin-bottom: 40px;
`,W=i.label`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;

  color: #000000;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 18px;
  }
`,O=i.input`
  height: 48px;
  width: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-top: 12px;
  padding-left: 16px;
  padding-right: 16px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  ::placeholder {
    margin: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: rgba(17, 17, 17, 0.6);
  }
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 8px;
  }
`,B=i.li`
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 16px;
  }
`,De=i.ul`
  display: flex;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column-reverse;
    margin-left: auto;
    margin-right: auto;
  }
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
  @media (min-width: 320px) and (max-width: 767px) {
    width: 240px;
    margin-bottom: 12px;
  }
`;function Et(){return JSON.parse(window.localStorage.getItem("notice"))}const _t=({onClose:e,isNext:l,onSubmit:r})=>{const o=Et(),[c,a]=s.useState(o?o.category:"sell"),[h,d]=s.useState(o?o.title:""),[p,y]=s.useState(o?o.name:""),[b,m]=s.useState(o?o.birthDate:""),[x,I]=s.useState(o?o.breed:"");s.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:h,breed:x,name:p,birthDate:b,category:c}))},[h,x,p,b,c]);const C=f=>{a(f.target.value)},T=f=>{const{value:F}=f.target;d(F)},S=f=>{y(f.target.value)},D=f=>{const{value:F}=f.target;if(Date.parse(F)>Date.now()){R();return}else m(F)},z=f=>{I(f.target.value)},j=()=>{r({title:h,breed:x,name:p,birthDate:b,category:c}),l()},R=()=>E.error("Wrong date!!!! Are you from the future??");return n(M,{children:[t(ee,{}),n(Pt,{children:[t(Ae,{type:"button",onClick:e,children:t(Be,{src:de})}),t(Le,{children:"Add pet"}),t(Wt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),n(Ot,{children:[n(ne,{children:[t(oe,{type:"radio",name:"category",checked:c==="lost-found",value:"lost-found",id:"lost/found",onChange:C}),t(K,{htmlFor:"lost/found",children:"lost/found"})]}),n(ne,{children:[t(oe,{type:"radio",name:"category",checked:c==="for-free",value:"for-free",id:"inGoodHands",onChange:C}),t(K,{htmlFor:"inGoodHands",children:"in good hands"})]}),n(ne,{children:[t(oe,{type:"radio",name:"category",checked:c==="sell",value:"sell",id:"sell",onChange:C}),t(K,{htmlFor:"sell",children:"sell"})]})]}),n(Te,{children:[t(B,{children:n(W,{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:h,onChange:T})]})}),t(B,{children:n(W,{children:["Name pet:",t(O,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:p,onChange:S})]})}),t(B,{children:n(W,{children:["Date of birth:",t(O,{type:"date",name:"birthDate",value:b,onChange:D})]})}),t(B,{children:n(W,{children:["Breed:",t(O,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:x,onChange:z})]})})]}),n(De,{children:[t(V,{children:t(X,{type:"button",onClick:e,children:"Cancel"})}),t(V,{children:t(X,{style:{color:"#fff",backgroundColor:"#F59256"},type:"button",onClick:j,children:"Next"})})]})]})]})},Ht=i.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 100px;
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 40px 20px 28px 20px;
    width: 280px;
    margin-top: 200px;
  }
`,Ut=i.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,Gt=i.ul`
  display: flex;
  margin-bottom: 40px;
`,ue=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 80px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    :not(:last-child) {
      margin-right: 40px;
    }
  }
`,be=i.img`
  width: 60px;
  margin-bottom: 20px;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 40px;
    margin-bottom: 12px;
  }
`,re=i.label`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 18px;
  }
`,we=i.input`
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
`,Yt=i.label`
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
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 18px;
  }
`,Rt=i.button`
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
  @media (min-width: 320px) and (max-width: 767px) {
    width: 116px;
    height: 116px;
    margin-bottom: 28px;
  }
`,Jt=i.img`
  width: 47px;
  height: 47px;
`,qt=i.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,Kt=i.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: none;
`,Qt=i.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,Vt=i.textarea`
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
  @media (min-width: 320px) and (max-width: 767px) {
    height: 40px;
    padding-top: 6px;
  }
`;function Xt(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const Zt=({onClose:e,isPrev:l,notice:r})=>{const o=Xt(),c=g(w=>w.auth.token),a=s.useRef(null),[h,d]=s.useState(o?o.sex:""),[p,y]=s.useState(o?o.place:""),[b,m]=s.useState(o?o.price:""),[x,I]=s.useState(o?o.image:null),[C,T]=s.useState(o?o.imageName:null),[S,D]=s.useState(o?o.imageUrl:null),[z,j]=s.useState(o?o.comments:""),[R,f]=s.useState(!1),F=H();s.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:x,imageName:C,imageUrl:S,sex:h,place:p,price:b,comments:z}))},[z,x,C,S,h,p,b]);const A=w=>{d(w.target.value)},U=w=>{y(w.target.value)},v=w=>{m(w.target.value)},te=w=>{const{files:u}=w.target;if(u[0].size>5242880)return _e();I(u[0]),u[0]&&T(u[0].name),u&&D(URL.createObjectURL(u[0]))},je=w=>{j(w.target.value)},Pe=()=>{a.current.click()},We=async w=>{f(!0),w.preventDefault();const u=new FormData;u.append("image",x),u.append("sex",h),u.append("place",p),u.append("price",b||1),u.append("comments",z),u.append("title",r.title),u.append("breed",r.breed),u.append("birthDate",r.birthDate),u.append("category",r.category),u.append("name",r.name);try{const pe=await ve.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",u,{headers:{Authorization:`Bearer ${c}`}});F(le()),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Oe(),ce(),e(),ce()}catch(pe){Ee(pe.response.data.message[0].message)}f(!1)},Oe=()=>{D(null),T(null),I(null),d(""),y(""),m(""),j("")},Ee=w=>E.error(w),ce=()=>E.success("Notice created!"),_e=()=>E.error("The file must not exceed 5.2 mb!");return n(M,{children:[t(ee,{}),R?t($e,{}):t(M,{children:n(Ht,{name:"newForm",onSubmit:We,children:[t(Ae,{type:"button",onClick:e,children:t(Be,{src:de})}),t(Le,{children:"Add pet"}),t(Ut,{children:"The sex*:"}),n(Gt,{children:[n(ue,{children:[t(we,{type:"radio",name:"sex",id:"male",checked:h==="male",value:"male",onChange:A}),n(re,{htmlFor:"male",children:[t(be,{src:et}),"Male"]})]}),n(ue,{children:[t(we,{type:"radio",name:"sex",id:"female",checked:h==="female",value:"female",onChange:A}),n(re,{htmlFor:"female",children:[t(be,{src:tt}),"Female"]})]})]}),n(Te,{children:[t(B,{children:n(W,{children:[n("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(O,{type:"",placeholder:"Type location",name:"place",value:p,onChange:U})]})}),r.category==="sell"&&t(B,{children:n(W,{children:["Price",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:b,onChange:v})]})}),t(B,{children:n(Yt,{children:["Load the pet’s image:",t(Rt,{type:"button",onClick:Pe,children:S?t(qt,{src:S}):t(Jt,{src:it})}),t(Kt,{type:"file",name:"image",ref:a,accept:"image/*,.png,.jpg,.gif,.web",onChange:te})]})}),t(B,{children:n(Qt,{children:[n("p",{style:{fontSize:"18px"},children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(Vt,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type breed",name:"comments",value:z,onChange:je})]})})]}),n(De,{children:[t(V,{children:t(X,{onClick:l,children:"Back"})}),t(V,{children:t(X,{style:{color:"#fff",backgroundColor:"#F59256"},type:"submit",children:"Done"})})]})]})})]})},ei=({onClose:e})=>{const[l,r]=s.useState(!1),[o,c]=s.useState(null);return t(se,{children:l?t(Zt,{onClose:e,isPrev:()=>{r(!1)},notice:o}):t(_t,{onClose:e,isNext:()=>{r(!0)},onSubmit:p=>{c(p)}})})},ti=i.div`
  min-width: 132px;
  @media (max-width: 767px) {
    position: fixed;
    z-index: 999;
    right: 20px;
    bottom: 100px;
    min-width: fit-content;
  }
`,ii=i.button`
  display: flex;
  cursor: pointer;
  width: 44px;
  height: 44px;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: ${e=>e.theme.radii.round};
  background-color: ${e=>e.theme.colors.accent};
  color: ${e=>e.theme.colors.white};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.1);
  }
  :hover:before {
    left: 100%;
    @media ${e=>e.theme.media.mobileMax} {
      visibility: visible;
    }
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    @media ${e=>e.theme.media.mobileMax} {
      visibility: hidden;
    }
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }
  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
`,ni=i.p`
  margin-right: 15px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xm};
  font-family: ${e=>e.theme.fonts.main};
  @media ${e=>e.theme.media.desktop} {
    margin-right: 12px;
  }
  @media (max-width: 767.98px) {
    display: none;
  }
`,oi=i.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
  @media (min-width: 768px) {
    display: none;
  }
`,ai=i(Ke)`
  @media (max-width: 767.98px) {
    width: 22px;
    height: 22px;
  }
`,ri=()=>{const[e,l]=s.useState(!1);return n(ti,{children:[n(Qe,{children:[t(ni,{children:"Add pet"}),t(ii,{onClick:()=>{l(!0)},children:n("div",{children:[t(ai,{}),t(oi,{children:"Add pet"})]})})]}),e&&t(ei,{onClose:()=>{l(!1)}})]})};function di(){const e=g(Z),l=Ue(),r=H(),o=g(_);s.useEffect(()=>{r(J("sell")),r(ae("sell")),l("/FindPet/sell",{replace:!0})},[r]);const c=d=>{r(J(d)),r(ae(d)),l(`/FindPet/${d}`,{replace:!0})},a=d=>{r(J(d)),r(le()),l(`/FindPet/${d}`,{replace:!0})},h=d=>{r(J(d)),r(Q()),l(`/FindPet/${d}`,{replace:!0})};return t(Bt,{children:n(Dt,{children:[t(Lt,{children:n(Tt,{children:[t(G,{children:t(Y,{selected:o===N.lostFound,onClick:()=>c(N.lostFound),children:"lost/found"})}),t(G,{children:t(Y,{selected:o===N.free,onClick:()=>c(N.free),children:"in good hands"})}),t(G,{children:t(Y,{selected:o===N.sell,onClick:()=>c(N.sell),children:"sell"})}),e&&n(M,{children:[t(G,{children:t(Y,{selected:o===N.favorite,onClick:()=>h(N.favorite),children:"favorite ads"})}),t(G,{children:t(Y,{selected:o===N.my,onClick:()=>a(N.my),children:"my ads"})})]})]})}),e&&t(ri,{})]})})}function li(e){return Xe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}i.section`
  margin-right: auto;
  margin-left: auto;
`;const si=i(li)`
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
  @media ${e=>e.theme.media.mobileMax} {
    width: 20px;
    height: 20px;
  }
  @media ${e=>e.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`,ci=i.div`
  margin: 0 0;

  padding-left: 15px;
  padding-right: 15px;
  @media ${e=>e.theme.media.mobileMax} {
    max-width: 768px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 22px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
  }

  @media ${e=>e.theme.media.tablet} {

    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
    margin-bottom: 60px;
    margin-right: auto;
    margin-left: auto;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-right: auto;
    margin-left: auto;
    max-width: 1248px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 39px;
    margin-bottom: 60px;
  }
`,pi=i.form`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media ${e=>e.theme.media.mobileMax} {
    max-width: 280px;
    height: 40px;
    margin-bottom: 28px;
    font-size: ${e=>e.theme.fontSizes.s};
  }
  @media ${e=>e.theme.media.tablet} {
    width: 608px;
    height: 44px;
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.xm};
  }
`,ye=i.button`
  padding: 0px 0px;
`,hi=i.div`
  margin-left: auto;
  margin-right: auto;
`,mi=i.h2`
  font-family: ${e=>e.theme.fonts.main};
  line-height: ${e=>e.theme.lineHeights.titleSection};
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.mainText};
  text-align: center;
  @media ${e=>e.theme.media.mobileMax} {
    font-size: ${e=>e.theme.fontSizes.m};
    margin-bottom: 28px;
  }
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.xxxl};
    margin-bottom: 40px;
  }
`,xi=i(Ve)`
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
  @media ${e=>e.theme.media.mobileMax} {
    width: 17px;
    height: 17px;
  }
  @media ${e=>e.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`,fi=i.input`
  outline: none;
  width: 100%;
  height: 100%;
  font-family: ${e=>e.theme.fonts.main};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  color: ${e=>e.theme.colors.searchText};
  border-radius: 40px;
  border: solid 2px #fff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  &:hover,
  &:focus,
  &:active {
    border: solid 2px ${e=>e.theme.colors.accent};
  }

  @media ${e=>e.theme.media.mobileMax} {
    padding-left: 12px;
  }
  @media ${e=>e.theme.media.tablet} {
    padding-left: 20px;
  }
`;function gi(){const[e,l]=s.useState(""),[r,o]=s.useState(null),c=H();g(Se);const a=document.getElementById("input"),h=m=>{o(!0)},d=m=>{m.currentTarget===m.target&&(o(!1),e===""&&c(q("")))};return n(M,{children:[t(mi,{children:"Find your favorite pet"}),t(hi,{children:n(pi,{onSubmit:m=>{m.preventDefault(),c(q(e))},children:[t(fi,{id:"input",type:"text",onChange:m=>{l(m.target.value)},value:e,placeholder:"Search",onFocus:h,onBlur:d}),r?null:t(ye,{type:"submit",children:t(xi,{})}),r?t(ye,{onClick:m=>{m.preventDefault(),e!==""&&(c(q(e)),o(!1),d(m),a.blur()),e===""&&c(q(""))},children:t(si,{})}):null]})})]})}const vi=()=>(Ge(),g(Me),g(_),g(Z),H(),n(M,{children:[n(ci,{children:[t(gi,{}),t(di,{})]}),n(Ft,{children:[t(At,{}),t(Ye,{})]})]}));export{vi as default};
