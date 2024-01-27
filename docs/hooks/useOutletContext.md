---
sidebar_position: 5
---

# useOutletContext()

:::info

- Hook `useOutletContext()` giúp component ở route con có thể lấy được props từ component của route cha truyền xuống

:::

- Ví dụ:

```tsx
// Đây là component của route cha
import * as React from "react";
import type { User } from "./types";
import { Outlet, useOutletContext } from "react-router-dom";

type ContextType = { user: User | null };

export default function Dashboard() {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet context={{ user }} />
    </div>
  );
}

export function useUser() {
  return useOutletContext<ContextType>();
}
```

```tsx
//Đây là component của route con
import { useUser } from "../dashboard";

export default function DashboardMessages() {
  const { user } = useUser();
  return (
    <div>
      <h2>Messages</h2>
      <p>Hello, {user.name}!</p>
    </div>
  );
}
```
