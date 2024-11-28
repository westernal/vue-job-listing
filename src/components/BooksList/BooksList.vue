<script setup lang="ts">
import { useBookStore } from '@/stores/books'
import BookCard from './BookCard/BookCard.vue'

const bookStore = useBookStore()
</script>

<template>
  <section class="p-10">
    <p v-if="bookStore.loading">Loading...</p>

    <p v-if="bookStore.books.length === 0 && !bookStore.loading">No Items</p>

    <ul v-if="!bookStore.loading && bookStore.books.length > 0" class="grid grid-cols-4 gap-5">
      <BookCard v-for="book of bookStore.books" :book="book" v-bind:key="book.key" />
    </ul>
  </section>
</template>
