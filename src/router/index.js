import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import { routes } from "vue-router/auto-routes";
const customRoutes = [
  ...setupLayouts(routes),
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: customRoutes,
});

export default router;
