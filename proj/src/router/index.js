import { createRouter, createWebHistory } from "vue-router";

import { useAlertStore, useAuthStore } from "@/stores";
import { Home } from "@/views";
import accountRoutes from "./account.routes";
import activitiesRoutes from "./activities.routes";
import questionsRoutes from "./questions.routes";
import usersRoutes from "./users.routes";
import perfilRoutes from "./perfil.routes";
import ocorrenciasRoutes from "./ocorrencias.routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    { path: "/", component: Home },
    { ...accountRoutes },
    { ...activitiesRoutes },
    { ...questionsRoutes },
    { ...usersRoutes },
    { ...perfilRoutes },
    { ...ocorrenciasRoutes },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

router.beforeEach(async (to) => {
  const alertStore = useAlertStore();
  alertStore.clear();

  const publicPages = ["/account/login", "/account/register"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    return "/account/login";
  }
});
