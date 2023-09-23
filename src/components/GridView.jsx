import { useEffect, useState } from 'react';
import styles from '../styles/GridView.module.css'
import Card from './Card';
import Modal from './Modal';
import { useCountryStore } from '../store';
import { useFetch } from '../hooks/useFetch';
import { IconLayoutGrid, IconList } from '@tabler/icons-react';

function GridView({ countries }) {
  const {data} = useFetch('https://restcountries.com/v3.1/all')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({})
  const [isGridSelected, setIsGridSelected] = useState(true)
  const [continents, setContinents] = useState()
  const [filter, setFilter] = useState()
  const updateFilter = useCountryStore((state) => state.updateFilter)
  const updateSearch = useCountryStore((state) => state.updateSearch)
  const updateFilteredCountries = useCountryStore((state) => state.updateFilteredCountries)

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

  function showModal(countryInfo) {
    setIsOpen(true)
    setSelectedCountry(countryInfo)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function filterCountries() {
    const countries = data?.filter(country => country.region === filter)
    updateFilteredCountries(countries)
  }

  function handleChange(e) {
    setFilter(e.target.value)
  }

  function resetFilters() {
    updateFilter('')
    updateSearch([])
    updateFilteredCountries([])
  }

  return (
    <>
      <section className={styles.controls}>
        <div className={styles.displayControls}>
          <button onClick={() => setIsGridSelected(true)}>
            <IconLayoutGrid />
          </button>
          <button onClick={() => setIsGridSelected(false)}>
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
      <div className={isGridSelected ? styles.grid : styles.list}>
        {countries?.map((country, index) => {
          return(
            <Card 
              key={index} 
              country={country} 
              handleClick={() => showModal(country)} 
            />
          )
        })}
      </div>
      <Modal
        isOpen={isOpen} 
        handleClose={closeModal}
        country={selectedCountry} 
      />
    </>
  );
}

export default GridView;