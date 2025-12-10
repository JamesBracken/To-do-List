import AddTask from "../components/addTask.tsx/AddTask";
import ToDoList from "../components/toDoList/ToDoList";

const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <AddTask />
            <ToDoList />
        </>
    )

}

export default Home;