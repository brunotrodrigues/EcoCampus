import { AdminUsers, Layout, List } from "@/views/users";

export default {
  path: "/users",
  component: Layout,
  children: [
    { path: "", component: List },
    { path: "add", component: AdminUsers },
    { path: "edit/:id", component: AdminUsers },
  ],
};
