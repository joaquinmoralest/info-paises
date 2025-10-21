import { useState } from 'react';
import styles from '../styles/SearchBar.module.css'
import { useFetch } from '../hooks/useFetch';
import { useCountryStore } from '../store';

function SearchBar() {
  const [search, setSearch] = useState('')
  const {data} = useFetch('https://restcountries.com/v3.1/all?fields=name,capital,population,languages,currencies,latlng,timezones,coatOfArms,flags,region')
  const updateSearch = useCountryStore((state) => state.updateSearch)

  function handleChange(e) {    
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const dataFiltered = data.filter((country) => search === country?.name?.common.toLowerCase())
    updateSearch(dataFiltered)
  }

  return (
    <form id='searchBar' onSubmit={handleSubmit} className={styles.form}>
      <input onChange={handleChange} type="text" placeholder='Find a country' />
      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchBar;