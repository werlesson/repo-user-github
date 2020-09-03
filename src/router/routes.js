const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue")
  },
  {
    path: "/",
    component: () => import("../components/layout/Layout.vue"),
    redirect: "/result",
    children: [
      {
        path: "result",
        name: "Result",
        component: () => import("../components/Result.vue")
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];

export default routes;
