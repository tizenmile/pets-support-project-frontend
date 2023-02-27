import{s as a,U as m,V as l,r as c,e as p,j as t,a as i,W as h,F as g}from"./index-219a0c1a.js";import{e as x,d as u,c as b,a as o,V as f,F as w}from"./index.esm-db41679a.js";import{l as $,i as k,F as n}from"./AuthForm-fa7ba341.js";const y=a.div`
  height: 88vh;
  background-image: url(${m});
  background-position: center bottom -200px;
  background-repeat: no-repeat;
  overscroll-behavior: none;
  touch-action: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${e=>e.theme.media.tablet}) {
    background-image: url(${$});
    background-position: center bottom;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } ;
`,v=a(x)`
  width: 280px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${e=>e.theme.media.tablet}) and (max-width: 1280px) {
    width: 608px;
    /* margin-top: 180px; */
    background-color: ${e=>e.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    display: flex;
    justify-content: center;  
  }
  @media (${e=>e.theme.media.desktop}) {
    width: 618px;
    margin-top: 60px;
    background-color: ${e=>e.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
`,L=a.p`
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
`,z=a.p`
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
`,F=a(l)`
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
`,r=a(u)`
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
`,P=a.button`
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
`,S=b().shape({email:o().max(63,"Must be between 6 and 63 characters.").min(6,"Must be between 6 and 63 characters.").email("Invalid email address").matches(/[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/,"The @ symbol must be preceded by at least 2 characters").required("Email is required").test("is-valid",e=>`${e.path} is invalid`,e=>e?k(e):new f("Invalid value")),password:o().min(7,"Must be between 7 and 32 characters.").max(32,"Must be between 7 and 32 characters.").matches(/^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$/,"Must include numbers and/or letters (uppercase and lowercase) except for whitespace.").required("Password is required")}),j={email:"",password:""},E=()=>{const[e,V]=c.useState(j),s=p();return t(w,{initialValues:e,validationSchema:S,onSubmit:d=>{s(h(d))},children:()=>t(y,{children:i(v,{children:[t(L,{children:"Login"}),t(r,{placeholder:"Email",name:"email"}),t(n,{name:"email"}),t(r,{placeholder:"Password",type:"password",name:"password"}),t(n,{name:"password"}),t(P,{type:"submit",children:"Login"}),i(z,{children:["Don't have an account?",t(F,{to:"/register",children:"Register"})]})]})})})},I=()=>t(g,{children:t(E,{})});export{I as default};
