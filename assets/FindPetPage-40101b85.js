import{s as i,i as ze,j as t,d as x,k as Z,r as c,e as W,n as le,a as o,o as K,Q as de,p as se,q as ce,t as he,v as pe,w as Fe,x as H,y as Se,z as q,A as me,F as A,B as Ae,C as O,D as N,E as ee,G as Le,O as Be}from"./index-38d34edb.js";import{b as Te}from"./index.esm-8c291e39.js";import{G as je}from"./iconBase-f544d020.js";import"./index.esm-f62311d6.js";const ge=e=>e.notices.items,fe=e=>e.notices.favNotices,xe=e=>e.search,R=e=>e.filters.status;const De="/pets-support-project-frontend/assets/male-a0f02fb1.svg",Pe="/pets-support-project-frontend/assets/female-147e65d7.svg",We="/pets-support-project-frontend/assets/plus-94d63496.svg",ue="/pets-support-project-frontend/assets/heart-4779bb70.svg",be="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",Ee=i.li`
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,Oe=i.div`
 display: flex;
 flex-direction: column;
 height: 612px;
`,_e=i.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,He=i.div`
  position: relative;
`,Ye=i.p`
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
`,Ge=i.button`
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
  margin: 20px;
`,J=i.li`
  display: flex;
  margin-bottom: 8px;

  &&:last-child {
  margin-bottom: 0;
`,L=i.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,te=i.button`
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
`;const Je=i.div`
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
`,ye=({children:e})=>ze.createPortal(t(Je,{children:e}),document.querySelector("#modal-root")),Ve=i.div`
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
`,Qe=i.button`
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
`,qe=i.img`
  display: block;
  width: 20px;
  height: 20px;
`,Xe=i.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,Ze=i.div`
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
`,Ke=i.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,et=i.p`
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
`,tt=i.h2`
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
`,M=i.p`
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
`,it=i.ul`
  //   background-color: red;
`,$=i.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,ot=i.p`
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
`,nt=i.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,at=i.div`
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
`,rt=i.button`
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
`,lt=i.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,dt=i.a`
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
`,st=({onClose:e,itemId:d,isFavorite:a})=>{const s=x(Z),[n,h]=c.useState(null),[l,r]=c.useState(a),u=W(),g=()=>{u(l?ce(d):he(d)),r(y=>!y)},S=()=>t("div",{children:t(pe,{to:"/login",children:"You need to log in"})});if(c.useEffect(()=>{le.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${d}`).then(y=>{const f=y.data.data;h(f)})},[]),!n)return;const I=y=>{let f=new Date(y).getDate();f<10&&(f="0"+f);let v=new Date(y).getMonth();v<10&&(v="0"+v);let C=new Date(y).getFullYear();return C<10&&(C="0"+C),f+"."+v+"."+C};return t(ye,{children:o(Ve,{children:[t(Qe,{onClick:()=>e(l),children:t(qe,{src:K,alt:"close_menu_icon"})}),o(Xe,{children:[o(Ze,{children:[t(Ke,{src:n.notice.photo}),t(et,{children:n.notice.category})]}),o("div",{children:[t(tt,{children:n.notice.title}),o(it,{children:[n.notice.name&&o($,{children:[t(M,{children:"Name:"}),t(k,{children:n.notice.name})]}),n.notice.birthDate&&o($,{children:[t(M,{children:"Birthday:"}),t(k,{children:I(n.notice.birthDate)})]}),n.notice.breed&&o($,{children:[t(M,{children:"Breed:"}),t(k,{children:n.notice.breed})]}),o($,{children:[t(M,{children:"Place:"}),t(k,{children:n.notice.place})]}),o($,{children:[t(M,{children:"The sex:"}),t(k,{children:n.notice.sex})]}),o($,{children:[t(M,{children:"UserName:"}),t(k,{children:n.user.name})]}),o($,{children:[t(M,{children:"Email:"}),t(k,{children:n.user.email})]}),o($,{children:[t(M,{children:"Phone:"}),t(k,{children:n.user.mobile})]}),n.notice.category==="sell"&&o($,{children:[t(M,{children:"Price:"}),t(k,{children:`${n.notice.price}$`})]})]})]})]}),o(ot,{children:["comments",o(nt,{children:[": ",n.notice.comments]})]}),o(at,{children:[o(rt,{onClick:()=>{s?g():de(S)},children:[l?"del from":"add to",t(lt,{src:l?be:ue,alt:l?"heartFull":"heart"})]}),t(se,{}),t(dt,{href:"tel:"+n.user.mobile,children:"contact"})]}),t("link",{})]})})},ie=({item:e})=>{const d=x(fe),a=x(Z),s=x(R),n=x(Fe),[h,l]=c.useState(!1),[r,u]=c.useState(!1),g=W(),S=()=>{l(!0)},I=b=>{l(!1),u(b)},y=d.reduce((b,U)=>(b.push(U._id),b),[]);c.useEffect(()=>{u(y.includes(e._id))},[d]);const f=()=>{g(r?ce(e._id):he(e._id)),g(H()),u(b=>!b)},v=async()=>{const b=["sell","lost-found","for-free"];await g(Se(e._id)),b.includes(s)?g(q(s)):g(s==="own-notices"?me():H())},C=()=>t("div",{children:t(pe,{to:"/login",children:"You need to log in"})}),z=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),j=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let p;return z<1?p="Less than a year":z>15?p="very old dog":z>=1&&z<=15?p=j[z-1]:p="unknown",o(Ee,{children:[o(Oe,{children:[o("div",{style:{flexGrow:1},children:[o(He,{children:[t(_e,{src:e.photo,alt:e.title}),t(Ye,{children:e.category}),t(Ge,{onClick:()=>{a?f():de(C)},children:r?t("img",{src:be,alt:"heartFull"}):t("img",{src:ue,alt:"heart"})}),t(se,{})]}),t(Re,{style:{width:"280px"},children:e.title}),o(Ue,{children:[e.breed&&o(J,{children:[t(L,{style:{width:"50px"},children:"Breed:"}),t(L,{style:{marginLeft:"40px"},children:e.breed})]}),o(J,{children:[t(L,{style:{width:"50px"},children:"Place:"}),t(L,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&o(J,{children:[t(L,{style:{width:"50px"},children:"Age:"}),t(L,{style:{marginLeft:"40px"},children:p})]})]})]}),t(te,{style:e.userId!==n._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:S,children:"Learn more"}),e.userId==n._id&&o(te,{onClick:v,children:["Delete",t(Te,{width:"16px",height:"17px"})]})]}),h&&t(st,{itemId:e._id,isFavorite:r,onClose:I})]})},ct=i.ul`
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
`,oe=i.ul`
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
`,ht=()=>{const e=x(ge),d=x(fe),a=x(R),n=x(xe).toLowerCase();let h,l;return e!==void 0&&e.length>0&&(h=e.filter(r=>r.title.toLowerCase().includes(n))),d!==void 0&&d.length>0&&(l=d.filter(r=>r.title.toLowerCase().includes(n))),t(A,{children:a!=="fav-notice"?t(A,{children:h!==void 0&&h.length>=1&&t(oe,{children:h.map(r=>t(ie,{item:r},r._id))})}):t(A,{children:t(A,{children:l!==void 0&&l.length>=1&&t(oe,{children:l.map(r=>t(ie,{item:r},r._id))})})})})},pt=i.div`
  @media (${e=>e.theme.media.desktop}) {
    margin-right: auto;
  }
`,mt=i.ul`
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
`,gt=i.div`
  width: 0px;
  height: 0px;
  @media (${e=>e.theme.media.tablet}) {
    background-color: ${e=>e.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`,ft=i.div`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
  }
`,xt=i.button`
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
`,P=({selected:e=!1,type:d="button",children:a,...s})=>t(xt,{style:{backgroundColor:e&&"rgba(255, 113, 47, 1)"},type:d,...s,children:a});function ut({category:e}){const d=Ae(),a=W(),s=x(R);c.useEffect(()=>{a(O("sell")),a(q("sell")),d("/FindPet/sell",{replace:!0})},[a]);const n=r=>{a(O(r)),a(q(r)),d(`/FindPet/${r}`,{replace:!0})},h=r=>{a(O(r)),a(me()),d(`/FindPet/${r}`,{replace:!0})},l=r=>{a(O(r)),a(H()),d(`/FindPet/${r}`,{replace:!0})};return t("section",{children:o(ft,{children:[t(pt,{children:o(mt,{children:[t(D,{children:t(P,{selected:s===N.lostFound,onClick:()=>n(N.lostFound),children:"lost/found"})}),t(D,{children:t(P,{selected:s===N.free,onClick:()=>n(N.free),children:"in good hands"})}),t(D,{children:t(P,{selected:s===N.sell,onClick:()=>n(N.sell),children:"sell"})}),o(A,{children:[t(D,{children:t(P,{selected:s===N.favorite,onClick:()=>l(N.favorite),children:"favorite ads"})}),t(D,{children:t(P,{selected:s===N.my,onClick:()=>h(N.my),children:"my ads"})})]})]})}),t(gt,{})]})})}function bt(e){return je({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"10",cy:"10",r:"7"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"15",y2:"15"}}]})(e)}const yt=i.div`
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
`,wt=i.form`
  position: relative;
`,vt=i.button`
  padding: 0px 0px;
`,Nt=i.div`
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
`,Ct=i.h2`
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
`,Mt=i(bt)`
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
`,kt=i.input`
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
`;function $t(){const[e,d]=c.useState(""),a=W();return x(xe),o(A,{children:[t(Ct,{children:"Find your favorite pet"}),o(Nt,{children:[o(wt,{onSubmit:l=>{l.preventDefault(),a(ee(e))},children:[t(kt,{type:"text",onChange:l=>{d(l.target.value)},value:e,placeholder:"Search"}),t(vt,{type:"submit",children:t(Mt,{})})]}),t("button",{onClick:l=>{l.preventDefault(),d(""),a(ee(""))},children:"CLEAR"})]})]})}const It=i.form`
  position: relative;
  width: 608px;
  min-height: 885px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
`,we=i.button`
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
`,ve=i.img`
  display: block;
  width: 20px;
  height: 20px;
`,Ne=i.h2`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
`,zt=i.p`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 28px;
`,Ft=i.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`,V=i.li`
  :not(:last-child) {
    margin-right: 12px;
  }
  :first-child {
    margin-bottom: 16px;
  }
`,_=i.label`
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
`,Q=i.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${_} {
    transition: ${e=>e.theme.transition};
    background: #F59256;
`,Ce=i.ul`
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
`,Me=i.ul`
  display: flex;
  justify-content: center;
`,Y=i.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,G=i.button`
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
`,St=({onClose:e,isNext:d,onSubmit:a})=>{const[s,n]=c.useState("sell"),[h,l]=c.useState(""),[r,u]=c.useState(""),[g,S]=c.useState(""),[I,y]=c.useState(""),f=p=>{n(p.target.value)};return o(It,{children:[t(we,{type:"button",onClick:e,children:t(ve,{src:K})}),t(Ne,{children:"Add pet"}),t(zt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),o(Ft,{children:[o(V,{children:[t(Q,{type:"radio",name:"category",value:"lost/found",id:"lost/found",onChange:f}),t(_,{htmlFor:"lost/found",children:"lost/found"})]}),o(V,{children:[t(Q,{type:"radio",name:"category",value:"in good hands",id:"inGoodHands",onChange:f}),t(_,{htmlFor:"inGoodHands",children:"in good hands"})]}),o(V,{children:[t(Q,{type:"radio",name:"category",defaultChecked:!0,value:"sell",id:"sell",onChange:f}),t(_,{htmlFor:"sell",children:"sell"})]})]}),o(Ce,{children:[t(F,{children:o(B,{children:["Tittle of ad*:",t(T,{type:"text",placeholder:"Type name",name:"title",value:h,onChange:p=>{l(p.target.value)}})]})}),t(F,{children:o(B,{children:["Name pet:",t(T,{type:"text",placeholder:"Type name pet",name:"name",value:r,onChange:p=>{u(p.target.value)}})]})}),t(F,{children:o(B,{children:["Date of birth:",t(T,{type:"date",name:"birthDate",value:g,onChange:p=>{S(p.target.value)}})]})}),t(F,{children:o(B,{children:["Breed:",t(T,{placeholder:"Type breed",name:"breed",value:I,onChange:p=>{y(p.target.value)}})]})})]}),o(Me,{children:[t(Y,{children:t(G,{type:"button",onClick:e,children:"Cancel"})}),t(Y,{children:t(G,{type:"button",onClick:()=>{const p=g?g.split("-").reverse().join("."):"unknown",b={title:h,breed:I,name:r,birthDate:p,category:s.value};a(b),console.log(b),d()},children:"Next"})})]})]})},At=i.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 90px;
`,Lt=i.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,Bt=i.ul`
  display: flex;
  margin-bottom: 40px;
`,ne=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 90px;
  }
`,ae=i.img`
  width: 54px;
  margin-bottom: 20px;
`,X=i.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,re=i.input`
  opacity: 0;
  height: 0;
  width:0;
  line-heigth: 0 ;
  overflow: hidden;
  padding: 0;
  margin:0;
  transition: ${e=>e.theme.transition};
  &:checked + ${X} {
    transition: ${e=>e.theme.transition};
    color:  #F59256;;
`,Tt=i.label`
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
`,jt=i.button`
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
`,Dt=i.img`
  width: 47px;
  hegth: 47px;
`,Pt=i.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,Wt=i.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-heigth: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  // display: none;
`,Et=i.label`
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
`,Ot=i.textarea`
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
`,_t=({onClose:e,isPrev:d,notice:a})=>{const s=c.useRef(null),[n,h]=c.useState(""),[l,r]=c.useState(""),[u,g]=c.useState(""),[S,I]=c.useState(null),[y,f]=c.useState(null),[v,C]=c.useState(null),[E,z]=c.useState(""),j=w=>{h(w.target.value)},p=w=>{r(w.target.value)},b=w=>{g(w.target.value)},U=w=>{const{files:m}=w.target;I(m[0]),m[0]&&f(m[0].name),m&&C(URL.createObjectURL(m[0]))},ke=w=>{z(w.target.value)},$e=()=>{s.current.click()};return o(At,{name:"newForm",onSubmit:async w=>{w.preventDefault();const m=new FormData;m.append("image",S),m.append("sex",n),m.append("place",l),m.append("price",u||1),m.append("comments",E),m.append("title",a.title),m.append("breed",a.breed),m.append("birthDate",a.birthDate),m.append("category",a.category),m.append("name",a.name);const Ie=await le.post("http://localhost:3002/api/notices/notice",m,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VmZmY5NTAyOWVmNjIxMTZmNmQ2YmEiLCJpYXQiOjE2NzcxNjczMjAsImV4cCI6MTY3NzIwMzMyMH0.mdIhH5Eswm5yS7M1EAFVp5EGJCwBcbUaybMjx3cORPs"}});console.log(m),console.log(Ie)},children:[t(we,{type:"button",onClick:e,children:t(ve,{src:K})}),t(Ne,{children:"Add pet"}),t(Lt,{children:"The sex*:"}),o(Bt,{children:[o(ne,{children:[t(ae,{src:De}),t(re,{type:"radio",name:"sex",id:"male",value:"male",onChange:j}),t(X,{htmlFor:"male",children:"Male"})]}),o(ne,{children:[t(ae,{src:Pe}),t(re,{type:"radio",name:"sex",id:"female",value:"female",onChange:j}),t(X,{htmlFor:"female",children:"Female"})]})]}),o(Ce,{children:[t(F,{children:o(B,{children:["Location*:",t(T,{placeholder:"Type location",name:"place",value:l,onChange:p})]})}),a.category==="sell"&&t(F,{children:o(B,{children:["Price*:",t(T,{type:"number",placeholder:"Type price",name:"price",value:u,onChange:b})]})}),t(F,{children:o(Tt,{children:["Load the pet’s image:",t(jt,{type:"button",onClick:$e,children:v?t(Pt,{src:v}):t(Dt,{src:We})}),t(Wt,{type:"file",name:"image",ref:s,accept:"image/*,.png,.jpg,.gif,.web",onChange:U})]})}),t(F,{children:o(Et,{children:["Comments:",t(Ot,{placeholder:"Type comment",name:"comments",value:E,onChange:ke})]})})]}),o(Me,{children:[t(Y,{children:t(G,{onClick:d,children:"Back"})}),t(Y,{children:t(G,{type:"submit",children:"Done"})})]})]})},Ht=({onClose:e})=>{const[d,a]=c.useState(!1),[s,n]=c.useState(null);return t(ye,{children:d?t(_t,{onClose:e,isPrev:()=>{a(!1)},notice:s}):t(St,{onClose:e,isNext:()=>{a(!0)},onSubmit:u=>{n(u)}})})},Vt=()=>{const{categoryName:e}=Le();x(ge),x(R);const d=x(Z),[a,s]=c.useState(!1),n=W(),h=()=>{s(!0)},l=()=>{s(!1)};return c.useEffect(()=>{d&&n(H())},[n]),o(A,{children:[o(yt,{children:[t($t,{}),t(ut,{category:e})]}),o(ct,{children:[t("button",{onClick:h,children:"open modal"}),t(ht,{}),a&&t(Ht,{onClose:l}),t(Be,{})]})]})};export{Vt as default};
