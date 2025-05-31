import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrintableApp from './printable'
import InteractiveApp from './interactive'
import { HashRouter, Routes, Route } from "react-router";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<InteractiveApp />} />
          <Route path="/hoja" element={<PrintableApp />} />
        </Routes>
      </HashRouter>
    </HeroUIProvider>
  </StrictMode>,
)
