import{X as J,s as h,U as K,V as j,r as U,e as ee,a as A,F as te,j as u,y as ae,Q as re,Y as ne}from"./index-8880376f.js";import{e as ie,d as oe,c as T,a as v,V as se,E as le,F as Q}from"./index.esm-a359f716.js";var P={},ce={get exports(){return P},set exports(e){P=e}},b={},de={get exports(){return b},set exports(e){b=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=m;function r(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(n){return typeof n}:r=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(i)}function m(i){var l=typeof i=="string"||i instanceof String;if(!l){var n=r(i);throw i===null?n="null":n==="object"&&(n=i.constructor.name),new TypeError("Expected a string but received a ".concat(n))}}e.exports=a.default,e.exports.default=a.default})(de,b);var F={},ue={get exports(){return F},set exports(e){F=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;function r(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;for(var l in i)typeof m[l]>"u"&&(m[l]=i[l]);return m}e.exports=a.default,e.exports.default=a.default})(ue,F);var k={},fe={get exports(){return k},set exports(e){k=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=l;var r=m(b);function m(n){return n&&n.__esModule?n:{default:n}}function i(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(s){return typeof s}:i=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(n)}function l(n,t){(0,r.default)(n);var s,d;i(t)==="object"?(s=t.min||0,d=t.max):(s=arguments[1],d=arguments[2]);var o=encodeURI(n).split(/%..|./).length-1;return o>=s&&(typeof d>"u"||o<=d)}e.exports=a.default,e.exports.default=a.default})(fe,k);var E={},me={get exports(){return E},set exports(e){E=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var r=i(b),m=i(F);function i(t){return t&&t.__esModule?t:{default:t}}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function n(t,s){(0,r.default)(t),s=(0,m.default)(s,l),s.allow_trailing_dot&&t[t.length-1]==="."&&(t=t.substring(0,t.length-1)),s.allow_wildcard===!0&&t.indexOf("*.")===0&&(t=t.substring(2));var d=t.split("."),o=d[d.length-1];return s.require_tld&&(d.length<2||!s.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(o)||/\s/.test(o))||!s.allow_numeric_tld&&/^\d+$/.test(o)?!1:d.every(function(f){return!(f.length>63&&!s.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(f)||/[\uff01-\uff5e]/.test(f)||/^-|-$/.test(f)||!s.allow_underscores&&/_/.test(f))})}e.exports=a.default,e.exports.default=a.default})(me,E);var q={},pe={get exports(){return q},set exports(e){q=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=d;var r=m(b);function m(o){return o&&o.__esModule?o:{default:o}}var i="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",l="(".concat(i,"[.]){3}").concat(i),n=new RegExp("^".concat(l,"$")),t="(?:[0-9a-fA-F]{1,4})",s=new RegExp("^("+"(?:".concat(t,":){7}(?:").concat(t,"|:)|")+"(?:".concat(t,":){6}(?:").concat(l,"|:").concat(t,"|:)|")+"(?:".concat(t,":){5}(?::").concat(l,"|(:").concat(t,"){1,2}|:)|")+"(?:".concat(t,":){4}(?:(:").concat(t,"){0,1}:").concat(l,"|(:").concat(t,"){1,3}|:)|")+"(?:".concat(t,":){3}(?:(:").concat(t,"){0,2}:").concat(l,"|(:").concat(t,"){1,4}|:)|")+"(?:".concat(t,":){2}(?:(:").concat(t,"){0,3}:").concat(l,"|(:").concat(t,"){1,5}|:)|")+"(?:".concat(t,":){1}(?:(:").concat(t,"){0,4}:").concat(l,"|(:").concat(t,"){1,6}|:)|")+"(?::((?::".concat(t,"){0,5}:").concat(l,"|(?::").concat(t,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function d(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,r.default)(o),f=String(f),f?f==="4"?n.test(o):f==="6"?s.test(o):!1:d(o,4)||d(o,6)}e.exports=a.default,e.exports.default=a.default})(pe,q);(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=Y;var r=t(b),m=t(F),i=t(k),l=t(E),n=t(q);function t(p){return p&&p.__esModule?p:{default:p}}var s={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},d=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,f=/^[a-z\d]+$/,D=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,R=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,M=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,H=254;function X(p){var c=p.replace(/^"(.+)"$/,"$1");if(!c.trim())return!1;var $=/[\.";<>]/.test(c);if($){if(c===p)return!1;var x=c.split('"').length===c.split('\\"').length;if(!x)return!1}return!0}function Y(p,c){if((0,r.default)(p),c=(0,m.default)(c,s),c.require_display_name||c.allow_display_name){var $=p.match(d);if($){var x=$[1];if(p=p.replace(x,"").replace(/(^<|>$)/g,""),x.endsWith(" ")&&(x=x.slice(0,-1)),!X(x))return!1}else if(c.require_display_name)return!1}if(!c.ignore_max_length&&p.length>H)return!1;var O=p.split("@"),_=O.pop(),S=_.toLowerCase();if(c.host_blacklist.includes(S)||c.host_whitelist.length>0&&!c.host_whitelist.includes(S))return!1;var g=O.join("@");if(c.domain_specific_validation&&(S==="gmail.com"||S==="googlemail.com")){g=g.toLowerCase();var I=g.split("+")[0];if(!(0,i.default)(I.replace(/\./g,""),{min:6,max:30}))return!1;for(var N=I.split("."),z=0;z<N.length;z++)if(!f.test(N[z]))return!1}if(c.ignore_max_length===!1&&(!(0,i.default)(g,{max:64})||!(0,i.default)(_,{max:254})))return!1;if(!(0,l.default)(_,{require_tld:c.require_tld,ignore_max_length:c.ignore_max_length})){if(!c.allow_ip_domain)return!1;if(!(0,n.default)(_)){if(!_.startsWith("[")||!_.endsWith("]"))return!1;var B=_.slice(1,-1);if(B.length===0||!(0,n.default)(B))return!1}}if(g[0]==='"')return g=g.slice(1,g.length-1),c.allow_utf8_local_part?M.test(g):D.test(g);for(var G=c.allow_utf8_local_part?R:o,L=g.split("."),C=0;C<L.length;C++)if(!G.test(L[C]))return!1;return!(c.blacklisted_chars&&g.search(new RegExp("[".concat(c.blacklisted_chars,"]+"),"g"))!==-1)}e.exports=a.default,e.exports.default=a.default})(ce,P);const ge=J(P),he="/pets-support-project-frontend/assets/login_page_bg-d872c9ea.svg",Pe=h.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${K});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media (${e=>e.theme.media.tablet}) {
    background-image: url(${he});
    background-position: center bottom -180px;
    position: relative;
  }
`,ke=h.div`
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
`,W=h(ie)`
display: flex;
margin-left: auto;
margin-right: auto;
flex-direction: column;
align-items: center;
`,Ee=h.p`
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
`,qe=h.p`
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
`,De=h(j)`
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
`,w=h(oe)`
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
`,Z=h.button`
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
`,xe=h.button`
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
`,_e=h.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
  letter-spacing: 0.04em;
  color: red;
`,V=e=>re.info(e,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),be=T().shape({email:v().max(63,"Must be between 6 and 63 characters.").min(6,"Must be between 6 and 63 characters.").email("Invalid email address").matches(/[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/,"The @ symbol must be preceded by at least 2 characters").required("Email is required").test("is-valid",e=>`${e.path} is invalid`,e=>e?ge(e):new se("Invalid value")),password:v().min(7,"Must be between 7 and 32 characters.").max(32,"Must be between 7 and 32 characters.").matches(/^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$/,"Must include numbers and/or letters (uppercase and lowercase) except for whitespace.").required("Password is required")}),ve=T().shape({name:v().required("Name is required"),city:v().required("City, region are required"),mobile:v().length(13,"For example +380##########. Must be 13 characters.").required("Mobile phone is required")}),we={email:"",password:"",name:"",city:"",mobile:""},y=({name:e})=>u(le,{name:e,render:a=>u(_e,{children:a})}),Re=()=>{const[e,a]=U.useState(we),[r,m]=U.useState(0),i=ee(),l=d=>{const{email:o,password:f,name:D,city:R,mobile:M}=d;i(ne({email:o,password:f,name:D,city:R,mobile:M}))},n=(d,o=!1)=>{if(a(f=>({...f,...d})),o){l(d);return}m(f=>f+1)};return A(te,{children:[[u(ye,{next:n,data:e}),u(Fe,{next:n,prev:d=>{a(o=>({...o,...d})),m(o=>o-1)},data:e})][r],u(ae,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})},ye=e=>{const a=r=>{if(!r.confirmPassword){V("Confirm password is required");return}r.confirmPassword===r.password&&e.next(r),r.confirmPassword!==r.password&&V("Passwords must match")};return u(Q,{initialValues:e.data,validationSchema:be,onSubmit:a,children:({values:r})=>A(W,{children:[u(w,{placeholder:"Email",type:"email",name:"email",value:r.email||""}),u(y,{name:"email"}),u(w,{placeholder:"Password",type:"password",name:"password",value:r.password||""}),u(y,{name:"password"}),u(w,{placeholder:"Confirm Password",type:"password",name:"confirmPassword",validate:v()}),u(y,{name:"confirmPassword"}),u(Z,{type:"submit",children:"Next"})]})})},Fe=e=>{const a=(r,m)=>{e.next(r,!0)};return u(Q,{initialValues:e.data,validationSchema:ve,onSubmit:a,children:({values:r})=>A(W,{children:[u(w,{placeholder:"Name",type:"text",name:"name",value:r.name||""}),u(y,{name:"name"}),u(w,{placeholder:"City, region",type:"text",name:"city",value:r.city||""}),u(y,{name:"city"}),u(w,{placeholder:"Mobile phone",type:"text",name:"mobile",value:r.mobile||""}),u(y,{name:"mobile"}),u(Z,{type:"submit",children:"Register"}),u(xe,{type:"button",onClick:()=>e.prev(r),children:"Back"})]})})};export{Re as A,y as F,Pe as R,ke as a,Ee as b,qe as c,De as d,ge as i,he as l};
