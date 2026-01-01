import type { Task, Tasks } from "../models/taskModels";

type updateTaskParams = {
    activeEditTask: number | null,
    setActiveEditTask: React.Dispatch<React.SetStateAction<number | null>>
    tasks: Tasks,
    setTasks: React.Dispatch<React.SetStateAction<Tasks>>
}

const updateTask = ({ activeEditTask, tasks, setTasks }: updateTaskParams) => {
    const taskTitleInput = document.getElementById("task-update-modal__foreground-task-title") as HTMLInputElement
    const taskStatus = document.getElementById("task-update-modal__foreground-task-status") as HTMLInputElement
    setTasks(tasks.map((task: Task, index: number) => {
        if (index === activeEditTask) {
            return (
                {
                    "title": taskTitleInput.value ? taskTitleInput.value : "",
                    "status": taskStatus.checked ? "complete" : "incomplete"
                }
            )
        }
        return task;
    }))
}

export default updateTask;