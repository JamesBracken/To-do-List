import './App.css';
import Nav from './components/navBar/nav';
import ToDoList from './components/toDoList/ToDoList';
import AddTask from './components/addTask.tsx/AddTask';
import { loginTest } from './login';
import config from "./config.json";
import { generatePKCECredentials } from './PKCEHelper';
import { useEffect, useState } from 'react';


function App() {
  const [PKCECredentials, setPKCECredentials]= useState<string | null>(null);

  useEffect(() => {
    async function getPKCE() {

      const PKCECredentials = await generatePKCECredentials()
      setPKCECredentials(PKCECredentials)
    }
    getPKCE()
  }, [])
  return (
    <>
      <button id='counter' onClick={() => {
        loginTest()
      }
      }>Click me</button>
      <Nav PKCECredentials={PKCECredentials}/>
      <AddTask />
      <ToDoList />
    </>
  )
}

export default App