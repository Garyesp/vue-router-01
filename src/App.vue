<script setup>
import { ref, onMounted } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

const STORAGE_KEY_ARTICLES = "dwec_articles";
const STORAGE_KEY_CATEGORIES = "dwec_categories";

const articles = ref([]);
const categories = ref([]);

const saveArticles = () =>
  localStorage.setItem(STORAGE_KEY_ARTICLES, JSON.stringify(articles.value));

const saveCategories = () =>
  localStorage.setItem(
    STORAGE_KEY_CATEGORIES,
    JSON.stringify(categories.value),
  );

onMounted(async () => {
  const storedArticles = localStorage.getItem(STORAGE_KEY_ARTICLES);
  if (storedArticles) {
    articles.value = JSON.parse(storedArticles);
  } else {
    const res = await fetch("/mockData/articles.json");
    articles.value = await res.json();
    saveArticles();
  }

  const storedCategories = localStorage.getItem(STORAGE_KEY_CATEGORIES);
  if (storedCategories) {
    categories.value = JSON.parse(storedCategories);
  } else {
    const res = await fetch("/mockData/categories.json");
    categories.value = await res.json();
    saveCategories();
  }
});

// Articles CRUD
const addArticle = (article) => {
  articles.value.push({ ...article, id: Date.now() });
  saveArticles();
};

const updateArticle = (updated) => {
  const idx = articles.value.findIndex((a) => a.id === updated.id);
  if (idx !== -1) {
    articles.value[idx] = updated;
    saveArticles();
  }
};

const deleteArticle = (id) => {
  articles.value = articles.value.filter((a) => a.id !== id);
  saveArticles();
};

// Categories CRUD
const addCategory = (category) => {
  categories.value.push({ ...category, id: Date.now() });
  saveCategories();
};

const updateCategory = (updated) => {
  const idx = categories.value.findIndex((c) => c.id === updated.id);
  if (idx !== -1) {
    categories.value[idx] = updated;
    saveCategories();
  }
};

const deleteCategory = (id) => {
  categories.value = categories.value.filter((c) => c.id !== id);
  saveCategories();
};
</script>

<template>
  <v-app>
    <TheHeader />
    <v-main>
      <router-view
        :articles="articles"
        :categories="categories"
        @add-article="addArticle"
        @update-article="updateArticle"
        @delete-article="deleteArticle"
        @add-category="addCategory"
        @update-category="updateCategory"
        @delete-category="deleteCategory"
      />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<style scoped></style>
