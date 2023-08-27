import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home-Page.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/editprofile",
    name: "Edit-Profile",
    component: () => import("../views/Edit-Profile.vue"),
  },
  {
    path: "/leaderpage/:id",
    component: () => import("@/views/Leader-Board.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () => import("../views/Friends-Page.vue"),
  },
  {
    path: "/game",
    name: "Game-Play",
    component: () => import("../views/Game-Page.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("@/components/Chat-Page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
