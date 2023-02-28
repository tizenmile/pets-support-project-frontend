import{s as i,p as z,r as u,u as w,a as n,j as m,d as x,e as M,g as f,f as C,O as T}from"./index-c330c28d.js";import{T as j}from"./index.esm-7dc4c5ec.js";import"./iconBase-c12015c5.js";const F=i.div`
  top: 0;
  left: 0;
  /* position: sticky; */
  /* z-index: 100; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(253, 247, 242, 1);
`,D=i.form`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media ${e=>e.theme.media.mobileMax} {
    max-width: 280px;
    height: 40px;
    margin-bottom: 28px;
    font-size: ${e=>e.theme.fontSizes.s};
  }
  @media ${e=>e.theme.media.tablet} {
    width: 608px;
    height: 44px;
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.xm};
  }
`,E=i.button`
  padding: 0px 0px;
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
  outline: none;
  width: 100%;
  height: 100%;
  font-family: ${e=>e.theme.fonts.main};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  color: ${e=>e.theme.colors.searchText};
  border-radius: 40px;
  border: solid 2px #fff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  &:hover,
  &:focus,
  &:active {
    border: solid 2px ${e=>e.theme.colors.accent};
  }

  @media ${e=>e.theme.media.mobileMax} {
    padding-left: 12px;
  }
  @media ${e=>e.theme.media.tablet} {
    padding-left: 20px;
  }
`,I=i(j)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  color: black;
  &:hover {
    color: ${e=>e.theme.colors.accent};
    scale: 1.15;
  }

  @media ${e=>e.theme.media.mobileMax} {
    width: 17px;
    height: 17px;
  }
  @media ${e=>e.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`,y=({submitForm:e})=>{const[t,o]=u.useState(""),[,r]=w();return n(F,{children:m(D,{onSubmit:h=>{h.preventDefault(),r({text:t}),o("")},children:[n(R,{onChange:h=>{o(h.target.value)},name:"name",type:"text",autocomplete:"off",placeholder:"Search",value:t}),m(E,{type:"submit",children:[n(N,{children:"Search"}),n(I,{})]})]})})};y.propTypes={submitForm:z.func};const L=e=>e.news.news[0],P=e=>{var t,o;return(o=(t=e.news.news)==null?void 0:t.data)==null?void 0:o.totalPages},B=e=>e.news.isLoading,V=i.div`
  background-color: rgba(253, 247, 242, 1);
  @media ${e=>e.theme.media.mobileMax} {
    padding: 45px 20px 100px 20px;
  }
  @media ${e=>e.theme.media.tablet} {
    padding: 90px 32px 100px 32px;
  }
  @media ${e=>e.theme.media.desktop} {
    padding: 49px 16px 200px 16px;
  }
`,b=i.h2`
  @media ${e=>e.theme.media.mobileMax} {
    text-align: center;
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.36;
  }
  @media ${e=>e.theme.media.tablet} {
    text-align: center;
    margin-bottom: 8px;
    font-size: 48px;
    line-height: 66px;
  }

  @media ${e=>e.theme.media.desktop} {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`,W=i.ul`
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
`,H=i.div`
  margin-left: auto;
  margin-right: auto;
  @media ${e=>e.theme.media.mobileMax} {
    width: 280px;
  }
  @media ${e=>e.theme.media.tablet} {
    width: 700px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 1200px;
  }
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
`;i.div`
  @media ${e=>e.theme.media.desktop} {
    width: 395px;
    height: 254px;
  }
`;const O=i.div`
  @media (${e=>e.theme.media.mobileMax}) {
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
  @media (${e=>e.theme.media.desktop}) {
    ::before {
      content: " ";
      width: 340px;
    }
  }
`,$=i.span`
  display: inline-block;
  text-align: justify;
`,_=i.div`
  display: block;
  /* width: 200px; */
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 4px;
`,q=i.h3`
  @media ${e=>e.theme.media.mobileMax} {
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
    letter-spacing: -0.01em;
  }
`,A=i.div`
  display: flex;
  justify-content: space-between;
`,G=i.div`
  display: block;
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
    content: "Show more";
  }
`,Q=i.input`
  display: none;
  :checked ~ ${$} {
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
      content: "Show less";
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
`,Y=i.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,J=i.div`
  font-family: "Manrope";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.36;
  color: rgba(17, 17, 17, 0.6);
`,K=i.a`
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
`;var l,Z=new Uint8Array(16);function ee(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(Z)}const te=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ie(e){return typeof e=="string"&&te.test(e)}var a=[];for(var g=0;g<256;++g)a.push((g+256).toString(16).substr(1));function ne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!ie(o))throw TypeError("Stringified UUID is invalid");return o}function oe(e,t,o){e=e||{};var r=e.random||(e.rng||ee)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){o=o||0;for(var d=0;d<16;++d)t[o+d]=r[d];return t}return ne(r)}const ae=({news:e})=>{const{title:t,url:o,description:r,date:d}=e,s=oe(),h=r.slice(0,195),c=r.slice(195),p=d==null?void 0:d.split("-").reverse().join("/"),k=(t==null?void 0:t.length)<45?t:(t==null?void 0:t.slice(0,45))+"...";return m(O,{children:[m("div",{children:[n(_,{}),n(q,{children:k})]}),n(A,{children:n(G,{children:m(X,{children:[n(Q,{type:"checkbox",id:s}),h||"no description",n(v,{children:" ..."}),n($,{children:c}),n(S,{htmlFor:s})]})})}),m(Y,{children:[n(J,{children:p}),n(K,{href:o,target:"_blank",children:"Read more"})]})]})},pe=()=>{var c;const[e,t]=w(),o=e.get("page"),r=e.get("text");x(B);const d=M(),s=x(L);x(P);const h=p=>{d(f(p))};return u.useEffect(()=>{d(r?f(r):C(o))},[o,r,d]),console.log(s),m(V,{children:[n(b,{children:"News"}),n(y,{submitForm:h}),s?m(H,{children:[n(W,{children:(c=s==null?void 0:s.news)==null?void 0:c.map(p=>n(U,{children:n(ae,{news:p})},p==null?void 0:p._id))}),n(T,{})]}):n("div",{children:n(b,{children:"Nothing found. Please, try again"})})]})};export{pe as default};
