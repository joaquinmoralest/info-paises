import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useCountryStore, useDisplayStore } from "../store"
import styles from '../styles/GridView.module.css'
import { IconLayoutGrid, IconList } from "@tabler/icons-react"

function DisplayBar() {
  const {data} = useFetch('https://restcountries.com/v3.1/all')
  const [continents, setContinents] = useState()
  const [filter, setFilter] = useState()
  const updateFilter = useCountryStore((state) => state.updateFilter)
  const updateSearch = useCountryStore((state) => state.updateSearch)
  const updateFilteredCountries = useCountryStore((state) => state.updateFilteredCountries)
  const setDisplayGrid = useDisplayStore((state) => state.setDisplayGrid)
  const setDisplayList = useDisplayStore((state) => state.setDisplayList)

  useEffect(() => {
    let allContinents = []
    data.forEach(country => {
      allContinents.push(country.region)
    })

    let setWithoutDuplicate = new Set(allContinents)
    let continentsWithoutDuplicates = Array.from(setWithoutDuplicate)

    setContinents(continentsWithoutDuplicates)
  }, [data])

  useEffect(() => {
    updateFilter(filter)
    filterCountries()
  }, [filter])

  function handleChange(e) {
    setFilter(e.target.value)
  }

  function resetFilters() {
    updateFilter('')
    updateSearch([])
    updateFilteredCountries([])
  }

  function filterCountries() {
    const countries = data?.filter(country => country.region === filter)
    updateFilteredCountries(countries)
  }

  return (
    <section className={styles.controls}>
      <div className={styles.displayControls}>
        <button onClick={setDisplayGrid}>
          <IconLayoutGrid />
        </button>
        <button onClick={setDisplayList}>
          <IconList />
        </button>
      </div>
      <div className={styles.filters}>
        <button onClick={resetFilters}>Reset</button>
        <select onChange={handleChange}>
          <option value="">Select a region</option>
          {continents?.map(continent => {
            return(
              <option key={continent} value={continent}>{continent}</option>
            )
          })}
        </select>
      </div>
    </section>
  );
}

export default DisplayBar;