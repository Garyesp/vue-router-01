<script setup>
import { ref } from "vue";

const props = defineProps({
  articles: { type: Array, required: true },
  categories: { type: Array, required: true },
});

const emit = defineEmits(["delete-article"]);

const confirmDialog = ref(false);
const pendingDeleteId = ref(null);

const categoryName = (id) => {
  const cat = props.categories.find((c) => c.id === id);
  return cat ? cat.name : "Sin categoría";
};

const requestDelete = (id) => {
  pendingDeleteId.value = id;
  confirmDialog.value = true;
};

const confirmDelete = () => {
  emit("delete-article", pendingDeleteId.value);
  confirmDialog.value = false;
  pendingDeleteId.value = null;
};

const cancelDelete = () => {
  confirmDialog.value = false;
  pendingDeleteId.value = null;
};
</script>

<template>
  <v-container class="py-6">
    <v-row class="mb-4" align="center">
      <v-col>
        <h2 class="text-h5">Listado de artículos</h2>
      </v-col>
      <v-col class="text-right">
        <v-btn
          color="indigo-darken-3"
          variant="flat"
          :to="{ name: 'create-article' }"
        >
          <v-icon icon="mdi-plus" class="mr-1" />
          Nuevo artículo
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="article in articles"
        :key="article.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card elevation="2" rounded="lg" height="100%">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle>
            <v-chip color="indigo" size="small" variant="tonal">
              {{ categoryName(article.categoryId) }}
            </v-chip>
          </v-card-subtitle>
          <v-card-text>{{ article.description }}</v-card-text>
          <v-card-actions>
            <v-chip color="indigo-darken-3" size="small">
              {{ article.price }} €
            </v-chip>
            <v-spacer />
            <v-btn
              icon="mdi-delete"
              color="error"
              variant="text"
              @click="requestDelete(article.id)"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="confirmDialog" max-width="400">
      <v-card>
        <v-card-title>Confirmar eliminación</v-card-title>
        <v-card-text
          >¿Estás seguro de que deseas eliminar este artículo? Esta acción no se
          puede deshacer.</v-card-text
        >
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="cancelDelete">Cancelar</v-btn>
          <v-btn color="error" variant="flat" @click="confirmDelete">
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped></style>
