<script setup lang="ts">
import { useBookStore } from '@/stores/books'
import BookCard from './BookCard/BookCard.vue'

const bookStore = useBookStore()
</script>

<template>
  <section>
    <ul class="grid grid-cols-4">
      <BookCard v-for="book of bookStore.books" :book="book" v-bind:key="book.key" />
    </ul>
  </section>
</template>
