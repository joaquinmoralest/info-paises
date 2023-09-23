import { create } from 'zustand'

export const useCountryStore = create((set) => {
  return {
    search: [],
    filter: '',
    updateSearch: (newSearch) => set({ search: newSearch }),
    updateFilter: (newFilter) => set({ filter: newFilter })
  }
})
