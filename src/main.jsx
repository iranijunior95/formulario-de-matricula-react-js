import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
