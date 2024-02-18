<template>
  <div v-for="recette in recipesStore.recipes.recettes" :key="recette.id"></div>
</template>

<script setup lang="ts">
import { useRecipesStore } from "../store/recipesStore";
const recipesStore = useRecipesStore();
</script>
