import { Questions, Layout } from "@/views/users";

export default {
  path: "/questions",
  component: Layout,
  children: [{ path: "", component: Questions }],
};
