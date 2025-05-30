import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrintableApp from './printable'
import InteractiveApp from './interactive'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/escuadron-eevee-checklist'>
    <Routes>
      <Route path="/" element={<InteractiveApp />} />
      <Route path="/hoja" element={<PrintableApp />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
