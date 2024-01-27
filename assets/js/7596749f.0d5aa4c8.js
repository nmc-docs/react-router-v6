"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},s="useSearchParams()",i={unversionedId:"hooks/useSearchParams",id:"hooks/useSearchParams",title:"useSearchParams()",description:"- useSearchParams() l\xe0 m\u1ed9t hook gi\xfap ch\xfang ta x\u1eed l\xfd li\xean quan \u0111\u1ebfn query string trong \u0111\u01b0\u1eddng d\u1eabn.",source:"@site/docs/hooks/useSearchParams.md",sourceDirName:"hooks",slug:"/hooks/useSearchParams",permalink:"/react-router-v6/hooks/useSearchParams",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useLocation()",permalink:"/react-router-v6/hooks/useLocation"},next:{title:"useOutletContext()",permalink:"/react-router-v6/hooks/useOutletContext"}},l={},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usesearchparams"},"useSearchParams()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"useSearchParams()")," l\xe0 m\u1ed9t hook gi\xfap ch\xfang ta x\u1eed l\xfd li\xean quan \u0111\u1ebfn query string trong \u0111\u01b0\u1eddng d\u1eabn.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1695792850430",src:r(1214).Z,width:"728",height:"222"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSearchParams } from "react-router-dom";\n\nconst App = () => {\n    const [searchParams, setSearchParams] = useSearchParams();\n    return (\n        /*JSX Element*/\n    )\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property/Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"searchParams")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"searchParams")," c\xf3 ki\u1ec3u l\xe0 URLSearchParams, n\xf3 c\xf3 c\xe1c ph\u01b0\u01a1ng th\u1ee9c sau:",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"searchParams.toString()"),' : tr\u1ea3 v\u1ec1 m\u1ed9t String l\xe0 query string hi\u1ec7n t\u1ea1i (kh\xf4ng bao g\u1ed3m d\u1ea5u ?). V\xed d\u1ee5: "name=Chi&age=20"',(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"searchParams.set(name: string, value: string)"),"\xa0: Ch\xe8n th\xeam m\u1ed9t tr\u01b0\u1eddng c\xf9ng gi\xe1 tr\u1ecb c\u1ee7a n\xf3 v\xe0o query string",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"searchParams.delete(name: string)"),"\xa0: X\xf3a m\u1ed9t tr\u01b0\u1eddng theo t\xean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"setSearchParams()")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"setSearchParams(queryString: string)"),(0,a.kt)("br",null),"Nh\u1eadn v\xe0o m\u1ed9t string l\xe0 query string. V\xed d\u1ee5: ",(0,a.kt)("inlineCode",{parentName:"td"},'setSearchParams("name=Chi&age=20")'),(0,a.kt)("br",null),"Ph\u01b0\u01a1ng th\u1ee9c n\xe0y gi\u1ed1ng h\u1ec7t setState trong ",(0,a.kt)("inlineCode",{parentName:"td"},"useState()"),". Component s\u1ebd b\u1ecb re-render sau khi setSearchParams()")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Th\xf4ng th\u01b0\u1eddng, ta s\u1eed d\u1ee5ng th\u01b0 vi\u1ec7n ",(0,a.kt)("strong",{parentName:"li"},"qs")," \u0111\u1ec3 s\u1eed d\u1ee5ng x\u1eed l\xfd li\xean quan \u0111\u1ebfn query string"),(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useEffect } from "react";\nimport { useSearchParams } from "react-router-dom";\nimport qs from "qs";\n\nexport default function App() {\n  const [searchParams, setSearchParams] = useSearchParams();\n\n  const handleClick = () => {\n    const object = {\n      name: "Chi",\n      age: 20,\n      address: {\n        city: "Hanoi",\n        district: "NamTuLiem",\n      },\n      card: ["Visa", "Vietcombank"],\n    };\n    setSearchParams(qs.stringify(object));\n  };\n\n  useEffect(() => {\n    const queryString = searchParams.toString();\n    console.log(qs.parse(queryString)); //Tr\u1ea3 l\u1ea1i object t\u01b0\u01a1ng \u1ee9ng v\u1edbi query string\n  });\n\n  return <button onClick={handleClick}>Click me!</button>;\n}\n')))}p.isMDXComponent=!0},1214:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1695792850430-99b856da4a1db8fc1df1da1094d66d25.png"}}]);