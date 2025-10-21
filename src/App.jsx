import Navbar from './components/Navbar'
import Container from './components/Container'
import { useFetch } from './hooks/useFetch'
import styles from './styles/App.module.css'
import GridView from './components/GridView'
import { useCountryStore } from './store'

function App () {
  const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all?fields=name,capital,population,languages,currencies,latlng,timezones,coatOfArms,flags,region')
  const searchedCountry = useCountryStore(state => state.search)
  const filter = useCountryStore(state => state.filter)
  const filteredCountries = useCountryStore(state => state.filteredCountries)

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
          {filter === '' || filter === undefined
            ? (searchedCountry.length === 0
              ? <GridView countries={data} />
              : <GridView countries={searchedCountry} />)
            : (<GridView countries={filteredCountries} />)
          }
        </Container>
      </main>
    </>
  )
}

export default App
