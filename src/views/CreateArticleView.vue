<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  categories: { type: Array, required: true },
});

const emit = defineEmits(["add-article"]);

const title = ref("");
const description = ref("");
const price = ref(0);
const categoryId = ref(null);

const clearForm = () => {
  title.value = "";
  description.value = "";
  price.value = 0;
  categoryId.value = null;
};

const submit = () => {
  emit("add-article", {
    title: title.value,
    description: description.value,
    price: price.value,
    categoryId: categoryId.value,
  });
  router.push({ name: "list-articles" });
};
</script>

<template>
  <v-container class="py-6">
    <v-row justify="center">
      <v-col cols="12" md="7">
        <v-card elevation="3" rounded="lg">
          <v-card-title class="text-h5 pa-4">Crear artículo</v-card-title>
          <v-card-text>
            <v-text-field label="Título" v-model="title" />
            <v-textarea label="Descripción" v-model="description" />
            <v-number-input
              control-variant="split"
              v-model="price"
              label="Precio (€)"
            />
            <v-select
              label="Categoría"
              v-model="categoryId"
              :items="categories"
              item-title="name"
              item-value="id"
              :rules="[(v) => !!v || 'La categoría es obligatoria']"
            />
          </v-card-text>
          <v-card-actions class="pa-4">
            <v-btn color="indigo-darken-3" variant="flat" @click="submit">
              Crear
            </v-btn>
            <v-btn variant="outlined" @click="clearForm">Limpiar</v-btn>
            <v-btn
              variant="outlined"
              @click="router.push({ name: 'list-articles' })"
            >
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
