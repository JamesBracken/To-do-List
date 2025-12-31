import { useContext } from "react";
import { AuthContext } from "../components/authContext/AuthContext";
import { COGNITO_BASE_URL } from "../constants";
import config from "../config.json";

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("Context does not exist")
    const { tokens, setTokens, user, setUser, isAuthenticated, setIsAuthenticated } = context
    return { tokens, setTokens, user, setUser, isAuthenticated, setIsAuthenticated };
}

export const useHandleLogout = () => {
    const resetAuthState = useResetAuthState()
    const logoutFunction = () => {
        resetAuthState()
        window.location.href = `${COGNITO_BASE_URL}logout?client_id=${config.amplify.userPoolClientId}&logout_uri=http%3A%2F%2Flocalhost%3A5173%2F`
    }
    return logoutFunction;

}

export const useResetAuthState = () => {
    const authContext = useContext(AuthContext)
    return () => {
        if (!authContext) throw new Error("Auth context does not exist")
        const { setTokens, setUser, setIsAuthenticated } = authContext;
        const codeVerifier = sessionStorage.getItem("codeVerifier");
        setTokens(null)
        setIsAuthenticated(false)
        setUser(null)
        if (codeVerifier) sessionStorage.removeItem("codeVerifier")
    }
}