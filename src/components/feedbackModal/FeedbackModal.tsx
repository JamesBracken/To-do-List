import { useContext } from "react";
import { UserFeedbackContext } from "../userFeedbackContext/UserFeedbackContext";

const FeedbackModal = () => {
    // const FeedbackModal = ({ message, type, setIsFeedbackModalOpen }) => {
    const feedbackContext = useContext(UserFeedbackContext)
    if (!feedbackContext) throw new Error("Feedback Context does not exist")
    const { userFeedback, setUserFeedback, isFeedbackModalOpen, setIsFeedbackModalOpen } = feedbackContext
    console.log("userFeedback:", userFeedback)
    if (!userFeedback) return (<></>)

    const currentFeedback = userFeedback[0];
    console.log("currentFeedback: ", currentFeedback)
    let errorMessageElement;
    let messageElement;
    if (currentFeedback) {
        console.log("setting setIsFeedbackModalOpen to true")
        setIsFeedbackModalOpen(true)
        // errorMessageElement = <div className="feedback-modal__foreground-error-message">{currentFeedback.message};
        // messageElement = <div className="feedback-modal__foreground-message">{currentFeedback.message};
    }
    if (currentFeedback !== null && currentFeedback !== undefined) {
        return (
            <div className="feedback-modal">
                <div className="feedback-modal__background">
                </div>
                <div className={`${currentFeedback.type === "message" ? "feedback-modal__foreground" : "feedback-modal__foreground-error" } `}>
                {/* {currentFeedback.type === "message" ? messageElement : errorMessageElement} */}
                <button onClick={() => {
                    setUserFeedback(prev => prev.slice(1))
                    setIsFeedbackModalOpen(false)
                }}>X</button>
                <p className="feedback-modal__foreground-error-message">{currentFeedback.message}</p>;
            </div>
            </div >
        )
    }
return <></>;
}

export default FeedbackModal;