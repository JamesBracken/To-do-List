import { handleLogin } from "../../authHandlers";
import useAuth from "../../hooks/useAuth";
// import { COGNITO_LOGIN_URL } from "../../constants";
import { generatePKCECredentials } from "../../PKCEHelper";
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, tokens } = useAuth();
    if (tokens) {
        console.log("does tokens error exist", tokens.error)
        console.log("tokens", tokens)
    }
    console.log("tokens !== null", tokens !== null)
    console.log("!isAuthenticated", !isAuthenticated)

    if (!tokens || (tokens && tokens?.error)) {
        console.log("if invoking")
        handleLogin()
    }
    return children;
}

export default ProtectedRoute;