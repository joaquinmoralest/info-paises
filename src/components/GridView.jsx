import { useEffect, useState } from 'react';
import styles from '../styles/GridView.module.css'
import Card from './Card';
import Modal from './Modal';
import list from '../assets/icons/list.svg'
import grid from '../assets/icons/grid.svg'

function GridView({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({})
  const [isGridSelected, setIsGridSelected] = useState(true)
  const [continents, setContinents] = useState()

  useEffect(() => {
    getContinents()
  }, [])

  function showModal(countryInfo) {
    setIsOpen(true)
    setSelectedCountry(countryInfo)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function getContinents() {
    let allContinents = []
    let filteredContinentArrays = []
    data.forEach(country => {
      allContinents.push(Object.values(country.continents))
    })
    
    allContinents.forEach(el => [
      filteredContinentArrays.push(el[0])
    ])

    let setWithoutDuplicate = new Set(filteredContinentArrays)
    let continentsWithoutDuplicates = Array.from(setWithoutDuplicate)

    setContinents(continentsWithoutDuplicates)
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
          <button>Reset</button>
          <select>
            <option value="">Select a region</option>
            {continents.map(continent => {
              return(
                <option key={continent} value={continent}>{continent}</option>
              )
            })}
          </select>
        </div>
      </section>
      <div className={isGridSelected ? styles.grid : styles.list}>
        {data?.map((country, index) => {
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