import{Y as ie,s as h,V as ne,W as oe,r as R,u as se,j as x,F as le,a as n,k as de,Q as K,Z as ce}from"./index-71a4c1a1.js";import{F as ue,e as me,c as j,a as P,V as fe,E as pe,d as ee}from"./index.esm-42c26cfe.js";import{a as Q,b as Z}from"./index.esm-74c7252b.js";import{I as X}from"./iconBase-d55bc2db.js";var z={},he={get exports(){return z},set exports(e){z=e}},F={},ge={get exports(){return F},set exports(e){F=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=u;function d(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(r){return typeof r}:d=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},d(i)}function u(i){var o=typeof i=="string"||i instanceof String;if(!o){var r=d(i);throw i===null?r="null":r==="object"&&(r=i.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}e.exports=a.default,e.exports.default=a.default})(ge,F);var C={},xe={get exports(){return C},set exports(e){C=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=d;function d(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;for(var o in i)typeof u[o]>"u"&&(u[o]=i[o]);return u}e.exports=a.default,e.exports.default=a.default})(xe,C);var M={},we={get exports(){return M},set exports(e){M=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=o;var d=u(F);function u(r){return r&&r.__esModule?r:{default:r}}function i(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(s){return typeof s}:i=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(r)}function o(r,t){(0,d.default)(r);var s,m;i(t)==="object"?(s=t.min||0,m=t.max):(s=arguments[1],m=arguments[2]);var c=encodeURI(r).split(/%..|./).length-1;return c>=s&&(typeof m>"u"||c<=m)}e.exports=a.default,e.exports.default=a.default})(we,M);var A={},_e={get exports(){return A},set exports(e){A=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;var d=i(F),u=i(C);function i(t){return t&&t.__esModule?t:{default:t}}var o={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function r(t,s){(0,d.default)(t),s=(0,u.default)(s,o),s.allow_trailing_dot&&t[t.length-1]==="."&&(t=t.substring(0,t.length-1)),s.allow_wildcard===!0&&t.indexOf("*.")===0&&(t=t.substring(2));var m=t.split("."),c=m[m.length-1];return s.require_tld&&(m.length<2||!s.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(c)||/\s/.test(c))||!s.allow_numeric_tld&&/^\d+$/.test(c)?!1:m.every(function(p){return!(p.length>63&&!s.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(p)||/[\uff01-\uff5e]/.test(p)||/^-|-$/.test(p)||!s.allow_underscores&&/_/.test(p))})}e.exports=a.default,e.exports.default=a.default})(_e,A);var O={},be={get exports(){return O},set exports(e){O=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=m;var d=u(F);function u(c){return c&&c.__esModule?c:{default:c}}var i="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",o="(".concat(i,"[.]){3}").concat(i),r=new RegExp("^".concat(o,"$")),t="(?:[0-9a-fA-F]{1,4})",s=new RegExp("^("+"(?:".concat(t,":){7}(?:").concat(t,"|:)|")+"(?:".concat(t,":){6}(?:").concat(o,"|:").concat(t,"|:)|")+"(?:".concat(t,":){5}(?::").concat(o,"|(:").concat(t,"){1,2}|:)|")+"(?:".concat(t,":){4}(?:(:").concat(t,"){0,1}:").concat(o,"|(:").concat(t,"){1,3}|:)|")+"(?:".concat(t,":){3}(?:(:").concat(t,"){0,2}:").concat(o,"|(:").concat(t,"){1,4}|:)|")+"(?:".concat(t,":){2}(?:(:").concat(t,"){0,3}:").concat(o,"|(:").concat(t,"){1,5}|:)|")+"(?:".concat(t,":){1}(?:(:").concat(t,"){0,4}:").concat(o,"|(:").concat(t,"){1,6}|:)|")+"(?::((?::".concat(t,"){0,5}:").concat(o,"|(?::").concat(t,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function m(c){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,d.default)(c),p=String(p),p?p==="4"?r.test(c):p==="6"?s.test(c):!1:m(c,4)||m(c,6)}e.exports=a.default,e.exports.default=a.default})(be,O);(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=b;var d=t(F),u=t(C),i=t(M),o=t(A),r=t(O);function t(f){return f&&f.__esModule?f:{default:f}}var s={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},m=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,c=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,p=/^[a-z\d]+$/,q=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,L=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,N=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,_=254;function w(f){var l=f.replace(/^"(.+)"$/,"$1");if(!l.trim())return!1;var $=/[\.";<>]/.test(l);if($){if(l===f)return!1;var v=l.split('"').length===l.split('\\"').length;if(!v)return!1}return!0}function b(f,l){if((0,d.default)(f),l=(0,u.default)(l,s),l.require_display_name||l.allow_display_name){var $=f.match(m);if($){var v=$[1];if(f=f.replace(v,"").replace(/(^<|>$)/g,""),v.endsWith(" ")&&(v=v.slice(0,-1)),!w(v))return!1}else if(l.require_display_name)return!1}if(!l.ignore_max_length&&f.length>_)return!1;var U=f.split("@"),y=U.pop(),D=y.toLowerCase();if(l.host_blacklist.includes(D)||l.host_whitelist.length>0&&!l.host_whitelist.includes(D))return!1;var g=U.join("@");if(l.domain_specific_validation&&(D==="gmail.com"||D==="googlemail.com")){g=g.toLowerCase();var V=g.split("+")[0];if(!(0,i.default)(V.replace(/\./g,""),{min:6,max:30}))return!1;for(var W=V.split("."),I=0;I<W.length;I++)if(!p.test(W[I]))return!1}if(l.ignore_max_length===!1&&(!(0,i.default)(g,{max:64})||!(0,i.default)(y,{max:254})))return!1;if(!(0,o.default)(y,{require_tld:l.require_tld,ignore_max_length:l.ignore_max_length})){if(!l.allow_ip_domain)return!1;if(!(0,r.default)(y)){if(!y.startsWith("[")||!y.endsWith("]"))return!1;var T=y.slice(1,-1);if(T.length===0||!(0,r.default)(T))return!1}}if(g[0]==='"')return g=g.slice(1,g.length-1),l.allow_utf8_local_part?N.test(g):q.test(g);for(var ae=l.allow_utf8_local_part?L:c,H=g.split("."),B=0;B<H.length;B++)if(!ae.test(H[B]))return!1;return!(l.blacklisted_chars&&g.search(new RegExp("[".concat(l.blacklisted_chars,"]+"),"g"))!==-1)}e.exports=a.default,e.exports.default=a.default})(he,z);const ve=ie(z),ye="/pets-support-project-frontend/assets/login_page_bg-d872c9ea.svg",Me=h.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${ne});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media ${e=>e.theme.media.tablet} {
    background-image: url(${ye});
    background-position: center bottom -180px;
    position: relative;
  }
`,Ae=h.div`
  width: 280px;

  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;

  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    width: 608px;
    margin-top: 180px;
    background-color: ${e=>e.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 618px;
    margin-top: 60px;
    background-color: ${e=>e.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
`,te=h(ue)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
`,Oe=h.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 24px;

  color: ${e=>e.theme.colors.mainText};
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    margin-top: 60px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-top: 60px;
  }
`,Ie=h.p`
  margin-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    margin-bottom: 60px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-bottom: 60px;
  }
`,Be=h(oe)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  // text-decoration: underline;
  text-decoration-thickness: 1px;
  cursor: pointer;
  margin-left: 5px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #3091eb;
  &.active {
    text-decoration-thickness: 2px;
  }

  &:hover {
    text-decoration-thickness: 2px;
  }
`,S=h(me)`
  width: 266px;
  height: 40px;
  left: 20px;
  top: 173px;

  background: ${e=>e.theme.colors.background};
  border: 1px solid ${e=>e.theme.colors.accent};
  border-radius: 40px;
  padding-left: 14px;
  margin-top: 16px;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    width: 448px;
    height: 52px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 458px;
    height: 52px;
  }
`,re=h.button`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 40px;
  padding: 0px;
  background: ${e=>e.theme.colors.accent};
  border-radius: ${e=>e.theme.radii.large};
  border: none;
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xm};
  line-height: 27px;
  width: 280px;
  color: ${e=>e.theme.colors.white};
  padding: 10px 28px;
  cursor: pointer;
  &:hover {
    background: ${e=>e.theme.colors.hover};
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    width: 448px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 458px;
  }
`,Fe=h.button`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 16px;
  padding: 0px;
  background: ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.large};
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xm};
  color: ${e=>e.theme.colors.mainText};
  border: 2px solid ${e=>e.theme.colors.accent};
  text-decoration: none;
  padding: 10px 28px;
  cursor: pointer;
  &:hover {
    background: ${e=>e.theme.colors.hover};
    border: 2px solid ${e=>e.theme.colors.hover};
    color: ${e=>e.theme.colors.white};
  }

  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    width: 448px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 458px;
  }
`,$e=h.p`
  position: absolute;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-left: 15px;
  letter-spacing: 0.04em;
  color: red;
`,k=h.div`
  position: relative;
`,Y=h.div`
  display: grid;
  height: 56px;

  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    height: 68px;
  }
  @media ${e=>e.theme.media.desktop} {
    height: 68px;
  }
`,G=h.span`
  position: relative;
  bottom: 38px;
  left: 220px;

  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    bottom: 45px;
    left: 400px;
  }
  @media ${e=>e.theme.media.desktop} {
    bottom: 46px;
    left: 410px;
  }
`,J=e=>K.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),Pe=j().shape({email:P().max(63,"Must be between 6 and 63 characters.").min(6,"Must be between 6 and 63 characters.").email("Invalid email address").matches(/[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/,"The @ symbol must be preceded by at least 2 characters").required("Email is required").test("is-valid",e=>`${e.path} is invalid`,e=>e?ve(e):new fe("Invalid value")),password:P().min(7,"Must be between 7 and 32 characters.").max(32,"Must be between 7 and 32 characters.").matches(/^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$/,"Must include numbers and/or letters (uppercase and lowercase) except for whitespace.").matches(/^\S*$/,"Password must not contain spaces").required("Password is required")}),Se=j().shape({name:P().required("Name is required"),city:P().required("City, region are required"),mobile:P().length(13,"For example +380##########. Must be 13 characters.").matches("^[+](380)[0-9]{9}$","For example +380##########. Must be 13 characters.").required("Mobile phone is required")}),ke={email:"",password:"",name:"",city:"",mobile:""},E=({name:e})=>n(pe,{name:e,render:a=>n($e,{children:a})}),Le=()=>{const[e,a]=R.useState(ke),[d,u]=R.useState(0),[i,o]=R.useState(!1),[r,t]=R.useState(!1),s=()=>{o(!i)},m=()=>{t(!r)},c=se(),p=_=>{const{email:w,password:b,name:f,city:l,mobile:$}=_;c(ce({email:w,password:b,name:f,city:l,mobile:$}))},q=(_,w=!1)=>{if(a(b=>({...b,..._})),w){p(_);return}u(b=>b+1)};return x(le,{children:[[n(Ee,{next:q,data:e,showPassword:i,togglePassword:()=>s(),showConfirmPassword:r,toggleConfirmPassword:()=>m()}),n(Ce,{next:q,prev:_=>{a(w=>({...w,..._})),u(w=>w-1)},data:e})][d],n(de,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})},Ee=e=>{const{showPassword:a,togglePassword:d,showConfirmPassword:u,toggleConfirmPassword:i}=e,o=r=>{if(r.email.toLowerCase().includes(".ru")){K.error("Москалей не регистрируем",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"});return}if(!r.confirmPassword){J("Confirm password is required");return}r.confirmPassword===r.password&&e.next(r),r.confirmPassword!==r.password&&J("Passwords must match")};return n(ee,{initialValues:e.data,validationSchema:Pe,onSubmit:o,children:({values:r})=>x(te,{children:[x(k,{children:[n(S,{placeholder:"Email",type:"email",name:"email",value:r.email||""}),n(E,{name:"email"})]}),x(k,{children:[x(Y,{children:[n(S,{placeholder:"Password",name:"password",value:r.password||"",type:a?"text":"password"}),n(G,{onClick:d,children:n(X.Provider,{value:{color:"rgba(245, 146, 86, 1)",size:35},children:a?n(Q,{}):n(Z,{})})})]}),n(E,{name:"password"})]}),x(k,{children:[x(Y,{children:[n(S,{placeholder:"Confirm Password",type:u?"text":"password",name:"confirmPassword",validate:P()}),n(G,{onClick:i,children:n(X.Provider,{value:{color:"rgba(245, 146, 86, 1)",size:35},children:u?n(Q,{}):n(Z,{})})})]}),n(E,{name:"confirmPassword"})]}),n(re,{type:"submit",children:"Next"})]})})},Ce=e=>{const a=(d,u)=>{e.next(d,!0)};return n(ee,{initialValues:e.data,validationSchema:Se,onSubmit:a,children:({values:d})=>x(te,{children:[x(k,{children:[n(S,{placeholder:"Name",type:"text",name:"name",value:d.name||""}),n(E,{name:"name"})]}),x(k,{children:[n(S,{placeholder:"City, region",type:"text",name:"city",value:d.city||""}),n(E,{name:"city"})]}),x(k,{children:[n(S,{placeholder:"Mobile phone",type:"text",name:"mobile",value:d.mobile||""}),n(E,{name:"mobile"})]}),n(re,{type:"submit",children:"Register"}),n(Fe,{type:"button",onClick:()=>e.prev(d),children:"Back"})]})})};export{Le as A,E as F,Y as P,Me as R,Ae as a,Oe as b,Ie as c,Be as d,G as e,ve as i,ye as l};
