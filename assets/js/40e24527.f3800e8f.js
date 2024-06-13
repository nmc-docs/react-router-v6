"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[538],{4565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=n(4848),r=n(8453);const s={sidebar_position:5},u="useOutletContext()",c={id:"hooks/useOutletContext",title:"useOutletContext()",description:"- Hook useOutletContext() gi\xfap component \u1edf route con c\xf3 th\u1ec3 l\u1ea5y \u0111\u01b0\u1ee3c props t\u1eeb component c\u1ee7a route cha truy\u1ec1n xu\u1ed1ng",source:"@site/docs/hooks/useOutletContext.md",sourceDirName:"hooks",slug:"/hooks/useOutletContext",permalink:"/react-router-v6/hooks/useOutletContext",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"useSearchParams()",permalink:"/react-router-v6/hooks/useSearchParams"},next:{title:"M\u1ed9t s\u1ed1 l\u01b0u \xfd",permalink:"/react-router-v6/notice"}},a={},i=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"useoutletcontext",children:"useOutletContext()"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Hook ",(0,o.jsx)(t.code,{children:"useOutletContext()"})," gi\xfap component \u1edf route con c\xf3 th\u1ec3 l\u1ea5y \u0111\u01b0\u1ee3c props t\u1eeb component c\u1ee7a route cha truy\u1ec1n xu\u1ed1ng"]}),"\n"]})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'// \u0110\xe2y l\xe0 component c\u1ee7a route cha\nimport * as React from "react";\nimport type { User } from "./types";\nimport { Outlet, useOutletContext } from "react-router-dom";\n\ntype ContextType = { user: User | null };\n\nexport default function Dashboard() {\n  const [user, setUser] = React.useState<User | null>(null);\n\n  return (\n    <div>\n      <h1>Dashboard</h1>\n      <Outlet context={{ user }} />\n    </div>\n  );\n}\n\nexport function useUser() {\n  return useOutletContext<ContextType>();\n}\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'//\u0110\xe2y l\xe0 component c\u1ee7a route con\nimport { useUser } from "../dashboard";\n\nexport default function DashboardMessages() {\n  const { user } = useUser();\n  return (\n    <div>\n      <h2>Messages</h2>\n      <p>Hello, {user.name}!</p>\n    </div>\n  );\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>c});var o=n(6540);const r={},s=o.createContext(r);function u(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);