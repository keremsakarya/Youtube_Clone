import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VideoProvider } from './context/videoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VideoProvider>
    <App />
    </VideoProvider>
  </StrictMode>,
)
