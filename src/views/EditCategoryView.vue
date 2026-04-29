<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  id: { type: String, default: null },
  categories: { type: Array, required: true },
});

const emit = defineEmits(["add-category", "update-category"]);

const isEditing = computed(() => !!props.id);
const name = ref("");

onMounted(() => {
  if (isEditing.value) {
    const found = props.categories.find((c) => c.id === Number(props.id));
    if (found) name.value = found.name;
  }
});

const submit = () => {
  if (isEditing.value) {
    emit("update-category", { id: Number(props.id), name: name.value });
  } else {
    emit("add-category", { name: name.value });
  }
  router.push({ name: "list-categories" });
};
</script>

<template>
  <v-container class="py-6">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <v-card elevation="3" rounded="lg">
          <v-card-title class="text-h5 pa-4">
            {{ isEditing ? "Editar categoría" : "Nueva categoría" }}
          </v-card-title>
          <v-card-text>
            <v-text-field label="Nombre" v-model="name" />
          </v-card-text>
          <v-card-actions class="pa-4">
            <v-btn color="indigo-darken-3" variant="flat" @click="submit">
              {{ isEditing ? "Guardar cambios" : "Crear" }}
            </v-btn>
            <v-btn
              variant="outlined"
              @click="router.push({ name: 'list-categories' })"
            >
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
