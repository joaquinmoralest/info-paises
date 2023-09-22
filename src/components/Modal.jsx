import { useState } from 'react';
import styles from '../styles/Modal.module.css'

function Modal({ country }) {
  const {
    name,
    currencies,
    capital,
    languages,
    latlng,
    flag,
    maps,
    population,
    timezones,
    continents,
    flags,
    coatOfArms,
  } = country

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{name.common}</h2>
      </div>
    </div>
  );
}

export default Modal;