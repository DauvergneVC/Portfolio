import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import App from './pages/App.jsx'
import Project from './pages/Proyects.jsx';
import NotFoundPage from './pages/404.jsx';

import MainLayout from './Layout/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

    {/* Principal Routing */}
    <Route element={<MainLayout />}>
      <Route index element={<App />} />
      <Route path="projects" element={<Project/>} />
    </Route>

    {/* Page not found */}
    <Route path='*' element={<NotFoundPage/>} />

    </Routes>
  </BrowserRouter>
  
)
