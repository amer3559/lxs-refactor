import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      pageName: "Home",
      layout: "auth",
    },
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/TestView.vue"),
    meta: {
      pageName: "Test",
    },
  },
  //#region Error
  {
    path: "/error-404",
    name: "Error404",
    components: {
      default: () => import("@/views/TestView.vue"),
    },
    meta: {
      pageName: "pageNotFound",
      layout: "auth",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "Error404" },
    meta: {
      layout: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.pageName as string;
  next();
});

export default router;
