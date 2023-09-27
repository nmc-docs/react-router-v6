---
sidebar_position: 3
---

# `<Outlet />`

- Khi các `<Route />` được lồng nhau (quan hệ cha - con), để component của `<Route />` **con** có thể hiển thị được thì component của `<Route />` **cha** phải có `<Outlet />`
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
