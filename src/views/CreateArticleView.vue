<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

console.log("router: ", router);
console.log("route: ", route);
</script>
<template>
  <h1>Crear artículo</h1>
  <div class="article__container">
    <div class="article__title"></div>
    <div class="article__description"></div>
    <div class="article__price"></div>
  </div>

  <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
  <button @click="$router.push({ name: 'home' })">Volver</button>
</template>
