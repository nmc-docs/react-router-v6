---
sidebar_position: 3
---

# useLocation()

- **useLocation** là một hook giúp ta lấy ra các thông tin từ định tuyến.
- Cú pháp:

```tsx
import { useLocation } from "react-router-dom";

const App = () => {
    const { pathname, search, state } = useLocation();
    return (
        /*JSX Element*/
    )
}
```

- `useLocation()` trả về một object có các thuộc tính hay sử dụng sau:

| Property   | Value                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| `pathname` | Trả về một `string `chứa **path** hiện tại của trang web                                                 |
| `search`   | Trả về một `string` chứa **query param** trong path (nếu có). Nếu không có, trả về một chuỗi rỗng (`""`) |
| `state`    | Trả về dữ liệu đã được truyền tới từ**navigate()**                                                       |

- Ví dụ: giả sử URL hiện tại là **http://localhost:3000/products/school?name=bags**
- `pathname`: `/products/school`
- `search`: `?name=bags`
