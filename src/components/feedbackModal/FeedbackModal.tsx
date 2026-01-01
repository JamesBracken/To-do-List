import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserFeedbackContext } from "../userFeedbackContext/UserFeedbackContext";
import addUserFeedback from "../../services/addUserFeedback";

const FeedbackModal = () => {
    const feedbackContext = useContext(UserFeedbackContext)
    const location = useLocation()
    if (!feedbackContext) throw new Error("Feedback Context does not exist")
    const { userFeedback, setUserFeedback, setIsFeedbackModalOpen } = feedbackContext
    useEffect(() => {
        const sessionMessage = sessionStorage.getItem("userFeedbackMessage")
        const sessionMessageType = sessionStorage.getItem("userFeedbackType");
        console.log("Checking if sessionMessage and type exist:", (sessionMessage && sessionMessageType))

        if (sessionMessage && sessionMessageType) {

            // if (sessionStorage.getItem("userFeedbackMessage") === null) throw new Error("userFeedbackMessage does not exist")

            let type: "message" | "error" = "message";
            if (sessionMessageType === "message" || sessionMessageType === "error") type = sessionMessageType;

            const newFeedback = {
                message: sessionMessage,
                type: type
            }
            addUserFeedback({ newFeedback, setUserFeedback })
            sessionStorage.removeItem("userFeedbackMessage")
            sessionStorage.removeItem("userFeedbackType")
        }
        // adding location.key as a dependency to rerun effect on redirect
    }, [location.key, setUserFeedback])

    if (!userFeedback) return (<></>)

    const currentFeedback = userFeedback[0];
    // PENDING_TASK : EVALUATE NECESSITY OF ISFEEDBACKMODALOPEN STATE
    // if (currentFeedback) setIsFeedbackModalOpen(true)
    if (currentFeedback !== null && currentFeedback !== undefined) {
        return (
            <div className="feedback-modal">
                <div className="feedback-modal__background">
                </div>
                <div className={`${currentFeedback.type === "message" ? "feedback-modal__foreground" : "feedback-modal__foreground-error"} `}>
                    <button onClick={() => {
                        setUserFeedback(prev => prev.slice(1))
                        setIsFeedbackModalOpen(false)
                    }}>X</button>
                    <p className="feedback-modal__foreground-error-message">{currentFeedback.message !== null ? currentFeedback.message : "An error occurred"}</p>;
                </div>
            </div >
        )
    }
    return <></>;
}

export default FeedbackModal;