import sun from '../assets/icons/sun.svg'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <input type="text" />
      <img src={sun} alt="" />
    </nav>
  );
}

export default Navbar;