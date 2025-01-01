import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Lets you find common bugs in your components early during development
  <StrictMode>  
    <App />
  </StrictMode>,
)