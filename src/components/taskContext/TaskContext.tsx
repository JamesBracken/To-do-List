import { createContext, useState } from "react";
import { Task } from "../../models/taskModel";
export const TaskContext = createContext(null)

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState<Task>({})

    return (
        <TaskContext value={{ tasks, setTasks }}>
            {children}
        </TaskContext>
    )
}