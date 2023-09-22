import styles from '../styles/Card.module.css'

function Card({ country }) {
  return (
    <article className={styles.card}>
      <h2>{country?.flag} {country?.name?.common}</h2>
    </article>
  );
}

export default Card;