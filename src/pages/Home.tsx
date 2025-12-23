import { isTokenExpired } from "../authHelper";
import AddTask from "../components/addTask.tsx/AddTask";
import ToDoList from "../components/toDoList/ToDoList";
import { AuthContext } from "../components/authContext/AuthContext";
import { useContext } from "react";
const Home = () => {
    const context = useContext(AuthContext);
    const { user } = context
    isTokenExpired(user.exp);
    return (
        <>
            <h1>Home Page</h1>
            <AddTask />
            <ToDoList />
        </>
    )

}

export default Home;