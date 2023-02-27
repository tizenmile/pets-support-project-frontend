import{W as re,s as g,T as ie,U as ne,r as D,e as oe,a as k,F as se,j as n,y as le,Q as K,X as de}from"./index-ca242727.js";import{e as ce,d as ue,c as Y,a as $,V as me,E as fe,F as j}from"./index.esm-a2ef0edd.js";import{a as H,b as Q}from"./index.esm-18714c4f.js";import{I as Z}from"./iconBase-7141179f.js";var R={},pe={get exports(){return R},set exports(e){R=e}},y={},he={get exports(){return y},set exports(e){y=e}};(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=u;function d(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(a){return typeof a}:d=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d(i)}function u(i){var o=typeof i=="string"||i instanceof String;if(!o){var a=d(i);throw i===null?a="null":a==="object"&&(a=i.constructor.name),new TypeError("Expected a string but received a ".concat(a))}}e.exports=r.default,e.exports.default=r.default})(he,y);var E={},ge={get exports(){return E},set exports(e){E=e}};(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=d;function d(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;for(var o in i)typeof u[o]>"u"&&(u[o]=i[o]);return u}e.exports=r.default,e.exports.default=r.default})(ge,E);var z={},xe={get exports(){return z},set exports(e){z=e}};(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var d=u(y);function u(a){return a&&a.__esModule?a:{default:a}}function i(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(s){return typeof s}:i=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(a)}function o(a,t){(0,d.default)(a);var s,m;i(t)==="object"?(s=t.min||0,m=t.max):(s=arguments[1],m=arguments[2]);var c=encodeURI(a).split(/%..|./).length-1;return c>=s&&(typeof m>"u"||c<=m)}e.exports=r.default,e.exports.default=r.default})(xe,z);var M={},we={get exports(){return M},set exports(e){M=e}};(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=a;var d=i(y),u=i(E);function i(t){return t&&t.__esModule?t:{default:t}}var o={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function a(t,s){(0,d.default)(t),s=(0,u.default)(s,o),s.allow_trailing_dot&&t[t.length-1]==="."&&(t=t.substring(0,t.length-1)),s.allow_wildcard===!0&&t.indexOf("*.")===0&&(t=t.substring(2));var m=t.split("."),c=m[m.length-1];return s.require_tld&&(m.length<2||!s.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(c)||/\s/.test(c))||!s.allow_numeric_tld&&/^\d+$/.test(c)?!1:m.every(function(p){return!(p.length>63&&!s.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(p)||/[\uff01-\uff5e]/.test(p)||/^-|-$/.test(p)||!s.allow_underscores&&/_/.test(p))})}e.exports=r.default,e.exports.default=r.default})(we,M);var A={},_e={get exports(){return A},set exports(e){A=e}};(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=m;var d=u(y);function u(c){return c&&c.__esModule?c:{default:c}}var i="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",o="(".concat(i,"[.]){3}").concat(i),a=new RegExp("^".concat(o,"$")),t="(?:[0-9a-fA-F]{1,4})",s=new RegExp("^("+"(?:".concat(t,":){7}(?:").concat(t,"|:)|")+"(?:".concat(t,":){6}(?:").concat(o,"|:").concat(t,"|:)|")+"(?:".concat(t,":){5}(?::").concat(o,"|(:").concat(t,"){1,2}|:)|")+"(?:".concat(t,":){4}(?:(:").concat(t,"){0,1}:").concat(o,"|(:").concat(t,"){1,3}|:)|")+"(?:".concat(t,":){3}(?:(:").concat(t,"){0,2}:").concat(o,"|(:").concat(t,"){1,4}|:)|")+"(?:".concat(t,":){2}(?:(:").concat(t,"){0,3}:").concat(o,"|(:").concat(t,"){1,5}|:)|")+"(?:".concat(t,":){1}(?:(:").concat(t,"){0,4}:").concat(o,"|(:").concat(t,"){1,6}|:)|")+"(?::((?::".concat(t,"){0,5}:").concat(o,"|(?::").concat(t,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function m(c){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,d.default)(c),p=String(p),p?p==="4"?a.test(c):p==="6"?s.test(c):!1:m(c,4)||m(c,6)}e.exports=r.default,e.exports.default=r.default})(_e,A);(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=_;var d=t(y),u=t(E),i=t(z),o=t(M),a=t(A);function t(f){return f&&f.__esModule?f:{default:f}}var s={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},m=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,c=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,p=/^[a-z\d]+$/,C=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,B=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,L=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,w=254;function x(f){var l=f.replace(/^"(.+)"$/,"$1");if(!l.trim())return!1;var F=/[\.";<>]/.test(l);if(F){if(l===f)return!1;var b=l.split('"').length===l.split('\\"').length;if(!b)return!1}return!0}function _(f,l){if((0,d.default)(f),l=(0,u.default)(l,s),l.require_display_name||l.allow_display_name){var F=f.match(m);if(F){var b=F[1];if(f=f.replace(b,"").replace(/(^<|>$)/g,""),b.endsWith(" ")&&(b=b.slice(0,-1)),!x(b))return!1}else if(l.require_display_name)return!1}if(!l.ignore_max_length&&f.length>w)return!1;var N=f.split("@"),v=N.pop(),q=v.toLowerCase();if(l.host_blacklist.includes(q)||l.host_whitelist.length>0&&!l.host_whitelist.includes(q))return!1;var h=N.join("@");if(l.domain_specific_validation&&(q==="gmail.com"||q==="googlemail.com")){h=h.toLowerCase();var U=h.split("+")[0];if(!(0,i.default)(U.replace(/\./g,""),{min:6,max:30}))return!1;for(var T=U.split("."),O=0;O<T.length;O++)if(!p.test(T[O]))return!1}if(l.ignore_max_length===!1&&(!(0,i.default)(h,{max:64})||!(0,i.default)(v,{max:254})))return!1;if(!(0,o.default)(v,{require_tld:l.require_tld,ignore_max_length:l.ignore_max_length})){if(!l.allow_ip_domain)return!1;if(!(0,a.default)(v)){if(!v.startsWith("[")||!v.endsWith("]"))return!1;var V=v.slice(1,-1);if(V.length===0||!(0,a.default)(V))return!1}}if(h[0]==='"')return h=h.slice(1,h.length-1),l.allow_utf8_local_part?L.test(h):C.test(h);for(var ae=l.allow_utf8_local_part?B:c,W=h.split("."),I=0;I<W.length;I++)if(!ae.test(W[I]))return!1;return!(l.blacklisted_chars&&h.search(new RegExp("[".concat(l.blacklisted_chars,"]+"),"g"))!==-1)}e.exports=r.default,e.exports.default=r.default})(pe,R);const be=re(R),ve="/pets-support-project-frontend/assets/login_page_bg-d872c9ea.svg",ze=g.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${ie});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media (${e=>e.theme.media.tablet}) {
    background-image: url(${ve});
    background-position: center bottom -180px;
    position: relative;
  }
`,Me=g.div`
  width: 280px;

  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;

  @media (${e=>e.theme.media.tablet}) and (max-width: 1279px) {
    width: 608px;
    margin-top: 180px;
    background-color: ${e=>e.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
  @media (${e=>e.theme.media.desktop}) {
    width: 618px;
    margin-top: 60px;
    background-color: ${e=>e.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
`,ee=g(ce)`
display: flex;
margin-left: auto;
margin-right: auto;
flex-direction: column;
align-items: center;
`,Ae=g.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 24px;

  color: ${e=>e.theme.colors.mainText};
  @media (${e=>e.theme.media.tablet}) and (max-width: 1279px) {
    margin-top: 60px;
  }
  @media (${e=>e.theme.media.desktop}) {
    margin-top: 60px;
  }
`,Oe=g.p`
  margin-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
  @media (${e=>e.theme.media.tablet}) and (max-width: 1279px) {
    margin-bottom: 60px;
  }
  @media (${e=>e.theme.media.desktop}) {
    margin-bottom: 60px;
  }
`,Ie=g(ne)`
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
`,P=g(ue)`
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
  @media (${e=>e.theme.media.tablet}) and (max-width: 1279px) {
    width: 448px;
    height: 52px;
  }
  @media (${e=>e.theme.media.desktop}) {
    width: 458px;
    height: 52px;
  }
`,te=g.button`
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
  @media (${e=>e.theme.media.tablet}) and (max-width: 1279px) {
    width: 448px;
  }
  @media (${e=>e.theme.media.desktop}) {
    width: 458px;
  }
`,ye=g.button`
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

@media (${e=>e.theme.media.tablet}) and (max-width: 1279px) {
  width: 448px;
}
@media (${e=>e.theme.media.desktop}) {
  width: 458px;
}
`,Fe=g.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
  letter-spacing: 0.04em;
  color: red;
`,X=g.div`
display: grid;
height: 56px;

@media (${e=>e.theme.media.tablet}) and (max-width: 1279px) {
  height: 68px;
}
@media (${e=>e.theme.media.desktop}) {
  height: 68px;
}
`,G=g.span`
position: relative;
bottom: 38px;
left: 220px;

@media (${e=>e.theme.media.tablet}) and (max-width: 1279px) {
  bottom: 45px;
  left: 400px
}
@media (${e=>e.theme.media.desktop}) {
  bottom: 46px;
  left: 410px
}
`,J=e=>K.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),$e=Y().shape({email:$().max(63,"Must be between 6 and 63 characters.").min(6,"Must be between 6 and 63 characters.").email("Invalid email address").matches(/[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/,"The @ symbol must be preceded by at least 2 characters").required("Email is required").test("is-valid",e=>`${e.path} is invalid`,e=>e?be(e):new me("Invalid value")),password:$().min(7,"Must be between 7 and 32 characters.").max(32,"Must be between 7 and 32 characters.").matches(/^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$/,"Must include numbers and/or letters (uppercase and lowercase) except for whitespace.").matches(/^\S*$/,"Password must not contain spaces").required("Password is required")}),Pe=Y().shape({name:$().required("Name is required"),city:$().required("City, region are required"),mobile:$().length(13,"For example +380##########. Must be 13 characters.").matches("^[+](380)[0-9]{9}$","For example +380##########. Must be 13 characters.").required("Mobile phone is required")}),Se={email:"",password:"",name:"",city:"",mobile:""},S=({name:e})=>n(fe,{name:e,render:r=>n(Fe,{children:r})}),Be=()=>{const[e,r]=D.useState(Se),[d,u]=D.useState(0),[i,o]=D.useState(!1),[a,t]=D.useState(!1),s=()=>{o(!i)},m=()=>{t(!a)},c=oe(),p=w=>{const{email:x,password:_,name:f,city:l,mobile:F}=w;c(de({email:x,password:_,name:f,city:l,mobile:F}))},C=(w,x=!1)=>{if(r(_=>({..._,...w})),x){p(w);return}u(_=>_+1)};return k(se,{children:[[n(ke,{next:C,data:e,showPassword:i,togglePassword:()=>s(),showConfirmPassword:a,toggleConfirmPassword:()=>m()}),n(Ee,{next:C,prev:w=>{r(x=>({...x,...w})),u(x=>x-1)},data:e})][d],n(le,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})},ke=e=>{const{showPassword:r,togglePassword:d,showConfirmPassword:u,toggleConfirmPassword:i}=e,o=a=>{if(a.email.toLowerCase().includes(".ru")){K.error("Москалей не регистрируем",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"});return}if(!a.confirmPassword){J("Confirm password is required");return}a.confirmPassword===a.password&&e.next(a),a.confirmPassword!==a.password&&J("Passwords must match")};return n(j,{initialValues:e.data,validationSchema:$e,onSubmit:o,children:({values:a})=>k(ee,{children:[n(P,{placeholder:"Email",type:"email",name:"email",value:a.email||""}),n(S,{name:"email"}),k(X,{children:[n(P,{placeholder:"Password",name:"password",value:a.password||"",type:r?"text":"password"}),n(G,{onClick:d,children:n(Z.Provider,{value:{color:"rgba(245, 146, 86, 1)",size:35},children:r?n(H,{}):n(Q,{})})})]}),n(S,{name:"password"}),k(X,{children:[n(P,{placeholder:"Confirm Password",type:u?"text":"password",name:"confirmPassword",validate:$()}),n(G,{onClick:i,children:n(Z.Provider,{value:{color:"rgba(245, 146, 86, 1)",size:35},children:u?n(H,{}):n(Q,{})})})]}),n(S,{name:"confirmPassword"}),n(te,{type:"submit",children:"Next"})]})})},Ee=e=>{const r=(d,u)=>{e.next(d,!0)};return n(j,{initialValues:e.data,validationSchema:Pe,onSubmit:r,children:({values:d})=>k(ee,{children:[n(P,{placeholder:"Name",type:"text",name:"name",value:d.name||""}),n(S,{name:"name"}),n(P,{placeholder:"City, region",type:"text",name:"city",value:d.city||""}),n(S,{name:"city"}),n(P,{placeholder:"Mobile phone",type:"text",name:"mobile",value:d.mobile||""}),n(S,{name:"mobile"}),n(te,{type:"submit",children:"Register"}),n(ye,{type:"button",onClick:()=>e.prev(d),children:"Back"})]})})};export{Be as A,S as F,X as P,ze as R,Me as a,Ae as b,Oe as c,Ie as d,G as e,be as i,ve as l};
