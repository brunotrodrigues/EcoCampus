import { Ocorrencias, Layout } from "@/views/users";

export default {
  path: "/ocorrencias",
  component: Layout,
  children: [{ path: "", component: Ocorrencias }],
};