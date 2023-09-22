import Card from './components/Card'
import Navbar from './components/Navbar'
import { useFetch } from './hooks/useFetch'
import styles from './styles/App.module.css'

function App () {
  const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all')

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.content}>
        {error && <p>Error: {error}</p>}
        {loading && <p>Loading...</p>}
        {data?.map((country, index) => {
          return(
            <Card key={index} country={country} />
          )
        })}

      </main>
    </>
  )
}

export default App
