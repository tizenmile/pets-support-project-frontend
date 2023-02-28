import{s as p,u as J,r as m,a,j as f,e as Wt,f as Ut,d as H,A as bt,F as q,k as Me,Q as M,h as Ht,p as h,i as qt,l as Kt,m as Nt,n as Vt,o as Zt}from"./index-9b73e0f8.js";import{c as xt,a as L,b as vt,F as Gt,d as Yt,e as Jt,E as Qt,u as Xt}from"./index.esm-e0a050b8.js";import{G as yt}from"./iconBase-a38c7fe2.js";import{H as er,s as tr,a as rr,T as $t,M as nr,b as ir,c as or,t as ar,P as sr,d as lr,e as cr,A as dr,f as ur,g as pr}from"./PetsData.styled-6798955e.js";const mr=p.div`
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
`,fr=p.section`
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
`,hr=p.div`
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
`,gr=p.h2`
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
`,Qe=xt().shape({name:L().required("Required").min(2,"Username must be at least 2 characters").max(16,"Username must be less than 16 characters").matches(/^[a-zA-Zа-щА-ЩЬьЮюЯяІіЇїЄєҐґ\s]+$/,"Username can only contain letters and spaces"),email:L().required("Required").matches(/^[a-zA-Z0-9._][a-zA-Z0-9._-]{0,}[a-zA-Z0-9._-]{0,}[a-zA-Z0-9._]@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/,"Invalid email"),mobile:L().matches(/^[+](380)[0-9]{9}$/,"Invalid phone number").required("Required"),city:L().required("Required").max(30,"City name must be less than 30 characters").matches(/^(([a-zA-Zа-яА-Я`'іІїЇ]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я`'іІїЇ](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,"Example: Lviv, Karpaty"),birthday:vt().required("Required")});function br(e){return yt({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}}]})(e)}function xr(e){return yt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"}}]})(e)}const Xe=p.button`
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
`,vr=p(br)`
  width: 13px;
  height: 13px;
  fill: currentColor;
  @media ${e=>e.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`,yr=p(xr)`
  width: 10px;
  height: 8px;
  fill: currentColor;
  @media ${e=>e.theme.media.tablet} {
    width: 17px;
    height: 13px;
  }
`,$r=p.input`
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
`,wr=p(Gt)`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;

  column-gap: 5px;
  @media ${e=>e.theme.media.tablet} {
    column-gap: 24px;
  }
`,Dr=p.div`
  position: absolute;
  color: red;
  font-size: 9px;
  margin-left: 15px;
`,Ar=p.div``,ne=({isBtnDisabled:e,setIsBtnDisabled:t,name:r,type:n,defaultValue:o})=>{const i=J(),[l,c]=m.useState(!1),[g,d]=m.useState(o??""),[x,b]=m.useState(!1),D=k=>{d(k.target.value),b(Qe.fields[r].isValidSync(k.target.value))},$=()=>{b(!0),c(!0),t(!0)},O=()=>{if(t(!0),g===o){b(!1),c(!1),t(!1);return}const k={[r]:g};i(Wt(k)),c(!1),t(!1)};return a(Yt,{initialValues:{[r]:o??""},validationSchema:Qe,children:k=>f(wr,{children:[f(Ar,{children:[a(Jt,{as:$r,name:r,type:n,value:k.values[r],disabled:!l,onChange:S=>{D(S),k.handleChange(S)}}),a(Qt,{component:Dr,name:r})]}),l?a(Xe,{type:"submit",disabled:!x,onClick:O,children:a(yr,{})}):a(Xe,{type:"button",onClick:$,disabled:e,children:a(vr,{})})]})})},kr=p.div`
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
`,Er=p.div`
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
`,et=p.img`
  width: 233px;
  height: 233px;
  border-radius: ${e=>e.theme.radii.round};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  object-fit: cover;
`,Or=p.button`
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
`,zr=p.div`
  & input {
    position: absolute;
    width: ${e=>e.theme.space[0]};
    height: ${e=>e.theme.space[0]};
    z-index: -1;
    opacity: 0;
  }
`,Sr=p(er)`
  width: 20px;
  height: 20px;
  margin-right: ${e=>e.theme.space[2]}px;
  margin-bottom: -5px;
  cursor: pointer;
  fill: ${e=>e.theme.colors.accent};
`,Fr=p.label`
  cursor: pointer;
`,Pr=p.div`
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
`,G=p.div``,Cr=p.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: space-between;
`,Y=p.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 11px;
  }
  &:not(:last-child) {
    @media ${e=>e.theme.media.desktop} {
      margin-bottom: 11px;
    }
  }
`,ie=p.label`
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
`;p.p`
  margin-left: 18px;
  font-size: ${e=>e.theme.fontSizes.xxm};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-family: ${e=>e.theme.fonts.main};
  @media ${e=>e.theme.media.tablet} {
    margin-left: 12px;
    font-size: ${e=>e.theme.fontSizes.xxm};
  }
`;p.div`
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
`;const jr=()=>{const e=J();m.useEffect(()=>{e(Ut())},[e]);const t=H(tr),{name:r,email:n,mobile:o,birthday:i,city:l,avatarURL:c}=t,[g,d]=m.useState(),[x,b]=m.useState(""),[D,$]=m.useState(!1),O=H(rr);return m.useEffect(()=>{b(c)}),f(kr,{children:[O?a(bt,{}):f(q,{children:[f(Er,{children:[g?a(et,{id:"img_container",src:g,alt:"avatar"}):a(et,{id:"img_container",src:x,alt:"avatar"}),f(Or,{children:[a(zr,{children:a("form",{children:a("input",{name:"userAvatar",type:"file",id:"userAvatar",accept:"image/jpg, image/png, image/jpeg, image/bmp",onChange:S=>{const _=new FileReader;if(S.target.files[0].size>5242880){M.info("Image size bigger than 5MB",{position:M.POSITION.TOP_LEFT});return}S.target.files[0]&&(_.readAsDataURL(S.target.files[0]),_.onloadend=()=>{const T=_.result;if(T.includes("image/png")||T.includes("image/jpg")||T.includes("image/jpeg")){d(T);const R=new FormData;R.append("image",S.target.files[0]),e(Ht(R))}})}})})}),f(Fr,{htmlFor:"userAvatar",children:[a(Sr,{}),"Edit photo"]})]})]}),a(Pr,{children:a(Y,{children:a(G,{children:f(Cr,{children:[f(Y,{children:[a(ie,{children:"Name:"}),a(G,{children:a(ne,{isBtnDisabled:D,setIsBtnDisabled:$,defaultValue:r,name:"name",type:"text"})})]}),f(Y,{children:[a(ie,{children:"Email:"}),a(G,{children:a(ne,{isBtnDisabled:D,setIsBtnDisabled:$,defaultValue:n,name:"email",type:"email"})})]}),f(Y,{children:[a(ie,{children:"Birthday:"}),a(G,{children:a(ne,{isBtnDisabled:D,setIsBtnDisabled:$,defaultValue:i,name:"birthday",type:"date"})})]}),f(Y,{children:[a(ie,{children:"Phone:"}),a(G,{children:a(ne,{isBtnDisabled:D,setIsBtnDisabled:$,defaultValue:o,name:"mobile",type:"tel"})})]}),f(Y,{children:[a(ie,{children:"City:"}),a(G,{children:a(ne,{isBtnDisabled:D,setIsBtnDisabled:$,defaultValue:l,name:"city",type:"text"})})]})]})})})})]}),a(Me,{})]})},Ir=()=>f(q,{children:[a(hr,{children:a(gr,{children:"My information:"})}),a(jr,{})]}),Tr=p.button`
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
  transition: color ${e=>e.theme.transition};
  :hover,
  :focus {
    color: ${e=>e.theme.colors.white};
    background-color: ${e=>e.theme.colors.hover};
    transform: scale(1.1);
  }
  svg {
    width: 16px;
    height: 16px;
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
    /* background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms; */
  }
`,_r=p($t)``,Rr=({disabled:e=!1,onClick:t})=>a(q,{children:a(Tr,{active:!0,disabled:e,type:"button",onClick:t,children:a(_r,{})})}),wt=new Date().toISOString().slice(0,10),Mr=xt().shape({name:L().required("Pet name is required").min(2,"Minimum 2 symbols").max(16,"Maximum 16 symbols").matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/,"Only letters"),date:vt().required().min("2000-01-01","The min date is 01.01.2000").max(wt,"The max date of birth is today"),breed:L().required("Field required").min(2,"Minimum 2 symbols").max(16,"Maximum 16 symbols").matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/,"Only letters"),petAvatar:L(),comments:L().min(8,"Minimum 8 symbols").max(120,"Maximum 120 symbols").required("Field required")});function Q(e,t,r,n){function o(i){return i instanceof r?i:new r(function(l){l(i)})}return new(r||(r=Promise))(function(i,l){function c(x){try{d(n.next(x))}catch(b){l(b)}}function g(x){try{d(n.throw(x))}catch(b){l(b)}}function d(x){x.done?i(x.value):o(x.value).then(c,g)}d((n=n.apply(e,t||[])).next())})}function X(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,l;return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(d){return function(x){return g([d,x])}}function g(d){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,d[0]&&(r=0)),r;)try{if(n=1,o&&(i=d[0]&2?o.return:d[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,d[1])).done)return i;switch(o=0,i&&(d=[d[0]&2,i.value]),d[0]){case 0:case 1:i=d;break;case 4:return r.label++,{value:d[1],done:!1};case 5:r.label++,o=d[1],d=[0];continue;case 7:d=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(d[0]===6||d[0]===2)){r=0;continue}if(d[0]===3&&(!i||d[1]>i[0]&&d[1]<i[3])){r.label=d[1];break}if(d[0]===6&&r.label<i[1]){r.label=i[1],i=d;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(d);break}i[2]&&r.ops.pop(),r.trys.pop();continue}d=t.call(e,r)}catch(x){d=[6,x],o=0}finally{n=i=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}function tt(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),o,i=[],l;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(c){l={error:c}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(l)throw l.error}}return i}function rt(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var Lr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function ae(e,t){var r=Br(e);if(typeof r.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:typeof t=="string"?t:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}function Br(e){var t=e.name,r=t&&t.lastIndexOf(".")!==-1;if(r&&!e.type){var n=t.split(".").pop().toLowerCase(),o=Lr.get(n);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var Wr=[".DS_Store","Thumbs.db"];function Ur(e){return Q(this,void 0,void 0,function(){return X(this,function(t){return be(e)&&Hr(e.dataTransfer)?[2,Vr(e.dataTransfer,e.type)]:qr(e)?[2,Kr(e)]:Array.isArray(e)&&e.every(function(r){return"getFile"in r&&typeof r.getFile=="function"})?[2,Nr(e)]:[2,[]]})})}function Hr(e){return be(e)}function qr(e){return be(e)&&be(e.target)}function be(e){return typeof e=="object"&&e!==null}function Kr(e){return Ce(e.target.files).map(function(t){return ae(t)})}function Nr(e){return Q(this,void 0,void 0,function(){var t;return X(this,function(r){switch(r.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return t=r.sent(),[2,t.map(function(n){return ae(n)})]}})})}function Vr(e,t){return Q(this,void 0,void 0,function(){var r,n;return X(this,function(o){switch(o.label){case 0:return e.items?(r=Ce(e.items).filter(function(i){return i.kind==="file"}),t!=="drop"?[2,r]:[4,Promise.all(r.map(Zr))]):[3,2];case 1:return n=o.sent(),[2,nt(Dt(n))];case 2:return[2,nt(Ce(e.files).map(function(i){return ae(i)}))]}})})}function nt(e){return e.filter(function(t){return Wr.indexOf(t.name)===-1})}function Ce(e){if(e===null)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Zr(e){if(typeof e.webkitGetAsEntry!="function")return it(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?At(t):it(e)}function Dt(e){return e.reduce(function(t,r){return rt(rt([],tt(t),!1),tt(Array.isArray(r)?Dt(r):[r]),!1)},[])}function it(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=ae(t);return Promise.resolve(r)}function Gr(e){return Q(this,void 0,void 0,function(){return X(this,function(t){return[2,e.isDirectory?At(e):Yr(e)]})})}function At(e){var t=e.createReader();return new Promise(function(r,n){var o=[];function i(){var l=this;t.readEntries(function(c){return Q(l,void 0,void 0,function(){var g,d,x;return X(this,function(b){switch(b.label){case 0:if(c.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return g=b.sent(),r(g),[3,4];case 3:return d=b.sent(),n(d),[3,4];case 4:return[3,6];case 5:x=Promise.all(c.map(Gr)),o.push(x),i(),b.label=6;case 6:return[2]}})})},function(c){n(c)})}i()})}function Yr(e){return Q(this,void 0,void 0,function(){return X(this,function(t){return[2,new Promise(function(r,n){e.file(function(o){var i=ae(o,e.fullPath);r(i)},function(o){n(o)})})]})})}var Jr=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some(function(l){var c=l.trim().toLowerCase();return c.charAt(0)==="."?n.toLowerCase().endsWith(c):c.endsWith("/*")?i===c.replace(/\/.*$/,""):o===c})}return!0};function ot(e){return en(e)||Xr(e)||Et(e)||Qr()}function Qr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function en(e){if(Array.isArray(e))return je(e)}function at(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function st(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?at(Object(r),!0).forEach(function(n){kt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function kt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e,t){return nn(e)||rn(e,t)||Et(e,t)||tn()}function tn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(e,t){if(e){if(typeof e=="string")return je(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return je(e,t)}}function je(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function rn(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,i=!1,l,c;try{for(r=r.call(e);!(o=(l=r.next()).done)&&(n.push(l.value),!(t&&n.length===t));o=!0);}catch(g){i=!0,c=g}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw c}}return n}}function nn(e){if(Array.isArray(e))return e}var on="file-invalid-type",an="file-too-large",sn="file-too-small",ln="too-many-files",cn=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var r=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:on,message:"File type must be ".concat(r)}},lt=function(t){return{code:an,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},ct=function(t){return{code:sn,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},dn={code:ln,message:"Too many files"};function Ot(e,t){var r=e.type==="application/x-moz-file"||Jr(e,t);return[r,r?null:cn(t)]}function zt(e,t,r){if(U(e.size))if(U(t)&&U(r)){if(e.size>r)return[!1,lt(r)];if(e.size<t)return[!1,ct(t)]}else{if(U(t)&&e.size<t)return[!1,ct(t)];if(U(r)&&e.size>r)return[!1,lt(r)]}return[!0,null]}function U(e){return e!=null}function un(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,l=e.maxFiles,c=e.validator;return!i&&t.length>1||i&&l>=1&&t.length>l?!1:t.every(function(g){var d=Ot(g,r),x=oe(d,1),b=x[0],D=zt(g,n,o),$=oe(D,1),O=$[0],k=c?c(g):null;return b&&O&&!k})}function xe(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function fe(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function dt(e){e.preventDefault()}function pn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function mn(e){return e.indexOf("Edge/")!==-1}function fn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return pn(e)||mn(e)}function I(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return t.some(function(c){return!xe(n)&&c&&c.apply(void 0,[n].concat(i)),xe(n)})}}function hn(){return"showOpenFilePicker"in window}function gn(e){if(U(e)){var t=Object.entries(e).filter(function(r){var n=oe(r,2),o=n[0],i=n[1],l=!0;return St(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),l=!1),(!Array.isArray(i)||!i.every(Ft))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),l=!1),l}).reduce(function(r,n){var o=oe(n,2),i=o[0],l=o[1];return st(st({},r),{},kt({},i,l))},{});return[{description:"Files",accept:t}]}return e}function bn(e){if(U(e))return Object.entries(e).reduce(function(t,r){var n=oe(r,2),o=n[0],i=n[1];return[].concat(ot(t),[o],ot(i))},[]).filter(function(t){return St(t)||Ft(t)}).join(",")}function xn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function vn(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function St(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Ft(e){return/^.*\.[\w]+$/.test(e)}var yn=["children"],$n=["open"],wn=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Dn=["refKey","onChange","onClick"];function An(e){return On(e)||En(e)||Pt(e)||kn()}function kn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function En(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function On(e){if(Array.isArray(e))return Ie(e)}function Pe(e,t){return Fn(e)||Sn(e,t)||Pt(e,t)||zn()}function zn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(e,t){if(e){if(typeof e=="string")return Ie(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ie(e,t)}}function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Sn(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,i=!1,l,c;try{for(r=r.call(e);!(o=(l=r.next()).done)&&(n.push(l.value),!(t&&n.length===t));o=!0);}catch(g){i=!0,c=g}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw c}}return n}}function Fn(e){if(Array.isArray(e))return e}function ut(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ut(Object(r),!0).forEach(function(n){Te(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e,t){if(e==null)return{};var r=Pn(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Pn(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var Le=m.forwardRef(function(e,t){var r=e.children,n=ve(e,yn),o=jt(n),i=o.open,l=ve(o,$n);return m.useImperativeHandle(t,function(){return{open:i}},[i]),qt.createElement(m.Fragment,null,r(y(y({},l),{},{open:i})))});Le.displayName="Dropzone";var Ct={disabled:!1,getFilesFromEvent:Ur,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Le.defaultProps=Ct;Le.propTypes={children:h.func,accept:h.objectOf(h.arrayOf(h.string)),multiple:h.bool,preventDropOnDocument:h.bool,noClick:h.bool,noKeyboard:h.bool,noDrag:h.bool,noDragEventsBubbling:h.bool,minSize:h.number,maxSize:h.number,maxFiles:h.number,disabled:h.bool,getFilesFromEvent:h.func,onFileDialogCancel:h.func,onFileDialogOpen:h.func,useFsAccessApi:h.bool,autoFocus:h.bool,onDragEnter:h.func,onDragLeave:h.func,onDragOver:h.func,onDrop:h.func,onDropAccepted:h.func,onDropRejected:h.func,onError:h.func,validator:h.func};var _e={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function jt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=y(y({},Ct),e),r=t.accept,n=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,l=t.minSize,c=t.multiple,g=t.maxFiles,d=t.onDragEnter,x=t.onDragLeave,b=t.onDragOver,D=t.onDrop,$=t.onDropAccepted,O=t.onDropRejected,k=t.onFileDialogCancel,S=t.onFileDialogOpen,_=t.useFsAccessApi,T=t.autoFocus,R=t.preventDropOnDocument,v=t.noClick,z=t.noKeyboard,j=t.noDrag,B=t.noDragEventsBubbling,ye=t.onError,ee=t.validator,te=m.useMemo(function(){return bn(r)},[r]),Be=m.useMemo(function(){return gn(r)},[r]),$e=m.useMemo(function(){return typeof S=="function"?S:pt},[S]),se=m.useMemo(function(){return typeof k=="function"?k:pt},[k]),E=m.useRef(null),C=m.useRef(null),Tt=m.useReducer(Cn,_e),We=Pe(Tt,2),we=We[0],F=We[1],_t=we.isFocused,Ue=we.isFileDialogActive,le=m.useRef(typeof window<"u"&&window.isSecureContext&&_&&hn()),He=function(){!le.current&&Ue&&setTimeout(function(){if(C.current){var u=C.current.files;u.length||(F({type:"closeDialog"}),se())}},300)};m.useEffect(function(){return window.addEventListener("focus",He,!1),function(){window.removeEventListener("focus",He,!1)}},[C,Ue,se,le]);var K=m.useRef([]),qe=function(u){E.current&&E.current.contains(u.target)||(u.preventDefault(),K.current=[])};m.useEffect(function(){return R&&(document.addEventListener("dragover",dt,!1),document.addEventListener("drop",qe,!1)),function(){R&&(document.removeEventListener("dragover",dt),document.removeEventListener("drop",qe))}},[E,R]),m.useEffect(function(){return!n&&T&&E.current&&E.current.focus(),function(){}},[E,T,n]);var W=m.useCallback(function(s){ye?ye(s):console.error(s)},[ye]),Ke=m.useCallback(function(s){s.preventDefault(),s.persist(),pe(s),K.current=[].concat(An(K.current),[s.target]),fe(s)&&Promise.resolve(o(s)).then(function(u){if(!(xe(s)&&!B)){var w=u.length,A=w>0&&un({files:u,accept:te,minSize:l,maxSize:i,multiple:c,maxFiles:g,validator:ee}),P=w>0&&!A;F({isDragAccept:A,isDragReject:P,isDragActive:!0,type:"setDraggedFiles"}),d&&d(s)}}).catch(function(u){return W(u)})},[o,d,W,B,te,l,i,c,g,ee]),Ne=m.useCallback(function(s){s.preventDefault(),s.persist(),pe(s);var u=fe(s);if(u&&s.dataTransfer)try{s.dataTransfer.dropEffect="copy"}catch{}return u&&b&&b(s),!1},[b,B]),Ve=m.useCallback(function(s){s.preventDefault(),s.persist(),pe(s);var u=K.current.filter(function(A){return E.current&&E.current.contains(A)}),w=u.indexOf(s.target);w!==-1&&u.splice(w,1),K.current=u,!(u.length>0)&&(F({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),fe(s)&&x&&x(s))},[E,x,B]),ce=m.useCallback(function(s,u){var w=[],A=[];s.forEach(function(P){var re=Ot(P,te),Z=Pe(re,2),Ae=Z[0],ke=Z[1],Ee=zt(P,l,i),me=Pe(Ee,2),Oe=me[0],ze=me[1],Se=ee?ee(P):null;if(Ae&&Oe&&!Se)w.push(P);else{var Fe=[ke,ze];Se&&(Fe=Fe.concat(Se)),A.push({file:P,errors:Fe.filter(function(Bt){return Bt})})}}),(!c&&w.length>1||c&&g>=1&&w.length>g)&&(w.forEach(function(P){A.push({file:P,errors:[dn]})}),w.splice(0)),F({acceptedFiles:w,fileRejections:A,type:"setFiles"}),D&&D(w,A,u),A.length>0&&O&&O(A,u),w.length>0&&$&&$(w,u)},[F,c,te,l,i,g,D,$,O,ee]),de=m.useCallback(function(s){s.preventDefault(),s.persist(),pe(s),K.current=[],fe(s)&&Promise.resolve(o(s)).then(function(u){xe(s)&&!B||ce(u,s)}).catch(function(u){return W(u)}),F({type:"reset"})},[o,ce,W,B]),N=m.useCallback(function(){if(le.current){F({type:"openDialog"}),$e();var s={multiple:c,types:Be};window.showOpenFilePicker(s).then(function(u){return o(u)}).then(function(u){ce(u,null),F({type:"closeDialog"})}).catch(function(u){xn(u)?(se(u),F({type:"closeDialog"})):vn(u)?(le.current=!1,C.current?(C.current.value=null,C.current.click()):W(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):W(u)});return}C.current&&(F({type:"openDialog"}),$e(),C.current.value=null,C.current.click())},[F,$e,se,_,ce,W,Be,c]),Ze=m.useCallback(function(s){!E.current||!E.current.isEqualNode(s.target)||(s.key===" "||s.key==="Enter"||s.keyCode===32||s.keyCode===13)&&(s.preventDefault(),N())},[E,N]),Ge=m.useCallback(function(){F({type:"focus"})},[]),Ye=m.useCallback(function(){F({type:"blur"})},[]),Je=m.useCallback(function(){v||(fn()?setTimeout(N,0):N())},[v,N]),V=function(u){return n?null:u},De=function(u){return z?null:V(u)},ue=function(u){return j?null:V(u)},pe=function(u){B&&u.stopPropagation()},Rt=m.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=s.refKey,w=u===void 0?"ref":u,A=s.role,P=s.onKeyDown,re=s.onFocus,Z=s.onBlur,Ae=s.onClick,ke=s.onDragEnter,Ee=s.onDragOver,me=s.onDragLeave,Oe=s.onDrop,ze=ve(s,wn);return y(y(Te({onKeyDown:De(I(P,Ze)),onFocus:De(I(re,Ge)),onBlur:De(I(Z,Ye)),onClick:V(I(Ae,Je)),onDragEnter:ue(I(ke,Ke)),onDragOver:ue(I(Ee,Ne)),onDragLeave:ue(I(me,Ve)),onDrop:ue(I(Oe,de)),role:typeof A=="string"&&A!==""?A:"presentation"},w,E),!n&&!z?{tabIndex:0}:{}),ze)}},[E,Ze,Ge,Ye,Je,Ke,Ne,Ve,de,z,j,n]),Mt=m.useCallback(function(s){s.stopPropagation()},[]),Lt=m.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=s.refKey,w=u===void 0?"ref":u,A=s.onChange,P=s.onClick,re=ve(s,Dn),Z=Te({accept:te,multiple:c,type:"file",style:{display:"none"},onChange:V(I(A,de)),onClick:V(I(P,Mt)),tabIndex:-1},w,C);return y(y({},Z),re)}},[C,r,c,de,n]);return y(y({},we),{},{isFocused:_t&&!n,getRootProps:Rt,getInputProps:Lt,rootRef:E,inputRef:C,open:V(N)})}function Cn(e,t){switch(t.type){case"focus":return y(y({},e),{},{isFocused:!0});case"blur":return y(y({},e),{},{isFocused:!1});case"openDialog":return y(y({},_e),{},{isFileDialogActive:!0});case"closeDialog":return y(y({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return y(y({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return y(y({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return y({},_e);default:return e}}function pt(){}const jn=e=>e.pets.pets,In=e=>e.pets.isLoading,Tn=e=>e.pets.error,_n=e=>e.pets.isDeleting,Rn=e=>e.pets.isAdding,Mn=p.div`
  position: relative;
  width: 280px;
  padding: 40px 20px;
  font-family: ${e=>e.theme.fonts.main};
  background-color: ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.normal};
  @media ${e=>e.theme.media.tablet} {
    width: 608px;
    padding: ${e=>e.secondPage?"40px 107px":"40px 80px"};
  }

  h3 {
    margin-bottom: 20px;
    font-size: ${e=>e.theme.fontSizes.m};
    font-weight: ${e=>e.theme.fontWeights.semiBold};
    text-align: center;
    @media ${e=>e.theme.media.tablet} {
      margin-bottom: 40px;
      font-size: ${e=>e.theme.fontSizes.xxl};
    }
  }

  h4 {
    font-size: ${e=>e.theme.fontSizes.s};
    font-weight: ${e=>e.theme.fontWeights.semiBold};
    text-align: center;
    @media ${e=>e.theme.media.tablet} {
      font-size: ${e=>e.theme.fontSizes.xm};
    }
  }

  label {
    font-size: ${e=>e.theme.fontSizes.xxm};
    font-weight: ${e=>e.theme.fontWeights.semiBold};
    @media ${e=>e.theme.media.tablet} {
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
`,Ln=p.div`
  width: 182px;
  height: 182px;
  margin: 0 auto;
  position: relative;
  border-radius: ${e=>e.theme.radii.large};
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${e=>e.theme.radii.normal};
  }
`,Bn=p.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  width: 34px;
  height: 34px;
  color: ${e=>e.theme.colors.black};
  background-color: ${e=>e.theme.colors.background};
  border-radius: ${e=>e.theme.radii.round};
  backdrop-filter: blur(2px);
  transition: ${e=>e.theme.transition};
  cursor: pointer;
  @media ${e=>e.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }
  @media ${e=>e.theme.media.desktop} {
    top: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
  :hover,
  :focus {
    color: ${e=>e.theme.colors.white};
    background-color: ${e=>e.theme.colors.hover};
    transform: scale(0.8);
    transition: ${e=>e.theme.transition};
  }
  svg {
    width: 15.56px;
    height: 15.56px;
    @media ${e=>e.theme.media.tablet} {
      width: 20px;
      height: 20px;
    }
  }
`,mt=p.div`
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
    border-radius: ${e=>e.theme.radii.large};
    margin-top: 8px;
    color: rgba(27, 27, 27, 0.6);
    &:focus,
    &:hover {
      outline: none;
    }
    @media ${e=>e.theme.media.tablet} {
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
`,Wn=p.div`
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
  @media ${e=>e.theme.media.tablet} {
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
`,ft=p.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${e=>e.theme.media.tablet} {
    flex-direction: row;
    justify-content: center;
    margin-top: 12px;
  }
`,Re=p.button`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 7px 0 8px;
  margin-top: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.white};
  background: ${e=>e.theme.colors.accent};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.accent};
  border-radius: ${e=>e.theme.radii.large};
  transition: ${e=>e.theme.transition};
  cursor: pointer;
  :hover,
  :focus {
    color: ${e=>e.theme.colors.white};
    background: ${e=>e.theme.colors.hover};
    transform: scale(1.1);
    transition: ${e=>e.theme.transition};
  }
  :hover:before {
    left: 100%;
    @media ${e=>e.theme.media.mobileMax} {
      visibility: visible;
    }
  }
  @media ${e=>e.theme.media.tablet} {
    width: 180px;
    height: 44px;
    margin-top: 0px;
    font-size: ${e=>e.theme.fontSizes.xm};
  }
`,ht=p(Re)`
  color: ${e=>e.theme.colors.black};
  background: ${e=>e.theme.colors.white};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.accent};
  order: 2;
  margin-top: 0;
  :hover,
  :focus {
    color: ${e=>e.theme.colors.white};
    background: ${e=>e.theme.colors.hover};
    border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.hover};
    transform: scale(1.1);
    transition: ${e=>e.theme.transition};
  }
  :before {
    @media ${e=>e.theme.media.mobileMax} {
      visibility: hidden;
    }
  }
  @media ${e=>e.theme.media.tablet} {
    order: 0;

  }
  :hover,
  :focus {
    color: ${e=>e.theme.colors.white};
    background: ${e=>e.theme.colors.hover};
    border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.hover};
    transform: scale(1.1);
    transition: ${e=>e.theme.transition};
  }
`,Un=p.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.muted};
`,Hn=({onClose:e})=>{m.useEffect(()=>{const v=z=>{z.code==="Escape"&&e()};return window.addEventListener("keydown",v),()=>{window.removeEventListener("keydown",v)}},[e]);const t=v=>{v.currentTarget===v.target&&e()},r=J(),[n,o]=m.useState(1),[i,l]=m.useState(""),{isAdding:c}=H(Rn),g=v=>{o(n+v)},{handleSubmit:d,handleBlur:x,values:b,handleChange:D,errors:$,touched:O}=Xt({initialValues:{name:"",date:"",breed:"",image:"",comments:""},validationSchema:Mr,onSubmit:v=>{const z=new FormData;for(let j in v)v[j].length>0&&z.append(j,v[j]);i&&z.set("image",i),r(Kt(z)),e()}}),[k,S]=m.useState([]),{getRootProps:_,getInputProps:T,isDragActive:R}=jt({maxFiles:1,accept:{"image/*":[".png",".jpg"]},onDrop:v=>{if(v[0].size>5242880){M.warning("Image size bigger than 5MB"),M.info("Please add file less than 5MB");return}S(v.map(z=>Object.assign(z,{preview:URL.createObjectURL(z)}))),l(v[0])}});return f(q,{children:[a(Me,{}),a(nr,{children:a(Un,{onClick:t,children:a(Mn,{secondPage:n===2,children:f("form",{onSubmit:d,children:[a(Bn,{type:"button",onClick:e,children:a(ir,{})}),a("h3",{children:"Add pet"}),f(mt,{isHidden:n===2,isEmpty:b.date==="",children:[f("label",{children:["Name pet",a("input",{type:"text",name:"name",value:b.name,placeholder:"Type name pet",onChange:D,onBlur:x}),$.name||O.name?a("p",{children:$.name}):null]}),f("label",{children:["Date of birth",a("input",{type:"date",name:"date",value:b.date,min:"1900-01-01",max:wt,placeholder:"Type date of birth",onChange:D,onBlur:x}),$.date||O.date?a("p",{children:b.date?$.date:"Date must be a valid"}):null]}),f("label",{children:["Breed",a("input",{type:"text",name:"breed",value:b.breed,placeholder:"Type breed",onChange:D,onBlur:x}),$.breed||O.breed?a("p",{children:$.breed}):null]}),f(ft,{children:[a(ht,{type:"button",onClick:e,children:"Cancel"}),a(Re,{type:"button",onClick:()=>{const{name:v,date:z,breed:j}=b;if(!v||v.length<2||v.length>16||!z||!j||j.length<2||j.length>16){M.info("Please fill in required fields");return}g(1)},children:"Next"})]})]}),f(mt,{isHidden:n===1,children:[a("h4",{children:"Add photo and some comments"}),f(Ln,{..._(),children:[a("input",{...T(),name:"image",value:b.image}),a(Wn,{children:R?null:f(q,{children:[a($t,{}),a("span",{children:"Click or Drop file"})]})}),a("div",{children:k.map(v=>a("div",{children:a("img",{src:v.preview,alt:"pet-avatar"})},v))})]}),f("label",{children:["Comments",a("textarea",{name:"comments",value:b.comments,placeholder:"Type comments",onChange:D,onBlur:x}),$.comments||O.comments?a("p",{children:$.comments}):null]}),f(ft,{children:[a(ht,{type:"button",onClick:()=>{g(-1)},children:"Back"}),a(Re,{type:"submit",onClick:()=>{const{comments:v}=b;if(!v||v.length<8||v.length>120){M.info("Please fill in required fields");return}M.success("Hooray, pet added successfully")},disabled:c,children:"Done"})]})]})]})})})})]})},qn=p.div`
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
`,Kn=p.img`
  margin-bottom: 20px;
  width: 240px;
  border-radius: ${e=>e.theme.radii.normal};
  @media ${e=>e.theme.media.tablet} {
    margin-right: 32px;
    width: 161px;
  }
`,Nn=p.div`
  position: relative;
  @media ${e=>e.theme.media.tablet} {
    width: 471px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 580px;
  }
`,Vn=p.button`
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
    color: ${e=>e.theme.colors.white};
    background-color: ${e=>e.theme.colors.hover};
    transform: scale(1.1);
    transition: ${e=>e.theme.transition};
  }
  svg {
    fill: currentColor;
  }
`,Zn=p(or)`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.muted};
  @media ${e=>e.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`,he=p.p`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-family: ${e=>e.theme.fonts.main};
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.s};
  }
`,ge=p.span`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.s};
  }
`,It=({id:e,name:t,date:r,breed:n,comment:o,petAvatar:i})=>{const{isDeleting:l}=H(_n),c=J(),g=d=>{c(Nt(d)).unwrap()};return f(q,{children:[a(Me,{}),f(qn,{children:[a(Kn,{src:i,alt:`${t}`}),f(Nn,{children:[a(Vn,{type:"button",onClick:()=>{M.info("Hooray, pet delete successfully"),g(e)},disabled:l,children:a(Zn,{})}),f(he,{children:[a(ge,{children:"Name: "}),t]}),f(he,{children:[a(ge,{children:"Date of birth: "}),ar(r)]}),f(he,{children:[a(ge,{children:"Breed: "}),n]}),f(he,{children:[a(ge,{children:"Comments: "}),o]})]})]})]})};It.prototype={id:h.string.isRequired,name:h.string.isRequired,date:h.string.isRequired,breed:h.string.isRequired,comments:h.string.isRequired,petAvatar:h.string.isRequired,removePet:h.func};const gt=p.div`
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
`,Gn=()=>{const e=H(jn),t=H(In),r=H(Tn),n=J();return m.useEffect(()=>{n(Vt())},[n]),a(q,{children:t?a(gt,{children:a(bt,{})}):r||e.length===0?a(gt,{children:"Please add your pet"}):!r&&!t&&(e==null?void 0:e.map(({_id:o,name:i,date:l,breed:c,comments:g,petAvatar:d})=>a(It,{id:o,name:i,date:l,breed:c,comment:g,petAvatar:d},o)))})},Yn=()=>{const[e,t]=m.useState(!0),r=()=>{t(n=>!n)};return f(sr,{children:[f(lr,{children:[a(cr,{children:"My pets:"}),f(dr,{children:[a(ur,{children:"Add pet"}),a(Rr,{onClick:r})]})]}),!e&&a(Hn,{onClose:r}),a(Gn,{})]})},Jn=p.button`
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
    transform: scale(1.1);
    transition: color ${e=>e.theme.transition};
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
`,Qn=p(pr)`
  width: 20px;
  height: 20px;
  margin-right: ${e=>e.theme.space[3]}px;
  color: ${e=>e.theme.colors.accent};
`,Xn=()=>{const e=J();return f(Jn,{type:"button",onClick:()=>e(Zt()),children:[a(Qn,{}),"Log Out"]})},ii=()=>f(mr,{children:[f(fr,{children:[a(Ir,{}),a(Xn,{})]}),a(Yn,{})]});export{ii as default};
