import styles from '../styles/GridView.module.css'
import Card from './Card';

function GridView({ data }) {
  return (
    <div className={styles.grid}>
      {data?.map((country, index) => {
        return(
          <Card key={index} country={country} />
        )
      })}
    </div>
  );
}

export default GridView;