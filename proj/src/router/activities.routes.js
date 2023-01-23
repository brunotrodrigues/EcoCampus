import { Activities, Layout } from "@/views/users";

export default {
  path: "/activities",
  component: Layout,
  children: [{ path: "", component: Activities }],
};
