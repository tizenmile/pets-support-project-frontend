import{s as o,d as f,t as Q,r as s,e as W,v as me,j as t,a as n,w as U,x as ie,Q as H,y as ae,z as ge,B as fe,C as xe,D as Oe,E as _e,G as oe,I as ue,F as L,A as be,J as He,K as Y,M as I,N as R,P as Ue,O as Ge}from"./index-60fb0207.js";import{M as ye,a as Ye}from"./ModalBackdrop-0fc23153.js";import{G as we}from"./iconBase-0c7f8994.js";const ve=e=>e.notices.items,Ne=e=>e.notices.favNotices,ke=e=>e.search,j=e=>e.filters.status,Re=e=>e.notices.isLoading,Je="/pets-support-project-frontend/assets/male-a0f02fb1.svg",qe="/pets-support-project-frontend/assets/female-147e65d7.svg",Ke="/pets-support-project-frontend/assets/plus-94d63496.svg",Me="/pets-support-project-frontend/assets/heart-4779bb70.svg",Ce="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",Qe=o.li`
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,Ve=o.div`
 display: flex;
 flex-direction: column;
 height: 612px;
`,Xe=o.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,Ze=o.div`
  position: relative;
`,et=o.p`
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
`,tt=o.button`
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
`,ot=o.p`
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
`,re=o.button`
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
`,ct=o.div`
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
`,st=o.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,dt=o.p`
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
`,F=o.p`
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
`,gt=o.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,ft=o.div`
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
`,yt=({onClose:e,itemId:d,isFavorite:l})=>{const i=f(Q),c=f(j),[r,p]=s.useState(null),[h,a]=s.useState(l),M=W(),m=()=>{a(y=>!y),M(h?ge(d):fe(d))},g=()=>t("div",{children:t(xe,{to:"/login",children:"You need to log in"})});if(s.useEffect(()=>{me.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${d}`).then(y=>{const w=y.data.data;p(w)})},[]),!r)return;const v=y=>{let w=new Date(y).getDate();w<10&&(w="0"+w);let C=new Date(y).getMonth();C<10&&(C="0"+C);let N=new Date(y).getFullYear();return N<10&&(N="0"+N),w+"."+C+"."+N};return t(ye,{children:n(it,{children:[t(at,{onClick:()=>{e(h),c==="fav-notice"&&M(U())},children:t(rt,{src:ie,alt:"close_menu_icon"})}),n(lt,{children:[n(ct,{children:[t(st,{src:r.notice.photo}),t(dt,{children:r.notice.category})]}),n("div",{children:[t(ht,{children:r.notice.title}),n(pt,{children:[r.notice.name&&n(z,{children:[t(F,{children:"Name:"}),t(S,{children:r.notice.name})]}),r.notice.birthDate&&n(z,{children:[t(F,{children:"Birthday:"}),t(S,{children:v(r.notice.birthDate)})]}),r.notice.breed&&n(z,{children:[t(F,{children:"Breed:"}),t(S,{children:r.notice.breed})]}),n(z,{children:[t(F,{children:"Place:"}),t(S,{children:r.notice.place})]}),n(z,{children:[t(F,{children:"The sex:"}),t(S,{children:r.notice.sex})]}),n(z,{children:[t(F,{children:"UserName:"}),t(S,{children:r.user.name})]}),n(z,{children:[t(F,{children:"Email:"}),t(S,{children:r.user.email})]}),n(z,{children:[t(F,{children:"Phone:"}),t(S,{children:r.user.mobile})]}),r.notice.category==="sell"&&n(z,{children:[t(F,{children:"Price:"}),t(S,{children:`${r.notice.price}$`})]})]})]})]}),n(mt,{children:["comments",n(gt,{children:[": ",r.notice.comments]})]}),n(ft,{children:[n(xt,{onClick:()=>{i?m():H(g)},children:[h?"del from":"add to",t(ut,{src:h?Ce:Me,alt:h?"heartFull":"heart"})]}),t(ae,{}),t(bt,{href:"tel:"+r.user.mobile,children:"contact"})]}),t("link",{})]})})},le=({item:e})=>{const d=f(Ne),l=f(Q),i=f(j),c=f(Oe),[r,p]=s.useState(!1),[h,a]=s.useState(!1),M=f(j),m=W(),g=()=>{p(!0)},v=k=>{p(!1),a(k)},y=d.reduce((k,V)=>(k.push(V._id),k),[]);s.useEffect(()=>{a(y.includes(e._id))},[d]);const w=async()=>{a(k=>!k),await m(h?ge(e._id):fe(e._id)),M==="fav-notice"&&m(U())},C=async()=>{const k=["sell","lost-found","for-free"];await m(_e(e._id)),k.includes(i)?m(oe(i)):m(i==="own-notices"?ue():U())},N=()=>t("div",{children:t(xe,{to:"/login",children:"You need to log in"})}),$=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),E=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let x;$<1?x="Less than a year":$>15?x="very old dog":$>=1&&$<=15?x=E[$-1]:x="unknown";const B=e.category;return n(Qe,{children:[n(Ve,{children:[n("div",{style:{flexGrow:1},children:[n(Ze,{children:[t(Xe,{src:e.photo,alt:e.title}),n(et,{children:[B==="sell"&&"sell",B==="for-free"&&"in good hands",B==="lost-found"&&"lost/found"]}),t(tt,{onClick:()=>{l?w():H(N)},children:h?t("img",{src:Ce,alt:"heartFull"}):t("img",{src:Me,alt:"heart"})}),t(ae,{})]}),t(ot,{style:{width:"280px"},children:e.title}),n(nt,{children:[e.breed&&n(Z,{children:[t(T,{style:{width:"50px"},children:"Breed:"}),t(T,{style:{marginLeft:"40px"},children:e.breed})]}),n(Z,{children:[t(T,{style:{width:"50px"},children:"Place:"}),t(T,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&n(Z,{children:[t(T,{style:{width:"50px"},children:"Age:"}),t(T,{style:{marginLeft:"40px"},children:x})]})]})]}),t(re,{style:e.userId!==c._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:g,children:"Learn more"}),e.userId==c._id&&n(re,{onClick:C,children:["Delete",t(Ye,{width:"16px",height:"17px"})]})]}),r&&t(yt,{itemId:e._id,isFavorite:h,onClose:v})]})},wt=o.ul`
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
`,ce=o.ul`
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
`,vt=()=>{const e=f(ve),d=f(Ne),l=f(j),c=f(ke).toLowerCase(),r=f(Re);let p,h;return e!==void 0&&e.length>0&&(p=e.filter(a=>a.title.toLowerCase().includes(c))),d!==void 0&&d.length>0&&(h=d.filter(a=>a.title.toLowerCase().includes(c))),t(L,{children:r?t(be,{}):l!=="fav-notice"?t(L,{children:p!==void 0&&p.length>=1&&t(ce,{children:p.map(a=>t(le,{item:a},a._id))})}):t(L,{children:h!==void 0&&h.length>=1&&t(ce,{children:h.map(a=>t(le,{item:a},a._id))})})})},Nt=o.section``,kt=o.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,Mt=o.ul`
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
`,Ct=o.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
  }
`,$t=o.button`
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
`,_=({selected:e=!1,type:d="button",children:l,...i})=>t($t,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:d,...i,children:l}),It=o.form`
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
`,Fe=o.h2`
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
`,St=o.ul`
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
`,J=o.label`
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
  &:checked + ${J} {
    transition: ${e=>e.theme.transition};
    background: #F59256;
`,Se=o.ul`
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
`,A=o.li`
  margin-bottom: 28px;
`,ze=o.ul`
  display: flex;
  justify-content: center;
`,q=o.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,K=o.button`
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
`;function zt(){return JSON.parse(window.localStorage.getItem("notice"))}const Lt=({onClose:e,isNext:d,onSubmit:l})=>{const i=zt(),[c,r]=s.useState(i?i.category:"sell"),[p,h]=s.useState(i?i.title:""),[a,M]=s.useState(i?i.name:""),[m,g]=s.useState(i?i.birthDate:null),[v,y]=s.useState(i?i.breed:"");s.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:p,breed:v,name:a,birthDate:m,category:c}))},[p,v,a,m,c]);const w=x=>{r(x.target.value)};return n(It,{children:[t($e,{type:"button",onClick:e,children:t(Ie,{src:ie})}),t(Fe,{children:"Add pet"}),t(Ft,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),n(St,{children:[n(ee,{children:[t(te,{type:"radio",name:"category",checked:c==="lost-found",value:"lost-found",id:"lost/found",onChange:w}),t(J,{htmlFor:"lost/found",children:"lost/found"})]}),n(ee,{children:[t(te,{type:"radio",name:"category",checked:c==="for-free",value:"for-free",id:"inGoodHands",onChange:w}),t(J,{htmlFor:"inGoodHands",children:"in good hands"})]}),n(ee,{children:[t(te,{type:"radio",name:"category",checked:c==="sell",value:"sell",id:"sell",onChange:w}),t(J,{htmlFor:"sell",children:"sell"})]})]}),n(Se,{children:[t(A,{children:n(D,{children:[n("p",{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(P,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:p,onChange:x=>{const{value:B}=x.target;h(B)}})]})}),t(A,{children:n(D,{children:["Name pet:",t(P,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:a,onChange:x=>{M(x.target.value)}})]})}),t(A,{children:n(D,{children:["Date of birth:",t(P,{type:"date",name:"birthDate",value:m,onChange:x=>{g(x.target.value)}})]})}),t(A,{children:n(D,{children:["Breed:",t(P,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:v,onChange:x=>{y(x.target.value)}})]})})]}),n(ze,{children:[t(q,{children:t(K,{type:"button",onClick:e,children:"Cancel"})}),t(q,{children:t(K,{type:"button",onClick:()=>{l({title:p,breed:v,name:a,birthDate:m||"unknown",category:c}),d()},children:"Next"})})]})]})},Bt=o.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 150px;
`,At=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,Tt=o.ul`
  display: flex;
  margin-bottom: 40px;
`,se=o.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 90px;
  }
`,de=o.img`
  width: 54px;
  margin-bottom: 20px;
`,ne=o.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,he=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  transition: ${e=>e.theme.transition};
  &:checked + ${ne} {
    transition: ${e=>e.theme.transition};
    color: #f59256;
  }
`,Dt=o.label`
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
`,Pt=o.button`
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
`,jt=o.img`
  width: 47px;
  hegth: 47px;
`,Wt=o.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,Et=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  // display: none;
`,Ot=o.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,_t=o.textarea`
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
`;function Ht(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const Ut=({onClose:e,isPrev:d,notice:l})=>{const i=Ht(),c=f(b=>b.auth.token),r=s.useRef(null),[p,h]=s.useState(i?i.sex:""),[a,M]=s.useState(i?i.place:""),[m,g]=s.useState(i?i.price:""),[v,y]=s.useState(i?i.image:null),[w,C]=s.useState(i?i.imageName:null),[N,G]=s.useState(i?i.imageUrl:null),[$,E]=s.useState(i?i.comments:""),[x,B]=s.useState(!1);W(),s.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:v,imageName:w,imageUrl:N,sex:p,place:a,price:m,comments:$}))});const k=b=>{h(b.target.value)},V=b=>{M(b.target.value)},Le=b=>{g(b.target.value)},Be=b=>{const{files:u}=b.target;if(u[0].size>5242880)return Ee();y(u[0]),u[0]&&C(u[0].name),u&&G(URL.createObjectURL(u[0]))},Ae=b=>{E(b.target.value)},Te=()=>{r.current.click()},De=async b=>{B(!0),b.preventDefault();const u=new FormData;u.append("image",v),u.append("sex",p),u.append("place",a),u.append("price",m||1),u.append("comments",$),u.append("title",l.title),u.append("breed",l.breed),u.append("birthDate",l.birthDate),u.append("category",l.category),u.append("name",l.name);try{const X=await me.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",u,{headers:{Authorization:`Bearer ${c}`}});return localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Pe(),We(),e(),X}catch(X){je(X.response.data.message[0].message)}B(!1)},Pe=()=>{G(null),C(null),y(null),h(""),M(""),g(""),E("")},je=b=>H.error(b),We=()=>H.success("Notice created!"),Ee=()=>H.error("The file must not exceed 5.2 mb!");return t(L,{children:x?t(be,{}):n(L,{children:[t(ae,{}),n(Bt,{name:"newForm",onSubmit:De,children:[t($e,{type:"button",onClick:e,children:t(Ie,{src:ie})}),t(Fe,{children:"Add pet"}),t(At,{children:"The sex*:"}),n(Tt,{children:[n(se,{children:[t(de,{src:Je}),t(he,{type:"radio",name:"sex",id:"male",checked:p==="male",value:"male",onChange:k}),t(ne,{htmlFor:"male",children:"Male"})]}),n(se,{children:[t(de,{src:qe}),t(he,{type:"radio",name:"sex",id:"female",checked:p==="female",value:"female",onChange:k}),t(ne,{htmlFor:"female",children:"Female"})]})]}),n(Se,{children:[t(A,{children:n(D,{children:[n("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(P,{type:"",placeholder:"Type location",name:"place",value:a,onChange:V})]})}),l.category==="sell"&&t(A,{children:n(D,{children:["Price:",t(P,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:m,onChange:Le})]})}),t(A,{children:n(Dt,{children:["Load the pet’s image:",t(Pt,{type:"button",onClick:Te,children:N?t(Wt,{src:N}):t(jt,{src:Ke})}),t(Et,{type:"file",name:"image",ref:r,accept:"image/*,.png,.jpg,.gif,.web",onChange:Be})]})}),t(A,{children:n(Ot,{children:[n("p",{children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(_t,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type comment",name:"comments",value:$,onChange:Ae})]})})]}),n(ze,{children:[t(q,{children:t(K,{onClick:d,children:"Back"})}),t(q,{children:t(K,{type:"submit",children:"Done"})})]})]})]})})},Gt=({onClose:e})=>{const[d,l]=s.useState(!1),[i,c]=s.useState(null);return t(ye,{children:d?t(Ut,{onClose:e,isPrev:()=>{l(!1)},notice:i}):t(Lt,{onClose:e,isNext:()=>{l(!0)},onSubmit:a=>{c(a)}})})},Yt=o.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,Rt=()=>{const[e,d]=s.useState(!1);return n(L,{children:[t(Yt,{children:t("button",{onClick:()=>{d(!0)},children:" create notice"})}),e&&t(Gt,{onClose:()=>{d(!1)}})]})};function Jt({category:e}){const d=f(Q),l=He(),i=W(),c=f(j);s.useEffect(()=>{i(Y("sell")),i(oe("sell")),l("/FindPet/sell",{replace:!0})},[i]);const r=a=>{i(Y(a)),i(oe(a)),l(`/FindPet/${a}`,{replace:!0})},p=a=>{i(Y(a)),i(ue()),l(`/FindPet/${a}`,{replace:!0})},h=a=>{i(Y(a)),i(U()),l(`/FindPet/${a}`,{replace:!0})};return t(Nt,{children:n(Ct,{children:[t(kt,{children:n(Mt,{children:[t(O,{children:t(_,{selected:c===I.lostFound,onClick:()=>r(I.lostFound),children:"lost/found"})}),t(O,{children:t(_,{selected:c===I.free,onClick:()=>r(I.free),children:"in good hands"})}),t(O,{children:t(_,{selected:c===I.sell,onClick:()=>r(I.sell),children:"sell"})}),d&&n(L,{children:[t(O,{children:t(_,{selected:c===I.favorite,onClick:()=>h(I.favorite),children:"favorite ads"})}),t(O,{children:t(_,{selected:c===I.my,onClick:()=>p(I.my),children:"my ads"})})]})]})}),t(Rt,{})]})})}function qt(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}function Kt(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}o.section`
  margin-right: auto;
  margin-left: auto;
`;const Qt=o(Kt)`
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
`,Vt=o.div`
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
`,Xt=o.form`
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
`,pe=o.button`
  padding: 0px 0px;
`,Zt=o.div`
  margin-left: auto;
  margin-right: auto;
`,eo=o.h2`
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
`,to=o(qt)`
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
`,oo=o.input`
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
`;function no(){const[e,d]=s.useState(""),[l,i]=s.useState(null),c=W();f(ke);const r=document.getElementById("input"),p=g=>{i(!0),console.log(l)},h=g=>{g.currentTarget===g.target&&(i(!1),e===""&&c(R("")))};return n(L,{children:[t(eo,{children:"Find your favorite pet"}),t(Zt,{children:n(Xt,{onSubmit:g=>{g.preventDefault(),c(R(e))},children:[t(oo,{id:"input",type:"text",onChange:g=>{d(g.target.value)},value:e,placeholder:"Search",onFocus:p,onBlur:h}),l?null:t(pe,{type:"submit",children:t(to,{})}),l?t(pe,{onClick:g=>{g.preventDefault(),e!==""&&(c(R(e)),i(!1),h(g),r.blur()),e===""&&c(R(""))},children:t(Qt,{})}):null]})})]})}const lo=()=>{const{categoryName:e}=Ue();f(ve),f(j);const d=f(Q),l=W();return s.useEffect(()=>{d&&l(U())},[l]),n(L,{children:[n(Vt,{children:[t(no,{}),t(Jt,{category:e})]}),n(wt,{children:[t(vt,{}),t(Ge,{})]})]})};export{lo as default};
