import { createContext, useState } from "react";

export type Feedback = {
    message: string | null,
    type: "message" | "error",
}

type FeedbackContextType = {
    userFeedback: Feedback[],
    setUserFeedback: React.Dispatch<React.SetStateAction<Feedback[]>>,
    isFeedbackModalOpen: boolean,
    setIsFeedbackModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserFeedbackContext = createContext<FeedbackContextType | null>(null)

export const FeedbackProvider = ({ children }) => {
    const [userFeedback, setUserFeedback] = useState<Feedback[]>([])
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    return (
        <UserFeedbackContext value={{ userFeedback, setUserFeedback, isFeedbackModalOpen, setIsFeedbackModalOpen }}>
            {children}
        </UserFeedbackContext>
    )
}