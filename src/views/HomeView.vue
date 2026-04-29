<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="4" rounded="lg">
          <v-card-item class="pa-6">
            <div class="d-flex align-center mb-2">
              <v-icon
                icon="mdi-package-variant-closed"
                size="40"
                color="indigo-darken-3"
                class="mr-3"
              />
              <v-card-title class="text-h4">Bienvenido</v-card-title>
            </div>
            <v-card-subtitle class="text-subtitle-1">
              Sistema de Gestión de Artículos y Categorías
            </v-card-subtitle>
          </v-card-item>
          <v-card-text class="px-6 pb-4">
            <p>
              Esta aplicación es una
              <strong>Single Page Application (SPA)</strong> construida con Vue
              3, Vue Router y Vuetify. Permite gestionar un catálogo de
              artículos organizados por categorías, con persistencia local
              mediante <code>localStorage</code>.
            </p>
          </v-card-text>
          <v-card-actions class="pa-6 pt-0 gap-2">
            <v-btn
              color="indigo-darken-3"
              variant="flat"
              @click="$router.push({ name: 'list-articles' })"
            >
              Ver artículos
            </v-btn>
            <v-btn
              color="indigo-darken-3"
              variant="outlined"
              @click="$router.push({ name: 'list-categories' })"
            >
              Ver categorías
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
