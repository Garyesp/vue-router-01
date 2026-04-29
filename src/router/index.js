import { createRouter, createWebHistory } from "vue-router";

// import views
import HomeView from "@/views/HomeView.vue";
import CreateArticleView from "@/views/CreateArticleView.vue";
import ListArticlesView from "@/views/ListArticlesView.vue";
import ListCategoriesView from "@/views/ListCategoriesView.vue";
import EditCategoryView from "@/views/EditCategoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/articles",
      name: "list-articles",
      component: ListArticlesView,
      props: true,
    },
    {
      path: "/articles/new",
      name: "create-article",
      component: CreateArticleView,
      props: true,
    },
    {
      path: "/categories",
      name: "list-categories",
      component: ListCategoriesView,
      props: true,
    },
    {
      path: "/categories/new",
      name: "create-category",
      component: EditCategoryView,
      props: true,
    },
    {
      path: "/categories/:id/edit",
      name: "edit-category",
      component: EditCategoryView,
      props: true,
    },
  ],
});

export default router;
