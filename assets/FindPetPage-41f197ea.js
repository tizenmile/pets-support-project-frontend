var Je=Object.defineProperty;var qe=(e,i,a)=>i in e?Je(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a;var te=(e,i,a)=>(qe(e,typeof i!="symbol"?i+"":i,a),a);import{r as c,p as C,l as Ke,s as o,d as u,t as le,e as H,v as Le,j as t,a as n,w as de,x as ce,Q as _,y as pe,z as ke,B as $e,C as Se,D as xe,E as Qe,G as Ve,F as A,I as ae,A as re,J as Ie,K as Xe,M as G,N as J,P as $,S as q,T as Ze,O as et}from"./index-7904f29e.js";import{M as he,t as tt,s as it,c as ot,T as nt,A as at}from"./PetsData.styled-f7351e38.js";import{T as rt}from"./index.esm-da90e6ef.js";import{G as st}from"./iconBase-b8b24ac8.js";class Q extends c.Component{constructor(i){super(i),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const i=this.getParentElement(this.scrollComponent);i.scrollTop=i.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let i=!1;const a={get passive(){i=!0}};try{document.addEventListener("test",null,a),document.removeEventListener("test",null,a)}catch{}return i}eventListenerOptions(){let i=this.props.useCapture;return this.isPassiveSupported()?i={useCapture:this.props.useCapture,passive:!0}:i={passive:!1},i}setDefaultLoader(i){this.defaultLoader=i}detachMousewheelListener(){let i=window;this.props.useWindow===!1&&(i=this.scrollComponent.parentNode),i.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let i=window;this.props.useWindow===!1&&(i=this.getParentElement(this.scrollComponent)),i.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),i.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(i){const a=this.props.getScrollParent&&this.props.getScrollParent();return a??(i&&i.parentNode)}filterProps(i){return i}attachScrollListener(){const i=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!i)return;let a=window;this.props.useWindow===!1&&(a=i),a.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),a.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),a.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(i){i.deltaY===1&&!this.isPassiveSupported()&&i.preventDefault()}scrollListener(){const i=this.scrollComponent,a=window,r=this.getParentElement(i);let l;if(this.props.useWindow){const f=document.documentElement||document.body.parentNode||document.body,s=a.pageYOffset!==void 0?a.pageYOffset:f.scrollTop;this.props.isReverse?l=s:l=this.calculateOffset(i,s)}else this.props.isReverse?l=r.scrollTop:l=i.scrollHeight-r.scrollTop-r.clientHeight;l<Number(this.props.threshold)&&i&&i.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(i,a){return i?this.calculateTopPosition(i)+(i.offsetHeight-a-window.innerHeight):0}calculateTopPosition(i){return i?i.offsetTop+this.calculateTopPosition(i.offsetParent):0}render(){const i=this.filterProps(this.props),{children:a,element:r,hasMore:l,initialLoad:f,isReverse:s,loader:p,loadMore:m,pageStart:x,ref:h,threshold:d,useCapture:v,useWindow:N,getScrollParent:L,...S}=i;S.ref=I=>{this.scrollComponent=I,h&&h(I)};const y=[a];return l&&(p?s?y.unshift(p):y.push(p):this.defaultLoader&&(s?y.unshift(this.defaultLoader):y.push(this.defaultLoader))),Ke.createElement(r,S,y)}}te(Q,"propTypes",{children:C.node.isRequired,element:C.node,hasMore:C.bool,initialLoad:C.bool,isReverse:C.bool,loader:C.node,loadMore:C.func.isRequired,pageStart:C.number,ref:C.func,getScrollParent:C.func,threshold:C.number,useCapture:C.bool,useWindow:C.bool}),te(Q,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null});const lt=e=>e.notices.items,ze=e=>e.notices.favNotices,dt=e=>e.notices.isLoading,Fe=e=>e.notices.page,ct=e=>e.notices.total,Te=e=>e.search,Z=e=>e.filters.status,pt="/pets-support-project-frontend/assets/male-a0f02fb1.svg",ht="/pets-support-project-frontend/assets/female-147e65d7.svg",mt="/pets-support-project-frontend/assets/plus-94d63496.svg",Ae="/pets-support-project-frontend/assets/heart-4779bb70.svg",Be="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",ft=o.li`
  /* position: relative; */
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,xt=o.div`
  display: flex;
  flex-direction: column;
  height: 612px;
`,gt=o.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,ut=o.div`
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
`,wt=o.button`
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
`,yt=o.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,vt=o.ul`
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
`,ge=o.button`
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
`;const Nt=o.div`
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
`,kt=o.div`
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
`,$t=o.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,St=o.p`
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
`,It=o.h2`
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
`,E=o.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,ue=o.a`
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
`,zt=o.ul`
  //   background-color: red;
`,T=o.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,Ft=o.p`
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
`,Tt=o.span`
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
`,Bt=o.button`
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
`,Et=o.a`
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
`,Dt=({onClose:e,itemId:i,isFavorite:a})=>{const r=u(le),l=u(Z),f=u(Fe),[s,p]=c.useState(null),[m,x]=c.useState(a),h=H(),d=()=>{x(N=>!N),h(m?ke(i):$e(i))},v=()=>t("div",{children:t(Se,{to:"/login",children:"You need to log in"})});if(c.useEffect(()=>{Le.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${i}`).then(N=>{const L=N.data.data;p(L)})},[]),!!s)return t(he,{children:n(Nt,{children:[t(Ct,{onClick:()=>{e(m),l==="fav-notice"&&h(de(f))},children:t(Mt,{src:ce,alt:"close_menu_icon"})}),n(Lt,{children:[n(kt,{children:[t($t,{src:s.notice.photo}),t(St,{children:s.notice.category})]}),n("div",{children:[t(It,{children:s.notice.title}),n(zt,{children:[s.notice.name&&n(T,{children:[t(F,{children:"Name:"}),t(E,{children:s.notice.name})]}),s.notice.birthDate&&n(T,{children:[t(F,{children:"Birthday:"}),t(E,{children:tt(s.notice.birthDate)})]}),s.notice.breed&&n(T,{children:[t(F,{children:"Breed:"}),t(E,{children:s.notice.breed})]}),n(T,{children:[t(F,{children:"Place:"}),t(E,{children:s.notice.place})]}),n(T,{children:[t(F,{children:"The sex:"}),t(E,{children:s.notice.sex})]}),n(T,{children:[t(F,{children:"UserName:"}),t(E,{children:s.user.name})]}),n(T,{children:[t(F,{children:"Email:"}),t(ue,{href:"mailto:"+s.user.email,children:s.user.email})]}),n(T,{children:[t(F,{children:"Phone:"}),t(ue,{href:"tel:"+s.user.mobile,children:s.user.mobile})]}),s.notice.category==="sell"&&n(T,{children:[t(F,{children:"Price:"}),t(E,{children:`${s.notice.price} ₴`})]})]})]})]}),n(Ft,{children:["Comments",n(Tt,{children:[": ",s.notice.comments]})]}),n(At,{children:[n(Bt,{onClick:()=>{r?d():_(v)},children:[m?"del from":"add to",t(Pt,{src:m?Be:Ae,alt:m?"heartFull":"heart"})]}),t(pe,{}),t(Et,{href:"tel:"+s.user.mobile,children:"contact"})]}),t("link",{})]})})},Wt=o.div`
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
`,jt=o.div`
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
`,Ot=({onClose:e,deleteNotice:i})=>t(he,{children:n(Wt,{children:[t("h3",{style:{textAlign:"center"},children:"Are you sure?"}),n(jt,{children:[t(be,{onClick:e,children:"Cancel"}),t(be,{onClick:i,children:"Delete notice"})]})]})}),we=({item:e})=>{const i=u(ze),a=u(le),r=u(Z),l=u(it),[f,s]=c.useState(!1),[p,m]=c.useState(!1),[x,h]=c.useState(!1),d=H(),v=()=>{s(!0)},N=()=>{m(k=>!k)},L=k=>{s(!1),h(k),r==="fav-notice"&&!k&&d(xe(e._id))},S=i.reduce((k,ee)=>(k.push(ee._id),k),[]);c.useEffect(()=>{h(S.includes(e._id))},[i]);const y=()=>{h(k=>!k),d(x?ke(e._id):$e(e._id)),r==="fav-notice"&&d(xe(e._id))},I=()=>{d(Qe(e._id)),d(Ve(e._id)),N()},B=()=>t("div",{children:t(Se,{to:"/login",children:"You need to log in"})}),z=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),b=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let M;z<1?M="Less than a year":z>15?M="very old pet":z>=1&&z<=15?M=b[z-1]:M="unknown";const D=e.category;return n(ft,{children:[n(xt,{children:[n("div",{style:{flexGrow:1},children:[n(ut,{children:[t(gt,{src:e.photo,alt:e.title}),n(bt,{children:[D==="sell"&&"sell",D==="for-free"&&"in good hands",D==="lost-found"&&"lost/found"]}),t(wt,{onClick:()=>{a?y():_(B)},children:x?t("img",{src:Be,alt:"heartFull"}):t("img",{src:Ae,alt:"heart"})})]}),t(yt,{style:{width:"280px"},children:e.title}),n(vt,{children:[e.breed&&n(ie,{children:[t(W,{style:{width:"50px"},children:"Breed:"}),t(W,{style:{marginLeft:"40px"},children:e.breed})]}),n(ie,{children:[t(W,{style:{width:"50px"},children:"Place:"}),t(W,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&n(ie,{children:[t(W,{style:{width:"50px"},children:"Age:"}),t(W,{style:{marginLeft:"40px"},children:M})]})]})]}),t(ge,{style:e.userId!==l._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:v,children:"Learn more"}),e.userId==l._id&&a&&n(ge,{onClick:N,children:["Delete",t(ot,{width:"16px",height:"17px"})]})]}),f&&t(Dt,{itemId:e._id,isFavorite:x,onClose:L}),p&&t(Ot,{onClose:N,deleteNotice:I})]})},_t=o.ul`
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
`,ye=o.ul`
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
`,Ht=()=>{const e=u(lt),i=u(Fe),a=u(dt),r=u(ct),l=u(ze),f=u(Z),p=u(Te).toLowerCase(),m=H();let x,h;return e!==void 0&&e.length>0&&(x=e.filter(d=>d.title.toLowerCase().includes(p))),l!==void 0&&l.length>0&&(h=l.filter(d=>d.title.toLowerCase().includes(p))),t(A,{children:f!=="fav-notice"?t(A,{children:x!==void 0&&x.length>=1?t(Q,{pageStart:i+1,loadMore:()=>!a&&m(ae({page:i,categoryName:f})),hasMore:x.length!==r,loader:t(re,{},i),children:t(ye,{children:x.map(d=>t(we,{item:d},d._id))})}):t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any own ads"})}):t(A,{children:h!==void 0&&h.length>=1?t(Q,{pageStart:i+1,loadMore:()=>!a&&m(de(i)),hasMore:h.length!==r,loader:t(re,{},i),children:t(ye,{children:h.map(d=>t(we,{item:d},d._id))})}):t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any favorite ads"})})})},Rt=o.section``,Yt=o.div`
  @media ${e=>e.theme.media.desktop} {
    margin-right: auto;
  }
`,Ut=o.ul`
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
`,Gt=o.div`
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
`,U=({selected:e=!1,type:i="button",children:a,...r})=>t(Jt,{style:{backgroundColor:e&&"rgba(245,146,86,1)",color:e&&"#fff"},type:i,...r,children:a}),qt=o.form`
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
`,Ee=o.img`
  display: block;
  width: 20px;
  height: 20px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`,De=o.h2`
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
`,Kt=o.p`
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
`,Qt=o.ul`
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
`,K=o.label`
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
  &:checked + ${K} {
    color: #fff;
    transition: ${e=>e.theme.transition};
    background: #f59256;
  }
`,We=o.ul`
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
`,P=o.li`
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 16px;
  }
`,je=o.ul`
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
`;function Vt(){return JSON.parse(window.localStorage.getItem("notice"))}const Xt=({onClose:e,isNext:i,onSubmit:a})=>{const r=Vt(),[l,f]=c.useState(r?r.category:"sell"),[s,p]=c.useState(r?r.title:""),[m,x]=c.useState(r?r.name:""),[h,d]=c.useState(r?r.birthDate:""),[v,N]=c.useState(r?r.breed:"");c.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:s,breed:v,name:m,birthDate:h,category:l}))},[s,v,m,h,l]);const L=b=>{f(b.target.value)},S=b=>{const{value:M}=b.target;p(M)},y=b=>{x(b.target.value)},I=b=>{const{value:M}=b.target;if(Date.parse(M)>Date.now()){z();return}else d(M)},B=b=>{N(b.target.value)},R=()=>{a({title:s,breed:v,name:m,birthDate:h,category:l}),i()},z=()=>_.error("Wrong date!!!! Are you from the future??");return n(A,{children:[t(pe,{}),n(qt,{children:[t(Pe,{type:"button",onClick:e,children:t(Ee,{src:ce})}),t(De,{children:"Add pet"}),t(Kt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),n(Qt,{children:[n(oe,{children:[t(ne,{type:"radio",name:"category",checked:l==="lost-found",value:"lost-found",id:"lost/found",onChange:L}),t(K,{htmlFor:"lost/found",children:"lost/found"})]}),n(oe,{children:[t(ne,{type:"radio",name:"category",checked:l==="for-free",value:"for-free",id:"inGoodHands",onChange:L}),t(K,{htmlFor:"inGoodHands",children:"in good hands"})]}),n(oe,{children:[t(ne,{type:"radio",name:"category",checked:l==="sell",value:"sell",id:"sell",onChange:L}),t(K,{htmlFor:"sell",children:"sell"})]})]}),n(We,{children:[t(P,{children:n(j,{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:s,onChange:S})]})}),t(P,{children:n(j,{children:["Name pet:",t(O,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:m,onChange:y})]})}),t(P,{children:n(j,{children:["Date of birth:",t(O,{type:"date",name:"birthDate",value:h,onChange:I})]})}),t(P,{children:n(j,{children:["Breed:",t(O,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:v,onChange:B})]})})]}),n(je,{children:[t(V,{children:t(X,{type:"button",onClick:e,children:"Cancel"})}),t(V,{children:t(X,{style:{color:"#fff",backgroundColor:"#F59256"},type:"button",onClick:R,children:"Next"})})]})]})]})},Zt=o.form`
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
`,ei=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,ti=o.ul`
  display: flex;
  margin-bottom: 40px;
`,ve=o.li`
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
`,Ne=o.img`
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
`,ii=o.label`
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
`,oi=o.button`
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
`,ni=o.img`
  width: 47px;
  height: 47px;
`,ai=o.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,ri=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: none;
`,si=o.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,li=o.textarea`
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
`;function di(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const ci=({onClose:e,isPrev:i,notice:a})=>{const r=di(),l=u(w=>w.auth.token),f=c.useRef(null),[s,p]=c.useState(r?r.sex:""),[m,x]=c.useState(r?r.place:""),[h,d]=c.useState(r?r.price:""),[v,N]=c.useState(r?r.image:null),[L,S]=c.useState(r?r.imageName:null),[y,I]=c.useState(r?r.imageUrl:null),[B,R]=c.useState(r?r.comments:""),[z,b]=c.useState(!1),M=H();c.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:v,imageName:L,imageUrl:y,sex:s,place:m,price:h,comments:B}))},[B,v,L,y,s,m,h]);const D=w=>{p(w.target.value)},k=w=>{x(w.target.value)},ee=w=>{d(w.target.value)},Oe=w=>{const{files:g}=w.target;if(g[0].size>5242880)return Ge();N(g[0]),g[0]&&S(g[0].name),g&&I(URL.createObjectURL(g[0]))},_e=w=>{R(w.target.value)},He=()=>{f.current.click()},Re=async w=>{b(!0),w.preventDefault();const g=new FormData;g.append("image",v),g.append("sex",s),g.append("place",m),g.append("price",h||1),g.append("comments",B),g.append("title",a.title),g.append("breed",a.breed),g.append("birthDate",a.birthDate),g.append("category",a.category),g.append("name",a.name);try{const fe=await Le.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",g,{headers:{Authorization:`Bearer ${l}`}});M(Ie()),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Ye(),me(),e(),me()}catch(fe){Ue(fe.response.data.message[0].message)}b(!1)},Ye=()=>{I(null),S(null),N(null),p(""),x(""),d(""),R("")},Ue=w=>_.error(w),me=()=>_.success("Notice created!"),Ge=()=>_.error("The file must not exceed 5.2 mb!");return n(A,{children:[t(pe,{}),z?t(re,{}):t(A,{children:n(Zt,{name:"newForm",onSubmit:Re,children:[t(Pe,{type:"button",onClick:e,children:t(Ee,{src:ce})}),t(De,{children:"Add pet"}),t(ei,{children:"The sex*:"}),n(ti,{children:[n(ve,{children:[t(Ce,{type:"radio",name:"sex",id:"male",checked:s==="male",value:"male",onChange:D}),n(se,{htmlFor:"male",children:[t(Ne,{src:pt}),"Male"]})]}),n(ve,{children:[t(Ce,{type:"radio",name:"sex",id:"female",checked:s==="female",value:"female",onChange:D}),n(se,{htmlFor:"female",children:[t(Ne,{src:ht}),"Female"]})]})]}),n(We,{children:[t(P,{children:n(j,{children:[n("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(O,{type:"",placeholder:"Type location",name:"place",value:m,onChange:k})]})}),a.category==="sell"&&t(P,{children:n(j,{children:["Price",t("span",{style:{color:"#F59256"},children:"*"}),":",t(O,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:h,onChange:ee})]})}),t(P,{children:n(ii,{children:["Load the pet’s image:",t(oi,{type:"button",onClick:He,children:y?t(ai,{src:y}):t(ni,{src:mt})}),t(ri,{type:"file",name:"image",ref:f,accept:"image/*,.png,.jpg,.gif,.web",onChange:Oe})]})}),t(P,{children:n(si,{children:[n("p",{style:{fontSize:"18px"},children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(li,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type breed",name:"comments",value:B,onChange:_e})]})})]}),n(je,{children:[t(V,{children:t(X,{onClick:i,children:"Back"})}),t(V,{children:t(X,{style:{color:"#fff",backgroundColor:"#F59256"},type:"submit",children:"Done"})})]})]})})]})},pi=({onClose:e})=>{const[i,a]=c.useState(!1),[r,l]=c.useState(null);return t(he,{children:i?t(ci,{onClose:e,isPrev:()=>{a(!1)},notice:r}):t(Xt,{onClose:e,isNext:()=>{a(!0)},onSubmit:m=>{l(m)}})})},hi=o.div`
  min-width: 132px;
  @media (max-width: 767px) {
    position: fixed;
    z-index: 999;
    right: 20px;
    bottom: 100px;
    min-width: fit-content;
  }
`,mi=o.button`
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
  :hover,
  :focus {
    transform: scale(1.1);
  }
  :hover:before {
    left: 100%;
    @media ${e=>e.theme.media.mobileMax} {
      visibility: visible;
    }
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
`,fi=o.p`
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
`,xi=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
  @media (min-width: 768px) {
    display: none;
  }
`,gi=o(nt)`
  @media (max-width: 767.98px) {
    width: 22px;
    height: 22px;
  }
`,ui=()=>{const[e,i]=c.useState(!1);return n(hi,{children:[n(at,{children:[t(fi,{children:"Add pet"}),t(mi,{onClick:()=>{i(!0)},children:n("div",{children:[t(gi,{}),t(xi,{children:"Add pet"})]})})]}),e&&t(pi,{onClose:()=>{i(!1)}})]})};function bi(){const e=u(le),i=Xe(),a=H(),r=u(Z);c.useEffect(()=>{a(G("sell")),a(ae({page:0,categoryName:"sell"})),a(J(0)),i("/FindPet/sell",{replace:!0})},[a]);const l=p=>{a(G(p)),a(ae({page:0,categoryName:p})),a(J(0)),i(`/FindPet/${p}`,{replace:!0})},f=p=>{a(G(p)),a(Ie(0)),a(J(0)),i(`/FindPet/${p}`,{replace:!0})},s=p=>{a(G(p)),a(de(0)),a(J(0)),i(`/FindPet/${p}`,{replace:!0})};return t(Rt,{children:n(Gt,{children:[t(Yt,{children:n(Ut,{children:[t(Y,{children:t(U,{selected:r===$.lostFound,onClick:()=>l($.lostFound),children:"lost/found"})}),t(Y,{children:t(U,{selected:r===$.free,onClick:()=>l($.free),children:"in good hands"})}),t(Y,{children:t(U,{selected:r===$.sell,onClick:()=>l($.sell),children:"sell"})}),e&&n(A,{children:[t(Y,{children:t(U,{selected:r===$.favorite,onClick:()=>s($.favorite),children:"favorite ads"})}),t(Y,{children:t(U,{selected:r===$.my,onClick:()=>f($.my),children:"my ads"})})]})]})}),e&&t(ui,{})]})})}function wi(e){return st({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}o.section`
  margin-right: auto;
  margin-left: auto;
`;const yi=o(wi)`
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
`,vi=o.div`
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
`,Ni=o.form`
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
`,Li=o(rt)`
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
`,ki=o.input`
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
`;function $i(){const[e,i]=c.useState(""),[a,r]=c.useState(null),l=H();u(Te);const f=document.getElementById("input"),s=d=>{r(!0)},p=d=>{d.currentTarget===d.target&&(r(!1),e===""&&l(q("")))};return n(A,{children:[t(Mi,{children:"Find your favorite pet"}),t(Ci,{children:n(Ni,{onSubmit:d=>{d.preventDefault(),l(q(e))},children:[t(ki,{id:"input",type:"text",onChange:d=>{i(d.target.value)},value:e,placeholder:"Search",onFocus:s,onBlur:p}),a?null:t(Me,{type:"submit",children:t(Li,{})}),a?t(Me,{onClick:d=>{d.preventDefault(),e!==""&&(l(q(e)),r(!1),p(d),f.blur()),e===""&&l(q(""))},children:t(yi,{})}):null]})})]})}const Ai=()=>(Ze(),n(A,{children:[n(vi,{children:[t($i,{}),t(bi,{})]}),n(_t,{children:[t(Ht,{}),t(et,{})]})]}));export{Ai as default};
