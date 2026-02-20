import { createRouter, createWebHistory } from "vue-router";

// import views
import HomeView from "@/views/HomeView.vue";
import CreateArticleView from "@/views/CreateArticleView.vue";
import ListArticlesView from "@/views/ListArticlesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create-article",
      name: "create-article",
      component: CreateArticleView,
    },
    {
      path: "/list-articles",
      name: "list-articles",
      component: ListArticlesView,
    },
  ],
});

export default router;
