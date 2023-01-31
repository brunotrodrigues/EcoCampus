import { Perfil, Layout } from "@/views/users";

export default {
  path: "/perfil",
  component: Layout,
  children: [{ path: "", component: Perfil }],
};
