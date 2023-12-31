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

export const useDisplayStore = create((set) => {
  return {
    theme: 'light',
    displayView: 'grid',
    setDarkTheme: () => set({ theme: 'dark' }),
    setLightTheme: () => set({ theme: 'light' }),
    setDisplayGrid: () => set({ displayView: 'grid' }),
    setDisplayList: () => set({ displayView: 'list' })
  }
})
