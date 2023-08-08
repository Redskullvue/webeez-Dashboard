import { createRouter, createWebHistory } from "vue-router";
import mainpageView from "../views/mainpageView.vue";
import eCommerce from "../views/ecommerceView.vue";
import allgoodsView from "../views/allgoodsView.vue";
import createPostView from "../views/createpostView.vue";
import adminsView from "../views/adminsView.vue";
import LoginView from "../views/loginView.vue";
import contentView from "@/views/contentView";
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
  {
    path: "/woo/createpost",
    name: "createPostView",
    component: createPostView,
  },
  {
    path: "/admins",
    name: "adminsView",
    component: adminsView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/mohtava",
    name: "contentView",
    component: contentView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
