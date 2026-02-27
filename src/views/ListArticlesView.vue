<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

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
</script>

<template>
  <v-container>
    <v-col>
      <header>
        <v-container>
          <v-col>
            <h1>Listado de artículos</h1>
          </v-col>
        </v-container>
      </header>
      <main>
        <v-container>
          <v-row>
            <div v-for="article in articles" class="article__container">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <p>{{ article.price }}</p>
            </div>
          </v-row>
        </v-container>
      </main>
    </v-col>
  </v-container>
</template>

<style scoped>
.article__container {
  border: 1px solid black;
  margin: 10px;
  background: lightblue;
  max-width: 200px;
}

.item {
  max-width: 50px;
  border: 1px solid red;
}
</style>
