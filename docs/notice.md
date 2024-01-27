---
sidebar_position: 4
---

# Một số lưu ý

## Lưu ý về cách hoạt động của React Router

- Nếu có nhiều route lồng nhau thì tại page của route con sẽ hiển thị lẫn tất cả các component cha, ông,... mà bao bọc nó:

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="user" element={<User />}>
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
</BrowserRouter>
```

:::note

- Trong ví dụ trên, nếu truy cập vào **http://localhost:3000/user/setting** thì cả 3 component `<Home />` , `<User />`, `<Setting />` sẽ được hiển thị trên cùng 1 trang.
- Nếu truy cập vào **http://localhost:3000/dashboard** thì chỉ 2 component `<Home />` và `<Dashboard />` sẽ được render trên cùng 1 trang.

:::

- Cũng trong ví dụ trên, nếu ta truy cập vào **http://localhost:3000/user/setting** mà ở component `<Home />` hay `<User />`, có middleware (ví dụ như kiểm tra đăng nhập hay chưa) trong useEffect cũng sẽ được chạy trước.

## Lưu ý về đường dẫn khi redirect

- Khi dùng component `<Link/>` hay hook `useNavigate()` để redirect đến route cụ thể, có một số lưu ý.
- Giả sử ta đang ở route sau: **http://localhost:3000/post/detailPost/test/abc**
  - Nếu `navigate("/user")` thì sẽ redirect đến **http://localhost:3000/user**
  - Nếu `navigate("user")` thì sẽ redirect đến **http://localhost:3000/post/detailPost/test/abc/user**
  - Nếu `navigate("../")` thì sẽ redirect đến **http://localhost:3000/post/detailPost/test**
  - Nếu `navigate("../user")` thì sẽ redirect đến **http://localhost:3000/post/detailPost/test/user**
