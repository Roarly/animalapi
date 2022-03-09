<script setup>
import Title from "../components/Title.vue";
import List from "../components/List.vue"

import useTodos from "../composables/useTodos";

const {pending, Completed, changeStatus} = useTodos();
</script>

<template>
<div class="min-h-screen bg-blue-100">
  <div class="container flex flex-col pt-8 mx-auto space-y-12">
  <Title></Title>
  
  <div class="flex justify-around">
    <List></List>
    <List isCompleted></List>
  </div>
</div>
</div>
</template>