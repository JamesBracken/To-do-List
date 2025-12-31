import type { Feedback } from "../components/userFeedbackContext/UserFeedbackContext";

type addUserFeedbackParams = {
    newFeedback: Feedback,
    setFeedback: React.Dispatch<React.SetStateAction<Feedback[]>>
}

const addUserFeedback = ({ newFeedback, setFeedback }: addUserFeedbackParams) => {
    setFeedback(prev => [...prev, newFeedback])
}

export default addUserFeedback;