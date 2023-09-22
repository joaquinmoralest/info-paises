import Navbar from './components/Navbar'
import Container from './components/Container'
import { useFetch } from './hooks/useFetch'
import styles from './styles/App.module.css'
import GridView from './components/GridView'

function App () {
  const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all')

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
          <GridView data={data} />
        </Container>
      </main>
    </>
  )
}

export default App
