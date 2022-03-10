<script setup>
import { ref } from "vue";
import { useAnime } from '../composables/useAnime';

const { animes, search } = useAnime();
const searchItem = ref("");
</script>



<template>
  <div>
    <input
      v-model="searchItem"
      @change="search(searchItem)"
      type="text"
      placeholder="Search an Anime Quote..."
      class="w-full py-4 mt-16 text-xl text-center rounded-full"
    />
    <div class="grid grid-cols-2 gap-16 pt-16">
      <div v-for="(anime, index) in animes" :key="index">
        <p class="font-semibold">{{ "Anime : " + anime.anime }}</p>
        <p class="font-semibold">{{ "Character : " + anime.character}}</p>
        <p class="font-semibold">{{ "Quote : " + anime.quote }}</p>
      </div>
    </div>
  </div>
</template>