export interface Task {
    title: string,
    progress: "complete" | "incomplete" | "past-due-date" // may add archived in future
}