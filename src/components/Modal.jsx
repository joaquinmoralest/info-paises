import styles from '../styles/Modal.module.css'

function Modal({ country, isOpen, handleClose }) {
  const {
    name,
    // currencies,
    // capital,
    // languages,
    // latlng,
    // flag,
    // maps,
    // population,
    // timezones,
    // continents,
    // flags,
    // coatOfArms,
  } = country

  return (
    <div className={`${styles.overlay} ${isOpen && styles.show}`}>
      <div className={styles.modal}>
        <button onClick={handleClose}>X</button>
        <h2>{name?.common}</h2>
      </div>
    </div>
  );
}

export default Modal;