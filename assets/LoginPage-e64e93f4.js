import{s as a,T as x,U as u,r,e as b,a as i,F as l,j as t,y as w,V as f}from"./index-2bb7042e.js";import{e as $,d as k,c as P,a as n,V as v,F as y}from"./index.esm-0295e115.js";import{l as L,i as F,F as s,P as z,e as S,B,f as C}from"./AuthForm-60a22dbe.js";import{I as E}from"./iconBase-aa6ca338.js";const I=a.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${x});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media ${e=>e.theme.media.tablet} {
    background-image: url(${L});
    background-position: center bottom -180px;
    position: relative;
  }
`,V=a($)`
  width: 280px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;

  @media ${e=>e.theme.media.tablet} and (max-width: 1280px) {
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
`,D=a.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 24px;

  color: ${e=>e.theme.colors.mainText};
  @media ${e=>e.theme.media.tablet} and (max-width: 1280px) {
    margin-top: 60px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-top: 60px;
  }
`,M=a.p`
  margin-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
  @media ${e=>e.theme.media.tablet} and (max-width: 1280px) {
    margin-bottom: 60px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-bottom: 60px;
  }
`,T=a(u)`
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
`,d=a(k)`
  width: 266px;
  height: 40px;
  left: 20px;
  top: 173px;

  background: ${e=>e.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${e=>e.theme.radii.large};
  padding-left: 14px;
  margin-top: 16px;
  ::placeholder {
    font-style: normal;
    font-weight: ${e=>e.theme.fontWeights.semiBold};
    font-size: ${e=>e.theme.fontSizes.xs};
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1280px) {
    width: 448px;
    height: 52px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 458px;
    height: 52px;
  }
`,_=a.button`
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
`,j=P().shape({email:n().max(63,"Must be between 6 and 63 characters.").min(6,"Must be between 6 and 63 characters.").email("Invalid email address").matches(/[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/,"The @ symbol must be preceded by at least 2 characters").required("Email is required").test("is-valid",e=>`${e.path} is invalid`,e=>e?F(e):new v("Invalid value")),password:n().min(7,"Must be between 7 and 32 characters.").max(32,"Must be between 7 and 32 characters.").matches(/^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$/,"Must include numbers and/or letters (uppercase and lowercase) except for whitespace.").required("Password is required")}),q={email:"",password:""},O=()=>{const[e,A]=r.useState(q),[o,m]=r.useState(!1),p=b(),c=g=>{p(f(g))},h=()=>{m(!o)};return i(l,{children:[t(y,{initialValues:e,validationSchema:j,onSubmit:c,children:()=>t(I,{children:i(V,{children:[t(D,{children:"Login"}),t(d,{placeholder:"Email",name:"email"}),t(s,{name:"email"}),i(z,{children:[t(d,{placeholder:"Password",name:"password",type:o?"text":"password"}),t(S,{onClick:h,children:t(E.Provider,{value:{color:"rgba(245, 146, 86, 1)",size:35},children:o?t(B,{}):t(C,{})})})]}),t(s,{name:"password"}),t(_,{type:"submit",children:"Login"}),i(M,{children:["Don't have an account?",t(T,{to:"/register",children:"Register"})]})]})})}),t(w,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})},R=()=>t(l,{children:t(O,{})});export{R as default};