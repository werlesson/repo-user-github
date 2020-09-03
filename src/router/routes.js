const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue")
  },
  {
    path: "/result",
    name: "Result",
    component: () => import("../components/Result.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

export default routes;
