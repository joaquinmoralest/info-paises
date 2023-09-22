import styles from '../styles/Card.module.css'

function Card({ country, handleClick }) {
  const {
    name,
    capital,
    flag,
    population,
    languages
  } = country

  let mappedLanguages = []
  if (languages) {
    mappedLanguages = Object.values(languages).join(', ')
  }

  return (
    <>
      <article onClick={handleClick} className={styles.card}>
        <h2>{flag} {name?.common}</h2>
        <div className={styles.body}>
          <p>Capital: <span>{capital}</span></p>
          <p>Population: <span>{population}</span></p>
          <p>Languages: <span>{mappedLanguages}</span></p>
        </div>
      </article>
    </>
  );
}

export default Card;