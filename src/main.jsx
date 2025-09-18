import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/ui/navbar/Navbar.jsx'
import { Sidebar } from './components/ui/sidebar/Sidebar.jsx'
import { Footer } from './components/ui/footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
