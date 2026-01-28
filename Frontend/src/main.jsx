import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ThemeContext from './context/ThemeContext.jsx'
import Themeprovider from './context/Themeprovider.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
    <BrowserRouter>
    <Themeprovider>
      <AuthProvider>
        <App />
      </AuthProvider> 
    </Themeprovider>
    </BrowserRouter>
  </StrictMode>,  
)
