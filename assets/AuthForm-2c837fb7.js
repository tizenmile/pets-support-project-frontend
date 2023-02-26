import{X as G,s as h,U as J,V as K,r as U,e as j,a as C,F as ee,j as d,y as te,Y as ae}from"./index-e6188c2c.js";import{F as re,e as ne,c as V,a as b,V as ie,f as oe,E as le,d as T}from"./index.esm-b3600b58.js";var P={},se={get exports(){return P},set exports(e){P=e}},v={},ce={get exports(){return v},set exports(e){v=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=m;function n(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(r){return typeof r}:n=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(i)}function m(i){var s=typeof i=="string"||i instanceof String;if(!s){var r=n(i);throw i===null?r="null":r==="object"&&(r=i.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}e.exports=a.default,e.exports.default=a.default})(ce,v);var F={},ue={get exports(){return F},set exports(e){F=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;function n(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;for(var s in i)typeof m[s]>"u"&&(m[s]=i[s]);return m}e.exports=a.default,e.exports.default=a.default})(ue,F);var E={},de={get exports(){return E},set exports(e){E=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=s;var n=m(v);function m(r){return r&&r.__esModule?r:{default:r}}function i(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(l){return typeof l}:i=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},i(r)}function s(r,t){(0,n.default)(r);var l,u;i(t)==="object"?(l=t.min||0,u=t.max):(l=arguments[1],u=arguments[2]);var o=encodeURI(r).split(/%..|./).length-1;return o>=l&&(typeof u>"u"||o<=u)}e.exports=a.default,e.exports.default=a.default})(de,E);var k={},fe={get exports(){return k},set exports(e){k=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;var n=i(v),m=i(F);function i(t){return t&&t.__esModule?t:{default:t}}var s={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function r(t,l){(0,n.default)(t),l=(0,m.default)(l,s),l.allow_trailing_dot&&t[t.length-1]==="."&&(t=t.substring(0,t.length-1)),l.allow_wildcard===!0&&t.indexOf("*.")===0&&(t=t.substring(2));var u=t.split("."),o=u[u.length-1];return l.require_tld&&(u.length<2||!l.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(o)||/\s/.test(o))||!l.allow_numeric_tld&&/^\d+$/.test(o)?!1:u.every(function(f){return!(f.length>63&&!l.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(f)||/[\uff01-\uff5e]/.test(f)||/^-|-$/.test(f)||!l.allow_underscores&&/_/.test(f))})}e.exports=a.default,e.exports.default=a.default})(fe,k);var q={},me={get exports(){return q},set exports(e){q=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=u;var n=m(v);function m(o){return o&&o.__esModule?o:{default:o}}var i="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",s="(".concat(i,"[.]){3}").concat(i),r=new RegExp("^".concat(s,"$")),t="(?:[0-9a-fA-F]{1,4})",l=new RegExp("^("+"(?:".concat(t,":){7}(?:").concat(t,"|:)|")+"(?:".concat(t,":){6}(?:").concat(s,"|:").concat(t,"|:)|")+"(?:".concat(t,":){5}(?::").concat(s,"|(:").concat(t,"){1,2}|:)|")+"(?:".concat(t,":){4}(?:(:").concat(t,"){0,1}:").concat(s,"|(:").concat(t,"){1,3}|:)|")+"(?:".concat(t,":){3}(?:(:").concat(t,"){0,2}:").concat(s,"|(:").concat(t,"){1,4}|:)|")+"(?:".concat(t,":){2}(?:(:").concat(t,"){0,3}:").concat(s,"|(:").concat(t,"){1,5}|:)|")+"(?:".concat(t,":){1}(?:(:").concat(t,"){0,4}:").concat(s,"|(:").concat(t,"){1,6}|:)|")+"(?::((?::".concat(t,"){0,5}:").concat(s,"|(?::").concat(t,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function u(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,n.default)(o),f=String(f),f?f==="4"?r.test(o):f==="6"?l.test(o):!1:u(o,4)||u(o,6)}e.exports=a.default,e.exports.default=a.default})(me,q);(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=H;var n=t(v),m=t(F),i=t(E),s=t(k),r=t(q);function t(p){return p&&p.__esModule?p:{default:p}}var l={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},u=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,f=/^[a-z\d]+$/,D=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,R=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,M=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,Z=254;function X(p){var c=p.replace(/^"(.+)"$/,"$1");if(!c.trim())return!1;var $=/[\.";<>]/.test(c);if($){if(c===p)return!1;var x=c.split('"').length===c.split('\\"').length;if(!x)return!1}return!0}function H(p,c){if((0,n.default)(p),c=(0,m.default)(c,l),c.require_display_name||c.allow_display_name){var $=p.match(u);if($){var x=$[1];if(p=p.replace(x,"").replace(/(^<|>$)/g,""),x.endsWith(" ")&&(x=x.slice(0,-1)),!X(x))return!1}else if(c.require_display_name)return!1}if(!c.ignore_max_length&&p.length>Z)return!1;var O=p.split("@"),_=O.pop(),S=_.toLowerCase();if(c.host_blacklist.includes(S)||c.host_whitelist.length>0&&!c.host_whitelist.includes(S))return!1;var g=O.join("@");if(c.domain_specific_validation&&(S==="gmail.com"||S==="googlemail.com")){g=g.toLowerCase();var I=g.split("+")[0];if(!(0,i.default)(I.replace(/\./g,""),{min:6,max:30}))return!1;for(var N=I.split("."),z=0;z<N.length;z++)if(!f.test(N[z]))return!1}if(c.ignore_max_length===!1&&(!(0,i.default)(g,{max:64})||!(0,i.default)(_,{max:254})))return!1;if(!(0,s.default)(_,{require_tld:c.require_tld,ignore_max_length:c.ignore_max_length})){if(!c.allow_ip_domain)return!1;if(!(0,r.default)(_)){if(!_.startsWith("[")||!_.endsWith("]"))return!1;var L=_.slice(1,-1);if(L.length===0||!(0,r.default)(L))return!1}}if(g[0]==='"')return g=g.slice(1,g.length-1),c.allow_utf8_local_part?M.test(g):D.test(g);for(var Y=c.allow_utf8_local_part?R:o,B=g.split("."),A=0;A<B.length;A++)if(!Y.test(B[A]))return!1;return!(c.blacklisted_chars&&g.search(new RegExp("[".concat(c.blacklisted_chars,"]+"),"g"))!==-1)}e.exports=a.default,e.exports.default=a.default})(se,P);const pe=G(P),ge="/pets-support-project-frontend/assets/login_page_bg-d872c9ea.svg",Se=h.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${J});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media (${e=>e.theme.media.tablet}) {
    background-image: url(${ge});
    background-position: center bottom -180px;
    position: relative;
  }
`,Pe=h.div`
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
`,ke=h.p`
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
`,qe=h(K)`
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
`,w=h(ne)`
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
`,Q=h.button`
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
`,he=h.button`
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
`,xe=h.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
  letter-spacing: 0.04em;
  color: red;
`,_e=V().shape({email:b().max(63,"Must be between 6 and 63 characters.").min(6,"Must be between 6 and 63 characters.").email("Invalid email address").matches(/[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/,"The @ symbol must be preceded by at least 2 characters").required("Email is required").test("is-valid",e=>`${e.path} is invalid`,e=>e?pe(e):new ie("Invalid value")),password:b().min(7,"Must be between 7 and 32 characters.").max(32,"Must be between 7 and 32 characters.").matches(/^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$/,"Must include numbers and/or letters (uppercase and lowercase) except for whitespace.").required("Password is required"),confirmPassword:b().oneOf([oe("password"),null],"Passwords must match")}),ve=V().shape({name:b().required("Name is required"),city:b().required("City, region are required"),mobile:b().length(13,"For example +380##########. Must be 13 characters.").required("Mobile phone is required")}),be={email:"",password:"",name:"",city:"",mobile:""},y=({name:e})=>d(le,{name:e,render:a=>d(xe,{children:a})}),De=()=>{const[e,a]=U.useState(be),[n,m]=U.useState(0),i=j(),s=u=>{const{email:o,password:f,name:D,city:R,mobile:M}=u;i(ae({email:o,password:f,name:D,city:R,mobile:M}))},r=(u,o=!1)=>{if(a(f=>({...f,...u})),o){s(u);return}m(f=>f+1)};return C(ee,{children:[[d(we,{next:r,data:e}),d(ye,{next:r,prev:u=>{a(o=>({...o,...u})),m(o=>o-1)},data:e})][n],d(te,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})},we=e=>{const a=n=>{e.next(n)};return d(T,{initialValues:e.data,validationSchema:_e,onSubmit:a,children:({values:n})=>C(W,{children:[d(w,{placeholder:"Email",type:"email",name:"email",value:n.email||""}),d(y,{name:"email"}),d(w,{placeholder:"Password",type:"password",name:"password",value:n.password||""}),d(y,{name:"password"}),d(w,{placeholder:"Confirm Password",type:"password",name:"confirmPassword",value:n.confirmPassword||""}),d(y,{name:"confirmPassword"}),d(Q,{type:"submit",children:"Next"})]})})},ye=e=>{const a=(n,m)=>{e.next(n,!0)};return d(T,{initialValues:e.data,validationSchema:ve,onSubmit:a,children:({values:n})=>C(W,{children:[d(w,{placeholder:"Name",type:"text",name:"name",value:n.name||""}),d(y,{name:"name"}),d(w,{placeholder:"City, region",type:"text",name:"city",value:n.city||""}),d(y,{name:"city"}),d(w,{placeholder:"Mobile phone",type:"text",name:"mobile",value:n.mobile||""}),d(y,{name:"mobile"}),d(Q,{type:"submit",children:"Register"}),d(he,{type:"button",onClick:()=>e.prev(n),children:"Back"})]})})};export{De as A,y as F,Se as R,Pe as a,Ee as b,ke as c,qe as d,pe as i,ge as l};
