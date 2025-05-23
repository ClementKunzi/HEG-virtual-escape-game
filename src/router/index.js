import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/game",
      name: "game",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GameView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/Admin/index.vue"), // Charge la page d'administration
    },
    {
      path: "/admin/dashboard",
      name: "dashboard",
      component: () => import("../views/Admin/Dashboard.vue"), // Charge le tableau de bord
    },
  ],
});

export default router;
