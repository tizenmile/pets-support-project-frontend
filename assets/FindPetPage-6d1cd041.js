var Ke=Object.defineProperty;var qe=(e,i,r)=>i in e?Ke(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r;var te=(e,i,r)=>(qe(e,typeof i!="symbol"?i+"":i,r),r);import{r as c,p as M,l as Qe,s as o,d as y,t as le,e as H,v as Le,a as t,j as n,w as de,x as ce,Q as _,y as pe,z as $e,B as Se,C as Ie,D as ge,E as Ve,G as Xe,F as B,I as re,A as ae,J as ze,K as Ze,M as G,N as J,P as S,S as K,T as et,O as tt}from"./index-46bb8fe8.js";import{M as he,t as it,s as ot,c as nt,T as rt,A as at}from"./PetsData.styled-18e14bc9.js";import{T as st}from"./index.esm-e0ab66b9.js";import{G as lt}from"./iconBase-bd0ad97c.js";class Q extends c.Component{constructor(i){super(i),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const i=this.getParentElement(this.scrollComponent);i.scrollTop=i.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let i=!1;const r={get passive(){i=!0}};try{document.addEventListener("test",null,r),document.removeEventListener("test",null,r)}catch{}return i}eventListenerOptions(){let i=this.props.useCapture;return this.isPassiveSupported()?i={useCapture:this.props.useCapture,passive:!0}:i={passive:!1},i}setDefaultLoader(i){this.defaultLoader=i}detachMousewheelListener(){let i=window;this.props.useWindow===!1&&(i=this.scrollComponent.parentNode),i.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let i=window;this.props.useWindow===!1&&(i=this.getParentElement(this.scrollComponent)),i.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),i.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(i){const r=this.props.getScrollParent&&this.props.getScrollParent();return r??(i&&i.parentNode)}filterProps(i){return i}attachScrollListener(){const i=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!i)return;let r=window;this.props.useWindow===!1&&(r=i),r.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),r.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),r.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(i){i.deltaY===1&&!this.isPassiveSupported()&&i.preventDefault()}scrollListener(){const i=this.scrollComponent,r=window,a=this.getParentElement(i);let l;if(this.props.useWindow){const g=document.documentElement||document.body.parentNode||document.body,s=r.pageYOffset!==void 0?r.pageYOffset:g.scrollTop;this.props.isReverse?l=s:l=this.calculateOffset(i,s)}else this.props.isReverse?l=a.scrollTop:l=i.scrollHeight-a.scrollTop-a.clientHeight;l<Number(this.props.threshold)&&i&&i.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=a.scrollHeight,this.beforeScrollTop=a.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(i,r){return i?this.calculateTopPosition(i)+(i.offsetHeight-r-window.innerHeight):0}calculateTopPosition(i){return i?i.offsetTop+this.calculateTopPosition(i.offsetParent):0}render(){const i=this.filterProps(this.props),{children:r,element:a,hasMore:l,initialLoad:g,isReverse:s,loader:p,loadMore:m,pageStart:f,ref:h,threshold:d,useCapture:k,useWindow:L,getScrollParent:u,...C}=i;C.ref=I=>{this.scrollComponent=I,h&&h(I)};const v=[r];return l&&(p?s?v.unshift(p):v.push(p):this.defaultLoader&&(s?v.unshift(this.defaultLoader):v.push(this.defaultLoader))),Qe.createElement(a,C,v)}}te(Q,"propTypes",{children:M.node.isRequired,element:M.node,hasMore:M.bool,initialLoad:M.bool,isReverse:M.bool,loader:M.node,loadMore:M.func.isRequired,pageStart:M.number,ref:M.func,getScrollParent:M.func,threshold:M.number,useCapture:M.bool,useWindow:M.bool}),te(Q,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null});const dt=e=>e.notices.items,Fe=e=>e.notices.favNotices,ct=e=>e.notices.isLoading,Te=e=>e.notices.page,pt=e=>e.notices.total,Be=e=>e.search,Z=e=>e.filters.status,ht="/pets-support-project-frontend/assets/male-a0f02fb1.svg",mt="/pets-support-project-frontend/assets/female-147e65d7.svg",ft="/pets-support-project-frontend/assets/plus-94d63496.svg",Ae="/pets-support-project-frontend/assets/heart-4779bb70.svg",Ee="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",xt=o.li`
  /* position: relative; */
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,gt=o.div`
  display: flex;
  flex-direction: column;
  height: 612px;
`,ut=o.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,wt=o.div`
  position: relative;
`,bt=o.p`
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
`,yt=o.button`
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
`,vt=o.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,Nt=o.ul`
  margin: 20px;
`,ie=o.li`
  display: flex;
  margin-bottom: 8px;

  &&:last-child {
    margin-bottom: 0;
  }
`,W=o.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,ue=o.button`
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
`;const kt=o.div`
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
`,Ct=o.button`
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
`,Mt=o.img`
  display: block;
  width: 20px;
  height: 20px;
`,Lt=o.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,$t=o.div`
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
`,St=o.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,It=o.p`
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
`,zt=o.h2`
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
`,P=o.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,we=o.a`
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
`,Ft=o.ul`
  //   background-color: red;
`,T=o.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,Tt=o.p`
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
`,Bt=o.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,At=o.div`
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
`,Et=o.button`
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
`,Pt=o.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,Dt=o.a`
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
`,me=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px); */
  z-index: 1200;
  overflow-y: scroll;
  padding-top: 30px;
  padding-bottom: 30px;
  /* html {
    overflow: hidden;
  } */
`,Wt=({onClose:e,itemId:i,isFavorite:r})=>{const a=y(le),l=y(Z),g=y(Te),[s,p]=c.useState(null),[m,f]=c.useState(r),h=H();c.useEffect(()=>{const u=C=>{C.code==="Escape"&&e()};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[e]);const d=u=>{u.currentTarget===u.target&&e()},k=()=>{f(u=>!u),h(m?$e(i):Se(i))},L=()=>t("div",{children:t(Ie,{to:"/login",children:"You need to log in"})});if(c.useEffect(()=>{Le.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${i}`).then(u=>{const C=u.data.data;p(C)})},[]),!!s)return t(he,{children:t(me,{onClick:d,children:n(kt,{children:[t(Ct,{onClick:()=>{e(m),l==="fav-notice"&&h(de(g))},children:t(Mt,{src:ce,alt:"close_menu_icon"})}),n(Lt,{children:[n($t,{children:[t(St,{src:s.notice.photo}),t(It,{children:s.notice.category})]}),n("div",{children:[t(zt,{children:s.notice.title}),n(Ft,{children:[s.notice.name&&n(T,{children:[t(F,{children:"Name:"}),t(P,{children:s.notice.name})]}),s.notice.birthDate&&n(T,{children:[t(F,{children:"Birthday:"}),t(P,{children:it(s.notice.birthDate)})]}),s.notice.breed&&n(T,{children:[t(F,{children:"Breed:"}),t(P,{children:s.notice.breed})]}),n(T,{children:[t(F,{children:"Place:"}),t(P,{children:s.notice.place})]}),n(T,{children:[t(F,{children:"The sex:"}),t(P,{children:s.notice.sex})]}),n(T,{children:[t(F,{children:"UserName:"}),t(P,{children:s.user.name})]}),n(T,{children:[t(F,{children:"Email:"}),t(we,{href:"mailto:"+s.user.email,children:s.user.email})]}),n(T,{children:[t(F,{children:"Phone:"}),t(we,{href:"tel:"+s.user.mobile,children:s.user.mobile})]}),s.notice.category==="sell"&&n(T,{children:[t(F,{children:"Price:"}),t(P,{children:`${s.notice.price} ₴`})]})]})]})]}),n(Tt,{children:["Comments",n(Bt,{children:[": ",s.notice.comments]})]}),n(At,{children:[n(Et,{onClick:()=>{a?k():_(L)},children:[m?"del from":"add to",t(Pt,{src:m?Ee:Ae,alt:m?"heartFull":"heart"})]}),t(pe,{}),t(Dt,{href:"tel:"+s.user.mobile,children:"contact"})]}),t("link",{})]})})})},jt=o.div`
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
`,Ot=o.div`
display: flex;
justify-content: center;
margin: 20px 0 ;
`,be=o.button`
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
`,_t=({onClose:e,deleteNotice:i})=>(c.useEffect(()=>{const a=l=>{l.code==="Escape"&&e()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e]),t(he,{children:t(me,{onClick:a=>{a.currentTarget===a.target&&e()},children:n(jt,{children:[t("h3",{style:{textAlign:"center"},children:"Are you sure?"}),n(Ot,{children:[t(be,{onClick:e,children:"Cancel"}),t(be,{onClick:i,children:"Delete notice"})]})]})})})),ye=({item:e})=>{const i=y(Fe),r=y(le),a=y(Z),l=y(ot),[g,s]=c.useState(!1),[p,m]=c.useState(!1),[f,h]=c.useState(!1),d=H(),k=()=>{s(!0)},L=()=>{m($=>!$)},u=$=>{s(!1),h($),a==="fav-notice"&&!$&&d(ge(e._id))},C=i.reduce(($,ee)=>($.push(ee._id),$),[]);c.useEffect(()=>{h(C.includes(e._id))},[i]);const v=()=>{h($=>!$),d(f?$e(e._id):Se(e._id)),a==="fav-notice"&&d(ge(e._id))},I=()=>{d(Ve(e._id)),d(Xe(e._id)),L()},A=()=>t("div",{children:t(Ie,{to:"/login",children:"You need to log in"})}),z=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),w=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let N;z<1?N="Less than a year":z>15?N="very old pet":z>=1&&z<=15?N=w[z-1]:N="unknown";const D=e.category;return n(xt,{children:[n(gt,{children:[n("div",{style:{flexGrow:1},children:[n(wt,{children:[t(ut,{src:e.photo,alt:e.title}),n(bt,{children:[D==="sell"&&"sell",D==="for-free"&&"in good hands",D==="lost-found"&&"lost/found"]}),t(yt,{onClick:()=>{r?v():_(A)},children:f?t("img",{src:Ee,alt:"heartFull"}):t("img",{src:Ae,alt:"heart"})})]}),t(vt,{style:{width:"280px"},children:e.title}),n(Nt,{children:[e.breed&&n(ie,{children:[t(W,{style:{width:"50px"},children:"Breed:"}),t(W,{style:{marginLeft:"40px"},children:e.breed})]}),n(ie,{children:[t(W,{style:{width:"50px"},children:"Place:"}),t(W,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&n(ie,{children:[t(W,{style:{width:"50px"},children:"Age:"}),t(W,{style:{marginLeft:"40px"},children:N})]})]})]}),t(ue,{style:e.userId!==l._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:k,children:"Learn more"}),e.userId==l._id&&r&&n(ue,{onClick:L,children:["Delete",t(nt,{width:"16px",height:"17px"})]})]}),g&&t(Wt,{itemId:e._id,isFavorite:f,onClose:u}),p&&t(_t,{onClose:L,deleteNotice:I})]})},Ht=o.ul`
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
`,ve=o.ul`
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
  overflow: auto;
  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`,Rt=()=>{const e=y(dt),i=y(Te),r=y(ct),a=y(pt),l=y(Fe),g=y(Z),p=y(Be).toLowerCase(),m=H();let f,h;return e!==void 0&&e.length>0&&(f=e.filter(d=>d.title.toLowerCase().includes(p))),l!==void 0&&l.length>0&&(h=l.filter(d=>d.title.toLowerCase().includes(p))),t(B,{children:g!=="fav-notice"?t(B,{children:f!==void 0&&f.length>=1?t(Q,{pageStart:i+1,loadMore:()=>!r&&m(re({page:i,categoryName:g})),hasMore:f.length!==a,loader:t(ae,{},i),children:t(ve,{children:f.map(d=>t(ye,{item:d},d._id))})}):t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any own ads"})}):t(B,{children:h!==void 0&&h.length>=1?t(Q,{pageStart:i+1,loadMore:()=>!r&&m(de(i)),hasMore:h.length!==a,loader:t(ae,{},i),children:t(ve,{children:h.map(d=>t(ye,{item:d},d._id))})}):t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any favorite ads"})})})},Yt=o.section``,Ut=o.div`
  @media ${e=>e.theme.media.desktop} {
    margin-right: auto;
  }
`,Gt=o.ul`
  display: flex;
  flex-wrap: wrap;
`,Y=o.li`
  &:not(:last-child) {
    margin-right: 12px;
  }
  @media ${e=>e.theme.media.mobileMax} {
    &:nth-child(-n + 3) {
      margin-bottom: 12px;
    }
  }
  @media ${e=>e.theme.media.tablet} {
    &:nth-child(-n + 3) {
      margin-bottom: 0px;
    }
  }
`,Jt=o.div`
  @media ${e=>e.theme.media.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,Kt=o.button`
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  background-color: ${e=>e.theme.colors.white};
  color: ${e=>e.theme.colors.mainText};
  border: solid 2px rgba(245, 146, 86, 1);
  border-radius: 40px;
  font-family: ${e=>e.theme.fonts.main};
  line-height: ${e=>e.theme.lineHeights.body};
  transition: all 250ms;
  &:hover,
  &:active {
    color: #fff;

    border: solid 2px ${e=>e.theme.colors.hover};
    background-color: ${e=>e.theme.colors.hover} !important;
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media ${e=>e.theme.media.mobileMax} {
    font-size: ${e=>e.theme.fontSizes.xs};
    padding: 8px 28px;
  }
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.xm};
    padding: 10px 28px;
  }
`,U=({selected:e=!1,type:i="button",children:r,...a})=>t(Kt,{style:{backgroundColor:e&&"rgba(245,146,86,1)",color:e&&"#fff"},type:i,...a,children:r}),qt=o.form`
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
    margin-top: 200px;
  }
`,Pe=o.button`
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
`,De=o.img`
  display: block;
  width: 20px;
  height: 20px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`,We=o.h2`
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
`,Qt=o.p`
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
`,Vt=o.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    /* margin-bottom: 32px; */
  }
`,oe=o.li`
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
`,q=o.label`
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
`,ne=o.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${q} {
    color: #fff;
    transition: ${e=>e.theme.transition};
    background: #f59256;
  }
`,je=o.ul`
  margin-bottom: 40px;
`,j=o.label`
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
`,O=o.input`
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
`,E=o.li`
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 16px;
  }
`,Oe=o.ul`
  display: flex;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column-reverse;
    margin-left: auto;
    margin-right: auto;
  }
`,V=o.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,X=o.button`
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
`;function Xt(){return JSON.parse(window.localStorage.getItem("notice"))}const Zt=({onClose:e,isNext:i,onSubmit:r})=>{const a=Xt(),[l,g]=c.useState(a?a.category:"sell"),[s,p]=c.useState(a?a.title:""),[m,f]=c.useState(a?a.name:""),[h,d]=c.useState(a?a.birthDate:""),[k,L]=c.useState(a?a.breed:"");c.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:s,breed:k,name:m,birthDate:h,category:l}))},[s,k,m,h,l]),c.useEffect(()=>{const w=N=>{N.code==="Escape"&&e()};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[e]);const u=w=>{g(w.target.value)},C=w=>{const{value:N}=w.target;p(N)},v=w=>{f(w.target.value)},I=w=>{const{value:N}=w.target;if(Date.parse(N)>Date.now()){z();return}else d(N)},A=w=>{L(w.target.value)},R=()=>{r({title:s,breed:k,name:m,birthDate:h,category:l}),i()},z=()=>_.error("Wrong date!!!! Are you from the future??");return n(B,{children:[t(pe,{}),n(qt,{children:[t(Pe,{type:"button",onClick:e,children:t(De,{src:ce})}),t(We,{children:"Add pet"}),t(Qt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),n(Vt,{children:[n(oe,{children:[t(ne,{type:"radio",name:"category",checked:l==="lost-found",value:"lost-found",id:"lost/found",onChange:u}),t(q,{htmlFor:"lost/found",children:"lost/found"})]}),n(oe,{children:[t(ne,{type:"radio",name:"category",checked:l==="for-free",value:"for-free",id:"inGoodHands",onChange:u}),t(q,{htmlFor:"inGoodHands",children:"in good hands"})]}),n(oe,{children:[t(ne,{type:"radio",name:"category",checked:l==="sell",value:"sell",id:"sell",onChange:u}),t(q,{htmlFor:"sell",children:"sell"})]})]}),n(je,{children:[t(E,{children:n(j,{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:s,onChange:C})]})}),t(E,{children:n(j,{children:["Name pet:",t(O,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:m,onChange:v})]})}),t(E,{children:n(j,{children:["Date of birth:",t(O,{type:"date",name:"birthDate",value:h,onChange:I})]})}),t(E,{children:n(j,{children:["Breed:",t(O,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:k,onChange:A})]})})]}),n(Oe,{children:[t(V,{children:t(X,{type:"button",onClick:e,children:"Cancel"})}),t(V,{children:t(X,{style:{color:"#fff",backgroundColor:"#F59256"},type:"button",onClick:R,children:"Next"})})]})]})]})},ei=o.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 100px;
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 40px 20px 28px 20px;
    width: 280px;
    margin-top: 200px;
  }
`,ti=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,ii=o.ul`
  display: flex;
  margin-bottom: 40px;
`,Ne=o.li`
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
`,ke=o.img`
  width: 60px;
  margin-bottom: 20px;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 40px;
    margin-bottom: 12px;
  }
`,se=o.label`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 18px;
  }
`,Ce=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  transition: ${e=>e.theme.transition};
  &:checked + ${se} {
    transition: ${e=>e.theme.transition};
    color: #f59256;
  }
`,oi=o.label`
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
`,ni=o.button`
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
`,ri=o.img`
  width: 47px;
  height: 47px;
`,ai=o.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,si=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: none;
`,li=o.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,di=o.textarea`
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
`;function ci(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const pi=({onClose:e,isPrev:i,notice:r})=>{const a=ci(),l=y(b=>b.auth.token),g=c.useRef(null),[s,p]=c.useState(a?a.sex:""),[m,f]=c.useState(a?a.place:""),[h,d]=c.useState(a?a.price:""),[k,L]=c.useState(a?a.image:null),[u,C]=c.useState(a?a.imageName:null),[v,I]=c.useState(a?a.imageUrl:null),[A,R]=c.useState(a?a.comments:""),[z,w]=c.useState(!1),N=H();c.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:k,imageName:u,imageUrl:v,sex:s,place:m,price:h,comments:A}))},[A,k,u,v,s,m,h]),c.useEffect(()=>{const b=x=>{x.code==="Escape"&&e()};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[e]);const D=b=>{p(b.target.value)},$=b=>{f(b.target.value)},ee=b=>{d(b.target.value)},_e=b=>{const{files:x}=b.target;if(x[0].size>5242880)return Je();L(x[0]),x[0]&&C(x[0].name),x&&I(URL.createObjectURL(x[0]))},He=b=>{R(b.target.value)},Re=()=>{g.current.click()},Ye=async b=>{w(!0),b.preventDefault();const x=new FormData;x.append("image",k),x.append("sex",s),x.append("place",m),x.append("price",h||1),x.append("comments",A),x.append("title",r.title),x.append("breed",r.breed),x.append("birthDate",r.birthDate),x.append("category",r.category),x.append("name",r.name);try{const xe=await Le.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",x,{headers:{Authorization:`Bearer ${l}`}});N(ze()),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Ue(),fe(),e(),fe()}catch(xe){Ge(xe.response.data.message[0].message)}w(!1)},Ue=()=>{I(null),C(null),L(null),p(""),f(""),d(""),R("")},Ge=b=>_.error(b),fe=()=>_.success("Notice created!"),Je=()=>_.error("The file must not exceed 5.2 mb!");return n(B,{children:[t(pe,{}),z?t(ae,{}):t(B,{children:n(ei,{name:"newForm",onSubmit:Ye,children:[t(Pe,{type:"button",onClick:e,children:t(De,{src:ce})}),t(We,{children:"Add pet"}),t(ti,{children:"The sex*:"}),n(ii,{children:[n(Ne,{children:[t(Ce,{type:"radio",name:"sex",id:"male",checked:s==="male",value:"male",onChange:D}),n(se,{htmlFor:"male",children:[t(ke,{src:ht}),"Male"]})]}),n(Ne,{children:[t(Ce,{type:"radio",name:"sex",id:"female",checked:s==="female",value:"female",onChange:D}),n(se,{htmlFor:"female",children:[t(ke,{src:mt}),"Female"]})]})]}),n(je,{children:[t(E,{children:n(j,{children:[n("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(O,{type:"",placeholder:"Type location",name:"place",value:m,onChange:$})]})}),r.category==="sell"&&t(E,{children:n(j,{children:["Price",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:h,onChange:ee})]})}),t(E,{children:n(oi,{children:["Load the pet’s image:",t(ni,{type:"button",onClick:Re,children:v?t(ai,{src:v}):t(ri,{src:ft})}),t(si,{type:"file",name:"image",ref:g,accept:"image/*,.png,.jpg,.gif,.web",onChange:_e})]})}),t(E,{children:n(li,{children:[n("p",{style:{fontSize:"18px"},children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(di,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type breed",name:"comments",value:A,onChange:He})]})})]}),n(Oe,{children:[t(V,{children:t(X,{onClick:i,children:"Back"})}),t(V,{children:t(X,{style:{color:"#fff",backgroundColor:"#F59256"},type:"submit",children:"Done"})})]})]})})]})},hi=({onClose:e})=>{const[i,r]=c.useState(!1),[a,l]=c.useState(null);return t(he,{children:t(me,{onClick:f=>{f.currentTarget===f.target&&e()},children:i?t(pi,{onClose:e,isPrev:()=>{r(!1)},notice:a}):t(Zt,{onClose:e,isNext:()=>{r(!0)},onSubmit:f=>{l(f)}})})})},mi=o.div`
  min-width: 132px;
  @media (max-width: 767px) {
    position: fixed;
    z-index: 999;
    right: 20px;
    bottom: 100px;
    min-width: fit-content;
  }
`,fi=o.button`
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
  transition: all 250ms;
  :hover,
  :focus {
    transform: scale(1.15);
    background-color: ${e=>e.theme.colors.hover};
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
`,xi=o.p`
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
`,gi=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
  @media (min-width: 768px) {
    display: none;
  }
`,ui=o(rt)`
  @media (max-width: 767.98px) {
    width: 22px;
    height: 22px;
  }
`,wi=()=>{const[e,i]=c.useState(!1);return n(mi,{children:[n(at,{children:[t(xi,{children:"Add pet"}),t(fi,{onClick:()=>{i(!0)},children:n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[t(ui,{}),t(gi,{children:"Add pet"})]})})]}),e&&t(hi,{onClose:()=>{i(!1)}})]})};function bi(){const e=y(le),i=Ze(),r=H(),a=y(Z);c.useEffect(()=>{r(G("sell")),r(re({page:0,categoryName:"sell"})),r(J(0)),i("/FindPet/sell",{replace:!0})},[r]);const l=p=>{r(G(p)),r(re({page:0,categoryName:p})),r(J(0)),i(`/FindPet/${p}`,{replace:!0})},g=p=>{r(G(p)),r(ze(0)),r(J(0)),i(`/FindPet/${p}`,{replace:!0})},s=p=>{r(G(p)),r(de(0)),r(J(0)),i(`/FindPet/${p}`,{replace:!0})};return t(Yt,{children:n(Jt,{children:[t(Ut,{children:n(Gt,{children:[t(Y,{children:t(U,{selected:a===S.lostFound,onClick:()=>l(S.lostFound),children:"lost/found"})}),t(Y,{children:t(U,{selected:a===S.free,onClick:()=>l(S.free),children:"in good hands"})}),t(Y,{children:t(U,{selected:a===S.sell,onClick:()=>l(S.sell),children:"sell"})}),e&&n(B,{children:[t(Y,{children:t(U,{selected:a===S.favorite,onClick:()=>s(S.favorite),children:"favorite ads"})}),t(Y,{children:t(U,{selected:a===S.my,onClick:()=>g(S.my),children:"my ads"})})]})]})}),e&&t(wi,{})]})})}function yi(e){return lt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}o.section`
  margin-right: auto;
  margin-left: auto;
`;const vi=o(yi)`
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
  @media ${e=>e.theme.media.mobileMax} {
    width: 20px;
    height: 20px;
  }
  @media ${e=>e.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`,Ni=o.div`
  margin: 0 0;

  padding-left: 15px;
  padding-right: 15px;
  @media ${e=>e.theme.media.mobileMax} {
    max-width: 768px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 22px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
  }

  @media ${e=>e.theme.media.tablet} {

    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
    margin-bottom: 60px;
    margin-right: auto;
    margin-left: auto;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-right: auto;
    margin-left: auto;
    max-width: 1248px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 39px;
    margin-bottom: 60px;
  }
`,ki=o.form`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media ${e=>e.theme.media.mobileMax} {
    max-width: 280px;
    height: 40px;
    margin-bottom: 28px;
    font-size: ${e=>e.theme.fontSizes.s};
  }
  @media ${e=>e.theme.media.tablet} {
    width: 608px;
    height: 44px;
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.xm};
  }
`,Me=o.button`
  padding: 0px 0px;
`,Ci=o.div`
  margin-left: auto;
  margin-right: auto;
`,Mi=o.h2`
  font-family: ${e=>e.theme.fonts.main};
  line-height: ${e=>e.theme.lineHeights.titleSection};
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.mainText};
  text-align: center;
  @media ${e=>e.theme.media.mobileMax} {
    font-size: ${e=>e.theme.fontSizes.m};
    margin-bottom: 28px;
  }
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.xxxl};
    margin-bottom: 40px;
  }
`,Li=o(st)`
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
  @media ${e=>e.theme.media.mobileMax} {
    width: 17px;
    height: 17px;
  }
  @media ${e=>e.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`,$i=o.input`
  outline: none;
  width: 100%;
  height: 100%;
  font-family: ${e=>e.theme.fonts.main};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  color: ${e=>e.theme.colors.searchText};
  border-radius: 40px;
  border: solid 2px #fff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  &:hover,
  &:focus,
  &:active {
    border: solid 2px ${e=>e.theme.colors.accent};
  }

  @media ${e=>e.theme.media.mobileMax} {
    padding-left: 12px;
  }
  @media ${e=>e.theme.media.tablet} {
    padding-left: 20px;
  }
`;function Si(){const[e,i]=c.useState(""),[r,a]=c.useState(null),l=H();y(Be);const g=document.getElementById("input"),s=d=>{a(!0)},p=d=>{d.currentTarget===d.target&&(a(!1),e===""&&l(K("")))};return n(B,{children:[t(Mi,{children:"Find your favorite pet"}),t(Ci,{children:n(ki,{onSubmit:d=>{d.preventDefault(),l(K(e))},children:[t($i,{id:"input",type:"text",onChange:d=>{i(d.target.value)},value:e,placeholder:"Search",onFocus:s,onBlur:p}),r?null:t(Me,{type:"submit",children:t(Li,{})}),r?t(Me,{onClick:d=>{d.preventDefault(),e!==""&&(l(K(e)),a(!1),p(d),g.blur()),e===""&&l(K(""))},children:t(vi,{})}):null]})})]})}const Ai=()=>(et(),n(B,{children:[n(Ni,{children:[t(Si,{}),t(bi,{})]}),n(Ht,{children:[t(Rt,{}),t(tt,{})]})]}));export{Ai as default};
