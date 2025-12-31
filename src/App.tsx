import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/navBar/Nav';
import Home from './pages/Home';
import AuthCallbackPage from './pages/AuthCallbackPage';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import ToDoList from './pages/ToDoList';
import { TaskProvider } from './components/taskContext/TaskContext';
import FeedbackModal from './components/feedbackModal/FeedbackModal';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <FeedbackModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/to-do-list" element={
          <TaskProvider>
            <ProtectedRoute>
              <ToDoList />
            </ProtectedRoute>
          </TaskProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App