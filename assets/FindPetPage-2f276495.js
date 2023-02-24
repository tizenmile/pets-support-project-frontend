import{s as o,h as Pe,j as t,d as x,i as ee,r as s,e as E,k as he,a as i,m as te,Q as U,n as oe,o as pe,p as me,q as ge,t as je,v as G,w as We,x as X,y as fe,F as C,A as Ee,z as Oe,B as _,C as k,D as ne,E as _e,O as He}from"./index-a34b60b1.js";import{b as Ue}from"./index.esm-08023095.js";import{G as Ge}from"./iconBase-5267c914.js";const xe=e=>e.notices.items,ue=e=>e.notices.favNotices,be=e=>e.search,J=e=>e.filters.status,Re="/pets-support-project-frontend/assets/male-a0f02fb1.svg",Ye="/pets-support-project-frontend/assets/female-147e65d7.svg",Je="/pets-support-project-frontend/assets/plus-94d63496.svg",ye="/pets-support-project-frontend/assets/heart-4779bb70.svg",we="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",qe=o.li`
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,Qe=o.div`
 display: flex;
 flex-direction: column;
 height: 612px;
`,Ve=o.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,Ke=o.div`
  position: relative;
`,Xe=o.p`
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
`,Ze=o.button`
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
`,et=o.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,tt=o.ul`
  margin: 20px;
`,Q=o.li`
  display: flex;
  margin-bottom: 8px;

  &&:last-child {
  margin-bottom: 0;
`,B=o.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,ae=o.button`
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
`;const ot=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1200;
  overflow-y: scroll;
`,ve=({children:e})=>Pe.createPortal(t(ot,{children:e}),document.querySelector("#modal-root")),it=o.div`
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
`,nt=o.button`
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
`,at=o.img`
  display: block;
  width: 20px;
  height: 20px;
`,rt=o.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,lt=o.div`
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
`,ct=o.p`
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
`,st=o.h2`
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
`,I=o.p`
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
`,S=o.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,ht=o.ul`
  //   background-color: red;
`,F=o.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,pt=o.p`
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
`,mt=o.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,gt=o.div`
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
`,ft=o.button`
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
`,xt=o.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,ut=o.a`
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
`,bt=({onClose:e,itemId:d,isFavorite:r})=>{const n=x(ee),[a,m]=s.useState(null),[l,c]=s.useState(r),f=E(),u=()=>{f(l?pe(d):me(d)),c(g=>!g)},b=()=>t("div",{children:t(ge,{to:"/login",children:"You need to log in"})});if(s.useEffect(()=>{he.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${d}`).then(g=>{const y=g.data.data;m(y)})},[]),!a)return;const z=g=>{let y=new Date(g).getDate();y<10&&(y="0"+y);let v=new Date(g).getMonth();v<10&&(v="0"+v);let N=new Date(g).getFullYear();return N<10&&(N="0"+N),y+"."+v+"."+N};return t(ve,{children:i(it,{children:[t(nt,{onClick:()=>e(l),children:t(at,{src:te,alt:"close_menu_icon"})}),i(rt,{children:[i(lt,{children:[t(dt,{src:a.notice.photo}),t(ct,{children:a.notice.category})]}),i("div",{children:[t(st,{children:a.notice.title}),i(ht,{children:[a.notice.name&&i(F,{children:[t(I,{children:"Name:"}),t(S,{children:a.notice.name})]}),a.notice.birthDate&&i(F,{children:[t(I,{children:"Birthday:"}),t(S,{children:z(a.notice.birthDate)})]}),a.notice.breed&&i(F,{children:[t(I,{children:"Breed:"}),t(S,{children:a.notice.breed})]}),i(F,{children:[t(I,{children:"Place:"}),t(S,{children:a.notice.place})]}),i(F,{children:[t(I,{children:"The sex:"}),t(S,{children:a.notice.sex})]}),i(F,{children:[t(I,{children:"UserName:"}),t(S,{children:a.user.name})]}),i(F,{children:[t(I,{children:"Email:"}),t(S,{children:a.user.email})]}),i(F,{children:[t(I,{children:"Phone:"}),t(S,{children:a.user.mobile})]}),a.notice.category==="sell"&&i(F,{children:[t(I,{children:"Price:"}),t(S,{children:`${a.notice.price}$`})]})]})]})]}),i(pt,{children:["comments",i(mt,{children:[": ",a.notice.comments]})]}),i(gt,{children:[i(ft,{onClick:()=>{n?u():U(b)},children:[l?"del from":"add to",t(xt,{src:l?we:ye,alt:l?"heartFull":"heart"})]}),t(oe,{}),t(ut,{href:"tel:"+a.user.mobile,children:"contact"})]}),t("link",{})]})})},re=({item:e})=>{const d=x(ue),r=x(ee),n=x(J),a=x(je),[m,l]=s.useState(!1),[c,f]=s.useState(!1),u=E(),b=()=>{l(!0)},z=h=>{l(!1),f(h)},g=d.reduce((h,O)=>(h.push(O._id),h),[]);s.useEffect(()=>{f(g.includes(e._id))},[d]);const y=()=>{u(c?pe(e._id):me(e._id)),u(G()),f(h=>!h)},v=async()=>{const h=["sell","lost-found","for-free"];await u(We(e._id)),h.includes(n)?u(X(n)):u(n==="own-notices"?fe():G())},N=()=>t("div",{children:t(ge,{to:"/login",children:"You need to log in"})}),M=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),A=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let $;return M<1?$="Less than a year":M>15?$="very old dog":M>=1&&M<=15?$=A[M-1]:$="unknown",i(qe,{children:[i(Qe,{children:[i("div",{style:{flexGrow:1},children:[i(Ke,{children:[t(Ve,{src:e.photo,alt:e.title}),t(Xe,{children:e.category}),t(Ze,{onClick:()=>{r?y():U(N)},children:c?t("img",{src:we,alt:"heartFull"}):t("img",{src:ye,alt:"heart"})}),t(oe,{})]}),t(et,{style:{width:"280px"},children:e.title}),i(tt,{children:[e.breed&&i(Q,{children:[t(B,{style:{width:"50px"},children:"Breed:"}),t(B,{style:{marginLeft:"40px"},children:e.breed})]}),i(Q,{children:[t(B,{style:{width:"50px"},children:"Place:"}),t(B,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&i(Q,{children:[t(B,{style:{width:"50px"},children:"Age:"}),t(B,{style:{marginLeft:"40px"},children:$})]})]})]}),t(ae,{style:e.userId!==a._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:b,children:"Learn more"}),e.userId==a._id&&i(ae,{onClick:v,children:["Delete",t(Ue,{width:"16px",height:"17px"})]})]}),m&&t(bt,{itemId:e._id,isFavorite:c,onClose:z})]})},yt=o.ul`
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
`,le=o.ul`
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
`,wt=()=>{const e=x(xe),d=x(ue),r=x(J),a=x(be).toLowerCase();let m,l;return e!==void 0&&e.length>0&&(m=e.filter(c=>c.title.toLowerCase().includes(a))),d!==void 0&&d.length>0&&(l=d.filter(c=>c.title.toLowerCase().includes(a))),t(C,{children:r!=="fav-notice"?t(C,{children:m!==void 0&&m.length>=1&&t(le,{children:m.map(c=>t(re,{item:c},c._id))})}):t(C,{children:t(C,{children:l!==void 0&&l.length>=1&&t(le,{children:l.map(c=>t(re,{item:c},c._id))})})})})},vt=o.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,Nt=o.ul`
  display: flex;
  flex-wrap: wrap;
`,j=o.li`
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
`,kt=o.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
  }
`,Ct=o.button`
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
`,W=({selected:e=!1,type:d="button",children:r,...n})=>t(Ct,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:d,...n,children:r}),Mt=o.form`
  position: relative;
  width: 608px;
  min-height: 885px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
`,Ne=o.button`
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
`,ke=o.img`
  display: block;
  width: 20px;
  height: 20px;
`,Ce=o.h2`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
`,$t=o.p`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 28px;
`,It=o.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`,V=o.li`
  :not(:last-child) {
    margin-right: 12px;
  }
  :first-child {
    margin-bottom: 16px;
  }
`,H=o.label`
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
`,K=o.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${H} {
    transition: ${e=>e.theme.transition};
    background: #F59256;
`,Me=o.ul`
  margin-bottom: 40px;
`,T=o.label`
  display: block;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,D=o.input`
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
`,L=o.li`
  margin-bottom: 28px;
`,$e=o.ul`
  display: flex;
  justify-content: center;
`,R=o.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,Y=o.button`
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
`;function St(){return JSON.parse(window.localStorage.getItem("notice"))}const Ft=({onClose:e,isNext:d,onSubmit:r})=>{const n=St(),[a,m]=s.useState(n?n.category:"sell"),[l,c]=s.useState(n?n.title:""),[f,u]=s.useState(n?n.name:""),[b,z]=s.useState(n?n.birthDate:""),[g,y]=s.useState(n?n.breed:"");s.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:l,breed:g,name:f,birthDate:b,category:a}))},[l,g,f,b,a]);const v=h=>{m(h.target.value)};return i(Mt,{children:[t(Ne,{type:"button",onClick:e,children:t(ke,{src:te})}),t(Ce,{children:"Add pet"}),t($t,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),i(It,{children:[i(V,{children:[t(K,{type:"radio",name:"category",checked:a==="lost-found",value:"lost-found",id:"lost/found",onChange:v}),t(H,{htmlFor:"lost/found",children:"lost/found"})]}),i(V,{children:[t(K,{type:"radio",name:"category",checked:a==="for-free",value:"for-free",id:"inGoodHands",onChange:v}),t(H,{htmlFor:"inGoodHands",children:"in good hands"})]}),i(V,{children:[t(K,{type:"radio",name:"category",checked:a==="sell",value:"sell",id:"sell",onChange:v}),t(H,{htmlFor:"sell",children:"sell"})]})]}),i(Me,{children:[t(L,{children:i(T,{children:["Tittle of ad*:",t(D,{type:"text",placeholder:"Type name",name:"title",value:l,onChange:h=>{c(h.target.value)}})]})}),t(L,{children:i(T,{children:["Name pet:",t(D,{type:"text",placeholder:"Type name pet",name:"name",value:f,onChange:h=>{u(h.target.value)}})]})}),t(L,{children:i(T,{children:["Date of birth:",t(D,{type:"date",name:"birthDate",value:b,onChange:h=>{z(h.target.value)}})]})}),t(L,{children:i(T,{children:["Breed:",t(D,{placeholder:"Type breed",name:"breed",value:g,onChange:h=>{y(h.target.value)}})]})})]}),i($e,{children:[t(R,{children:t(Y,{type:"button",onClick:e,children:"Cancel"})}),t(R,{children:t(Y,{type:"button",onClick:()=>{r({title:l,breed:g,name:f,birthDate:b,category:a}),d()},children:"Next"})})]})]})},zt=o.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 90px;
`,Lt=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,At=o.ul`
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
`,ce=o.img`
  width: 54px;
  margin-bottom: 20px;
`,Z=o.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,se=o.input`
  opacity: 0;
  height: 0;
  width:0;
  line-heigth: 0 ;
  overflow: hidden;
  padding: 0;
  margin:0;
  transition: ${e=>e.theme.transition};
  &:checked + ${Z} {
    transition: ${e=>e.theme.transition};
    color:  #F59256;;
`,Bt=o.label`
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
`,Tt=o.button`
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
`,Dt=o.img`
  width: 47px;
  hegth: 47px;
`,Pt=o.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,jt=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-heigth: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  // display: none;
`,Wt=o.label`
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
`,Et=o.textarea`
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
`;function Ot(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const _t=({onClose:e,isPrev:d,notice:r})=>{const n=Ot(),a=x(w=>w.auth.token),m=s.useRef(null),[l,c]=s.useState(n?n.sex:""),[f,u]=s.useState(n?n.place:""),[b,z]=s.useState(n?n.price:""),[g,y]=s.useState(n?n.image:null),[v,N]=s.useState(n?n.imageName:null),[P,M]=s.useState(n?n.imageUrl:null),[A,$]=s.useState(n?n.comments:""),[h,O]=s.useState(!1);s.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:g,imageName:v,imageUrl:P,sex:l,place:f,price:b,comments:A}))});const ie=w=>{c(w.target.value)},Ie=w=>{u(w.target.value)},Se=w=>{z(w.target.value)},Fe=w=>{const{files:p}=w.target;console.log(p),y(p[0]),p[0]&&N(p[0].name),p&&M(URL.createObjectURL(p[0]))},ze=w=>{$(w.target.value)},Le=()=>{m.current.click()},Ae=async w=>{O(!0),w.preventDefault();const p=new FormData;p.append("image",g),p.append("sex",l),p.append("place",f),p.append("price",b||1),p.append("comments",A),p.append("title",r.title),p.append("breed",r.breed),p.append("birthDate",r.birthDate),p.append("category",r.category),p.append("name",r.name);try{const q=await he.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",p,{headers:{Authorization:`Bearer ${a}`}});console.log(q),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Be(),De(),e()}catch(q){console.log(q),Te()}O(!1)},Be=()=>{M(null),N(null),y(null),c(""),u(""),z(""),$("")},Te=()=>U.error("Please enter correct data!"),De=()=>U.success("Notice created!");return t(C,{children:h?t(Ee,{}):i(C,{children:[t(oe,{}),i(zt,{name:"newForm",onSubmit:Ae,children:[t(Ne,{type:"button",onClick:e,children:t(ke,{src:te})}),t(Ce,{children:"Add pet"}),t(Lt,{children:"The sex*:"}),i(At,{children:[i(de,{children:[t(ce,{src:Re}),t(se,{type:"radio",name:"sex",id:"male",checked:l==="male",value:"male",onChange:ie}),t(Z,{htmlFor:"male",children:"Male"})]}),i(de,{children:[t(ce,{src:Ye}),t(se,{type:"radio",name:"sex",id:"female",checked:l==="female",value:"female",onChange:ie}),t(Z,{htmlFor:"female",children:"Female"})]})]}),i(Me,{children:[t(L,{children:i(T,{children:["Location*:",t(D,{placeholder:"Type location",name:"place",value:f,onChange:Ie})]})}),r.category==="sell"&&t(L,{children:i(T,{children:["Price*:",t(D,{type:"number",placeholder:"Type price",name:"price",value:b,onChange:Se})]})}),t(L,{children:i(Bt,{children:["Load the pet’s image:",t(Tt,{type:"button",onClick:Le,children:P?t(Pt,{src:P}):t(Dt,{src:Je})}),t(jt,{type:"file",name:"image",ref:m,accept:"image/*,.png,.jpg,.gif,.web",onChange:Fe})]})}),t(L,{children:i(Wt,{children:["Comments:",t(Et,{placeholder:"Type comment",name:"comments",value:A,onChange:ze})]})})]}),i($e,{children:[t(R,{children:t(Y,{onClick:d,children:"Back"})}),t(R,{children:t(Y,{type:"submit",children:"Done"})})]})]})]})})},Ht=({onClose:e})=>{const[d,r]=s.useState(!1),[n,a]=s.useState(null);return t(ve,{children:d?t(_t,{onClose:e,isPrev:()=>{r(!1)},notice:n}):t(Ft,{onClose:e,isNext:()=>{r(!0)},onSubmit:f=>{a(f)}})})},Ut=o.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,Gt=()=>{const[e,d]=s.useState(!1);return i(C,{children:[t(Ut,{children:t("button",{onClick:()=>{d(!0)},children:"open modal"})}),e&&t(Ht,{onClose:()=>{d(!1)}})]})};function Rt({category:e}){const d=Oe(),r=E(),n=x(J);s.useEffect(()=>{r(_("sell")),r(X("sell")),d("/FindPet/sell",{replace:!0})},[r]);const a=c=>{r(_(c)),r(X(c)),d(`/FindPet/${c}`,{replace:!0})},m=c=>{r(_(c)),r(fe()),d(`/FindPet/${c}`,{replace:!0})},l=c=>{r(_(c)),r(G()),d(`/FindPet/${c}`,{replace:!0})};return t("section",{children:i(kt,{children:[t(vt,{children:i(Nt,{children:[t(j,{children:t(W,{selected:n===k.lostFound,onClick:()=>a(k.lostFound),children:"lost/found"})}),t(j,{children:t(W,{selected:n===k.free,onClick:()=>a(k.free),children:"in good hands"})}),t(j,{children:t(W,{selected:n===k.sell,onClick:()=>a(k.sell),children:"sell"})}),i(C,{children:[t(j,{children:t(W,{selected:n===k.favorite,onClick:()=>l(k.favorite),children:"favorite ads"})}),t(j,{children:t(W,{selected:n===k.my,onClick:()=>m(k.my),children:"my ads"})})]})]})}),t(Gt,{}),t("div",{})]})})}function Yt(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}const Jt=o.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (${e=>e.theme.media.mobileMax}) {
    max-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${e=>e.theme.media.tablet}) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (${e=>e.theme.media.desktop}) {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`,qt=o.form`
  position: relative;
`,Qt=o.button`
  padding: 0px 0px;
`,Vt=o.div`
  margin-left: auto;
  margin-right: auto;
  @media (${e=>e.theme.media.mobileMax}) {
    max-width: 280px;
    height: 40px;
    margin-bottom: 28px;
  }
  @media (${e=>e.theme.media.tablet}) {
    width: 608px;
    height: 44px;
    margin-bottom: 40px;
  }
`,Kt=o.h2`
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
`,Xt=o(Yt)`
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
`,Zt=o.input`
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
    font-size: ${e=>e.theme.fontSizes.s};
    padding-left: 12px;
  }
  @media (${e=>e.theme.media.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xm};
    padding-left: 20px;
  }
`;function eo(){const[e,d]=s.useState(""),r=E();return x(be),i(C,{children:[t(Kt,{children:"Find your favorite pet"}),i(Vt,{children:[i(qt,{onSubmit:l=>{l.preventDefault(),r(ne(e))},children:[t(Zt,{type:"text",onChange:l=>{d(l.target.value)},value:e,placeholder:"Search"}),t(Qt,{type:"submit",children:t(Xt,{})})]}),t("button",{onClick:l=>{l.preventDefault(),d(""),r(ne(""))},children:"CLEAR"})]})]})}const no=()=>{const{categoryName:e}=_e();x(xe),x(J);const d=x(ee),r=E();return s.useEffect(()=>{d&&r(G())},[r]),i(C,{children:[i(Jt,{children:[t(eo,{}),t(Rt,{category:e})]}),i(yt,{children:[t(wt,{}),t(He,{})]})]})};export{no as default};
