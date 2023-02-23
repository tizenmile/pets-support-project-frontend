import{k as J,s as h,m as K,N as Y,r as V,e as j,a as F,F as ee,j as o,l as te,n as ae}from"./index-e0931099.js";import{F as re,e as ne,c as T,a as b,f as ie,d as Q,E as le}from"./index.esm-66b88709.js";import{l as oe}from"./login_page_bg-e3bfa072.js";var E={},se={get exports(){return E},set exports(e){E=e}},v={},ue={get exports(){return v},set exports(e){v=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=m;function n(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(r){return typeof r}:n=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(i)}function m(i){var u=typeof i=="string"||i instanceof String;if(!u){var r=n(i);throw i===null?r="null":r==="object"&&(r=i.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}e.exports=a.default,e.exports.default=a.default})(ue,v);var $={},ce={get exports(){return $},set exports(e){$=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;function n(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;for(var u in i)typeof m[u]>"u"&&(m[u]=i[u]);return m}e.exports=a.default,e.exports.default=a.default})(ce,$);var k={},de={get exports(){return k},set exports(e){k=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=u;var n=m(v);function m(r){return r&&r.__esModule?r:{default:r}}function i(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(s){return typeof s}:i=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(r)}function u(r,t){(0,n.default)(r);var s,d;i(t)==="object"?(s=t.min||0,d=t.max):(s=arguments[1],d=arguments[2]);var l=encodeURI(r).split(/%..|./).length-1;return l>=s&&(typeof d>"u"||l<=d)}e.exports=a.default,e.exports.default=a.default})(de,k);var q={},fe={get exports(){return q},set exports(e){q=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;var n=i(v),m=i($);function i(t){return t&&t.__esModule?t:{default:t}}var u={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function r(t,s){(0,n.default)(t),s=(0,m.default)(s,u),s.allow_trailing_dot&&t[t.length-1]==="."&&(t=t.substring(0,t.length-1)),s.allow_wildcard===!0&&t.indexOf("*.")===0&&(t=t.substring(2));var d=t.split("."),l=d[d.length-1];return s.require_tld&&(d.length<2||!s.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(l)||/\s/.test(l))||!s.allow_numeric_tld&&/^\d+$/.test(l)?!1:d.every(function(f){return!(f.length>63&&!s.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(f)||/[\uff01-\uff5e]/.test(f)||/^-|-$/.test(f)||!s.allow_underscores&&/_/.test(f))})}e.exports=a.default,e.exports.default=a.default})(fe,q);var D={},me={get exports(){return D},set exports(e){D=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=d;var n=m(v);function m(l){return l&&l.__esModule?l:{default:l}}var i="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",u="(".concat(i,"[.]){3}").concat(i),r=new RegExp("^".concat(u,"$")),t="(?:[0-9a-fA-F]{1,4})",s=new RegExp("^("+"(?:".concat(t,":){7}(?:").concat(t,"|:)|")+"(?:".concat(t,":){6}(?:").concat(u,"|:").concat(t,"|:)|")+"(?:".concat(t,":){5}(?::").concat(u,"|(:").concat(t,"){1,2}|:)|")+"(?:".concat(t,":){4}(?:(:").concat(t,"){0,1}:").concat(u,"|(:").concat(t,"){1,3}|:)|")+"(?:".concat(t,":){3}(?:(:").concat(t,"){0,2}:").concat(u,"|(:").concat(t,"){1,4}|:)|")+"(?:".concat(t,":){2}(?:(:").concat(t,"){0,3}:").concat(u,"|(:").concat(t,"){1,5}|:)|")+"(?:".concat(t,":){1}(?:(:").concat(t,"){0,4}:").concat(u,"|(:").concat(t,"){1,6}|:)|")+"(?::((?::".concat(t,"){0,5}:").concat(u,"|(?::").concat(t,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function d(l){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,n.default)(l),f=String(f),f?f==="4"?r.test(l):f==="6"?s.test(l):!1:d(l,4)||d(l,6)}e.exports=a.default,e.exports.default=a.default})(me,D);(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=X;var n=t(v),m=t($),i=t(k),u=t(q),r=t(D);function t(p){return p&&p.__esModule?p:{default:p}}var s={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},d=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,f=/^[a-z\d]+$/,R=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,M=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,A=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,Z=254;function H(p){var c=p.replace(/^"(.+)"$/,"$1");if(!c.trim())return!1;var S=/[\.";<>]/.test(c);if(S){if(c===p)return!1;var x=c.split('"').length===c.split('\\"').length;if(!x)return!1}return!0}function X(p,c){if((0,n.default)(p),c=(0,m.default)(c,s),c.require_display_name||c.allow_display_name){var S=p.match(d);if(S){var x=S[1];if(p=p.replace(x,"").replace(/(^<|>$)/g,""),x.endsWith(" ")&&(x=x.slice(0,-1)),!H(x))return!1}else if(c.require_display_name)return!1}if(!c.ignore_max_length&&p.length>Z)return!1;var I=p.split("@"),_=I.pop(),P=_.toLowerCase();if(c.host_blacklist.includes(P)||c.host_whitelist.length>0&&!c.host_whitelist.includes(P))return!1;var g=I.join("@");if(c.domain_specific_validation&&(P==="gmail.com"||P==="googlemail.com")){g=g.toLowerCase();var N=g.split("+")[0];if(!(0,i.default)(N.replace(/\./g,""),{min:6,max:30}))return!1;for(var L=N.split("."),z=0;z<L.length;z++)if(!f.test(L[z]))return!1}if(c.ignore_max_length===!1&&(!(0,i.default)(g,{max:64})||!(0,i.default)(_,{max:254})))return!1;if(!(0,u.default)(_,{require_tld:c.require_tld,ignore_max_length:c.ignore_max_length})){if(!c.allow_ip_domain)return!1;if(!(0,r.default)(_)){if(!_.startsWith("[")||!_.endsWith("]"))return!1;var U=_.slice(1,-1);if(U.length===0||!(0,r.default)(U))return!1}}if(g[0]==='"')return g=g.slice(1,g.length-1),c.allow_utf8_local_part?A.test(g):R.test(g);for(var G=c.allow_utf8_local_part?M:l,B=g.split("."),C=0;C<B.length;C++)if(!G.test(B[C]))return!1;return!(c.blacklisted_chars&&g.search(new RegExp("[".concat(c.blacklisted_chars,"]+"),"g"))!==-1)}e.exports=a.default,e.exports.default=a.default})(se,E);const pe=J(E),ge=h.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${K});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media (${e=>e.theme.media.tablet}) {
    background-image: url(${oe});
    background-position: center bottom -180px;
    position: relative;
  }
`,he=h.div`
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
`,W=h(re)`
display: flex;
margin-left: auto;
margin-right: auto;
flex-direction: column;
align-items: center;
`,xe=h.p`
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
`,_e=h.p`
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
`,ve=h(Y)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 5px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #3091eb;
`,y=h(ne)`
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
`,O=h.button`
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
`,be=h.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
  letter-spacing: 0.04em;
  color: red;
`,ye=T().shape({email:b().max(63,"Must be between 6 and 63 characters.").min(6,"Must be between 6 and 63 characters.").email("Invalid email address").matches(/[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/,"The @ symbol must be preceded by at least 2 characters").required("Email is required").test("is-valid",e=>`${e.path} is invalid`,e=>e?pe(e):new yup.ValidationError("Invalid value")),password:b().min(7,"Must be between 7 and 32 characters.").max(32,"Must be between 7 and 32 characters.").matches(/^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$/).required("Password is required"),confirmPassword:b().oneOf([ie("password"),null],"Passwords must match")}),we=T().shape({name:b().required("Name is required"),city:b().required("City, region are required"),mobile:b().length(13,"For example +380##########. Must be 13 characters.").required("Mobile phone is required")}),Fe={email:"",password:"",name:"",city:"",mobile:""},w=({name:e})=>o(le,{name:e,render:a=>o(be,{children:a})}),$e=()=>{const[e,a]=V.useState(Fe),[n,m]=V.useState(0),i=j(),u=d=>{const{email:l,password:f,name:R,city:M,mobile:A}=d;i(ae({email:l,password:f,name:R,city:M,mobile:A}))},r=(d,l=!1)=>{if(a(f=>({...f,...d})),l){u(d);return}m(f=>f+1)};return F(ee,{children:[[o(Se,{next:r,data:e}),o(Pe,{next:r,prev:d=>{a(l=>({...l,...d})),m(l=>l-1)},data:e})][n],o(te,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})},Se=e=>{const a=n=>{e.next(n)};return o(Q,{initialValues:e.data,validationSchema:ye,onSubmit:a,children:({values:n})=>F(W,{children:[o(y,{placeholder:"Email",type:"email",name:"email",value:n.email||""}),o(w,{name:"email"}),o(y,{placeholder:"Password",type:"password",name:"password",value:n.password||""}),o(w,{name:"password"}),o(y,{placeholder:"Confirm Password",type:"password",name:"confirmPassword",value:n.confirmPassword||""}),o(w,{name:"confirmPassword"}),o(O,{type:"submit",children:"Next"})]})})},Pe=e=>{const a=(n,m)=>{e.next(n,!0)};return o(Q,{initialValues:e.data,validationSchema:we,onSubmit:a,children:({values:n})=>F(W,{children:[o(y,{placeholder:"Name",type:"text",name:"name",value:n.name||""}),o(w,{name:"name"}),o(y,{placeholder:"City, region",type:"text",name:"city",value:n.city||""}),o(w,{name:"city"}),o(y,{placeholder:"Mobile phone",type:"text",name:"mobile",value:n.mobile||""}),o(w,{name:"mobile"}),o(O,{type:"submit",children:"Register"}),o(O,{type:"button",onClick:()=>e.prev(n),children:"Back"})]})})},De=()=>o(ge,{children:F(he,{children:[o(xe,{children:"Registration"}),o($e,{}),F(_e,{children:["Already have an account?",o(ve,{to:"/login",children:"Login"})]})]})});export{De as default};
