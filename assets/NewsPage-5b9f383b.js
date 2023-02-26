import{s as i,p as z,r as b,u as y,j as n,a as p,d as g,e as C,g as u,f as j,O as F}from"./index-4b08e76f.js";import{G as D}from"./iconBase-07fe5fb3.js";function E(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}}]})(e)}const I=i.div`
  top: 0;
  left: 0;
  /* position: sticky; */
  /* z-index: 100; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(253, 247, 242, 1);
`,M=i.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 280px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  overflow: hidden;
 
`,N=i.button`
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

`,R=i.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
`,T=i.input`
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

`,B=i(E)`
  width: 20px;
  height: 20px;
  margin: auto;
`,w=({submitForm:e})=>{const[t,o]=b.useState(""),[,r]=y();return n(I,{children:p(M,{onSubmit:c=>{c.preventDefault(),r({text:t}),o("")},children:[n(T,{onChange:c=>{o(c.target.value)},name:"name",type:"text",autocomplete:"off",placeholder:"Search",value:t}),p(N,{type:"submit",children:[n(R,{children:"Search"}),n(B,{})]})]})})};w.propTypes={submitForm:z.func};const L=e=>{var t;return(t=e.news.news)==null?void 0:t.data},P=e=>{var t,o;return(o=(t=e.news.news)==null?void 0:t.data)==null?void 0:o.totalPages},V=e=>e.news.isLoading,A=i.div`
  background-color: rgba(0, 0, 0, 0);
 @media ${e=>e.theme.media.mobileMax} {
    padding: 100px 20px 100px 20px;
  }
  @media ${e=>e.theme.media.tablet} {
    padding: 160px 32px 100px 32px;
  }
  @media ${e=>e.theme.media.desktop} {
    padding: 126px 16px 200px 16px;
  }
`,f=i.h2`
   @media ${e=>e.theme.media.mobileMax} {
    text-align: center;
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 1.36;
  }
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
  
  @media ${e=>e.theme.media.desktop} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`,G=i.ul`
  @media ${e=>e.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
  @media ${e=>e.theme.media.desktop} {
    display: flex;
    flex-wrap: wrap;
  }
`,U=i.li`
 @media ${e=>e.theme.media.mobileMax} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    &:nth-last-child() {
      margin-bottom: 0px;
    }
  }
  @media ${e=>e.theme.media.tablet} {
    width: calc((100% - 32px) / 2);
    margin-left: 32px;
    margin-bottom: 60px;
    margin-right: 0px;
    &:nth-child(2n + 1) {
      margin-left: 0px;
    }
  }
  @media ${e=>e.theme.media.desktop} {
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
  width: 280px;
  
`;i.form`
  @media ${e=>e.theme.media.mobileMax} {
    position: relative;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
    height: 40px;
  }
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
  }
`;const H=i.div`
 @media ${e=>e.theme.media.mobileMax} {  
    display: flex;
    flex-direction: column;
    ::before {
      content: " ";
      height: 4px;
      margin-bottom: 4px;
      background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
      border-radius: 40px;
      width: 200px;
    }
  }
  @media ${e=>e.theme.media.tablet} {
    ::before {
      content: " ";
      height: 8px;
      width: 280px;
    }
  }
  @media ${e=>e.theme.media.desktop} {
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
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-top: 40px;
`,_=i.h3`
@media ${e=>$.theme.media.mobileMax} {
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

    @media ${e=>e.theme.media.tablet} {
      width: calc(((100% - 32px) / 2) * 0.9);
      height: auto;
    }
    @media ${e=>e.theme.media.desktop} {
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
  @media ${e=>e.theme.media.desktop} {
    letter-spacing: -0.02em;
  }
`,q=i.div`
  display: flex;
  justify-content: space-between;
`,Q=i.div`
display: block ;
/* margin-bottom: auto; */
`,v=i.span`
  display: inline;
`,S=i.label`
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
`,X=i.input`
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
  :checked ~ ${S} {
    :before {
      content: 'Show less';
    }
  }
`,$=i.p`
  display: inline-block;
  text-align: justify;
`,J=i.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,K=i.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.36;
  color: rgba(49, 21, 4, 0.07);
`,Y=i.a`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.36;
  text-align: right;
  text-decoration-line: underline;
  color: rgba(245, 146, 86, 1);
  :hover {
    color: rgba(255, 97, 1, 1);
  }
`;var m,Z=new Uint8Array(16);function ee(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(Z)}const te=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ie(e){return typeof e=="string"&&te.test(e)}var a=[];for(var x=0;x<256;++x)a.push((x+256).toString(16).substr(1));function ne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!ie(o))throw TypeError("Stringified UUID is invalid");return o}function oe(e,t,o){e=e||{};var r=e.random||(e.rng||ee)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){o=o||0;for(var d=0;d<16;++d)t[o+d]=r[d];return t}return ne(r)}const ae=({news:e})=>{const{title:t,url:o,description:r,date:d}=e,s=oe(),c=r.slice(0,195),h=r.slice(195);return p(H,{children:[p("div",{children:[n(O,{}),n(_,{children:t||"no title"})]}),n(q,{children:n(Q,{children:p($,{children:[n(X,{type:"checkbox",id:s}),c||"no description",n(v,{children:" ..."}),n(k,{children:h}),n(S,{htmlFor:s})]})})}),p(J,{children:[n(K,{children:d||""}),n(Y,{href:o,target:"_blank",children:"Read more"})]})]})},se=()=>{var h;const[e,t]=y(),o=e.get("page"),r=e.get("text");g(V);const d=C(),s=g(L);g(P);const c=l=>{d(u(l))};return b.useEffect(()=>{d(r?u(r):j(o))},[o,r,d]),p(A,{children:[n(f,{children:"News"}),n(w,{submitForm:c}),s?p(W,{children:[n(G,{children:(h=s==null?void 0:s.news)==null?void 0:h.map(l=>n(U,{children:n(ae,{news:l})},l==null?void 0:l._id))}),n(F,{})]}):n("div",{children:n(f,{children:"Nothing found. Please, try again"})})]})};export{se as default};
