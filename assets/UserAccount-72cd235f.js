import{s as u,e as Y,r as m,j as a,a as f,h as Bt,i as Lt,d as W,A as gt,F as ie,k as Ut,p as h,l as Wt,Q as Ht,m as qt,n as Kt,o as Nt,q as Vt}from"./index-7169b28c.js";import{c as bt,a as M,b as xt,F as Gt,d as Yt,e as Zt,E as Jt,u as Qt}from"./index.esm-0a701216.js";import{G as ve}from"./iconBase-ad73d17e.js";import{H as Xt,M as en,a as tn,b as nn}from"./ModalBackdrop-ef9d0b6a.js";const rn=u.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 61px;
  padding-bottom: 80px;
  @media ${e=>e.theme.media.mobileMin} {
    width: 320px;
  }
  @media ${e=>e.theme.media.tablet} {
    width: 768px;
    padding-left: ${e=>e.theme.space[0]};
    padding-right: ${e=>e.theme.space[5]};
    padding-top: 88px;
    padding-bottom: 100px;
  }

  @media ${e=>e.theme.media.desktop} {
    display: flex;
    padding-left: ${e=>e.theme.space[0]};
    padding-right: ${e=>e.theme.space[4]};
    padding-top: 58px;
    padding-bottom: 40px;
    width: 1280px;
  }
`,on=u.section`
  position: relative;
  height: fit-content;
  margin-bottom: 40px;
  @media ${e=>e.theme.media.tablet} {
    position: relative;
    margin-bottom: 20px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-right: ${e=>e.theme.space[5]};
    margin-bottom: ${e=>e.theme.space[0]};
  }
`,an=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  margin-left: ${e=>e.theme.space[5]}px;
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: 40px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-left: ${e=>e.theme.space[4]}px;
    margin-bottom: 24px;
  }
`,sn=u.h2`
  color: ${e=>e.theme.colors.mainText};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xm};
  line-height: ${e=>e.theme.lineHeights.body};
  font-family: ${e=>e.theme.fonts.main};
  letter-spacing: 0.04em;
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.l};
  }
  @media ${e=>e.theme.media.desktop} {
    font-size: ${e=>e.theme.fontSizes.l};
  }
`,Je=bt().shape({name:M().required("Required").min(2,"Username must be at least 2 characters").max(30,"Username must be less than 30 characters").matches(/^[a-zA-Zа-щА-ЩЬьЮюЯяІіЇїЄєҐґ\s]+$/,"Username can only contain letters and spaces"),email:M().required("Required").matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email"),mobile:M().matches(/^[+](380)[0-9]{9}$/,"Invalid phone number").required("Required"),city:M().required("Required").max(30,"City name must be less than 30 characters").matches(/^(([a-zA-Zа-яА-Я`'іІїЇ]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я`'іІїЇ](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,"Example: Lviv, Karpaty"),birthday:xt().required("Required")});function ln(e){return ve({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}}]})(e)}function cn(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"}}]})(e)}const Qe=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.space[0]};
  width: 20px;
  height: 20px;
  border-radius: ${e=>e.theme.radii.round};
  border: none;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  :hover,
  :focus {
    color: ${e=>e.theme.colors.active};
  }
  @media ${e=>e.theme.media.tablet} {
    width: ${e=>e.theme.space[5]}px;
    height: ${e=>e.theme.space[5]}px;
  }
  :disabled {
    color: grey;
  }
`,dn=u(ln)`
  width: 13px;
  height: 13px;
  fill: currentColor;
  @media ${e=>e.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`,un=u(cn)`
  width: 10px;
  height: 8px;
  fill: currentColor;
  @media ${e=>e.theme.media.tablet} {
    width: 17px;
    height: 13px;
  }
`,pn=u.input`
  width: 159px;
  height: 24px;
  padding: 4px 18px;
  background-color: ${e=>e.disabled?e.theme.colors.white:e.theme.colors.background};
  border: ${e=>e.disabled?"none":e.theme.borders.normal};
  border-color: ${e=>e.theme.colors.active};
  color: ${e=>e.theme.colors.mainText};
  border-radius: ${e=>e.theme.radii.large};
  font-size: ${e=>e.theme.fontSizes.xxs};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-family: ${e=>e.theme.fonts.main};
  line-height: ${e=>e.theme.lineHeights.body};
  :focus {
    outline-color: ${e=>e.theme.colors.active};
  }
  @media ${e=>e.theme.media.tablet} {
    width: 216px;

    height: ${e=>e.theme.space[5]}px;
    padding: 4px 12px;
    font-size: ${e=>e.theme.fontSizes.xxm};
  }
`,mn=u(Gt)`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;

  column-gap: 5px;
  @media ${e=>e.theme.media.tablet} {
    column-gap: 24px;
  }
`,fn=u.div`
  position: absolute;
  color: red;
  font-size: 9px;
  margin-left: 15px;
`,hn=u.div``,te=({isBtnDisabled:e,setIsBtnDisabled:t,name:n,type:r,defaultValue:o})=>{const i=Y(),[l,c]=m.useState(!1),[g,d]=m.useState(o??""),[x,b]=m.useState(!1),D=E=>{d(E.target.value),b(Je.fields[n].isValidSync(E.target.value))},y=()=>{b(!0),c(!0),t(!0)},O=()=>{if(t(!0),g===o){b(!1),c(!1),t(!1);return}const E={[n]:g};i(Bt(E)),c(!1),t(!1)};return a(Yt,{initialValues:{[n]:o??""},validationSchema:Je,children:E=>f(mn,{children:[f(hn,{children:[a(Zt,{as:pn,name:n,type:r,value:E.values[n],disabled:!l,onChange:P=>{D(P),E.handleChange(P)}}),a(Jt,{component:fn,name:n})]}),l?a(Qe,{type:"submit",disabled:!x,onClick:O,children:a(un,{})}):a(Qe,{type:"button",onClick:y,disabled:e,children:a(dn,{})})]})})},gn=e=>e.user.userData,bn=e=>e.user.isLoading,xn=u.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 537px;
  padding: 20px 12px 20px 16px;
  border-radius: ${e=>e.theme.radii.large};
  box-shadow: 7px 4px 14px ${e=>e.theme.colors.shadow};
  background-color: ${e=>e.theme.colors.white};
  @media ${e=>e.theme.media.tablet} {
    position: relative;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    height: 311px;
    padding: 24px 40px 24px 32px;
    border-radius: 0 40px 40px 0;
  }
  @media ${e=>e.theme.media.desktop} {
    flex-direction: column;
    justify-content: inherit;
    width: 411px;
    min-height: 541px;
    padding: 20px 16px 18px 16px;
  }
`,vn=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${e=>e.theme.space[5]}px;
  align-items: center;
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: ${e=>e.theme.space[0]}px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-bottom: 36px;
  }
`,Xe=u.img`
  width: 233px;
  height: 233px;
  border-radius: ${e=>e.theme.radii.round};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`,yn=u.button`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-size: ${e=>e.theme.fontSizes.xxs};
  font-family: ${e=>e.theme.fonts.main};
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover svg,
  :focus svg {
    fill: ${e=>e.theme.colors.active};
  }
  @media ${e=>e.theme.media.tablet} {
    position: absolute;
    bottom: ${e=>e.theme.space[0]};
    right: ${e=>e.theme.space[0]};
    margin: ${e=>e.theme.space[0]};
  }
`,wn=u.div`
  & input {
    position: absolute;
    width: ${e=>e.theme.space[0]};
    height: ${e=>e.theme.space[0]};
    z-index: -1;
    opacity: 0;
  }
`,$n=u(Xt)`
  width: 20px;
  height: 20px;
  margin-right: ${e=>e.theme.space[2]}px;
  margin-bottom: -5px;
  cursor: pointer;
  fill: ${e=>e.theme.colors.accent};
`,Dn=u.label`
  cursor: pointer;
`,An=u.div`
  margin-bottom: 60px;
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: ${e=>e.theme.space[0]};
    margin-right: 52px;
    margin-top: ${e=>e.theme.space[4]}px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-top: ${e=>e.theme.space[0]};
    margin-right: ${e=>e.theme.space[0]};
    ${""}
  }
`,V=u.div`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;

  column-gap: 5px;
  @media ${e=>e.theme.media.tablet} {
    column-gap: 24px;
  }
`,En=u.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: space-between;
`,G=u.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${e=>e.theme.space[3]}px;
  }
  &:not(:last-child) {
    @media ${e=>e.theme.media.desktop} {
      margin-bottom: ${e=>e.theme.space[3]}px;
    }
  }
`,ne=u.label`
  width: 56px;
  font-size: ${e=>e.theme.fontSizes.xxs};
  margin-right: ${e=>e.theme.space[3]}px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-family: ${e=>e.theme.fonts.main};
  font-family: ${e=>e.theme.lineHeights.body};
  @media ${e=>e.theme.media.tablet} {
    width: 83px;
    font-family: ${e=>e.theme.lineHeights.body};
    font-size: ${e=>e.theme.fontSizes.xxm};
    margin-right: 24px;
  }
`;u.p`
  margin-left: 18px;
  font-size: ${e=>e.theme.fontSizes.xxm};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-family: ${e=>e.theme.fonts.main};
  @media ${e=>e.theme.media.tablet} {
    margin-left: 12px;
    font-size: ${e=>e.theme.fontSizes.xxm};
  }
`;u.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  font-size: 10px;
  color: red;
  font-weight: ${e=>e.theme.fontWeights.bold};
  font-style: italic;
  bottom: -12px;
  z-index: ${e=>e.theme.space[1]};
`;const kn=()=>{const e=Y();m.useEffect(()=>{e(Lt())},[e]);const t=W(gn),{name:n,email:r,mobile:o,birthday:i,city:l,avatarURL:c}=t,[g,d]=m.useState(),[x,b]=m.useState(""),[D,y]=m.useState(!1),O=W(bn);return m.useEffect(()=>{b(c)}),a(xn,{children:O?a(gt,{}):f(ie,{children:[f(vn,{children:[g?a(Xe,{id:"img_container",src:g,alt:"avatar"}):a(Xe,{id:"img_container",src:x,alt:"avatar"}),f(yn,{children:[a(wn,{children:a("form",{children:a("input",{name:"userAvatar",type:"file",id:"userAvatar",accept:"image/jpg, image/png, image/jpeg, image/bmp",onChange:P=>{const T=new FileReader;P.target.files[0]&&(T.readAsDataURL(P.target.files[0]),T.onloadend=()=>{const I=T.result;if(I.includes("image/png")||I.includes("image/jpg")||I.includes("image/jpeg")){d(I);const _=new FormData;_.append("image",P.target.files[0]),e(Ut(_))}})}})})}),f(Dn,{htmlFor:"userAvatar",children:[a($n,{}),"Edit photo"]})]})]}),a(An,{children:a(G,{children:a(V,{children:f(En,{children:[f(G,{children:[a(ne,{children:"Name:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:n,name:"name",type:"text"})})]}),f(G,{children:[a(ne,{children:"Email:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:r,name:"email",type:"email"})})]}),f(G,{children:[a(ne,{children:"Birthday:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:i,name:"birthday",type:"date",min:"1940-01-01"})})]}),f(G,{children:[a(ne,{children:"Phone:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:o,name:"mobile",type:"tel"})})]}),f(G,{children:[a(ne,{children:"City:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:l,name:"city",type:"text"})})]})]})})})})]})})},On=()=>f(ie,{children:[a(an,{children:a(sn,{children:"My information:"})}),a(kn,{})]});function Fn(e){return ve({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(e)}function vt(e){return ve({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(e)}const Sn=u.button`
  display: flex;
  cursor: pointer;
  width: 40px;
  height: 40px;
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
`,Cn=u(vt)``,Pn=({disabled:e=!1,onClick:t})=>a(ie,{children:a(Sn,{active:!0,disabled:e,type:"button",onClick:t,children:a(Cn,{})})}),yt=new Date().toISOString().slice(0,10),jn=bt().shape({name:M().required("Pet name is required").min(5,"Minimum 5 symbols").max(20,"Maximum 20 symbols").matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/,"Only letters"),date:xt().required().min("2000-01-01","The min date is 01.01.2000").max(yt,"The max date of birth is today"),breed:M().required("Field required").min(5,"Minimum 5 symbols").max(20,"Maximum 20 symbols").matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/,"Only letters"),petAvatar:M(),comments:M().min(5,"Minimum 5 symbols").max(200,"Maximum 200 symbols").required("Field required")});function Z(e,t,n,r){function o(i){return i instanceof n?i:new n(function(l){l(i)})}return new(n||(n=Promise))(function(i,l){function c(x){try{d(r.next(x))}catch(b){l(b)}}function g(x){try{d(r.throw(x))}catch(b){l(b)}}function d(x){x.done?i(x.value):o(x.value).then(c,g)}d((r=r.apply(e,t||[])).next())})}function J(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,l;return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(d){return function(x){return g([d,x])}}function g(d){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,d[0]&&(n=0)),n;)try{if(r=1,o&&(i=d[0]&2?o.return:d[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,d[1])).done)return i;switch(o=0,i&&(d=[d[0]&2,i.value]),d[0]){case 0:case 1:i=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,o=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!i||d[1]>i[0]&&d[1]<i[3])){n.label=d[1];break}if(d[0]===6&&n.label<i[1]){n.label=i[1],i=d;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(d);break}i[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(x){d=[6,x],o=0}finally{r=i=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}function et(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],l;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(c){l={error:c}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(l)throw l.error}}return i}function tt(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var zn=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function oe(e,t){var n=In(e);if(typeof n.path!="string"){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof t=="string"?t:typeof r=="string"&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function In(e){var t=e.name,n=t&&t.lastIndexOf(".")!==-1;if(n&&!e.type){var r=t.split(".").pop().toLowerCase(),o=zn.get(r);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var Tn=[".DS_Store","Thumbs.db"];function _n(e){return Z(this,void 0,void 0,function(){return J(this,function(t){return ge(e)&&Rn(e.dataTransfer)?[2,Un(e.dataTransfer,e.type)]:Mn(e)?[2,Bn(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,Ln(e)]:[2,[]]})})}function Rn(e){return ge(e)}function Mn(e){return ge(e)&&ge(e.target)}function ge(e){return typeof e=="object"&&e!==null}function Bn(e){return je(e.target.files).map(function(t){return oe(t)})}function Ln(e){return Z(this,void 0,void 0,function(){var t;return J(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(r){return r.getFile()}))];case 1:return t=n.sent(),[2,t.map(function(r){return oe(r)})]}})})}function Un(e,t){return Z(this,void 0,void 0,function(){var n,r;return J(this,function(o){switch(o.label){case 0:return e.items?(n=je(e.items).filter(function(i){return i.kind==="file"}),t!=="drop"?[2,n]:[4,Promise.all(n.map(Wn))]):[3,2];case 1:return r=o.sent(),[2,nt(wt(r))];case 2:return[2,nt(je(e.files).map(function(i){return oe(i)}))]}})})}function nt(e){return e.filter(function(t){return Tn.indexOf(t.name)===-1})}function je(e){if(e===null)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Wn(e){if(typeof e.webkitGetAsEntry!="function")return rt(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?$t(t):rt(e)}function wt(e){return e.reduce(function(t,n){return tt(tt([],et(t),!1),et(Array.isArray(n)?wt(n):[n]),!1)},[])}function rt(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=oe(t);return Promise.resolve(n)}function Hn(e){return Z(this,void 0,void 0,function(){return J(this,function(t){return[2,e.isDirectory?$t(e):qn(e)]})})}function $t(e){var t=e.createReader();return new Promise(function(n,r){var o=[];function i(){var l=this;t.readEntries(function(c){return Z(l,void 0,void 0,function(){var g,d,x;return J(this,function(b){switch(b.label){case 0:if(c.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return g=b.sent(),n(g),[3,4];case 3:return d=b.sent(),r(d),[3,4];case 4:return[3,6];case 5:x=Promise.all(c.map(Hn)),o.push(x),i(),b.label=6;case 6:return[2]}})})},function(c){r(c)})}i()})}function qn(e){return Z(this,void 0,void 0,function(){return J(this,function(t){return[2,new Promise(function(n,r){e.file(function(o){var i=oe(o,e.fullPath);n(i)},function(o){r(o)})})]})})}var Kn=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(l){var c=l.trim().toLowerCase();return c.charAt(0)==="."?r.toLowerCase().endsWith(c):c.endsWith("/*")?i===c.replace(/\/.*$/,""):o===c})}return!0};function it(e){return Gn(e)||Vn(e)||At(e)||Nn()}function Nn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gn(e){if(Array.isArray(e))return ze(e)}function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ot(Object(n),!0).forEach(function(r){Dt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e,t){return Jn(e)||Zn(e,t)||At(e,t)||Yn()}function Yn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(e,t){if(e){if(typeof e=="string")return ze(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ze(e,t)}}function ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,l,c;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(r.push(l.value),!(t&&r.length===t));o=!0);}catch(g){i=!0,c=g}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw c}}return r}}function Jn(e){if(Array.isArray(e))return e}var Qn="file-invalid-type",Xn="file-too-large",er="file-too-small",tr="too-many-files",nr=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var n=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:Qn,message:"File type must be ".concat(n)}},st=function(t){return{code:Xn,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},lt=function(t){return{code:er,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},rr={code:tr,message:"Too many files"};function Et(e,t){var n=e.type==="application/x-moz-file"||Kn(e,t);return[n,n?null:nr(t)]}function kt(e,t,n){if(U(e.size))if(U(t)&&U(n)){if(e.size>n)return[!1,st(n)];if(e.size<t)return[!1,lt(t)]}else{if(U(t)&&e.size<t)return[!1,lt(t)];if(U(n)&&e.size>n)return[!1,st(n)]}return[!0,null]}function U(e){return e!=null}function ir(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,l=e.maxFiles,c=e.validator;return!i&&t.length>1||i&&l>=1&&t.length>l?!1:t.every(function(g){var d=Et(g,n),x=re(d,1),b=x[0],D=kt(g,r,o),y=re(D,1),O=y[0],E=c?c(g):null;return b&&O&&!E})}function be(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function me(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function ct(e){e.preventDefault()}function or(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function ar(e){return e.indexOf("Edge/")!==-1}function sr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return or(e)||ar(e)}function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return t.some(function(c){return!be(r)&&c&&c.apply(void 0,[r].concat(i)),be(r)})}}function lr(){return"showOpenFilePicker"in window}function cr(e){if(U(e)){var t=Object.entries(e).filter(function(n){var r=re(n,2),o=r[0],i=r[1],l=!0;return Ot(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),l=!1),(!Array.isArray(i)||!i.every(Ft))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),l=!1),l}).reduce(function(n,r){var o=re(r,2),i=o[0],l=o[1];return at(at({},n),{},Dt({},i,l))},{});return[{description:"Files",accept:t}]}return e}function dr(e){if(U(e))return Object.entries(e).reduce(function(t,n){var r=re(n,2),o=r[0],i=r[1];return[].concat(it(t),[o],it(i))},[]).filter(function(t){return Ot(t)||Ft(t)}).join(",")}function ur(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function pr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Ot(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Ft(e){return/^.*\.[\w]+$/.test(e)}var mr=["children"],fr=["open"],hr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],gr=["refKey","onChange","onClick"];function br(e){return yr(e)||vr(e)||St(e)||xr()}function xr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yr(e){if(Array.isArray(e))return Ie(e)}function Pe(e,t){return Dr(e)||$r(e,t)||St(e,t)||wr()}function wr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function St(e,t){if(e){if(typeof e=="string")return Ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(e,t)}}function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $r(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,l,c;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(r.push(l.value),!(t&&r.length===t));o=!0);}catch(g){i=!0,c=g}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw c}}return r}}function Dr(e){if(Array.isArray(e))return e}function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xe(e,t){if(e==null)return{};var n=Ar(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ar(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Me=m.forwardRef(function(e,t){var n=e.children,r=xe(e,mr),o=Pt(r),i=o.open,l=xe(o,fr);return m.useImperativeHandle(t,function(){return{open:i}},[i]),Wt.createElement(m.Fragment,null,n(v(v({},l),{},{open:i})))});Me.displayName="Dropzone";var Ct={disabled:!1,getFilesFromEvent:_n,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Me.defaultProps=Ct;Me.propTypes={children:h.func,accept:h.objectOf(h.arrayOf(h.string)),multiple:h.bool,preventDropOnDocument:h.bool,noClick:h.bool,noKeyboard:h.bool,noDrag:h.bool,noDragEventsBubbling:h.bool,minSize:h.number,maxSize:h.number,maxFiles:h.number,disabled:h.bool,getFilesFromEvent:h.func,onFileDialogCancel:h.func,onFileDialogOpen:h.func,useFsAccessApi:h.bool,autoFocus:h.bool,onDragEnter:h.func,onDragLeave:h.func,onDragOver:h.func,onDrop:h.func,onDropAccepted:h.func,onDropRejected:h.func,onError:h.func,validator:h.func};var _e={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Pt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=v(v({},Ct),e),n=t.accept,r=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,l=t.minSize,c=t.multiple,g=t.maxFiles,d=t.onDragEnter,x=t.onDragLeave,b=t.onDragOver,D=t.onDrop,y=t.onDropAccepted,O=t.onDropRejected,E=t.onFileDialogCancel,P=t.onFileDialogOpen,T=t.useFsAccessApi,I=t.autoFocus,_=t.preventDropOnDocument,w=t.noClick,F=t.noKeyboard,R=t.noDrag,B=t.noDragEventsBubbling,ye=t.onError,Q=t.validator,X=m.useMemo(function(){return dr(n)},[n]),Be=m.useMemo(function(){return cr(n)},[n]),we=m.useMemo(function(){return typeof P=="function"?P:ut},[P]),ae=m.useMemo(function(){return typeof E=="function"?E:ut},[E]),k=m.useRef(null),j=m.useRef(null),zt=m.useReducer(Er,_e),Le=Pe(zt,2),$e=Le[0],S=Le[1],It=$e.isFocused,Ue=$e.isFileDialogActive,se=m.useRef(typeof window<"u"&&window.isSecureContext&&T&&lr()),We=function(){!se.current&&Ue&&setTimeout(function(){if(j.current){var p=j.current.files;p.length||(S({type:"closeDialog"}),ae())}},300)};m.useEffect(function(){return window.addEventListener("focus",We,!1),function(){window.removeEventListener("focus",We,!1)}},[j,Ue,ae,se]);var H=m.useRef([]),He=function(p){k.current&&k.current.contains(p.target)||(p.preventDefault(),H.current=[])};m.useEffect(function(){return _&&(document.addEventListener("dragover",ct,!1),document.addEventListener("drop",He,!1)),function(){_&&(document.removeEventListener("dragover",ct),document.removeEventListener("drop",He))}},[k,_]),m.useEffect(function(){return!r&&I&&k.current&&k.current.focus(),function(){}},[k,I,r]);var L=m.useCallback(function(s){ye?ye(s):console.error(s)},[ye]),qe=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s),H.current=[].concat(br(H.current),[s.target]),me(s)&&Promise.resolve(o(s)).then(function(p){if(!(be(s)&&!B)){var $=p.length,A=$>0&&ir({files:p,accept:X,minSize:l,maxSize:i,multiple:c,maxFiles:g,validator:Q}),C=$>0&&!A;S({isDragAccept:A,isDragReject:C,isDragActive:!0,type:"setDraggedFiles"}),d&&d(s)}}).catch(function(p){return L(p)})},[o,d,L,B,X,l,i,c,g,Q]),Ke=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s);var p=me(s);if(p&&s.dataTransfer)try{s.dataTransfer.dropEffect="copy"}catch{}return p&&b&&b(s),!1},[b,B]),Ne=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s);var p=H.current.filter(function(A){return k.current&&k.current.contains(A)}),$=p.indexOf(s.target);$!==-1&&p.splice($,1),H.current=p,!(p.length>0)&&(S({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),me(s)&&x&&x(s))},[k,x,B]),le=m.useCallback(function(s,p){var $=[],A=[];s.forEach(function(C){var ee=Et(C,X),N=Pe(ee,2),Ae=N[0],Ee=N[1],ke=kt(C,l,i),pe=Pe(ke,2),Oe=pe[0],Fe=pe[1],Se=Q?Q(C):null;if(Ae&&Oe&&!Se)$.push(C);else{var Ce=[Ee,Fe];Se&&(Ce=Ce.concat(Se)),A.push({file:C,errors:Ce.filter(function(Mt){return Mt})})}}),(!c&&$.length>1||c&&g>=1&&$.length>g)&&($.forEach(function(C){A.push({file:C,errors:[rr]})}),$.splice(0)),S({acceptedFiles:$,fileRejections:A,type:"setFiles"}),D&&D($,A,p),A.length>0&&O&&O(A,p),$.length>0&&y&&y($,p)},[S,c,X,l,i,g,D,y,O,Q]),ce=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s),H.current=[],me(s)&&Promise.resolve(o(s)).then(function(p){be(s)&&!B||le(p,s)}).catch(function(p){return L(p)}),S({type:"reset"})},[o,le,L,B]),q=m.useCallback(function(){if(se.current){S({type:"openDialog"}),we();var s={multiple:c,types:Be};window.showOpenFilePicker(s).then(function(p){return o(p)}).then(function(p){le(p,null),S({type:"closeDialog"})}).catch(function(p){ur(p)?(ae(p),S({type:"closeDialog"})):pr(p)?(se.current=!1,j.current?(j.current.value=null,j.current.click()):L(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):L(p)});return}j.current&&(S({type:"openDialog"}),we(),j.current.value=null,j.current.click())},[S,we,ae,T,le,L,Be,c]),Ve=m.useCallback(function(s){!k.current||!k.current.isEqualNode(s.target)||(s.key===" "||s.key==="Enter"||s.keyCode===32||s.keyCode===13)&&(s.preventDefault(),q())},[k,q]),Ge=m.useCallback(function(){S({type:"focus"})},[]),Ye=m.useCallback(function(){S({type:"blur"})},[]),Ze=m.useCallback(function(){w||(sr()?setTimeout(q,0):q())},[w,q]),K=function(p){return r?null:p},De=function(p){return F?null:K(p)},de=function(p){return R?null:K(p)},ue=function(p){B&&p.stopPropagation()},Tt=m.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=s.refKey,$=p===void 0?"ref":p,A=s.role,C=s.onKeyDown,ee=s.onFocus,N=s.onBlur,Ae=s.onClick,Ee=s.onDragEnter,ke=s.onDragOver,pe=s.onDragLeave,Oe=s.onDrop,Fe=xe(s,hr);return v(v(Te({onKeyDown:De(z(C,Ve)),onFocus:De(z(ee,Ge)),onBlur:De(z(N,Ye)),onClick:K(z(Ae,Ze)),onDragEnter:de(z(Ee,qe)),onDragOver:de(z(ke,Ke)),onDragLeave:de(z(pe,Ne)),onDrop:de(z(Oe,ce)),role:typeof A=="string"&&A!==""?A:"presentation"},$,k),!r&&!F?{tabIndex:0}:{}),Fe)}},[k,Ve,Ge,Ye,Ze,qe,Ke,Ne,ce,F,R,r]),_t=m.useCallback(function(s){s.stopPropagation()},[]),Rt=m.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=s.refKey,$=p===void 0?"ref":p,A=s.onChange,C=s.onClick,ee=xe(s,gr),N=Te({accept:X,multiple:c,type:"file",style:{display:"none"},onChange:K(z(A,ce)),onClick:K(z(C,_t)),tabIndex:-1},$,j);return v(v({},N),ee)}},[j,n,c,ce,r]);return v(v({},$e),{},{isFocused:It&&!r,getRootProps:Tt,getInputProps:Rt,rootRef:k,inputRef:j,open:K(q)})}function Er(e,t){switch(t.type){case"focus":return v(v({},e),{},{isFocused:!0});case"blur":return v(v({},e),{},{isFocused:!1});case"openDialog":return v(v({},_e),{},{isFileDialogActive:!0});case"closeDialog":return v(v({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return v(v({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return v(v({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return v({},_e);default:return e}}function ut(){}const kr=e=>e.pets.pets,Or=e=>e.pets.isLoading,Fr=e=>e.pets.error,Sr=e=>e.pets.isDeleting,Cr=e=>e.pets.isAdding,Pr=u.div`
  position: relative;
  width: 280px;
  padding: 40px 20px;
  background-color: white;
  border-radius: ${e=>e.theme.radii.secondaryBorderRadius};
  @media (min-width: 768px) {
    width: 608px;
    padding: ${e=>e.secondPage?"40px 107px":"40px 80px"};
  }
  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.36;
    text-align: center;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      font-size: 36px;
    }
  }
  h4 {
    text-align: center;
  }
  label {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.44;
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.08;
    }
  }
  p {
    position: absolute;
    color: red;
    font-size: 12px;
    left: 15px;
  }
`,jr=u.div`
  width: 182px;
  height: 182px;
  margin: 0 auto;
  position: relative;
  border-radius: ${e=>e.theme.radii.mainBorderRadius};
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${e=>e.theme.radii.secondaryBorderRadius};
  }
`,zr=u.button`
  position: absolute;
  top: 23px;
  right: 23px;
  padding: 0;
  color: ${e=>e.theme.colors.heading};
  background-color: transparent;
  cursor: pointer;
  :hover,
  :focus {
    color: ${e=>e.theme.colors.accent};
  }
  svg {
    @media (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`,pt=u.div`
  ${e=>e.isHidden?`position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow-x: hidden;
    overflow-y: hidden;`:`
      position: relative;
      `}
  display:flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 28px;
  }
  input,
  textarea {
    width: 240px;
    padding: 11px 11px 12px 14px;
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    margin-top: 8px;
    color: rgba(27, 27, 27, 0.6);
    &:focus,
    &:hover {
      outline: none;
    }
    @media (min-width: 768px) {
      margin-top: 12px;
      width: 100%;
    }
  }
  @media (max-width: 420px) {
    input[type="date"] {
      position: relative;
      height: 46px;
      &::after {
        content: ${e=>e.isEmpty?"attr(placeholder)":'""'};
        color: rgba(27, 27, 27, 0.3);
        position: absolute;
        top: 12px;
        left: 14px;
        width: 150px;
      }
    }
  }
  textarea {
    height: 100px;
    border-radius: 20px;
  }
`,Ir=u.div`
  display: flex;
  flex-direction: column;
  width: 182px;
  height: 182px;
  margin: 0 auto;
  background-color: #fdf7f2;
  justify-content: center;
  align-items: center;
  border-radius: ${e=>e.theme.radii.secondaryBorderRadius};
  cursor: pointer;
  svg {
    width: 48px;
    height: 48px;
    fill: rgba(17, 17, 17, 0.6);
  }
  span {
    font-size: 12px;
    margin-top: 35px;
    color: grey;
  }
`,mt=u.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 12px;
  }
`,Re=u.button`
  width: 100%;
  height: 40px;
  padding: 7px 0 8px;
  text-align: center;
  color: #fff;
  background: #f59256;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-top: 24px;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
    @media screen and (max-width: 767px) {
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
    @media screen and (max-width: 767px) {
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
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  :disabled:before {
    transform: none;
    transition: none;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    width: 180px;
    height: 44px;
    margin-top: 0px;
  }
`,ft=u(Re)`
  color: #000;
  background: #fff;
  border: 1px solid #f59256;
  order: 2;
  margin-top: 0;
  :before {
    @media screen and (max-width: 767px) {
      visibility: hidden;
    }
    background: linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    );
  }
  @media (min-width: 768px) {
    order: 0;
  }
`,Tr=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.muted};
`,_r=({onClose:e})=>{m.useEffect(()=>{const w=F=>{F.code==="Escape"&&e()};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[e]);const t=w=>{w.currentTarget===w.target&&e()},n=Y(),[r,o]=m.useState(1),[i,l]=m.useState(""),{isAdding:c}=W(Cr),g=w=>{o(r+w)},{handleSubmit:d,handleBlur:x,values:b,handleChange:D,errors:y,touched:O}=Qt({initialValues:{name:"",date:"",breed:"",image:"",comments:""},validationSchema:jn,onSubmit:w=>{const F=new FormData;for(let R in w)w[R].length>0&&F.append(R,w[R]);i&&F.set("image",i),n(qt(F)),e()}}),[E,P]=m.useState([]),{getRootProps:T,getInputProps:I,isDragActive:_}=Pt({maxFiles:1,accept:{"image/*":[".png",".jpg"]},onDrop:w=>{P(w.map(F=>Object.assign(F,{preview:URL.createObjectURL(F)}))),l(w[0])}});return a(en,{children:a(Tr,{onClick:t,children:a(Pr,{secondPage:r===2,children:f("form",{onSubmit:d,children:[a(zr,{type:"button",onClick:e,children:a(Fn,{})}),a("h3",{children:"Add pet"}),f(pt,{isHidden:r===2,isEmpty:b.date==="",children:[f("label",{children:["Name pet",a("input",{type:"text",name:"name",value:b.name,placeholder:"Type name pet",onChange:D,onBlur:x}),y.name||O.name?a("p",{children:y.name}):null]}),f("label",{children:["Date of birth",a("input",{type:"date",name:"date",value:b.date,min:"2000-01-01",max:yt,placeholder:"Type date of birth",onChange:D,onBlur:x}),y.date||O.date?a("p",{children:b.date?y.date:"Date must be a valid"}):null]}),f("label",{children:["Breed",a("input",{type:"text",name:"breed",value:b.breed,placeholder:"Type breed",onChange:D,onBlur:x}),y.breed||O.breed?a("p",{children:y.breed}):null]}),f(mt,{children:[a(ft,{type:"button",onClick:e,children:"Cancel"}),a(Re,{type:"button",onClick:()=>{const{name:w,date:F,breed:R}=b;if(!w||!F||!R){Ht.info("Please fill in required fields");return}g(1)},children:"Next"})]})]}),f(pt,{isHidden:r===1,children:[a("h4",{children:"Add photo and some comments"}),f(jr,{...T(),children:[a("input",{...I(),name:"image",value:b.image}),a(Ir,{children:_?null:f(ie,{children:[a(vt,{}),a("span",{children:"Click or Drop file"})]})}),a("div",{children:E.map(w=>a("div",{children:a("img",{src:w.preview,alt:"pet-avatar"})},w))})]}),f("label",{children:["Comments",a("textarea",{name:"comments",value:b.comments,placeholder:"Type comments",onChange:D,onBlur:x}),y.comments||O.comments?a("p",{children:y.comments}):null]}),f(mt,{children:[a(ft,{type:"button",onClick:()=>{g(-1)},children:"Back"}),a(Re,{type:"submit",disabled:c,children:"Done"})]})]})]})})})})},Rr=e=>{const t=new Date(e),n=t.getDate().toString().padStart(2,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getFullYear();return`${n}.${r}.${o}`},Mr=u.div`
  &:not(:last-child) {
    margin-bottom: 20px;
    @media ${e=>e.theme.media.desktop} {
      margin-bottom: 22px;
    }
  }
  padding: 20px;
  border-radius: ${e=>e.theme.radii.large};
  box-shadow: 7px 4px 14px ${e=>e.theme.colors.shadow};
  background-color: ${e=>e.theme.colors.white};
  @media ${e=>e.theme.media.tablet} {
    display: flex;
    width: 704px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 821px;
    margin-bottom: 22px;
  }
`,Br=u.img`
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
  border-radius: ${e=>e.theme.radii.normal};
  @media ${e=>e.theme.media.tablet} {
    margin-right: 32px;
    width: 161px;
    height: 161px;
  }
`,Lr=u.div`
  position: relative;
  @media ${e=>e.theme.media.tablet} {
    width: 471px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 580px;
  }
`,Ur=u.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border: ${e=>e.theme.borders.none};
  color: ${e=>e.theme.colors.muted};
  background-color: ${e=>e.theme.colors.background};
  border-radius: ${e=>e.theme.radii.round};
  cursor: pointer;
  @media ${e=>e.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }
  transition: color ${e=>e.theme.transition};
  :hover,
  :focus {
    color: ${e=>e.theme.colors.accent};
  }
  svg {
    fill: currentColor;
  }
`,Wr=u(tn)`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.muted};
  @media ${e=>e.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`,fe=u.p`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.normal};
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.s};
  }
`,he=u.span`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.s};
  }
`,jt=({id:e,name:t,date:n,breed:r,comment:o,petAvatar:i})=>{const{isDeleting:l}=W(Sr),c=Y(),g=d=>{c(Kt(d)).unwrap()};return f(Mr,{children:[a(Br,{src:i,alt:`${t}`}),f(Lr,{children:[a(Ur,{type:"button",disabled:l,onClick:()=>g(e),children:a(Wr,{})}),f(fe,{children:[a(he,{children:"Name: "}),t]}),f(fe,{children:[a(he,{children:"Date of birth: "}),Rr(n)]}),f(fe,{children:[a(he,{children:"Breed: "}),r]}),f(fe,{children:[a(he,{children:"Comments: "}),o]})]})]})};jt.prototype={id:h.string.isRequired,name:h.string.isRequired,date:h.string.isRequired,breed:h.string.isRequired,comments:h.string.isRequired,petAvatar:h.string.isRequired,removePet:h.func};const ht=u.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 200px;
  border-radius: ${e=>e.theme.radii.large};
  box-shadow: 7px 4px 14px ${e=>e.theme.colors.shadow};
  background-color: ${e=>e.theme.colors.white};
  font-size: ${e=>e.theme.fontSizes.m};
  @media ${e=>e.theme.media.tablet} {
    width: 704px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 821px;
  }
`,Hr=()=>{const e=W(kr),t=W(Or),n=W(Fr),r=Y();return m.useEffect(()=>{r(Nt())},[r]),a(ie,{children:t?a(ht,{children:a(gt,{})}):n||e.length===0?a(ht,{children:"Please add your pet"}):!n&&!t&&(e==null?void 0:e.map(({_id:o,name:i,date:l,breed:c,comments:g,petAvatar:d})=>a(jt,{id:o,name:i,date:l,breed:c,comment:g,petAvatar:d},o)))})},qr=u.section`
  width: 100%;
  @media ${e=>e.theme.media.tablet} {
    padding-left: ${e=>e.theme.space[5]}px;
  }
  @media ${e=>e.theme.media.desktop} {
    padding: ${e=>e.theme.space[32]}px;
  }
`,Kr=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: 24px;
  }
`,Nr=u.h2`
  color: ${e=>e.theme.colors.black};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xm};
  letter-spacing: 0.04em;
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.l};
  }
`,Vr=u.div`
  display: inline-flex;
  align-items: center;
  @media ${e=>e.theme.media.desktop} {
    display: inline-flex;
  }
`,Gr=u.p`
  margin-right: 15px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xm};
`,Yr=()=>{const[e,t]=m.useState(!0),n=()=>{t(r=>!r)};return f(qr,{children:[f(Kr,{children:[a(Nr,{children:"My pets:"}),f(Vr,{children:[a(Gr,{children:"Add pet"}),a(Pn,{onClick:n})]})]}),!e&&a(_r,{onClose:n}),a(Hr,{})]})},Zr=u.button`
  position: absolute;
  right: 12px;
  bottom: 20px;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: rgba(17, 17, 17, 0.6);
  font-family: ${e=>e.theme.fonts.main};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  line-height: ${e=>e.theme.lineHeights.body};
  cursor: pointer;
  :hover svg,
  :focus svg,
  :hover {
    fill: ${e=>e.theme.colors.active};
    color: rgba(17, 17, 17, 1);
  }
  @media ${e=>e.theme.media.tablet} {
    left: ${e=>e.theme.space[5]}px;
    bottom: 24px;
    height: 22px;
    margin: ${e=>e.theme.space[0]};
    padding: ${e=>e.theme.space[0]};
  }
  @media ${e=>e.theme.media.desktop} {
    left: 17px;
    bottom: 20px;
  }
`,Jr=u(nn)`
  width: 20px;
  height: 20px;
  margin-right: ${e=>e.theme.space[3]}px;
  color: ${e=>e.theme.colors.accent};
`,Qr=()=>{const e=Y();return f(Zr,{type:"button",onClick:()=>e(Vt()),children:[a(Jr,{}),"Log Out"]})},ri=()=>f(rn,{children:[f(on,{children:[a(On,{}),a(Qr,{})]}),a(Yr,{})]});export{ri as default};
