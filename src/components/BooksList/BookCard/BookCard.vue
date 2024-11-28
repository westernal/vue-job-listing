<script setup lang="ts">
import type { Book } from '@/types/book'
import type { PropType } from 'vue'

defineProps({
  book: { type: Object as PropType<Book> },
})
</script>

<template>
  <li class="bg-slate-400">
    <h3>{{ book?.title }}</h3>
    <p>Author: {{ book?.author_name?.[0] }}</p>
  </li>
</template>
