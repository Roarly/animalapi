<script setup>
import useTodos from '../composables/useTodos';
const {pending, Completed, changeStatus} = useTodos();

defineProps({
    isCompleted: {
        default: false,
        type: Boolean,
    },
});

</script>

<template>
    <div class="w-1/3">
      <h3 class="text-2xl text-center" :class="isCompleted ? 'text-blue-400' : 'text-yellow-300'">{{isCompleted ? "Purchased" : "Pending"}}</h3>
      <ul class="pt-8 space-y-4">
        <li
        v-for="todo in (isCompleted ? Completed : pending)"
        :key="todo.id"
        @click="changeStatus(todo.id)"
        :class="isCompleted ? 'text-gray-400 hover:bg-blue-400' : 'text-blue-400 hover:bg-gray-400'"
         class="w-full px-4 py-2 font-bold text-center transition-colors duration-300 bg-yellow-200 rounded-lg hover:cursor-pointer hover:text-yellow-400">
         
         {{todo.content}}
         </li>
        
      </ul>
    </div>
</template>