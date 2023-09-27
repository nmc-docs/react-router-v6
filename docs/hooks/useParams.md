---
sidebar_position: 1
---

# useParams()

- **Đặt vấn đề** : Giờ ta muốn định tuyến động, ví dụ khi ta truy cập: **/contact/John** thì trang web sẽ hiển thị dòng chữ "Contact for John", còn khi truy cập đến **/contact/Sera** thì trang web sẽ hiển thị dòng chữ "Contact for Sera". Ta không thể tạo cứng các định tuyến cố định, thay vào đó, sẽ sử dụng một hook của React Router V6 đó là `useParams()`.
- Cách dùng: thêm dấu `:` trước tên của định tuyến động và tên của định tuyến động phải giống với tên property được lấy ra từ `useParams()`.
- Ví dụ:

```tsx
import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./routeComponents/Home";
import About from "./routeComponents/About";
import Errorpage from "./routeComponents/Errorpage";

function Contact() {
  let { userName } = useParams();
  return (
    <>
      <h1>Contact for {userName}</h1>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact">
          <Route index element={<h1>Contact for no-one!</h1>} />
          <Route path=":userName" element={<Contact />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```
