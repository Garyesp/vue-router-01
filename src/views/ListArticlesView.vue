<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const articles = [
  { title: "Artículo 1", description: "Descripción de artículo 1", price: 10 },
  { title: "Artículo 2", description: "Descripción de artículo 2", price: 10 },
  { title: "Artículo 3", description: "Descripción de artículo 3", price: 10 },
];

const backToHome = () => router.push({ name: "home" });
</script>

<template>
  <h1>Listado de artículos</h1>
  <div class="article__container" v-for="article in articles">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <p>{{ article.price }}</p>
  </div>
  <button @click="backToHome()">Volver</button>
</template>

<style scoped>
.article__container {
  border: 1px solid black;
  margin: 10px;
  background: lightblue;
  max-width: 200px;
}
</style>
