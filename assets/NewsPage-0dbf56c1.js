import{s as i,p as S,r as b,u as w,j as n,a as s,d as g,e as z,g as f,f as C,O as F}from"./index-e87eab96.js";import{B as j}from"./index.esm-7674d087.js";import"./iconBase-04fd4aa8.js";const D=i.div`
  top: 0;
  left: 0;
  /* position: sticky; */
  /* z-index: 100; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(253, 247, 242, 1);
`,E=i.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 608px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  overflow: hidden;
  @media (${e=>e.theme.media.mobileMax}) {
    width: 280px;
  }
`,M=i.button`
  display: flex;
  width: 40px;
  height: 40px;
  border: 0;
  background-color: rgba(255, 255, 255, 1);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`,N=i.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
`,R=i.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 24px;
  line-height: 1.36;

  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  ::placeholder {
    font: inherit;
    font-size: 20px;
    line-height: 1.36;
  }
`,T=i(j)`
  width: 20px;
  height: 20px;
  margin: auto;
`,y=({submitForm:e})=>{const[t,o]=b.useState(""),[,r]=w();return n(D,{children:s(E,{onSubmit:c=>{c.preventDefault(),r({text:t}),o("")},children:[n(R,{onChange:c=>{o(c.target.value)},name:"name",type:"text",autocomplete:"off",placeholder:"Search",value:t}),s(M,{type:"submit",children:[n(N,{children:"Search"}),n(T,{})]})]})})};y.propTypes={submitForm:S.func};const B=e=>e.news.news[0],I=e=>{var t,o;return(o=(t=e.news.news)==null?void 0:t.data)==null?void 0:o.totalPages},L=e=>e.news.isLoading,P=i.div`
  background-color: rgba(253, 247, 242, 1);
  @media (${e=>e.theme.media.mobileMax}) {
    padding: 45px 20px 100px 20px;
  }
  @media (${e=>e.theme.media.tablet}) {
    padding: 90px 32px 100px 32px;
  }
  @media (${e=>e.theme.media.desktop}) {
    padding: 69px 16px 200px 16px;
  }
`,u=i.h2`
  @media (${e=>e.theme.media.mobileMax}) {
    text-align: center;
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 1.36;
  }
  @media (${e=>e.theme.media.tablet}) {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }

  @media (${e=>e.theme.media.desktop}) {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`,V=i.ul`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (${e=>e.theme.media.desktop}) {
    display: flex;
    flex-wrap: wrap;
  }
`,U=i.li`
  @media (${e=>e.theme.media.mobileMax}) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;

    &:nth-last-child() {
      margin-bottom: 0px;
    }
  }
  @media (${e=>e.theme.media.tablet}) {
    width: calc((100% - 32px) / 2);
    margin-left: 32px;
    margin-bottom: 60px;
    margin-right: 0px;
    &:nth-child(2n + 1) {
      margin-left: 0px;
    }
  }
  @media (${e=>e.theme.media.desktop}) {
    width: calc((100% - 64px) / 3);
    &:nth-child(2n + 1) {
      margin-left: 32px;
    }
    &:nth-child(3n + 1) {
      margin-left: 0px;
    }
  }
`,W=i.div`
  margin-left: auto;
  margin-right: auto;
  @media (${e=>e.theme.media.mobileMax}) {
    width: 280px;
  }
  @media (${e=>e.theme.media.tablet}) {
    width: 700px;
  }
  @media (${e=>e.theme.media.desktop}) {
    width: 1200px;
  }
`;i.form`
  @media (${e=>e.theme.media.mobileMax}) {
    position: relative;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
    height: 40px;
  }
  @media( ${e=>e.theme.media.tablet}) {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
  }
  @media (${e=>e.theme.media.desktop}) {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
  }
`;const A=i.div`
 @media (${e=>e.theme.media.mobileMax} ){  
    display: flex;
    flex-direction: column;
    /* ::before {
      content: " ";
      height: 4px;
      margin-bottom: 4px;
      background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
      border-radius: 40px;
      width: 200px;
    } */
  }
  @media (${e=>e.theme.media.tablet}) {
    ::before {
      content: " ";
      height: 8px;
      width: 280px;
    }
  }
  @media( ${e=>e.theme.media.desktop}) {
    ::before {
      content: " ";
      width: 340px;
    }
  }
`,k=i.span`
  display: inline-block;
  text-align: justify;
`,H=i.div`
  display: block;
  /* width: 200px; */
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-top: 40px;
`,O=i.h3`
@media (${e=>e.theme.media.mobileMax}) {
  margin-top: 0px;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.36;
  letter-spacing: -0.01em;

  span {
    display: none;
    padding: 2px 3px;
    margin-left: 0px;

    @media( ${e=>e.theme.media.tablet}) {
      width: calc(((100% - 32px) / 2) * 0.9);
      height: auto;
    }
    @media( ${e=>e.theme.media.desktop}) {
      width: calc((100% - 64px) / 3);
    }
  }
  :hover span {
    display: inline-block;
    position: absolute;
    background: #fdf7f2;
    border: 1px solid #f59256;
    font-size: 18px;
    border-radius: 10px;
    color: #535353;
  }
}
  @media (${e=>e.theme.media.desktop}) {
    letter-spacing: -0.02em;
  }
`,_=i.div`
  display: flex;
  justify-content: space-between;
`,q=i.div`
display: block ;
/* margin-bottom: auto; */
`,v=i.span`
  display: inline;
`,$=i.label`
  color: rgba(245, 146, 86, 1);
  cursor: pointer;
  :hover {
    color: rgba(83, 83, 83, 1);
  }
  :before {
    display: block;
    margin-top: 15px;
    content: 'Show more';
  }
`,G=i.input`
  display: none;
  :checked ~ ${k} {
    display: inline;
    opacity: 1;
    font-size: inherit;
    max-height: 999em;
  }
  :checked ~ ${v} {
    display: none;
  }
  :checked ~ ${$} {
    :before {
      content: 'Show less';
    }
  }
`,Q=i.p`
  height: 154px;
  overflow-y: hidden;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgb(17, 19, 33);
`,X=i.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,J=i.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.36;
  color: rgba(49, 21, 4, 0.07);
`,K=i.a`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.36;
  text-align: right;
  text-decoration-line: underline;
  color: rgba(245, 146, 86, 1);
  :hover {
    color: rgba(255, 97, 1, 1);
  }
`;var h,Y=new Uint8Array(16);function Z(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(Y)}const ee=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function te(e){return typeof e=="string"&&ee.test(e)}var a=[];for(var x=0;x<256;++x)a.push((x+256).toString(16).substr(1));function ie(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!te(o))throw TypeError("Stringified UUID is invalid");return o}function ne(e,t,o){e=e||{};var r=e.random||(e.rng||Z)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){o=o||0;for(var d=0;d<16;++d)t[o+d]=r[d];return t}return ie(r)}const oe=({news:e})=>{const{title:t,url:o,description:r,date:d}=e,p=ne(),c=r.slice(0,195),m=r.slice(195);return s(A,{children:[s("div",{children:[n(H,{}),n(O,{children:t||"no title"})]}),n(_,{children:n(q,{children:s(Q,{children:[n(G,{type:"checkbox",id:p}),c||"no description",n(v,{children:" ..."}),n(k,{children:m}),n($,{htmlFor:p})]})})}),s(X,{children:[n(J,{children:d||""}),n(K,{href:o,target:"_blank",children:"Read more"})]})]})},pe=()=>{var m;const[e,t]=w(),o=e.get("page"),r=e.get("text");g(L);const d=z(),p=g(B);g(I);const c=l=>{d(f(l))};return b.useEffect(()=>{d(r?f(r):C(o))},[o,r,d]),console.log(p),s(P,{children:[n(u,{children:"News"}),n(y,{submitForm:c}),p?s(W,{children:[n(V,{children:(m=p==null?void 0:p.news)==null?void 0:m.map(l=>n(U,{children:n(oe,{news:l})},l==null?void 0:l._id))}),n(F,{})]}):n("div",{children:n(u,{children:"Nothing found. Please, try again"})})]})};export{pe as default};