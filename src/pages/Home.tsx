// import { useContext, useEffect } from "react";
import { useAuth } from "../hooks/authHooks";
// import { UserFeedbackContext, type Feedback } from "../components/userFeedbackContext/UserFeedbackContext";
// import addUserFeedback from "../services/addUserFeedback";

const Home = () => {
    // FOR USER FEEDBACK TESTING -------------------------
    // const userFeedbackContext = useContext(UserFeedbackContext)
    // if (!userFeedbackContext) throw new Error("User Feedback Context does not exist")
    // const { userFeedback, setUserFeedback } = userFeedbackContext;

    // const newFeedback: Feedback = { message: "Authentication failure, please try again", type: "error" }

    // useEffect(() => {
    //     if (userFeedback.length === 0) {
    //         console.log("adding user feedback")
    //         addUserFeedback({ newFeedback, setUserFeedback })
    //         addUserFeedback({ newFeedback, setUserFeedback })
    //         addUserFeedback({ newFeedback, setUserFeedback })
    //     }
    // }, [])
    const { tokens, setTokens, user, setUser, isAuthenticated, setIsAuthenticated } = useAuth();
    console.log("tokens in HOME:", tokens)
    return (
        <>
            <h1>Home Page</h1>
            <p>{tokens ? tokens.id_token : "none"}</p>
        </>
    )

}

export default Home;