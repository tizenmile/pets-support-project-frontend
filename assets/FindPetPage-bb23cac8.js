import{s as o,m as je,j as t,d as x,n as ee,r as s,e as O,o as he,a as i,q as te,Q as E,t as oe,v as pe,w as me,x as fe,y as We,z as G,B as Ee,C as X,D as ge,F as C,A as Oe,E as _e,G as H,I as k,J as ne,K as He,O as Ue}from"./index-6a443ba4.js";import{b as Ge}from"./index.esm-7c4d8e73.js";import{G as Re}from"./iconBase-645529b9.js";const xe=e=>e.notices.items,ue=e=>e.notices.favNotices,be=e=>e.search,J=e=>e.filters.status,Ye="/pets-support-project-frontend/assets/male-a0f02fb1.svg",Je="/pets-support-project-frontend/assets/female-147e65d7.svg",qe="/pets-support-project-frontend/assets/plus-94d63496.svg",ye="/pets-support-project-frontend/assets/heart-4779bb70.svg",we="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",Ke=o.li`
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
`,Xe=o.div`
  position: relative;
`,Ze=o.p`
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
`,et=o.button`
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
`,tt=o.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,ot=o.ul`
  margin: 20px;
`,K=o.li`
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
`;const it=o.div`
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
`,ve=({children:e})=>je.createPortal(t(it,{children:e}),document.querySelector("#modal-root")),nt=o.div`
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
`,at=o.button`
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
`,rt=o.img`
  display: block;
  width: 20px;
  height: 20px;
`,lt=o.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,dt=o.div`
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
`,ct=o.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,st=o.p`
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
`,ht=o.h2`
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
`,pt=o.ul`
  //   background-color: red;
`,z=o.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,mt=o.p`
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
`,xt=o.button`
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
`,ut=o.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,bt=o.a`
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
`,yt=({onClose:e,itemId:d,isFavorite:r})=>{const n=x(ee),[a,m]=s.useState(null),[l,c]=s.useState(r),g=O(),u=()=>{g(l?pe(d):me(d)),c(f=>!f)},b=()=>t("div",{children:t(fe,{to:"/login",children:"You need to log in"})});if(s.useEffect(()=>{he.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${d}`).then(f=>{const y=f.data.data;m(y)})},[]),!a)return;const F=f=>{let y=new Date(f).getDate();y<10&&(y="0"+y);let v=new Date(f).getMonth();v<10&&(v="0"+v);let N=new Date(f).getFullYear();return N<10&&(N="0"+N),y+"."+v+"."+N};return t(ve,{children:i(nt,{children:[t(at,{onClick:()=>e(l),children:t(rt,{src:te,alt:"close_menu_icon"})}),i(lt,{children:[i(dt,{children:[t(ct,{src:a.notice.photo}),t(st,{children:a.notice.category})]}),i("div",{children:[t(ht,{children:a.notice.title}),i(pt,{children:[a.notice.name&&i(z,{children:[t(I,{children:"Name:"}),t(S,{children:a.notice.name})]}),a.notice.birthDate&&i(z,{children:[t(I,{children:"Birthday:"}),t(S,{children:F(a.notice.birthDate)})]}),a.notice.breed&&i(z,{children:[t(I,{children:"Breed:"}),t(S,{children:a.notice.breed})]}),i(z,{children:[t(I,{children:"Place:"}),t(S,{children:a.notice.place})]}),i(z,{children:[t(I,{children:"The sex:"}),t(S,{children:a.notice.sex})]}),i(z,{children:[t(I,{children:"UserName:"}),t(S,{children:a.user.name})]}),i(z,{children:[t(I,{children:"Email:"}),t(S,{children:a.user.email})]}),i(z,{children:[t(I,{children:"Phone:"}),t(S,{children:a.user.mobile})]}),a.notice.category==="sell"&&i(z,{children:[t(I,{children:"Price:"}),t(S,{children:`${a.notice.price}$`})]})]})]})]}),i(mt,{children:["comments",i(ft,{children:[": ",a.notice.comments]})]}),i(gt,{children:[i(xt,{onClick:()=>{n?u():E(b)},children:[l?"del from":"add to",t(ut,{src:l?we:ye,alt:l?"heartFull":"heart"})]}),t(oe,{}),t(bt,{href:"tel:"+a.user.mobile,children:"contact"})]}),t("link",{})]})})},re=({item:e})=>{const d=x(ue),r=x(ee),n=x(J),a=x(We),[m,l]=s.useState(!1),[c,g]=s.useState(!1),u=O(),b=()=>{l(!0)},F=h=>{l(!1),g(h)},f=d.reduce((h,_)=>(h.push(_._id),h),[]);s.useEffect(()=>{g(f.includes(e._id))},[d]);const y=()=>{u(c?pe(e._id):me(e._id)),u(G()),g(h=>!h)},v=async()=>{const h=["sell","lost-found","for-free"];await u(Ee(e._id)),h.includes(n)?u(X(n)):u(n==="own-notices"?ge():G())},N=()=>t("div",{children:t(fe,{to:"/login",children:"You need to log in"})}),M=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),A=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let $;return M<1?$="Less than a year":M>15?$="very old dog":M>=1&&M<=15?$=A[M-1]:$="unknown",i(Ke,{children:[i(Qe,{children:[i("div",{style:{flexGrow:1},children:[i(Xe,{children:[t(Ve,{src:e.photo,alt:e.title}),t(Ze,{children:e.category}),t(et,{onClick:()=>{r?y():E(N)},children:c?t("img",{src:we,alt:"heartFull"}):t("img",{src:ye,alt:"heart"})}),t(oe,{})]}),t(tt,{style:{width:"280px"},children:e.title}),i(ot,{children:[e.breed&&i(K,{children:[t(B,{style:{width:"50px"},children:"Breed:"}),t(B,{style:{marginLeft:"40px"},children:e.breed})]}),i(K,{children:[t(B,{style:{width:"50px"},children:"Place:"}),t(B,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&i(K,{children:[t(B,{style:{width:"50px"},children:"Age:"}),t(B,{style:{marginLeft:"40px"},children:$})]})]})]}),t(ae,{style:e.userId!==a._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:b,children:"Learn more"}),e.userId==a._id&&i(ae,{onClick:v,children:["Delete",t(Ge,{width:"16px",height:"17px"})]})]}),m&&t(yt,{itemId:e._id,isFavorite:c,onClose:F})]})},wt=o.ul`
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
`,vt=()=>{const e=x(xe),d=x(ue),r=x(J),a=x(be).toLowerCase();let m,l;return e!==void 0&&e.length>0&&(m=e.filter(c=>c.title.toLowerCase().includes(a))),d!==void 0&&d.length>0&&(l=d.filter(c=>c.title.toLowerCase().includes(a))),t(C,{children:r!=="fav-notice"?t(C,{children:m!==void 0&&m.length>=1&&t(le,{children:m.map(c=>t(re,{item:c},c._id))})}):t(C,{children:t(C,{children:l!==void 0&&l.length>=1&&t(le,{children:l.map(c=>t(re,{item:c},c._id))})})})})},Nt=o.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,kt=o.ul`
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
`,Ct=o.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
  }
`,Mt=o.button`
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
`,W=({selected:e=!1,type:d="button",children:r,...n})=>t(Mt,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:d,...n,children:r}),$t=o.form`
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
`,It=o.p`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 28px;
`,St=o.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`,Q=o.li`
  :not(:last-child) {
    margin-right: 12px;
  }
  :first-child {
    margin-bottom: 16px;
  }
`,U=o.label`
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
`,V=o.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${U} {
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
`;function zt(){return JSON.parse(window.localStorage.getItem("notice"))}const Ft=({onClose:e,isNext:d,onSubmit:r})=>{const n=zt(),[a,m]=s.useState(n?n.category:"sell"),[l,c]=s.useState(n?n.title:""),[g,u]=s.useState(n?n.name:""),[b,F]=s.useState(n?n.birthDate:""),[f,y]=s.useState(n?n.breed:"");s.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:l,breed:f,name:g,birthDate:b,category:a}))},[l,f,g,b,a]);const v=h=>{m(h.target.value)};return i($t,{children:[t(Ne,{type:"button",onClick:e,children:t(ke,{src:te})}),t(Ce,{children:"Add pet"}),t(It,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),i(St,{children:[i(Q,{children:[t(V,{type:"radio",name:"category",checked:a==="lost-found",value:"lost-found",id:"lost/found",onChange:v}),t(U,{htmlFor:"lost/found",children:"lost/found"})]}),i(Q,{children:[t(V,{type:"radio",name:"category",checked:a==="for-free",value:"for-free",id:"inGoodHands",onChange:v}),t(U,{htmlFor:"inGoodHands",children:"in good hands"})]}),i(Q,{children:[t(V,{type:"radio",name:"category",checked:a==="sell",value:"sell",id:"sell",onChange:v}),t(U,{htmlFor:"sell",children:"sell"})]})]}),i(Me,{children:[t(L,{children:i(T,{children:["Tittle of ad*:",t(D,{type:"text",min:"2",max:"48",required:!0,placeholder:"Type name",name:"title",value:l,onChange:h=>{c(h.target.value)}})]})}),t(L,{children:i(T,{children:["Name pet:",t(D,{type:"text",min:"2",max:"16",placeholder:"Type name pet",name:"name",value:g,onChange:h=>{u(h.target.value)}})]})}),t(L,{children:i(T,{children:["Date of birth:",t(D,{type:"date",name:"birthDate",value:b,onChange:h=>{F(h.target.value)}})]})}),t(L,{children:i(T,{children:["Breed:",t(D,{type:"text",min:"2",max:"24",placeholder:"Type breed",name:"breed",value:f,onChange:h=>{y(h.target.value)}})]})})]}),i($e,{children:[t(R,{children:t(Y,{type:"button",onClick:e,children:"Cancel"})}),t(R,{children:t(Y,{type:"button",onClick:()=>{r({title:l,breed:f,name:g,birthDate:b,category:a}),d()},children:"Next"})})]})]})},Lt=o.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 90px;
`,At=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,Bt=o.ul`
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
`,Tt=o.label`
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
`,Dt=o.button`
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
`,Pt=o.img`
  width: 47px;
  hegth: 47px;
`,jt=o.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,Wt=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-heigth: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  // display: none;
`,Et=o.label`
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
`,Ot=o.textarea`
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
`;function _t(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const Ht=({onClose:e,isPrev:d,notice:r})=>{const n=_t(),a=x(w=>w.auth.token),m=s.useRef(null),[l,c]=s.useState(n?n.sex:""),[g,u]=s.useState(n?n.place:""),[b,F]=s.useState(n?n.price:""),[f,y]=s.useState(n?n.image:null),[v,N]=s.useState(n?n.imageName:null),[P,M]=s.useState(n?n.imageUrl:null),[A,$]=s.useState(n?n.comments:""),[h,_]=s.useState(!1);s.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:f,imageName:v,imageUrl:P,sex:l,place:g,price:b,comments:A}))});const ie=w=>{c(w.target.value)},Ie=w=>{u(w.target.value)},Se=w=>{F(w.target.value)},ze=w=>{const{files:p}=w.target;if(p[0].size>5242880)return Pe();y(p[0]),p[0]&&N(p[0].name),p&&M(URL.createObjectURL(p[0]))},Fe=w=>{$(w.target.value)},Le=()=>{m.current.click()},Ae=async w=>{_(!0),w.preventDefault();const p=new FormData;p.append("image",f),p.append("sex",l),p.append("place",g),p.append("price",b||1),p.append("comments",A),p.append("title",r.title),p.append("breed",r.breed),p.append("birthDate",r.birthDate),p.append("category",r.category),p.append("name",r.name);try{const q=await he.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",p,{headers:{Authorization:`Bearer ${a}`}});console.log(q),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Be(),De(),e()}catch(q){console.log(q),Te()}_(!1)},Be=()=>{M(null),N(null),y(null),c(""),u(""),F(""),$("")},Te=()=>E.error("Please enter correct data!"),De=()=>E.success("Notice created!"),Pe=()=>E.error("The file must not exceed 5.2 mb!");return i(C,{children:[t(oe,{}),h?t(Oe,{}):t(C,{children:i(Lt,{name:"newForm",onSubmit:Ae,children:[t(Ne,{type:"button",onClick:e,children:t(ke,{src:te})}),t(Ce,{children:"Add pet"}),t(At,{children:"The sex*:"}),i(Bt,{children:[i(de,{children:[t(ce,{src:Ye}),t(se,{type:"radio",name:"sex",id:"male",checked:l==="male",value:"male",onChange:ie}),t(Z,{htmlFor:"male",children:"Male"})]}),i(de,{children:[t(ce,{src:Je}),t(se,{type:"radio",name:"sex",id:"female",checked:l==="female",value:"female",onChange:ie}),t(Z,{htmlFor:"female",children:"Female"})]})]}),i(Me,{children:[t(L,{children:i(T,{children:["Location*:",t(D,{type:"",placeholder:"Type location",name:"place",value:g,onChange:Ie})]})}),r.category==="sell"&&t(L,{children:i(T,{children:["Price*:",t(D,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:b,onChange:Se})]})}),t(L,{children:i(Tt,{children:["Load the pet’s image:",t(Dt,{type:"button",onClick:Le,children:P?t(jt,{src:P}):t(Pt,{src:qe})}),t(Wt,{type:"file",name:"image",ref:m,accept:"image/*,.png,.jpg,.gif,.web",onChange:ze})]})}),t(L,{children:i(Et,{children:["Comments:",t(Ot,{type:"text",min:"8",max:"120",required:!0,placeholder:"Type comment",name:"comments",value:A,onChange:Fe})]})})]}),i($e,{children:[t(R,{children:t(Y,{onClick:d,children:"Back"})}),t(R,{children:t(Y,{type:"submit",children:"Done"})})]})]})})]})},Ut=({onClose:e})=>{const[d,r]=s.useState(!1),[n,a]=s.useState(null);return t(ve,{children:d?t(Ht,{onClose:e,isPrev:()=>{r(!1)},notice:n}):t(Ft,{onClose:e,isNext:()=>{r(!0)},onSubmit:g=>{a(g)}})})},Gt=o.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,Rt=()=>{const[e,d]=s.useState(!1);return i(C,{children:[t(Gt,{children:t("button",{onClick:()=>{d(!0)},children:"create notice"})}),e&&t(Ut,{onClose:()=>{d(!1)}})]})};function Yt({category:e}){const d=_e(),r=O(),n=x(J);s.useEffect(()=>{r(H("sell")),r(X("sell")),d("/FindPet/sell",{replace:!0})},[r]);const a=c=>{r(H(c)),r(X(c)),d(`/FindPet/${c}`,{replace:!0})},m=c=>{r(H(c)),r(ge()),d(`/FindPet/${c}`,{replace:!0})},l=c=>{r(H(c)),r(G()),d(`/FindPet/${c}`,{replace:!0})};return t("section",{children:i(Ct,{children:[t(Nt,{children:i(kt,{children:[t(j,{children:t(W,{selected:n===k.lostFound,onClick:()=>a(k.lostFound),children:"lost/found"})}),t(j,{children:t(W,{selected:n===k.free,onClick:()=>a(k.free),children:"in good hands"})}),t(j,{children:t(W,{selected:n===k.sell,onClick:()=>a(k.sell),children:"sell"})}),i(C,{children:[t(j,{children:t(W,{selected:n===k.favorite,onClick:()=>l(k.favorite),children:"favorite ads"})}),t(j,{children:t(W,{selected:n===k.my,onClick:()=>m(k.my),children:"my ads"})})]})]})}),t(Rt,{}),t("div",{})]})})}function Jt(e){return Re({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}const qt=o.div`
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
`,Kt=o.form`
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
`,Xt=o.h2`
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
`,Zt=o(Jt)`
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
`,eo=o.input`
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
`;function to(){const[e,d]=s.useState(""),r=O();return x(be),i(C,{children:[t(Xt,{children:"Find your favorite pet"}),i(Vt,{children:[i(Kt,{onSubmit:l=>{l.preventDefault(),r(ne(e))},children:[t(eo,{type:"text",onChange:l=>{d(l.target.value)},value:e,placeholder:"Search"}),t(Qt,{type:"submit",children:t(Zt,{})})]}),t("button",{onClick:l=>{l.preventDefault(),d(""),r(ne(""))},children:"CLEAR"})]})]})}const ao=()=>{const{categoryName:e}=He();x(xe),x(J);const d=x(ee),r=O();return s.useEffect(()=>{d&&r(G())},[r]),i(C,{children:[i(qt,{children:[t(to,{}),t(Yt,{category:e})]}),i(wt,{children:[t(vt,{}),t(Ue,{})]})]})};export{ao as default};
