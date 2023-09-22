import { create } from 'zustand'

export const useCountryStore = create((set) => {
  return {
    search: [],
    updateSearch: (newSearch) => set({ search: newSearch }),
  }
})
