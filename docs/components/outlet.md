---
sidebar_position: 3
---

# `<Outlet />`

:::info

- Khi các `<Route />` được lồng nhau (quan hệ cha - con), để component của `<Route />` **con** có thể render được thì component của `<Route />` **cha** phải có `<Outlet />`

:::

- Ví dụ:

```tsx
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./routeComponents/Home";
import About from "./routeComponents/About";
import Errorpage from "./routeComponents/Errorpage";
function Contact() {
  return (
    <>
      <h1>CONTACT</h1>
      <Outlet />
    </>
  );
}
function ChildrenContact() {
  return (
    <div>
      <h1>Contact for me</h1>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />}>
          <Route path="me" element={<ChildrenContact />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

:::info

- Component `<Outlet />` nhận vào một props có tên **context** là giá trị (nếu có) truyền xuống component ở route con. Ở component của route con, nếu muốn lấy giá trị này, hãy sử dụng hook [useOutletContext()](../hooks/useOutletContext)

:::
