import Vue from "vue";
import Router from "vue-router";

Vue.computed(Router);

export default new Router({
  routes: [
    {
      name: "declarative-rendering",
      path: "/declarative-rendering",
      component: () => import("@/views/DeclarativeRendering")
    },
  ]
});
