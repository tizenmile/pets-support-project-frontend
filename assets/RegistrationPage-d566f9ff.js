import{s as a,m as y,N as k,r as x,e as P,j as t,F as S,a as d,h as v}from"./index-bf8a4a96.js";import{F as R,e as F,c as u,a as r,d as b,E as s}from"./index.esm-e9c02e25.js";import{l as C}from"./login_page_bg-e3bfa072.js";const q=a.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${y});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media (${e=>e.theme.media.tablet}) {
    background-image: url(${C});
    background-position: center bottom -180px;
    position: relative;
  }
`,z=a.div`
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
`,f=a(R)`
display: flex;
margin-left: auto;
margin-right: auto;
flex-direction: column;
align-items: center;
`,N=a.p`
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
`,E=a.p`
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
`,M=a(k)`
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
`,m=a(F)`
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
`,h=a.button`
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
`;a.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
  letter-spacing: 0.04em;
  color: red;
`;const V=u().shape({email:r().max(63,"Must be between 6 and 63 characters.").min(6,"Must be between 6 and 63 characters.").email("Invalid email address").required().label("Email"),password:r().min(7).max(32).required().label("Password"),confirmPassword:r().min(7).max(32).required().label("Confirm password")}),j=u().shape({name:r().required().label("Name"),city:r().required().label("City, region"),mobile:r().min(13).max(13).required().label("Mobile phone")}),T={email:"",password:"",name:"",city:"",mobile:""},_=()=>{const[e,o]=x.useState(T),[i,p]=x.useState(0),w=P(),$=n=>{console.log(n),w(v(n).selected("-confirmPassword"))},g=(n,l=!1)=>{if(o(c=>({...c,...n})),l){$(n);return}p(c=>c+1)};return t(S,{children:[t(B,{next:g,data:e}),t(L,{next:g,prev:n=>{o(l=>({...l,...n})),p(l=>l-1)},data:e})][i]})},B=e=>{const o=i=>{e.next(i)};return t(b,{initialValues:e.data,validationSchema:V,onSubmit:o,children:()=>d(f,{children:[t(m,{placeholder:"Email",name:"email"}),t(s,{name:"email"}),t(m,{placeholder:"Password",name:"password"}),t(s,{name:"password"}),t(m,{placeholder:"Confirm Password",name:"confirmPassword"}),t(s,{name:"confirmPassword"}),t(h,{type:"submit",children:"Next"})]})})},L=e=>{const o=(i,p)=>{e.next(i,!0)};return t(b,{initialValues:e.data,validationSchema:j,onSubmit:o,children:({values:i})=>d(f,{children:[t(m,{placeholder:"Name",name:"name"}),t(s,{name:"name"}),t(m,{placeholder:"City, region",name:"city"}),t(s,{name:"city"}),t(m,{placeholder:"Mobile phone",name:"mobile"}),t(s,{name:"mobile"}),t(h,{type:"submit",children:"Register"}),t(h,{type:"button",onClick:()=>e.prev(i),children:"Back"})]})})},G=()=>t(q,{children:d(z,{children:[t(N,{children:"Registration"}),t(_,{}),d(E,{children:["Already have an account?",t(M,{to:"/login",children:"Login"})]})]})});export{G as default};
