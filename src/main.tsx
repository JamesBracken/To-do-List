import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './components/authContext/AuthContext.tsx'
import { FeedbackProvider } from './components/userFeedbackContext/UserFeedbackContext.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <AuthProvider>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </AuthProvider>
  // </StrictMode>,
)