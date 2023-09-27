---
sidebar_position: 6
---

# `<Navigate />`

- Component `<Navigate />` là một component giúp ta tự động điều hướng đến một định tuyến thay vì phải thực hiện sự kiện như click như component `<Link />`
- Component `<Navigate />` thường kết hợp với các toán tử logic điều kiện để tự động điều hướng đến một định tuyến
- Cú pháp:

```tsx
<Navigate to="..." />
```

- Ví dụ:

```tsx
const App = ({ user }) => {
  return (
    <div>{user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}</div>
  );
};
```
