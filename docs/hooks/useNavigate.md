---
sidebar_position: 2
---

# useNavigate()

- **useNavigate()** là một hook của React Router giúp ta điều hướng đến một định tuyến cụ thể nếu ta không muốn dùng component `<Link />`
- Cú pháp: **navigate(path, options)**

:::info

Trong đó:

- **path** : tên đường dẫn muốn điều hướng đến
- **options** : tùy chọn một số cấu hình thêm khi điều hướng

:::

- Ví dụ:

```tsx
const navigate = useNavigate();
return (
  <button
    onClick={() => {
      navigate("/contact/1");
    }}
  >
    Homepage
  </button>
);
```

- Ta có thể truyền dữ từ component hiện tại này sang component đang định điều hướng tới thông qua tùy chọn **state** :

```tsx
const navigate = useNavigate();

const handleNavigate = () => {
  navigate("/login", {
    state: {
      email: "minhchico300kc@gmail.com",
      password: "123456789",
    },
  });
};
// Khi điều hướng sang '/login' sẽ cùng đính kèm dữ liệu sang component bên kia.
```
