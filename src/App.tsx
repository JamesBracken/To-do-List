import './App.css';
import Nav from './components/navBar/nav';
import ToDoList from './components/toDoList/ToDoList';
import AddTask from './components/addTask.tsx/AddTask';
import { logIn, loginTest } from './login';
import config from "./config.json";
import { generateCodeVerifier, generateCodeChallenge } from './PKCEHelper';
function App() {
  console.log("generateCodeVerifier:", generateCodeVerifier())
  return (
    <>
      <button id='counter' onClick={() => {
        loginTest()
      }
      }>Click me</button>
      <Nav />
      <AddTask />
      <ToDoList />
    </>
  )
}

export default App