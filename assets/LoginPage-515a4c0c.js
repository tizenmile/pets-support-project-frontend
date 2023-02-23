import{s as i,m as d,N as s,r as l,e as p,j as t,a,A as h,F as g}from"./index-05d3539e.js";import{F as c,e as x,c as b,a as o,d as u}from"./index.esm-5a109601.js";import{l as f}from"./login_page_bg-e3bfa072.js";const w=i.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${d});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media (${e=>e.theme.media.tablet}) {
    background-image: url(${f});
    background-position: center bottom -180px;
    position: relative;
  }
`,$=i(c)`
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
`,k=i.p`
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
`,L=i.p`
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
`,y=i(s)`
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
`,n=i(x)`
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
`,P=i.button`
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
`,v=b().shape({email:o().max(63).min(6).email("Invalid email address").required().label("Email"),password:o().min(7).max(32).required().label("Password")}),F={email:"",password:""},S=()=>{const[e,z]=l.useState(F),r=p();return t(u,{initialValues:e,validationSchema:v,onSubmit:m=>{r(h(m))},children:()=>t(w,{children:a($,{children:[t(k,{children:"Login"}),t(n,{placeholder:"Email",name:"email"}),t(n,{placeholder:"Password",name:"password"}),t(P,{type:"submit",children:"Login"}),a(L,{children:["Don't have an account?",t(y,{children:"Register"})]})]})})})},E=()=>t(g,{children:t(S,{})});export{E as default};
