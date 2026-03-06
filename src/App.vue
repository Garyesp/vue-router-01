<script setup>
import { ref, onMounted } from "vue";

const articles = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/mockData/articles.json");
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Error cargando los datos");
    }
    articles.value = data;
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});

const createArticle = (newArticle) => articles.value.push(newArticle);
</script>

<template>
  <v-container max-width="800px">
    <v-col>
      <header class="text-center">
        <h1>Artículos App</h1>
      </header>
      <main>
        <router-view :articles="articles" @create-article="createArticle" />
      </main>
      <footer>
        <v-container>
          <v-col class="text-center">
            <v-btn
              v-if="$route.name !== 'home'"
              @click="$router.push({ name: 'home' })"
              >Volver</v-btn
            >
            <p>Ies el Grao - DWEC - Curso 2025/26</p>
          </v-col>
        </v-container>
      </footer>
    </v-col>
  </v-container>
</template>

<style scoped></style>
