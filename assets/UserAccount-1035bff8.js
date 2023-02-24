import{s as i,e as I,r,j as t,a,h as D,i as R,d as B,A as W,F,k as H,l as T}from"./index-62ebc714.js";import{c as V,a as y,b as M,F as O,d as P,e as Z,E as G}from"./index.esm-a464b557.js";import{G as q}from"./iconBase-b070a195.js";import{H as N,a as _}from"./index.esm-48eb2988.js";const K=i.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 61px;
  padding-bottom: 80px;
  @media ${e=>e.theme.media.mobileMin} {
    width: 320px;
  }
  @media ${e=>e.theme.media.tablet} {
    width: 768px;
    padding-left: ${e=>e.theme.space[0]};
    padding-right: ${e=>e.theme.space[5]};
    padding-top: 88px;
    padding-bottom: 100px;
  }

  @media ${e=>e.theme.media.desktop} {
    display: flex;
    padding-left: ${e=>e.theme.space[0]};
    padding-right: ${e=>e.theme.space[4]};
    padding-top: 58px;
    padding-bottom: 40px;
    width: 1280px;
  }
`,J=i.section`
  position: relative;
  height: fit-content;
  margin-bottom: 40px;
  @media ${e=>e.theme.media.tablet} {
    position: relative;
    margin-bottom: 20px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-right: ${e=>e.theme.space[5]};
    margin-bottom: ${e=>e.theme.space[0]};
  }
`,Q=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  margin-left: ${e=>e.theme.space[5]}px;
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: 40px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-left: ${e=>e.theme.space[4]}px;
    margin-bottom: 24px;
  }
`,X=i.h2`
  color: ${e=>e.theme.colors.mainText};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xm};
  line-height: ${e=>e.theme.lineHeights.body};
  font-family: ${e=>e.theme.fonts.main};
  letter-spacing: 0.04em;
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.l};
  }
  @media ${e=>e.theme.media.desktop} {
    font-size: ${e=>e.theme.fontSizes.l};
  }
`,E=V().shape({name:y().required("Required").min(2,"Username must be at least 2 characters").max(30,"Username must be less than 30 characters").matches(/^[a-zA-Zа-щА-ЩЬьЮюЯяІіЇїЄєҐґ\s]+$/,"Username can only contain letters and spaces"),email:y().required("Required").matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email"),mobile:y().matches(/^[+](380)[0-9]{9}$/,"Invalid phone number").required("Required"),city:y().required("Required").max(30,"City name must be less than 30 characters").matches(/^(([a-zA-Zа-яА-Я`'іІїЇ]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я`'іІїЇ](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,"Example: Lviv, Karpaty"),birthday:M().required("Required")});function Y(e){return q({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}}]})(e)}function ee(e){return q({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"}}]})(e)}const L=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.space[0]};
  width: 20px;
  height: 20px;
  border-radius: ${e=>e.theme.radii.round};
  border: none;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  :hover,
  :focus {
    color: ${e=>e.theme.colors.active};
  }
  @media ${e=>e.theme.media.tablet} {
    width: ${e=>e.theme.space[5]}px;
    height: ${e=>e.theme.space[5]}px;
  }
  :disabled {
    color: grey;
  }
`,te=i(Y)`
  width: 13px;
  height: 13px;
  fill: currentColor;
  @media ${e=>e.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`,ie=i(ee)`
  width: 10px;
  height: 8px;
  fill: currentColor;
  @media ${e=>e.theme.media.tablet} {
    width: 17px;
    height: 13px;
  }
`,ae=i.input`
  width: 159px;
  height: 24px;
  padding: 4px 18px;
  background-color: ${e=>e.disabled?e.theme.colors.white:e.theme.colors.background};
  border: ${e=>e.disabled?"none":e.theme.borders.normal};
  border-color: ${e=>e.theme.colors.active};
  color: ${e=>e.theme.colors.mainText};
  border-radius: ${e=>e.theme.radii.large};
  font-size: ${e=>e.theme.fontSizes.xxs};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-family: ${e=>e.theme.fonts.main};
  line-height: ${e=>e.theme.lineHeights.body};
  :focus {
    outline-color: ${e=>e.theme.colors.active};
  }
  @media ${e=>e.theme.media.tablet} {
    width: 216px;

    height: ${e=>e.theme.space[5]}px;
    padding: 4px 12px;
    font-size: ${e=>e.theme.fontSizes.xxm};
  }
`,oe=i(O)`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;

  column-gap: 5px;
  @media ${e=>e.theme.media.tablet} {
    column-gap: 24px;
  }
`,ne=i.div`
  position: absolute;
  color: red;
  font-size: 9px;
  margin-left: 15px;
`,re=i.div``,u=({isBtnDisabled:e,setIsBtnDisabled:d,name:o,type:w,defaultValue:p})=>{const z=I(),[b,g]=r.useState(!1),[x,U]=r.useState(p??""),[k,f]=r.useState(!1),s=n=>{U(n.target.value),f(E.fields[o].isValidSync(n.target.value))},m=()=>{f(!0),g(!0),d(!0)},C=()=>{if(d(!0),x===p){f(!1),g(!1),d(!1);return}const n={[o]:x};z(D(n)),g(!1),d(!1)};return t(P,{initialValues:{[o]:p??""},validationSchema:E,children:n=>a(oe,{children:[a(re,{children:[t(Z,{as:ae,name:o,type:w,value:n.values[o],disabled:!b,onChange:l=>{s(l),n.handleChange(l)}}),t(G,{component:ne,name:o})]}),b?t(L,{type:"submit",disabled:!k,onClick:C,children:t(ie,{})}):t(L,{type:"button",onClick:m,disabled:e,children:t(te,{})})]})})},se=e=>e.user.userData,me=e=>e.user.isLoading,de=i.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 537px;
  padding: 20px 12px 20px 16px;
  border-radius: ${e=>e.theme.radii.large};
  box-shadow: 7px 4px 14px ${e=>e.theme.colors.shadow};
  background-color: ${e=>e.theme.colors.white};
  @media ${e=>e.theme.media.tablet} {
    position: relative;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    height: 311px;
    padding: 24px 40px 24px 32px;
    border-radius: 0 40px 40px 0;
  }
  @media ${e=>e.theme.media.desktop} {
    flex-direction: column;
    justify-content: inherit;
    width: 411px;
    min-height: 541px;
    padding: 20px 16px 18px 16px;
  }
`,le=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${e=>e.theme.space[5]}px;
  align-items: center;
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: ${e=>e.theme.space[0]}px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-bottom: 36px;
  }
`,j=i.img`
  width: 233px;
  height: 233px;
  border-radius: ${e=>e.theme.radii.round};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`,he=i.button`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-size: ${e=>e.theme.fontSizes.xxs};
  font-family: ${e=>e.theme.fonts.main};
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover svg,
  :focus svg {
    fill: ${e=>e.theme.colors.active};
  }
  @media ${e=>e.theme.media.tablet} {
    position: absolute;
    bottom: ${e=>e.theme.space[0]};
    right: ${e=>e.theme.space[0]};
    margin: ${e=>e.theme.space[0]};
  }
`,ce=i.div`
  & input {
    position: absolute;
    width: ${e=>e.theme.space[0]};
    height: ${e=>e.theme.space[0]};
    z-index: -1;
    opacity: 0;
  }
`,pe=i(N)`
  width: 20px;
  height: 20px;
  margin-right: ${e=>e.theme.space[2]}px;
  margin-bottom: -5px;
  cursor: pointer;
  fill: ${e=>e.theme.colors.accent};
`,ge=i.label`
  cursor: pointer;
`,xe=i.div`
  margin-bottom: 60px;
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: ${e=>e.theme.space[0]};
    margin-right: 52px;
    margin-top: ${e=>e.theme.space[4]}px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin-top: ${e=>e.theme.space[0]};
    margin-right: ${e=>e.theme.space[0]};
    ${""}
  }
`,h=i.div`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;

  column-gap: 5px;
  @media ${e=>e.theme.media.tablet} {
    column-gap: 24px;
  }
`,fe=i.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: space-between;
`,c=i.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${e=>e.theme.space[3]}px;
  }
  &:not(:last-child) {
    @media ${e=>e.theme.media.desktop} {
      margin-bottom: ${e=>e.theme.space[3]}px;
    }
  }
`,$=i.label`
  width: 56px;
  font-size: ${e=>e.theme.fontSizes.xxs};
  margin-right: ${e=>e.theme.space[3]}px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-family: ${e=>e.theme.fonts.main};
  font-family: ${e=>e.theme.lineHeights.body};
  @media ${e=>e.theme.media.tablet} {
    width: 83px;
    font-family: ${e=>e.theme.lineHeights.body};
    font-size: ${e=>e.theme.fontSizes.xxm};
    margin-right: 24px;
  }
`;i.p`
  margin-left: 18px;
  font-size: ${e=>e.theme.fontSizes.xxm};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-family: ${e=>e.theme.fonts.main};
  @media ${e=>e.theme.media.tablet} {
    margin-left: 12px;
    font-size: ${e=>e.theme.fontSizes.xxm};
  }
`;i.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  font-size: 10px;
  color: red;
  font-weight: ${e=>e.theme.fontWeights.bold};
  font-style: italic;
  bottom: -12px;
  z-index: ${e=>e.theme.space[1]};
`;const ue=()=>{const e=I();r.useEffect(()=>{e(R())},[e]);const d=B(se),{name:o,email:w,mobile:p,birthday:z,city:b,avatarURL:g}=d,[x,U]=r.useState(),[k,f]=r.useState(""),[s,m]=r.useState(!1),C=B(me);return r.useEffect(()=>{f(g)}),t(de,{children:C?t(W,{}):a(F,{children:[a(le,{children:[x?t(j,{id:"img_container",src:x,alt:"avatar"}):t(j,{id:"img_container",src:k,alt:"avatar"}),a(he,{children:[t(ce,{children:t("form",{children:t("input",{name:"userAvatar",type:"file",id:"userAvatar",accept:"image/jpg, image/png, image/jpeg, image/bmp",onChange:l=>{const S=new FileReader;l.target.files[0]&&(S.readAsDataURL(l.target.files[0]),S.onloadend=()=>{const v=S.result;if(v.includes("image/png")||v.includes("image/jpg")||v.includes("image/jpeg")){U(v);const A=new FormData;A.append("image",l.target.files[0]),e(H(A))}})}})})}),a(ge,{htmlFor:"userAvatar",children:[t(pe,{}),"Edit photo"]})]})]}),t(xe,{children:t(c,{children:t(h,{children:a(fe,{children:[a(c,{children:[t($,{children:"Name:"}),t(h,{children:t(u,{isBtnDisabled:s,setIsBtnDisabled:m,defaultValue:o,name:"name",type:"text"})})]}),a(c,{children:[t($,{children:"Email:"}),t(h,{children:t(u,{isBtnDisabled:s,setIsBtnDisabled:m,defaultValue:w,name:"email",type:"email"})})]}),a(c,{children:[t($,{children:"Birthday:"}),t(h,{children:t(u,{isBtnDisabled:s,setIsBtnDisabled:m,defaultValue:z,name:"birthday",type:"date",min:"1940-01-01"})})]}),a(c,{children:[t($,{children:"Phone:"}),t(h,{children:t(u,{isBtnDisabled:s,setIsBtnDisabled:m,defaultValue:p,name:"mobile",type:"tel"})})]}),a(c,{children:[t($,{children:"City:"}),t(h,{children:t(u,{isBtnDisabled:s,setIsBtnDisabled:m,defaultValue:b,name:"city",type:"text"})})]})]})})})})]})})},$e=()=>a(F,{children:[t(Q,{children:t(X,{children:"My information:"})}),t(ue,{})]}),be=i.button`
  position: absolute;
  right: 12px;
  bottom: 20px;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: rgba(17, 17, 17, 0.6);
  font-family: ${e=>e.theme.fonts.main};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  line-height: ${e=>e.theme.lineHeights.body};
  cursor: pointer;
  :hover svg,
  :focus svg,
  :hover {
    fill: ${e=>e.theme.colors.active};
    color: rgba(17, 17, 17, 1);
  }
  @media ${e=>e.theme.media.tablet} {
    left: ${e=>e.theme.space[5]}px;
    bottom: 24px;
    height: 22px;
    margin: ${e=>e.theme.space[0]};
    padding: ${e=>e.theme.space[0]};
  }
  @media ${e=>e.theme.media.desktop} {
    left: 17px;
    bottom: 20px;
  }
`,ve=i(_)`
  width: 20px;
  height: 20px;
  margin-right: ${e=>e.theme.space[3]}px;
  color: ${e=>e.theme.colors.accent};
`,ye=()=>{const e=I();return a(be,{type:"button",onClick:()=>e(T()),children:[t(ve,{}),"Log Out"]})},Ce=()=>t(K,{children:a(J,{children:[t($e,{}),t(ye,{})]})});export{Ce as default};
