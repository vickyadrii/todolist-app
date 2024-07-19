import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/pages/home/HomePage.vue";

const baseRoutes = [{ path: "", name: "home", component: HomePage }];

const router = createRouter({
  routes: baseRoutes,
  history: createWebHistory(),
});

export default router;
