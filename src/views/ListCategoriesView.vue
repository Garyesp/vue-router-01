<script setup>
import { ref } from "vue";

const props = defineProps({
  categories: { type: Array, required: true },
});

const emit = defineEmits(["delete-category"]);

const confirmDialog = ref(false);
const pendingDeleteId = ref(null);

const requestDelete = (id) => {
  pendingDeleteId.value = id;
  confirmDialog.value = true;
};

const confirmDelete = () => {
  emit("delete-category", pendingDeleteId.value);
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
        <h2 class="text-h5">Listado de categorías</h2>
      </v-col>
      <v-col class="text-right">
        <v-btn
          color="indigo-darken-3"
          variant="flat"
          :to="{ name: 'create-category' }"
        >
          <v-icon icon="mdi-plus" class="mr-1" />
          Nueva categoría
        </v-btn>
      </v-col>
    </v-row>

    <v-card elevation="2" rounded="lg">
      <v-list lines="one">
        <v-list-item v-for="cat in categories" :key="cat.id" :title="cat.name">
          <template #append>
            <v-btn
              icon="mdi-pencil"
              variant="text"
              :to="{ name: 'edit-category', params: { id: cat.id } }"
            />
            <v-btn
              icon="mdi-delete"
              color="error"
              variant="text"
              @click="requestDelete(cat.id)"
            />
          </template>
        </v-list-item>
      </v-list>
    </v-card>

    <v-dialog v-model="confirmDialog" max-width="400">
      <v-card>
        <v-card-title>Confirmar eliminación</v-card-title>
        <v-card-text>
          ¿Estás seguro de que deseas eliminar esta categoría? Esta acción no se
          puede deshacer.
        </v-card-text>
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
