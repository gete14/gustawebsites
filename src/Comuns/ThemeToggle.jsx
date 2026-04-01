import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '../context/ThemeContext'
import '../styles/navbar.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className='button-theme'
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  )
}

export default ThemeToggle
