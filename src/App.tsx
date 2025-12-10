import './App.css';
import Nav from './components/navBar/nav';
import ToDoList from './components/toDoList/ToDoList';
import AddTask from './components/addTask.tsx/AddTask';
import { loginTest } from './login';
import config from "./config.json";
import { generatePKCECredentials } from './PKCEHelper';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AuthCallbackPage from './pages/AuthCallbackPage';

function App() {
  const [PKCECredentials, setPKCECredentials] = useState<string | null>(null);

  useEffect(() => {
    async function getPKCE() {

      const PKCECredentials = await generatePKCECredentials()
      setPKCECredentials(PKCECredentials)
    }
    getPKCE()
  }, [])
  return (
    <BrowserRouter>
      {/* <button id='counter' onClick={() => {
        loginTest()
      }
      }>Click me</button> */}
      <Nav PKCECredentials={PKCECredentials} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
{/* //     <>
     //   <button id='counter' onClick={() => {
    //     loginTest()
    //   }
    //   }>Click me</button>
    //   <Nav PKCECredentials={PKCECredentials}/>
    //   <AddTask />
    //   <ToDoList />
    // </> */}