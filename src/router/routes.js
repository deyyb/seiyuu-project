const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/seiyuu/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/SeiyuuPage.vue"),
      },
      {
        path: ":seiyuuId",
        component: () => import("pages/SeiyuuProfile.vue"),
      },
    ],
  },

  {
    path: "/users/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/UserPage.vue"),
      },
    ],
  },

  {
    path: "/game/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "1",
        component: () => import("pages/GamePage.vue"),
      },
      {
        path: "2",
        component: () => import("pages/Game2Page.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
