var Je=Object.defineProperty;var Ke=(e,i,n)=>i in e?Je(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n;var ae=(e,i,n)=>(Ke(e,typeof i!="symbol"?i+"":i,n),n);import{r as c,p as M,i as Qe,s as o,d as w,q as oe,u as R,t as Le,a as t,j as r,v as he,w as me,Q as j,k as H,x as Se,y as $e,z as Ie,B as Ve,C as ge,D as Xe,E as Ze,A as X,F as L,G as ce,I as ze,J as et,K,M as Q,N as $,O as se,P as tt,S as it}from"./index-133e80a9.js";import{M as fe,t as ot,s as nt,c as rt,T as at,A as st}from"./PetsData.styled-36c47890.js";import{a as lt}from"./index.esm-32a69304.js";import{G as dt}from"./iconBase-9b0bdae6.js";class ee extends c.Component{constructor(i){super(i),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const i=this.getParentElement(this.scrollComponent);i.scrollTop=i.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let i=!1;const n={get passive(){i=!0}};try{document.addEventListener("test",null,n),document.removeEventListener("test",null,n)}catch{}return i}eventListenerOptions(){let i=this.props.useCapture;return this.isPassiveSupported()?i={useCapture:this.props.useCapture,passive:!0}:i={passive:!1},i}setDefaultLoader(i){this.defaultLoader=i}detachMousewheelListener(){let i=window;this.props.useWindow===!1&&(i=this.scrollComponent.parentNode),i.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let i=window;this.props.useWindow===!1&&(i=this.getParentElement(this.scrollComponent)),i.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),i.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(i){const n=this.props.getScrollParent&&this.props.getScrollParent();return n??(i&&i.parentNode)}filterProps(i){return i}attachScrollListener(){const i=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!i)return;let n=window;this.props.useWindow===!1&&(n=i),n.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),n.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),n.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(i){i.deltaY===1&&!this.isPassiveSupported()&&i.preventDefault()}scrollListener(){const i=this.scrollComponent,n=window,a=this.getParentElement(i);let l;if(this.props.useWindow){const h=document.documentElement||document.body.parentNode||document.body,s=n.pageYOffset!==void 0?n.pageYOffset:h.scrollTop;this.props.isReverse?l=s:l=this.calculateOffset(i,s)}else this.props.isReverse?l=a.scrollTop:l=i.scrollHeight-a.scrollTop-a.clientHeight;l<Number(this.props.threshold)&&i&&i.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=a.scrollHeight,this.beforeScrollTop=a.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(i,n){return i?this.calculateTopPosition(i)+(i.offsetHeight-n-window.innerHeight):0}calculateTopPosition(i){return i?i.offsetTop+this.calculateTopPosition(i.offsetParent):0}render(){const i=this.filterProps(this.props),{children:n,element:a,hasMore:l,initialLoad:h,isReverse:s,loader:p,loadMore:f,pageStart:m,ref:d,threshold:x,useCapture:y,useWindow:I,getScrollParent:g,...C}=i;C.ref=z=>{this.scrollComponent=z,d&&d(z)};const N=[n];return l&&(p?s?N.unshift(p):N.push(p):this.defaultLoader&&(s?N.unshift(this.defaultLoader):N.push(this.defaultLoader))),Qe.createElement(a,C,N)}}ae(ee,"propTypes",{children:M.node.isRequired,element:M.node,hasMore:M.bool,initialLoad:M.bool,isReverse:M.bool,loader:M.node,loadMore:M.func.isRequired,pageStart:M.number,ref:M.func,getScrollParent:M.func,threshold:M.number,useCapture:M.bool,useWindow:M.bool}),ae(ee,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null});const ct=e=>e.notices.items,Fe=e=>e.notices.favNotices,pt=e=>e.notices.isLoading,Te=e=>e.notices.page,ht=e=>e.notices.total,Be=e=>e.search,ne=e=>e.filters.status,mt="/pets-support-project-frontend/assets/male-a0f02fb1.svg",ft="/pets-support-project-frontend/assets/female-147e65d7.svg",xt="/pets-support-project-frontend/assets/plus-94d63496.svg",Ae="/pets-support-project-frontend/assets/heart-4779bb70.svg",Pe="/pets-support-project-frontend/assets/heartFull-d00981e8.svg",gt=o.li`
  /* position: relative; */
  background-color: #fff;
  border-radius: 0 0 40px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`,ut=o.div`
  display: flex;
  flex-direction: column;
  height: 612px;
`,wt=o.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`,bt=o.div`
  position: relative;
`,yt=o.p`
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
`,vt=o.button`
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
`,Nt=o.p`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
-ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  -ms-line-clamp: 2;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  display: -webkit-box;
  display: box;
  word-wrap: break-word;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: #111111;
    overflow: hidden;
`,kt=o.ul`
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
`;const Ct=o.div`
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
`,Mt=o.button`
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
`,Lt=o.img`
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
`,It=o.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`,zt=o.p`
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
`,Ft=o.h2`
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
`,Tt=o.ul`
  //   background-color: red;
`,T=o.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`,Bt=o.p`
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
`,At=o.span`
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
`,Dt=o.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`,Wt=o.a`
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

`,jt=({onClose:e,itemId:i,isFavorite:n})=>{const a=w(oe),l=w(ne),h=w(Te),[s,p]=c.useState(null),[f,m]=c.useState(n),d=R();c.useEffect(()=>{const g=C=>{C.code==="Escape"&&e()};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[e]);const x=g=>{g.currentTarget===g.target&&e()},y=()=>{m(g=>!g),d(f?Se(i):$e(i))},I=()=>t("div",{children:t(Ie,{to:"/login",children:"You need to log in"})});if(c.useEffect(()=>{Le.get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${i}`).then(g=>{const C=g.data.data;p(C)})},[]),!!s)return t(fe,{children:t(xe,{onClick:x,children:r(Ct,{children:[t(Mt,{onClick:()=>{e(f),l==="fav-notice"&&d(he(h))},children:t(Lt,{src:me,alt:"close_menu_icon"})}),r(St,{children:[r($t,{children:[t(It,{src:s.notice.photo}),t(zt,{children:s.notice.category})]}),r("div",{children:[t(Ft,{children:s.notice.title}),r(Tt,{children:[s.notice.name&&r(T,{children:[t(F,{children:"Name:"}),t(W,{children:s.notice.name})]}),s.notice.birthDate&&r(T,{children:[t(F,{children:"Birthday:"}),t(W,{children:ot(s.notice.birthDate)})]}),s.notice.breed&&r(T,{children:[t(F,{children:"Breed:"}),t(W,{children:s.notice.breed})]}),r(T,{children:[t(F,{children:"Place:"}),t(W,{children:s.notice.place})]}),r(T,{children:[t(F,{children:"The sex:"}),t(W,{children:s.notice.sex})]}),r(T,{children:[t(F,{children:"Owner:"}),t(W,{children:s.user.name})]}),r(T,{children:[t(F,{children:"Email:"}),t(we,{href:"mailto:"+s.user.email,children:s.user.email})]}),r(T,{children:[t(F,{children:"Phone:"}),t(we,{href:"tel:"+s.user.mobile,children:s.user.mobile})]}),s.notice.category==="sell"&&r(T,{children:[t(F,{children:"Price:"}),t(W,{children:`${s.notice.price} ₴`})]})]})]})]}),r(Bt,{children:["Comments",r(At,{children:[": ",s.notice.comments]})]}),r(Pt,{children:[r(Et,{onClick:()=>{a?y():j(I)},children:[f?"del from":"add to",t(Dt,{src:f?Pe:Ae,alt:f?"heartFull":"heart"})]}),t(H,{}),t(Wt,{href:"tel:"+s.user.mobile,children:"contact"})]}),t("link",{})]})})})},Ot=o.div`
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
`,_t=o.div`
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
`,Ht=({onClose:e,deleteNotice:i})=>(c.useEffect(()=>{const a=l=>{l.code==="Escape"&&e()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e]),t(fe,{children:t(xe,{onClick:a=>{a.currentTarget===a.target&&e()},children:r(Ot,{children:[t("h3",{style:{textAlign:"center"},children:"Are you sure?"}),r(_t,{children:[t(be,{onClick:e,children:"Cancel"}),t(be,{onClick:i,children:"Delete notice"})]})]})})})),ye=({item:e})=>{const i=w(Fe),n=w(oe),a=w(ne),l=w(nt),h=w(Ve),[s,p]=c.useState(!1),[f,m]=c.useState(!1),[d,x]=c.useState(!1),y=R(),I=()=>{p(!0)},g=()=>{m(S=>!S)},C=S=>{p(!1),x(S),a==="fav-notice"&&!S&&y(ge(e._id))},N=i.reduce((S,re)=>(S.push(re._id),S),[]);c.useEffect(()=>{x(N.includes(e._id))},[i]);const z=()=>{x(S=>!S),y(d?Se(e._id):$e(e._id)),a==="fav-notice"&&y(ge(e._id))},B=()=>{y(Xe(e._id)),y(Ze(e._id)),g()},E=l._id?l:h,Y=()=>t("div",{children:t(Ie,{to:"/login",children:"You need to log in"})}),k=parseInt(new Date().getFullYear())-parseInt(new Date(e.birthDate).getFullYear()),J=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen"];let D;k<1?D="Less than a year":k>15?D="very old pet":k>=1&&k<=15?D=J[k-1]:D="unknown";const U=e.category;return r(gt,{children:[r(ut,{children:[r("div",{style:{flexGrow:1},children:[r(bt,{children:[t(wt,{src:e.photo,alt:e.title}),r(yt,{children:[U==="sell"&&"sell",U==="for-free"&&"in good hands",U==="lost-found"&&"lost/found"]}),t(vt,{onClick:()=>{n?z():j(Y)},children:d?t("img",{src:Pe,alt:"heartFull"}):t("img",{src:Ae,alt:"heart"})}),t(H,{})]}),t(Nt,{style:{width:"280px"},children:e.title}),r(kt,{children:[e.breed&&r(V,{children:[t(A,{style:{width:"50px"},children:"Breed:"}),t(A,{style:{marginLeft:"40px"},children:e.breed})]}),r(V,{children:[t(A,{style:{width:"50px"},children:"Place:"}),t(A,{style:{marginLeft:"40px"},children:e.place})]}),e.birthDate&&r(V,{children:[t(A,{style:{width:"50px"},children:"Age:"}),t(A,{style:{marginLeft:"40px"},children:D})]}),a!=="lost-found"&&a!=="for-free"&&r(V,{children:[t(A,{style:{width:"50px"},children:"Price:"}),t(A,{style:{marginLeft:"40px"},children:`${e.price}₴`})]})]})]}),t(ue,{style:e.userId!==E._id?{marginBottom:"32px"}:{marginBottom:"12px"},onClick:I,children:"Learn more"}),e.userId==E._id&&n&&r(ue,{onClick:g,children:["Delete",t(rt,{width:"16px",height:"17px"})]})]}),s&&t(jt,{itemId:e._id,isFavorite:d,onClose:C}),f&&t(Ht,{onClose:g,deleteNotice:B})]})},Rt=o.ul`
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
`,Yt=()=>{const e=w(ct),i=w(Te),n=w(pt),a=w(ht),l=w(Fe),h=w(ne),s=w(Be),p=s.toLowerCase(),f=R();let m=[],d=[];return e!==void 0&&e.length>0&&(m=e.filter(x=>x.title.toLowerCase().includes(p))),l!==void 0&&l.length>0&&(d=l.filter(x=>x.title.toLowerCase().includes(p))),n&&i===0?t(X,{}):r(L,{children:[h!=="fav-notice"?t(L,{children:m!==void 0&&m.length>=1?t(ee,{pageStart:i+1,loadMore:()=>!n&&f(ce({page:i,categoryName:h})),hasMore:m.length!==a&&i!==0,loader:t(X,{},i),children:t(ve,{children:m.map(x=>t(ye,{item:x},x._id))})}):s===""&&t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any own ads"})}):t(L,{children:d!==void 0&&d.length>=1?t(ee,{pageStart:i+1,loadMore:()=>!n&&f(he(i)),hasMore:d.length!==a&&i!==0,loader:t(X,{},i),children:t(ve,{children:d.map(x=>t(ye,{item:x},x._id))})}):s===""&&t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"You do not have any favorite ads"})}),!n&&m.length===0&&h==="own-notices"&&s!==""&&t(L,{children:t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"Dear client, we didn't find any your own notices."})}),!n&&m.length===0&&h==="fav-notice"&&s!==""&&t(L,{children:t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"Dear client, we didn't find any favorite notices."})}),!n&&m.length===0&&h!=="fav-notice"&&h!=="own-notices"&&s!==""&&t(L,{children:t("h1",{style:{margin:"0 auto",fontFamily:"Manrope",color:"rgba(47,48,64,1)"},children:"Dear client, we didn't find any notices in this category."})})]})},Ut=o.section`
  margin: 0 50px;
`,Gt=o.div`
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
`,qt=o.ul`
  display: flex;
  flex-wrap: wrap;
`,G=o.li`
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
`,q=({selected:e=!1,type:i="button",children:n,...a})=>t(Kt,{style:{backgroundColor:e&&"rgba(245,146,86,1)",color:e&&"#fff"},type:i,...a,children:n}),Qt=o.form`
  position: absolute;
  top: 50px;
  bottom: 50px;
  width: 608px;
  min-height: 885px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 40px 20px 28px 20px;
    width: 280px;
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
`,Vt=o.p`
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
`,Xt=o.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    /* margin-bottom: 32px; */
  }
`,le=o.li`
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
`,de=o.input`
  display: none;
  transition: ${e=>e.theme.transition};
  &:checked + ${Z} {
    color: #fff;
    transition: ${e=>e.theme.transition};
    background: #f59256;
  }
`,je=o.ul`
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
`,P=o.li`
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
`,te=o.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`,ie=o.button`
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
`;function Zt(){return JSON.parse(window.localStorage.getItem("notice"))}const ei=({onClose:e,isNext:i,onSubmit:n})=>{const a=Zt(),[l,h]=c.useState(a?a.category:"sell"),[s,p]=c.useState(a?a.title:""),[f,m]=c.useState(a?a.name:""),[d,x]=c.useState(a?a.birthDate:""),[y,I]=c.useState(a?a.breed:"");c.useEffect(()=>{localStorage.setItem("notice",JSON.stringify({title:s,breed:y,name:f,birthDate:d,category:l}))},[s,y,f,d,l]),c.useEffect(()=>{const v=k=>{k.code==="Escape"&&e()};return window.addEventListener("keydown",v),()=>{window.removeEventListener("keydown",v)}},[e]);const g=v=>{h(v.target.value)},C=v=>{const{value:k}=v.target;p(k)},N=v=>{m(v.target.value)},z=v=>{const{value:k}=v.target;if(Date.parse(k)>Date.now()){Y();return}else x(k)},B=v=>{I(v.target.value)},E=()=>{n({title:s,breed:y,name:f,birthDate:d,category:l}),i()},Y=()=>j.error("Wrong date!!!! Are you from the future??");return r(L,{children:[t(H,{}),r(Qt,{children:[t(Ee,{type:"button",onClick:e,children:t(De,{src:me})}),t(We,{children:"Add pet"}),t(Vt,{children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),r(Xt,{children:[r(le,{children:[t(de,{type:"radio",name:"category",checked:l==="lost-found",value:"lost-found",id:"lost/found",onChange:g}),t(Z,{htmlFor:"lost/found",children:"lost/found"})]}),r(le,{children:[t(de,{type:"radio",name:"category",checked:l==="for-free",value:"for-free",id:"inGoodHands",onChange:g}),t(Z,{htmlFor:"inGoodHands",children:"in good hands"})]}),r(le,{children:[t(de,{type:"radio",name:"category",checked:l==="sell",value:"sell",id:"sell",onChange:g}),t(Z,{htmlFor:"sell",children:"sell"})]})]}),r(je,{children:[t(P,{children:r(O,{children:["Tittle of ad",t("span",{style:{color:"#F59256"},children:"*"}),":",t(_,{type:"text",minlength:"2",maxlength:"48",required:!0,placeholder:"Type name",name:"title",value:s,onChange:C})]})}),t(P,{children:r(O,{children:["Name pet:",t(_,{type:"text",minlength:"2",maxlength:"16",placeholder:"Type name pet",name:"name",value:f,onChange:N})]})}),t(P,{children:r(O,{children:["Date of birth:",t(_,{type:"date",name:"birthDate",value:d,onChange:z})]})}),t(P,{children:r(O,{children:["Breed:",t(_,{type:"text",minlength:"2",maxlength:"24",placeholder:"Type breed",name:"breed",value:y,onChange:B})]})})]}),r(Oe,{children:[t(te,{children:t(ie,{type:"button",onClick:e,children:"Cancel"})}),t(te,{children:t(ie,{style:{color:"#fff",backgroundColor:"#F59256"},type:"button",onClick:E,children:"Next"})})]})]})]})},ti=o.form`
  position: absolute;
  top: 50px;
  width: 608px;
  min-height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-bottom: 100px;
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 40px 20px 28px 20px;
    width: 280px;
  }
`,ii=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`,oi=o.ul`
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
`,pe=o.label`
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
  &:checked + ${pe} {
    transition: ${e=>e.theme.transition};
    color: #f59256;
  }
`,ni=o.label`
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
`,ri=o.button`
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
`,ai=o.img`
  width: 47px;
  height: 47px;
`,si=o.img`
  min-width: 140px;
  max-width: 140px;
  max-height: 140px;
  min-height: 140px;
  border-radius: inherit;
`,li=o.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: none;
`,di=o.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`,ci=o.textarea`
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
`;function pi(){return JSON.parse(window.localStorage.getItem("noticeNextPart"))}const hi=({onClose:e,isPrev:i,notice:n})=>{const a=pi(),l=w(b=>b.auth.token),h=c.useRef(null),[s,p]=c.useState(a?a.sex:""),[f,m]=c.useState(a?a.place:""),[d,x]=c.useState(a?a.price:""),[y,I]=c.useState(a?a.image:{}),[g,C]=c.useState(a?a.imageName:null),[N,z]=c.useState(a?a.imageUrl:null),[B,E]=c.useState(a?a.comments:""),[Y,v]=c.useState(!1),k=R();c.useEffect(()=>{localStorage.setItem("noticeNextPart",JSON.stringify({image:y,imageName:g,imageUrl:N,sex:s,place:f,price:d,comments:B}))},[B,y,g,N,s,f,d]),c.useEffect(()=>{const b=u=>{u.code==="Escape"&&e()};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[e]);const J=b=>{p(b.target.value)},D=b=>{m(b.target.value)},U=b=>{x(b.target.value)},S=b=>{const{files:u}=b.target;if(u[0].size>5242880)return Ge();I(u[0]),u[0]&&C(u[0].name),u&&z(URL.createObjectURL(u[0]))},re=b=>{E(b.target.value)},_e=()=>{h.current.click()},He=async b=>{v(!0),b.preventDefault();const u=new FormData;u.append("image",y),u.append("sex",s),u.append("place",f),u.append("price",d||1),u.append("comments",B),u.append("title",n.title),u.append("breed",n.breed),u.append("birthDate",n.birthDate),u.append("category",n.category),u.append("name",n.name);try{await Le.post("https://pet.tizenmile.keenetic.pro/api/notices/notice",u,{headers:{Authorization:`Bearer ${l}`}}),k(ze()),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"),Re(),e(),Ue()}catch(qe){Ye(qe.response.data.message[0].message)}v(!1)},Re=()=>{z(null),C(null),I(null),p(""),m(""),x(""),E("")},Ye=b=>j.error(b),Ue=()=>j.success("Notice created!"),Ge=()=>j.error("The file must not exceed 5.2 mb!");return r(L,{children:[t(H,{}),Y?t(X,{}):t(L,{children:r(ti,{name:"newForm",onSubmit:He,children:[t(Ee,{type:"button",onClick:e,children:t(De,{src:me})}),t(We,{children:"Add pet"}),t(ii,{children:"The sex*:"}),r(oi,{children:[r(Ne,{children:[t(Ce,{type:"radio",name:"sex",id:"male",checked:s==="male",value:"male",onChange:J}),r(pe,{htmlFor:"male",children:[t(ke,{src:mt}),"Male"]})]}),r(Ne,{children:[t(Ce,{type:"radio",name:"sex",id:"female",checked:s==="female",value:"female",onChange:J}),r(pe,{htmlFor:"female",children:[t(ke,{src:ft}),"Female"]})]})]}),r(je,{children:[t(P,{children:r(O,{children:[r("p",{children:["Location",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(_,{type:"",placeholder:"Type location",name:"place",value:f,onChange:D})]})}),n.category==="sell"&&t(P,{children:r(O,{children:["Price",t("span",{style:{color:"#F59256"},children:"*"}),":",t(_,{type:"number",pattern:"[1-9]*[.]?[1-9]+",placeholder:"Type price",name:"price",value:d,onChange:U})]})}),t(P,{children:r(ni,{children:["Load the pet’s image:",t(ri,{type:"button",onClick:_e,children:N?t(si,{src:N}):t(ai,{src:xt})}),t(li,{type:"file",name:"image",ref:h,accept:"image/*,.png,.jpg,.gif,.web",onChange:S})]})}),t(P,{children:r(di,{children:[r("p",{style:{fontSize:"18px"},children:["Comments",t("span",{style:{color:"#F59256"},children:"*"}),":"]}),t(ci,{type:"text",minlength:"8",maxlength:"120",required:!0,placeholder:"Type breed",name:"comments",value:B,onChange:re})]})})]}),r(Oe,{children:[t(te,{children:t(ie,{onClick:i,children:"Back"})}),t(te,{children:t(ie,{style:{color:"#fff",backgroundColor:"#F59256"},type:"submit",children:"Done"})})]})]})})]})},mi=({onClose:e})=>{const[i,n]=c.useState(!1),[a,l]=c.useState(null);return t(fe,{children:t(xe,{onClick:m=>{m.currentTarget===m.target&&e()},children:i?t(hi,{onClose:e,isPrev:()=>{n(!1)},notice:a}):t(ei,{onClose:e,isNext:()=>{n(!0)},onSubmit:m=>{l(m)}})})})},fi=o.div`
  min-width: 132px;
  @media (max-width: 767px) {
    position: fixed;
    z-index: 999;
    right: 20px;
    bottom: 100px;
    min-width: fit-content;
  }
`,xi=o.button`
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
`,gi=o.p`
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
`,ui=o.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
  @media (min-width: 768px) {
    display: none;
  }
`,wi=o(at)`
  @media (max-width: 767.98px) {
    width: 22px;
    height: 22px;
  }
`,bi=({isLoggedIn:e})=>{const[i,n]=c.useState(!1);w(oe);const a=()=>{e?n(!0):h()},l=()=>{n(!1),localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart")},h=()=>j.info("You need to log in");return(()=>{i===!1&&(localStorage.removeItem("notice"),localStorage.removeItem("noticeNextPart"))})(),r(fi,{children:[t(H,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),r(st,{children:[t(gi,{children:"Add pet"}),t(xi,{onClick:a,children:r("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[t(wi,{}),t(ui,{children:"Add pet"})]})})]}),i&&t(mi,{onClose:l}),t(H,{})]})};function yi(){const e=w(oe),i=et(),n=R(),a=w(ne);c.useEffect(()=>{n(K("sell")),n(ce({page:0,categoryName:"sell"})),n(Q(0)),i("/FindPet/sell",{replace:!0})},[n]);const l=p=>{n(K(p)),n(ce({page:0,categoryName:p})),n(Q(0)),i(`/notices/${p}`,{replace:!0})},h=p=>{n(K(p)),n(ze(0)),n(Q(0)),i(`/notices/${p}`,{replace:!0})},s=p=>{n(K(p)),n(he(0)),n(Q(0)),i(`/notices/${p}`,{replace:!0})};return t(Ut,{children:r(Jt,{children:[t(Gt,{children:r(qt,{children:[t(G,{children:t(q,{selected:a===$.lostFound,onClick:()=>l($.lostFound),children:"lost/found"})}),t(G,{children:t(q,{selected:a===$.free,onClick:()=>l($.free),children:"in good hands"})}),t(G,{children:t(q,{selected:a===$.sell,onClick:()=>l($.sell),children:"sell"})}),e&&r(L,{children:[t(G,{children:t(q,{selected:a===$.favorite,onClick:()=>s($.favorite),children:"favorite ads"})}),t(G,{children:t(q,{selected:a===$.my,onClick:()=>h($.my),children:"my ads"})})]})]})}),t(bi,{isLoggedIn:e})]})})}function vi(e){return dt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}o.section`
  margin-right: auto;
  margin-left: auto;
`;const Ni=o(vi)`
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
`,ki=o.div`
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
`,Ci=o.form`
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
`,Mi=o.div`
  margin-left: auto;
  margin-right: auto;
`,Li=o.h2`
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
`,Si=o(lt)`
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
`;function Ii(){const[e,i]=c.useState(""),[n,a]=c.useState(null),l=R();return w(Be),document.getElementById("input"),r(L,{children:[t(Li,{children:"Find your favorite pet"}),t(Mi,{children:r(Ci,{onChange:d=>{d.preventDefault(),l(se(e))},onFocus:d=>{a(!0)},onBlur:d=>{d.currentTarget===d.target&&(a(!1),e===""&&l(se("")))},children:[t($i,{id:"input",type:"text",onChange:d=>{i(d.target.value)},value:e,placeholder:"Search"}),n?t(Me,{onClick:d=>{i(""),a(!1),l(se(""))},children:t(Ni,{})}):t(Me,{type:"submit",children:t(Si,{})})]})})]})}const Pi=()=>(tt(),t(L,{children:r(ki,{children:[t(Ii,{}),t(yi,{}),r(Rt,{children:[t(Yt,{}),t(it,{})]})]})}));export{Pi as default};
