import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routers/router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import ThemeProvider from './providers/ThemeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)