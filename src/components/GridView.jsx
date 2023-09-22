import { useState } from 'react';
import styles from '../styles/GridView.module.css'
import Card from './Card';
import Modal from './Modal';

function GridView({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({})

  function showModal(countryInfo) {
    setIsOpen(true)
    setSelectedCountry(countryInfo)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <div className={styles.grid}>
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