import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Family from './pages/Family'   // ✅ NEW
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* ✅ NEW ROUTE */}
        <Route path="/family" element={<Family />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App