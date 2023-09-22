import Navbar from './components/Navbar'
import Container from './components/Container'
import { useFetch } from './hooks/useFetch'
import styles from './styles/App.module.css'
import GridView from './components/GridView'
import { useCountryStore } from './store'

function App () {
  const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all')
  const searchedCountry = useCountryStore(state => state.search)

  return (
    <>
      <header className={styles.header}>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className={styles.content}>
        <Container>
          {error && <p>Error: {error}</p>}
          {loading && <p>Loading...</p>}
          {searchedCountry.length === 0
            ? <GridView data={data} />
            : <GridView data={searchedCountry} />}
        </Container>
      </main>
    </>
  )
}

export default App
