import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home-Page.vue"),
  },
  {
    path: "/editprofile",
    name: "editprofile",
    component: () => import("../views/Edit-Profile.vue"),
  },
  {
    path: "/leaderboard",
    name: "leaderboard",
    component: () => import("../views/Leader-Board.vue"),
  },
  {
    path: "/friends",
    name: "friends",
    component: () => import("../views/Friends-Page.vue"),
  },
  {
    path: "/game",
    name: "game-play",
    component: () => import("../views/Game-Page.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/Chat-Page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
