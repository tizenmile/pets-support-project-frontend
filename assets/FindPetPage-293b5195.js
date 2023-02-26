import{s as n,d as g,t as Z,r as c,e as O,v as be,j as t,a as i,w as R,x as le,Q as Y,y as ce,z as ye,B as we,C as ve,D as _e,E as He,G as ae,I as Ne,F as L,A as Ce,J as Ue,K as q,M as I,N as K,P as Ge,O as Ye}from"./index-2e77f26e.js";import{M as de,a as Re}from"./ModalBackdrop-f6b88fd7.js";import{G as ke}from"./iconBase-d75685cf.js";const Me=e=>e.notices.items,$e=e=>e.notices.favNotices,Ie=e=>e.search,W=e=>e.filters.status,Je=e=>e.notices.isLoading,qe="/pets-support-project-frontend/assets/male-a0f02fb1.svg",Ke="/pets-support-project-frontend/assets/female-147e65d7.svg",Qe="/pets-support-project-frontend/assets/plus-94d63496.svg",Se="/pets-support-project-frontend/assets/heart-4779bb70.svg",Fe="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",Ve=n.li`
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,Xe=n.div`
 display: flex;
 flex-direction: column;
 height: 612px;
`,Ze=n.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,et=n.div`
  position: relative;
`,tt=n.p`
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
`,nt=n.button`
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
`,it=n.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,ot=n.ul`
  margin: 20px;
`,ne=n.li`
  display: flex;
  margin-bottom: 8px;

  &&:last-child {
  margin-bottom: 0;
`,D=n.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,se=n.button`
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
`;n.img`
 width: 16px;
 height: 17px;
 fill: currentColor;
`;const at=n.div`
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
`,rt=n.button`
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
`,lt=n.img`
  display: block;
  width: 20px;
  height: 20px;
`,ct=n.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,dt=n.div`
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
`,st=n.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,ht=n.p`
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
`,pt=n.h2`
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
`,S=n.p`
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
`,F=n.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,mt=n.ul`
  //   background-color: red;
`,z=n.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,gt=n.p`
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
`,ft=n.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,xt=n.div`
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
`,ut=n.button`
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
`,bt=n.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,yt=n.a`
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
`,wt=({onClose:e,itemId:d,isFavorite:l})=>{const o=g(Z),s=g(W),[a,h]=c.useState(null),[p,r]=c.useState(l),N=O(),x=()=>{r(w=>!w),N(p?ye(d):we(d))},m=()=>t("div",{children:t(ve,{to:"/login",children:"You need to log in"})});if(c.useEffect(()=>{be.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${d}`).then(w=>{const b=w.data.data;h(b)})},[]),!a)return;const u=w=>{let b=new Date(w).getDate();b<10&&(b="0"+b);let M=new Date(w).getMonth();M<10&&(M="0"+M);let k=new Date(w).getFullYear();return k<10&&(k="0"+k),b+"."+M+"."+k};return t(de,{children:i(at,{children:[t(rt,{onClick:()=>{e(p),s==="fav-notice"&&N(R())},children:t(lt,{src:le,alt:"close_menu_icon"})}),i(ct,{children:[i(dt,{children:[t(st,{src:a.notice.photo}),t(ht,{children:a.notice.category})]}),i("div",{children:[t(pt,{children:a.notice.title}),i(mt,{children:[a.notice.name&&i(z,{children:[t(S,{children:"Name:"}),t(F,{children:a.notice.name})]}),a.notice.birthDate&&i(z,{children:[t(S,{children:"Birthday:"}),t(F,{children:u(a.notice.birthDate)})]}),a.notice.breed&&i(z,{children:[t(S,{children:"Breed:"}),t(F,{children:a.notice.breed})]}),i(z,{children:[t(S,{children:"Place:"}),t(F,{children:a.notice.place})]}),i(z,{children:[t(S,{children:"The sex:"}),t(F,{children:a.notice.sex})]}),i(z,{children:[t(S,{children:"UserName:"}),t(F,{children:a.user.name})]}),i(z,{children:[t(S,{children:"Email:"}),t(F,{children:a.user.email})]}),i(z,{children:[t(S,{children:"Phone:"}),t(F,{children:a.user.mobile})]}),a.notice.category==="sell"&&i(z,{children:[t(S,{children:"Price:"}),t(F,{children:`${a.notice.price}$`})]})]})]})]}),i(gt,{children:["comments",i(ft,{children:[": ",a.notice.comments]})]}),i(xt,{children:[i(ut,{onClick:()=>{o?x():Y(m)},children:[p?"del from":"add to",t(bt,{src:p?Fe:Se,alt:p?"heartFull":"heart"})]}),t(ce,{}),t(yt,{href:"tel:"+a.user.mobile,children:"contact"})]}),t("link",{})]})})},vt=n.div`
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
`,Nt=n.div`
display: flex;
justify-content: center;
margin: 20px 0 ;
`,he=n.button`
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
`,Ct=({onClose:e,deleteNotice:d})=>t(de,{children:i(vt,{children:[t("h3",{style:{textAlign:"center"},children:"Are you sure?"}),i(Nt,{children:[t(he,{onClick:e,children:"Cancel"}),t(he,{onClick:d,children:"Delete notice"})]})]})}),pe=({item:e})=>{const d=g($e),l=g(Z),o=g(W),s=g(_e),[a,h]=c.useState(!1),[p,r]=c.useState(!1),[N,x]=c.useState(!1),m=g(W),u=O(),w=()=>{h(!0)},b=()=>{r(C=>!C)},M=C=>{h(!1),x(C)},k=d.reduce((C,ee)=>(C.push(ee._id),C),[]);c.useEffect(()=>{x(k.includes(e._id))},[d]);const E=async()=>{x(C=>!C),await u(N?ye(e._id):we(e._id)),m==="fav-notice"&&u(R())},T=async()=>{const C=["sell","lost-found","for-free"];await u(He(e._id)),C.includes(o)?u(ae(o)):u(o==="own-notices"?Ne():R())},_=()=>t("div",{children:t(ve,{to:"/login",children:"You need to log in"})}),$=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),J=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let A;$<1?A="Less than a year":$>15?A="very old dog":$>=1&&$<=15?A=J[$-1]:A="unknown";const H=e.category;return i(Ve,{children:[i(Xe,{children:[i("div",{style:{flexGrow:1},children:[i(et,{children:[t(Ze,{src:e.photo,alt:e.title}),i(tt,{children:[H==="sell"&&"sell",H==="for-free"&&"in good hands",H==="lost-found"&&"lost/found"]}),t(nt,{onClick:()=>{l?E():Y(_)},children:N?t("img",{src:Fe,alt:"heartFull"}):t("img",{src:Se,alt:"heart"})}),t(ce,{})]}),t(it,{style:{width:"280px"},children:e.title}),i(ot,{children:[e.breed&&i(ne,{children:[t(D,{style:{width:"50px"},children:"Breed:"}),t(D,{style:{marginLeft:"40px"},children:e.breed})]}),i(ne,{children:[t(D,{style:{width:"50px"},children:"Place:"}),t(D,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&i(ne,{children:[t(D,{style:{width:"50px"},children:"Age:"}),t(D,{style:{marginLeft:"40px"},children:A})]})]})]}),t(se,{style:e.userId!==s._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:w,children:"Learn more"}),e.userId==s._id&&i(se,{onClick:b,children:["Delete",t(Re,{width:"16px",height:"17px"})]})]}),a&&t(wt,{itemId:e._id,isFavorite:N,onClose:M}),p&&t(Ct,{onClose:b,deleteNotice:T})]})},kt=n.ul`
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
`,me=n.ul`
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
`,Mt=()=>{const e=g(Me),d=g($e),l=g(W),s=g(Ie).toLowerCase(),a=g(Je);let h,p;return e!==void 0&&e.length>0&&(h=e.filter(r=>r.title.toLowerCase().includes(s))),d!==void 0&&d.length>0&&(p=d.filter(r=>r.title.toLowerCase().includes(s))),t(L,{children:a?t(Ce,{}):l!=="fav-notice"?t(L,{children:h!==void 0&&h.length>=1&&t(me,{children:h.map(r=>t(pe,{item:r},r._id))})}):t(L,{children:p!==void 0&&p.length>=1&&t(me,{children:p.map(r=>t(pe,{item:r},r._id))})})})},$t=n.section``,It=n.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,St=n.ul`
  display: flex;
  flex-wrap: wrap;
`,U=n.li`
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
`,Ft=n.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
  }
`,zt=n.button`
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
`,G=({selected:e=!1,type:d="button",children:l,...o})=>t(zt,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:d,...o,children:l}),Lt=n.form`
  position: relative;
  width: 608px;
  min-height: 885px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
`,ze=n.button`
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
`,Le=n.img`
  display: block;
  width: 20px;
  height: 20px;
`,Be=n.h2`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
`,Bt=n.p`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 28px;
`,At=n.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`,ie=n.li`
  :not(:last-child) {
    margin-right: 12px;
  }
  :first-child {
    margin-bottom: 16px;
  }
`,Q=n.label`
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
`,oe=n.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${Q} {
    transition: ${e=>e.theme.transition};
    background: #F59256;
`,Ae=n.ul`
  margin-bottom: 40px;
`,j=n.label`
  display: block;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,P=n.input`
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
`,B=n.li`
  margin-bottom: 28px;
`,Te=n.ul`
  display: flex;
  justify-content: center;
`,V=n.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,X=n.button`
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
`;function Tt(){return JSON.parse(window.localStorage.getItem("notice"))}const Dt=({onClose:e,isNext:d,onSubmit:l})=>{const o=Tt(),[s,a]=c.useState(o?o.category:"sell"),[h,p]=c.useState(o?o.title:""),[r,N]=c.useState(o?o.name:""),[x,m]=c.useState(o?o.birthDate:null),[u,w]=c.useState(o?o.breed:"");c.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:h,breed:u,name:r,birthDate:x,category:s}))},[h,u,r,x,s]);const b=v=>{a(v.target.value)};return i(Lt,{children:[t(ze,{type:"button",onClick:e,children:t(Le,{src:le})}),t(Be,{children:"Add pet"}),t(Bt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),i(At,{children:[i(ie,{children:[t(oe,{type:"radio",name:"category",checked:s==="lost-found",value:"lost-found",id:"lost/found",onChange:b}),t(Q,{htmlFor:"lost/found",children:"lost/found"})]}),i(ie,{children:[t(oe,{type:"radio",name:"category",checked:s==="for-free",value:"for-free",id:"inGoodHands",onChange:b}),t(Q,{htmlFor:"inGoodHands",children:"in good hands"})]}),i(ie,{children:[t(oe,{type:"radio",name:"category",checked:s==="sell",value:"sell",id:"sell",onChange:b}),t(Q,{htmlFor:"sell",children:"sell"})]})]}),i(Ae,{children:[t(B,{children:i(j,{children:[i("p",{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(P,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:h,onChange:v=>{const{value:$}=v.target;p($)}})]})}),t(B,{children:i(j,{children:["Name pet:",t(P,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:r,onChange:v=>{N(v.target.value)}})]})}),t(B,{children:i(j,{children:["Date of birth:",t(P,{type:"date",name:"birthDate",value:x,onChange:v=>{m(v.target.value)}})]})}),t(B,{children:i(j,{children:["Breed:",t(P,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:u,onChange:v=>{w(v.target.value)}})]})})]}),i(Te,{children:[t(V,{children:t(X,{type:"button",onClick:e,children:"Cancel"})}),t(V,{children:t(X,{type:"button",onClick:()=>{l({title:h,breed:u,name:r,birthDate:x||"unknown",category:s}),d()},children:"Next"})})]})]})},jt=n.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 150px;
`,Pt=n.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,Wt=n.ul`
  display: flex;
  margin-bottom: 40px;
`,ge=n.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 90px;
  }
`,fe=n.img`
  width: 54px;
  margin-bottom: 20px;
`,re=n.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,xe=n.input`
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
`,Ot=n.label`
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
`,Et=n.button`
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
`,_t=n.img`
  width: 47px;
  hegth: 47px;
`,Ht=n.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,Ut=n.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  // display: none;
`,Gt=n.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,Yt=n.textarea`
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
`;function Rt(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const Jt=({onClose:e,isPrev:d,notice:l})=>{const o=Rt(),s=g(y=>y.auth.token),a=c.useRef(null),[h,p]=c.useState(o?o.sex:""),[r,N]=c.useState(o?o.place:""),[x,m]=c.useState(o?o.price:""),[u,w]=c.useState(o?o.image:null),[b,M]=c.useState(o?o.imageName:null),[k,E]=c.useState(o?o.imageUrl:null),[T,_]=c.useState(o?o.comments:""),[v,$]=c.useState(!1);O(),c.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:u,imageName:b,imageUrl:k,sex:h,place:r,price:x,comments:T}))});const J=y=>{p(y.target.value)},A=y=>{N(y.target.value)},H=y=>{m(y.target.value)},C=y=>{const{files:f}=y.target;if(f[0].size>5242880)return Ee();w(f[0]),f[0]&&M(f[0].name),f&&E(URL.createObjectURL(f[0]))},ee=y=>{_(y.target.value)},De=()=>{a.current.click()},je=async y=>{$(!0),y.preventDefault();const f=new FormData;f.append("image",u),f.append("sex",h),f.append("place",r),f.append("price",x||1),f.append("comments",T),f.append("title",l.title),f.append("breed",l.breed),f.append("birthDate",l.birthDate),f.append("category",l.category),f.append("name",l.name);try{const te=await be.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",f,{headers:{Authorization:`Bearer ${s}`}});return localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Pe(),Oe(),e(),te}catch(te){We(te.response.data.message[0].message)}$(!1)},Pe=()=>{E(null),M(null),w(null),p(""),N(""),m(""),_("")},We=y=>Y.error(y),Oe=()=>Y.success("Notice created!"),Ee=()=>Y.error("The file must not exceed 5.2 mb!");return t(L,{children:v?t(Ce,{}):i(L,{children:[t(ce,{}),i(jt,{name:"newForm",onSubmit:je,children:[t(ze,{type:"button",onClick:e,children:t(Le,{src:le})}),t(Be,{children:"Add pet"}),t(Pt,{children:"The sex*:"}),i(Wt,{children:[i(ge,{children:[t(fe,{src:qe}),t(xe,{type:"radio",name:"sex",id:"male",checked:h==="male",value:"male",onChange:J}),t(re,{htmlFor:"male",children:"Male"})]}),i(ge,{children:[t(fe,{src:Ke}),t(xe,{type:"radio",name:"sex",id:"female",checked:h==="female",value:"female",onChange:J}),t(re,{htmlFor:"female",children:"Female"})]})]}),i(Ae,{children:[t(B,{children:i(j,{children:[i("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(P,{type:"",placeholder:"Type location",name:"place",value:r,onChange:A})]})}),l.category==="sell"&&t(B,{children:i(j,{children:["Price:",t(P,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:x,onChange:H})]})}),t(B,{children:i(Ot,{children:["Load the pet’s image:",t(Et,{type:"button",onClick:De,children:k?t(Ht,{src:k}):t(_t,{src:Qe})}),t(Ut,{type:"file",name:"image",ref:a,accept:"image/*,.png,.jpg,.gif,.web",onChange:C})]})}),t(B,{children:i(Gt,{children:[i("p",{children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(Yt,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type comment",name:"comments",value:T,onChange:ee})]})})]}),i(Te,{children:[t(V,{children:t(X,{onClick:d,children:"Back"})}),t(V,{children:t(X,{type:"submit",children:"Done"})})]})]})]})})},qt=({onClose:e})=>{const[d,l]=c.useState(!1),[o,s]=c.useState(null);return t(de,{children:d?t(Jt,{onClose:e,isPrev:()=>{l(!1)},notice:o}):t(Dt,{onClose:e,isNext:()=>{l(!0)},onSubmit:r=>{s(r)}})})},Kt=n.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,Qt=()=>{const[e,d]=c.useState(!1);return i(L,{children:[t(Kt,{children:t("button",{onClick:()=>{d(!0)},children:" create notice"})}),e&&t(qt,{onClose:()=>{d(!1)}})]})};function Vt({category:e}){const d=g(Z),l=Ue(),o=O(),s=g(W);c.useEffect(()=>{o(q("sell")),o(ae("sell")),l("/FindPet/sell",{replace:!0})},[o]);const a=r=>{o(q(r)),o(ae(r)),l(`/FindPet/${r}`,{replace:!0})},h=r=>{o(q(r)),o(Ne()),l(`/FindPet/${r}`,{replace:!0})},p=r=>{o(q(r)),o(R()),l(`/FindPet/${r}`,{replace:!0})};return t($t,{children:i(Ft,{children:[t(It,{children:i(St,{children:[t(U,{children:t(G,{selected:s===I.lostFound,onClick:()=>a(I.lostFound),children:"lost/found"})}),t(U,{children:t(G,{selected:s===I.free,onClick:()=>a(I.free),children:"in good hands"})}),t(U,{children:t(G,{selected:s===I.sell,onClick:()=>a(I.sell),children:"sell"})}),d&&i(L,{children:[t(U,{children:t(G,{selected:s===I.favorite,onClick:()=>p(I.favorite),children:"favorite ads"})}),t(U,{children:t(G,{selected:s===I.my,onClick:()=>h(I.my),children:"my ads"})})]})]})}),t(Qt,{})]})})}function Xt(e){return ke({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}function Zt(e){return ke({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}n.section`
  margin-right: auto;
  margin-left: auto;
`;const en=n(Zt)`
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
`,tn=n.div`
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
`,nn=n.form`
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
`,ue=n.button`
  padding: 0px 0px;
`,on=n.div`
  margin-left: auto;
  margin-right: auto;
`,an=n.h2`
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
`,rn=n(Xt)`
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
`,ln=n.input`
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
`;function cn(){const[e,d]=c.useState(""),[l,o]=c.useState(null),s=O();g(Ie);const a=document.getElementById("input"),h=m=>{o(!0),console.log(l)},p=m=>{m.currentTarget===m.target&&(o(!1),e===""&&s(K("")))};return i(L,{children:[t(an,{children:"Find your favorite pet"}),t(on,{children:i(nn,{onSubmit:m=>{m.preventDefault(),s(K(e))},children:[t(ln,{id:"input",type:"text",onChange:m=>{d(m.target.value)},value:e,placeholder:"Search",onFocus:h,onBlur:p}),l?null:t(ue,{type:"submit",children:t(rn,{})}),l?t(ue,{onClick:m=>{m.preventDefault(),e!==""&&(s(K(e)),o(!1),p(m),a.blur()),e===""&&s(K(""))},children:t(en,{})}):null]})})]})}const pn=()=>{const{categoryName:e}=Ge();g(Me),g(W);const d=g(Z),l=O();return c.useEffect(()=>{d&&l(R())},[l]),i(L,{children:[i(tn,{children:[t(cn,{}),t(Vt,{category:e})]}),i(kt,{children:[t(Mt,{}),t(Ye,{})]})]})};export{pn as default};
