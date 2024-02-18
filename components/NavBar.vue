<template>
  <div class="h-20 flex justify-between items-center relative">
    <div class="pl-5 flex items-center gap-3 py-5">
      <img src="~/assets/image/logo.png" alt="" class="h-6 w-6" />
      <p class="text-[#11BCC7] font-semibold">JUICEDAILY</p>
    </div>
    <div v-if="isLargeScreen" class="py-5">
      <nav class="font-thin text-xl text-black">
        <NuxtLink to="#" class="hover:text-[#11BCC7]">Browse</NuxtLink>
        <NuxtLink to="#" class="mx-20 hover:text-[#11BCC7]">Trending</NuxtLink>
        <NuxtLink to="#" class="hover:text-[#11BCC7]">Contributors</NuxtLink>
        <NuxtLink to="#" class="ml-20 hover:text-[#11BCC7]">Community</NuxtLink>
      </nav>
    </div>
    <div
      v-if="isLargeScreen"
      class="bg-red-400 h-full p-5 m-0 flex items-center cursor-pointer"
    >
      <FontAwesomeIcon
        :icon="faMagnifyingGlass"
        size="lg"
        class="h-6 text-white font-bold"
      />
    </div>
    <div v-else>
      <div
        class="p-2 cursor-pointer space-y-2 bg-[#11BCC7] w-fit"
        :class="onMenuClick ? 'rounded-tl-md' : 'rounded'"
        @click="toggleMenu"
      >
        <span
          class="block w-6 h-0.5 bg-gray-100 animate-pulse"
          v-if="!onMenuClick"
        ></span>
        <span
          class="block w-6 h-0.5 bg-gray-100 animate-pulse"
          v-if="!onMenuClick"
        ></span>
        <span
          class="block w-6 h-0.5 bg-gray-100 animate-pulse"
          v-if="!onMenuClick"
        ></span>
        <FontAwesomeIcon
          v-else
          :icon="faXmark"
          class="h-6 w-6 text-gray-100 animate-pulse"
        />
      </div>
      <div class="bg-white absolute w-full left-10 h-fit" v-if="onMenuClick">
        <nav
          class="font-thin text-black pl-10 pt-10 gap-5 flex flex-col text-xl"
        >
          <NuxtLink to="#" class="hover:text-[#4E9AA9]">Browse</NuxtLink>
          <NuxtLink to="#">Trending</NuxtLink>
          <NuxtLink to="#">Contributors</NuxtLink>
          <NuxtLink to="#" class="pb-5">Community</NuxtLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faMagnifyingGlass } from "@fortawesome/pro-light-svg-icons";
import { faXmark } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useMediaQuery } from "@vueuse/core/index.cjs";

const isLargeScreen = useMediaQuery("(min-width: 1024px)");
const onMenuClick = ref<boolean>(false);

const toggleMenu = () => {
  onMenuClick.value = !onMenuClick.value;
};
</script>
