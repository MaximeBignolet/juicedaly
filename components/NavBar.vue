<template>
  <div class="h-20 flex justify-between items-center">
    <div class="pl-5 flex items-center gap-3 py-5">
      <img src="~/assets/image/logo.png" alt="" class="h-6 w-6" />
      <p class="text-[#11BCC7] font-semibold">JUICEDAILY</p>
    </div>
    <div class="py-5">
      <nav class="font-thin text-xl">
        <NuxtLink to="#">Browse</NuxtLink>
        <NuxtLink to="#" class="mx-20">Trending</NuxtLink>
        <NuxtLink to="#">Contributors</NuxtLink>
        <NuxtLink to="#" class="ml-20">Community</NuxtLink>
      </nav>
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
</script>
