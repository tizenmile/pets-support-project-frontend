import{s as i,p as z,r as b,u as w,j as n,a as c,d as g,e as C,g as f,f as M,O as j}from"./index-5b802fe3.js";import{B as F}from"./index.esm-7f91d557.js";import"./iconBase-61a010ec.js";const D=i.div`
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
  margin-bottom: 60px;
  margin-top: 40px;
  overflow: hidden;
  @media (${e=>e.theme.media.mobileMax}) {
    width: 280px;
   }
`,I=i.button`
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
    font-family: "Inter"
    font-style: medium;
    /* font: inherit; */
    font-size: 20px;
    align-items: left;
    line-height: 24px;
    letter-spacing: 4%;
    color: rgba(83, 83, 83, 1);
  }
`,T=i(F)`
  width: 20px;
  height: 20px;
  margin: auto;
`,y=({submitForm:e})=>{const[t,o]=b.useState(""),[,r]=w();return n(D,{children:c(E,{onSubmit:m=>{m.preventDefault(),r({text:t}),o("")},children:[n(R,{onChange:m=>{o(m.target.value)},name:"name",type:"text",autocomplete:"off",placeholder:"Search",value:t}),c(I,{type:"submit",children:[n(N,{children:"Search"}),n(T,{})]})]})})};y.propTypes={submitForm:z.func};const B=e=>e.news.news[0],L=e=>{var t,o;return(o=(t=e.news.news)==null?void 0:t.data)==null?void 0:o.totalPages},P=e=>e.news.isLoading,V=i.div`
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
`,U=i.ul`
  @media (${e=>e.theme.media.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (${e=>e.theme.media.desktop}) {
    display: flex;
    flex-wrap: wrap;
  }
`,W=i.li`
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
`,A=i.div`
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
`;i.div`
@media (${e=>e.theme.media.desktop}) {
  width: 395px;
  height: 254px;
}
`;const H=i.div`
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
`,O=i.div`
  display: block;
  /* width: 200px; */
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-top: 40px;
  margin-bottom: 4px;
`,_=i.h3`
@media (${e=>e.theme.media.mobileMax}) {
  margin-top: 0px;
  padding-bottom: 16px;
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
    letter-spacing: -0.01em;
  }
`,q=i.div`
  display: flex;
  justify-content: space-between;
`,G=i.div`
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
`,Q=i.input`
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
`,X=i.p`
  height: 110px;
  margin-top: 16px;
  overflow-y: hidden;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgb(17, 19, 33);
`,J=i.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,K=i.div`
  font-family: "Manrope";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.36;
  color: rgba(17, 17, 17, 0.6);
`,Y=i.a`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.36;
  text-align: right;
  text-decoration-line: underline;
  color: rgba(245, 146, 86, 1);
  :hover {
    color: rgba(255, 97, 1, 1);
  }
`;var h,Z=new Uint8Array(16);function ee(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(Z)}const te=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ie(e){return typeof e=="string"&&te.test(e)}var a=[];for(var x=0;x<256;++x)a.push((x+256).toString(16).substr(1));function ne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!ie(o))throw TypeError("Stringified UUID is invalid");return o}function oe(e,t,o){e=e||{};var r=e.random||(e.rng||ee)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){o=o||0;for(var d=0;d<16;++d)t[o+d]=r[d];return t}return ne(r)}const ae=({news:e})=>{const{title:t,url:o,description:r,date:d}=e,p=oe(),m=r.slice(0,195),l=r.slice(195),s=d==null?void 0:d.split("-").reverse().join("/"),S=(t==null?void 0:t.length)<45?t:(t==null?void 0:t.slice(0,45))+"...";return c(H,{children:[c("div",{children:[n(O,{}),n(_,{children:S})]}),n(q,{children:n(G,{children:c(X,{children:[n(Q,{type:"checkbox",id:p}),m||"no description",n(v,{children:" ..."}),n(k,{children:l}),n($,{htmlFor:p})]})})}),c(J,{children:[n(K,{children:s}),n(Y,{href:o,target:"_blank",children:"Read more"})]})]})},se=()=>{var l;const[e,t]=w(),o=e.get("page"),r=e.get("text");g(P);const d=C(),p=g(B);g(L);const m=s=>{d(f(s))};return b.useEffect(()=>{d(r?f(r):M(o))},[o,r,d]),console.log(p),c(V,{children:[n(u,{children:"News"}),n(y,{submitForm:m}),p?c(A,{children:[n(U,{children:(l=p==null?void 0:p.news)==null?void 0:l.map(s=>n(W,{children:n(ae,{news:s})},s==null?void 0:s._id))}),n(j,{})]}):n("div",{children:n(u,{children:"Nothing found. Please, try again"})})]})};export{se as default};
