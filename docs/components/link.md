---
sidebar_position: 4
---

# `<Link />`

- Giống như thẻ `<a>` trong HTML, component `<Link />` giúp điều hướng đến một định tuyến khi ta thực hiện sự kiện click.
- Cú pháp:

```tsx
<Link to="...">
  <Component />
</Link>
```

:::info

Trong đó:

- `to`: là một **string** chỉ định định tuyến cần hướng đến
- `<Component />`: là phần tử tương ứng mà khi ta click vào nó sẽ điều hướng đến định tuyến

:::

- Ví dụ:

```tsx
import { Link } from "react-router-dom";

function GoToAnotherPage() {
  return (
    <div className="h-[200px] w-[200px] bg-orange-800">Go to new page</div>
  );
}
export default function Home() {
  return (
    <Link to="1">
      <GoToAnotherPage />
    </Link>
  );
}
```
