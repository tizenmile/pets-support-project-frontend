import{s as i,o as A,j as e,d as g,p as I,r as x,e as T,q as E,a as n,t as P,Q as B,l as L,v as j,w as D,x as W,y as Y,z as H,A as O,B as q}from"./index-4986a0bd.js";const U=t=>t.notices.items,G=t=>t.notices.favNotices,S="/pets-support-project-frontend/assets/heart-4779bb70.svg",_="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",Q=i.li`
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`,J=i.div``,K=i.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,R=i.div`
  position: relative;
`,V=i.p`
  width: 158px;
  position: absolute;
  top: 20px;
  padding: 6px 0 7px 20px;
  border-radius: 0 ${t=>t.theme.radii.large} ${t=>t.theme.radii.large} 0;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.04em;
  background-color: rgba(255, 255, 255, 0.6);
  color: #111111;
`,X=i.button`
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
`,Z=i.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,tt=i.ul`
  margin-top: 20px;
  margin-left: 20px;
`,C=i.li`
  display: flex;
`,m=i.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,z=i.button`
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
`;const et=i.div`
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
`,it=({children:t})=>A.createPortal(e(et,{children:t}),document.querySelector("#modal-root")),nt=i.div`
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
`,ot=i.button`
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
  transition: ${t=>t.theme.transition};
  :hover {
    background: #f59256;
    color: #ffffff;
    transition: ${t=>t.theme.transition};
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 34px;
    height: 34px;
    top: 20px;
    right: 20px;
  }
`,at=i.img`
  display: block;
  width: 20px;
  height: 20px;
`,rt=i.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,dt=i.div`
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
`,lt=i.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,st=i.p`
  position: absolute;
  top: 20px;
  min-width: 158px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 0px 40px 40px 0px;
  font-family: ${t=>t.theme.fonts.main};
  font-style: normal;
  font-weight: ${t=>t.theme.fontWeights.semiBold};
  font-size: 12px;
  line-height: 1.36;
  letter-spacing: 0.04em;
`,ct=i.h2`
  font-family: ${t=>t.theme.fonts.main};
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
`,s=i.p`
  font-family: ${t=>t.theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  width: 131px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,c=i.p`
  font-family: ${t=>t.theme.fonts.main};
  font-style: normal;
  font-weight: ${t=>t.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,pt=i.ul`
  //   background-color: red;
`,p=i.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,ht=i.p`
  font-family: ${t=>t.theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  margin-top: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,xt=i.span`
  font-family: ${t=>t.theme.fonts.main};
  font-style: normal;
  font-weight: ${t=>t.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,ft=i.div`
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
`,mt=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  margin-right: 12px;
  font-family: ${t=>t.theme.fonts.main};
  font-style: normal;
  font-weight: ${t=>t.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  transition: ${t=>t.theme.transition};
  :hover {
    transition: ${t=>t.theme.transition};
    background: #f59256;
    color: #ffffff;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 240px;
  }
`,gt=i.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,ut=i.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-family: ${t=>t.theme.fonts.main};
  font-style: normal;
  font-weight: ${t=>t.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  transition: ${t=>t.theme.transition};
  :hover {
    transition: ${t=>t.theme.transition};
    background: #f59256;
    color: #ffffff;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 240px;
    margin-top: 12px;
  }
`,wt=({onClose:t,itemId:a,isFavorite:v})=>{const b=g(I),[o,y]=x.useState(null),[d,u]=x.useState(v),N=T(),k=()=>{N(d?j(a):D(a)),u(l=>!l)},M=()=>e("div",{children:e(W,{to:"/login",children:"You need to log in"})});if(x.useEffect(()=>{E.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${a}`).then(l=>{const h=l.data.data;y(h)})},[]),!o)return;const F=l=>{let h=new Date(l).getDate();h<10&&(h="0"+h);let r=new Date(l).getMonth();r<10&&(r="0"+r);let f=new Date(l).getFullYear();return f<10&&(f="0"+f),h+"."+r+"."+f};return e(it,{children:n(nt,{children:[e(ot,{onClick:()=>t(d),children:e(at,{src:P,alt:"close_menu_icon"})}),n(rt,{children:[n(dt,{children:[e(lt,{src:o.notice.photo}),e(st,{children:o.notice.category})]}),n("div",{children:[e(ct,{children:o.notice.title}),n(pt,{children:[n(p,{children:[e(s,{children:"Name:"}),e(c,{children:o.notice.name})]}),n(p,{children:[e(s,{children:"Birthday:"}),e(c,{children:F(o.notice.birthDate)})]}),n(p,{children:[e(s,{children:"Breed:"}),e(c,{children:o.notice.breed})]}),n(p,{children:[e(s,{children:"Place:"}),e(c,{children:o.notice.place})]}),n(p,{children:[e(s,{children:"The sex:"}),e(c,{children:o.notice.sex})]}),n(p,{children:[e(s,{children:"UserName:"}),e(c,{children:o.user.name})]}),n(p,{children:[e(s,{children:"Email:"}),e(c,{children:o.user.email})]}),n(p,{children:[e(s,{children:"Phone:"}),e(c,{children:o.user.mobile})]}),o.notice.category==="sell"&&n(p,{children:[e(s,{children:"Price:"}),e(c,{children:`${o.notice.price}$`})]})]})]})]}),n(ht,{children:["comments",n(xt,{children:[": ",o.notice.comments]})]}),n(ft,{children:[n(mt,{onClick:()=>{b?k():B(M)},children:[d?"del from":"add to",e(gt,{src:d?_:S,alt:d?"heartFull":"heart"})]}),e(L,{}),e(ut,{href:"tel:"+o.user.mobile,children:"contact"})]}),e("link",{})]})})},bt=({item:t})=>{const a=g(G),v=g(I),b=g(Y),[o,y]=x.useState(!1),[d,u]=x.useState(!1),N=T();H();const k=()=>{y(!0)},M=$=>{y(!1),u($)};x.useEffect(()=>{u(a.includes(t._id))},[a]);const F=()=>{N(d?j(t._id):D(t._id)),u($=>!$)},l=()=>e("div",{children:e(W,{to:"/login",children:"You need to log in"})}),r=parseInt(new Date().getFullYear())-parseInt(new Date(t.birthDate).getFullYear()),f=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let w;return r<1?w="Less than a year":r>15?w="very old dog":r>=1&&r<=15?w=f[r-1]:w="unknown",n(Q,{children:[n(J,{children:[n(R,{children:[e(K,{src:t.photo,alt:t.title}),e(V,{children:t.category}),e(X,{onClick:()=>{v?F():B(l)},children:d?e("img",{src:_,alt:"heartFull"}):e("img",{src:S,alt:"heart"})}),e(L,{})]}),e(Z,{style:{width:"280px"},children:t.title}),n(tt,{children:[n(C,{children:[e(m,{style:{width:"50px"},children:"Breed:"}),e(m,{style:{marginLeft:"40px"},children:t.breed})]}),n(C,{children:[e(m,{style:{width:"50px"},children:"Place:"}),e(m,{style:{marginLeft:"40px"},children:t.place})]}),n(C,{children:[e(m,{style:{width:"50px"},children:"Age:"}),e(m,{style:{marginLeft:"40px"},children:w})]})]}),e(z,{style:t.userId!==b.id&&{marginBottom:"32px"},onClick:k,children:"Learn more"}),t.userId===b.id&&n(z,{children:["Delete",e(HiTrash,{style:{width:"16px",height:"17px"}})]})]}),o&&e(wt,{itemId:t._id,isFavorite:d,onClose:M})]})},yt=i.ul`
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
`,vt=i.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(min(280px), 1fr));
  grid-gap: ${t=>t.theme.space[4]}px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`,Nt=()=>{const t=g(U);return e(vt,{children:t.map(a=>e(bt,{item:a},a._id))})},Mt=()=>{const t=g(I),a=T();return x.useEffect(()=>{t&&a(O()),a(q())},[a]),e(yt,{children:e(Nt,{})})};export{Mt as default};
