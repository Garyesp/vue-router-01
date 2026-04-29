<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navLinks = [
  { label: "Home", route: "home" },
  { label: "Artículos", route: "list-articles" },
  { label: "Categorías", route: "list-categories" },
];
</script>

<template>
  <v-app-bar color="indigo-darken-3" elevation="4">
    <v-app-bar-title>
      <v-icon icon="mdi-xml" class="mr-2" />
      Proyecto Integrador DWEC
    </v-app-bar-title>
    <template #append>
      <v-btn
        v-for="link in navLinks"
        :key="link.route"
        variant="text"
        class="text-white"
        @click="router.push({ name: link.route })"
      >
        {{ link.label }}
      </v-btn>
    </template>
  </v-app-bar>
</template>
