import{s as n,r as b,u as y,j as i,a as c,d as u,e as k,g as m,f as z,O as C}from"./index-38d34edb.js";import{G as j}from"./iconBase-f544d020.js";function D(t){return j({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}}]})(t)}const F=n.div`
  top: 0;
  left: 0;
  /* position: sticky; */
  /* z-index: 100; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(253, 247, 242, 1);
`,I=n.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 280px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  overflow: hidden;
 
`,N=n.button`
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

`,R=n.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
`,B=n.input`
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

`,E=n(D)`
  width: 20px;
  height: 20px;
  margin: auto;
`,L=({submitForm:t})=>{const[e,o]=b.useState(""),[,a]=y();return i(F,{children:c(I,{onSubmit:p=>{p.preventDefault(),a({text:e}),o("")},children:[i(B,{onChange:p=>{o(p.target.value)},name:"name",type:"text",autocomplete:"off",placeholder:"Search",value:e}),c(N,{type:"submit",children:[i(R,{children:"Search"}),i(E,{})]})]})})},P=t=>{var e;return(e=t.news.news)==null?void 0:e.data},T=t=>{var e,o;return(o=(e=t.news.news)==null?void 0:e.data)==null?void 0:o.totalPages},V=t=>t.news.isLoading,$=n.div`
  background-color: rgba(17, 17, 17, 1);
  /* width: 320 px; */
  padding-bottom: 100px;
`,x=n.h2`
  font-size: 28px;
  line-height: 1.36;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 36px;
`,W=n.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`,A=n.li`

`,G=n.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
`;n.img`
  width: 280px;
`;const U=n.div`
  /* display: block; */
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  /*; */
`,H=n.div`

`,M=n.div`
  display: block;
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-top: 40px;
`,O=n.h3`
  margin-top: 4px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  /* text-align: justify; */
`,_=n.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.36;
  color: rgba(17, 19, 33, 1);
`,q=n.div`
  display: block;
  /* margin-bottom: auto; */
`,w=n.span`
  display: none;
  opacity: 0;
  max-height: 0;
  font-size: 0;
  transition: 0.25s ease;
`,v=n.span`
  display: inline;
`,S=n.label`
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
`,Q=n.input`
  display: none;
  :checked ~ ${w} {
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
`,X=n.p`
  display: inline-block;
  text-align: justify;
`,J=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,K=n.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.36;
  color: rgba(49, 21, 4, 0.07);
`,Y=n.a`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.36;
  text-align: right;
  text-decoration-line: underline;
  color: rgba(245, 146, 86, 1);
  :hover {
    color: rgba(255, 97, 1, 1);
  }
`;var g,Z=new Uint8Array(16);function tt(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(Z)}const et=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function nt(t){return typeof t=="string"&&et.test(t)}var r=[];for(var f=0;f<256;++f)r.push((f+256).toString(16).substr(1));function it(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]).toLowerCase();if(!nt(o))throw TypeError("Stringified UUID is invalid");return o}function ot(t,e,o){t=t||{};var a=t.random||(t.rng||tt)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,e){o=o||0;for(var s=0;s<16;++s)e[o+s]=a[s];return e}return it(a)}const rt=({news:t})=>{const{title:e,url:o,description:a,date:s}=t,d=ot(),p=a.slice(0,195),h=a.slice(195);return c(U,{children:[c(H,{children:[c("div",{children:[i(M,{}),i(O,{children:e||"no title"})]}),i(_,{children:i(q,{children:c(X,{children:[i(Q,{type:"checkbox",id:d}),p||"no description",i(v,{children:" ..."}),i(w,{children:h}),i(S,{htmlFor:d})]})})})]}),c(J,{children:[i(K,{children:s||""}),i(Y,{href:o,target:"_blank",children:"Read more"})]})]})},ct=()=>{var h;const[t,e]=y(),o=t.get("page"),a=t.get("text");u(V);const s=k(),d=u(P);u(T);const p=l=>{s(m(l))};return b.useEffect(()=>{s(a?m(a):z(o))},[o,a,s]),c($,{children:[i(x,{children:"News"}),i(L,{submitForm:p}),d?c(G,{children:[i(W,{children:(h=d==null?void 0:d.news)==null?void 0:h.map(l=>i(A,{children:i(rt,{news:l})},l==null?void 0:l._id))}),i(C,{})]}):i("div",{children:i(x,{children:"Nothing found. Please, try again"})})]})};export{ct as default};
