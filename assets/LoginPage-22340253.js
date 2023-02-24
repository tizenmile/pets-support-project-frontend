import{s as i,m as d,N as l,r as p,e as h,j as t,a,J as g,F as c}from"./index-38d34edb.js";import{c as x,a as o}from"./index.esm-f62311d6.js";import{F as b,b as u,a as f,E as n}from"./formik.esm-cb3f21f5.js";import{l as w}from"./login_page_bg-e3bfa072.js";const $=i.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${d});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media (${e=>e.theme.media.tablet}) {
    background-image: url(${w});
    background-position: center bottom -180px;
    position: relative;
  }
`,k=i(b)`
  width: 280px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;

  @media (${e=>e.theme.media.tablet}) and (max-width: 1280px) {
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
`,L=i.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 24px;

  color: ${e=>e.theme.colors.mainText};
  @media (${e=>e.theme.media.tablet}) and (max-width: 1280px) {
    margin-top: 60px;
  }
  @media (${e=>e.theme.media.desktop}) {
    margin-top: 60px;
  }
`,y=i.p`
  margin-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
  @media (${e=>e.theme.media.tablet}) and (max-width: 1280px) {
    margin-bottom: 60px;
  }
  @media (${e=>e.theme.media.desktop}) {
    margin-bottom: 60px;
  }
`,P=i(l)`
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
`,r=i(u)`
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
  @media (${e=>e.theme.media.tablet}) and (max-width: 1280px) {
    width: 448px;
    height: 52px;
  }
  @media (${e=>e.theme.media.desktop}) {
    width: 458px;
    height: 52px;
  }
`,v=i.button`
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
    ${e=>e.theme.colors.hover};
  }
  @media (${e=>e.theme.media.tablet}) and (max-width: 1279px) {
    width: 448px;
  }
  @media (${e=>e.theme.media.desktop}) {
    width: 458px;
  }
`,F=x().shape({email:o().max(63).min(6).email("Invalid email address").required().label("Email"),password:o().min(7).max(32).required().label("Password")}),S={email:"",password:""},z=()=>{const[e,D]=p.useState(S),m=h();return t(f,{initialValues:e,validationSchema:F,onSubmit:s=>{m(g(s))},children:()=>t($,{children:a(k,{children:[t(L,{children:"Login"}),t(r,{placeholder:"Email",name:"email"}),t(n,{name:"email"}),t(r,{placeholder:"Password",name:"password"}),t(n,{name:"password"}),t(v,{type:"submit",children:"Login"}),a(y,{children:["Don't have an account?",t(P,{to:"/register",children:"Register"})]})]})})})},V=()=>t(c,{children:t(z,{})});export{V as default};
