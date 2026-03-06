<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const emit = defineEmits(["create-article"]);

const title = ref("");
const description = ref("");
const price = ref(0);

const createArticle = (newArticle) => {
  emit("create-article", newArticle);
  router.push({ name: "list-articles" });
};
</script>
<template>
  <header>
    <v-container>
      <v-col>
        <h2>Crear artículo</h2>
      </v-col>
    </v-container>
  </header>
  <main>
    <v-container>
      <v-col>
        <!-- form inputs -->
        <v-container>
          <v-col>
            <v-text-field label="Título" v-model="title"></v-text-field>
            <v-textarea label="Descripción" v-model="description"></v-textarea>
            <v-number-input
              control-variant="split"
              v-model="price"
            ></v-number-input>
          </v-col>
        </v-container>

        <!-- form actions -->
        <v-container>
          <v-row>
            <v-btn @click="createArticle({ title, description, price })">
              Crear
            </v-btn>
            <v-btn @click=""> Limpiar </v-btn>
          </v-row>
        </v-container>
      </v-col>
    </v-container>
  </main>
</template>

<style scoped></style>
