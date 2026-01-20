import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { LandingPage } from './pages/LandingPage';
import { DocsPage } from './pages/DocsPage';
import { DocsRedirect } from './pages/DocsRedirect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs/*" element={<DocsPage />} />
        <Route path="*" element={<DocsRedirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
