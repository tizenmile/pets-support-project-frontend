var qe=Object.defineProperty;var Je=(e,i,n)=>i in e?qe(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n;var se=(e,i,n)=>(Je(e,typeof i!="symbol"?i+"":i,n),n);import{r as c,p as M,i as Ke,s as o,d as w,q as ne,u as H,t as Se,a as t,j as r,v as ee,w as me,Q as j,k as q,x as Ie,y as ze,z as Fe,B as Qe,C as we,D as Ve,E as Xe,A as X,F as L,G as pe,I as Ze,J as et,K,M as Q,N as S,O as tt,P as le,S as it,T as ot}from"./index-aa85b3ad.js";import{M as fe,t as nt,s as rt,c as at,T as st,A as lt}from"./PetsData.styled-7a7df152.js";import{a as dt}from"./index.esm-b2f9fa43.js";import{G as ct}from"./iconBase-2b2d4cc8.js";class te extends c.Component{constructor(i){super(i),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const i=this.getParentElement(this.scrollComponent);i.scrollTop=i.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let i=!1;const n={get passive(){i=!0}};try{document.addEventListener("test",null,n),document.removeEventListener("test",null,n)}catch{}return i}eventListenerOptions(){let i=this.props.useCapture;return this.isPassiveSupported()?i={useCapture:this.props.useCapture,passive:!0}:i={passive:!1},i}setDefaultLoader(i){this.defaultLoader=i}detachMousewheelListener(){let i=window;this.props.useWindow===!1&&(i=this.scrollComponent.parentNode),i.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let i=window;this.props.useWindow===!1&&(i=this.getParentElement(this.scrollComponent)),i.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),i.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(i){const n=this.props.getScrollParent&&this.props.getScrollParent();return n??(i&&i.parentNode)}filterProps(i){return i}attachScrollListener(){const i=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!i)return;let n=window;this.props.useWindow===!1&&(n=i),n.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),n.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),n.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(i){i.deltaY===1&&!this.isPassiveSupported()&&i.preventDefault()}scrollListener(){const i=this.scrollComponent,n=window,a=this.getParentElement(i);let l;if(this.props.useWindow){const m=document.documentElement||document.body.parentNode||document.body,s=n.pageYOffset!==void 0?n.pageYOffset:m.scrollTop;this.props.isReverse?l=s:l=this.calculateOffset(i,s)}else this.props.isReverse?l=a.scrollTop:l=i.scrollHeight-a.scrollTop-a.clientHeight;l<Number(this.props.threshold)&&i&&i.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=a.scrollHeight,this.beforeScrollTop=a.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(i,n){return i?this.calculateTopPosition(i)+(i.offsetHeight-n-window.innerHeight):0}calculateTopPosition(i){return i?i.offsetTop+this.calculateTopPosition(i.offsetParent):0}render(){const i=this.filterProps(this.props),{children:n,element:a,hasMore:l,initialLoad:m,isReverse:s,loader:p,loadMore:f,pageStart:h,ref:d,threshold:x,useCapture:y,useWindow:I,getScrollParent:g,...C}=i;C.ref=z=>{this.scrollComponent=z,d&&d(z)};const N=[n];return l&&(p?s?N.unshift(p):N.push(p):this.defaultLoader&&(s?N.unshift(this.defaultLoader):N.push(this.defaultLoader))),Ke.createElement(a,C,N)}}se(te,"propTypes",{children:M.node.isRequired,element:M.node,hasMore:M.bool,initialLoad:M.bool,isReverse:M.bool,loader:M.node,loadMore:M.func.isRequired,pageStart:M.number,ref:M.func,getScrollParent:M.func,threshold:M.number,useCapture:M.bool,useWindow:M.bool}),se(te,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null});const pt=e=>e.notices.items,Te=e=>e.notices.favNotices,ht=e=>e.notices.isLoading,Be=e=>e.notices.page,mt=e=>e.notices.total,Ae=e=>e.search,re=e=>e.filters.status,ft="/pets-support-project-frontend/assets/male-a0f02fb1.svg",xt="/pets-support-project-frontend/assets/female-147e65d7.svg",gt="/pets-support-project-frontend/assets/plus-94d63496.svg",Ee="/pets-support-project-frontend/assets/heart-4779bb70.svg",Pe="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",ut=o.li`
  /* position: relative; */
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,wt=o.div`
  display: flex;
  flex-direction: column;
  height: 612px;
`,bt=o.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,yt=o.div`
  position: relative;
`,vt=o.p`
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
`,Nt=o.button`
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
`,kt=o.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
`,Ct=o.ul`
  margin: 20px;
`,V=o.li`
  display: flex;
  margin-bottom: 8px;

  &&:last-child {
    margin-bottom: 0;
  }
`,A=o.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`,be=o.button`
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
`;const Mt=o.div`
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
`,Lt=o.button`
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
`,$t=o.img`
  display: block;
  width: 20px;
  height: 20px;
`,St=o.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`,It=o.div`
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
`,zt=o.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,Ft=o.p`
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
`,Tt=o.h2`
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
`,W=o.p`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,ye=o.a`
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
`,Bt=o.ul`
  //   background-color: red;
`,T=o.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,At=o.p`
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
`,Et=o.span`
  font-family: ${e=>e.theme.fonts.main};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`,Pt=o.div`
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
`,Dt=o.button`
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
`,Wt=o.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,jt=o.a`
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
`,xe=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  overflow-y: scroll;
  padding-top: 30px;
  padding-bottom: 30px;

`,Ot=({onClose:e,itemId:i,isFavorite:n})=>{const a=w(ne),l=w(re),m=w(Be),[s,p]=c.useState(null),[f,h]=c.useState(n),d=H();c.useEffect(()=>{const g=C=>{C.code==="Escape"&&e()};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[e]);const x=g=>{g.currentTarget===g.target&&e()},y=()=>{h(g=>!g),d(f?Ie(i):ze(i))},I=()=>t("div",{children:t(Fe,{to:"/login",children:"You need to log in"})});if(c.useEffect(()=>{Se.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${i}`).then(g=>{const C=g.data.data;p(C)})},[]),!!s)return t(fe,{children:t(xe,{onClick:x,children:r(Mt,{children:[t(Lt,{onClick:()=>{e(f),l==="fav-notice"&&d(ee(m))},children:t($t,{src:me,alt:"close_menu_icon"})}),r(St,{children:[r(It,{children:[t(zt,{src:s.notice.photo}),t(Ft,{children:s.notice.category})]}),r("div",{children:[t(Tt,{children:s.notice.title}),r(Bt,{children:[s.notice.name&&r(T,{children:[t(F,{children:"Name:"}),t(W,{children:s.notice.name})]}),s.notice.birthDate&&r(T,{children:[t(F,{children:"Birthday:"}),t(W,{children:nt(s.notice.birthDate)})]}),s.notice.breed&&r(T,{children:[t(F,{children:"Breed:"}),t(W,{children:s.notice.breed})]}),r(T,{children:[t(F,{children:"Place:"}),t(W,{children:s.notice.place})]}),r(T,{children:[t(F,{children:"The sex:"}),t(W,{children:s.notice.sex})]}),r(T,{children:[t(F,{children:"Owner:"}),t(W,{children:s.user.name})]}),r(T,{children:[t(F,{children:"Email:"}),t(ye,{href:"mailto:"+s.user.email,children:s.user.email})]}),r(T,{children:[t(F,{children:"Phone:"}),t(ye,{href:"tel:"+s.user.mobile,children:s.user.mobile})]}),s.notice.category==="sell"&&r(T,{children:[t(F,{children:"Price:"}),t(W,{children:`${s.notice.price} ₴`})]})]})]})]}),r(At,{children:["Comments",r(Et,{children:[": ",s.notice.comments]})]}),r(Pt,{children:[r(Dt,{onClick:()=>{a?y():j(I)},children:[f?"del from":"add to",t(Wt,{src:f?Pe:Ee,alt:f?"heartFull":"heart"})]}),t(q,{}),t(jt,{href:"tel:"+s.user.mobile,children:"contact"})]}),t("link",{})]})})})},_t=o.div`
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
`,Ht=o.div`
display: flex;
justify-content: center;
margin: 20px 0 ;
`,ve=o.button`
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
`,Rt=({onClose:e,deleteNotice:i})=>(c.useEffect(()=>{const a=l=>{l.code==="Escape"&&e()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e]),t(fe,{children:t(xe,{onClick:a=>{a.currentTarget===a.target&&e()},children:r(_t,{children:[t("h3",{style:{textAlign:"center"},children:"Are you sure?"}),r(Ht,{children:[t(ve,{onClick:e,children:"Cancel"}),t(ve,{onClick:i,children:"Delete notice"})]})]})})})),Ne=({item:e})=>{const i=w(Te),n=w(ne),a=w(re),l=w(rt),m=w(Qe),[s,p]=c.useState(!1),[f,h]=c.useState(!1),[d,x]=c.useState(!1),y=H(),I=()=>{p(!0)},g=()=>{h($=>!$)},C=$=>{p(!1),x($),a==="fav-notice"&&!$&&y(we(e._id))},N=i.reduce(($,ae)=>($.push(ae._id),$),[]);c.useEffect(()=>{x(N.includes(e._id))},[i]);const z=()=>{x($=>!$),y(d?Ie(e._id):ze(e._id)),a==="fav-notice"&&y(we(e._id))},B=()=>{y(Ve(e._id)),y(Xe(e._id)),g()},P=l._id?l:m,R=()=>t("div",{children:t(Fe,{to:"/login",children:"You need to log in"})}),k=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),J=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let D;k<1?D="Less than a year":k>15?D="very old pet":k>=1&&k<=15?D=J[k-1]:D="unknown";const Y=e.category;return r(ut,{children:[r(wt,{children:[r("div",{style:{flexGrow:1},children:[r(yt,{children:[t(bt,{src:e.photo,alt:e.title}),r(vt,{children:[Y==="sell"&&"sell",Y==="for-free"&&"in good hands",Y==="lost-found"&&"lost/found"]}),t(Nt,{onClick:()=>{n?z():j(R)},children:d?t("img",{src:Pe,alt:"heartFull"}):t("img",{src:Ee,alt:"heart"})}),t(q,{})]}),t(kt,{style:{width:"280px"},children:e.title}),r(Ct,{children:[e.breed&&r(V,{children:[t(A,{style:{width:"50px"},children:"Breed:"}),t(A,{style:{marginLeft:"40px"},children:e.breed})]}),r(V,{children:[t(A,{style:{width:"50px"},children:"Place:"}),t(A,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&r(V,{children:[t(A,{style:{width:"50px"},children:"Age:"}),t(A,{style:{marginLeft:"40px"},children:D})]}),a==="sell"&&r(V,{children:[t(A,{style:{width:"50px"},children:"Price:"}),t(A,{style:{marginLeft:"40px"},children:`${e.price}$`})]})]})]}),t(be,{style:e.userId!==P._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:I,children:"Learn more"}),e.userId==P._id&&n&&r(be,{onClick:g,children:["Delete",t(at,{width:"16px",height:"17px"})]})]}),s&&t(Ot,{itemId:e._id,isFavorite:d,onClose:C}),f&&t(Rt,{onClose:g,deleteNotice:B})]})},Yt=o.ul`
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
`,ke=o.ul`
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
`,Ut=()=>{const e=w(pt),i=w(Be),n=w(ht),a=w(mt),l=w(Te),m=w(re),s=w(Ae),p=s.toLowerCase(),f=H();let h=[],d=[];return e!==void 0&&e.length>0&&(h=e.filter(x=>x.title.toLowerCase().includes(p))),l!==void 0&&l.length>0&&(d=l.filter(x=>x.title.toLowerCase().includes(p))),n&&i===0?t(X,{}):r(L,{children:[m!=="fav-notice"?t(L,{children:h!==void 0&&h.length>=1?t(te,{pageStart:i+1,loadMore:()=>!n&&f(pe({page:i,categoryName:m})),hasMore:h.length!==a&&i!==0,loader:t(X,{},i),children:t(ke,{children:h.map(x=>t(Ne,{item:x},x._id))})}):s===""&&t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any own ads"})}):t(L,{children:d!==void 0&&d.length>=1?t(te,{pageStart:i+1,loadMore:()=>!n&&f(ee(i)),hasMore:d.length!==a&&i!==0,loader:t(X,{},i),children:t(ke,{children:d.map(x=>t(Ne,{item:x},x._id))})}):s===""&&t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any favorite ads"})}),!n&&h.length===0&&m==="own-notices"&&s!==""&&t(L,{children:t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"Dear client, we didn't find any your own notices."})}),!n&&h.length===0&&m==="fav-notice"&&s!==""&&t(L,{children:t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"Dear client, we didn't find any favorite notices."})}),!n&&h.length===0&&m!=="fav-notice"&&m!=="own-notices"&&s!==""&&t(L,{children:t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"Dear client, we didn't find any notices in this category."})})]})},Gt=o.section`
  margin: 0 50px;
`,qt=o.div`
  margin: 30px auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media ${e=>e.theme.media.tablet} {
    margin: 40px 32px 60px 32px;
    width: 768px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin: 40px 16px 60px 16px;
    width: 1280px;
  }
`,Jt=o.ul`
  display: flex;
  flex-wrap: wrap;
`,U=o.li`
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
`,Kt=o.div`
  @media ${e=>e.theme.media.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,Qt=o.button`
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
`,G=({selected:e=!1,type:i="button",children:n,...a})=>t(Qt,{style:{backgroundColor:e&&"rgba(245,146,86,1)",color:e&&"#fff"},type:i,...a,children:n}),Vt=o.form`
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
`,De=o.button`
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
`,We=o.img`
  display: block;
  width: 20px;
  height: 20px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`,je=o.h2`
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
`,Xt=o.p`
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
`,Zt=o.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    /* margin-bottom: 32px; */
  }
`,de=o.li`
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
`,Z=o.label`
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
`,ce=o.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${Z} {
    color: #fff;
    transition: ${e=>e.theme.transition};
    background: #f59256;
  }
`,Oe=o.ul`
  margin-bottom: 40px;
`,O=o.label`
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
`,_=o.input`
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
`,_e=o.ul`
  display: flex;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column-reverse;
    margin-left: auto;
    margin-right: auto;
  }
`,ie=o.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,oe=o.button`
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
`;function ei(){return JSON.parse(window.localStorage.getItem("notice"))}const ti=({onClose:e,isNext:i,onSubmit:n})=>{const a=ei(),[l,m]=c.useState(a?a.category:"sell"),[s,p]=c.useState(a?a.title:""),[f,h]=c.useState(a?a.name:""),[d,x]=c.useState(a?a.birthDate:""),[y,I]=c.useState(a?a.breed:"");c.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:s,breed:y,name:f,birthDate:d,category:l}))},[s,y,f,d,l]),c.useEffect(()=>{const v=k=>{k.code==="Escape"&&e()};return window.addEventListener("keydown",v),()=>{window.removeEventListener("keydown",v)}},[e]);const g=v=>{m(v.target.value)},C=v=>{const{value:k}=v.target;p(k)},N=v=>{h(v.target.value)},z=v=>{const{value:k}=v.target;if(Date.parse(k)>Date.now()){R();return}else x(k)},B=v=>{I(v.target.value)},P=()=>{n({title:s,breed:y,name:f,birthDate:d,category:l}),i()},R=()=>j.error("Wrong date!!!! Are you from the future??");return r(L,{children:[t(q,{}),r(Vt,{children:[t(De,{type:"button",onClick:e,children:t(We,{src:me})}),t(je,{children:"Add pet"}),t(Xt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),r(Zt,{children:[r(de,{children:[t(ce,{type:"radio",name:"category",checked:l==="lost-found",value:"lost-found",id:"lost/found",onChange:g}),t(Z,{htmlFor:"lost/found",children:"lost/found"})]}),r(de,{children:[t(ce,{type:"radio",name:"category",checked:l==="for-free",value:"for-free",id:"inGoodHands",onChange:g}),t(Z,{htmlFor:"inGoodHands",children:"in good hands"})]}),r(de,{children:[t(ce,{type:"radio",name:"category",checked:l==="sell",value:"sell",id:"sell",onChange:g}),t(Z,{htmlFor:"sell",children:"sell"})]})]}),r(Oe,{children:[t(E,{children:r(O,{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":",t(_,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:s,onChange:C})]})}),t(E,{children:r(O,{children:["Name pet:",t(_,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:f,onChange:N})]})}),t(E,{children:r(O,{children:["Date of birth:",t(_,{type:"date",name:"birthDate",value:d,onChange:z})]})}),t(E,{children:r(O,{children:["Breed:",t(_,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:y,onChange:B})]})})]}),r(_e,{children:[t(ie,{children:t(oe,{type:"button",onClick:e,children:"Cancel"})}),t(ie,{children:t(oe,{style:{color:"#fff",backgroundColor:"#F59256"},type:"button",onClick:P,children:"Next"})})]})]})]})},ii=o.form`
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
`,oi=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,ni=o.ul`
  display: flex;
  margin-bottom: 40px;
`,Ce=o.li`
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
`,Me=o.img`
  width: 60px;
  margin-bottom: 20px;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 40px;
    margin-bottom: 12px;
  }
`,he=o.label`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 18px;
  }
`,Le=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  transition: ${e=>e.theme.transition};
  &:checked + ${he} {
    transition: ${e=>e.theme.transition};
    color: #f59256;
  }
`,ri=o.label`
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
`,ai=o.button`
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
`,si=o.img`
  width: 47px;
  height: 47px;
`,li=o.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,di=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: none;
`,ci=o.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,pi=o.textarea`
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
`;function hi(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const mi=({onClose:e,isPrev:i,notice:n})=>{const a=hi(),l=w(b=>b.auth.token),m=c.useRef(null),[s,p]=c.useState(a?a.sex:""),[f,h]=c.useState(a?a.place:""),[d,x]=c.useState(a?a.price:""),[y,I]=c.useState(a?a.image:null),[g,C]=c.useState(a?a.imageName:null),[N,z]=c.useState(a?a.imageUrl:null),[B,P]=c.useState(a?a.comments:""),[R,v]=c.useState(!1),k=H();c.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:y,imageName:g,imageUrl:N,sex:s,place:f,price:d,comments:B}))},[B,y,g,N,s,f,d]),c.useEffect(()=>{const b=u=>{u.code==="Escape"&&e()};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[e]);const J=b=>{p(b.target.value)},D=b=>{h(b.target.value)},Y=b=>{x(b.target.value)},$=b=>{const{files:u}=b.target;if(u[0].size>5242880)return Ge();I(u[0]),u[0]&&C(u[0].name),u&&z(URL.createObjectURL(u[0]))},ae=b=>{P(b.target.value)},He=()=>{m.current.click()},Re=async b=>{v(!0),b.preventDefault();const u=new FormData;u.append("image",y),u.append("sex",s),u.append("place",f),u.append("price",d||1),u.append("comments",B),u.append("title",n.title),u.append("breed",n.breed),u.append("birthDate",n.birthDate),u.append("category",n.category),u.append("name",n.name);try{const ue=await Se.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",u,{headers:{Authorization:`Bearer ${l}`}});k(Ze()),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Ye(),ge(),e(),ge()}catch(ue){Ue(ue.response.data.message[0].message)}v(!1)},Ye=()=>{z(null),C(null),I(null),p(""),h(""),x(""),P("")},Ue=b=>j.error(b),ge=()=>j.success("Notice created!"),Ge=()=>j.error("The file must not exceed 5.2 mb!");return r(L,{children:[t(q,{}),R?t(X,{}):t(L,{children:r(ii,{name:"newForm",onSubmit:Re,children:[t(De,{type:"button",onClick:e,children:t(We,{src:me})}),t(je,{children:"Add pet"}),t(oi,{children:"The sex*:"}),r(ni,{children:[r(Ce,{children:[t(Le,{type:"radio",name:"sex",id:"male",checked:s==="male",value:"male",onChange:J}),r(he,{htmlFor:"male",children:[t(Me,{src:ft}),"Male"]})]}),r(Ce,{children:[t(Le,{type:"radio",name:"sex",id:"female",checked:s==="female",value:"female",onChange:J}),r(he,{htmlFor:"female",children:[t(Me,{src:xt}),"Female"]})]})]}),r(Oe,{children:[t(E,{children:r(O,{children:[r("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(_,{type:"",placeholder:"Type location",name:"place",value:f,onChange:D})]})}),n.category==="sell"&&t(E,{children:r(O,{children:["Price",t("span",{style:{color:"#F59256"},children:"*"}),":",t(_,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:d,onChange:Y})]})}),t(E,{children:r(ri,{children:["Load the pet’s image:",t(ai,{type:"button",onClick:He,children:N?t(li,{src:N}):t(si,{src:gt})}),t(di,{type:"file",name:"image",ref:m,accept:"image/*,.png,.jpg,.gif,.web",onChange:$})]})}),t(E,{children:r(ci,{children:[r("p",{style:{fontSize:"18px"},children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(pi,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type breed",name:"comments",value:B,onChange:ae})]})})]}),r(_e,{children:[t(ie,{children:t(oe,{onClick:i,children:"Back"})}),t(ie,{children:t(oe,{style:{color:"#fff",backgroundColor:"#F59256"},type:"submit",children:"Done"})})]})]})})]})},fi=({onClose:e})=>{const[i,n]=c.useState(!1),[a,l]=c.useState(null);return t(fe,{children:t(xe,{onClick:h=>{h.currentTarget===h.target&&e()},children:i?t(mi,{onClose:e,isPrev:()=>{n(!1)},notice:a}):t(ti,{onClose:e,isNext:()=>{n(!0)},onSubmit:h=>{l(h)}})})})},xi=o.div`
  min-width: 132px;
  @media (max-width: 767px) {
    position: fixed;
    z-index: 999;
    right: 20px;
    bottom: 100px;
    min-width: fit-content;
  }
`,gi=o.button`
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
`,ui=o.p`
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
`,wi=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
  @media (min-width: 768px) {
    display: none;
  }
`,bi=o(st)`
  @media (max-width: 767.98px) {
    width: 22px;
    height: 22px;
  }
`,yi=()=>{const[e,i]=c.useState(!1),n=w(ne),a=()=>j("You need to login first");return r(xi,{children:[t(q,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),r(lt,{children:[t(ui,{children:"Add pet"}),t(gi,{onClick:()=>{if(n){i(!0);return}a()},children:r("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[t(bi,{}),t(wi,{children:"Add pet"})]})})]}),e&&t(fi,{onClose:()=>{i(!1)}})]})};function vi(){const e=w(ne),i=et(),n=H(),a=w(re);c.useEffect(()=>{n(K("sell")),n(ee(0)),n(pe({page:0,categoryName:"sell"})),n(Q(0)),i("/notices/sell",{replace:!0})},[n]);const l=p=>{n(K(p)),n(pe({page:0,categoryName:p})),n(Q(0)),i(`/notices/${p}`,{replace:!0})},m=p=>{n(K(p)),n(tt(0)),n(Q(0)),i(`/notices/${p}`,{replace:!0})},s=p=>{n(K(p)),n(ee(0)),n(Q(0)),i(`/notices/${p}`,{replace:!0})};return t(Gt,{children:r(Kt,{children:[t(qt,{children:r(Jt,{children:[t(U,{children:t(G,{selected:a===S.lostFound,onClick:()=>l(S.lostFound),children:"lost/found"})}),t(U,{children:t(G,{selected:a===S.free,onClick:()=>l(S.free),children:"in good hands"})}),t(U,{children:t(G,{selected:a===S.sell,onClick:()=>l(S.sell),children:"sell"})}),e&&r(L,{children:[t(U,{children:t(G,{selected:a===S.favorite,onClick:()=>s(S.favorite),children:"favorite ads"})}),t(U,{children:t(G,{selected:a===S.my,onClick:()=>m(S.my),children:"my ads"})})]})]})}),t(yi,{})]})})}function Ni(e){return ct({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}o.section`
  margin-right: auto;
  margin-left: auto;
`;const ki=o(Ni)`
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
`,Ci=o.div`
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media ${e=>e.theme.media.tablet} {
    padding: 90px 32px 100px 32px;
    width: 768px;
  }
  @media ${e=>e.theme.media.desktop} {
    padding: 70px 16px 200px 16px;
    width: 1280px;
  }
`,Mi=o.form`
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
`,$e=o.button`
  padding: 0px 0px;
`,Li=o.div`
  margin-left: auto;
  margin-right: auto;
`,$i=o.h2`
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
`,Si=o(dt)`
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
`,Ii=o.input`
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
`;function zi(){const[e,i]=c.useState(""),[n,a]=c.useState(null),l=H();return w(Ae),document.getElementById("input"),r(L,{children:[t($i,{children:"Find your favorite pet"}),t(Li,{children:r(Mi,{onChange:d=>{d.preventDefault(),l(le(e))},onFocus:d=>{a(!0)},onBlur:d=>{d.currentTarget===d.target&&(a(!1),e===""&&l(le("")))},children:[t(Ii,{id:"input",type:"text",onChange:d=>{i(d.target.value)},value:e,placeholder:"Search"}),n?t($e,{onClick:d=>{i(""),a(!1),l(le(""))},children:t(ki,{})}):t($e,{type:"submit",children:t(Si,{})})]})})]})}const Pi=()=>(it(),t(L,{children:r(Ci,{children:[t(zi,{}),t(vi,{}),r(Yt,{children:[t(Ut,{}),t(ot,{})]})]})}));export{Pi as default};