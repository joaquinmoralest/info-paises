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
    flags,
    coatOfArms,
  } = country

  return (
    <div className={`${styles.overlay} ${isOpen && styles.show}`}>
      <div className={styles.modal}>
        <button onClick={handleClose}>X</button>
        <h2 className={styles.title}>{name?.common}</h2>
        <div className={styles.images}>
          <img src={flags?.png} alt="" />
          <img src={coatOfArms?.png} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Modal;