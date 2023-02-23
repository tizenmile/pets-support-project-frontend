import{s as i,i as ee,j as t,d as h,k as W,r as w,e as B,l as te,a as o,n as ie,Q as E,o as H,p as O,q as Y,t as G,v as oe,w as q,x as R,F as y,y as M,z as j,A as m,B as ne,C as A,D as ae,O as re}from"./index-70b8d19b.js";import{a as de}from"./index.esm-e3134a26.js";import{G as le}from"./iconBase-c9023644.js";const ce=e=>e.notices.items,U=e=>e.notices.favNotices,Q=e=>e.search,V=e=>e.filters.status;const J="/pets-support-project-frontend/assets/heart-4779bb70.svg",K="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",se=i.li`
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`,he=i.div``,pe=i.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,me=i.div`
  position: relative;
`,xe=i.p`
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
`,ge=i.button`
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
`,fe=i.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,ue=i.ul`
  margin-top: 20px;
  margin-left: 20px;
`,S=i.li`
  display: flex;
`,$=i.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,D=i.button`
  margin: 20px auto 12px auto;
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
`;const be=i.div`
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
`,we=({children:e})=>ee.createPortal(t(be,{children:e}),document.querySelector("#modal-root")),ye=i.div`
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
`,ve=i.button`
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
`,$e=i.img`
  display: block;
  width: 20px;
  height: 20px;
`,ke=i.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,Ne=i.div`
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
`,Ce=i.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,Fe=i.p`
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
`,ze=i.h2`
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
`,g=i.p`
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
`,f=i.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,Me=i.ul`
  //   background-color: red;
`,u=i.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,Be=i.p`
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
`,Ie=i.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,Te=i.div`
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
`,Le=i.button`
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
`,Se=i.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,We=i.a`
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
`,je=({onClose:e,itemId:d,isFavorite:l})=>{const c=h(W),[n,s]=w.useState(null),[r,a]=w.useState(l),z=B(),I=()=>{z(r?O(d):Y(d)),a(x=>!x)},T=()=>t("div",{children:t(G,{to:"/login",children:"You need to log in"})});if(w.useEffect(()=>{te.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${d}`).then(x=>{const b=x.data.data;s(b)})},[]),!n)return;const L=x=>{let b=new Date(x).getDate();b<10&&(b="0"+b);let k=new Date(x).getMonth();k<10&&(k="0"+k);let p=new Date(x).getFullYear();return p<10&&(p="0"+p),b+"."+k+"."+p};return t(we,{children:o(ye,{children:[t(ve,{onClick:()=>e(r),children:t($e,{src:ie,alt:"close_menu_icon"})}),o(ke,{children:[o(Ne,{children:[t(Ce,{src:n.notice.photo}),t(Fe,{children:n.notice.category})]}),o("div",{children:[t(ze,{children:n.notice.title}),o(Me,{children:[o(u,{children:[t(g,{children:"Name:"}),t(f,{children:n.notice.name})]}),o(u,{children:[t(g,{children:"Birthday:"}),t(f,{children:L(n.notice.birthDate)})]}),o(u,{children:[t(g,{children:"Breed:"}),t(f,{children:n.notice.breed})]}),o(u,{children:[t(g,{children:"Place:"}),t(f,{children:n.notice.place})]}),o(u,{children:[t(g,{children:"The sex:"}),t(f,{children:n.notice.sex})]}),o(u,{children:[t(g,{children:"UserName:"}),t(f,{children:n.user.name})]}),o(u,{children:[t(g,{children:"Email:"}),t(f,{children:n.user.email})]}),o(u,{children:[t(g,{children:"Phone:"}),t(f,{children:n.user.mobile})]}),n.notice.category==="sell"&&o(u,{children:[t(g,{children:"Price:"}),t(f,{children:`${n.notice.price}$`})]})]})]})]}),o(Be,{children:["comments",o(Ie,{children:[": ",n.notice.comments]})]}),o(Te,{children:[o(Le,{onClick:()=>{c?I():E(T)},children:[r?"del from":"add to",t(Se,{src:r?K:J,alt:r?"heartFull":"heart"})]}),t(H,{}),t(We,{href:"tel:"+n.user.mobile,children:"contact"})]}),t("link",{})]})})},P=({item:e})=>{const d=h(U),l=h(W),c=h(oe),[n,s]=w.useState(!1),[r,a]=w.useState(!1),z=B();q();const I=()=>{s(!0)},T=v=>{s(!1),a(v)},L=d.reduce((v,Z)=>(v.push(Z._id),v),[]);w.useEffect(()=>{a(L.includes(e._id))},[d]);const x=()=>{z(r?O(e._id):Y(e._id)),z(R()),a(v=>!v)},b=()=>t("div",{children:t(G,{to:"/login",children:"You need to log in"})}),p=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),X=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let N;return p<1?N="Less than a year":p>15?N="very old dog":p>=1&&p<=15?N=X[p-1]:N="unknown",o(se,{children:[o(he,{children:[o(me,{children:[t(pe,{src:e.photo,alt:e.title}),t(xe,{children:e.category}),t(ge,{onClick:()=>{l?x():E(b)},children:r?t("img",{src:K,alt:"heartFull"}):t("img",{src:J,alt:"heart"})}),t(H,{})]}),t(fe,{style:{width:"280px"},children:e.title}),o(ue,{children:[o(S,{children:[t($,{style:{width:"50px"},children:"Breed:"}),t($,{style:{marginLeft:"40px"},children:e.breed})]}),o(S,{children:[t($,{style:{width:"50px"},children:"Place:"}),t($,{style:{marginLeft:"40px"},children:e.place})]}),o(S,{children:[t($,{style:{width:"50px"},children:"Age:"}),t($,{style:{marginLeft:"40px"},children:N})]})]}),t(D,{style:e.userId!==c.id&&{marginBottom:"32px"},onClick:I,children:"Learn more"}),e.userId===c.id&&o(D,{children:["Delete",t(de,{style:{width:"16px",height:"17px"}})]})]}),n&&t(je,{itemId:e._id,isFavorite:r,onClose:T})]})},Ae=i.ul`
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
`,_=i.ul`
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
`,De=()=>{const e=h(ce),d=h(U),l=h(V),n=h(Q).toLowerCase();let s,r;return e!==void 0&&e.length>0&&(s=e.filter(a=>a.title.toLowerCase().includes(n))),d!==void 0&&d.length>0&&(r=d.filter(a=>a.title.toLowerCase().includes(n))),t(y,{children:l!=="fav-notice"?t(y,{children:s!==void 0&&s.length>=1&&t(_,{children:s.map(a=>t(P,{item:a},a._id))})}):t(y,{children:t(y,{children:r!==void 0&&r.length>=1&&t(_,{children:r.map(a=>t(P,{item:a},a._id))})})})})},Pe=i.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,_e=i.ul`
  display: flex;
  flex-wrap: wrap;
`,C=i.li`
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
`,Ee=i.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,He=i.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
  }
`,Oe=i.button`
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
`,F=({selected:e=!1,type:d="button",children:l,...c})=>t(Oe,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:d,...c,children:l});function Ye({category:e}){const d=q(),l=B(),c=h(V);w.useEffect(()=>{l(M("sell")),l(j("sell")),d("/FindPet/sell",{replace:!0})},[l]);const n=a=>{l(M(a)),l(j(a)),d(`/FindPet/${a}`,{replace:!0})},s=a=>{l(M(a)),l(ne()),d(`/FindPet/${a}`,{replace:!0}),console.log("dispatch getOwnNotices")},r=a=>{l(M(a)),l(R()),d(`/FindPet/${a}`,{replace:!0})};return t("section",{children:o(He,{children:[t(Pe,{children:o(_e,{children:[t(C,{children:t(F,{selected:c===m.lostFound,onClick:()=>n(m.lostFound),children:"lost/found"})}),t(C,{children:t(F,{selected:c===m.free,onClick:()=>n(m.free),children:"in good hands"})}),t(C,{children:t(F,{selected:c===m.sell,onClick:()=>n(m.sell),children:"sell"})}),o(y,{children:[t(C,{children:t(F,{selected:c===m.favorite,onClick:()=>r(m.favorite),children:"favorite ads"})}),t(C,{children:t(F,{selected:c===m.my,onClick:()=>s(m.my),children:"my ads"})})]})]})}),t(Ee,{})]})})}function Ge(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}const qe=i.div`
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
`,Re=i.form`
  position: relative;
`,Ue=i.button`
  padding: 0px 0px;
`,Qe=i.div`
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
`,Ve=i.h2`
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
`,Je=i(Ge)`
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
`,Ke=i.input`
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
`;function Xe(){const[e,d]=w.useState(""),l=B();return h(Q),o(y,{children:[t(Ve,{children:"Find your favorite pet"}),o(Qe,{children:[o(Re,{onSubmit:r=>{r.preventDefault(),l(A(e))},children:[t(Ke,{type:"text",onChange:r=>{d(r.target.value)},value:e,placeholder:"Search"}),t(Ue,{type:"submit",children:t(Je,{})})]}),t("button",{onClick:r=>{r.preventDefault(),d(""),l(A(""))},children:"CLEAR"})]})]})}const it=()=>{const{categoryName:e}=ae();return h(W),o(y,{children:[o(qe,{children:[t(Xe,{}),t(Ye,{category:e})]}),o(Ae,{children:[t(De,{}),t(re,{})]})]})};export{it as default};
