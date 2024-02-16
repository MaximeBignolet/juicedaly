<template>
  <div class="lg:h-20 lg:flex lg:justify-between lg:items-center">
    <div :class="!isLargeScreen ? 'flex items-center justify-between' : ''">
      <div class="pl-5 flex items-center w-fit gap-3 py-5">
        <img src="~/assets/image/logo.png" alt="" class="h-6 w-6" />
        <p class="text-[#11BCC7] font-semibold">JUICEDAILY</p>
      </div>
      <div v-if="!isLargeScreen">
        <div class="flex flex-col items-end pr-5 pb-2 transition-all">
          <div
            class="p-2 cursor-pointer space-y-2 bg-[#11BCC7] w-fit rounded"
            @click="onMenuClicked"
          >
            <span class="block w-6 h-0.5 bg-gray-100 animate-pulse"></span>
            <span class="block w-6 h-0.5 bg-gray-100 animate-pulse"></span>
            <span class="block w-6 h-0.5 bg-gray-100 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="onMenuClick"
      class="flex flex-col p-1.5 items-end pr-5 pb-2 rounded-md bg-[#4E9AA9]/40 text-white transition-all"
    >
      <NuxtLink to="#">Browse</NuxtLink>
      <NuxtLink to="#" class="lg:mx-20">Trending</NuxtLink>
      <NuxtLink to="#">Contributors</NuxtLink>
      <NuxtLink to="#" class="lg:ml-20">Community</NuxtLink>
    </div>
    <div class="bg-[#FF553C] h-full p-5 m-0 flex items-center cursor-pointer">
      <FontAwesomeIcon
        :icon="faMagnifyingGlass"
        size="lg"
        class="h-6 text-white font-bold"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { faMagnifyingGlass } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useMediaQuery } from "@vueuse/core";

const isLargeScreen = useMediaQuery("(min-width: 1024px)");
const onMenuClick = ref<boolean>(false);

function onMenuClicked() {
  onMenuClick.value = !onMenuClick.value;
}
</script>
