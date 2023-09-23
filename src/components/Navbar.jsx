import { useDisplayStore } from '../store';
import styles from '../styles/Navbar.module.css'
import SearchBar from './SearchBar';
import { useEffect } from 'react';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';

function Navbar() {
  const theme = useDisplayStore((state) => state.theme)
  const setDarkTheme = useDisplayStore((state) => state.setDarkTheme)
  const setLightTheme = useDisplayStore((state) => state.setLightTheme)

  useEffect(() => {
    const body = document.querySelector('body')
    body.className = theme
  }, [theme])

  return (
    <nav className={styles.nav}>
      <SearchBar />
      {theme === 'light'
        ? <IconMoonFilled onClick={theme === 'light' ? setDarkTheme : setLightTheme} />
        : <IconSunFilled onClick={theme === 'light' ? setDarkTheme : setLightTheme} />
      }
    </nav>
  );
}

export default Navbar;