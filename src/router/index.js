import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizes",
      component: () => import("../views/Quizes.vue"),
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: () => import("../views/Quiz.vue"),
    },
  ],
});

export default router;
