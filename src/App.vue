<template>
  <v-container max-width="800px">
    <v-col>
      <header class="text-center">
        <h1>Artículos App</h1>
      </header>
      <main>
        <router-view />
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
