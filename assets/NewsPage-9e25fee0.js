import{s as p,r as z,j as v,a as s,u as L,d as N,g as R,A as _,F as q}from"./index-d83db772.js";import{B as D}from"./index.esm-9a7644dd.js";import{G as P}from"./iconBase-060ece6c.js";import{T as I}from"./index.esm-2113a3ec.js";var k="NOT_FOUND";function M(e){var r;return{get:function(t){return r&&e(r.key,t)?r.value:k},put:function(t,o){r={key:t,value:o}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}}function W(e,r){var n=[];function t(i){var c=n.findIndex(function(a){return r(i,a.key)});if(c>-1){var u=n[c];return c>0&&(n.splice(c,1),n.unshift(u)),u.value}return k}function o(i,c){t(i)===k&&(n.unshift({key:i,value:c}),n.length>e&&n.pop())}function l(){return n}function h(){n=[]}return{get:t,put:o,getEntries:l,clear:h}}var V=function(r,n){return r===n};function G(e){return function(n,t){if(n===null||t===null||n.length!==t.length)return!1;for(var o=n.length,l=0;l<o;l++)if(!e(n[l],t[l]))return!1;return!0}}function U(e,r){var n=typeof r=="object"?r:{equalityCheck:r},t=n.equalityCheck,o=t===void 0?V:t,l=n.maxSize,h=l===void 0?1:l,i=n.resultEqualityCheck,c=G(o),u=h===1?M(c):W(h,c);function a(){var d=u.get(arguments);if(d===k){if(d=e.apply(null,arguments),i){var m=u.getEntries(),f=m.find(function(w){return i(w.value,d)});f&&(d=f.value)}u.put(arguments,d)}return d}return a.clearCache=function(){return u.clear()},a}function Y(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every(function(t){return typeof t=="function"})){var n=r.map(function(t){return typeof t=="function"?"function "+(t.name||"unnamed")+"()":typeof t}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return r}function H(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];var o=function(){for(var h=arguments.length,i=new Array(h),c=0;c<h;c++)i[c]=arguments[c];var u=0,a,d={memoizeOptions:void 0},m=i.pop();if(typeof m=="object"&&(d=m,m=i.pop()),typeof m!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof m+"]");var f=d,w=f.memoizeOptions,y=w===void 0?n:w,E=Array.isArray(y)?y:[y],b=Y(i),S=e.apply(void 0,[function(){return u++,m.apply(null,arguments)}].concat(E)),C=e(function(){for(var T=[],O=b.length,x=0;x<O;x++)T.push(b[x].apply(null,arguments));return a=S.apply(null,T),a});return Object.assign(C,{resultFunc:m,memoizedResultFunc:S,dependencies:b,lastResult:function(){return a},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),C};return o}var K=H(U);const J=e=>e.news.items,Q=K([J],e=>{if(e&&e.length>0)return[...e].map(n=>({...n,changeDate:Date.parse(n.date)||0})).sort((n,t)=>t.changeDate-n.changeDate)}),X=e=>e.news.isLoading,Z=e=>e.news.error;function ee(e){return P({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z",opacity:".87"}},{tag:"path",attr:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}}]})(e)}const te=p.form`
  position: relative;
  margin-top: 28px;
  text-align: center;
  outline: 0ch;

  @media ${e=>e.theme.media.tablet} {
    margin-top: 40px;
  }
`,ne=p.input`
  width: 100%;
  padding: 9px 44px 9px 12px;
  color: ${e=>e.theme.colors.black};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-family: ${e=>e.theme.fonts.searchNewsText};
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  border-radius: ${e=>e.theme.radii.normal};
  border: ${e=>e.theme.borders.normal} transparent;
  outline: none;
  box-shadow: 7px 4px 14px ${e=>e.theme.colors.shadow};

  &::placeholder {
    color: ${e=>e.theme.colors.searchText};
  }

  &:focus {
    border: 2px solid ${e=>e.theme.colors.accent};
  }
  @media ${e=>e.theme.media.tablet} {
    width: 608px;
    padding: 8px 56px 9px 20px;
    font-size: ${e=>e.theme.fontSizes.xm};
    line-height: calc(27 / 20);
  }
`,A=p.div`
  position: absolute;
  right: 12px;
  bottom: 10px;
  display: flex;

  background-color: transparent;
  padding: 0;
  margin: 0;

  cursor: text;
  pointer-events: none;

  svg {
    width: 24px;
    height: 24px;
    color: ${e=>e.theme.colors.black};

    @media ${e=>e.theme.media.tablet} {
      width: 24px;
      height: 24px;
    }
  }

  @media ${e=>e.theme.media.tablet} {
    font-size: 18px;
    right: calc(50% - 290.5px);
  }

  animation-name: sunrise;
  animation-duration: 0.15s;
  animation-timing-function: linear;
  animation-iteration-count: 1;

  @keyframes sunrise {
    0% {
      transform: translateY(12px);
    }

    100% {
      transform: translateY(0);
    }
  }
`,re=p(A)`
  transition-property: background-color, transform;
  transition-duration: 500ms;
  transition-timing-function: linear;
  transition-delay: 0ms;

  cursor: pointer;
  pointer-events: auto;
  &:hover,
  &:focus {
    scale: 1.2;
  }
`,oe=({onSubmit:e,onChange:r,setFilterText:n})=>{const[t,o]=z.useState();return v(te,{onSubmit:e,onChange:i=>{o(i.currentTarget.query.value),r(i)},onClick:i=>{i.currentTarget.reset(),o(null),n("")},children:[s(ne,{type:"text",name:"query",placeholder:"Search"}),!t&&s(A,{type:"submit","aria-label":"Search icon",children:s(D,{})}),t&&s(re,{type:"button","aria-label":"Remove icon",children:s(ee,{})})]})},ie=p.li`
  padding-top: 40px;
  position: relative;
  @media ${e=>e.theme.media.tablet} {
    padding-top: 0;
  }
`,ae=p.h3`
  padding-top: 4px;
  margin: 0;
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 1.375;
  letter-spacing: -0.01em;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow-x: hidden;
  overflow-y: hidden;
`,le=p.div`
  width: 200px;
  height: 4px;

  background: linear-gradient(90deg, #ff634e, #ffdf48);
  border-radius: ${e=>e.theme.radii.large};

  @media ${e=>e.theme.media.tablet} {
    width: 280px;
    height: 8px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 340px;
  }
`,se=p.p`
  margin: 0;
  padding-top: 16px;
  color: ${e=>e.theme.colors.newsText};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.normal};
  line-height: 1.375;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow-x: hidden;
  overflow-y: hidden;

  @media ${e=>e.theme.media.tablet} {
    -webkit-line-clamp: 6;
  }
  @media ${e=>e.theme.media.desktop} {
    -webkit-line-clamp: 5;
  }
`,ce=p.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 0;
  @media ${e=>e.theme.media.tablet} {
    padding-top: 40px;
  }
`,de=p.time`
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.normal};
  line-height: 1.375;
  color: ${e=>e.theme.colors.searchText};
`,pe=p.a`
  color: ${e=>e.theme.colors.accent};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  line-height: 1.375;
  text-decoration-line: underline;

  &:hover,
  &:focus {
    scale: 1.1;
    color: #ff634e;
  }
`,ue=e=>{if(e){const r=e.split("-");return`${r[0]}/${r[1]}/${r[2]}`}},me=e=>{const{date:r,description:n,title:t,url:o}=e.news;return v(ie,{children:[s(le,{children:" "}),s(ae,{children:t}),s(se,{children:n}),v(ce,{children:[s(de,{dateTime:r,children:ue(r)}),s(pe,{href:o,target:"_blank",children:"Read more"})]})]})},he=p.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 70px 0;

  svg {
    width: 24px;
    height: 24px;
    color: ${e=>e.theme.colors.hover};
  }

  @media ${e=>e.theme.media.tablet} {
    gap: 10px;
    padding: 120px 0;

    svg {
      width: 38px;
      height: 38px;
    }
  }
`,fe=p.h2`
  font-size: 18px;
  line-height: calc(38 / 28);
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.black};

  @media ${e=>e.theme.media.tablet} {
    font-size: 28px;
  }
`,ge=()=>v(he,{children:[s(I,{}),s(fe,{children:"No matches found"})]});function xe(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var j=z,$=xe(j);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var B=function(){return B=Object.assign||function(r){for(var n,t=1,o=arguments.length;t<o;t++){n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(r[l]=n[l])}return r},B.apply(this,arguments)};function ve(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n}function we(e,r){r===void 0&&(r={});var n=r.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var ye=`.scroll-to-top {
  background-color: white;
  right: 40px;
  bottom: 40px;
  position: fixed;
  z-index: 2;
  cursor: pointer;
  border-radius: 7px;
  width: 40px;
  height: 40px;
  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
  border: none;
}

.scroll-to-top:active {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}
`;we(ye);function be(e){e===void 0&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}var $e=function(e){var r=e.top,n=r===void 0?20:r,t=e.className,o=t===void 0?"":t,l=e.color,h=l===void 0?"black":l,i=e.smooth,c=i===void 0?!1:i,u=e.component,a=u===void 0?"":u,d=e.viewBox,m=d===void 0?"0 0 256 256":d,f=e.svgPath,w=f===void 0?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":f,y=e.width,E=y===void 0?"28":y,b=e.height,S=b===void 0?"28":b,C=ve(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),g=j.useState(!1),T=g[0],O=g[1];return j.useEffect(function(){var x=function(){O(document.documentElement.scrollTop>=n)};return x(),document.addEventListener("scroll",x),function(){return document.removeEventListener("scroll",x)}},[n]),$.createElement($.Fragment,null,T&&$.createElement("button",B({className:"scroll-to-top "+o,onClick:function(){return be(c)},"aria-label":"Scroll to top"},C),a||$.createElement("svg",{width:E,height:S,fill:h,viewBox:m},$.createElement("path",{d:w}))))},Se=$e;const Ce=p.div`
  padding: 26px 20px 100px 20px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  font-family: ${e=>e.theme.fonts.main};
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media ${e=>e.theme.media.tablet} {
    padding: 62px 32px 100px 32px;
    width: 768px;
  }
  @media ${e=>e.theme.media.desktop} {
    padding: 39px 16px 200px 16px;
    width: 1280px;
  }
`,F=p.h2`
  margin: 0;
  text-align: center;
  font-size: ${e=>e.theme.fontSizes.m};

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.theme.fontSizes.xxxl};
  }
`,Te=p.ul`
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-top: 68px;
    display: grid;
    justify-content: center;
    column-gap: 32px;
    row-gap: 60px;
    grid-template-columns: 336px 336px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 395px 395px 395px;
  }
`,ze=p(Se)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding: 8px;
`,je=()=>{const e=L(),[r,n]=z.useState(),t=N(Q),o=N(X);let l=N(Z);const h=(a,d)=>a.filter(m=>m.title.toLowerCase().includes(d.toLowerCase())),i=a=>{const d=a.map(m=>s(me,{news:m},m._id));return d.length>0?v(Te,{children:[" ",d," "]}):s(ge,{})};z.useEffect(()=>{e(R())},[e]);const c=a=>{a.preventDefault(),n(a.target.query.value)},u=a=>{n(a.currentTarget.query.value)};return v(Ce,{children:[s(F,{children:"News"}),s(oe,{onSubmit:a=>c(a),onChange:a=>u(a),setFilterText:()=>n()}),l&&s(F,{children:"Ooops... something Wrong"}),o&&s(_,{}),!o&&t&&v(q,{children:[!r&&i(t),r&&i(h(t,r))]}),s(ze,{smooth:!0,color:"#F59256"})]})};export{je as default};
