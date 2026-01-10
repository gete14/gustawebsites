import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-color)',
        fontSize: '1.2rem'
      }}
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  )
}

export default ThemeToggle
