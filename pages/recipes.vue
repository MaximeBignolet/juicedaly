<template>
  <div class="container mx-auto">
    <h1 class="text-3xl mt-14 mb-10">Recipes</h1>
    <div class="flex flex-wrap flex-col lg:flex-row lg:justify-between gap-3">
      <div
        v-for="recette in recipesStore.recipes.recipes"
        :key="recette.id"
        class="mb-8 cursor-pointer w-[30%]"
      >
        <NuxtLink :to="`recipes/${recette.id}`">
          <img :src="recette.image" alt="" class="aspect-[6/3] object-cover" />
          <p class="uppercase text-xs pt-2 text-red-400">
            {{ recette.category }} <span class="text-gray-300"> - </span>
            <span class="text-gray-400">{{ recette.read_time }} mins read</span>
          </p>
          <div class="w-11/12 pt-3">
            <h2 class="font-light text-2xl">{{ recette.title }}</h2>
            <p class="text-gray-400 text-sm pt-1">
              {{ recette.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRecipesStore } from "../store/recipesStore";

const recipesStore = useRecipesStore();
</script>
