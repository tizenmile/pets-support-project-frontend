import{s as u,e as Y,r as m,j as a,a as f,h as Mt,i as Lt,d as U,A as gt,F as ie,k as Wt,p as h,l as Ut,Q as Ht,m as qt,n as Kt,o as Nt,q as Vt}from"./index-c740226f.js";import{c as bt,a as B,b as xt,F as Gt,d as Yt,E as Zt,u as Jt}from"./index.esm-191a3abb.js";import{G as ve}from"./iconBase-cc1a0623.js";import{H as Qt,M as Xt,a as en,b as tn}from"./ModalBackdrop-2c790de2.js";const nn=u.div`
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
`,rn=u.section`
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
`,on=u.div`
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
`,an=u.h2`
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
`,Je=bt().shape({name:B().required("Required").min(2,"Username must be at least 2 characters").max(30,"Username must be less than 30 characters").matches(/^[a-zA-Zа-щА-ЩЬьЮюЯяІіЇїЄєҐґ\s]+$/,"Username can only contain letters and spaces"),email:B().required("Required").matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email"),mobile:B().matches(/^[+](380)[0-9]{9}$/,"Invalid phone number").required("Required"),city:B().required("Required").max(30,"City name must be less than 30 characters").matches(/^(([a-zA-Zа-яА-Я`'іІїЇ]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я`'іІїЇ](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,"Example: Lviv, Karpaty"),birthday:xt().required("Required")});function sn(e){return ve({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}}]})(e)}function ln(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"}}]})(e)}const Qe=u.button`
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
`,cn=u(sn)`
  width: 13px;
  height: 13px;
  fill: currentColor;
  @media ${e=>e.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`,dn=u(ln)`
  width: 10px;
  height: 8px;
  fill: currentColor;
  @media ${e=>e.theme.media.tablet} {
    width: 17px;
    height: 13px;
  }
`,un=u.input`
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
`,pn=u.div`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;

  column-gap: 5px;
  @media ${e=>e.theme.media.tablet} {
    column-gap: 24px;
  }
`,mn=u.div`
  position: absolute;
  color: red;
  font-size: 9px;
  margin-left: 15px;
`;u.div``;const te=({isBtnDisabled:e,setIsBtnDisabled:t,name:n,type:r,defaultValue:o})=>{const i=Y(),[l,c]=m.useState(!1),[g,d]=m.useState(o??""),[x,b]=m.useState(!1),D=E=>{d(E.target.value),b(Je.fields[n].isValidSync(E.target.value))},y=()=>{b(!0),c(!0),t(!0)},S=()=>{if(t(!0),g===o){b(!1),c(!1),t(!1);return}const E={[n]:g};i(Mt(E)),c(!1),t(!1)};return a(Gt,{initialValues:{[n]:o??""},validationSchema:Je,children:E=>f(pn,{children:[a(Yt,{as:un,name:n,type:r,value:E.values[n],disabled:!l,onChange:C=>{D(C),E.handleChange(C)}}),a(Zt,{component:mn,name:n}),l?a(Qe,{type:"submit",disabled:!x,onClick:S,children:a(dn,{})}):a(Qe,{type:"button",onClick:y,disabled:e,children:a(cn,{})})]})})},fn=e=>e.user.userData,hn=e=>e.user.isLoading,gn=u.div`
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
`,bn=u.div`
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
  object-fit: cover;
`,xn=u.button`
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
`,vn=u.div`
  & input {
    position: absolute;
    width: ${e=>e.theme.space[0]};
    height: ${e=>e.theme.space[0]};
    z-index: -1;
    opacity: 0;
  }
`,yn=u(Qt)`
  width: 20px;
  height: 20px;
  margin-right: ${e=>e.theme.space[2]}px;
  margin-bottom: -5px;
  cursor: pointer;
  fill: ${e=>e.theme.colors.accent};
`,wn=u.label`
  cursor: pointer;
`,$n=u.div`
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
`,V=u.div``,Dn=u.div`
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
`;const An=()=>{const e=Y();m.useEffect(()=>{e(Lt())},[e]);const t=U(fn),{name:n,email:r,mobile:o,birthday:i,city:l,avatarURL:c}=t,[g,d]=m.useState(),[x,b]=m.useState(""),[D,y]=m.useState(!1),S=U(hn);return m.useEffect(()=>{b(c)}),a(gn,{children:S?a(gt,{}):f(ie,{children:[f(bn,{children:[g?a(Xe,{id:"img_container",src:g,alt:"avatar"}):a(Xe,{id:"img_container",src:x,alt:"avatar"}),f(xn,{children:[a(vn,{children:a("form",{children:a("input",{name:"userAvatar",type:"file",id:"userAvatar",accept:"image/jpg, image/png, image/jpeg, image/bmp",onChange:C=>{const T=new FileReader;C.target.files[0]&&(T.readAsDataURL(C.target.files[0]),T.onloadend=()=>{const I=T.result;if(I.includes("image/png")||I.includes("image/jpg")||I.includes("image/jpeg")){d(I);const _=new FormData;_.append("image",C.target.files[0]),e(Wt(_))}})}})})}),f(wn,{htmlFor:"userAvatar",children:[a(yn,{}),"Edit photo"]})]})]}),a($n,{children:a(G,{children:a(V,{children:f(Dn,{children:[f(G,{children:[a(ne,{children:"Name:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:n,name:"name",type:"text"})})]}),f(G,{children:[a(ne,{children:"Email:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:r,name:"email",type:"email"})})]}),f(G,{children:[a(ne,{children:"Birthday:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:i,name:"birthday",type:"date"})})]}),f(G,{children:[a(ne,{children:"Phone:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:o,name:"mobile",type:"tel"})})]}),f(G,{children:[a(ne,{children:"City:"}),a(V,{children:a(te,{isBtnDisabled:D,setIsBtnDisabled:y,defaultValue:l,name:"city",type:"text"})})]})]})})})})]})})},En=()=>f(ie,{children:[a(on,{children:a(an,{children:"My information:"})}),a(An,{})]});function kn(e){return ve({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"}}]})(e)}function vt(e){return ve({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"}}]})(e)}const Sn=u.button`
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
`,zn=u(vt)``,On=({disabled:e=!1,onClick:t})=>a(ie,{children:a(Sn,{active:!0,disabled:e,type:"button",onClick:t,children:a(zn,{})})}),yt=new Date().toISOString().slice(0,10),Fn=bt().shape({name:B().required("Pet name is required").min(2,"Minimum 2 symbols").max(16,"Maximum 16 symbols").matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/,"Only letters"),date:xt().required().min("2000-01-01","The min date is 01.01.2000").max(yt,"The max date of birth is today"),breed:B().required("Field required").min(2,"Minimum 2 symbols").max(16,"Maximum 16 symbols").matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/,"Only letters"),petAvatar:B(),comments:B().min(8,"Minimum 8 symbols").max(120,"Maximum 120 symbols").required("Field required")});function Z(e,t,n,r){function o(i){return i instanceof n?i:new n(function(l){l(i)})}return new(n||(n=Promise))(function(i,l){function c(x){try{d(r.next(x))}catch(b){l(b)}}function g(x){try{d(r.throw(x))}catch(b){l(b)}}function d(x){x.done?i(x.value):o(x.value).then(c,g)}d((r=r.apply(e,t||[])).next())})}function J(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,l;return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(d){return function(x){return g([d,x])}}function g(d){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,d[0]&&(n=0)),n;)try{if(r=1,o&&(i=d[0]&2?o.return:d[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,d[1])).done)return i;switch(o=0,i&&(d=[d[0]&2,i.value]),d[0]){case 0:case 1:i=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,o=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!i||d[1]>i[0]&&d[1]<i[3])){n.label=d[1];break}if(d[0]===6&&n.label<i[1]){n.label=i[1],i=d;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(d);break}i[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(x){d=[6,x],o=0}finally{r=i=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}function et(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],l;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(c){l={error:c}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(l)throw l.error}}return i}function tt(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Cn=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function oe(e,t){var n=Pn(e);if(typeof n.path!="string"){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof t=="string"?t:typeof r=="string"&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Pn(e){var t=e.name,n=t&&t.lastIndexOf(".")!==-1;if(n&&!e.type){var r=t.split(".").pop().toLowerCase(),o=Cn.get(r);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var jn=[".DS_Store","Thumbs.db"];function In(e){return Z(this,void 0,void 0,function(){return J(this,function(t){return ge(e)&&Tn(e.dataTransfer)?[2,Mn(e.dataTransfer,e.type)]:_n(e)?[2,Rn(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,Bn(e)]:[2,[]]})})}function Tn(e){return ge(e)}function _n(e){return ge(e)&&ge(e.target)}function ge(e){return typeof e=="object"&&e!==null}function Rn(e){return Pe(e.target.files).map(function(t){return oe(t)})}function Bn(e){return Z(this,void 0,void 0,function(){var t;return J(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(r){return r.getFile()}))];case 1:return t=n.sent(),[2,t.map(function(r){return oe(r)})]}})})}function Mn(e,t){return Z(this,void 0,void 0,function(){var n,r;return J(this,function(o){switch(o.label){case 0:return e.items?(n=Pe(e.items).filter(function(i){return i.kind==="file"}),t!=="drop"?[2,n]:[4,Promise.all(n.map(Ln))]):[3,2];case 1:return r=o.sent(),[2,nt(wt(r))];case 2:return[2,nt(Pe(e.files).map(function(i){return oe(i)}))]}})})}function nt(e){return e.filter(function(t){return jn.indexOf(t.name)===-1})}function Pe(e){if(e===null)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Ln(e){if(typeof e.webkitGetAsEntry!="function")return rt(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?$t(t):rt(e)}function wt(e){return e.reduce(function(t,n){return tt(tt([],et(t),!1),et(Array.isArray(n)?wt(n):[n]),!1)},[])}function rt(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=oe(t);return Promise.resolve(n)}function Wn(e){return Z(this,void 0,void 0,function(){return J(this,function(t){return[2,e.isDirectory?$t(e):Un(e)]})})}function $t(e){var t=e.createReader();return new Promise(function(n,r){var o=[];function i(){var l=this;t.readEntries(function(c){return Z(l,void 0,void 0,function(){var g,d,x;return J(this,function(b){switch(b.label){case 0:if(c.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return g=b.sent(),n(g),[3,4];case 3:return d=b.sent(),r(d),[3,4];case 4:return[3,6];case 5:x=Promise.all(c.map(Wn)),o.push(x),i(),b.label=6;case 6:return[2]}})})},function(c){r(c)})}i()})}function Un(e){return Z(this,void 0,void 0,function(){return J(this,function(t){return[2,new Promise(function(n,r){e.file(function(o){var i=oe(o,e.fullPath);n(i)},function(o){r(o)})})]})})}var Hn=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(l){var c=l.trim().toLowerCase();return c.charAt(0)==="."?r.toLowerCase().endsWith(c):c.endsWith("/*")?i===c.replace(/\/.*$/,""):o===c})}return!0};function it(e){return Nn(e)||Kn(e)||At(e)||qn()}function qn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nn(e){if(Array.isArray(e))return je(e)}function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ot(Object(n),!0).forEach(function(r){Dt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e,t){return Yn(e)||Gn(e,t)||At(e,t)||Vn()}function Vn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(e,t){if(e){if(typeof e=="string")return je(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return je(e,t)}}function je(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,l,c;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(r.push(l.value),!(t&&r.length===t));o=!0);}catch(g){i=!0,c=g}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw c}}return r}}function Yn(e){if(Array.isArray(e))return e}var Zn="file-invalid-type",Jn="file-too-large",Qn="file-too-small",Xn="too-many-files",er=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var n=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:Zn,message:"File type must be ".concat(n)}},st=function(t){return{code:Jn,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},lt=function(t){return{code:Qn,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},tr={code:Xn,message:"Too many files"};function Et(e,t){var n=e.type==="application/x-moz-file"||Hn(e,t);return[n,n?null:er(t)]}function kt(e,t,n){if(W(e.size))if(W(t)&&W(n)){if(e.size>n)return[!1,st(n)];if(e.size<t)return[!1,lt(t)]}else{if(W(t)&&e.size<t)return[!1,lt(t)];if(W(n)&&e.size>n)return[!1,st(n)]}return[!0,null]}function W(e){return e!=null}function nr(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,l=e.maxFiles,c=e.validator;return!i&&t.length>1||i&&l>=1&&t.length>l?!1:t.every(function(g){var d=Et(g,n),x=re(d,1),b=x[0],D=kt(g,r,o),y=re(D,1),S=y[0],E=c?c(g):null;return b&&S&&!E})}function be(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function me(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function ct(e){e.preventDefault()}function rr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function ir(e){return e.indexOf("Edge/")!==-1}function or(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return rr(e)||ir(e)}function j(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return t.some(function(c){return!be(r)&&c&&c.apply(void 0,[r].concat(i)),be(r)})}}function ar(){return"showOpenFilePicker"in window}function sr(e){if(W(e)){var t=Object.entries(e).filter(function(n){var r=re(n,2),o=r[0],i=r[1],l=!0;return St(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),l=!1),(!Array.isArray(i)||!i.every(zt))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),l=!1),l}).reduce(function(n,r){var o=re(r,2),i=o[0],l=o[1];return at(at({},n),{},Dt({},i,l))},{});return[{description:"Files",accept:t}]}return e}function lr(e){if(W(e))return Object.entries(e).reduce(function(t,n){var r=re(n,2),o=r[0],i=r[1];return[].concat(it(t),[o],it(i))},[]).filter(function(t){return St(t)||zt(t)}).join(",")}function cr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function dr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function St(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function zt(e){return/^.*\.[\w]+$/.test(e)}var ur=["children"],pr=["open"],mr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],fr=["refKey","onChange","onClick"];function hr(e){return xr(e)||br(e)||Ot(e)||gr()}function gr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function br(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xr(e){if(Array.isArray(e))return Ie(e)}function Ce(e,t){return wr(e)||yr(e,t)||Ot(e,t)||vr()}function vr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ot(e,t){if(e){if(typeof e=="string")return Ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(e,t)}}function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yr(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,l,c;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(r.push(l.value),!(t&&r.length===t));o=!0);}catch(g){i=!0,c=g}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw c}}return r}}function wr(e){if(Array.isArray(e))return e}function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xe(e,t){if(e==null)return{};var n=$r(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $r(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Be=m.forwardRef(function(e,t){var n=e.children,r=xe(e,ur),o=Ct(r),i=o.open,l=xe(o,pr);return m.useImperativeHandle(t,function(){return{open:i}},[i]),Ut.createElement(m.Fragment,null,n(v(v({},l),{},{open:i})))});Be.displayName="Dropzone";var Ft={disabled:!1,getFilesFromEvent:In,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Be.defaultProps=Ft;Be.propTypes={children:h.func,accept:h.objectOf(h.arrayOf(h.string)),multiple:h.bool,preventDropOnDocument:h.bool,noClick:h.bool,noKeyboard:h.bool,noDrag:h.bool,noDragEventsBubbling:h.bool,minSize:h.number,maxSize:h.number,maxFiles:h.number,disabled:h.bool,getFilesFromEvent:h.func,onFileDialogCancel:h.func,onFileDialogOpen:h.func,useFsAccessApi:h.bool,autoFocus:h.bool,onDragEnter:h.func,onDragLeave:h.func,onDragOver:h.func,onDrop:h.func,onDropAccepted:h.func,onDropRejected:h.func,onError:h.func,validator:h.func};var _e={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Ct(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=v(v({},Ft),e),n=t.accept,r=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,l=t.minSize,c=t.multiple,g=t.maxFiles,d=t.onDragEnter,x=t.onDragLeave,b=t.onDragOver,D=t.onDrop,y=t.onDropAccepted,S=t.onDropRejected,E=t.onFileDialogCancel,C=t.onFileDialogOpen,T=t.useFsAccessApi,I=t.autoFocus,_=t.preventDropOnDocument,w=t.noClick,z=t.noKeyboard,R=t.noDrag,M=t.noDragEventsBubbling,ye=t.onError,Q=t.validator,X=m.useMemo(function(){return lr(n)},[n]),Me=m.useMemo(function(){return sr(n)},[n]),we=m.useMemo(function(){return typeof C=="function"?C:ut},[C]),ae=m.useMemo(function(){return typeof E=="function"?E:ut},[E]),k=m.useRef(null),P=m.useRef(null),jt=m.useReducer(Dr,_e),Le=Ce(jt,2),$e=Le[0],O=Le[1],It=$e.isFocused,We=$e.isFileDialogActive,se=m.useRef(typeof window<"u"&&window.isSecureContext&&T&&ar()),Ue=function(){!se.current&&We&&setTimeout(function(){if(P.current){var p=P.current.files;p.length||(O({type:"closeDialog"}),ae())}},300)};m.useEffect(function(){return window.addEventListener("focus",Ue,!1),function(){window.removeEventListener("focus",Ue,!1)}},[P,We,ae,se]);var H=m.useRef([]),He=function(p){k.current&&k.current.contains(p.target)||(p.preventDefault(),H.current=[])};m.useEffect(function(){return _&&(document.addEventListener("dragover",ct,!1),document.addEventListener("drop",He,!1)),function(){_&&(document.removeEventListener("dragover",ct),document.removeEventListener("drop",He))}},[k,_]),m.useEffect(function(){return!r&&I&&k.current&&k.current.focus(),function(){}},[k,I,r]);var L=m.useCallback(function(s){ye?ye(s):console.error(s)},[ye]),qe=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s),H.current=[].concat(hr(H.current),[s.target]),me(s)&&Promise.resolve(o(s)).then(function(p){if(!(be(s)&&!M)){var $=p.length,A=$>0&&nr({files:p,accept:X,minSize:l,maxSize:i,multiple:c,maxFiles:g,validator:Q}),F=$>0&&!A;O({isDragAccept:A,isDragReject:F,isDragActive:!0,type:"setDraggedFiles"}),d&&d(s)}}).catch(function(p){return L(p)})},[o,d,L,M,X,l,i,c,g,Q]),Ke=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s);var p=me(s);if(p&&s.dataTransfer)try{s.dataTransfer.dropEffect="copy"}catch{}return p&&b&&b(s),!1},[b,M]),Ne=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s);var p=H.current.filter(function(A){return k.current&&k.current.contains(A)}),$=p.indexOf(s.target);$!==-1&&p.splice($,1),H.current=p,!(p.length>0)&&(O({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),me(s)&&x&&x(s))},[k,x,M]),le=m.useCallback(function(s,p){var $=[],A=[];s.forEach(function(F){var ee=Et(F,X),N=Ce(ee,2),Ae=N[0],Ee=N[1],ke=kt(F,l,i),pe=Ce(ke,2),Se=pe[0],ze=pe[1],Oe=Q?Q(F):null;if(Ae&&Se&&!Oe)$.push(F);else{var Fe=[Ee,ze];Oe&&(Fe=Fe.concat(Oe)),A.push({file:F,errors:Fe.filter(function(Bt){return Bt})})}}),(!c&&$.length>1||c&&g>=1&&$.length>g)&&($.forEach(function(F){A.push({file:F,errors:[tr]})}),$.splice(0)),O({acceptedFiles:$,fileRejections:A,type:"setFiles"}),D&&D($,A,p),A.length>0&&S&&S(A,p),$.length>0&&y&&y($,p)},[O,c,X,l,i,g,D,y,S,Q]),ce=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s),H.current=[],me(s)&&Promise.resolve(o(s)).then(function(p){be(s)&&!M||le(p,s)}).catch(function(p){return L(p)}),O({type:"reset"})},[o,le,L,M]),q=m.useCallback(function(){if(se.current){O({type:"openDialog"}),we();var s={multiple:c,types:Me};window.showOpenFilePicker(s).then(function(p){return o(p)}).then(function(p){le(p,null),O({type:"closeDialog"})}).catch(function(p){cr(p)?(ae(p),O({type:"closeDialog"})):dr(p)?(se.current=!1,P.current?(P.current.value=null,P.current.click()):L(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):L(p)});return}P.current&&(O({type:"openDialog"}),we(),P.current.value=null,P.current.click())},[O,we,ae,T,le,L,Me,c]),Ve=m.useCallback(function(s){!k.current||!k.current.isEqualNode(s.target)||(s.key===" "||s.key==="Enter"||s.keyCode===32||s.keyCode===13)&&(s.preventDefault(),q())},[k,q]),Ge=m.useCallback(function(){O({type:"focus"})},[]),Ye=m.useCallback(function(){O({type:"blur"})},[]),Ze=m.useCallback(function(){w||(or()?setTimeout(q,0):q())},[w,q]),K=function(p){return r?null:p},De=function(p){return z?null:K(p)},de=function(p){return R?null:K(p)},ue=function(p){M&&p.stopPropagation()},Tt=m.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=s.refKey,$=p===void 0?"ref":p,A=s.role,F=s.onKeyDown,ee=s.onFocus,N=s.onBlur,Ae=s.onClick,Ee=s.onDragEnter,ke=s.onDragOver,pe=s.onDragLeave,Se=s.onDrop,ze=xe(s,mr);return v(v(Te({onKeyDown:De(j(F,Ve)),onFocus:De(j(ee,Ge)),onBlur:De(j(N,Ye)),onClick:K(j(Ae,Ze)),onDragEnter:de(j(Ee,qe)),onDragOver:de(j(ke,Ke)),onDragLeave:de(j(pe,Ne)),onDrop:de(j(Se,ce)),role:typeof A=="string"&&A!==""?A:"presentation"},$,k),!r&&!z?{tabIndex:0}:{}),ze)}},[k,Ve,Ge,Ye,Ze,qe,Ke,Ne,ce,z,R,r]),_t=m.useCallback(function(s){s.stopPropagation()},[]),Rt=m.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=s.refKey,$=p===void 0?"ref":p,A=s.onChange,F=s.onClick,ee=xe(s,fr),N=Te({accept:X,multiple:c,type:"file",style:{display:"none"},onChange:K(j(A,ce)),onClick:K(j(F,_t)),tabIndex:-1},$,P);return v(v({},N),ee)}},[P,n,c,ce,r]);return v(v({},$e),{},{isFocused:It&&!r,getRootProps:Tt,getInputProps:Rt,rootRef:k,inputRef:P,open:K(q)})}function Dr(e,t){switch(t.type){case"focus":return v(v({},e),{},{isFocused:!0});case"blur":return v(v({},e),{},{isFocused:!1});case"openDialog":return v(v({},_e),{},{isFileDialogActive:!0});case"closeDialog":return v(v({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return v(v({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return v(v({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return v({},_e);default:return e}}function ut(){}const Ar=e=>e.pets.pets,Er=e=>e.pets.isLoading,kr=e=>e.pets.error,Sr=e=>e.pets.isDeleting,zr=e=>e.pets.isAdding,Or=u.div`
  position: relative;
  width: 280px;
  padding: 40px 20px;
  font-family: ${e=>e.theme.fonts.main};
  background-color: ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.normal};
  @media (min-width: 768px) {
    width: 608px;
    padding: ${e=>e.secondPage?"40px 107px":"40px 80px"};
  }

  h3 {
    margin-bottom: 20px;
    font-size: ${e=>e.theme.fontSizes.m};
    font-weight: ${e=>e.theme.fontWeights.semiBold};
    text-align: center;
    @media (min-width: 768px) {
      margin-bottom: 40px;
      font-size: ${e=>e.theme.fontSizes.xxl};
    }
  }

  h4 {
    font-size: ${e=>e.theme.fontSizes.s};
    font-weight: ${e=>e.theme.fontWeights.semiBold};
    text-align: center;
    @media (min-width: 768px) {
      font-size: ${e=>e.theme.fontSizes.xm};
    }
  }

  label {
    font-size: ${e=>e.theme.fontSizes.xxm};
    font-weight: ${e=>e.theme.fontWeights.semiBold};
    @media (min-width: 768px) {
      font-size: ${e=>e.theme.fontSizes.m};
    }
  }

  p {
    position: absolute;
    left: 10px;
    color: ${e=>e.theme.colors.active};
    font-size: ${e=>e.theme.fontSizes.xxs};
    font-weight: ${e=>e.theme.fontWeights.semiBold};
  }
`,Fr=u.div`
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
`,Cr=u.button`
  position: absolute;
  top: 23px;
  right: 23px;
  padding: 0;
  color: ${e=>e.theme.colors.black};
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
    background: ${e=>e.theme.colors.background};
    border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.accent};
    border-radius: ${e=>e.theme.radii.normal};
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
    border-radius: ${e=>e.theme.radii.normal};
  }
`,Pr=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 182px;
  margin: 0 auto;
  background-color: ${e=>e.theme.colors.background};
  border-radius: ${e=>e.theme.radii.normal};
  cursor: pointer;
  @media (min-width: 768px) {
    border-radius: ${e=>e.theme.radii.large};
  }

  svg {
    width: 48px;
    height: 48px;
    fill: ${e=>e.theme.colors.muted};
  }

  span {
    margin-top: 35px;
    font-size: ${e=>e.theme.fontSizes.xxs};
    color: ${e=>e.theme.colors.muted};
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
  margin-top: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.white};
  background: ${e=>e.theme.colors.accent};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.accent};
  border-radius: ${e=>e.theme.radii.large};
  transform: scale(1);
  transition: ${e=>e.theme.transition};
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1);
    transition: ${e=>e.theme.transition};
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
    width: 180px;
    height: 44px;
    margin-top: 0px;
    font-size: ${e=>e.theme.fontSizes.xm};
  }
`,ft=u(Re)`
  color: ${e=>e.theme.colors.black};
  background: ${e=>e.theme.colors.white};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.accent};
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
`,jr=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.muted};
`,Ir=({onClose:e})=>{m.useEffect(()=>{const w=z=>{z.code==="Escape"&&e()};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[e]);const t=w=>{w.currentTarget===w.target&&e()},n=Y(),[r,o]=m.useState(1),[i,l]=m.useState(""),{isAdding:c}=U(zr),g=w=>{o(r+w)},{handleSubmit:d,handleBlur:x,values:b,handleChange:D,errors:y,touched:S}=Jt({initialValues:{name:"",date:"",breed:"",image:"",comments:""},validationSchema:Fn,onSubmit:w=>{const z=new FormData;for(let R in w)w[R].length>0&&z.append(R,w[R]);i&&z.set("image",i),n(qt(z)),e()}}),[E,C]=m.useState([]),{getRootProps:T,getInputProps:I,isDragActive:_}=Ct({maxFiles:1,accept:{"image/*":[".png",".jpg"]},onDrop:w=>{C(w.map(z=>Object.assign(z,{preview:URL.createObjectURL(z)}))),l(w[0])}});return a(Xt,{children:a(jr,{onClick:t,children:a(Or,{secondPage:r===2,children:f("form",{onSubmit:d,children:[a(Cr,{type:"button",onClick:e,children:a(kn,{})}),a("h3",{children:"Add pet"}),f(pt,{isHidden:r===2,isEmpty:b.date==="",children:[f("label",{children:["Name pet",a("input",{type:"text",name:"name",value:b.name,placeholder:"Type name pet",onChange:D,onBlur:x}),y.name||S.name?a("p",{children:y.name}):null]}),f("label",{children:["Date of birth",a("input",{type:"date",name:"date",value:b.date,min:"2000-01-01",max:yt,placeholder:"Type date of birth",onChange:D,onBlur:x}),y.date||S.date?a("p",{children:b.date?y.date:"Date must be a valid"}):null]}),f("label",{children:["Breed",a("input",{type:"text",name:"breed",value:b.breed,placeholder:"Type breed",onChange:D,onBlur:x}),y.breed||S.breed?a("p",{children:y.breed}):null]}),f(mt,{children:[a(ft,{type:"button",onClick:e,children:"Cancel"}),a(Re,{type:"button",onClick:()=>{const{name:w,date:z,breed:R}=b;if(!w||!z||!R){Ht.info("Please fill in required fields");return}g(1)},children:"Next"})]})]}),f(pt,{isHidden:r===1,children:[a("h4",{children:"Add photo and some comments"}),f(Fr,{...T(),children:[a("input",{...I(),name:"image",value:b.image}),a(Pr,{children:_?null:f(ie,{children:[a(vt,{}),a("span",{children:"Click or Drop file"})]})}),a("div",{children:E.map(w=>a("div",{children:a("img",{src:w.preview,alt:"pet-avatar"})},w))})]}),f("label",{children:["Comments",a("textarea",{name:"comments",value:b.comments,placeholder:"Type comments",onChange:D,onBlur:x}),y.comments||S.comments?a("p",{children:y.comments}):null]}),f(mt,{children:[a(ft,{type:"button",onClick:()=>{g(-1)},children:"Back"}),a(Re,{type:"submit",disabled:c,children:"Done"})]})]})]})})})})},Tr=e=>{const t=new Date(e),n=t.getDate().toString().padStart(2,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getFullYear();return`${n}.${r}.${o}`},_r=u.div`
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
`,Rr=u.img`
  margin-bottom: 20px;
  width: 240px;
  border-radius: ${e=>e.theme.radii.normal};
  @media ${e=>e.theme.media.tablet} {
    margin-right: 32px;
    width: 161px;
  }
`,Br=u.div`
  position: relative;
  @media ${e=>e.theme.media.tablet} {
    width: 471px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 580px;
  }
`,Mr=u.button`
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
`,Lr=u(en)`
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
  font-family: ${e=>e.theme.fonts.main};
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
`,Pt=({id:e,name:t,date:n,breed:r,comment:o,petAvatar:i})=>{const{isDeleting:l}=U(Sr),c=Y(),g=d=>{c(Kt(d)).unwrap()};return f(_r,{children:[a(Rr,{src:i,alt:`${t}`}),f(Br,{children:[a(Mr,{type:"button",disabled:l,onClick:()=>g(e),children:a(Lr,{})}),f(fe,{children:[a(he,{children:"Name: "}),t]}),f(fe,{children:[a(he,{children:"Date of birth: "}),Tr(n)]}),f(fe,{children:[a(he,{children:"Breed: "}),r]}),f(fe,{children:[a(he,{children:"Comments: "}),o]})]})]})};Pt.prototype={id:h.string.isRequired,name:h.string.isRequired,date:h.string.isRequired,breed:h.string.isRequired,comments:h.string.isRequired,petAvatar:h.string.isRequired,removePet:h.func};const ht=u.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 300px;
  border-radius: ${e=>e.theme.radii.large};
  box-shadow: 7px 4px 14px ${e=>e.theme.colors.shadow};
  background-color: ${e=>e.theme.colors.white};
  font-size: ${e=>e.theme.fontSizes.xxm};
  @media ${e=>e.theme.media.tablet} {
    width: 704px;
    font-size: ${e=>e.theme.fontSizes.m};
  }
  @media ${e=>e.theme.media.desktop} {
    width: 821px;
  }
`,Wr=()=>{const e=U(Ar),t=U(Er),n=U(kr),r=Y();return m.useEffect(()=>{r(Nt())},[r]),a(ie,{children:t?a(ht,{children:a(gt,{})}):n||e.length===0?a(ht,{children:"Please add your pet"}):!n&&!t&&(e==null?void 0:e.map(({_id:o,name:i,date:l,breed:c,comments:g,petAvatar:d})=>a(Pt,{id:o,name:i,date:l,breed:c,comment:g,petAvatar:d},o)))})},Ur=u.section`
  width: 100%;
  @media ${e=>e.theme.media.tablet} {
    padding-left: ${e=>e.theme.space[5]}px;
  }
  @media ${e=>e.theme.media.desktop} {
    padding: ${e=>e.theme.space[32]}px;
  }
`,Hr=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: 24px;
  }
`,qr=u.h2`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xm};
  letter-spacing: 0.04em;
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.l};
  }
`,Kr=u.div`
  display: inline-flex;
  align-items: center;
`,Nr=u.p`
  margin-right: 15px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xm};
  font-family: ${e=>e.theme.fonts.main};
  @media ${e=>e.theme.media.desktop} {
    margin-right: 12px;
  }
`,Vr=()=>{const[e,t]=m.useState(!0),n=()=>{t(r=>!r)};return f(Ur,{children:[f(Hr,{children:[a(qr,{children:"My pets:"}),f(Kr,{children:[a(Nr,{children:"Add pet"}),a(On,{onClick:n})]})]}),!e&&a(Ir,{onClose:n}),a(Wr,{})]})},Gr=u.button`
  position: absolute;
  width: 89px;
  right: 12px;
  bottom: 20px;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: rgba(17, 17, 17, 0.6);
  font-family: ${e=>e.theme.fonts.main};
  font-size: ${e=>e.theme.fontSizes.xxs};
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
    font-size: ${e=>e.theme.fontSizes.s};
  }
  @media ${e=>e.theme.media.desktop} {
    left: 17px;
    bottom: 20px;
  }
`,Yr=u(tn)`
  width: 20px;
  height: 20px;
  margin-right: ${e=>e.theme.space[3]}px;
  color: ${e=>e.theme.colors.accent};
`,Zr=()=>{const e=Y();return f(Gr,{type:"button",onClick:()=>e(Vt()),children:[a(Yr,{}),"Log Out"]})},ti=()=>f(nn,{children:[f(rn,{children:[a(En,{}),a(Zr,{})]}),a(Vr,{})]});export{ti as default};
