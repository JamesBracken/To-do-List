import { useContext } from "react"
import { TaskContext } from "../components/taskContext/TaskContext"
import addTask from "../services/addTask";
import type { Task } from "../models/taskModels";

const ToDoList = () => {
    const taskContext = useContext(TaskContext);

    if (!taskContext) throw new Error("taskContext does not exist")
    const { tasks, setTasks } = taskContext;
    // console.log("TaskContext length", tasks.length)
    console.log("tasks type:", typeof tasks)
    console.log("tasks @ ToDoList:", tasks)
    console.log("tasks length @ ToDoList:", tasks.length)

    const taskList = tasks.map((task: Task, i: number) => {
        return (
            // individual task
            // Add in further info such as notes, label etc.
            <div key={i}>
                <h2>{task.title}</h2>
                <p>{task.progress}</p>
            </div>
        )
    })
    return (
        <>
            <label htmlFor="addTaskInput">Add Task</label>
            <input id="addTaskInput"></input>
            <button onClick={() => addTask({ tasks, setTasks })}>+</button>
            {taskList}
        </>
    )
}

export default ToDoList