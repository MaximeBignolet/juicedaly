<template>
  <div
    class="h-screen w-screen bg-[url('~/assets/image/bg-home.png')] bg-no-repeat bg-cover"
  >
    <div class="lg:flex lg:justify-end lg:my-auto lg:h-5/6 lg:w-full">
      <div class="lg:flex lg:flex-col lg:justify-center lg:w-1/2">
        <div
          class="bg-[#4E9AA9]/15 lg:w-[45%] lg:flex lg:gap-5 lg:items-center lg:justify-between lg:p-3 cursor-pointer hover:scale-[1.1] transition-all ease-linear"
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
