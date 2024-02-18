<template>
  <div
    class="h-screen w-screen lg:bg-[url('~/assets/image/bg-home.png')] bg-no-repeat lg:bg-cover"
  >
    <div v-show="!isLargeScreen">
      <img src="~/assets/image/bg-home.png" alt="" />
    </div>
    <div
      class="lg:flex lg:justify-end lg:my-auto lg:h-5/6 lg:w-full lg:bg-none"
      :class="!isLargeScreen ? 'bg-[#F2F7FA] overflow-hidden h-screen' : ''"
    >
      <div
        class="flex flex-col lg:justify-center xl:w-1/2 lg:w-2/3"
        :class="!isLargeScreen ? 'container mx-auto px-3' : ''"
      >
        <div
          class="bg-[#4E9AA9]/15 mt-2 xl:w-[55%] lg:w-[65%] flex gap-5 items-center justify-between p-3 cursor-pointer lg:hover:scale-[1.1] transition-all ease-linear"
        >
          <p class="bg-white w-fit text-xs p-2 text-[#4E9AA9]">NEW RECIPE</p>
          <p class="text-[#4E9AA9] text-sm">
            Delicious fruit juice combinations
          </p>
          <FontAwesomeIcon :icon="faArrowRight" class="h-3 text-[#4E9AA9]" />
        </div>
        <div class="lg:pt-5 pt-20">
          <h1 class="font-bold lg:text-7xl text-4xl lg:w-[70%]">
            Simple and Tasty Juice Recipes
          </h1>
          <p class="lg:w-1/2 pt-5 text-gray-300">
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
import { useMediaQuery } from "@vueuse/core";

const isLargeScreen = useMediaQuery("(min-width: 1024px)");
</script>
