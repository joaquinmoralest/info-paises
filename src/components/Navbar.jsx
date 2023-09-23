import { useThemeStore } from '../store';
import styles from '../styles/Navbar.module.css'
import SearchBar from './SearchBar';
import { useEffect } from 'react';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';

function Navbar() {
  const theme = useThemeStore((state) => state.theme)
  const setDarkTheme = useThemeStore((state) => state.setDarkTheme)
  const setLightTheme = useThemeStore((state) => state.setLightTheme)
  console.log(theme)

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