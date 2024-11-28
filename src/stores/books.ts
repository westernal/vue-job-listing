import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Book } from '@/types/book'

export const useBookStore = defineStore('books', () => {
  const books = ref<Book[]>([])
  const loading = ref(false)

  const setBooks = (newBooks: Book[]) => {
    books.value = newBooks
  }

  const setLoading = (isLoading: boolean) => {
    loading.value = isLoading
  }

  return { books, loading, setBooks, setLoading }
})
