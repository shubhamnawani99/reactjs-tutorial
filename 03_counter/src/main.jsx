import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

document.getElementsByTagName('body')[0].style.backgroundColor = '#212121';
document.getElementsByTagName('body')[0].style.color = '#fff'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)