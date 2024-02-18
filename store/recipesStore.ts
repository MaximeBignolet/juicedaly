import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import recipesData from "~/data/recette.json";

export const useRecipesStore = defineStore("recipesStore", () => {
  const recipes = useStorage("recipes", recipesData);
  return {
    recipes,
  };
});
