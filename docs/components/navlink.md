---
sidebar_position: 5
---

# `<NavLink />`

- Cú pháp của component `<NavLink />` giống như component `<Link />`, component `<NavLink />` cũng dùng để chuyển hướng định tuyến khi người dùng click vào phần tử, chỉ khác là component này có **isActive** để kiểm tra xem phần tử hiện tại đang active sau khi vừa được click vào hay không
- Ví dụ: khi ta click vào block nào thì block đó sẽ active và có màu xanh, còn không thì có màu đỏ

```tsx
import React from "react";
import { NavLink } from "react-router-dom";
function Navlinkchild({ statusColor, content }) {
  return (
    <div className={`w-[100px] h-[100px] mt-2 ${statusColor}`}>{content}</div>
  );
}
function Contact() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="1">
            {({ isActive }) =>
              isActive ? (
                <Navlinkchild statusColor="bg-blue-500" content="1" />
              ) : (
                <Navlinkchild statusColor="bg-red-500" content="1" />
              )
            }
          </NavLink>
        </li>
        <li>
          <NavLink to="2">
            {({ isActive }) =>
              isActive ? (
                <Navlinkchild statusColor="bg-blue-500" content="2" />
              ) : (
                <Navlinkchild statusColor="bg-red-500" content="2" />
              )
            }
          </NavLink>
        </li>
        <li>
          <NavLink to="3">
            {({ isActive }) =>
              isActive ? (
                <Navlinkchild statusColor="bg-blue-500" content="3" />
              ) : (
                <Navlinkchild statusColor="bg-red-500" content="3" />
              )
            }
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Contact;
```
