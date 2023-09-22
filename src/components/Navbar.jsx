import sun from '../assets/icons/sun.svg'
import styles from '../styles/Navbar.module.css'
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <SearchBar />
      <img src={sun} alt="" />
    </nav>
  );
}

export default Navbar;