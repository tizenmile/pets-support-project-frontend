import{s as o,m as Oe,j as t,d as x,n as Q,r as c,e as H,o as me,a as i,q as ne,Q as O,t as ae,v as fe,w as ge,x as xe,y as _e,z as J,B as He,C as oe,D as ue,F as z,A as be,E as Ue,G,I as M,J as Y,K as Ge,O as Ye}from"./index-62ebc714.js";import{b as Re}from"./index.esm-48eb2988.js";import{G as ye}from"./iconBase-b070a195.js";const we=e=>e.notices.items,ve=e=>e.notices.favNotices,Ne=e=>e.search,_=e=>e.filters.status,Je=e=>e.notices.isLoading,qe="/pets-support-project-frontend/assets/male-a0f02fb1.svg",Ke="/pets-support-project-frontend/assets/female-147e65d7.svg",Qe="/pets-support-project-frontend/assets/plus-94d63496.svg",ke="/pets-support-project-frontend/assets/heart-4779bb70.svg",Ce="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",Ve=o.li`
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
`;const at=o.div`
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
`,Me=({children:e})=>Oe.createPortal(t(at,{children:e}),document.querySelector("#modal-root")),rt=o.div`
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
`,lt=o.button`
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
`,ct=o.img`
  display: block;
  width: 20px;
  height: 20px;
`,st=o.div`
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
`,ht=o.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,pt=o.p`
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
`,mt=o.h2`
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
`,ft=o.ul`
  //   background-color: red;
`,F=o.li`
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
`,xt=o.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,ut=o.div`
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
`,bt=o.button`
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
`,yt=o.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,wt=o.a`
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
`,vt=({onClose:e,itemId:d,isFavorite:l})=>{const n=x(Q),[a,u]=c.useState(null),[s,h]=c.useState(l),r=H(),$=()=>{r(s?fe(d):ge(d)),h(b=>!b)},p=()=>t("div",{children:t(xe,{to:"/login",children:"You need to log in"})});if(c.useEffect(()=>{me.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${d}`).then(b=>{const y=b.data.data;u(y)})},[]),!a)return;const m=b=>{let y=new Date(b).getDate();y<10&&(y="0"+y);let v=new Date(b).getMonth();v<10&&(v="0"+v);let k=new Date(b).getFullYear();return k<10&&(k="0"+k),y+"."+v+"."+k};return t(Me,{children:i(rt,{children:[t(lt,{onClick:()=>e(s),children:t(ct,{src:ne,alt:"close_menu_icon"})}),i(st,{children:[i(dt,{children:[t(ht,{src:a.notice.photo}),t(pt,{children:a.notice.category})]}),i("div",{children:[t(mt,{children:a.notice.title}),i(ft,{children:[a.notice.name&&i(F,{children:[t(I,{children:"Name:"}),t(S,{children:a.notice.name})]}),a.notice.birthDate&&i(F,{children:[t(I,{children:"Birthday:"}),t(S,{children:m(a.notice.birthDate)})]}),a.notice.breed&&i(F,{children:[t(I,{children:"Breed:"}),t(S,{children:a.notice.breed})]}),i(F,{children:[t(I,{children:"Place:"}),t(S,{children:a.notice.place})]}),i(F,{children:[t(I,{children:"The sex:"}),t(S,{children:a.notice.sex})]}),i(F,{children:[t(I,{children:"UserName:"}),t(S,{children:a.user.name})]}),i(F,{children:[t(I,{children:"Email:"}),t(S,{children:a.user.email})]}),i(F,{children:[t(I,{children:"Phone:"}),t(S,{children:a.user.mobile})]}),a.notice.category==="sell"&&i(F,{children:[t(I,{children:"Price:"}),t(S,{children:`${a.notice.price}$`})]})]})]})]}),i(gt,{children:["comments",i(xt,{children:[": ",a.notice.comments]})]}),i(ut,{children:[i(bt,{onClick:()=>{n?$():O(p)},children:[s?"del from":"add to",t(yt,{src:s?Ce:ke,alt:s?"heartFull":"heart"})]}),t(ae,{}),t(wt,{href:"tel:"+a.user.mobile,children:"contact"})]}),t("link",{})]})})},le=({item:e})=>{const d=x(ve),l=x(Q),n=x(_),a=x(_e),[u,s]=c.useState(!1),[h,r]=c.useState(!1),$=x(_),p=H(),m=()=>{s(!0)},b=N=>{s(!1),r(N)},y=d.reduce((N,V)=>(N.push(V._id),N),[]);c.useEffect(()=>{r(y.includes(e._id))},[d]);const v=async()=>{r(N=>!N),await p(h?fe(e._id):ge(e._id)),$==="fav-notice"&&p(J())},k=async()=>{const N=["sell","lost-found","for-free"];await p(He(e._id)),N.includes(n)?p(oe(n)):p(n==="own-notices"?ue():J())},B=()=>t("div",{children:t(xe,{to:"/login",children:"You need to log in"})}),C=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),j=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let f;C<1?f="Less than a year":C>15?f="very old dog":C>=1&&C<=15?f=j[C-1]:f="unknown";const A=e.category;return i(Ve,{children:[i(Xe,{children:[i("div",{style:{flexGrow:1},children:[i(et,{children:[t(Ze,{src:e.photo,alt:e.title}),i(tt,{children:[A==="sell"&&"sell",A==="for-free"&&"in good hands",A==="lost-found"&&"lost/found"]}),t(ot,{onClick:()=>{l?v():O(B)},children:h?t("img",{src:Ce,alt:"heartFull"}):t("img",{src:ke,alt:"heart"})}),t(ae,{})]}),t(it,{style:{width:"280px"},children:e.title}),i(nt,{children:[e.breed&&i(Z,{children:[t(T,{style:{width:"50px"},children:"Breed:"}),t(T,{style:{marginLeft:"40px"},children:e.breed})]}),i(Z,{children:[t(T,{style:{width:"50px"},children:"Place:"}),t(T,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&i(Z,{children:[t(T,{style:{width:"50px"},children:"Age:"}),t(T,{style:{marginLeft:"40px"},children:f})]})]})]}),t(re,{style:e.userId!==a._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:m,children:"Learn more"}),e.userId==a._id&&i(re,{onClick:k,children:["Delete",t(Re,{width:"16px",height:"17px"})]})]}),u&&t(vt,{itemId:e._id,isFavorite:h,onClose:b})]})},Nt=o.ul`
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
`,kt=()=>{const e=x(we),d=x(ve),l=x(_),a=x(Ne).toLowerCase(),u=x(Je);let s,h;return e!==void 0&&e.length>0&&(s=e.filter(r=>r.title.toLowerCase().includes(a))),d!==void 0&&d.length>0&&(h=d.filter(r=>r.title.toLowerCase().includes(a))),t(z,{children:u?t(be,{}):l!=="fav-notice"?t(z,{children:s!==void 0&&s.length>=1&&t(ce,{children:s.map(r=>t(le,{item:r},r._id))})}):t(z,{children:h!==void 0&&h.length>=1&&t(ce,{children:h.map(r=>t(le,{item:r},r._id))})})})},Ct=o.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,Mt=o.ul`
  display: flex;
  flex-wrap: wrap;
`,W=o.li`
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
`,E=({selected:e=!1,type:d="button",children:l,...n})=>t(It,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:d,...n,children:l}),St=o.form`
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
`,R=o.label`
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
  &:checked + ${R} {
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
`,L=o.li`
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
`;function Lt(){return JSON.parse(window.localStorage.getItem("notice"))}const Bt=({onClose:e,isNext:d,onSubmit:l})=>{const n=Lt(),[a,u]=c.useState(n?n.category:"sell"),[s,h]=c.useState(n?n.title:""),[r,$]=c.useState(n?n.name:""),[p,m]=c.useState(n?n.birthDate:""),[b,y]=c.useState(n?n.breed:"");c.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:s,breed:b,name:r,birthDate:p,category:a}))},[s,b,r,p,a]);const v=f=>{u(f.target.value)};return i(St,{children:[t($e,{type:"button",onClick:e,children:t(Ie,{src:ne})}),t(Se,{children:"Add pet"}),t(Ft,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),i(zt,{children:[i(ee,{children:[t(te,{type:"radio",name:"category",checked:a==="lost-found",value:"lost-found",id:"lost/found",onChange:v}),t(R,{htmlFor:"lost/found",children:"lost/found"})]}),i(ee,{children:[t(te,{type:"radio",name:"category",checked:a==="for-free",value:"for-free",id:"inGoodHands",onChange:v}),t(R,{htmlFor:"inGoodHands",children:"in good hands"})]}),i(ee,{children:[t(te,{type:"radio",name:"category",checked:a==="sell",value:"sell",id:"sell",onChange:v}),t(R,{htmlFor:"sell",children:"sell"})]})]}),i(Fe,{children:[t(L,{children:i(D,{children:["Tittle of ad*:",t(P,{type:"text",min:"2",max:"48",required:!0,placeholder:"Type name",name:"title",value:s,onChange:f=>{h(f.target.value)}})]})}),t(L,{children:i(D,{children:["Name pet:",t(P,{type:"text",min:"2",max:"16",placeholder:"Type name pet",name:"name",value:r,onChange:f=>{$(f.target.value)}})]})}),t(L,{children:i(D,{children:["Date of birth:",t(P,{type:"date",name:"birthDate",value:p,onChange:f=>{m(f.target.value)}})]})}),t(L,{children:i(D,{children:["Breed:",t(P,{type:"text",min:"2",max:"24",placeholder:"Type breed",name:"breed",value:b,onChange:f=>{y(f.target.value)}})]})})]}),i(ze,{children:[t(q,{children:t(K,{type:"button",onClick:e,children:"Cancel"})}),t(q,{children:t(K,{type:"button",onClick:()=>{l({title:s,breed:b,name:r,birthDate:p,category:a}),d()},children:"Next"})})]})]})},At=o.form`
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
`,ie=o.label`
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
`;function Ut(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const Gt=({onClose:e,isPrev:d,notice:l})=>{const n=Ut(),a=x(w=>w.auth.token),u=c.useRef(null),[s,h]=c.useState(n?n.sex:""),[r,$]=c.useState(n?n.place:""),[p,m]=c.useState(n?n.price:""),[b,y]=c.useState(n?n.image:null),[v,k]=c.useState(n?n.imageName:null),[B,U]=c.useState(n?n.imageUrl:null),[C,j]=c.useState(n?n.comments:""),[f,A]=c.useState(!1);c.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:b,imageName:v,imageUrl:B,sex:s,place:r,price:p,comments:C}))});const N=w=>{h(w.target.value)},V=w=>{$(w.target.value)},Le=w=>{m(w.target.value)},Be=w=>{const{files:g}=w.target;if(g[0].size>5242880)return Ee();y(g[0]),g[0]&&k(g[0].name),g&&U(URL.createObjectURL(g[0]))},Ae=w=>{j(w.target.value)},Te=()=>{u.current.click()},De=async w=>{A(!0),w.preventDefault();const g=new FormData;g.append("image",b),g.append("sex",s),g.append("place",r),g.append("price",p||1),g.append("comments",C),g.append("title",l.title),g.append("breed",l.breed),g.append("birthDate",l.birthDate),g.append("category",l.category),g.append("name",l.name);try{const X=await me.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",g,{headers:{Authorization:`Bearer ${a}`}});console.log(X),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Pe(),We(),e()}catch(X){console.log(X),je()}A(!1)},Pe=()=>{U(null),k(null),y(null),h(""),$(""),m(""),j("")},je=()=>O.error("Please enter correct data!"),We=()=>O.success("Notice created!"),Ee=()=>O.error("The file must not exceed 5.2 mb!");return i(z,{children:[t(ae,{}),f?t(be,{}):t(z,{children:i(At,{name:"newForm",onSubmit:De,children:[t($e,{type:"button",onClick:e,children:t(Ie,{src:ne})}),t(Se,{children:"Add pet"}),t(Tt,{children:"The sex*:"}),i(Dt,{children:[i(se,{children:[t(de,{src:qe}),t(he,{type:"radio",name:"sex",id:"male",checked:s==="male",value:"male",onChange:N}),t(ie,{htmlFor:"male",children:"Male"})]}),i(se,{children:[t(de,{src:Ke}),t(he,{type:"radio",name:"sex",id:"female",checked:s==="female",value:"female",onChange:N}),t(ie,{htmlFor:"female",children:"Female"})]})]}),i(Fe,{children:[t(L,{children:i(D,{children:["Location*:",t(P,{type:"",placeholder:"Type location",name:"place",value:r,onChange:V})]})}),l.category==="sell"&&t(L,{children:i(D,{children:["Price*:",t(P,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:p,onChange:Le})]})}),t(L,{children:i(Pt,{children:["Load the pet’s image:",t(jt,{type:"button",onClick:Te,children:B?t(Et,{src:B}):t(Wt,{src:Qe})}),t(Ot,{type:"file",name:"image",ref:u,accept:"image/*,.png,.jpg,.gif,.web",onChange:Be})]})}),t(L,{children:i(_t,{children:["Comments:",t(Ht,{type:"text",min:"8",max:"120",required:!0,placeholder:"Type comment",name:"comments",value:C,onChange:Ae})]})})]}),i(ze,{children:[t(q,{children:t(K,{onClick:d,children:"Back"})}),t(q,{children:t(K,{type:"submit",children:"Done"})})]})]})})]})},Yt=({onClose:e})=>{const[d,l]=c.useState(!1),[n,a]=c.useState(null);return t(Me,{children:d?t(Gt,{onClose:e,isPrev:()=>{l(!1)},notice:n}):t(Bt,{onClose:e,isNext:()=>{l(!0)},onSubmit:r=>{a(r)}})})},Rt=o.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,Jt=()=>{const[e,d]=c.useState(!1);return i(z,{children:[t(Rt,{children:t("button",{onClick:()=>{d(!0)},children:"create notice"})}),e&&t(Yt,{onClose:()=>{d(!1)}})]})};function qt({category:e}){const d=x(Q),l=Ue(),n=H(),a=x(_);c.useEffect(()=>{n(G("sell")),n(oe("sell")),l("/FindPet/sell",{replace:!0})},[n]);const u=r=>{n(G(r)),n(oe(r)),l(`/FindPet/${r}`,{replace:!0})},s=r=>{n(G(r)),n(ue()),l(`/FindPet/${r}`,{replace:!0})},h=r=>{n(G(r)),n(J()),l(`/FindPet/${r}`,{replace:!0})};return t("section",{children:i($t,{children:[t(Ct,{children:i(Mt,{children:[t(W,{children:t(E,{selected:a===M.lostFound,onClick:()=>u(M.lostFound),children:"lost/found"})}),t(W,{children:t(E,{selected:a===M.free,onClick:()=>u(M.free),children:"in good hands"})}),t(W,{children:t(E,{selected:a===M.sell,onClick:()=>u(M.sell),children:"sell"})}),d&&i(z,{children:[t(W,{children:t(E,{selected:a===M.favorite,onClick:()=>h(M.favorite),children:"favorite ads"})}),t(W,{children:t(E,{selected:a===M.my,onClick:()=>s(M.my),children:"my ads"})})]})]})}),t(Jt,{}),t("div",{})]})})}function Kt(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}function Qt(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}const Vt=o(Qt)`
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
`,Zt=o.form`
  position: relative;
`,pe=o.button`
  padding: 0px 0px;
`,eo=o.div`
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
    width: 20px;
    height: 20px;
  }
  @media (${e=>e.theme.media.tablet}) {
    width: 24px;
    height: 24px;
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
    font-size: ${e=>e.theme.fontSizes.s};
    padding-left: 12px;
  }
  @media (${e=>e.theme.media.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xm};
    padding-left: 20px;
  }
`;function no(){const[e,d]=c.useState(""),[l,n]=c.useState(null),a=H();x(Ne);const u=document.getElementById("input"),s=m=>{n(!0),console.log(l)},h=m=>{m.currentTarget===m.target&&(n(!1),e===""&&a(Y("")))};return i(z,{children:[t(to,{children:"Find your favorite pet"}),t(eo,{children:i(Zt,{onSubmit:m=>{m.preventDefault(),a(Y(e))},children:[t(io,{id:"input",type:"text",onChange:m=>{d(m.target.value)},value:e,placeholder:"Search",onFocus:s,onBlur:h}),l?null:t(pe,{type:"submit",children:t(oo,{})}),l?t(pe,{onClick:m=>{m.preventDefault(),e!==""&&(a(Y(e)),n(!1),h(m),u.blur()),e===""&&a(Y(""))},children:t(Vt,{})}):null]})})]})}const co=()=>{const{categoryName:e}=Ge();x(we),x(_);const d=x(Q),l=H();return c.useEffect(()=>{d&&l(J())},[l]),i(z,{children:[i(Xt,{children:[t(no,{}),t(qt,{category:e})]}),i(Nt,{children:[t(kt,{}),t(Ye,{})]})]})};export{co as default};
