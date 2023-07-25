import { createRouter, createWebHistory } from "vue-router";
import mainpageView from "../views/mainpageView.vue";
import eCommerce from "../views/ecommerceView.vue";
import allgoodsView from "../views/allgoodsView.vue";

const routes = [
  {
    path: "/",
    name: "mainpageView",
    component: mainpageView,
  },
  {
    path: "/woo",
    name: "eCommerce",
    component: eCommerce,
  },
  {
    path: "/woo/goods",
    name: "allgoodsView",
    component: allgoodsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
