const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/all", name: "all", component: () => import("pages/Index.vue") },
      {
        path: "/tags",
        name: "tags",
        component: () => import("pages/Tags.vue")
      },
      {
        path: "/article",
        name: "article",
        component: () => import("pages/Article.vue")
      }
    ]
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        name: "ArticleManage",
        component: () => import("pages/ControlPage.vue")
      },
      {
        path: "/personal",
        name: "personal",
        component: () => import("pages/Personal.vue")
      }
    ]
  },
  {
    path: "/post",
    component: () => import("layouts/PostLayout.vue")
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
