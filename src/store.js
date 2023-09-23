import { create } from 'zustand'

export const useCountryStore = create((set) => {
  return {
    search: [],
    filter: '',
    filteredCountries: [],
    updateSearch: (newSearch) => set({ search: newSearch }),
    updateFilter: (newFilter) => set({ filter: newFilter }),
    updateFilteredCountries: (newFilteredCountries) => set({ filteredCountries: newFilteredCountries })
  }
})
