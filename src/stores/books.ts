import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Book } from '@/types/book'

export const useBookStore = defineStore('books', () => {
  const books = ref<Book[]>([])

  const setBooks = (newBooks: Book[]) => {
    books.value = newBooks
  }

  return { books, setBooks }
})
