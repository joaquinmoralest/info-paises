import { useEffect, useState } from 'react';
import styles from '../styles/GridView.module.css'
import Card from './Card';
import Modal from './Modal';
import list from '../assets/icons/list.svg'
import grid from '../assets/icons/grid.svg'
import { useCountryStore } from '../store';
import { useFetch } from '../hooks/useFetch';

function GridView({ countries }) {
  const {data} = useFetch('https://restcountries.com/v3.1/all')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({})
  const [isGridSelected, setIsGridSelected] = useState(true)
  const [continents, setContinents] = useState()
  const [filter, setFilter] = useState()
  const updateFilter = useCountryStore((state) => state.updateFilter)
  const updateSearch = useCountryStore((state) => state.updateSearch)

  useEffect(() => {
    let allContinents = []
    data.forEach(country => {
      allContinents.push(country.region)
    })

    let setWithoutDuplicate = new Set(allContinents)
    let continentsWithoutDuplicates = Array.from(setWithoutDuplicate)

    setContinents(continentsWithoutDuplicates)
  }, [data])

  function showModal(countryInfo) {
    setIsOpen(true)
    setSelectedCountry(countryInfo)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function handleChange(e) {
    setFilter(e.target.value)
    updateFilter(filter)
  }

  function resetFilters() {
    updateFilter('')
    updateSearch([])
  }

  return (
    <>
      <section className={styles.controls}>
        <div className={styles.displayControls}>
          <button onClick={() => setIsGridSelected(true)}>
            <img src={grid} alt="" />
          </button>
          <button onClick={() => setIsGridSelected(false)}>
            <img src={list} alt="" />
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