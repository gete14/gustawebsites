import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './home/body'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Body />
    </ThemeProvider>
  </StrictMode>
)
