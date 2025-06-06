import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@/i18n/i18.ts'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
     <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
)
