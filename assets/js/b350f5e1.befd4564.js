"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(n),h=o,d=l["".concat(u,".").concat(h)]||l[h]||m[h]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="useParams()",c={unversionedId:"hooks/useParams",id:"hooks/useParams",title:"useParams()",description:'- \u0110\u1eb7t v\u1ea5n \u0111\u1ec1 /contact/John th\xec trang web s\u1ebd hi\u1ec3n th\u1ecb d\xf2ng ch\u1eef "Contact for John", c\xf2n khi truy c\u1eadp \u0111\u1ebfn /contact/Sera th\xec trang web s\u1ebd hi\u1ec3n th\u1ecb d\xf2ng ch\u1eef "Contact for Sera". Ta kh\xf4ng th\u1ec3 t\u1ea1o c\u1ee9ng c\xe1c \u0111\u1ecbnh tuy\u1ebfn c\u1ed1 \u0111\u1ecbnh, thay v\xe0o \u0111\xf3, ta s\u1ebd s\u1eed d\u1ee5ng route \u0111\u1ed9ng th\xf4ng qua m\u1ed9t hook c\u1ee7a React Router V6 \u0111\xf3 l\xe0 useParams().',source:"@site/docs/hooks/useParams.md",sourceDirName:"hooks",slug:"/hooks/useParams",permalink:"/react-router-v6/hooks/useParams",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/react-router-v6/category/hooks"},next:{title:"useNavigate()",permalink:"/react-router-v6/hooks/useNavigate"}},u={},s=[],p={toc:s},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useparams"},"useParams()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u0110\u1eb7t v\u1ea5n \u0111\u1ec1")," : Gi\u1edd ta mu\u1ed1n \u0111\u1ecbnh tuy\u1ebfn \u0111\u1ed9ng, v\xed d\u1ee5 khi ta truy c\u1eadp: ",(0,o.kt)("strong",{parentName:"li"},"/contact/John"),' th\xec trang web s\u1ebd hi\u1ec3n th\u1ecb d\xf2ng ch\u1eef "Contact for John", c\xf2n khi truy c\u1eadp \u0111\u1ebfn ',(0,o.kt)("strong",{parentName:"li"},"/contact/Sera"),' th\xec trang web s\u1ebd hi\u1ec3n th\u1ecb d\xf2ng ch\u1eef "Contact for Sera". Ta kh\xf4ng th\u1ec3 t\u1ea1o c\u1ee9ng c\xe1c \u0111\u1ecbnh tuy\u1ebfn c\u1ed1 \u0111\u1ecbnh, thay v\xe0o \u0111\xf3, ta s\u1ebd s\u1eed d\u1ee5ng route \u0111\u1ed9ng th\xf4ng qua m\u1ed9t hook c\u1ee7a React Router V6 \u0111\xf3 l\xe0 ',(0,o.kt)("inlineCode",{parentName:"li"},"useParams()"),"."),(0,o.kt)("li",{parentName:"ul"},"C\xe1ch d\xf9ng: th\xeam d\u1ea5u ",(0,o.kt)("inlineCode",{parentName:"li"},":")," tr\u01b0\u1edbc t\xean c\u1ee7a \u0111\u1ecbnh tuy\u1ebfn \u0111\u1ed9ng v\xe0 t\xean c\u1ee7a \u0111\u1ecbnh tuy\u1ebfn \u0111\u1ed9ng ph\u1ea3i gi\u1ed1ng v\u1edbi t\xean property \u0111\u01b0\u1ee3c l\u1ea5y ra t\u1eeb ",(0,o.kt)("inlineCode",{parentName:"li"},"useParams()"),"."),(0,o.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { BrowserRouter, Routes, Route, useParams } from "react-router-dom";\nimport Home from "./routeComponents/Home";\nimport About from "./routeComponents/About";\nimport Errorpage from "./routeComponents/Errorpage";\n\nfunction Contact() {\n  let { userName } = useParams();\n  return (\n    <>\n      <h1>Contact for {userName}</h1>\n    </>\n  );\n}\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="about" element={<About />} />\n        <Route path="contact">\n          <Route index element={<h1>Contact for no-one!</h1>} />\n          <Route path=":userName" element={<Contact />} />\n        </Route>\n        <Route path="*" element={<Errorpage />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\nexport default App;\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"N\u1ebfu c\xf3 nhi\u1ec1u route \u0111\u1ed9ng l\u1ed3ng nhau th\xec b\u1ea5t k\u1ef3 t\u1ea1i component n\xe0o (cha, con) \u0111\u1ec1u l\u1ea5y \u0111\u01b0\u1ee3c t\u1ea5t c\u1ea3 c\xe1c params, v\xed d\u1ee5 sau t\u1ea1i component ",(0,o.kt)("inlineCode",{parentName:"li"},"<Home/>")," , ",(0,o.kt)("inlineCode",{parentName:"li"},"<ProjectDetail/>")," hay ",(0,o.kt)("inlineCode",{parentName:"li"},"<Test/>")," \u0111\u1ec1u l\u1ea5y \u0111\u01b0\u1ee3c gi\xe1 tr\u1ecb c\u1ee7a ",(0,o.kt)("inlineCode",{parentName:"li"},"project")," ho\u1eb7c ",(0,o.kt)("inlineCode",{parentName:"li"},"test")," th\xf4ng qua ",(0,o.kt)("inlineCode",{parentName:"li"},"const { project, test } = useParams();"),":")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<BrowserRouter>\n  <Routes>\n    <Route path="/" element={<Home />}>\n      <Route path=":project" element={<ProjectDetail />}>\n        <Route path=":test" element={<Test />} />\n      </Route>\n    </Route>\n  </Routes>\n</BrowserRouter>\n'))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Khi c\xe1c params thay \u0111\u1ed5i th\xec component c\u0169ng s\u1ebd b\u1ecb re-render"))))}m.isMDXComponent=!0}}]);