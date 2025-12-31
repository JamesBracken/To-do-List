import { createContext, useState } from "react";

type Feedback = {
    message: string,
    type: "message" | "error",
}

type FeedbackContextType = {
    feedback: Feedback[],
    setFeedback: React.Dispatch<React.SetStateAction<Feedback[]>>
}

export const FeedbackContext = createContext<FeedbackContextType | null>(null)

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState<Feedback[]>([])
    return (
        <FeedbackContext value={{ feedback, setFeedback }}>
            {children}
        </FeedbackContext>
    )
}