import{s as i,d as g,t as Z,r as s,e as H,v as ve,j as t,a as n,w as Q,x as de,Q as E,y as ee,z as Ne,B as ke,C as Ce,D as Ue,E as ae,G as le,F as M,A as $e,I as Ge,J,K as N,M as q,N as Ye,O as Re}from"./index-861c1763.js";import{M as se,t as Je,s as qe,c as Ke,T as Qe,A as Ve}from"./PetsData.styled-7144f340.js";import{G as Me}from"./iconBase-fc02f885.js";const Ie=e=>e.notices.items,ze=e=>e.notices.favNotices,Se=e=>e.search,_=e=>e.filters.status,Xe=e=>e.notices.isLoading,Ze="/pets-support-project-frontend/assets/male-a0f02fb1.svg",et="/pets-support-project-frontend/assets/female-147e65d7.svg",tt="/pets-support-project-frontend/assets/plus-94d63496.svg",Fe="/pets-support-project-frontend/assets/heart-4779bb70.svg",Ae="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",it=i.li`
  /* position: relative; */
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,nt=i.div`
  display: flex;
  flex-direction: column;
  height: 612px;
`,ot=i.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,at=i.div`
  position: relative;
`,rt=i.p`
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
`,dt=i.button`
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
`,lt=i.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,st=i.ul`
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
`;const ct=i.div`
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
`,pt=i.button`
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
`,ht=i.img`
  display: block;
  width: 20px;
  height: 20px;
`,mt=i.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,xt=i.div`
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
`,ft=i.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,gt=i.p`
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
`,ut=i.h2`
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
`,C=i.p`
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
`,bt=i.ul`
  //   background-color: red;
`,$=i.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,wt=i.p`
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
`,yt=i.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,vt=i.div`
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
`,Nt=i.button`
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
`,Ct=i.a`
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
`,$t=({onClose:e,itemId:c,isFavorite:d})=>{const o=g(Z),l=g(_),[a,p]=s.useState(null),[h,r]=s.useState(d),y=H(),b=()=>{r(x=>!x),y(h?Ne(c):ke(c))},m=()=>t("div",{children:t(Ce,{to:"/login",children:"You need to log in"})});if(s.useEffect(()=>{ve.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${c}`).then(x=>{const I=x.data.data;p(I)})},[]),!!a)return t(se,{children:n(ct,{children:[t(pt,{onClick:()=>{e(h),l==="fav-notice"&&y(Q())},children:t(ht,{src:de,alt:"close_menu_icon"})}),n(mt,{children:[n(xt,{children:[t(ft,{src:a.notice.photo}),t(gt,{children:a.notice.category})]}),n("div",{children:[t(ut,{children:a.notice.title}),n(bt,{children:[a.notice.name&&n($,{children:[t(C,{children:"Name:"}),t(L,{children:a.notice.name})]}),a.notice.birthDate&&n($,{children:[t(C,{children:"Birthday:"}),t(L,{children:Je(a.notice.birthDate)})]}),a.notice.breed&&n($,{children:[t(C,{children:"Breed:"}),t(L,{children:a.notice.breed})]}),n($,{children:[t(C,{children:"Place:"}),t(L,{children:a.notice.place})]}),n($,{children:[t(C,{children:"The sex:"}),t(L,{children:a.notice.sex})]}),n($,{children:[t(C,{children:"UserName:"}),t(L,{children:a.user.name})]}),n($,{children:[t(C,{children:"Email:"}),t(me,{href:"mailto:"+a.user.email,children:a.user.email})]}),n($,{children:[t(C,{children:"Phone:"}),t(me,{href:"tel:"+a.user.mobile,children:a.user.mobile})]}),a.notice.category==="sell"&&n($,{children:[t(C,{children:"Price:"}),t(L,{children:`${a.notice.price}$`})]})]})]})]}),n(wt,{children:["comments",n(yt,{children:[": ",a.notice.comments]})]}),n(vt,{children:[n(Nt,{onClick:()=>{o?b():E(m)},children:[h?"del from":"add to",t(kt,{src:h?Ae:Fe,alt:h?"heartFull":"heart"})]}),t(ee,{}),t(Ct,{href:"tel:"+a.user.mobile,children:"contact"})]}),t("link",{})]})})},Mt=i.div`
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
`,It=i.div`
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
`,zt=({onClose:e,deleteNotice:c})=>t(se,{children:n(Mt,{children:[t("h3",{style:{textAlign:"center"},children:"Are you sure?"}),n(It,{children:[t(xe,{onClick:e,children:"Cancel"}),t(xe,{onClick:c,children:"Delete notice"})]})]})}),fe=({item:e})=>{const c=g(ze),d=g(Z),o=g(_),l=g(qe),[a,p]=s.useState(!1),[h,r]=s.useState(!1),[y,b]=s.useState(!1),m=g(_),x=H(),I=()=>{p(!0)},k=()=>{r(v=>!v)},T=v=>{p(!1),b(v)},z=c.reduce((v,te)=>(v.push(te._id),v),[]);s.useEffect(()=>{b(z.includes(e._id))},[c]);const D=async()=>{b(v=>!v),await x(y?Ne(e._id):ke(e._id)),m==="fav-notice"&&x(Q())},S=async()=>{const v=["sell","lost-found","for-free"];await x(Ue(e._id)),v.includes(o)?x(ae(o)):x(o==="own-notices"?le():Q())},j=()=>t("div",{children:t(Ce,{to:"/login",children:"You need to log in"})}),f=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),F=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let A;f<1?A="Less than a year":f>15?A="very old pet":f>=1&&f<=15?A=F[f-1]:A="unknown";const U=e.category;return n(it,{children:[n(nt,{children:[n("div",{style:{flexGrow:1},children:[n(at,{children:[t(ot,{src:e.photo,alt:e.title}),n(rt,{children:[U==="sell"&&"sell",U==="for-free"&&"in good hands",U==="lost-found"&&"lost/found"]}),t(dt,{onClick:()=>{d?D():E(j)},children:y?t("img",{src:Ae,alt:"heartFull"}):t("img",{src:Fe,alt:"heart"})}),t(ee,{})]}),t(lt,{style:{width:"280px"},children:e.title}),n(st,{children:[e.breed&&n(ie,{children:[t(P,{style:{width:"50px"},children:"Breed:"}),t(P,{style:{marginLeft:"40px"},children:e.breed})]}),n(ie,{children:[t(P,{style:{width:"50px"},children:"Place:"}),t(P,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&n(ie,{children:[t(P,{style:{width:"50px"},children:"Age:"}),t(P,{style:{marginLeft:"40px"},children:A})]})]})]}),t(he,{style:e.userId!==l._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:I,children:"Learn more"}),e.userId==l._id&&n(he,{onClick:k,children:["Delete",t(Ke,{width:"16px",height:"17px"})]})]}),a&&t($t,{itemId:e._id,isFavorite:y,onClose:T}),h&&t(zt,{onClose:k,deleteNotice:S})]})},St=i.ul`
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
`,Ft=()=>{const e=g(Ie),c=g(ze),d=g(_),l=g(Se).toLowerCase(),a=g(Xe);let p,h;return e!==void 0&&e.length>0&&(p=e.filter(r=>r.title.toLowerCase().includes(l))),c!==void 0&&c.length>0&&(h=c.filter(r=>r.title.toLowerCase().includes(l))),t(M,{children:a?t($e,{}):d!=="fav-notice"?t(M,{children:p!==void 0&&p.length>=1&&t(ge,{children:p.map(r=>t(fe,{item:r},r._id))})}):t(M,{children:h!==void 0&&h.length>=1?t(ge,{children:h.map(r=>t(fe,{item:r},r._id))}):t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any favorite ads"})})})},At=i.section``,Bt=i.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,Lt=i.ul`
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
`,Tt=i.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,Dt=i.button`
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
`,Y=({selected:e=!1,type:c="button",children:d,...o})=>t(Dt,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:c,...o,children:d}),jt=i.form`
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
`,Le=i.img`
  display: block;
  width: 20px;
  height: 20px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`,Te=i.h2`
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
`,Pt=i.p`
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
`,Wt=i.ul`
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
`,De=i.ul`
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
`,je=i.ul`
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
`;function Ot(){return JSON.parse(window.localStorage.getItem("notice"))}const Et=({onClose:e,isNext:c,onSubmit:d})=>{const o=Ot(),[l,a]=s.useState(o?o.category:"sell"),[p,h]=s.useState(o?o.title:""),[r,y]=s.useState(o?o.name:""),[b,m]=s.useState(o?o.birthDate:""),[x,I]=s.useState(o?o.breed:"");s.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:p,breed:x,name:r,birthDate:b,category:l}))},[p,x,r,b,l]);const k=f=>{a(f.target.value)},T=f=>{const{value:F}=f.target;h(F)},z=f=>{y(f.target.value)},D=f=>{const{value:F}=f.target;if(Date.parse(F)>Date.now()){R();return}else m(F)},S=f=>{I(f.target.value)},j=()=>{d({title:p,breed:x,name:r,birthDate:b,category:l}),c()},R=()=>E.error("Wrong date!!!! Are you from the future??");return n(M,{children:[t(ee,{}),n(jt,{children:[t(Be,{type:"button",onClick:e,children:t(Le,{src:de})}),t(Te,{children:"Add pet"}),t(Pt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),n(Wt,{children:[n(ne,{children:[t(oe,{type:"radio",name:"category",checked:l==="lost-found",value:"lost-found",id:"lost/found",onChange:k}),t(K,{htmlFor:"lost/found",children:"lost/found"})]}),n(ne,{children:[t(oe,{type:"radio",name:"category",checked:l==="for-free",value:"for-free",id:"inGoodHands",onChange:k}),t(K,{htmlFor:"inGoodHands",children:"in good hands"})]}),n(ne,{children:[t(oe,{type:"radio",name:"category",checked:l==="sell",value:"sell",id:"sell",onChange:k}),t(K,{htmlFor:"sell",children:"sell"})]})]}),n(De,{children:[t(B,{children:n(W,{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:p,onChange:T})]})}),t(B,{children:n(W,{children:["Name pet:",t(O,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:r,onChange:z})]})}),t(B,{children:n(W,{children:["Date of birth:",t(O,{type:"date",name:"birthDate",value:b,onChange:D})]})}),t(B,{children:n(W,{children:["Breed:",t(O,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:x,onChange:S})]})})]}),n(je,{children:[t(V,{children:t(X,{type:"button",onClick:e,children:"Cancel"})}),t(V,{children:t(X,{style:{color:"#fff",backgroundColor:"#F59256"},type:"button",onClick:j,children:"Next"})})]})]})]})},_t=i.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 150px;
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 40px 20px 28px 20px;
    width: 280px;
  }
`,Ht=i.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,Ut=i.ul`
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
`,Gt=i.label`
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
`,Yt=i.button`
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
`,Rt=i.img`
  width: 47px;
  height: 47px;
`,Jt=i.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,qt=i.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: none;
`,Kt=i.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,Qt=i.textarea`
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
`;function Vt(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const Xt=({onClose:e,isPrev:c,notice:d})=>{const o=Vt(),l=g(w=>w.auth.token),a=s.useRef(null),[p,h]=s.useState(o?o.sex:""),[r,y]=s.useState(o?o.place:""),[b,m]=s.useState(o?o.price:""),[x,I]=s.useState(o?o.image:null),[k,T]=s.useState(o?o.imageName:null),[z,D]=s.useState(o?o.imageUrl:null),[S,j]=s.useState(o?o.comments:""),[R,f]=s.useState(!1),F=H();s.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:x,imageName:k,imageUrl:z,sex:p,place:r,price:b,comments:S}))},[S,x,k,z,p,r,b]);const A=w=>{h(w.target.value)},U=w=>{y(w.target.value)},v=w=>{m(w.target.value)},te=w=>{const{files:u}=w.target;if(u[0].size>5242880)return He();I(u[0]),u[0]&&T(u[0].name),u&&D(URL.createObjectURL(u[0]))},Pe=w=>{j(w.target.value)},We=()=>{a.current.click()},Oe=async w=>{f(!0),w.preventDefault();const u=new FormData;u.append("image",x),u.append("sex",p),u.append("place",r),u.append("price",b||1),u.append("comments",S),u.append("title",d.title),u.append("breed",d.breed),u.append("birthDate",d.birthDate),u.append("category",d.category),u.append("name",d.name);try{const pe=await ve.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",u,{headers:{Authorization:`Bearer ${l}`}});F(le()),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Ee(),ce(),e(),ce()}catch(pe){_e(pe.response.data.message[0].message)}f(!1)},Ee=()=>{D(null),T(null),I(null),h(""),y(""),m(""),j("")},_e=w=>E.error(w),ce=()=>E.success("Notice created!"),He=()=>E.error("The file must not exceed 5.2 mb!");return t(M,{children:R?t($e,{}):n(M,{children:[t(ee,{}),n(_t,{name:"newForm",onSubmit:Oe,children:[t(Be,{type:"button",onClick:e,children:t(Le,{src:de})}),t(Te,{children:"Add pet"}),t(Ht,{children:"The sex*:"}),n(Ut,{children:[n(ue,{children:[t(be,{src:Ze}),t(we,{type:"radio",name:"sex",id:"male",checked:p==="male",value:"male",onChange:A}),t(re,{htmlFor:"male",children:"Male"})]}),n(ue,{children:[t(be,{src:et}),t(we,{type:"radio",name:"sex",id:"female",checked:p==="female",value:"female",onChange:A}),t(re,{htmlFor:"female",children:"Female"})]})]}),n(De,{children:[t(B,{children:n(W,{children:[n("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(O,{type:"",placeholder:"Type location",name:"place",value:r,onChange:U})]})}),d.category==="sell"&&t(B,{children:n(W,{children:["Price",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:b,onChange:v})]})}),t(B,{children:n(Gt,{children:["Load the pet’s image:",t(Yt,{type:"button",onClick:We,children:z?t(Jt,{src:z}):t(Rt,{src:tt})}),t(qt,{type:"file",name:"image",ref:a,accept:"image/*,.png,.jpg,.gif,.web",onChange:te})]})}),t(B,{children:n(Kt,{children:[n("p",{style:{fontSize:"18px"},children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(Qt,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type breed",name:"comments",value:S,onChange:Pe})]})})]}),n(je,{children:[t(V,{children:t(X,{onClick:c,children:"Back"})}),t(V,{children:t(X,{style:{color:"#fff",backgroundColor:"#F59256"},type:"submit",children:"Done"})})]})]})]})})},Zt=({onClose:e})=>{const[c,d]=s.useState(!1),[o,l]=s.useState(null);return t(se,{children:c?t(Xt,{onClose:e,isPrev:()=>{d(!1)},notice:o}):t(Et,{onClose:e,isNext:()=>{d(!0)},onSubmit:r=>{l(r)}})})},ei=i.div`
  min-width: 132px;
  @media (max-width: 767px) {
    position: fixed;
    z-index: 999;
    right: 20px;
    bottom: 100px;
    min-width: fit-content;
  }
`,ti=i.button`
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
`,ii=i.p`
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
`,ni=i.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
  @media (min-width: 768px) {
    display: none;
  }
`,oi=i(Qe)`
  @media (max-width: 767.98px) {
    width: 22px;
    height: 22px;
  }
`,ai=()=>{const[e,c]=s.useState(!1);return n(ei,{children:[n(Ve,{children:[t(ii,{children:"Add pet"}),t(ti,{onClick:()=>{c(!0)},children:n("div",{children:[t(oi,{}),t(ni,{children:"Add pet"})]})})]}),e&&t(Zt,{onClose:()=>{c(!1)}})]})};function ri({category:e}){const c=g(Z),d=Ge(),o=H(),l=g(_);s.useEffect(()=>{o(J("sell")),o(ae("sell")),d("/FindPet/sell",{replace:!0})},[o]);const a=r=>{o(J(r)),o(ae(r)),d(`/FindPet/${r}`,{replace:!0})},p=r=>{o(J(r)),o(le()),d(`/FindPet/${r}`,{replace:!0})},h=r=>{o(J(r)),o(Q()),d(`/FindPet/${r}`,{replace:!0})};return t(At,{children:n(Tt,{children:[t(Bt,{children:n(Lt,{children:[t(G,{children:t(Y,{selected:l===N.lostFound,onClick:()=>a(N.lostFound),children:"lost/found"})}),t(G,{children:t(Y,{selected:l===N.free,onClick:()=>a(N.free),children:"in good hands"})}),t(G,{children:t(Y,{selected:l===N.sell,onClick:()=>a(N.sell),children:"sell"})}),c&&n(M,{children:[t(G,{children:t(Y,{selected:l===N.favorite,onClick:()=>h(N.favorite),children:"favorite ads"})}),t(G,{children:t(Y,{selected:l===N.my,onClick:()=>p(N.my),children:"my ads"})})]})]})}),c&&t(ai,{})]})})}function di(e){return Me({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}function li(e){return Me({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}i.section`
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
  @media (${e=>e.theme.media.mobileMax}) {
    width: 20px;
    height: 20px;
  }
  @media (${e=>e.theme.media.tablet}) {
    width: 24px;
    height: 24px;
  }
`,ci=i.div`
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
`,pi=i.form`
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
  @media (${e=>e.theme.media.mobileMax}) {
    font-size: ${e=>e.theme.fontSizes.m};
    margin-bottom: 28px;
  }
  @media (${e=>e.theme.media.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xxxl};
    margin-bottom: 40px;
  }
`,xi=i(di)`
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
`,fi=i.input`
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
`;function gi(){const[e,c]=s.useState(""),[d,o]=s.useState(null),l=H();g(Se);const a=document.getElementById("input"),p=m=>{o(!0),console.log(d)},h=m=>{m.currentTarget===m.target&&(o(!1),e===""&&l(q("")))};return n(M,{children:[t(mi,{children:"Find your favorite pet"}),t(hi,{children:n(pi,{onSubmit:m=>{m.preventDefault(),l(q(e))},children:[t(fi,{id:"input",type:"text",onChange:m=>{c(m.target.value)},value:e,placeholder:"Search",onFocus:p,onBlur:h}),d?null:t(ye,{type:"submit",children:t(xi,{})}),d?t(ye,{onClick:m=>{m.preventDefault(),e!==""&&(l(q(e)),o(!1),h(m),a.blur()),e===""&&l(q(""))},children:t(si,{})}):null]})})]})}const yi=()=>{const{categoryName:e}=Ye();return g(Ie),g(_),g(Z),H(),n(M,{children:[n(ci,{children:[t(gi,{}),t(ri,{category:e})]}),n(St,{children:[t(Ft,{}),t(Re,{})]})]})};export{yi as default};
