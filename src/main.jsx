

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './home/body'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body/>
  </StrictMode>,
)
