<template>
  <div
    class="h-screen bg-[url('~/assets/image/bg-home.png')] bg-no-repeat bg-cover"
  >
    <div class="flex justify-end my-auto h-5/6">
      <div class="flex flex-col justify-center">
        <div
          class="bg-[#4E9AA9]/15 w-[40%] flex gap-5 items-center p-3 cursor-pointer hover:scale-[1.1] transition-all ease-linear"
        >
          <p class="bg-white w-fit text-xs p-2 text-[#4E9AA9]">NEW RECIPE</p>
          <p class="text-[#4E9AA9] text-sm">
            Delicious fruit juice combinations
          </p>
          <FontAwesomeIcon :icon="faArrowRight" class="h-3 text-[#4E9AA9]" />
        </div>
        <div class="pt-5">
          <h1 class="font-bold text-7xl w-[70%]">
            Simple and Tasty Juice Recipes
          </h1>
          <p class="w-1/2 pt-5 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            deleniti non laudantium asperiores minus, quo commodi consequuntur
            beatae eos nesciunt.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
