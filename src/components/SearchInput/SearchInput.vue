<script setup lang="ts">
import { useBookStore } from '@/stores/books'
import axios from 'axios'
import { ref } from 'vue'

const query = ref('')
let debounceTimer: number | null = null
let abortController: AbortController | null = null
const bookStore = useBookStore()

const searchBooks = async () => {
  if (!query.value) {
    bookStore.setBooks([]) // Clear books if query is empty
    return
  }

  if (abortController) {
    abortController.abort()
  }

  // Create a new AbortController
  abortController = new AbortController()

  try {
    bookStore.setLoading(true)
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${query.value}&limit=10`,
      { signal: abortController.signal },
    )

    bookStore.setBooks(response.data.docs)
  } catch (error) {
    console.error(error)
  } finally {
    bookStore.setLoading(false)
  }
}

const debouncedSearchBooks = () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer) // Clear previous timer
  }

  debounceTimer = setTimeout(() => {
    searchBooks() // Call the search function after the delay
  }, 300) // 300ms debounce delay
}
</script>

<template>
  <section class="p-5">
    <input
      class="p-3 rounded bg-slate-400 w-full"
      placeholder="Search Books"
      type="text"
      v-model="query"
      :onkeyup="debouncedSearchBooks"
    />
  </section>
</template>
