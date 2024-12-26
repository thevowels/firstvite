import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import './App.css'

// import App from './App.jsx'
import Home from "./components/home.jsx";
import Abc from "./abc/page.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="abc" element={<Abc />}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
