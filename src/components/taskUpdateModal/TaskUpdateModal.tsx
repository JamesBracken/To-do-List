import { useState } from "react";
import type { Tasks } from "../../models/taskModels";
import updateTask from "../../services/updateTask";

type TaskUpdateModalParams = {
    activeEditTask: number | null,
    setActiveEditTask: React.Dispatch<React.SetStateAction<number | null>>
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    tasks: Tasks,
    setTasks: React.Dispatch<React.SetStateAction<Tasks>>
}

const TaskUpdateModal = ({ activeEditTask, setActiveEditTask, setIsOpen, tasks, setTasks }: TaskUpdateModalParams) => {

    if (activeEditTask === null) throw new Error("activeEditTask not found")
    const specifiedTask = tasks[activeEditTask]
    const [taskTitle, setTaskTitle] = useState(specifiedTask.title)
    const [taskStatus, setTaskStatus] = useState(specifiedTask.status === "complete");

    // const taskTitleInput = document.getElementById("task-update-modal__foreground-task-title") as HTMLInputElement;
    // console.log("taskTitleInput:", taskTitleInput)
    // if (taskTitleInput === null) throw new Error("Task title input is null")
    return (
        <div className="task-update-modal">
            <div className="task-update-modal__background">
            </div>
            <div className="task-update-modal__foreground">
                <button onClick={() => setIsOpen(false)}>X</button>
                <label htmlFor="task-update-modal__foreground-task-title">Title</label>
                <input type="text" id="task-update-modal__foreground-task-title" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
                <label htmlFor="task-update-modal__foreground-task-status">Status</label>
                <input type="checkbox" checked={taskStatus} id="task-update-modal__foreground-task-status" onClick={() => setTaskStatus(!taskStatus)} />
                <button id="task-update-modal__foreground-submit" onClick={() => {
                    updateTask({ activeEditTask, setActiveEditTask, tasks, setTasks })
                    setActiveEditTask(null)
                    setIsOpen(false)
                }}>Submit</button>
            </div>
        </div >
    )
}

export default TaskUpdateModal;