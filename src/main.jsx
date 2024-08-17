import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContext } from './api/Authcontext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext.Provider value={localStorage.getItem('user')}>
      <App />
    </AuthContext.Provider>
  </StrictMode>,
)
