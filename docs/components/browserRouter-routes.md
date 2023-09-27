---
sidebar_position: 1
---

# `<BrowserRouter />`, `<Routes />`

- `<BrowserRouter />` , `<Routes />` là những component để bọc tất cả các route. Nó phải được đặt lên trên đầu tất cả các route thì mới có thể sử dụng được.
- Ví dụ:

```tsx
import { BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All component <Route/> and other child component in here */}
      </Routes>
    </BrowserRouter>
  );
}
```
