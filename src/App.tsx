import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/navBar/Nav';
import Home from './pages/Home';
import AuthCallbackPage from './pages/AuthCallbackPage';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App