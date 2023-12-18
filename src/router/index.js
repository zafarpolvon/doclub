import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../layouts/EmptyLayout.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login/Index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("fake_token");

  if (to.name !== "Login" && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
