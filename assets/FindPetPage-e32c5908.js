var Je=Object.defineProperty;var Ke=(e,i,r)=>i in e?Je(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r;var oe=(e,i,r)=>(Ke(e,typeof i!="symbol"?i+"":i,r),r);import{r as c,p as M,i as Qe,s as o,d as y,q as le,u as H,t as Le,a as t,j as n,v as de,w as ce,Q as _,k as pe,x as $e,y as Se,z as Ie,B as ge,C as Ve,D as Xe,A as Q,F as L,E as ae,G as ze,I as Ze,J as G,K as q,M as I,N as J,O as et,P as tt}from"./index-a66ab7ff.js";import{M as he,t as it,s as ot,c as nt,T as rt,A as at}from"./PetsData.styled-264f7983.js";import{a as st}from"./index.esm-683662e9.js";import{G as lt}from"./iconBase-72111ae2.js";class X extends c.Component{constructor(i){super(i),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const i=this.getParentElement(this.scrollComponent);i.scrollTop=i.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let i=!1;const r={get passive(){i=!0}};try{document.addEventListener("test",null,r),document.removeEventListener("test",null,r)}catch{}return i}eventListenerOptions(){let i=this.props.useCapture;return this.isPassiveSupported()?i={useCapture:this.props.useCapture,passive:!0}:i={passive:!1},i}setDefaultLoader(i){this.defaultLoader=i}detachMousewheelListener(){let i=window;this.props.useWindow===!1&&(i=this.scrollComponent.parentNode),i.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let i=window;this.props.useWindow===!1&&(i=this.getParentElement(this.scrollComponent)),i.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),i.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(i){const r=this.props.getScrollParent&&this.props.getScrollParent();return r??(i&&i.parentNode)}filterProps(i){return i}attachScrollListener(){const i=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!i)return;let r=window;this.props.useWindow===!1&&(r=i),r.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),r.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),r.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(i){i.deltaY===1&&!this.isPassiveSupported()&&i.preventDefault()}scrollListener(){const i=this.scrollComponent,r=window,a=this.getParentElement(i);let l;if(this.props.useWindow){const f=document.documentElement||document.body.parentNode||document.body,s=r.pageYOffset!==void 0?r.pageYOffset:f.scrollTop;this.props.isReverse?l=s:l=this.calculateOffset(i,s)}else this.props.isReverse?l=a.scrollTop:l=i.scrollHeight-a.scrollTop-a.clientHeight;l<Number(this.props.threshold)&&i&&i.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=a.scrollHeight,this.beforeScrollTop=a.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(i,r){return i?this.calculateTopPosition(i)+(i.offsetHeight-r-window.innerHeight):0}calculateTopPosition(i){return i?i.offsetTop+this.calculateTopPosition(i.offsetParent):0}render(){const i=this.filterProps(this.props),{children:r,element:a,hasMore:l,initialLoad:f,isReverse:s,loader:p,loadMore:x,pageStart:m,ref:h,threshold:d,useCapture:k,useWindow:$,getScrollParent:u,...C}=i;C.ref=z=>{this.scrollComponent=z,h&&h(z)};const v=[r];return l&&(p?s?v.unshift(p):v.push(p):this.defaultLoader&&(s?v.unshift(this.defaultLoader):v.push(this.defaultLoader))),Qe.createElement(a,C,v)}}oe(X,"propTypes",{children:M.node.isRequired,element:M.node,hasMore:M.bool,initialLoad:M.bool,isReverse:M.bool,loader:M.node,loadMore:M.func.isRequired,pageStart:M.number,ref:M.func,getScrollParent:M.func,threshold:M.number,useCapture:M.bool,useWindow:M.bool}),oe(X,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null});const dt=e=>e.notices.items,Fe=e=>e.notices.favNotices,ct=e=>e.notices.isLoading,Te=e=>e.notices.page,pt=e=>e.notices.total,Be=e=>e.search,te=e=>e.filters.status,ht="/pets-support-project-frontend/assets/male-a0f02fb1.svg",mt="/pets-support-project-frontend/assets/female-147e65d7.svg",ft="/pets-support-project-frontend/assets/plus-94d63496.svg",Ae="/pets-support-project-frontend/assets/heart-4779bb70.svg",Pe="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",xt=o.li`
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
`,K=o.li`
  display: flex;
  margin-bottom: 8px;

  &&:last-child {
    margin-bottom: 0;
  }
`,P=o.p`
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
`,T=o.p`
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
`,D=o.p`
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
`,B=o.li`
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
`,Pt=o.button`
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
`,Et=o.img`
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
`,Wt=({onClose:e,itemId:i,isFavorite:r})=>{const a=y(le),l=y(te),f=y(Te),[s,p]=c.useState(null),[x,m]=c.useState(r),h=H();c.useEffect(()=>{const u=C=>{C.code==="Escape"&&e()};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[e]);const d=u=>{u.currentTarget===u.target&&e()},k=()=>{m(u=>!u),h(x?$e(i):Se(i))},$=()=>t("div",{children:t(Ie,{to:"/login",children:"You need to log in"})});if(c.useEffect(()=>{Le.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${i}`).then(u=>{const C=u.data.data;p(C)})},[]),!!s)return t(he,{children:t(me,{onClick:d,children:n(kt,{children:[t(Ct,{onClick:()=>{e(x),l==="fav-notice"&&h(de(f))},children:t(Mt,{src:ce,alt:"close_menu_icon"})}),n(Lt,{children:[n($t,{children:[t(St,{src:s.notice.photo}),t(It,{children:s.notice.category})]}),n("div",{children:[t(zt,{children:s.notice.title}),n(Ft,{children:[s.notice.name&&n(B,{children:[t(T,{children:"Name:"}),t(D,{children:s.notice.name})]}),s.notice.birthDate&&n(B,{children:[t(T,{children:"Birthday:"}),t(D,{children:it(s.notice.birthDate)})]}),s.notice.breed&&n(B,{children:[t(T,{children:"Breed:"}),t(D,{children:s.notice.breed})]}),n(B,{children:[t(T,{children:"Place:"}),t(D,{children:s.notice.place})]}),n(B,{children:[t(T,{children:"The sex:"}),t(D,{children:s.notice.sex})]}),n(B,{children:[t(T,{children:"Owner:"}),t(D,{children:s.user.name})]}),n(B,{children:[t(T,{children:"Email:"}),t(we,{href:"mailto:"+s.user.email,children:s.user.email})]}),n(B,{children:[t(T,{children:"Phone:"}),t(we,{href:"tel:"+s.user.mobile,children:s.user.mobile})]}),s.notice.category==="sell"&&n(B,{children:[t(T,{children:"Price:"}),t(D,{children:`${s.notice.price} ₴`})]})]})]})]}),n(Tt,{children:["Comments",n(Bt,{children:[": ",s.notice.comments]})]}),n(At,{children:[n(Pt,{onClick:()=>{a?k():_($)},children:[x?"del from":"add to",t(Et,{src:x?Pe:Ae,alt:x?"heartFull":"heart"})]}),t(pe,{}),t(Dt,{href:"tel:"+s.user.mobile,children:"contact"})]}),t("link",{})]})})})},jt=o.div`
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
`,_t=({onClose:e,deleteNotice:i})=>(c.useEffect(()=>{const a=l=>{l.code==="Escape"&&e()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e]),t(he,{children:t(me,{onClick:a=>{a.currentTarget===a.target&&e()},children:n(jt,{children:[t("h3",{style:{textAlign:"center"},children:"Are you sure?"}),n(Ot,{children:[t(be,{onClick:e,children:"Cancel"}),t(be,{onClick:i,children:"Delete notice"})]})]})})})),ye=({item:e})=>{const i=y(Fe),r=y(le),a=y(te),l=y(ot),[f,s]=c.useState(!1),[p,x]=c.useState(!1),[m,h]=c.useState(!1),d=H(),k=()=>{s(!0)},$=()=>{x(S=>!S)},u=S=>{s(!1),h(S),a==="fav-notice"&&!S&&d(ge(e._id))},C=i.reduce((S,ie)=>(S.push(ie._id),S),[]);c.useEffect(()=>{h(C.includes(e._id))},[i]);const v=()=>{h(S=>!S),d(m?$e(e._id):Se(e._id)),a==="fav-notice"&&d(ge(e._id))},z=()=>{d(Ve(e._id)),d(Xe(e._id)),$()},A=()=>t("div",{children:t(Ie,{to:"/login",children:"You need to log in"})}),F=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),w=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let N;F<1?N="Less than a year":F>15?N="very old pet":F>=1&&F<=15?N=w[F-1]:N="unknown";const W=e.category;return n(xt,{children:[n(gt,{children:[n("div",{style:{flexGrow:1},children:[n(wt,{children:[t(ut,{src:e.photo,alt:e.title}),n(bt,{children:[W==="sell"&&"sell",W==="for-free"&&"in good hands",W==="lost-found"&&"lost/found"]}),t(yt,{onClick:()=>{r?v():_(A)},children:m?t("img",{src:Pe,alt:"heartFull"}):t("img",{src:Ae,alt:"heart"})})]}),t(vt,{style:{width:"280px"},children:e.title}),n(Nt,{children:[e.breed&&n(K,{children:[t(P,{style:{width:"50px"},children:"Breed:"}),t(P,{style:{marginLeft:"40px"},children:e.breed})]}),n(K,{children:[t(P,{style:{width:"50px"},children:"Place:"}),t(P,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&n(K,{children:[t(P,{style:{width:"50px"},children:"Age:"}),t(P,{style:{marginLeft:"40px"},children:N})]}),a==="sell"&&n(K,{children:[t(P,{style:{width:"50px"},children:"Price:"}),t(P,{style:{marginLeft:"40px"},children:`${e.price}$`})]})]})]}),t(ue,{style:e.userId!==l._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:k,children:"Learn more"}),e.userId==l._id&&r&&n(ue,{onClick:$,children:["Delete",t(nt,{width:"16px",height:"17px"})]})]}),f&&t(Wt,{itemId:e._id,isFavorite:m,onClose:u}),p&&t(_t,{onClose:$,deleteNotice:z})]})},Ht=o.ul`
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
`,Rt=()=>{const e=y(dt),i=y(Te),r=y(ct),a=y(pt),l=y(Fe),f=y(te),s=y(Be),p=s.toLowerCase(),x=H();let m=[],h=[];return e!==void 0&&e.length>0&&(m=e.filter(d=>d.title.toLowerCase().includes(p))),l!==void 0&&l.length>0&&(h=l.filter(d=>d.title.toLowerCase().includes(p))),r&&i===0?t(Q,{}):n(L,{children:[f!=="fav-notice"?t(L,{children:m!==void 0&&m.length>=1?t(X,{pageStart:i+1,loadMore:()=>!r&&x(ae({page:i,categoryName:f})),hasMore:m.length!==a,loader:t(Q,{},i),children:t(ve,{children:m.map(d=>t(ye,{item:d},d._id))})}):s===""&&t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any own ads"})}):t(L,{children:h!==void 0&&h.length>=1?t(X,{pageStart:i+1,loadMore:()=>!r&&x(de(i)),hasMore:h.length!==a,loader:t(Q,{},i),children:t(ve,{children:h.map(d=>t(ye,{item:d},d._id))})}):s===""&&t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any favorite ads"})}),!r&&m.length===0&&f==="own-notices"&&s!==""&&t(L,{children:t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"Dear client, we didn't find any your own notices."})}),!r&&m.length===0&&f==="fav-notice"&&s!==""&&t(L,{children:t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"Dear client, we didn't find any favorite notices."})}),!r&&m.length===0&&f!=="fav-notice"&&f!=="own-notices"&&s!==""&&t(L,{children:t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"Dear client, we didn't find any notices in this category."})})]})},Yt=o.section``,Ut=o.div`
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
  @media ${e=>e.theme.media.tablet} and (max-width: 981px) {
    &:nth-child(-n + 3) {
      margin-bottom: 16px;
    }
  }
  @media (min-width: 982px) {
    &:nth-child(-n + 3) {
      margin-bottom: 0px;
    }
  }
`,qt=o.div`
  @media ${e=>e.theme.media.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,Jt=o.button`
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
`,U=({selected:e=!1,type:i="button",children:r,...a})=>t(Jt,{style:{backgroundColor:e&&"rgba(245,146,86,1)",color:e&&"#fff"},type:i,...a,children:r}),Kt=o.form`
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
`,Ee=o.button`
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
`,ne=o.li`
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
`,V=o.label`
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
`,re=o.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${V} {
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
`,Z=o.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,ee=o.button`
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
`;function Xt(){return JSON.parse(window.localStorage.getItem("notice"))}const Zt=({onClose:e,isNext:i,onSubmit:r})=>{const a=Xt(),[l,f]=c.useState(a?a.category:"sell"),[s,p]=c.useState(a?a.title:""),[x,m]=c.useState(a?a.name:""),[h,d]=c.useState(a?a.birthDate:""),[k,$]=c.useState(a?a.breed:"");c.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:s,breed:k,name:x,birthDate:h,category:l}))},[s,k,x,h,l]),c.useEffect(()=>{const w=N=>{N.code==="Escape"&&e()};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[e]);const u=w=>{f(w.target.value)},C=w=>{const{value:N}=w.target;p(N)},v=w=>{m(w.target.value)},z=w=>{const{value:N}=w.target;if(Date.parse(N)>Date.now()){F();return}else d(N)},A=w=>{$(w.target.value)},R=()=>{r({title:s,breed:k,name:x,birthDate:h,category:l}),i()},F=()=>_.error("Wrong date!!!! Are you from the future??");return n(L,{children:[t(pe,{}),n(Kt,{children:[t(Ee,{type:"button",onClick:e,children:t(De,{src:ce})}),t(We,{children:"Add pet"}),t(Qt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),n(Vt,{children:[n(ne,{children:[t(re,{type:"radio",name:"category",checked:l==="lost-found",value:"lost-found",id:"lost/found",onChange:u}),t(V,{htmlFor:"lost/found",children:"lost/found"})]}),n(ne,{children:[t(re,{type:"radio",name:"category",checked:l==="for-free",value:"for-free",id:"inGoodHands",onChange:u}),t(V,{htmlFor:"inGoodHands",children:"in good hands"})]}),n(ne,{children:[t(re,{type:"radio",name:"category",checked:l==="sell",value:"sell",id:"sell",onChange:u}),t(V,{htmlFor:"sell",children:"sell"})]})]}),n(je,{children:[t(E,{children:n(j,{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:s,onChange:C})]})}),t(E,{children:n(j,{children:["Name pet:",t(O,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:x,onChange:v})]})}),t(E,{children:n(j,{children:["Date of birth:",t(O,{type:"date",name:"birthDate",value:h,onChange:z})]})}),t(E,{children:n(j,{children:["Breed:",t(O,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:k,onChange:A})]})})]}),n(Oe,{children:[t(Z,{children:t(ee,{type:"button",onClick:e,children:"Cancel"})}),t(Z,{children:t(ee,{style:{color:"#fff",backgroundColor:"#F59256"},type:"button",onClick:R,children:"Next"})})]})]})]})},ei=o.form`
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
`;function ci(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const pi=({onClose:e,isPrev:i,notice:r})=>{const a=ci(),l=y(b=>b.auth.token),f=c.useRef(null),[s,p]=c.useState(a?a.sex:""),[x,m]=c.useState(a?a.place:""),[h,d]=c.useState(a?a.price:""),[k,$]=c.useState(a?a.image:null),[u,C]=c.useState(a?a.imageName:null),[v,z]=c.useState(a?a.imageUrl:null),[A,R]=c.useState(a?a.comments:""),[F,w]=c.useState(!1),N=H();c.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:k,imageName:u,imageUrl:v,sex:s,place:x,price:h,comments:A}))},[A,k,u,v,s,x,h]),c.useEffect(()=>{const b=g=>{g.code==="Escape"&&e()};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[e]);const W=b=>{p(b.target.value)},S=b=>{m(b.target.value)},ie=b=>{d(b.target.value)},_e=b=>{const{files:g}=b.target;if(g[0].size>5242880)return qe();$(g[0]),g[0]&&C(g[0].name),g&&z(URL.createObjectURL(g[0]))},He=b=>{R(b.target.value)},Re=()=>{f.current.click()},Ye=async b=>{w(!0),b.preventDefault();const g=new FormData;g.append("image",k),g.append("sex",s),g.append("place",x),g.append("price",h||1),g.append("comments",A),g.append("title",r.title),g.append("breed",r.breed),g.append("birthDate",r.birthDate),g.append("category",r.category),g.append("name",r.name);try{const xe=await Le.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",g,{headers:{Authorization:`Bearer ${l}`}});N(ze()),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Ue(),fe(),e(),fe()}catch(xe){Ge(xe.response.data.message[0].message)}w(!1)},Ue=()=>{z(null),C(null),$(null),p(""),m(""),d(""),R("")},Ge=b=>_.error(b),fe=()=>_.success("Notice created!"),qe=()=>_.error("The file must not exceed 5.2 mb!");return n(L,{children:[t(pe,{}),F?t(Q,{}):t(L,{children:n(ei,{name:"newForm",onSubmit:Ye,children:[t(Ee,{type:"button",onClick:e,children:t(De,{src:ce})}),t(We,{children:"Add pet"}),t(ti,{children:"The sex*:"}),n(ii,{children:[n(Ne,{children:[t(Ce,{type:"radio",name:"sex",id:"male",checked:s==="male",value:"male",onChange:W}),n(se,{htmlFor:"male",children:[t(ke,{src:ht}),"Male"]})]}),n(Ne,{children:[t(Ce,{type:"radio",name:"sex",id:"female",checked:s==="female",value:"female",onChange:W}),n(se,{htmlFor:"female",children:[t(ke,{src:mt}),"Female"]})]})]}),n(je,{children:[t(E,{children:n(j,{children:[n("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(O,{type:"",placeholder:"Type location",name:"place",value:x,onChange:S})]})}),r.category==="sell"&&t(E,{children:n(j,{children:["Price",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:h,onChange:ie})]})}),t(E,{children:n(oi,{children:["Load the pet’s image:",t(ni,{type:"button",onClick:Re,children:v?t(ai,{src:v}):t(ri,{src:ft})}),t(si,{type:"file",name:"image",ref:f,accept:"image/*,.png,.jpg,.gif,.web",onChange:_e})]})}),t(E,{children:n(li,{children:[n("p",{style:{fontSize:"18px"},children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(di,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type breed",name:"comments",value:A,onChange:He})]})})]}),n(Oe,{children:[t(Z,{children:t(ee,{onClick:i,children:"Back"})}),t(Z,{children:t(ee,{style:{color:"#fff",backgroundColor:"#F59256"},type:"submit",children:"Done"})})]})]})})]})},hi=({onClose:e})=>{const[i,r]=c.useState(!1),[a,l]=c.useState(null);return t(he,{children:t(me,{onClick:m=>{m.currentTarget===m.target&&e()},children:i?t(pi,{onClose:e,isPrev:()=>{r(!1)},notice:a}):t(Zt,{onClose:e,isNext:()=>{r(!0)},onSubmit:m=>{l(m)}})})})},mi=o.div`
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
`,wi=()=>{const[e,i]=c.useState(!1);return n(mi,{children:[n(at,{children:[t(xi,{children:"Add pet"}),t(fi,{onClick:()=>{i(!0)},children:n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[t(ui,{}),t(gi,{children:"Add pet"})]})})]}),e&&t(hi,{onClose:()=>{i(!1)}})]})};function bi(){const e=y(le),i=Ze(),r=H(),a=y(te);c.useEffect(()=>{r(G("sell")),r(ae({page:0,categoryName:"sell"})),r(q(0)),i("/FindPet/sell",{replace:!0})},[r]);const l=p=>{r(G(p)),r(ae({page:0,categoryName:p})),r(q(0)),i(`/FindPet/${p}`,{replace:!0})},f=p=>{r(G(p)),r(ze(0)),r(q(0)),i(`/FindPet/${p}`,{replace:!0})},s=p=>{r(G(p)),r(de(0)),r(q(0)),i(`/FindPet/${p}`,{replace:!0})};return t(Yt,{children:n(qt,{children:[t(Ut,{children:n(Gt,{children:[t(Y,{children:t(U,{selected:a===I.lostFound,onClick:()=>l(I.lostFound),children:"lost/found"})}),t(Y,{children:t(U,{selected:a===I.free,onClick:()=>l(I.free),children:"in good hands"})}),t(Y,{children:t(U,{selected:a===I.sell,onClick:()=>l(I.sell),children:"sell"})}),e&&n(L,{children:[t(Y,{children:t(U,{selected:a===I.favorite,onClick:()=>s(I.favorite),children:"favorite ads"})}),t(Y,{children:t(U,{selected:a===I.my,onClick:()=>f(I.my),children:"my ads"})})]})]})}),e&&t(wi,{})]})})}function yi(e){return lt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}o.section`
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
`;function Si(){const[e,i]=c.useState(""),[r,a]=c.useState(null),l=H();y(Be);const f=document.getElementById("input"),s=d=>{a(!0)},p=d=>{d.currentTarget===d.target&&(a(!1),e===""&&l(J("")))};return n(L,{children:[t(Mi,{children:"Find your favorite pet"}),t(Ci,{children:n(ki,{onSubmit:d=>{d.preventDefault(),l(J(e))},children:[t($i,{id:"input",type:"text",onChange:d=>{i(d.target.value)},value:e,placeholder:"Search",onFocus:s,onBlur:p}),r?null:t(Me,{type:"submit",children:t(Li,{})}),r?t(Me,{onClick:d=>{d.preventDefault(),e!==""&&(l(J(e)),a(!1),p(d),f.blur()),e===""&&l(J(""))},children:t(vi,{})}):null]})})]})}const Ai=()=>(et(),n(L,{children:[n(Ni,{children:[t(Si,{}),t(bi,{})]}),n(Ht,{children:[t(Rt,{}),t(tt,{})]})]}));export{Ai as default};
