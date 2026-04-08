// App.jsx
import { useState } from 'react'

import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      {currentPage === 'home' && (
        <Home onNavigate={setCurrentPage} />
      )}
      {currentPage === 'about' && (
        <About onNavigate={setCurrentPage} />
      )}
    </>
  )
}

export default App

