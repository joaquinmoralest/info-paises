import Navbar from './components/Navbar'
import Container from './components/Container'
import { useFetch } from './hooks/useFetch'
import styles from './styles/App.module.css'
import GridView from './components/GridView'
import { useCountryStore } from './store'
import { useEffect, useState } from 'react'

function App () {
  const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all')
  const [filteredCountries, setFilteredCountries] = useState([])
  const searchedCountry = useCountryStore(state => state.search)
  const filter = useCountryStore(state => state.filter)

  useEffect(() => {
    let countries
    countries = data?.filter(country => country.region === filter)

    setFilteredCountries(countries)
    console.log(filteredCountries)
  }, [filter])

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
          {filter === ''
            ? (searchedCountry.length === 0
              ? <GridView data={data} />
              : <GridView data={searchedCountry} />)
            : (<GridView data={filteredCountries} />)
          }
          {/* {searchedCountry.length === 0
            ? <GridView data={data} />
            : <GridView data={searchedCountry} />} */}
        </Container>
      </main>
    </>
  )
}

export default App
