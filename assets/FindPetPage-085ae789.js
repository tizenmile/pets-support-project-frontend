import{s as i,i as Ie,j as t,d as y,k as V,r as s,e as W,n as ae,a as o,o as Q,Q as re,p as le,q as de,t as se,v as ce,w as ze,x as pe,y as q,F as A,z as O,A as X,B as v,C as Fe,D as Z,E as Se,O as Ae}from"./index-600c1967.js";import{a as Le}from"./index.esm-e9bf1894.js";import{G as Be}from"./iconBase-421e6284.js";import"./index.esm-f62311d6.js";const Te=e=>e.notices.items,he=e=>e.notices.favNotices,me=e=>e.search,ge=e=>e.filters.status;const je="/pets-support-project-frontend/assets/male-a0f02fb1.svg",De="/pets-support-project-frontend/assets/female-147e65d7.svg",Pe="/pets-support-project-frontend/assets/plus-94d63496.svg",fe="/pets-support-project-frontend/assets/heart-4779bb70.svg",xe="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",We=i.li`
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`,Ee=i.div``,Oe=i.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,He=i.div`
  position: relative;
`,_e=i.p`
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
`,Ye=i.button`
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
`,Re=i.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,Ue=i.ul`
  margin-top: 20px;
  margin-left: 20px;
`,R=i.li`
  display: flex;
`,L=i.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,K=i.button`
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
`;const Ge=i.div`
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
`,ue=({children:e})=>Ie.createPortal(t(Ge,{children:e}),document.querySelector("#modal-root")),Je=i.div`
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
`,Ve=i.button`
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
`,Qe=i.img`
  display: block;
  width: 20px;
  height: 20px;
`,qe=i.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,Xe=i.div`
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
`,Ze=i.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,Ke=i.p`
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
`,et=i.h2`
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
`,k=i.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,tt=i.ul`
  //   background-color: red;
`,$=i.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,it=i.p`
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
`,ot=i.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,nt=i.div`
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
`,at=i.button`
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
`,rt=i.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,lt=i.a`
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
`,dt=({onClose:e,itemId:d,isFavorite:a})=>{const c=y(V),[n,p]=s.useState(null),[l,r]=s.useState(a),x=W(),N=()=>{x(l?de(d):se(d)),r(u=>!u)},S=()=>t("div",{children:t(ce,{to:"/login",children:"You need to log in"})});if(s.useEffect(()=>{ae.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${d}`).then(u=>{const g=u.data.data;p(g)})},[]),!n)return;const I=u=>{let g=new Date(u).getDate();g<10&&(g="0"+g);let M=new Date(u).getMonth();M<10&&(M="0"+M);let f=new Date(u).getFullYear();return f<10&&(f="0"+f),g+"."+M+"."+f};return t(ue,{children:o(Je,{children:[t(Ve,{onClick:()=>e(l),children:t(Qe,{src:Q,alt:"close_menu_icon"})}),o(qe,{children:[o(Xe,{children:[t(Ze,{src:n.notice.photo}),t(Ke,{children:n.notice.category})]}),o("div",{children:[t(et,{children:n.notice.title}),o(tt,{children:[o($,{children:[t(C,{children:"Name:"}),t(k,{children:n.notice.name})]}),o($,{children:[t(C,{children:"Birthday:"}),t(k,{children:I(n.notice.birthDate)})]}),o($,{children:[t(C,{children:"Breed:"}),t(k,{children:n.notice.breed})]}),o($,{children:[t(C,{children:"Place:"}),t(k,{children:n.notice.place})]}),o($,{children:[t(C,{children:"The sex:"}),t(k,{children:n.notice.sex})]}),o($,{children:[t(C,{children:"UserName:"}),t(k,{children:n.user.name})]}),o($,{children:[t(C,{children:"Email:"}),t(k,{children:n.user.email})]}),o($,{children:[t(C,{children:"Phone:"}),t(k,{children:n.user.mobile})]}),n.notice.category==="sell"&&o($,{children:[t(C,{children:"Price:"}),t(k,{children:`${n.notice.price}$`})]})]})]})]}),o(it,{children:["comments",o(ot,{children:[": ",n.notice.comments]})]}),o(nt,{children:[o(at,{onClick:()=>{c?N():re(S)},children:[l?"del from":"add to",t(rt,{src:l?xe:fe,alt:l?"heartFull":"heart"})]}),t(le,{}),t(lt,{href:"tel:"+n.user.mobile,children:"contact"})]}),t("link",{})]})})},ee=({item:e})=>{const d=y(he),a=y(V),c=y(ze),[n,p]=s.useState(!1),[l,r]=s.useState(!1),x=W();pe();const N=()=>{p(!0)},S=w=>{p(!1),r(w)},I=d.reduce((w,m)=>(w.push(m._id),w),[]);s.useEffect(()=>{r(I.includes(e._id))},[d]);const u=()=>{x(l?de(e._id):se(e._id)),x(q()),r(w=>!w)},g=()=>t("div",{children:t(ce,{to:"/login",children:"You need to log in"})}),f=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),j=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let z;return f<1?z="Less than a year":f>15?z="very old dog":f>=1&&f<=15?z=j[f-1]:z="unknown",o(We,{children:[o(Ee,{children:[o(He,{children:[t(Oe,{src:e.photo,alt:e.title}),t(_e,{children:e.category}),t(Ye,{onClick:()=>{a?u():re(g)},children:l?t("img",{src:xe,alt:"heartFull"}):t("img",{src:fe,alt:"heart"})}),t(le,{})]}),t(Re,{style:{width:"280px"},children:e.title}),o(Ue,{children:[o(R,{children:[t(L,{style:{width:"50px"},children:"Breed:"}),t(L,{style:{marginLeft:"40px"},children:e.breed})]}),o(R,{children:[t(L,{style:{width:"50px"},children:"Place:"}),t(L,{style:{marginLeft:"40px"},children:e.place})]}),o(R,{children:[t(L,{style:{width:"50px"},children:"Age:"}),t(L,{style:{marginLeft:"40px"},children:z})]})]}),t(K,{style:e.userId!==c.id&&{marginBottom:"32px"},onClick:N,children:"Learn more"}),e.userId===c.id&&o(K,{children:["Delete",t(Le,{style:{width:"16px",height:"17px"}})]})]}),n&&t(dt,{itemId:e._id,isFavorite:l,onClose:S})]})},st=i.ul`
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
`,te=i.ul`
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
`,ct=()=>{const e=y(Te),d=y(he),a=y(ge),n=y(me).toLowerCase();let p,l;return e!==void 0&&e.length>0&&(p=e.filter(r=>r.title.toLowerCase().includes(n))),d!==void 0&&d.length>0&&(l=d.filter(r=>r.title.toLowerCase().includes(n))),t(A,{children:a!=="fav-notice"?t(A,{children:p!==void 0&&p.length>=1&&t(te,{children:p.map(r=>t(ee,{item:r},r._id))})}):t(A,{children:t(A,{children:l!==void 0&&l.length>=1&&t(te,{children:l.map(r=>t(ee,{item:r},r._id))})})})})},pt=i.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,ht=i.ul`
  display: flex;
  flex-wrap: wrap;
`,D=i.li`
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
`,mt=i.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,gt=i.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
  }
`,ft=i.button`
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
`,P=({selected:e=!1,type:d="button",children:a,...c})=>t(ft,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:d,...c,children:a});function xt({category:e}){const d=pe(),a=W(),c=y(ge);s.useEffect(()=>{a(O("sell")),a(X("sell")),d("/FindPet/sell",{replace:!0})},[a]);const n=r=>{a(O(r)),a(X(r)),d(`/FindPet/${r}`,{replace:!0})},p=r=>{a(O(r)),a(Fe()),d(`/FindPet/${r}`,{replace:!0}),console.log("dispatch getOwnNotices")},l=r=>{a(O(r)),a(q()),d(`/FindPet/${r}`,{replace:!0})};return t("section",{children:o(gt,{children:[t(pt,{children:o(ht,{children:[t(D,{children:t(P,{selected:c===v.lostFound,onClick:()=>n(v.lostFound),children:"lost/found"})}),t(D,{children:t(P,{selected:c===v.free,onClick:()=>n(v.free),children:"in good hands"})}),t(D,{children:t(P,{selected:c===v.sell,onClick:()=>n(v.sell),children:"sell"})}),o(A,{children:[t(D,{children:t(P,{selected:c===v.favorite,onClick:()=>l(v.favorite),children:"favorite ads"})}),t(D,{children:t(P,{selected:c===v.my,onClick:()=>p(v.my),children:"my ads"})})]})]})}),t(mt,{})]})})}function ut(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}const bt=i.div`
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
`,yt=i.form`
  position: relative;
`,wt=i.button`
  padding: 0px 0px;
`,vt=i.div`
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
`,Nt=i.h2`
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
`,Mt=i(ut)`
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
`,Ct=i.input`
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
`;function kt(){const[e,d]=s.useState(""),a=W();return y(me),o(A,{children:[t(Nt,{children:"Find your favorite pet"}),o(vt,{children:[o(yt,{onSubmit:l=>{l.preventDefault(),a(Z(e))},children:[t(Ct,{type:"text",onChange:l=>{d(l.target.value)},value:e,placeholder:"Search"}),t(wt,{type:"submit",children:t(Mt,{})})]}),t("button",{onClick:l=>{l.preventDefault(),d(""),a(Z(""))},children:"CLEAR"})]})]})}const $t=i.form`
  position: relative;
  width: 608px;
  min-height: 885px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
`,be=i.button`
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
`,ye=i.img`
  display: block;
  width: 20px;
  height: 20px;
`,we=i.h2`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
`,It=i.p`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 28px;
`,zt=i.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`,U=i.li`
  :not(:last-child) {
    margin-right: 12px;
  }
  :first-child {
    margin-bottom: 16px;
  }
`,H=i.label`
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
`,G=i.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${H} {
    transition: ${e=>e.theme.transition};
    background: #F59256;
`,ve=i.ul`
  margin-bottom: 40px;
`,B=i.label`
  display: block;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,T=i.input`
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
`,F=i.li`
  margin-bottom: 28px;
`,Ne=i.ul`
  display: flex;
  justify-content: center;
`,_=i.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,Y=i.button`
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
`,Ft=({onClose:e,isNext:d,onSubmit:a})=>{const[c,n]=s.useState("sell"),[p,l]=s.useState(""),[r,x]=s.useState(""),[N,S]=s.useState(""),[I,u]=s.useState(""),g=m=>{n(m.target.value)};return o($t,{children:[t(be,{type:"button",onClick:e,children:t(ye,{src:Q})}),t(we,{children:"Add pet"}),t(It,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),o(zt,{children:[o(U,{children:[t(G,{type:"radio",name:"category",value:"lost/found",id:"lost/found",onChange:g}),t(H,{htmlFor:"lost/found",children:"lost/found"})]}),o(U,{children:[t(G,{type:"radio",name:"category",value:"in good hands",id:"inGoodHands",onChange:g}),t(H,{htmlFor:"inGoodHands",children:"in good hands"})]}),o(U,{children:[t(G,{type:"radio",name:"category",defaultChecked:!0,value:"sell",id:"sell",onChange:g}),t(H,{htmlFor:"sell",children:"sell"})]})]}),o(ve,{children:[t(F,{children:o(B,{children:["Tittle of ad*:",t(T,{type:"text",placeholder:"Type name",name:"title",value:p,onChange:m=>{l(m.target.value)}})]})}),t(F,{children:o(B,{children:["Name pet:",t(T,{type:"text",placeholder:"Type name pet",name:"name",value:r,onChange:m=>{x(m.target.value)}})]})}),t(F,{children:o(B,{children:["Date of birth:",t(T,{type:"date",name:"birthDate",value:N,onChange:m=>{S(m.target.value)}})]})}),t(F,{children:o(B,{children:["Breed:",t(T,{placeholder:"Type breed",name:"breed",value:I,onChange:m=>{u(m.target.value)}})]})})]}),o(Ne,{children:[t(_,{children:t(Y,{type:"button",onClick:e,children:"Cancel"})}),t(_,{children:t(Y,{type:"button",onClick:()=>{const m=N?N.split("-").reverse().join("."):"unknown",E={title:p,breed:I,name:r,birthDate:m,category:c.value};a(E),console.log(E),d()},children:"Next"})})]})]})},St=i.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 90px;
`,At=i.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,Lt=i.ul`
  display: flex;
  margin-bottom: 40px;
`,ie=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 90px;
  }
`,oe=i.img`
  width: 54px;
  margin-bottom: 20px;
`,J=i.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,ne=i.input`
  opacity: 0;
  height: 0;
  width:0;
  line-heigth: 0 ;
  overflow: hidden;
  padding: 0;
  margin:0;
  transition: ${e=>e.theme.transition};
  &:checked + ${J} {
    transition: ${e=>e.theme.transition};
    color:  #F59256;;
`,Bt=i.label`
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
`,Tt=i.button`
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
`,jt=i.img`
  width: 47px;
  hegth: 47px;
`,Dt=i.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,Pt=i.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-heigth: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  // display: none;
`,Wt=i.label`
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
`,Et=i.textarea`
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
`,Ot=({onClose:e,isPrev:d,notice:a})=>{const c=s.useRef(null),[n,p]=s.useState(""),[l,r]=s.useState(""),[x,N]=s.useState(""),[S,I]=s.useState(null),[u,g]=s.useState(null),[M,f]=s.useState(null),[j,z]=s.useState(""),w=b=>{p(b.target.value)},m=b=>{r(b.target.value)},E=b=>{N(b.target.value)},Me=b=>{const{files:h}=b.target;I(h[0]),h[0]&&g(h[0].name),h&&f(URL.createObjectURL(h[0]))},Ce=b=>{z(b.target.value)},ke=()=>{c.current.click()};return o(St,{name:"newForm",onSubmit:async b=>{b.preventDefault();const h=new FormData;h.append("image",S),h.append("sex",n),h.append("place",l),h.append("price",x||1),h.append("comments",j),h.append("title",a.title),h.append("breed",a.breed),h.append("birthDate",a.birthDate),h.append("category",a.category),h.append("name",a.name);const $e=await ae.post("http://localhost:3002/api/notices/notice",h,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VmZmY5NTAyOWVmNjIxMTZmNmQ2YmEiLCJpYXQiOjE2NzcxNjczMjAsImV4cCI6MTY3NzIwMzMyMH0.mdIhH5Eswm5yS7M1EAFVp5EGJCwBcbUaybMjx3cORPs"}});console.log(h),console.log($e)},children:[t(be,{type:"button",onClick:e,children:t(ye,{src:Q})}),t(we,{children:"Add pet"}),t(At,{children:"The sex*:"}),o(Lt,{children:[o(ie,{children:[t(oe,{src:je}),t(ne,{type:"radio",name:"sex",id:"male",value:"male",onChange:w}),t(J,{htmlFor:"male",children:"Male"})]}),o(ie,{children:[t(oe,{src:De}),t(ne,{type:"radio",name:"sex",id:"female",value:"female",onChange:w}),t(J,{htmlFor:"female",children:"Female"})]})]}),o(ve,{children:[t(F,{children:o(B,{children:["Location*:",t(T,{placeholder:"Type location",name:"place",value:l,onChange:m})]})}),a.category==="sell"&&t(F,{children:o(B,{children:["Price*:",t(T,{type:"number",placeholder:"Type price",name:"price",value:x,onChange:E})]})}),t(F,{children:o(Bt,{children:["Load the pet’s image:",t(Tt,{type:"button",onClick:ke,children:M?t(Dt,{src:M}):t(jt,{src:Pe})}),t(Pt,{type:"file",name:"image",ref:c,accept:"image/*,.png,.jpg,.gif,.web",onChange:Me})]})}),t(F,{children:o(Wt,{children:["Comments:",t(Et,{placeholder:"Type comment",name:"comments",value:j,onChange:Ce})]})})]}),o(Ne,{children:[t(_,{children:t(Y,{onClick:d,children:"Back"})}),t(_,{children:t(Y,{type:"submit",children:"Done"})})]})]})},Ht=({onClose:e})=>{const[d,a]=s.useState(!1),[c,n]=s.useState(null);return t(ue,{children:d?t(Ot,{onClose:e,isPrev:()=>{a(!1)},notice:c}):t(Ft,{onClose:e,isNext:()=>{a(!0)},onSubmit:x=>{n(x)}})})},Jt=()=>{const{categoryName:e}=Se(),d=y(V),[a,c]=s.useState(!1),n=W(),p=()=>{c(!0)},l=()=>{c(!1)};return s.useEffect(()=>{d&&n(q())},[n]),o(A,{children:[o(bt,{children:[t(kt,{}),t(xt,{category:e})]}),o(st,{children:[t("button",{onClick:p,children:"open modal"}),t(ct,{}),a&&t(Ht,{onClose:l}),t(Ae,{})]})]})};export{Jt as default};
