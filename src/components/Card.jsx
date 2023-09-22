import styles from '../styles/Card.module.css'

function Card({ country, handleClick }) {
  const {
    name,
    capital,
    flag,
    population,
    continents,
  } = country

  return (
    <>
      <article onClick={handleClick} className={styles.card}>
        <h3>{continents}</h3>
        <h2>{flag} {name?.common}</h2>
        <div className={styles.body}>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
        </div>
      </article>
    </>
  );
}

export default Card;