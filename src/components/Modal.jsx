import styles from '../styles/Modal.module.css'

function Modal({ country, isOpen, handleClose }) {
  const {
    name,
    currencies,
    capital,
    languages,
    latlng,
    maps,
    population,
    timezones,
    region,
    flags,
    coatOfArms,
  } = country

  let mappedCurriencies
  if (currencies) {
    mappedCurriencies = Object.values(currencies)
  }
  let mappedLanguages = []
  if (languages) {
    mappedLanguages = Object.values(languages)
  }

  return (
    <div className={`${styles.overlay} ${isOpen && styles.show}`}>
      <div className={styles.modal}>
        <button onClick={handleClose}>X</button>
        <h2 className={styles.title}>{name?.common}</h2>
        <div className={styles.images}>
          <img src={flags?.png} alt="" />
          <img src={coatOfArms?.png} alt="" />
        </div>
        <span>{region}</span>
        <div className={styles.body}>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <p>Curriencies: </p>
          <ul>
            {mappedCurriencies?.map((currency, index) => {
              return(
                <li key={index}>{currency?.name}</li>
              )
            })}
          </ul>
          <p>Languages:</p>
          <ul>
            {mappedLanguages?.map((language, index) => {
              return(
                <li key={index}>{language}</li>
              )
            })}
          </ul>
          <p>Latitude: {latlng && latlng[0]}</p>
          <p>Longitude: {latlng && latlng[1]}</p>
          <p>Timezones: </p>
          <ul>
            {timezones?.map((timezone, index) => {
              return(
                <li key={index}>{timezone}</li>
              )
            })}
          </ul>
        </div>
        <a href={maps?.googleMaps} target='_blank' rel="noreferrer">View in map</a>
      </div>
    </div>
  );
}

export default Modal;